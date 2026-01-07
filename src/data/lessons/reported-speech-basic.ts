import { Zap, Mic2, MessageSquare, AlertCircle, Info, Sparkles, Repeat, Users, Ghost, ArrowRightLeft, Languages } from 'lucide-react';

export const reportedSpeechBasicData = {
  // image_202922.png hatasını çözen kritik ID eşleşmesi
  id: '12.1-reported-speech-basic', 
  title: '12.1 DOLAYLI ANLATIM (REPORTED SPEECH)',
  description: 'Birinin söylediği sözleri başkasına aktarırken kullanılan "Zaman Kaydırma" sanatını en ince ayrıntısına kadar keşfedin.',

  formulas: {
    positive: [
      { label: "ÖZNE", detail: "Aktaran Kişi", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "SAID / TOLD", detail: "Aktarma Fiili", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "THAT", detail: "Köprü (Sarı Vurgu)", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }, 
      { label: "PAST VERB", detail: "Geçmişe Kayan Fiil", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [
      { label: "ÖZNE", detail: "Aktaran", color: "border-blue-500/30 text-blue-400" },
      { label: "SAID THAT", detail: "Giriş Kalıbı", color: "border-purple-500/30 text-purple-400" },
      { label: "DIDN'T / WASN'T", detail: "Olumsuz Geçmiş", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "VERB", detail: "Fiil Yalın Hal", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [
      { label: "ÖZNE", detail: "Aktaran", color: "border-blue-500/30 text-blue-400" },
      { label: "ASKED IF", detail: "Soru Köprüsü", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "SUBJECT", detail: "Özne", color: "border-purple-500/30 text-purple-400" },
      { label: "PAST VERB", detail: "Geçmiş Fiil", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "He said", color: "text-blue-400" },
        { text: "that", color: "text-yellow-400", underline: true },
        { text: "he", color: "text-purple-400" },
        { text: "was", color: "text-pink-400" },
        { text: "very busy.", color: "text-emerald-400" }
      ],
      translation: "Çok meşgul olduğunu söyledi." 
    },
    negative: {
      parts: [
        { text: "She told me", color: "text-blue-400" },
        { text: "she", color: "text-purple-400" },
        { text: "didn't", color: "text-red-400" },
        { text: "have", color: "text-pink-400" },
        { text: "any money.", color: "text-white" }
      ],
      translation: "Hiç parası olmadığını söyledi."
    },
    question: {
      parts: [
        { text: "They asked", color: "text-emerald-400" },
        { text: "if", color: "text-yellow-400", underline: true },
        { text: "I", color: "text-blue-400" },
        { text: "wanted", color: "text-pink-400" },
        { text: "to go out.", color: "text-white" }
      ],
      translation: "Dışarı çıkmak isteyip istemediğimi sordular."
    }
  },

  sections: [
    {
      title: "🕵️ Dedikodu Mantığı (Backshift)",
      content: "Birinin cümlesini aktarırken zaman her zaman bir adım geçmişe gider. Çünkü o söz söylendiği an artık geçmişte kalmıştır.",
      list: [
        "Am / Is / Are -> Was / Were olur.",
        "Present Simple (V1) -> Past Simple (V2) olur.",
        "Can -> Could / Will -> Would olur.",
        "Zamirler (I -> He/She) aktaran kişiye göre değişir."
      ]
    },
    {
      title: "🏗️ Yer ve Zaman Değişimleri",
      content: "Sadece fiiller değil, yer ve zaman bildiren kelimeler de aktaran kişiye göre güncellenmelidir:",
      list: [
        "Here (Burada) -> There (Orada)",
        "Today (Bugün) -> That day (O gün)",
        "Tomorrow (Yarın) -> The next day (Ertesi gün)",
        "Now (Şimdi) -> Then (O zaman)"
      ]
    },
    {
        title: "⚡ Hızlı Dönüşüm Tablosu",
        content: "Hangi zamanın neye dönüştüğünü ezberlemek Reported Speech'in %80'idir.",
        list: [
          "Present Simple (eat) -> Past Simple (ate)",
          "Present Continuous (am eating) -> Past Continuous (was eating)",
          "Present Perfect (have eaten) -> Past Perfect (had eaten)",
          "Will (will eat) -> Would (would eat)"
        ]
      }
  ],

  scenarios: [
    { title: "Haber Aktarma", icon: Mic2, desc: "Birinden işitilen bilgileri üçüncü bir kişiye aktarırken kullanılır.", color: "from-blue-500/20 to-transparent" },
    { title: "Resmi Görüşmeler", icon: Users, desc: "Toplantı özetlerinde 'He stated that...' gibi kalıplarla kullanılır.", color: "from-purple-500/20 to-transparent" },
    { title: "Gündelik Dedikodu", icon: MessageSquare, desc: "Arkadaş ortamında 'Dün bana şunu dedi' derken hayat kurtarır.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "🚀 Zaman Kaydırma Kuralı",
      wrong: "He said he is at home.",
      right: "He said he was at home.",
      note: "Aktarma fiili (said/told) geçmişse, içerideki cümlenin zamanı mutlaka geçmişe kaymalıdır."
    },
    {
      title: "⚠️ Say vs Tell Farkı",
      wrong: "He told that he was tired.",
      right: "He told ME that he was tired.",
      note: "'Tell' fiili mutlaka kime söylendiğini bildiren bir nesne (me, her, us) ister."
    },
    {
      title: "💎 'That' Kullanımı",
      wrong: "-",
      right: "He said (that) he was fine.",
      note: "Bağlayıcı olan 'that' kelimesini kullanmasanız da cümle gramer olarak doğrudur."
    },
    {
        title: "❗ Soru Cümleleri Tuzağı",
        wrong: "He asked if was I okay.",
        right: "He asked if I was okay.",
        note: "Soru aktarırken cümle düz cümle yapısına döner; yardımcı fiil özneden sonraya gelir."
      }
  ],

  challenge: {
    words: ["was", "had", "could", "would", "asked", "that", "there", "then"],
    questions: [
      { id: "q1", text: ["Mark said he ", " very happy today."], correct: "was", hint: "Am/Is bir derece geçmişe gider.", visualFormula: "Is -> Was" },
      { id: "q2", text: ["They told me ", " the movie was boring."], correct: "that", hint: "İsteğe bağlı aktarma köprüsü.", visualFormula: "Said + THAT" },
      { id: "q3", text: ["She said she ", " a big problem."], correct: "had", hint: "Have/Has bir derece geçmişe gider.", visualFormula: "V1 -> V2" },
      { id: "q4", text: ["I ", " her if she was okay."], correct: "asked", hint: "Soru aktarırken kullanılan eylem.", visualFormula: "Soru Aktarımı" },
      { id: "q5", text: ["He said he ", " play guitar very well."], correct: "could", hint: "Can modalı geçmişe kayar.", visualFormula: "Can -> Could" },
      { id: "q6", text: ["She promised she ", " arrive on time."], correct: "would", hint: "Will modalı geçmişe kayar.", visualFormula: "Will -> Would" },
      { id: "q7", text: ["He said he was ", ", not here."], correct: "there", hint: "Mekan ifadesi değişimi.", visualFormula: "Here -> There" },
      { id: "q8", text: ["They said they were busy ", "."], correct: "then", hint: "Zaman ifadesi değişimi.", visualFormula: "Now -> Then" }
    ]
  }
};