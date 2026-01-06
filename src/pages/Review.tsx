import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  Archive, CheckCircle2, Volume2, Rocket, 
  BrainCircuit, Zap, RotateCcw 
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { getWordById } from '@/data/vocabulary';
import { Navigate, Link } from 'react-router-dom';

const Review = () => {
  const { isOnboarded, getProblematicWords } = useLearning();
  const [view, setView] = useState<'swipe' | 'archive'>('swipe');
  
  const problematicIds = getProblematicWords();
  const [sessionWords, setSessionWords] = useState(() => 
    problematicIds.map(id => getWordById(id)).filter(Boolean)
  );
  const [learnedWords, setLearnedWords] = useState<any[]>([]);

  if (!isOnboarded) return <Navigate to="/onboarding" replace />;

  const handleSwipe = (id: string, direction: 'right' | 'left') => {
    const word = sessionWords.find(w => w.id === id);
    if (direction === 'right' && word) {
      setLearnedWords(prev => [...prev, word]);
    }
    setSessionWords(prev => prev.filter(w => w.id !== id));
  };

  const moveToReview = (word: any) => {
    setLearnedWords(prev => prev.filter(w => w.id !== word.id));
    setSessionWords(prev => [word, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#030005] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#05010d] to-[#030005] text-slate-200 overflow-hidden font-sans">
      <Navbar />
      
      {/* Neon Arka Plan Efektleri */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
      <div className="fixed bottom-1/4 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>

      <main className="pt-24 pb-12 container mx-auto px-4 max-w-lg relative z-10">
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
            Review Lab
          </h1>
          <p className="text-[11px] text-cyan-300/70 font-bold uppercase tracking-[0.4em] mt-2">
            Quick Slide Mode Active
          </p>
        </div>

        {/* Sekme Değiştirici */}
        <div className="flex bg-slate-900/60 p-1.5 rounded-full mb-10 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] relative">
          <div className={`absolute inset-y-1.5 w-1/2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full transition-all duration-300 ease-out ${view === 'swipe' ? 'left-1.5' : 'left-[calc(50%-0.375rem)] translate-x-full'}`}></div>
          
          <button onClick={() => setView('swipe')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all relative z-10 font-black italic uppercase text-[10px] tracking-[0.2em] ${view === 'swipe' ? 'text-cyan-100' : 'text-slate-500 hover:text-cyan-300'}`}>
            <Zap size={14} /> Quick Slide
          </button>
          <button onClick={() => setView('archive')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all relative z-10 font-black italic uppercase text-[10px] tracking-[0.2em] ${view === 'archive' ? 'text-purple-100' : 'text-slate-500 hover:text-purple-300'}`}>
            <Archive size={14} /> Learned ({learnedWords.length})
          </button>
        </div>

        <div className="relative h-[580px] w-full flex items-center justify-center perspective-[1200px]">
          <AnimatePresence mode="popLayout">
            {view === 'swipe' ? (
              sessionWords.length > 0 ? (
                sessionWords.map((word, index) => (
                  <SwipeCard 
                    key={word.id} 
                    word={word} 
                    onSwipe={(dir) => handleSwipe(word.id, dir)}
                    isTop={index === sessionWords.length - 1}
                  />
                ))
              ) : (
                <EmptyState learnedCount={learnedWords.length} />
              )
            ) : (
              <LearnedArchive items={learnedWords} onRestore={moveToReview} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// --- Düzeltilmiş SwipeCard (Metin Aynalanması ve Veri Eşleşmesi Çözüldü) ---
const SwipeCard = ({ word, onSwipe, isTop }: any) => {
  const [flipped, setFlipped] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const dynamicGlow = useTransform(x, [-100, 0, 100], [
    "0 20px 50px -10px rgba(239, 68, 68, 0.6)", 
    "0 20px 50px -10px rgba(6, 182, 212, 0.2)", 
    "0 20px 50px -10px rgba(34, 197, 94, 0.6)"
  ]);

  // Veri setinden gelen anahtarların kontrolü
  const targetWord = word.word || word.term;
  const targetExample = word.example || word.sentence || "";
  const targetExampleTr = word.exampleTurkish || word.sentenceTr || "Çeviri verisi bulunamadı.";

  const highlightWord = useCallback((sentence: string, wordToHighlight: string) => {
    if (!sentence || !wordToHighlight) return sentence;
    const regex = new RegExp(`(${wordToHighlight})`, 'gi');
    const parts = sentence.split(regex);
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="font-black text-cyan-200 drop-shadow-[0_0_8px_rgba(6,182,212,0.9)]">{part}</span>
      ) : part
    );
  }, []);

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(targetWord);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  if (!isTop) return null;

  return (
    <motion.div
      style={{ x, rotate, zIndex: 10 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 120) onSwipe('right');
        else if (info.offset.x < -120) onSwipe('left');
      }}
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
    >
      <motion.div 
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d", boxShadow: dynamicGlow }}
        onClick={() => setFlipped(!flipped)}
        className="w-full h-full bg-[#080214] border-2 border-cyan-400/30 rounded-[48px] relative transition-shadow duration-300"
      >
        {/* ÖN YÜZ (English Word & Sentence) */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-slate-900 rounded-[48px]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <button onClick={handlePlayAudio} className="absolute top-8 right-8 p-3.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Volume2 size={22} />
          </button>

          <div className="p-5 bg-cyan-500/10 rounded-full text-cyan-300 mb-8 border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Rocket size={40} />
          </div>

          <h2 className="text-5xl font-black italic uppercase tracking-tighter text-center mb-8 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
            {targetWord}
          </h2>

          <div className="relative bg-slate-900/50 p-6 rounded-[24px] border border-cyan-400/30 w-full text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#080214] border border-cyan-400/50 rounded-full text-[9px] font-black text-cyan-300 uppercase tracking-[0.2em]">Context Output</div>
            <p className="text-lg text-slate-200 font-medium italic leading-relaxed">"{highlightWord(targetExample, targetWord)}"</p>
          </div>
          <span className="absolute bottom-8 text-[9px] text-cyan-500/70 font-black uppercase tracking-[0.4em] animate-pulse">Tap to Reveal</span>
        </div>

        {/* ARKA YÜZ (Turkish Meaning & Translation - Mirroring Çözüldü) */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#080214] rounded-[48px]"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="absolute top-8 left-8 opacity-20 text-purple-500 drop-shadow-[0_0_10px_currentColor]"><BrainCircuit size={48} /></div>
          <span className="text-purple-300 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Database Result</span>
          
          <h2 className="text-4xl font-black text-center mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            {word.definition}
          </h2>

          <div className="relative bg-slate-900/50 p-6 rounded-[24px] border border-purple-500/30 w-full text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#080214] border border-purple-500/50 rounded-full text-[9px] font-black text-purple-300 uppercase tracking-[0.2em]">Translation Data</div>
            <p className="text-base text-slate-300 italic">"{targetExampleTr}"</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Arşiv Bileşeni (LearnedArchive) ---
const LearnedArchive = ({ items, onRestore }: any) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full space-y-4 overflow-y-auto max-h-[560px] pr-3">
    {items.length === 0 ? (
      <div className="text-center mt-32 opacity-50 uppercase text-xs tracking-[0.3em] font-bold text-slate-500 italic">Memory Bank Empty</div>
    ) : (
      items.map(item => (
        <div key={item.id} className="bg-[#080214]/80 border border-purple-900/30 p-5 rounded-[24px] flex justify-between items-center group shadow-lg">
          <div>
            <h4 className="font-black italic uppercase text-xl text-white drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">{item.word || item.term}</h4>
            <p className="text-[10px] text-purple-400/70 uppercase tracking-widest mt-1 font-bold">{item.definition}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onRestore(item)} className="text-purple-400 hover:bg-purple-500/20 rounded-full transition-all">
            <RotateCcw size={20} />
          </Button>
        </div>
      ))
    )}
  </motion.div>
);

// --- Boş Durum Bileşeni (EmptyState) ---
const EmptyState = ({ learnedCount }: { learnedCount: number }) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center px-10">
    <CheckCircle2 size={80} className="mx-auto text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-8" />
    <h3 className="text-4xl font-black italic uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Session Cleared!</h3>
    <p className="text-cyan-300/70 text-xs mt-4 mb-12 uppercase tracking-[0.2em] font-bold italic text-center">
      Neural link established for {learnedCount} data points.
    </p>
    <Link to="/learn" className="w-full block">
      <Button variant="neon" size="lg" className="w-full py-8 text-sm rounded-full font-black tracking-[0.3em] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
        Next Sequence
      </Button>
    </Link>
  </motion.div>
);

export default Review;