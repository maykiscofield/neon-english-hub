import { User, Users, UserRound, Sparkles, AlertCircle, HelpCircle, GraduationCap, Zap } from 'lucide-react';

export const reflexivePronounsData = {
  id: '8.1-reflexive-pronouns',
  title: '8.1 REFLEXIVE PRONOUNS (KENDİM, KENDİN...)',
  
  formulas: {
    positive: [ // Temel Kullanım: Özne ve Nesne Aynıysa
      { label: "Subject", detail: "I, You, He, She...", color: "border-white/10 text-white" },
      { label: "Verb", detail: "Herhangi bir eylem", color: "border-blue-500/30 text-blue-400" },
      { label: "Reflexive", detail: "Myself, Yourself...", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // Vurgu Yaparken (Öznenin hemen peşine gelir)
      { label: "Subject", detail: "Öznenin kendisi", color: "border-white/10 text-white" },
      { label: "Reflexive", detail: "Vurgu amaçlı", color: "border-purple-500/30 text-purple-400" },
      { label: "Verb", detail: "Eylemi bizzat yaptı", color: "border-blue-500/30 text-blue-400" }
    ],
    question: [ // 'Yalnız Başına' Anlamı (By + Reflexive)
      { label: "By", detail: "Aracılığıyla / Yanında", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Reflexive", detail: "Tek başına / Kendi başına", color: "border-purple-500/30 text-purple-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "cut", color: "text-blue-400" },
        { text: "myself", color: "text-purple-400", underline: true },
        { text: "while cooking.", color: "text-white" }
      ],
      translation: "Yemek yaparken kendimi kestim. (Kesen benim, kesilen de benim -> Aynalık etkisi!)"
    },
    negative: {
      parts: [
        { text: "The Queen", color: "text-white" },
        { text: "herself", color: "text-purple-400", underline: true },
        { text: "opened the door.", color: "text-white" }
      ],
      translation: "Kapıyı kraliçenin bizzat kendisi açtı. (Burada vurgu var, kraliçenin başkasına açtırmadığını anlatıyor.)"
    },
    question: {
      parts: [
        { text: "Did you go to the cinema", color: "text-white" },
        { text: "by", color: "text-yellow-400" },
        { text: "yourself", color: "text-purple-400", underline: true },
        { text: "?", color: "text-white" }
      ],
      translation: "Sinemaya tek başına (kendi başına) mı gittin?"
    }
  },

  scenarios: [
    { title: "Ayna Etkisi", icon: UserRound, desc: "Eylemi yapan ve etkilenen aynı kişiyse (Kendine bakmak, kendini tanıtmak).", color: "from-purple-500/20 to-transparent" },
    { title: "Bizzat Vurgusu", icon: Sparkles, desc: "Bir işi başkasının değil, o kişinin kendisinin yaptığını bastıra bastıra söylerken.", color: "from-blue-500/20 to-transparent" },
    { title: "Yalnızlık (By)", icon: User, desc: "Bir işi 'yalnız başına' veya 'yardımsız' yapıldığını belirtirken.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "'Me' mi, 'Myself' mi?",
      wrong: "I love me. / He looked at him (aynada).",
      right: "I love myself. / He looked at himself.",
      note: "Eğer özne ile nesne aynıysa 'me/him/her' kullanamazsın. Mutlaka -self takısı gelmeli."
    },
    {
      title: "Çoğul Tuzağı: -self vs -selves",
      wrong: "We did it ourself. / You (iki kişi) help yourself.",
      right: "We did it ourselves. / You help yourselves.",
      note: "Eğer birden fazla kişi varsa 'self' kelimesi 'selves' olur. (Yourself = Sen / Yourselves = Siz)."
    },
    {
      title: "Otomatik Fiillere Dikkat!",
      wrong: "I wash myself every morning.",
      right: "I wash every morning.",
      note: "Wash, shave, dress gibi zaten 'kendi kendine' yapılan fiillerde normalde reflexive kullanılmaz, gereksizdir."
    }
  ],

  challenge: {
    words: ["myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves"],
    questions: [
      {
        id: "q1",
        text: ["Be careful! You might burn ", " with that iron."],
        correct: "yourself",
        hint: "Özne 'You', dikkat etmezsen 'sen' yanarsın.",
        visualFormula: "Reflexive Rule"
      },
      {
        id: "q2",
        text: ["The cat cleaned ", " after eating the fish."],
        correct: "itself",
        hint: "Kedi bir hayvandır (It).",
        visualFormula: "Animal/Object Rule"
      },
      {
        id: "q3",
        text: ["We prepared the whole project by ", "."],
        correct: "ourselves",
        hint: "Biz yaptık, kimsenin yardımı olmadan (By + ...).",
        visualFormula: "Alone/Unassisted"
      },
      {
        id: "q4",
        text: ["She taught ", " how to play the guitar."],
        correct: "herself",
        hint: "Ona kimse öğretmedi, kendi kendine öğrendi.",
        visualFormula: "Self-teaching"
      },
      {
        id: "q5",
        text: ["They told ", " that everything would be okay."],
        correct: "themselves",
        hint: "Onlar (They) kendi kendilerine söylediler.",
        visualFormula: "Plural Reflexive (-selves)"
      }
    ]
  }
};