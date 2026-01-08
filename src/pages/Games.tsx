import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Brain, Zap, Headphones, ArrowLeft, Trophy, Timer, Volume2, Heart, Eye, Turtle, SkipForward, CheckCircle2, Bomb, AlertTriangle, ArrowRight, RotateCcw, Info, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext'; 
import { Link } from 'react-router-dom'; 
import confetti from 'canvas-confetti';

// --- TİP TANIMLAMALARI ---
type LevelType = 'Pre-Intermediate' | 'Intermediate' | 'Upper-Intermediate';

// --- LEVEL-BASED DATA (60+ CHALLENGING WORDS) ---
const GAME_CONTENT = {
  'Pre-Intermediate': {
    grammar: [
      { topic: 'Question Forms', q: "______ you like coffee?", options: ["Do", "Does", "Are", "Is"], answer: "Do", explanation: "I/You/We/They özneleriyle soru sorarken 'Do' yardımcı fiili kullanılır." },
      { topic: 'Past Simple', q: "She ______ to London last week.", options: ["go", "gone", "went", "going"], answer: "went", explanation: "'Go' fiilinin geçmiş zaman (Past Simple) hali 'went' şeklindedir." },
      { topic: 'Pronouns', q: "There is ______ in the room.", options: ["anyone", "someone", "anything", "anywhere"], answer: "someone", explanation: "Olumlu cümlelerde belirsiz bir kişiden bahsederken 'someone' kullanılır." },
      { topic: 'Present Continuous', q: "Look! The bus ______.", options: ["comes", "is coming", "coming", "come"], answer: "is coming", explanation: "Şu an olan olaylar için (Look!) am/is/are + V-ing yapısı kullanılır." },
      { topic: 'Comparatives', q: "Your car is ______ than mine.", options: ["fast", "faster", "fastest", "more fast"], answer: "faster", explanation: "Kısa sıfatlarda karşılaştırma yaparken sıfata '-er' takısı eklenir." },
      { topic: 'Future (Will)', q: "I think it ______ rain tomorrow.", options: ["will", "is", "going to", "does"], answer: "will", explanation: "Tahminlerde (I think) genellikle 'will' kullanılır." },
      { topic: 'Modals', q: "You ______ smoke here. It's forbidden.", options: ["mustn't", "don't have to", "can", "should"], answer: "mustn't", explanation: "Yasaklardan bahsederken 'mustn't' kullanılır." },
      { topic: 'Prepositions', q: "The meeting is ______ 10 o'clock.", options: ["in", "on", "at", "by"], answer: "at", explanation: "Saatlerden önce her zaman 'at' edatı kullanılır." },
      { topic: 'Adjectives', q: "This is a very ______ book.", options: ["interest", "interesting", "interested", "interests"], answer: "interesting", explanation: "Cansız varlıkları nitelerken sıfata '-ing' takısı eklenir." },
      { topic: 'Articles', q: "I saw ______ elephant at the zoo.", options: ["a", "an", "the", "some"], answer: "an", explanation: "Sesli harfle başlayan kelimelerden önce 'an' kullanılır." },
    ],
    listening: [
      { id: 1, word: "Acknowledge", meaning: "Kabul etmek, onaylamak", exampleEn: "They *acknowledged* the mistake.", exampleTr: "Hatayı *kabul ettiler*." },
      { id: 2, word: "Maintain", meaning: "Sürdürmek, korumak", exampleEn: "We need to *maintain* the engine.", exampleTr: "Motoru *korumamız* (bakım yapmamız) gerekiyor." },
      { id: 3, word: "Substitute", meaning: "Yedek, yerine geçmek", exampleEn: "Use honey as a *substitute* for sugar.", exampleTr: "Şekerin *yerine* bal kullanın." },
      { id: 4, word: "Sufficient", meaning: "Yeterli", exampleEn: "Is the salary *sufficient* for you?", exampleTr: "Maaş sizin için *yeterli* mi?" },
      { id: 5, word: "Vast", meaning: "Muazzam, çok büyük", exampleEn: "The desert is *vast* and empty.", exampleTr: "Çöl *muazzam* ve boştur." },
      { id: 6, word: "Contribute", meaning: "Katkıda bulunmak", exampleEn: "I want to *contribute* to the project.", exampleTr: "Projeye *katkıda bulunmak* istiyorum." },
      { id: 7, word: "Determine", meaning: "Belirlemek", exampleEn: "We need to *determine* the cause.", exampleTr: "Nedeni *belirlememiz* gerekiyor." },
      { id: 8, word: "Exaggerate", meaning: "Abartmak", exampleEn: "Don't *exaggerate* the problem.", exampleTr: "Problemi *abartma*." },
      { id: 9, word: "Inevitable", meaning: "Kaçınılmaz", exampleEn: "Change is *inevitable* in life.", exampleTr: "Hayatta değişim *kaçınılmazdır*." },
      { id: 10, word: "Occur", meaning: "Meydana gelmek", exampleEn: "The accident *occurred* at night.", exampleTr: "Kaza gece *meydana geldi*." },
      { id: 11, word: "Prevent", meaning: "Engellemek", exampleEn: "Vaccines help *prevent* diseases.", exampleTr: "Aşılar hastalıkları *engellemeye* yardımcı olur." },
      { id: 12, word: "Pursue", meaning: "Peşinden koşmak", exampleEn: "He wants to *pursue* his dreams.", exampleTr: "Hayallerinin *peşinden koşmak* istiyor." },
      { id: 13, word: "Relevant", meaning: "İlgili, alakalı", exampleEn: "Your question is not *relevant*.", exampleTr: "Sorunuz *alakalı* değil." },
      { id: 14, word: "Satisfied", meaning: "Memnun", exampleEn: "Are you *satisfied* with the service?", exampleTr: "Hizmetten *memnun* musunuz?" },
      { id: 15, word: "Unique", meaning: "Eşsiz", exampleEn: "Everyone has a *unique* fingerprint.", exampleTr: "Herkesin *eşsiz* bir parmak izi vardır." },
      { id: 16, word: "Volunteer", meaning: "Gönüllü", exampleEn: "She works as a *volunteer*.", exampleTr: "*Gönüllü* olarak çalışıyor." },
      { id: 17, word: "Wholesale", meaning: "Toptan satış", exampleEn: "We buy goods at *wholesale* prices.", exampleTr: "Malları *toptan* fiyatına alıyoruz." },
      { id: 18, word: "Yield", meaning: "Ürün vermek, verim", exampleEn: "The land *yields* good crops.", exampleTr: "Toprak iyi ürün *veriyor*." },
      { id: 19, word: "Anxiety", meaning: "Kaygı, endişe", exampleEn: "He felt great *anxiety* about the exam.", exampleTr: "Sınav hakkında büyük *kaygı* duydu." },
      { id: 20, word: "Barely", meaning: "Zar zor", exampleEn: "I could *barely* hear her voice.", exampleTr: "Sesini *zar zor* duyabildim." },
    ],
    matching: [] 
  },
  'Intermediate': {
    grammar: [
      { topic: 'Conditionals', q: "If I ______ you, I would study harder.", options: ["was", "am", "were", "be"], answer: "were", explanation: "Second Conditional yapısında 'be' fiili tüm özneler için 'were' olarak kullanılır." },
      { topic: 'Passive Voice', q: "Coffee ______ in Brazil.", options: ["is grown", "grows", "grown", "is grow"], answer: "is grown", explanation: "Geniş zaman pasif yapıda am/is/are + V3 kullanılır." },
      { topic: 'Present Perfect', q: "I ______ my best friend since 2010.", options: ["know", "known", "have known", "have been knowing"], answer: "have known", explanation: "Belirli bir zamandan beri süregelen durumlar için have/has + V3 kullanılır." },
      { topic: 'Modal Verbs', q: "You ______ bring your umbrella; it's not raining.", options: ["mustn't", "needn't", "can't", "shouldn't"], answer: "needn't", explanation: "Zorunluluk olmayan durumlarda 'needn't' veya 'don't have to' kullanılır." },
      { topic: 'Gerunds', q: "I enjoy ______ books in my free time.", options: ["read", "to read", "reading", "reads"], answer: "reading", explanation: "'Enjoy' fiilinden sonra gelen fiil '-ing' takısı alır." },
      { topic: 'Reported Speech', q: "He asked me where I ______.", options: ["live", "lived", "living", "lives"], answer: "lived", explanation: "Dolaylı anlatımda zaman bir derece geçmişe (backshift) atılır." },
      { topic: 'Relative Clauses', q: "The man ______ lives next door is a doctor.", options: ["who", "which", "whose", "whom"], answer: "who", explanation: "İnsanları nitelemek için 'who' ilgi zamiri kullanılır." },
      { topic: 'Past Continuous', q: "I ______ TV when the phone rang.", options: ["watch", "watched", "was watching", "were watching"], answer: "was watching", explanation: "Geçmişte yarıda kesilen uzun eylemler için Past Continuous kullanılır." },
      { topic: 'Quantifiers', q: "We have ______ time before the movie starts.", options: ["a few", "a little", "many", "few"], answer: "a little", explanation: "Sayılamayan kelimelerle (time) olumlu anlamda 'a little' kullanılır." },
      { topic: 'Used to', q: "I ______ play football when I was a child.", options: ["used to", "use to", "was used to", "get used to"], answer: "used to", explanation: "Geçmişteki alışkanlıklar 'used to + V1' ile anlatılır." },
    ],
    listening: [
      { id: 21, word: "Consequence", meaning: "Sonuç, netice", exampleEn: "Every action has a *consequence*.", exampleTr: "Her eylemin bir *sonucu* vardır." },
      { id: 22, word: "Distinction", meaning: "Ayrım, fark", exampleEn: "There is a clear *distinction* between them.", exampleTr: "Aralarında net bir *ayrım* var." },
      { id: 23, word: "Estimate", meaning: "Tahmin etmek", exampleEn: "We *estimate* the cost will be high.", exampleTr: "Maliyetin yüksek olacağını *tahmin ediyoruz*." },
      { id: 24, word: "Fundamental", meaning: "Temel, esas", exampleEn: "Freedom is a *fundamental* right.", exampleTr: "Özgürlük *temel* bir haktır." },
      { id: 25, word: "Hypothesis", meaning: "Hipotez, varsayım", exampleEn: "The scientist tested his *hypothesis*.", exampleTr: "Bilim insanı *hipotezini* test etti." },
      { id: 26, word: "Implementation", meaning: "Uygulama, yürütme", exampleEn: "The *implementation* of the law was slow.", exampleTr: "Yasanın *uygulanması* yavaştı." },
      { id: 27, word: "Justify", meaning: "Haklı çıkarmak", exampleEn: "How can you *justify* this behavior?", exampleTr: "Bu davranışı nasıl *haklı çıkarabilirsin*?" },
      { id: 28, word: "Modification", meaning: "Değişiklik", exampleEn: "We made a small *modification* to the car.", exampleTr: "Arabada küçük bir *değişiklik* yaptık." },
      { id: 29, word: "Negotiation", meaning: "Müzakere", exampleEn: "The *negotiations* lasted for hours.", exampleTr: "*Müzakereler* saatlerce sürdü." },
      { id: 30, word: "Objective", meaning: "Amaç, hedef", exampleEn: "Our main *objective* is profit.", exampleTr: "Temel *amacımız* kârdır." },
      { id: 31, word: "Prevalent", meaning: "Yaygın", exampleEn: "The disease is *prevalent* in this area.", exampleTr: "Hastalık bu bölgede *yaygındır*." },
      { id: 32, word: "Reinforce", meaning: "Pekiştirmek, güçlendirmek", exampleEn: "We need to *reinforce* the wall.", exampleTr: "Duvarı *güçlendirmemiz* gerekiyor." },
      { id: 33, word: "Significant", meaning: "Önemli, kayda değer", exampleEn: "There is a *significant* difference.", exampleTr: "*Kayda değer* bir fark var." },
      { id: 34, word: "Transformation", meaning: "Dönüşüm", exampleEn: "The city underwent a *transformation*.", exampleTr: "Şehir bir *dönüşüm* geçirdi." },
      { id: 35, word: "Utilization", meaning: "Kullanım, faydalanma", exampleEn: "The *utilization* of solar energy is rising.", exampleTr: "Güneş enerjisi *kullanımı* artıyor." },
      { id: 36, word: "Vulnerable", meaning: "Hassas, savunmasız", exampleEn: "Old people are *vulnerable* to the flu.", exampleTr: "Yaşlılar gribe karşı *hassastır*." },
      { id: 37, word: "Withdraw", meaning: "Geri çekilmek", exampleEn: "He decided to *withdraw* from the race.", exampleTr: "Yarıştan *geri çekilmeye* karar verdi." },
      { id: 38, word: "Accomplish", meaning: "Başarmak", exampleEn: "You can *accomplish* anything if you try.", exampleTr: "Denerse her şeyi *başarabilirsin*." },
      { id: 39, word: "Bias", meaning: "Önyargı, taraf tutma", exampleEn: "The reporter showed a political *bias*.", exampleTr: "Muhabir siyasi bir *taraf tutma* gösterdi." },
      { id: 40, word: "Compulsory", meaning: "Zorunlu", exampleEn: "Education is *compulsory* for all children.", exampleTr: "Eğitim tüm çocuklar için *zorunludur*." },
    ],
    matching: []
  },
  'Upper-Intermediate': {
    grammar: [
      { topic: 'Future Perfect', q: "______ you like coffee?", options: ["Do", "Does", "Are", "Is"], answer: "Do", explanation: "I/You/We/They özneleriyle soru sorarken 'Do' yardımcı fiili kullanılır." },
      { topic: 'Reported Speech', q: "He said he ______ busy.", options: ["is", "was", "be", "has been"], answer: "was", explanation: "Reported Speech'te 'am/is' fiili 'was' haline dönüşür." },
      { topic: 'Third Conditional', q: "If she ______ harder, she would have passed.", options: ["studied", "had studied", "study", "has studied"], answer: "had studied", explanation: "Geçmişteki hayali durumlar için If + Past Perfect kullanılır." },
      { topic: 'Inversion', q: "Never ______ I seen such a beautiful sunset.", options: ["have", "did", "had", "was"], answer: "have", explanation: "Olumsuz zarflarla başlayan cümlelerde devrik yapı (Inversion) kullanılır." },
      { topic: 'Causatives', q: "I'll have my hair ______ tomorrow.", options: ["cut", "cutting", "to cut", "cuts"], answer: "cut", explanation: "Have something done yapısında fiilin 3. hali kullanılır." },
      { topic: 'Mixed Conditionals', q: "If I ______ more, I would be rich now.", options: ["saved", "had saved", "save", "have saved"], answer: "had saved", explanation: "Geçmişteki bir durumun şu anki etkisini anlatmak için Mixed Conditional kullanılır." },
      { topic: 'Wish Clauses', q: "I wish I ______ more time for my hobbies.", options: ["have", "had", "will have", "would have"], answer: "had", explanation: "Şu anki zaman için pişmanlıklarda fiilin geçmiş hali kullanılır." },
      { topic: 'Modals in Past', q: "She ______ have forgotten about the meeting.", options: ["must", "should", "would", "can"], answer: "must", explanation: "Güçlü geçmiş tahminleri için 'must have V3' kullanılır." },
      { topic: 'Participle Clauses', q: "______ the book, he turned off the light.", options: ["Finish", "Finished", "Having finished", "To finish"], answer: "Having finished", explanation: "Bir eylemin diğerinden önce bittiğini vurgulamak için Having + V3 kullanılır." },
      { topic: 'Subjunctive', q: "It is essential that he ______ here on time.", options: ["is", "be", "was", "were"], answer: "be", explanation: "Essential/Suggest gibi kelimelerden sonra Subjunctive (yalın fiil) yapısı kullanılır." },
    ],
    listening: [
      { id: 41, word: "Ambiguous", meaning: "Belirsiz, muğlak", exampleEn: "The law is *ambiguous* on this point.", exampleTr: "Yasa bu noktada *muğlaktır*." },
      { id: 42, word: "Controversial", meaning: "Tartışmalı", exampleEn: "It was a *controversial* decision.", exampleTr: "*Tartışmalı* bir karardı." },
      { id: 43, word: "Differentiate", meaning: "Ayırt etmek", exampleEn: "Can you *differentiate* between the two?", exampleTr: "İkisi arasını *ayırt edebilir* misin?" },
      { id: 44, word: "Enforce", meaning: "Uygulamak, zorla yaptırmak", exampleEn: "The police *enforce* the law.", exampleTr: "Polis yasayı *uygular*." },
      { id: 45, word: "Fluctuation", meaning: "Dalgalanma", exampleEn: "Price *fluctuations* are normal.", exampleTr: "Fiyat *dalgalanmaları* normaldir." },
      { id: 46, word: "Inherent", meaning: "Doğasında olan", exampleEn: "There are *inherent* risks in this job.", exampleTr: "Bu işte *doğal* riskler vardır." },
      { id: 47, word: "Legislate", meaning: "Yasalaştırmak", exampleEn: "The government plans to *legislate*.", exampleTr: "Hükümet *yasalaştırmayı* planlıyor." },
      { id: 48, word: "Marginal", meaning: "Marjinal, çok az", exampleEn: "The difference is *marginal*.", exampleTr: "Fark *çok azdır*." },
      { id: 49, word: "Notwithstanding", meaning: "Buna rağmen", exampleEn: "*Notwithstanding* the weather, we went out.", exampleTr: "Hava durumuna *rağmen* dışarı çıktık." },
      { id: 50, word: "Parameters", meaning: "Parametreler, sınırlar", exampleEn: "We must work within the *parameters*.", exampleTr: "*Sınırlar* dahilinde çalışmalıyız." },
      { id: 51, word: "Qualitative", meaning: "Niteliksel", exampleEn: "We need a *qualitative* analysis.", exampleTr: "*Niteliksel* bir analize ihtiyacımız var." },
      { id: 52, word: "Reluctance", meaning: "İsteksizlik", exampleEn: "She showed *reluctance* to join.", exampleTr: "Katılma konusunda *isteksizlik* gösterdi." },
      { id: 53, word: "Sophisticated", meaning: "Gelişmiş, karmaşık", exampleEn: "This is a *sophisticated* system.", exampleTr: "Bu *gelişmiş* bir sistemdir." },
      { id: 54, word: "Unprecedented", meaning: "Eşi benzeri görülmemiş", exampleEn: "The success was *unprecedented*.", exampleTr: "Başarı *eşi benzeri görülmemişti*." },
      { id: 55, word: "Verify", meaning: "Doğrulamak", exampleEn: "Please *verify* your account.", exampleTr: "Lütfen hesabınızı *doğrulayın*." },
      { id: 56, word: "Widespread", meaning: "Yaygın", exampleEn: "The news caused *widespread* panic.", exampleTr: "Haber *yaygın* paniğe neden oldu." },
      { id: 57, word: "Alleviate", meaning: "Hafifletmek, dindirmek", exampleEn: "The medicine will *alleviate* the pain.", exampleTr: "İlaç ağrıyı *hafifletecek*." },
      { id: 58, word: "Collaborate", meaning: "İşbirliği yapmak", exampleEn: "We should *collaborate* on this.", exampleTr: "Bu konuda *işbirliği yapmalıyız*." },
      { id: 59, word: "Deteriorate", meaning: "Kötüleşmek", exampleEn: "The patient's condition *deteriorated*.", exampleTr: "Hastanın durumu *kötüleşti*." },
      { id: 60, word: "Empower", meaning: "Güçlendirmek, yetki vermek", exampleEn: "We aim to *empower* women.", exampleTr: "Kadınları *güçlendirmeyi* hedefliyoruz." },
    ],
    matching: []
  }
};

