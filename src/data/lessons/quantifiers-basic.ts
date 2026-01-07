// src/data/lessons/quantifiers-basic.ts
import { Zap, ShoppingCart, Coffee, AlertCircle, HelpCircle, CheckCircle2, Scale } from 'lucide-react';

export const quantifiersBasicData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '3.1-quantifiers-basic', 
  title: '3.1 MİKTAR BELİRLEYİCİLER (QUANTIFIERS)',
  
  formulas: {
    positive: [ // A Lot of (Her iki tarafa da uyar - Kurtarıcı!)
      { label: "A lot of", detail: "Çok (Her şeyle kullanılır)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Count/Uncount", detail: "Elma veya Su fark etmez", color: "border-white/10 text-white" }
    ],
    negative: [ // Much & Many (Olumsuz ve Soru)
      { label: "Many", detail: "Çok (Sayılabilen - Elma)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Much", detail: "Çok (Sayılamayan - Su)", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    question: [ // A Few & A Little (Azıcık)
      { label: "A few", detail: "Birkaç tane (Sayılabilen)", color: "border-pink-500/30 text-pink-400" },
      { label: "A little", detail: "Birazcık (Sayılamayan)", color: "border-yellow-500/30 text-yellow-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I have", color: "text-white" },
        { text: "a lot of", color: "text-blue-400", underline: true },
        { text: "friends", color: "text-white" },
        { text: "and", color: "text-white" },
        { text: "a lot of", color: "text-blue-400", underline: true },
        { text: "money.", color: "text-white" }
      ],
      translation: "Çok arkadaşım ve çok param var. (A lot of hem sayılan hem sayılmayanla olumlu cümlede jokerdir.)"
    },
    negative: {
      parts: [
        { text: "I don't have", color: "text-white" },
        { text: "many", color: "text-purple-400", underline: true },
        { text: "books", color: "text-white" },
        { text: "and", color: "text-white" },
        { text: "much", color: "text-emerald-400", underline: true },
        { text: "time.", color: "text-white" }
      ],
      translation: "Çok kitabım ve çok vaktim yok. (Kitap sayılır -> many, Vakit sayılmaz -> much.)"
    },
    question: {
      parts: [
        { text: "Would you like", color: "text-white" },
        { text: "a little", color: "text-yellow-400", underline: true },
        { text: "milk", color: "text-white" },
        { text: "in your coffee?", color: "text-white" }
      ],
      translation: "Kahvene biraz süt ister misin? (Süt sayılamaz, o yüzden a little.)"
    }
  },

  scenarios: [
    { title: "Mutfak & Yemek", icon: Coffee, desc: "Sıvılar, un, şeker gibi sayılamayan maddelerle miktar belirtirken.", color: "from-emerald-500/20 to-transparent" },
    { title: "Alışveriş", icon: ShoppingCart, desc: "Eşyaların adetini (many) veya fiyat/para miktarını (much) sorarken.", color: "from-blue-500/20 to-transparent" },
    { title: "Denge", icon: Scale, desc: "Elinizdeki imkanların azlığını veya çokluğunu tartarken kullanılır.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Para Sayılamaz mı?!",
      wrong: "How many money do you have?",
      right: "How much money do you have?",
      note: "İngilizcede 'Money' kelimesi sayılamaz kabul edilir. Türkçedeki gibi '3 para' demeyiz, '3 lira' deriz. Birimi (Dollar, Lira) sayılır ama kelimenin kendisi sayılmaz."
    },
    {
      title: "Much/Many vs. A lot of",
      wrong: "I have much friends.",
      right: "I have a lot of friends.",
      note: "Much ve Many genelde SORU ve OLUMSUZ cümleleri sever. Olumlu bir cümlede 'Çok' demek istiyorsan 'A lot of' kullanmak çok daha doğal duyulur."
    },
    {
      title: "Few vs. Little Farkı",
      wrong: "I have a few water.",
      right: "I have a little water.",
      note: "Eğer tane tane sayabiliyorsan (kalem, insan, gün) -> A FEW. Eğer sayamıyorsan (su, sevgi, sabır) -> A LITTLE."
    }
  ],

  challenge: {
    words: ["much", "many", "a lot of", "a few", "a little", "How many"],
    questions: [
      {
        id: "q1",
        text: ["How ", " people are there in the room?"],
        correct: "many",
        hint: "İnsanlar tane tane sayılabilir.",
        visualFormula: "Countable Question"
      },
      {
        id: "q2",
        text: ["I don't have ", " free time this week."],
        correct: "much",
        hint: "Vakit (time) kelimesi sayılamaz.",
        visualFormula: "Uncountable Negative"
      },
      {
        id: "q3",
        text: ["There are ", " cars in the parking lot. It's almost full!"],
        correct: "a lot of",
        hint: "Olumlu cümlede 'çok' vurgusu.",
        visualFormula: "Positive 'Big Amount'"
      },
      {
        id: "q4",
        text: ["Can I have ", " sugar in my tea, please?"],
        correct: "a little",
        hint: "Şeker sayılamaz bir maddedir.",
        visualFormula: "Small Amount (Uncount)"
      },
      {
        id: "q5",
        text: ["I have ", " apples. We can make a small pie."],
        correct: "a few",
        hint: "Elmalar sayılabilir.",
        visualFormula: "Small Amount (Count)"
      },
      {
        id: "q6",
        text: ["", " siblings do you have?"],
        correct: "How many",
        hint: "Kardeş sayısını sormak için kullanılan kalıp.",
        visualFormula: "Number Question"
      }
    ]
  }
};