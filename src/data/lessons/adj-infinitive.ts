import { Zap, Heart, Brain, AlertCircle, Info, Sparkles, Star } from 'lucide-react';

export const adjInfinitiveData = {
  // Blueprint hatasını çözen ID
  id: '11.2-adj-to-infinitive', 
  title: '11.2 ADJECTIVE + TO + INFINITIVE',
  description: 'Duygularınızı veya bir eylemin zorluk derecesini anlatırken sıfatları fiillere bağlamanın en net yolu.',

  formulas: {
    positive: [
      { label: "GİRİŞ (ÖZNE + BE)", detail: "It is / I am", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "SIFAT", detail: "Adjective", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      // TO BURADA SARI OLDU:
      { label: "KÖPRÜ", detail: "TO", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }, 
      { label: "YALIN FİİL", detail: "Verb (V1)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [
      { label: "It is", detail: "Giriş", color: "border-blue-500/30 text-blue-400" },
      { label: "Adjective", detail: "Sıfat", color: "border-purple-500/30 text-purple-400" },
      { label: "NOT TO", detail: "Olumsuz Köprü", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb", detail: "Fiil", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [
      { label: "Is it / Are you", detail: "Soru", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Adjective", detail: "Sıfat", color: "border-purple-500/30 text-purple-400" },
      { label: "to + Verb?", detail: "Fiil?", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "It is", color: "text-blue-400" },
        { text: "nice", color: "text-purple-400", underline: true },
        { text: "to meet", color: "text-yellow-400" }, // TO SARI
        { text: "you.", color: "text-emerald-400" }
      ],
      translation: "Seninle tanışmak güzel." // Parantez içi temizlendi
    },
    negative: {
      parts: [
        { text: "It is", color: "text-blue-400" },
        { text: "important", color: "text-purple-400", underline: true },
        { text: "not to", color: "text-red-400" },
        { text: "be", color: "text-yellow-400" },
        { text: "late.", color: "text-white" }
      ],
      translation: "Geç kalmamak önemlidir."
    },
    question: {
      parts: [
        { text: "Is it", color: "text-emerald-400" },
        { text: "possible", color: "text-purple-400", underline: true },
        { text: "to buy", color: "text-yellow-400" },
        { text: "tickets online?", color: "text-white" }
      ],
      translation: "Online bilet almak mümkün mü?"
    }
  },

  // SENİN İSTEDİĞİN AYRINTILI KISIMLARI GERİ GETİRDİM:
  scenarios: [
    { title: "Duygular", icon: Heart, desc: "Bir habere veya duruma verdiğiniz tepkiyi (sevinç, şaşkınlık) anlatırken bu yapıyı kullanın.", color: "from-pink-500/20 to-transparent" },
    { title: "Yorum Yapma", icon: Brain, desc: "Bir eylemin ne kadar kolay, zor veya tehlikeli olduğunu söylerken en kestirme yoldur.", color: "from-blue-500/20 to-transparent" },
    { title: "Gereklilik Bildirme", icon: Star, desc: "Yapılması gereken şeylerin önem derecesini (important, necessary) vurgularken kullanılır.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "🚀 Altın Kural: Fiil Yalın Kalır",
      wrong: "It is easy to learning.",
      right: "It is easy to learn.",
      note: "Sıfattan sonra gelen 'to' ekinden sonra fiile asla -ing, -ed veya -s takısı eklemeyin."
    },
    {
      title: "💎 'Not' Kelimesinin Yeri",
      wrong: "It is better to not go.",
      right: "It is better not to go.",
      note: "Olumsuzluk bildiren 'not' kelimesi her zaman 'to'dan önce gelmelidir."
    },
    {
      title: "⚠️ Anlam Karmaşası",
      wrong: "I am happy seeing you.",
      right: "I am happy to see you.",
      note: "Duygu sıfatlarından sonra fiil getirmek için 'to' köprüsü şarttır."
    }
  ],

  challenge: {
    words: ["to see", "to learn", "not to forget", "to help", "to go", "to stay"],
    questions: [
      { id: "q1", text: ["I am very glad ", " you again."], correct: "to see", hint: "Glad + TO + Verb", visualFormula: "Adj + TO + Verb" },
      { id: "q2", text: ["It is difficult ", " Chinese."], correct: "to learn", hint: "Difficult + TO + Verb", visualFormula: "Adj + TO + Verb" },
      { id: "q3", text: ["It is important ", " your keys."], correct: "not to forget", hint: "Important + NOT TO + Verb", visualFormula: "Adj + NOT TO + Verb" },
      { id: "q4", text: ["She is always ready ", " her friends."], correct: "to help", hint: "Ready + TO + Verb", visualFormula: "Adj + TO + Verb" },
      { id: "q5", text: ["It is too cold ", " swimming."], correct: "to go", hint: "Cold + TO + Verb", visualFormula: "Adj + TO + Verb" },
      { id: "q6", text: ["Is it safe ", " here?"], correct: "to stay", hint: "Safe + TO + Verb", visualFormula: "Adj + TO + Verb" }
    ]
  }
};