const ALL_LEVELS_MATCH_PARTS: Record<LevelType, any> = {
  'Pre-Intermediate': {
    1: [
      { id: 'a2-p1-1', word: 'Difficult', match: 'Zor' },
      { id: 'a2-p1-2', word: 'Cheap', match: 'Ucuz' },
      { id: 'a2-p1-3', word: 'Always', match: 'Her zaman' },
      { id: 'a2-p1-4', word: 'Borrowed', match: 'Ödünç aldı' },
      { id: 'a2-p1-5', word: 'Achieve', match: 'Başarmak' },
      { id: 'a2-p1-6', word: 'Ancient', match: 'Antik' },
    ],
    2: [
      { id: 'a2-p2-1', word: 'Avoid', match: 'Kaçınmak' },
      { id: 'a2-p2-2', word: 'Believe', match: 'İnanmak' },
      { id: 'a2-p2-3', word: 'Decision', match: 'Karar' },
      { id: 'a2-p2-4', word: 'Delicious', match: 'Lezzetli' },
      { id: 'a2-p2-5', word: 'Equipment', match: 'Ekipman' },
      { id: 'a2-p2-6', word: 'Furniture', match: 'Mobilya' },
    ],
    3: [
      { id: 'a2-p3-1', word: 'Improve', match: 'Geliştirmek' },
      { id: 'a2-p3-2', word: 'Necessary', match: 'Gerekli' },
      { id: 'a2-p3-3', word: 'Opinion', match: 'Fikir' },
      { id: 'a2-p3-4', word: 'Prepare', match: 'Hazırlamak' },
      { id: 'a2-p3-5', word: 'Reduce', match: 'Azaltmak' },
      { id: 'a2-p3-6', word: 'Urgent', match: 'Acil' },
    ]
  },
  'Intermediate': {
    1: [
      { id: 'b1-p1-1', word: 'Accurate', match: 'Doğru, kesin' },
      { id: 'b1-p1-2', word: 'Significant', match: 'Önemli' },
      { id: 'b1-p1-3', word: 'Sustainable', match: 'Sürdürülebilir' },
      { id: 'b1-p1-4', word: 'Innovative', match: 'Yenilikçi' },
      { id: 'b1-p1-5', word: 'Analyze', match: 'Analiz etmek' },
      { id: 'b1-p1-6', word: 'Aware', match: 'Farkında' },
    ],
    2: [
      { id: 'b1-p2-1', word: 'Reluctant', match: 'İsteksiz' },
      { id: 'b1-p2-2', word: 'Maintain', match: 'Sürdürmek' },
      { id: 'b1-p2-3', word: 'Consequence', match: 'Sonuç' },
      { id: 'b1-p2-4', word: 'Efficient', match: 'Verimli' },
      { id: 'b1-p2-5', word: 'Emphasize', match: 'Vurgulamak' },
      { id: 'b1-p2-6', word: 'Encounter', match: 'Karşılaşmak' },
    ],
    3: [
      { id: 'b1-p3-1', word: 'Inevitable', match: 'Kaçınılmaz' },
      { id: 'b1-p3-2', word: 'Sophisticated', match: 'Gelişmiş' },
      { id: 'b1-p3-3', word: 'Precise', match: 'Tam, net' },
      { id: 'b1-p3-4', word: 'Outcome', match: 'Çıktı, netice' },
      { id: 'b1-p3-5', word: 'Strategy', match: 'Strateji' },
      { id: 'b1-p3-6', word: 'Theory', match: 'Teori' },
    ]
  },
  'Upper-Intermediate': {
    1: [
      { id: 'b2-p1-1', word: 'Acknowledge', match: 'Onaylamak' },
      { id: 'b2-p1-2', word: 'Acquire', match: 'Edinmek' },
      { id: 'b2-p1-3', word: 'Clarify', match: 'Netleştirmek' },
      { id: 'b2-p1-4', word: 'Enhance', match: 'Geliştirmek' },
      { id: 'b2-p1-5', word: 'Advocate', match: 'Savunmak' },
      { id: 'b2-p1-6', word: 'Evaluate', match: 'Değerlendirmek' },
    ],
    2: [
      { id: 'b2-p2-1', word: 'Implement', match: 'Uygulamak' },
      { id: 'b2-p2-2', word: 'Justify', match: 'Gerekçelendirmek' },
      { id: 'b2-p2-3', word: 'Predict', match: 'Tahmin etmek' },
      { id: 'b2-p2-4', word: 'Undertake', match: 'Üstlenmek' },
      { id: 'b2-p2-5', word: 'Interpret', match: 'Yorumlamak' },
      { id: 'b2-p2-6', word: 'Obtain', match: 'Elde etmek' },
    ],
    3: [
      { id: 'b2-p3-1', word: 'Ambiguous', match: 'Muğlak' },
      { id: 'b2-p3-2', word: 'Controversial', match: 'Tartışmalı' },
      { id: 'b2-p3-3', word: 'Phenomenon', match: 'Olay' },
      { id: 'b2-p3-4', word: 'Sustainable', match: 'Sürdürülebilir' },
      { id: 'b2-p3-5', word: 'Coherent', match: 'Tutarlı' },
      { id: 'b2-p3-6', word: 'Crucial', match: 'Kritik' },
    ]
  }
};

