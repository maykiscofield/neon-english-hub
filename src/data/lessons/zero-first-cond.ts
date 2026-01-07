// src/data/lessons/zero-first-cond.ts
import { Zap, Thermometer, CloudSun, AlertCircle, HelpCircle, Sparkles } from 'lucide-react';

export const zeroFirstCondData = {
  // KRİTİK: image_13727f.png'deki hatayı çözmek için ID birebir aynı yapıldı
  id: 'b1-8.2-zero-first-cond', 
  title: '8.2 ŞARTLI CÜMLELER (TYPE 0 & 1)',
  
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
      { label: "Present Simple", detail: "Düz Cümle", color: "border-white/10 text-white" }
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
      translation: "Buzu ısıtırsan erir. (Type 0: Fizik kuralı, her zaman doğru.)"
    },
    negative: {
      parts: [
        { text: "If it", color: "text-blue-400" },
        { text: "is", color: "text-blue-400", underline: true },
        { text: "sunny tomorrow,", color: "text-white" },
        { text: "we", color: "text-purple-400" },
        { text: "will go", color: "text-purple-400", underline: true },
        { text: "to the park.", color: "text-white" }
      ],
      translation: "Eğer yarın hava güneşli olursa parka gideceğiz. (Type 1: Gelecekteki bir ihtimal.)"
    },
    question: {
      parts: [
        { text: "Unless", color: "text-red-400", underline: true },
        { text: "you", color: "text-white" },
        { text: "study,", color: "text-white" },
        { text: "you", color: "text-purple-400" },
        { text: "will fail", color: "text-red-400" },
        { text: "the exam.", color: "text-white" }
      ],
      translation: "Çalışmazsan sınavda başarısız olacaksın. (Unless = If you don't study.)"
    }
  },

  scenarios: [
    { title: "Bilimsel Gerçekler", icon: Thermometer, desc: "Fizik kuralları, doğa olayları ve genel geçer doğrular için Type 0 kullanılır.", color: "from-blue-500/20 to-transparent" },
    { title: "Gelecek Planları", icon: CloudSun, desc: "Bir şarta bağlı olarak gerçekleşmesi muhtemel olaylar için Type 1 kullanılır.", color: "from-purple-500/20 to-transparent" },
    { title: "Alışkanlıklar", icon: Sparkles, desc: "Kişisel rutinlerinizde 'eğer x olursa y yaparım' dediğiniz her an için uygundur.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "If + Will Yasaktır!",
      wrong: "If it will rain, I will stay at home.",
      right: "If it rains, I will stay at home.",
      note: "Type 1'de 'If'li tarafa asla 'will' gelmez. Orası her zaman Present Simple (Geniş Zaman) olur."
    },
    {
      title: "Virgül Kuralı",
      wrong: "I will call you if I am free.",
      right: "If I am free, I will call you.",
      note: "Cümle 'If' ile başlıyorsa ortada virgül olur. Ama 'If' ortadaysa virgüle gerek yoktur."
    },
    {
      title: "Type 0 vs Type 1",
      wrong: "If you touch fire, you will get burned. (Genel)",
      right: "If you touch fire, you get burned.",
      note: "Olay kişiye özel değil, herkes için her zaman doğruysa (bilimselse) Type 0 (Present + Present) daha doğrudur."
    }
  ],

  challenge: {
    words: ["rains", "will stay", "don't hurry", "miss", "freeze", "get"],
    questions: [
      {
        id: "q1",
        text: ["If you cool water to 0 degrees, it ", "."],
        correct: "freezes", 
        hint: "Bilimsel bir gerçek; Type 0 kullan.",
        visualFormula: "Type 0 (Fact)"
      },
      {
        id: "q2",
        text: ["If it ", " this weekend, we won't go out."],
        correct: "rains",
        hint: "Gelecekteki bir şart; 'it' öznesine dikkat et.",
        visualFormula: "If + Present Simple"
      },
      {
        id: "q3",
        text: ["We ", " the bus unless we leave now."],
        correct: "will miss",
        hint: "Gelecekteki olası sonuç.",
        visualFormula: "Will + V1"
      },
      {
        id: "q4",
        text: ["If I exercise every day, I ", " healthy."],
        correct: "feel", // Veya get
        hint: "Kişisel bir alışkanlık veya genel durum.",
        visualFormula: "Type 0 (Habit)"
      },
      {
        id: "q5",
        text: ["If she ", " enough money, she will buy that phone."],
        correct: "has",
        hint: "Gelecek ihtimali. 'She' ile Present Simple çekimi.",
        visualFormula: "Subject (3rd person) + s"
      },
      {
        id: "q6",
        text: ["I ", " at home if the weather is bad tomorrow."],
        correct: "will stay",
        hint: "Hava kötü olursa evde kalacağım (plan).",
        visualFormula: "Future Result"
      }
    ]
  }
};