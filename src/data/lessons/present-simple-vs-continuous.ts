// src/data/lessons/present-simple-vs-continuous.ts

export const presentSimpleVsContData = {
  id: 'present-simple-vs-continuous',
  title: '2.2 PRESENT SIMPLE VS CONTINUOUS',
  
  // Formül Blokları (Neon kutuların içindeki veriler)
  formulas: {
    positive: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Am / Is / Are", detail: "Yardımcı Fiil", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb + ING", detail: "Fiil (V)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Object", detail: "Nesne (O)", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "Am / Is / Are", detail: "Yardımcı Fiil", color: "border-purple-500/30 text-purple-400" },
      { label: "NOT", detail: "Olumsuzluk", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb + ING", detail: "Fiil (V)", color: "border-pink-500/30 text-pink-400" },
      { label: "Object", detail: "Nesne (O)", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [
      { label: "Am / Is / Are", detail: "Yardımcı Fiil", color: "border-purple-500/30 text-purple-400" },
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb + ING", detail: "Fiil (V)", color: "border-pink-500/30 text-pink-400" },
      { label: "Object", detail: "Nesne (O)", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "The system", color: "text-blue-400", underline: true },
        { text: "is", color: "text-purple-400" },
        { text: "working", color: "text-pink-400" },
        { text: "correctly.", color: "text-emerald-400" }
      ],
      translation: "Sistem doğru şekilde çalışıyor."
    },
    negative: {
      parts: [
        { text: "The system", color: "text-blue-400", underline: true },
        { text: "is", color: "text-purple-400" },
        { text: "not", color: "text-red-500" },
        { text: "working", color: "text-pink-400" },
        { text: "correctly.", color: "text-emerald-400" }
      ],
      translation: "Sistem doğru şekilde çalışmıyor."
    },
    question: {
      parts: [
        { text: "Is", color: "text-purple-400", underline: true },
        { text: "the system", color: "text-blue-400" },
        { text: "working", color: "text-pink-400" },
        { text: "correctly?", color: "text-emerald-400" }
      ],
      translation: "Sistem doğru şekilde çalışıyor mu?"
    }
  },

  // Senaryo Kartları
  scenarios: [
    { title: "Tam Şu An", desc: "Konuşma anında gerçekleşen eylemler.", color: "from-blue-500/20 to-transparent" },
    { title: "Değişen Durumlar", desc: "Süregelen trendler ve değişimler.", color: "from-pink-500/20 to-transparent" },
    { title: "Geçici Süreçler", desc: "Sadece belirli bir süre devam eden işler.", color: "from-emerald-500/20 to-transparent" }
  ],

  // Uyarılar & Tuzaklar
  warnings: [
    {
      title: "The 'AM/IS/ARE' Trap",
      wrong: "I am play football every day.",
      right: "I play football every day.",
      note: "Geniş zaman eylemlerinin önüne 'am/is/are' getirilmez."
    },
    {
      title: "Stative Verbs",
      wrong: "I am knowing you.",
      right: "I know you.",
      note: "Zihin, duygu ve sahiplik bildiren fiiller genellikle -ing almaz."
    }
  ],

  // Mini Alıştırma Verileri
  challenge: {
    words: ["am", "is", "are", "working", "works"],
    questions: [
      {
        id: "q1",
        text: ["The developer ", " on the new project right now."],
        correct: "is",
        hint: "Tekil bir özne ve 'now' zaman zarfı var.",
        visualFormula: "Subject (He/She/It) + IS + V-ing"
      }
    ]
  }
};