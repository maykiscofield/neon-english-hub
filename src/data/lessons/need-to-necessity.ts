import { Zap, Clock, AlertCircle, Info, HelpCircle, HandMetal } from 'lucide-react';

export const needToNecessityData = {
  id: '10.3-need-to', // image_1fb480.png ile tam uyumlu
  title: '10.3 NEED TO (GEREKLİLİKLER)',
  description: 'Bir şeyi yapmaya ihtiyacınız olduğunda veya yapmanız gerektiğinde kullanılan en temel kalıptır.',

  formulas: {
    positive: [
      { label: "Subject", detail: "Özne (I, You, We, They)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "NEED TO", detail: "Gereklilik Köprüsü", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400" },
      { label: "Complement", detail: "Nesne / Devamı", color: "border-emerald-500/30 text-emerald-400" }
    ],
    negative: [
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "don't / doesn't", detail: "Yardımcı Fiil", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "NEED TO", detail: "Gerekmiyor", color: "border-purple-500/30 text-purple-400" },
      { label: "Verb (V1)", detail: "Fiil", color: "border-white/10 text-white" }
    ],
    question: [
      { label: "Do / Does", detail: "Soru Eki", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "NEED TO", detail: "Gereklilik", color: "border-purple-500/30 text-purple-400" },
      { label: "Verb (V1)?", detail: "Fiil?", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-blue-400" },
        { text: "need to", color: "text-purple-400", underline: true },
        { text: "buy", color: "text-pink-400" },
        { text: "some bread.", color: "text-emerald-400" }
      ],
      translation: "Biraz ekmek almam gerekiyor. (Eylem var: to buy)"
    },
    negative: {
      parts: [
        { text: "He", color: "text-blue-400" },
        { text: "doesn't", color: "text-red-400" },
        { text: "need to", color: "text-purple-400", underline: true },
        { text: "wake up", color: "text-white" },
        { text: "early tomorrow.", color: "text-white" }
      ],
      translation: "Onun yarın erken kalkmasına gerek yok."
    },
    question: {
      parts: [
        { text: "Do", color: "text-emerald-400" },
        { text: "we", color: "text-blue-400" },
        { text: "need to", color: "text-purple-400", underline: true },
        { text: "bring", color: "text-white" },
        { text: "our passports?", color: "text-white" }
      ],
      translation: "Pasaportlarımızı getirmemiz gerekiyor mu?"
    }
  },

  scenarios: [
    { title: "İhtiyaçlar", icon: Zap, desc: "Günlük hayatta eksikliğini hissettiğiniz şeyler için.", color: "from-blue-500/20 to-transparent" },
    { title: "Planlar", icon: Clock, desc: "Yapmanız gereken görevler ve randevular için.", color: "from-purple-500/20 to-transparent" },
    { title: "Zorunluluk Değil", icon: AlertCircle, desc: "Must (Zorunluluk) kadar sert değildir, kişisel ihtiyaç bildirir.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Gereksiz 'To' Kullanımı",
      wrong: "I need to a new car.",
      right: "I need a new car.",
      note: "Eğer bir eşya (isim) istiyorsanız 'to' koymayın. Sadece fiillerden önce 'to' gelir."
    },
    {
      title: "Olumsuz Cümlede 'S' Takısı",
      wrong: "She doesn't needs to...",
      right: "She doesn't need to...",
      note: "Doesn't kullandığınızda 's' takısı uçar gider, kelime yorulmaz!"
    }
  ],

  challenge: {
    words: ["need to", "needs to", "don't need to", "doesn't need to", "Do", "Does"],
    questions: [
      {
        id: "q1",
        text: ["I am very thirsty. I ", " drink some water."],
        correct: "need to",
        hint: "Susadıysanız bu bir ihtiyaçtır.",
        visualFormula: "Subject (I) + NEED TO + Verb"
      },
      {
        id: "q2",
        text: ["Sarah ", " finish her report today."],
        correct: "needs to",
        hint: "Özne 'Sarah' (She) olduğu için 's' takısı gerekir.",
        visualFormula: "Subject (She) + NEEDS TO"
      },
      {
        id: "q3",
        text: ["Today is a holiday. We ", " go to work."],
        correct: "don't need to",
        hint: "Tatil gününde işe gitmek 'gerekmez'.",
        visualFormula: "Subject (We) + DON'T NEED TO"
      },
      {
        id: "q4",
        text: ["Mark has a lot of money. He ", " work anymore."],
        correct: "doesn't need to",
        hint: "Mark (He) için olumsuz yapı.",
        visualFormula: "Subject (He) + DOESN'T NEED TO"
      },
      {
        id: "q5",
        text: ["", " you need to call your mom?"],
        correct: "Do",
        hint: "'You' öznesi için soru yardımcı fiili.",
        visualFormula: "DO + Subject (You)"
      },
      {
        id: "q6",
        text: ["", " she need to buy a ticket?"],
        correct: "Does",
        hint: "'She' öznesi için soru yardımcı fiili.",
        visualFormula: "DOES + Subject (She)"
      }
    ]
  }
};