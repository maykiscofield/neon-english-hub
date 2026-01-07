import React from 'react';
import { ArrowLeft, BookOpen, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Adverb {
  word: string;
  percent: number;
  translation: string;
  example: string;
  color: string;
}

const adverbs: Adverb[] = [
  { word: "Always", percent: 100, translation: "Her zaman", example: "I always brush my teeth.", color: "bg-emerald-500" },
  { word: "Usually", percent: 90, translation: "Genellikle", example: "I usually walk to work.", color: "bg-emerald-400" },
  { word: "Normally / Generally", percent: 80, translation: "Çoğunlukla", example: "I normally get up early.", color: "bg-green-400" },
  { word: "Often / Frequently", percent: 70, translation: "Sık sık", example: "I often read books.", color: "bg-lime-400" },
  { word: "Sometimes", percent: 50, translation: "Bazen", example: "I sometimes forget my keys.", color: "bg-yellow-400" },
  { word: "Occasionally", percent: 30, translation: "Ara sıra", example: "I occasionally eat junk food.", color: "bg-orange-400" },
  { word: "Seldom", percent: 10, translation: "Nadiren", example: "I seldom go to the gym.", color: "bg-orange-500" },
  { word: "Rarely", percent: 5, translation: "Çok nadir", example: "I rarely watch horror movies.", color: "bg-red-500" },
  { word: "Hardly ever", percent: 2, translation: "Neredeyse hiç", example: "I hardly ever lose my temper.", color: "bg-red-600" },
  { word: "Never", percent: 0, translation: "Asla / Hiç", example: "I never smoke.", color: "bg-red-700" },
];

const FrequencyAdverbs = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-10">
          <Link to="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">Adverbs of Frequency</h1>
        </header>

        {/* Info Card */}
        <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl mb-8 flex gap-4 items-start text-blue-200">
          <BookOpen className="shrink-0 mt-1" size={20} />
          <p className="text-sm leading-relaxed">
            Sıklık zarfları, bir eylemi ne kadar sık yaptığımızı anlatır. Genellikle <strong>"How often...?"</strong> (Ne sıklıkla...?) sorusuna cevap verirler.
          </p>
        </div>

        {/* Adverbs List */}
        <div className="grid gap-3">
          {adverbs.map((item) => (
            <div key={item.word} className="bg-[#141414] border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-white/20 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-16 flex flex-col items-center">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.percent}%</span>
                  <div className="w-full h-1.5 bg-white/5 rounded-full mt-1 overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{item.word}</h3>
                  <p className="text-xs text-gray-500 italic font-medium">{item.translation}</p>
                </div>
              </div>
              <div className="hidden md:block bg-black/40 px-4 py-2 rounded-lg border-l-2 border-blue-500">
                <p className="text-sm text-gray-300 italic">"{item.example}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grammar Rules Section */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <AlertCircle size={20} className="text-yellow-500" />
            Cümle İçindeki Konumu
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1a1a1a] p-5 rounded-2xl border border-white/5">
              <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-tighter">1. Ana Fiilden Önce</p>
              <p className="text-lg">Subject + <span className="text-blue-400 font-bold">Adverb</span> + Verb</p>
              <p className="text-sm text-gray-400 mt-2 italic">Example: I <strong>always</strong> eat breakfast.</p>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-2xl border border-white/5">
              <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-tighter">2. "To Be" Fiilinden Sonra</p>
              <p className="text-lg">Be (am/is/are) + <span className="text-blue-400 font-bold">Adverb</span></p>
              <p className="text-sm text-gray-400 mt-2 italic">Example: You are <strong>never</strong> late.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrequencyAdverbs;