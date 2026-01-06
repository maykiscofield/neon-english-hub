import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, Sparkles, ArrowLeft, Trash2, LayoutGrid, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLearning } from '@/contexts/LearningContext';
import { vocabularyData } from '@/data/vocabulary';
import { WordCard } from '@/components/vocabulary/WordCard';
import { Button } from '@/components/ui/button';

const Confusing = () => {
  const { savedWords, getProblematicWords } = useLearning();
  
  const displayWords = useMemo(() => {
    const problematicIds = getProblematicWords ? getProblematicWords() : [];
    const allTargetIds = Array.from(new Set([...(savedWords || []), ...problematicIds]));
    return vocabularyData.filter(word => allTargetIds.includes(word.id));
  }, [savedWords, getProblematicWords]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-primary/30">
      
      {/* --- GÖRSELDEKİ NEON KÜRELER (ATMOSPHERIC GLOW) --- */}
      <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[5%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed top-[20%] right-[-5%] w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-6">
            <Link to="/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </Link>
            
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-warning blur-md opacity-20" />
                <div className="relative p-3 bg-[#111] border border-white/10 rounded-2xl shadow-2xl">
                  <Bookmark className="w-8 h-8 text-warning" />
                </div>
              </div>
              <div>
                <h1 className="text-5xl font-black tracking-tighter uppercase italic italic-gradient">
                  Personal Lexicon
                </h1>
                <p className="text-gray-400 font-light tracking-wide max-w-md mt-1">
                  Reinforcing your critical vocabulary bank with AI-driven spaced repetition.
                </p>
              </div>
            </div>
          </div>

          {/* TOTAL STATS CHIP */}
          <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
             <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Total Items</p>
                <p className="text-2xl font-black text-white">{displayWords.length}</p>
             </div>
             <div className="h-10 w-[1px] bg-white/10 mx-2" />
             <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500 transition-colors">
                <Trash2 className="w-5 h-5" />
             </Button>
          </div>
        </header>

        {/* MAIN DISPLAY AREA */}
        <AnimatePresence mode="wait">
          {displayWords.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-video md:aspect-[21/9] flex flex-col items-center justify-center rounded-[40px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-3xl overflow-hidden"
            >
              {/* EMPTY STATE DECORATION */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-full mb-6">
                  <Sparkles className="w-12 h-12 text-gray-700" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Your library is empty</h2>
                <p className="text-gray-500 text-center max-w-xs font-light mb-8">
                  Start adding words to your collection by clicking the bookmark icon in the learning modules.
                </p>
                <Link to="/learn">
                  <Button className="h-14 px-10 bg-primary hover:bg-primary/80 text-black font-black uppercase tracking-tighter rounded-full shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-105 active:scale-95">
                    Browse Vocabulary
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayWords.map((word, index) => (
                <motion.div
                  key={word.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
                  className="group relative"
                >
                  {/* CARD HOVER GLOW */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-[30px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full border border-white/10 bg-[#0c0c0c]/80 backdrop-blur-2xl rounded-3xl overflow-hidden transition-colors group-hover:border-white/20">
                     <WordCard word={word} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BACKGROUND NOISE & GRID */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
    </div>
  );
};

export default Confusing;