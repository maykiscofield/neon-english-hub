import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowLeft, Book, Lock, CheckCircle2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useLearning } from '@/contexts/LearningContext';
import { motion, AnimatePresence } from 'framer-motion';
import GrammarLesson from '@/components/GrammarLesson';
import { useScrollRestore } from '../hooks/useScrollRestore'; 

const Topics = () => {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const { userProfile } = useLearning();
  
  useScrollRestore();

  const levelOrder = ['pre-intermediate', 'intermediate', 'upper-intermediate'];
  const userLevelIndex = levelOrder.indexOf(userProfile?.level || 'pre-intermediate');

  const topics = [
    // 1. PRE-INTERMEDIATE (A2/B1) SYLLABUS
    { id: '1.1-question-forms', title: '1.1 Question Forms (do/does/did)', level: 'pre-intermediate', progress: 0 },
    { id: '1.2-adverbs-frequency', title: '1.2 Adverbs and Phrases of Frequency', level: 'pre-intermediate', progress: 0 },
    { id: '1.3-indefinite-pronouns', title: '1.3 Indefinite Pronouns', level: 'pre-intermediate', progress: 0 },
    { id: '2.1-adverbs-degree', title: '2.1 Adverbs of Degree', level: 'pre-intermediate', progress: 0 },
    { id: 'present-simple-vs-continuous', title: '2.2 Present Simple & Present Continuous', level: 'pre-intermediate', progress: 100 },
    { id: '2.3-past-simple', title: '2.3 Past Simple', level: 'pre-intermediate', progress: 0 },
    { id: 'ek-adjectives-ed-ing', title: '[ADDITION] Adjectives ending in -ed and -ing', level: 'pre-intermediate', progress: 0 },
    { id: '3.1-quantifiers-basic', title: '3.1 Quantifiers (all, some, most, no, none)', level: 'pre-intermediate', progress: 0 },
    { id: '3.2-past-cont-past-simple', title: '3.2 Past Continuous & Past Simple', level: 'pre-intermediate', progress: 0 },
    { id: '3.3-verb-ing-to-inf', title: '3.3 Verb + -ing and to + Infinitive', level: 'pre-intermediate', progress: 0 },
    { id: '4.1-future-plans', title: '4.1 Future Plans (be going to & Present Continuous)', level: 'pre-intermediate', progress: 0 },
    { id: '4.2-predictions-will-may', title: '4.2 Making Predictions (will/won\'t & may/might)', level: 'pre-intermediate', progress: 0 },
    { id: '4.3-subj-obj-questions', title: '4.3 Subject and Object Questions', level: 'pre-intermediate', progress: 0 },
    { id: '5.1-ability-permission', title: '5.1 Ability and Permission (can, could, be able to)', level: 'pre-intermediate', progress: 0 },
    { id: '5.2-obligation-permission', title: '5.2 Obligation, Necessity, and Permission (must, have to, can)', level: 'pre-intermediate', progress: 0 },
    { id: '5.3-present-perfect-since', title: '5.3 Present Perfect with For and Since', level: 'pre-intermediate', progress: 0 },
    { id: '6.1-quantifiers-too-enough', title: '6.1 Quantifiers: Too and Enough', level: 'pre-intermediate', progress: 0 },
    { id: '6.2-ing-forms-gerund', title: '6.2 -ing Forms (Gerunds)', level: 'pre-intermediate', progress: 0 },
    { id: '6.3-pres-perf-particles', title: '6.3 Present Perfect with Just, Already, and Yet', level: 'pre-intermediate', progress: 0 },
    { id: '7.1-articles', title: '7.1 & 7.3 Articles (A, An, The, No Article)', level: 'pre-intermediate', progress: 0 },
    { id: '7.2-used-to', title: '7.2 Used to', level: 'pre-intermediate', progress: 0 },
    { id: '8.1-reflexive-pronouns', title: '8.1 Reflexive Pronouns', level: 'pre-intermediate', progress: 0 },
    { id: '8.2-purpose-infinitives', title: '8.2 Infinitive of Purpose', level: 'pre-intermediate', progress: 0 },
    { id: '8.3-first-conditional', title: '8.3 First Conditional', level: 'pre-intermediate', progress: 0 },
    { id: '9.1-second-conditional', title: '9.1 Second Conditional', level: 'pre-intermediate', progress: 0 },
    { id: '9.2-relative-clauses-defining', title: '9.2 Defining Relative Clauses', level: 'pre-intermediate', progress: 0 },
    { id: '9.3-gerunds-prepositions', title: '9.3 Gerunds after Prepositions', level: 'pre-intermediate', progress: 0 },
    { id: '10.1-comparisons', title: '10.1 & 10.2 Comparisons (Comparative, Superlative, as...as, less than)', level: 'pre-intermediate', progress: 0 },
    { id: '10.3-need-to', title: '10.3 Need to', level: 'pre-intermediate', progress: 0 },
    { id: '11.1-passive-simple', title: '11.1 The Passive (Present and Past Simple)', level: 'pre-intermediate', progress: 0 },
    { id: '11.2-adj-to-infinitive', title: '11.2 Adjective + to + Infinitive', level: 'pre-intermediate', progress: 0 },
    { id: '11.3-even-usage', title: '11.3 Even', level: 'pre-intermediate', progress: 0 },
    { id: '12.1-reported-speech-basic', title: '12.1 Reported Speech', level: 'pre-intermediate', progress: 0 },
    { id: '12.2-past-perfect-basic', title: '12.2 Past Perfect', level: 'pre-intermediate', progress: 0 },
    { id: '12.3-shall-suggestions', title: '12.3 Shall (offers and suggestions)', level: 'pre-intermediate', progress: 0 },

    // 2. INTERMEDIATE (B1+) SYLLABUS
    { id: 'b1-1.1-state-verbs', title: '1.1 Present Simple & Present Continuous (State vs Dynamic)', level: 'intermediate', progress: 0 },
    { id: 'b1-1.2-subj-obj-ques', title: '1.2 Subject and Object Questions', level: 'intermediate', progress: 0 },
    { id: 'b1-ek-indirect-ques', title: '[ADDITION] Indirect Questions', level: 'intermediate', progress: 0 },
    { id: 'b1-2.1-perf-vs-past', title: '2.1 Present Perfect Simple vs. Past Simple', level: 'intermediate', progress: 0 },
    { id: 'b1-2.2-ability-advanced', title: '2.2 Present and Past Ability', level: 'intermediate', progress: 0 },
    { id: 'b1-3.1-narrative-tenses', title: '3.1 Narrative Tenses', level: 'intermediate', progress: 0 },
    { id: 'b1-3.2-articles-quant', title: '3.2 Articles & Quantifiers', level: 'intermediate', progress: 0 },
    { id: 'b1-4.1-future-forms', title: '4.1 Future Forms', level: 'intermediate', progress: 0 },
    { id: 'b1-4.2-future-predictions', title: '4.2 Making Predictions (Degrees of Probability)', level: 'intermediate', progress: 0 },
    { id: 'b1-5.1-past-habits', title: '5.1 Past Habits and States (Used to vs Would)', level: 'intermediate', progress: 0 },
    { id: 'b1-5.2-passive-advanced', title: '5.2 The Passive (All Tenses)', level: 'intermediate', progress: 0 },
    { id: 'b1-6.1-obligation-modals', title: '6.1 Modals of Obligation', level: 'intermediate', progress: 0 },
    { id: 'b1-6.2-perf-simple-cont', title: '6.2 Present Perfect Simple vs. Continuous', level: 'intermediate', progress: 0 },
    { id: 'b1-ek-had-to-needed', title: '[ADDITION] Had to / Needed to', level: 'intermediate', progress: 0 },
    { id: 'b1-7.1-deduction', title: '7.1 Modals of Speculation and Deduction (Present)', level: 'intermediate', progress: 0 },
    { id: 'b1-7.2-the-more-comparisons', title: '7.2 Comparative Structures (The..., the...)', level: 'intermediate', progress: 0 },
    { id: 'b1-8.1-relative-clauses', title: '8.1 Relative Clauses (Defining vs Non-defining)', level: 'intermediate', progress: 0 },
    { id: 'b1-8.2-zero-first-cond', title: '8.2 Zero and First Conditionals', level: 'intermediate', progress: 0 },
    { id: 'b1-9.1-second-conditional', title: '9.1 Second Conditional', level: 'intermediate', progress: 0 },
    { id: 'b1-9.2-reported-speech', title: '9.2 Reported Speech (Questions and Imperatives)', level: 'intermediate', progress: 0 },
    { id: 'b1-10.1-third-conditional', title: '10.1 Third Conditional', level: 'intermediate', progress: 0 },
    { id: 'b1-10.2-wish-if-only', title: '10.2 Hopes and Wishes (Wish / If only)', level: 'intermediate', progress: 0 },
    
    // Simulations
    { id: 'b1-final-sim-1', title: 'FINAL SIMULATION I', level: 'intermediate', progress: 0, isSim: true },
    { id: 'b1-final-sim-2', title: 'FINAL SIMULATION II', level: 'intermediate', progress: 0, isSim: true },
    { id: 'b1-final-sim-3', title: 'FINAL SIMULATION III', level: 'intermediate', progress: 0, isSim: true },

    // 3. UPPER INTERMEDIATE (B2) SYLLABUS
    { id: 'b2-1.1-question-forms', title: '1.1 Question Forms (Advanced)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-1.2-tenses-review', title: '1.2 Tense Review', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-2.1-perf-simple-cont', title: '2.1 Present Perfect Simple & Continuous', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-2.2-habits-advanced', title: '2.2 Habits (used to, would, be used to, get used to)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-3.1-past-perf-cont', title: '3.1 Narrative Tenses (Advanced)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-3.2-if-alternatives', title: '3.2 Alternatives to "If"', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-4.1-future-in-past', title: '4.1 Future Forms (Future in the Past)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-4.2-future-perf-cont', title: '4.2 Future Perfect & Future Continuous', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-5.1-passive-causative', title: '5.1 The Passive & Causative', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-5.2-ing-infinitive-meanings', title: '5.2 -ing and Infinitive Forms (Change in Meaning)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-6.1-obligation-advanced', title: '6.1 Obligation, Prohibition, and Permission (Advanced)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-6.2-articles-advanced', title: '6.2 Articles (Advanced)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-7.1-first-cond-advanced', title: '7.1 First Conditional with Different Future Forms', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-7.2-wish-past-perf', title: '7.2 Wish and If Only (Past Regrets)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-8.1-past-deduction', title: '8.1 Past Modals of Deduction', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-8.2-adjectives-order', title: '8.2 Order of Adjectives', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-9.1-relative-advanced', title: '9.1 Relative Clauses (Advanced)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-9.2-determiners-quant', title: '9.2 Determiners and Quantifiers', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-10.1-reported-speech-adv', title: '10.1 Reported Speech (Advanced)', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-10.2-reporting-verbs', title: '10.2 Reporting Verbs', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-ek-inversion', title: '[ADDITION] Inversion for Emphasis', level: 'upper-intermediate', progress: 0 },
    { id: 'b2-ek-participle-clauses', title: '[ADDITION] Participle Clauses', level: 'upper-intermediate', progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      <Navbar />

      {/* --- ESKİ KARARLI FIXED YAPI + MOR NEON TEMA --- */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-24 left-8 z-[100] hidden lg:block"
      >
        <Link 
          to="/dashboard" 
          className="group flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/50 hover:bg-purple-500/5 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <div className="relative">
            <ArrowLeft className="relative w-6 h-6 text-gray-500 group-hover:text-purple-400 group-hover:-translate-x-2 transition-all duration-300" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-purple-400 transition-colors mb-1">
              Go Back
            </span>
            <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
              DASHBOARD
            </span>
          </div>
        </Link>
      </motion.div>

      {/* --- pt-40 İLE BAŞLIK AŞAĞI KAYDIRILDI, ÇAKIŞMA ÇÖZÜLDÜ --- */}
      <main className="container mx-auto px-4 pt-40 pb-12">
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
              <div className="min-h-[180px]"> 
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
                    Every topic is arranged according to the scientific syllabus. As you progress, libraries unlock with a neon effect.
                  </motion.p>
                </div>
              </div>

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
                                : 'bg-purple-500/20 text-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.2)]'
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