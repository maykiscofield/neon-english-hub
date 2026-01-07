import { Zap, MonitorPlay, PhoneIncoming, Film, Clock } from 'lucide-react';

export const pastContPastSimpleData = {
  id: '3.2-past-cont-past-simple',
  title: '3.2 PAST CONTINUOUS & PAST SIMPLE',
  
  formulas: {
    positive: [
      { label: "Was / Were", detail: "I, He, She, It (Was) | You, We, They (Were)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "V-ing", detail: "Yürüyordum, yapıyordum...", color: "border-purple-500/30 text-purple-400" }
    ],
    negative: [
      { label: "When", detail: "+ Past Simple (Anlık olay)", color: "border-emerald-500/30 text-emerald-400" },
      { label: "While", detail: "+ Past Cont. (Süreç)", color: "border-yellow-500/30 text-yellow-400" }
    ],
    question: [
      { label: "Interrupting", detail: "Past Simple (Aniden olan)", color: "border-red-500/30 text-red-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "was watching", color: "text-blue-400", underline: true },
        { text: "TV when the phone", color: "text-white" },
        { text: "rang.", color: "text-red-400", underline: true }
      ],
      translation: "Telefon çaldığında TV izliyordum. (İzleme sürüyordu, telefon 'şak' diye çaldı.)"
    },
    negative: {
      parts: [
        { text: "While", color: "text-yellow-400", underline: true },
        { text: "I was cooking, I", color: "text-white" },
        { text: "burned", color: "text-emerald-400", underline: true },
        { text: "my finger.", color: "text-white" }
      ],
      translation: "Yemek yaparken parmağımı yaktım."
    },
    question: {
      parts: [
        { text: "What", color: "text-white" },
        { text: "were you doing", color: "text-blue-400", underline: true },
        { text: "when the rain started?", color: "text-white" }
      ],
      translation: "Yağmur başladığında ne yapıyordun?"
    }
  },

  scenarios: [
    { title: "Sahneleri Kurmak", icon: Film, desc: "Bir hikayeye başlarken arka planı anlatmak için (Hava yağıyordu, insanlar gülüyordu...).", color: "from-blue-500/20 to-transparent" },
    { title: "Zaman Çizelgesi", icon: Clock, desc: "Biri uzun süren (Cont.), diğeri onu bölen kısa olay (Simple) dengesi.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Asla 'Was/Were' Unutma!",
      wrong: "I watching TV.",
      right: "I WAS watching TV.",
      note: "Continuous yapısında was/were olmadan cümle kurulmaz."
    },
    {
      title: "When vs. While Püf Noktası",
      wrong: "While the phone rang...",
      right: "When the phone rang...",
      note: "When'den sonra genelde kısa olay (Simple), While'dan sonra genelde uzun olay (Cont.) gelir."
    }
  ],

  challenge: {
    words: ["was studying", "called", "while", "when", "were playing", "started"],
    questions: [
      {
        id: "q1",
        text: ["I ", " when the power went out."],
        correct: "was studying",
        hint: "Elektrik kesildiğinde 'yapmakta' olduğun iş.",
        visualFormula: "Background Action"
      },
      {
        id: "q2",
        text: ["", " I was walking, I saw an old friend."],
        correct: "While",
        hint: "Sürece bağlanan bağlaç.",
        visualFormula: "Connecting to a long action"
      }
    ]
  }
};