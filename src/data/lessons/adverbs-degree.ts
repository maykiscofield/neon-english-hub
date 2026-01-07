// src/data/lessons/adverbs-degree.ts
import { Zap, Gauge, Thermometer, AlertCircle, HelpCircle, CheckCircle2, ChevronUp } from 'lucide-react';

export const adverbsDegreeData = {
  id: '2.1-adverbs-degree', 
  title: '2.1 DERECE ZARFLARI (ADVERBS OF DEGREE)',
  
  formulas: {
    positive: [ // Standart Kullanım
      { label: "Adverb of Degree", detail: "very, really, extremely...", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Adjective", detail: "Sıfat (hot, cold, fast)", color: "border-blue-500/30 text-blue-400" }
    ],
    negative: [ // "Too" (Olumsuz Limit)
      { label: "Too", detail: "Gereğinden fazla (Kötü)", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Adjective", detail: "Problem yaratan durum", color: "border-white/10 text-white" }
    ],
    question: [ // "Enough" (Yeterlilik - İSTİSNA!)
      { label: "Adjective", detail: "Önce sıfat gelir!", color: "border-blue-500/30 text-blue-400" },
      { label: "Enough", detail: "Yeterli miktarda", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "This movie is", color: "text-white" },
        { text: "extremely", color: "text-purple-400", underline: true },
        { text: "boring.", color: "text-white" }
      ],
      translation: "Bu film aşırı derecede sıkıcı. (%100 şiddet)"
    },
    negative: {
      parts: [
        { text: "This tea is", color: "text-white" },
        { text: "too", color: "text-red-400", underline: true },
        { text: "hot", color: "text-white" },
        { text: "to drink.", color: "text-white" }
      ],
      translation: "Bu çay içmek için fazla (gereğinden fazla) sıcak. (İçemiyorum, bir problem var.)"
    },
    question: {
      parts: [
        { text: "He is", color: "text-white" },
        { text: "strong", color: "text-blue-400" },
        { text: "enough", color: "text-emerald-400", underline: true },
        { text: "to lift this box.", color: "text-white" }
      ],
      translation: "O, bu kutuyu kaldıracak kadar güçlü. (Yeterli seviyede güçlü.)"
    }
  },

  scenarios: [
    { title: "Şiddeti Artırma", icon: ChevronUp, desc: "Sıradan bir durumu daha etkileyici hale getirmek için (extremely, very, really).", color: "from-purple-500/20 to-transparent" },
    { title: "Sınırları Belirtme", icon: Gauge, desc: "Bir şeyin limitini aştığını veya yeterli olmadığını anlatırken (too, enough).", color: "from-red-500/20 to-transparent" },
    { title: "Hafifletme", icon: Thermometer, desc: "Durumu biraz yumuşatmak için (a bit, slightly, fairly).", color: "from-blue-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Too vs. Very Farkı (HAYATİ)",
      wrong: "The cake is too delicious!",
      right: "The cake is very/really delicious!",
      note: "'Too' kelimesi 'gereğinden fazla' demektir ve genelde olumsuz bir durum bildirir. Çok lezzetli bir pasta bir problem olmadığı için 'too' değil 'very' kullanılır."
    },
    {
      title: "Enough Nereye Gelir?",
      wrong: "I am enough tall.",
      right: "I am tall enough.",
      note: "Enough, sıfatlardan SONRA gelir. Onu sıfatın arkasına takılan bir vagon gibi düşünün."
    },
    {
      title: "A Bit / Quite Kullanımı",
      wrong: "The car is very a bit fast.",
      right: "The car is a bit fast.",
      note: "Derece zarflarını üst üste kullanmayın. 'A bit' (biraz) ile 'Very' (çok) birleşmez."
    }
  ],

  challenge: {
    words: ["extremely", "enough", "too", "quite", "really", "a bit"],
    questions: [
      {
        id: "q1",
        text: ["I can't buy this laptop. It is ", " expensive."],
        correct: "too",
        hint: "Eğer bir şeyi alamıyorsan, fiyatı senin limitini aşmıştır (olumsuzluk).",
        visualFormula: "Problem = TOO"
      },
      {
        id: "q2",
        text: ["Is the water warm ", " for you to swim?"],
        correct: "enough",
        hint: "Boşluk sıfattan sonra gelmiş. Sadece bu kelime sıfattan sonra gelir.",
        visualFormula: "Adjective + ENOUGH"
      },
      {
        id: "q3",
        text: ["She is ", " clever. She always gets 100 from exams."],
        correct: "extremely",
        hint: "Her sınavdan 100 alıyorsa 'aşırı' zekidir.",
        visualFormula: "Max Intensity"
      },
      {
        id: "q4",
        text: ["It's ", " cold outside, but not too bad. You just need a light jacket."],
        correct: "a bit",
        hint: "Durumu yumuşatıyoruz; hava sadece 'biraz' soğuk.",
        visualFormula: "Low Intensity"
      },
      {
        id: "q5",
        text: ["This pizza is ", " good! You must try it."],
        correct: "really",
        hint: "Bir şeyi tavsiye ederken olumlu bir şiddet kullanırız.",
        visualFormula: "Positive Boost"
      },
      {
        id: "q6",
        text: ["He isn't old ", " to drive a car."],
        correct: "enough",
        hint: "Ehliyet almak için yaşı 'yeterli' değil.",
        visualFormula: "Negation + Enough"
      }
    ]
  }
};