// src/data/lessons/indirect-questions.ts
import { Zap, MessageCircle, Info, AlertCircle, HelpCircle, UserCheck } from 'lucide-react';

export const indirectQuestionsData = {
  id: 'b1-ek-indirect-ques', 
  title: '[EK] DOLAYLI SORULAR (INDIRECT QUESTIONS)',
  
  formulas: {
    positive: [ // Polite Introductions (Kibar Girişler)
      { label: "Polite Phrase", detail: "Do you know / Could you tell me", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Question Word", detail: "where, what, why...", color: "border-purple-500/30 text-purple-400" },
      { label: "Subject + Verb", detail: "Düz Cümle Sırası", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // Yes/No Indirect (İf/Whether kullanımı)
      { label: "Polite Phrase", detail: "I wonder / I'd like to know", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "if / whether", detail: "...olup olmadığını", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Subject + Verb", detail: "Yardımcı fiil kalkar", color: "border-white/10 text-white" }
    ],
    question: [ // Word Order (Kelime Sırası)
      { label: "No Inversion", detail: "Soru değil, düz cümle yap", color: "border-red-500/30 text-red-400" },
      { label: "No do / does / did", detail: "Zaman eki fiile geçer", color: "border-blue-500/30 text-blue-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "Could you tell me", color: "text-blue-400", underline: true },
        { text: "where the station", color: "text-purple-400" },
        { text: "is?", color: "text-pink-400" }
      ],
      translation: "İstasyonun nerede olduğunu bana söyleyebilir misiniz? (Direct: Where is the station?)"
    },
    negative: {
      parts: [
        { text: "Do you know", color: "text-emerald-400", underline: true },
        { text: "if", color: "text-yellow-400" },
        { text: "the shop", color: "text-white" },
        { text: "is open?", color: "text-white" }
      ],
      translation: "Dükkanın açık olup olmadığını biliyor musun? (Direct: Is the shop open?)"
    },
    question: {
      parts: [
        { text: "I wonder", color: "text-blue-400", underline: true },
        { text: "what time", color: "text-purple-400" },
        { text: "the movie", color: "text-white" },
        { text: "starts.", color: "text-pink-400", underline: true }
      ],
      translation: "Filmin saat kaçta başladığını merak ediyorum. (Direct: What time does the movie start?)"
    }
  },

  scenarios: [
    { title: "Nezaket Kuralları", icon: UserCheck, desc: "Tanımadığınız birine soru sorarken doğrudan 'Where is...?' demek yerine bu kalıpları kullanın.", color: "from-blue-500/20 to-transparent" },
    { title: "Resmi Yazışmalar", icon: MessageCircle, desc: "E-postalarda veya iş görüşmelerinde taleplerinizi iletmek için en profesyonel yoldur.", color: "from-purple-500/20 to-transparent" },
    { title: "Merak & Düşünce", icon: Info, desc: "'I wonder' veya 'I was wondering' ile kendi kendinize düşündüğünüz şeyleri ifade edin.", color: "from-pink-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Ters Çevirme Tuzağı",
      wrong: "Do you know where is the bank?",
      right: "Do you know where the bank is?",
      note: "Dolaylı sorularda yardımcı fiil (is, are, can vb.) her zaman özneden sonra gelir."
    },
    {
      title: "Do/Does/Did İptali",
      wrong: "Could you tell me what does he like?",
      right: "Could you tell me what he likes?",
      note: "Dolaylı soruya geçtiğinizde 'do/does/did' yardımcı fiilleri uçar, fiil normal düz cümle çekimine girer."
    },
    {
      title: "Yes/No Soruları",
      wrong: "Do you know is it raining?",
      right: "Do you know if it is raining?",
      note: "Eğer asıl soru bir soru kelimesiyle (wh-) başlamıyorsa, araya mutlaka 'if' veya 'whether' köprüsü kurulmalıdır."
    }
  ],

  challenge: {
    words: ["where the library is", "if he is coming", "what time it starts", "how much it costs", "whether she likes", "who that man is"],
    questions: [
      {
        id: "q1",
        text: ["Excuse me, do you know ", "?"],
        correct: "where the library is",
        hint: "Direct: Where is the library? (Yardımcı fiili sona at.)",
        visualFormula: "Phrase + WH- + Subject + Verb"
      },
      {
        id: "q2",
        text: ["I'd like to know ", " to the party."],
        correct: "if he is coming",
        hint: "Bir Yes/No sorusunu (Is he coming?) bağlıyoruz.",
        visualFormula: "IF + Subject + Verb"
      },
      {
        id: "q3",
        text: ["Could you tell me ", " today?"],
        correct: "what time it starts",
        hint: "Düz cümle sırasına dikkat et; yardımcı fiil yok.",
        visualFormula: "What time + Subject + Verb"
      },
      {
        id: "q4",
        text: ["Do you have any idea ", "?"],
        correct: "how much it costs",
        hint: "Does it cost? sorusundaki 'does' kalkınca fiile -s takısı gelir.",
        visualFormula: "Subject + Verb (-s)"
      },
      {
        id: "q5",
        text: ["I wonder ", " chocolate."],
        correct: "whether she likes",
        hint: "'If' ile aynı anlamda olan kibar bağlaç.",
        visualFormula: "WHETHER + Subject + Verb"
      },
      {
        id: "q6",
        text: ["Can you tell me ", "?"],
        correct: "who that man is",
        hint: "Who is that man? sorusunun dolaylı hali.",
        visualFormula: "No Inversion"
      }
    ]
  }
};