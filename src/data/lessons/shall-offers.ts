import { Zap, Coffee, HandHelping, AlertCircle, Info, Sparkles, MessageCircle, HelpCircle, Star, Music } from 'lucide-react';

export const shallOffersData = {
  id: '12.3-shall-suggestions',
  title: '12.3 SHALL (ÖNERİ / TEKLİF)',
  description: 'İngilizcedeki en nazik yardım tekliflerini ve ortak karar alma kalıplarını sıfırdan öğrenin.',

  formulas: {
    positive: [
      { label: "ÖZNE", detail: "Sadece I veya WE", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "SHALL", detail: "Gelecek Zaman/Teklif", color: "border-purple-500/30 text-purple-400" },
      // SARI NEON VURGU
      { label: "VERB (V1)", detail: "Yalın Fiil", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }, 
      { label: "NESNE", detail: "Complement", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [
      { label: "SHALL", detail: "Soru Girişi", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "I / WE", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "VERB (V1)?", detail: "Yalın Fiil?", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [
      { label: "ÖZNE", detail: "I / We", color: "border-blue-500/30 text-blue-400" },
      { label: "SHALL NOT", detail: "Shan't", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "VERB (V1)", detail: "Fiil", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "Shall", color: "text-yellow-400", underline: true },
        { text: "we", color: "text-blue-400" },
        { text: "go", color: "text-pink-400" },
        { text: "to the cinema tonight?", color: "text-white" }
      ],
      translation: "Bu akşam sinemaya gidelim mi?" 
    },
    negative: {
      parts: [
        { text: "Shall", color: "text-yellow-400", underline: true },
        { text: "I", color: "text-blue-400" },
        { text: "open", color: "text-pink-400" },
        { text: "the window for you?", color: "text-white" }
      ],
      translation: "Senin için pencereyi açayım mı?"
    },
    question: {
      parts: [
        { text: "Where", color: "text-emerald-400" },
        { text: "shall", color: "text-yellow-400", underline: true },
        { text: "we", color: "text-blue-400" },
        { text: "meet", color: "text-pink-400" },
        { text: "after work?", color: "text-white" }
      ],
      translation: "İşten sonra nerede buluşalım?"
    }
  },

  sections: [
    {
      title: "🕵️ Mantığı Kavrayalım: Shall Nedir?",
      content: "Shall, birine emir vermek yerine onun fikrini nazikçe sormak için kullanılan bir yardımcı fiildir. İngiliz İngilizcesinde hala çok yaygındır ve asalet göstergesidir.",
      list: [
        "Sadece I (Ben) ve We (Biz) ile kullanılır.",
        "Genellikle 'yapalım mı?' veya 'yapayım mı?' anlamı katar.",
        "Karşı tarafın onayını bekler."
      ]
    },
    {
      title: "🏗️ Kullanım Alanları",
      content: "Shall'ı üç temel durumda kullanırız:",
      list: [
        "1. Yardım Teklifleri: Shall I carry your bag? (Çantanı taşıyayım mı?)",
        "2. Ortak Öneriler: Shall we drink coffee? (Kahve içelim mi?)",
        "3. Fikir Sorma (Wh- sorularıyla): What shall we do now? (Şimdi ne yapalım?)"
      ]
    },
    {
        title: "⚡ Will vs Shall Farkı",
        content: "Will kesin bir gelecek bildirirken, Shall sadece bir tekliftir.",
        list: [
          "I will help you. (Sana yardım edeceğim. - Söz veriyorum)",
          "Shall I help you? (Sana yardım edeyim mi? - İster misin?)"
        ]
      }
  ],

  scenarios: [
    { title: "Kibar Teklifler", icon: HandHelping, desc: "Birine karşılık beklemeden yardım sunarken.", color: "from-blue-500/20 to-transparent" },
    { title: "Sosyal Planlar", icon: Coffee, desc: "Arkadaşlar arasında 'nereye gidelim' diye tartışırken.", color: "from-purple-500/20 to-transparent" },
    { title: "Zarif Davetler", icon: Music, desc: "Dans etmek veya bir yere girmek için nezaketle izin/fikir isterken.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "🚀 Özne Kısıtlaması",
      wrong: "Shall he go home?",
      right: "Should he go home? / Will he go home?",
      note: "Modern İngilizcede 'Shall' asla He, She, It, You veya They ile kullanılmaz. Sadece I ve WE!"
    },
    {
      title: "⚠️ Anlam Karışıklığı",
      wrong: "Shall you help me?",
      right: "Can you help me? / Will you help me?",
      note: "Başkasına bir iş yaptırmak için 'Shall' kullanılmaz. 'Shall' sadece teklif sunan kişi (siz) için geçerlidir."
    }
  ],

  proTips: [
    {
      head: "💡 Wh- Sorularıyla Güçlendirin",
      body: "Nereye, ne zaman veya ne yapacağınızı sorarken 'Shall we' kalıbı harika çalışır.",
      example: "What shall we have for dinner? (Akşam yemeği için ne yiyelim?)"
    }
  ],

  challenge: {
    words: ["Shall", "we", "I", "drink", "Shan't", "Where"],
    questions: [
      { id: "s1", text: ["", " we dance?"], correct: "Shall", hint: "Teklif girişi.", visualFormula: "SHALL + We + V1" },
      { id: "s2", text: ["Shall ", " help you with those bags?"], correct: "I", hint: "Ben yapayım mı?", visualFormula: "Shall + I + V1" },
      { id: "s3", text: ["Shall we ", " some tea?"], correct: "drink", hint: "Fiil her zaman yalındır.", visualFormula: "Shall + We + V1" },
      { id: "s4", text: ["", " shall we go on holiday?"], correct: "Where", hint: "Fikir sorma sorusu.", visualFormula: "Wh- + SHALL + We" },
      { id: "s5", text: ["Shall ", " start the meeting?"], correct: "we", hint: "Hep beraber yapalım mı?", visualFormula: "Shall + WE + V1" },
      { id: "s6", text: ["It's very cold. ", " I close the door?"], correct: "Shall", hint: "Nazik yardım teklifi.", visualFormula: "SHALL + I + V1" }
    ]
  }
};