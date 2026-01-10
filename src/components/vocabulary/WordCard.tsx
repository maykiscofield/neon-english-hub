import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Volume2, ChevronDown, ChevronUp, Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/types/learning';
import { LevelBadge } from '@/components/dashboard/LevelBadge';
import { useSpeech, Accent } from '@/lib/speech';
import { useLearning } from '@/contexts/LearningContext';

// TypeScript hatasını gideren interface tanımı
interface WordCardProps {
  word: VocabularyWord;
  showExamples?: boolean;
  compact?: boolean;
}

// ULTRA MODERN GLOW-FLOW SES ANİMASYONU (Siri Stili)
const VoiceAura = () => (
  <div className="relative flex items-center justify-center w-6 h-6">
    {/* Arka plandaki yumuşak neon parlama - Emerald Neon temasıyla uyumlu */}
    <motion.div
      className="absolute inset-0 bg-emerald-500/30 blur-md rounded-full"
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Akışkan ses dalgaları - Modern Frekans Tasarımı */}
    <div className="flex gap-[3px] items-center h-4 relative z-10">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          animate={{ 
            height: ["30%", "100%", "40%", "80%", "30%"],
            backgroundColor: ["#34d399", "#10b981", "#34d399"]
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity, 
            delay: i * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  </div>
);

export function WordCard({ word, showExamples = true, compact = false }: WordCardProps) {
  const [isExpanded, setIsExpanded] = useState(!compact);
  const [activeCollocation, setActiveCollocation] = useState<string | null>(null);
  const { toggleSaveWord, isWordSaved } = useLearning();
  const saved = isWordSaved(word.id);
  const { speak, isSpeaking, currentAccent, isSupported } = useSpeech();

  const playAudio = async (text: string, accent: Accent) => {
    if (!isSupported) return;
    await speak(text, accent);
  };

  const trBoxVariants: Variants = {
    initial: { backgroundColor: "rgba(16, 185, 129, 0.1)", boxShadow: "inset 0 0 20px rgba(16, 185, 129, 0.05)" },
    flash: { 
      backgroundColor: ["rgba(16, 185, 129, 0.1)", "rgba(16, 185, 129, 0.4)", "rgba(16, 185, 129, 0.1)"],
      boxShadow: ["inset 0 0 20px rgba(16, 185, 129, 0.05)", "0 0 30px rgba(16, 185, 129, 0.6)", "inset 0 0 20px rgba(16, 185, 129, 0.05)"],
      transition: { duration: 0.7, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all backdrop-blur-sm shadow-xl relative group"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-heading text-2xl font-bold text-emerald-400 italic uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
              {word.word}
            </h3>
            {word.pos && (
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black uppercase text-emerald-300 italic tracking-[0.2em]">
                {word.pos}
              </span>
            )}
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
                className="relative overflow-visible group/btn"
              >
                {isSpeaking && currentAccent === 'uk' ? <VoiceAura /> : <Volume2 className="w-4 h-4 group-hover/btn:text-emerald-400 transition-colors" />}
              </Button>
              <span className="text-xs font-bold opacity-40">UK</span>
              
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => playAudio(word.word, 'us')}
                disabled={isSpeaking}
                className="relative overflow-visible group/btn"
              >
                {isSpeaking && currentAccent === 'us' ? <VoiceAura /> : <Volume2 className="w-4 h-4 group-hover/btn:text-emerald-400 transition-colors" />}
              </Button>
              <span className="text-xs font-bold opacity-40">US</span>
            </div>
          </div>
        </div>
        
        <Button
          variant="ghost" size="icon" onClick={() => toggleSaveWord(word.id)}
          className={saved ? 'text-emerald-400' : 'text-muted-foreground hover:text-emerald-400'}
        >
          {saved ? <BookmarkCheck className="w-6 h-6 fill-emerald-500/20" /> : <Bookmark className="w-6 h-6" />}
        </Button>
      </div>

      <div className="mb-6">
        <p className="text-foreground/90 leading-relaxed italic mb-3">{word.definition}</p>
        <motion.div
          key={word.id} variants={trBoxVariants} initial="initial" animate="flash"
          className="flex items-center gap-3 p-3 rounded-lg border border-emerald-500/20"
        >
          <span className="px-2 py-0.5 text-[10px] font-black bg-emerald-500 text-black rounded uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.4)]">TR</span>
          <p className="text-lg font-bold text-white tracking-tight">{word.meaning}</p>
        </motion.div>
      </div>

      <div className="space-y-3 mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 font-sans">Common Collocations</p>
        <div className="flex flex-wrap gap-2">
          {word.collocations?.map((collocation) => (
            <button
              key={collocation}
              onClick={() => setActiveCollocation(activeCollocation === collocation ? null : collocation)}
              className={`px-3 py-1.5 text-xs font-black rounded-lg border transition-all duration-300 uppercase italic tracking-tighter ${
                activeCollocation === collocation
                  ? 'bg-emerald-500 border-emerald-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                  : 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10'
              }`}
            >
              {collocation}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {activeCollocation && word.collocationMeanings?.[activeCollocation] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <p className="text-sm font-bold text-emerald-50 italic">
                  <span className="opacity-40 font-black uppercase text-[9px] mr-2 text-emerald-400 non-italic">Meaning:</span>
                  {word.collocationMeanings[activeCollocation]}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-black/40 p-1 px-2 rounded-full border border-emerald-500/10">
                 <Button variant="ghost" size="icon-sm" className="h-8 w-8 text-emerald-400/70 relative overflow-visible" onClick={() => playAudio(activeCollocation, 'uk')}>
                    {isSpeaking && currentAccent === 'uk' ? <VoiceAura /> : <Volume2 className="w-3.5 h-3.5" />}
                 </Button>
                 <Button variant="ghost" size="icon-sm" className="h-8 w-8 text-emerald-400/70 relative overflow-visible" onClick={() => playAudio(activeCollocation, 'us')}>
                    {isSpeaking && currentAccent === 'us' ? <VoiceAura /> : <Volume2 className="w-3.5 h-3.5" />}
                 </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showExamples && word.examples.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted-foreground hover:text-emerald-400 mb-4 italic font-heading"
          >
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            Usage Examples <span className="text-[9px] opacity-30 normal-case ml-2">(Click to translate)</span>
          </button>
          {isExpanded && (
            <ul className="space-y-4 pl-3 border-l-2 border-emerald-500/20">
              {word.examples.map((example, index) => (
                <ExampleItem key={index} text={example} translation={word.exampleTranslations?.[index]} />
              ))}
            </ul>
          )}
        </div>
      )}
    </motion.div>
  );
}

function ExampleItem({ text, translation }: { text: string; translation?: string }) {
  const [show, setShow] = useState(false);
  return (
    <li className="list-none">
      <button onClick={() => setShow(!show)} className="text-left w-full text-sm text-muted-foreground/90 hover:text-white leading-relaxed italic">
        "{text}"
      </button>
      <AnimatePresence>
        {show && translation && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="mt-2 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
            <p className="text-[12px] font-bold text-emerald-400 tracking-wide bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
              {translation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}