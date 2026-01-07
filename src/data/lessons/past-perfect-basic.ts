import { Zap, Clock, History, AlertCircle, Info, Sparkles, MoveLeft, Lightbulb, FastForward, BookOpen } from 'lucide-react';

export const pastPerfectData = {
  // image_203049.png'deki URL ile tam eşleşen ID
  id: '12.2-past-perfect-basic', 
  title: '12.2 PAST PERFECT (MİŞ\'Lİ GEÇMİŞ)',
  description: 'Geçmişte yaşanmış iki olaydan hangisinin "daha önce" olduğunu belirten zaman makinesini keşfedin.',

  formulas: {
    positive: [
      { label: "ÖZNE", detail: "I, You, He, She, They...", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      // SARI NEON "HAD" VURGUSU
      { label: "YARDIMCI FİİL", detail: "HAD (Tüm öznelerde aynı)", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }, 
      { label: "FİİL (V3)", detail: "Past Participle", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "NESNE / DEVAMI", detail: "Complement", color: "border-emerald-500/30 text-emerald-400" }
    ],
    negative: [
      { label: "ÖZNE", detail: "Subject", color: "border-blue-500/30 text-blue-400" },
      { label: "HAD NOT", detail: "Hadn't", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "VERB (V3)", detail: "Fiil (3. Hali)", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [
      { label: "HAD", detail: "Giriş", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "ÖZNE", detail: "Subject", color: "border-blue-500/30 text-blue-400" },
      { label: "VERB (V3)?", detail: "Fiil?", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "The train", color: "text-blue-400" },
        { text: "had", color: "text-yellow-400", underline: true },
        { text: "already", color: "text-purple-400" },
        { text: "left", color: "text-pink-400" },
        { text: "when we arrived.", color: "text-white" }
      ],
      translation: "Vardığımızda tren çoktan gitmişti." 
    },
    negative: {
      parts: [
        { text: "I", color: "text-blue-400" },
        { text: "hadn't", color: "text-red-400" },
        { text: "seen", color: "text-pink-400" },
        { text: "him", color: "text-white" },
        { text: "before the party.", color: "text-white" }
      ],
      translation: "Partiden önce onu görmemiştim."
    },
    question: {
      parts: [
        { text: "Had", color: "text-emerald-400" },
        { text: "you", color: "text-blue-400" },
        { text: "finished", color: "text-pink-400" },
        { text: "the report", color: "text-white" },
        { text: "by 5 PM?", color: "text-white" }
      ],
      translation: "Saat 5'e kadar raporu bitirmiş miydin?"
    }
  },

  sections: [
    {
      title: "🕵️ Mantığı Kavrayalım: Geçmişin Geçmişi",
      content: "İngilizcede Past Perfect, geçmişte yaşanmış iki olaydan hangisinin daha eski olduğunu vurgulamak için kullanılır. Eğer bir olay diğerinden önce bittiyse, o olay 'Had + V3' ile taçlandırılır.",
      list: [
        "Geçmiş Olay A (Daha Eski): Eve gelmeden önce yemek yemiştim. (Past Perfect)",
        "Geçmiş Olay B (Daha Yeni): Eve geldim. (Past Simple)",
        "Dizilim: I had eaten my dinner before I came home."
      ]
    },
    {
      title: "🏗️ Cümle Yapısı ve Kurallar",
      content: "Past Perfect, İngilizcenin en düzenli zamanlarından biridir. Özne ne olursa olsun yardımcı fiil asla değişmez.",
      list: [
        "Bütün özneler (I, You, He, She, It, We, They) sadece 'HAD' kullanır.",
        "Fiilin her zaman 3. hali (V3) kullanılır.",
        "Olumsuz yaparken 'hadn't', soru sorarken 'Had' başa gelir."
      ]
    },
    {
        title: "🔗 En Önemli Bağlaçlar",
        content: "Bu zamanı tek başına görmek zordur; genellikle şu kelimelerle el ele tutuşur:",
        list: [
          "Before (Önce): ...olmadan önce yapmıştım.",
          "After (Sonra): ...yaptıktan sonra oldu.",
          "By the time (-e kadar): ...olduğunda çoktan bitmişti.",
          "Already (Çoktan): Beklenenden önce gerçekleşti."
        ]
      }
  ],

  scenarios: [
    { title: "Kaçırılan Fırsatlar", icon: FastForward, desc: "Bir yere geç kaldığınızda veya bir olay bittikten sonra vardığınızda.", color: "from-blue-500/20 to-transparent" },
    { title: "Geçmişin Geçmişi", icon: History, desc: "Bir anınızı anlatırken, o anın öncesinde neler olduğunu açıklarken.", color: "from-purple-500/20 to-transparent" },
    { title: "Hazırlık Süreçleri", icon: Lightbulb, desc: "Bir başarıya ulaşmadan önce yapılan hazırlıkları vurgularken.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "🚀 Had + V2 Hatası (En Sık Yapılan)",
      wrong: "I had went there.",
      right: "I had gone there.",
      note: "Yardımcı fiil 'Had' olsa bile fiil her zaman 3. haliyle (V3) kullanılmalıdır. 2. hali (went) asla 'Had' ile yan yana getirmeyin!"
    },
    {
      title: "⚠️ Tek Başına Kullanma Tuzağı",
      wrong: "I had finished my work.", // Eksik bir his verir.
      right: "I had finished my work before my boss arrived.",
      note: "Past Perfect tek başına kullanılabilir ama genellikle kıyaslanacak ikinci bir geçmiş olay (Past Simple) ister."
    }
  ],

  proTips: [
    {
      head: "💡 'Already' ve 'Just' Kullanımı",
      body: "Bir olayın 'çoktan' bittiğini veya 'henüz' bittiğini vurgulamak için 'had' ile fiilin arasına girerler.",
      example: "They had just arrived when the show started."
    }
  ],

  challenge: {
    // Konsoldaki key hatasını önlemek için benzersiz kelimeler
    words: ["had", "gone", "hadn't", "seen", "before", "finished"],
    questions: [
      { id: "p1", text: ["When I called, he ", " already started dinner."], correct: "had", hint: "Yardımcı fiil.", visualFormula: "Subject + HAD + V3" },
      { id: "p2", text: ["The movie had ", " by the time we arrived."], correct: "finished", hint: "Finish fiilinin 3. hali.", visualFormula: "HAD + V3" },
      { id: "p3", text: ["They had ", " home before it started raining."], correct: "gone", hint: "Go fiilinin 3. hali.", visualFormula: "HAD + V3" },
      { id: "p4", text: ["I ", " seen that film before tonight."], correct: "hadn't", hint: "Olumsuz yapı.", visualFormula: "Subject + HADN'T + V3" },
      { id: "p5", text: ["He had left ", " I could say goodbye."], correct: "before", hint: "Zaman bağlacı.", visualFormula: "HAD + V3 + BEFORE" },
      { id: "p6", text: ["Had you ", " him before the meeting?"], correct: "seen", hint: "See fiilinin 3. hali.", visualFormula: "HAD + Subject + V3?" }
    ]
  }
};