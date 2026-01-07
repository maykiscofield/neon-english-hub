// src/data/lessons/predictions-will-may.ts
import { Zap, Sparkles, Thermometer, AlertCircle, HelpCircle, CheckCircle2, CloudSun } from 'lucide-react';

export const predictionsWillMayData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '4.2-predictions-will-may', 
  title: '4.2 GELECEK TAHMİNLERİ (WILL / MAY)',
  
  formulas: {
    positive: [ // %80-100 Eminlik (Will)
      { label: "Will", detail: "Kesin olacağını düşünüyorum", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Verb 1", detail: "Fiil (Yalın halde)", color: "border-white/10 text-white" }
    ],
    negative: [ // %30-50 Olasılık (May / Might)
      { label: "May / Might", detail: "Belki / Olabilir", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb 1", detail: "Fiil (Yalın halde)", color: "border-white/10 text-white" }
    ],
    question: [ // Snap Decisions (Ani Kararlar)
      { label: "Will", detail: "O an verilen karar", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Wait!", detail: "Bekle! Yapacağım.", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I think", color: "text-white" },
        { text: "it will", color: "text-blue-400", underline: true },
        { text: "snow", color: "text-white" },
        { text: "tomorrow.", color: "text-blue-400" }
      ],
      translation: "Bence yarın kar yağacak. (Kişisel fikrim, tahminim.)"
    },
    negative: {
      parts: [
        { text: "We", color: "text-white" },
        { text: "may go", color: "text-purple-400", underline: true },
        { text: "to the beach,", color: "text-white" },
        { text: "but I'm not sure.", color: "text-emerald-400" }
      ],
      translation: "Belki plaja gideriz ama emin değilim. (%50 olasılık.)"
    },
    question: {
      parts: [
        { text: "The phone is ringing.", color: "text-white" },
        { text: "I will", color: "text-emerald-400", underline: true },
        { text: "answer", color: "text-white" },
        { text: "it!", color: "text-white" }
      ],
      translation: "Telefon çalıyor. Ben bakarım! (O an verilen ani karar.)"
    }
  },

  scenarios: [
    { title: "Hava Durumu", icon: CloudSun, desc: "Gelecek günler için yapılan kişisel tahminler (It will be cold).", color: "from-blue-500/20 to-transparent" },
    { title: "Kararsızlık", icon: HelpCircle, desc: "Elinizde net kanıt yoksa ve sadece 'olabilir' demek istiyorsanız (May/Might).", color: "from-purple-500/20 to-transparent" },
    { title: "Teklif & Karar", icon: Zap, desc: "Birisinden yardım isterken veya o an bir şeye karar verirken (I will help you).", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Asla 'to' kullanma!",
      wrong: "He will to come.",
      right: "He will come.",
      note: "Will ve May birer modal fiildir. Arkasından asla 'to' eki veya fiile ek gelmez (comes/coming gibi)."
    },
    {
      title: "Görünür Kanıt Varsa Dikkat!",
      wrong: "Look! It will fall! (Vazo düşerken)",
      right: "Look! It is going to fall!",
      note: "Gözünüzle gördüğünüz bir kanıt varsa (vazo sallanıyorsa) Will değil, 4.1'de öğrendiğimiz 'Going to' kullanılır."
    },
    {
      title: "Think/Believe Kelimeleri",
      wrong: "I may think it rains.",
      right: "I think it will rain.",
      note: "'I think, I believe, I hope' gibi girişler genelde 'Will' ile devam eder."
    }
  ],

  challenge: {
    words: ["will win", "may go", "won't be", "will help", "may rain", "will arrive"],
    questions: [
      {
        id: "q1",
        text: ["Don't worry. I ", " you with your homework."],
        correct: "will help",
        hint: "Birine yardım teklif ederken (ani karar/teklif).",
        visualFormula: "Offer / Promise"
      },
      {
        id: "q2",
        text: ["Take an umbrella. It ", " later."],
        correct: "may rain",
        hint: "Yağabilir de yağmayabilir de (olasılık).",
        visualFormula: "Possibility"
      },
      {
        id: "q3",
        text: ["I think my team ", " the match tonight."],
        correct: "will win",
        hint: "Kişisel bir görüş/tahmin belirtiliyor.",
        visualFormula: "Prediction (Opinion)"
      },
      {
        id: "q4",
        text: ["We ", " to Italy next year, but we haven't booked anything yet."],
        correct: "may go",
        hint: "Henüz plan kesinleşmemiş, sadece bir ihtimal.",
        visualFormula: "Uncertain Future"
      },
      {
        id: "q5",
        text: ["The train ", " at 10 o'clock. I'm sure."],
        correct: "will arrive",
        hint: "Emin olduğumuz bir gelecek olayı.",
        visualFormula: "Certainty"
      },
      {
        id: "q6",
        text: ["I'm busy today, so I ", " at the party."],
        correct: "won't be",
        hint: "Will not (won't) ile olumsuz bir tahmin/durum.",
        visualFormula: "Negative Prediction"
      }
    ]
  }
};