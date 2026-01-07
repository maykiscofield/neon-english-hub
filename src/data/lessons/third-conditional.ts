// src/data/lessons/third-conditional.ts
import { Zap, History, RotateCcw, AlertCircle, HelpCircle, Trophy } from 'lucide-react';

export const thirdConditionalData = {
  id: 'b1-10.1-third-conditional', 
  title: '10.1 THIRD CONDITIONAL (GEÇMİŞ HAYALLER)',
  
  formulas: {
    positive: [ // Past Regrets (Pişmanlıklar)
      { label: "If + Past Perfect (had + V3)", detail: "Geçmiş Şart", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Would have + V3", detail: "Hayali Sonuç", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // Near Misses (Atlatılan Durumlar)
      { label: "If + hadn't + V3", detail: "Şart Olmasaydı", color: "border-blue-500/30 text-blue-400" },
      { label: "Wouldn't have + V3", detail: "Sonuç Olmazdı", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" }
    ],
    question: [ // Questions (Sorgulama)
      { label: "Would you have + V3", detail: "Yapar mıydın?", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "if you had + V3?", detail: "Eğer olsaydı?", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "If I", color: "text-blue-400" },
        { text: "had studied", color: "text-blue-400", underline: true },
        { text: "harder,", color: "text-white" },
        { text: "I", color: "text-purple-400" },
        { text: "would have passed", color: "text-purple-400", underline: true },
        { text: "the exam.", color: "text-white" }
      ],
      translation: "Eğer daha sıkı çalışsaydım sınavı geçerdim. (Gerçek: Çalışmadım ve geçemedim.)"
    },
    negative: {
      parts: [
        { text: "If we", color: "text-blue-400" },
        { text: "hadn't missed", color: "text-red-400", underline: true },
        { text: "the bus,", color: "text-white" },
        { text: "we", color: "text-purple-400" },
        { text: "would have arrived", color: "text-purple-400", underline: true },
        { text: "on time.", color: "text-white" }
      ],
      translation: "Otobüsü kaçırmasaydık zamanında varırdık. (Gerçek: Kaçırdık ve geç kaldık.)"
    },
    question: {
      parts: [
        { text: "If I", color: "text-blue-400" },
        { text: "had known", color: "text-blue-400", underline: true },
        { text: "you were coming,", color: "text-white" },
        { text: "I", color: "text-purple-400" },
        { text: "would have baked", color: "text-purple-400", underline: true },
        { text: "a cake.", color: "text-white" }
      ],
      translation: "Geleceğini bilseydim pasta pişirirdim. (Gerçek: Bilmiyordum.)"
    }
  },

  scenarios: [
    { title: "Büyük Pişmanlıklar", icon: RotateCcw, desc: "Geçmişte yapılan hatalar veya kaçırılan fırsatlar için 'keşke' anlamında.", color: "from-blue-500/20 to-transparent" },
    { title: "Tarihi Varsayımlar", icon: History, desc: "Tarihteki olaylar farklı gelişseydi ne olurdu diye düşünürken.", color: "from-purple-500/20 to-transparent" },
    { title: "Başarı Hikayeleri", icon: Trophy, desc: "Bir başarının hangi şartlar sayesinde geldiğini anlatırken.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Double 'Had' Tuzağı",
      wrong: "If I had a car last year...",
      right: "If I had had a car last year...",
      note: "Eğer fiilimiz 'have' (sahip olmak) ise, Past Perfect yaparken 'had had' yan yana gelir. Bu bir hata değil, kuraldır."
    },
    {
      title: "Would-If Yasak Bölge",
      wrong: "If I would have known...",
      right: "If I had known...",
      note: "Conditionals kuralı burada da geçerli: 'If'li tarafa asla 'would' gelmez."
    },
    {
      title: "Kısaltma Karmaşası",
      wrong: "I'd seen it if...",
      right: "I'd have seen it if I'd (had) known.",
      note: "'I'd' hem 'I had' hem 'I would' olabilir. 'd' den sonra fiil V3 ise 'had', 'have + V3' ise 'would'dur."
    }
  ],

  challenge: {
    words: ["had seen", "would have bought", "hadn't told", "would have been", "had known", "wouldn't have"],
    questions: [
      {
        id: "q1",
        text: ["If I ", " about the sale, I would have gone shopping."],
        correct: "had known",
        hint: "Geçmişteki şart; bilseydim (ama bilmedim).",
        visualFormula: "If + had + V3"
      },
      {
        id: "q2",
        text: ["If the weather had been better, the party ", " outside."],
        correct: "would have been",
        hint: "Geçmişteki hayali sonuç; olurdu (ama olmadı).",
        visualFormula: "would have + V3"
      },
      {
        id: "q3",
        text: ["I ", " that phone if I had known it was so bad."],
        correct: "wouldn't have bought", // Listedeki 'would have bought' un olumsuzu gibi düşünün
        hint: "Kötü olduğunu bilseydim almazdım.",
        visualFormula: "wouldn't have + V3"
      },
      {
        id: "q4",
        text: ["If you ", " me the secret, I wouldn't have known."],
        correct: "hadn't told",
        hint: "Sen söylemeseydin (ama söyledin).",
        visualFormula: "If + hadn't + V3"
      },
      {
        id: "q5",
        text: ["If he ", " the red light, the accident wouldn't have happened."],
        correct: "had seen",
        hint: "Işığı görseydi (ama görmedi).",
        visualFormula: "If + had + V3"
      },
      {
        id: "q6",
        text: ["We ", " missed the flight if we had taken a taxi."],
        correct: "wouldn't have",
        hint: "Taksiye binseydik kaçırmazdık.",
        visualFormula: "wouldn't have + V3"
      }
    ]
  }
};