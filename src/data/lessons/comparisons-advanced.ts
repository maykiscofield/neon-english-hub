import { Zap, ArrowLeftRight, Star, AlertCircle, Info, TrendingUp, Sparkles, Languages } from 'lucide-react';

export const comparisonsAdvancedData = {
  // KRİTİK: URL'deki ID ile birebir aynı (image_1fac80.png hatasını çözer)
  id: '10.1-comparisons', 
  title: '10.1 & 10.2 COMPARISONS (KARŞILAŞTIRMALAR)',
  description: 'Dünyadaki her şeyi birbiriyle kıyaslamayı öğrenin. Kısa ve uzun sıfatların gizli dünyasını en basit mantığıyla keşfedin.',

  formulas: {
    positive: [
      { label: "Item A", detail: "Kıyaslanan 1", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "is / are", detail: "Fiil", color: "border-white/10 text-white" },
      { label: "Adj + er / More + Adj", detail: "Daha...", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "THAN", detail: "Köprü (-den/-dan)", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Item B", detail: "Kıyaslanan 2", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "isn't / aren't", detail: "Olumsuzluk", color: "border-red-500/30 text-red-400" },
      { label: "as + Adj + as", detail: "Kadar... değil", color: "border-purple-500/30 text-purple-400" }
    ],
    question: [
      { label: "Is / Are", detail: "Yardımcı Fiil", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Subject", detail: "Kıyaslanan", color: "border-blue-500/30 text-blue-400" },
      { label: "er / more than", detail: "Kıyaslama", color: "border-purple-500/30 text-purple-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "My phone is", color: "text-blue-400" },
        { text: "newer", color: "text-purple-400", underline: true },
        { text: "than", color: "text-yellow-400" },
        { text: "your phone.", color: "text-emerald-400" }
      ],
      translation: "Benim telefonum senin telefonundan daha yenidir. (New + er)"
    },
    negative: {
      parts: [
        { text: "This dress is", color: "text-blue-400" },
        { text: "more beautiful", color: "text-purple-400", underline: true },
        { text: "than", color: "text-yellow-400" },
        { text: "the other one.", color: "text-emerald-400" }
      ],
      translation: "Bu elbise diğerinden daha güzeldir. (More + Beautiful)"
    },
    question: {
      parts: [
        { text: "Is Ali", color: "text-blue-400" },
        { text: "better", color: "text-purple-400", underline: true },
        { text: "than", color: "text-yellow-400" },
        { text: "Can at English?", color: "text-emerald-400" }
      ],
      translation: "Ali İngilizcede Can'dan daha mı iyi? (Good -> Better)"
    }
  },

  scenarios: [
    { title: "Alışveriş", icon: Languages, desc: "İki ürünün fiyatını veya kalitesini kıyaslarken 'more expensive' veya 'cheaper' kullanın.", color: "from-blue-500/20 to-transparent" },
    { title: "Hava Durumu", icon: TrendingUp, desc: "Şehirlerin sıcaklıklarını (hotter than) karşılaştırırken idealdir.", color: "from-purple-500/20 to-transparent" },
    { title: "Zaman Yönetimi", icon: Zap, desc: "Hangi ulaşım aracının daha hızlı (faster) olduğunu anlatırken kullanılır.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "🚀 Altın Kural: Sıfatın Boyu Önemlidir!",
      wrong: "He is more tall than me.",
      right: "He is taller than me.",
      note: "Kısa sıfatlarda (tall, fast, big) asla 'more' kullanmayın! Sadece sonuna -er ekleyin."
    },
    {
      title: "💎 Double Negative / Positive Tuzağı",
      wrong: "It is more cheaper.",
      right: "It is cheaper.",
      note: "Eğer -er takısı eklediyseniz, kelime zaten 'daha' anlamını almıştır. Başına tekrar 'more' koymak anlatım bozukluğudur."
    },
    {
      title: "⚠️ Sonu 'y' ile Bitenler",
      wrong: "I am happyer today.",
      right: "I am happier today.",
      note: "Kelime kısa da olsa uzun da olsa (happy, easy, heavy), sonu 'y' ile bitiyorsa 'y' düşer ve '-ier' gelir."
    },
    {
      title: "🔥 'Than' Köprüsü Şarttır!",
      wrong: "This book is better then that one.",
      right: "This book is better than that one.",
      note: "Kıyaslama yaparken kullanılan kelime her zaman 'THAN'dir (den/dan). 'THEN' ise 'sonra' demektir, karıştırmayın!"
    }
  ],

  challenge: {
    // KRİTİK: React key hatasını önlemek için mükerrer kelimeler (that) kaldırıldı.
    words: ["better", "worse", "colder", "more expensive", "easier", "older"],
    questions: [
      {
        id: "q1",
        text: ["Winter in Russia is ", " than in Turkey."],
        correct: "colder",
        hint: "Cold (Kısa sıfat) kıyaslaması.",
        visualFormula: "Adj + -er + THAN"
      },
      {
        id: "q2",
        text: ["A Ferrari is ", " than a bike."],
        correct: "more expensive",
        hint: "Expensive (Uzun sıfat) kıyaslaması.",
        visualFormula: "MORE + Adj + THAN"
      },
      {
        id: "q3",
        text: ["Learning English is ", " than learning Chinese."],
        correct: "easier",
        hint: "Easy sıfatının 'y' kuralı hali.",
        visualFormula: "Happier / Easier"
      },
      {
        id: "q4",
        text: ["Your English is getting ", " every day!"],
        correct: "better",
        hint: "Good (İyi) sıfatının kuralsız hali.",
        visualFormula: "Irregular: Better"
      },
      {
        id: "q5",
        text: ["The traffic today is ", " than yesterday."],
        correct: "worse",
        hint: "Bad (Kötü) sıfatının kuralsız hali.",
        visualFormula: "Irregular: Worse"
      },
      {
        id: "q6",
        text: ["My brother is 10 years ", " than me."],
        correct: "older",
        hint: "Old (Kısa sıfat) kıyaslaması.",
        visualFormula: "Adj + -er + THAN"
      }
    ]
  }
};