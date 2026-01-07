import { Target, Compass, Flag, Lightbulb, AlertCircle, HelpCircle, GraduationCap, Zap, Search } from 'lucide-react';

export const purposeInfinitivesData = {
  id: '8.2-purpose-infinitives',
  title: '8.2 AMAÇ BİLDİREN INFINITIVES (TO + VERB)',
  
  formulas: {
    positive: [ // Temel Amaç Cümlesi
      { label: "Main Clause", detail: "Yaptığın eylem", color: "border-white/10 text-white" },
      { label: "to", detail: "-mak için", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb (V1)", detail: "Amacın olan fiil", color: "border-blue-500/30 text-blue-400" }
    ],
    negative: [ // Olumsuz Amaç (Yapmamak için)
      { label: "Main Clause", detail: "Yaptığın eylem", color: "border-white/10 text-white" },
      { label: "in order not to", detail: "-mamak için", color: "border-red-500/30 text-red-400" },
      { label: "Verb (V1)", detail: "Amacın olan fiil", color: "border-blue-500/30 text-blue-400" }
    ],
    question: [ // 'Neden' Sorusu ve Cevabı
      { label: "Why...?", detail: "Neden yaptın?", color: "border-yellow-500/30 text-yellow-400" },
      { label: "To + Verb", detail: "Kısa cevap: ... için", color: "border-purple-500/30 text-purple-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I went to the kitchen", color: "text-white" },
        { text: "to", color: "text-purple-400", underline: true },
        { text: "drink", color: "text-blue-400" },
        { text: "some water.", color: "text-white" }
      ],
      translation: "Su içmek için mutfağa gittim. (Neden gittin? -> Su içmek için.)"
    },
    negative: {
      parts: [
        { text: "I woke up early", color: "text-white" },
        { text: "in order not to", color: "text-red-400", underline: true },
        { text: "miss", color: "text-blue-400" },
        { text: "the bus.", color: "text-white" }
      ],
      translation: "Otobüsü kaçırmamak için erken uyandım. (Olumsuz amaçlarda 'not to' yerine 'in order not to' çok daha profesyonel durur.)"
    },
    question: {
      parts: [
        { text: "Why are you learning English?", color: "text-white" },
        { text: "To", color: "text-purple-400", underline: true },
        { text: "get", color: "text-blue-400" },
        { text: "a better job.", color: "text-white" }
      ],
      translation: "Neden İngilizce öğreniyorsun? Daha iyi bir iş bulmak için."
    }
  },

  scenarios: [
    { title: "Günlük İhtiyaçlar", icon: Lightbulb, desc: "Markete gitmek, para çekmek gibi basit eylemlerin nedenini açıklarken.", color: "from-yellow-500/20 to-transparent" },
    { title: "Gelecek Hedefleri", icon: Target, desc: "Kariyer veya eğitim planlarını 'To' kullanarak hedeflere bağlarken.", color: "from-purple-500/20 to-transparent" },
    { title: "Yolculuk ve Rota", icon: Compass, desc: "Bir yere neden gittiğini veya neden o yolu seçtiğini anlatırken.", color: "from-blue-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Püf Noktası: 'TO' vs 'FOR'",
      wrong: "I go to gym FOR lose weight.",
      right: "I go to gym TO lose weight.",
      note: "Fiilden önce asla 'for' kullanamazsın. Eğer eylem varsa 'TO', isim varsa 'FOR' gelir. (For energy vs To get energy)."
    },
    {
      title: "Çift 'TO' Tuzağı",
      wrong: "I went to the bank to to get money.",
      right: "I went to the bank to get money.",
      note: "Yönelme eki olan 'to' (bankaya) ile amaç bildiren 'to' (almak için) bazen peş peşe gelebilir ama aynı kelime değildirler."
    },
    {
      title: "Kısa Cevap Gücü",
      wrong: "Because I want to buy milk.",
      right: "To buy milk.",
      note: "Birisi 'Why?' diye sorduğunda uzun uzun 'Because...' demek yerine direkt 'To + Fiil' ile cevap vermek çok daha doğal ve akıcıdır."
    }
  ],

  challenge: {
    words: ["to", "in order not to", "for", "to buy", "to stay", "for buying"],
    questions: [
      {
        id: "q1",
        text: ["I'm saving money ", " a new car."],
        correct: "to buy",
        hint: "Satın almak 'için'. Fiil varsa hangisi gelirdi?",
        visualFormula: "Purpose (to + verb)"
      },
      {
        id: "q2",
        text: ["She is eating healthy ", " fit."],
        correct: "to stay",
        hint: "Formda kalmak 'için'.",
        visualFormula: "Goal Achievement"
      },
      {
        id: "q3",
        text: ["I study hard ", " fail the exam."],
        correct: "in order not to",
        hint: "Sınavdan 'kalmamak' için. Olumsuz amaç yapısı.",
        visualFormula: "Negative Purpose"
      },
      {
        id: "q4",
        text: ["He went to Paris ", " a holiday."],
        correct: "for",
        hint: "Dikkat! 'A holiday' bir isimdir, fiil değil.",
        visualFormula: "For + Noun (Trap!)"
      },
      {
        id: "q5",
        text: ["Why did you call him? ", " invite him to the party."],
        correct: "to",
        hint: "Kısa cevap başlarken kullanılan ek.",
        visualFormula: "Short Answer"
      }
    ]
  }
};