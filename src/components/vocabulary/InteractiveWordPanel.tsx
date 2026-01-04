import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/types/learning';
import { useSpeech, Accent } from '@/lib/speech';

interface InteractiveWordPanelProps {
  word: VocabularyWord | null;
  onClose: () => void;
  position?: { x: number; y: number };
}

export function InteractiveWordPanel({ word, onClose, position }: InteractiveWordPanelProps) {
  const { speak, isSpeaking, currentAccent, isSupported } = useSpeech();

  if (!word) return null;

  const playAudio = async (accent: Accent) => {
    if (!isSupported) {
      console.warn('Speech synthesis not supported');
      return;
    }
    await speak(word.word, accent);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="fixed z-50 w-80 p-4 rounded-xl bg-card border border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
        style={{
          left: position ? Math.min(position.x, window.innerWidth - 340) : '50%',
          top: position ? position.y + 20 : '50%',
          transform: position ? 'none' : 'translate(-50%, -50%)',
        }}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Word Header */}
        <div className="mb-3">
          <h4 className="font-heading text-xl font-bold text-primary mb-1">
            {word.word}
          </h4>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-mono text-muted-foreground">{word.ipa}</span>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => playAudio('uk')}
                disabled={isSpeaking}
                className={`h-6 w-6 hover:text-primary ${
                  isSpeaking && currentAccent === 'uk' ? 'text-primary' : ''
                }`}
              >
                {isSpeaking && currentAccent === 'uk' ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <Volume2 className="w-3 h-3" />
                )}
              </Button>
              <span className="text-xs text-muted-foreground">UK</span>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => playAudio('us')}
                disabled={isSpeaking}
                className={`h-6 w-6 hover:text-primary ${
                  isSpeaking && currentAccent === 'us' ? 'text-primary' : ''
                }`}
              >
                {isSpeaking && currentAccent === 'us' ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <Volume2 className="w-3 h-3" />
                )}
              </Button>
              <span className="text-xs text-muted-foreground">US</span>
            </div>
          </div>
        </div>

        {/* Definition */}
        <p className="text-sm text-foreground mb-3 leading-relaxed">
          {word.definition}
        </p>

        {/* Usage Note */}
        {word.usageNotes && (
          <p className="text-xs text-muted-foreground mb-3 p-2 bg-primary/5 rounded-md border border-primary/20">
            <span className="font-medium text-primary">Note: </span>
            {word.usageNotes}
          </p>
        )}

        {/* Example */}
        {word.examples[0] && (
          <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-2">
            "{word.examples[0]}"
          </p>
        )}

        {/* View Full Entry Link */}
        <Button
          variant="neon-ghost"
          size="sm"
          className="w-full mt-3 text-xs"
        >
          View full entry
          <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
