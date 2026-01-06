import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { 
  ArrowLeft, Plus, Minus, HelpCircle, Info, CheckCircle2, 
  Zap, LayoutGrid, Lightbulb, AlertTriangle, Trophy, XCircle, Brain,
  Clock, Activity, TrendingUp, Sparkles, RefreshCw, Eye 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { grammarData } from '../data/grammarData';

interface GrammarLessonProps {
  topicTitle: string;
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
    <div className="inline-flex items-center gap-2">
      <span ref={setNodeRef} className={`inline-block min-w-[100px] h-9 border-b-2 px-3 text-center align-middle transition-all rounded-t-lg ${statusClasses}`}>
        {currentAnswer || "___"}
      </span>
      {showResult && !isCorrect && (
        <button onClick={() => onShowHint(id)} className="p-1.5 bg-yellow-500/20 text-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.3)]">
          <Lightbulb size={16} />
        </button>
      )}
    </div>
  );
}

const FormulaBlock = ({ label, detail, colorClass }: { label: string, detail: string, colorClass: string }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    className={`flex-1 min-w-[140px] p-4 rounded-2xl border-2 bg-black/40 backdrop-blur-md ${colorClass} transition-all duration-300`}
  >
    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">{detail}</div>
    <div className="text-sm md:text-base font-bold tracking-tight">{label}</div>
  </motion.div>
);

