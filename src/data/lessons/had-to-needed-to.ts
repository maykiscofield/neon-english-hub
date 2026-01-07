// src/data/lessons/had-to-needed-to.ts
import { Zap, History, ClipboardCheck, AlertCircle, HelpCircle, Construction } from 'lucide-react';

export const hadToNeededToData = {
  // ÖNEMLİ: image_136b37.png'deki kartın ID'si ile tam eşleşme
  id: 'b1-ek-had-to-needed', 
  title: '[EK] HAD TO / NEEDED TO (GEÇMİŞ ZORUNLULUK)',
  
  formulas: {
    positive: [ // Past Obligation (Zorunluluk)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "had to / needed to", detail: "Zorunluydu / Gerekiyordu", color: "border-purple-500/30 text-purple-400" },
      { label: "V1", detail: "Fiil (Yalın)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // No Necessity (Gerek yoktu)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "didn't have to", detail: "Zorunlu değildi", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "V1", detail: "Seçmeli eylem", color: "border-white/10 text-white" }
    ],
    question: [ // Asking about Past
      { label: "Did", detail: "Soru Yardımcısı", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "have to / need to?", detail: "Gerekli miydi?", color: "border-yellow-500/30 text-yellow-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "had to", color: "text-purple-400", underline: true },
        { text: "wear", color: "text-pink-400" },
        { text: "a uniform at my old school.", color: "text-white" }
      ],
      translation: "Eski okulumda üniforma giymek zorundaydım. (Dışsal bir kural/zorunluluk.)"
    },
    negative: {
      parts: [
        { text: "We", color: "text-white" },
        { text: "didn't have to", color: "text-red-400", underline: true },
        { text: "work", color: "text-emerald-400" },
        { text: "yesterday because it was a holiday.", color: "text-white" }
      ],
      translation: "Dün tatil olduğu için çalışmamıza gerek yoktu. (Zorunluluk yok, serbestlik var.)"
    },
    question: {
      parts: [
        { text: "Did you", color: "text-white" },
        { text: "need to", color: "text-yellow-400", underline: true },
        { text: "buy", color: "text-blue-400" },
        { text: "any more bread?", color: "text-white" }
      ],
      translation: "Daha fazla ekmek almaya ihtiyacın oldu mu?"
    }
  },

  scenarios: [
    { title: "Kural ve Yasalar", icon: ClipboardCheck, desc: "Geçmişte kurallar gereği yapmak zorunda olduğunuz her şey (Had to).", color: "from-blue-500/20 to-transparent" },
    { title: "Kişisel İhtiyaçlar", icon: History, desc: "Geçmişte hissettiğiniz kuvvetli ihtiyaçlar (Needed to).", color: "from-purple-500/20 to-transparent" },
    { title: "Boş Vakitler", icon: Construction, desc: "Zorunluluğun kalktığı, isteğe bağlı durumlar (Didn't have to).", color: "from-pink-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Must'ın Geçmişi Yoktur!",
      wrong: "I musted go home early yesterday.",
      right: "I had to go home early yesterday.",
      note: "Must modülü sadece şimdiki zaman için kullanılır. Geçmişten bahsederken mutlaka 'had to' kullanmalısınız."
    },
    {
      title: "Didn't have to vs. Shouldn't have",
      wrong: "I didn't have to eat that cake.",
      right: "I shouldn't have eaten that cake.",
      note: "Eğer bir şeyi 'yapmamalıydım ama yaptım (pişmanlık)' diyorsanız 'Shouldn't have' kullanılır. 'Didn't have to' sadece 'gerek yoktu' demektir."
    }
  ],

  challenge: {
    words: ["had to", "didn't have to", "did you have to", "needed to", "didn't need to", "must"],
    questions: [
      {
        id: "q1",
        text: ["I was late for the meeting, so I ", " take a taxi."],
        correct: "had to",
        hint: "Geçmişte oluşan ani bir zorunluluk durumu.",
        visualFormula: "Past Obligation (+)"
      },
      {
        id: "q2",
        text: ["The museum was free, so we ", " pay for tickets."],
        correct: "didn't have to",
        hint: "Ödeme yapma zorunluluğu yoktu.",
        visualFormula: "No Obligation (-)"
      },
      {
        id: "q3",
        text: ["", " wait long for the results?"],
        correct: "did you have to",
        hint: "Geçmişteki bir zorunluluğu soruyoruz.",
        visualFormula: "Past Question (?)"
      },
      {
        id: "q4",
        text: ["It started raining, so I ", " use my umbrella."],
        correct: "needed to",
        hint: "İhtiyaç duyulan bir durum (gereklilik).",
        visualFormula: "Past Necessity"
      },
      {
        id: "q5",
        text: ["I ", " study last night because I had already finished my work."],
        correct: "didn't need to",
        hint: "Çalışmama gerek kalmadı (yapmadım).",
        visualFormula: "No Necessity"
      },
      {
        id: "q6",
        text: ["Wait! You can't use 'must' for yesterday. You ", " call the police."],
        correct: "had to",
        hint: "Dün polisi aramak zorundaydın.",
        visualFormula: "Correction: Past of Must"
      }
    ]
  }
};