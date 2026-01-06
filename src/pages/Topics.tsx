import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowLeft, Book, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLearning } from '@/contexts/LearningContext';
import { motion, AnimatePresence } from 'framer-motion';
import GrammarLesson from '@/components/GrammarLesson';

const Topics = () => {
  const navigate = useNavigate();
  const { userProfile } = useLearning();
  // Seçili konunun ID'sini veya başlığını tutan state
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  const levelOrder = ['pre-intermediate', 'intermediate', 'upper-intermediate'];
  const userLevelIndex = levelOrder.indexOf(userProfile?.level || 'pre-intermediate');

  // Her konuya bir 'id' ekledik, böylece JSON'dan veri çekmek kolaylaşacak
  const topics = [
    { id: 'present-simple-vs-continuous', title: 'Present Simple vs Continuous', level: 'pre-intermediate', count: 12, progress: 100 },
    { id: 'past-simple-used-to', title: 'Past Simple & Used to', level: 'pre-intermediate', count: 10, progress: 65 },
    { id: 'comparatives-superlatives', title: 'Comparatives & Superlatives', level: 'pre-intermediate', count: 8, progress: 30 },
    { id: 'modal-verbs', title: 'Modal Verbs (Ability & Permission)', level: 'pre-intermediate', count: 14, progress: 0 },
    { id: 'present-perfect-simple', title: 'Present Perfect Simple', level: 'intermediate', count: 15, progress: 0 },
    { id: 'past-perfect', title: 'Past Continuous & Past Perfect', level: 'intermediate', count: 12, progress: 0 },
    { id: 'passive-voice-1', title: 'Passive Voice (Foundations)', level: 'intermediate', count: 10, progress: 0 },
    { id: 'conditionals-1-2', title: 'First & Second Conditionals', level: 'intermediate', count: 12, progress: 0 },
    { id: 'relative-clauses', title: 'Relative Clauses (Defining)', level: 'intermediate', count: 9, progress: 0 },
    { id: 'mixed-conditionals', title: 'Mixed Conditionals', level: 'upper-intermediate', count: 15, progress: 0 },
    { id: 'passive-voice-2', title: 'Passive Voice (Advanced)', level: 'upper-intermediate', count: 10, progress: 0 },
    { id: 'gerunds-infinitives', title: 'Gerunds vs Infinitives', level: 'upper-intermediate', count: 18, progress: 0 },
    { id: 'reported-speech', title: 'Reported Speech & Verbs', level: 'upper-intermediate', count: 14, progress: 0 },
    { id: 'phrasal-verbs', title: 'Phrasal Verbs (Advanced Mastery)', level: 'upper-intermediate', count: 25, progress: 0 },
    { id: 'inversion', title: 'Inversion & Cleft Sentences', level: 'upper-intermediate', count: 12, progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-12">
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            // --- KONU DETAY GÖRÜNÜMÜ ---
            <motion.div 
              key="lesson"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GrammarLesson 
                topicTitle={selectedTopic} 
                onBack={() => setSelectedTopic(null)} 
              />
            </motion.div>
          ) : (
            // --- ANA LİSTE GÖRÜNÜMÜ ---
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Navigation */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <Button 
                  variant="ghost" 
                  className="mb-8 group text-gray-400 hover:text-purple-400 hover:bg-transparent transition-all"
                  onClick={() => navigate('/dashboard')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
                  Back to Dashboard
                </Button>
              </motion.div>

              {/* Header Section */}
              <div className="mb-12 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/10 blur-[100px] pointer-events-none" />
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
                >
                  Topic Library
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 max-w-2xl text-lg leading-relaxed border-l-2 border-purple-500/30 pl-4"
                >
                  Sistemdeki her konu, bilimsel sarmal müfredata göre dizilmiştir. Seviyen ilerledikçe kilitli kütüphaneler neon bir efektle açılır.
                </motion.p>
              </div>

              {/* Grid System */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, idx) => {
                  const topicLevelIndex = levelOrder.indexOf(topic.level);
                  const isLocked = topicLevelIndex > userLevelIndex;
                  const isCompleted = topic.progress === 100;

                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => !isLocked && setSelectedTopic(topic.title)}
                      className={`relative group p-6 rounded-[24px] border transition-all duration-500 overflow-hidden backdrop-blur-md ${
                        isLocked 
                        ? 'border-white/5 bg-white/[0.02] cursor-not-allowed grayscale-[0.8]' 
                        : 'border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] cursor-pointer'
                      }`}
                    >
                      {/* Arka Plan Parlama Efekti */}
                      {!isLocked && (
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-600/10 blur-3xl group-hover:bg-purple-600/20 transition-all" />
                      )}

                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-3 rounded-2xl transition-colors ${
                          isLocked ? 'bg-gray-800/50 text-gray-500' : isCompleted ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                        }`}>
                          {isLocked ? <Lock className="w-6 h-6" /> : isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Book className="w-6 h-6" />}
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border transition-all ${
                            isLocked ? 'border-white/5 text-gray-600' : 'border-purple-500/30 text-purple-400/80 bg-purple-500/5'
                          }`}>
                            {topic.level}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-4 transition-colors tracking-tight leading-tight ${
                        isLocked ? 'text-gray-600' : 'text-white group-hover:text-purple-300'
                      }`}>
                        {topic.title}
                      </h3>

                      {!isLocked && (
                        <div className="mt-auto pt-2">
                          <div className="flex justify-between items-end mb-2 text-xs">
                            <p className="font-black uppercase tracking-widest text-gray-500">
                              {isCompleted ? 'Topic Mastered' : 'Progress'}
                            </p>
                            <span className={`font-bold ${isCompleted ? 'text-green-400' : 'text-purple-400'}`}>
                              {topic.progress}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${topic.progress}%` }} 
                              transition={{ duration: 1, ease: "easeOut" }}
                              className={`h-full rounded-full ${isCompleted ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-gradient-to-r from-purple-600 to-pink-500'}`} 
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mt-4">
                        <div className={`h-1.5 w-1.5 rounded-full ${isLocked ? 'bg-gray-700' : 'bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,1)]'}`} />
                        <p className={`text-xs font-medium uppercase tracking-widest ${isLocked ? 'text-gray-700' : 'text-gray-500 group-hover:text-gray-400'}`}>
                          {topic.count} Lessons
                        </p>
                      </div>

                      {!isLocked && (
                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Topics;