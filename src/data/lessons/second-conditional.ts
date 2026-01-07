import { Sparkles, Coins, LifeBuoy, Ghost, HelpCircle, GraduationCap, Zap, Cloud } from 'lucide-react';

export const secondConditionalData = {
  id: '9.1-second-conditional',
  title: '9.1 SECOND CONDITIONAL (HAYALLER VE VARSAYIMLAR)',
  
  formulas: {
    positive: [ // Hayal Kurma (Olumlu)
      { label: "If + Past Simple", detail: "Eğer (Gerçek olmayan şart)", color: "border-blue-500/30 text-blue-400" },
      { label: ",", detail: "Virgül ŞART!", color: "border-white/10 text-white" },
      { label: "Would + Verb", detail: "Hayali Sonuç", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // İmkansız Şart (Olmasaydı...)
      { label: "If + didn't", detail: "Eğer yapmasaydı", color: "border-red-500/30 text-red-400" },
      { label: "wouldn't", detail: "Olmazdı", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Varsayım Sorusu (Olsa ne yapardın?)
      { label: "What would you do", detail: "Ne yapardın?", color: "border-yellow-500/30 text-yellow-400" },
      { label: "if + Past Simple", detail: "Eğer şöyle olsaydı", color: "border-blue-500/30 text-blue-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "If I", color: "text-blue-400" },
        { text: "won", color: "text-blue-400", underline: true },
        { text: "the lottery, I", color: "text-white" },
        { text: "would travel", color: "text-purple-400", underline: true },
        { text: "around the world.", color: "text-white" }
      ],
      translation: "Pangayı (piyangoyu) kazansaydım, dünyayı gezerdim. (Ama kazanmadım, sadece hayal kuruyorum.)"
    },
    negative: {
      parts: [
        { text: "If I", color: "text-white" },
        { text: "were", color: "text-red-400", underline: true },
        { text: "you, I", color: "text-white" },
        { text: "wouldn't buy", color: "text-pink-400", underline: true },
        { text: "that car.", color: "text-white" }
      ],
      translation: "Senin yerinde olsaydım o arabayı almazdım. (Ben sen değilim, bu yüzden bu bir tavsiye/varsayımdır.)"
    },
    question: {
      parts: [
        { text: "What", color: "text-white" },
        { text: "would", color: "text-yellow-400" },
        { text: "you do if you", color: "text-white" },
        { text: "saw", color: "text-blue-400", underline: true },
        { text: "a ghost?", color: "text-white" }
      ],
      translation: "Eğer bir hayalet görseydin ne yapardın? (Görmen çok düşük bir ihtimal, sadece varsayıyoruz.)"
    }
  },

  scenarios: [
    { title: "Zenginlik Hayalleri", icon: Coins, desc: "Sınırsız paran olsaydı neler yapacağını anlatırken.", color: "from-yellow-500/20 to-transparent" },
    { title: "Tavsiye Vermek", icon: LifeBuoy, desc: "'Senin yerinde olsaydım' (If I were you) diyerek fikir verirken.", color: "from-blue-500/20 to-transparent" },
    { title: "İmkansız Mevcut Durum", icon: Ghost, desc: "Şu an sahip olmadığın bir şeye (araba, dil bilgisi vb.) sahip olsaydın ne olacağını söylerken.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Geçmiş Zaman Değil, 'Uzaklık'!",
      wrong: "If I win (hayal kurarken)...",
      right: "If I WON...",
      note: "Burada 'Past Simple' kullanmamızın sebebi eylemin geçmişte olması değil, gerçeğe uzak olmasıdır. Buna 'Uzaklık Geçmişi' denir."
    },
    {
      title: "Püf Noktası: Herkese 'WERE'!",
      wrong: "If I was you / If he was here.",
      right: "If I WERE you / If he WERE here.",
      note: "Second Conditional'da 'was' yerine 'were' kullanmak (I, He, She, It dahil) en doğru ve profesyonel kullanımdır."
    },
    {
      title: "Would Yasağı Yine Var!",
      wrong: "If I WOULD have time...",
      right: "If I HAD time...",
      note: "First Conditional'da 'will' yasaktı, burada da 'If' olan cümlede 'would' kullanamazsın! 'Would' sadece sonuç kısmında olur."
    }
  ],

  challenge: {
    words: ["would be", "were", "found", "would call", "didn't have", "would study"],
    questions: [
      {
        id: "q1",
        text: ["If I ", " a million dollars, I would buy a boat."],
        correct: "found",
        hint: "Şart kısmında fiilin 2. hali kullanılır.",
        visualFormula: "Condition (Past Simple)"
      },
      {
        id: "q2",
        text: ["If she ", " here, she would help us."],
        correct: "were",
        hint: "İstisnai kural: She ile hangisi gelirdi?",
        visualFormula: "The 'Were' Rule"
      },
      {
        id: "q3",
        text: ["What ", " your name if you were a superhero?"],
        correct: "would be",
        hint: "Sonuç kısmında yardımcı fiil ne olur?",
        visualFormula: "Result Clause (would)"
      },
      {
        id: "q4",
        text: ["I ", " him if I had his number."],
        correct: "would call",
        hint: "Numarası olsaydı yapacağım hayali eylem.",
        visualFormula: "Hypothetical Result"
      },
      {
        id: "q5",
        text: ["If we ", " to work, we would stay in bed all day."],
        correct: "didn't have",
        hint: "İşe gitmek zorunda 'olmasaydık' (olumsuz şart).",
        visualFormula: "Negative Condition"
      }
    ]
  }
};