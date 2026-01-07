// src/data/lessons/wishes-regrets.ts
import { Zap, Heart, RotateCcw, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

export const wishesRegretsData = {
  // KRİTİK: image_129866.png'deki hatayı çözmek için ID birebir aynı yapıldı
  id: 'b1-10.2-wish-if-only', 
  title: '10.2 UMUTLAR VE KEŞKELER (WISH & IF ONLY)',
  
  formulas: {
    positive: [ // Present Wish (Şu anki pişmanlık)
      { label: "Wish + Past Simple", detail: "Gerçeğin zıttı (Şu an)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "V2 / WERE", detail: "Bir derece geçmiş", color: "border-purple-500/30 text-purple-400" }
    ],
    negative: [ // Past Regret (Geçmiş pişmanlık)
      { label: "Wish + Past Perfect", detail: "Geçmişin pişmanlığı", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "had + V3", detail: "Keşke olsaydı/olmasaydı", color: "border-red-500/30 text-red-400" }
    ],
    question: [ // Complaints (Şikayet/İstek)
      { label: "Wish + WOULD", detail: "Başkasına sitem", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Subject + V1", detail: "Eylem değişsin", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I wish I", color: "text-blue-400" },
        { text: "had", color: "text-blue-400", underline: true },
        { text: "enough money", color: "text-white" },
        { text: "to buy this.", color: "text-emerald-400" }
      ],
      translation: "Keşke bunu alacak kadar param olsa. (Gerçek: Param yok.)"
    },
    negative: {
      parts: [
        { text: "If only I", color: "text-pink-400" },
        { text: "hadn't stayed", color: "text-red-400", underline: true },
        { text: "up so late", color: "text-white" },
        { text: "last night.", color: "text-purple-400" }
      ],
      translation: "Keşke dün gece o kadar geç yatmasaydım. (Gerçek: Geç yattım ve şu an yorgunum.)"
    },
    question: {
      parts: [
        { text: "I wish you", color: "text-blue-400" },
        { text: "would stop", color: "text-yellow-400", underline: true },
        { text: "complaining", color: "text-white" },
        { text: "about everything.", color: "text-white" }
      ],
      translation: "Keşke her şey hakkında şikayet etmeyi kessen. (Sitem/Rahatsızlık.)"
    }
  },

  scenarios: [
    { title: "Şu Anki Hayaller", icon: Sparkles, desc: "Elimizde olmayan imkanlar için (I wish I was/were rich).", color: "from-blue-500/20 to-transparent" },
    { title: "Geçmiş Pişmanlıklar", icon: RotateCcw, desc: "Daha önce yapılmış hataları düzeltme isteği (had + V3).", color: "from-pink-500/20 to-transparent" },
    { title: "Başkalarına Sitem", icon: MessageCircle, desc: "Birinin sinir bozucu davranışını değiştirmesini istediğinizde 'would' kullanılır.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Zaman Makinesi (Backshift)",
      wrong: "I wish I am there.",
      right: "I wish I were there.",
      note: "Keşke cümlelerinde zaman her zaman bir derece geçmişe gider. Şimdiki zaman hayali için Past Simple kullanılır."
    },
    {
      title: "Was vs Were",
      wrong: "If only he was here.",
      right: "If only he were here.",
      note: "Resmi İngilizcede tüm öznelerle (I, he, she, it) 'were' kullanmak profesyonelliktir."
    },
    {
      title: "Self-Would Yasaktır",
      wrong: "I wish I would lose weight.",
      right: "I wish I could lose weight.",
      note: "Kendi davranışınız için 'would' kullanamazsınız; onun yerine 'could' veya 'Past Simple' tercih edin."
    }
  ],

  challenge: {
    words: ["were", "had told", "would", "could", "had", "had known"],
    questions: [
      {
        id: "q1",
        text: ["I'm so tired. I wish I ", " in bed right now."],
        correct: "were",
        hint: "Şu an başka bir durumda olma hayali.",
        visualFormula: "Wish + WERE"
      },
      {
        id: "q2",
        text: ["I'm lost. I wish I ", " the truth to my parents yesterday."],
        correct: "had told",
        hint: "Dün (geçmişte) söylemediğin için pişmanlık.",
        visualFormula: "had + V3 (Past)"
      },
      {
        id: "q3",
        text: ["I wish you ", " listen to me when I talk!"],
        correct: "would",
        hint: "Karşıdakine duyulan sitem ve değişim beklentisi.",
        visualFormula: "Wish + WOULD"
      },
      {
        id: "q4",
        text: ["If only I ", " speak Spanish, I would move to Madrid."],
        correct: "could",
        hint: "Kendi yeteneğinle ilgili bir keşke.",
        visualFormula: "Wish + COULD"
      },
      {
        id: "q5",
        text: ["I wish I ", " more breakfast. I'm hungry already."],
        correct: "had had",
        hint: "Geçmişte (sabah) az yediğin için pişmanlık.",
        visualFormula: "Double HAD"
      },
      {
        id: "q6",
        text: ["I wish they ", " come to the party tonight, but they can't."],
        correct: "could",
        hint: "Gelecekteki bir imkansızlığın keşkisi.",
        visualFormula: "Wish + COULD (Future)"
      }
    ]
  }
};