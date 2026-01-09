import React, { useState, useCallback, forwardRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  Archive, CheckCircle2, Volume2, Rocket, 
  BrainCircuit, Zap, RotateCcw, Trophy, ArrowLeft
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { getWordById } from '@/data/vocabulary';
import { Navigate, Link } from 'react-router-dom';

// --- Alt Bileşen 1: LearnedArchive ---
const LearnedArchive = forwardRef(({ items, onRestore }: any, ref: any) => (
  <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full space-y-4 overflow-y-auto max-h-[560px] pr-3 custom-scrollbar">
    {items.length === 0 ? (
      <div className="text-center mt-32 opacity-50 uppercase text-xs tracking-[0.3em] font-bold text-slate-500">Memory Bank Empty</div>
    ) : (
      items.map((item: any) => (
        <div key={item.id} className="bg-[#080214]/80 border border-purple-900/30 p-5 rounded-[24px] flex justify-between items-center group backdrop-blur-md">
          <div>
            <h4 className="font-black italic uppercase text-xl text-white drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">{item.word}</h4>
            <p className="text-[10px] text-purple-400/70 uppercase tracking-widest mt-1 font-bold">{item.meaning}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onRestore(item)} className="text-purple-500 hover:bg-purple-500/20 rounded-full">
            <RotateCcw size={20} />
          </Button>
        </div>
      ))
    )}
  </motion.div>
));

// --- Alt Bileşen 2: EmptyState ---
const EmptyState = forwardRef(({ learnedCount }: { learnedCount: number }, ref: any) => (
  <motion.div ref={ref} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center px-10">
    <CheckCircle2 size={80} className="mx-auto text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-8" />
    <h3 className="text-4xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-300">Session Cleared!</h3>
    <p className="text-cyan-300/70 text-xs mt-4 mb-12 uppercase tracking-[0.2em] font-bold italic text-center">Neural link established for {learnedCount} data points.</p>
    <Link to="/learn" className="w-full block">
      <Button variant="neon" size="lg" className="w-full py-8 text-sm rounded-full font-black tracking-[0.3em] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]">Next Sequence</Button>
    </Link>
  </motion.div>
));

