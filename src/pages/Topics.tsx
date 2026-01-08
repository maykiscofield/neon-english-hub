import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowLeft, Book, Lock, CheckCircle2, Trophy } from 'lucide-react'; // Trophy eklendi
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { useLearning } from '@/contexts/LearningContext';
import { motion, AnimatePresence } from 'framer-motion';
import GrammarLesson from '@/components/GrammarLesson';
// --- EKLEME: Scroll hafızası hook'unu import ettik ---
import { useScrollRestore } from '../hooks/useScrollRestore'; 

const Topics = () => {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const { userProfile } = useLearning();
  
  // --- MILIMETRIK HAFIZA AKTIF ---
  useScrollRestore();

  const levelOrder = ['pre-intermediate', 'intermediate', 'upper-intermediate'];
  const userLevelIndex = levelOrder.indexOf(userProfile?.level || 'pre-intermediate');

  // SENİN EKSİKSİZ TÜM LİSTEN + SADECE EKLEMELER
  const topics = [
    { id: '1.1-question-forms', title: '1.1 Soru Formları (ASQ)', level: 'pre-intermediate', count: 8, progress: 0 },
    { id: '1.2-adverbs-frequency', title: '1.2 Sıklık Zarfları ve İfadeleri', level: 'pre-intermediate', count: 6, progress: 0 },
    { id: '1.3-indefinite-pronouns', title: '1.3 Belgisiz Zamirler', level: 'pre-intermediate', count: 10, progress: 0 },
    { id: '2.1-adverbs-degree', title: '2.1 Derecelendirme Zarfları', level: 'pre-intermediate', count: 5, progress: 0 },
    { id: 'present-simple-vs-continuous', title: '2.2 Present Simple vs Continuous', level: 'pre-intermediate', count: 12, progress: 100 },
    { id: '2.3-past-simple', title: '2.3 Past Simple', level: 'pre-intermediate', count: 15, progress: 0 },
    { id: 'ek-adjectives-ed-ing', title: '[EK] Sıfatlar (-ed / -ing)', level: 'pre-intermediate', count: 6, progress: 0 },
    { id: '3.1-quantifiers-basic', title: '3.1 Miktar Belirleyiciler', level: 'pre-intermediate', count: 9, progress: 0 },
    { id: '3.2-past-cont-past-simple', title: '3.2 Past Continuous & Past Simple', level: 'pre-intermediate', count: 12, progress: 0 },
    { id: '3.3-verb-ing-to-inf', title: '3.3 Fiil + -ing veya to + Infinitive', level: 'pre-intermediate', count: 14, progress: 0 },
    { id: '4.1-future-plans', title: '4.1 Gelecek Zaman Planları', level: 'pre-intermediate', count: 10, progress: 0 },
    { id: '4.2-predictions-will-may', title: '4.2 Tahmin Yürütme (Will/May)', level: 'pre-intermediate', count: 8, progress: 0 },
    { id: '4.3-subj-obj-questions', title: '4.3 Özne ve Nesne Soruları', level: 'pre-intermediate', count: 6, progress: 0 },
    { id: '5.1-ability-permission', title: '5.1 Yetenek ve İzin (Can/Could)', level: 'pre-intermediate', count: 10, progress: 0 },
    { id: '5.2-obligation-permission', title: '5.2 Zorunluluk ve İzin', level: 'pre-intermediate', count: 9, progress: 0 },
    { id: '5.3-present-perfect-since', title: '5.3 Present Perfect (For & Since)', level: 'pre-intermediate', count: 14, progress: 0 },
    { id: '6.1-quantifiers-too-enough', title: '6.1 Quantifiers (Too/Enough)', level: 'pre-intermediate', count: 7, progress: 0 },
    { id: '6.2-ing-forms-gerund', title: '6.2 -ing Formları (Gerund)', level: 'pre-intermediate', count: 8, progress: 0 },
    { id: '6.3-pres-perf-particles', title: '6.3 Present Perfect (Just, Already, Yet)', level: 'pre-intermediate', count: 10, progress: 0 },
    { id: '7.1-articles', title: '7.1 & 7.3 Articles (A, An, The)', level: 'pre-intermediate', count: 12, progress: 0 },
    { id: '7.2-used-to', title: '7.2 Used to', level: 'pre-intermediate', count: 8, progress: 0 },
    { id: '8.1-reflexive-pronouns', title: '8.1 Reflexive Pronouns (Myself...)', level: 'pre-intermediate', count: 5, progress: 0 },
    { id: '8.2-purpose-infinitives', title: '8.2 Amaç Bildiren Infinitives', level: 'pre-intermediate', count: 7, progress: 0 },
    { id: '8.3-first-conditional', title: '8.3 First Conditional', level: 'pre-intermediate', count: 10, progress: 0 },
    { id: '9.1-second-conditional', title: '9.1 Second Conditional', level: 'pre-intermediate', count: 10, progress: 0 },
    { id: '9.2-relative-clauses-defining', title: '9.2 Defining Relative Clauses', level: 'pre-intermediate', count: 9, progress: 0 },
    { id: '9.3-gerunds-prepositions', title: '9.3 Gerunds (Edatlardan Sonra)', level: 'pre-intermediate', count: 8, progress: 0 },
    { id: '10.1-comparisons', title: '10.1 & 10.2 Karşılaştırmalar', level: 'pre-intermediate', count: 11, progress: 0 },
    { id: '10.3-need-to', title: '10.3 Need to', level: 'pre-intermediate', count: 5, progress: 0 },
    { id: '11.1-passive-simple', title: '11.1 Edilgen Yapı (Passive)', level: 'pre-intermediate', count: 12, progress: 0 },
    { id: '11.2-adj-to-infinitive', title: '11.2 Sıfat + to + Infinitive', level: 'pre-intermediate', count: 6, progress: 0 },
    { id: '11.3-even-usage', title: '11.3 Even Kullanımı', level: 'pre-intermediate', count: 5, progress: 0 },
    { id: '12.1-reported-speech-basic', title: '12.1 Dolaylı Anlatım', level: 'pre-intermediate', count: 13, progress: 0 },
    { id: '12.2-past-perfect-basic', title: '12.2 Past Perfect', level: 'pre-intermediate', count: 10, progress: 0 },
    { id: '12.3-shall-suggestions', title: '12.3 Shall (Öneri/Teklif)', level: 'pre-intermediate', count: 6, progress: 0 },
    { id: 'b1-1.1-state-verbs', title: '1.1 Present Simple & Continuous (B1+)', level: 'intermediate', count: 8, progress: 0 },
    { id: 'b1-1.2-subj-obj-ques', title: '1.2 Özne ve Nesne Soruları (B1+)', level: 'intermediate', count: 6, progress: 0 },
    { id: 'b1-ek-indirect-ques', title: '[EK] Dolaylı Sorular', level: 'intermediate', count: 7, progress: 0 },
    { id: 'b1-2.1-perf-vs-past', title: '2.1 Present Perfect vs. Past Simple', level: 'intermediate', count: 15, progress: 0 },
    { id: 'b1-2.2-ability-advanced', title: '2.2 Geçmiş ve Günümüz Yetenekleri', level: 'intermediate', count: 9, progress: 0 },
    { id: 'b1-3.1-narrative-tenses', title: '3.1 Narrative Tenses', level: 'intermediate', count: 12, progress: 0 },
    { id: 'b1-3.2-articles-quant', title: '3.2 Articles & Quantifiers', level: 'intermediate', count: 11, progress: 0 },
    { id: 'b1-4.1-future-forms', title: '4.1 Future Forms (Karşılaştırma)', level: 'intermediate', count: 10, progress: 0 },
    { id: 'b1-4.2-future-predictions', title: '4.2 Gelecek Tahminleri', level: 'intermediate', count: 8, progress: 0 },
    { id: 'b1-5.1-past-habits', title: '5.1 Geçmiş Alışkanlıklar (Used to/Would)', level: 'intermediate', count: 8, progress: 0 },
    { id: 'b1-5.2-passive-advanced', title: '5.2 Passive (Perfect & Continuous)', level: 'intermediate', count: 10, progress: 0 },
    { id: 'b1-6.1-obligation-modals', title: '6.1 Zorunluluk Modalları', level: 'intermediate', count: 9, progress: 0 },
    { id: 'b1-6.2-perf-simple-cont', title: '6.2 Present Perfect Simple vs. Continuous', level: 'intermediate', count: 12, progress: 0 },
    { id: 'b1-ek-had-to-needed', title: '[EK] Had to / Needed to', level: 'intermediate', count: 7, progress: 0 },
    { id: 'b1-7.1-deduction', title: '7.1 Tahmin ve Çıkarım (Deduction)', level: 'intermediate', count: 8, progress: 0 },
    { id: 'b1-7.2-the-more-comparisons', title: '7.2 Karşılaştırmalar (The..., the...)', level: 'intermediate', count: 6, progress: 0 },
    { id: 'b1-8.1-relative-clauses', title: '8.1 Relative Clauses', level: 'intermediate', count: 9, progress: 0 },
    { id: 'b1-8.2-zero-first-cond', title: '8.2 Şartlı Cümleler (0, 1)', level: 'intermediate', count: 10, progress: 0 },
    { id: 'b1-9.1-second-conditional', title: '9.1 Second Conditional (B1+)', level: 'intermediate', count: 10, progress: 0 },
    { id: 'b1-9.2-reported-speech', title: '9.2 Reported Speech (B1+)', level: 'intermediate', count: 12, progress: 0 },
    { id: 'b1-10.1-third-conditional', title: '10.1 Third Conditional', level: 'intermediate', count: 9, progress: 0 },
    { id: 'b1-10.2-wish-if-only', title: '10.2 Umutlar ve Keşkeler', level: 'intermediate', count: 10, progress: 0 },
    
    // --- EKLEME: INTERMEDIATE FINAL SIMÜLASYONLARI (SARI NEON) ---
    { id: 'b1-final-sim-1', title: 'FINAL SIMULATION I: ', level: 'intermediate', count: 15, progress: 0, isSim: true },
    { id: 'b1-final-sim-2', title: 'FINAL SIMULATION II: ', level: 'intermediate', count: 15, progress: 0, isSim: true },
    { id: 'b1-final-sim-3', title: 'FINAL SIMULATION III: ', level: 'intermediate', count: 15, progress: 0, isSim: true },

    { id: 'b2-1.1-question-forms', title: '1.1 Soru Formları Detay & Tags', level: 'upper-intermediate', count: 8, progress: 0 },
    { id: 'b2-1.2-tenses-review', title: '1.2 Zamanların Gözden Geçirilmesi', level: 'upper-intermediate', count: 12, progress: 0 },
    { id: 'b2-2.1-perf-simple-cont', title: '2.1 Present Perfect Simple & Continuous', level: 'upper-intermediate', count: 10, progress: 0 },
    { id: 'b2-2.2-habits-advanced', title: '2.2 Alışkanlık Formları (Used to...)', level: 'upper-intermediate', count: 9, progress: 0 },
    { id: 'b2-3.1-past-perf-cont', title: '3.1 Past Perfect Continuous', level: 'upper-intermediate', count: 10, progress: 0 },
    { id: 'b2-3.2-if-alternatives', title: '3.2 "If" Alternatifleri', level: 'upper-intermediate', count: 12, progress: 0 },
    { id: 'b2-4.1-future-in-past', title: '4.1 Future in the Past', level: 'upper-intermediate', count: 7, progress: 0 },
    { id: 'b2-4.2-future-perf-cont', title: '4.2 Future Perfect & Continuous', level: 'upper-intermediate', count: 11, progress: 0 },
    { id: 'b2-5.1-passive-causative', title: '5.1 Passive & Causative (Have/Get)', level: 'upper-intermediate', count: 10, progress: 0 },
    { id: 'b2-5.2-ing-infinitive-meanings', title: '5.2 -ing & Infinitive (Anlam Farkı)', level: 'upper-intermediate', count: 14, progress: 0 },
    { id: 'b2-6.1-obligation-advanced', title: '6.1 Zorunluluk ve İzin (İleri)', level: 'upper-intermediate', count: 9, progress: 0 },
    { id: 'b2-6.2-articles-advanced', title: '6.2 Articles (Genelleme)', level: 'upper-intermediate', count: 11, progress: 0 },
    { id: 'b2-7.1-first-cond-advanced', title: '7.1 Gelişmiş First Conditional', level: 'upper-intermediate', count: 8, progress: 0 },
    { id: 'b2-7.2-wish-past-perf', title: '7.2 Wish & If Only (Geçmiş)', level: 'upper-intermediate', count: 10, progress: 0 },
    { id: 'b2-8.1-past-deduction', title: '8.1 Geçmiş Çıkarımlar (Must have...)', level: 'upper-intermediate', count: 9, progress: 0 },
    { id: 'b2-8.2-adjectives-order', title: '8.2 Sıfat Dizilimi (OSASCOMP)', level: 'upper-intermediate', count: 6, progress: 0 },
    { id: 'b2-9.1-relative-advanced', title: '9.1 Relative Clauses (İleri)', level: 'upper-intermediate', count: 10, progress: 0 },
    { id: 'b2-9.2-determiners-quant', title: '9.2 Determiners & Quantifiers', level: 'upper-intermediate', count: 12, progress: 0 },
    { id: 'b2-10.1-reported-speech-adv', title: '10.1 Reported Speech (Gelişmiş)', level: 'upper-intermediate', count: 13, progress: 0 },
    { id: 'b2-10.2-reporting-verbs', title: '10.2 Reporting Verbs', level: 'upper-intermediate', count: 12, progress: 0 },
    { id: 'b2-ek-inversion', title: '[EK] Inversion (Devriklik)', level: 'upper-intermediate', count: 9, progress: 0 },
    { id: 'b2-ek-participle-clauses', title: '[EK] Participle Clauses', level: 'upper-intermediate', count: 8, progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-12">
        <AnimatePresence mode="wait">
          {topicId ? (
            <motion.div 
              key="lesson"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GrammarLesson 
                topicTitle={topicId} 
                onBack={() => navigate(-1)} 
              />
            </motion.div>
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* --- STABLE HEADER AREA --- */}
              <div className="min-h-[180px]"> 
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
              </div>

              {/* --- STABLE GRID AREA --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen">
                {topics.map((topic, idx) => {
                  const topicLevelIndex = levelOrder.indexOf(topic.level);
                  const isLocked = topicLevelIndex > userLevelIndex;
                  const isCompleted = topic.progress === 100;
                  // @ts-ignore
                  const isSim = topic.isSim;

                  return (
                    <motion.div 
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      onClick={() => !isLocked && navigate(`/topics/${topic.id}`)}
                      className={`relative group p-6 rounded-[24px] border transition-all duration-500 overflow-hidden backdrop-blur-md ${
                        isLocked 
                        ? 'border-white/5 bg-white/[0.02] cursor-not-allowed grayscale-[0.8]' 
                        : isSim 
                          ? 'border-yellow-500/30 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-500/60 hover:shadow-[0_0_40px_rgba(234,179,8,0.2)] cursor-pointer'
                          : 'border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] cursor-pointer'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-3 rounded-2xl transition-colors ${
                          isLocked 
                            ? 'bg-gray-800/50 text-gray-500' 
                            : isSim 
                              ? 'bg-yellow-500/20 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                              : isCompleted 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                        }`}>
                          {isLocked ? <Lock className="w-6 h-6" /> : isSim ? <Trophy className="w-6 h-6" /> : isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Book className="w-6 h-6" />}
                        </div>
                        <div className="flex flex-col items-end">
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border transition-all ${
                            isLocked 
                              ? 'border-white/5 text-gray-600' 
                              : isSim 
                                ? 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10'
                                : 'border-purple-500/30 text-purple-400/80 bg-purple-500/5'
                          }`}>
                            {topic.level.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                      <h3 className={`text-xl font-bold mb-4 transition-colors tracking-tight leading-tight ${
                        isLocked ? 'text-gray-600' : isSim ? 'text-white group-hover:text-yellow-200' : 'text-white group-hover:text-purple-300'
                      }`}>
                        {topic.title}
                      </h3>
                      {!isLocked && (
                        <div className="mt-auto pt-2">
                          <div className="flex justify-between items-end mb-2 text-xs">
                            <p className="font-black uppercase tracking-widest text-gray-500">
                              {isSim ? 'Simulation Score' : isCompleted ? 'Topic Mastered' : 'Progress'}
                            </p>
                            <span className={`font-bold ${isSim ? 'text-yellow-400' : isCompleted ? 'text-green-400' : 'text-purple-400'}`}>
                              {topic.progress}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${topic.progress}%` }} 
                              transition={{ duration: 1, ease: "easeOut" }}
                              className={`h-full rounded-full ${
                                isSim 
                                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]'
                                  : isCompleted 
                                    ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' 
                                    : 'bg-gradient-to-r from-purple-600 to-pink-500'
                              }`} 
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2 mt-4">
                        <div className={`h-1.5 w-1.5 rounded-full ${
                          isLocked 
                            ? 'bg-gray-700' 
                            : isSim 
                              ? 'bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,1)]'
                              : 'bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,1)]'
                        }`} />
                        <p className={`text-[10px] font-medium uppercase tracking-widest ${isLocked ? 'text-gray-700' : 'text-gray-500 group-hover:text-gray-400'}`}>
                          {isSim ? 'Final Challenge' : `${topic.count} Lessons`}
                        </p>
                      </div>
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