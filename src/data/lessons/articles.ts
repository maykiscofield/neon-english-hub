import { Globe, Search, Sparkles, AlertCircle, HelpCircle, GraduationCap, Zap } from 'lucide-react';

export const articlesData = {
  id: '7.1-articles',
  title: '7.1 & 7.3 ARTICLES (A, AN, THE)',
  
  formulas: {
    positive: [ // A Kullanımı
      { label: "A", detail: "Sessiz SES ile başlayan", color: "border-blue-500/30 text-blue-400" },
      { label: "Singular", detail: "Tekil ve sayılabilir", color: "border-white/10 text-white" },
      { label: "Noun", detail: "Herhangi bir nesne", color: "border-purple-500/30 text-purple-400" }
    ],
    negative: [ // AN Kullanımı
      { label: "AN", detail: "Sesli SES ile başlayan", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Singular", detail: "Tekil ve sayılabilir", color: "border-white/10 text-white" },
      { label: "Noun", detail: "Herhangi bir nesne", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // THE Kullanımı
      { label: "THE", detail: "Bilinen / Belirli olan", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Specific", detail: "Tekil, çoğul veya sayılamaz", color: "border-white/10 text-white" },
      { label: "Noun", detail: "Herkesin bildiği o şey", color: "border-orange-500/30 text-orange-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I bought", color: "text-white" },
        { text: "a", color: "text-blue-400", underline: true },
        { text: "university", color: "text-purple-400" },
        { text: "hoodie today.", color: "text-white" }
      ],
      translation: "Bugün bir üniversite sweatshirt'ü aldım. ('University' U ile başlasa da 'Y' sesiyle okunduğu için 'A' gelir! En büyük tuzak budur.)"
    },
    negative: {
      parts: [
        { text: "It took", color: "text-white" },
        { text: "an", color: "text-emerald-400", underline: true },
        { text: "hour", color: "text-pink-400" },
        { text: "to finish the job.", color: "text-white" }
      ],
      translation: "İşi bitirmek bir saat sürdü. ('Hour' H ile başlasa da 'A' sesiyle okunduğu için 'An' gelir.)"
    },
    question: {
      parts: [
        { text: "Look at", color: "text-white" },
        { text: "the", color: "text-yellow-400", underline: true },
        { text: "moon", color: "text-orange-400" },
        { text: "tonight!", color: "text-white" }
      ],
      translation: "Bu gece aya bak! (Dünya, Güneş, Ay gibi eşi benzeri olmayan tek şeylerde daima 'The' kullanılır.)"
    }
  },

  scenarios: [
    { title: "İlk vs. İkinci Bahsediş", icon: Search, desc: "Bir şeyden ilk kez bahsederken A/An, ikinci kez bahsederken artık bilindiği için THE kullanılır.", color: "from-blue-500/20 to-transparent" },
    { title: "Benzersiz Varlıklar", icon: Globe, desc: "Dünyada sadece bir tane olan şeyler (The Internet, The Sky, The Prime Minister).", color: "from-yellow-500/20 to-transparent" },
    { title: "Müzik Aletleri", icon: Sparkles, desc: "Bir enstrümanı çalmaktan bahsederken (Play the piano, play the guitar) daima THE kullanılır.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Yazılışa Değil, Sese Bak!",
      wrong: "A apple, An university",
      right: "An apple, A university",
      note: "Kural harfler değil, sestir. 'University' (Yuv-), 'European' (Yu-) sessiz sesle; 'Hour' (Av-), 'Honest' (An-) sesli sesle başlar."
    },
    {
      title: "Genelleme Yaparken THE Kullanma!",
      wrong: "The children love the chocolate.",
      right: "Children love chocolate.",
      note: "Dünyadaki tüm çocuklardan ve genel olarak çikolatadan bahsederken article kullanılmaz (Zero Article)."
    },
    {
      title: "Çoğullarda A/AN Yasak!",
      wrong: "A books, An apples",
      right: "Books, Apples (veya The books)",
      note: "A ve An sadece 'BİR' demektir. Çoğul kelimelerin önüne asla gelemezler."
    }
  ],

  challenge: {
    words: ["a", "an", "the", "(-) No Article", "a unique", "an honest"],
    questions: [
      {
        id: "q1",
        text: ["He is ", " man."],
        correct: "an honest",
        hint: "H harfi okunmuyor, kelime 'An-ist' diye başlıyor.",
        visualFormula: "Vowel Sound Rule"
      },
      {
        id: "q2",
        text: ["I see a cat. ", " cat is black."],
        correct: "the",
        hint: "Kediden ikinci kez bahsediyoruz, artık hangi kedi olduğu belli.",
        visualFormula: "Second Mention Rule"
      },
      {
        id: "q3",
        text: ["She plays ", " violin beautifully."],
        correct: "the",
        hint: "Müzik aletleri çalınırken ne kullanılırdı?",
        visualFormula: "Musical Instruments"
      },
      {
        id: "q4",
        text: ["I want to buy ", " laptop."],
        correct: "a",
        hint: "Herhangi bir laptop, belirli bir tane değil.",
        visualFormula: "Indefinite Article"
      },
      {
        id: "q5",
        text: ["", " computers are expensive nowadays."],
        correct: "(-) No Article",
        hint: "Genel olarak tüm bilgisayarlardan bahsediyoruz.",
        visualFormula: "Generalization (Zero Article)"
      }
    ]
  }
};