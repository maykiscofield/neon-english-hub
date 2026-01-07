import { Zap, AlertCircle, Info, Sparkles, Star, Mic2, HelpCircle, Lightbulb, BookOpen } from 'lucide-react';

export const evenUsageData = {
  // KRİTİK: Blueprint hatasını çözen ID yapısı
  id: '11.3-even-usage', 
  title: '11.3 EVEN KULLANIMI (BİLE / HATTA)',
  description: 'Cümlelerinize vurgu, şaşkınlık ve derinlik katmanın en etkili yolu olan "Even" kelimesini sıfırdan keşfedin.',

  formulas: {
    positive: [
      { label: "ÖZNE", detail: "I, You, He, She...", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "YARDIMCI FİİL", detail: "can / is / do", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      // SARI NEON "EVEN" VURGUSU
      { label: "VURGU", detail: "EVEN", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }, 
      { label: "ANA FİİL", detail: "Verb (V1)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [
      { label: "ÖZNE", detail: "Subject", color: "border-blue-500/30 text-blue-400" },
      { label: "AUX + NOT", detail: "don't / didn't", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "EVEN", detail: "Bile", color: "border-yellow-500/30 text-yellow-400" },
      { label: "ANA FİİL", detail: "Verb", color: "border-white/10 text-white" }
    ],
    question: [
      { label: "DO / CAN", detail: "Soru Eki", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "ÖZNE", detail: "Subject", color: "border-blue-500/30 text-blue-400" },
      { label: "EVEN", detail: "Bile / Hatta", color: "border-yellow-500/30 text-yellow-400" },
      { label: "KNOW?", detail: "Fiil?", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "She", color: "text-blue-400" },
        { text: "can", color: "text-purple-400" },
        { text: "even", color: "text-yellow-400", underline: true },
        { text: "solve", color: "text-pink-400" },
        { text: "this complex puzzle.", color: "text-white" }
      ],
      translation: "O bu karmaşık bulmacayı bile çözebiliyor." 
    },
    negative: {
      parts: [
        { text: "I", color: "text-blue-400" },
        { text: "didn't", color: "text-red-400" },
        { text: "even", color: "text-yellow-400", underline: true },
        { text: "see", color: "text-white" },
        { text: "him there.", color: "text-white" }
      ],
      translation: "Onu orada görmedim bile."
    },
    question: {
      parts: [
        { text: "Do", color: "text-emerald-400" },
        { text: "you", color: "text-blue-400" },
        { text: "even", color: "text-yellow-400", underline: true },
        { text: "understand", color: "text-white" },
        { text: "what I say?", color: "text-white" }
      ],
      translation: "Ne dediğimi anlıyor musun bile?"
    }
  },

  sections: [
    {
      title: "🌟 Mantığı Kavrayalım",
      content: "İngilizcede 'Even', bir durumun beklediğimizden daha şaşırtıcı veya uç noktada olduğunu belirtmek için kullanılan bir 'vurgu' kelimesidir. Cümleye 'bile' veya 'hatta' anlamı katar.",
      list: [
        "Sıradan bir işin ötesine geçtiğimizi gösterir.",
        "Bir durumu daha etkileyici hale getirmek için kullanılır.",
        "Vurguladığı kelimenin hemen önüne yerleşerek dikkat çeker."
      ]
    },
    {
      title: "🏗️ Cümle İçindeki Konumu",
      content: "Even'ı doğru yere koymak hayati önem taşır. İşte temel kurallar:",
      list: [
        "Yardımcı fiilden (be, can, have) sonra gelir: 'I can EVEN dance.'",
        "Asıl fiilin hemen önüne gelir: 'He EVEN eats vegetables.'",
        "Tüm cümleyi vurguluyorsa en başa gelebilir: 'EVEN a child knows this.'"
      ]
    }
  ],

  scenarios: [
    { title: "Sıradışı Başarı", icon: Sparkles, desc: "Normalde beklenmeyen bir becerinin gerçekleştiği anlarda.", color: "from-blue-500/20 to-transparent" },
    { title: "Hayal Kırıklığı", icon: Mic2, desc: "Olumsuz bir durumun ciddiyetini artırmak (yapmadı bile) için.", color: "from-purple-500/20 to-transparent" },
    { title: "Güçlü Vurgu", icon: Star, desc: "Bir şeyi binlerce seçenek arasından cımbızla çekip parlatmak için.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "🚀 Yerleşim Hatası",
      wrong: "Even I love you.", // Anlam: Sadece ben (başkası değil).
      right: "I even love you.", // Anlam: Seni seviyorum bile (şaşırtıcı şekilde).
      note: "Even'ı nereye koyarsanız orayı vurgularsınız. Fiili vurgulamak için fiilden önce kullanın."
    },
    {
      title: "⚠️ Olumsuz Cümlelerde 'NOT' İlişkisi",
      wrong: "He even doesn't know.",
      right: "He doesn't even know.",
      note: "Olumsuz cümlelerde Even her zaman 'don't/doesn't/didn't' kalıbından SONRA gelir."
    },
    {
      title: "💎 Even vs Even Though",
      wrong: "Even it's raining, I'll go.",
      right: "Even though it's raining, I'll go.",
      note: "Tek başına 'Even' (bile) demektir. '-e rağmen' demek istiyorsanız 'Even though' kullanmalısınız."
    }
  ],

  proTips: [
    {
      head: "💡 'Even' ile Karşılaştırma Yapma",
      body: "Kıyaslama yaparken 'even' kullanarak farkı daha da açabilirsiniz.",
      example: "It is even colder today than yesterday! (Bugün dünden bile daha soğuk!)"
    },
    {
      head: "🧐 Şaşkınlık Soruları",
      body: "Soru sorarken 'even' eklemek, karşı tarafa 'bu kadarını da mı bilmiyorsun?' hissi verir.",
      example: "Do you even know who he is? (Onun kim olduğunu biliyor musun bile?)"
    }
  ],

  challenge: {
    words: ["even", "didn't", "can", "is", "even", "Do"],
    questions: [
      { id: "q1", text: ["It was so quiet, ", " my breathing was loud."], correct: "even", hint: "Nefes almam bile...", visualFormula: "EVEN + Nesne" },
      { id: "q2", text: ["I ", " even understand the joke."], correct: "didn't", hint: "Anlamadım bile.", visualFormula: "Özne + Y.Fiil + EVEN" },
      { id: "q3", text: ["She ", " even swim in ice water."], correct: "can", hint: "Yüzebiliyor bile.", visualFormula: "Özne + CAN + EVEN" },
      { id: "q4", text: ["They ", " even remember our names."], correct: "didn't", hint: "Hatırlamadılar bile.", visualFormula: "Y.Fiil + EVEN + Fiil" },
      { id: "q5", text: ["This car ", " even more expensive than yours."], correct: "is", hint: "Daha da pahalı.", visualFormula: "Özne + BE + EVEN" },
      { id: "q6", text: ["", " you even care about the result?"], correct: "Do", hint: "Umurunda mı bile?", visualFormula: "DO + Özne + EVEN" }
    ]
  }
};