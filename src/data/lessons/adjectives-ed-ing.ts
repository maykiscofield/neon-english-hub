// src/data/lessons/adjectives-ed-ing.ts
import { Zap, Smile, Search, AlertCircle, HelpCircle, Target } from 'lucide-react';

export const adjectivesEdIngData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: 'ek-adjectives-ed-ing', 
  title: '[EK] SIFATLAR (-ED / -ING)',
  
  formulas: {
    positive: [ // -ING Sıfatları (Özellik/Kaynak)
      { label: "-ING", detail: "Neden olan / Kaynak", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Karakter", detail: "O şey nasıl bir şey?", color: "border-blue-500/30 text-blue-400" }
    ],
    negative: [ // -ED Sıfatları (Duygu/Sonuç)
      { label: "-ED", detail: "Hissedilen / Etkilenen", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Duygu", detail: "Kişi nasıl hissediyor?", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Hızlı Test
      { label: "Nesne/Durum", detail: "Genelde -ING", color: "border-white/10 text-white" },
      { label: "İnsan/Canlı", detail: "Genelde -ED", color: "border-yellow-500/30 text-yellow-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "The book is", color: "text-white" },
        { text: "interesting.", color: "text-purple-400", underline: true }
      ],
      translation: "Kitap ilginç. (Kitabın özelliği, bana bu hissi veriyor.)"
    },
    negative: {
      parts: [
        { text: "I am", color: "text-white" },
        { text: "interested", color: "text-emerald-400", underline: true },
        { text: "in history.", color: "text-white" }
      ],
      translation: "Tarihle ilgileniyorum / Tarihe ilgi duyuyorum. (Benim içimdeki duygu.)"
    },
    question: {
      parts: [
        { text: "Working all day is", color: "text-white" },
        { text: "tiring,", color: "text-purple-400", underline: true },
        { text: "so I feel", color: "text-white" },
        { text: "tired.", color: "text-emerald-400", underline: true }
      ],
      translation: "Tüm gün çalışmak yorucu, bu yüzden yorgun hissediyorum."
    }
  },

  scenarios: [
    { title: "Karakter Analizi", icon: Target, desc: "Bir filmin, kitabın veya bir kişinin genel özelliğini anlatırken -ING kullanın.", color: "from-purple-500/20 to-transparent" },
    { title: "Duygu Paylaşımı", icon: Smile, desc: "O an ne hissettiğinizi veya bir olaydan nasıl etkilendiğinizi anlatırken -ED kullanın.", color: "from-emerald-500/20 to-transparent" },
    { title: "Neden-Sonuç", icon: Search, desc: "Dışarıdaki bir 'Yorucu' (Tiring) olay, sizde 'Yorgunluk' (Tired) hissi yaratır.", color: "from-blue-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Özne Canlı mı Cansız mı?",
      wrong: "The lesson is bored.",
      right: "The lesson is boring.",
      note: "Cansız bir nesne (ders) 'sıkılamaz'. Eğer dersin özelliğini söylüyorsak -ING gelmeli."
    },
    {
      title: "En Büyük Karışıklık: Boring vs Bored",
      wrong: "He is bored. (O sıkıcı biridir demek isterken)",
      right: "He is boring.",
      note: "Eğer bir arkadaşınızın sıkıcı bir karakteri varsa 'boring'dir. Eğer o an canı sıkılmışsa 'bored'dur."
    }
  ],

  challenge: {
    words: ["exciting", "excited", "shocking", "shocked", "confusing", "confused"],
    questions: [
      {
        id: "q1",
        text: ["The football match was very ", ". My team won in the last minute!"],
        correct: "exciting",
        hint: "Maçın özelliğinden bahsediyoruz; bize heyecan verdi.",
        visualFormula: "Source of feeling (-ING)"
      },
      {
        id: "q2",
        text: ["I am so ", " about the holiday! I can't wait."],
        correct: "excited",
        hint: "Kişisel bir heyecan duygusundan bahsediyoruz.",
        visualFormula: "Personal feeling (-ED)"
      },
      {
        id: "q3",
        text: ["The news was ", ". Nobody expected it."],
        correct: "shocking",
        hint: "Haberin karakteri; insanları şok eden bir haber.",
        visualFormula: "Characteristic (-ING)"
      },
      {
        id: "q4",
        text: ["I was ", " when I heard the bad news."],
        correct: "shocked",
        hint: "Haber karşısında hissedilen duygu.",
        visualFormula: "Resulting feeling (-ED)"
      },
      {
        id: "q5",
        text: ["This map is very ", ". I don't know where to go."],
        correct: "confusing",
        hint: "Haritanın özelliği; kafa karıştırıyor.",
        visualFormula: "Property (-ING)"
      },
      {
        id: "q6",
        text: ["I am ", ". Can you explain it again?"],
        correct: "confused",
        hint: "Kişinin o anki kafa karışıklığı duygusu.",
        visualFormula: "Emotional state (-ED)"
      }
    ]
  }
};