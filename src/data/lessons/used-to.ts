import { History, RefreshCw, Ban, AlertCircle, HelpCircle, GraduationCap, Zap, Clock } from 'lucide-react';

export const usedToData = {
  id: '7.2-used-to',
  title: '7.2 USED TO (GEÇMİŞ ALIŞKANLIKLAR)',
  
  formulas: {
    positive: [ // Olumlu Cümle
      { label: "Subject", detail: "I, You, He, She...", color: "border-white/10 text-white" },
      { label: "used to", detail: "Eskiden yapardım", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb (V1)", detail: "Fiilin yalın hali", color: "border-blue-500/30 text-blue-400" }
    ],
    negative: [ // Olumsuz Cümle (DİKKAT: 'd' harfi düşer!)
      { label: "didn't", detail: "Olumsuzluk eki", color: "border-red-500/30 text-red-400" },
      { label: "use to", detail: "Artık 'd' yok!", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Verb (V1)", detail: "Fiilin yalın hali", color: "border-blue-500/30 text-blue-400" }
    ],
    question: [ // Soru Cümlesi (DİKKAT: 'd' harfi düşer!)
      { label: "Did", detail: "Soru yardımcı fiili", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Subject", detail: "Özne", color: "border-white/10 text-white" },
      { label: "use to", detail: "Artık 'd' yok!", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "used to", color: "text-purple-400", underline: true },
        { text: "play", color: "text-blue-400" },
        { text: "with marbles when I was a kid.", color: "text-white" }
      ],
      translation: "Çocukken misket oynardım. (Artık oynamıyorum anlamı gizlidir.)"
    },
    negative: {
      parts: [
        { text: "She", color: "text-white" },
        { text: "didn't", color: "text-red-400" },
        { text: "use to", color: "text-emerald-400", underline: true },
        { text: "like", color: "text-blue-400" },
        { text: "broccoli, but she loves it now.", color: "text-white" }
      ],
      translation: "Eskiden brokoli sevmezdi ama şimdi bayılıyor. (Olumsuzda 'used' değil 'use' olduğuna dikkat!)"
    },
    question: {
      parts: [
        { text: "Did", color: "text-yellow-400" },
        { text: "you", color: "text-white" },
        { text: "use to", color: "text-emerald-400", underline: true },
        { text: "live", color: "text-blue-400" },
        { text: "in a small village?", color: "text-white" }
      ],
      translation: "Eskiden küçük bir köyde mi yaşardın?"
    }
  },

  scenarios: [
    { title: "Eski Alışkanlıklar", icon: History, desc: "Eskiden düzenli yapıp bıraktığın işler (Sigarayı bırakmak, spor yapmak gibi).", color: "from-purple-500/20 to-transparent" },
    { title: "Geçmişteki Durumlar", icon: Clock, desc: "Eskiden doğru olan ama artık değişen durumlar (Eskiden şişman olmak, eski bir evde yaşamak).", color: "from-blue-500/20 to-transparent" },
    { title: "Değişen Beğeniler", icon: RefreshCw, desc: "Zevklerin zamanla nasıl değiştiğini vurgularken.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "'d' Harfi Nereye Gitti?",
      wrong: "I didn't used to go.",
      right: "I didn't use to go.",
      note: "Eğer cümlede 'Did' veya 'Didn't' varsa, fiil yorulmaz! 'used' kelimesindeki 'd' düşer ve 'use' olur."
    },
    {
      title: "Şu an İçin Kullanma!",
      wrong: "I used to drink coffee every morning (şimdi yapıyorsan).",
      right: "I usually drink coffee every morning.",
      note: "Used to sadece 'geçmişte kaldı' demek içindir. Şu anki alışkanlıklar için 'usually' veya 'always' kullanılır."
    },
    {
      title: "Püf Noktası: Be Used To",
      wrong: "I used to driving in London.",
      right: "I used to drive in London.",
      note: "Used to + Fiil = Eskiden yapardım. Karıştırma! (Be used to + ING = Alışkın olmak)."
    }
  ],

  challenge: {
    words: ["used to", "didn't use to", "Did you use to", "use to", "usually", "used"],
    questions: [
      {
        id: "q1",
        text: ["I ", " have long hair, but I cut it."],
        correct: "used to",
        hint: "Geçmişte öyleydi ama artık değil.",
        visualFormula: "Positive Statement"
      },
      {
        id: "q2",
        text: ["We ", " like each other, but now we are best friends."],
        correct: "didn't use to",
        hint: "Eskiden 'sevmezdik'. Olumsuz yapıya dikkat!",
        visualFormula: "Negative Statement"
      },
      {
        id: "q3",
        text: ["", " travel a lot when you were young?"],
        correct: "Did you use to",
        hint: "Geçmişteki bir alışkanlığı soruyoruz.",
        visualFormula: "Question Form"
      },
      {
        id: "q4",
        text: ["I ", " watch TV every night now."],
        correct: "usually",
        hint: "Dikkat! 'Now' (şimdi) diyor. Geçmişten bahsetmiyor.",
        visualFormula: "Present Habit (Trap!)"
      },
      {
        id: "q5",
        text: ["He didn't ", " smoke."],
        correct: "use to",
        hint: "Didn't geldiği için sondaki 'd' düşmeli.",
        visualFormula: "Did/Didn't Rule"
      }
    ]
  }
};