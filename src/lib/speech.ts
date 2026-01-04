// Web Speech API utility for pronunciation audio
// Supports both British (en-GB) and American (en-US) English accents

export type Accent = 'uk' | 'us';

interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
}

class SpeechService {
  private synth: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private voicesLoaded: Promise<void>;

  constructor() {
    this.synth = window.speechSynthesis;
    this.voicesLoaded = this.loadVoices();
  }

  private loadVoices(): Promise<void> {
    return new Promise((resolve) => {
      const loadVoicesSync = () => {
        this.voices = this.synth.getVoices();
        if (this.voices.length > 0) {
          resolve();
        }
      };

      loadVoicesSync();

      if (this.voices.length === 0) {
        this.synth.addEventListener('voiceschanged', () => {
          loadVoicesSync();
        });
        // Fallback timeout
        setTimeout(resolve, 2000);
      }
    });
  }

  private getVoiceForAccent(accent: Accent): SpeechSynthesisVoice | null {
    const langCode = accent === 'uk' ? 'en-GB' : 'en-US';
    
    // Priority: find native voices first, then any matching voice
    const nativeVoice = this.voices.find(
      (voice) => voice.lang === langCode && !voice.localService
    );
    
    if (nativeVoice) return nativeVoice;
    
    const localVoice = this.voices.find(
      (voice) => voice.lang === langCode
    );
    
    if (localVoice) return localVoice;
    
    // Fallback: any English voice
    const anyEnglish = this.voices.find(
      (voice) => voice.lang.startsWith('en')
    );
    
    return anyEnglish || null;
  }

  async speak(text: string, accent: Accent, options: SpeechOptions = {}): Promise<void> {
    await this.voicesLoaded;
    
    // Cancel any ongoing speech
    this.synth.cancel();
    
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(text);
      
      const voice = this.getVoiceForAccent(accent);
      if (voice) {
        utterance.voice = voice;
      }
      
      utterance.lang = accent === 'uk' ? 'en-GB' : 'en-US';
      utterance.rate = options.rate ?? 0.85; // Slightly slower for clarity
      utterance.pitch = options.pitch ?? 1;
      utterance.volume = options.volume ?? 1;
      
      utterance.onend = () => resolve();
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        reject(event);
      };
      
      this.synth.speak(utterance);
    });
  }

  stop(): void {
    this.synth.cancel();
  }

  get isSupported(): boolean {
    return 'speechSynthesis' in window;
  }

  async getAvailableVoices(): Promise<{ uk: string[]; us: string[] }> {
    await this.voicesLoaded;
    
    const ukVoices = this.voices
      .filter((v) => v.lang === 'en-GB')
      .map((v) => v.name);
    
    const usVoices = this.voices
      .filter((v) => v.lang === 'en-US')
      .map((v) => v.name);
    
    return { uk: ukVoices, us: usVoices };
  }
}

// Singleton instance
let speechServiceInstance: SpeechService | null = null;

export function getSpeechService(): SpeechService {
  if (!speechServiceInstance) {
    speechServiceInstance = new SpeechService();
  }
  return speechServiceInstance;
}

// Hook for React components
import { useState, useCallback } from 'react';

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentAccent, setCurrentAccent] = useState<Accent | null>(null);

  const speak = useCallback(async (text: string, accent: Accent) => {
    const service = getSpeechService();
    
    if (!service.isSupported) {
      console.warn('Speech synthesis not supported in this browser');
      return;
    }

    try {
      setIsSpeaking(true);
      setCurrentAccent(accent);
      await service.speak(text, accent);
    } catch (error) {
      console.error('Error speaking:', error);
    } finally {
      setIsSpeaking(false);
      setCurrentAccent(null);
    }
  }, []);

  const stop = useCallback(() => {
    const service = getSpeechService();
    service.stop();
    setIsSpeaking(false);
    setCurrentAccent(null);
  }, []);

  return {
    speak,
    stop,
    isSpeaking,
    currentAccent,
    isSupported: typeof window !== 'undefined' && 'speechSynthesis' in window,
  };
}
