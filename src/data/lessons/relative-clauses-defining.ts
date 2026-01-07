import { Link, User, Package, MapPin, AlertTriangle, Zap, Search, Info } from 'lucide-react';

export const relativeClausesDefiningData = {
  id: '9.2-relative-clauses-defining',
  title: '9.2 DEFINING RELATIVE CLAUSES',
  description: 'Cümleleri birbirine bağlayan "Sihirli Köprüler". Birini veya bir şeyi binlerce benzerinden ayırıp "tam olarak hangisi" olduğunu tanımlamanızı sağlar.',

  // Üst neon kutucuklar
  formulas: {
    positive: [
      { label: "Person / Thing", detail: "Tanımlanan İsim", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Who / Which / That", detail: "Sihirli Köprü", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Defining Info", detail: "Ayırt Edici Bilgi", color: "border-pink-500/30 text-pink-400" }
    ],
    negative: [
      { label: "Relative Clause", detail: "Yan Cümlecik", color: "border-purple-500/30 text-purple-400" },
      { label: "isn't / don't", detail: "Olumsuzluk", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb", detail: "Fiil", color: "border-white/10 text-white" }
    ],
    question: [
      { label: "Main Question", detail: "Ana Soru", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Who / That", detail: "Köprü", color: "border-purple-500/30 text-purple-400" },
      { label: "Rest of sentence", detail: "Devamı", color: "border-white/10 text-white" }
    ]
  },

  // Ortadaki renkli cümle analizi
  examples: {
    positive: {
      parts: [
        { text: "I know a man", color: "text-blue-400" },
        { text: "who", color: "text-purple-400", underline: true },
        { text: "can speak 10 languages.", color: "text-pink-400" }
      ],
      translation: "10 dil konuşabilen bir adam tanıyorum. (Who, bu adamı diğer tüm adamlardan ayırır.)"
    },
    negative: {
      parts: [
        { text: "This is the phone", color: "text-blue-400" },
        { text: "which", color: "text-purple-400", underline: true },
        { text: "doesn't", color: "text-red-400" },
        { text: "work properly.", color: "text-white" }
      ],
      translation: "Bu, düzgün çalışmayan telefondur. (Telefonun özelliğini tanımlıyoruz.)"
    },
    question: {
      parts: [
        { text: "Do you like books", color: "text-emerald-400" },
        { text: "that", color: "text-purple-400", underline: true },
        { text: "have sad endings?", color: "text-white" }
      ],
      translation: "Üzücü sonu olan kitapları sever misin? (That, hem insan hem nesne içindir.)"
    }
  },

  // Üçlü senaryo kartları
  scenarios: [
    { title: "Kişi Tanıtma", icon: User, desc: "Birinden bahsederken o kişiyi netleştirmek için 'who' köprüsünü kurun.", color: "from-blue-500/20 to-transparent" },
    { title: "Detay Verme", icon: Search, desc: "Bir nesneyi binlerce benzerinden ayırmak için 'which' veya 'that' kullanın.", color: "from-purple-500/20 to-transparent" },
    { title: "Mekan Tarifi", icon: MapPin, desc: "Özelliği olan yerleri (yaşadığınız yer vb.) tanımlarken 'where' idealdir.", color: "from-yellow-500/20 to-transparent" }
  ],

  // Kritik uyarı kutuları
  warnings: [
    {
      title: "Gereksiz Zamir Kullanımı",
      wrong: "The girl who she is my sister...",
      right: "The girl who is my sister...",
      note: "'Who' zaten öznenin yerini aldığı için yanına tekrar 'she' koymak anlatım bozukluğudur."
    },
    {
      title: "Zamiri Çöpe At!",
      wrong: "The book which I read it was good.",
      right: "The book which I read was good.",
      note: "Bağlaç nesnenin yerine geçtiği için cümlede tekrar 'it' zamirine gerek kalmaz."
    },
    {
      title: "Where ve Which Farkı",
      wrong: "The city where is famous for pizza...",
      right: "The city which is famous for pizza...",
      note: "Eğer yerin bir özelliğini söylüyorsak 'which', orada bir eylem yapılıyorsa 'where' kullanılır."
    }
  ],

  // 6 soruluk interaktif quiz
  challenge: {
    words: ["who", "which", "where", "whose", "that", "that"],
    questions: [
      {
        id: "q1",
        text: ["The man ", " lives next door is a pilot."],
        correct: "who",
        hint: "Tanımlanan kişi 'the man' (insan).",
        visualFormula: "Person + WHO + Verb"
      },
      {
        id: "q2",
        text: ["I want to buy the laptop ", " is on sale."],
        correct: "which",
        hint: "Laptop bir nesnedir.",
        visualFormula: "Thing + WHICH + Verb"
      },
      {
        id: "q3",
        text: ["This is the school ", " I study."],
        correct: "where",
        hint: "Mekandan ve orada yapılan bir eylemden bahsediyoruz.",
        visualFormula: "Place + WHERE + Sentence"
      },
      {
        id: "q4",
        text: ["The students ", " failed the test were sad."],
        correct: "that",
        hint: "İnsanlar için Who yerine That da kullanılabilir.",
        visualFormula: "Person + THAT + Verb"
      },
      {
        id: "q5",
        text: ["Is there a place ", " I can park my car?"],
        correct: "where",
        hint: "Bir park alanı/yer soruluyor.",
        visualFormula: "Place + WHERE"
      },
      {
        id: "q6",
        text: ["I lost the watch ", " you gave me."],
        correct: "that",
        hint: "Elinizdeki nesneler için that/which kullanın.",
        visualFormula: "Thing + THAT"
      }
    ]
  }
};