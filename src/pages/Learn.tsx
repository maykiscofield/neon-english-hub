import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { WordCard } from '@/components/vocabulary/WordCard';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { getWordsByLevel } from '@/data/vocabulary';
import { Navigate, Link } from 'react-router-dom';

const Learn = () => {
  const { userProfile, isOnboarded } = useLearning();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  const words = getWordsByLevel(userProfile?.level || 'intermediate');
  const currentWord = words[currentIndex];

  return (
    <div className="min-h-screen bg-[#030303] text-white relative">
      <Navbar />

      {/* --- MODERN NEON BACK BUTTON --- */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-28 left-8 z-[100] hidden lg:block"
      >
        <Link 
          to="/dashboard" 
          className="group flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_40px_rgba(var(--primary),0.2)]"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <ArrowLeft className="relative w-6 h-6 text-gray-500 group-hover:text-primary group-hover:-translate-x-2 transition-all duration-300" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-primary transition-colors mb-1">
              Go Back
            </span>
            <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
              DASHBOARD
            </span>
          </div>
        </Link>
      </motion.div>
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {/* Neon Header */}
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

          {/* Progress Bar */}
          <div className="flex flex-col gap-3 mb-12">
            <div className="flex justify-between items-end px-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Progress</span>
              <span className="text-xs font-mono text-muted-foreground">
                {currentIndex + 1} / {words.length}
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.6)]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
              />
            </div>
          </div>

          {/* Word Card Wrapper */}
          <AnimatePresence mode="wait">
            {currentWord && (
              <motion.div
                key={currentWord.id}
                initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(20px)" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative"
              >
                {/* Kartın arkasındaki hafif parlama */}
                <div className="absolute -inset-4 bg-primary/5 blur-[100px] rounded-full opacity-50 pointer-events-none" />
                <WordCard word={currentWord} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <Button
              variant="neon-outline"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + words.length) % words.length)}
              className="h-12 px-8 rounded-2xl border-white/10 hover:bg-white/5"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              PREV
            </Button>

            <div className="hidden sm:flex gap-3">
              {words.slice(0, 5).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === currentIndex ? 'w-10 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]' : 'w-2 bg-white/10'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="neon"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % words.length)}
              className="h-12 px-10 rounded-2xl font-black tracking-tighter"
            >
              NEXT
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      <div className="fixed top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
    </div>
  );
};

export default Learn;