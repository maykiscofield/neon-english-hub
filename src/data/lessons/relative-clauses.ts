// src/data/lessons/relative-clauses.ts
import { Zap, Users, Box, Info, AlertCircle, Link } from 'lucide-react';

export const relativeClausesData = {
  // Bu ID'nin Topics.tsx dosyanızdaki ile birebir aynı olduğundan emin olun
  id: 'b1-8.1-relative-clauses', 
  title: '8.1 RELATIVE CLAUSES',
  
  // Üst kısımdaki neon formül kutucukları
  formulas: {
    positive: [ // Defining (Gerekli Bilgi)
      { label: "Noun", detail: "Tanımlanan İsim", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "who / which / that", detail: "İlgi Zamiri", color: "border-purple-500/30 text-purple-400" },
      { label: "Clause", detail: "Tanımlayıcı Cümle", color: "border-pink-500/30 text-pink-400" }
    ],
    negative: [ // Non-Defining (Ek Bilgi - Virgüllü)
      { label: "Noun", detail: "Özel İsim / Bilinen", color: "border-blue-500/30 text-blue-400" },
      { label: ", who / which ,", detail: "Virgüllü Bölüm", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Extra Info", detail: "Atılabilir Bilgi", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [ // Possession & Place (Whose / Where)
      { label: "whose", detail: "Aitlik (Onun...)", color: "border-yellow-500/30 text-yellow-400" },
      { label: "where", detail: "Yer (Orada...)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Noun / Subject", detail: "Takip Eden Yapı", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "The man", color: "text-blue-400", underline: true },
        { text: "who", color: "text-purple-400" },
        { text: "lives next door", color: "text-pink-400" },
        { text: "is a pilot.", color: "text-white" }
      ],
      translation: "Yan kapıda yaşayan adam bir pilottur. (Hangi adam? Sorusuna cevap verir, bilgi gereklidir.)"
    },
    negative: {
      parts: [
        { text: "My brother,", color: "text-blue-400", underline: true },
        { text: "who", color: "text-red-400" },
        { text: "lives in London,", color: "text-emerald-400" },
        { text: "is visiting me.", color: "text-white" }
      ],
      translation: "Londra'da yaşayan erkek kardeşim beni ziyaret ediyor. (Zaten tek kardeşim var, Londra bilgisi ekstra.)"
    },
    question: {
      parts: [
        { text: "That is the girl", color: "text-white" },
        { text: "whose", color: "text-yellow-400", underline: true },
        { text: "father", color: "text-pink-400" },
        { text: "won the lottery.", color: "text-emerald-400" }
      ],
      translation: "Babası piyangoyu kazanan kız bu."
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "İnsanlar & Nesneler", icon: Users, desc: "İnsanlar için 'who', nesneler için 'which' kullanılır. 'That' her ikisinin yerini tutabilir (Defining'de).", color: "from-blue-500/20 to-transparent" },
    { title: "Aitlik (Whose)", icon: Link, desc: "İsimlerden sonra gelir ve 'sahibi olduğu şeyi' bağlar. İnsan ve nesne ayrımı yapmaz.", color: "from-purple-500/20 to-transparent" },
    { title: "Mekan & Zaman", icon: Info, desc: "Yer bildirirken 'where', zaman bildirirken 'when' kullanılır.", color: "from-pink-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "Virgüllü Cümlede 'That' Yasaktır",
      wrong: "London, that is a big city, is expensive.",
      right: "London, which is a big city, is expensive.",
      note: "Ek bilgi veren (Non-defining) virgüllü cümlelerde 'that' asla kullanılamaz."
    },
    {
      title: "Zamir Atma (Omission)",
      wrong: "The book which I bought it.",
      right: "The book (which) I bought.",
      note: "Eğer ilgi zamiri (who/which/that) cümlenin nesnesiyse atılabilir. Ayrıca 'it' gibi tekrarlara gerek yoktur."
    },
    {
      title: "Whose + İsim",
      wrong: "The man whose is tall.",
      right: "The man whose car is red.",
      note: "'Whose' yapısından hemen sonra mutlaka bir isim (car, father, house vb.) gelmelidir."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["who", "which", "whose", "where", "that", "when"],
    questions: [
      {
        id: "q1",
        text: ["This is the hotel ", " we stayed last summer."],
        correct: "where",
        hint: "Bir mekandan (otel) bahsediyoruz ve orada konakladık.",
        visualFormula: "Place + WHERE"
      },
      {
        id: "q2",
        text: ["I met a woman ", " sister knows you."],
        correct: "whose",
        hint: "Kadının kız kardeşi (aitlik/iyelik) anlamı var.",
        visualFormula: "Person + WHOSE + Noun"
      },
      {
        id: "q3",
        text: ["The laptop ", " I bought yesterday is very slow."],
        correct: "that",
        hint: "Bir nesne (laptop) için tanımlama yapıyoruz.",
        visualFormula: "Object + WHICH/THAT"
      },
      {
        id: "q4",
        text: ["My mother, ", " is 60, still runs marathons."],
        correct: "who",
        hint: "İnsan ve ek bilgi (virgüllü); 'that' kullanamazsın!",
        visualFormula: ", WHO , (Non-defining)"
      },
      {
        id: "q5",
        text: ["2020 was the year ", " everything changed."],
        correct: "when",
        hint: "Bir zaman diliminden (yıl) bahsediyoruz.",
        visualFormula: "Time + WHEN"
      },
      {
        id: "q6",
        text: ["The painting, ", " was painted by Da Vinci, is priceless."],
        correct: "which",
        hint: "Nesne ve ek bilgi (virgüllü); 'that' yasaktır.",
        visualFormula: ", WHICH , (Non-defining)"
      }
    ]
  }
};