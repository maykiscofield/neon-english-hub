import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  ChevronDown, 
  ChevronUp, 
  Bookmark, 
  BookmarkCheck, 
  Loader2, 
  CheckCircle2, 
  Circle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/types/learning';
import { LevelBadge } from '@/components/dashboard/LevelBadge';
import { useSpeech, Accent } from '@/lib/speech';
import { useLearning } from '@/contexts/LearningContext';

interface WordCardProps {
  word: VocabularyWord;
  showExamples?: boolean;
  compact?: boolean;
}

export function WordCard({ word, showExamples = true, compact = false }: WordCardProps) {
  const [isExpanded, setIsExpanded] = useState(!compact);
  const [activeCollocation, setActiveCollocation] = useState<string | null>(null);
  
  const { toggleSaveWord, isWordSaved, updateProgress } = useLearning();
  const saved = isWordSaved(word.id);
  const { speak, isSpeaking, currentAccent, isSupported } = useSpeech();

  const playAudio = async (text: string, accent: Accent) => {
    if (!isSupported) return;
    await speak(text, accent);
  };

  const handleStatusUpdate = (isKnown: boolean) => {
    if (updateProgress) {
      updateProgress(word.id, isKnown);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all backdrop-blur-sm shadow-xl relative group"
    >
      {/* Header Section */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-heading text-2xl font-bold text-primary italic uppercase tracking-tighter">
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
                onClick={() => playAudio(word.word, 'uk')}
                disabled={isSpeaking}
                className={isSpeaking && currentAccent === 'uk' ? 'text-primary animate-pulse' : ''}
              >
                {isSpeaking && currentAccent === 'uk' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              <span className="text-xs font-bold opacity-40">UK</span>
              
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => playAudio(word.word, 'us')}
                disabled={isSpeaking}
                className={isSpeaking && currentAccent === 'us' ? 'text-primary animate-pulse' : ''}
              >
                {isSpeaking && currentAccent === 'us' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              <span className="text-xs font-bold opacity-40">US</span>
            </div>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleSaveWord(word.id)}
          className={saved ? 'text-primary' : 'text-muted-foreground hover:text-primary'}
        >
          {saved ? <BookmarkCheck className="w-6 h-6 fill-primary/20" /> : <Bookmark className="w-6 h-6" />}
        </Button>
      </div>

      {/* Meaning Section */}
      <div className="mb-6">
        <p className="text-foreground/90 leading-relaxed italic mb-3">
          {word.definition}
        </p>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20 shadow-[inset_0_0_20px_rgba(var(--primary),0.05)]">
          <span className="px-2 py-0.5 text-[10px] font-black bg-primary text-black rounded uppercase tracking-tighter">TR</span>
          <p className="text-lg font-bold text-white tracking-tight">{word.meaning}</p>
        </div>
      </div>

      {/* Collocations Section - INTERACTIVE */}
      <div className="space-y-3 mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Common Collocations</p>
        <div className="flex flex-wrap gap-2">
          {word.collocations?.map((collocation) => (
            <button
              key={collocation}
              onClick={() => setActiveCollocation(activeCollocation === collocation ? null : collocation)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300 uppercase tracking-tighter ${
                activeCollocation === collocation
                  ? 'bg-primary border-primary text-black shadow-[0_0_15px_rgba(var(--primary),0.3)]'
                  : 'bg-accent/30 border-border/50 text-accent-foreground hover:border-primary/40'
              }`}
            >
              {collocation}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {activeCollocation && word.collocationMeanings?.[activeCollocation] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-3 rounded-xl bg-secondary/10 border border-secondary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <p className="text-sm font-bold text-secondary-foreground italic">
                  <span className="opacity-50 font-normal lowercase mr-2">meaning:</span>
                  {word.collocationMeanings[activeCollocation]}
                </p>
              </div>
              
              <div className="flex items-center gap-4 bg-black/20 p-1 px-3 rounded-full border border-white/5">
                 <Button variant="ghost" size="icon-sm" className="h-7 w-7 hover:text-secondary" onClick={() => playAudio(activeCollocation, 'uk')}>
                    <Volume2 className="w-3.5 h-3.5" />
                 </Button>
                 <Button variant="ghost" size="icon-sm" className="h-7 w-7 hover:text-secondary" onClick={() => playAudio(activeCollocation, 'us')}>
                    <Volume2 className="w-3.5 h-3.5" />
                 </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Examples Section - CLICK TO REVEAL TRANSLATION */}
      {showExamples && word.examples.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-4 font-heading"
          >
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            Usage Examples <span className="text-[10px] opacity-30 normal-case font-normal">(Click sentence to translate)</span>
          </button>
          
          {isExpanded && (
            <ul className="space-y-4 pl-3 border-l-2 border-primary/20">
              {word.examples.map((example, index) => (
                <ExampleItem 
                  key={index} 
                  text={example} 
                  translation={word.exampleTranslations?.[index]} 
                />
              ))}
            </ul>
          )}
        </div>
      )}

      {/* FOOTER: KNOWLEDGE STATUS BUTTONS */}
      <div className="flex gap-3 mt-6 pt-6 border-t border-white/5">
        <Button
          onClick={() => handleStatusUpdate(true)}
          className="flex-1 bg-primary/10 hover:bg-primary border border-primary/20 hover:text-black transition-all duration-500 rounded-xl py-6 gap-2 group/status shadow-lg shadow-primary/5"
        >
          <CheckCircle2 className="w-5 h-5 text-primary group-hover/status:text-black" />
          <span className="font-black uppercase tracking-tighter">Mastered</span>
        </Button>
        <Button
          onClick={() => handleStatusUpdate(false)}
          variant="outline"
          className="flex-1 bg-red-500/5 hover:bg-red-500 border-white/5 hover:border-red-500 transition-all duration-500 rounded-xl py-6 gap-2 group/learning"
        >
          <Circle className="w-5 h-5 opacity-40 group-hover/learning:opacity-100" />
          <span className="font-black uppercase tracking-tighter text-gray-400 group-hover/learning:text-white transition-colors">Learning</span>
        </Button>
      </div>
    </motion.div>
  );
}

// YARDIMCI BİLEŞEN: Cümle Çevirisi Reveal Sistemi
function ExampleItem({ text, translation }: { text: string; translation?: string }) {
  const [show, setShow] = useState(false);

  return (
    <li className="list-none">
      <button
        onClick={() => setShow(!show)}
        className="text-left w-full text-sm text-muted-foreground/90 hover:text-white transition-all leading-relaxed italic"
      >
        "{text}"
      </button>
      
      <AnimatePresence>
        {show && translation && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="mt-2 flex items-center gap-2"
          >
            <div className="h-1 w-1 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),1)]" />
            <p className="text-[12px] font-bold text-primary tracking-wide bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
              {translation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}