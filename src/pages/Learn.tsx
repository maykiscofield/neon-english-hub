import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, ArrowLeft, Trophy } from 'lucide-react'; // Trophy buraya eklendi
import { Navbar } from '@/components/layout/Navbar';
import { WordCard } from '@/components/vocabulary/WordCard';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { getWordsByLevel } from '@/data/vocabulary';
import { Navigate, Link } from 'react-router-dom';

const Learn = () => {
  const { userProfile, isOnboarded, updateProgress } = useLearning();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionWords, setSessionWords] = useState<any[]>([]);

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  useEffect(() => {
    const initialWords = getWordsByLevel(userProfile?.level || 'intermediate');
    setSessionWords(initialWords);
  }, [userProfile?.level]);

  const currentWord = sessionWords[currentIndex];

  const handleMoveToBack = () => {
    if (sessionWords.length <= 1) return;
    setSessionWords((prev) => {
      const newWords = [...prev];
      const movedItem = newWords.splice(currentIndex, 1)[0];
      return [...newWords, movedItem];
    });
  };

  const handleMastered = () => {
    if (!currentWord) return;
    updateProgress(currentWord.id, true);
    setSessionWords((prev) => prev.filter((_, idx) => idx !== currentIndex));
    // Eğer son kelimeyse index hatası almamak için:
    if (currentIndex >= sessionWords.length - 1 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white relative">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-28 left-8 z-[100] hidden lg:block"
      >
        <Link 
          to="/dashboard" 
          className="group flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 shadow-xl"
        >
          <div className="relative">
            <ArrowLeft className="relative w-6 h-6 text-gray-500 group-hover:text-primary group-hover:-translate-x-2 transition-all duration-300" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-primary transition-colors mb-1 font-black italic">
              Go Back
            </span>
            <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors font-black italic">
              DASHBOARD
            </span>
          </div>
        </Link>
      </motion.div>
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 uppercase italic tracking-tighter">
              Learning <span className="text-primary italic">Session</span>
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
          </motion.div>

          <div className="flex flex-col gap-3 mb-12">
            <div className="flex justify-between items-end px-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary italic font-black">Kalan Kelime</span>
              <span className="text-xs font-mono text-muted-foreground font-black italic tracking-widest">
                {sessionWords.length} Kelime Kaldı
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]"
                initial={{ width: "100%" }}
                animate={{ width: `${(sessionWords.length / 50) * 100}%` }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentWord ? (
              <motion.div
                key={currentWord.id}
                initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(20px)" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-primary/5 blur-[100px] rounded-full opacity-50 pointer-events-none" />
                <WordCard word={currentWord} />
              </motion.div>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-[40px] backdrop-blur-xl"
              >
                <Trophy className="w-20 h-20 text-primary mx-auto mb-6 drop-shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
                <h2 className="text-3xl font-black italic uppercase tracking-tighter">Session Complete!</h2>
                <p className="text-gray-400 mt-2 font-medium">You have mastered all the words in this set.</p>
                <Button asChild className="mt-8 bg-primary hover:bg-primary/80 text-black font-black px-10 py-6 rounded-2xl">
                  <Link to="/dashboard">RETURN TO DASHBOARD</Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {sessionWords.length > 0 && (
            <div className="flex items-center justify-between mt-12 gap-4">
              <Button
                variant="neon-outline"
                onClick={handleMoveToBack}
                className="h-14 flex-1 rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase italic tracking-widest text-primary"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                ÖĞRENİLİYOR
              </Button>

              <Button
                variant="neon"
                onClick={handleMastered}
                className="h-14 flex-1 rounded-2xl font-black tracking-tighter uppercase italic shadow-[0_0_30px_rgba(var(--primary),0.3)] bg-primary text-black"
              >
                ÖĞRENİLDİ
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </main>

      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
    </div>
  );
};

export default Learn;