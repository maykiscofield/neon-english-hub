import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Sparkles, Target, AlertCircle, ChevronRight, LayoutList } from 'lucide-react';
import { useLearning } from '@/contexts/LearningContext';
import { vocabularyData } from '@/data/vocabulary';
import { getWritingFeedback } from '@/services/aiService';

const Writing = () => {
  const { userProfile } = useLearning();
  const [text, setText] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("Unit 1");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [finalizeStep, setFinalizeStep] = useState(0);
  const [aiReport, setAiReport] = useState("");

  const units = [
    { id: "Unit 1", label: "Ünite 1: Teknoloji ve Gelecek" },
    { id: "Unit 2", label: "Ünite 2: Çevre ve Doğa" },
    { id: "Unit 3", label: "Ünite 3: Eğitim ve Kariyer" }
  ];

  const [feedback, setFeedback] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const targetWords = useMemo(() => {
    const currentLevel = userProfile?.level || 'intermediate';
    return vocabularyData
      .filter(w => w.level === currentLevel)
      .slice(0, 5)
      .map(w => w.word.toLowerCase());
  }, [userProfile?.level, selectedUnit]);

  const analyzeText = () => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 1);
    const wordCount = words.length;
    const usedTargets = targetWords.filter(tw => text.toLowerCase().includes(tw));
    const academicConnectors = ["moreover", "furthermore", "however", "consequently", "therefore"];

    let currentScore = 0;
    let suggestions: string[] = [];

    if (wordCount < 50) suggestions.push("Metin çok kısa. Kelime sayısını artırın.");
    else currentScore += 50;

    if (usedTargets.length < 2) suggestions.push(`Hedef kelimelerden (Örn: ${targetWords[0]}) yararlanmalısın.`);
    else currentScore += 25;

    const usedConnectors = academicConnectors.filter(c => text.toLowerCase().includes(c));
    if (usedConnectors.length < 2) suggestions.push("Bağlaç kullanarak akıcılığı artırın.");
    else currentScore += 25;

    setScore(Math.round(currentScore));
    setFeedback(suggestions);
    return suggestions;
  };

  const handleFinalizeClick = () => {
    if (finalizeStep === 0) {
      const suggestions = analyzeText();
      if (suggestions.length > 0) setFinalizeStep(1); 
      else startFinalAnalysis();
    } else {
      startFinalAnalysis(); 
    }
  };

  const startFinalAnalysis = async () => {
    setFinalizeStep(0);
    setIsAnalyzing(true);
    setAiReport(""); 

    // ✨ GÜNCELLENMIŞ DETAYLI PROMPT
    const finalPrompt = `Merhaba,

Ben [${userProfile?.level || 'intermediate'}] seviyesinde İngilizce öğrenen bir öğrenciyim. Aşağıda yazdığım bir metin var. Lütfen bu metni aşağıda belirttiğim kapsamlı format ve kurallara göre analiz edip bana Türkçe, yapıcı ve profesyonel bir geri bildirim raporu hazırlar mısın?

Geri Bildirim Formatını Aşağıdaki Gibi Yapılandır:

1. GENEL DEĞERLENDİRME (Kısa Bir Paragraf)
Metnin genel olarak ne kadar anlaşılır ve amacına uygun olduğunu özetleyin.

Güçlü Yönlerim: Metnimde en başarılı bulduğunuz 1-2 noktayı (örn: akıcı bir giriş, iyi seçilmiş bir kelime, karmaşık bir cümlenin doğru kullanımı) belirtin.

2. RUBRİK KRİTERLERİNE GÖRE DETAYLI ANALİZ
Lütfen her bir başlık altında hem olumlu örnekler hem de gelişim alanları sunun. Her hatayı sadece listelemek yerine, "Neden bu bir hata?" veya "Bu kural neden önemli?" şeklinde kısa bir açıklama ekleyin.

A. İçerik (Content): Ana fikir net mi? Konuya bağlı kaldım mı? Fikirlerimi yeterince detaylandırdım mı ve destekledim mi?

B. Organizasyon (Organization): Paragraf yapısı (Giriş-Gelişme-Sonuç) mantıklı mı? Fikirler arasındaki geçişler akıcı mı? "Firstly, However, Therefore, In conclusion" gibi bağlaçları doğru kullandım mı?

C. Kelime Dağarcığı (Vocabulary): Kelime seçimlerim uygun ve çeşitli mi? Aynı basit kelimeleri (good, bad, nice, think) tekrar tekrar kullandım mı? Anlamı tam karşılamayan kelimeler (yanlış collocation) var mı?

D. Dil Kullanımı (Language Use - Grammar): Zaman uyumu var mı? (Örn: Geçmiş zaman anlatırken present tense kullanmak) Cümle yapıları (basit, bileşik, karmaşık) doğru mu? Özne-yüklem uyumu, çoğul-tekil uyumu gibi temel dilbilgisi kurallarına dikkat ettim mi?

E. Yazım ve Noktalama (Mechanics): Yazım (spelling), noktalama işaretleri (virgül, nokta, apostrof) ve büyük harf kullanımında hatalar var mı?

3. GELİŞİM PLANI ve SOMUT ÖNERİLER
Bu bölüm, üzerinde çalışmam için bana yol haritası çizsin.

A. İyileştirilebilecek 2-3 Spesifik Cümle: Metnimdeki anlamı karışık, yapısı hatalı veya daha iyi ifade edilebilecek 2-3 cümleyi tırnak içinde gösterin. Hatanın nedenini açıklayın ve bir alternatif önerin. (Örn: "Burada 'although' kullandığın için cümlenin ikinci kısmında 'but' kullanmamalısın. Daha doğrusu: 'Although it was raining, we went for a walk.' şeklinde olmalıydı.")

B. Odaklanmam Gereken Dilbilgisi Konuları: Hatalarımdan yola çıkarak, tekrar çalışmamı önerdiğiniz en fazla 2 temel dilbilgisi konusunu (örn: Present Perfect vs. Past Simple kullanımı, Passive Voice cümle yapıları, Relative Clauses) belirleyin.

C. Kelime Gelişimi Önerileri: Metnimde sıkça tekrarladığım veya seviyeme göre basit kalan 3-5 kelimeyi tespit edip, her biri için daha nitelikli, daha kesin veya daha ileri seviye 1-2 alternatif kelime önerin. (Örn: "Good" yerine: effective, beneficial, high-quality, impressive | "Think" yerine: believe, assume, consider, argue)

D. Bir Sonraki Adım Ödevi: Gelişimim için bana küçük, uygulanabilir bir ödev verin. (Örn: "Bu metni, önerdiğim kelimeleri ve düzeltilmiş cümle yapılarını kullanarak yeniden yazmayı deneyin." veya "Önümüzdeki hafta yazacağınız bir paragrafta, burada hata yaptığınız 'Present Perfect' zamanını bilinçli olarak en az iki kere kullanmaya çalışın.")

4. ÇOK ÖNEMLİ TEKNİK KURALLAR
Hata Gösterme: Dilbilgisi, kelime ve yazım hatalarını metnimde kalın ve renkli (örneğin kırmızı) veya üzeri çizili gibi net bir şekilde işaretleyin ve her hatanın yanına kısa açıklama yapın. (Örn: She **go** to school. → (açıklama: Özne 'she' olduğu için fiil 'goes' olmalı.)

DÜZELTMEYİN, YÖNLENDİRİN: Lütfen metnimi baştan sona düzeltip yeniden yazmayın. Sadece 3.A maddesinde belirttiğim gibi, seçili birkaç cümle için alternatif önerin.

Dil: Tüm geri bildirimi Türkçe olarak verin. Ancak, İngilizce terimleri (örn: tense, clause, preposition) parantez içinde kullanabilirsiniz.

İşte İncelenecek Metnim:`;

    try {
      const result = await getWritingFeedback(finalPrompt, text);
      setAiReport(result);
      setIsAnalyzing(false);
      setShowReport(true);
    } catch (err: any) {
      setIsAnalyzing(false);
      setAiReport("Bağlantı hatası veya kota doldu. Lütfen tekrar deneyin.");
      setShowReport(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white relative font-sans uppercase italic font-black overflow-x-hidden">
      <Navbar />

      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[110] flex items-center" onMouseEnter={() => setIsDrawerOpen(true)} onMouseLeave={() => setIsDrawerOpen(false)}>
        <motion.div animate={{ x: isDrawerOpen ? 0 : -280 }} className="w-[320px] bg-black/95 border-r-2 border-y-2 border-blue-500/30 backdrop-blur-3xl rounded-r-[40px] p-8 shadow-2xl relative">
          <div className="flex items-center gap-3 mb-8 text-blue-400 border-b border-blue-500/20 pb-4 italic">
            <LayoutList className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] font-black uppercase">Ünite Seçimi</span>
          </div>
          <div className="space-y-4">
            {units.map((unit) => (
              <button key={unit.id} onClick={() => { setSelectedUnit(unit.id); setIsDrawerOpen(false); setText(""); }} className={`w-full text-left p-4 rounded-2xl border transition-all ${selectedUnit === unit.id ? 'bg-blue-500/20 border-blue-400 text-white' : 'bg-white/5 border-transparent text-gray-500 hover:text-blue-300'}`}>
                <span className="text-[10px] tracking-widest font-black italic">{unit.label}</span>
              </button>
            ))}
          </div>
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-10 h-24 bg-blue-500/10 border-y-2 border-r-2 border-blue-500/30 rounded-r-2xl flex items-center justify-center cursor-pointer">
            <ChevronRight className={`w-6 h-6 text-blue-400 ${isDrawerOpen ? 'rotate-180' : ''}`} />
          </div>
        </motion.div>
      </div>

      <main className="pt-32 pb-20 relative z-10 px-4 font-black">
        <div className="container mx-auto max-w-6xl font-black">
          <div className="text-center mb-16 font-black italic">
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-white tracking-tighter uppercase font-heading italic">WRITING <span className="text-blue-400 italic font-black">LAB</span></h1>
            <div className="inline-block px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] text-blue-400/70 tracking-[0.4em] font-black italic">AKTİF PROTOKOL: {selectedUnit}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 font-black italic">
            <div className="lg:col-span-1">
              <div className="bg-black/60 border border-blue-500/20 rounded-[32px] p-8 backdrop-blur-xl sticky top-32 transition-all">
                <div className="flex items-center gap-2 mb-6 text-blue-400 border-b border-blue-500/10 pb-4"><Target className="w-5 h-5 font-black" /><span className="text-xs uppercase font-black italic">Hedef Kelimeler</span></div>
                <div className="space-y-4 uppercase font-black italic">
                  {targetWords.map(word => (
                    <div key={word} className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 ${text.toLowerCase().includes(word) ? 'bg-blue-500/20 border-blue-400 text-blue-100' : 'bg-white/5 border-white/5 text-gray-700'}`}>
                      <span className="text-[11px] font-black italic">{word}</span>
                      {text.toLowerCase().includes(word) && <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6 font-black">
              <div className="relative group font-black">
                <div className="relative bg-black/80 border-2 border-blue-500/10 rounded-[40px] p-10 backdrop-blur-3xl transition-all group-focus-within:border-blue-400/40 min-h-[600px] font-black">
                  
                  {/* ⏳ LOADING STATE - Analiz edilirken gösterilir */}
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-xl rounded-[40px] flex items-center justify-center z-50">
                      <div className="text-center">
                        <div className="w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                        <p className="text-blue-400 text-sm font-black uppercase tracking-widest italic">ANALİZ EDİLİYOR...</p>
                        <p className="text-gray-500 text-xs mt-2 italic">AI metninizi değerlendiriyor</p>
                      </div>
                    </div>
                  )}

                  <AnimatePresence>
                    {finalizeStep === 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-[50] bg-black/80 backdrop-blur-xl rounded-[40px] flex items-center justify-center p-8">
                        <div className="max-w-lg w-full bg-[#0a0a0a] border-2 border-blue-500/40 rounded-[32px] p-10 text-center shadow-2xl font-black">
                          <AlertCircle className="w-16 h-16 text-blue-400 mx-auto mb-6 font-black" />
                          <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tighter italic">Gelişim Önerileri</h3>
                          <div className="text-left space-y-4 mb-8 font-black italic">
                            {feedback.map((f, i) => (
                              <div key={i} className="flex gap-3 items-start bg-blue-400/5 p-4 rounded-xl border border-blue-500/10 font-black">
                                <Sparkles className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300 text-[10px] uppercase font-black leading-relaxed italic">{f}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-4 font-black italic">
                            <Button onClick={() => setFinalizeStep(0)} variant="outline" className="flex-1 rounded-2xl h-14 text-xs font-black uppercase italic border-white/10">DÜZENLE</Button>
                            <Button onClick={handleFinalizeClick} className="flex-1 rounded-2xl h-14 bg-blue-400 text-black text-xs font-black uppercase italic">YİNE DE GÖNDER</Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <textarea
                    value={text}
                    onChange={(e) => { setText(e.target.value); if (finalizeStep === 1) setFinalizeStep(0); }}
                    placeholder="METNİNİZİ BURAYA YAZMAYA BAŞLAYIN..."
                    className="w-full h-[450px] bg-transparent border-none outline-none text-blue-50 text-2xl leading-relaxed resize-none font-black italic uppercase placeholder:text-white/5"
                    autoFocus
                  />

                  <div className="mt-10 flex justify-end gap-6 font-black italic">
                    <Button onClick={handleFinalizeClick} disabled={isAnalyzing || text.length < 5} className="h-16 px-12 rounded-2xl bg-blue-500 text-black font-black text-xs italic uppercase shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                      {isAnalyzing ? "ANALİZ EDİLİYOR..." : "GÖNDER VE ANALİZ ET"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showReport && (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="mt-16 bg-[#0a0a0a] border-2 border-blue-500/30 rounded-[40px] overflow-hidden shadow-2xl font-black">
                <div className="bg-blue-500/10 p-10 flex justify-between items-center border-b border-blue-500/20 italic font-black uppercase">
                  <div>
                    <h4 className="text-3xl font-black text-white uppercase italic">DEĞERLENDİRME RAPORU</h4>
                    <p className="text-blue-400 text-[10px] tracking-widest uppercase font-black">AKADEMİK ANALİZ TAMAMLANDI</p>
                  </div>
                  <div className="text-right font-black italic">
                    <div className="text-7xl font-black text-blue-400 italic tracking-tighter">{score}<span className="text-2xl text-gray-600 font-black italic">/100</span></div>
                    <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Neural Score</span>
                  </div>
                </div>
                <div className="p-12 text-left italic font-black uppercase">
                   <div className="prose prose-invert max-w-none text-gray-300 font-sans normal-case">
                      <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed mb-10 border-l-2 border-blue-500/30 pl-6 py-2 italic font-black uppercase">
                        {aiReport || "Rapor hazırlandı. Gelişim planınızı aşağıda bulabilirsiniz..."}
                      </pre>
                   </div>
                   <Button onClick={() => { setShowReport(false); setText(""); setAiReport(""); }} className="w-full h-20 bg-white text-black font-black rounded-[32px] italic uppercase hover:bg-blue-400 transition-all text-sm tracking-widest font-black uppercase">YENİ OTURUM BAŞLAT</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Writing;