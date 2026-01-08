import { Zap, UserSearch, Target, AlertCircle, Info, Sparkles, HelpCircle, Eye, ArrowRightLeft, FileText, SearchCode, Brain, BookOpen, Layers } from 'lucide-react';

// Değişken adını index.ts ile uyumlu hale getirdik (subjectObjectQuestionssData)
export const subjectObjectQuestionssData = {
    // image_81ff88.png hatasını çözen kritik ID eşleşmesi
    id: 'b1-1.2-subj-obj-ques', 
    title: '1.2 SUBJECT & OBJECT QUESTIONS (B1+)',
    description: 'İngilizcede soru sorma hiyerarşisini kökten değiştiren "Özne" ve "Nesne" ayrımını profesyonel düzeyde analiz edin.',

    formulas: {
      object: [
        { label: "WH- WORD", detail: "Who / What / Which", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
        { label: "AUXILIARY", detail: "do / does / did", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
        { label: "SUBJECT", detail: "İşi yapan gerçek kişi", color: "border-purple-500/30 text-purple-400" },
        { label: "BASE VERB", detail: "Her zaman yalın (V1)", color: "border-pink-500/30 text-pink-400" }
      ],
      subject: [
        { label: "WHO / WHAT", detail: "Özne yerine geçer", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
        { label: "POSITIVE VERB", detail: "V-s / V2 çekimi", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
        { label: "COMPLEMENT", detail: "Eylemden etkilenenler", color: "border-white/10 text-white" }
      ],
      // image_82606c.png hatasını çözen doldurulmuş Soru sekmesi:
      question: [
        { label: "DO / DID / DOES", detail: "Soru girişi", color: "border-red-500/30 text-red-400" },
        { label: "SUBJECT", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
        { label: "VERB (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400" },
        { label: "WHO / WHAT?", detail: "Nesne Sorusu", color: "border-purple-500/30 text-purple-400" }
      ]
    },

    examples: {
      positive: {
        parts: [
          { text: "Who", color: "text-yellow-400", underline: true },
          { text: "painted", color: "text-emerald-400" },
          { text: "this masterpiece?", color: "text-white" }
        ],
        translation: "Bu şaheseri KİM boyadı? (Özne Sorusu: Cevap 'Picasso'dur, yardımcı fiil kullanılmaz.)" 
      },
      negative: {
        parts: [
          { text: "What", color: "text-blue-400" },
          { text: "did", color: "text-red-400" },
          { text: "Picasso", color: "text-purple-400" },
          { text: "paint?", color: "text-pink-400" }
        ],
        translation: "Picasso NE boyadı? (Nesne Sorusu: Cevap 'Tablo'dur, 'did' yardımcı fiili mecburidir.)"
      },
      // Soru yapısı örneği eklendi
      question: {
        parts: [
          { text: "Who", color: "text-blue-400" },
          { text: "did", color: "text-red-400" },
          { text: "they", color: "text-purple-400" },
          { text: "see", color: "text-pink-400" },
          { text: "at the park?", color: "text-white" }
        ],
        translation: "Parkta KİMİ gördüler? (Onlar mı gördü? Evet, bu bir nesne sorusudur.)"
      }
    },

    sections: [
      {
        title: "🧠 B1 Seviye Mantık Analizi",
        content: "Intermediate seviyesinde, soru sorarken beyninizi şu algoritma ile çalıştırmalısınız: Cevabım cümlenin neresinde?",
        list: [
          "Eğer cevap 'İşi Yapan' (Özne) ise: Soru kelimesini koy, fiili sanki olumlu cümleymiş gibi çekimle (Yardımcı fiil Yasak!).",
          "Eğer cevap 'Etkilenen/Yer/Zaman' (Nesne) ise: Standart soru yapısını (Auxiliary + Subject + Verb) kullan.",
          "İpucu: Özne sorularında 'Who' her zaman 'Third Person Singular' (3. Tekil) kabul edilir."
        ]
      },
      {
        title: "🏗️ Zamanlara Göre Değişimler",
        content: "Özne sorularında yardımcı fiil olmadığı için, zamanın ruhu doğrudan ana fiile yüklenir:",
        list: [
          "Present Simple: Who lives here? (Kim yaşıyor? - Fiile 's' takısı gelir.)",
          "Past Simple: What happened? (Ne oldu? - Fiil 2. haldedir.)",
          "Present Perfect: Who has finished? (Kim bitirdi? - 'Has' her zaman tekildir.)"
        ]
      },
      {
        title: "📋 Karşılaştırmalı Tablo",
        content: "Aynı fiilin iki farklı soru türünde nasıl evrimleştiğini inceleyin:",
        list: [
          "Özne: Who called you? (Seni kim aradı?) -> Cevap: My mom.",
          "Nesne: Who did you call? (Kimi aradın?) -> Cevap: My mom.",
          "Özne: What fell on the floor? (Yere ne düştü?) -> Cevap: A glass.",
          "Nesne: What did you drop? (Neyi düşürdün?) -> Cevap: A glass."
        ]
      }
    ],

    scenarios: [
      { title: "Kriminal İnceleme", icon: UserSearch, desc: "Bir olayın failini (Özne) bulmaya çalışırken 'Who saw the thief?' gibi yapılar kullanılır.", color: "from-blue-500/20 to-transparent" },
      { title: "Detay Arama", icon: SearchCode, desc: "Detayları (Nesne) merak ederken 'How much did it cost?' gibi standart formüller devreye girer.", color: "from-purple-500/20 to-transparent" },
      { title: "Sosyalleşme", icon: Eye, desc: "Tanımadığınız biri hakkında bilgi alırken: 'Who invited him?' (Özne) vs 'Who does he know?' (Nesne).", color: "from-yellow-500/20 to-transparent" }
    ],

    warnings: [
      {
        title: "🚀 Altın Kural: Did/Do/Does Kullanma!",
        wrong: "Who did break the window?",
        right: "Who broke the window?",
        note: "Özne sorularında yardımcı fiil kullanmak B1 seviyesinde en büyük hatadır. Fiili direkt çekimleyin."
      },
      {
        title: "⚠️ Çoğul Yanılgısı (Tekil Çekim)",
        wrong: "Who are going to the concert? (Cevabı bilmediğiniz sürece)",
        right: "Who is going to the concert?",
        note: "İngilizcede 'Who' ve 'What' özne sorularında, cevap bin kişi bile olsa fiil tekil (is/has/wants) kalır."
      },
      {
        title: "💎 Which + Noun Yapısı",
        wrong: "Which did car win the race?",
        right: "Which car won the race?",
        note: "Eğer 'Which car' özne ise, 'did' araya girmez. 'Which car won?' şeklinde fiile bağlanır."
      }
    ],

    proTips: [
      {
        head: "💡 Preposition (Edat) Yerleşimi",
        body: "Nesne sorularında edatlar genellikle cümlenin sonuna atılır. Özne sorularında ise anlam özneye bağlıdır.",
        example: "Object: Who are you talking TO? | Subject: Who talked to you?"
      },
      {
        head: "🧐 Şüpheye Düştüğünüzde...",
        body: "Sorunun cevabını verin. Cevabınız 'He/She' ise Özne sorusudur, 'Him/Her' ise Nesne sorusudur.",
        example: "Who loves him? - HE loves him. (Özne) | Who does he love? - He loves HER. (Nesne)"
      }
    ],

    challenge: {
      words: ["Who", "What", "did", "happened", "made", "broke", "does", "is"],
      questions: [
        { 
          id: "b1-q1", 
          text: ["", " broke the expensive vase?"], 
          correct: "Who", 
          hint: "Vazoyu KİM kırdı? (Özne sorusu).", 
          visualFormula: "WHO + V2 (No Auxiliary)" 
        },
        { 
          id: "b1-q2", 
          text: ["What ", " you do yesterday afternoon?"], 
          correct: "did", 
          hint: "Dün NE yaptın? (Nesne sorusu).", 
          visualFormula: "WHAT + DID + Subject + V1" 
        },
        { 
          id: "b1-q3", 
          text: ["Who ", " you talk to at the library?"], 
          correct: "did", 
          hint: "Kütüphanede KİMİNLE konuştun? (Nesne sorusu).", 
          visualFormula: "WHO + DID + Subject + V1" 
        },
        { 
          id: "b1-q4", 
          text: ["What ", " during the meeting?"], 
          correct: "happened", 
          hint: "Toplantı sırasında NE oldu? (Özne sorusu).", 
          visualFormula: "WHAT + V2" 
        },
        { 
          id: "b1-q5", 
          text: ["Who ", " this mess in the kitchen?"], 
          correct: "made", 
          hint: "Mutfaktaki bu dağınıklığı KİM yaptı? (Özne sorusu).", 
          visualFormula: "WHO + V2" 
        },
        { 
          id: "b1-q6", 
          text: ["Which team ", " winning the match?"], 
          correct: "is", 
          hint: "Hangi takım kazanıyor? (Özne sorusu).", 
          visualFormula: "WH- + IS + V-ing" 
        }
      ]
    }
  };