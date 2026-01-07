// src/data/lessons/conditionals-type-2.ts
import { Zap, CloudRain, Star, Heart, AlertCircle, HelpCircle, Gift } from 'lucide-react';

export const conditionalsTypeTwoData = {
  id: 'b1-9.2-conditionals-type-2', 
  title: '9.1 CONDITIONALS TYPE 2 (HAYALİ DURUMLAR)',
  
  formulas: {
    positive: [ // Unreal Situations (Şu anın zıttı)
      { label: "If + Past Simple", detail: "Şart (Eğer olsaydı...)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Would + V1", detail: "Sonuç (Yapardım...)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // Negative Imagination
      { label: "If + didn't", detail: "Olumsuz Şart", color: "border-blue-500/30 text-blue-400" },
      { label: "Wouldn't + V1", detail: "Olumsuz Sonuç", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" }
    ],
    question: [ // Advice (Tavsiye Verme)
      { label: "If I WERE you,", detail: "Senin yerinde olsaydım,", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "I WOULD + V1", detail: "...yapardım.", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "If I", color: "text-blue-400" },
        { text: "won", color: "text-blue-400", underline: true },
        { text: "the lottery,", color: "text-white" },
        { text: "I", color: "text-purple-400" },
        { text: "would travel", color: "text-purple-400", underline: true },
        { text: "around the world.", color: "text-white" }
      ],
      translation: "Piyangoyu kazansaydım dünyayı gezerdim. (Gerçek: Kazanamadım, sadece bir hayal.)"
    },
    negative: {
      parts: [
        { text: "If she", color: "text-blue-400" },
        { text: "knew", color: "text-blue-400", underline: true },
        { text: "the truth,", color: "text-white" },
        { text: "she", color: "text-purple-400" },
        { text: "wouldn't be", color: "text-red-400", underline: true },
        { text: "so happy.", color: "text-white" }
      ],
      translation: "Gerçeği bilseydi bu kadar mutlu olmazdı. (Gerçek: Gerçeği bilmiyor.)"
    },
    question: {
      parts: [
        { text: "If I", color: "text-blue-400" },
        { text: "were", color: "text-yellow-400", underline: true },
        { text: "you,", color: "text-white" },
        { text: "I", color: "text-emerald-400" },
        { text: "would buy", color: "text-emerald-400", underline: true },
        { text: "that dress.", color: "text-white" }
      ],
      translation: "Senin yerinde olsaydım o elbiseyi alırdım. (Tavsiye verme kalıbı.)"
    }
  },

  scenarios: [
    { title: "İmkansız Hayaller", icon: Star, desc: "Şu an gerçekleşme şansı çok düşük olan tatlı hayallerimiz.", color: "from-blue-500/20 to-transparent" },
    { title: "Tavsiye Verme", icon: Heart, desc: "Kendimizi bir başkasının yerine koyarak verdiğimiz akıllıca tavsiyeler.", color: "from-emerald-500/20 to-transparent" },
    { title: "Pişmanlıklar", icon: CloudRain, desc: "Keşke elimde olsaydı dediğimiz ama olmayan durumlar.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Meşhur 'WERE' Kuralı",
      wrong: "If I was you...",
      right: "If I were you...",
      note: "Type 2 cümlelerinde 'I, he, she, it' özneleriyle bile 'was' yerine 'were' kullanmak daha doğru ve profesyoneldir."
    },
    {
      title: "Will vs Would",
      wrong: "If I had more time, I will call you.",
      right: "If I had more time, I would call you.",
      note: "Eğer cümle 'If + Past Simple' ile başlıyorsa, devamı mutlaka 'Would' (veya could/might) olmalıdır."
    },
    {
      title: "Anlam Karmaşası",
      wrong: "If I buy it... (Type 2 sanma!)",
      right: "If I bought it...",
      note: "Type 2'de Past Simple kullanmamız olayın 'geçmişte' olduğu anlamına gelmez. Sadece 'hayali' olduğunu vurgular."
    }
  ],

  challenge: {
    words: ["were", "would", "had", "wouldn't", "met", "could"],
    questions: [
      {
        id: "q1",
        text: ["If I ", " more money, I would buy a car."],
        correct: "had",
        hint: "Şu an param yok ama olsaydı (Past Simple hali).",
        visualFormula: "If + Subject + V2"
      },
      {
        id: "q2",
        text: ["If she ", " a millionaire, she would live in a palace."],
        correct: "were",
        hint: "'Be' fiilinin Type 2'deki joker halini kullan.",
        visualFormula: "Unreal State (Were)"
      },
      {
        id: "q3",
        text: ["I ", " tell anyone if you told me your secret."],
        correct: "wouldn't",
        hint: "Sırrını söylesen kimseye söylemezdim (Olumsuz sonuç).",
        visualFormula: "Negative Result"
      },
      {
        id: "q4",
        text: ["If we ", " a famous actor, we would take a selfie."],
        correct: "met",
        hint: "Ünlü bir aktörle karşılaşsak (karşılaşmadık).",
        visualFormula: "Hypothetical Action"
      },
      {
        id: "q5",
        text: ["I ", " help you if I knew the answer."],
        correct: "would",
        hint: "Cevabı bilseydim sana yardım ederdim.",
        visualFormula: "Result of Imagination"
      },
      {
        id: "q6",
        text: ["If I were you, I ", " go to the doctor."],
        correct: "could", // Veya would, seçeneklere göre
        hint: "Güçlü bir tavsiye verme cümlesi.",
        visualFormula: "Giving Advice"
      }
    ]
  }
};