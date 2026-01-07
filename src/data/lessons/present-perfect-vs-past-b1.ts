// src/data/lessons/present-perfect-vs-past-b1.ts
import { Zap, Clock, Calendar, Award, History, Target } from 'lucide-react';

export const presentPerfectVsPastB1Data = {
  id: 'b1-2.1-perf-vs-past',
  title: '2.1 PRESENT PERFECT VS PAST SIMPLE',
  
  // Üst kısımdaki neon formül kutucukları
  formulas: {
    positive: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "have / has / V2", detail: "Zaman Çekimi", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb (V3 / V2)", detail: "Fiil Hali", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Object / Time", detail: "Nesne / Zaman", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "haven't-hasn't / didn't", detail: "Yardımcı Fiil", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb (V3 / V1)", detail: "Fiil", color: "border-pink-500/30 text-pink-400" },
      { label: "Object", detail: "Nesne", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [
      { label: "Have-Has / Did", detail: "Yardımcı Fiil", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb (V3 / V1)", detail: "Fiil Hali", color: "border-pink-500/30 text-pink-400" },
      { label: "Object", detail: "Nesne", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  // Ortadaki renkli cümle analizi ve çeviri kısmı
  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-blue-400", underline: true },
        { text: "have visited", color: "text-purple-400" },
        { text: "Paris", color: "text-emerald-400" },
        { text: "three times.", color: "text-pink-400" }
      ],
      translation: "Paris'i üç kez ziyaret ettim. (Deneyim - Zaman belirsiz)"
    },
    negative: {
      parts: [
        { text: "We", color: "text-blue-400", underline: true },
        { text: "did not", color: "text-red-400" },
        { text: "visit", color: "text-pink-400" },
        { text: "them", color: "text-emerald-400" },
        { text: "last night.", color: "text-purple-400" }
      ],
      translation: "Onları dün gece ziyaret etmedik. (Net Zaman - Eylem bitti)"
    },
    question: {
      parts: [
        { text: "Have", color: "text-purple-400", underline: true },
        { text: "you", color: "text-blue-400" },
        { text: "ever", color: "text-yellow-400" },
        { text: "tried", color: "text-pink-400" },
        { text: "sushi?", color: "text-emerald-400" }
      ],
      translation: "Hiç sushi denedin mi? (Hayat boyu süren bir deneyim sorgusu)"
    }
  },

  // Üçlü senaryo kartları
  scenarios: [
    { title: "Deneyimler", icon: Award, desc: "Hayat boyu yapılan, zamanı değil sonucu önemli olan olaylar (Perfect).", color: "from-blue-500/20 to-transparent" },
    { title: "Net Geçmiş Zaman", icon: Calendar, desc: "Yesterday, last week gibi zamanı belli olan bitmiş eylemler (Past).", color: "from-pink-500/20 to-transparent" },
    { title: "Süreç vs. Nokta Atışı", icon: Target, desc: "Hala devam eden süreçler için Perfect, bitmiş noktalar için Past.", color: "from-emerald-500/20 to-transparent" }
  ],

  // Kritik uyarı ve tuzak kutuları
  warnings: [
    {
      title: "Zaman Tetikleyicileri",
      wrong: "I have seen him yesterday.",
      right: "I saw him yesterday.",
      note: "'Yesterday, ago, last' gibi kelimeler varsa Present Perfect ASLA kullanılmaz."
    },
    {
      title: "V2 vs. V3 Farkı",
      wrong: "He has went to London.",
      right: "He has gone to London.",
      note: "Perfect yapısında fiilin 3. hali (gone), Past yapısında 2. hali (went) kullanılır."
    }
  ],

  // MİNİ ALIŞTIRMA (6 Soruluk En Ayrıntılı Set)
  challenge: {
    words: ["have been", "visited", "Have", "tried", "finished", "saw", "worked"],
    questions: [
      {
        id: "q1",
        text: ["I ", " to Paris three times in my life."],
        correct: "have been",
        hint: "Hayat tecrübesinden bahsediyor, zaman belirsiz.",
        visualFormula: "Subject + HAVE + V3 (Experience)"
      },
      {
        id: "q2",
        text: ["We ", " our grandparents last night."],
        correct: "visited",
        hint: "'Last night' net bir zaman belirtir.",
        visualFormula: "Subject + V2 (Finished Time)"
      },
      {
        id: "q3",
        text: ["", " you ever tried Mexican food?"],
        correct: "Have",
        hint: "'Ever' kelimesi tecrübe sorularında Perfect ile kullanılır.",
        visualFormula: "HAVE + Subject + V3"
      },
      {
        id: "q4",
        text: ["She ", " her project two hours ago."],
        correct: "finished",
        hint: "'Ago' ifadesi eylemin bittiği net zamanı gösterir.",
        visualFormula: "Subject + V2 (Past)"
      },
      {
        id: "q5",
        text: ["I ", " that movie at the cinema yesterday."],
        correct: "saw",
        hint: "Eylem dün (yesterday) gerçekleşti ve bitti.",
        visualFormula: "Subject + V2 (Yesterday)"
      },
      {
        id: "q6",
        text: ["My father ", " in that factory in 1990."],
        correct: "worked",
        hint: "Geçmişteki belirli bir yıl (1990) Past Simple gerektirir.",
        visualFormula: "Subject + V2 (Specific Year)"
      }
    ]
  }
};