import { Zap, AlertCircle, HelpCircle, Repeat, Sparkles, Brain, Info } from 'lucide-react';

export const gerundsPrepositionsData = {
  id: '9.3-gerunds-prepositions',
  title: '9.3 GERUNDS (AFTER PREPOSITIONS)',
  description: 'İngilizcede edatlardan (in, at, with, about vb.) sonra gelen fiillerin neden isimleştiğini ve nasıl kullanıldığını keşfedin.',
  
  formulas: {
    positive: [
      { label: "Preposition", detail: "in, at, with, about...", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Verb + ING", detail: "Gerund (İsim-Fiil)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Complement", detail: "Devamı", color: "border-white/10 text-white" }
    ],
    negative: [
      { label: "Preposition", detail: "Edat", color: "border-blue-500/30 text-blue-400" },
      { label: "NOT", detail: "Olumsuzluk", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb + ING", detail: "Fiil", color: "border-purple-500/30 text-purple-400" }
    ],
    question: [
      { label: "Auxiliary Verb", detail: "Yardımcı Fiil", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Prep + ING", detail: "Ana Yapı", color: "border-purple-500/30 text-purple-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "She is good", color: "text-white" },
        { text: "at", color: "text-blue-400" },
        { text: "drawing.", color: "text-purple-400", underline: true }
      ],
      translation: "Çizim yapmakta (çizmekte) iyidir. (Edattan sonra fiil isimleşir.)"
    },
    negative: {
      parts: [
        { text: "I'm worried", color: "text-white" },
        { text: "about", color: "text-blue-400" },
        { text: "not", color: "text-red-400" },
        { text: "winning", color: "text-purple-400", underline: true },
        { text: "the race.", color: "text-white" }
      ],
      translation: "Yarışı kazanamamaktan endişeleniyorum. (Olumsuzluk araya girer.)"
    },
    question: {
      parts: [
        { text: "Are you thinking", color: "text-emerald-400" },
        { text: "about", color: "text-blue-400" },
        { text: "buying", color: "text-purple-400", underline: true },
        { text: "a new car?", color: "text-white" }
      ],
      translation: "Yeni bir araba almayı mı düşünüyorsun?"
    }
  },

  scenarios: [
    { title: "Yetenekler", icon: Zap, desc: "Neyde iyi (good at) veya kötü olduğunuzu anlatırken fiili isim yapın.", color: "from-yellow-500/20 to-transparent" },
    { title: "İlgi Alanları", icon: Sparkles, desc: "Neyle ilgilendiğinizi (interested in) söylerken kullanılır.", color: "from-pink-500/20 to-transparent" },
    { title: "Korkular", icon: Brain, desc: "Neyden korktuğunuzu (afraid of) anlatırken eylemi isme dönüştürün.", color: "from-blue-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Yalın Fiil Hatası",
      wrong: "Thank you for help me.",
      right: "Thank you for helping me.",
      note: "İngilizcede kural katıdır: Edattan sonra gelen fiil her zaman -ing alarak isimleşmelidir."
    },
    {
      title: "Without (Yapmadan) Kuralı",
      wrong: "He left without say goodbye.",
      right: "He left without saying goodbye.",
      note: "'Without' kelimesinden sonra fiili yalın bırakmak en yaygın hatadır."
    },
    {
      title: "Before / After Kullanımı",
      wrong: "After eat, I slept.",
      right: "After eating, I slept.",
      note: "Özne (I, you) yoksa bu kelimelerden sonra fiil direkt -ing alır."
    }
  ],

  challenge: {
    words: ["coming", "doing", "helping", "losing", "visiting", "walking", "not"],
    questions: [
      {
        id: "q1",
        text: ["Thank you for ", " me with my bags."],
        correct: "helping",
        hint: "For bir edattır, fiil isimleşmelidir.",
        visualFormula: "PREP + V-ing"
      },
      {
        id: "q2",
        text: ["I am interested in ", " art galleries."],
        correct: "visiting",
        hint: "İlgi alanları (Interested in).",
        visualFormula: "IN + Gerund"
      },
      {
        id: "q3",
        text: ["We are tired of ", "."],
        correct: "walking",
        hint: "Yorulmak (Tired of).",
        visualFormula: "OF + V-ing"
      },
      {
        id: "q4",
        text: ["What about ", " to the cinema?"],
        correct: "coming",
        hint: "Öneri sunarken (What about).",
        visualFormula: "ABOUT + Gerund"
      },
      {
        id: "q5",
        text: ["He is afraid of ", " his wallet."],
        correct: "losing",
        hint: "Korkular (Afraid of).",
        visualFormula: "PREP + V-ing"
      },
      {
        id: "q6",
        text: ["Are you good at ", " sports?"],
        correct: "doing",
        hint: "Yetenekler (Good at).",
        visualFormula: "AT + Gerund"
      }
    ]
  }
};