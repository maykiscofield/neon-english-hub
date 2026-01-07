// src/components/GrammarLesson.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { 
  ArrowLeft, Plus, Minus, HelpCircle, CheckCircle2, 
  LayoutGrid, Lightbulb, AlertTriangle, Trophy, XCircle, Brain,
  Clock, Activity, Eye, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
// ÖNEMLİ: Tüm dersleri içeren ana veri dosyasını import ediyoruz
import { allLessons } from '@/data/lessons'; 

interface GrammarLessonProps {
  topicTitle: string; // Bu aslında route'dan gelen topicId'dir
  onBack: () => void;
}

// --- Sürükle-Bırak Bileşenleri ---
function DraggableItem({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const style = { transform: CSS.Translate.toString(transform), opacity: isDragging ? 0.5 : 1 };
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}
      className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-xl font-bold shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-all">
      {label}
    </button>
  );
}

function DroppableZone({ id, currentAnswer, isCorrect, showResult, onShowHint }: any) {
  const { setNodeRef, isOver } = useDroppable({ id });
  let statusClasses = "border-slate-600 bg-slate-800/50";
  if (showResult) statusClasses = isCorrect ? "border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "border-red-500 bg-red-500/10 text-red-400";
  else if (isOver) statusClasses = "border-cyan-400 bg-cyan-900/40 shadow-[0_0_10px_rgba(34,211,238,0.2)]";

  return (
    <div className="inline-flex items-center gap-2 mx-1">
      <span ref={setNodeRef} className={`inline-block min-w-[100px] h-9 border-b-2 px-3 text-center align-middle transition-all rounded-t-lg ${statusClasses}`}>
        {currentAnswer || "___"}
      </span>
      {showResult && !isCorrect && (
        <button onClick={() => onShowHint(id)} className="p-1.5 bg-yellow-500/20 text-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.3)]">
          <Lightbulb size={14} />
        </button>
      )}
    </div>
  );
}

const FormulaBlock = ({ label, detail, colorClass }: { label: string, detail: string, colorClass: string }) => (
  <motion.div layout className={`flex-1 min-w-[120px] p-4 rounded-2xl border-2 bg-black/40 backdrop-blur-md ${colorClass}`}>
    <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">{detail}</div>
    <div className="text-sm font-bold tracking-tight">{label}</div>
  </motion.div>
);