const GrammarLesson: React.FC<GrammarLessonProps> = ({ topicTitle, onBack }) => {
  const [activeTab, setActiveTab] = useState<'positive' | 'negative' | 'question'>('positive');
  const [showResult, setShowResult] = useState(false);
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | null>>({});

  const content = grammarData["present-simple-vs-continuous"];

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over) {
      setAnswers(prev => ({ ...prev, [over.id]: active.id as string }));
      setShowResult(false);
    }
  };

  if (!content) return <div className="p-20 text-center text-cyan-500 font-black italic tracking-widest antialiased">LOADING BLUEPRINT...</div>;

  const activeQuestion = activeHint ? content.challenge.questions.find(q => q.id === activeHint) : null;

  const SbjBlock = <FormulaBlock key="sbj" label="Subject" detail="Özne (S)" colorClass="border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" />;
  const AuxBlock = <FormulaBlock key="aux" label="Am / Is / Are" detail="Yardımcı Fiil" colorClass="border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" />;
  const NegBlock = <FormulaBlock key="neg" label="NOT" detail="Olumsuzluk" colorClass="border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" />;
  const VerbBlock = <FormulaBlock key="vrb" label="Verb + ING" detail="Fiil (V)" colorClass="border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" />;
  const ObjBlock = <FormulaBlock key="obj" label="Object" detail="Nesne (O)" colorClass="border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" />;
  const PlusSign = <div className="text-gray-600 font-light text-2xl">+</div>;

  const getExample = () => {
    switch(activeTab) {
      case 'negative': return { s: "The system", a: "is", n: "not", v: "working", o: "correctly.", tr: "Sistem doğru şekilde çalışmıyor." };
      case 'question': return { a: "Is", s: "the system", v: "working", o: "correctly?", tr: "Sistem doğru şekilde çalışıyor mu?" };
      default: return { s: "The system", a: "is", v: "working", o: "correctly.", tr: "Sistem doğru şekilde çalışıyor." };
    }
  };
  const ex = getExample();

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20 px-4 font-sans antialiased">
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
                <div className="p-4 bg-red-500/5 border-l-4 border-red-500 rounded-r-xl text-slate-200 text-sm italic">
                  "{answers[activeHint]}" hatalı seçim. {activeQuestion.specificHints?.[answers[activeHint] as string] || "Gramer yapısı uyuşmuyor."}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed italic">{activeQuestion.hint}</p>
                <div className="bg-black/40 border border-cyan-500/30 p-4 rounded-2xl text-center text-lg font-mono text-cyan-400 shadow-inner">
                  {activeQuestion.visualFormula}
                </div>
              </div>
              <button onClick={() => setActiveHint(null)} className="mt-8 w-full py-4 bg-yellow-500/20 text-yellow-500 font-black rounded-2xl border border-yellow-500/30 hover:bg-yellow-500/40 transition-all uppercase tracking-widest">Anladım</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-4 border-b border-white/5 pb-6">
        <Button variant="outline" size="icon" onClick={onBack} className="rounded-full border-purple-500/30 bg-purple-500/5 text-purple-400 hover:bg-purple-500/20 transition-all">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-3xl md:text-4xl font-black italic uppercase text-white tracking-tighter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">{content.title}</h2>
      </div>

      <section className="relative p-1 rounded-[32px] bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20">
        <div className="bg-[#0a0a0a] rounded-[28px] p-8">
          <div className="flex items-center gap-3 mb-8">
            <LayoutGrid className="text-purple-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-white/90 uppercase tracking-tighter italic antialiased">Cümle Yapısı Formülü</h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 p-1 bg-white/5 rounded-2xl w-fit">
            {[{ id: 'positive', label: 'Olumlu', icon: Plus }, { id: 'negative', label: 'Olumsuz', icon: Minus }, { id: 'question', label: 'Soru', icon: HelpCircle }].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40' : 'text-gray-500 hover:text-gray-300'}`}>
                <tab.icon className="w-4 h-4" /> {tab.label}
              </button>
            ))}
          </div>

          <div className="relative overflow-x-auto pb-6">
            <motion.div layout className="flex items-center gap-3 min-w-max mb-10">
              <AnimatePresence mode="popLayout">
                {activeTab === 'question' ? (
                  <>{AuxBlock} {PlusSign} {SbjBlock} {PlusSign} {VerbBlock} {PlusSign} {ObjBlock} <div className="text-purple-500 text-3xl font-bold">?</div></>
                ) : activeTab === 'negative' ? (
                  <>{SbjBlock} {PlusSign} {AuxBlock} {PlusSign} {NegBlock} {PlusSign} {VerbBlock} {PlusSign} {ObjBlock}</>
                ) : (
                  <>{SbjBlock} {PlusSign} {AuxBlock} {PlusSign} {VerbBlock} {PlusSign} {ObjBlock}</>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
              <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                <CheckCircle2 size={12} className="text-green-500" /> Yapı Analizi & Çeviri
              </div>
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl font-medium tracking-tight italic flex flex-wrap gap-x-3 gap-y-2 text-white">
                  {activeTab === 'question' ? (
                    <><span className="text-purple-400 font-black underline underline-offset-8">{ex.a}</span><span className="text-blue-400">{ex.s}</span><span className="text-pink-400">{ex.v}</span><span className="text-emerald-400">{ex.o}</span></>
                  ) : activeTab === 'negative' ? (
                    <><span className="text-blue-400 font-black underline underline-offset-8">{ex.s}</span><span className="text-purple-400">{ex.a}</span><span className="text-red-500 font-black px-1 rounded bg-red-500/10">{ex.n}</span><span className="text-pink-400">{ex.v}</span><span className="text-emerald-400">{ex.o}</span></>
                  ) : (
                    <><span className="text-blue-400 font-black underline underline-offset-8">{ex.s}</span><span className="text-purple-400">{ex.a}</span><span className="text-pink-400">{ex.v}</span><span className="text-emerald-400">{ex.o}</span></>
                  )}
                </div>
                <motion.div key={activeTab} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-lg md:text-xl text-slate-500 font-medium italic border-t border-white/5 pt-4">
                  <span className="text-slate-600 mr-2 uppercase text-xs font-black tracking-widest">Çeviri:</span> "{ex.tr}"
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-500" /> Kullanım Senaryoları
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Clock className="w-5 h-5" />, title: "Tam Şu An", desc: "Konuşma anında gerçekleşen eylemler.", color: "from-blue-500/20 to-transparent", border: "border-blue-500/20" },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Değişen Durumlar", desc: "Fiyatların artması gibi süregelen trendler.", color: "from-pink-500/20 to-transparent", border: "border-pink-500/20" },
                { icon: <Sparkles className="w-5 h-5" />, title: "Geçici Süreçler", desc: "Sadece bu haftalık devam eden işler.", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/20" },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} hover:bg-white/[0.03] transition-all group`}>
                  <div className="text-white/80 mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h5 className="text-base font-extrabold text-white tracking-tight mb-1.5">{item.title}</h5>
                  <p className="text-[13px] text-slate-400 font-medium leading-relaxed antialiased">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-950/10 border border-red-500/30 p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 text-red-500 rotate-12"><AlertTriangle size={150} /></div>
        
        <h2 className="text-2xl md:text-3xl font-black mb-12 text-red-500 italic uppercase flex items-center gap-3 tracking-tighter antialiased">
          <AlertTriangle className="animate-pulse" /> Kritik Bilgiler & Tuzaklar
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          <div className="bg-black/60 p-8 rounded-[32px] border border-red-500/20 shadow-inner group hover:border-red-500/40 transition-colors">
            <h3 className="text-red-400 font-bold mb-6 text-[11px] uppercase tracking-[0.3em] flex items-center gap-2 opacity-80">
              <XCircle className="w-4 h-4" /> The 'AM/IS/ARE' Trap
            </h3>
            <div className="space-y-4 mb-6">
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-red-500/20 text-red-400 px-2 py-0.5 rounded uppercase tracking-widest">Wrong</span>
                  <p className="text-red-400/50 line-through text-base italic font-medium">I am play football every day.</p>
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase tracking-widest">Right</span>
                  <p className="text-green-400 font-extrabold text-xl tracking-tight antialiased">I play football every day.</p>
               </div>
            </div>
            <p className="text-slate-500 text-[13px] italic leading-relaxed pt-5 border-t border-white/5 font-medium">
              Geniş zaman eylemlerinin önüne 'am/is/are' getirilmez. Bu hata genellikle Continuous yapısıyla karıştırılmaktadır.
            </p>
          </div>

          <div className="bg-black/60 p-8 rounded-[32px] border border-blue-500/20 shadow-inner group hover:border-blue-500/40 transition-colors">
            <h3 className="text-blue-400 font-bold mb-6 text-[11px] uppercase tracking-[0.3em] flex items-center gap-2 opacity-80">
              <Brain className="w-4 h-4" /> Durum Fiilleri (Stative Verbs)
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['know', 'like', 'want', 'believe', 'understand'].map(v => (
                <span key={v} className="px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-300 text-[11px] font-extrabold border border-blue-500/20 tracking-wider uppercase shadow-sm">
                  {v}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-[13px] leading-relaxed italic font-medium">
              Zihin, duygu ve sahiplik bildiren bu fiiller genellikle "-ing" takısı almazlar. <span className="text-blue-300/80">"I am knowing you"</span> yerine <b className="text-white">"I know you"</b> denir.
            </p>
          </div>

          {/* --- MODERNİZE EDİLEN BÖLÜM: ALIŞKANLIK VS. ŞU AN --- */}
          <div className="bg-black/60 p-8 rounded-[32px] border border-orange-500/20 shadow-inner lg:col-span-2 group hover:border-orange-500/40 transition-all duration-500">
            <h3 className="text-orange-400 font-bold mb-8 text-[11px] uppercase tracking-[0.3em] flex items-center gap-2 opacity-80">
              <RefreshCw className="w-4 h-4 animate-spin-slow" /> Alışkanlık vs. Şu An (Habit vs. Right Now)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                 <p className="text-slate-300 text-[15px] leading-relaxed font-medium">
                   Sıklık zarfları (<span className="text-blue-400 font-black underline underline-offset-4">always, usually</span>) ile zaman belirteçlerinin (<span className="text-pink-400 font-black underline underline-offset-4">now, at the moment</span>) karıştırılması çok yaygındır.
                 </p>
                 <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/20 relative group-hover:bg-orange-500/10 transition-all">
                    <div className="flex items-center gap-2 text-orange-400 mb-2 text-[10px] font-black uppercase tracking-widest">
                       <Eye size={14} className="animate-pulse" /> Sistem Tetikleyicisi
                    </div>
                    <p className="text-slate-400 text-xs italic leading-relaxed font-medium">
                      <b className="text-white px-1.5 bg-white/10 rounded">"Look!"</b> veya <b className="text-white px-1.5 bg-white/10 rounded">"Listen!"</b> gibi uyarılarla başlayan cümleler o an bir eylemin başladığını gösterir ve mutlaka <span className="text-pink-400 font-black">-ing</span> yapısı gerektirir.
                    </p>
                 </div>
              </div>
              <div className="flex flex-col justify-center space-y-5 md:border-l border-white/5 md:pl-10">
                 <div className="flex items-center gap-4">
                    <span className="text-[9px] font-black bg-red-500/20 text-red-400 px-2 py-1 rounded uppercase tracking-tighter">Wrong Logic</span>
                    <p className="text-red-400/50 line-through text-base italic font-medium antialiased">Look! The bus comes.</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="text-[9px] font-black bg-green-500/20 text-green-400 px-2 py-1 rounded uppercase tracking-tighter shadow-[0_0_10px_rgba(34,197,94,0.3)]">Correct Logic</span>
                    <p className="text-green-400 font-black text-2xl tracking-tight antialiased">Look! The bus is coming.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/40 p-12 rounded-[56px] border border-white/5 shadow-inner overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 blur-[100px]" />
        <h2 className="text-4xl font-black mb-12 text-center text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter antialiased">
          <Trophy className="text-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]" /> Mini Alıştırma
        </h2>
        
        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex flex-wrap gap-4 justify-center mb-16 px-4">
            {content.challenge?.words.map(w => <DraggableItem key={w} id={w} label={w} />)}
          </div>
          <div className="space-y-12 text-xl max-w-3xl mx-auto bg-slate-900/50 p-12 rounded-[40px] border border-white/5 shadow-2xl relative z-10">
            {content.challenge?.questions.map((q) => (
              <div key={q.id} className="flex flex-wrap items-center leading-loose font-bold text-slate-100 antialiased">
                {q.text[0]}
                <DroppableZone id={q.id} currentAnswer={answers[q.id]} showResult={showResult} isCorrect={answers[q.id] === q.correct} onShowHint={(id: string) => setActiveHint(id)} />
                {q.text[1]}
              </div>
            ))}
          </div>
        </DndContext>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 relative z-10">
          <button 
            onClick={() => setShowResult(true)} 
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full font-black uppercase italic shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all text-white active:scale-95"
          >
            Yanıtları Kontrol Et
          </button>
          <button 
            onClick={() => { setAnswers({}); setShowResult(false); setActiveHint(null); }}
            className="text-slate-500 hover:text-white underline text-xs font-black uppercase tracking-widest transition-colors"
          >
            Sıfırla
          </button>
        </div>
      </section>
    </div>
  );
};

export default GrammarLesson;