// --- Alt Bileşen 3: SwipeCard ---
const SwipeCard = forwardRef(({ word, onSwipe, isTop }: any, ref: any) => {
  const [flipped, setFlipped] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const dynamicGlow = useTransform(x, [-100, 0, 100], [
    "0 20px 50px -10px rgba(239, 68, 68, 0.6)", 
    "0 20px 50px -10px rgba(6, 182, 212, 0.2)", 
    "0 20px 50px -10px rgba(34, 197, 94, 0.6)"
  ]);

  const targetWord = word.word || "Term";
  const targetExample = word.examples && word.examples.length > 0 ? word.examples[0] : "";
  const targetExampleTr = word.exampleTranslations && word.exampleTranslations.length > 0 ? word.exampleTranslations[0] : "Çeviri bulunamadı.";

  const highlightWord = useCallback((sentence: string, wordToHighlight: string) => {
    if (!sentence || !wordToHighlight) return sentence;
    const regex = new RegExp(`(${wordToHighlight})`, 'gi');
    return sentence.split(regex).map((part, index) => 
      // --- DEĞİŞİKLİK BURADA: Neon efekti yumuşatıldı ---
      regex.test(part) ? <span key={index} className="font-bold text-cyan-300 drop-shadow-[0_0_5px_rgba(6,182,212,0.6)]">{part}</span> : part
    );
  }, []);

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(targetWord);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  if (!isTop) return null;

  return (
    <motion.div
      ref={ref}
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
        className="w-full h-full bg-[#080214] border-2 border-cyan-400/30 rounded-[48px] relative transition-shadow duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)_inset]"
      >
        {/* --- ÖN YÜZ --- */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-slate-900 rounded-[48px]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <button onClick={handlePlayAudio} className="absolute top-8 right-8 p-3.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-400/50 hover:bg-cyan-400 hover:text-black transition-all">
            <Volume2 size={22} />
          </button>
          <div className="p-5 bg-cyan-500/10 rounded-full text-cyan-300 mb-8 border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Rocket size={40} />
          </div>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter text-center mb-8 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">{targetWord}</h2>
          <div className="relative bg-slate-900/50 p-6 rounded-[24px] border border-cyan-400/30 w-full text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#080214] border border-cyan-400/50 rounded-full text-[9px] font-black text-cyan-300 uppercase tracking-[0.2em]">Context Output</div>
            <p className="text-lg text-slate-200 font-medium italic">
              {targetExample ? highlightWord(targetExample, targetWord) : "Example context not available."}
            </p>
          </div>
          <span className="absolute bottom-8 text-[9px] text-cyan-500/70 font-black uppercase tracking-[0.4em] animate-pulse">Tap to Reveal</span>
        </div>

        {/* --- ARKA YÜZ --- */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#080214] rounded-[48px]"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="absolute top-8 left-8 opacity-20 text-purple-500"><BrainCircuit size={48} /></div>
          <span className="text-purple-300 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Database Result</span>
          <h2 className="text-4xl font-black text-center mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            {word.definition}
          </h2>
          <div className="relative bg-slate-900/50 p-6 rounded-[24px] border border-purple-500/30 w-full text-center backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#080214] border border-purple-500/50 rounded-full text-[9px] font-black text-purple-300 uppercase tracking-[0.2em]">Translation Data</div>
            <p className="text-base text-slate-300 italic leading-relaxed tracking-wide">"{targetExampleTr}"</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

// --- Ana Sayfa Bileşeni (Review) ---
const Review = () => {
  const { isOnboarded, getProblematicWords } = useLearning();
  const [view, setView] = useState<'swipe' | 'archive'>('swipe');
  
  const problematicIds = getProblematicWords ? getProblematicWords() : [];
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

      {/* --- BACK TO DASHBOARD BUTTON --- */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-28 left-8 z-[100] hidden lg:block"
      >
        <Link 
          to="/dashboard" 
          className="group flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        >
          <div className="relative">
            <ArrowLeft className="relative w-6 h-6 text-gray-500 group-hover:text-cyan-400 group-hover:-translate-x-2 transition-all duration-300" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-cyan-400 transition-colors mb-1">
              Go Back
            </span>
            <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors uppercase">
              DASHBOARD
            </span>
          </div>
        </Link>
      </motion.div>

      <main className="pt-24 pb-12 container mx-auto px-4 max-w-lg relative z-10">
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">Review Lab</h1>
          <p className="text-[11px] text-cyan-300/70 font-bold uppercase tracking-[0.4em] mt-2">NeuralSlide Mode Active</p>
        </div>

        <div className="flex bg-slate-900/60 p-1.5 rounded-full mb-10 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] relative overflow-hidden">
          <div className={`absolute inset-y-1.5 w-1/2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full transition-all duration-300 ease-out ${view === 'swipe' ? 'left-1.5' : 'left-[calc(50%-0.375rem)] translate-x-full'}`}></div>
          <button onClick={() => setView('swipe')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all relative z-10 font-black italic uppercase text-[10px] tracking-[0.2em] ${view === 'swipe' ? 'text-cyan-100 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'text-slate-500 hover:text-cyan-300'}`}>
            <Zap size={14} /> Quick Slide
          </button>
          <button onClick={() => setView('archive')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all relative z-10 font-black italic uppercase text-[10px] tracking-[0.2em] ${view === 'archive' ? 'text-purple-100 shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'text-slate-500 hover:text-purple-300'}`}>
            <Archive size={14} /> Learned ({learnedWords.length})
          </button>
        </div>

        <div className="relative h-[580px] w-full flex items-center justify-center perspective-[1200px]">
          <AnimatePresence mode="popLayout">
            {view === 'swipe' ? (
              sessionWords.length > 0 ? (
                sessionWords.map((word, index) => (
                  <SwipeCard key={word.id} word={word} onSwipe={(dir: any) => handleSwipe(word.id, dir)} isTop={index === sessionWords.length - 1} />
                ))
              ) : (
                <EmptyState key="empty-lab" learnedCount={learnedWords.length} />
              )
            ) : (
              <LearnedArchive key="archive-lab" items={learnedWords} onRestore={moveToReview} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Review;