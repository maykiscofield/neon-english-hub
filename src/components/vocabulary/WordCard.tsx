import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, ChevronDown, ChevronUp, Bookmark, BookmarkCheck, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/types/learning';
import { LevelBadge } from '@/components/dashboard/LevelBadge';
import { useSpeech, Accent } from '@/lib/speech';
import { useLearning } from '@/contexts/LearningContext'; // 1. Context'i import et

interface WordCardProps {
  word: VocabularyWord;
  showExamples?: boolean;
  compact?: boolean;
}

export function WordCard({ word, showExamples = true, compact = false }: WordCardProps) {
  const [isExpanded, setIsExpanded] = useState(!compact);
  
  // 2. Local state yerine Context'ten gelen fonksiyonları ve listeyi kullan
  const { toggleSaveWord, isWordSaved } = useLearning();
  const saved = isWordSaved(word.id);

  const { speak, isSpeaking, currentAccent, isSupported } = useSpeech();

  const playAudio = async (accent: Accent) => {
    if (!isSupported) {
      console.warn('Speech synthesis not supported');
      return;
    }
    await speak(word.word, accent);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all backdrop-blur-sm"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-heading text-2xl font-bold text-primary">
              {word.word}
            </h3>
            <LevelBadge level={word.level} size="sm" showLabel={false} />
          </div>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-mono text-sm">{word.ipa}</span>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => playAudio('uk')}
                disabled={isSpeaking}
                className={`hover:text-primary transition-all ${
                  isSpeaking && currentAccent === 'uk' ? 'text-primary animate-pulse' : ''
                }`}
              >
                {isSpeaking && currentAccent === 'uk' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
                <span className="sr-only">UK pronunciation</span>
              </Button>
              <span className="text-xs">UK</span>
              
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => playAudio('us')}
                disabled={isSpeaking}
                className={`hover:text-primary transition-all ${
                  isSpeaking && currentAccent === 'us' ? 'text-primary animate-pulse' : ''
                }`}
              >
                {isSpeaking && currentAccent === 'us' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
                <span className="sr-only">US pronunciation</span>
              </Button>
              <span className="text-xs">US</span>
            </div>
          </div>
        </div>
        
        {/* 3. Buton artık Context'teki fonksiyonu tetikliyor */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleSaveWord(word.id)}
          className={saved ? 'text-primary' : 'text-muted-foreground hover:text-primary'}
        >
          {saved ? (
            <BookmarkCheck className="w-6 h-6 fill-primary/20" /> 
          ) : (
            <Bookmark className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Definition */}
      <div className="mb-4">
        <p className="text-foreground/90 leading-relaxed italic">
          {word.definition}
        </p>
      </div>

      {/* Usage Notes */}
      {word.usageNotes && (
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">Note: </span>
            {word.usageNotes}
          </p>
        </div>
      )}

      {/* Collocations */}
      {word.collocations && word.collocations.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {word.collocations.map((collocation) => (
            <span
              key={collocation}
              className="px-2 py-1 text-xs font-medium bg-accent/30 border border-border/50 rounded text-accent-foreground"
            >
              {collocation}
            </span>
          ))}
        </div>
      )}

      {/* Examples Section */}
      {showExamples && word.examples.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-3"
          >
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            Usage Examples
          </button>
          
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-3 pl-3 border-l border-primary/20"
            >
              {word.examples.map((example, index) => (
                <li key={index} className="text-sm text-muted-foreground leading-snug">
                  "{example}"
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      )}
    </motion.div>
  );
}