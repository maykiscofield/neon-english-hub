import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Volume2, ChevronDown, ChevronUp, Bookmark, BookmarkCheck, AudioLines } from 'lucide-react';
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

const VoiceAura = ({ color = 'emerald' }: { color?: string }) => {
  const colorMap: Record<string, string[]> = {
    rose: ["#fb7185", "#e11d48", "#fb7185"],
    amber: ["#fbbf24", "#d97706", "#fbbf24"],
    violet: ["#d8b4fe", "#a855f7", "#d8b4fe"], 
    emerald: ["#34d399", "#10b981", "#34d399"]
  };
  const activeColors = colorMap[color] || colorMap.emerald;

  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <motion.div
        className={`absolute inset-0 bg-${color}-500/40 blur-md rounded-full`}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="flex gap-[3px] items-center h-4 relative z-10">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`w-[3px] rounded-full shadow-[0_0_8px_${activeColors[0]}]`}
            animate={{ 
              height: ["30%", "100%", "40%", "80%", "30%"],
              backgroundColor: activeColors
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
};

export function WordCard({ word, showExamples = true, compact = false }: WordCardProps) {
  const [isExpanded, setIsExpanded] = useState(!compact);
  const [activeCollocation, setActiveCollocation] = useState<string | null>(null);
  const [activeMeaning, setActiveMeaning] = useState<{word: string, meaning: string, pos?: string, color?: string} | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  
  const { toggleSaveWord, isWordSaved } = useLearning();
  const saved = isWordSaved(word.id);
  const { speak, isSpeaking, currentAccent, isSupported } = useSpeech();

  const playAudio = async (text: string, accent: Accent, buttonId: string) => {
    if (!isSupported) return;
    setPlayingId(buttonId);
    await speak(text, accent);
    setPlayingId(null);
  };

  const handleItemClick = (item: { word: string, meaning: string, pos?: string }, color: string) => {
    setActiveMeaning(activeMeaning?.word === item.word ? null : { ...item, color });
    setActiveCollocation(null); 
  };

  const handleCollocationClick = (coll: string) => {
    setActiveCollocation(activeCollocation === coll ? null : coll);
    setActiveMeaning(null);
  };

  const currentThemeColor = activeCollocation ? 'amber' : (activeMeaning?.color || 'emerald');

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
      {/* HEADER SECTION */}
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
                onClick={() => playAudio(word.word, 'uk', 'header-uk')} 
                disabled={isSpeaking} 
                className="relative overflow-visible group/btn"
              >
                {isSpeaking && playingId === 'header-uk' ? <VoiceAura color="emerald" /> : <Volume2 className="w-4 h-4 group-hover/btn:text-emerald-400 transition-colors" />}
              </Button>
              <span className="text-xs font-bold opacity-40">UK</span>
              <Button 
                variant="ghost" 
                size="icon-sm" 
                onClick={() => playAudio(word.word, 'us', 'header-us')} 
                disabled={isSpeaking} 
                className="relative overflow-visible group/btn"
              >
                {isSpeaking && playingId === 'header-us' ? <VoiceAura color="emerald" /> : <Volume2 className="w-4 h-4 group-hover/btn:text-emerald-400 transition-colors" />}
              </Button>
              <span className="text-xs font-bold opacity-40">US</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => toggleSaveWord(word.id)} className={saved ? 'text-emerald-400' : 'text-muted-foreground hover:text-emerald-400'}>
          {saved ? <BookmarkCheck className="w-6 h-6 fill-emerald-500/20" /> : <Bookmark className="w-6 h-6" />}
        </Button>
      </div>

      <div className="mb-6">
        <p className="text-foreground/90 leading-relaxed italic mb-3">{word.definition}</p>
        <motion.div key={word.id} variants={trBoxVariants} initial="initial" animate="flash" className="flex items-center gap-3 p-3 rounded-lg border border-emerald-500/20">
          <span className="px-2 py-0.5 text-[10px] font-black bg-emerald-500 text-black rounded uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.4)]">TR</span>
          <p className="text-lg font-bold text-white tracking-tight">{word.meaning}</p>
        </motion.div>

        {word.wordFamily && word.wordFamily.length > 0 && (
          <div className="mt-2 px-1 flex flex-wrap gap-x-3 items-baseline">
            <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground/40 italic">Related Forms:</span>
            {word.wordFamily.map((member, idx) => (
              <button 
                key={member.word} 
                onClick={() => handleItemClick(member, 'violet')}
                className={`text-xs font-bold transition-all border-b border-dotted py-0.5 flex items-center gap-1.5 ${activeMeaning?.word === member.word ? 'text-violet-300 border-violet-300 drop-shadow-[0_0_5px_rgba(167,139,250,0.5)]' : 'text-violet-400/80 border-white/10 hover:text-violet-300'}`}
              >
                {member.word} 
                <span className="px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 text-[7px] font-black uppercase text-violet-300 tracking-tighter">
                  {member.pos}
                </span>
                {idx < word.wordFamily!.length - 1 && <span className="text-muted-foreground/20 ml-2">|</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 font-sans">Vocabulary Relations</p>
          <div className="space-y-3 px-1">
            {word.synonyms && word.synonyms.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[9px] font-black uppercase text-emerald-500/50 w-16 text-left">Synonyms:</span>
                {word.synonyms.map((syn) => (
                  <button 
                    key={syn.word} 
                    onClick={() => handleItemClick(syn, 'emerald')}
                    className={`px-2 py-1 text-[11px] font-bold rounded border transition-all uppercase tracking-tighter italic border-b-2 border-dotted ${activeMeaning?.word === syn.word ? 'bg-emerald-500 text-black border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400/90 hover:border-emerald-500/30'}`}
                  >
                    {syn.word}
                  </button>
                ))}
              </div>
            )}
            {word.antonyms && word.antonyms.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[9px] font-black uppercase text-rose-500/50 w-16 text-left">Antonyms:</span>
                {word.antonyms.map((ant) => (
                  <button 
                    key={ant.word} 
                    onClick={() => handleItemClick(ant, 'rose')}
                    className={`px-2 py-1 text-[11px] font-bold rounded border transition-all uppercase tracking-tighter italic border-b-2 border-dotted ${activeMeaning?.word === ant.word ? 'bg-rose-500 text-white border-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : 'bg-rose-500/5 border-rose-500/10 text-rose-400/90 hover:border-rose-500/30'}`}
                  >
                    {ant.word}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 font-sans">Common Collocations</p>
          <div className="flex flex-wrap gap-2">
            {word.collocations?.map((collocation) => (
              <button
                key={collocation}
                onClick={() => handleCollocationClick(collocation)}
                className={`px-3 py-1.5 text-xs font-black rounded-lg border transition-all duration-300 uppercase italic tracking-tighter ${
                  activeCollocation === collocation
                    ? 'bg-amber-500 border-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                    : 'bg-amber-500/5 border-amber-500/10 text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/10'
                }`}
              >
                {collocation}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {(activeMeaning || (activeCollocation && word.collocationMeanings?.[activeCollocation])) && (
          <motion.div
            key="dynamic-panel"
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: 'auto', opacity: 1, marginBottom: '1rem' }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            className="overflow-hidden"
          >
            <div className="w-full bg-white/[0.02] rounded-2xl border border-white/5 flex items-center px-6 py-3 gap-4 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              {/* EN SOLDİ IKON: ARTIK SEÇİLİ TEMANIN RENGİNDE CANLI PARLAR */}
              <AudioLines className={`text-${currentThemeColor}-400 shrink-0`} size={20} />
              <div className="flex flex-col sm:flex-row sm:items-center flex-1 min-w-0 gap-1 sm:gap-2">
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-${currentThemeColor}-400 font-bold uppercase tracking-tighter text-lg drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]`}>
                    {activeMeaning ? activeMeaning.word : activeCollocation}
                  </span>
                  {activeMeaning?.pos && (
                    <span className={`px-2 py-0.5 rounded ${
                      activeMeaning.color === 'rose' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 
                      activeMeaning.color === 'violet' ? 'bg-violet-500/20 border-violet-500/30 text-violet-300' : 
                      'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    } border text-[8px] font-black uppercase tracking-widest`}>
                      {activeMeaning.pos}
                    </span>
                  )}
                </div>
                <p className="text-base font-medium text-white/90 italic leading-snug">
                  : {activeMeaning ? activeMeaning.meaning : word.collocationMeanings![activeCollocation!]}
                </p>
              </div>
              
              <div className="flex items-center gap-2 bg-black/40 p-1.5 px-2 rounded-full border border-white/10 shrink-0 ml-auto shadow-lg">
                {/* UK BUTONU: ARTIK TEMANIN RENGİNDE PARLIYOR */}
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => playAudio(activeMeaning ? activeMeaning.word : activeCollocation!, 'uk', 'strip-uk')} 
                    className={`p-1 hover:bg-${currentThemeColor}-500/20 rounded-full transition-all`}
                  >
                    {isSpeaking && playingId === 'strip-uk' ? <VoiceAura color={currentThemeColor} /> : <Volume2 className={`w-4 h-4 text-${currentThemeColor}-400`} size={16}/>}
                  </button>
                  <span className="text-[9px] font-bold opacity-30 uppercase">UK</span>
                </div>
                <div className="w-[1px] h-4 bg-white/10" />
                {/* US BUTONU: ARTIK TEMANIN RENGİNDE PARLIYOR */}
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => playAudio(activeMeaning ? activeMeaning.word : activeCollocation!, 'us', 'strip-us')} 
                    className={`p-1 hover:bg-${currentThemeColor}-500/20 rounded-full transition-all`}
                  >
                    {isSpeaking && playingId === 'strip-us' ? <VoiceAura color={currentThemeColor} /> : <Volume2 className={`w-4 h-4 text-${currentThemeColor}-400`} size={16}/>}
                  </button>
                  <span className="text-[9px] font-bold opacity-30 uppercase">US</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER EXAMPLES */}
      {showExamples && word.examples.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted-foreground hover:text-emerald-400 mb-4 italic font-heading">
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            Usage Examples
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
    <li className="list-none group/ex">
      <button onClick={() => setShow(!show)} className="text-left w-full text-sm text-white/60 font-light leading-relaxed italic group-hover/ex:text-white/90 transition-colors">
        "{text}"
      </button>
      <AnimatePresence>
        {show && translation && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="mt-2 flex items-center gap-3">
            <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[13px] text-emerald-400/70 font-semibold tracking-tight border-l border-emerald-500/20 pl-4">{translation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}