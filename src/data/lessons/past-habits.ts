// src/data/lessons/past-habits.ts
import { Zap, Clock, History, AlertCircle, RotateCcw, Ghost } from 'lucide-react';

export const pastHabitsData = {
  id: 'b1-5.1-past-habits',
  title: '5.1 GEÇMİŞ ALIŞKANLIKLAR (USED TO / WOULD)',
  
  // Üst kısımdaki neon formül kutucukları (Olumlu, Olumsuz ve Soru yapıları)
  formulas: {
    positive: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "used to / would", detail: "Geçmiş Alışkanlık", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Object / Time", detail: "Nesne / Zaman", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "didn't use to", detail: "Olumsuz Alışkanlık", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400" },
      { label: "Object", detail: "Nesne", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [
      { label: "Did", detail: "Yardımcı Fiil", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "use to", detail: "Alışkanlık Sorusu", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Verb (V1)?", detail: "Yalın Fiil", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "My grandfather", color: "text-blue-400", underline: true },
        { text: "would tell", color: "text-purple-400" },
        { text: "us", color: "text-emerald-400" },
        { text: "stories every night.", color: "text-pink-400" }
      ],
      translation: "Büyükbabam bize her gece hikayeler anlatırdı. (Geçmişte tekrarlanan eylem.)"
    },
    negative: {
      parts: [
        { text: "I", color: "text-blue-400", underline: true },
        { text: "didn't", color: "text-red-400" },
        { text: "use to", color: "text-purple-400" },
        { text: "like", color: "text-pink-400" },
        { text: "vegetables.", color: "text-emerald-400" }
      ],
      translation: "Eskiden sebze sevmezdim. (Geçmişteki bir durum / artık seviyorum.)"
    },
    question: {
      parts: [
        { text: "Did", color: "text-purple-400", underline: true },
        { text: "you", color: "text-blue-400" },
        { text: "use to", color: "text-pink-400" },
        { text: "live", color: "text-emerald-400" },
        { text: "in Paris?", color: "text-white" }
      ],
      translation: "Eskiden Paris'te mi yaşardın? (Geçmişteki bir durumun sorgusu.)"
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "Eski Alışkanlıklar", icon: History, desc: "Geçmişte düzenli yaptığımız ama artık bıraktığımız hareketler.", color: "from-blue-500/20 to-transparent" },
    { title: "Geçmiş Durumlar", icon: Ghost, desc: "Eskiden var olan ama artık değişmiş durumlar (be, live, have).", color: "from-purple-500/20 to-transparent" },
    { title: "Nostaljik Eylemler", icon: RotateCcw, desc: "Genellikle hikaye anlatırken kullanılan 'hey gidi günler' tadındaki tekrarlar (Would).", color: "from-pink-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "'Used to' vs 'Would' Farkı",
      wrong: "I would be a student. / I would live in London.",
      right: "I used to be a student. / I used to live in London.",
      note: "'Would', durum bildiren fiillerle (be, live, have, know) kullanılmaz. Sadece eylemlerle (run, play, go) kullanılır."
    },
    {
      title: "Yazım Tuzağı: 'd' Harfi",
      wrong: "Did you used to...? / I didn't used to...",
      right: "Did you use to...? / I didn't use to...",
      note: "Soru ve olumsuz cümlelerde 'did' yardımcı fiili olduğu için 'use' kelimesindeki 'd' harfi atılır."
    },
    {
      title: "Tek Seferlik Olaylar",
      wrong: "I used to move to New York in 2010.",
      right: "I moved to New York in 2010.",
      note: "Geçmişte sadece bir kez olmuş olaylar için 'used to' veya 'would' kullanılamaz; sadece Past Simple kullanılır."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["used to", "would", "didn't use to", "use to", "lived", "playing"],
    questions: [
      {
        id: "q1",
        text: ["I ", " live in a small village when I was a child."],
        correct: "used to",
        hint: "Yaşamak (live) bir durumdur, bu yüzden 'would' kullanılamaz.",
        visualFormula: "State Verb (Live) -> Only USED TO"
      },
      {
        id: "q2",
        text: ["Every summer, we ", " go to the beach for hours."],
        correct: "would",
        hint: "Tekrarlanan bir eylem ve nostaljik bir anlatım var.",
        visualFormula: "Action Verb (Go) -> USED TO or WOULD"
      },
      {
        id: "q3",
        text: ["Did you ", " have long hair?"],
        correct: "use to",
        hint: "Soru cümlesinde 'did' olduğu için sondaki 'd' harfine veda et!",
        visualFormula: "Did + Subject + USE TO (No 'd')"
      },
      {
        id: "q4",
        text: ["I ", " like sushi, but now I love it."],
        correct: "didn't use to",
        hint: "Eskiden öyle değildi anlamında olumsuz yapı.",
        visualFormula: "Subject + didn't + USE TO"
      },
      {
        id: "q5",
        text: ["My brother ", " a motorbike last year."],
        correct: "lived", // Buradaki mantık: Tek seferlik olay. Seçeneklerde uygun fiil yoksa Past Simple aranmalı.
        hint: "Geçmişte bir kez olan olaylarda bu yapılar kullanılamaz.",
        visualFormula: "Single Action -> Past Simple (V2)"
      },
      {
        id: "q6",
        text: ["He ", " always bring us presents from his travels."],
        correct: "would",
        hint: "Karakteristik bir eylem ve tekrarlanan hareket.",
        visualFormula: "Repeated Action -> WOULD"
      }
    ]
  }
};