const GrammarLesson: React.FC<GrammarLessonProps> = ({ topicTitle, onBack }) => {
  const [activeTab, setActiveTab] = useState<'positive' | 'negative' | 'question'>('positive');
  const [showResult, setShowResult] = useState(false);
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | null>>({});

  // Dinamik Veri Çekme
  const content = allLessons[topicTitle];

  // Her konu değiştiğinde state'leri sıfırla
  useEffect(() => {
    setAnswers({});
    setShowResult(false);
    setActiveHint(null);
  }, [topicTitle]);

  if (!content) return (
    <div className="p-20 text-center text-purple-500 font-black italic animate-pulse">
      SYSTEM ERROR: BLUEPRINT NOT FOUND (ID: {topicTitle})
    </div>
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over) {
      setAnswers(prev => ({ ...prev, [over.id]: active.id as string }));
      setShowResult(false);
    }
  };

  const activeQuestion = activeHint ? content.challenge?.questions.find((q: any) => q.id === activeHint) : null;
  const currentExample = content.examples[activeTab];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20 px-4 font-sans antialiased">
      {/* İPUCU MODAL */}
      <AnimatePresence>
        {activeHint && activeQuestion && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-slate-900 border border-yellow-500/50 p-8 rounded-[32px] max-w-lg w-full shadow-2xl relative">
              <button onClick={() => setActiveHint(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><XCircle size={24} /></button>
              <div className="flex items-center gap-3 mb-6 text-yellow-500 border-b border-white/5 pb-4">
                <Brain size={32} />
                <h3 className="text-xl font-bold uppercase italic text-white tracking-tighter">Gramer Analizi</h3>
              </div>
              <div className="space-y-6">
                <p className="text-slate-400 text-sm leading-relaxed italic">{activeQuestion.hint}</p>
                <div className="bg-black/40 border border-cyan-500/30 p-4 rounded-2xl text-center text-lg font-mono text-cyan-400">
                  {activeQuestion.visualFormula}
                </div>
              </div>
              <button onClick={() => setActiveHint(null)} className="mt-8 w-full py-4 bg-yellow-500/20 text-yellow-500 font-black rounded-2xl border border-yellow-500/30 hover:bg-yellow-500/40 transition-all uppercase tracking-widest">Anladım</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <div className="flex items-center gap-4 border-b border-white/5 pb-6">
        <Button variant="outline" size="icon" onClick={onBack} className="rounded-full border-purple-500/30 bg-purple-500/5 text-purple-400 hover:bg-purple-500/20 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-3xl md:text-4xl font-black italic uppercase text-white tracking-tighter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">{content.title}</h2>
      </div>

      {/* FORMÜL VE ANALİZ */}
      <section className="relative p-1 rounded-[32px] bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20">
        <div className="bg-[#0a0a0a] rounded-[28px] p-8">
          <div className="flex items-center gap-3 mb-8">
            <LayoutGrid className="text-purple-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-white/90 uppercase tracking-tighter italic">Cümle Yapısı Formülü</h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 p-1 bg-white/5 rounded-2xl w-fit">
            {[
              { id: 'positive', label: 'Olumlu', icon: Plus },
              { id: 'negative', label: 'Olumsuz', icon: Minus },
              { id: 'question', label: 'Soru', icon: HelpCircle }
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
                <tab.icon className="w-4 h-4" /> {tab.label}
              </button>
            ))}
          </div>

          {/* DİNAMİK FORMÜL BLOKLARI */}
          <div className="relative overflow-x-auto pb-6">
            <motion.div layout className="flex items-center gap-3 min-w-max mb-10">
              <AnimatePresence mode="popLayout">
                {content.formulas[activeTab].map((block: any, idx: number) => (
                  <React.Fragment key={`${activeTab}-${idx}`}>
                    <FormulaBlock label={block.label} detail={block.detail} colorClass={block.color} />
                    {idx < content.formulas[activeTab].length - 1 && <div className="text-gray-600 font-light text-2xl">+</div>}
                  </React.Fragment>
                ))}
                {activeTab === 'question' && <div className="text-purple-500 text-3xl font-bold">?</div>}
              </AnimatePresence>
            </motion.div>

            {/* ÖRNEK ANALİZİ */}
            <motion.div layout className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
              <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                <CheckCircle2 size={12} className="text-green-500" /> Yapı Analizi & Çeviri
              </div>
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-medium tracking-tight italic flex flex-wrap gap-x-3 gap-y-2 text-white">
                  {currentExample.parts.map((part: any, i: number) => (
                    <span key={i} className={`${part.color} ${part.underline ? 'underline underline-offset-8 font-black' : ''}`}>
                      {part.text}
                    </span>
                  ))}
                </div>
                <motion.div key={activeTab} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-lg text-slate-500 font-medium italic border-t border-white/5 pt-4">
                  <span className="text-slate-600 mr-2 uppercase text-xs font-black tracking-widest">Çeviri:</span> "{currentExample.translation}"
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* KULLANIM SENARYOLARI */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-500" /> Kullanım Senaryoları
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.scenarios.map((item: any, i: number) => (
                <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 hover:bg-white/[0.03] transition-all group`}>
                  <div className="text-white/80 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {/* İkon eşleşmesi için basitleştirilmiş mantık */}
                    {i === 0 ? <Clock size={20}/> : i === 1 ? <RefreshCw size={20}/> : <Eye size={20}/>}
                  </div>
                  <h5 className="text-base font-extrabold text-white tracking-tight mb-1.5">{item.title}</h5>
                  <p className="text-[13px] text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KRİTİK BİLGİLER */}
      <section className="bg-red-950/10 border border-red-500/30 p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
        <h2 className="text-2xl font-black mb-12 text-red-500 italic uppercase flex items-center gap-3 tracking-tighter">
          <AlertTriangle className="animate-pulse" /> Kritik Bilgiler & Tuzaklar
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {content.warnings.map((warn: any, idx: number) => (
            <div key={idx} className="bg-black/60 p-8 rounded-[32px] border border-white/5 shadow-inner">
               <h3 className="text-white/50 font-bold mb-6 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                 <AlertTriangle className="w-4 h-4 text-red-500" /> {warn.title}
               </h3>
               <div className="space-y-4 mb-6">
                 <div className="flex items-center gap-3">
                   <span className="text-[9px] font-black bg-red-500/20 text-red-400 px-2 py-0.5 rounded uppercase tracking-widest">Wrong</span>
                   <p className="text-red-400/50 line-through text-base italic">{warn.wrong}</p>
                 </div>
                 <div className="flex items-center gap-3">
                   <span className="text-[9px] font-black bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase tracking-widest">Right</span>
                   <p className="text-green-400 font-extrabold text-xl tracking-tight">{warn.right}</p>
                 </div>
               </div>
               <p className="text-slate-500 text-[13px] italic leading-relaxed pt-5 border-t border-white/5">{warn.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MİNİ ALIŞTIRMA (DND) */}
      {content.challenge && (
        <section className="bg-black/40 p-12 rounded-[56px] border border-white/5 shadow-inner overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 blur-[100px]" />
          <h2 className="text-4xl font-black mb-12 text-center text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter antialiased">
            <Trophy className="text-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]" /> Mini Alıştırma
          </h2>
          
          <DndContext onDragEnd={handleDragEnd}>
            <div className="flex flex-wrap gap-4 justify-center mb-16 px-4">
              {content.challenge.words.map((w: string) => <DraggableItem key={w} id={w} label={w} />)}
            </div>
            <div className="space-y-12 text-xl max-w-3xl mx-auto bg-slate-900/50 p-12 rounded-[40px] border border-white/5 shadow-2xl relative z-10">
              {content.challenge.questions.map((q: any) => (
                <div key={q.id} className="flex flex-wrap items-center leading-loose font-bold text-slate-100">
                  {q.text[0]}
                  <DroppableZone id={q.id} currentAnswer={answers[q.id]} showResult={showResult} isCorrect={answers[q.id] === q.correct} onShowHint={(id: string) => setActiveHint(id)} />
                  {q.text[1]}
                </div>
              ))}
            </div>
          </DndContext>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-6 relative z-10">
            <button onClick={() => setShowResult(true)} className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full font-black uppercase italic shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all text-white active:scale-95">
              Yanıtları Kontrol Et
            </button>
            <button onClick={() => { setAnswers({}); setShowResult(false); setActiveHint(null); }} className="text-slate-500 hover:text-white underline text-xs font-black uppercase tracking-widest">
              Sıfırla
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default GrammarLesson;