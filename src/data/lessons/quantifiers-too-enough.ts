// src/data/lessons/quantifiers-too-enough.ts
import { Zap, AlertTriangle, CheckCircle2, Scale, Coffee, Wallet, Thermometer } from 'lucide-react';

export const quantifiersTooEnoughData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '6.1-quantifiers-too-enough', 
  title: '6.1 TOO & ENOUGH (MİKTAR BELİRLEYİCİLER)',
  
  formulas: {
    positive: [ // TOO (Aşırı / Olumsuz Fazlalık)
      { label: "Too", detail: "Gereğinden fazla (Problem!)", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Adjective", detail: "Sıfat (hot, expensive)", color: "border-white/10 text-white" }
    ],
    negative: [ // ENOUGH (Yeterli - Sıfatla Kullanım)
      { label: "Adjective", detail: "Önce Sıfat Gelir!", color: "border-blue-500/30 text-blue-400" },
      { label: "Enough", detail: "Yeterli seviyede", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    question: [ // ENOUGH (İsimlerle Kullanım)
      { label: "Enough", detail: "İsimlerden önce gelir", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Noun", detail: "İsim (money, time)", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "This coffee is", color: "text-white" },
        { text: "too", color: "text-red-400", underline: true },
        { text: "hot", color: "text-white" },
        { text: "to drink.", color: "text-white" }
      ],
      translation: "Bu kahve içmek için fazla (aşırı) sıcak. (İçemiyorum, bir problem var.)"
    },
    negative: {
      parts: [
        { text: "He is", color: "text-white" },
        { text: "old", color: "text-blue-400" },
        { text: "enough", color: "text-emerald-400", underline: true },
        { text: "to drive a car.", color: "text-white" }
      ],
      translation: "O araba sürecek kadar yaşlı. (Yeterli yaşa sahip.)"
    },
    question: {
      parts: [
        { text: "I don't have", color: "text-white" },
        { text: "enough", color: "text-yellow-400", underline: true },
        { text: "money", color: "text-white" },
        { text: "to buy that phone.", color: "text-white" }
      ],
      translation: "O telefonu almak için yeterli param yok. (Enough isimden önce geldi!)"
    }
  },

  scenarios: [
    { title: "Şikayet ve Sorun", icon: AlertTriangle, desc: "Bir durumun limitleri aştığını ve size engel olduğunu belirtirken 'Too' kullanın.", color: "from-red-500/20 to-transparent" },
    { title: "Memnuniyet", icon: CheckCircle2, desc: "Miktarın veya durumun bir iş için tam dozunda olduğunu anlatırken 'Enough' kullanın.", color: "from-emerald-500/20 to-transparent" },
    { title: "Doz Ayarı", icon: Scale, desc: "Too much (sayılamayan çok) ve Too many (sayılabilen çok) ile aşırılık vurgusu yapabilirsiniz.", color: "from-blue-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Enough Nereye Gelir? (EN BÜYÜK TUZAK)",
      wrong: "He is enough tall. / I have money enough.",
      right: "He is tall enough. / I have enough money.",
      note: "Eğer bir sıfatla (tall, fast) kullanıyorsan SONRA; isimle (money, time) kullanıyorsan ÖNCE gelir."
    },
    {
      title: "Too vs. Very Farkı",
      wrong: "The exam was too good!",
      right: "The exam was very good!",
      note: "'Too' her zaman olumsuz bir 'fazlalık' bildirir. Sınavın iyi olması bir sorun olmadığı için 'too' kullanılamaz."
    }
  ],

  challenge: {
    words: ["too", "enough", "too much", "too many", "rich enough", "enough space"],
    questions: [
      {
        id: "q1",
        text: ["I can't study here. It is ", " noisy."],
        correct: "too",
        hint: "Ders çalışmana engel olan bir fazlalık var.",
        visualFormula: "Problem = Too"
      },
      {
        id: "q2",
        text: ["Is he ", " to join the army?"],
        correct: "old enough",
        hint: "Sıfattan (old) sonra gelmeli.",
        visualFormula: "Adjective + Enough"
      },
      {
        id: "q3",
        text: ["There are ", " people on this bus. I can't breathe!"],
        correct: "too many",
        hint: "İnsanlar sayılabilir, aşırı fazlalık var.",
        visualFormula: "Too many + Countable"
      },
      {
        id: "q4",
        text: ["Do we have ", " to finish the project?"],
        correct: "enough time",
        hint: "Zaman (time) bir isimdir, kelime nerede durmalı?",
        visualFormula: "Enough + Noun"
      },
      {
        id: "q5",
        text: ["You put ", " salt in the soup. It's terrible!"],
        correct: "too much",
        hint: "Tuz sayılamaz, aşırı fazlalık var.",
        visualFormula: "Too much + Uncountable"
      }
    ]
  }
};