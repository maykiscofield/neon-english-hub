import { Zap, CloudRain, Trophy, AlertTriangle, HelpCircle, GraduationCap, ArrowRight, Star } from 'lucide-react';

export const firstConditionalData = {
  id: '8.3-first-conditional',
  title: '8.3 FIRST CONDITIONAL (GERÇEK OLASILIKLAR)',
  
  formulas: {
    positive: [ // Şart ve Sonuç (Olumlu)
      { label: "If + Present Simple", detail: "Eğer (Şart Kısmı)", color: "border-blue-500/30 text-blue-400" },
      { label: ",", detail: "Virgül ŞART!", color: "border-white/10 text-white" },
      { label: "Will + Verb", detail: "Sonuç Kısmı", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // Olumsuz Şart (Yapmazsan...)
      { label: "If + don't/doesn't", detail: "Eğer yapmazsan", color: "border-red-500/30 text-red-400" },
      { label: "will not (won't)", detail: "Olmayacak", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Soru (Olursa ne olur?)
      { label: "Will you...", detail: "Yapacak mısın?", color: "border-yellow-500/30 text-yellow-400" },
      { label: "if + Subject + Verb", detail: "Eğer şöyle olursa", color: "border-blue-500/30 text-blue-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "If it", color: "text-blue-400" },
        { text: "rains", color: "text-blue-400", underline: true },
        { text: ", we", color: "text-white" },
        { text: "will stay", color: "text-purple-400", underline: true },
        { text: "at home.", color: "text-white" }
      ],
      translation: "Eğer yağmur yağarsa, evde kalacağız. (Gerçek bir olasılıktan bahsediyoruz: Yağmur yağma ihtimali var ve sonucunda evde kalacağız.)"
    },
    negative: {
      parts: [
        { text: "If you", color: "text-white" },
        { text: "don't study", color: "text-red-400", underline: true },
        { text: ", you", color: "text-white" },
        { text: "won't pass", color: "text-pink-400", underline: true },
        { text: "the exam.", color: "text-white" }
      ],
      translation: "Eğer çalışmazsan, sınavı geçemeyeceks ve başarısız olacaksın. (Çalışmamak bir tercih, geçememek ise onun kesin olmayan ama beklenen sonucu.)"
    },
    question: {
      parts: [
        { text: "What", color: "text-white" },
        { text: "will", color: "text-yellow-400" },
        { text: "you do if you", color: "text-white" },
        { text: "lose", color: "text-blue-400", underline: true },
        { text: "your phone?", color: "text-white" }
      ],
      translation: "Eğer telefonunu kaybedersen ne yapacaksın? (Gelecekteki olası bir kriz anına hazırlık sorusu.)"
    }
  },

  scenarios: [
    { title: "Hava Durumu Planları", icon: CloudRain, desc: "Dışarı çıkıp çıkmayacağına hava durumuna göre karar verirken.", color: "from-blue-500/20 to-transparent" },
    { title: "Pazarlık ve Teklifler", icon: Zap, desc: "'Bunu yaparsan sana şunu veririm' gibi şartlı tekliflerde.", color: "from-yellow-500/20 to-transparent" },
    { title: "Uyarı ve Tehditler", icon: AlertTriangle, desc: "Birini sonucun kötü olacağı konusunda uyarırken (Çalışmazsan kalırsın!).", color: "from-red-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Püf Noktası: Will Yasağı!",
      wrong: "If it WILL rain, I will stay home.",
      right: "If it RAINS, I will stay home.",
      note: "En büyük kural: 'If' olan cümlede asla 'will' kullanılamaz! 'If' kısmı daima Geniş Zaman (Present Simple) olur."
    },
    {
      title: "Virgül Operasyonu",
      wrong: "If it rains I stay home.",
      right: "If it rains, I will stay home. / I will stay home if it rains.",
      note: "Cümleye 'If' ile başlarsan araya mutlaka virgül koymalısın. Ama 'Will' ile başlarsan virgüle gerek yok."
    },
    {
      title: "Şahıs Takısı (s)",
      wrong: "If he study, he will pass.",
      right: "If he STUDIES, he will pass.",
      note: "Geniş Zaman kuralı burada da geçerli. He/She/It gelince fiile -s takısı eklemeyi unutma!"
    }
  ],

  challenge: {
    words: ["will go", "goes", "will buy", "buys", "don't hurry", "won't be"],
    questions: [
      {
        id: "q1",
        text: ["If I have enough money, I ", " a new car."],
        correct: "will buy",
        hint: "Şart gerçekleşirse (param olursa) gelecek sonucumuz ne olur?",
        visualFormula: "Result Clause (will)"
      },
      {
        id: "q2",
        text: ["We will be late if we ", "."],
        correct: "don't hurry",
        hint: "Acele etmezsek... 'If' tarafında olumsuz yapı.",
        visualFormula: "Condition Clause (negative)"
      },
      {
        id: "q3",
        text: ["If she ", " to the party, she will have fun."],
        correct: "goes",
        hint: "Dikkat! Özne 'She'. Fiil nasıl değişir?",
        visualFormula: "He/She/It Rule"
      },
      {
        id: "q4",
        text: ["If you eat too much, you ", " healthy."],
        correct: "won't be",
        hint: "Çok yemenin olumsuz sonucu.",
        visualFormula: "Negative Result"
      },
      {
        id: "q5",
        text: ["I ", " to the beach if the weather is good tomorrow."],
        correct: "will go",
        hint: "Hava güzel olursa yapacağım eylem.",
        visualFormula: "Positive Result"
      }
    ]
  }
};