const Games = () => {
  const { userProfile, updateProgress } = useLearning(); 
  const userLevel: LevelType = (userProfile?.level as LevelType) || 'Pre-Intermediate';
  const currentLevelData = GAME_CONTENT[userLevel] || GAME_CONTENT['Pre-Intermediate'];
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const GameSelection = () => (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="text-center mb-16 italic font-black uppercase tracking-widest">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
          <Gamepad2 className="w-4 h-4 text-cyan-500 animate-pulse" />
          <span className="text-sm font-medium text-cyan-400">Neon Arcade</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4 text-white italic tracking-tighter uppercase font-heading">
          Practice Through <span className="text-cyan-500">Play</span>
        </h1>
        <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mt-2">
          Current Level: <span className="text-white font-bold">{userLevel}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <GameCard id="matching" title="Word Matching" desc="Kelimeleri anlamlarıyla eşleştir. (3 Stages x 6 Words)" icon={Brain} color="cyan" difficulty="Medium" />
        <GameCard id="fill-blank" title="Grammar Master" desc="Boşlukları doğru gramer ile doldur." icon={Zap} color="pink" difficulty="Hard" />
        <GameCard id="bomb" title="Bomb Defusal" desc="Süre bitmeden bombayı imha et! (+3sn / -5sn)" icon={Bomb} color="red" difficulty="Extreme" />
        <GameCard id="listening" title="Listening Quiz" desc="Dinle, yaz ve detaylı öğren." icon={Headphones} color="green" difficulty="Expert" />
      </div>
    </div>
  );

  const GameCard = ({ id, title, desc, icon: Icon, color, difficulty }: any) => {
    const colors: any = {
      cyan: "border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] text-cyan-400 bg-cyan-500/10 shadow-xl",
      pink: "border-pink-500/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] text-pink-400 bg-pink-500/10 shadow-xl",
      yellow: "border-yellow-500/30 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] text-yellow-400 bg-yellow-500/10 shadow-xl",
      green: "border-green-500/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] text-green-400 bg-green-500/10 shadow-xl",
      red: "border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] text-red-500 bg-red-500/10 shadow-xl",
    };

    return (
      <motion.div 
        whileHover={{ scale: 1.02, translateY: -5 }}
        className={`group relative overflow-hidden rounded-[32px] bg-[#0a0a0a] border p-8 cursor-pointer transition-all ${colors[color].split(" ")[0]} ${colors[color].split(" ")[1]}`}
        onClick={() => setActiveGame(id)}
      >
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-8 -mt-8 ${colors[color].split(" ")[3]}`} />
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl ${colors[color].split(" ")[3]} ${colors[color].split(" ")[2]}`}>
            <Icon className="w-8 h-8" />
          </div>
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${colors[color].split(" ")[3]} ${colors[color].split(" ")[2]} border-opacity-20`}>
            {difficulty}
          </span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-2 uppercase italic tracking-tighter">{title}</h3>
        <p className="text-gray-400 mb-6 font-medium leading-relaxed">{desc}</p>
        <div className={`flex items-center text-xs font-black uppercase tracking-widest ${colors[color].split(" ")[2]}`}>
          <span>Play Now</span>
          <ArrowLeft className="w-4 h-4 ml-2 rotate-180 transition-transform group-hover:translate-x-2" />
        </div>
      </motion.div>
    );
  };

  const MatchingGame = () => {
    const [items, setItems] = useState<any[]>([]);
    const [selected, setSelected] = useState<number[]>([]);
    const [matched, setMatched] = useState<string[]>([]);
    const [wrongMatch, setWrongMatch] = useState<number[]>([]);
    const [currentPart, setCurrentPart] = useState(1);
    const [isPartComplete, setIsPartComplete] = useState(false);
    const [totalScore, setTotalScore] = useState(0);

    const LEVEL_PARTS = ALL_LEVELS_MATCH_PARTS[userLevel] || ALL_LEVELS_MATCH_PARTS['Pre-Intermediate'];

    const initializePart = (partNum: number) => {
      const data = LEVEL_PARTS[partNum as keyof typeof LEVEL_PARTS];
      const gameItems: any[] = [];
      data.forEach((item: any) => {
        gameItems.push({ id: item.id, text: item.word, type: 'word' });
        gameItems.push({ id: item.id, text: item.match, type: 'def' });
      });
      setItems(gameItems.sort(() => Math.random() - 0.5));
      setSelected([]);
      setMatched([]);
      setWrongMatch([]);
      setIsPartComplete(false);
    };

    useEffect(() => { initializePart(currentPart); }, [currentPart]);

    useEffect(() => {
      if (selected.length === 2) {
        const [first, second] = selected;
        if (items[first].id === items[second].id && items[first].type !== items[second].type) {
          const newMatched = [...matched, items[first].id];
          setMatched(newMatched);
          setSelected([]);
          setTotalScore(prev => prev + 10);
          if (newMatched.length === 6) { 
            setIsPartComplete(true);
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#06b6d4'] });
          }
        } else {
          setWrongMatch([first, second]);
          setTimeout(() => { setSelected([]); setWrongMatch([]); }, 800);
        }
      }
    }, [selected, items, matched]);

    const handleItemClick = (index: number) => {
      if (selected.length < 2 && !selected.includes(index) && !matched.includes(items[index].id)) {
        setSelected([...selected, index]);
      }
    };

    return (
      <GameLayout title="Matching" score={totalScore} onExit={() => setActiveGame(null)}>
        <div className="w-full max-w-5xl">
          <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-6 relative z-10 italic font-black uppercase">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 tracking-widest italic">
                STAGE {currentPart} OF 3
              </span>
              <p className="text-gray-400 text-sm italic font-sans uppercase tracking-tighter font-black italic">{userLevel} Mastery</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isPartComplete ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-6 rounded-[32px] bg-[#0a0a0a] border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)] italic font-black uppercase">
                <Trophy className="w-20 h-20 text-cyan-400 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]" />
                <h3 className="text-4xl font-black text-white mb-3 tracking-tighter">Stage {currentPart} Cleared!</h3>
                <Button 
                  onClick={() => currentPart < 3 ? setCurrentPart(prev => prev + 1) : setActiveGame(null)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-black px-12 py-8 text-xl rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all italic font-black uppercase"
                >
                  {currentPart < 3 ? 'Proceed Next Stage' : 'Complete Arcade'} 
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full italic font-black uppercase italic">
                {items.map((item, index) => {
                  const isSelected = selected.includes(index);
                  const isMatched = matched.includes(item.id);
                  const isWrong = wrongMatch.includes(index);
                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleItemClick(index)}
                      className={`h-32 rounded-xl border-2 flex items-center justify-center p-4 text-center cursor-pointer font-bold text-lg transition-all duration-300 ${
                        isMatched ? 'opacity-0 pointer-events-none scale-90' :
                        isWrong ? 'bg-red-500/20 border-red-500 text-red-400 animate-shake' :
                        isSelected ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] scale-105 z-10' :
                        'bg-[#111] border-gray-800 hover:border-cyan-500/50 text-gray-300 italic font-black italic'
                      }`}
                    >
                      {item.text}
                    </motion.button>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>
      </GameLayout>
    );
  };

  const FillBlankGame = () => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isFinished, setIsFinished] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isLastAnswerCorrect, setIsLastAnswerCorrect] = useState(false);
    const [shakeScreen, setShakeScreen] = useState(false);
    
    useEffect(() => {
      const pool = currentLevelData.grammar;
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, 10)); 
    }, [currentLevelData]);

    const handleAnswer = (option: string) => {
      if (selectedOption || showFeedback || questions.length === 0) return;
      
      setSelectedOption(option);
      const isCorrect = option === questions[currentQ].answer;
      setIsLastAnswerCorrect(isCorrect);
      
      if (isCorrect) {
        setScore(score + 10);
        setTimeout(() => nextQuestion(), 1500);
      } else {
        setShakeScreen(true);
        setScore(prev => Math.max(0, prev - 5)); 
        setTimeout(() => setShakeScreen(false), 500);
        setShowFeedback(true);
      }
    };

    const nextQuestion = () => {
        if (currentQ + 1 < questions.length) {
            setCurrentQ(currentQ + 1); 
            setSelectedOption(null);
            setShowFeedback(false);
        } else {
            setIsFinished(true);
            if (score >= 60) confetti();
        }
    };

    if (questions.length === 0) return null;
    if (isFinished) return <WinScreen score={score} onBack={() => setActiveGame(null)} title="Grammar Mastered!" theme="pink" />;
    
    const q = questions[currentQ];

    return (
      <GameLayout title="Grammar Master" score={score} onExit={() => setActiveGame(null)} theme="pink">
        <div className={`w-full max-w-3xl text-center italic font-black uppercase tracking-widest ${shakeScreen ? 'animate-shake' : ''}`}>
          <div className="mb-6 flex justify-center items-center gap-4">
            <span className="px-4 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(236,72,153,0.2)]">Topic: {q.topic}</span>
            <span className="text-gray-500 text-xs font-black">{currentQ + 1} / {questions.length}</span>
          </div>

          <div className="mb-12 p-12 bg-[#0a0a0a] rounded-[32px] border border-pink-500/20 shadow-[0_0_50px_rgba(236,72,153,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
            <h3 className="text-3xl md:text-4xl font-black text-white leading-relaxed italic tracking-tight uppercase font-heading">
              {q.q.split('______').map((part: any, i: any) => (
                <span key={i}> {part} {i === 0 && ( <span className={`inline-block min-w-[140px] border-b-4 ${selectedOption ? (isLastAnswerCorrect ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400') : 'border-pink-500 text-pink-400'} mx-3 shadow-[0_4px_15px_rgba(236,72,153,0.4)]`}> {selectedOption || "?"} </span> )} </span>
              ))}
            </h3>
          </div>

          {!showFeedback ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {q.options.map((opt: any) => {
                const isSelected = selectedOption === opt; 
                const isCorrect = opt === q.answer;
                return (
                  <button 
                    key={opt} 
                    onClick={() => handleAnswer(opt)} 
                    disabled={!!selectedOption} 
                    className={`p-6 rounded-2xl border-2 text-xl font-black italic transition-all duration-300 ${isSelected ? (isCorrect ? "bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]" : "bg-red-500/20 border-red-500 text-red-400") : selectedOption && isCorrect ? "bg-green-500/20 border-green-500 text-green-400" : "bg-white/[0.03] border-white/10 text-gray-400 hover:border-pink-500/50 hover:text-pink-400"}`}
                  > 
                    {opt} 
                  </button>
                );
              })}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0a0a0a] border-2 border-red-500/30 rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)]">
                <div className="bg-red-500/10 p-6 flex items-center justify-between border-b border-red-500/20">
                    <div className="flex items-center gap-4 text-left">
                        <div className="p-3 rounded-2xl bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"><XCircle className="w-8 h-8 text-white" /></div>
                        <div>
                            <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase">Review Solution</h4>
                            <p className="text-red-400 text-xs font-black uppercase tracking-widest">-5 Points Deducted</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] text-gray-400 font-black block uppercase mb-1">Your Pick</span>
                        <span className="px-3 py-1 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 font-black line-through">{selectedOption}</span>
                    </div>
                </div>
                
                <div className="p-8 text-left">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-6 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        <h5 className="text-lg font-black text-white uppercase italic tracking-tighter">Correct Answer: <span className="text-green-400 ml-2">{q.answer}</span></h5>
                    </div>
                    
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                            <Info className="w-4 h-4 text-pink-400" />
                          </div>
                          <p className="text-gray-300 font-medium italic leading-relaxed relative z-10">
                              {q.explanation}
                          </p>
                        </div>
                    </div>

                    <Button onClick={nextQuestion} className="w-full mt-8 bg-pink-600 hover:bg-pink-500 text-white font-black py-8 rounded-2xl uppercase tracking-widest text-xl shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-all flex items-center justify-center gap-3 active:scale-95 group">
                        Next Challenge
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </Button>
                </div>
            </motion.div>
          )}
        </div>
      </GameLayout>
    );
  };

  const BombGame = () => {
    const DATA = currentLevelData.listening;
    const [timeLeft, setTimeLeft] = useState(15);
    const [score, setScore] = useState(0);
    const [currentWord, setCurrentWord] = useState(DATA[0] || {word: '...', meaning: '...', exampleEn: '', exampleTr: ''});
    const [options, setOptions] = useState<string[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isExploded, setIsExploded] = useState(false);
    const [shake, setShake] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [wrongSelection, setWrongSelection] = useState<string | null>(null);

    const generateQuestion = () => {
      if (!DATA.length) return;
      const randomPair = DATA[Math.floor(Math.random() * DATA.length)];
      setCurrentWord(randomPair);
      const wrongAnswers = DATA.filter(w => w.id !== randomPair.id).map(w => w.meaning).sort(() => 0.5 - Math.random()).slice(0, 3);
      setOptions([...wrongAnswers, randomPair.meaning].sort(() => 0.5 - Math.random()));
    };

    useEffect(() => {
      generateQuestion();
    }, []);

    useEffect(() => {
      let timer: any;
      if (!isGameOver && !showReview) {
        timer = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev <= 0) { clearInterval(timer); setIsGameOver(true); setIsExploded(true); return 0; }
            return prev - 1;
          });
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [isGameOver, showReview]);

    const handleAnswer = (answer: string) => {
      if (showReview) return;

      if (answer === currentWord.meaning) {
        setScore(score + 10); 
        setTimeLeft(prev => Math.min(prev + 1, 30)); // +1sn
        generateQuestion();
        try { confetti({ particleCount: 20, spread: 40, origin: { y: 0.8 } }); } catch(e){}
      } else {
        setShake(true); 
        setScore(prev => Math.max(0, prev - 5)); // -5 Puan
        setWrongSelection(answer);
        setTimeLeft(prev => Math.max(0, prev - 4)); // -4sn
        setTimeout(() => setShake(false), 500);
        setShowReview(true);
      }
    };

    const nextQuestion = () => {
        setShowReview(false);
        setWrongSelection(null);
        if (timeLeft <= 0) {
            setIsGameOver(true);
            setIsExploded(true);
        } else {
            generateQuestion();
        }
    };

    if (isGameOver) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center italic font-black uppercase">
                {isExploded ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1.5 }} className="mb-6">
                        <Bomb className="w-32 h-32 text-red-600 animate-pulse drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]" />
                    </motion.div>
                ) : ( <Trophy className="w-32 h-32 text-yellow-400 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]" /> )}
                <h1 className="text-5xl font-black text-white mb-4 italic tracking-tighter">{isExploded ? "BOOM! MISSION FAILED" : "Defused!"}</h1>
                <p className="text-2xl text-gray-400 mb-8 font-black italic">FINAL SCORE: <span className="text-red-500 font-black italic">{score}</span></p>
                <Button onClick={() => setActiveGame(null)} size="lg" className="bg-red-600 hover:bg-red-700 font-black px-12 py-8 text-xl rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all italic tracking-widest font-black uppercase italic">
                    Abort Mission
                </Button>
            </div>
        );
    }

    return (
      <GameLayout title="Bomb Defusal" score={score} onExit={() => setActiveGame(null)}>
        <div className={`w-full max-w-lg text-center italic font-black uppercase italic ${shake ? 'animate-shake' : ''}`}>
          
          <div className="relative w-full h-8 bg-gray-900 rounded-full mb-8 overflow-hidden border-2 border-red-900/50">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 font-mono font-black text-white tracking-widest font-black italic">
                {timeLeft}S
            </div>
            <motion.div 
              initial={{ width: "100%" }} 
              animate={{ width: `${(timeLeft / 30) * 100}%` }} 
              className={`h-full ${timeLeft <= 5 ? 'bg-red-600 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]' : 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]'}`} 
            />
          </div>

          <AnimatePresence mode="wait">
            {!showReview ? (
              <motion.div key="question" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mb-12 relative italic font-black italic">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-black italic">
                    <AlertTriangle className={`w-8 h-8 text-red-500 ${timeLeft <= 5 ? 'animate-bounce' : ''}`} />
                  </div>
                  <h2 className="text-5xl font-black text-white mb-2 uppercase italic tracking-tighter">{currentWord.word}</h2>
                  <p className="text-red-400/80 font-mono text-xs uppercase tracking-widest font-black italic">SELECT MEANING: +1S SEC / -4S SEC</p>
                </div>
                <div className="grid grid-cols-2 gap-4 italic font-black italic">
                  {options.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleAnswer(opt)} 
                      className="p-6 rounded-2xl border-2 border-red-500/20 bg-red-500/5 hover:bg-red-500/20 hover:border-red-500 text-lg font-black transition-all active:scale-95 text-gray-200 italic shadow-xl uppercase"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="review" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-[#0a0a0a] border-2 border-red-500/30 rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)]"
              >
                <div className="bg-red-500/10 p-6 flex items-center justify-between border-b border-red-500/20">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-3 rounded-2xl bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                      <XCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase">Review Solution</h4>
                      <p className="text-red-400 text-xs font-black uppercase tracking-widest">-5 Points | -4 Seconds</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 font-black block uppercase mb-1 line-through">{wrongSelection}</span>
                    <span className="px-3 py-1 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 font-black uppercase text-sm">{currentWord.meaning}</span>
                  </div>
                </div>

                <div className="p-8 text-left">
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                        <Info className="w-4 h-4 text-pink-400" />
                      </div>
                      <div className="space-y-3">
                        <p className="text-gray-300 font-medium italic leading-relaxed">
                          {currentWord.exampleEn.replace(`*${currentWord.word}*`, `<span class="text-white font-bold">${currentWord.word}</span>`)}
                        </p>
                        <p className="text-gray-500 text-sm italic font-sans border-t border-white/5 pt-2">
                          {currentWord.exampleTr}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={nextQuestion} 
                    className="w-full mt-8 bg-white text-black font-black py-8 rounded-2xl uppercase tracking-widest text-xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95 group"
                  >
                    Next Question
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GameLayout>
    );
  };

  const ListeningGame = () => {
    const WORDS = currentLevelData.listening;
    const [current, setCurrent] = useState(0);
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3); 
    const [skips, setSkips] = useState(2);
    const [isFinished, setIsFinished] = useState(false);
    const [feedbackState, setFeedbackState] = useState<"typing" | "wrong" | "revealed">("typing");
    const [usedSlowMode, setUsedSlowMode] = useState(false); 
    const [showReview, setShowReview] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const currentWordData = WORDS[current];

    const playAudio = (rate = 0.9) => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentWordData.word);
      utterance.lang = 'en-US'; utterance.rate = rate; 
      if (rate < 0.9) setUsedSlowMode(true);
      window.speechSynthesis.speak(utterance);
      inputRef.current?.focus();
    };

    const handleSkip = () => {
      if (skips > 0 && !showReview) {
        setSkips(skips - 1);
        nextQuestion();
      }
    };

    const checkAnswer = (e: React.FormEvent) => {
      e.preventDefault();
      if (showReview) return;

      const cleanInput = input.trim().toLowerCase();
      const correctWord = currentWordData.word.toLowerCase();

      if (cleanInput === correctWord) {
        setScore(score + (usedSlowMode ? 10 : 20));
        setFeedbackState("revealed");
        confetti();
      } else {
        setScore(prev => Math.max(0, prev - 5));
        setLives(prev => prev - 1);
        if (lives > 1) {
            setFeedbackState("wrong");
            setShowReview(true);
        } else {
            setIsFinished(true);
        }
      }
    };

    const nextQuestion = () => {
        if (current + 1 < WORDS.length) {
            setCurrent(current + 1);
            setInput("");
            setUsedSlowMode(false);
            setFeedbackState("typing");
            setShowReview(false);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) return <WinScreen score={score} onBack={() => setActiveGame(null)} theme="green" title="Listening Complete!" />;

    return (
      <GameLayout title="Listening Quiz" score={score} onExit={() => setActiveGame(null)}>
        <div className="w-full max-w-lg text-center italic font-black uppercase italic">
          
          <div className="flex justify-between items-center mb-8">
             <div className="flex flex-col items-start gap-2">
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <Heart key={i} className={`w-5 h-5 ${i < lives ? "text-red-500 fill-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]" : "text-gray-800"}`} />
                    ))}
                </div>
                <div className="flex gap-1">
                    {[...Array(2)].map((_, i) => (
                        <SkipForward key={i} className={`w-4 h-4 ${i < skips ? "text-cyan-400" : "text-gray-800"}`} />
                    ))}
                </div>
             </div>
             <div className="text-xs text-gray-500 font-mono tracking-tighter text-right">
                WORD {current + 1} OF {WORDS.length}<br/>
                <span className="text-cyan-500/50">{skips} SKIPS LEFT</span>
             </div>
          </div>

          <AnimatePresence mode="wait">
            {!showReview ? (
                <motion.div key="play" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="flex justify-center gap-6 mb-12">
                        <button 
                            onClick={() => playAudio(0.9)} 
                            className="w-28 h-28 rounded-full bg-green-500/10 border-2 border-green-500/50 flex items-center justify-center hover:scale-110 shadow-[0_0_50px_rgba(34,197,94,0.2)] transition-all group"
                        >
                            <Volume2 className="w-12 h-12 text-green-400 group-hover:animate-pulse" />
                        </button>
                        <button 
                            onClick={() => playAudio(0.5)} 
                            className={`w-16 h-16 rounded-full border-2 flex items-center justify-center self-end transition-all ${usedSlowMode ? "bg-yellow-500/20 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]" : "border-yellow-500/50 hover:bg-yellow-500/10"}`}
                        >
                            <Turtle className="w-8 h-8 text-yellow-400" />
                        </button>
                    </div>

                    {feedbackState !== "revealed" ? (
                        <form onSubmit={checkAnswer} className="relative group">
                            <input 
                                ref={inputRef}
                                type="text" 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)} 
                                className={`w-full bg-black/40 border-2 rounded-2xl p-6 text-center text-3xl font-black italic outline-none transition-all ${feedbackState === 'wrong' ? 'border-red-500 animate-shake' : 'border-white/10 focus:border-green-500 shadow-inner'}`} 
                                placeholder="TYPE WORD..." 
                                autoFocus 
                            />
                            <div className="grid grid-cols-4 gap-3 mt-6">
                                <Button type="submit" className="col-span-3 bg-green-600 hover:bg-green-500 font-black py-8 rounded-2xl text-xl uppercase tracking-widest shadow-lg transition-all active:scale-95">Check Spelling</Button>
                                <Button type="button" onClick={handleSkip} disabled={skips === 0} className="col-span-1 bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/30 text-cyan-400 font-black rounded-2xl aspect-square flex flex-col items-center justify-center gap-1">
                                    <SkipForward className="w-6 h-6" />
                                    <span className="text-[10px]">PASS</span>
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-green-500/10 border-2 border-green-500/30 rounded-[32px] p-8 text-left shadow-[0_0_50px_rgba(34,197,94,0.15)]">
                             <div className="flex items-center gap-4 mb-6 pb-6 border-b border-green-500/20">
                                <div className="p-3 rounded-2xl bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]"><CheckCircle2 className="w-8 h-8 text-white" /></div>
                                <div>
                                    <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase">{currentWordData.word}</h3>
                                    <p className="text-green-400 italic text-lg font-black">{currentWordData.meaning}</p>
                                </div>
                             </div>
                             <Button onClick={nextQuestion} className="w-full bg-white text-black font-black py-8 rounded-2xl uppercase tracking-widest text-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3 group">
                                Next Word <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                             </Button>
                        </motion.div>
                    )}
                </motion.div>
            ) : (
                <motion.div key="review" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0a0a0a] border-2 border-red-500/30 rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)] text-left">
                    <div className="bg-red-500/10 p-6 flex items-center justify-between border-b border-red-500/20">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"><XCircle className="w-8 h-8 text-white" /></div>
                            <div>
                                <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase">Review Solution</h4>
                                <p className="text-red-400 text-xs font-black uppercase tracking-widest">-5 Points Deducted</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="mb-6">
                             <span className="text-gray-500 text-[10px] font-black uppercase block mb-1">Correct Spelling</span>
                             <h5 className="text-4xl font-black text-white uppercase italic tracking-tighter">{currentWordData.word}</h5>
                             <p className="text-green-400 italic font-black uppercase">{currentWordData.meaning}</p>
                        </div>

                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-8">
                             <div className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center"><Info className="w-4 h-4 text-pink-400" /></div>
                                <div className="space-y-2">
                                    <p className="text-gray-300 font-medium italic leading-relaxed">
                                      {currentWordData.exampleEn}
                                    </p>
                                    <p className="text-gray-500 text-sm italic font-sans border-t border-white/5 pt-2">{currentWordData.exampleTr}</p>
                                </div>
                             </div>
                        </div>

                        <Button onClick={nextQuestion} className="w-full bg-white text-black font-black py-8 rounded-2xl uppercase tracking-widest text-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3">
                            Continue <ArrowRight />
                        </Button>
                    </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GameLayout>
    );
  };

  const GameLayout = ({ title, score, onExit, children, theme = 'cyan' }: any) => {
    const themeColors: any = {
      cyan: "from-white to-gray-600 border-cyan-500/20 text-cyan-400",
      pink: "from-pink-400 to-purple-600 border-pink-500/20 text-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.1)]",
      green: "from-green-400 to-emerald-600 border-green-500/20 text-green-400",
    };

    return (
      <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center min-h-screen relative z-10 font-black uppercase italic">
        <div className="w-full max-w-5xl flex items-center justify-between mb-12 italic font-black">
          <Button variant="ghost" onClick={onExit} className="text-gray-500 hover:text-white uppercase font-black text-xs tracking-widest italic font-black italic">
            <ArrowLeft className="mr-2 h-4 w-4 font-black italic" /> Exit Arcade
          </Button>
          <h2 className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${themeColors[theme]?.split(" ")[0]} ${themeColors[theme]?.split(" ")[1]} uppercase italic tracking-tighter font-heading font-black italic`}>{title} <span className="text-gray-800">Mode</span></h2>
          <div className={`text-xl font-black font-mono bg-white/[0.03] px-6 py-3 rounded-2xl border ${themeColors[theme]?.split(" ")[2]} shadow-lg tracking-tighter italic font-black italic`}>{score} <span className="text-[10px] text-gray-500 uppercase font-sans ml-1 font-black italic">PTS</span></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full flex justify-center italic font-black uppercase italic font-black italic">{children}</motion.div>
      </div>
    );
  };

  const WinScreen = ({ score, onBack, title = "LEVEL COMPLETE!", theme = 'cyan' }: any) => {
    const themeColors: any = {
      cyan: "text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]",
      pink: "text-pink-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]",
      green: "text-green-400 drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]",
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] relative z-10 italic font-black uppercase">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-8 font-black italic">
          <Trophy className={`w-32 h-32 ${themeColors[theme]} font-black italic`} />
        </motion.div>
        <h1 className="text-5xl font-black text-white mb-4 uppercase italic tracking-tighter font-black italic">{title}</h1>
        <p className="text-2xl text-gray-400 mb-10 font-black italic font-black italic">ARCADE REWARD: <span className={`${theme === 'pink' ? 'text-pink-400' : theme === 'green' ? 'text-green-400' : 'text-cyan-400'} font-black italic font-black italic`}>{score} PTS</span></p>
        <Button onClick={onBack} size="lg" className="bg-white text-black font-black px-12 py-8 text-xl rounded-2xl uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all active:scale-95 italic font-black italic">Return to Arcade</Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans relative">
      <Navbar />
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="fixed top-28 left-8 z-[100] hidden lg:block font-black italic">
        <Link to="/dashboard" className="group flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 shadow-xl font-black italic tracking-widest uppercase italic font-black font-black italic">
          <div className="relative flex items-center justify-center font-black italic tracking-widest italic font-black italic">
            <ArrowLeft className="relative w-5 h-5 text-gray-500 group-hover:text-primary group-hover:-translate-x-2 transition-all duration-300 font-black italic tracking-widest font-black italic font-black italic" />
          </div>
          <div className="flex flex-col items-start leading-tight font-black italic font-black italic font-black italic">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-primary/70 font-black italic tracking-widest italic font-black italic font-black italic">Quit Game</span>
            <span className="text-sm font-semibold text-gray-300 group-hover:text-white font-black italic tracking-widest font-heading italic font-black font-black italic font-black italic">DASHBOARD</span>
          </div>
        </Link>
      </motion.div>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={activeGame || "menu"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 font-black italic font-black italic font-black italic font-black italic">
          {!activeGame ? <GameSelection /> : (
            <>
              {activeGame === 'matching' && <MatchingGame />}
              {activeGame === 'fill-blank' && <FillBlankGame />}
              {activeGame === 'bomb' && <BombGame />}
              {activeGame === 'listening' && <ListeningGame />}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Games;