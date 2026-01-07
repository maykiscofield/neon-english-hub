// src/data/lessons/conditionals-0-1.ts
import { Zap, Sun, ShoppingCart, AlertCircle, HelpCircle, Thermometer } from 'lucide-react';

export const conditionalsZeroOneData = {
  id: 'b1-9.1-conditionals-0-1', 
  title: '9.1 CONDITIONALS TYPE 0 & 1',
  
  formulas: {
    positive: [ // Type 0 (Genel Gerçekler)
      { label: "If + Present Simple", detail: "Şart (Eğer...)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Present Simple", detail: "Sonuç (Her zaman)", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [ // Type 1 (Gelecek Olasılığı)
      { label: "If + Present Simple", detail: "Şart (Eğer...)", color: "border-blue-500/30 text-blue-400" },
      { label: "Will + V1", detail: "Sonuç (Olursa...)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    question: [ // Unless (Olmazsa olmaz)
      { label: "Unless", detail: "If... not (Madem yok)", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Present Simple", detail: "Olumlu Cümle", color: "border-white/10 text-white" },
      { label: "Will / Won't", detail: "Sonuç", color: "border-purple-500/30 text-purple-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "If you", color: "text-blue-400" },
        { text: "heat", color: "text-blue-400", underline: true },
        { text: "ice,", color: "text-white" },
        { text: "it", color: "text-emerald-400" },
        { text: "melts.", color: "text-emerald-400", underline: true }
      ],
      translation: "Buzu ısıtırsan erir. (Type 0: Bilimsel gerçek, her zaman doğru.)"
    },
    negative: {
      parts: [
        { text: "If it", color: "text-blue-400" },
        { text: "rains", color: "text-blue-400", underline: true },
        { text: "tomorrow,", color: "text-white" },
        { text: "I", color: "text-purple-400" },
        { text: "will stay", color: "text-purple-400", underline: true },
        { text: "at home.", color: "text-white" }
      ],
      translation: "Eğer yarın yağmur yağarsa evde kalacağım. (Type 1: Gelecekte bir ihtimal.)"
    },
    question: {
      parts: [
        { text: "Unless", color: "text-red-400", underline: true },
        { text: "you", color: "text-blue-400" },
        { text: "hurry up,", color: "text-white" },
        { text: "we", color: "text-purple-400" },
        { text: "will miss", color: "text-purple-400" },
        { text: "the bus.", color: "text-white" }
      ],
      translation: "Acele etmezsen otobüsü kaçıracağız. (Unless = If you don't hurry.)"
    }
  },

  scenarios: [
    { title: "Bilimsel Gerçekler", icon: Thermometer, desc: "Fizik kuralları, alışkanlıklar ve her zaman doğru olan durumlar (Type 0).", color: "from-blue-500/20 to-transparent" },
    { title: "Planlar & Sözler", icon: ShoppingCart, desc: "Gelecekte olması bir şarta bağlı olan olaylar (Type 1).", color: "from-purple-500/20 to-transparent" },
    { title: "Doğa Olayları", icon: Sun, desc: "Hava durumu tahminleri ve sonuçları için en yaygın kalıptır.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Will Tuzağı",
      wrong: "If it will rain, I stay at home.",
      right: "If it rains, I will stay at home.",
      note: "If'li kısmın içine asla 'will' gelmez. Will her zaman diğer (sonuç) cümlesinde olur."
    },
    {
      title: "Virgül Kuralı",
      wrong: "If you are tired you should sleep.",
      right: "If you are tired, you should sleep.",
      note: "Cümle 'If' ile başlıyorsa ortada virgül olur. Ama 'If' ortadaysa virgüle gerek yoktur."
    },
    {
      title: "Unless + Olumsuz Cümle",
      wrong: "Unless you don't study, you will fail.",
      right: "Unless you study, you will fail.",
      note: "Unless zaten 'olmazsa' demektir, yanına bir daha 'don't/doesn't' getirilmez."
    }
  ],

  challenge: {
    words: ["rains", "will go", "boils", "don't", "unless", "is"],
    questions: [
      {
        id: "q1",
        text: ["If you water plants, they ", "."],
        correct: "grow", // Veride eklenmemiş ama Grow genel örnektir
        hint: "Doğa kanunudur, Type 0 kullan.",
        visualFormula: "Type 0 (Always True)"
      },
      {
        id: "q2",
        text: ["If the weather ", " good on Sunday, we will have a picnic."],
        correct: "is",
        hint: "Gelecek planı. If kısmında Present Simple kullanmalısın.",
        visualFormula: "If + Present Simple"
      },
      {
        id: "q3",
        text: ["We ", " shopping if I finish my work early."],
        correct: "will go",
        hint: "Bir şarta bağlı gelecek planı.",
        visualFormula: "Will + V1 (Future Result)"
      },
      {
        id: "q4",
        text: ["If you heat water to 100 degrees, it ", "."],
        correct: "boils",
        hint: "Kaynama bir fizik kuralıdır.",
        visualFormula: "Scientific Fact"
      },
      {
        id: "q5",
        text: ["", " you save money, you can't buy that car."],
        correct: "unless",
        hint: "'Para biriktirmezsen' anlamını verecek tek kelime.",
        visualFormula: "Unless (If not)"
      },
      {
        id: "q6",
        text: ["I will call you if it ", "."],
        correct: "rains",
        hint: "If'li kısımdaki fiil çekimine dikkat et (it).",
        visualFormula: "Simple Present (it -s)"
      }
    ]
  }
};