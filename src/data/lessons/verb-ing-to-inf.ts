import { Zap, Heart, Target, ListChecks } from 'lucide-react';

export const verbIngToInfData = {
  id: '3.3-verb-ing-to-inf',
  title: '3.3 FİİL + -ING VEYA TO + INFINITIVE',
  
  formulas: {
    positive: [
      { label: "Verb + TO", detail: "Want, Need, Plan, Decide", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Future Goal", detail: "Henüz yapılmamış, hedef", color: "border-purple-500/30 text-purple-400" }
    ],
    negative: [
      { label: "Verb + ING", detail: "Enjoy, Finish, Suggest, Mind", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Action/Experience", detail: "Deneyim veya eylemin kendisi", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [
      { label: "Prepositions", detail: "After, Before, At, In + ING", color: "border-yellow-500/30 text-yellow-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "want", color: "text-blue-400", underline: true },
        { text: "to buy", color: "text-purple-400", underline: true },
        { text: "a new car.", color: "text-white" }
      ],
      translation: "Yeni bir araba satın almak istiyorum. (Want fiili daima 'to' ile bağlanır.)"
    },
    negative: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "enjoy", color: "text-emerald-400", underline: true },
        { text: "reading", color: "text-pink-400", underline: true },
        { text: "books.", color: "text-white" }
      ],
      translation: "Kitap okumaktan keyif alırım. (Enjoy fiili daima '-ing' ister.)"
    },
    question: {
      parts: [
        { text: "He", color: "text-white" },
        { text: "decided", color: "text-blue-400" },
        { text: "to go", color: "text-purple-400", underline: true },
        { text: "home.", color: "text-white" }
      ],
      translation: "Eve gitmeye karar verdi."
    }
  },

  scenarios: [
    { title: "İstek ve Kararlar", icon: Target, desc: "Gelecekte yapmayı planladığın her şey genelde TO ister.", color: "from-blue-500/20 to-transparent" },
    { title: "Duygular ve Bitirme", icon: Heart, desc: "Keyif aldığın veya bitirdiğin işler genelde ING ister.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Edat Kuralı",
      wrong: "I'm good at to swim.",
      right: "I'm good at SWIMMING.",
      note: "At, in, on, about gibi edatlardan sonra gelen fiil daima -ing alır."
    },
    {
      title: "Anlam Değiştirenler",
      wrong: "I stopped to smoke. (Sigarayı bıraktım demek isterken)",
      right: "I stopped smoking.",
      note: "Stop + ING: O işi bırakmak. Stop + TO: Başka bir iş için durmak."
    }
  ],

  challenge: {
    words: ["to meet", "meeting", "suggested", "planned", "finishing", "to finish"],
    questions: [
      {
        id: "q1",
        text: ["I hope ", " you soon."],
        correct: "to meet",
        hint: "Umut ve beklenti bildiren fiil.",
        visualFormula: "Hope + TO"
      },
      {
        id: "q2",
        text: ["He finished ", " his homework."],
        correct: "finishing", // Veya doing
        hint: "Bir işin sonlanması.",
        visualFormula: "Finish + ING"
      }
    ]
  }
};