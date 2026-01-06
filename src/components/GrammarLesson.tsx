import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { ArrowLeft, Lightbulb, AlertTriangle, Trophy, XCircle, Zap, Brain } from 'lucide-react';
import { grammarData } from '../data/grammarData';

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

// --- Ana Bileşen ---
const GrammarLesson = ({ topicTitle, onBack }: { topicTitle: string; onBack: () => void }) => {
  // Veri gelene kadar hata vermemesi için optional chaining ve boş obje kontrolü ekledik
  const content = grammarData["present-simple-vs-continuous"];
  const [showResult, setShowResult] = useState(false);
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | null>>({});

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over) {
      setAnswers(prev => ({ ...prev, [over.id]: active.id as string }));
      setShowResult(false);
    }
  };

  // Content yüklenmediyse yükleniyor ekranı göstererek TypeError'ı engelliyoruz
  if (!content) return <div className="p-20 text-center text-cyan-500">Yükleniyor...</div>;

  const activeQuestion = activeHint ? content.challenge.questions.find(q => q.id === activeHint) : null;

  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in duration-500 font-sans relative text-slate-200">
      
      {/* İpucu Modalı */}
      {activeHint && activeQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-yellow-500/50 p-8 rounded-[32px] max-w-lg w-full shadow-[0_0_50px_rgba(234,179,8,0.2)] relative">
            <button onClick={() => setActiveHint(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><XCircle size={24} /></button>
            
            <div className="flex items-center gap-3 mb-6 text-yellow-500 border-b border-white/5 pb-4">
              <Brain size={32} />
              <h3 className="text-xl font-bold uppercase italic tracking-tighter">Dil Bilgisi Analizi</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <span className="text-[10px] text-red-500 font-black uppercase tracking-widest block mb-2">Hata Tespiti</span>
                    <div className="p-4 bg-red-500/5 border-l-4 border-red-500 rounded-r-xl">
                        <p className="text-slate-200 text-sm leading-relaxed italic">
                            Cümlede kullandığın <span className="text-white font-bold underline">"{answers[activeHint]}"</span> ifadesi yanlıştır.
                            {" " + (activeQuestion.specificHints?.[answers[activeHint] as string] || "Bu kullanım cümle yapısıyla uyuşmuyor.")}
                        </p>
                    </div>
                </div>

                <div>
                    <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest block mb-2">Gramer Notu</span>
                    <p className="text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-slate-800 italic">
                        {activeQuestion.hint}
                    </p>
                </div>

                <div className="bg-black/40 border border-cyan-500/30 p-4 rounded-2xl text-center shadow-inner">
                    <span className="text-[9px] text-cyan-400/60 font-black uppercase tracking-[0.2em] block mb-1">Cümle Yapısı</span>
                    <div className="text-lg font-mono text-white tracking-tighter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                        {activeQuestion.visualFormula}
                    </div>
                </div>
            </div>

            <button onClick={() => setActiveHint(null)} className="mt-8 w-full py-4 bg-yellow-500/20 text-yellow-500 font-black rounded-2xl border border-yellow-500/30 hover:bg-yellow-500/40 transition-all uppercase italic tracking-widest">
              Anladım
            </button>
          </div>
        </div>
      )}

      <button onClick={onBack} className="flex items-center text-slate-400 hover:text-cyan-400 mb-10 transition-all group px-4 py-2 rounded-lg hover:bg-white/5">
        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Back to Library
      </button>

      <h1 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">{content.title}</h1>

      <div className="mb-12 bg-slate-900/50 p-8 rounded-[40px] border border-cyan-500/20 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5"><Zap size={100} /></div>
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.3em] block mb-2">The Formula</span>
        <div className="text-3xl md:text-5xl font-mono text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{content.formula}</div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border-2 border-cyan-500/40 rounded-[32px] p-8 bg-slate-900/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <h2 className="text-xl font-bold mb-6 text-cyan-300 italic uppercase">🟦 Usage Cases</h2>
          <ul className="space-y-4 text-sm">
            {content.usage?.map((u, i) => (
              <li key={i} className="flex justify-between border-b border-white/5 pb-2 text-slate-300 font-medium"><span>{u.icon} {u.situation}</span> <span className="text-slate-500 italic font-normal">{u.example}</span></li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-purple-500/40 rounded-[32px] p-8 bg-slate-900/40 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
          <h2 className="text-xl font-bold mb-6 text-purple-300 italic uppercase">🟩 Structure</h2>
          <div className="space-y-3 text-sm font-mono">
             {content.structure?.map((s, i) => (
               <div key={i} className={`flex justify-between p-2 rounded ${s.color} bg-white/5 text-white/90`}><span className="font-bold">{s.type}</span> <span>{s.pattern}</span></div>
             ))}
          </div>
        </div>
      </div>

      <section className="mb-16 bg-red-950/20 border border-red-500/30 p-10 rounded-[40px]">
        <h2 className="text-2xl font-black mb-8 text-red-500 italic uppercase flex items-center gap-2 tracking-tighter"><AlertTriangle /> Important Notes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.commonMistakes?.map((m, i) => (
            <div key={i} className="bg-black/40 p-6 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-red-400 font-bold mb-2 text-[10px] uppercase tracking-widest">{m.title}</h3>
              <p className="text-red-400/60 line-through text-xs mb-1">Wrong: {m.wrong}</p>
              <p className="text-green-400 font-bold mb-3">Right: {m.right}</p>
              <p className="text-slate-500 text-[10px] italic leading-relaxed border-t border-white/5 pt-2 font-medium">{m.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/40 p-12 rounded-[56px] border border-white/5 shadow-inner">
        <h2 className="text-4xl font-black mb-12 text-center italic text-white flex items-center justify-center gap-4 uppercase tracking-tighter">
          <Trophy className="text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" /> MINI CHALLENGE
        </h2>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {content.challenge?.words.map(w => <DraggableItem key={w} id={w} label={w} />)}
          </div>
          <div className="space-y-12 text-xl max-w-3xl mx-auto bg-slate-900/50 p-12 rounded-[40px] border border-white/5 shadow-inner">
            {content.challenge?.questions.map((q) => (
              <div key={q.id} className="flex flex-wrap items-center leading-loose font-bold text-slate-100">
                {q.text[0]}
                <DroppableZone id={q.id} currentAnswer={answers[q.id]} showResult={showResult} isCorrect={answers[q.id] === q.correct} onShowHint={(id: string) => setActiveHint(id)} />
                {q.text[1]}
              </div>
            ))}
          </div>
        </DndContext>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-6">
          <button 
            onClick={() => setShowResult(true)} 
            disabled={false} 
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full font-black uppercase italic shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all disabled:opacity-30 text-white"
          >
            Check Answers
          </button>
          
          <button 
            onClick={() => { setAnswers({}); setShowResult(false); setActiveHint(null); }}
            className="text-slate-500 hover:text-white underline text-xs font-black uppercase tracking-[0.2em] transition-colors"
          >
            Reset Answers
          </button>
        </div>
      </section>
    </div>
  );
};

export default GrammarLesson;