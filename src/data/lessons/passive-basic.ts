import { Zap, Shield, Hammer, Info, AlertCircle, Sparkles, Factory } from 'lucide-react';

export const passiveBasicData = {
  // KRİTİK: image_1fbc08.png hatasını çözen ID eşleşmesi
  id: '11.1-passive-simple', 
  title: '11.1 EDİLGEN YAPI (PASSIVE VOICE)',
  description: 'İşi yapanın değil, yapılan işin önemli olduğu durumlar için kullanılır. Nesnelerin "ne hale geldiğini" anlatır.',

  formulas: {
    positive: [
      { label: "Object", detail: "Etkilenen Nesne", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "AM / IS / ARE", detail: "Be Fiili (Yardımcı)", color: "border-white/10 text-white" },
      { label: "VERB (V3)", detail: "Fiilin 3. Hali (Past Participle)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "by + Person", detail: "Tarafından (İsteğe bağlı)", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [
      { label: "Object", detail: "Nesne", color: "border-blue-500/30 text-blue-400" },
      { label: "isn't / aren't", detail: "Olumsuzluk", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "VERB (V3)", detail: "Fiil (3. Hali)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    question: [
      { label: "AM / IS / ARE", detail: "Soru Yardımcısı", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Object", detail: "Nesne", color: "border-blue-500/30 text-blue-400" },
      { label: "VERB (V3)?", detail: "Fiil (3. Hali)?", color: "border-purple-500/30 text-purple-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "This house", color: "text-blue-400" },
        { text: "is cleaned", color: "text-purple-400", underline: true },
        { text: "every morning.", color: "text-white" }
      ],
      translation: "Bu ev her sabah temizlenir. (Evin kimin temizlediği değil, temizlenmesi önemli.)"
    },
    negative: {
      parts: [
        { text: "Cotton", color: "text-blue-400" },
        { text: "isn't grown", color: "text-purple-400", underline: true },
        { text: "in cold climates.", color: "text-white" }
      ],
      translation: "Pamuk soğuk iklimlerde yetiştirilmez."
    },
    question: {
      parts: [
        { text: "Are", color: "text-emerald-400" },
        { text: "the cars", color: "text-blue-400" },
        { text: "made", color: "text-purple-400", underline: true },
        { text: "in Germany?", color: "text-white" }
      ],
      translation: "Arabalar Almanya'da mı yapılıyor?"
    }
  },

  scenarios: [
    { title: "Fabrika & Üretim", icon: Factory, desc: "Ürünlerin nerede ve nasıl üretildiğini anlatırken nesne odaklı konuşun.", color: "from-blue-500/20 to-transparent" },
    { title: "Haberler & Bilgi", icon: Info, desc: "Kimin yaptığı bilinmeyen olayları raporlarken pasif yapı hayat kurtarır.", color: "from-purple-500/20 to-transparent" },
    { title: "Genel Kurallar", icon: Shield, desc: "Herkes için geçerli olan yasakları veya kuralları belirtirken kullanılır.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "⚠️ Fiilin Hali Çok Önemli!",
      wrong: "The cake is bake.",
      right: "The cake is baked.",
      note: "Pasif yapıda fiil asla yalın kalmaz. Her zaman 3. haliyle (V3) kullanılmalıdır."
    },
    {
      title: "💎 Mantık Hatasına Düşme",
      wrong: "The chef is cooked.",
      right: "The dinner is cooked.",
      note: "Dikkat! 'The chef is cooked' derseniz, aşçının piştiğini söylemiş olursunuz. Özne her zaman işten ETKİLENEN olmalı."
    }
  ],

  challenge: {
    words: ["is spoken", "is made", "are washed", "isn't sold", "are played", "Is"],
    questions: [
      {
        id: "q1",
        text: ["English ", " by millions of people."],
        correct: "is spoken",
        hint: "Dil konuşulan bir şeydir.",
        visualFormula: "Object + IS + V3"
      },
      {
        id: "q2",
        text: ["Many toys ", " of plastic."],
        correct: "is made",
        hint: "Oyuncakların ham maddesi.",
        visualFormula: "Object + IS + V3"
      },
      {
        id: "q3",
        text: ["The dishes ", " after dinner every night."],
        correct: "are washed",
        hint: "Çoğul nesne (The dishes) çekimine dikkat.",
        visualFormula: "Object (Plural) + ARE + V3"
      },
      {
        id: "q4",
        text: ["Tobacco ", " to people under 18."],
        correct: "isn't sold",
        hint: "Yasak bildiren olumsuz yapı.",
        visualFormula: "Object + ISN'T + V3"
      },
      {
        id: "q5",
        text: ["Video games ", " by kids all day."],
        correct: "are played",
        hint: "Eylemin kimler tarafından yapıldığı.",
        visualFormula: "Object + ARE + V3"
      },
      {
        id: "q6",
        text: ["", " this computer fixed yet?"],
        correct: "Is",
        hint: "Tekil bir nesne için soru kalıbı.",
        visualFormula: "BE + Object + V3?"
      }
    ]
  }
};