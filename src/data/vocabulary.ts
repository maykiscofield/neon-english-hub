import { VocabularyWord, Level } from '@/types/learning';

export const vocabularyData: VocabularyWord[] = [
  // --- PRE-INTERMEDIATE (A2) ---
  {
    id: 'achieve',
    word: 'achieve',
    pos: 'verb',
    meaning: 'başarmak, elde etmek',
    definition: 'To succeed in finishing something or reaching a goal.',
    ipa: '/əˈtʃiːv/',
    examples: ['She finally achieved her goal.', 'You can achieve anything if you work hard.', 'They achieved great success.'],
    exampleTranslations: ['Sonunda hedefine ulaştı.', 'Sıkı çalışırsan her şeyi başarabilirsin.', 'Büyük bir başarı elde ettiler.'],
    level: 'pre-intermediate',
    usageNotes: 'Genellikle çaba gerektiren başarılar için kullanılır.',
    collocations: ['achieve a goal', 'achieve success', 'achieve a target'],
    collocationMeanings: {
      'achieve a goal': 'bir hedefe ulaşmak',
      'achieve success': 'başarı elde etmek',
      'achieve a target': 'hedefi tutturmak',
    },
  },
  {
    id: 'afford',
    word: 'afford',
    pos: 'verb',
    meaning: 'parası yetmek, karşılayabilmek',
    definition: 'To be able to buy or do something because you have enough money or time.',
    ipa: '/əˈfɔːrd/',
    examples: ["I can't afford a new car.", 'Can you afford to take a vacation?', "We couldn't afford the rent."],
    exampleTranslations: ['Yeni bir arabaya gücüm yetmez.', 'Tatile çıkmayı karşılayabilir misin?', 'Kirayı karşılayamadık.'],
    level: 'pre-intermediate',
    usageNotes: 'Olumsuz cümlelerde "can\'t afford" şeklinde çok sık kullanılır.',
    collocations: ['can afford', 'afford to buy', 'afford the price'],
    collocationMeanings: {
      'can afford': 'parası yetebilmek',
      'afford to buy': 'satın almaya gücü yetmek',
      'afford the price': 'fiyatını karşılayabilmek',
    },
  },
  {
    id: 'ancient',
    word: 'ancient',
    pos: 'adjective',
    meaning: 'antik, çok eski',
    definition: 'From a long time ago; very old.',
    ipa: '/ˈeɪn.ʃənt/',
    examples: ['We visited an ancient castle.', 'Ancient Rome was powerful.', 'He studies ancient history.'],
    exampleTranslations: ['Antik bir kaleyi ziyaret ettik.', 'Antik Roma güçlüydü.', 'Antik tarih okuyor.'],
    level: 'pre-intermediate',
    usageNotes: 'Binlerce yıl öncesini anlatmak için "very old" yerine tercih edilir.',
    collocations: ['ancient history', 'ancient civilization', 'ancient ruins'],
    collocationMeanings: {
      'ancient history': 'antik tarih',
      'ancient civilization': 'antik medeniyet',
      'ancient ruins': 'antik kalıntılar',
    },
  },
  {
    id: 'appointment',
    word: 'appointment',
    pos: 'noun',
    meaning: 'randevu, atama',
    definition: 'A formal arrangement to meet or visit someone at a particular time.',
    ipa: '/əˈpɔɪnt.mənt/',
    examples: ["I have a doctor's appointment.", 'She made an appointment for 3 PM.', 'He missed his appointment.'],
    exampleTranslations: ['Doktor randevum var.', 'Saat öğleden sonra 3 için randevu aldı.', 'Randevusunu kaçırdı.'],
    level: 'pre-intermediate',
    usageNotes: 'Resmi veya profesyonel görüşmeler için kullanılır.',
    collocations: ['make an appointment', 'book an appointment', 'cancel an appointment'],
    collocationMeanings: {
      'make an appointment': 'randevu almak',
      'book an appointment': 'randevu ayarlamak/ayırtmak',
      'cancel an appointment': 'randevuyu iptal etmek',
    },
  },
  {
    id: 'attend',
    word: 'attend',
    pos: 'verb',
    meaning: 'katılmak, gitmek',
    definition: 'To go to an event, place, or meeting.',
    ipa: '/əˈtend/',
    examples: ['I attend English classes twice a week.', 'Did you attend the meeting?', 'He attends a local school.'],
    exampleTranslations: ['Haftada iki kez İngilizce derslerine katılıyorum.', 'Toplantıya katıldın mı?', 'Yerel bir okula gidiyor.'],
    level: 'pre-intermediate',
    usageNotes: 'Okula gitmek veya bir toplantıya katılmak için "go to"dan daha resmidir.',
    collocations: ['attend school', 'attend a meeting', 'attend a wedding'],
    collocationMeanings: {
      'attend school': 'okula gitmek (öğrencisi olmak)',
      'attend a meeting': 'toplantıya katılmak',
      'attend a wedding': 'düğüne katılmak',
    },
  },
  {
    id: 'avoid',
    word: 'avoid',
    pos: 'verb',
    meaning: 'kaçınmak, sakınmak',
    definition: 'To stay away from someone or something.',
    ipa: '/əˈvɔɪd/',
    examples: ['You should avoid fatty foods.', 'She is avoiding me lately.', 'Try to avoid the city center.'],
    exampleTranslations: ['Yağlı yiyeceklerden kaçınmalısın.', 'Son zamanlarda benden kaçıyor.', 'Şehir merkezinden kaçınmaya çalış.'],
    level: 'pre-intermediate',
    usageNotes: 'Kendinden sonra bir fiil gelirse "-ing" takısı alır.',
    collocations: ['avoid contact', 'avoid mistakes', 'avoid conflict'],
    collocationMeanings: {
      'avoid contact': 'temastan kaçınmak',
      'avoid mistakes': 'hata yapmaktan sakınmak',
      'avoid conflict': 'çatışmadan kaçınmak',
    },
  },
  {
    id: 'background',
    word: 'background',
    pos: 'noun',
    meaning: 'arka plan, geçmiş',
    definition: 'The things that can be seen behind the main things or people in a picture.',
    ipa: '/ˈbæk.ɡraʊnd/',
    examples: ['The mountains are in the background.', 'Change the background of your phone.', 'Tell me about your background.'],
    exampleTranslations: ['Dağlar arka planda görünüyor.', 'Telefonunun arka planını değiştir.', 'Bana geçmişinden bahset.'],
    level: 'pre-intermediate',
    collocations: ['cultural background', 'educational background'],
    collocationMeanings: {
      'cultural background': 'kültürel geçmiş/altyapı',
      'educational background': 'eğitim geçmişi',
    },
  },
  {
    id: 'believe',
    word: 'believe',
    pos: 'verb',
    meaning: 'inanmak',
    definition: 'To think that something is true or real.',
    ipa: '/bɪˈliːv/',
    examples: ['I believe you.', 'Do you believe in ghosts?', 'They believe that she is right.'],
    exampleTranslations: ['Sana inanıyorum.', 'Hayaletlere inanır mısın?', 'Onun haklı olduğuna inanıyorlar.'],
    level: 'pre-intermediate',
    collocations: ['believe in', 'firmly believe'],
    collocationMeanings: {
      'believe in': 'bir şeye inanmak (varlığına/gücüne)',
      'firmly believe': 'yürekten/kesinlikle inanmak',
    },
  },
  {
    id: 'borrow',
    word: 'borrow',
    pos: 'verb',
    meaning: 'ödünç almak',
    definition: 'To get something from someone with the intention of giving it back.',
    ipa: '/ˈbɒr.əʊ/',
    examples: ['Can I borrow your pen?', 'He borrowed money from the bank.', 'I need to borrow a book.'],
    exampleTranslations: ['Kalemini ödünç alabilir miyim?', 'Bankadan borç para aldı.', 'Ödünç bir kitap almam gerekiyor.'],
    level: 'pre-intermediate',
    collocations: ['borrow from', 'borrow money'],
    collocationMeanings: {
      'borrow from': 'birinden ödünç almak',
      'borrow money': 'borç para almak',
    },
  },
  {
    id: 'challenge',
    word: 'challenge',
    pos: 'noun',
    meaning: 'zorluk, meydan okuma',
    definition: 'Something that is difficult and needs a lot of work and skill.',
    ipa: '/ˈtʃæl.ɪndʒ/',
    examples: ['This puzzle is a real challenge.', 'Learning a language is a challenge.', 'She loves a new challenge.'],
    exampleTranslations: ['Bu bulmaca gerçek bir zorluk.', 'Dil öğrenmek bir meydan okumadır.', 'Yeni zorlukları sever.'],
    level: 'pre-intermediate',
    collocations: ['big challenge', 'accept a challenge'],
    collocationMeanings: {
      'big challenge': 'büyük zorluk',
      'accept a challenge': 'meydan okumayı kabul etmek',
    },
  },
  {
    id: 'complain',
    word: 'complain',
    pos: 'verb',
    meaning: 'şikayet etmek',
    definition: 'To say that something is wrong or not good enough.',
    ipa: '/kəmˈpleɪn/',
    examples: ['He complained about the noise.', 'Stop complaining and help me.', 'They complained to the waiter.'],
    exampleTranslations: ['Gürültü hakkında şikayet etti.', 'Şikayet etmeyi bırak ve bana yardım et.', 'Garsona şikayette bulundular.'],
    level: 'pre-intermediate',
    collocations: ['complain about', 'complain to'],
    collocationMeanings: {
      'complain about': 'bir şey hakkında şikayet etmek',
      'complain to': 'birine şikayette bulunmak',
    },
  },
  {
    id: 'confirm',
    word: 'confirm',
    pos: 'verb',
    meaning: 'onaylamak, doğrulamak',
    definition: 'To say or show that something is true or correct.',
    ipa: '/kənˈfɜːm/',
    examples: ['Please confirm your booking.', 'He confirmed the meeting time.', 'I can confirm that news.'],
    exampleTranslations: ['Lütfen rezervasyonunuzu onaylayın.', 'Toplantı saatini doğruladı.', 'O haberi teyit edebilirim.'],
    level: 'pre-intermediate',
    collocations: ['confirm a booking', 'confirm details'],
    collocationMeanings: {
      'confirm a booking': 'rezervasyonu onaylamak',
      'confirm details': 'detayları doğrulamak',
    },
  },
  {
    id: 'decision',
    word: 'decision',
    pos: 'noun',
    meaning: 'karar',
    definition: 'A choice that you make about something after thinking about it.',
    ipa: '/dɪˈsɪʒ.ən/',
    examples: ['It was a difficult decision.', "I haven't made a decision yet.", 'What is your final decision?'],
    exampleTranslations: ['Zor bir karardı.', 'Henüz bir karar vermedim.', 'Son kararınız nedir?'],
    level: 'pre-intermediate',
    collocations: ['make a decision', 'final decision'],
    collocationMeanings: {
      'make a decision': 'karar vermek',
      'final decision': 'son karar',
    },
  },
  {
    id: 'delicious',
    word: 'delicious',
    pos: 'adjective',
    meaning: 'lezzetli',
    definition: 'Having a very pleasant taste or smell.',
    ipa: '/dɪˈlɪʃ.əs/',
    examples: ['This soup is delicious.', 'What a delicious meal!', 'It smells delicious in here.'],
    exampleTranslations: ['Bu çorba lezzetli.', 'Ne kadar lezzetli bir yemek!', 'Burası harika kokuyor.'],
    level: 'pre-intermediate',
    collocations: ['absolutely delicious', 'delicious food'],
    collocationMeanings: {
      'absolutely delicious': 'kesinlikle lezzetli',
      'delicious food': 'lezzetli yemek',
    },
  },
  {
    id: 'depend',
    word: 'depend',
    pos: 'verb',
    meaning: 'bağlı olmak, güvenmek',
    definition: 'To be influenced or determined by something.',
    ipa: '/dɪˈpend/',
    examples: ['It depends on the weather.', 'I depend on my parents.', 'Our trip depends on the price.'],
    exampleTranslations: ['Hava durumuna bağlı.', 'Aileme bağlıyım (onlara güveniyorum).', 'Gezimiz fiyata bağlı.'],
    level: 'pre-intermediate',
    collocations: ['depend on', 'entirely depend'],
    collocationMeanings: {
      'depend on': 'bir şeye bağlı olmak',
      'entirely depend': 'tamamen bağlı olmak',
    },
  },
  {
    id: 'disappointed',
    word: 'disappointed',
    pos: 'adjective',
    meaning: 'hayal kırıklığına uğramış',
    definition: 'Unhappy because someone or something was not as good as you hoped.',
    ipa: '/ˌdɪs.əˈpɔɪn.tɪd/',
    examples: ['I am disappointed with the result.', 'She was disappointed in him.', "Don't be disappointed."],
    exampleTranslations: ['Sonuçtan dolayı hayal kırıklığına uğradım.', 'Ondan yana hayal kırıklığı yaşadı.', 'Hayal kırıklığına uğrama.'],
    level: 'pre-intermediate',
    collocations: ['deeply disappointed', 'disappointed with'],
    collocationMeanings: {
      'deeply disappointed': 'derinden hayal kırıklığına uğramış',
      'disappointed with': 'bir şeyden dolayı hayal kırıklığına uğramış',
    },
  },
  {
    id: 'encourage',
    word: 'encourage',
    pos: 'verb',
    meaning: 'teşvik etmek, yüreklendirmek',
    definition: 'To help someone to feel confident and able to do something.',
    ipa: '/ɪnˈkʌr.ɪdʒ/',
    examples: ['My teacher encouraged me.', 'We encourage students to speak.', 'They encouraged him to apply.'],
    exampleTranslations: ['Öğretmenim beni yüreklendirdi.', 'Öğrencileri konuşmaya teşvik ediyoruz.', 'Onu başvurması için cesaretlendirdiler.'],
    level: 'pre-intermediate',
    collocations: ['encourage someone', 'strongly encourage'],
    collocationMeanings: {
      'encourage someone': 'birini teşvik etmek',
      'strongly encourage': 'şiddetle teşvik etmek',
    },
  },
  {
    id: 'equipment',
    word: 'equipment',
    pos: 'noun',
    meaning: 'ekipman, donanım',
    definition: 'The set of necessary tools or clothing for a particular purpose.',
    ipa: '/ɪˈquɪp.mənt/',
    examples: ['We need sports equipment.', 'Kitchen equipment is expensive.', 'They bought new camping equipment.'],
    exampleTranslations: ['Spor ekipmanına ihtiyacımız var.', 'Mutfak donanımı pahalıdır.', 'Yeni kamp malzemeleri satın aldılar.'],
    level: 'pre-intermediate',
    collocations: ['modern equipment', 'office equipment'],
    collocationMeanings: {
      'modern equipment': 'modern ekipman',
      'office equipment': 'ofis donanımı',
    },
  },
  {
    id: 'furniture',
    word: 'furniture',
    pos: 'noun',
    meaning: 'mobilya',
    definition: 'Things such as chairs, tables, beds in a house.',
    ipa: '/ˈfɜːrnɪtʃər/',
    examples: ['We bought some new furniture.', 'The room has very little furniture.', 'Is the furniture expensive?'],
    exampleTranslations: ['Bazı yeni mobilyalar aldık.', 'Odada çok az mobilya var.', 'Mobilyalar pahalı mı?'],
    level: 'pre-intermediate',
    collocations: ['piece of furniture', 'modern furniture'],
    collocationMeanings: {
      'piece of furniture': 'bir parça mobilya',
      'modern furniture': 'modern mobilya',
    },
  },
  {
    id: 'improve',
    word: 'improve',
    pos: 'verb',
    meaning: 'geliştirmek, iyileşmek',
    definition: 'To get better or to make something better.',
    ipa: '/ɪmˈpruːv/',
    examples: ['I want to improve my English.', 'The weather is improving.', 'His health has improved.'],
    exampleTranslations: ['İngilizcemi geliştirmek istiyorum.', 'Hava düzeliyor.', 'Sağlığı iyileşti.'],
    level: 'pre-intermediate',
    collocations: ['improve skills', 'dramatically improve'],
    collocationMeanings: {
      'improve skills': 'becerileri geliştirmek',
      'dramatically improve': 'önemli ölçüde iyileşmek/gelişmek',
    },
  },
  {
    id: 'necessary',
    word: 'necessary',
    pos: 'adjective',
    meaning: 'gerekli, zorunlu',
    definition: 'Needed in order to achieve something.',
    ipa: '/ˈnesəsəri/',
    examples: ['Is it necessary to wear a suit?', 'I will do whatever is necessary.', 'Food is necessary for life.'],
    exampleTranslations: ['Takım elbise giymek gerekli mi?', 'Gereken neyse yapacağım.', 'Gıda yaşam için gereklidir.'],
    level: 'pre-intermediate',
    collocations: ['absolutely necessary', 'if necessary'],
    collocationMeanings: {
      'absolutely necessary': 'kesinlikle gerekli',
      'if necessary': 'eğer gerekliyse',
    },
  },
  {
    id: 'opinion',
    word: 'opinion',
    pos: 'noun',
    meaning: 'fikir, görüş',
    definition: 'A thought or belief about something or someone.',
    ipa: '/əˈpɪnjən/',
    examples: ['What is your opinion of this book?', "In my opinion, it's too expensive.", 'Everyone has an opinion.'],
    exampleTranslations: ['Bu kitap hakkındaki fikrin nedir?', 'Bence, o çok pahalı.', 'Herkesin bir fikri vardır.'],
    level: 'pre-intermediate',
    collocations: ['in my opinion', 'public opinion'],
    collocationMeanings: {
      'in my opinion': 'bence / benim fikrime göre',
      'public opinion': 'kamuoyu görüşü',
    },
  },
  {
    id: 'patient',
    word: 'patient',
    pos: 'adjective',
    meaning: 'sabırlı',
    definition: 'Able to wait for a long time without becoming angry.',
    ipa: '/ˈpeɪʃnt/',
    examples: ['You need to be patient.', 'He is very patient with children.', "Just be patient, it's coming."],
    exampleTranslations: ['Sabırlı olmalısın.', 'Çocuklara karşı çok sabırlıdır.', 'Sadece sabırlı ol, geliyor.'],
    level: 'pre-intermediate',
    collocations: ['be patient', 'patient with'],
    collocationMeanings: {
      'be patient': 'sabırlı olmak',
      'patient with': 'birine karşı sabırlı',
    },
  },
  {
    id: 'suggest',
    word: 'suggest',
    pos: 'verb',
    meaning: 'önermek, tavsiye etmek',
    definition: 'To mention an idea or a plan for someone to think about.',
    ipa: '/səˈdʒest/',
    examples: ['I suggest going to the park.', 'What do you suggest?', 'He suggested a different route.'],
    exampleTranslations: ['Parka gitmeyi öneriyorum.', 'Ne önerirsin?', 'Farklı bir rota önerdi.'],
    level: 'pre-intermediate',
    collocations: ['suggest a solution', 'strongly suggest'],
    collocationMeanings: {
      'suggest a solution': 'bir çözüm önermek',
      'strongly suggest': 'şiddetle tavsiye etmek',
    },
  },
  {
    id: 'environment',
    word: 'environment',
    pos: 'noun',
    meaning: 'çevre',
    definition: 'The air, water, and land in or on which people live.',
    ipa: '/ɪnˈvaɪrənmənt/',
    examples: ['We must protect the environment.', 'Plastic is bad for the environment.', 'They live in a healthy environment.'],
    exampleTranslations: ['Çevreyi korumalıyız.', 'Plastik çevre için kötüdür.', 'Sağlıklı bir çevrede yaşıyorlar.'],
    level: 'pre-intermediate',
    collocations: ['protect the environment', 'natural environment'],
    collocationMeanings: {
      'protect the environment': 'çevreyi korumak',
      'natural environment': 'doğal çevre',
    },
  },
  {
    id: 'excellent',
    word: 'excellent',
    pos: 'adjective',
    meaning: 'mükemmel',
    definition: 'Extremely good or of very high quality.',
    ipa: '/ˈeksələnt/',
    examples: ['This is an excellent idea.', 'Your English is excellent.', 'The service was excellent.'],
    exampleTranslations: ['Bu mükemmel bir fikir.', 'İngilizcen mükemmel.', 'Hizmet mükemmeldi.'],
    level: 'pre-intermediate',
    collocations: ['excellent service', 'excellent quality'],
    collocationMeanings: {
      'excellent service': 'mükemmel hizmet',
      'excellent quality': 'mükemmel kalite',
    },
  },
  {
    id: 'imagine',
    word: 'imagine',
    pos: 'verb',
    meaning: 'hayal etmek',
    definition: 'To form a picture in your mind of something.',
    ipa: '/ɪˈmædʒɪn/',
    examples: ['Can you imagine living on Mars?', 'Imagine that you are rich.', "I can't imagine my life without you."],
    exampleTranslations: ['Mars’ta yaşadığını hayal edebiliyor musun?', 'Zengin olduğunu hayal et.', 'Sensiz bir hayatı hayal edemiyorum.'],
    level: 'pre-intermediate',
    collocations: ['imagine that', 'difficult to imagine'],
    collocationMeanings: {
      'imagine that': 'şöyle hayal et...',
      'difficult to imagine': 'hayal etmesi zor',
    },
  },
  {
    id: 'particular',
    word: 'particular',
    pos: 'adjective',
    meaning: 'belirli, özel',
    definition: 'Special, or this and not any other.',
    ipa: '/pəˈtɪkjələr/',
    examples: ['Is there a particular reason?', 'I like this particular model.', 'Nothing particular happened.'],
    exampleTranslations: ['Özel bir sebep var mı?', 'Özellikle bu modeli seviyorum.', 'Özel bir şey olmadı.'],
    level: 'pre-intermediate',
    collocations: ['in particular', 'particular reason'],
    collocationMeanings: {
      'in particular': 'özellikle',
      'particular reason': 'belirli/özel bir sebep',
    },
  },
  {
    id: 'prevent',
    word: 'prevent',
    pos: 'verb',
    meaning: 'önlemek, engel olmak',
    definition: 'To stop something from happening.',
    ipa: '/prɪˈvent/',
    examples: ['This law prevents accidents.', 'Nothing can prevent us.', 'Try to prevent the fire.'],
    exampleTranslations: ['Bu yasa kazaları önler.', 'Hiçbir şey bizi engelleyemez.', 'Yangını önlemeye çalış.'],
    level: 'pre-intermediate',
    collocations: ['prevent accidents', 'prevent crime'],
    collocationMeanings: {
      'prevent accidents': 'kazaları önlemek',
      'prevent crime': 'suçu önlemek',
    },
  },
  {
    id: 'serious',
    word: 'serious',
    pos: 'adjective',
    meaning: 'ciddi',
    definition: 'Not joking; thinking carefully; bad or dangerous.',
    ipa: '/ˈsɪəriəs/',
    examples: ['Are you serious?', 'This is a serious problem.', 'He is a very serious student.'],
    exampleTranslations: ['Ciddi misin?', 'Bu ciddi bir sorun.', 'O çok ciddi bir öğrencidir.'],
    level: 'pre-intermediate',
    collocations: ['serious problem', 'serious injury'],
    collocationMeanings: {
      'serious problem': 'ciddi bir problem',
      'serious injury': 'ciddi yaralanma',
    },
  },
  {
    id: 'urgent',
    word: 'urgent',
    pos: 'adjective',
    meaning: 'acil',
    definition: 'Needing attention very soon.',
    ipa: '/ˈɜːdʒənt/',
    examples: ['I have an urgent message for you.', 'This is an urgent matter.', 'Does he need urgent help?'],
    exampleTranslations: ['Sana acil bir mesajım var.', 'Bu acil bir mesele.', 'Acil yardıma ihtiyacı var mı?'],
    level: 'pre-intermediate',
    collocations: ['urgent matter', 'urgent need'],
    collocationMeanings: {
      'urgent matter': 'acil mesele',
      'urgent need': 'acil ihtiyaç',
    },
  },
  {
    id: 'rent',
    word: 'rent',
    pos: 'verb',
    meaning: 'kiralamak, kira',
    definition: 'To pay money to live in a building or use something for a period of time.',
    ipa: '/rent/',
    examples: ['We rent an apartment.', 'How much is the rent?', 'I want to rent a car for the weekend.'],
    exampleTranslations: ['Daire kiralıyoruz.', 'Kira ne kadar?', 'Hafta sonu için araba kiralamak istiyorum.'],
    level: 'pre-intermediate',
    collocations: ['pay rent', 'rent an apartment'],
    collocationMeanings: {
      'pay rent': 'kira ödemek',
      'rent an apartment': 'daire kiralamak',
    },
  },
  {
    id: 'repair',
    word: 'repair',
    pos: 'verb',
    meaning: 'tamir etmek, onarmak',
    definition: 'To fix something that is broken, damaged, or not working.',
    ipa: '/rɪˈpeər/',
    examples: ['Can you repair my watch?', 'The road is under repair.', 'He repairs computers.'],
    exampleTranslations: ['Saatimi tamir edebilir misin?', 'Yol yapım/onarım aşamasında.', 'Bilgisayarları tamir eder.'],
    level: 'pre-intermediate',
    collocations: ['repair a car', 'under repair'],
    collocationMeanings: {
      'repair a car': 'araba tamir etmek',
      'under repair': 'onarım aşamasında',
    },
  },
  {
    id: 'research',
    word: 'research',
    pos: 'noun',
    meaning: 'araştırma',
    definition: 'A detailed study of a subject, especially in order to discover new information.',
    ipa: '/rɪˈsɜːtʃ/',
    examples: ['I am doing research on animals.', 'We need more research.', 'Market research is important.'],
    exampleTranslations: ['Hayvanlar üzerine araştırma yapıyorum.', 'Daha fazla araştırmaya ihtiyacımız var.', 'Pazar araştırması önemlidir.'],
    level: 'pre-intermediate',
    collocations: ['do research', 'scientific research'],
    collocationMeanings: {
      'do research': 'araştırma yapmak',
      'scientific research': 'bilimsel araştırma',
    },
  },
  {
    id: 'responsible',
    word: 'responsible',
    pos: 'adjective',
    meaning: 'sorumlu',
    definition: 'To have control and authority over something or someone.',
    ipa: '/rɪˈspɒn.sə.bəl/',
    examples: ['Who is responsible for this?', 'I am responsible for marketing.', 'Be a responsible citizen.'],
    exampleTranslations: ['Bundan kim sorumlu?', 'Pazarlamadan ben sorumluyum.', 'Sorumlu bir vatandaş ol.'],
    level: 'pre-intermediate',
    collocations: ['responsible for', 'feel responsible'],
    collocationMeanings: {
      'responsible for': 'bir şeyden sorumlu',
      'feel responsible': 'sorumlu hissetmek',
    },
  },
  {
    id: 'satisfied',
    word: 'satisfied',
    pos: 'adjective',
    meaning: 'memnun, tatmin olmuş',
    definition: 'Pleased because you have got what you wanted.',
    ipa: '/ˈsæt.ɪs.faɪd/',
    examples: ['Are you satisfied with the service?', "I'm satisfied with the result.", 'She gave a satisfied smile.'],
    exampleTranslations: ['Hizmetten memnun kaldınız mı?', 'Sonuçtan memnunum.', 'Memnuniyet dolu bir gülümseme verdi.'],
    level: 'pre-intermediate',
    collocations: ['satisfied with', 'completely satisfied'],
    collocationMeanings: {
      'satisfied with': 'bir şeyden memnun kalmak',
      'completely satisfied': 'tamamen tatmin olmuş',
    },
  },
  {
    id: 'schedule_pre',
    word: 'schedule',
    pos: 'noun',
    meaning: 'program, takvim',
    definition: 'A list of planned activities or things to be done showing the times.',
    ipa: '/ˈʃedʒ.uːl/',
    examples: ['I have a busy schedule.', 'The train is on schedule.', "Let's check the flight schedule."],
    exampleTranslations: ['Yoğun bir programım var.', 'Tren tam vaktinde.', 'Hadi uçuş tarifesini kontrol edelim.'],
    level: 'pre-intermediate',
    collocations: ['tight schedule', 'on schedule'],
    collocationMeanings: {
      'tight schedule': 'yoğun program',
      'on schedule': 'vaktinde / programa uygun',
    },
  },
  {
    id: 'situation_pre',
    word: 'situation',
    pos: 'noun',
    meaning: 'durum, vaziyet',
    definition: 'The set of things that are happening and the conditions that exist at a particular time.',
    ipa: '/ˌsɪtʃ.uˈeɪ.ʃən/',
    examples: ['The situation is difficult.', 'Describe your current situation.', 'We are in a win-win situation.'],
    exampleTranslations: ['Durum zor.', 'Mevcut durumunu tarif et.', 'Her iki tarafın da kazandığı bir durumdayız.'],
    level: 'pre-intermediate',
    collocations: ['difficult situation', 'current situation'],
    collocationMeanings: {
      'difficult situation': 'zor bir durum',
      'current situation': 'mevcut durum',
    },
  },
  {
    id: 'success',
    word: 'success',
    pos: 'noun',
    meaning: 'başarı',
    definition: 'The achieving of the results wanted or hoped for.',
    ipa: '/səkˈses/',
    examples: ['Hard work leads to success.', 'The party was a big success.', 'I wish you every success.'],
    exampleTranslations: ['Sıkı çalışma başarıya götürür.', 'Parti büyük bir başarıydı.', 'Sana her konuda başarılar dilerim.'],
    level: 'pre-intermediate',
    collocations: ['achieve success', 'great success'],
    collocationMeanings: {
      'achieve success': 'başarıya ulaşmak',
      'great success': 'büyük başarı',
    },
  },
  {
    id: 'suitable_pre',
    word: 'suitable',
    pos: 'adjective',
    meaning: 'uygun',
    definition: 'Acceptable or right for someone or something.',
    ipa: '/ˈsuː.tə.bəl/',
    examples: ['This film is not suitable for kids.', 'Is this dress suitable for a wedding?', 'Find a suitable time to talk.'],
    exampleTranslations: ['Bu film çocuklar için uygun değil.', 'Bu elbise bir düğün için uygun mu?', 'Konuşmak için uygun bir zaman bul.'],
    level: 'pre-intermediate',
    collocations: ['suitable for', 'perfectly suitable'],
    collocationMeanings: {
      'suitable for': 'bir şey için uygun',
      'perfectly suitable': 'tamamen uygun',
    },
  },
  {
    id: 'valuable',
    word: 'valuable',
    pos: 'adjective',
    meaning: 'değerli',
    definition: 'Worth a lot of money or very important.',
    ipa: '/ˈvæl.ju.ə.bəl/',
    examples: ['This ring is very valuable.', 'Time is more valuable than money.', 'You gained valuable experience.'],
    exampleTranslations: ['Bu yüzük çok değerli.', 'Zaman paradan daha değerlidir.', 'Değerli bir deneyim kazandın.'],
    level: 'pre-intermediate',
    collocations: ['valuable lesson', 'extremely valuable'],
    collocationMeanings: {
      'valuable lesson': 'değerli bir ders',
      'extremely valuable': 'son derece değerli',
    },
  },
  {
    id: 'vehicle',
    word: 'vehicle',
    pos: 'noun',
    meaning: 'araç, taşıt',
    definition: 'A machine with an engine that is used for taking people or goods from one place to another.',
    ipa: '/ˈviː.ə.kəl/',
    examples: ['Please move your vehicle.', 'Electric vehicles are popular.', 'The road is closed to all vehicles.'],
    exampleTranslations: ['Lütfen aracınızı çekin.', 'Elektrikli araçlar popüler.', 'Yol tüm araçlara kapalı.'],
    level: 'pre-intermediate',
    collocations: ['motor vehicle', 'park a vehicle'],
    collocationMeanings: {
      'motor vehicle': 'motorlu araç',
      'park a vehicle': 'aracı park etmek',
    },
  },
  {
    id: 'volunteer',
    word: 'volunteer',
    pos: 'noun',
    meaning: 'gönüllü',
    definition: 'A person who does something willingly and without being forced or paid.',
    ipa: '/ˌvɒl.ənˈtɪər/',
    examples: ['I work as a volunteer.', 'We need more volunteers.', 'She volunteered to help them.'],
    exampleTranslations: ['Gönüllü olarak çalışıyorum.', 'Daha fazla gönüllüye ihtiyacımız var.', 'Onlara yardım etmek için gönüllü oldu.'],
    level: 'pre-intermediate',
    collocations: ['work as a volunteer', 'volunteer to help'],
    collocationMeanings: {
      'work as a volunteer': 'gönüllü olarak çalışmak',
      'volunteer to help': 'yardım etmek için gönüllü olmak',
    },
  },
  {
    id: 'waste_pre',
    word: 'waste',
    pos: 'verb',
    meaning: 'israf etmek, atık',
    definition: 'An unnecessary or wrong use of money, substances, time, energy, or abilities.',
    ipa: '/weɪst/',
    examples: ["Don't waste your time.", 'It was a waste of money.', 'We should reduce plastic waste.'],
    exampleTranslations: ['Zamanını boşa harcama.', 'O bir para israfıydı.', 'Plastik atıkları azaltmalıyız.'],
    level: 'pre-intermediate',
    collocations: ['waste of time', 'waste energy'],
    collocationMeanings: {
      'waste of time': 'zaman kaybı',
      'waste energy': 'enerjiyi boşa harcamak',
    },
  },
  {
    id: 'worth',
    word: 'worth',
    pos: 'adjective',
    meaning: 'değer, değmek',
    definition: 'Having a particular value, especially in money.',
    ipa: '/wɜːθ/',
    examples: ['This painting is worth millions.', 'It is worth a try.', 'The movie is worth watching.'],
    exampleTranslations: ['Bu tablo milyonlar eder.', 'Denemeye değer.', 'Film izlemeye değer.'],
    level: 'pre-intermediate',
    collocations: ['worth seeing', 'well worth'],
    collocationMeanings: {
      'worth seeing': 'görülmeye değer',
      'well worth': 'tamamen değer / kesinlikle değer',
    },
  },
  {
    id: 'confident_pre',
    word: 'confident',
    pos: 'adjective',
    meaning: 'kendinden emin, özgüvenli',
    definition: 'Being certain of your abilities or having trust in people.',
    ipa: '/ˈkɒn.fɪ.dənt/',
    examples: ['I feel confident about the test.', 'She is a confident speaker.', 'Be more confident in yourself.'],
    exampleTranslations: ['Test konusunda kendimden emin hissediyorum.', 'O, özgüvenli bir konuşmacıdır.', 'Kendine daha fazla güven.'],
    level: 'pre-intermediate',
    collocations: ['feel confident', 'confident about'],
    collocationMeanings: {
      'feel confident': 'kendinden emin hissetmek',
      'confident about': 'bir konuda özgüvenli',
    },
  },
  {
    id: 'consider',
    word: 'consider',
    pos: 'verb',
    meaning: 'düşünmek, dikkate almak',
    definition: 'To spend time thinking about a possibility or making a decision.',
    ipa: '/kənˈɪd.ər/',
    examples: ['We are considering your offer.', 'Please consider my feelings.', 'He is considering a job change.'],
    exampleTranslations: ['Teklifinizi değerlendiriyoruz.', 'Lütfen duygularımı dikkate al.', 'İş değişikliği yapmayı düşünüyor.'],
    level: 'pre-intermediate',
    collocations: ['consider an offer', 'carefully consider'],
    collocationMeanings: {
      'consider an offer': 'bir teklifi değerlendirmek',
      'carefully consider': 'dikkatlice düşünmek',
    },
  },
  {
    id: 'accept',
    word: 'accept',
    pos: 'verb',
    meaning: 'kabul etmek',
    definition: 'To say yes to an offer or invitation.',
    ipa: '/əkˈsept/',
    examples: ['I accepted their invitation.', "She didn't accept the job.", 'Will you accept my apology?'],
    exampleTranslations: ['Davetlerini kabul ettim.', 'İşi kabul etmedi.', 'Özrümü kabul eder misin?'],
    level: 'pre-intermediate',
    collocations: ['accept an offer', 'accept an invitation'],
    collocationMeanings: {
      'accept an offer': 'teklifi kabul etmek',
      'accept an invitation': 'daveti kabul etmek',
    },
  },
  {
    id: 'adventure',
    word: 'adventure',
    pos: 'noun',
    meaning: 'macera',
    definition: 'An exciting and sometimes dangerous experience.',
    ipa: '/ədˈven.tʃər/',
    examples: ['Our trip was a real adventure.', 'He loves reading adventure stories.', 'We are looking for adventure.'],
    exampleTranslations: ['Gezimiz gerçek bir maceraydı.', 'Macera hikayeleri okumayı sever.', 'Macera arıyoruz.'],
    level: 'pre-intermediate',
    collocations: ['sense of adventure', 'exciting adventure'],
    collocationMeanings: {
      'sense of adventure': 'macera duygusu',
      'exciting adventure': 'heyecan verici macera',
    },
  },
  {
    id: 'agree',
    word: 'agree',
    pos: 'verb',
    meaning: 'aynı fikirde olmak, kabul etmek',
    definition: 'To have the same opinion as someone else.',
    ipa: '/əˈɡriː/',
    examples: ['I agree with you completely.', "We couldn't agree on a date.", 'They agreed to help us.'],
    exampleTranslations: ['Sana tamamen katılıyorum.', 'Bir tarih üzerinde anlaşamadık.', 'Bize yardım etmeyi kabul ettiler.'],
    level: 'pre-intermediate',
    collocations: ['agree with someone', 'agree on something'],
    collocationMeanings: {
      'agree with someone': 'birine katılmak / aynı fikirde olmak',
      'agree on something': 'bir konu üzerinde anlaşmak',
    },
  },
  {
    id: 'celebrate',
    word: 'celebrate',
    pos: 'verb',
    meaning: 'kutlamak',
    definition: 'To do something enjoyable for a special occasion.',
    ipa: '/ˈsel.ə.breɪt/',
    examples: ['We are celebrating his birthday.', 'How do you celebrate New Year?', 'They celebrated their victory.'],
    exampleTranslations: ['Onun doğum gününü kutluyoruz.', 'Yeni yılı nasıl kutlarsın?', 'Zaferlerini kutladılar.'],
    level: 'pre-intermediate',
    collocations: ['celebrate a birthday', 'celebrate success'],
    collocationMeanings: {
      'celebrate a birthday': 'doğum günü kutlamak',
      'celebrate success': 'başarıyı kutlamak',
    },
  },
  {
    id: 'education',
    word: 'education',
    pos: 'noun',
    meaning: 'eğitim',
    definition: 'The process of teaching or learning, especially in a school or college.',
    ipa: '/ˌedʒ.ʊˈkeɪ.ʃən/',
    examples: ['Education is very important.', 'She wants a better education.', 'He finished his education in 2020.'],
    exampleTranslations: ['Eğitim çok önemlidir.', 'Daha iyi bir eğitim istiyor.', 'Eğitimini 2020 yılında bitirdi.'],
    level: 'pre-intermediate',
    collocations: ['higher education', 'receive an education'],
    collocationMeanings: {
      'higher education': 'yüksek öğrenim',
      'receive an education': 'eğitim almak',
    },
  },
  {
    id: 'knowledge',
    word: 'knowledge',
    pos: 'noun',
    meaning: 'bilgi',
    definition: 'Information and understanding that you have in your mind.',
    ipa: '/ˈnɒlɪdʒ/',
    examples: ['He has a lot of knowledge about cars.', 'Knowledge is power.', 'She has no knowledge of the event.'],
    exampleTranslations: ['Arabalar hakkında çok bilgisi var.', 'Bilgi güçtür.', 'Olaydan haberi yok.'],
    level: 'pre-intermediate',
    collocations: ['gain knowledge', 'basic knowledge'],
    collocationMeanings: {
      'gain knowledge': 'bilgi edinmek',
      'basic knowledge': 'temel bilgi',
    },
  },
  {
    id: 'manage',
    word: 'manage',
    pos: 'verb',
    meaning: 'yönetmek, başarmak',
    definition: 'To succeed in doing or dealing with something difficult.',
    ipa: '/ˈmænɪdʒ/',
    examples: ['Did you manage to finish it?', 'I can manage by myself.', 'He manages a large team.'],
    exampleTranslations: ['Bitirmeyi başarabildin mi?', 'Kendi başıma idare edebilirim.', 'Büyük bir ekibi yönetiyor.'],
    level: 'pre-intermediate',
    collocations: ['manage to do', 'manage a team'],
    collocationMeanings: {
      'manage to do': 'yapmayı başarmak',
      'manage a team': 'bir takımı yönetmek',
    },
  },
  {
    id: 'permission',
    word: 'permission',
    pos: 'noun',
    meaning: 'izin',
    definition: 'If you have permission, you are allowed to do something.',
    ipa: '/pəˈmɪʃn/',
    examples: ['You need permission to go out.', 'He gave me permission to park here.', 'Did you ask for permission?'],
    exampleTranslations: ['Dışarı çıkmak için izne ihtiyacın var.', 'Buraya park etmem için bana izin verdi.', 'İzin istedin mi?'],
    level: 'pre-intermediate',
    collocations: ['ask for permission', 'grant permission'],
    collocationMeanings: {
      'ask for permission': 'izin istemek',
      'grant permission': 'izin vermek',
    },
  },
  {
    id: 'prepare',
    word: 'prepare',
    pos: 'verb',
    meaning: 'hazırlamak',
    definition: 'To make something or someone ready.',
    ipa: '/prɪˈpeər/',
    examples: ['I need to prepare for my exam.', 'She is preparing dinner.', 'Prepare yourself for the news.'],
    exampleTranslations: ['Sınavıma hazırlanmam gerekiyor.', 'Akşam yemeğini hazırlıyor.', 'Kendini habere hazırla.'],
    level: 'pre-intermediate',
    collocations: ['prepare for', 'prepare dinner'],
    collocationMeanings: {
      'prepare for': 'bir şeye hazırlanmak',
      'prepare dinner': 'akşam yemeği hazırlamak',
    },
  },
  {
    id: 'receive',
    word: 'receive',
    pos: 'verb',
    meaning: 'teslim almak, almak',
    definition: 'To get or be given something.',
    ipa: '/rɪˈsiːv/',
    examples: ['I received a letter today.', 'Did you receive my email?', 'She received an award.'],
    exampleTranslations: ['Bugün bir mektup aldım.', 'E-postamı aldın mı?', 'Bir ödül aldı.'],
    level: 'pre-intermediate',
    collocations: ['receive a gift', 'receive an email'],
    collocationMeanings: {
      'receive a gift': 'hediye almak',
      'receive an email': 'e-posta almak',
    },
  },
  {
    id: 'reduce_pre',
    word: 'reduce',
    pos: 'verb',
    meaning: 'azaltmak',
    definition: 'To make something smaller in size, amount, degree, etc.',
    ipa: '/rɪˈdjuːs/',
    examples: ['We need to reduce the price.', 'Try to reduce your stress.', 'The shop reduced its prices.'],
    exampleTranslations: ['Fiyatı düşürmemiz gerekiyor.', 'Stresini azaltmaya çalış.', 'Mağaza fiyatlarını indirdi.'],
    level: 'pre-intermediate',
    collocations: ['reduce cost', 'reduce stress'],
    collocationMeanings: {
      'reduce cost': 'maliyeti azaltmak',
      'reduce stress': 'stresi azaltmak',
    },
  },
  {
    id: 'remember',
    word: 'remember',
    pos: 'verb',
    meaning: 'hatırlamak',
    definition: 'To be able to bring back a piece of information into your mind.',
    ipa: '/rɪˈmembər/',
    examples: ["I don't remember his name.", 'Do you remember me?', 'Remember to lock the door.'],
    exampleTranslations: ['Onun adını hatırlamıyorum.', 'Beni hatırlıyor musun?', 'Kapıyı kilitlemeyi hatırla (unutma).'],
    level: 'pre-intermediate',
    collocations: ['remember to', 'clearly remember'],
    collocationMeanings: {
      'remember to': '... yapmayı hatırlamak',
      'clearly remember': 'net bir şekilde hatırlamak',
    },
  },
  {
    id: 'error',
    word: 'error',
    pos: 'noun',
    meaning: 'hata',
    definition: 'A mistake, especially one that causes problems.',
    ipa: '/ˈerər/',
    examples: ['There is an error in the system.', 'It was a human error.', 'Please correct the errors.'],
    exampleTranslations: ['Sistemde bir hata var.', 'Bu bir insan hatasıydı.', 'Lütfen hataları düzeltin.'],
    level: 'pre-intermediate',
    collocations: ['system error', 'human error'],
    collocationMeanings: {
      'system error': 'sistem hatası',
      'human error': 'insan hatası',
    },
  },
  {
    id: 'creative',
    word: 'creative',
    pos: 'adjective',
    meaning: 'yaratıcı',
    definition: 'Producing or using original and unusual ideas.',
    ipa: '/kriˈeɪtɪv/',
    examples: ['She is a very creative person.', 'We need creative solutions.', 'Children are naturally creative.'],
    exampleTranslations: ['O çok yaratıcı bir insandır.', 'Yaratıcı çözümlere ihtiyacımız var.', 'Çocuklar doğuştan yaratıcıdır.'],
    level: 'pre-intermediate',
    collocations: ['creative thinking', 'creative process'],
    collocationMeanings: {
      'creative thinking': 'yaratıcı düşünme',
      'creative process': 'yaratıcı süreç',
    },
  },
  {
    id: 'deadline',
    word: 'deadline',
    pos: 'noun',
    meaning: 'son teslim tarihi',
    definition: 'A time or day by which something must be done.',
    ipa: '/ˈdedlaɪn/',
    examples: ['The deadline is tomorrow.', 'I missed the deadline.', 'We must meet the deadline.'],
    exampleTranslations: ['Son teslim tarihi yarın.', 'Son teslim tarihini kaçırdım.', 'Son tarihe yetişmeliyiz.'],
    level: 'pre-intermediate',
    collocations: ['meet a deadline', 'tight deadline'],
    collocationMeanings: {
      'meet a deadline': 'son tarihe yetişmek / teslim etmek',
      'tight deadline': 'kısıtlı zaman / sıkışık takvim',
    },
  },
  {
    id: 'accomplish',
    word: 'accomplish',
    pos: 'verb',
    meaning: 'başarmak, tamamlamak',
    definition: 'to succeed in doing or completing something, especially something that requires effort',
    ipa: '/əˈkʌm.plɪʃ/',
    examples: [
      'She accomplished her goal of running a marathon.',
      'We need to accomplish this task before Friday.',
      'He felt proud of what he had accomplished.',
    ],
    exampleTranslations: [
      'Maraton koşma hedefini gerçekleştirdi/başardı.',
      'Bu görevi Cuma gününden önce tamamlamamız gerekiyor.',
      'Başardığı şeyden gurur duydu.',
    ],
    level: 'pre-intermediate',
    usageNotes: 'Often used with goals, tasks, or missions. More formal than "finish" or "complete".',
    collocations: ['accomplish a goal', 'accomplish a task', 'accomplish a mission'],
    collocationMeanings: {
      'accomplish a goal': 'hedefe ulaşmak',
      'accomplish a task': 'bir görevi tamamlamak',
      'accomplish a mission': 'görevi yerine getirmek',
    },
  },
  {
    id: 'apparent',
    word: 'apparent',
    pos: 'adjective',
    meaning: 'bariz, aşikar',
    definition: 'easy to see or understand; obvious',
    ipa: '/əˈpær.ənt/',
    examples: [
      'It was apparent that she was unhappy.',
      'The difference between them is quite apparent.',
      'For no apparent reason, he started laughing.',
    ],
    exampleTranslations: [
      'Mutsuz olduğu belliydi/aşikardı.',
      'Aralarındaki fark oldukça bariz.',
      'Görünürde hiçbir sebep yokken gülmeye başladı.',
    ],
    level: 'pre-intermediate',
    usageNotes: 'Can also mean "seeming" (appearing to be true but possibly not). Context determines meaning.',
    collocations: ['become apparent', 'immediately apparent', 'no apparent reason'],
    collocationMeanings: {
      'become apparent': 'açığa çıkmak / belli olmak',
      'immediately apparent': 'anında anlaşılan / bariz',
      'no apparent reason': 'görünürde bir sebep yokken',
    },
  },
  {
    id: 'capable',
    word: 'capable',
    pos: 'adjective',
    meaning: 'yetenekli, yapabilen',
    definition: 'having the ability or qualities necessary to do something',
    ipa: '/ˈkeɪ.pə.bəl/',
    examples: [
      'She is capable of handling difficult situations.',
      'He proved himself capable of leading the team.',
      'The device is capable of processing large amounts of data.',
    ],
    exampleTranslations: [
      'Zor durumların üstesinden gelebilecek kapasitede.',
      'Ekibi yönetebileceğini kanıtladı.',
      'Cihaz büyük miktardaki veriyi işleme kapasitesine sahip.',
    ],
    level: 'pre-intermediate',
    usageNotes: 'Usually followed by "of + -ing" form. Describes potential ability.',
    collocations: ['capable of', 'highly capable', 'perfectly capable'],
    collocationMeanings: {
      'capable of': '... yapabilme yeteneğine sahip',
      'highly capable': 'üstün yetenekli / çok becerikli',
      'perfectly capable': 'tamamen muktedir / gayet becerikli',
    },
  },

  // --- INTERMEDIATE (B1) ---
  {
    id: 'accent',
    word: 'Accent',
    pos: 'noun',
    meaning: 'aksan, şive',
    definition: 'A way of saying words that shows what country, region, or social class someone comes from.',
    ipa: '/ˈæk.sent/',
    examples: ['Tom hasn’t lost his Irish accent.'],
    exampleTranslations: ['Tom İrlanda aksanını kaybetmedi.'],
    level: 'intermediate',
    collocations: ['heavy accent', 'foreign accent', 'slight accent'],
    collocationMeanings: {
      'heavy accent': 'ağır aksan',
      'foreign accent': 'yabancı aksan',
      'slight accent': 'hafif aksan',
    },
  },
  {
    id: 'accurately',
    word: 'Accurately',
    pos: 'adverb',
    meaning: 'doğru bir şekilde, tam olarak',
    definition: 'In a way that is correct or true in every detail.',
    ipa: '/ˈæk.jə.rət.li/',
    examples: ['Have I described the situation accurately?'],
    exampleTranslations: ['Durumu doğru bir şekilde tarif ettim mi?'],
    level: 'intermediate',
    collocations: ['accurately reflect', 'describe accurately', 'predict accurately'],
    collocationMeanings: {
      'accurately reflect': 'doğru şekilde yansıtmak',
      'describe accurately': 'tam olarak tarif etmek',
      'accurately predict': 'isabetli tahmin etmek',
    },
  },
  {
    id: 'action_point',
    word: 'Action point',
    pos: 'noun',
    meaning: 'eylem noktası, yapılacak iş',
    definition: "A small thing that you're going to do.",
    ipa: '/ˈæk.ʃən pɔɪnt/',
    examples: ["Let's move to the second action point."],
    exampleTranslations: ['İkinci eylem noktasına geçelim.'],
    level: 'intermediate',
    collocations: ['agree on action points', 'list of action points', 'key action point'],
    collocationMeanings: {
      'agree on action points': 'eylem planları üzerinde anlaşmak',
      'list of action points': 'yapılacaklar listesi',
      'key action point': 'temel eylem noktası',
    },
  },
  {
    id: 'active',
    word: 'Active',
    pos: 'adjective',
    meaning: 'aktif, faal',
    definition: 'Someone who is active does a lot of different activities and has a lot of energy and interests.',
    ipa: '/ˈæk.tɪv/',
    examples: ['People are remaining active into later life.'],
    exampleTranslations: ['İnsanlar ileri yaşlarda da aktif kalmaya devam ediyor.'],
    level: 'intermediate',
    collocations: ['physically active', 'active role', 'active lifestyle'],
    collocationMeanings: {
      'physically active': 'fiziksel olarak aktif',
      'active role': 'aktif rol',
      'active lifestyle': 'hareketli yaşam tarzı',
    },
  },
  {
    id: 'admit',
    word: 'Admit',
    pos: 'verb',
    meaning: 'itiraf etmek, kabul etmek',
    definition: 'To agree that something is true, especially when you are unhappy, sorry, or surprised about it.',
    ipa: '/ədˈmɪt/',
    examples: ["'I can't sing at all,' he admitted."],
    exampleTranslations: ["'Hiç şarkı söyleyemem,' diye itiraf etti."],
    level: 'intermediate',
    collocations: ['admit defeat', 'admit a mistake', 'freely admit'],
    collocationMeanings: {
      'admit defeat': 'yenilgiyi kabul etmek',
      'admit a mistake': 'hatayı kabul etmek',
      'freely admit': 'açıkça itiraf etmek',
    },
  },
  {
    id: 'advise',
    word: 'Advise',
    pos: 'verb',
    meaning: 'tavsiye vermek, öğütlemek',
    definition: 'To give your opinion to someone about the best thing to do in a particular situation.',
    ipa: '/ədˈvaɪz/',
    examples: ["I'm afraid I'm not able to advise you."],
    exampleTranslations: ['Korkarım size tavsiye verecek durumda değilim.'],
    level: 'intermediate',
    collocations: ['strongly advise', 'advise against', 'seek advice'],
    collocationMeanings: {
      'strongly advise': 'şiddetle tavsiye etmek',
      'advise against': 'yapmamasını tavsiye etmek',
      'seek advice': 'tavsiye aramak',
    },
  },
  {
    id: 'advertising_campaign',
    word: 'Advertising campaign',
    pos: 'noun',
    meaning: 'reklam kampanyası',
    definition: 'A series of things done to persuade people to buy a product or use a service.',
    ipa: '/ˈæd.və.taɪ.zɪŋ kæmˈpeɪn/',
    examples: ['The new advertising campaign is very effective.'],
    exampleTranslations: ['Yeni reklam kampanyası çok etkili.'],
    level: 'intermediate',
    collocations: ['launch a campaign', 'run a campaign', 'effective campaign'],
    collocationMeanings: {
      'launch a campaign': 'kampanya başlatmak',
      'run a campaign': 'kampanya yürütmek',
      'effective campaign': 'etkili kampanya',
    },
  },
  {
    id: 'affect',
    word: 'Affect',
    pos: 'verb',
    meaning: 'etkilemek',
    definition: 'To change or influence something.',
    ipa: '/əˈfekt/',
    examples: ['It is known that poor grades can affect university entrance.'],
    exampleTranslations: ['Düşük notların üniversite girişini etkileyebileceği biliniyor.'],
    level: 'intermediate',
    collocations: ['directly affect', 'badly affect', 'affect the outcome'],
    collocationMeanings: {
      'directly affect': 'doğrudan etkilemek',
      'badly affect': 'kötü etkilemek',
      'affect the outcome': 'sonucu etkilemek',
    },
  },
  {
    id: 'agreement',
    word: 'Agreement',
    pos: 'noun',
    meaning: 'anlaşma, mutabakat',
    definition: 'An arrangement or decision about what to do, made by two or more people.',
    ipa: '/əˈɡriː.mənt/',
    examples: ['Our agreement was that you would pay by the first of the month.'],
    exampleTranslations: ['Anlaşmamız, ödemeyi ayın birine kadar yapacağınız yönündeydi.'],
    level: 'intermediate',
    collocations: ['reach an agreement', 'sign an agreement', 'mutual agreement'],
    collocationMeanings: {
      'reach an agreement': 'anlaşmaya varmak',
      'sign an agreement': 'anlaşma imzalamak',
      'mutual agreement': 'karşılıklı anlaşma',
    },
  },
  {
    id: 'all_in_the_mind',
    word: 'All in the mind',
    pos: 'idiom',
    meaning: 'hepsi kafada bitiyor, kuruntu',
    definition: 'Used for saying that something is not real and is just being imagined.',
    ipa: '/ɔːl ɪn ðə maɪnd/',
    examples: ["He's not really ill; it's all in the mind."],
    exampleTranslations: ['O gerçekten hasta değil; her şey zihninde (kuruntu).'],
    level: 'intermediate',
    collocations: ['strictly in the mind', 'entirely in the mind'],
    collocationMeanings: {
      'strictly in the mind': 'tamamen zihinde olan',
      'entirely in the mind': 'tamamıyla kuruntu',
    },
  },
  {
    id: 'allow',
    word: 'Allow',
    pos: 'verb',
    meaning: 'izin vermek',
    definition: 'To give someone permission to do or have something.',
    ipa: '/əˈlaʊ/',
    examples: ["I'm sorry, sir, but smoking is not allowed."],
    exampleTranslations: ['Üzgünüm efendim, ancak sigara içilmesine izin verilmiyor.'],
    level: 'intermediate',
    collocations: ['allow to do', 'freely allow', 'legally allowed'],
    collocationMeanings: {
      'allow to do': 'yapmasına izin vermek',
      'freely allow': 'serbestçe izin vermek',
      'legally allowed': 'yasal olarak izinli',
    },
  },
  {
    id: 'anxious_b1',
    word: 'Anxious',
    pos: 'adjective',
    meaning: 'endişeli, kaygılı',
    definition: 'Worried because you think something bad might happen.',
    ipa: '/ˈæŋk.ʃəs/',
    examples: ['His silence made me anxious.'],
    exampleTranslations: ['Onun sessizliği beni endişelendirdi.'],
    level: 'intermediate',
    collocations: ['anxious about', 'feel anxious', 'growing anxious'],
    collocationMeanings: {
      'anxious about': 'bir şey hakkında endişeli',
      'feel anxious': 'kaygılı hissetmek',
      'growing anxious': 'endişesi artmak',
    },
  },
  {
    id: 'assume',
    word: 'Assume',
    pos: 'verb',
    meaning: 'varsaymak, farz etmek',
    definition: 'To believe that something is true, even though no one has told you or even though you have no proof.',
    ipa: '/əˈsjuːm/',
    examples: ["You can't assume that because he's good at this job he will know everything."],
    exampleTranslations: ['Bu işte iyi olduğu için her şeyi bileceğini varsayamazsın.'],
    level: 'intermediate',
    collocations: ['automatically assume', 'reasonable to assume', 'wrongly assume'],
    collocationMeanings: {
      'automatically assume': 'kendiliğinden varsaymak',
      'reasonable to assume': 'varsaymak mantıklı',
      'wrongly assume': 'yanlış bir şekilde varsaymak',
    },
  },
  {
    id: 'attract',
    word: 'Attract',
    pos: 'verb',
    meaning: 'çekmek, cezbetmek',
    definition: 'To make someone interested in something so that they do it or come to see or hear it.',
    ipa: '/əˈtrækt/',
    examples: ['The show attracts viewers from all walks of life.'],
    exampleTranslations: ['Program hayatın her kesiminden izleyici çekiyor.'],
    level: 'intermediate',
    collocations: ['attract attention', 'attract interest', 'attract customers'],
    collocationMeanings: {
      'attract attention': 'dikkat çekmek',
      'attract interest': 'ilgi çekmek',
      'attract customers': 'müşteri çekmek',
    },
  },
  {
    id: 'attract_new_customers',
    word: 'Attract new customers',
    pos: 'phrase',
    meaning: 'yeni müşteriler çekmek',
    definition: 'Make people interested in a product or idea.',
    ipa: '/əˈtrækt njuː ˈkʌs.tə.mərz/',
    examples: ['The social media campaign will hopefully attract new customers.'],
    exampleTranslations: ['Sosyal medya kampanyası umarız yeni müşteriler çekecektir.'],
    level: 'intermediate',
    collocations: ['strategy to attract', 'aim to attract'],
    collocationMeanings: {
      'strategy to attract': 'çekme stratejisi',
      'aim to attract': 'çekmeyi hedeflemek',
    },
  },
  {
    id: 'attract_new_investors',
    word: 'Attract new investors',
    pos: 'phrase',
    meaning: 'yeni yatırımcılar çekmek',
    definition: 'Make people interested in a product or idea so they will invest money in it.',
    ipa: '/əˈtrækt njuː ɪnˈves.tərz/',
    examples: ['We are attending conferences to attract new investors.'],
    exampleTranslations: ['Yeni yatırımcılar çekmek için konferanslara katılıyoruz.'],
    level: 'intermediate',
    collocations: ['struggle to attract', 'need to attract'],
    collocationMeanings: {
      'struggle to attract': 'çekmekte zorlanmak',
      'need to attract': 'çekmeye ihtiyaç duymak',
    },
  },
  {
    id: 'audience_b1',
    word: 'Audience',
    pos: 'noun',
    meaning: 'seyirci, izleyici kitlesi',
    definition: 'A group of people who have come to a place to see or hear a film, performance, speech etc.',
    ipa: '/ˈɔː.di.əns/',
    examples: ['She would be addressing an audience of three thousand teachers.'],
    exampleTranslations: ['Üç bin öğretmenden oluşan bir kitleye hitap edecekti.'],
    level: 'intermediate',
    collocations: ['target audience', 'wide audience', 'live audience'],
    collocationMeanings: {
      'target audience': 'hedef kitle',
      'wide audience': 'geniş kitle',
      'live audience': 'canlı seyirci',
    },
  },
  {
    id: 'aware_of',
    word: 'Aware of',
    pos: 'adjective',
    meaning: 'farkında olmak',
    definition: 'Knowing about a situation or a fact.',
    ipa: '/əˈweər əv/',
    examples: ['We are aware of this problem.'],
    exampleTranslations: ['Bu sorunun farkındayız.'],
    level: 'intermediate',
    collocations: ['fully aware', 'well aware', 'become aware'],
    collocationMeanings: {
      'fully aware': 'tamamen farkında',
      'well aware': 'gayet iyi farkında',
      'become aware': 'farkına varmak',
    },
  },
  {
    id: 'awful',
    word: 'Awful',
    pos: 'adjective',
    meaning: 'berbat, çok kötü',
    definition: 'Used for emphasizing how unpleasant someone or something is.',
    ipa: '/ˈɔː.fəl/',
    examples: ['This wine tastes awful.'],
    exampleTranslations: ['Bu şarabın tadı berbat.'],
    level: 'intermediate',
    collocations: ['awful lot', 'feel awful', 'smell awful'],
    collocationMeanings: {
      'awful lot': 'çok fazla (miktar)',
      'feel awful': 'berbat hissetmek',
      'smell awful': 'berbat kokmak',
    },
  },
  {
    id: 'be_reliable',
    word: 'Be reliable',
    pos: 'phrase',
    meaning: 'güvenilir olmak',
    definition: 'To be someone who you can trust to behave well, work hard, or do what you expect them to do.',
    ipa: '/bi rɪˈlaɪ.ə.bəl/',
    examples: ['Hannah is very reliable.'],
    exampleTranslations: ['Hannah çok güvenilirdir.'],
    level: 'intermediate',
    collocations: ['prove reliable', 'highly reliable', 'totally reliable'],
    collocationMeanings: {
      'prove reliable': 'güvenilir olduğunu kanıtlamak',
      'highly reliable': 'oldukça güvenilir',
      'totally reliable': 'tamamen güvenilir',
    },
  },
  {
    id: 'be_your_thing',
    word: 'Be your thing',
    pos: 'idiom',
    meaning: 'senin olayın olmak, ilgi alanın olmak',
    definition: 'Something that you are good at and/or like doing.',
    ipa: '/bi jɔːr θɪŋ/',
    examples: ["I'm afraid baking is not my thing."],
    exampleTranslations: ['Korkarım fırın işleri (pasta/börek yapma) pek bana göre değil.'],
    level: 'intermediate',
    collocations: ['not really my thing', 'is it your thing?'],
    collocationMeanings: {
      'not really my thing': 'pek bana göre değil',
      'is it your thing?': 'bu senin ilgin çekiyor mu?',
    },
  },
  {
    id: 'bear_in_mind',
    word: 'Bear in mind',
    pos: 'idiom',
    meaning: 'aklında bulundurmak, unutmamak',
    definition: 'Reminding or warning a person about something important which they should remember.',
    ipa: '/beər ɪn maɪnd/',
    examples: ['Bear in mind that the deadline is approaching.'],
    exampleTranslations: ['Son teslim tarihinin yaklaştığını aklında bulundur.'],
    level: 'intermediate',
    collocations: ['bear in mind that', 'important to bear in mind'],
    collocationMeanings: {
      'bear in mind that': 'şunu aklında tut ki',
      'important to bear in mind': 'akılda tutulması önemli',
    },
  },
  {
    id: 'bilingual',
    word: 'Bilingual',
    pos: 'adjective',
    meaning: 'iki dilli',
    definition: 'Someone who is bilingual is able to speak two languages extremely well.',
    ipa: '/baɪˈlɪŋ.ɡwəl/',
    examples: ['She speaks French and Spanish so she is bilingual.'],
    exampleTranslations: ['Fransızca ve İspanyolca konuşuyor, bu yüzden iki dilli.'],
    level: 'intermediate',
    collocations: ['bilingual education', 'totally bilingual', 'bilingual dictionary'],
    collocationMeanings: {
      'bilingual education': 'iki dilli eğitim',
      'totally bilingual': 'tamamen iki dilli',
      'bilingual dictionary': 'iki dilli sözlük',
    },
  },
  {
    id: 'bin',
    word: 'Bin',
    pos: 'noun',
    meaning: 'çöp kutusu',
    definition: 'A container for putting rubbish in.',
    ipa: '/bɪn/',
    examples: ["It's time you threw those shoes in the bin."],
    exampleTranslations: ['O ayakkabıları çöpe atma vaktin geldi.'],
    level: 'intermediate',
    collocations: ['rubbish bin', 'recycle bin', 'throw in the bin'],
    collocationMeanings: {
      'rubbish bin': 'çöp tenekesi',
      'recycle bin': 'geri dönüşüm kutusu',
      'throw in the bin': 'çöpe fırlatmak',
    },
  },
  {
    id: 'blame_yourself',
    word: 'Blame yourself',
    pos: 'phrase',
    meaning: 'kendini suçlamak',
    definition: 'To say or think that you are responsible for an accident, problem, or bad situation.',
    ipa: '/bleɪm jɔːˈself/',
    examples: ["If it all goes wrong, don't blame yourself."],
    exampleTranslations: ['Eğer her şey ters giderse, kendini suçlama.'],
    level: 'intermediate',
    collocations: ['only have yourself to blame', 'no need to blame yourself'],
    collocationMeanings: {
      'only have yourself to blame': 'sadece kendini suçlayabilirsin',
      'no need to blame yourself': 'kendini suçlamana gerek yok',
    },
  },
  {
    id: 'block_your_creativity',
    word: 'Block your creativity',
    pos: 'phrase',
    meaning: 'yaratıcılığını engellemek/tıkamak',
    definition: 'Something stops creative thoughts.',
    ipa: '/blɒk jɔːr ˌkriː.eɪˈtɪv.ə.ti/',
    examples: ['Writing in the same space every day may block your creativity.'],
    exampleTranslations: ['Her gün aynı yerde yazmak yaratıcılığınızı engelleyebilir.'],
    level: 'intermediate',
    collocations: ['mental block', 'factors that block creativity'],
    collocationMeanings: {
      'mental block': 'zihinsel tıkanıklık',
      'factors that block creativity': 'yaratıcılığı engelleyen faktörler',
    },
  },
  {
    id: 'boost_your_creativity',
    word: 'Boost your creativity',
    pos: 'phrase',
    meaning: 'yaratıcılığını artırmak',
    definition: 'Something helps creative thoughts.',
    ipa: '/buːst jɔːr ˌkriː.eɪˈtɪv.ə.ti/',
    examples: ['Being outdoors may boost your creativity.'],
    exampleTranslations: ['Dışarıda olmak yaratıcılığınızı artırabilir.'],
    level: 'intermediate',
    collocations: ['boost confidence', 'boost morale', 'boost productivity'],
    collocationMeanings: {
      'boost confidence': 'özgüveni artırmak',
      'boost morale': 'morali yükseltmek',
      'boost productivity': 'verimliliği artırmak',
    },
  },
  {
    id: 'break_a_resolution',
    word: 'Break a resolution',
    pos: 'phrase',
    meaning: 'kararını bozmak (yeminini bozmak)',
    definition: 'To not do what you promised.',
    ipa: '/breɪk ə ˌrez.əˈluː.ʃən/',
    examples: ['I broke a resolution not to eat meat when I went to the restaurant yesterday.'],
    exampleTranslations: ['Dün restorana gittiğimde et yememe kararımı bozdum.'],
    level: 'intermediate',
    collocations: ['make or break a resolution', 'break a new year resolution'],
    collocationMeanings: {
      'make or break a resolution': 'karar almak veya bozmak',
      'break a new year resolution': 'yeni yıl kararını bozmak',
    },
  },
  {
    id: 'breaking_news',
    word: 'Breaking news',
    pos: 'noun',
    meaning: 'son dakika haberi',
    definition: 'New information about a news event that is still happening.',
    ipa: '/ˈbreɪ.kɪŋ njuːz/',
    examples: ['Keep up with the latest breaking news and politics from around the world.'],
    exampleTranslations: ['Dünyanın dört bir yanından en son dakika haberlerini ve siyaseti takip edin.'],
    level: 'intermediate',
    collocations: ['latest breaking news', 'follow breaking news'],
    collocationMeanings: {
      'latest breaking news': 'en son dakika gelişmeleri',
      'follow breaking news': 'son dakika haberlerini takip etmek',
    },
  },
  {
    id: 'brilliant_b1',
    word: 'Brilliant',
    pos: 'adjective',
    meaning: 'çok zeki, parlak, muhteşem',
    definition: 'Very intelligent.',
    ipa: '/ˈbrɪl.jənt/',
    examples: ['She is a brilliant scientist.'],
    exampleTranslations: ['O muhteşem bir bilim insanı.'],
    level: 'intermediate',
    collocations: ['brilliant idea', 'brilliant success', 'absolutely brilliant'],
    collocationMeanings: {
      'brilliant idea': 'harika fikir',
      'brilliant success': 'muazzam başarı',
      'absolutely brilliant': 'kesinlikle harika',
    },
  },
  {
    id: 'build_a_brand',
    word: 'Build a brand',
    pos: 'phrase',
    meaning: 'marka oluşturmak',
    definition: 'Make or develop a product or group of products that has its own name and is made by one particular company.',
    ipa: '/bɪld ə brænd/',
    examples: ['We need the team to work together to build a brand.'],
    exampleTranslations: ['Bir marka oluşturmak için ekibin birlikte çalışmasına ihtiyacımız var.'],
    level: 'intermediate',
    collocations: ['brand building', 'global brand'],
    collocationMeanings: {
      'brand building': 'marka inşası',
      'global brand': 'küresel marka',
    },
  },
  {
    id: 'build_a_reputation',
    word: 'Build a reputation',
    pos: 'phrase',
    meaning: 'itibar inşa etmek, isim yapmak',
    definition: 'Make or develop the opinion that people have about how good something is.',
    ipa: '/bɪld ə ˌrep.jəˈteɪ.ʃən/',
    examples: ['It may take a while to build a reputation.'],
    exampleTranslations: ['Bir itibar oluşturmak biraz zaman alabilir.'],
    level: 'intermediate',
    collocations: ['solid reputation', 'good reputation', 'reputation for excellence'],
    collocationMeanings: {
      'solid reputation': 'sağlam itibar',
      'good reputation': 'iyi şöhret',
      'reputation for excellence': 'mükemmeliyetle tanınan itibar',
    },
  },
  {
    id: 'buttery',
    word: 'Buttery',
    pos: 'adjective',
    meaning: 'tereyağlı, tereyağı tadında',
    definition: 'Buttery food has a lot of butter in it, or tastes as if it has butter in it.',
    ipa: '/ˈbʌt.ər.i/',
    examples: ['The biscuits she made were delicious and buttery.'],
    exampleTranslations: ['Yaptığı bisküviler lezzetli ve tereyağlıydı.'],
    level: 'intermediate',
    collocations: ['buttery texture', 'buttery sauce'],
    collocationMeanings: {
      'buttery texture': 'tereyağlı doku',
      'buttery sauce': 'tereyağlı sos',
    },
  },
  {
    id: 'carry_on',
    word: 'Carry on',
    pos: 'phrasal verb',
    meaning: 'devam etmek, sürdürmek',
    definition: 'To continue without stopping.',
    ipa: '/ˈkær.i ɒn/',
    examples: ['He moved to London to carry on his work.'],
    exampleTranslations: ['Çalışmalarını sürdürmek için Londra’ya taşındı.'],
    level: 'intermediate',
    collocations: ['carry on working', 'carry on with', 'keep calm and carry on'],
    collocationMeanings: {
      'carry on working': 'çalışmaya devam etmek',
      'carry on with': 'bir şeye devam etmek',
      'keep calm and carry on': 'sakin ol ve devam et',
    },
  },
  {
    id: 'catchy',
    word: 'Catchy',
    pos: 'adjective',
    meaning: 'akılda kalıcı (şarkı/söz)',
    definition: 'A tune or phrase which attracts your attention and is easy to remember.',
    ipa: '/ˈkætʃ.i/',
    examples: ["I like this song because it's very catchy."],
    exampleTranslations: ['Bu şarkıyı seviyorum çünkü çok akılda kalıcı.'],
    level: 'intermediate',
    collocations: ['catchy tune', 'catchy song', 'catchy slogan'],
    collocationMeanings: {
      'catchy tune': 'akılda kalıcı melodi',
      'catchy song': 'akılda kalıcı şarkı',
      'catchy slogan': 'akılda kalıcı slogan',
    },
  },
  {
    id: 'cause_b1',
    word: 'Cause',
    pos: 'noun',
    meaning: 'sebep olmak, neden',
    definition: 'An event, thing, or person that makes something happen.',
    ipa: '/kɔːz/',
    examples: ['The major cause of these accidents is drivers going too fast.'],
    exampleTranslations: ['Bu kazaların ana nedeni sürücülerin çok hızlı gitmesidir.'],
    level: 'intermediate',
    collocations: ['main cause', 'common cause', 'cause for concern'],
    collocationMeanings: {
      'main cause': 'ana neden',
      'common cause': 'yaygın neden',
      'cause for concern': 'endişe verici neden',
    },
  },
  {
    id: 'change_my_mind',
    word: 'Change my mind',
    pos: 'phrase',
    meaning: 'fikrimi değiştirmek',
    definition: 'To adopt a different opinion or plan.',
    ipa: '/tʃeɪndʒ maɪ maɪnd/',
    examples: ["I've changed my mind – I'll have a coffee."],
    exampleTranslations: ['Fikrimi değiştirdim – bir kahve alacağım.'],
    level: 'intermediate',
    collocations: ['never change your mind', 'hard to change one\'s mind'],
    collocationMeanings: {
      'never change your mind': 'asla fikrini değiştirmemek',
      'hard to change one\'s mind': 'birinin fikrini değiştirmesi zordur',
    },
  },
  {
    id: 'cheesy',
    word: 'Cheesy',
    pos: 'adjective',
    meaning: 'peynirli, peynir tadında',
    definition: 'Tasting like cheese.',
    ipa: '/ˈtʃiː.zi/',
    examples: ['It has a very strong cheesy flavour to it.'],
    exampleTranslations: ['Çok güçlü bir peynir aroması var.'],
    level: 'intermediate',
    collocations: ['cheesy sauce', 'cheesy pasta', 'cheesy grin'],
    collocationMeanings: {
      'cheesy sauce': 'peynirli sos',
      'cheesy pasta': 'peynirli makarna',
      'cheesy grin': 'sahte/zoraki gülümseme (argoda)',
    },
  },
  {
    id: 'choir',
    word: 'Choir',
    pos: 'noun',
    meaning: 'koro',
    definition: 'A group of singers who perform together, for example in a church or school.',
    ipa: '/kwaɪər/',
    examples: ['Jack was a member of the school choir.'],
    exampleTranslations: ['Jack okul korosunun bir üyesiydi.'],
    level: 'intermediate',
    collocations: ['school choir', 'church choir', 'join a choir'],
    collocationMeanings: {
      'school choir': 'okul korosu',
      'church choir': 'kilise korosu',
      'join a choir': 'koroya katılmak',
    },
  },
  {
    id: 'chocolatey',
    word: 'Chocolatey',
    pos: 'adjective',
    meaning: 'çikolatalı, çikolata gibi',
    definition: 'Chocolatey food has a lot of chocolate in it, or tastes like chocolate.',
    ipa: '/ˈtʃɒk.lə.ti/',
    examples: ['The cake is a bit too chocolatey for me.'],
    exampleTranslations: ['Kek benim için biraz fazla çikolatalı.'],
    level: 'intermediate',
    collocations: ['chocolatey taste', 'chocolatey dessert'],
    collocationMeanings: {
      'chocolatey taste': 'çikolatalı tad',
      'chocolatey dessert': 'çikolatalı tatlı',
    },
  },
  {
    id: 'clear_up',
    word: 'Clear up',
    pos: 'phrasal verb',
    meaning: 'temizlemek, ortalığı toparlamak',
    definition: 'To make everything clean and tidy again after making a mess.',
    ipa: '/klɪər ʌp/',
    examples: ["I'll clear up if you want to go to bed."],
    exampleTranslations: ['Eğer yatmak istersen etrafı ben toparlarım.'],
    level: 'intermediate',
    collocations: ['clear up the mess', 'clear up the weather', 'clear up a doubt'],
    collocationMeanings: {
      'clear up the mess': 'dağınıklığı toplamak',
      'clear up the weather': 'havanın açması',
      'clear up a doubt': 'şüpheyi gidermek',
    },
  },
  {
    id: 'colleague',
    word: 'Colleague',
    pos: 'noun',
    meaning: 'meslektaş, iş arkadaşı',
    definition: 'People who work in the same organization or department as you.',
    ipa: '/ˈkɒl.iːɡ/',
    examples: ['He is popular with his colleagues.'],
    exampleTranslations: ['İş arkadaşları arasında popülerdir.'],
    level: 'intermediate',
    collocations: ['work colleague', 'former colleague', 'senior colleague'],
    collocationMeanings: {
      'work colleague': 'iş arkadaşı',
      'former colleague': 'eski meslektaş',
      'senior colleague': 'kıdemli meslektaş',
    },
  },
  {
    id: 'come_up_with',
    word: 'Come up with',
    pos: 'phrasal verb',
    meaning: 'bulmak (fikir vb.), üretmek',
    definition: 'To think of something such as an idea or a plan.',
    ipa: '/kʌm ʌp wɪð/',
    examples: ['Is that the best you can come up with?'],
    exampleTranslations: ['Bulabildiğin en iyi şey bu mu?'],
    level: 'intermediate',
    collocations: ['come up with an idea', 'come up with a solution', 'come up with a plan'],
    collocationMeanings: {
      'come up with an idea': 'bir fikir bulmak',
      'come up with a solution': 'bir çözüm üretmek',
      'come up with a plan': 'bir plan tasarlamak',
    },
  },
  {
    id: 'come_up_with_new_ideas',
    word: 'Come up with new ideas',
    pos: 'phrase',
    meaning: 'yeni fikirler bulmak',
    definition: 'To think of something new.',
    ipa: '/kʌm ʌp wɪð njuː aɪˈdɪəz/',
    examples: ['We can form a group to come up with new ideas.'],
    exampleTranslations: ['Yeni fikirler üretmek için bir grup kurabiliriz.'],
    level: 'intermediate',
    collocations: ['need to generate new ideas', 'strategy to generate new ideas'],
    collocationMeanings: {
      'need to generate new ideas': 'yeni fikirler bulmaya ihtiyaç duymak',
      'strategy to generate new ideas': 'yeni fikirler bulma stratejisi',
    },
  },
  {
    id: 'competitive',
    word: 'Competitive',
    pos: 'adjective',
    meaning: 'rekabetçi',
    definition: 'A competitive activity is one in which companies or teams are competing against each other.',
    ipa: '/kəmˈpet.ɪ.tɪv/',
    examples: ['He gave up playing competitive football at the age of 24.'],
    exampleTranslations: ['24 yaşında rekabetçi futbol oynamayı bıraktı.'],
    level: 'intermediate',
    collocations: ['competitive market', 'competitive edge', 'highly competitive'],
    collocationMeanings: {
      'competitive market': 'rekabetçi pazar',
      'competitive edge': 'rekabet avantajı',
      'highly competitive': 'son derece rekabetçi',
    },
  },
  {
    id: 'confident_b1',
    word: 'Confident',
    pos: 'adjective',
    meaning: 'kendine güvenen',
    definition: 'Someone who believes in their own abilities and so does not feel nervous or frightened.',
    ipa: '/ˈkɒn.fɪ.dənt/',
    examples: ['He is confident in his ability to play the piano.'],
    exampleTranslations: ['Piyano çalma yeteneği konusunda kendine güveniyor.'],
    level: 'intermediate',
    collocations: ['feel confident', 'self confident', 'confident person'],
    collocationMeanings: {
      'feel confident': 'kendine güvenmek',
      'self confident': 'özgüvenli',
      'confident person': 'kendinden emin kişi',
    },
  },
  {
    id: 'confused',
    word: 'Confused',
    pos: 'adjective',
    meaning: 'kafası karışık',
    definition: 'Unable to understand something or think clearly about it.',
    ipa: '/kənˈfjuːzd/',
    examples: ['She was starting to feel a bit confused.'],
    exampleTranslations: ['Biraz kafası karışmaya başlamıştı.'],
    level: 'intermediate',
    collocations: ['totally confused', 'look confused', 'confused expression'],
    collocationMeanings: {
      'totally confused': 'tamamen kafası karışmış',
      'look confused': 'kafası karışmış görünmek',
      'confused expression': 'şaşkın/karışık ifade',
    },
  },
  {
    id: 'control_yourself',
    word: 'Control yourself',
    pos: 'phrase',
    meaning: 'kendine hakim olmak',
    definition: 'To have the power to make decisions and decide what will happen to something.',
    ipa: '/kənˈtrəʊl jɔːˈself/',
    examples: ["When I see chocolate I can't control myself."],
    exampleTranslations: ['Çikolata gördüğümde kendime hakim olamıyorum.'],
    level: 'intermediate',
    collocations: ['struggle to control yourself', 'must control yourself'],
    collocationMeanings: {
      'struggle to control yourself': 'kendine hakim olmakta zorlanmak',
      'must control yourself': 'kendine hakim olmalısın',
    },
  },
  {
    id: 'convenient',
    word: 'Convenient',
    pos: 'adjective',
    meaning: 'uygun, elverişli, pratik',
    definition: 'Easy to use, or appropriate for a particular purpose.',
    ipa: '/kənˈviː.ni.ənt/',
    examples: ['The hotel was only five minutes from the beach, which was convenient.'],
    exampleTranslations: ['Otel plaja sadece beş dakika mesafeydi, bu da çok uygundu/pratikti.'],
    level: 'intermediate',
    collocations: ['convenient location', 'convenient time', 'very convenient'],
    collocationMeanings: {
      'convenient location': 'uygun konum',
      'convenient time': 'müsait/uygun zaman',
      'very convenient': 'çok pratik',
    },
  },
  {
    id: 'creamy',
    word: 'Creamy',
    pos: 'adjective',
    meaning: 'kremalı, kıvamlı, yumuşak',
    definition: 'A creamy substance is thick, soft, and smooth and does not flow easily.',
    ipa: '/ˈkriː.mi/',
    examples: ['This sauce is so creamy.'],
    exampleTranslations: ['Bu sos çok kıvamlı/yumuşak.'],
    level: 'intermediate',
    collocations: ['creamy texture', 'creamy soup', 'rich and creamy'],
    collocationMeanings: {
      'creamy texture': 'kremamsı doku',
      'creamy soup': 'kıvamlı çorba',
      'rich and creamy': 'yoğun ve kremalı',
    },
  },
  {
    id: 'crowded',
    word: 'Crowded',
    pos: 'adjective',
    meaning: 'kalabalık',
    definition: 'A place with a lot of people, especially too many.',
    ipa: '/ˈkraʊ.dɪd/',
    examples: ['The street was noisy and crowded.'],
    exampleTranslations: ['Cadde gürültülü ve kalabalıktı.'],
    level: 'intermediate',
    collocations: ['crowded room', 'over crowded', 'crowded city'],
    collocationMeanings: {
      'crowded room': 'kalabalık oda',
      'over crowded': 'aşırı kalabalık',
      'crowded city': 'kalabalık şehir',
    },
  },
  {
    id: 'cut_down',
    word: 'Cut down',
    pos: 'phrasal verb',
    meaning: 'azaltmak, kesinti yapmak',
    definition: 'To reduce an amount of something.',
    ipa: '/kʌt daʊn/',
    examples: ['These improvements will cut down on traffic noise.'],
    exampleTranslations: ['Bu iyileştirmeler trafik gürültüsünü azaltacak.'],
    level: 'intermediate',
    collocations: ['cut down trees', 'cut down costs', 'cut down expenses'],
    collocationMeanings: {
      'cut down trees': 'ağaç kesmek',
      'cut down costs': 'maliyetleri düşürmek',
      'cut down expenses': 'giderleri kısmak',
    },
  },
  {
    id: 'cut_down_on',
    word: 'Cut down on',
    pos: 'phrasal verb',
    meaning: 'azaltmak (tüketimi vb.)',
    definition: 'To do less of something.',
    ipa: '/kʌt daʊn ɒn/',
    examples: ['She wants to cut down on the amount of chocolate she eats.'],
    exampleTranslations: ['Yediği çikolata miktarını azaltmak istiyor.'],
    level: 'intermediate',
    collocations: ['cut down on sugar', 'cut down on salt', 'cut down on smoking'],
    collocationMeanings: {
      'cut down on sugar': 'şekeri azaltmak',
      'cut down on salt': 'tuz kullanımını düşürmek',
      'cut down on smoking': 'sigarayı azaltmak',
    },
  },
  {
    id: 'deal_with',
    word: 'Deal with',
    pos: 'phrasal verb',
    meaning: 'ilgilenmek, başa çıkmak',
    definition: 'To take action to do something, especially to solve a problem.',
    ipa: '/diːl wɪð/',
    examples: ['The government must now deal with the problem of high unemployment.'],
    exampleTranslations: ['Hükümet şimdi yüksek işsizlik sorunuyla ilgilenmeli.'],
    level: 'intermediate',
    collocations: ['deal with a problem', 'deal with a situation', 'deal with a complaint'],
    collocationMeanings: {
      'deal with a problem': 'bir sorunu halletmek',
      'deal with a situation': 'bir durumla ilgilenmek',
      'deal with a complaint': 'bir şikayeti çözüme kavuşturmek',
    },
  },
  {
    id: 'decisive',
    word: 'Decisive',
    pos: 'adjective',
    meaning: 'kararlı',
    definition: 'Able to make choices or decide what to do quickly and confidently.',
    ipa: '/dɪˈsaɪ.sɪv/',
    examples: ["It's best to ask her because she's very decisive."],
    exampleTranslations: ['Ona sormak en iyisi çünkü o çok kararlıdır.'],
    level: 'intermediate',
    collocations: ['decisive factor', 'decisive victory', 'decisive action'],
    collocationMeanings: {
      'decisive factor': 'belirleyici faktör',
      'decisive victory': 'kesin zafer',
      'decisive action': 'kararlı eylem',
    },
  },
  {
    id: 'design_v',
    word: 'Design (v)',
    pos: 'verb',
    meaning: 'tasarlamak',
    definition: 'To decide how something will be made, including how it will work and what it will look like, and often to make drawings of it.',
    ipa: '/dɪˈzaɪn/',
    examples: ['The bride wore a cream silk dress that she designed herself.'],
    exampleTranslations: ['Gelin, kendi tasarladığı krem rengi ipek bir elbise giydi.'],
    level: 'intermediate',
    collocations: ['design a building', 'specially designed', 'design a website'],
    collocationMeanings: {
      'design a building': 'bina tasarlamak',
      'specially designed': 'özel olarak tasarlanmış',
      'design a website': 'internet sitesi tasarlamak',
    },
  },
  {
    id: 'designer',
    word: 'Designer',
    pos: 'noun',
    meaning: 'tasarımcı',
    definition: 'Someone whose job is to decide how to make things or to decide their shape or appearance.',
    ipa: '/dɪˈzaɪ.nər/',
    examples: ['Calvin Klein is a famous fashion designer.'],
    exampleTranslations: ['Calvin Klein ünlü bir moda tasarımcısıdır.'],
    level: 'intermediate',
    collocations: ['fashion designer', 'graphic designer', 'interior designer'],
    collocationMeanings: {
      'fashion designer': 'moda tasarımcısı',
      'graphic designer': 'grafik tasarımcı',
      'interior designer': 'iç mimar',
    },
  },
  {
    id: 'disappear',
    word: 'Disappear',
    pos: 'verb',
    meaning: 'gözden kaybolmak, yok olmak',
    definition: 'To no longer happen or exist.',
    ipa: '/ˌdɪs.əˈpɪər/',
    examples: ['Many public libraries in the city are disappearing.'],
    exampleTranslations: ['Şehirdeki birçok halk kütüphanesi yok oluyor.'],
    level: 'intermediate',
    collocations: ['disappear completely', 'suddenly disappear', 'disappear from view'],
    collocationMeanings: {
      'disappear completely': 'tamamen yok olmak',
      'suddenly disappear': 'aniden kaybolmak',
      'disappear from view': 'gözden kaybolmak',
    },
  },
  {
    id: 'dishonest',
    word: 'Dishonest',
    pos: 'adjective',
    meaning: 'dürüst olmayan, sahtekar',
    definition: 'Willing to do things that are not honest, for example to tell lies or steal things.',
    ipa: '/dɪˈsɒn.ɪst/',
    examples: ['They admitted that there were some dishonest employees working in the bank.'],
    exampleTranslations: ['Bankada çalışan bazı dürüst olmayan personeller olduğunu kabul ettiler.'],
    level: 'intermediate',
    collocations: ['dishonest behavior', 'dishonest person', 'completely dishonest'],
    collocationMeanings: {
      'dishonest behavior': 'dürüst olmayan davranış',
      'dishonest person': 'sahtekar kişi',
      'completely dishonest': 'tamamen dürüstlükten uzak',
    },
  },
  {
    id: 'dish_up',
    word: 'Dish up',
    pos: 'phrasal verb',
    meaning: 'yemek servis etmek',
    definition: 'To put food into dishes so that it is ready to be eaten.',
    ipa: '/dɪʃ ʌp/',
    examples: ["Can you dish up the food while it's hot?"],
    exampleTranslations: ['Yemek sıcakken servis edebilir misin?'],
    level: 'intermediate',
    collocations: ['dish up a meal', 'ready to dish up'],
    collocationMeanings: {
      'dish up a meal': 'yemek hazırlayıp koymak',
      'ready to dish up': 'servis edilmeye hazır',
    },
  },
  {
    id: 'display',
    word: 'Display',
    pos: 'noun',
    meaning: 'sergilemek, gösteri',
    definition: 'An arrangement of things for people to look at.',
    ipa: '/dɪˈspleɪ/',
    examples: ['Max put up the window display.'],
    exampleTranslations: ['Max vitrin düzenlemesini yerleştirdi.'],
    level: 'intermediate',
    collocations: ['public display', 'on display', 'window display'],
    collocationMeanings: {
      'public display': 'halka açık gösterim',
      'on display': 'sergilenmekte',
      'window display': 'vitrin sergisi',
    },
  },
  {
    id: 'donate',
    word: 'Donate',
    pos: 'verb',
    meaning: 'bağışlamak',
    definition: 'To give something such as money or goods to an organization.',
    ipa: '/dəʊˈneɪt/',
    examples: ['The centre was bought with money donated by a wealthy businessman.'],
    exampleTranslations: ['Merkez, zengin bir iş adamı tarafından bağışlanan parayla satın alındı.'],
    level: 'intermediate',
    collocations: ['donate blood', 'donate money', 'donate to charity'],
    collocationMeanings: {
      'donate blood': 'kan bağışlamak',
      'donate money': 'para bağışında bulunmak',
      'donate to charity': 'hayır kurumuna bağış yapmak',
    },
  },
  {
    id: 'draw_attention_to',
    word: 'Draw attention to',
    pos: 'phrase',
    meaning: 'dikkat çekmek (bir şeye/birine)',
    definition: 'To make people notice somebody/something.',
    ipa: '/drɔː əˈten.ʃən tuː/',
    examples: ['We have to try and get in without drawing attention to ourselves.'],
    exampleTranslations: ['Dikkat çekmeden içeri girmeye çalışmalıyız.'],
    level: 'intermediate',
    collocations: ['draw attention to the fact', 'draw attention to the problem'],
    collocationMeanings: {
      'draw attention to the fact': 'bir gerçeğe dikkat çekmek',
      'draw attention to the problem': 'soruna parmak basmak/dikkat çekmek',
    },
  },
  {
    id: 'encourage_b1',
    word: 'Encourage',
    pos: 'verb',
    meaning: 'teşvik etmek, cesaretlendirmek',
    definition: 'To suggest that someone does something that you believe would be good.',
    ipa: '/ɪnˈkʌr.ɪdʒ/',
    examples: ['We encourage student participation in our classes.'],
    exampleTranslations: ['Derslerimizde öğrenci katılımını teşvik ediyoruz.'],
    level: 'intermediate',
    collocations: ['strongly encourage', 'encourage to do', 'encourage development'],
    collocationMeanings: {
      'strongly encourage': 'şiddetle teşvik etmek',
      'encourage to do': 'yapması için yüreklendirmek',
      'encourage development': 'gelişimi desteklemek',
    },
  },
  {
    id: 'enormous_b1',
    word: 'Enormous',
    pos: 'adjective',
    meaning: 'kocaman, muazzam',
    definition: 'Very large in size or quantity.',
    ipa: '/ɪˈnɔː.məs/',
    examples: ["We couldn't finish the enormous birthday cake."],
    exampleTranslations: ['Kocaman doğum günü pastasını bitiremedik.'],
    level: 'intermediate',
    collocations: ['enormous amount', 'enormous potential', 'enormous success'],
    collocationMeanings: {
      'enormous amount': 'muazzam miktar',
      'enormous potential': 'büyük potansiyel',
      'enormous success': 'dev başarı',
    },
  },
  {
    id: 'expectation',
    word: 'Expectation',
    pos: 'noun',
    meaning: 'beklenti',
    definition: 'The belief that something will happen.',
    ipa: '/ˌek.spekˈteɪ.ʃən/',
    examples: ['The team set off without any expectation of success.'],
    exampleTranslations: ['Takım, herhangi bir başarı beklentisi olmadan yola çıktı.'],
    level: 'intermediate',
    collocations: ['high expectations', 'meet expectations', 'beyond expectations'],
    collocationMeanings: {
      'high expectations': 'yüksek beklentiler',
      'meet expectations': 'beklentileri karşılamak',
      'beyond expectations': 'beklentilerin ötesinde',
    },
  },
  {
    id: 'expression',
    word: 'Expression',
    pos: 'noun',
    meaning: 'İfade (yüz ifadesi)',
    definition: 'A look on someone\'s face that shows what their thoughts or feelings are.',
    ipa: '/ɪkˈspreʃ.ən/',
    examples: ['You should have seen the expression on his face!'],
    exampleTranslations: ['Yüzündeki ifadeyi görmeliydin!'],
    level: 'intermediate',
    collocations: ['facial expression', 'common expression', 'freedom of expression'],
    collocationMeanings: {
      'facial expression': 'yüz ifadesi',
      'common expression': 'yaygın tabir/ifade',
      'freedom of expression': 'ifade özgürlüğü',
    },
  },
  {
    id: 'eye_catching',
    word: 'Eye-catching',
    pos: 'adjective',
    meaning: 'göz alıcı, dikkat çekici',
    definition: 'Attractive or unusual and therefore noticed.',
    ipa: '/ˈaɪˌkætʃ.ɪŋ/',
    examples: ['The eye-catching design was very clever.'],
    exampleTranslations: ['Göz alıcı tasarım çok zekiceydi.'],
    level: 'intermediate',
    collocations: ['eye-catching design', 'eye-catching color', 'eye-catching advertisement'],
    collocationMeanings: {
      'eye-catching design': 'göz alıcı tasarım',
      'eye-catching color': 'dikkat çekici renk',
      'eye-catching advertisement': 'ilgi çekici reklam',
    },
  },
  {
    id: 'fall_flat',
    word: 'Fall flat',
    pos: 'idiom',
    meaning: 'beklenen etkiyi yaratmamak, çuvallamak',
    definition: 'To not succeed in entertaining someone or making them laugh.',
    ipa: '/fɔːl flæt/',
    examples: ['My attempt at a joke fell flat.'],
    exampleTranslations: ['Şaka yapma girişimim beklenen etkiyi yaratmadı.'],
    level: 'intermediate',
    collocations: ['joke fell flat', 'performance fell flat', 'completely fall flat'],
    collocationMeanings: {
      'joke fell flat': 'şakanın tutmaması',
      'performance fell flat': 'performansın sönük kalması',
      'completely fall flat': 'tamamen fiyaskoyla sonuçlanmak',
    },
  },
  {
    id: 'fascinating',
    word: 'Fascinating',
    pos: 'adjective',
    meaning: 'büyüleyici',
    definition: 'Making you very interested or attracted.',
    ipa: '/ˈfæs.ən.eɪ.tɪŋ/',
    examples: ['He told me a fascinating story.'],
    exampleTranslations: ['Bana büyüleyici bir hikaye anlattı.'],
    level: 'intermediate',
    collocations: ['absolutely fascinating', 'fascinating subject', 'find something fascinating'],
    collocationMeanings: {
      'absolutely fascinating': 'tamamen büyüleyici',
      'fascinating subject': 'çok ilginç konu',
      'find something fascinating': 'bir şeyi büyüleyici bulmak',
    },
  },
  {
    id: 'fatty',
    word: 'Fatty',
    pos: 'adjective',
    meaning: 'yağlı',
    definition: 'Containing a lot of fat.',
    ipa: '/ˈfæt.i/',
    examples: ['Fatty foods are bad for you.'],
    exampleTranslations: ['Yağlı yiyecekler sizin için kötüdür.'],
    level: 'intermediate',
    collocations: ['fatty foods', 'fatty acid', 'fatty meat'],
    collocationMeanings: {
      'fatty foods': 'yağlı yiyecekler',
      'fatty acid': 'yağ asidi',
      'fatty meat': 'yağlı et',
    },
  },
  {
    id: 'filling',
    word: 'Filling',
    pos: 'adjective',
    meaning: 'doyurucu',
    definition: 'Food that is filling makes you feel full quickly.',
    ipa: '/ˈfɪl.ɪŋ/',
    examples: ['This pie I ordered is very filling.'],
    exampleTranslations: ['Sipariş ettiğim bu turta çok doyurucu.'],
    level: 'intermediate',
    collocations: ['filling meal', 'very filling', 'nutritious and filling'],
    collocationMeanings: {
      'filling meal': 'doyurucu öğün',
      'very filling': 'çok tok tutan',
      'nutritious and filling': 'besleyici ve doyurucu',
    },
  },
  {
    id: 'filthy',
    word: 'Filthy',
    pos: 'adjective',
    meaning: 'çok pis, kirli',
    definition: 'Very dirty.',
    ipa: '/ˈfɪl.θi/',
    examples: ['The kitchen was filthy after he had cooked.'],
    exampleTranslations: ['O yemek pişirdikten sonra mutfak çok pisti.'],
    level: 'intermediate',
    collocations: ['filthy rich', 'filthy clothes', 'absolutely filthy'],
    collocationMeanings: {
      'filthy rich': 'çok zengin (argoda)',
      'filthy clothes': 'leke içindeki kıyafetler',
      'absolutely filthy': 'tamamen pislik içinde',
    },
  },
  {
    id: 'fluently',
    word: 'Fluently',
    pos: 'adverb',
    meaning: 'akıcı bir şekilde',
    definition: 'Spoken well and without difficulty.',
    ipa: '/ˈfluː.ənt.li/',
    examples: ['He speaks English fluently.'],
    exampleTranslations: ['İngilizceyi akıcı bir şekilde konuşuyor.'],
    level: 'intermediate',
    collocations: ['speak fluently', 'read fluently', 'communicate fluently'],
    collocationMeanings: {
      'speak fluently': 'akıcı konuşmak',
      'read fluently': 'akıcı okumak',
      'communicate fluently': 'akıcı iletişim kurmak',
    },
  },
  {
    id: 'fruity',
    word: 'Fruity',
    pos: 'adjective',
    meaning: 'meyveli, meyvemsi',
    definition: 'Tasting or smelling like fruit.',
    ipa: '/ˈfruː.ti/',
    examples: ['It is a fruity red drink.'],
    exampleTranslations: ['Bu meyveli kırmızı bir içecek.'],
    level: 'intermediate',
    collocations: ['fruity smell', 'fruity taste', 'pale and fruity'],
    collocationMeanings: {
      'fruity smell': 'meyvemsi koku',
      'fruity taste': 'meyve tadı',
      'pale and fruity': 'soluk ve meyveli',
    },
  },
  {
    id: 'furious',
    word: 'Furious',
    pos: 'adjective',
    meaning: 'çok öfkeli, küplere binmiş',
    definition: 'Extremely angry.',
    ipa: '/ˈfjʊə.ri.əs/',
    examples: ["Roberts' comments provoked a furious public response."],
    exampleTranslations: ["Roberts'ın yorumları halktan çok öfkeli bir tepki aldı."],
    level: 'intermediate',
    collocations: ['absolutely furious', 'furious with someone', 'furious pace'],
    collocationMeanings: {
      'absolutely furious': 'tamamen deliye dönmüş',
      'furious with someone': 'birine karşı çok öfkeli',
      'furious pace': 'çok hızlı tempo',
    },
  },
  {
    id: 'generate_new_ideas',
    word: 'Generate new ideas',
    pos: 'phrase',
    meaning: 'yeni fikirler üretmek',
    definition: 'To think of something new.',
    ipa: '/ˈdʒen.ə.reɪt njuː aɪˈdɪəz/',
    examples: ['When we generate new ideas, we need to make sure we write them down.'],
    exampleTranslations: ['Yeni fikirler ürettiğimizde, onları not ettiğimizden emin olmalıyız.'],
    level: 'intermediate',
    collocations: ['need to generate new ideas', 'ability to generate new ideas'],
    collocationMeanings: {
      'need to generate new ideas': 'yeni fikirler üretmeye ihtiyaç duymak',
      'ability to generate new ideas': 'yeni fikirler üretme yeteneği',
    },
  },
  {
    id: 'get_rid_of',
    word: 'Get rid of',
    pos: 'phrasal verb',
    meaning: 'kurtulmak, başından savmak',
    definition: 'To throw away, give away, or sell a possession that you no longer want or need.',
    ipa: '/ɡet rɪd əv/',
    examples: ["We're moving, so we have to get rid of a lot of our furniture."],
    exampleTranslations: ['Taşınıyoruz, bu yüzden birçok mobilyamızdan kurtulmamız/onları çıkarmamız gerekiyor.'],
    level: 'intermediate',
    collocations: ['get rid of waste', 'get rid of a problem', 'finally get rid of'],
    collocationMeanings: {
      'get rid of waste': 'atıklardan kurtulmak',
      'get rid of a problem': 'bir sorundan kurtulmak',
      'finally get rid of': 'sonunda başından savmak',
    },
  },
  {
    id: 'get_yourself',
    word: 'Get yourself',
    pos: 'phrase',
    meaning: 'kendine (bir şey) almak/edinmek',
    definition: 'To obtain, receive, or be given something.',
    ipa: '/ɡet jɔːˈself/',
    examples: ['I got myself a coffee from the canteen.'],
    exampleTranslations: ['Kantinden kendime bir kahve aldım.'],
    level: 'intermediate',
    collocations: ['get yourself ready', 'get yourself organized', 'get yourself together'],
    collocationMeanings: {
      'get yourself ready': 'kendini hazırla',
      'get yourself organized': 'kendini düzenle/hazırla',
      'get yourself together': 'kendini toparla',
    },
  },
  {
    id: 'give_up',
    word: 'Give up',
    pos: 'phrasal verb',
    meaning: 'vazgeçmek, bırakmak',
    definition: 'To lose something, especially something that you want to keep, to get something else or help someone.',
    ipa: '/ɡɪv ʌp/',
    examples: ['We gave up on the idea of walking and took the bus instead.'],
    exampleTranslations: ['Yürüme fikrinden vazgeçtik ve onun yerine otobüse bindik.'],
    level: 'intermediate',
    collocations: ['give up smoking', 'never give up', 'give up easily'],
    collocationMeanings: {
      'give up smoking': 'sigarayı bırakmak',
      'never give up': 'asla pes etme',
      'give up easily': 'kolayca vazgeçmek',
    },
  },
  {
    id: 'gorgeous',
    word: 'Gorgeous',
    pos: 'adjective',
    meaning: 'muhteşem, çok güzel',
    definition: 'Very beautiful.',
    ipa: '/ˈɡɔː.dʒəs/',
    examples: ['She had a gorgeous red and gold silk sari.'],
    exampleTranslations: ['Muhteşem bir kırmızı ve altın rengi ipek sarisi vardı.'],
    level: 'intermediate',
    collocations: ['absolutely gorgeous', 'look gorgeous', 'gorgeous weather'],
    collocationMeanings: {
      'absolutely gorgeous': 'kesinlikle muhteşem',
      'look gorgeous': 'harika görünmek',
      'gorgeous weather': 'şahane hava',
    },
  },
  {
    id: 'heavy_traffic',
    word: 'Heavy traffic',
    pos: 'phrase',
    meaning: 'yoğun trafik',
    definition: 'A lot of vehicles that are travelling in an area at a particular time.',
    ipa: '/ˈhevi ˈtræfɪk/',
    examples: ["Sorry I'm late - I was stuck in heavy traffic."],
    exampleTranslations: ['Geciktiğim için üzgünüm - yoğun trafiğe takıldım.'],
    level: 'intermediate',
    collocations: ['stuck in heavy traffic', 'cause heavy traffic', 'heavy traffic conditions'],
    collocationMeanings: {
      'stuck in heavy traffic': 'yoğun trafikte sıkışmak',
      'cause heavy traffic': 'yoğun trafiğe neden olmak',
      'heavy traffic conditions': 'yoğun trafik koşulları',
    },
  },
  {
    id: 'help_yourself',
    word: 'Help yourself',
    pos: 'idiom',
    meaning: 'kendine ikram etmek, buyurmak',
    definition: 'Used for giving someone permission to do or use something.',
    ipa: '/help jɔːˈself/',
    examples: ['Help yourself to some paella.'],
    exampleTranslations: ['Paelladan buyurun (kendinize alın).'],
    level: 'intermediate',
    collocations: ['please help yourself', 'help yourself to a drink', 'feel free to help yourself'],
    collocationMeanings: {
      'please help yourself': 'lütfen buyurun',
      'help yourself to a drink': 'bir içecek alın',
      'feel free to help yourself': 'kendine almaktan çekinme',
    },
  },
  {
    id: 'hilarious',
    word: 'Hilarious',
    pos: 'adjective',
    meaning: 'çok komik, gülünç',
    definition: 'Extremely funny.',
    ipa: '/hɪˈleə.ri.əs/',
    examples: ['For some reason, she finds his jokes hilarious.'],
    exampleTranslations: ['Nedense onun şakalarını çok komik buluyor.'],
    level: 'intermediate',
    collocations: ['hilarious joke', 'find it hilarious', 'absolutely hilarious'],
    collocationMeanings: {
      'hilarious joke': 'çok gülünç şaka',
      'find it hilarious': 'çok komik bulmak',
      'absolutely hilarious': 'kesinlikle çok gülünç',
    },
  },
  {
    id: 'idiom',
    word: 'Idiom',
    pos: 'noun',
    meaning: 'deyim',
    definition: 'An expression whose meaning is different from the meaning of the individual words.',
    ipa: '/ˈɪd.i.əm/',
    examples: ["'To have your feet on the ground' is an idiom meaning 'to be sensible'."],
    exampleTranslations: ["'Ayakları yere basmak', 'mantıklı olmak' anlamına gelen bir deyimdir."],
    level: 'intermediate',
    collocations: ['common idiom', 'use an idiom', 'learn idioms'],
    collocationMeanings: {
      'common idiom': 'yaygın deyim',
      'use an idiom': 'deyim kullanmak',
      'learn idioms': 'deyim öğrenmek',
    },
  },
  {
    id: 'impatient',
    word: 'Impatient',
    pos: 'adjective',
    meaning: 'sabırsız',
    definition: 'Annoyed because something is not happening as quickly as you want.',
    ipa: '/ɪmˈpeɪ.ʃənt/',
    examples: ["'Come on!' said Maggie, becoming impatient."],
    exampleTranslations: ["'Hadi ama!' dedi Maggie sabırsızlanarak."],
    level: 'intermediate',
    collocations: ['get impatient', 'impatient with', 'grow impatient'],
    collocationMeanings: {
      'get impatient': 'sabırsızlanmak',
      'impatient with': 'birine karşı sabırsız',
      'grow impatient': 'sabırsızlığı artmak',
    },
  },
  {
    id: 'improvement',
    word: 'Improvement',
    pos: 'noun',
    meaning: 'gelişme, iyileşme',
    definition: 'The state of being better than before, or the process of making something better.',
    ipa: '/ɪmˈpruːv.mənt/',
    examples: ['The school is performing well, but it needs further improvement.'],
    exampleTranslations: ['Okul iyi performans gösteriyor ancak daha fazla gelişmeye ihtiyacı var.'],
    level: 'intermediate',
    collocations: ['significant improvement', 'room for improvement', 'show improvement'],
    collocationMeanings: {
      'significant improvement': 'önemli gelişme',
      'room for improvement': 'gelişme alanı/payı',
      'show improvement': 'gelişme göstermek',
    },
  },
  {
    id: 'inaccurate',
    word: 'Inaccurate',
    pos: 'adjective',
    meaning: 'hatalı, yanlış',
    definition: 'Not accurate or correct.',
    ipa: '/ɪnˈæk.jə.rət/',
    examples: ['She was given inaccurate information.'],
    exampleTranslations: ['Ona yanlış bilgi verildi.'],
    level: 'intermediate',
    collocations: ['totally inaccurate', 'highly inaccurate', 'historically inaccurate'],
    collocationMeanings: {
      'totally inaccurate': 'tamamen yanlış',
      'highly inaccurate': 'büyük ölçüde hatalı',
      'historically inaccurate': 'tarihsel olarak hatalı',
    },
  },
  {
    id: 'independent',
    word: 'Independent',
    pos: 'adjective',
    meaning: 'bağımsız, özgür',
    definition: 'Someone who does not depend on other people for help, or prefers to do things by themselves.',
    ipa: '/ˌɪn.dɪˈpen.dənt/',
    examples: ['Even as a child he was very independent.'],
    exampleTranslations: ['Çocukken bile çok bağımsızdı.'],
    level: 'intermediate',
    collocations: ['independent state', 'independent research', 'financially independent'],
    collocationMeanings: {
      'independent state': 'bağımsız devlet',
      'independent research': 'bağımsız araştırma',
      'financially independent': 'maddi olarak bağımsız',
    },
  },
  {
    id: 'inexpensive',
    word: 'Inexpensive',
    pos: 'adjective',
    meaning: 'ucuz, masrafsız',
    definition: 'Something that is inexpensive does not cost much money.',
    ipa: '/ˌɪn.ɪkˈspen.sɪv/',
    examples: ['It was an inexpensive hotel.'],
    exampleTranslations: ['Ucuz bir oteldi.'],
    level: 'intermediate',
    collocations: ['relatively inexpensive', 'inexpensive way', 'simple and inexpensive'],
    collocationMeanings: {
      'relatively inexpensive': 'nispeten ucuz',
      'inexpensive way': 'uygun maliyetli yol',
      'simple and inexpensive': 'basit ve ucuz',
    },
  },
  {
    id: 'influence',
    word: 'Influence',
    pos: 'verb',
    meaning: 'etkilemek, nüfuz etmek',
    definition: 'To affect the way that someone thinks or behaves, or to affect the way that something happens.',
    ipa: '/ˈɪn.flu.əns/',
    examples: ["Research has shown that the weather can influence people's behaviour."],
    exampleTranslations: ['Araştırmalar hava durumunun insanların davranışlarını etkileyebileceğini göstermiştir.'],
    level: 'intermediate',
    collocations: ['heavily influence', 'influence a decision', 'exert influence'],
    collocationMeanings: {
      'heavily influence': 'büyük ölçüde etkilemek',
      'influence a decision': 'bir kararı etkilemek',
      'exert influence': 'nüfuzunu kullanmak/etki etmek',
    },
  },
  {
    id: 'inspiration',
    word: 'Inspiration',
    pos: 'noun',
    meaning: 'ilham, esin',
    definition: 'A sudden feeling of enthusiasm, or a new idea that helps you to do or create something.',
    ipa: '/ˌɪn.spɪˈreɪ.ʃən/',
    examples: ['She was the inspiration for his new book.'],
    exampleTranslations: ['Yeni kitabının ilham kaynağı oydu.'],
    level: 'intermediate',
    collocations: ['source of inspiration', 'draw inspiration from', 'constant inspiration'],
    collocationMeanings: {
      'source of inspiration': 'ilham kaynağı',
      'draw inspiration from': 'birinden/bir şeyden ilham almak',
      'constant inspiration': 'sürekli ilham',
    },
  },
  {
    id: 'insist',
    word: 'Insist',
    pos: 'verb',
    meaning: 'ısrar etmek, direatmek',
    definition: 'To say very firmly that something must happen or be done.',
    ipa: '/ɪnˈsɪst/',
    examples: ['You must see a doctor immediately - I insist.'],
    exampleTranslations: ['Hemen bir doktora görünmelisin - ısrar ediyorum.'],
    level: 'intermediate',
    collocations: ['insist on doing', 'insist that', 'strictly insist'],
    collocationMeanings: {
      'insist on doing': 'bir şeyi yapmakta ısrar etmek',
      'insist that': 'şunu ısrarla söylemek',
      'strictly insist': 'kesin bir dille diretmek',
    },
  },
  {
    id: 'invent',
    word: 'Invent',
    pos: 'verb',
    meaning: 'icat etmek',
    definition: 'To design or create something such as a machine or process that did not exist before.',
    ipa: '/ɪnˈvent/',
    examples: ['Alfred Nobel invented dynamite.'],
    exampleTranslations: ['Alfred Nobel dinamiti icat etti.'],
    level: 'intermediate',
    collocations: ['invent a device', 'invent a story', 'newly invented'],
    collocationMeanings: {
      'invent a device': 'bir cihaz icat etmek',
      'invent a story': 'hikaye uydurmak',
      'newly invented': 'yeni icat edilmiş',
    },
  },
  {
    id: 'invention',
    word: 'Invention',
    pos: 'noun',
    meaning: 'icat, buluş',
    definition: 'A machine, tool, or system that someone has made, designed, or thought of for the first time.',
    ipa: '/ɪnˈven.ʃən/',
    examples: ['Inventions like the electric light bulb changed the way people lived.'],
    exampleTranslations: ['Elektrikli ampul gibi icatlar insanların yaşayış biçimini değiştirdi.'],
    level: 'intermediate',
    collocations: ['great invention', 'modern invention', 'latest invention'],
    collocationMeanings: {
      'great invention': 'büyük buluş',
      'modern invention': 'modern icat',
      'latest invention': 'son buluş',
    },
  },
  {
    id: 'inventive',
    word: 'Inventive',
    pos: 'adjective',
    meaning: 'yaratıcı, özgün',
    definition: 'Good at thinking of new and original ideas or methods.',
    ipa: '/ɪnˈven.tɪv/',
    examples: ['Ronaldo is a versatile and inventive player.'],
    exampleTranslations: ['Ronaldo çok yönlü ve yaratıcı bir oyuncudur.'],
    level: 'intermediate',
    collocations: ['inventive mind', 'highly inventive', 'very inventive'],
    collocationMeanings: {
      'inventive mind': 'yaratıcı zihin',
      'highly inventive': 'son derece özgün',
      'very inventive': 'çok yaratıcı',
    },
  },
  {
    id: 'inventor',
    word: 'Inventor',
    pos: 'noun',
    meaning: 'mucit',
    definition: 'Someone who has invented something or whose job is to invent things.',
    ipa: '/ɪnˈven.tər/',
    examples: ['Thomas Edison was an inventor.'],
    exampleTranslations: ['Thomas Edison bir mucitti.'],
    level: 'intermediate',
    collocations: ['famous inventor', 'great inventor', 'born inventor'],
    collocationMeanings: {
      'famous inventor': 'ünlü mucit',
      'great inventor': 'büyük mucit',
      'born inventor': 'doğuştan mucit',
    },
  },
  {
    id: 'impressive',
    word: 'Impressive',
    pos: 'adjective',
    meaning: 'etkileyici',
    definition: 'If something is impressive, you admire it.',
    ipa: '/ɪmˈpres.ɪv/',
    examples: ['The list of their achievements is pretty impressive.'],
    exampleTranslations: ['Başarılarının listesi oldukça etkileyici.'],
    level: 'intermediate',
    collocations: ['highly impressive', 'look impressive', 'most impressive'],
    collocationMeanings: {
      'highly impressive': 'oldukça etkileyici',
      'look impressive': 'etkileyici görünmek',
      'most impressive': 'en etkileyici',
    },
  },
  {
    id: 'in_two_minds',
    word: 'In two minds',
    pos: 'idiom',
    meaning: 'iki arada bir derede kalmak, kararsız olmak',
    definition: 'To be unable to decide about something.',
    ipa: '/ɪn tuː maɪndz/',
    examples: ['I was in two minds whether or not to come this morning.'],
    exampleTranslations: ['Bu sabah gelip gelmeme konusunda kararsızdım.'],
    level: 'intermediate',
    collocations: ['be in two minds about'],
    collocationMeanings: {
      'be in two minds about': 'bir konuda kararsız kalmak',
    },
  },
  {
    id: 'join_a_society',
    word: 'Join a society',
    pos: 'phrase',
    meaning: 'bir topluluğa/kulübe katılmak',
    definition: 'To become a member of an organization or club for people who have a particular interest or who take part in a particular activity.',
    ipa: '/dʒɔɪn ə səˈsaɪ.ə.ti/',
    examples: ['I am hoping to join a society at university so I can meet more people.'],
    exampleTranslations: ['Daha fazla insanla tanışabilmek için üniversitede bir topluluğa katılmayı umuyorum.'],
    level: 'intermediate',
    collocations: ['join a student society', 'join a debating society'],
    collocationMeanings: {
      'join a student society': 'öğrenci topluluğuna katılmak',
      'join a debating society': 'münazara topluluğuna katılmak',
    },
  },
  {
    id: 'keep_a_record',
    word: 'Keep a record',
    pos: 'phrase',
    meaning: 'kayıt tutmak, not etmek',
    definition: 'To write something down.',
    ipa: '/kiːp ə rɪˈkɔːrd/',
    examples: ['Can you keep a record of what we have spent?'],
    exampleTranslations: ['Neler harcadığımızın kaydını tutabilir misin?'],
    level: 'intermediate',
    collocations: ['keep a detailed record', 'keep a permanent record', 'keep a written record'],
    collocationMeanings: {
      'keep a detailed record': 'ayrıntılı kayıt tutmak',
      'keep a permanent record': 'kalıcı bir kayıt tutmak',
      'keep a written record': 'yazılı bir kayıt tutmak',
    },
  },
  {
    id: 'keep_a_resolution',
    word: 'Keep a resolution',
    pos: 'phrase',
    meaning: 'kararına sadık kalmak',
    definition: 'To stick to a plan.',
    ipa: '/kiːp ə ˌrez.əˈluː.ʃən/',
    examples: ['I hope you keep your resolution to stop smoking.'],
    exampleTranslations: ['Umarım sigarayı bırakma kararına sadık kalırsın.'],
    level: 'intermediate',
    collocations: ['keep a new year resolution', 'fail to keep a resolution'],
    collocationMeanings: {
      'keep a new year resolution': 'yeni yıl kararına sadık kalmak',
      'fail to keep a resolution': 'kararı tutamamak',
    },
  },
  {
    id: 'keep_track_of',
    word: 'Keep track of',
    pos: 'idiom',
    meaning: 'takip etmek, kaydını tutmak',
    definition: 'To have all the information that you need about something.',
    ipa: '/kiːp træk əv/',
    examples: ['We need a system to keep track of all our expenses.'],
    exampleTranslations: ['Tüm giderlerimizi takip etmek için bir sisteme ihtiyacımız var.'],
    level: 'intermediate',
    collocations: ['keep track of time', 'keep track of changes', 'keep track of expenses'],
    collocationMeanings: {
      'keep track of time': 'zamanın nasıl geçtiğini takip etmek',
      'keep track of changes': 'değişiklikleri takip etmek',
      'keep track of expenses': 'harcamaların kaydını tutmak',
    },
  },
  {
    id: 'keep_up',
    word: 'Keep up',
    pos: 'phrasal verb',
    meaning: 'aynı seviyeyi korumak, sürdürmek',
    definition: 'To continue at the same high level.',
    ipa: '/kiːp ʌp/',
    examples: ['Keep up the good work.'],
    exampleTranslations: ['İyi çalışmaya devam et (bu seviyeyi koru).'],
    level: 'intermediate',
    collocations: ['keep up with', 'keep up appearances', 'keep up the pace'],
    collocationMeanings: {
      'keep up with': 'ayak uydurmak',
      'keep up appearances': 'durumu kurtarmak/görünüşü korumak',
      'keep up the pace': 'hızı/tempoyu korumak',
    },
  },
  {
    id: 'launch_a_marketing_campaign',
    word: 'Launch a new marketing campaign',
    pos: 'phrase',
    meaning: 'yeni bir pazarlama kampanyası başlatmak',
    definition: 'To start a series of things such as television advertisements or posters that try to persuade people to buy a product.',
    ipa: '/lɔːntʃ ə njuː ˈmɑː.kɪ.tɪŋ kæmˈpeɪn/',
    examples: ['The company plans to launch a new marketing campaign next month.'],
    exampleTranslations: ['Şirket gelecek ay yeni bir pazarlama kampanyası başlatmayı planlıyor.'],
    level: 'intermediate',
    collocations: ['successfully launch a marketing campaign', 'plans to launch a marketing campaign'],
    collocationMeanings: {
      'successfully launch a marketing campaign': 'başarıyla bir pazarlama kampanyası başlatmak',
      'plans to launch a marketing campaign': 'pazarlama kampanyası başlatmayı planlamak',
    },
  },
  {
    id: 'let',
    word: 'Let',
    pos: 'verb',
    meaning: 'izin vermek (bir şeyin olmasına)',
    definition: 'To allow something to happen.',
    ipa: '/let/',
    examples: ['I stepped back and let him pass.'],
    exampleTranslations: ['Geri çekildim ve geçmesine izin verdim.'],
    level: 'intermediate',
    collocations: ['let someone go', 'let it be', 'let someone know'],
    collocationMeanings: {
      'let someone go': 'birini serbest bırakmak',
      'let it be': 'akışına bırak',
      'let someone know': 'birine haber vermek',
    },
  },
  {
    id: 'let_down',
    word: 'Let down',
    pos: 'phrasal verb',
    meaning: 'hayal kırıklığına uğratmak, yüzüstü bırakmak',
    definition: 'To make someone disappointed by not doing something that they are expecting you to do.',
    ipa: '/let daʊn/',
    examples: ['The families of the victims feel that the justice system has let them down.'],
    exampleTranslations: ['Kurbanların aileleri, adalet sisteminin onları yüzüstü bıraktığını hissediyor.'],
    level: 'intermediate',
    collocations: ['let someone down gently', 'never let you down'],
    collocationMeanings: {
      'let someone down gently': 'birini kırmadan reddetmek/hayal kırıklığına uğratmak',
      'never let you down': 'seni asla yarı yolda bırakmaz',
    },
  },
  {
    id: 'let_your_mind_wander_freely',
    word: 'Let your mind wander freely',
    pos: 'phrase',
    meaning: 'zihnini serbest bırakmak',
    definition: 'To allow your thoughts to be free and not restricted to one thing.',
    ipa: '/let jɔːr maɪnd ˈwɒn.dər ˈfriː.li/',
    examples: ['Relax, close your eyes and let your mind wander freely.'],
    exampleTranslations: ['Rahatlayın, gözlerinizi kapatın ve zihninizin serbestçe dolaşmasına izin verin.'],
    level: 'intermediate',
    collocations: ['let your mind wander for a while'],
    collocationMeanings: {
      'let your mind wander for a while': 'zihnini bir süreliğine serbest bırakmak',
    },
  },
  {
    id: 'look_at_a_problem_from_the_outside',
    word: 'Look at a problem from the outside',
    pos: 'phrase',
    meaning: 'probleme dışarıdan bakmak',
    definition: 'To consider a situation from different perspectives.',
    ipa: '/lʊk æt ə ˈprɒb.ləm frəm ði ˌaʊtˈsaɪd/',
    examples: ["It's important to look at a problem from the outside if you want a good solution."],
    exampleTranslations: ['İyi bir çözüm istiyorsanız bir probleme dışarıdan bakmak önemlidir.'],
    level: 'intermediate',
    collocations: ['need to look at a problem from the outside'],
    collocationMeanings: {
      'need to look at a problem from the outside': 'bir probleme dışarıdan bakmaya ihtiyaç duymak',
    },
  },
  {
    id: 'lose_interest_in_something',
    word: 'Lose interest in something',
    pos: 'phrase',
    meaning: 'bir şeye ilgini kaybetmek',
    definition: 'To stop being interested in something.',
    ipa: '/luːz ˈɪn.trəst ɪn ˈsʌm.θɪŋ/',
    examples: ['I used to do yoga but I lost interest in it.'],
    exampleTranslations: ['Eskiden yoga yapardım ama ilgimi kaybettim.'],
    level: 'intermediate',
    collocations: ['completely lose interest', 'slowly lose interest'],
    collocationMeanings: {
      'completely lose interest': 'ilgisini tamamen kaybetmek',
      'slowly lose interest': 'yavaş yavaş ilgi duymaktan vazgeçmek',
    },
  },
  {
    id: 'make_b1',
    word: 'Make',
    pos: 'verb',
    meaning: 'yaptırmak, hissettirmek',
    definition: 'To cause someone or something to be in a particular state or to change to another state.',
    ipa: '/meɪk/',
    examples: ['This film always makes me cry.'],
    exampleTranslations: ['Bu film beni her zaman ağlatır.'],
    level: 'intermediate',
    collocations: ['make a noise', 'make a difference', 'make a mistake'],
    collocationMeanings: {
      'make a noise': 'gürültü yapmak',
      'make a difference': 'fark yaratmak',
      'make a mistake': 'hata yapmak',
    },
  },
  {
    id: 'make_a_decision_b1',
    word: 'Make a decision',
    pos: 'phrase',
    meaning: 'karar vermek',
    definition: 'A choice that you make after thinking carefully.',
    ipa: '/meɪk ə dɪˈsɪʒ.ən/',
    examples: ['The committee should make a decision later this week.'],
    exampleTranslations: ['Komite bu haftanın ilerleyen günlerinde bir karar vermeli.'],
    level: 'intermediate',
    collocations: ['make a final decision', 'make a difficult decision', 'quickly make a decision'],
    collocationMeanings: {
      'make a final decision': 'son kararı vermek',
      'make a difficult decision': 'zor bir karar vermek',
      'quickly make a decision': 'hızlıca karar vermek',
    },
  },
  {
    id: 'make_a_profit',
    word: 'Make a profit',
    pos: 'phrase',
    meaning: 'kâr etmek',
    definition: 'To have money remaining after you have paid all your business costs.',
    ipa: '/meɪk ə ˈprɒf.ɪt/',
    examples: ['Investors have made a 14% profit in just 3 months.'],
    exampleTranslations: ['Yatırımcılar sadece 3 ayda %14 kâr elde etti.'],
    level: 'intermediate',
    collocations: ['make a huge profit', 'make a small profit', 'aim to make a profit'],
    collocationMeanings: {
      'make a huge profit': 'büyük kar etmek',
      'make a small profit': 'küçük bir kâr elde etmek',
      'aim to make a profit': 'kâr etmeyi hedeflemek',
    },
  },
  {
    id: 'make_a_resolution',
    word: 'Make a resolution',
    pos: 'phrase',
    meaning: 'karar almak (yeni yıl kararı gibi)',
    definition: 'To set (yourself) a goal.',
    ipa: '/meɪk ə ˌrez.əˈluː.ʃən/',
    examples: ['Are you going to make a resolution this year?'],
    exampleTranslations: ['Bu yıl bir karar alacak mısın?'],
    level: 'intermediate',
    collocations: ['make a firm resolution', 'make a new year resolution'],
    collocationMeanings: {
      'make a firm resolution': 'kesin bir karar almak',
      'make a new year resolution': 'yeni yıl kararı almak',
    },
  },
  {
    id: 'make_friends_with',
    word: 'Make friends with',
    pos: 'phrase',
    meaning: 'arkadaş olmak',
    definition: 'To become friends.',
    ipa: '/meɪk frendz wɪð/',
    examples: ['They made friends with the children next door.'],
    exampleTranslations: ['Yan komşunun çocuklarıyla arkadaş oldular.'],
    level: 'intermediate',
    collocations: ['make friends with someone', 'easy to make friends with'],
    collocationMeanings: {
      'make friends with someone': 'biriyle arkadaş olmak',
      'easy to make friends with': 'biriyle arkadaş olmak kolaydır',
    },
  },
  {
    id: 'make_fun_of',
    word: 'Make fun of',
    pos: 'phrase',
    meaning: 'dalga geçmek, alay etmek',
    definition: 'To make jokes about someone or something in an unkind way.',
    ipa: '/meɪk fʌn əv/',
    examples: ['The other children made fun of her because she was always so serious.'],
    exampleTranslations: ['Diğer çocuklar, her zaman çok ciddi olduğu için onunla dalga geçiyorlardı.'],
    level: 'intermediate',
    collocations: ['never make fun of someone', 'stop making fun of me'],
    collocationMeanings: {
      'never make fun of someone': 'asla birisiyle dalga geçme',
      'stop making fun of me': 'benimle dalga geçmeyi bırak',
    },
  },
  {
    id: 'make_sure',
    word: 'Make sure',
    pos: 'phrase',
    meaning: 'emin olmak, sağlama almak',
    definition: 'To check something so that you can be sure about it.',
    ipa: '/meɪk ʃɔːr/',
    examples: ["I think I locked it but we'd better make sure."],
    exampleTranslations: ['Sanırım kilitledim ama emin olsak iyi olur.'],
    level: 'intermediate',
    collocations: ['make sure that', 'make sure of', 'just to make sure'],
    collocationMeanings: {
      'make sure that': 'şundan emin ol',
      'make sure of': 'şunu doğrula/emin ol',
      'just to make sure': 'sadece emin olmak için',
    },
  },
  {
    id: 'make_the_break_change',
    word: 'Make the break/change',
    pos: 'phrase',
    meaning: '(Büyük bir) değişiklik yapmak, bağları koparmak',
    definition: 'To make a decision to change something in your life, usually something significant.',
    ipa: '/meɪk ðə breɪk/',
    examples: ['I decided to make the break and buy my own place.'],
    exampleTranslations: ['Değişiklik yapmaya ve kendi yerimi satın almaya karar verdim.'],
    level: 'intermediate',
    collocations: ['finally make the break', 'time to make the change'],
    collocationMeanings: {
      'finally make the break': 'sonunda bağları koparmak/değişiklik yapmak',
      'time to make the change': 'değişiklik yapma zamanı',
    },
  },
  {
    id: 'make_up_my_mind',
    word: 'Make up my mind',
    pos: 'idiom',
    meaning: 'kararını vermek, kafasında netleştirmek',
    definition: 'To make a decision.',
    ipa: '/meɪk ʌp maɪ maɪnd/',
    examples: ['He made up his mind to attend the meeting.'],
    exampleTranslations: ['Toplantıya katılmaya karar verdi.'],
    level: 'intermediate',
    collocations: ['can\'t make up my mind', 'already made up my mind'],
    collocationMeanings: {
      'can\'t make up my mind': 'bir türlü karar veremiyorum',
      'already made up my mind': 'çoktan kararımı verdim',
    },
  },
  {
    id: 'make_use_of',
    word: 'Make use of',
    pos: 'phrase',
    meaning: 'yararlanmak, kullanmak',
    definition: 'To use someone or something for a particular purpose, especially one that brings a benefit to you.',
    ipa: '/meɪk juːs əv/',
    examples: ["Why doesn't she make use of her singing talent?"],
    exampleTranslations: ['Neden şarkı söyleme yeteneğinden yararlanmıyor?'],
    level: 'intermediate',
    collocations: ['make good use of', 'make better use of', 'make use of resources'],
    collocationMeanings: {
      'make good use of': 'iyi değerlendirmek',
      'make better use of': 'daha iyi yararlanmak',
      'make use of resources': 'kaynakları kullanmak',
    },
  },
  {
    id: 'make_yourself',
    word: 'Make yourself',
    pos: 'phrase',
    meaning: 'kendini (bir şey) yapmak/hazırlamak',
    definition: 'To create or produce something by working.',
    ipa: '/meɪk jɔːˈself/',
    examples: ['Jane made herself a drink while she waited.'],
    exampleTranslations: ['Jane beklerken kendine bir içecek hazırladı.'],
    level: 'intermediate',
    collocations: ['make yourself at home', 'make yourself comfortable'],
    collocationMeanings: {
      'make yourself at home': 'kendini evinde hisset',
      'make yourself comfortable': 'rahatına bak',
    },
  },
  {
    id: 'massive',
    word: 'Massive',
    pos: 'adjective',
    meaning: 'Çok büyük, ağır, kütlesel',
    definition: 'Very large or heavy.',
    ipa: '/ˈmæs.ɪv/',
    examples: ['There are the massive columns at Luxor.'],
    exampleTranslations: ['Luxor’da devasa sütunlar var.'],
    level: 'intermediate',
    collocations: ['massive amount', 'massive scale', 'massive project'],
    collocationMeanings: {
      'massive amount': 'muazzam miktar',
      'massive scale': 'büyük ölçek',
      'massive project': 'devasa proje',
    },
  },
  {
    id: 'mild',
    word: 'Mild',
    pos: 'adjective',
    meaning: 'Hafif (acı olmayan/yumuşak tat)',
    definition: 'Does not have a strong taste.',
    ipa: '/maɪld/',
    examples: ['The curry is actually quite mild.'],
    exampleTranslations: ['Köri aslında oldukça hafif.'],
    level: 'intermediate',
    collocations: ['mild weather', 'mild cheese', 'mild case of flu'],
    collocationMeanings: {
      'mild weather': 'ılıman hava',
      'mild cheese': 'yumuşak peynir',
      'mild case of flu': 'hafif grip vakası',
    },
  },
  {
    id: 'misplace',
    word: 'Misplace',
    pos: 'verb',
    meaning: 'Yanlış yere koymak, yerini unutmak',
    definition: 'To put something in the wrong place and lose it, especially temporarily.',
    ipa: '/ˌmɪsˈpleɪs/',
    examples: ["I misplaced my umbrella and now I'm really wet!"],
    exampleTranslations: ['Şemsiyemi yanlış yere koydum ve şimdi sırılsıklam oldum!'],
    level: 'intermediate',
    collocations: ['misplace keys', 'misplace trust', 'misplace glasses'],
    collocationMeanings: {
      'misplace keys': 'anahtarları bir yere koyup unutmak',
      'misplace trust': 'yanlış kişiye güvenmek',
      'misplace glasses': 'gözlüğün yerini unutmak',
    },
  },
  {
    id: 'misunderstand',
    word: 'Misunderstand',
    pos: 'verb',
    meaning: 'Yanlış anlamak',
    definition: 'To not understand someone or something correctly.',
    ipa: '/ˌmɪs.ʌn.dəˈstænd/',
    examples: ['I think he has misunderstood the problem.'],
    exampleTranslations: ['Bence o sorunu yanlış anladı.'],
    level: 'intermediate',
    collocations: ['completely misunderstand', 'easy to misunderstand'],
    collocationMeanings: {
      'completely misunderstand': 'tamamen yanlış anlamak',
      'easy to misunderstand': 'anlaşılması güç/yanlış anlaşılmaya müsait',
    },
  },
  {
    id: 'monolingual',
    word: 'Monolingual',
    pos: 'adjective',
    meaning: 'Tek dilli',
    definition: 'Speaking, writing, or using only one language.',
    ipa: '/ˌmɒn.əʊˈlɪŋ.ɡwəl/',
    examples: ['She only speaks French so she is monolingual.'],
    exampleTranslations: ['Sadece Fransızca konuşuyor, bu yüzden tek dilli.'],
    level: 'intermediate',
    collocations: ['monolingual dictionary', 'monolingual community'],
    collocationMeanings: {
      'monolingual dictionary': 'tek dilli sözlük',
      'monolingual community': 'tek dil konuşulan topluluk',
    },
  },
  {
    id: 'my_minds_gone_blank',
    word: "My mind's gone blank",
    pos: 'idiom',
    meaning: 'Zihnim durdu, aklıma hiçbir şey gelmiyor',
    definition: 'To not remember something or be able to think of something.',
    ipa: '/maɪ maɪndz ɡɒn blæŋk/',
    examples: ["I can't remember his name - my mind's gone blank."],
    exampleTranslations: ['Adını hatırlayamıyorum - zihnim boşaldı.'],
    level: 'intermediate',
    collocations: ['suddenly my mind\'s gone blank'],
    collocationMeanings: {
      'suddenly my mind\'s gone blank': 'zihnim aniden durdu/boşaldı',
    },
  },
  {
    id: 'notice',
    word: 'Notice',
    pos: 'verb',
    meaning: 'Fark etmek',
    definition: 'To become conscious of someone or something by seeing, hearing, or feeling them.',
    ipa: '/ˈnəʊ.tɪs/',
    examples: ['I noticed that the door was open.'],
    exampleTranslations: ['Kapının açık olduğunu fark ettim.'],
    level: 'intermediate',
    collocations: ['notice a difference', 'take notice', 'hardly notice'],
    collocationMeanings: {
      'notice a difference': 'farkı görmek',
      'take notice': 'dikkat etmek/farkına varmak',
      'hardly notice': 'neredeyse hiç fark etmemek',
    },
  },
  {
    id: 'nutty',
    word: 'Nutty',
    pos: 'adjective',
    meaning: 'Fındıklı/Fıstıklı, kuruyemiş tadında',
    definition: 'Containing nuts, or having the taste of nuts.',
    ipa: '/ˈnʌt.i/',
    examples: ['The biscuits were nutty.'],
    exampleTranslations: ['Bisküviler fındıklıydı.'],
    level: 'intermediate',
    collocations: ['nutty flavor', 'nutty taste'],
    collocationMeanings: {
      'nutty flavor': 'fındıksı aroma',
      'nutty taste': 'kuruyemiş tadı',
    },
  },
  {
    id: 'objective_b1',
    word: 'Objective',
    pos: 'noun',
    meaning: 'Hedef, amaç',
    definition: 'A large thing that you want to achieve.',
    ipa: '/əbˈdʒek.tɪv/',
    examples: ["I'm not sure I understand the objective of this exercise."],
    exampleTranslations: ['Bu egzersizin amacını anladığımdan emin değilim.'],
    level: 'intermediate',
    collocations: ['main objective', 'clear objective', 'reach an objective'],
    collocationMeanings: {
      'main objective': 'temel amaç',
      'clear objective': 'açık hedef',
      'reach an objective': 'bir hedefe ulaşmak',
    },
  },
  {
    id: 'observe_b1',
    word: 'Observe',
    pos: 'verb',
    meaning: 'Gözlemlemek',
    definition: 'To notice someone doing something, or to notice something happening.',
    ipa: '/əbˈzɜːv/',
    examples: ['Similar trends may be observed in most modern societies.'],
    exampleTranslations: ['Benzer eğilimler çoğu modern toplumda gözlemlenebilir.'],
    level: 'intermediate',
    collocations: ['observe behavior', 'carefully observe', 'observe silence'],
    collocationMeanings: {
      'observe behavior': 'davranışı izlemek',
      'carefully observe': 'dikkatlice gözlemlemek',
      'observe silence': 'sessizliği korumak/saygı duruşunda bulunmak',
    },
  },
  {
    id: 'oily',
    word: 'Oily',
    pos: 'adjective',
    meaning: 'Yağlı (kaygan/sıvı yağlı)',
    definition: 'Covered with oil, or containing oil.',
    ipa: '/ˈɔɪ.li/',
    examples: ['Oily fish such as mackerel or herring is good for you.'],
    exampleTranslations: ['Uskumru veya ringa balığı gibi yağlı balıklar sizin için iyidir.'],
    level: 'intermediate',
    collocations: ['oily skin', 'oily hair', 'oily surface'],
    collocationMeanings: {
      'oily skin': 'yağlı cilt',
      'oily hair': 'yağlı saç',
      'oily surface': 'kaygan/yağlı yüzey',
    },
  },
  {
    id: 'overcrowded',
    word: 'Overcrowded',
    pos: 'adjective',
    meaning: 'Aşırı kalabalık',
    definition: 'Containing too many people.',
    ipa: '/ˌəʊ.vəˈkraʊ.dɪd/',
    examples: ["This train is overcrowded - I can't find a seat."],
    exampleTranslations: ['Bu tren aşırı kalabalık - koltuk bulamıyorum.'],
    level: 'intermediate',
    collocations: ['overcrowded housing', 'become overcrowded'],
    collocationMeanings: {
      'overcrowded housing': 'aşırı kalabalık konutlar',
      'become overcrowded': 'çok kalabalıklaşmak',
    },
  },
  {
    id: 'overpopulated',
    word: 'Overpopulated',
    pos: 'adjective',
    meaning: 'Aşırı nüfuslu',
    definition: 'A place that has too many people living in it.',
    ipa: '/ˌəʊ.vəˈpɒp.jə.leɪ.tɪd/',
    examples: ['This city is overpopulated.'],
    exampleTranslations: ['Bu şehrin nüfusu çok fazla (aşırı nüfuslu).'],
    level: 'intermediate',
    collocations: ['overpopulated city', 'densely overpopulated'],
    collocationMeanings: {
      'overpopulated city': 'aşırı nüfuslu şehir',
      'densely overpopulated': 'yoğun bir şekilde aşırı nüfusa sahip',
    },
  },
  {
    id: 'overwork',
    word: 'Overwork',
    pos: 'verb',
    meaning: 'Fazla çalışmak, aşırı yüklenmek',
    definition: 'To work harder than you should.',
    ipa: '/ˌəʊ.vəˈwɜːk/',
    examples: ['I think people in that company are always overworked.'],
    exampleTranslations: ['Bence o şirketteki insanlar her zaman aşırı çalıştırılıyor.'],
    level: 'intermediate',
    collocations: ['suffer from overwork', 'exhausted from overwork'],
    collocationMeanings: {
      'suffer from overwork': 'aşırı çalışmaktan mustarip olmak',
      'exhausted from overwork': 'fazla çalışmaktan bitkin düşmek',
    },
  },
  {
    id: 'pay_attention_to',
    word: 'Pay attention to',
    pos: 'phrase',
    meaning: 'Dikkat etmek, kulak vermek',
    definition: 'To listen to, watch, or consider something or someone very carefully.',
    ipa: '/peɪ əˈten.ʃən tuː/',
    examples: ['Pay attention to the warnings printed on the label.'],
    exampleTranslations: ['Etikette basılı uyarılara dikkat edin.'],
    level: 'intermediate',
    collocations: ['pay close attention to', 'fail to pay attention to'],
    collocationMeanings: {
      'pay close attention to': 'yakından dikkat etmek',
      'fail to pay attention to': 'dikkat etmemek/gözden kaçırmak',
    },
  },
  {
    id: 'peppery',
    word: 'Peppery',
    pos: 'adjective',
    meaning: 'Biberli, acı',
    definition: 'Flavoured with or tasting like pepper.',
    ipa: '/ˈpep.ər.i/',
    examples: ['There is a peppery taste to this.'],
    exampleTranslations: ['Bunun biberli bir tadı var.'],
    level: 'intermediate',
    collocations: ['peppery aroma', 'peppery flavor', 'peppery sauce'],
    collocationMeanings: {
      'peppery aroma': 'biberimsi koku',
      'peppery flavor': 'acı/biberli tad',
      'peppery sauce': 'acı/biberli sos',
    },
  },
  {
    id: 'perform',
    word: 'Perform',
    pos: 'verb',
    meaning: 'Performans sergilemek, sahne almak',
    definition: 'To do something in front of an audience in order to entertain them.',
    ipa: '/pəˈfɔːm/',
    examples: ["He's a terrible actor because he can't perform on stage at all."],
    exampleTranslations: ['O berbat bir oyuncu çünkü sahnede hiç performans sergileyemiyor.'],
    level: 'intermediate',
    collocations: ['perform a surgery', 'perform a dance', 'perform live'],
    collocationMeanings: {
      'perform a surgery': 'ameliyat gerçekleştirmek',
      'perform a dance': 'dans sergilemek',
      'perform live': 'canlı performans sergilemek',
    },
  },
  {
    id: 'persuade_b1',
    word: 'Persuade',
    pos: 'verb',
    meaning: 'İkna etmek',
    definition: 'To make someone agree to do something by giving them reasons why they should.',
    ipa: '/pəˈsweɪd/',
    examples: ['He did finally come with us, although it took a long time to persuade him.'],
    exampleTranslations: ['Onu ikna etmek uzun sürse de sonunda bizimle geldi.'],
    level: 'intermediate',
    collocations: ['persuade someone to do', 'try to persuade', 'manage to persuade'],
    collocationMeanings: {
      'persuade someone to do': 'birini yapmaya ikna etmek',
      'try to persuade': 'ikna etmeye çalışmak',
      'manage to persuade': 'ikna etmeyi başarmak',
    },
  },
  {
    id: 'phrase',
    word: 'Phrase',
    pos: 'noun',
    meaning: 'İfade, söz öbeği',
    definition: 'A group of words that are used together in a fixed expression.',
    ipa: '/freɪz/',
    examples: ["Several of those interviewed used the phrase 'being my own boss'."],
    exampleTranslations: ["Görüşülen kişilerin birçoğu 'kendi patronum olmak' ifadesini kullandı."],
    level: 'intermediate',
    collocations: ['key phrase', 'common phrase', 'catchy phrase'],
    collocationMeanings: {
      'key phrase': 'anahtar ifade',
      'common phrase': 'yaygın tabir',
      'catchy phrase': 'akılda kalıcı ifade',
    },
  },
  {
    id: 'polluted',
    word: 'Polluted',
    pos: 'adjective',
    meaning: 'Kirli, kirlenmiş',
    definition: '(About air, water, or land) too dirty and dangerous for people to use in a safe way.',
    ipa: '/pəˈluː.tɪd/',
    examples: ['The oil spillage has polluted the harbour.'],
    exampleTranslations: ['Petrol sızıntısı limanı kirletti.'],
    level: 'intermediate',
    collocations: ['heavily polluted', 'polluted river', 'highly polluted'],
    collocationMeanings: {
      'heavily polluted': 'ağır şekilde kirlenmiş',
      'polluted river': 'kirli nehir',
      'highly polluted': 'yüksek derecede kirli',
    },
  },
  {
    id: 'possibility',
    word: 'Possibility',
    pos: 'noun',
    meaning: 'Olasılık, ihtimal',
    definition: 'The chance that something might happen or be true.',
    ipa: '/ˌpɒs.əˈbɪl.ə.ti/',
    examples: ["Another possibility is that we'll go to Mexico instead."],
    exampleTranslations: ['Diğer bir olasılık da onun yerine Meksika’ya gidecek olmamız.'],
    level: 'intermediate',
    collocations: ['strong possibility', 'real possibility', 'explore the possibility'],
    collocationMeanings: {
      'strong possibility': 'güçlü ihtimal',
      'real possibility': 'gerçek olasılık',
      'explore the possibility': 'olasılığı değerlendirmek/araştırmak',
    },
  },
  {
    id: 'prediction_b1',
    word: 'Prediction',
    pos: 'noun',
    meaning: 'Tahmin, öngörü',
    definition: 'A statement about what you think will happen in the future.',
    ipa: '/prɪˈdɪk.ʃən/',
    examples: ['The government has made a prediction that unemployment will rise this year.'],
    exampleTranslations: ['Hükümet, bu yıl işsizliğin artacağı yönünde bir öngörüde bulundu.'],
    level: 'intermediate',
    collocations: ['make a prediction', 'accurate prediction', 'prediction comes true'],
    collocationMeanings: {
      'make a prediction': 'tahminde bulunmak',
      'accurate prediction': 'doğru/isabetli tahmin',
      'prediction comes true': 'tahminin gerçekleşmesi',
    },
  },
  {
    id: 'produce',
    word: 'Produce',
    pos: 'verb',
    meaning: 'Üretmek, yapımcılığını üstlenmek',
    definition: 'To make or grow something, especially in large quantities and in order to be sold OR to organise the work and money involved in making a film, play, television programme, CD etc.',
    ipa: '/prəˈdjuːs/',
    examples: ['Steve McQueen produced and starred in the film.'],
    exampleTranslations: ['Steve McQueen filmin hem yapımcılığını üstlendi hem de başrolünde oynadı.'],
    level: 'intermediate',
    collocations: ['produce results', 'produce goods', 'mass produce'],
    collocationMeanings: {
      'produce results': 'sonuç üretmek',
      'produce goods': 'eşya/mal üretmek',
      'mass produce': 'seri üretim yapmak',
    },
  },
  {
    id: 'producer',
    word: 'Producer',
    pos: 'noun',
    meaning: 'Üretici, yapımcı',
    definition: 'A person or company that grows food or makes goods to be sold OR someone whose job is to organize the work and money involved in making a movie, play, television.',
    ipa: '/prəˈdjuː.sər/',
    examples: ['The producer was really angry with the director.'],
    exampleTranslations: ['Yapımcı, yönetmene gerçekten çok kızmıştı.'],
    level: 'intermediate',
    collocations: ['film producer', 'executive producer', 'leading producer'],
    collocationMeanings: {
      'film producer': 'film yapımcısı',
      'executive producer': 'yürütücü yapımcı',
      'leading producer': 'önde gelen üretici',
    },
  },
  {
    id: 'product_b1',
    word: 'Product',
    pos: 'noun',
    meaning: 'Ürün',
    definition: 'Something that is made, grown, or obtained in large quantities so that it can be sold.',
    ipa: '/ˈprɒd.ʌkt/',
    examples: ['Consumers are becoming more suspicious of advertising claims about products that they buy.'],
    exampleTranslations: ['Tüketiciler, satın aldıkları ürünlerle ilgili reklam iddialarına karşı daha şüpheci yaklaşıyorlar.'],
    level: 'intermediate',
    collocations: ['new product', 'high quality product', 'dairy products'],
    collocationMeanings: {
      'new product': 'yeni ürün',
      'high quality product': 'yüksek kaliteli ürün',
      'dairy products': 'süt ürünleri',
    },
  },
  {
    id: 'productive',
    word: 'Productive',
    pos: 'adjective',
    meaning: 'Üretken, verimli',
    definition: 'Working hard and producing or achieving a lot.',
    ipa: '/prəˈdʌk.tɪv/',
    examples: ['Samuel is more productive in the morning.'],
    exampleTranslations: ['Samuel sabahları daha verimlidir.'],
    level: 'intermediate',
    collocations: ['highly productive', 'productive meeting', 'productive afternoon'],
    collocationMeanings: {
      'highly productive': 'son derece verimli',
      'productive meeting': 'verimli toplantı',
      'productive afternoon': 'üretken geçen öğleden sonra',
    },
  },
  {
    id: 'proud_of',
    word: 'Proud of',
    pos: 'phrase',
    meaning: 'Gurur duymak',
    definition: 'Feeling happy about your achievements, your possessions, or people who you are connected with.',
    ipa: '/praʊd əv/',
    examples: ['He was very proud of himself for winning.'],
    exampleTranslations: ['Kazandığı için kendisiyle çok gurur duyuyordu.'],
    level: 'intermediate',
    collocations: ['immensely proud of', 'make someone proud of'],
    collocationMeanings: {
      'immensely proud of': 'fazlasıyla gurur duymak',
      'make someone proud of': 'birini kendisiyle gurur duyurmak',
    },
  },
  {
    id: 'put_a_plan_into_action',
    word: 'Put a plan into action',
    pos: 'phrase',
    meaning: 'Planı uygulamaya koymak, eyleme dökmek',
    definition: 'To start using an idea to succeed in doing something.',
    ipa: '/pʊt ə plæn ˈɪn.tu ˈæk.ʃən/',
    examples: ['We are ready to put our plan into action.'],
    exampleTranslations: ['Planımızı eyleme dökmeye hazırız.'],
    level: 'intermediate',
    collocations: ['finally put a plan into action', 'ready to put a plan into action'],
    collocationMeanings: {
      'finally put a plan into action': 'sonunda bir planı uygulamaya koymak',
      'ready to put a plan into action': 'bir planı uygulamaya koymaya hazır olmak',
    },
  },
  {
    id: 'put_away',
    word: 'Put away',
    pos: 'phrasal verb',
    meaning: 'Yerine koymak, kaldırmak',
    definition: 'To put something in the place where you usually keep it when you are not using it.',
    ipa: '/pʊt əˈweɪ/',
    examples: ['He put the notebook away and stood up.'],
    exampleTranslations: ['Not defterini yerine kaldırdı ve ayağa kalktı.'],
    level: 'intermediate',
    collocations: ['put away toys', 'put away laundry', 'put away dishes'],
    collocationMeanings: {
      'put away toys': 'oyuncakları kaldırmak',
      'put away laundry': 'çamaşırları yerleştirmek',
      'put away dishes': 'bulaşıkları kaldırmak',
    },
  },
  {
    id: 'put_my_mind_to',
    word: 'Put my mind to',
    pos: 'idiom',
    meaning: 'Kafaya koymak, kendini vermek',
    definition: 'To direct all one\'s attention to achieving something.',
    ipa: '/pʊt maɪ maɪnd tuː/',
    examples: ["She'd have made an excellent dancer, if she'd put her mind to it."],
    exampleTranslations: ['Eğer kafasına koysaydı (kendini verseydi) mükemmel bir dansçı olurdu.'],
    level: 'intermediate',
    collocations: ['put your mind to the task', 'really put your mind to it'],
    collocationMeanings: {
      'put your mind to the task': 'kendini işe vermek',
      'really put your mind to it': 'gerçekten kafaya koymak',
    },
  },
  {
    id: 'put_off',
    word: 'Put off',
    pos: 'phrasal verb',
    meaning: 'Ertelemek',
    definition: 'To decide to do something later, not now.',
    ipa: '/pʊt ɒf/',
    examples: ["You can't put the decision off any longer."],
    exampleTranslations: ['Kararı daha fazla erteleyemezsin.'],
    level: 'intermediate',
    collocations: ['put off a meeting', 'put off a decision', 'keep putting off'],
    collocationMeanings: {
      'put off a meeting': 'toplantıyı ertelemek',
      'put off a decision': 'bir kararı ertelemek',
      'keep putting off': 'erteleyip durmak',
    },
  },
  {
    id: 'quit_a_bad_habit',
    word: 'Quit a bad habit',
    pos: 'phrase',
    meaning: 'Kötü bir alışkanlığı bırakmak',
    definition: 'To stop doing something that is not good for you.',
    ipa: '/kwɪt ə bæd ˈhæb.ɪt/',
    examples: ['You should quit biting your nails.'],
    exampleTranslations: ['Tırnaklarını yemeyi bırakmalısın.'],
    level: 'intermediate',
    collocations: ['try to quit a bad habit', 'struggle to quit a bad habit'],
    collocationMeanings: {
      'try to quit a bad habit': 'kötü bir alışkanlığı bırakmaya çalışmak',
      'struggle to quit a bad habit': 'kötü bir alışkanlığı bırakmakta zorlanmak',
    },
  },
  {
    id: 'reach_a_target_b1',
    word: 'Reach a target',
    pos: 'phrase',
    meaning: 'Hedefe ulaşmak',
    definition: 'To achieve something.',
    ipa: '/riːtʃ ə ˈtɑː.ɡɪt/',
    examples: ['I aim to reach the target by March.'],
    exampleTranslations: ['Mart ayına kadar hedefe ulaşmayı hedefliyorum.'],
    level: 'intermediate',
    collocations: ['easily reach a target', 'fail to reach a target'],
    collocationMeanings: {
      'easily reach a target': 'hedefe kolayca ulaşmak',
      'fail to reach a target': 'hedefe ulaşamamak',
    },
  },
  {
    id: 'rebuild',
    word: 'Rebuild',
    pos: 'verb',
    meaning: 'Yeniden inşa etmek',
    definition: 'To build something again after it has been damaged or destroyed.',
    ipa: '/ˌriːˈbɪld/',
    examples: ['They had to rebuild the theatre after the fire.'],
    exampleTranslations: ['Yangından sonra tiyatroyu yeniden inşa etmek zorunda kaldılar.'],
    level: 'intermediate',
    collocations: ['rebuild trust', 'rebuild a life', 'rebuild a city'],
    collocationMeanings: {
      'rebuild trust': 'güveni yeniden tesis etmek',
      'rebuild a life': 'hayatı yeniden kurmak',
      'rebuild a city': 'bir şehri yeniden inşa etmek',
    },
  },
  {
    id: 'recognise',
    word: 'Recognise',
    pos: 'verb',
    meaning: 'Tanımak (daha önce gördüğü birini/şeyi)',
    definition: 'To know who the person is or what the thing is that you are seeing, hearing etc. because you have seen, heard etc. them before.',
    ipa: '/ˈrek.əɡ.naɪz/',
    examples: ['I hardly recognized you with a beard!'],
    exampleTranslations: ['Seni sakalla neredeyse tanıyamadım!'],
    level: 'intermediate',
    collocations: ['instantly recognize', 'fail to recognize', 'recognize a voice'],
    collocationMeanings: {
      'instantly recognize': 'anında tanımak',
      'fail to recognize': 'tanıyamamak',
      'recognize a voice': 'bir sesi tanımak',
    },
  },
  {
    id: 'recording_studio',
    word: 'Recording studio',
    pos: 'noun',
    meaning: 'Kayıt stüdyosu',
    definition: 'A place where music or speech can be recorded.',
    ipa: '/rɪˈkɔː.dɪŋ ˈstjuː.di.əʊ/',
    examples: ['They were in the recording studio all day.'],
    exampleTranslations: ['Bütün gün kayıt stüdyosundaydılar.'],
    level: 'intermediate',
    collocations: ['professional recording studio', 'book a recording studio'],
    collocationMeanings: {
      'professional recording studio': 'profesyonel kayıt stüdyosu',
      'book a recording studio': 'kayıt stüdyosu kiralamak/rezerve etmek',
    },
  },
  {
    id: 'recycle',
    word: 'Recycle',
    pos: 'verb',
    meaning: 'Geri dönüştürmek',
    definition: 'To change waste materials such as newspapers and bottles so that they can be used again.',
    ipa: '/ˌriːˈsaɪ.kəl/',
    examples: ['Japan recycles 40% of its waste.'],
    exampleTranslations: ['Japonya atıklarının %40’ını geri dönüştürüyor.'],
    level: 'intermediate',
    collocations: ['recycle plastic', 'recycle paper', 'encourage to recycle'],
    collocationMeanings: {
      'recycle plastic': 'plastiği geri dönüştürmek',
      'recycle paper': 'kağıdı geri dönüştürmek',
      'encourage to recycle': 'geri dönüşüme teşvik etmek',
    },
  },
  {
    id: 'reduce_b1',
    word: 'Reduce',
    pos: 'verb',
    meaning: 'Azaltmak, düşürmek',
    definition: 'To make something smaller or less in size, amount, importance etc.',
    ipa: '/rɪˈdjuːs/',
    examples: ['Try to reduce the amount of fat in your diet.'],
    exampleTranslations: ['Diyetinizdeki yağ miktarını azaltmaya çalışın.'],
    level: 'intermediate',
    collocations: ['significantly reduce', 'reduce costs', 'reduce risks'],
    collocationMeanings: {
      'significantly reduce': 'önemli ölçüde azaltmak',
      'reduce costs': 'maliyetleri düşürmek',
      'reduce risks': 'riskleri azaltmak',
    },
  },
  {
    id: 'refuse',
    word: 'Refuse',
    pos: 'verb',
    meaning: 'Reddetmek, geri çevirmek',
    definition: 'To say you will not do something that someone has asked you to do.',
    ipa: '/rɪˈfjuːz/',
    examples: ['Mum asked him to apologize, but he refused.'],
    exampleTranslations: ['Annem özür dilemesini istedi ama o reddetti.'],
    level: 'intermediate',
    collocations: ['refuse to accept', 'flatly refuse', 'refuse an offer'],
    collocationMeanings: {
      'refuse to accept': 'kabul etmeyi reddetmek',
      'flatly refuse': 'kesin bir dille reddetmek',
      'refuse an offer': 'bir teklifi geri çevirmek',
    },
  },
  {
    id: 'regret_b1',
    word: 'Regret',
    pos: 'verb',
    meaning: 'Pişman olmak, üzülmek',
    definition: 'To feel sorry or sad that something has happened.',
    ipa: '/rɪˈɡret/',
    examples: ['We regret any inconvenience caused by the delay.'],
    exampleTranslations: ['Gecikmenin neden olduğu her türlü rahatsızlıktan dolayı üzgünüz.'],
    level: 'intermediate',
    collocations: ['deeply regret', 'express regret', 'bitterly regret'],
    collocationMeanings: {
      'deeply regret': 'derin pişmanlık duymak',
      'express regret': 'pişmanlığını dile getirmek',
      'bitterly regret': 'acı bir şekilde pişman olmak',
    },
  },
  {
    id: 'rehearsal_room',
    word: 'Rehearsal room',
    pos: 'noun',
    meaning: 'Prova odası',
    definition: 'A place to practise for a performance of a play, concert, opera etc.',
    ipa: '/rɪˈhɜː.səl ruːm/',
    examples: ['We need to find a rehearsal room to practise.'],
    exampleTranslations: ['Pratik yapmak için bir prova odası bulmamız gerekiyor.'],
    level: 'intermediate',
    collocations: ['book a rehearsal room', 'noisy rehearsal room'],
    collocationMeanings: {
      'book a rehearsal room': 'prova odası rezerve etmek',
      'noisy rehearsal room': 'gürültülü prova odası',
    },
  },
  {
    id: 'rehearse',
    word: 'Rehearse',
    pos: 'verb',
    meaning: 'Prova yapmak',
    definition: 'To practise a play, concert, opera etc. before giving a performance.',
    ipa: '/rɪˈhɜːs/',
    examples: ["We've been rehearsing for weeks."],
    exampleTranslations: ['Haftalardır prova yapıyoruz.'],
    level: 'intermediate',
    collocations: ['rehearse a play', 'rehearse a song', 'constantly rehearse'],
    collocationMeanings: {
      'rehearse a play': 'oyun provası yapmak',
      'rehearse a song': 'şarkı provası yapmak',
      'constantly rehearse': 'sürekli prova yapmak',
    },
  },
  {
    id: 'relative',
    word: 'Relative',
    pos: 'noun',
    meaning: 'Akraba',
    definition: 'Members of your family, especially ones who do not live with you, for example a grandparent or cousin.',
    ipa: '/ˈrel.ə.tɪv/',
    examples: ['We spent the week visiting relatives.'],
    exampleTranslations: ['Haftayı akrabaları ziyaret ederek geçirdik.'],
    level: 'intermediate',
    collocations: ['close relative', 'distant relative', 'family relative'],
    collocationMeanings: {
      'close relative': 'yakın akraba',
      'distant relative': 'uzak akraba',
      'family relative': 'aile akrabası',
    },
  },
  {
    id: 'rely_on',
    word: 'Rely on',
    pos: 'phrasal verb',
    meaning: 'Güvenmek, bel bağlamak',
    definition: 'To trust someone to do something for you.',
    ipa: '/rɪˈlaɪ ɒn/',
    examples: ['We can rely on my brother to help us.'],
    exampleTranslations: ['Bize yardım etmesi için erkek kardeşime güvenebiliriz.'],
    level: 'intermediate',
    collocations: ['rely heavily on', 'can rely on', 'rely on technology'],
    collocationMeanings: {
      'rely heavily on': 'büyük ölçüde güvenmek',
      'can rely on': 'güvenebilirsin',
      'rely on technology': 'teknolojiye bel bağlamak',
    },
  },
  {
    id: 'remind_b1',
    word: 'Remind',
    pos: 'verb',
    meaning: 'Hatırlatmak',
    definition: 'To tell someone again about an event from the past or about a fact that they used to know.',
    ipa: '/rɪˈmaɪnd/',
    examples: ["I can't think of his name – can you remind me?"],
    exampleTranslations: ['Adını çıkaramıyorum – bana hatırlatabilir misin?'],
    level: 'intermediate',
    collocations: ['remind someone of', 'gently remind', 'remind me later'],
    collocationMeanings: {
      'remind someone of': 'birine bir şeyi hatırlatmak',
      'gently remind': 'nazikçe hatırlatmak',
      'remind me later': 'bana sonra hatırlat',
    },
  },
  {
    id: 'repeat_b1',
    word: 'Repeat',
    pos: 'verb',
    meaning: 'Tekrar etmek',
    definition: 'To say or write something again.',
    ipa: '/rɪˈpiːt/',
    examples: ['Can you repeat what you just said, please?'],
    exampleTranslations: ['Lütfen az önce söylediğini tekrar edebilir misin?'],
    level: 'intermediate',
    collocations: ['repeat a question', 'repeat a word', 'don\'t repeat this'],
    collocationMeanings: {
      'repeat a question': 'soruyu tekrarlamak',
      'repeat a word': 'kelimeyi tekrarlamak',
      'don\'t repeat this': 'bunu tekrarlama (gizli tut)',
    },
  },
  {
    id: 'reply_b1',
    word: 'Reply',
    pos: 'verb',
    meaning: 'Cevap vermek, yanıtlamak',
    definition: 'To say, write, or do something as an answer.',
    ipa: '/rɪˈplaɪ/',
    examples: ["'I know,' Corbett replied quietly."],
    exampleTranslations: ["'Biliyorum,' diye yanıtladı Corbett sessizce."],
    level: 'intermediate',
    collocations: ['reply to an email', 'reply immediately', 'prompt reply'],
    collocationMeanings: {
      'reply to an email': 'e-postayı yanıtlamak',
      'reply immediately': 'anında cevap vermek',
      'prompt reply': 'hızlı yanıt',
    },
  },
  {
    id: 'rethink',
    word: 'Rethink',
    pos: 'verb',
    meaning: 'Yeniden düşünmek, gözden geçirmek',
    definition: 'To consider something such as an idea, plan, or system again in order to change it.',
    ipa: '/ˌriːˈθɪŋk/',
    examples: ['Competitive pressures are forcing managers to rethink their strategies.'],
    exampleTranslations: ['Rekabetçi baskılar, yöneticileri stratejilerini yeniden gözden geçirmeye zorluyor.'],
    level: 'intermediate',
    collocations: ['rethink strategy', 'complete rethink', 'force to rethink'],
    collocationMeanings: {
      'rethink strategy': 'stratejiyi yeniden düşünmek',
      'complete rethink': 'tamamen yeniden gözden geçirme',
      'force to rethink': 'yeniden düşünmeye zorlamak',
    },
  },
  {
    id: 'retire',
    word: 'Retire',
    pos: 'verb',
    meaning: 'Emekli olmak',
    definition: 'To stop working, especially when you reach the age when you are officially too old to work.',
    ipa: '/rɪˈtaɪər/',
    examples: ['At what age do you plan to retire?'],
    exampleTranslations: ['Kaç yaşında emekli olmayı planlıyorsun?'],
    level: 'intermediate',
    collocations: ['retire from work', 'early retirement', 'plan to retire'],
    collocationMeanings: {
      'retire from work': 'işten emekli olmak',
      'early retirement': 'erken emeklilik',
      'plan to retire': 'emekli olmayı planlamak',
    },
  },
  {
    id: 'reuse',
    word: 'Reuse',
    pos: 'verb',
    meaning: 'Yeniden kullanmak',
    definition: 'To use something again, sometimes for a different purpose.',
    ipa: '/ˌriːˈjuːz/',
    examples: ['My daughter reuses envelopes.'],
    exampleTranslations: ['Kızım zarfları yeniden kullanıyor.'],
    level: 'intermediate',
    collocations: ['reuse bags', 'recycle and reuse', 'wash and reuse'],
    collocationMeanings: {
      'reuse bags': 'çantaları tekrar kullanmak',
      'recycle and reuse': 'geri dönüştür ve tekrar kullan',
      'wash and reuse': 'yıka ve tekrar kullan',
    },
  },
  {
    id: 'reward_yourself',
    word: 'Reward yourself',
    pos: 'phrase',
    meaning: 'Kendini ödüllendirmek',
    definition: 'To give yourself something as a reward, for example praise, success, or money.',
    ipa: '/rɪˈwɔːrd jɔːˈself/',
    examples: ['He liked to reward himself with a short break every two hours.'],
    exampleTranslations: ['Her iki saatte bir kısa bir mola vererek kendini ödüllendirmeyi severdi.'],
    level: 'intermediate',
    collocations: ['reward yourself for hard work', 'reward yourself with a treat'],
    collocationMeanings: {
      'reward yourself for hard work': 'sıkı çalışma için kendini ödüllendirmek',
      'reward yourself with a treat': 'kendini bir hediye/ikramla ödüllendirmek',
    },
  },
  {
    id: 'road_works',
    word: 'Road works',
    pos: 'noun',
    meaning: 'Yol çalışması',
    definition: 'Repairs that are done to the surface of a road.',
    ipa: '/rəʊd wɜːks/',
    examples: ['There are road works here because they are changing the road.'],
    exampleTranslations: ['Burada yol çalışması var çünkü yolu değiştiriyorlar.'],
    level: 'intermediate',
    collocations: ['heavy road works', 'major road works', 'delayed by road works'],
    collocationMeanings: {
      'heavy road works': 'yoğun yol çalışması',
      'major road works': 'büyük çaplı yol çalışması',
      'delayed by road works': 'yol çalışması nedeniyle gecikmek',
    },
  },
  {
    id: 'rubbish',
    word: 'Rubbish',
    pos: 'noun',
    meaning: 'Çöp',
    definition: 'Things that you throw away because they are no longer useful.',
    ipa: '/ˈrʌb.ɪʃ/',
    examples: ['The streets were littered with rubbish.'],
    exampleTranslations: ['Sokaklar çöplerle doluydu.'],
    level: 'intermediate',
    collocations: ['rubbish bin', 'collect rubbish', 'absolute rubbish'],
    collocationMeanings: {
      'rubbish bin': 'çöp tenekesi',
      'collect rubbish': 'çöp toplamak',
      'absolute rubbish': 'tamamen saçmalık (argoda)',
    },
  },
  {
    id: 'run_a_company',
    word: 'Run a company',
    pos: 'phrase',
    meaning: 'Şirket yönetmek',
    definition: 'To manage a large organization.',
    ipa: '/rʌn ə ˈkʌm.pə.ni/',
    examples: ['I would love to run a company one day.'],
    exampleTranslations: ['Bir gün bir şirket yönetmeyi çok isterim.'],
    level: 'intermediate',
    collocations: ['successfully run a company', 'experience to run a company'],
    collocationMeanings: {
      'successfully run a company': 'bir şirket başarıyla yönetmek',
      'experience to run a company': 'şirket yönetmek için gereken tecrübe',
    },
  },
  {
    id: 'runny',
    word: 'Runny',
    pos: 'adjective',
    meaning: 'Akışkan, sıvılaşmış (yumurta için rafadan)',
    definition: 'Like a liquid.',
    ipa: '/ˈrʌn.i/',
    examples: ['Do you like your eggs cooked hard or runny?'],
    exampleTranslations: ['Yumurtanızı katı mı yoksa rafadan mı seversiniz?'],
    level: 'intermediate',
    collocations: ['runny nose', 'runny egg', 'runny honey'],
    collocationMeanings: {
      'runny nose': 'burun akıntısı',
      'runny egg': 'rafadan yumurta',
      'runny honey': 'akışkan bal',
    },
  },
  {
    id: 'rush_hour',
    word: 'Rush hour',
    pos: 'noun',
    meaning: 'İş çıkış saati, trafiğin yoğun olduğu saat',
    definition: 'The time of day when there are a lot of cars on the road because most people are travelling to or from work.',
    ipa: '/ˈrʌʃ ˌaʊər/',
    examples: ['I hate travelling in rush hour because everything is so slow.'],
    exampleTranslations: ['Trafiğin yoğun olduğu saatlerde seyahat etmekten nefret ediyorum çünkü her şey çok yavaş ilerliyor.'],
    level: 'intermediate',
    collocations: ['morning rush hour', 'evening rush hour', 'avoid rush hour'],
    collocationMeanings: {
      'morning rush hour': 'sabah trafiği',
      'evening rush hour': 'akşam trafiği',
      'avoid rush hour': 'yoğun trafik saatlerinden kaçınmak',
    },
  },
  {
    id: 'salary',
    word: 'Salary',
    pos: 'noun',
    meaning: 'Maaş',
    definition: 'An amount of money received every month or year for the work you do.',
    ipa: '/ˈsæl.ər.i/',
    examples: ['When I earn a salary, I can save to buy a house.'],
    exampleTranslations: ['Maaş almaya başladığımda, ev almak için birikim yapabilirim.'],
    level: 'intermediate',
    collocations: ['annual salary', 'high salary', 'earn a salary'],
    collocationMeanings: {
      'annual salary': 'yıllık maaş',
      'high salary': 'yüksek maaş',
      'earn a salary': 'maaş kazanmak',
    },
  },
  {
    id: 'salty',
    word: 'Salty',
    pos: 'adjective',
    meaning: 'Tuzlu',
    definition: 'Containing salt, or tasting like salt.',
    ipa: '/ˈsɒl.ti/',
    examples: ["The soup's a bit salty."],
    exampleTranslations: ['Çorba biraz tuzlu.'],
    level: 'intermediate',
    collocations: ['salty taste', 'salty sea air', 'too salty'],
    collocationMeanings: {
      'salty taste': 'tuzlu tad',
      'salty sea air': 'tuzlu deniz havası',
      'too salty': 'çok tuzlu',
    },
  },
  {
    id: 'savoury',
    word: 'Savoury',
    pos: 'adjective',
    meaning: 'Tuzlu/Baharatlı (tatlı olmayan)',
    definition: 'Tasting of salt or spices and not sweet.',
    ipa: '/ˈseɪ.vər.i/',
    examples: ['I bought some savoury snacks.'],
    exampleTranslations: ['Bazı tuzlu/atıştırmalıklar aldım.'],
    level: 'intermediate',
    collocations: ['savoury dish', 'savoury snack', 'savoury smell'],
    collocationMeanings: {
      'savoury dish': 'tuzlu/baharatlı yemek',
      'savoury snack': 'tuzlu atıştırmalık',
      'savoury smell': 'iştah açıcı baharat kokusu',
    },
  },
  {
    id: 'say_b1',
    word: 'Say',
    pos: 'verb',
    meaning: 'Söylemek, demek',
    definition: 'To express something using words.',
    ipa: '/seɪ/',
    examples: ["'Pleased to meet you,' he said with a smile."],
    exampleTranslations: ["'Tanıştığımıza memnun oldum,' dedi gülümseyerek."],
    level: 'intermediate',
    collocations: ['say hello', 'say goodbye', 'say sorry'],
    collocationMeanings: {
      'say hello': 'selam vermek',
      'say goodbye': 'hoşça kal demek',
      'say sorry': 'özür dilemek',
    },
  },
  {
    id: 'scene',
    word: 'Scene',
    pos: 'noun',
    meaning: 'Sahne (film/tiyatro bölümü)',
    definition: 'A part of a play, book, film etc. in which events happen.',
    ipa: '/siːn/',
    examples: ['They watched the opening scene of Macbeth.'],
    exampleTranslations: ['Macbeth’in açılış sahnesini izlediler.'],
    level: 'intermediate',
    collocations: ['crime scene', 'opening scene', 'movie scene'],
    collocationMeanings: {
      'crime scene': 'olay yeri',
      'opening scene': 'açılış sahnesi',
      'movie scene': 'film sahnesi',
    },
  },
  {
    id: 'schedule_b1',
    word: 'Schedule',
    pos: 'verb',
    meaning: 'Program, takvim',
    definition: 'To plan exactly when you will do something.',
    ipa: '/ˈʃedʒ.uːl/',
    examples: ["What's on your schedule today?"],
    exampleTranslations: ['Bugün programında ne var?'],
    level: 'intermediate',
    collocations: ['busy schedule', 'on schedule', 'ahead of schedule'],
    collocationMeanings: {
      'busy schedule': 'yoğun program',
      'on schedule': 'zamanında/takvime uygun',
      'ahead of schedule': 'vaktinden önce',
    },
  },
  {
    id: 'scientific_b1',
    word: 'Scientific',
    pos: 'adjective',
    meaning: 'Bilimsel',
    definition: 'Relating to science, or based on its methods.',
    ipa: '/ˌsaɪənˈtɪf.ɪk/',
    examples: ['Newton made an important scientific discovery.'],
    exampleTranslations: ['Newton önemli bir bilimsel keşif yaptı.'],
    level: 'intermediate',
    collocations: ['scientific research', 'scientific discovery', 'scientific proof'],
    collocationMeanings: {
      'scientific research': 'bilimsel araştırma',
      'scientific discovery': 'bilimsel buluş',
      'scientific proof': 'bilimsel kanıt',
    },
  },
  {
    id: 'sensible',
    word: 'Sensible',
    pos: 'adjective',
    meaning: 'Mantıklı, aklı başında',
    definition: 'Someone who is reasonable and practical.',
    ipa: '/ˈsen.sə.bəl/',
    examples: ["I don't see how any sensible person could agree with him."],
    exampleTranslations: ['Aklı başında herhangi birinin ona nasıl katılabileceğini anlamıyorum.'],
    level: 'intermediate',
    collocations: ['sensible advice', 'sensible decision', 'sensible approach'],
    collocationMeanings: {
      'sensible advice': 'mantıklı tavsiye',
      'sensible decision': 'akılcı karar',
      'sensible approach': 'makul yaklaşım',
    },
  },
  {
    id: 'set_goals',
    word: 'Set short-term and long-term goals',
    pos: 'phrase',
    meaning: 'Kısa ve uzun vadeli hedefler belirlemek',
    definition: 'To decide what you want to achieve in the near future and for the future generally.',
    ipa: '/set ʃɔːrt tɜːm ænd lɒŋ tɜːm ɡəʊlz/',
    examples: ["It's important to set short-term and long-term goals for your career."],
    exampleTranslations: ['Kariyeriniz için kısa ve uzun vadeli hedefler belirlemek önemlidir.'],
    level: 'intermediate',
    collocations: ['set goals for the year', 'need to set goals'],
    collocationMeanings: {
      'set goals for the year': 'yıl için hedefler belirlemek',
      'need to set goals': 'hedefler koymaya ihtiyaç duymak',
    },
  },
  {
    id: 'set_up',
    word: 'Set up',
    pos: 'phrasal verb',
    meaning: 'Kurmak, düzenlemek',
    definition: 'To organize or plan something such as an event or system.',
    ipa: '/set ʌp/',
    examples: ['A film night would be very easy to set up.'],
    exampleTranslations: ['Bir film gecesi düzenlemek çok kolay olurdu.'],
    level: 'intermediate',
    collocations: ['set up a business', 'set up a meeting', 'set up a system'],
    collocationMeanings: {
      'set up a business': 'iş kurmak',
      'set up a meeting': 'toplantı ayarlamak',
      'set up a system': 'sistem kurmak',
    },
  },
  {
    id: 'set_yourself',
    word: 'Set yourself',
    pos: 'phrase',
    meaning: 'Kendine (hedef vb.) koymak',
    definition: 'To give something to yourself to do or to achieve.',
    ipa: '/set jɔːˈself/',
    examples: ['I like to set myself exercise targets for the week.'],
    exampleTranslations: ['Kendime haftalık egzersiz hedefleri koymayı seviyorum.'],
    level: 'intermediate',
    collocations: ['set yourself a goal', 'set yourself a task', 'set yourself high standards'],
    collocationMeanings: {
      'set yourself a goal': 'kendine bir hedef koymak',
      'set yourself a task': 'kendine bir görev belirlemek',
      'set yourself high standards': 'kendine yüksek standartlar koymak',
    },
  },
  {
    id: 'severe_delay',
    word: 'Severe delay',
    pos: 'phrase',
    meaning: 'Ciddi gecikme',
    definition: 'A situation in which a plane, train etc. leaves or arrives very late.',
    ipa: '/sɪˈvɪər dɪˈleɪ/',
    examples: ['There is a severe delay on the motorway due to an accident.'],
    exampleTranslations: ['Kaza nedeniyle otoyolda ciddi bir gecikme var.'],
    level: 'intermediate',
    collocations: ['experience a severe delay', 'cause a severe delay'],
    collocationMeanings: {
      'experience a severe delay': 'ciddi bir gecikme yaşamak',
      'cause a severe delay': 'ciddi gecikmeye sebep olmak',
    },
  },
  {
    id: 'shout',
    word: 'Shout',
    pos: 'verb',
    meaning: 'Bağırmak, haykırmak',
    definition: 'To say something in a loud voice.',
    ipa: '/ʃaʊt/',
    examples: ["'Stop!' he shouted."],
    exampleTranslations: ["'Dur!' diye bağırdı."],
    level: 'intermediate',
    collocations: ['shout at someone', 'shout for help', 'shout loudly'],
    collocationMeanings: {
      'shout at someone': 'birine bağırmak',
      'shout for help': 'yardım için bağırmak',
      'shout loudly': 'yüksek sesle bağırmak',
    },
  },
  {
    id: 'situation_b1',
    word: 'Situation',
    pos: 'noun',
    meaning: 'Durum, vaziyet',
    definition: 'The set of conditions that exist at a particular time in a particular place.',
    ipa: '/ˌsɪtʃ.uˈeɪ.ʃən/',
    examples: ['If the situation had been different, their plan might have succeeded.'],
    exampleTranslations: ['Durum farklı olsaydı, planları başarılı olabilirdi.'],
    level: 'intermediate',
    collocations: ['difficult situation', 'current situation', 'win-win situation'],
    collocationMeanings: {
      'difficult situation': 'zor durum',
      'current situation': 'mevcut durum',
      'win-win situation': 'her iki tarafın da kazandığı durum',
    },
  },
  {
    id: 'slight_delay',
    word: 'Slight delay',
    pos: 'phrase',
    meaning: 'Ufak gecikme',
    definition: 'A situation in which a plane, train etc. leaves or arrives a little bit late.',
    ipa: '/slaɪt dɪˈleɪ/',
    examples: ['There is a slight delay to the flight.'],
    exampleTranslations: ['Uçuşta ufak bir gecikme var.'],
    level: 'intermediate',
    collocations: ['expect a slight delay', 'cause a slight delay'],
    collocationMeanings: {
      'expect a slight delay': 'ufak bir gecikme beklemek',
      'cause a slight delay': 'küçük bir gecikmeye neden olmak',
    },
  },
  {
    id: 'sophisticated_b1',
    word: 'Sophisticated',
    pos: 'adjective',
    meaning: 'Gelişmiş, sofistike, kültürlü',
    definition: 'Complicated and advanced.',
    ipa: '/səˈfɪs.tɪ.keɪ.tɪd/',
    examples: ['There is highly sophisticated surveillance equipment.'],
    exampleTranslations: ['Son derece gelişmiş (sofistike) gözetleme ekipmanları var.'],
    level: 'intermediate',
    collocations: ['sophisticated technology', 'sophisticated taste', 'highly sophisticated'],
    collocationMeanings: {
      'sophisticated technology': 'ileri teknoloji',
      'sophisticated taste': 'seçkin zevk',
      'highly sophisticated': 'son derece gelişmiş',
    },
  },
  {
    id: 'sort',
    word: 'Sort',
    pos: 'verb',
    meaning: 'Sıralamak, ayıklamak',
    definition: 'To arrange things in groups or in a particular order, for example by date, importance, size, or colour.',
    ipa: '/sɔːt/',
    examples: ['Once the data is collected, the computer will sort it by date.'],
    exampleTranslations: ['Veriler toplandıktan sonra bilgisayar bunları tarihe göre sıralayacaktır.'],
    level: 'intermediate',
    collocations: ['sort by size', 'sort out a problem', 'sort through papers'],
    collocationMeanings: {
      'sort by size': 'boyuta göre sıralamak',
      'sort out a problem': 'bir sorunu halletmek',
      'sort through papers': 'kağıtları ayıklamak/gözden geçirmek',
    },
  },
  {
    id: 'spectator',
    word: 'Spectator',
    pos: 'noun',
    meaning: 'İzleyici (spor vb. için)',
    definition: 'Someone who watches a public activity or event, especially a sports event.',
    ipa: '/spekˈteɪ.tər/',
    examples: ['The final game attracted a crowd of over 50,000 spectators.'],
    exampleTranslations: ['Final maçı 50.000’den fazla seyirci çekti.'],
    level: 'intermediate',
    collocations: ['crowd of spectators', 'cheering spectators'],
    collocationMeanings: {
      'crowd of spectators': 'izleyici kitlesi',
      'cheering spectators': 'tezahürat yapan seyirciler',
    },
  },
  {
    id: 'spot',
    word: 'Spot',
    pos: 'verb',
    meaning: 'Fark etmek, gözüne ilişmek',
    definition: 'To notice someone or something.',
    ipa: '/spɒt/',
    examples: ['Hugh was spotted by local police and had to leave quickly.'],
    exampleTranslations: ['Hugh yerel polis tarafından fark edildi ve hızla oradan ayrılmak zorunda kaldı.'],
    level: 'intermediate',
    collocations: ['spot the difference', 'spot a mistake', 'hard to spot'],
    collocationMeanings: {
      'spot the difference': 'farkı bulmak',
      'spot a mistake': 'bir hatayı fark etmek',
      'hard to spot': 'fark etmesi zor',
    },
  },
  {
    id: 'stare',
    word: 'Stare',
    pos: 'verb',
    meaning: 'Dik dik bakmak',
    definition: 'To look at someone or something very directly for a long time.',
    ipa: '/steər/',
    examples: ["It's rude to stare."],
    exampleTranslations: ['Dik dik bakmak kabalıktır.'],
    level: 'intermediate',
    collocations: ['stare at someone', 'blank stare', 'stare in amazement'],
    collocationMeanings: {
      'stare at someone': 'birine dik dik bakmak',
      'blank stare': 'boş bakış',
      'stare in amazement': 'hayretle bakmak',
    },
  },
  {
    id: 'start_off',
    word: 'Start off',
    pos: 'phrasal verb',
    meaning: 'Başlamak (bir işe/konuma)',
    definition: 'To begin, especially in a particular way or by doing a particular thing.',
    ipa: '/stɑːt ɒf/',
    examples: ['Many store managers started off as sales assistants.'],
    exampleTranslations: ['Birçok mağaza müdürü işe satış asistanı olarak başladı.'],
    level: 'intermediate',
    collocations: ['start off with', 'start off small'],
    collocationMeanings: {
      'start off with': 'ile başlamak',
      'start off small': 'küçükten başlamak',
    },
  },
  {
    id: 'sticky',
    word: 'Sticky',
    pos: 'adjective',
    meaning: 'Yapışkan',
    definition: 'A sticky substance sticks to other things.',
    ipa: '/ˈstɪk.i/',
    examples: ['This honey is very sticky.'],
    exampleTranslations: ['Bu bal çok yapışkan.'],
    level: 'intermediate',
    collocations: ['sticky fingers', 'sticky tape', 'sticky situation'],
    collocationMeanings: {
      'sticky fingers': 'yapışkan parmaklar',
      'sticky tape': 'seloteyp/bant',
      'sticky situation': 'zor/çetrefilli durum',
    },
  },
  {
    id: 'store',
    word: 'Store',
    pos: 'verb',
    meaning: 'Depolamak, saklamak',
    definition: 'To keep something in a particular place.',
    ipa: '/stɔːr/',
    examples: ['Nuclear waste is currently being stored close to the town.'],
    exampleTranslations: ['Nükleer atıklar şu anda kasabanın yakınında depolanıyor.'],
    level: 'intermediate',
    collocations: ['store information', 'store energy', 'store data'],
    collocationMeanings: {
      'store information': 'bilgi depolamak',
      'store energy': 'enerji saklamak',
      'store data': 'veri kaydetmek',
    },
  },
  {
    id: 'suitable_b1',
    word: 'Suitable',
    pos: 'adjective',
    meaning: 'Uygun',
    definition: 'Right for a particular purpose, person or situation.',
    ipa: '/ˈsuː.tə.bəl/',
    examples: ['The nearest suitable alternative was two miles away.'],
    exampleTranslations: ['En yakın uygun alternatif iki mil uzaktaydı.'],
    level: 'intermediate',
    collocations: ['suitable for', 'not suitable', 'highly suitable'],
    collocationMeanings: {
      'suitable for': 'bir şey için uygun',
      'not suitable': 'uygun değil',
      'highly suitable': 'son derece uygun',
    },
  },
  {
    id: 'suitable_for_b1',
    word: 'Suitable for',
    pos: 'phrase',
    meaning: 'Uygun olmak (-e uygun)',
    definition: 'Right for a particular purpose, person, or situation.',
    ipa: '/ˈsuː.tə.bəl fɔːr/',
    examples: ['The film wasn\'t suitable for a younger person.'],
    exampleTranslations: ['Film daha genç biri için uygun değildi.'],
    level: 'intermediate',
    collocations: ['suitable for all ages', 'not suitable for children'],
    collocationMeanings: {
      'suitable for all ages': 'her yaşa uygun',
      'not suitable for children': 'çocuklar için uygun değil',
    },
  },
  {
    id: 'superb',
    word: 'Superb',
    pos: 'adjective',
    meaning: 'Mükemmel, üstün kalite',
    definition: 'Of the highest quality.',
    ipa: '/suːˈpɜːb/',
    examples: ['The Hotel Gardesana offers superb views of the lake.'],
    exampleTranslations: ['Hotel Gardesana muhteşem göl manzaraları sunmaktadır.'],
    level: 'intermediate',
    collocations: ['superb performance', 'superb view', 'superb quality'],
    collocationMeanings: {
      'superb performance': 'harika performans',
      'superb view': 'muazzam manzara',
      'superb quality': 'üstün kalite',
    },
  },
  {
    id: 'switch_off_completely',
    word: 'Switch off completely',
    pos: 'phrasal verb',
    meaning: 'Kafayı tamamen boşaltmak, irtibatı kesmek',
    definition: 'To stop thinking about something.',
    ipa: '/swɪtʃ ɒf kəmˈpliːt.li/',
    examples: ['I went on holiday to switch off completely from writing the book.'],
    exampleTranslations: ['Kitap yazmaktan tamamen uzaklaşmak (kafayı boşaltmak) için tatile çıktım.'],
    level: 'intermediate',
    collocations: ['need to switch off completely'],
    collocationMeanings: {
      'need to switch off completely': 'zihni tamamen boşaltmaya ihtiyaç duymak',
    },
  },
  {
    id: 'take_note_of',
    word: 'Take note of',
    pos: 'idiom',
    meaning: 'Not etmek, dikkate almak',
    definition: 'To notice something and try to remember it because you think it is important.',
    ipa: '/teɪk nəʊt əv/',
    examples: ['I took note of what she said.'],
    exampleTranslations: ['Söylediklerini not ettim / dikkate aldım.'],
    level: 'intermediate',
    collocations: ['take note of details', 'please take note'],
    collocationMeanings: {
      'take note of details': 'ayrıntılara dikkat etmek',
      'please take note': 'lütfen dikkate alın',
    },
  },
  {
    id: 'take_place',
    word: 'Take place',
    pos: 'idiom',
    meaning: 'Gerçekleşmek, olmak',
    definition: 'To happen.',
    ipa: '/teɪk pleɪs/',
    examples: ['The Olympics take place every four years.'],
    exampleTranslations: ['Olimpiyatlar her dört yılda bir gerçekleşir.'],
    level: 'intermediate',
    collocations: ['take place in', 'will take place'],
    collocationMeanings: {
      'take_place in': 'şurada gerçekleşmek',
      'will take place': 'olacak/yapılacak',
    },
  },
  {
    id: 'task',
    word: 'Task',
    pos: 'noun',
    meaning: 'Görev, iş',
    definition: 'A job that you need to do.',
    ipa: '/tɑːsk/',
    examples: ['My first real task was to prepare for the meeting.'],
    exampleTranslations: ['İlk gerçek görevim toplantı için hazırlanmaktı.'],
    level: 'intermediate',
    collocations: ['difficult task', 'complete a task', 'daily task'],
    collocationMeanings: {
      'difficult task': 'zor görev',
      'complete a task': 'bir işi tamamlamak',
      'daily task': 'günlük iş',
    },
  },
  {
    id: 'tell_the_difference_between',
    word: 'Tell the difference between',
    pos: 'phrase',
    meaning: 'Arasındaki farkı söylemek/ayırt etmek',
    definition: 'To notice what is different between similar people or things.',
    ipa: '/tel ðə ˈdɪf.ər.əns bɪˈtwiːn/',
    examples: ['How do you tell the difference between the kittens?'],
    exampleTranslations: ['Yavrular arasındaki farkı nasıl ayırt ediyorsun?'],
    level: 'intermediate',
    collocations: ['hard to tell the difference'],
    collocationMeanings: {
      'hard to tell the difference': 'aradaki farkı söylemek zordur',
    },
  },
  {
    id: 'tempt',
    word: 'Tempt',
    pos: 'verb',
    meaning: 'Aklını çelmek, cezbetmek',
    definition: 'To make you want to do or to have something, especially something that is not good for you.',
    ipa: '/tempt/',
    examples: ['The shop windows were lit, tempting the late shoppers.'],
    exampleTranslations: ['Mağaza vitrinleri aydınlatılmıştı, geç saatte alışveriş yapanların aklını çeliyordu.'],
    level: 'intermediate',
    collocations: ['tempt fate', 'tempted to do', 'tempt someone'],
    collocationMeanings: {
      'tempt fate': 'kaderini zorlamak',
      'tempted to do': 'bir şeyi yapmaya meyilli olmak',
      'tempt someone': 'birini cezbetmek',
    },
  },
  {
    id: 'think_outside_the_box',
    word: 'Think outside the box',
    pos: 'idiom',
    meaning: 'Kalıpların dışında düşünmek, yaratıcı olmak',
    definition: 'To think of an unusual idea.',
    ipa: '/θɪŋk ˌaʊtˈsaɪd ðə bɒks/',
    examples: ['We are getting nowhere, we need to think outside the box.'],
    exampleTranslations: ['Hiçbir yere varamıyoruz, kalıpların dışında düşünmemiz gerekiyor.'],
    level: 'intermediate',
    collocations: ['ability to think outside the box'],
    collocationMeanings: {
      'ability to think outside the box': 'yaratıcı düşünebilme becerisi',
    },
  },
  {
    id: 'throw_away',
    word: 'Throw away',
    pos: 'phrasal verb',
    meaning: 'Atmak (çöpe), fırlatıp atmak',
    definition: 'To get rid of something that you know longer want, for example by putting it in a dustbin.',
    ipa: '/θrəʊ əˈweɪ/',
    examples: ['Have you thrown the papers away?'],
    exampleTranslations: ['Kağıtları çöpe attın mı?'],
    level: 'intermediate',
    collocations: ['throw away rubbish', 'throw away a chance', 'throw away money'],
    collocationMeanings: {
      'throw away rubbish': 'çöp atmak',
      'throw away a chance': 'bir şansı tepmek',
      'throw away money': 'parayı sokağa atmak',
    },
  },
  {
    id: 'tidy_up',
    word: 'Tidy up',
    pos: 'phrasal verb',
    meaning: 'Ortalığı toplamak, düzenlemek',
    definition: 'To put things back in the right places.',
    ipa: '/ˈtaɪ.di ʌp/',
    examples: ['Could you help me tidy up?'],
    exampleTranslations: ['Ortalığı toplamama yardım edebilir misin?'],
    level: 'intermediate',
    collocations: ['tidy up a room', 'tidy up a mess'],
    collocationMeanings: {
      'tidy up a room': 'odayı toplamak',
      'tidy up a mess': 'dağınıklığı toplamak',
    },
  },
  {
    id: 'tiny',
    word: 'Tiny',
    pos: 'adjective',
    meaning: 'Küçücük, minik',
    definition: 'Extremely small.',
    ipa: '/ˈtaɪ.ni/',
    examples: ['The floor was covered in tiny bits of paper.'],
    exampleTranslations: ['Yer küçücük kağıt parçalarıyla doluydu.'],
    level: 'intermediate',
    collocations: ['tiny amount', 'tiny bit', 'tiny detail'],
    collocationMeanings: {
      'tiny amount': 'küçük miktar',
      'tiny bit': 'çok azcık',
      'tiny detail': 'küçük bir ayrıntı',
    },
  },
  {
    id: 'treat_yourself',
    word: 'Treat yourself',
    pos: 'phrase',
    meaning: 'Kendini şımartmak, kendine ısmarlamak',
    definition: 'To behave towards yourself in a particular way.',
    ipa: '/triːt jɔːˈself/',
    examples: ["Why don't you treat yourself to a holiday."],
    exampleTranslations: ['Neden kendine bir tatil ısmarlamıyorsun (kendini şımartmıyorsun).'],
    level: 'intermediate',
    collocations: ['treat yourself to something'],
    collocationMeanings: {
      'treat yourself to something': 'kendine bir şey ısmarlamak',
    },
  },
  {
    id: 'trick',
    word: 'Trick',
    pos: 'verb',
    meaning: 'Kandırmak, oyun oynamak',
    definition: 'To make someone believe something that is not true.',
    ipa: '/trɪk/',
    examples: ["I suddenly realized that I'd been tricked."],
    exampleTranslations: ['Aniden kandırıldığımı fark ettim.'],
    level: 'intermediate',
    collocations: ['trick someone into', 'play a trick', 'confidence trick'],
    collocationMeanings: {
      'trick someone into': 'birini yapmaya kandırmak',
      'play a trick': 'oyun oynamak (kandırmak)',
      'confidence trick': 'dolandırıcılık',
    },
  },
  {
    id: 'trophy',
    word: 'Trophy',
    pos: 'noun',
    meaning: 'Kupa, ödül',
    definition: 'A large silver cup or similar object given as a prize to the winner of a competition, especially a sports event.',
    ipa: '/ˈtrəʊ.fi/',
    examples: ['Mexico has not lifted the trophy since 1975.'],
    exampleTranslations: ['Meksika 1975’ten beri kupayı kaldırmadı.'],
    level: 'intermediate',
    collocations: ['win a trophy', 'lift a trophy', 'championship trophy'],
    collocationMeanings: {
      'win a trophy': 'kupa kazanmak',
      'lift a trophy': 'kupayı kaldırmak',
      'championship trophy': 'şampiyonluk kupası',
    },
  },
  {
    id: 'try_out',
    word: 'Try out',
    pos: 'phrasal verb',
    meaning: 'Denemek (test etmek)',
    definition: 'To test someone or something to see what they are like or whether they are suitable or effective.',
    ipa: '/traɪ aʊt/',
    examples: ['John hopes to try out his new running shoes this weekend.'],
    exampleTranslations: ['John bu hafta sonu yeni koşu ayakkabılarını denemeyi umuyor.'],
    level: 'intermediate',
    collocations: ['try out a new plan', 'try out for a team'],
    collocationMeanings: {
      'try out a new plan': 'yeni bir planı denemek',
      'try out for a team': 'takım seçmelerine girmek',
    },
  },
  {
    id: 'turn_dream_into_reality',
    word: 'Turn a dream into reality',
    pos: 'phrase',
    meaning: 'Hayali gerçeğe dönüştürmek',
    definition: 'To make something happen that you have always hoped for.',
    ipa: '/tɜːn ə driːm ˈɪn.tu riˈæl.ə.ti/',
    examples: ['She turned her dream of living in Paris into a reality.'],
    exampleTranslations: ['Paris’te yaşama hayalini gerçeğe dönüştürdü.'],
    level: 'intermediate',
    collocations: ['work to turn a dream into reality'],
    collocationMeanings: {
      'work to turn a dream into reality': 'hayali gerçekleştirmek için çalışmak',
    },
  },
  {
    id: 'turn_down',
    word: 'Turn down',
    pos: 'phrasal verb',
    meaning: 'Kısmak (sesi/ısıyı) veya Reddetmek',
    definition: 'Make something lower/colder/quieter.',
    ipa: '/tɜːn daʊn/',
    examples: ['Can you turn the music down a bit?'],
    exampleTranslations: ['Müziğin sesini biraz kısabilir misin?'],
    level: 'intermediate',
    collocations: ['turn down the volume', 'turn down an offer', 'turn down the heat'],
    collocationMeanings: {
      'turn down the volume': 'sesi kısmak',
      'turn down an offer': 'teklifi reddetmek',
      'turn down the heat': 'ısıyı kısmak',
    },
  },
  {
    id: 'turn_up',
    word: 'Turn up',
    pos: 'phrasal verb',
    meaning: 'Çıkagelmek, damlamak',
    definition: 'Arrive without making an appointment.',
    ipa: '/tɜːn ʌp/',
    examples: ['There is no need to book – just turn up on the night.'],
    exampleTranslations: ['Rezervasyon yapmaya gerek yok – o gece çıkagelmeniz yeterli.'],
    level: 'intermediate',
    collocations: ['turn up late', 'unexpectedly turn up', 'turn up the volume'],
    collocationMeanings: {
      'turn up late': 'geç gelmek',
      'unexpectedly turn up': 'aniden/beklenmedik şekilde ortaya çıkmak',
      'turn up the volume': 'sesi açmak',
    },
  },
  {
    id: 'typical_of',
    word: 'Typical of',
    pos: 'adjective',
    meaning: 'Tipik, özgü',
    definition: 'Used for saying that someone is behaving in the way that they usually behave.',
    ipa: '/ˈtɪp.ɪ.kəl əv/',
    examples: ['The story is typical of this newspaper.'],
    exampleTranslations: ['Bu hikaye bu gazeteye özgüdür (onun tarzıdır).'],
    level: 'intermediate',
    collocations: ['typical of someone', 'typical behavior', 'typical example'],
    collocationMeanings: {
      'typical of someone': 'birine özgü',
      'typical behavior': 'tipik davranış',
      'typical example': 'tipik bir örnek',
    },
  },
  {
    id: 'underpaid',
    word: 'Underpaid',
    pos: 'adjective',
    meaning: 'Düşük ücretli, hakkı ödenmeyen',
    definition: 'Not earning enough money for work that you do.',
    ipa: '/ˌʌn.dəˈpeɪd/',
    examples: ['He works very hard but is underpaid.'],
    exampleTranslations: ['Çok sıkı çalışıyor ama düşük ücret alıyor.'],
    level: 'intermediate',
    collocations: ['underpaid workers', 'feel underpaid'],
    collocationMeanings: {
      'underpaid workers': 'düşük maaşlı işçiler',
      'feel underpaid': 'düşük ücret aldığını hissetmek',
    },
  },
  {
    id: 'unique',
    word: 'Unique',
    pos: 'adjective',
    meaning: 'Eşsiz, benzersiz',
    definition: 'Not the same as anything or anyone else.',
    ipa: '/juːˈniːk/',
    examples: ['They have a totally unique approach to staff training.'],
    exampleTranslations: ['Personel eğitimi konusunda tamamen benzersiz bir yaklaşımları var.'],
    level: 'intermediate',
    collocations: ['totally unique', 'unique style', 'unique opportunity'],
    collocationMeanings: {
      'totally unique': 'tamamen benzersiz',
      'unique style': 'eşsiz stil',
      'unique opportunity': 'eşsiz bir fırsat',
    },
  },
  {
    id: 'use_up',
    word: 'Use up',
    pos: 'phrasal verb',
    meaning: 'Tüketmek, bitirmek',
    definition: 'To use all of a supply of something.',
    ipa: '/juːz ʌp/',
    examples: ['We have used up all the sugar so you will need to get some more.'],
    exampleTranslations: ['Tüm şekeri bitirdik, bu yüzden biraz daha alman gerekecek.'],
    level: 'intermediate',
    collocations: ['use up energy', 'use up all the resources', 'use up time'],
    collocationMeanings: {
      'use up energy': 'enerjiyi tüketmek',
      'use up all the resources': 'tüm kaynakları bitirmek',
      'use up time': 'vakit harcamak',
    },
  },
  {
    id: 'warn',
    word: 'Warn',
    pos: 'verb',
    meaning: 'Uyarmak, ikaz etmek',
    definition: 'To tell someone that something bad will happen if they do something.',
    ipa: '/wɔːn/',
    examples: ['I warned you not to go to that party last night.'],
    exampleTranslations: ['Dün gece o partiye gitmemen konusunda seni uyarmıştım.'],
    level: 'intermediate',
    collocations: ['warn someone against', 'warn about', 'strongly warn'],
    collocationMeanings: {
      'warn someone against': 'birini şeye karşı uyarmak',
      'warn about': 'hakkında uyarmak',
      'strongly warn': 'şiddetle uyarmak',
    },
  },
  {
    id: 'waste_b1',
    word: 'Waste',
    pos: 'noun',
    meaning: 'İsraf, atık, boşa harcama',
    definition: 'Failure to use something valuable in an effective way, so that it does not produce the benefits that it could.',
    ipa: '/weɪst/',
    examples: ['All this uneaten food – what a waste!'],
    exampleTranslations: ['Tüm bu yenmemiş yiyecekler – ne israf!'],
    level: 'intermediate',
    collocations: ['waste of time', 'waste of money', 'toxic waste'],
    collocationMeanings: {
      'waste of time': 'zaman kaybı',
      'waste of money': 'para israfı',
      'toxic waste': 'toksik atık',
    },
  },
  {
    id: 'watery',
    word: 'Watery',
    pos: 'adjective',
    meaning: 'Sulu, tatsız, kıvamsız',
    definition: 'Watery food or drink contains a lot of water and has a weak taste.',
    ipa: '/ˈwɔː.tər.i/',
    examples: ['They sell very watery coffee.'],
    exampleTranslations: ['Çok sulu (tatsız) kahve satıyorlar.'],
    level: 'intermediate',
    collocations: ['watery soup', 'watery eyes', 'pale and watery'],
    collocationMeanings: {
      'watery soup': 'sulu/tatsız çorba',
      'watery eyes': 'yaşlı/nemli gözler',
      'pale and watery': 'soluk ve sulu',
    },
  },
  {
    id: 'whisper',
    word: 'Whisper',
    pos: 'verb',
    meaning: 'Fısıldamak',
    definition: 'To say something very quietly so that other people cannot hear you.',
    ipa: '/ˈwɪs.pər/',
    examples: ["'When can I see you again?' he whispered softly."],
    exampleTranslations: ["'Seni tekrar ne zaman görebilirim?' diye fısıldadı yumuşakça."],
    level: 'intermediate',
    collocations: ['whisper softly', 'stage whisper', 'in a whisper'],
    collocationMeanings: {
      'whisper softly': 'yumuşakça fısıldamak',
      'stage whisper': 'sahne fısıltısı',
      'in a whisper': 'fısıltı ile',
    },
  },
  {
    id: 'wonder',
    word: 'Wonder',
    pos: 'verb',
    meaning: 'Merak etmek',
    definition: 'To think about something because you want to know more facts or details about it.',
    ipa: '/ˈwʌn.dər/',
    examples: ["'How did they find out?' she wondered."],
    exampleTranslations: ["'Nasıl öğrendiler?' diye merak etti."],
    level: 'intermediate',
    collocations: ['wonder why', 'no wonder', 'wonder if'],
    collocationMeanings: {
      'wonder why': 'nedenini merak etmek',
      'no wonder': 'şaşmamalı',
      'wonder if': 'acaba ... mı diye merak etmek',
    },
  },
  {
    id: 'work_out',
    word: 'Work out',
    pos: 'phrasal verb',
    meaning: 'Çözmek, anlamak (veya antrenman yapmak)',
    definition: 'Find the answer by thinking carefully.',
    ipa: '/wɜːk aʊt/',
    examples: ["I can't work out what to do."],
    exampleTranslations: ['Ne yapacağımı çözemiyorum.'],
    level: 'intermediate',
    collocations: ['work out a problem', 'work out at the gym', 'work out well'],
    collocationMeanings: {
      'work out a problem': 'bir sorunu çözmek',
      'work out at the gym': 'spor salonunda antrenman yapmak',
      'work out well': 'sonucun iyi bitmesi/iyi gitmek',
    },
  },
  {
    id: 'work_towards_a_goal',
    word: 'Work towards a goal',
    pos: 'phrase',
    meaning: 'Bir hedefe yönelik çalışmak',
    definition: 'To do things that help you to make progress towards something that you want to achieve.',
    ipa: '/wɜːk təˈwɔːrdz ə ɡəʊl/',
    examples: ['Daniel is working towards his goal of becoming a chef.'],
    exampleTranslations: ['Daniel aşçı olma hedefine doğru çalışıyor.'],
    level: 'intermediate',
    collocations: ['hard work towards a goal'],
    collocationMeanings: {
      'hard work towards a goal': 'bir hedef doğrultusunda sıkı çalışma',
    },
  },

  // --- UPPER-INTERMEDIATE (B2) ---

  // --- UNIT 1: FEELINGS & PERSONALITY ---
  {
    id: 'awkward',
    word: 'Awkward',
    pos: 'adj',
    meaning: 'Garip, beceriksiz, rahatsız edici',
    definition: 'Not comfortable, relaxed, or confident; difficult to deal with.',
    ipa: '/ˈɔːkwəd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'awkwardness', pos: 'noun', meaning: 'beceriksizlik, gariplik' },
      { word: 'awkwardly', pos: 'adverb', meaning: 'beceriksizce, garip bir şekilde' }
    ],
    synonyms: [
      { word: 'Clumsy', meaning: 'Sakar, beceriksiz', pos: 'adj' },
      { word: 'Uncomfortable', meaning: 'Rahatsız, huzursuz', pos: 'adj' },
      { word: 'Inelegant', meaning: 'Zarafetten yoksun', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Graceful', meaning: 'Zarif, nazik', pos: 'adj' },
      { word: 'Confident', meaning: 'Kendinden emin', pos: 'adj' },
      { word: 'Comfortable', meaning: 'Rahat, huzurlu', pos: 'adj' }
    ],
    collocations: ['awkward silence', 'awkward situation', 'feel awkward'],
    collocationMeanings: {
      'awkward silence': 'rahatsız edici sessizlik',
      'awkward situation': 'zor durum/vaziyet',
      'feel awkward': 'mahcup/garip hissetmek'
    },
    examples: ["He's always really awkward when meeting new people."],
    exampleTranslations: ['Yeni insanlarla tanışırken her zaman çok garip davranır.']
  },
  {
    id: 'devastated',
    word: 'Devastated',
    pos: 'adj',
    meaning: 'Yıkılmış, kahrolmuş, perişan',
    definition: 'Feeling very shocked and upset; completely destroyed.',
    ipa: '/ˈdevəsteɪtɪd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'devastate', pos: 'verb', meaning: 'perişan etmek, yıkmak' },
      { word: 'devastation', pos: 'noun', meaning: 'yıkım, büyük hüzün' }
    ],
    synonyms: [
      { word: 'Shattered', meaning: 'Paramparça, yıkılmış', pos: 'adj' },
      { word: 'Shocked', meaning: 'Şoke olmuş', pos: 'adj' },
      { word: 'Distraught', meaning: 'Kendinden geçmiş, çok üzgün', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Delighted', meaning: 'Çok memnun, sevinçli', pos: 'adj' },
      { word: 'Happy', meaning: 'Mutlu', pos: 'adj' },
      { word: 'Comforted', meaning: 'Teselli bulmuş', pos: 'adj' }
    ],
    collocations: ['absolutely devastated', 'left devastated', 'utterly devastated'],
    collocationMeanings: {
      'absolutely devastated': 'tamamen yıkılmış',
      'left devastated': 'perişan halde bırakılmış',
      'utterly devastated': 'büsbütün kahrolmuş'
    },
    examples: ['Olga was devastated to learn her car had been stolen.'],
    exampleTranslations: ['Olga arabasının çalındığını öğrendiğinde kahroldu.']
  },
  {
    id: 'disgusted',
    word: 'Disgusted',
    pos: 'adj',
    meaning: 'İğrenmiş, tiksinmiş, bıkmış',
    definition: 'Feeling very angry and upset about something that you do not approve of.',
    ipa: '/dɪsˈɡʌstɪd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'disgust', pos: 'noun/verb', meaning: 'iğrenme, tiksindirmek' },
      { word: 'disgusting', pos: 'adj', meaning: 'iğrenç' }
    ],
    synonyms: [
      { word: 'Repulsed', meaning: 'Tiksinti duymuş', pos: 'adj' },
      { word: 'Sickened', meaning: 'Midesi bulanmış/bıkmış', pos: 'adj' },
      { word: 'Appalled', meaning: 'Dehşete düşmüş, iğrenmiş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Pleased', meaning: 'Memnun', pos: 'adj' },
      { word: 'Impressed', meaning: 'Etkilenmiş', pos: 'adj' },
      { word: 'Delighted', meaning: 'Sevinçli', pos: 'adj' }
    ],
    collocations: ['disgusted with', 'disgusted by', 'utterly disgusted'],
    collocationMeanings: {
      'disgusted with': 'birinden/bir şeyden iğrenmiş',
      'disgusted by': 'bir şeyden dolayı tiksinmiş',
      'utterly disgusted': 'tamamen bıkmış/iğrenmiş'
    },
    examples: ['I was disgusted by the way he treated his employees.'],
    exampleTranslations: ['Çalışanlarına davranış şekli beni iğrendirdi.']
  },
  {
    id: 'frustrated',
    word: 'Frustrated',
    pos: 'adj',
    meaning: 'Hüsrana uğramış, hayal kırıklığına uğramış',
    definition: 'Feeling annoyed and impatient because you are prevented from achieving something.',
    ipa: '/frʌsˈtreɪtɪd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'frustrate', pos: 'verb', meaning: 'hüsrana uğratmak' },
      { word: 'frustration', pos: 'noun', meaning: 'hüsran' },
      { word: 'frustrating', pos: 'adj', meaning: 'hayal kırıklığına uğratan' }
    ],
    synonyms: [
      { word: 'Annoyed', meaning: 'Rahatsız olmuş', pos: 'adj' },
      { word: 'Discouraged', meaning: 'Cesareti kırılmış', pos: 'adj' },
      { word: 'Thwarted', meaning: 'Engellenmiş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Satisfied', meaning: 'Tatmin olmuş', pos: 'adj' },
      { word: 'Content', meaning: 'Memnun', pos: 'adj' },
      { word: 'Fulfilled', meaning: 'Başarmış hissetmek', pos: 'adj' }
    ],
    collocations: ['get frustrated', 'increasingly frustrated', 'deeply frustrated'],
    collocationMeanings: {
      'get frustrated': 'hüsrana uğramak',
      'increasingly frustrated': 'giderek artan bir hüsran',
      'deeply frustrated': 'derinden hüsrana uğramış'
    },
    examples: ["I'm just frustrated by our overall lack of progress."],
    exampleTranslations: ['Genel ilerleme eksikliğimizden dolayı sadece hüsrana uğramış durumdayım.']
  },
  {
    id: 'furious',
    word: 'Furious',
    pos: 'adj',
    meaning: 'Çok öfkeli, küplere binmiş',
    definition: 'Extremely angry.',
    ipa: '/ˈfjʊəriəs/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'fury', pos: 'noun', meaning: 'öfke, hiddet' },
      { word: 'furiously', pos: 'adverb', meaning: 'öfkeyle' }
    ],
    synonyms: [
      { word: 'Enraged', meaning: 'Kudurmuş, çok kızgın', pos: 'adj' },
      { word: 'Livid', meaning: 'Kıpkırmızı kesilmiş', pos: 'adj' },
      { word: 'Infuriated', meaning: 'Çileden çıkmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Calm', meaning: 'Sakin', pos: 'adj' },
      { word: 'Peaceful', meaning: 'Huzurlu', pos: 'adj' },
      { word: 'Pleased', meaning: 'Memnun', pos: 'adj' }
    ],
    collocations: ['furious with', 'absolutely furious', 'fast and furious'],
    collocationMeanings: {
      'furious with': 'birine çok öfkeli',
      'absolutely furious': 'öfkeden kudurmuş',
      'fast and furious': 'hızlı ve öfkeli'
    },
    examples: ["Yuri was absolutely furious that I'd scratched her car."],
    exampleTranslations: ['Arabasını çizdiğim için Yuri kesinlikle öfkeden deliye döndü.']
  },
  {
    id: 'horrified',
    word: 'Horrified',
    pos: 'adj',
    meaning: 'Dehşete düşmüş, korkmuş',
    definition: 'Very shocked or frightened.',
    ipa: '/ˈhɒrɪfaɪd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'horrify', pos: 'verb', meaning: 'dehşete düşürmek' },
      { word: 'horror', pos: 'noun', meaning: 'dehşet' },
      { word: 'horrific', pos: 'adj', meaning: 'dehşet verici' }
    ],
    synonyms: [
      { word: 'Terrified', meaning: 'Dehşete kapılmış', pos: 'adj' },
      { word: 'Appalled', meaning: 'Şoke olmuş', pos: 'adj' },
      { word: 'Shocked', meaning: 'Sarsılmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Delighted', meaning: 'Sevinçli', pos: 'adj' },
      { word: 'Pleased', meaning: 'Memnun', pos: 'adj' },
      { word: 'Unfazed', meaning: 'İstifini bozmamış', pos: 'adj' }
    ],
    collocations: ['horrified at', 'look horrified', 'absolutely horrified'],
    collocationMeanings: {
      'horrified at': 'bir şeye dehşetle bakmak',
      'look horrified': 'dehşete düşmüş görünmek',
      'absolutely horrified': 'tamamen dehşet içinde'
    },
    examples: ['Dad was horrified when he saw the prices on the menu.'],
    exampleTranslations: ['Babam menüdeki fiyatları görünce dehşete düştü.']
  },
  {
    id: 'impressed',
    word: 'Impressed',
    pos: 'adj',
    meaning: 'Etkilenmiş, hayran kalmış',
    definition: 'Admiring someone or something very much, especially because of an unusually good achievement.',
    ipa: '/ɪmˈprest/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'impress', pos: 'verb', meaning: 'etkilemek' },
      { word: 'impression', pos: 'noun', meaning: 'izlenim' },
      { word: 'impressive', pos: 'adj', meaning: 'etkileyici' }
    ],
    synonyms: [
      { word: 'Admiring', meaning: 'Hayranlık duyan', pos: 'adj' },
      { word: 'Moved', meaning: 'Duygulanmış', pos: 'adj' },
      { word: 'Awestruck', meaning: 'Hayranlıktan donakalmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Disappointed', meaning: 'Hayal kırıklığına uğramış', pos: 'adj' },
      { word: 'Unmoved', meaning: 'Etkilenmemiş', pos: 'adj' },
      { word: 'Bored', meaning: 'Sıkılmış', pos: 'adj' }
    ],
    collocations: ['deeply impressed', 'highly impressed', 'easily impressed'],
    collocationMeanings: {
      'deeply impressed': 'derinden etkilenmiş',
      'highly impressed': 'oldukça etkilenmiş',
      'easily impressed': 'kolay etkilenen'
    },
    examples: ['I was very impressed by the level of customer service.'],
    exampleTranslations: ['Müşteri hizmetleri seviyesinden çok etkilendim.']
  },
  {
    id: 'overwhelmed',
    word: 'Overwhelmed',
    pos: 'adj',
    meaning: 'Bunalmış, (duygu/iş altında) boğulmuş',
    definition: 'Feeling unable to cope with all the things that need to be done.',
    ipa: '/ˌəʊvəˈwelmd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'overwhelm', pos: 'verb', meaning: 'boğmak, ezmek, bunaltmak' },
      { word: 'overwhelming', pos: 'adj', meaning: 'ezici, karşı konulamaz' }
    ],
    synonyms: [
      { word: 'Inundated', meaning: 'İş yükü altında kalmış', pos: 'adj' },
      { word: 'Overcome', meaning: 'Duygularına yenik düşmüş', pos: 'adj' },
      { word: 'Swamped', meaning: 'Boğulmuş/Gömülmüş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Carefree', meaning: 'Tasasız', pos: 'adj' },
      { word: 'Calm', meaning: 'Sakin', pos: 'adj' },
      { word: 'Unmoved', meaning: 'Hareketsiz, donuk', pos: 'adj' }
    ],
    collocations: ['feel overwhelmed', 'completely overwhelmed', 'overwhelmed by work'],
    collocationMeanings: {
      'feel overwhelmed': 'bunalanmış hissetmek',
      'completely overwhelmed': 'tamamen boğulmuş',
      'overwhelmed by work': 'iş yükü altında ezilmiş'
    },
    examples: ["I'm just a little overwhelmed to be honest - there's so much to do!"],
    exampleTranslations: ['Dürüst olmak gerekirse biraz bunaldım - yapılacak çok şey var!']
  },
  {
    id: 'relieved',
    word: 'Relieved',
    pos: 'adj',
    meaning: 'Rahatlamış',
    definition: 'Happy and relaxed because something bad has not happened.',
    ipa: '/rɪˈliːvd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'relieve', pos: 'verb', meaning: 'rahatlatmak, dindirmek' },
      { word: 'relief', pos: 'noun', meaning: 'rahatlama, iç ferahlığı' }
    ],
    synonyms: [
      { word: 'Relaxed', meaning: 'Rahatlamış', pos: 'adj' },
      { word: 'Comforted', meaning: 'Huzur bulmuş', pos: 'adj' },
      { word: 'Thankful', meaning: 'Minnettar', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Anxious', meaning: 'Endişeli', pos: 'adj' },
      { word: 'Worried', meaning: 'Kaygılı', pos: 'adj' },
      { word: 'Distressed', meaning: 'Izdırap içinde', pos: 'adj' }
    ],
    collocations: ['greatly relieved', 'feel relieved', 'sigh of relief'],
    collocationMeanings: {
      'greatly relieved': 'büyük ölçüde rahatlamış',
      'feel relieved': 'rahatlamış hissetmek',
      'sigh of relief': 'derin bir nefes alma/rahatlama'
    },
    examples: ["Mum wasn't angry, just relieved that I'd made it home safely."],
    exampleTranslations: ['Annem kızgın değildi, sadece eve sağ salim döndüğüm için rahatlamıştı.']
  },
  {
    id: 'stunned',
    word: 'Stunned',
    pos: 'adj',
    meaning: 'Şaşkına dönmüş, donakalmış',
    definition: 'Very shocked or upset, especially so that you are unable to act normally.',
    ipa: '/stʌnd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'stun', pos: 'verb', meaning: 'sersemletmek, şaşkına çevirmek' },
      { word: 'stunning', pos: 'adj', meaning: 'çarpıcı, harika' }
    ],
    synonyms: [
      { word: 'Astounded', meaning: 'Hayrete düşmüş', pos: 'adj' },
      { word: 'Dazed', meaning: 'Sersemlemiş', pos: 'adj' },
      { word: 'Speechless', meaning: 'Dili tutulmuş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Expected', meaning: 'Beklenen', pos: 'adj' },
      { word: 'Unmoved', meaning: 'Tepkisiz', pos: 'adj' },
      { word: 'Unsurprised', meaning: 'Şaşırmamış', pos: 'adj' }
    ],
    collocations: ['stunned silence', 'absolutely stunned', 'left stunned'],
    collocationMeanings: {
      'stunned silence': 'şaşkınlıktan gelen sessizlik',
      'absolutely stunned': 'tamamen şaşkına dönmüş',
      'left stunned': 'şoka uğratılmış'
    },
    examples: ["Barcelona were left stunned by Liverpool's last-minute winner."],
    exampleTranslations: ["Barcelona, Liverpool'un son dakika golüyle şaşkına döndü."]
  },
  {
    id: 'tense',
    word: 'Tense',
    pos: 'adj',
    meaning: 'Gergin',
    definition: 'Feeling nervous and not relaxed, usually because you are worried.',
    ipa: '/tens/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'tension', pos: 'noun', meaning: 'gerilim' },
      { word: 'tensely', pos: 'adverb', meaning: 'gergin bir şekilde' }
    ],
    synonyms: [
      { word: 'Nervous', meaning: 'Sinirli, heyecanlı', pos: 'adj' },
      { word: 'Strained', meaning: 'Gerilmiş, zorlanmış', pos: 'adj' },
      { word: 'Anxious', meaning: 'Endişeli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Relaxed', meaning: 'Gevşemiş, rahat', pos: 'adj' },
      { word: 'Calm', meaning: 'Sakin', pos: 'adj' },
      { word: 'Serene', meaning: 'Huzurlu', pos: 'adj' }
    ],
    collocations: ['tense atmosphere', 'tense situation', 'become tense'],
    collocationMeanings: {
      'tense atmosphere': 'gergin atmosfer',
      'tense situation': 'gergin durum',
      'become tense': 'gerginleşmek'
    },
    examples: ['He was tired, but too tense to sleep.'],
    exampleTranslations: ['Yorgundu ama uyuyamayacak kadar gergindi.']
  },
  {
    id: 'thrilled',
    word: 'Thrilled',
    pos: 'adj',
    meaning: 'Çok heyecanlı, aşırı mutlu',
    definition: 'Very pleased and excited.',
    ipa: '/θrɪld/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'thrill', pos: 'noun/verb', meaning: 'heyecan, heyecanlandırmak' },
      { word: 'thrilling', pos: 'adj', meaning: 'heyecan verici' }
    ],
    synonyms: [
      { word: 'Excited', meaning: 'Heyecanlı', pos: 'adj' },
      { word: 'Delighted', meaning: 'Çok sevinçli', pos: 'adj' },
      { word: 'Ecstatic', meaning: 'Kendinden geçmiş derecede mutlu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Disappointed', meaning: 'Hayal kırıklığına uğramış', pos: 'adj' },
      { word: 'Bored', meaning: 'Sıkılmış', pos: 'adj' },
      { word: 'Unhappy', meaning: 'Mutsuz', pos: 'adj' }
    ],
    collocations: ['thrilled to bits', 'absolutely thrilled', 'thrilled with'],
    collocationMeanings: {
      'thrilled to bits': 'mutluluktan uçmak',
      'absolutely thrilled': 'tamamen heyecanlanmış',
      'thrilled with': 'bir şeyden çok memnun kalmak'
    },
    examples: ['Ben was thrilled to win the competition.'],
    exampleTranslations: ['Ben yarışmayı kazandığı için çok heyecanlıydı.']
  },
  {
    id: 'ambitious',
    word: 'Ambitious',
    pos: 'adj',
    meaning: 'Hırslı, azimli',
    definition: 'Wanting to be successful, rich, famous, etc.',
    ipa: '/æmˈbɪʃəs/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'ambition', pos: 'noun', meaning: 'hırs, ideal' },
      { word: 'ambitiously', pos: 'adverb', meaning: 'hırsla' }
    ],
    synonyms: [
      { word: 'Aspiring', meaning: 'Hevesli, azimli', pos: 'adj' },
      { word: 'Determined', meaning: 'Kararlı', pos: 'adj' },
      { word: 'Purposeful', meaning: 'Hedef odaklı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Lazy', meaning: 'Tembel', pos: 'adj' },
      { word: 'Aimless', meaning: 'Amaçsız', pos: 'adj' },
      { word: 'Indifferent', meaning: 'Kayıtsız', pos: 'adj' }
    ],
    collocations: ['highly ambitious', 'ambitious project', 'ambitious goal'],
    collocationMeanings: {
      'highly ambitious': 'oldukça hırslı',
      'ambitious project': 'iddialı proje',
      'ambitious goal': 'iddialı hedef'
    },
    examples: ["Anna is pretty ambitious; I don't think she'll stay unless they promote her."],
    exampleTranslations: ['Anna oldukça hırslıdır; terfi almadığı sürece kalacağını sanmam.']
  },
  {
    id: 'arrogant',
    word: 'Arrogant',
    pos: 'adj',
    meaning: 'Kibirli, küstah',
    definition: 'Thinking you are better or more important than other people.',
    ipa: '/ˈærəɡənt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'arrogance', pos: 'noun', meaning: 'kibir' },
      { word: 'arrogantly', pos: 'adverb', meaning: 'kibirle' }
    ],
    synonyms: [
      { word: 'Haughty', meaning: 'Kendini beğenmiş', pos: 'adj' },
      { word: 'Conceited', meaning: 'Kibirli', pos: 'adj' },
      { word: 'Vain', meaning: 'Gösteriş meraklısı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Humble', meaning: 'Mütevazı', pos: 'adj' },
      { word: 'Modest', meaning: 'Alçakgönüllü', pos: 'adj' },
      { word: 'Self-effacing', meaning: 'Kendini ön plana çıkarmayan', pos: 'adj' }
    ],
    collocations: ['arrogant attitude', 'arrogant behavior', 'somewhat arrogant'],
    collocationMeanings: {
      'arrogant attitude': 'kibirli tavır',
      'arrogant behavior': 'kibirli davranış',
      'somewhat arrogant': 'biraz kibirli'
    },
    examples: ['To be honest, I thought she was rude and arrogant!'],
    exampleTranslations: ['Dürüst olmak gerekirse, onun kaba ve kibirli olduğunu düşündüm!']
  },
  {
    id: 'determined',
    word: 'Determined',
    pos: 'adj',
    meaning: 'Kararlı, azimli',
    definition: 'Not willing to let anything prevent you from doing what you have decided to do.',
    ipa: '/dɪˈtɜːmɪnd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'determination', pos: 'noun', meaning: 'kararlılık' },
      { word: 'determine', pos: 'verb', meaning: 'kararlaştırmak' }
    ],
    synonyms: [
      { word: 'Resolute', meaning: 'Azimli', pos: 'adj' },
      { word: 'Steadfast', meaning: 'Sarsılmaz', pos: 'adj' },
      { word: 'Tenacious', meaning: 'Vazgeçmeyen', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Irresolute', meaning: 'Kararsız', pos: 'adj' },
      { word: 'Weak', meaning: 'Zayıf iradeli', pos: 'adj' },
      { word: 'Indecisive', meaning: 'Tereddütlü', pos: 'adj' }
    ],
    collocations: ['determined to succeed', 'fiercely determined', 'grimly determined'],
    collocationMeanings: {
      'determined to succeed': 'başarmaya kararlı',
      'fierce determination': 'son derece kararlı',
      'grimly determined': 'kararlı ve amansız'
    },
    examples: ['Aishia was always determined to make it as a dancer.'],
    exampleTranslations: ['Aishia her zaman bir dansçı olarak başarmaya kararlıydı.']
  },
  {
    id: 'down_to_earth',
    word: 'Down-to-earth',
    pos: 'adj',
    meaning: 'Gerçekçi, ayakları yere basan',
    definition: 'Practical and sensible.',
    ipa: '/ˌdaʊn tu ˈɜːθ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Practical', meaning: 'Pratik', pos: 'adj' },
      { word: 'Sensible', meaning: 'Makul', pos: 'adj' },
      { word: 'Realistic', meaning: 'Gerçekçi', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Idealistic', meaning: 'Hayalperest', pos: 'adj' },
      { word: 'Impractical', meaning: 'Pratik olmayan', pos: 'adj' },
      { word: 'Pretentious', meaning: 'Gösterişçi', pos: 'adj' }
    ],
    collocations: ['really down-to-earth', 'sensible and down-to-earth', 'refreshingly down-to-earth'],
    collocationMeanings: {
      'really down-to-earth': 'gerçekten ayakları yere basan/alçakgönüllü',
      'sensible and down-to-earth': 'mantıklı ve gerçekçi',
      'refreshingly down-to-earth': 'tazelik verecek kadar gerçekçi/doğal'
    },
    examples: ["Jane's so down-to-earth; she's great in a crisis."],
    exampleTranslations: ['Jane çok gerçekçidir; kriz anlarında harikadır.']
  },
  {
    id: 'easy_going',
    word: 'Easy-going',
    pos: 'adj',
    meaning: 'Uysal, rahat, tasasız',
    definition: 'Relaxed, calm, and not getting easily upset about things.',
    ipa: '/ˌiːziˈɡəʊɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Relaxed', meaning: 'Gevşek, rahat', pos: 'adj' },
      { word: 'Laid-back', meaning: 'Rahatına düşkün', pos: 'adj' },
      { word: 'Placid', meaning: 'Uysal', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Strict', meaning: 'Sert, disiplinli', pos: 'adj' },
      { word: 'Highly-strung', meaning: 'Aşırı gergin', pos: 'adj' },
      { word: 'Intense', meaning: 'Yoğun, sert', pos: 'adj' }
    ],
    collocations: ['easy-going attitude', 'easy-going personality', 'relaxed and easy-going'],
    collocationMeanings: {
      'easy-going attitude': 'rahat tavır',
      'easy-going personality': 'rahat kişilik',
      'relaxed and easy-going': 'rahat ve kaygısız'
    },
    examples: ["Marco won't mind if we're a bit late; he's very easy-going."],
    exampleTranslations: ['Biraz gecikirsek Marco sorun etmez; o çok rahattır.']
  },
  {
    id: 'flexible',
    word: 'Flexible',
    pos: 'adj',
    meaning: 'Esnek, uyumlu',
    definition: 'Able to make changes or deal with a situation that is changing.',
    ipa: '/ˈfleksəbl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'flexibility', pos: 'noun', meaning: 'esneklik' },
      { word: 'flex', pos: 'verb', meaning: 'esnetmek' }
    ],
    synonyms: [
      { word: 'Adaptable', meaning: 'Uyum sağlayabilen', pos: 'adj' },
      { word: 'Adjustable', meaning: 'Ayarlanabilir', pos: 'adj' },
      { word: 'Versatile', meaning: 'Çok yönlü', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Rigid', meaning: 'Sert, esnemez', pos: 'adj' },
      { word: 'Inflexible', meaning: 'Katı, değişmez', pos: 'adj' },
      { word: 'Stubborn', meaning: 'İnatçı', pos: 'adj' }
    ],
    collocations: ['flexible schedule', 'flexible hours', 'highly flexible'],
    collocationMeanings: {
      'flexible schedule': 'esnek program',
      'flexible hours': 'esnek çalışma saatleri',
      'highly flexible': 'oldukça esnek'
    },
    examples: ['You need to be more flexible in your approach.'],
    exampleTranslations: ['Yaklaşımında daha esnek olmalısın.']
  },
  {
    id: 'loyal',
    word: 'Loyal',
    pos: 'adj',
    meaning: 'Sadık, vefalı',
    definition: 'Willing to support or work for someone even in difficult times.',
    ipa: '/ˈlɔɪəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'loyalty', pos: 'noun', meaning: 'sadakat' },
      { word: 'loyally', pos: 'adverb', meaning: 'sadakatle' }
    ],
    synonyms: [
      { word: 'Faithful', meaning: 'Vefalı', pos: 'adj' },
      { word: 'Devoted', meaning: 'Kendini adamış', pos: 'adj' },
      { word: 'Trustworthy', meaning: 'Güvenilir', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Disloyal', meaning: 'Sadakatsiz', pos: 'adj' },
      { word: 'Treacherous', meaning: 'Hain', pos: 'adj' },
      { word: 'Unfaithful', meaning: 'Vefasız', pos: 'adj' }
    ],
    collocations: ['loyal supporter', 'loyal friend', 'remain loyal'],
    collocationMeanings: {
      'loyal supporter': 'sadık destekçi',
      'loyal friend': 'sadık dost',
      'remain loyal': 'sadık kalmak'
    },
    examples: ['Randell remained a loyal employee for 45 years.'],
    exampleTranslations: ['Randell 45 yıl boyunca sadık bir çalışan olarak kaldı.']
  },
  {
    id: 'naive',
    word: 'Naïve',
    pos: 'adj',
    meaning: 'Saf, deneyimsiz, toy',
    definition: 'Lacking experience in life and too ready to trust others.',
    ipa: '/naɪˈiːv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'naivety', pos: 'noun', meaning: 'saflık, toyluk' },
      { word: 'naively', pos: 'adverb', meaning: 'safça' }
    ],
    synonyms: [
      { word: 'Innocent', meaning: 'Masum', pos: 'adj' },
      { word: 'Gullible', meaning: 'Saf, her şeye inanan', pos: 'adj' },
      { word: 'Artless', meaning: 'Kurnaz olmayan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sophisticated', meaning: 'Görmüş geçirmiş', pos: 'adj' },
      { word: 'Skeptical', meaning: 'Şüpheci', pos: 'adj' },
      { word: 'Wise', meaning: 'Bilge', pos: 'adj' }
    ],
    collocations: ['politically naïve', 'somewhat naive', 'naive belief'],
    collocationMeanings: {
      'politically naïve': 'siyasi açıdan toy',
      'somewhat naive': 'biraz safça',
      'naive belief': 'safça inanış'
    },
    examples: ["Jim's so naïve he'll believe whatever anyone tells him."],
    exampleTranslations: ['Jim o kadar saf ki kim ona ne derse inanır.']
  },
  {
    id: 'open_minded',
    word: 'Open-minded',
    pos: 'adj',
    meaning: 'Açık fikirli',
    definition: 'Willing to consider new ideas.',
    ipa: '/ˌəʊpən ˈmaɪndɪd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tolerant', meaning: 'Hoşgörülü', pos: 'adj' },
      { word: 'Unbiased', meaning: 'Tarafsız', pos: 'adj' },
      { word: 'Liberal', meaning: 'Özgürlükçü', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Narrow-minded', meaning: 'Dar fikirli', pos: 'adj' },
      { word: 'Biased', meaning: 'Önyargılı', pos: 'adj' },
      { word: 'Intolerant', meaning: 'Hoşgörüsüz', pos: 'adj' }
    ],
    collocations: ['open-minded approach', 'open-minded about', 'keep an open mind'],
    collocationMeanings: {
      'open-minded approach': 'açık fikirli yaklaşım',
      'open-minded about': '...konusunda açık fikirli',
      'keep an open mind': 'önyargısız olmak'
    },
    examples: ["Talk to the new manager about it - she's pretty open-minded."],
    exampleTranslations: ['Bunu yeni müdürle konuş - o oldukça açık fikirlidir.']
  },
  {
    id: 'optimistic',
    word: 'Optimistic',
    pos: 'adj',
    meaning: 'İyimser',
    definition: 'Hopeful about the future and expecting good things to happen.',
    ipa: '/ˌɒptɪˈmɪstɪk/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'optimism', pos: 'noun', meaning: 'iyimserlik' },
      { word: 'optimist', pos: 'noun', meaning: 'iyimser kişi' }
    ],
    synonyms: [
      { word: 'Hopeful', meaning: 'Umutlu', pos: 'adj' },
      { word: 'Positive', meaning: 'Olumlu', pos: 'adj' },
      { word: 'Confident', meaning: 'Güvenli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Pessimistic', meaning: 'Karamsar', pos: 'adj' },
      { word: 'Cynical', meaning: 'Kuşkucu', pos: 'adj' },
      { word: 'Despondent', meaning: 'Umutsuz', pos: 'adj' }
    ],
    collocations: ['optimistic view', 'optimistic outlook', 'cautiously optimistic'],
    collocationMeanings: {
      'optimistic view': 'iyimser bakış açısı',
      'optimistic outlook': 'iyimser görünüm',
      'cautiously optimistic': 'temkinli bir iyimserlik içinde'
    },
    examples: ['The CEO seemed pretty optimistic about the future of the company.'],
    exampleTranslations: ['CEO şirketin geleceği hakkında oldukça iyimser görünüyordu.']
  },
  {
    id: 'passionate',
    word: 'Passionate',
    pos: 'adj',
    meaning: 'Tutkulu',
    definition: 'Showing or expressing strong beliefs, interest or enthusiasm.',
    ipa: '/ˈpæʃənət/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'passion', pos: 'noun', meaning: 'tutku' },
      { word: 'passionately', pos: 'adverb', meaning: 'tutkuyla' }
    ],
    synonyms: [
      { word: 'Enthusiastic', meaning: 'Coşkulu', pos: 'adj' },
      { word: 'Ardent', meaning: 'Ateşli, hevesli', pos: 'adj' },
      { word: 'Fervent', meaning: 'Hararetli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Apathetic', meaning: 'Duygusuz, ilgisiz', pos: 'adj' },
      { word: 'Indifferent', meaning: 'Kayıtsız', pos: 'adj' },
      { word: 'Cool', meaning: 'Soğukkanlı/İlgisiz', pos: 'adj' }
    ],
    collocations: ['passionate about', 'passionate plea', 'passionate argument'],
    collocationMeanings: {
      'passionate about': 'bir şeye tutkuyla bağlı',
      'passionate plea': 'hararetli savunma/rica',
      'passionate argument': 'tutkulu tartışma'
    },
    examples: ['Cody has been a passionate Boston Celtics fan his entire life.'],
    exampleTranslations: ['Cody hayatı boyunca tutkulu bir Boston Celtics taraftarı olmuştur.']
  },
  {
    id: 'pessimistic',
    word: 'Pessimistic',
    pos: 'adj',
    meaning: 'Karamsar, kötümser',
    definition: 'Thinking that the worst thing will happen in every situation.',
    ipa: '/ˌpesɪˈmɪstɪk/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'pessimism', pos: 'noun', meaning: 'karamsarlık' },
      { word: 'pessist', pos: 'noun', meaning: 'karamsar kişi' }
    ],
    synonyms: [
      { word: 'Gloomy', meaning: 'Kasvetli', pos: 'adj' },
      { word: 'Negative', meaning: 'Olumsuz', pos: 'adj' },
      { word: 'Cynical', meaning: 'İnanmayan, kötümser', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Optimistic', meaning: 'İyimser', pos: 'adj' },
      { word: 'Hopeful', meaning: 'Umutlu', pos: 'adj' },
      { word: 'Cheerful', meaning: 'Neşeli', pos: 'adj' }
    ],
    collocations: ['pessimistic outlook', 'pessimistic view', 'deeply pessimistic'],
    collocationMeanings: {
      'pessimistic outlook': 'karamsar bakış',
      'pessimistic view': 'kötümser görüş',
      'deeply pessimistic': 'son derece karamsar'
    },
    examples: ["Try not to be so pessimistic; it'll probably be fine."],
    exampleTranslations: ['Bu kadar karamsar olmamaya çalış; muhtemelen her şey yolunda gidecek.']
  },
  {
    id: 'self_centred',
    word: 'Self-centred',
    pos: 'adj',
    meaning: 'Benmerkezci, bencil',
    definition: 'Too interested in yourself, so that you do not think of others.',
    ipa: '/ˌself ˈsentəd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Selfish', meaning: 'Bencil', pos: 'adj' },
      { word: 'Egotistical', meaning: 'Kendini beğenmiş', pos: 'adj' },
      { word: 'Narcissistic', meaning: 'Narsist', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Altruistic', meaning: 'Özverili', pos: 'adj' },
      { word: 'Selfless', meaning: 'Bencil olmayan', pos: 'adj' },
      { word: 'Considerate', meaning: 'Düşünceli', pos: 'adj' }
    ],
    collocations: ['selfish and self-centred', 'incredibly self-centred', 'self-centred attitude'],
    collocationMeanings: {
      'selfish and self-centred': 'bencil ve benmerkezci',
      'incredibly self-centred': 'inanılmaz benmerkezci',
      'self-centred attitude': 'benmerkezci tutum'
    },
    examples: ['Chris is so self-centred; he never thinks of anyone else!'],
    exampleTranslations: ['Chris çok benmerkezcidir; asla başkasını düşünmez!']
  },
  {
    id: 'sensitive',
    word: 'Sensitive',
    pos: 'adj',
    meaning: 'Hassas, duyarlı',
    definition: 'Likely to become upset quickly.',
    ipa: '/ˈsensətɪv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'sensitivity', pos: 'noun', meaning: 'hassasiyet' },
      { word: 'sensitively', pos: 'adverb', meaning: 'hassasça' }
    ],
    synonyms: [
      { word: 'Delicate', meaning: 'Narin', pos: 'adj' },
      { word: 'Susceptible', meaning: 'Duyarlı', pos: 'adj' },
      { word: 'Compassionate', meaning: 'Şefkatli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Insensitive', meaning: 'Duygusuz, kaba', pos: 'adj' },
      { word: 'Callous', meaning: 'Katı kalpli', pos: 'adj' },
      { word: 'Tough', meaning: 'Dayanıklı/Sert', pos: 'adj' }
    ],
    collocations: ['highly sensitive', 'sensitive skin', 'sensitive issue'],
    collocationMeanings: {
      'highly sensitive': 'çok hassas',
      'sensitive skin': 'hassas cilt',
      'sensitive issue': 'hassas konu'
    },
    examples: ["If I'd known Juan was so sensitive, I wouldn't have teased him."],
    exampleTranslations: ['Juan’ın bu kadar hassas olduğunu bilseydim onunla dalga geçmezdim.']
  },
  {
    id: 'stubborn',
    word: 'Stubborn',
    pos: 'adj',
    meaning: 'İnatçı',
    definition: 'Not willing to change ideas or consider anyone else’s reasons.',
    ipa: '/ˈstʌbən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'stubbornness', pos: 'noun', meaning: 'inatçılık' },
      { word: 'stubbornly', pos: 'adverb', meaning: 'inatla' }
    ],
    synonyms: [
      { word: 'Obstinate', meaning: 'Kafa tutan, inatçı', pos: 'adj' },
      { word: 'Headstrong', meaning: 'Dikbaşlı', pos: 'adj' },
      { word: 'Dogged', meaning: 'Israrlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Compliant', meaning: 'Uysal', pos: 'adj' },
      { word: 'Flexible', meaning: 'Esnek', pos: 'adj' },
      { word: 'Yielding', meaning: 'Boyun eğen', pos: 'adj' }
    ],
    collocations: ['stubborn as a mule', 'stubborn streak', 'incredibly stubborn'],
    collocationMeanings: {
      'stubborn as a mule': 'katır gibi inatçı',
      'stubborn streak': 'inatçılık damarı',
      'incredibly stubborn': 'inanılmaz inatçı'
    },
    examples: ["He definitely won't change his mind; he's too stubborn."],
    exampleTranslations: ['Fikrini kesinlikle değiştirmeyecek; o çok inatçıdır.']
  },
  {
    id: 'witty',
    word: 'Witty',
    pos: 'adj',
    meaning: 'Hazırcevap, nüktedan, esprili',
    definition: 'Using words in a clever and funny way.',
    ipa: '/ˈwɪti/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'wit', pos: 'noun', meaning: 'zeka, nükte' },
      { word: 'witticism', pos: 'noun', meaning: 'nükte' },
      { word: 'wittily', pos: 'adverb', meaning: 'zekice' }
    ],
    synonyms: [
      { word: 'Clever', meaning: 'Zeki', pos: 'adj' },
      { word: 'Sharp-witted', meaning: 'Keskin zekalı', pos: 'adj' },
      { word: 'Humorous', meaning: 'Mizahi', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dull', meaning: 'Sıkıcı, donuk', pos: 'adj' },
      { word: 'Stupid', meaning: 'Aptalca', pos: 'adj' },
      { word: 'Serious', meaning: 'Ciddi', pos: 'adj' }
    ],
    collocations: ['witty remark', 'witty comment', 'sharp and witty'],
    collocationMeanings: {
      'witty remark': 'hazırcevap yorum',
      'witty comment': 'zekice yorum',
      'sharp and witty': 'keskin ve nüktedan'
    },
    examples: ['Hassan struggled to think of something original and witty to say.'],
    exampleTranslations: ['Hassan söyleyecek orijinal ve esprili bir şey bulmakta zorlandı.']
  },

  // --- UNIT 1: NOUN SUFFIXES ---
  {
    id: 'arrogance',
    word: 'Arrogance',
    pos: 'noun',
    meaning: 'Kibir, küstahlık',
    definition: 'Behaviour that shows you think you are better than others.',
    ipa: '/ˈærəɡəns/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'arrogant', pos: 'adj', meaning: 'kibirli' },
      { word: 'arrogantly', pos: 'adverb', meaning: 'kibirle' }
    ],
    synonyms: [
      { word: 'Haughtiness', meaning: 'Kendini beğenmişlik', pos: 'noun' },
      { word: 'Conceit', meaning: 'Kibir', pos: 'noun' },
      { word: 'Hubris', meaning: 'Aşırı özgüven/kibir', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Humility', meaning: 'Mütevazılık', pos: 'noun' },
      { word: 'Modesty', meaning: 'Alçakgönüllülük', pos: 'noun' },
      { word: 'Meekness', meaning: 'Uysallık', pos: 'noun' }
    ],
    collocations: ['sheer arrogance', 'display arrogance', 'offensive arrogance'],
    collocationMeanings: {
      'sheer arrogance': 'tam bir kibir',
      'display arrogance': 'kibir göstermek',
      'offensive arrogance': 'itici/saldırgan kibir'
    },
    examples: ["Frankly, I'm amazed by your level of arrogance."],
    exampleTranslations: ['Açıkçası, kibir seviyen karşısında şaşkınım.']
  },
  {
    id: 'confidence',
    word: 'Confidence',
    pos: 'noun',
    meaning: 'Özgüven, güven',
    definition: 'The belief that you are able to do things well.',
    ipa: '/ˈkɒnfɪdəns/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'confident', pos: 'adj', meaning: 'kendinden emin' },
      { word: 'confidently', pos: 'adverb', meaning: 'güvenle' }
    ],
    synonyms: [
      { word: 'Self-assurance', meaning: 'Özgüven', pos: 'noun' },
      { word: 'Trust', meaning: 'İnanç, güven', pos: 'noun' },
      { word: 'Conviction', meaning: 'İnanç/Eminlik', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Diffidence', meaning: 'Utangaçlık, kendine güvensizlik', pos: 'noun' },
      { word: 'Uncertainty', meaning: 'Belirsizlik', pos: 'noun' },
      { word: 'Doubt', meaning: 'Şüphe', pos: 'noun' }
    ],
    collocations: ['lack of confidence', 'boost confidence', 'self-confidence'],
    collocationMeanings: {
      'lack of confidence': 'güven eksikliği',
      'boost confidence': 'özgüveni artırmak',
      'self-confidence': 'özgüven'
    },
    examples: ['You should have more confidence in yourself!'],
    exampleTranslations: ['Kendine daha fazla güvenmelisin!']
  },
  {
    id: 'determination',
    word: 'Determination',
    pos: 'noun',
    meaning: 'Kararlılık, azim',
    definition: 'The refusal to let anything prevent you from doing what you decided.',
    ipa: '/dɪˌtɜːmɪˈneɪʃn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'determine', pos: 'verb', meaning: 'belirlemek, karar vermek' },
      { word: 'determined', pos: 'adj', meaning: 'kararlı' }
    ],
    synonyms: [
      { word: 'Resolution', meaning: 'Azim', pos: 'noun' },
      { word: 'Persistence', meaning: 'Israr', pos: 'noun' },
      { word: 'Tenacity', meaning: 'İnatçılık/Azim', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Indecision', meaning: 'Kararsızlık', pos: 'noun' },
      { word: 'Vacillation', meaning: 'Tereddüt', pos: 'noun' },
      { word: 'Weakness', meaning: 'İrade zayıflığı', pos: 'noun' }
    ],
    collocations: ['show determination', 'great determination', 'fierce determination'],
    collocationMeanings: {
      'show determination': 'kararlılık göstermek',
      'great determination': 'büyük azim',
      'fierce determination': 'şiddetli kararlılık'
    },
    examples: ["You've got to admire his determination; he never gives up."],
    exampleTranslations: ['Onun azmine hayran kalmalısın; asla pes etmez.']
  },
  {
    id: 'loyalty',
    word: 'Loyalty',
    pos: 'noun',
    meaning: 'Sadakat, vefa',
    definition: 'Support that you always give to someone because of duty or love.',
    ipa: '/ˈlɔɪəlti/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'loyal', pos: 'adj', meaning: 'sadık' },
      { word: 'loyally', pos: 'adverb', meaning: 'sadakatle' }
    ],
    synonyms: [
      { word: 'Faithfulness', meaning: 'Vefa', pos: 'noun' },
      { word: 'Devotion', meaning: 'Bağlılık', pos: 'noun' },
      { word: 'Allegiance', meaning: 'Sadakat', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Betrayal', meaning: 'İhanet', pos: 'noun' },
      { word: 'Disloyalty', meaning: 'Sadakatsizlik', pos: 'noun' },
      { word: 'Treachery', meaning: 'Hainlik', pos: 'noun' }
    ],
    collocations: ['customer loyalty', 'brand loyalty', 'unswerving loyalty'],
    collocationMeanings: {
      'customer loyalty': 'müşteri sadakati',
      'brand loyalty': 'marka sadakati',
      'unswerving loyalty': 'sarsılmaz sadakat'
    },
    examples: ['Barry inspires great loyalty among his employees.'],
    exampleTranslations: ['Barry, çalışanları arasında büyük bir sadakat uyandırıyor.']
  },
  {
    id: 'optimism',
    word: 'Optimism',
    pos: 'noun',
    meaning: 'İyimserlik',
    definition: 'A tendency to be hopeful and expect good things.',
    ipa: '/ˈɒptɪmɪzəm/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'optimistic', pos: 'adj', meaning: 'iyimser' },
      { word: 'optimist', pos: 'noun', meaning: 'iyimser kişi' }
    ],
    synonyms: [
      { word: 'Hopefulness', meaning: 'Umutluluk', pos: 'noun' },
      { word: 'Positivity', meaning: 'Olumluluk', pos: 'noun' },
      { word: 'Confidence', meaning: 'Eminlik', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Pessimism', meaning: 'Karamsarlık', pos: 'noun' },
      { word: 'Cynicism', meaning: 'Kuşkuculuk', pos: 'noun' },
      { word: 'Despair', meaning: 'Umutsuzluk', pos: 'noun' }
    ],
    collocations: ['blind optimism', 'cautious optimism', 'general optimism'],
    collocationMeanings: {
      'blind optimism': 'körlemesine iyimserlik',
      'cautious optimism': 'temkinli iyimserlik',
      'general optimism': 'genel iyimserlik'
    },
    examples: ["There's much greater optimism within the company now."],
    exampleTranslations: ['Şirket içinde şu an çok daha büyük bir iyimserlik var.']
  },
  {
    id: 'responsibility',
    word: 'Responsibility',
    pos: 'noun',
    meaning: 'Sorumluluk',
    definition: 'Blame for something that has happened or the duty to deal with it.',
    ipa: '/rɪˌspɒnsəˈbɪləti/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'responsible', pos: 'adj', meaning: 'sorumlu' },
      { word: 'responsibly', pos: 'adverb', meaning: 'sorumlulukla' }
    ],
    synonyms: [
      { word: 'Obligation', meaning: 'Zorunluluk', pos: 'noun' },
      { word: 'Duty', meaning: 'Görev', pos: 'noun' },
      { word: 'Accountability', meaning: 'Hesap verebilirlik', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Irresponsibility', meaning: 'Sorumsuzluk', pos: 'noun' },
      { word: 'Exemption', meaning: 'Muafiyet', pos: 'noun' },
      { word: 'Carelessness', meaning: 'Dikkatsizlik', pos: 'noun' }
    ],
    collocations: ['take responsibility', 'sense of responsibility', 'accept responsibility'],
    collocationMeanings: {
      'take responsibility': 'sorumluluk almak',
      'sense of responsibility': 'sorumluluk duygusu',
      'accept responsibility': 'sorumluluğu kabul etmek'
    },
    examples: ['I take full responsibility for the problems.'],
    exampleTranslations: ['Sorunlar için tüm sorumluluğu üstleniyorum.']
  },
  {
// --- UNIT 2: HEALTH & FITNESS ---
  
    id: 'anxiety',
    word: 'Anxiety',
    pos: 'noun',
    meaning: 'Kaygı, endişe',
    definition: 'The feeling of being very worried that something bad will happen.',
    ipa: '/æŋˈzaɪəti/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'anxious', pos: 'adj', meaning: 'endişeli' },
      { word: 'anxiously', pos: 'adverb', meaning: 'endişeyle' }
    ],
    synonyms: [
      { word: 'Worry', meaning: 'Endişe', pos: 'noun' },
      { word: 'Apprehension', meaning: 'Vesvese/Kaygı', pos: 'noun' },
      { word: 'Unease', meaning: 'Huzursuzluk', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Confidence', meaning: 'Güven', pos: 'noun' },
      { word: 'Calmness', meaning: 'Sakinlik', pos: 'noun' },
      { word: 'Serenity', meaning: 'Dinginlik', pos: 'noun' }
    ],
    collocations: ['suffer from anxiety', 'acute anxiety', 'social anxiety'],
    collocationMeanings: {
      'suffer from anxiety': 'kaygıdan muzdarip olmak',
      'acute anxiety': 'şiddetli kaygı',
      'social anxiety': 'sosyal kaygı'
    },
    examples: ['Too much caffeine can cause anxiety.'],
    exampleTranslations: ['Çok fazla kafein kaygıya neden olabilir.']
  },
  {
    id: 'calorie',
    word: 'Calorie',
    pos: 'noun',
    meaning: 'Kalori',
    definition: 'Units for measuring how much energy you get from food.',
    ipa: '/ˈkæləri/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'caloric', pos: 'adj', meaning: 'kaloriyle ilgili' }
    ],
    synonyms: [
      { word: 'Energy unit', meaning: 'Enerji birimi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['low-calorie diet', 'burn calories', 'calorie intake'],
    collocationMeanings: {
      'low-calorie diet': 'düşük kalorili diyet',
      'burn calories': 'kalori yakmak',
      'calorie intake': 'kalori alımı'
    },
    examples: ['How many calories are there in a slice of pizza?'],
    exampleTranslations: ['Bir dilim pizzada kaç kalori var?']
  },
  {
    id: 'cholesterol',
    word: 'Cholesterol',
    pos: 'noun',
    meaning: 'Kolesterol',
    definition: 'A type of fat in the blood that can cause heart disease.',
    ipa: '/kəˈlestərɒl/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Blood fat', meaning: 'Kan yağı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['high cholesterol', 'lower cholesterol', 'cholesterol level'],
    collocationMeanings: {
      'high cholesterol': 'yüksek kolesterol',
      'lower cholesterol': 'kolesterolü düşürmek',
      'cholesterol level': 'kolesterol seviyesi'
    },
    examples: ['Try to avoid fatty foods that are high in cholesterol.'],
    exampleTranslations: ['Kolesterolü yüksek yağlı gıdalardan kaçınmaya çalışın.']
  },
  {
    id: 'depression',
    word: 'Depression',
    pos: 'noun',
    meaning: 'Depresyon, bunalım',
    definition: 'A medical condition in which a person is so unhappy they cannot live a normal life.',
    ipa: '/dɪˈpreʃn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'depress', pos: 'verb', meaning: 'bunaltmak/bastırmak' },
      { word: 'depressed', pos: 'adj', meaning: 'depresif' },
      { word: 'depressing', pos: 'adj', meaning: 'iç karartıcı' }
    ],
    synonyms: [
      { word: 'Despair', meaning: 'Umutsuzluk', pos: 'noun' },
      { word: 'Melancholy', meaning: 'Melankoli', pos: 'noun' },
      { word: 'Gloom', meaning: 'Kasvet', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Happiness', meaning: 'Mutluluk', pos: 'noun' },
      { word: 'Elation', meaning: 'Müthiş sevinç', pos: 'noun' },
      { word: 'Joy', meaning: 'Neşe', pos: 'noun' }
    ],
    collocations: ['severe depression', 'clinical depression', 'suffer from depression'],
    collocationMeanings: {
      'severe depression': 'şiddetli depresyon',
      'clinical depression': 'klinik depresyon',
      'suffer from depression': 'depresyon çekmek'
    },
    examples: ['He has suffered from depression for years.'],
    exampleTranslations: ['Yıllardır depresyondan muzdarip.']
  },
  {
    id: 'level_of_fitness',
    word: 'Level of fitness',
    pos: 'phrase',
    meaning: 'Zindelik/form düzeyi',
    definition: 'How healthy and strong someone is.',
    ipa: '/ˈlevl əv ˈfɪtnəs/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'fit', pos: 'adj', meaning: 'formda' },
      { word: 'fitness', pos: 'noun', meaning: 'zindelik' }
    ],
    synonyms: [
      { word: 'Physical condition', meaning: 'Fiziksel durum', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['improve fitness level', 'high level of fitness', 'physical fitness'],
    collocationMeanings: {
      'improve fitness level': 'zindelik seviyesini artırmak',
      'high level of fitness': 'yüksek form düzeyi',
      'physical fitness': 'fiziksel zindelik'
    },
    examples: ['Regular cycling can help increase your level of fitness.'],
    exampleTranslations: ['Düzenli bisiklet sürmek form düzeyinizi artırmaya yardımcı olabilir.']
  },
  {
    id: 'life_expectancy',
    word: 'Life expectancy',
    pos: 'noun',
    meaning: 'Ortalama yaşam süresi',
    definition: 'The length of time that someone is likely to live.',
    ipa: '/ˈlaɪf ɪkspektənsi/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Lifespan', meaning: 'Ömür süresi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['average life expectancy', 'increase life expectancy', 'longer life expectancy'],
    collocationMeanings: {
      'average life expectancy': 'ortalama yaşam beklentisi',
      'increase life expectancy': 'yaşam süresini artırmak',
      'longer life expectancy': 'daha uzun yaşam süresi'
    },
    examples: ['Medical advances have helped increase life expectancy.'],
    exampleTranslations: ['Tıbbi ilerlemeler ortalama yaşam süresinin artmasına yardımcı oldu.']
  },
  {
    id: 'mental_health',
    word: 'Mental health',
    pos: 'noun',
    meaning: 'Ruh sağlığı',
    definition: 'The condition of your mind.',
    ipa: '/ˈmentl helθ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'mental', pos: 'adj', meaning: 'zihinsel' },
      { word: 'mentally', pos: 'adverb', meaning: 'zihnen' }
    ],
    synonyms: [
      { word: 'Psychological well-being', meaning: 'Psikolojik sağlık', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['mental health awareness', 'mental health issues', 'improve mental health'],
    collocationMeanings: {
      'mental health awareness': 'ruh sağlığı farkındalığı',
      'mental health issues': 'ruh sağlığı sorunları',
      'improve mental health': 'ruh sağlığını iyileştirmek'
    },
    examples: ['Adel has suffered from various mental health problems for years.'],
    exampleTranslations: ['Adel yıllardır çeşitli ruh sağlığı sorunları yaşıyor.']
  },
  {
    id: 'obesity',
    word: 'Obesity',
    pos: 'noun',
    meaning: 'Obezite, aşırı şişmanlık',
    definition: 'A condition in which someone is too fat in a dangerous way.',
    ipa: '/əʊˈbiːsəti/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'obese', pos: 'adj', meaning: 'obez' }
    ],
    synonyms: [
      { word: 'Corpulence', meaning: 'Gövdelilik/Şişmanlık', pos: 'noun' },
      { word: 'Overweight', meaning: 'Fazla kiloluluk', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Thinness', meaning: 'Zayıflık', pos: 'noun' },
      { word: 'Slenderness', meaning: 'İncelik', pos: 'noun' },
      { word: 'Emaciation', meaning: 'Aşırı zayıflık', pos: 'noun' }
    ],
    collocations: ['tackle obesity', 'childhood obesity', 'morbid obesity'],
    collocationMeanings: {
      'tackle obesity': 'obezite ile mücadele etmek',
      'childhood obesity': 'çocukluk çağı obezitesi',
      'morbid obesity': 'ölümcül obezite'
    },
    examples: ['Unhealthy school dinners contribute to obesity in children.'],
    exampleTranslations: ['Sağlıksız okul yemekleri çocuklarda obeziteye katkıda bulunuyor.']
  },
  {
    id: 'physical',
    word: 'Physical',
    pos: 'adj',
    meaning: 'Fiziksel, bedensel',
    definition: 'Relating to your body rather than your mind.',
    ipa: '/ˈfɪzɪkl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'physically', pos: 'adverb', meaning: 'fiziksel olarak' },
      { word: 'physique', pos: 'noun', meaning: 'fizik, yapı' }
    ],
    synonyms: [
      { word: 'Bodily', meaning: 'Bedensel', pos: 'adj' },
      { word: 'Corporeal', meaning: 'Somut, bedensel', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Mental', meaning: 'Zihinsel', pos: 'adj' },
      { word: 'Spiritual', meaning: 'Ruhsal', pos: 'adj' }
    ],
    collocations: ['physical health', 'physical exercise', 'physical appearance'],
    collocationMeanings: {
      'physical health': 'beden sağlığı',
      'physical exercise': 'fiziksel egzersiz',
      'physical appearance': 'fiziksel görünüş'
    },
    examples: ['Adults are advised to do at least 30 minutes of physical activity daily.'],
    exampleTranslations: ['Yetişkinlere her gün en az 30 dakika fiziksel aktivite yapmaları önerilir.']
  },
  {
    id: 'processed_foods',
    word: 'Processed foods',
    pos: 'noun',
    meaning: 'İşlenmiş gıdalar',
    definition: 'Edible products that are manufactured.',
    ipa: '/ˈprəʊsest fuːdz/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'process', pos: 'verb/noun', meaning: 'işlemek, süreç' }
    ],
    synonyms: [
      { word: 'Manufactured food', meaning: 'Üretilmiş gıda', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Whole foods', meaning: 'İşlenmemiş gıdalar', pos: 'noun' },
      { word: 'Fresh food', meaning: 'Taze gıda', pos: 'noun' }
    ],
    collocations: ['avoid processed foods', 'highly processed foods', 'processed food products'],
    collocationMeanings: {
      'avoid processed foods': 'işlenmiş gıdalardan kaçınmak',
      'highly processed foods': 'aşırı işlenmiş gıdalar',
      'processed food products': 'işlenmiş gıda ürünleri'
    },
    examples: ['My doctor suggested I cut down on processed foods.'],
    exampleTranslations: ['Doktorum işlenmiş gıdaları azaltmamı önerdi.']
  },
  {
    id: 'reduce_the_risk',
    word: 'Reduce the risk',
    pos: 'phrase',
    meaning: 'Riski azaltmak',
    definition: 'To lower the chances of something bad happening.',
    ipa: '/rɪˈdjuːs ðə rɪsk/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Lower the odds', meaning: 'İhtimalleri düşürmek', pos: 'phrase' },
      { word: 'Decrease danger', meaning: 'Tehlikeyi azaltmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Increase the risk', meaning: 'Riski artırmak', pos: 'phrase' }
    ],
    collocations: ['significantly reduce', 'reduce the risk of', 'ways to reduce'],
    collocationMeanings: {
      'significantly reduce': 'önemli ölçüde azaltmak',
      'reduce the risk of': '...riskini azaltmak',
      'ways to reduce': 'azaltmanın yolları'
    },
    examples: ['Cutting down on fatty foods can reduce the risk of heart disease.'],
    exampleTranslations: ['Yağlı yiyecekleri azaltmak kalp hastalığı riskini düşürebilir.']
  },
  {
    id: 'slow_the_ageing_process',
    word: 'Slow the ageing process',
    pos: 'phrase',
    meaning: 'Yaşlanma sürecini yavaşlatmak',
    definition: "To reduce the speed at which people's bodies deteriorate.",
    ipa: '/sləʊ ðə ˈeɪdʒɪŋ ˈprəʊses/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Retard aging', meaning: 'Yaşlanmayı geciktirmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Accelerate aging', meaning: 'Yaşlanmayı hızlandırmak', pos: 'phrase' }
    ],
    collocations: ['natural ageing process', 'slow the ageing', 'prevent ageing'],
    collocationMeanings: {
      'natural ageing process': 'doğal yaşlanma süreci',
      'slow the ageing': 'yaşlanmayı yavaşlatmak',
      'prevent ageing': 'yaşlanmayı önlemek'
    },
    examples: ['Eating well and doing exercise can slow the ageing process.'],
    exampleTranslations: ['İyi beslenmek ve egzersiz yapmak yaşlanma sürecini yavaşlatabilir.']
  },
  {
    id: 'stress',
    word: 'Stress',
    pos: 'noun',
    meaning: 'Stres, baskı',
    definition: 'Pressure or worry caused by problems in everyday life.',
    ipa: '/stres/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'stressful', pos: 'adj', meaning: 'stresli' },
      { word: 'stressed', pos: 'adj', meaning: 'stres altında' }
    ],
    synonyms: [
      { word: 'Pressure', meaning: 'Baskı', pos: 'noun' },
      { word: 'Strain', meaning: 'Gerginlik', pos: 'noun' },
      { word: 'Tension', meaning: 'Gerilim', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Relaxation', meaning: 'Gevşeme', pos: 'noun' },
      { word: 'Ease', meaning: 'Rahatlık', pos: 'noun' }
    ],
    collocations: ['under stress', 'deal with stress', 'relieve stress'],
    collocationMeanings: {
      'under stress': 'stres altında',
      'deal with stress': 'stresle başa çıkmak',
      'relieve stress': 'stresi azaltmak'
    },
    examples: ["I just couldn't take the stress of working in the city anymore."],
    exampleTranslations: ['Şehirde çalışmanın stresini artık kaldıramadım.']
  },

  // --- ADVERBS OF STANCE ---
  {
    id: 'admittedly',
    word: 'Admittedly',
    pos: 'adverb',
    meaning: 'Kabul etmek gerekir ki, kuşkusuz',
    definition: 'Saying something is true even though it may weaken your argument.',
    ipa: '/ədˈmɪtɪdli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'admit', pos: 'verb', meaning: 'itiraf etmek/kabul etmek' },
      { word: 'admission', pos: 'noun', meaning: 'kabul, itiraf' }
    ],
    synonyms: [
      { word: 'Confessedly', meaning: 'İtiraf edildiği üzere', pos: 'adverb' },
      { word: 'Certainly', meaning: 'Kuşkusuz', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Denyingly', meaning: 'İnkar ederek', pos: 'adverb' }
    ],
    collocations: ['admittedly difficult', 'admittedly true', 'though admittedly'],
    collocationMeanings: {
      'admittedly difficult': 'kuşkusuz zor',
      'admittedly true': 'kabul etmek gerekirse doğru',
      'though admittedly': 'gerçi kabul etmek gerekirse'
    },
    examples: ['I’m sure it was her although, admittedly, she was wearing a different coat.'],
    exampleTranslations: ['Eminim oydu, gerçi kabul etmek gerekir ki farklı bir palto giyiyordu.']
  },
  {
    id: 'apparently',
    word: 'Apparently',
    pos: 'adverb',
    meaning: 'Görünüşe göre, anlaşılan',
    definition: 'Based only on what you have heard, not on what you are certain is true.',
    ipa: '/əˈpærəntli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'apparent', pos: 'adj', meaning: 'aşikar, belli' }
    ],
    synonyms: [
      { word: 'Seemingly', meaning: 'Görünüşte', pos: 'adverb' },
      { word: 'Ostensibly', meaning: 'Görünürde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Really', meaning: 'Gerçekten', pos: 'adverb' },
      { word: 'Actually', meaning: 'Aslında', pos: 'adverb' }
    ],
    collocations: ['apparently simple', 'apparently easy', 'apparently unrelated'],
    collocationMeanings: {
      'apparently simple': 'görünüşte basit',
      'apparently easy': 'görünüşte kolay',
      'apparently unrelated': 'görünüşe göre alakasız'
    },
    examples: ['Apparently, Felix is looking for a new job.'],
    exampleTranslations: ['Anlaşılan Felix yeni bir iş bakıyor.']
  },
  {
    id: 'frankly',
    word: 'Frankly',
    pos: 'adverb',
    meaning: 'Açıkçası, dürüst olmak gerekirse',
    definition: 'Giving your honest opinion, even though it might be disliked.',
    ipa: '/ˈfræŋkli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'frank', pos: 'adj', meaning: 'açık sözlü, dürüst' },
      { word: 'frankness', pos: 'noun', meaning: 'açık sözlülük' }
    ],
    synonyms: [
      { word: 'Honestly', meaning: 'Dürüstçe', pos: 'adverb' },
      { word: 'Candidly', meaning: 'İçtenlikle', pos: 'adverb' },
      { word: 'Directly', meaning: 'Doğrudan', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Deceitfully', meaning: 'Hileyle', pos: 'adverb' },
      { word: 'Evasively', meaning: 'Kaçamak bir dille', pos: 'adverb' }
    ],
    collocations: ['frankly speaking', 'quite frankly', 'tell frankly'],
    collocationMeanings: {
      'frankly speaking': 'açık konuşmak gerekirse',
      'quite frankly': 'dürüst olmak gerekirse',
      'tell frankly': 'açıkça söylemek'
    },
    examples: ["Frankly, I don't care who you are."],
    exampleTranslations: ['Açıkçası kim olduğun umurumda değil.']
  },
  {
    id: 'merely',
    word: 'Merely',
    pos: 'adverb',
    meaning: 'Sadece, yalnızca',
    definition: 'Saying that something is small or unimportant.',
    ipa: '/ˈmɪəli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'mere', pos: 'adj', meaning: 'sadece, katıksız' }
    ],
    synonyms: [
      { word: 'Only', meaning: 'Sadece', pos: 'adverb' },
      { word: 'Just', meaning: 'Yalnızca', pos: 'adverb' },
      { word: 'Simply', meaning: 'Basitçe', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Greatly', meaning: 'Büyük ölçüde', pos: 'adverb' },
      { word: 'Significantly', meaning: 'Anlamlı derecede', pos: 'adverb' }
    ],
    collocations: ['merely a fraction', 'merely a formality', 'not merely but'],
    collocationMeanings: {
      'merely a fraction': 'sadece küçük bir kısmı',
      'merely a formality': 'sadece bir formalite',
      'not merely but': 'sadece ... değil aynı zamanda'
    },
    examples: ['This job is merely a way for me to pay the bills.'],
    exampleTranslations: ['Bu iş benim için sadece faturaları ödemenin bir yolu.']
  },
  {
    id: 'naturally',
    word: 'Naturally',
    pos: 'adverb',
    meaning: 'Doğal olarak',
    definition: 'Happening in the way that you would expect.',
    ipa: '/ˈnætʃrəli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'natural', pos: 'adj', meaning: 'doğal' },
      { word: 'nature', pos: 'noun', meaning: 'doğa' }
    ],
    synonyms: [
      { word: 'Of course', meaning: 'Tabii ki', pos: 'adverb' },
      { word: 'Instinctively', meaning: 'İçgüdüsel olarak', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Unnaturally', meaning: 'Doğal olmayan şekilde', pos: 'adverb' },
      { word: 'Artificially', meaning: 'Yapay olarak', pos: 'adverb' }
    ],
    collocations: ['occur naturally', 'behave naturally', 'quite naturally'],
    collocationMeanings: {
      'occur naturally': 'doğal olarak meydana gelmek',
      'behave naturally': 'doğal davranmak',
      'quite naturally': 'gayet tabii'
    },
    examples: ['Naturally, Maria was very keen to meet the new starters.'],
    exampleTranslations: ['Doğal olarak Maria yeni başlayanlarla tanışmaya çok hevesliydi.']
  },
  {
    id: 'sadly',
    word: 'Sadly',
    pos: 'adverb',
    meaning: 'Maalesef, ne yazık ki',
    definition: 'Saying that you think something is bad or wrong.',
    ipa: '/ˈsædli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'sad', pos: 'adj', meaning: 'üzgün' },
      { word: 'sadness', pos: 'noun', meaning: 'üzüntü' }
    ],
    synonyms: [
      { word: 'Unfortunately', meaning: 'Maalesef', pos: 'adverb' },
      { word: 'Regrettably', meaning: 'Üzülerek', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Happily', meaning: 'Mutlulukla', pos: 'adverb' },
      { word: 'Fortunately', meaning: 'Neyse ki', pos: 'adverb' }
    ],
    collocations: ['sadly mistaken', 'sadly lacking', 'but sadly'],
    collocationMeanings: {
      'sadly mistaken': 'feci şekilde yanılmak',
      'sadly lacking': 'ne yazık ki eksik',
      'but sadly': 'ama maalesef'
    },
    examples: ["She made it through to the last round, but sadly, didn't get the job."],
    exampleTranslations: ['Son tura kadar geldi ama ne yazık ki işi alamadı.']
  },
  {
    id: 'simply',
    word: 'Simply',
    pos: 'adverb',
    meaning: 'Sadece, düpedüz',
    definition: 'Emphasising that what you are saying is nothing more than what you say.',
    ipa: '/ˈsɪmpli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'simple', pos: 'adj', meaning: 'basit' },
      { word: 'simplify', pos: 'verb', meaning: 'basitleştirmek' }
    ],
    synonyms: [
      { word: 'Purely', meaning: 'Sırf/Tamamen', pos: 'adverb' },
      { word: 'Plainly', meaning: 'Açıkça', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Complexly', meaning: 'Karmaşık bir şekilde', pos: 'adverb' }
    ],
    collocations: ['simply too much', 'simply because', 'simply put'],
    collocationMeanings: {
      'simply too much': 'resmen çok fazla',
      'simply because': 'sırf ... olduğu için',
      'simply put': 'basitçe söylemek gerekirse'
    },
    examples: ["We simply don't have time to go through everything now."],
    exampleTranslations: ['Şu an her şeyin üzerinden geçmek için basitçe vaktimiz yok.']
  },
  {
    id: 'undoubtedly',
    word: 'Undoubtedly',
    pos: 'adverb',
    meaning: 'Şüphesiz, kuşkusuz',
    definition: 'Saying that something is certainly true or accepted by everyone.',
    ipa: '/ʌnˈdaʊtɪdli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'doubt', pos: 'noun/verb', meaning: 'şüphe, şüphelenmek' },
      { word: 'undoubted', pos: 'adj', meaning: 'şüphe götürmez' }
    ],
    synonyms: [
      { word: 'Certainly', meaning: 'Kesinlikle', pos: 'adverb' },
      { word: 'Indisputably', meaning: 'Tartışmasız', pos: 'adverb' },
      { word: 'Unquestionably', meaning: 'Sorgulanamaz şekilde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Doubtfully', meaning: 'Şüpheyle', pos: 'adverb' },
      { word: 'Possibly', meaning: 'Belki/Olasılıkla', pos: 'adverb' }
    ],
    collocations: ['undoubtedly true', 'undoubtedly the best', 'will undoubtedly'],
    collocationMeanings: {
      'undoubtedly true': 'şüphesiz doğru',
      'undoubtedly the best': 'kuşkusuz en iyisi',
      'will undoubtedly': 'şüphesiz olacaktır'
    },
    examples: ['In my opinion, she was undoubtedly the best person for the job.'],
    exampleTranslations: ['Bence o şüphesiz iş için en uygun kişiydi.']
  },

  // --- ADVERB + ADJECTIVE COLLOCATIONS ---
  {
    id: 'absolutely_ridiculous',
    word: 'Absolutely ridiculous',
    pos: 'adj phrase',
    meaning: 'Tamamen saçma',
    definition: 'Very silly or unreasonable and deserving to be laughed at.',
    ipa: '/ˈæbsəluːtli rɪˈdɪkjələs/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Preposterous', meaning: 'Akıl dışı', pos: 'adj' },
      { word: 'Absurd', meaning: 'Saçma', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sensible', meaning: 'Mantıklı', pos: 'adj' },
      { word: 'Reasonable', meaning: 'Makul', pos: 'adj' }
    ],
    collocations: ['seem absolutely ridiculous', 'sound absolutely ridiculous', 'find absolutely ridiculous'],
    collocationMeanings: {
      'seem absolutely ridiculous': 'tamamen saçma görünmek',
      'sound absolutely ridiculous': 'kulağa tamamen saçma gelmek',
      'find absolutely ridiculous': 'tamamen saçma bulmak'
    },
    examples: ['Steph looks absolutely ridiculous in that hat.'],
    exampleTranslations: ['Steph o şapkayla tamamen saçma görünüyor.']
  },
  {
    id: 'bitterly_disappointed',
    word: 'Bitterly disappointed',
    pos: 'adj phrase',
    meaning: 'Acı bir hayal kırıklığına uğramış',
    definition: 'Unhappy because something hoped for did not happen.',
    ipa: '/ˈbɪtəli ˌdɪsəˈpɔɪntɪd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Deeply saddened', meaning: 'Derinden üzülmüş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Pleasantly surprised', meaning: 'Hoş bir sürpriz yaşamış', pos: 'adj' }
    ],
    collocations: ['left bitterly disappointed', 'feel bitterly disappointed', 'bitterly disappointed by'],
    collocationMeanings: {
      'left bitterly disappointed': 'acı bir hayal kırıklığına uğratılmış',
      'feel bitterly disappointed': 'acı bir hüsran hissetmek',
      'bitterly disappointed by': '...tarafından hüsrana uğramış'
    },
    examples: ['They were bitterly disappointed to lose on the final day.'],
    exampleTranslations: ['Son günde kaybettikleri için acı bir hayal kırıklığı yaşadılar.']
  },
  {
    id: 'deeply_concerned',
    word: 'Deeply concerned',
    pos: 'adj phrase',
    meaning: 'Derinden endişeli',
    definition: 'Very worried about something.',
    ipa: '/ˈdiːpli kənˈsɜːnd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Extremely worried', meaning: 'Aşırı endişeli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unconcerned', meaning: 'İlgisiz/Kaygısız', pos: 'adj' }
    ],
    collocations: ['remain deeply concerned', 'deeply concerned about', 'be deeply concerned'],
    collocationMeanings: {
      'remain deeply concerned': 'derinden endişeli olmaya devam etmek',
      'deeply concerned about': '...konusunda derinden endişeli',
      'be deeply concerned': 'çok endişelenmek'
    },
    examples: ["I'm deeply concerned about your lack of progress this year."],
    exampleTranslations: ['Bu yılki ilerleme eksikliğin konusunda derinden endişeliyim.']
  },
  {
    id: 'highly_likely',
    word: 'Highly likely',
    pos: 'adj phrase',
    meaning: 'Kuvvetle muhtemel',
    definition: 'Very probable.',
    ipa: '/ˈhaɪli ˈlaɪkli/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Very probable', meaning: 'Çok olası', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Highly unlikely', meaning: 'Çok düşük ihtimal', pos: 'adj' }
    ],
    collocations: ['consider highly likely', 'remain highly likely', 'seem highly likely'],
    collocationMeanings: {
      'consider highly likely': 'kuvvetle muhtemel görmek',
      'remain highly likely': 'yüksek olasılıkla devam etmek',
      'seem highly likely': 'kuvvetle muhtemel görünmek'
    },
    examples: ['It seems highly likely that she will step down.'],
    exampleTranslations: ['İstifa edeceği kuvvetle muhtemel görünüyor.']
  },
  {
    id: 'ridiculously_easy',
    word: 'Ridiculously easy',
    pos: 'adj phrase',
    meaning: 'Gülünç derecede kolay',
    definition: 'Not difficult to do at all, or not needing much work.',
    ipa: '/rɪˈdɪkjələsli ˈiːzi/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Effortless', meaning: 'Zahmetsiz', pos: 'adj' },
      { word: 'Child’s play', meaning: 'Çocuk oyuncağı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Incredibly difficult', meaning: 'İnanılmaz zor', pos: 'adj' },
      { word: 'Formidable', meaning: 'Zorlu/Dişli', pos: 'adj' }
    ],
    collocations: ['make it ridiculously easy', 'find it ridiculously easy', 'sound ridiculously easy'],
    collocationMeanings: {
      'make it ridiculously easy': 'gülünç derecede kolaylaştırmak',
      'find it ridiculously easy': 'çok basit bulmak',
      'sound ridiculously easy': 'kulağa çok basit gelmek'
    },
    examples: ["These days, it's ridiculously easy to keep in touch with friends."],
    exampleTranslations: ['Bugünlerde arkadaşlarla iletişimde kalmak gülünç derecede kolay.']
  },
  
  // --- UNIT 3: DESCRIPTIVE VERBS - SOUNDS ---
  {
    id: 'crackle',
    word: 'Crackle',
    pos: 'verb',
    meaning: 'Çatırdamak',
    definition: 'To make continuous short sounds like wood burning.',
    ipa: '/ˈkrækl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'crackling', pos: 'noun', meaning: 'çatırtı' }
    ],
    synonyms: [
      { word: 'Snap', meaning: 'Çıtırdamak', pos: 'verb' },
      { word: 'Sizzle', meaning: 'Cızırdamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Silence', meaning: 'Sessizlik', pos: 'noun' }
    ],
    collocations: ['crackle with energy', 'radio crackle', 'crackling fire'],
    collocationMeanings: {
      'crackle with energy': 'enerjiyle çatırda(mak)',
      'radio crackle': 'radyo paraziti/çatırtısı',
      'crackling fire': 'çatırdayan ateş'
    },
    examples: ['The fire crackled gently as they sat and talked.'],
    exampleTranslations: ['Onlar oturup konuşurken ateş hafifçe çatırdıyordu.']
  },
  {
    id: 'creak',
    word: 'Creak',
    pos: 'verb',
    meaning: 'Gıcırdamak',
    definition: 'To make a high noise when moving or under weight.',
    ipa: '/kriːk/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'creaky', pos: 'adj', meaning: 'gıcırdayan' }
    ],
    synonyms: [
      { word: 'Squeak', meaning: 'Gıcırdamak', pos: 'verb' },
      { word: 'Groan', meaning: 'Zorlanmak/Gıcırdamak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['creaking door', 'floorboards creak', 'creak open'],
    collocationMeanings: {
      'creaking door': 'gıcırdayan kapı',
      'floorboards creak': 'yer döşemelerinin gıcırdaması',
      'creak open': 'gıcırdıyarak açılmak'
    },
    examples: ['The old wooden chair creaked as he sat down.'],
    exampleTranslations: ['Eski tahta sandalye o oturduğunda gıcırdadı.']
  },
  {
    id: 'crunch',
    word: 'Crunch',
    pos: 'verb',
    meaning: 'Çıtırdamak, hışırdamak (ayak altındaki ses)',
    definition: 'To make a noise like something being crushed.',
    ipa: '/krʌntʃ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'crunchy', pos: 'adj', meaning: 'kıtır kıtır' }
    ],
    synonyms: [
      { word: 'Crush', meaning: 'Ezilerek ses çıkarmak', pos: 'verb' },
      { word: 'Grind', meaning: 'Gıcırdatmak/Ezmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['crunch numbers', 'crunchy texture', 'gravel crunch'],
    collocationMeanings: {
      'crunch numbers': 'sayıları hesaplamak/işlemek',
      'crunchy texture': 'kıtır doku',
      'gravel crunch': 'çakıl hışırtısı'
    },
    examples: ['The leaves crunched under our feet.'],
    exampleTranslations: ['Yapraklar ayaklarımızın altında hışırdadı.']
  },
  {
    id: 'groan',
    word: 'Groan',
    pos: 'verb',
    meaning: 'İnlemek, (eşya için) gıcırdamak/zorlanmak',
    definition: 'A long low sound as something moves or under weight.',
    ipa: '/ɡrəʊn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'groaning', pos: 'noun/adj', meaning: 'inleme' }
    ],
    synonyms: [
      { word: 'Moan', meaning: 'İnlemek/Sızlanmak', pos: 'verb' },
      { word: 'Creak', meaning: 'Gıcırdamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Cheer', meaning: 'Neşeyle bağırmak', pos: 'verb' }
    ],
    collocations: ['groan in pain', 'groan with frustration', 'inwardly groan'],
    collocationMeanings: {
      'groan in pain': 'acıyla inlemek',
      'groan with frustration': 'hüsranla inlemek',
      'inwardly groan': 'içinden of çekmek'
    },
    examples: ['The bridge groaned under the weight of the lorry.'],
    exampleTranslations: ['Köprü kamyonun ağırlığı altında inledi/gıcırdadı.']
  },
  {
    id: 'growl',
    word: 'Growl',
    pos: 'verb',
    meaning: 'Hırıldamak',
    definition: 'A frightening or unfriendly low noise made by an animal.',
    ipa: '/ɡraʊl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'growling', pos: 'adj', meaning: 'hırıldayan' }
    ],
    synonyms: [
      { word: 'Snarl', meaning: 'Diş göstererek hırlamak', pos: 'verb' },
      { word: 'Grumble', meaning: 'Söylenmek/Gürlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Purr', meaning: 'Mırlamak', pos: 'verb' }
    ],
    collocations: ['stomach growling', 'low growl', 'growl at'],
    collocationMeanings: {
      'stomach growling': 'karnın guruldaması',
      'low growl': 'alçak sesli hırıltı',
      'growl at': '...a hırlamak'
    },
    examples: ['The guard dog started to growl.'],
    exampleTranslations: ['Bekçi köpeği hırıldamaya başladı.']
  },
  {
    id: 'hiss',
    word: 'Hiss',
    pos: 'verb',
    meaning: 'Tıslamak',
    definition: "To make a long 's' sound like a snake.",
    ipa: '/hɪs/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'hissing', pos: 'noun', meaning: 'tıslama' }
    ],
    synonyms: [
      { word: 'Sizzle', meaning: 'Cızırdamak', pos: 'verb' },
      { word: 'Whiz', meaning: 'Vınlamak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['hiss with rage', 'steam hiss', 'hiss at someone'],
    collocationMeanings: {
      'hiss with rage': 'öfkeden tıslamak',
      'steam hiss': 'buhar tıslaması',
      'hiss at someone': 'birine tıslamak'
    },
    examples: ['The snake hissed and arched its back.'],
    exampleTranslations: ['Yılan tısladı ve sırtını kabarttı.']
  },
  {
    id: 'rumble',
    word: 'Rumble',
    pos: 'verb',
    meaning: 'Gürlemek, guruldamak',
    definition: 'To make a continuous deep sound.',
    ipa: '/ˈrʌmbl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'rumbling', pos: 'noun/adj', meaning: 'gürleme/gurultu' }
    ],
    synonyms: [
      { word: 'Thunder', meaning: 'Gürlemek', pos: 'verb' },
      { word: 'Boom', meaning: 'Gümbürdemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['rumbling stomach', 'thunder rumble', 'distant rumble'],
    collocationMeanings: {
      'rumbling stomach': 'guruldayan mide',
      'thunder rumble': 'gök gürlemesi',
      'distant rumble': 'uzaktan gelen gürültü'
    },
    examples: ['Thunder rumbled in the distance.'],
    exampleTranslations: ['Gök gürültüsü uzakta gürledi.']
  },
  {
    id: 'screech',
    word: 'Screech',
    pos: 'verb',
    meaning: 'Acı acı bağırmak, fren sesi çıkarmak',
    definition: 'To make a loud, high, and unpleasant noise.',
    ipa: '/skriːtʃ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'screeching', pos: 'adj', meaning: 'kulak tırmalayan' }
    ],
    synonyms: [
      { word: 'Shriek', meaning: 'Çığlık atmak', pos: 'verb' },
      { word: 'Squeal', meaning: 'Ciyaklamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Whisper', meaning: 'Fısıldamak', pos: 'verb' }
    ],
    collocations: ['screeching halt', 'screech with laughter', 'tyres screech'],
    collocationMeanings: {
      'screeching halt': 'ani ve gürültülü duruş',
      'screech with laughter': 'kahkahalarla bağırmak',
      'tyres screech': 'lastiklerin ötmesi'
    },
    examples: ["The car's brakes screeched loudly as it came to a stop."],
    exampleTranslations: ['Araba dururken frenleri acı acı öttü.']
  },
  {
    id: 'slam',
    word: 'Slam',
    pos: 'verb',
    meaning: 'Sertçe kapatmak, çarpmak',
    definition: 'To shut a door or lid with great force.',
    ipa: '/slæm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Bang', meaning: 'Gümbürdetmek/Vurmak', pos: 'verb' },
      { word: 'Dash', meaning: 'Hızla vurmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Gently close', meaning: 'Yavaşça kapatmak', pos: 'phrase' }
    ],
    collocations: ['slam dunk', 'slam the door', 'slam shut'],
    collocationMeanings: {
      'slam dunk': 'garanti başarı',
      'slam the door': 'kapıyı çarpmak',
      'slam shut': 'gürültüyle kapanmak'
    },
    examples: ['He left the room angrily, slamming the door behind him.'],
    exampleTranslations: ['Kapıyı arkasından çarparak öfkeyle odadan çıktı.']
  },
  {
    id: 'smash',
    word: 'Smash',
    pos: 'verb',
    meaning: 'Paramparça etmek, kırmak',
    definition: 'To break something noisily into many pieces.',
    ipa: '/smæʃ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'smashing', pos: 'adj', meaning: 'müthiş/parçalayan' }
    ],
    synonyms: [
      { word: 'Shatter', meaning: 'Tuzla buz etmek', pos: 'verb' },
      { word: 'Crush', meaning: 'Ezmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Repair', meaning: 'Onarmak', pos: 'verb' },
      { word: 'Mend', meaning: 'Tamir etmek', pos: 'verb' }
    ],
    collocations: ['smash a record', 'smash to pieces', 'smash through'],
    collocationMeanings: {
      'smash a record': 'rekor kırmak',
      'smash to pieces': 'parçalarına ayırmak',
      'smash through': 'kırıp geçmek'
    },
    examples: ['They smashed the window, setting off the alarm.'],
    exampleTranslations: ['Camı paramparça edip alarmı çalıştırdılar.']
  },
  {
    id: 'snap',
    word: 'Snap',
    pos: 'verb',
    meaning: 'Çat diye kırılmak, kopmak',
    definition: 'To suddenly break something with a short loud noise.',
    ipa: '/snæp/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'snappy', pos: 'adj', meaning: 'tez canlı/şık' }
    ],
    synonyms: [
      { word: 'Crack', meaning: 'Çatlatmak', pos: 'verb' },
      { word: 'Break', meaning: 'Kırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Bend', meaning: 'Bükülmek', pos: 'verb' }
    ],
    collocations: ['snap fingers', 'snap at someone', 'snap in half'],
    collocationMeanings: {
      'snap fingers': 'parmak şıklatmak',
      'snap at someone': 'birine terslenmek',
      'snap in half': 'ortadan ikiye çat diye kırılmak'
    },
    examples: ['The rope snapped under his weight.'],
    exampleTranslations: ['İp onun ağırlığı altında koptu.']
  },
  {
    id: 'trickle',
    word: 'Trickle',
    pos: 'verb',
    meaning: 'Damlamak, sızmak, azar azar akmak',
    definition: 'If a liquid flows somewhere slowly in a small amount.',
    ipa: '/ˈtrɪkl/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Drip', meaning: 'Damlamak', pos: 'verb' },
      { word: 'Ooze', meaning: 'Sızmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Pour', meaning: 'Boşalmak/Gürül gürül akmak', pos: 'verb' },
      { word: 'Gush', meaning: 'Fışkırmak', pos: 'verb' }
    ],
    collocations: ['trickle down', 'trickle in', 'slow trickle'],
    collocationMeanings: {
      'trickle down': 'damla damla akmak',
      'trickle in': 'tek tük gelmek',
      'slow trickle': 'yavaş sızıntı'
    },
    examples: ['The sound of water trickling down the walls.'],
    exampleTranslations: ['Duvarlardan sızan suyun sesi.']
  },
  {
    id: 'whirr',
    word: 'Whirr',
    pos: 'verb',
    meaning: 'Vınlamak, pırpır etmek (makine sesi)',
    definition: 'To make a fast repeated quiet sound.',
    ipa: '/wɜː(r)/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Hum', meaning: 'Mırıldanmak/Vınlamak', pos: 'verb' },
      { word: 'Buzz', meaning: 'Vızıldamak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['soft whirr', 'mechanical whirr', 'whirr of a motor'],
    collocationMeanings: {
      'soft whirr': 'yumuşak vınlama',
      'mechanical whirr': 'mekanik vınlama sesi',
      'whirr of a motor': 'motorun vınlaması'
    },
    examples: ['The fan whirred quietly in the corner.'],
    exampleTranslations: ['Vantilatör köşede sessizce vınlıyordu.']
  },

  // --- UNIT 3 & 9: PHRASAL VERBS - PROBLEMS ---
  {
    id: 'deal_with',
    word: 'Deal with',
    pos: 'phrasal verb',
    meaning: 'Başa çıkmak, ele almak, çözmek',
    definition: 'To take action to do something, especially to solve a problem.',
    ipa: '/diːl wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Handle', meaning: 'Üstesinden gelmek', pos: 'verb' },
      { word: 'Manage', meaning: 'Yönetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['deal with a problem', 'deal with stress', 'refuse to deal with'],
    collocationMeanings: {
      'deal with a problem': 'sorunu çözmek',
      'deal with stress': 'stresle başa çıkmak',
      'refuse to deal with': 'ilgilenmeyi reddetmek'
    },
    examples: ["Dan doesn't deal with stress very well."],
    exampleTranslations: ['Dan stresle pek iyi başa çıkamıyor.']
  },
  {
    id: 'go_through',
    word: 'Go through',
    pos: 'phrasal verb',
    meaning: 'Yaşamak, başından geçmek, incelemek',
    definition: 'To experience something difficult; to examine something.',
    ipa: '/ɡəʊ θruː/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Experience', meaning: 'Tecrübe etmek', pos: 'verb' },
      { word: 'Undergo', meaning: 'Maruz kalmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['go through a hard time', 'go through details', 'go through changes'],
    collocationMeanings: {
      'go through a hard time': 'zor zamanlardan geçmek',
      'go through details': 'detayları incelemek',
      'go through changes': 'değişiklikler yaşamak'
    },
    examples: ['I hope we never have to go through it again.'],
    exampleTranslations: ['Umarım bunu bir daha asla yaşamak zorunda kalmayız.']
  },
  {
    id: 'put_up_with',
    word: 'Put up with',
    pos: 'phrasal verb',
    meaning: 'Katlanmak, tahammül etmek',
    definition: 'To accept someone or something unpleasant in a patient way.',
    ipa: '/pʊt ʌp wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tolerate', meaning: 'Hoş görmek/Katlanmak', pos: 'verb' },
      { word: 'Endure', meaning: 'Dayanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Reject', meaning: 'Reddetmek', pos: 'verb' },
      { word: 'Oppose', meaning: 'Karşı çıkmak', pos: 'verb' }
    ],
    collocations: ['hard to put up with', 'refuse to put up with', 'put up with someone'],
    collocationMeanings: {
      'hard to put up with': 'katlanması zor',
      'refuse to put up with': 'tahammül etmeyi reddetmek',
      'put up with someone': 'birine katlanmak'
    },
    examples: ['I refuse to put up with his insults!'],
    exampleTranslations: ['Onun hakaretlerine daha fazla katlanmayı reddediyorum!']
  },
  {
    id: 'sort_out',
    word: 'Sort out',
    pos: 'phrasal verb',
    meaning: 'Halledetmek, çözmek, düzenlemek',
    definition: 'To do what is necessary to solve a problem.',
    ipa: '/sɔːt aʊt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Resolve', meaning: 'Çözüme kavuşturmak', pos: 'verb' },
      { word: 'Organize', meaning: 'Düzenlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Confuse', meaning: 'Karıştırmak', pos: 'verb' }
    ],
    collocations: ['get sorted out', 'sort out a mess', 'sort out a problem'],
    collocationMeanings: {
      'get sorted out': 'halledilmek',
      'sort out a mess': 'bir karışıklığı gidermek',
      'sort out a problem': 'problemi çözmek'
    },
    examples: ['We still need to sort out the invitations.'],
    exampleTranslations: ['Davetiyeleri hâlâ halletmemiz gerekiyor.']
  },
  {
    id: 'talk_over',
    word: 'Talk over',
    pos: 'phrasal verb',
    meaning: 'Üzerine konuşmak, tartışmak',
    definition: 'To discuss a problem or a plan.',
    ipa: '/tɔːk ˈəʊvə(r)/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Discuss', meaning: 'Tartışmak', pos: 'verb' },
      { word: 'Debate', meaning: 'Müzakere etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['talk it over', 'talk over the phone', 'talk over a matter'],
    collocationMeanings: {
      'talk it over': 'bir meseleyi enine boyuna konuşmak',
      'talk over the phone': 'telefonda görüşmek',
      'talk over a matter': 'bir konuyu tartışmak'
    },
    examples: ['I think you both need to talk over what happened.'],
    exampleTranslations: ['Bence ikinizin de olanlar hakkında konuşması gerekiyor.']
  },
  {
    id: 'weigh_up',
    word: 'Weigh up',
    pos: 'phrasal verb',
    meaning: 'Tartmak, ölçüp biçmek',
    definition: 'To consider the good and bad aspects of something.',
    ipa: '/weɪ ʌp/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Evaluate', meaning: 'Değerlendirmek', pos: 'verb' },
      { word: 'Consider', meaning: 'Düşünmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['weigh up options', 'weigh up the consequences', 'weigh up the benefits'],
    collocationMeanings: {
      'weigh up options': 'seçenekleri tartmak',
      'weigh up the consequences': 'sonuçları ölçüp biçmek',
      'weigh up the benefits': 'faydaları değerlendirmek'
    },
    examples: ['Carefully weigh up the pros and cons.'],
    exampleTranslations: ['Avantaj ve dezavantajları dikkatlice ölçüp biçin.']
  },
  {
    id: 'work_out',
    word: 'Work out',
    pos: 'phrasal verb',
    meaning: 'Çözmek, antrenman yapmak, hesaplamak',
    definition: 'To solve a problem; to exercise.',
    ipa: '/wɜːk aʊt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Solve', meaning: 'Çözmek', pos: 'verb' },
      { word: 'Exercise', meaning: 'Egzersiz yapmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fail', meaning: 'Başarısız olmak', pos: 'verb' }
    ],
    collocations: ['work out at the gym', 'work out details', 'things work out'],
    collocationMeanings: {
      'work out at the gym': 'spor salonunda çalışmak',
      'work out details': 'detayları planlamak',
      'things work out': 'işlerin yolunda gitmesi'
    },
    examples: ['We need to work out what to do next.'],
    exampleTranslations: ['Bir sonraki adımda ne yapacağımızı çözmemiz gerek.']
  },

  // --- UNIT 3: DEPENDENT PREPOSITIONS (ADJECTIVES) ---
  {
    id: 'anxious_about',
    word: 'Anxious about',
    pos: 'adj + prep',
    meaning: 'Hakkında endişeli',
    definition: 'Worried about something in particular.',
    ipa: '/ˈæŋkʃəs əˈbaʊt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'anxiety', pos: 'noun', meaning: 'kaygı' }
    ],
    synonyms: [
      { word: 'Concerned about', meaning: 'Hakkında endişeli', pos: 'adj' },
      { word: 'Apprehensive', meaning: 'Kaygılı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Confident', meaning: 'Kendinden emin', pos: 'adj' },
      { word: 'Indifferent', meaning: 'Kayıtsız', pos: 'adj' }
    ],
    collocations: ['feel anxious about', 'deeply anxious about', 'increasingly anxious about'],
    collocationMeanings: {
      'feel anxious about': 'hakkında endişe hissetmek',
      'deeply anxious about': 'hakkında derin endişe duymak',
      'increasingly anxious about': 'giderek artan bir endişe duymak'
    },
    examples: ["I'm a little anxious about what we're going to do next."],
    exampleTranslations: ['Bir sonraki adımda ne yapacağımız konusunda biraz endişeliyim.']
  },
  {
    id: 'ashamed_of',
    word: 'Ashamed of',
    pos: 'adj + prep',
    meaning: '...dan utanmış',
    definition: 'Feeling guilty or embarrassed because you have done something wrong.',
    ipa: '/əˈʃeɪmd əv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'shame', pos: 'noun', meaning: 'utanç' }
    ],
    synonyms: [
      { word: 'Humiliated', meaning: 'Aşağılanmış/Utanmış', pos: 'adj' },
      { word: 'Sheepish', meaning: 'Mahcup', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Proud of', meaning: 'Gururlu', pos: 'adj' }
    ],
    collocations: ['feel ashamed of', 'thoroughly ashamed of', 'be ashamed of yourself'],
    collocationMeanings: {
      'feel ashamed of': 'bir şeyden dolayı utanç duymak',
      'thoroughly ashamed of': 'tamamen utanmış',
      'be ashamed of yourself': 'kendinden utanmak'
    },
    examples: ["He says he's ashamed of his behaviour."],
    exampleTranslations: ['Davranışından utandığını söylüyor.']
  },
  {
    id: 'aware_of',
    word: 'Aware of',
    pos: 'adj + prep',
    meaning: '...ın farkında olmak',
    definition: 'Knowing about a situation or a fact.',
    ipa: '/əˈweə(r) əv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'awareness', pos: 'noun', meaning: 'farkındalık' }
    ],
    synonyms: [
      { word: 'Conscious of', meaning: 'Farkında/Bilincinde', pos: 'adj' },
      { word: 'Informed', meaning: 'Bilgili', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unaware', meaning: 'Habersiz', pos: 'adj' },
      { word: 'Oblivious', meaning: 'Kayıtsız/Habersiz', pos: 'adj' }
    ],
    collocations: ['fully aware of', 'painfully aware of', 'make someone aware of'],
    collocationMeanings: {
      'fully aware of': 'tamamen farkında olmak',
      'painfully aware of': 'acı verici bir şekilde farkında olmak',
      'make someone aware of': 'birini ...dan haberdar etmek'
    },
    examples: ['Many people are aware of the dangers of smoking.'],
    exampleTranslations: ['Pek çok kişi sigaranın tehlikelerinin farkında.']
  },
  {
    id: 'envious_of',
    word: 'Envious of',
    pos: 'adj + prep',
    meaning: '...ı kıskanmak',
    definition: 'Unhappy because you want something someone else has.',
    ipa: '/ˈenviəs əv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'envy', pos: 'noun/verb', meaning: 'kıskançlık/kıskanmak' }
    ],
    synonyms: [
      { word: 'Jealous of', meaning: 'Kıskanç', pos: 'adj' },
      { word: 'Begrudging', meaning: 'Haset eden', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Content', meaning: 'Memnun', pos: 'adj' },
      { word: 'Generous', meaning: 'Cömert/Gönlü zengin', pos: 'adj' }
    ],
    collocations: ['green with envy', 'secretly envious of', 'envious of success'],
    collocationMeanings: {
      'green with envy': 'kıskançlıktan çatlamak',
      'secretly envious of': 'gizliden gizliye kıskanmak',
      'envious of success': 'başarıyı kıskanmak'
    },
    examples: ["I've always been envious of his ability to make new friends."],
    exampleTranslations: ['Onun yeni arkadaş edinme yeteneğini her zaman kıskanmışımdır.']
  },
  {
    id: 'sensitive_towards',
    word: 'Sensitive towards',
    pos: 'adj + prep',
    meaning: '...a karşı duyarlı',
    definition: 'Showing care about someone or something.',
    ipa: '/ˈsensətɪv təˈwɔːdz/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'sensitivity', pos: 'noun', meaning: 'duyarlılık' }
    ],
    synonyms: [
      { word: 'Compassionate', meaning: 'Şefkatli', pos: 'adj' },
      { word: 'Empathetic', meaning: 'Empatik', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Indifferent', meaning: 'Kayıtsız', pos: 'adj' },
      { word: 'Callous', meaning: 'Hissiz/Gaddar', pos: 'adj' }
    ],
    collocations: ['sensitive towards needs', 'sensitive towards feelings', 'highly sensitive towards'],
    collocationMeanings: {
      'sensitive towards needs': 'ihtiyaçlara karşı duyarlı',
      'sensitive towards feelings': 'duygulara karşı hassas',
      'highly sensitive towards': '...a karşı çok duyarlı'
    },
    examples: ["I wish he was more sensitive towards other people's feelings."],
    exampleTranslations: ['Keşke başkalarının duygularına karşı daha duyarlı olsaydı.']
  },
  {
    id: 'sick_of',
    word: 'Sick of',
    pos: 'adj + prep',
    meaning: '...dan bıkmak, usanmak',
    definition: 'Wanting something to end because you are bored or annoyed.',
    ipa: '/sɪk əv/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tired of', meaning: '...dan bıkmış', pos: 'adj' },
      { word: 'Fed up with', meaning: '...dan bıkmış/usanmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Fond of', meaning: '...a düşkün', pos: 'adj' },
      { word: 'Keen on', meaning: '...a meraklı/istekli', pos: 'adj' }
    ],
    collocations: ['sick and tired of', 'make me sick of', 'utterly sick of'],
    collocationMeanings: {
      'sick and tired of': 'canına tak etmek',
      'make me sick of': 'beni ...dan soğutmak',
      'utterly sick of': 'tamamen bıkmış olmak'
    },
    examples: ["I'm just sick of it now - I can't wait to work on something different."],
    exampleTranslations: ['Artık bundan bıktım; farklı bir şey üzerinde çalışmak için sabırsızlanıyorum.']
  },

  // --- UNIT 4: NOUN + PREPOSITION COLLOCATIONS ---
  {
    id: 'congratulations_on',
    word: 'Congratulations on',
    pos: 'noun + prep',
    meaning: '...dan dolayı tebrikler',
    definition: 'Used for telling someone that you are pleased about their success or a special event.',
    ipa: '/kənˌɡrætʃuˈleɪʃnz ɒn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'congratulate', pos: 'verb', meaning: 'tebrik etmek' },
      { word: 'congratulatory', pos: 'adj', meaning: 'kutlama mahiyetinde' }
    ],
    synonyms: [
      { word: 'Kudos on', meaning: '...için övgü/tebrik', pos: 'noun' },
      { word: 'Compliments on', meaning: '...için tebrikler', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Condolences on', meaning: '...için başsağlığı', pos: 'noun' },
      { word: 'Criticism for', meaning: '...için eleştiri', pos: 'noun' }
    ],
    collocations: ['warmest congratulations on', 'sincere congratulations on', 'offer congratulations'],
    collocationMeanings: {
      'warmest congratulations on': 'en içten tebrikler',
      'sincere congratulations on': 'samimi kutlamalar',
      'offer congratulations': 'tebriklerini sunmak'
    },
    examples: ['Congratulations on your new job!'],
    exampleTranslations: ['Yeni işin için tebrikler!']
  },
  {
    id: 'course_in',
    word: 'Course in',
    pos: 'noun + prep',
    meaning: '...kursu/eğitimi',
    definition: 'A series of lessons or lectures in a particular subject.',
    ipa: '/kɔːs ɪn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Program in', meaning: '...programı/eğitimi', pos: 'noun' },
      { word: 'Training in', meaning: '...eğitimi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['online course in', 'intensive course in', 'degree course in'],
    collocationMeanings: {
      'online course in': '...üzerine online kurs',
      'intensive course in': 'yoğunlaştırılmış eğitim',
      'degree course in': 'lisans programı'
    },
    examples: ['Have you thought about taking a course in first aid?'],
    exampleTranslations: ['İlkyardım kursu almayı düşündün mü?']
  },
  {
    id: 'places_in',
    word: 'Places in',
    pos: 'noun + prep',
    meaning: '...daki yerler/mekanlar',
    definition: 'A particular area, building, or position in a specified location.',
    ipa: '/ˈpleɪsɪz ɪn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'place', pos: 'verb', meaning: 'yerleştirmek' }
    ],
    synonyms: [
      { word: 'Locations in', meaning: '...daki konumlar', pos: 'noun' },
      { word: 'Spots in', meaning: '...daki noktalar', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['places in town', 'places in history', 'places in the heart'],
    collocationMeanings: {
      'places in town': 'şehirdeki mekanlar',
      'places in history': 'tarihteki yerler',
      'places in the heart': 'kalpteki yerler'
    },
    examples: ["Let's go to the new Italian place in town."],
    exampleTranslations: ['Şehirdeki yeni İtalyan mekanına gidelim.']
  },
  {
    id: 'possibility_of',
    word: 'Possibility of',
    pos: 'noun + prep',
    meaning: '...ihtimali',
    definition: 'A chance that something may happen or be true.',
    ipa: '/ˌpɒsəˈbɪləti əv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'possible', pos: 'adj', meaning: 'mümkün' },
      { word: 'possibly', pos: 'adverb', meaning: 'belki/muhtemelen' }
    ],
    synonyms: [
      { word: 'Likelihood of', meaning: '...olasılığı', pos: 'noun' },
      { word: 'Probability of', meaning: '...ihtimali', pos: 'noun' },
      { word: 'Chance of', meaning: '...şansı/ihtimali', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Impossibility of', meaning: '...imkansızlığı', pos: 'noun' },
      { word: 'Certainty of', meaning: '...kesinliği', pos: 'noun' }
    ],
    collocations: ['distinct possibility of', 'remote possibility of', 'rule out the possibility'],
    collocationMeanings: {
      'distinct possibility of': 'belirgin/yüksek ihtimal',
      'remote possibility of': 'uzak ihtimal',
      'rule out the possibility': 'ihtimali devre dışı bırakmak'
    },
    examples: ['Is there any possibility of seeing someone today?'],
    exampleTranslations: ['Bugün biriyle görüşme ihtimali var mı?']
  },
  {
    id: 'risk_of',
    word: 'Risk of',
    pos: 'noun + prep',
    meaning: '...riski',
    definition: 'The possibility of something bad happening.',
    ipa: '/rɪsk əv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'risky', pos: 'adj', meaning: 'riskli' }
    ],
    synonyms: [
      { word: 'Danger of', meaning: '...tehlikesi', pos: 'noun' },
      { word: 'Threat of', meaning: '...tehdidi', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Safety', meaning: 'Güvenlik', pos: 'noun' },
      { word: 'Security', meaning: 'Emniyet', pos: 'noun' }
    ],
    collocations: ['run a risk', 'high risk of', 'reduce the risk'],
    collocationMeanings: {
      'run a risk': 'risk almak',
      'high risk of': 'yüksek risk',
      'reduce the risk': 'riski azaltmak'
    },
    examples: ['The company is at serious risk of going out of business.'],
    exampleTranslations: ['Şirket ciddi bir iflas riski altında.']
  },
  {
    id: 'time_for',
    word: 'Time for',
    pos: 'noun + prep',
    meaning: '...vakti/zamanı',
    definition: 'A particular point or period when something happens.',
    ipa: '/taɪm fɔː(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'timeless', pos: 'adj', meaning: 'zamansız' }
    ],
    synonyms: [
      { word: 'Moment for', meaning: '...anı', pos: 'noun' },
      { word: 'Period for', meaning: '...süresi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['high time for', 'find time for', 'waste time for'],
    collocationMeanings: {
      'high time for': 'tam zamanı (vakti geçti)',
      'find time for': 'zaman bulmak',
      'waste time for': 'vakit kaybetmek'
    },
    examples: ["Could you call me when it's time for lunch?"],
    exampleTranslations: ['Öğle yemeği vakti geldiğinde beni arayabilir misin?']
  },

  // --- UNIT 4: NOUNS & VERBS SAME SPELLING ---
  {
    id: 'balance',
    word: 'Balance',
    pos: 'noun/verb',
    meaning: 'Denge, dengelemek',
    definition: 'A situation where features are equal; to create or preserve a correct relationship.',
    ipa: '/ˈbæləns/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'balanced', pos: 'adj', meaning: 'dengeli' }
    ],
    synonyms: [
      { word: 'Equilibrium', meaning: 'Denge durumu', pos: 'noun' },
      { word: 'Stabilize', meaning: 'Stabilize etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Imbalance', meaning: 'Dengesizlik', pos: 'noun' },
      { word: 'Unbalance', meaning: 'Dengesini bozmak', pos: 'verb' }
    ],
    collocations: ['keep balance', 'lose balance', 'balance the books'],
    collocationMeanings: {
      'keep balance': 'dengeyi korumak',
      'lose balance': 'dengesini kaybetmek',
      'balance the books': 'hesapları denkleştirmek'
    },
    examples: ["I don't seem to have a good work-life balance."],
    exampleTranslations: ['İyi bir iş-yaşam dengesine sahip değilim gibi görünüyor.']
  },
  {
    id: 'benefit',
    word: 'Benefit',
    pos: 'noun/verb',
    meaning: 'Fayda, yararlanmak',
    definition: 'An advantage you get from a situation; to get help from something.',
    ipa: '/ˈbenɪfɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'beneficial', pos: 'adj', meaning: 'faydalı' }
    ],
    synonyms: [
      { word: 'Advantage', meaning: 'Avantaj', pos: 'noun' },
      { word: 'Profit from', meaning: '...dan kâr etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Disadvantage', meaning: 'Dezavantaj', pos: 'noun' },
      { word: 'Harm', meaning: 'Zarar vermek', pos: 'verb' }
    ],
    collocations: ['mutual benefit', 'benefit from', 'lasting benefit'],
    collocationMeanings: {
      'mutual benefit': 'karşılıklı yarar',
      'benefit from': '...dan faydalanmak',
      'lasting benefit': 'kalıcı fayda'
    },
    examples: ['Thousands of households could benefit under the scheme.'],
    exampleTranslations: ['Binlerce hane bu plandan yararlanabilir.']
  },
  {
    id: 'challenge',
    word: 'Challenge',
    pos: 'noun/verb',
    meaning: 'Zorluk, meydan okuma',
    definition: 'Something that needs a lot of skill; to test someone’s skill.',
    ipa: '/ˈtʃælɪndʒ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'challenging', pos: 'adj', meaning: 'zorlayıcı' }
    ],
    synonyms: [
      { word: 'Difficulty', meaning: 'Zorluk', pos: 'noun' },
      { word: 'Defy', meaning: 'Kafa tutmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ease', meaning: 'Kolaylık', pos: 'noun' },
      { word: 'Accept', meaning: 'Kabul etmek', pos: 'verb' }
    ],
    collocations: ['face a challenge', 'major challenge', 'challenge someone to'],
    collocationMeanings: {
      'face a challenge': 'zorlukla yüzleşmek',
      'major challenge': 'büyük zorluk',
      'challenge someone to': 'birine meydan okumak'
    },
    examples: ['I need a new challenge.'],
    exampleTranslations: ['Yeni bir meydan okumaya ihtiyacım var.']
  },
  {
    id: 'control',
    word: 'Control',
    pos: 'noun/verb',
    meaning: 'Kontrol, denetlemek',
    definition: 'Power to make decisions; to make people behave how you want.',
    ipa: '/kənˈtrəʊl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'controllable', pos: 'adj', meaning: 'kontrol edilebilir' }
    ],
    synonyms: [
      { word: 'Regulation', meaning: 'Düzenleme', pos: 'noun' },
      { word: 'Manage', meaning: 'Yönetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Chaos', meaning: 'Kaos', pos: 'noun' },
      { word: 'Abandon', meaning: 'Kendi haline bırakmak', pos: 'verb' }
    ],
    collocations: ['under control', 'out of control', 'take control'],
    collocationMeanings: {
      'under control': 'kontrol altında',
      'out of control': 'kontrol dışı',
      'take control': 'kontrolü ele almak'
    },
    examples: ['His daughter took control of the business.'],
    exampleTranslations: ['Kızı işin yönetimini devraldı.']
  },
  {
    id: 'influence',
    word: 'Influence',
    pos: 'noun/verb',
    meaning: 'Etki, etkilemek',
    definition: 'The power to affect people or things.',
    ipa: '/ˈɪnfluəns/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'influential', pos: 'adj', meaning: 'etkili/nüfuzlu' }
    ],
    synonyms: [
      { word: 'Impact', meaning: 'Etki', pos: 'noun' },
      { word: 'Affect', meaning: 'Etkilemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['have an influence on', 'good influence', 'under the influence'],
    collocationMeanings: {
      'have an influence on': 'üzerinde etkisi olmak',
      'good influence': 'iyi etki',
      'under the influence': 'etki altında'
    },
    examples: ['Claims in advertisements can influence people.'],
    exampleTranslations: ['Reklamlardaki iddialar insanları etkileyebilir.']
  },
  {
    id: 'produce',
    word: 'Produce',
    pos: 'noun/verb',
    meaning: 'Üretmek, ürün (tarımsal)',
    definition: 'To make or grow something; fruit and vegetables grown for sale.',
    ipa: '/prəˈdjuːs/ (v) /ˈprɒdjuːs/ (n)',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'production', pos: 'noun', meaning: 'üretim' },
      { word: 'productive', pos: 'adj', meaning: 'verimli' }
    ],
    synonyms: [
      { word: 'Manufacture', meaning: 'Üretmek', pos: 'verb' },
      { word: 'Yield', meaning: 'Ürün/Verim', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Consume', meaning: 'Tüketmek', pos: 'verb' },
      { word: 'Destroy', meaning: 'Yok etmek', pos: 'verb' }
    ],
    collocations: ['fresh produce', 'mass produce', 'produce evidence'],
    collocationMeanings: {
      'fresh produce': 'taze sebze-meyve',
      'mass produce': 'seri üretim yapmak',
      'produce evidence': 'kanıt sunmak'
    },
    examples: ['The factory will produce 100,000 cars annually.'],
    exampleTranslations: ['Fabrika yılda 100.000 araba üretecek.']
  },

  // --- UNIT 4: INTENSIFIERS ---
  {
    id: 'considerably',
    word: 'Considerably',
    pos: 'adverb',
    meaning: 'Epey, önemli ölçüde',
    definition: 'By a large amount or to a great degree.',
    ipa: '/kənˈsɪdrəbli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'considerable', pos: 'adj', meaning: 'kayda değer' }
    ],
    synonyms: [
      { word: 'Significantly', meaning: 'Önemli ölçüde', pos: 'adverb' },
      { word: 'Substantially', meaning: 'Büyük oranda', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Slightly', meaning: 'Hafifçe', pos: 'adverb' },
      { word: 'Barely', meaning: 'Zar zor/Azıcık', pos: 'adverb' }
    ],
    collocations: ['improve considerably', 'vary considerably', 'more considerably'],
    collocationMeanings: {
      'improve considerably': 'önemli ölçüde gelişmek',
      'vary considerably': 'önemli ölçüde değişmek',
      'more considerably': 'çok daha fazla'
    },
    examples: ['The bill was considerably more than he expected.'],
    exampleTranslations: ['Fatura beklediğinden epey fazlaydı.']
  },
  {
    id: 'disastrously',
    word: 'Disastrously',
    pos: 'adverb',
    meaning: 'Feci şekilde, felaketle',
    definition: 'In a way that causes a lot of damage or failure.',
    ipa: '/dɪˈzɑːstrəsli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'disaster', pos: 'noun', meaning: 'felaket' },
      { word: 'disastrous', pos: 'adj', meaning: 'feci' }
    ],
    synonyms: [
      { word: 'Catastrophically', meaning: 'Felaketvari şekilde', pos: 'adverb' },
      { word: 'Terribly', meaning: 'Berbat şekilde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Successfully', meaning: 'Başarıyla', pos: 'adverb' },
      { word: 'Prosperously', meaning: 'Gönençle', pos: 'adverb' }
    ],
    collocations: ['disastrously mismanaged', 'fail disastrously', 'disastrously wrong'],
    collocationMeanings: {
      'disastrously mismanaged': 'feci şekilde kötü yönetilmiş',
      'fail disastrously': 'feci şekilde başarısız olmak',
      'disastrously wrong': 'feci şekilde yanlış'
    },
    examples: ['The company was disastrously mismanaged.'],
    exampleTranslations: ['Şirket feci şekilde kötü yönetildi.']
  },
  {
    id: 'entirely',
    word: 'Entirely',
    pos: 'adverb',
    meaning: 'Tamamen, bütünüyle',
    definition: 'Completely, or in every way.',
    ipa: '/ɪnˈtaɪəli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'entire', pos: 'adj', meaning: 'tüm, bütün' }
    ],
    synonyms: [
      { word: 'Completely', meaning: 'Tamamen', pos: 'adverb' },
      { word: 'Wholly', meaning: 'Bütünüyle', pos: 'adverb' },
      { word: 'Totally', meaning: 'Tümüyle', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Partially', meaning: 'Kısmen', pos: 'adverb' },
      { word: 'Incompletely', meaning: 'Yarım yamalak', pos: 'adverb' }
    ],
    collocations: ['entirely different', 'agree entirely', 'almost entirely'],
    collocationMeanings: {
      'entirely different': 'bambaşka',
      'agree entirely': 'tamamen katılmak',
      'almost entirely': 'neredeyse tamamen'
    },
    examples: ['Accents can be entirely different.'],
    exampleTranslations: ['Aksanlar tamamen farklı olabilir.']
  },
  {
    id: 'especially',
    word: 'Especially',
    pos: 'adverb',
    meaning: 'Özellikle, bilhassa',
    definition: 'Used when mentioning conditions that make something more relevant.',
    ipa: '/ɪˈspeʃəli/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Particularly', meaning: 'Özellikle', pos: 'adverb' },
      { word: 'Notably', meaning: 'Bilhassa', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Generally', meaning: 'Genel olarak', pos: 'adverb' }
    ],
    collocations: ['especially important', 'especially true', 'not especially'],
    collocationMeanings: {
      'especially important': 'özellikle önemli',
      'especially true': 'özellikle doğru',
      'not especially': 'pek de değil'
    },
    examples: ['It is hot, especially in summer.'],
    exampleTranslations: ['Sıcak, özellikle yazın.']
  },
  {
    id: 'extremely',
    word: 'Extremely',
    pos: 'adverb',
    meaning: 'Aşırı derecede, son derece',
    definition: 'To a very high degree; used for emphasising an adjective.',
    ipa: '/ɪkˈstriːmli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'extreme', pos: 'adj/noun', meaning: 'uç/aşırı' }
    ],
    synonyms: [
      { word: 'Exceedingly', meaning: 'Aşırı derecede', pos: 'adverb' },
      { word: 'Highly', meaning: 'Pek çok/Oldukça', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Mildly', meaning: 'Hafifçe', pos: 'adverb' },
      { word: 'Moderately', meaning: 'Orta derecede', pos: 'adverb' }
    ],
    collocations: ['extremely difficult', 'extremely high', 'extremely useful'],
    collocationMeanings: {
      'extremely difficult': 'aşırı zor',
      'extremely high': 'son derece yüksek',
      'extremely useful': 'son derece yararlı'
    },
    examples: ["She's extremely good at Arabic."],
    exampleTranslations: ['Arapça konusunda son derece iyi.']
  },
  {
    id: 'firmly',
    word: 'Firmly',
    pos: 'adverb',
    meaning: 'Sıkıca, kararlılıkla',
    definition: 'In a strong or definite way.',
    ipa: '/ˈfɜːmli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'firm', pos: 'adj', meaning: 'sıkı/sert' }
    ],
    synonyms: [
      { word: 'Resolutely', meaning: 'Kararlılıkla', pos: 'adverb' },
      { word: 'Securely', meaning: 'Güvenle/Sıkıca', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Loosely', meaning: 'Gevşekçe', pos: 'adverb' },
      { word: 'Hesitantly', meaning: 'Tereddütle', pos: 'adverb' }
    ],
    collocations: ['firmly established', 'firmly believe', 'hold firmly'],
    collocationMeanings: {
      'firmly established': 'iyice yerleşmiş',
      'firmly believe': 'yürekten inanmak',
      'hold firmly': 'sıkıca tutmak'
    },
    examples: ['I firmly believe we must support each other.'],
    exampleTranslations: ['Birbirimize destek olmamız gerektiğine kararlılıkla inanıyorum.']
  },
  {
    id: 'greatly',
    word: 'Greatly',
    pos: 'adverb',
    meaning: 'Büyük ölçüde, çok fazla',
    definition: 'By a considerable amount; very much.',
    ipa: '/ˈɡreɪtli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'great', pos: 'adj', meaning: 'büyük' }
    ],
    synonyms: [
      { word: 'Immensely', meaning: 'Muazzam şekilde', pos: 'adverb' },
      { word: 'Vastly', meaning: 'Oldukça çok', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Minimally', meaning: 'Asgari düzeyde', pos: 'adverb' },
      { word: 'Slightly', meaning: 'Azıcık', pos: 'adverb' }
    ],
    collocations: ['greatly appreciated', 'vary greatly', 'greatly improve'],
    collocationMeanings: {
      'greatly appreciated': 'çok takdir edilen',
      'vary greatly': 'büyük ölçüde değişmek',
      'greatly improve': 'büyük ölçüde iyileştirmek'
    },
    examples: ['Tickets vary greatly in price.'],
    exampleTranslations: ['Biletlerin fiyatları büyük ölçüde değişiyor.']
  },
  {
    id: 'incredibly',
    word: 'Incredibly',
    pos: 'adverb',
    meaning: 'İnanılmaz derecede',
    definition: 'In a way that is hard to believe; extremely.',
    ipa: '/ɪnˈkredəbli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'incredible', pos: 'adj', meaning: 'inanılmaz' }
    ],
    synonyms: [
      { word: 'Unbelievably', meaning: 'İnanılmaz şekilde', pos: 'adverb' },
      { word: 'Extraordinarily', meaning: 'Sıra dışı şekilde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Believably', meaning: 'İnanılır şekilde', pos: 'adverb' },
      { word: 'Normally', meaning: 'Normalce', pos: 'adverb' }
    ],
    collocations: ['incredibly fast', 'incredibly hard', 'incredibly lucky'],
    collocationMeanings: {
      'incredibly fast': 'inanılmaz hızlı',
      'incredibly hard': 'inanılmaz zor',
      'incredibly lucky': 'inanılmaz şanslı'
    },
    examples: ['It was incredibly difficult to find a time.'],
    exampleTranslations: ['Bir zaman bulmak inanılmaz derecede zordu.']
  },
  {
    id: 'intensely',
    word: 'Intensely',
    pos: 'adverb',
    meaning: 'Yoğun bir şekilde, şiddetle',
    definition: 'To a very high degree; with strong feeling.',
    ipa: '/ɪnˈtensli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'intensity', pos: 'noun', meaning: 'yoğunluk' },
      { word: 'intense', pos: 'adj', meaning: 'yoğun' }
    ],
    synonyms: [
      { word: 'Fiercely', meaning: 'Şiddetle', pos: 'adverb' },
      { word: 'Deeply', meaning: 'Derinden', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Mildly', meaning: 'Hafifçe', pos: 'adverb' },
      { word: 'Weakly', meaning: 'Zayıfça', pos: 'adverb' }
    ],
    collocations: ['intensely personal', 'intensely competitive', 'stare intensely'],
    collocationMeanings: {
      'intensely personal': 'son derece kişisel',
      'intensely competitive': 'yoğun rekabetçi',
      'stare intensely': 'dik dik bakmak'
    },
    examples: ["It's an intensely competitive industry."],
    exampleTranslations: ['Bu yoğun derecede rekabetçi bir sektör.']
  },
  {
    id: 'significantly',
    word: 'Significantly',
    pos: 'adverb',
    meaning: 'Önemli ölçüde',
    definition: 'In a way that is large or important enough to be noticed.',
    ipa: '/sɪɡˈnɪfɪkəntli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'significant', pos: 'adj', meaning: 'önemli' },
      { word: 'significance', pos: 'noun', meaning: 'önem' }
    ],
    synonyms: [
      { word: 'Noticeably', meaning: 'Fark edilir şekilde', pos: 'adverb' },
      { word: 'Markedly', meaning: 'Belirgin şekilde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Insignificantly', meaning: 'Önemsiz miktarda', pos: 'adverb' },
      { word: 'Negligibly', meaning: 'İhmal edilebilir düzeyde', pos: 'adverb' }
    ],
    collocations: ['differ significantly', 'increase significantly', 'significantly higher'],
    collocationMeanings: {
      'differ significantly': 'anlamlı şekilde farklılaşmak',
      'increase significantly': 'önemli derecede artmak',
      'significantly higher': 'belirgin şekilde yüksek'
    },
    examples: ['Unemployment has risen significantly.'],
    exampleTranslations: ['İşsizlik önemli ölçüde arttı.']
  },
  {
    id: 'totally',
    word: 'Totally',
    pos: 'adverb',
    meaning: 'Tamamen',
    definition: 'Completely; used for emphasizing what you are saying.',
    ipa: '/ˈtəʊtəli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'total', pos: 'adj/noun', meaning: 'toplam/tam' }
    ],
    synonyms: [
      { word: 'Fully', meaning: 'Tamamen', pos: 'adverb' },
      { word: 'Absolutely', meaning: 'Kesinlikle/Tamamen', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Partly', meaning: 'Kısmen', pos: 'adverb' }
    ],
    collocations: ['totally agree', 'totally different', 'totally forgot'],
    collocationMeanings: {
      'totally agree': 'tamamen katılmak',
      'totally different': 'tamamen farklı',
      'totally forgot': 'tamamen unutmuş olmak'
    },
    examples: ["I totally forgot Simon's birthday."],
    exampleTranslations: ["Simon'un doğum gününü tamamen unutmuşum."]
  },
  {
    id: 'utterly',
    word: 'Utterly',
    pos: 'adverb',
    meaning: 'Tamamıyla, büsbütün',
    definition: 'Completely: often used to emphasise how bad or shocking something is.',
    ipa: '/ˈʌtəli/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Purely', meaning: 'Tamamen/Sırf', pos: 'adverb' },
      { word: 'Absolutely', meaning: 'Mutlak suretle', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Partially', meaning: 'Kısmen', pos: 'adverb' }
    ],
    collocations: ['utterly useless', 'utterly miserable', 'utterly ridiculous'],
    collocationMeanings: {
      'utterly useless': 'tamamen işe yaramaz',
      'utterly miserable': 'tamamen perişan',
      'utterly ridiculous': 'büsbütün saçma'
    },
    examples: ["He's still utterly dependent on his parents."],
    exampleTranslations: ['Hâlâ tamamen ebeveynlerine bağımlı.']
  },
  {
    id: 'widely',
    word: 'Widely',
    pos: 'adverb',
    meaning: 'Geniş çapta, yaygın olarak',
    definition: 'By a large number of people or in many places.',
    ipa: '/ˈwaɪdli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'wide', pos: 'adj', meaning: 'geniş' },
      { word: 'widen', pos: 'verb', meaning: 'genişletmek' }
    ],
    synonyms: [
      { word: 'Broadly', meaning: 'Geniş anlamda', pos: 'adverb' },
      { word: 'Extensively', meaning: 'Kapsamlı şekilde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Narrowly', meaning: 'Dar kapsamda', pos: 'adverb' },
      { word: 'Locally', meaning: 'Yerel olarak', pos: 'adverb' }
    ],
    collocations: ['widely accepted', 'widely used', 'widely read'],
    collocationMeanings: {
      'widely accepted': 'genel kabul görmüş',
      'widely used': 'yaygın kullanılan',
      'widely read': 'çok okunan'
    },
    examples: ['Organic foods are now much more widely available.'],
    exampleTranslations: ['Organik gıdalar artık çok daha yaygın şekilde bulunabiliyor.']
  },

  // --- UNIT 5: GREEN VOCABULARY ---
  {
    id: 'compost_heap',
    word: 'Compost heap',
    pos: 'noun',
    meaning: 'Gübre yığını, kompost yığını',
    definition: 'A pile of decaying plants and food waste that is used to improve the soil.',
    ipa: '/ˈkɒmpɒst hiːp/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'compost', pos: 'verb/noun', meaning: 'gübrelemek/gübre' }
    ],
    synonyms: [
      { word: 'Fertilizer pile', meaning: 'Gübre yığını', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['build a compost heap', 'garden compost heap', 'decaying compost heap'],
    collocationMeanings: {
      'build a compost heap': 'kompost yığını oluşturmak',
      'garden compost heap': 'bahçe gübre yığını',
      'decaying compost heap': 'çürüyen kompost yığını'
    },
    examples: ['Throw the left-over food on the compost heap.'],
    exampleTranslations: ['Artan yiyecekleri kompost yığınına at.']
  },
  {
    id: 'double_glazing',
    word: 'Double glazing',
    pos: 'noun',
    meaning: 'Çift cam',
    definition: 'Windows that have two layers of glass to keep a building warm or quiet.',
    ipa: '/ˈdʌbl ˈɡleɪzɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'glaze', pos: 'verb', meaning: 'cam takmak' }
    ],
    synonyms: [
      { word: 'Double-paned window', meaning: 'Çift bölmeli cam', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Single glazing', meaning: 'Tek cam', pos: 'noun' }
    ],
    collocations: ['install double glazing', 'double glazing unit', 'uPVC double glazing'],
    collocationMeanings: {
      'install double glazing': 'çift cam taktırmak',
      'double glazing unit': 'çift cam ünitesi',
      'uPVC double glazing': 'uPVC çift cam sistemi'
    },
    examples: ['My heating bill is lower since I had double glazing installed.'],
    exampleTranslations: ['Çift cam taktırdığımdan beri ısınma faturam daha düşük.']
  },
  {
    id: 'energy_efficient_lightbulb',
    word: 'Energy-efficient lightbulb',
    pos: 'noun',
    meaning: 'Enerji tasarruflu ampul',
    definition: 'A lightbulb designed to use less electricity than a standard one.',
    ipa: '/ˈenədʒi ɪˈfɪʃnt ˈlaɪtbʌlb/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'efficiency', pos: 'noun', meaning: 'verimlilik' }
    ],
    synonyms: [
      { word: 'LED bulb', meaning: 'LED ampul', pos: 'noun' },
      { word: 'Eco-bulb', meaning: 'Eko-ampul', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Incandescent bulb', meaning: 'Akkor ampul (eski tip)', pos: 'noun' }
    ],
    collocations: ['install lightbulbs', 'energy-efficient lighting', 'long-life lightbulb'],
    collocationMeanings: {
      'install lightbulbs': 'ampul takmak',
      'energy-efficient lighting': 'enerji verimli aydınlatma',
      'long-life lightbulb': 'uzun ömürlü ampul'
    },
    examples: ['The company has installed energy-efficient lightbulbs throughout the office.'],
    exampleTranslations: ['Şirket ofis genelinde enerji tasarruflu ampuller taktırdı.']
  },
  {
    id: 'insulation',
    word: 'Insulation',
    pos: 'noun',
    meaning: 'Yalıtım, izolasyon',
    definition: 'Material used to stop heat, cold, or sound from leaving or entering.',
    ipa: '/ˌɪnsjuˈleɪʃn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'insulate', pos: 'verb', meaning: 'yalıtmak' },
      { word: 'insulator', pos: 'noun', meaning: 'yalıtkan' }
    ],
    synonyms: [
      { word: 'Lagging', meaning: 'Kaplama/Yalıtım', pos: 'noun' },
      { word: 'Shielding', meaning: 'Kalkanlama/Koruma', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Conduction', meaning: 'İletim', pos: 'noun' }
    ],
    collocations: ['loft insulation', 'thermal insulation', 'sound insulation'],
    collocationMeanings: {
      'loft insulation': 'çatı yalıtımı',
      'thermal insulation': 'ısı yalıtımı',
      'sound insulation': 'ses yalıtımı'
    },
    examples: ['Houses have much better insulation than they used to.'],
    exampleTranslations: ['Evler eskisine göre çok daha iyi yalıtıma sahip.']
  },
  {
    id: 'smart_meter',
    word: 'Smart meter',
    pos: 'noun',
    meaning: 'Akıllı sayaç',
    definition: 'An electronic device that records consumption of energy and communicates it to the supplier.',
    ipa: '/smɑːt ˈmiːtə(r)/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Digital meter', meaning: 'Dijital sayaç', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Analog meter', meaning: 'Analog sayaç', pos: 'noun' }
    ],
    collocations: ['install a smart meter', 'read a smart meter', 'electric smart meter'],
    collocationMeanings: {
      'install a smart meter': 'akıllı sayaç taktırmak',
      'read a smart meter': 'akıllı sayaç okumak',
      'electric smart meter': 'akıllı elektrik sayacı'
    },
    examples: ['The app allows you to access your smart meter and track usage.'],
    exampleTranslations: ['Uygulama, akıllı sayacınıza erişmenizi ve kullanımı takip etmenizi sağlar.']
  },
  {
    id: 'solar_panel',
    word: 'Solar panel',
    pos: 'noun',
    meaning: 'Güneş paneli',
    definition: 'A panel designed to absorb the sun’s rays as a source of energy for generating electricity.',
    ipa: '/ˈsəʊlə ˈpænəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'solar', pos: 'adj', meaning: 'güneşle ilgili' }
    ],
    synonyms: [
      { word: 'PV panel', meaning: 'Fotovoltaik panel', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['install solar panels', 'solar panel system', 'roof solar panels'],
    collocationMeanings: {
      'install solar panels': 'güneş paneli kurmak',
      'solar panel system': 'güneş paneli sistemi',
      'roof solar panels': 'çatı güneş panelleri'
    },
    examples: ['Solar panels generate more energy than we need during the summer.'],
    exampleTranslations: ['Güneş panelleri yaz boyunca ihtiyacımızdan fazla enerji üretiyor.']
  },
  {
    id: 'thermostat',
    word: 'Thermostat',
    pos: 'noun',
    meaning: 'Termostat',
    definition: 'A device that automatically regulates temperature.',
    ipa: '/ˈθɜːməstæt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Temperature control', meaning: 'Isı kontrolü', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['adjust thermostat', 'set thermostat', 'programmable thermostat'],
    collocationMeanings: {
      'adjust thermostat': 'termostatı ayarlamak',
      'set thermostat': 'termostatı kurmak',
      'programmable thermostat': 'programlanabilir termostat'
    },
    examples: ["According to the thermostat, it's over 30 degrees in here."],
    exampleTranslations: ['Termostata göre burası 30 derecenin üzerinde.']
  },
  {
    id: 'underfloor_heating',
    word: 'Underfloor heating',
    pos: 'noun',
    meaning: 'Yerden ısıtma',
    definition: 'A form of central heating which achieves indoor climate control using conduction and radiation.',
    ipa: '/ˌʌndəflɔː(r) ˈhiːtɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Radiant heating', meaning: 'Işıyan ısıtma', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Radiator heating', meaning: 'Radyatörlü ısıtma', pos: 'noun' }
    ],
    collocations: ['electric underfloor heating', 'install heating', 'efficient heating'],
    collocationMeanings: {
      'electric underfloor heating': 'elektrikli yerden ısıtma',
      'install heating': 'ısıtma sistemi kurmak',
      'efficient heating': 'verimli ısıtma'
    },
    examples: ["It's always warm because we've got underfloor heating."],
    exampleTranslations: ['Sıcak çünkü yerden ısıtmamız var.']
  },
  {
    id: 'water_butt',
    word: 'Water butt',
    pos: 'noun',
    meaning: 'Yağmur suyu fıçısı',
    definition: 'A large barrel for collecting and storing rain water.',
    ipa: '/ˈwɔːtə bʌt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Rain barrel', meaning: 'Yağmur varili', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['garden water butt', 'plastic water butt', 'fill a water butt'],
    collocationMeanings: {
      'garden water butt': 'bahçe yağmur fıçısı',
      'plastic water butt': 'plastik su fıçısı',
      'fill a water butt': 'fıçıyı doldurmak'
    },
    examples: ['We use water collected in the water butt for the garden.'],
    exampleTranslations: ['Bahçe için yağmur suyu fıçısında biriken suyu kullanıyoruz.']
  },
  {
    id: 'wind_turbine',
    word: 'Wind turbine',
    pos: 'noun',
    meaning: 'Rüzgar türbini',
    definition: 'A turbine having a large vaned wheel rotated by the wind to generate electricity.',
    ipa: '/wɪnd ˈtɜːbaɪn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'wind power', pos: 'noun', meaning: 'rüzgar enerjisi' }
    ],
    synonyms: [
      { word: 'Windmill', meaning: 'Yel değirmeni (geleneksel)', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['offshore wind turbine', 'giant wind turbine', 'wind turbine farm'],
    collocationMeanings: {
      'offshore wind turbine': 'deniz üstü rüzgar türbini',
      'giant wind turbine': 'dev rüzgar türbini',
      'wind turbine farm': 'rüzgar türbini tarlası'
    },
    examples: ['I might get a wind turbine installed on the roof.'],
    exampleTranslations: ['Çatıya bir rüzgar türbini kurdurabilirim.']
  },

  // --- UNIT 5: CITY AREAS ---
  {
    id: 'commercial',
    word: 'Commercial',
    pos: 'adj',
    meaning: 'Ticari',
    definition: 'Concerned with or engaged in commerce/business.',
    ipa: '/kəˈmɜːʃl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'commerce', pos: 'noun', meaning: 'ticaret' },
      { word: 'commercially', pos: 'adverb', meaning: 'ticari olarak' }
    ],
    synonyms: [
      { word: 'Business-related', meaning: 'İşle ilgili', pos: 'adj' },
      { word: 'Trade-based', meaning: 'Ticaret tabanlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Residential', meaning: 'Yerleşimle ilgili', pos: 'adj' },
      { word: 'Non-profit', meaning: 'Kâr amacı gütmeyen', pos: 'adj' }
    ],
    collocations: ['commercial district', 'commercial use', 'commercial break'],
    collocationMeanings: {
      'commercial district': 'ticaret bölgesi',
      'commercial use': 'ticari kullanım',
      'commercial break': 'reklam arası'
    },
    examples: ['These buildings are suitable for commercial use.'],
    exampleTranslations: ['Bu binalar ticari kullanım için uygundur.']
  },
  {
    id: 'housing',
    word: 'Housing',
    pos: 'noun',
    meaning: 'Konut, barınma',
    definition: 'Houses and apartments considered collectively.',
    ipa: '/ˈhaʊzɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'house', pos: 'verb/noun', meaning: 'barındırmak/ev' }
    ],
    synonyms: [
      { word: 'Accommodation', meaning: 'Konaklama/Barınma', pos: 'noun' },
      { word: 'Dwellings', meaning: 'Konutlar', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Homelessness', meaning: 'Evsizlik', pos: 'noun' }
    ],
    collocations: ['affordable housing', 'social housing', 'housing estate'],
    collocationMeanings: {
      'affordable housing': 'uygun fiyatlı konut',
      'social housing': 'sosyal konut',
      'housing estate': 'toplu konut alanı'
    },
    examples: ["There's an urgent need for more affordable housing."],
    exampleTranslations: ['Daha uygun fiyatlı konutlara acil ihtiyaç var.']
  },
  {
    id: 'industrial',
    word: 'Industrial',
    pos: 'adj',
    meaning: 'Endüstriyel, sanayi',
    definition: 'Relating to or characterized by industry.',
    ipa: '/ɪnˈdʌstriəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'industry', pos: 'noun', meaning: 'sanayi' },
      { word: 'industrialize', pos: 'verb', meaning: 'sanayileşmek' }
    ],
    synonyms: [
      { word: 'Manufacturing-based', meaning: 'Üretim tabanlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Agricultural', meaning: 'Tarımsal', pos: 'adj' },
      { word: 'Rural', meaning: 'Kırsal', pos: 'adj' }
    ],
    collocations: ['industrial revolution', 'industrial estate', 'industrial waste'],
    collocationMeanings: {
      'industrial revolution': 'sanayi devrimi',
      'industrial estate': 'sanayi sitesi',
      'industrial waste': 'sanayi atığı'
    },
    examples: ['Most people work in the industrial area of the city.'],
    exampleTranslations: ['Çoğu insan şehrin sanayi bölgesinde çalışıyor.']
  },
  {
    id: 'residential',
    word: 'Residential',
    pos: 'adj',
    meaning: 'Yerleşim yeri, konut alanı',
    definition: 'Designed for people to live in.',
    ipa: '/ˌrezɪˈdenʃl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'residence', pos: 'noun', meaning: 'konut' },
      { word: 'resident', pos: 'noun', meaning: 'sakin' }
    ],
    synonyms: [
      { word: 'Domestic', meaning: 'Evcil/Yerli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Industrial', meaning: 'Endüstriyel', pos: 'adj' },
      { word: 'Commercial', meaning: 'Ticari', pos: 'adj' }
    ],
    collocations: ['residential area', 'residential building', 'residential street'],
    collocationMeanings: {
      'residential area': 'yerleşim alanı',
      'residential building': 'konut binası',
      'residential street': 'mahalle sokağı'
    },
    examples: ['We live in a quiet residential area.'],
    exampleTranslations: ['Sakin bir yerleşim bölgesinde yaşıyoruz.']
  },
  {
    id: 'rural',
    word: 'Rural',
    pos: 'adj',
    meaning: 'Kırsal, taşra',
    definition: 'In, relating to, or characteristic of the countryside.',
    ipa: '/ˈrʊərəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'rurality', pos: 'noun', meaning: 'kırsallık' }
    ],
    synonyms: [
      { word: 'Rustic', meaning: 'Kırsal/Köylü', pos: 'adj' },
      { word: 'Countryside', meaning: 'Taşra', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Urban', meaning: 'Kentsel', pos: 'adj' },
      { word: 'Metropolitan', meaning: 'Büyükşehir', pos: 'adj' }
    ],
    collocations: ['rural development', 'rural area', 'rural life'],
    collocationMeanings: {
      'rural development': 'kırsal kalkınma',
      'rural area': 'kırsal bölge',
      'rural life': 'köy hayatı'
    },
    examples: ['Many people in remote rural areas lack internet access.'],
    exampleTranslations: ['Uzak kırsal bölgelerdeki pek çok kişinin internet erişimi yok.']
  },
  {
    id: 'slum',
    word: 'Slum',
    pos: 'noun',
    meaning: 'Gecekondu mahallesi, varoş',
    definition: 'A squalid and overcrowded urban street or district inhabited by very poor people.',
    ipa: '/slʌm/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'slumming', pos: 'noun/verb', meaning: 'varoşlarda gezmek' }
    ],
    synonyms: [
      { word: 'Ghetto', meaning: 'Getto', pos: 'noun' },
      { word: 'Shanty town', meaning: 'Teneke mahalle', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Luxury district', meaning: 'Lüks bölge', pos: 'noun' }
    ],
    collocations: ['urban slums', 'clear the slums', 'slum dweller'],
    collocationMeanings: {
      'urban slums': 'şehir varoşları',
      'clear the slums': 'gecekonduları yıkmak',
      'slum dweller': 'varoş sakini'
    },
    examples: ['She grew up in the slums on the edge of the city.'],
    exampleTranslations: ['Şehrin kenarındaki gecekondu mahallelerinde büyüdü.']
  },
  {
    id: 'suburbs',
    word: 'Suburbs',
    pos: 'noun',
    meaning: 'Banliyö, dış mahalleler',
    definition: 'An outlying district of a city, especially a residential one.',
    ipa: '/ˈsʌbɜːbz/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'suburban', pos: 'adj', meaning: 'banliyöye ait' }
    ],
    synonyms: [
      { word: 'Outskirts', meaning: 'Şehir dışı/Civar', pos: 'noun' }
    ],
    antonyms: [
      { word: 'City centre', meaning: 'Şehir merkezi', pos: 'noun' },
      { word: 'Downtown', meaning: 'Şehir içi', pos: 'noun' }
    ],
    collocations: ['live in the suburbs', 'leafy suburbs', 'commuter suburbs'],
    collocationMeanings: {
      'live in the suburbs': 'banliyöde yaşamak',
      'leafy suburbs': 'yeşillik banliyöler',
      'commuter suburbs': 'işe gidiş geliş banliyöleri'
    },
    examples: ["Perhaps we'll move to the suburbs when we're older."],
    exampleTranslations: ['Belki yaşlanınca banliyöye taşınırız.']
  },
  {
    id: 'urban',
    word: 'Urban',
    pos: 'adj',
    meaning: 'Kentsel, şehirsel',
    definition: 'In, relating to, or characteristic of a town or city.',
    ipa: '/ˈɜːbən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'urbanize', pos: 'verb', meaning: 'şehirleşmek' },
      { word: 'urbanization', pos: 'noun', meaning: 'şehirleşme' }
    ],
    synonyms: [
      { word: 'Metropolitan', meaning: 'Metropol', pos: 'adj' },
      { word: 'Civic', meaning: 'Kentsel/Şehirsel', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Rural', meaning: 'Kırsal', pos: 'adj' },
      { word: 'Pastoral', meaning: 'Pastoral/Köy ile ilgili', pos: 'adj' }
    ],
    collocations: ['urban planning', 'urban development', 'urban landscape'],
    collocationMeanings: {
      'urban planning': 'şehir planlama',
      'urban development': 'kentsel kalkınma',
      'urban landscape': 'kent manzarası'
    },
    examples: ['People generally move to urban areas in search of work.'],
    exampleTranslations: ['İnsanlar genellikle iş aramak için kentsel bölgelere taşınır.']
  },

  // --- UNIT 5: PREFIXES ---
  {
    id: 'decontaminate',
    word: 'Decontaminate',
    pos: 'verb',
    meaning: 'Arındırmak, temizlemek',
    definition: 'To remove dangerous substances from something.',
    ipa: '/ˌdiːkənˈtæmɪneɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'decontamination', pos: 'noun', meaning: 'arındırma' }
    ],
    synonyms: [
      { word: 'Purify', meaning: 'Arındırmak', pos: 'verb' },
      { word: 'Cleanse', meaning: 'Temizlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Contaminate', meaning: 'Kirletmek', pos: 'verb' },
      { word: 'Pollute', meaning: 'Kirlilik saçmak', pos: 'verb' }
    ],
    collocations: ['thoroughly decontaminate', 'decontaminate soil', 'decontaminate equipment'],
    collocationMeanings: {
      'thoroughly decontaminate': 'iyice arındırmak',
      'decontaminate soil': 'toprağı temizlemek',
      'decontaminate equipment': 'ekipmanı temizlemek'
    },
    examples: ['It took years to decontaminate the area after the leak.'],
    exampleTranslations: ['Sızıntıdan sonra bölgeyi arındırmak yıllar sürdü.']
  },
  {
    id: 'disqualify',
    word: 'Disqualify',
    pos: 'verb',
    meaning: 'Diskalifiye etmek, elemek',
    definition: 'To stop someone from taking part in an activity or competition because they have done something wrong.',
    ipa: '/dɪsˈkwɒlɪfaɪ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'disqualification', pos: 'noun', meaning: 'diskalifiye' }
    ],
    synonyms: [
      { word: 'Eliminate', meaning: 'Eleme', pos: 'verb' },
      { word: 'Ban', meaning: 'Yasaklamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Qualify', meaning: 'Elemeleri geçmek', pos: 'verb' },
      { word: 'Enable', meaning: 'Olanak tanımak', pos: 'verb' }
    ],
    collocations: ['disqualified from driving', 'disqualified for cheating', 'be disqualified from'],
    collocationMeanings: {
      'disqualified from driving': 'ehliyetine el konulmak',
      'disqualified for cheating': 'hileden diskalifiye edilmek',
      'be disqualified from': '...dan diskalifiye olmak'
    },
    examples: ['He was disqualified from the competition for cheating.'],
    exampleTranslations: ['Hile yaptığı için yarışmadan diskalifiye edildi.']
  },
  {
    id: 'extraordinary',
    word: 'Extraordinary',
    pos: 'adj',
    meaning: 'Olağanüstü, sıra dışı',
    definition: 'Very unusual, special, unexpected, or strange.',
    ipa: '/ɪkˈstrɔːdnri/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'extraordinarily', pos: 'adverb', meaning: 'olağanüstü derecede' }
    ],
    synonyms: [
      { word: 'Exceptional', meaning: 'İstisnai', pos: 'adj' },
      { word: 'Remarkable', meaning: 'Dikkat çekici', pos: 'adj' },
      { word: 'Outstanding', meaning: 'Muazzam', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Ordinary', meaning: 'Sıradan', pos: 'adj' },
      { word: 'Common', meaning: 'Yaygın/Basit', pos: 'adj' },
      { word: 'Average', meaning: 'Ortalama', pos: 'adj' }
    ],
    collocations: ['extraordinary achievement', 'extraordinary meeting', 'truly extraordinary'],
    collocationMeanings: {
      'extraordinary achievement': 'olağanüstü başarı',
      'extraordinary meeting': 'olağanüstü toplantı',
      'truly extraordinary': 'gerçekten sıra dışı'
    },
    examples: ["That is an extraordinary story - I can't believe it's true."],
    exampleTranslations: ['Bu olağanüstü bir hikaye; doğru olduğuna inanamıyorum.']
  },
  {
    id: 'illegal',
    word: 'Illegal',
    pos: 'adj',
    meaning: 'Yasadışı, illegal',
    definition: 'Not allowed by the law.',
    ipa: '/ɪˈliːɡl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'illegality', pos: 'noun', meaning: 'yasadışılık' },
      { word: 'illegally', pos: 'adverb', meaning: 'yasadışı yollarla' }
    ],
    synonyms: [
      { word: 'Unlawful', meaning: 'Kanunsuz', pos: 'adj' },
      { word: 'Illicit', meaning: 'Haram/Yasak', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Legal', meaning: 'Yasal', pos: 'adj' },
      { word: 'Lawful', meaning: 'Meşru', pos: 'adj' }
    ],
    collocations: ['illegal drug', 'illegal act', 'illegal immigrants'],
    collocationMeanings: {
      'illegal drug': 'uyuşturucu madde',
      'illegal act': 'yasadışı eylem',
      'illegal immigrants': 'kaçak göçmenler'
    },
    examples: ["It's illegal to drive without a seat belt."],
    exampleTranslations: ['Emniyet kemeri olmadan araç kullanmak yasadışıdır.']
  },
  {
    id: 'impossible',
    word: 'Impossible',
    pos: 'adj',
    meaning: 'İmkansız',
    definition: 'If something is impossible, it cannot happen or be done.',
    ipa: '/ɪmˈpɒsəbl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'impossibility', pos: 'noun', meaning: 'imkansızlık' },
      { word: 'impossibly', pos: 'adverb', meaning: 'imkansız şekilde' }
    ],
    synonyms: [
      { word: 'Unachievable', meaning: 'Ulaşılamaz', pos: 'adj' },
      { word: 'Infeasible', meaning: 'Uygulanamaz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Possible', meaning: 'Mümkün', pos: 'adj' },
      { word: 'Feasible', meaning: 'Oluru olan', pos: 'adj' }
    ],
    collocations: ['next to impossible', 'mission impossible', 'virtually impossible'],
    collocationMeanings: {
      'next to impossible': 'neredeyse imkansız',
      'mission impossible': 'imkansız görev',
      'virtually impossible': 'fiilen imkansız'
    },
    examples: ['It would be impossible to get there without a car.'],
    exampleTranslations: ['Oraya arabasız gitmek imkansız olurdu.']
  },
  {
    id: 'mislead',
    word: 'Mislead',
    pos: 'verb',
    meaning: 'Yanlış yönlendirmek, aldatmak',
    definition: 'To cause someone to believe something that is not true.',
    ipa: '/ˌmɪsˈliːd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'misleading', pos: 'adj', meaning: 'yanıltıcı' }
    ],
    synonyms: [
      { word: 'Deceive', meaning: 'Aldatmak', pos: 'verb' },
      { word: 'Delude', meaning: 'Kandırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Guide', meaning: 'Yol göstermek', pos: 'verb' },
      { word: 'Inform', meaning: 'Bilgilendirmek', pos: 'verb' }
    ],
    collocations: ['misleading information', 'mislead the public', 'deliberately mislead'],
    collocationMeanings: {
      'misleading information': 'yanıltıcı bilgi',
      'mislead the public': 'kamuoyunu aldatmak',
      'deliberately mislead': 'kasten yanlış yönlendirmek'
    },
    examples: ['The community were misled by developers about the project.'],
    exampleTranslations: ['Topluluk, proje hakkında geliştiriciler tarafından yanlış yönlendirildi.']
  },
  {
    id: 'outperform',
    word: 'Outperform',
    pos: 'verb',
    meaning: 'Daha iyi performans göstermek, geride bırakmak',
    definition: 'To do well in a particular job or activity compared to others.',
    ipa: '/ˌaʊtpəˈfɔːm/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'performance', pos: 'noun', meaning: 'performans' }
    ],
    synonyms: [
      { word: 'Surpass', meaning: 'Aşmak/Geçmek', pos: 'verb' },
      { word: 'Exceed', meaning: 'Üstüne çıkmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Underperform', meaning: 'Düşük performans göstermek', pos: 'verb' }
    ],
    collocations: ['outperform peers', 'outperform the market', 'significantly outperform'],
    collocationMeanings: {
      'outperform peers': 'akranlarını geride bırakmak',
      'outperform the market': 'piyasanın üstünde performans sergilemek',
      'significantly outperform': 'belirgin şekilde üstün gelmek'
    },
    examples: ['The new system helped them outperform competitors.'],
    exampleTranslations: ['Yeni sistem rakiplerini geride bırakmalarına yardımcı oldu.']
  },
  {
    id: 'overpopulation',
    word: 'Overpopulation',
    pos: 'noun',
    meaning: 'Aşırı nüfus artışı',
    definition: 'The condition of having a population so dense as to cause environmental deterioration.',
    ipa: '/ˌəʊvəˌpɒpjuˈleɪʃn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'populate', pos: 'verb', meaning: 'yerleşmek' },
      { word: 'populous', pos: 'adj', meaning: 'kalabalık' }
    ],
    synonyms: [
      { word: 'Overcrowding', meaning: 'Aşırı kalabalık', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Underpopulation', meaning: 'Nüfus azlığı', pos: 'noun' }
    ],
    collocations: ['global overpopulation', 'problem of overpopulation', 'tackle overpopulation'],
    collocationMeanings: {
      'global overpopulation': 'küresel aşırı nüfus',
      'problem of overpopulation': 'aşırı nüfus sorunu',
      'tackle overpopulation': 'aşırı nüfusla mücadele etmek'
    },
    examples: ['Overpopulation is a major problem in many parts of the world.'],
    exampleTranslations: ['Aşırı nüfus dünyanın pek çok yerinde büyük bir sorundur.']
  },
  {
    id: 'overpriced',
    word: 'Overpriced',
    pos: 'adj',
    meaning: 'Fahiş fiyatlı, çok pahalı',
    definition: 'Too expensive; costing more than it is worth.',
    ipa: '/ˌəʊvəˈpraɪst/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'price', pos: 'noun/verb', meaning: 'fiyat/fiyatlandırmak' }
    ],
    synonyms: [
      { word: 'Exorbitant', meaning: 'Fahiş', pos: 'adj' },
      { word: 'Extortionate', meaning: 'Kazık/Çok pahalı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Underpriced', meaning: 'Değerinin altında', pos: 'adj' },
      { word: 'Cheap', meaning: 'Ucuz', pos: 'adj' },
      { word: 'Affordable', meaning: 'Uygun fiyatlı', pos: 'adj' }
    ],
    collocations: ['overpriced menu', 'wildly overpriced', 'ridiculously overpriced'],
    collocationMeanings: {
      'overpriced menu': 'kazık menü',
      'wildly overpriced': 'fahiş derecede pahalı',
      'ridiculously overpriced': 'gülünç derecede pahalı'
    },
    examples: ['The train is massively overpriced for the service they provide.'],
    exampleTranslations: ['Sundukları hizmete göre tren feci şekilde pahalı.']
  },
  {
    id: 'redevelop',
    word: 'Redevelop',
    pos: 'verb',
    meaning: 'Yeniden yapılandırmak, imara açmak',
    definition: 'To change an area by building new houses, offices, etc.',
    ipa: '/ˌriːdɪˈveləp/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'redevelopment', pos: 'noun', meaning: 'yeniden imar' }
    ],
    synonyms: [
      { word: 'Renovate', meaning: 'Yenilemek', pos: 'verb' },
      { word: 'Reconstruct', meaning: 'Yeniden inşa etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Demolish', meaning: 'Yıkmak', pos: 'verb' },
      { word: 'Neglect', meaning: 'İhmal etmek', pos: 'verb' }
    ],
    collocations: ['redevelop the area', 'redevelop site', 'plan to redevelop'],
    collocationMeanings: {
      'redevelop the area': 'bölgeyi yeniden yapılandırmak',
      'redevelop site': 'sahayı imara açmak',
      'plan to redevelop': 'yeniden yapılandırmayı planlamak'
    },
    examples: ['The whole area is being redeveloped for residential use.'],
    exampleTranslations: ['Tüm bölge konut kullanımı için yeniden yapılandırılıyor.']
  },
  {
    id: 'suburban_adj',
    word: 'Suburban',
    pos: 'adj',
    meaning: 'Banliyö ile ilgili, şehir dışı',
    definition: 'In or relating to a suburb.',
    ipa: '/səˈbɜːbən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'suburbs', pos: 'noun', meaning: 'banliyöler' }
    ],
    synonyms: [
      { word: 'Outlying', meaning: 'Şehir dışı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Urban', meaning: 'Kentsel', pos: 'adj' },
      { word: 'Central', meaning: 'Merkezi', pos: 'adj' }
    ],
    collocations: ['suburban life', 'suburban development', 'suburban sprawl'],
    collocationMeanings: {
      'suburban life': 'banliyö hayatı',
      'suburban development': 'banliyö yapılaşması',
      'suburban sprawl': 'çarpık banliyöleşme'
    },
    examples: ['Lots of families move to suburban areas for more space.'],
    exampleTranslations: ['Pek çok aile daha fazla alan için banliyö bölgelerine taşınıyor.']
  },
  {
    id: 'underestimate',
    word: 'Underestimate',
    pos: 'verb',
    meaning: 'Hafife almak, azımsamak',
    definition: 'To fail to guess or understand the real cost, size, difficulty, etc. of something.',
    ipa: '/ˌʌndərˈestɪmeɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'estimation', pos: 'noun', meaning: 'tahmin' }
    ],
    synonyms: [
      { word: 'Underrate', meaning: 'Düşük değer biçmek', pos: 'verb' },
      { word: 'Belittle', meaning: 'Küçümsemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Overestimate', meaning: 'Gözünde büyütmek', pos: 'verb' },
      { word: 'Exaggerate', meaning: 'Abartmak', pos: 'verb' }
    ],
    collocations: ['grossly underestimate', 'seriously underestimate', 'underestimate power'],
    collocationMeanings: {
      'grossly underestimate': 'feci şekilde hafife almak',
      'seriously underestimate': 'ciddi şekilde azımsamak',
      'underestimate power': 'gücü hafife almak'
    },
    examples: ['I seriously underestimated the cost of the repairs.'],
    exampleTranslations: ['Onarımların maliyetini ciddi şekilde azımsamışım.']
  },
  {
    id: 'unhappy',
    word: 'Unhappy',
    pos: 'adj',
    meaning: 'Mutsuz, hoşnutsuz',
    definition: 'Sad or not satisfied.',
    ipa: '/ʌnˈhæpi/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'unhappiness', pos: 'noun', meaning: 'mutsuzluk' },
      { word: 'unhappily', pos: 'adverb', meaning: 'mutsuzca' }
    ],
    synonyms: [
      { word: 'Sad', meaning: 'Üzgün', pos: 'adj' },
      { word: 'Miserable', meaning: 'Perişan/Bedbaht', pos: 'adj' },
      { word: 'Dissatisfied', meaning: 'Memnuniyetsiz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Happy', meaning: 'Mutlu', pos: 'adj' },
      { word: 'Cheerful', meaning: 'Neşeli', pos: 'adj' },
      { word: 'Satisfied', meaning: 'Memnun', pos: 'adj' }
    ],
    collocations: ['unhappy ending', 'deeply unhappy', 'unhappy with'],
    collocationMeanings: {
      'unhappy ending': 'mutsuz son',
      'deeply unhappy': 'çok mutsuz',
      'unhappy with': '...dan memnun olmamak'
    },
    examples: ['People are pretty unhappy about the new housing costs.'],
    exampleTranslations: ['İnsanlar yeni konut maliyetlerinden dolayı epey mutsuz.']
  },
  {
    id: 'upgrade',
    word: 'Upgrade',
    pos: 'verb/noun',
    meaning: 'Yükseltmek, üst modele geçmek',
    definition: 'To improve the quality or usefulness of something.',
    ipa: '/ˌʌpˈɡreɪd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Improve', meaning: 'Geliştirmek', pos: 'verb' },
      { word: 'Enhance', meaning: 'Güzelleştirmek/Artırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Downgrade', meaning: 'Rütbe düşürmek/Azaltmak', pos: 'verb' }
    ],
    collocations: ['major upgrade', 'system upgrade', 'free upgrade'],
    collocationMeanings: {
      'major upgrade': 'büyük iyileştirme',
      'system upgrade': 'sistem yükseltme',
      'free upgrade': 'ücretsiz üst modele geçme'
    },
    examples: ["We're going to upgrade our IT system next year."],
    exampleTranslations: ['Gelecek yıl bilişim sistemimizi yükselteceğiz.']
  },

  // --- UNIT 6: EDUCATION ---
  {
    id: 'boarding_school',
    word: 'Boarding school',
    pos: 'noun',
    meaning: 'Yatılı okul',
    definition: 'A school where students live and study during the school year.',
    ipa: '/ˈbɔːdɪŋ skuːl/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Residential school', meaning: 'Yatılı okul', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Day school', meaning: 'Gündüzlü okul', pos: 'noun' }
    ],
    collocations: ['attend boarding school', 'send to boarding school', 'exclusive boarding school'],
    collocationMeanings: {
      'attend boarding school': 'yatılı okulda okumak',
      'send to boarding school': 'yatılı okula göndermek',
      'exclusive boarding school': 'seçkin yatılı okul'
    },
    examples: ['My father went to boarding school when he was young.'],
    exampleTranslations: ['Babam gençken yatılı okula gitmiş.']
  },
  {
    id: 'campus',
    word: 'Campus',
    pos: 'noun',
    meaning: 'Kampüs, yerleşke',
    definition: 'The grounds and buildings of a university or college.',
    ipa: '/ˈkæmpəs/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Grounds', meaning: 'Arazi/Yerleşke', pos: 'noun' },
      { word: 'Precinct', meaning: 'Yerleşke alanı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['on campus', 'university campus', 'main campus'],
    collocationMeanings: {
      'on campus': 'kampüste',
      'university campus': 'üniversite kampüsü',
      'main campus': 'ana kampüs'
    },
    examples: ['There are accommodation for over 2,000 students on campus.'],
    exampleTranslations: ['Kampüste 2.000’den fazla öğrenci için konaklama yeri var.']
  },
  {
    id: 'compulsory',
    word: 'Compulsory',
    pos: 'adj',
    meaning: 'Zorunlu, mecburi',
    definition: 'Something that must be done because of a rule or law.',
    ipa: '/kəmˈpʌlsəri/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'compulsion', pos: 'noun', meaning: 'zorlama/dürtü' }
    ],
    synonyms: [
      { word: 'Mandatory', meaning: 'Zorunlu', pos: 'adj' },
      { word: 'Obligatory', meaning: 'Mecburi', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Optional', meaning: 'İsteğe bağlı', pos: 'adj' },
      { word: 'Voluntary', meaning: 'Gönüllü', pos: 'adj' }
    ],
    collocations: ['compulsory education', 'compulsory subject', 'become compulsory'],
    collocationMeanings: {
      'compulsory education': 'zorunlu eğitim',
      'compulsory subject': 'zorunlu ders',
      'become compulsory': 'zorunlu hale gelmek'
    },
    examples: ["Swimming was compulsory at my primary school."],
    exampleTranslations: ['İlkokulumda yüzme zorunluydu.']
  },
  {
    id: 'curriculum',
    word: 'Curriculum',
    pos: 'noun',
    meaning: 'Müfredat',
    definition: 'The subjects that are studied in a school, college, or university.',
    ipa: '/kəˈrɪkjələm/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'extra-curricular', pos: 'adj', meaning: 'müfredat dışı' }
    ],
    synonyms: [
      { word: 'Syllabus', meaning: 'Ders programı', pos: 'noun' },
      { word: 'Course of study', meaning: 'Eğitim programı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['core curriculum', 'school curriculum', 'national curriculum'],
    collocationMeanings: {
      'core curriculum': 'temel müfredat',
      'school curriculum': 'okul müfredatı',
      'national curriculum': 'ulusal müfredat'
    },
    examples: ['The school is aiming to broaden its curriculum.'],
    exampleTranslations: ['Okul müfredatını genişletmeyi hedefliyor.']
  },
  {
    id: 'entrance_exam',
    word: 'Entrance exam',
    pos: 'noun',
    meaning: 'Giriş sınavı',
    definition: 'An exam that you take to be accepted into a school or university.',
    ipa: '/ˈentrəns ɪɡˈzæm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Admission test', meaning: 'Kabul testi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['university entrance exam', 'pass entrance exam', 'take entrance exam'],
    collocationMeanings: {
      'university entrance exam': 'üniversiteye giriş sınavı',
      'pass entrance exam': 'giriş sınavını geçmek',
      'take entrance exam': 'giriş sınavına girmek'
    },
    examples: ['He is studying hard for his university entrance exam.'],
    exampleTranslations: ['Üniversite giriş sınavı için sıkı çalışıyor.']
  },
  {
    id: 'graduate_verb',
    word: 'Graduate',
    pos: 'verb',
    meaning: 'Mezun olmak',
    definition: 'To complete a school, college, or university course.',
    ipa: '/ˈɡrædʒueɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'graduation', pos: 'noun', meaning: 'mezuniyet' },
      { word: 'graduate', pos: 'noun', meaning: 'mezun kişi' }
    ],
    synonyms: [
      { word: 'Qualify', meaning: 'Hak kazanmak/Mezun olmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Drop out', meaning: 'Okulu bırakmak', pos: 'verb' }
    ],
    collocations: ['graduate from', 'recently graduate', 'newly graduate'],
    collocationMeanings: {
      'graduate from': '...dan mezun olmak',
      'recently graduate': 'yakın zamanda mezun olmak',
      'newly graduate': 'yeni mezun'
    },
    examples: ['She graduated from Harvard in 2020.'],
    exampleTranslations: ['2020 yılında Harvard’dan mezun oldu.']
  },
  {
    id: 'higher_education',
    word: 'Higher education',
    pos: 'noun',
    meaning: 'Yükseköğrenim',
    definition: 'Education at a college or university where subjects are studied at an advanced level.',
    ipa: '/ˌhaɪər edjuˈkeɪʃn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tertiary education', meaning: 'Üçüncül eğitim', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['access to higher education', 'higher education institution', 'pursue higher education'],
    collocationMeanings: {
      'access to higher education': 'yükseköğrenime erişim',
      'higher education institution': 'yükseköğretim kurumu',
      'pursue higher education': 'yükseköğrenim görmek'
    },
    examples: ['More students are going on to higher education.'],
    exampleTranslations: ['Daha fazla öğrenci yükseköğrenime devam ediyor.']
  },
  {
    id: 'lecture',
    word: 'Lecture',
    pos: 'noun/verb',
    meaning: 'Ders, konferans vermek',
    definition: 'A formal talk on a serious subject given to a group of people.',
    ipa: '/ˈlektʃə(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'lecturer', pos: 'noun', meaning: 'okutman/öğretim görevlisi' }
    ],
    synonyms: [
      { word: 'Address', meaning: 'Hitap/Konuşma', pos: 'noun' },
      { word: 'Talk', meaning: 'Konuşma', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['give a lecture', 'attend a lecture', 'guest lecture'],
    collocationMeanings: {
      'give a lecture': 'ders anlatmak/konferans vermek',
      'attend a lecture': 'derse katılmak',
      'guest lecture': 'konuk dersi'
    },
    examples: ['The course starts with a series of lectures on history.'],
    exampleTranslations: ['Kurs bir dizi tarih dersiyle başlıyor.']
  },
  {
    id: 'scholarship',
    word: 'Scholarship',
    pos: 'noun',
    meaning: 'Burs',
    definition: 'An amount of money given by a school or university to pay for the studies of a person with great ability.',
    ipa: '/ˈskɒləʃɪp/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'scholarly', pos: 'adj', meaning: 'akademik' }
    ],
    synonyms: [
      { word: 'Grant', meaning: 'Hibe/Burs', pos: 'noun' },
      { word: 'Fellowship', meaning: 'Araştırma bursu', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['win a scholarship', 'apply for scholarship', 'full scholarship'],
    collocationMeanings: {
      'win a scholarship': 'burs kazanmak',
      'apply for scholarship': 'bursa başvurmak',
      'full scholarship': 'tam burs'
    },
    examples: ['He got a scholarship to study at Oxford.'],
    exampleTranslations: ['Oxford’da okumak için burs kazandı.']
  },
  {
    id: 'vocational',
    word: 'Vocational',
    pos: 'adj',
    meaning: 'Mesleki',
    definition: 'Providing skills and education that prepare you for a job.',
    ipa: '/vəʊˈkeɪʃənl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'vocation', pos: 'noun', meaning: 'meslek/yetenek' }
    ],
    synonyms: [
      { word: 'Occupational', meaning: 'Mesleki', pos: 'adj' },
      { word: 'Professional', meaning: 'Profesyonel', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Academic', meaning: 'Akademik', pos: 'adj' }
    ],
    collocations: ['vocational training', 'vocational course', 'vocational school'],
    collocationMeanings: {
      'vocational training': 'mesleki eğitim',
      'vocational course': 'meslek kursu',
      'vocational school': 'meslek lisesi'
    },
    examples: ['The college offers wide range of vocational courses.'],
    exampleTranslations: ['Kolej çok çeşitli mesleki kurslar sunuyor.']
  },

  // --- UNIT 6: COMPOUND ADJECTIVES ---
  {
    id: 'coming_of_age',
    word: 'Coming-of-age',
    pos: 'adj',
    meaning: 'Olgunlaşma/Reşit olma dönemi',
    definition: 'Relating to a person’s transition from childhood to adulthood.',
    ipa: '/ˌkʌmɪŋ əv ˈeɪdʒ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Adulthood-transition', meaning: 'Yetişkinliğe geçiş', pos: 'adj' }
    ],
    antonyms: [],
    collocations: ['coming-of-age story', 'coming-of-age film', 'coming-of-age ritual'],
    collocationMeanings: {
      'coming-of-age story': 'olgunlaşma hikayesi',
      'coming-of-age film': 'büyüme hikayesi filmi',
      'coming-of-age ritual': 'reşit olma ritüeli'
    },
    examples: ["It's a beautiful coming-of-age story about two brothers."],
    exampleTranslations: ['Bu, iki kardeş hakkında güzel bir büyüme hikayesi.']
  },
  {
    id: 'last_minute',
    word: 'Last-minute',
    pos: 'adj',
    meaning: 'Son dakika',
    definition: 'Happening or done at the latest possible time.',
    ipa: '/ˌlɑːst ˈmɪnɪt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Final-moment', meaning: 'Son an', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Advance', meaning: 'Önceden yapılmış', pos: 'adj' }
    ],
    collocations: ['last-minute decision', 'last-minute change', 'at the last minute'],
    collocationMeanings: {
      'last-minute decision': 'son dakika kararı',
      'last-minute change': 'son dakika değişikliği',
      'at the last minute': 'son anda'
    },
    examples: ["Sorry, there's been a last-minute change of plans."],
    exampleTranslations: ['Üzgünüm, planlarda son dakika değişikliği oldu.']
  },
  {
    id: 'old_fashioned',
    word: 'Old-fashioned',
    pos: 'adj',
    meaning: 'Eski moda, demode',
    definition: 'Not modern; belonging to a time in the past.',
    ipa: '/ˌəʊld ˈfæʃnd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Outdated', meaning: 'Modası geçmiş', pos: 'adj' },
      { word: 'Antique', meaning: 'Antika', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Modern', meaning: 'Modern', pos: 'adj' },
      { word: 'Up-to-date', meaning: 'Güncel', pos: 'adj' }
    ],
    collocations: ['old-fashioned clothes', 'old-fashioned idea', 'rather old-fashioned'],
    collocationMeanings: {
      'old-fashioned clothes': 'eski moda kıyafetler',
      'old-fashioned idea': 'modası geçmiş fikir',
      'rather old-fashioned': 'oldukça eski usul'
    },
    examples: ['They have very old-fashioned views about marriage.'],
    exampleTranslations: ['Evlilik hakkında çok eski moda görüşleri var.']
  },
  {
    id: 'up_to_date',
    word: 'Up-to-date',
    pos: 'adj',
    meaning: 'Güncel, modern',
    definition: 'Modern, recent, or containing the latest information.',
    ipa: '/ˌʌp tə ˈdeɪt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Current', meaning: 'Güncel', pos: 'adj' },
      { word: 'Modern', meaning: 'Modern', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Out-of-date', meaning: 'Günü geçmiş', pos: 'adj' },
      { word: 'Old-fashioned', meaning: 'Eski moda', pos: 'adj' }
    ],
    collocations: ['keep up-to-date', 'bring up-to-date', 'most up-to-date'],
    collocationMeanings: {
      'keep up-to-date': 'güncel kalmak',
      'bring up-to-date': 'güncelleştirmek',
      'most up-to-date': 'en güncel'
    },
    examples: ['Our records are kept up-to-date.'],
    exampleTranslations: ['Kayıtlarımız güncel tutulmaktadır.']
  },
  {
    id: 'well_known',
    word: 'Well-known',
    pos: 'adj',
    meaning: 'Tanınmış, meşhur',
    definition: 'Known by many people.',
    ipa: '/ˌwel ˈnəʊn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Famous', meaning: 'Ünlü', pos: 'adj' },
      { word: 'Celebrated', meaning: 'Meşhur', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unknown', meaning: 'Bilinmeyen', pos: 'adj' },
      { word: 'Obscure', meaning: 'Tanınmamış', pos: 'adj' }
    ],
    collocations: ['well-known fact', 'well-known person', 'internationally well-known'],
    collocationMeanings: {
      'well-known fact': 'herkesçe bilinen gerçek',
      'well-known person': 'tanınmış kişi',
      'internationally well-known': 'uluslararası düzeyde tanınmış'
    },
    examples: ["He's a well-known local artist."],
    exampleTranslations: ['O, tanınmış bir yerel sanatçıdır.']
  },

  // --- UNIT 6: MAKE AND DO PHRASES ---
  {
    id: 'do_away_with',
    word: 'Do away with',
    pos: 'phrase',
    meaning: 'Yürürlükten kaldırmak, kurtulmak',
    definition: 'To get rid of something or stop using it.',
    ipa: '/duː əˈweɪ wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Abolish', meaning: 'Feshetmek', pos: 'verb' },
      { word: 'Eliminate', meaning: 'Elimine etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Establish', meaning: 'Kurmak/Yürürlüğe koymak', pos: 'verb' }
    ],
    collocations: ['do away with rules', 'do away with taxes', 'do away with a tradition'],
    collocationMeanings: {
      'do away with rules': 'kuralları kaldırmak',
      'do away with taxes': 'vergileri sıfırlamak',
      'do away with a tradition': 'bir geleneğe son vermek'
    },
    examples: ['The governor is proposed to do away with the state income tax.'],
    exampleTranslations: ['Valinin eyalet gelir vergisini kaldırması öneriliyor.']
  },
  {
    id: 'do_somebody_a_favour',
    word: 'Do somebody a favour',
    pos: 'phrase',
    meaning: 'Birine bir iyilik yapmak',
    definition: 'To do something to help someone.',
    ipa: '/duː ˈsʌmbədi ə ˈfeɪvə(r)/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Help out', meaning: 'Yardım etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['ask a favour', 'owe a favour', 'return a favour'],
    collocationMeanings: {
      'ask a favour': 'iyilik istemek',
      'owe a favour': 'iyilik borcu olmak',
      'return a favour': 'iyiliğe karşılık vermek'
    },
    examples: ['Could you do me a favour and pick up the kids?'],
    exampleTranslations: ['Bana bir iyilik yapıp çocukları alabilir misin?']
  },
  {
    id: 'do_somebody_harm',
    word: 'Do somebody harm',
    pos: 'phrase',
    meaning: 'Birine zarar vermek',
    definition: 'To cause someone to be hurt or damaged.',
    ipa: '/duː ˈsʌmbədi hɑːm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Injure', meaning: 'İncitmek', pos: 'verb' },
      { word: 'Damage', meaning: 'Zarar vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Benefit', meaning: 'Fayda sağlamak', pos: 'verb' }
    ],
    collocations: ['do more harm', 'intended harm', 'no harm done'],
    collocationMeanings: {
      'do more harm': 'daha fazla zarar vermek',
      'intended harm': 'kasti zarar',
      'no harm done': 'zarar ziyan yok'
    },
    examples: ["Missing one exam won't do you any permanent harm."],
    exampleTranslations: ['Bir sınavı kaçırmak size kalıcı bir zarar vermez.']
  },
  {
    id: 'do_without',
    word: 'Do without',
    pos: 'phrase',
    meaning: 'Olmadan idare etmek',
    definition: 'To manage without having something.',
    ipa: '/duː wɪˈðaʊt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Manage without', meaning: 'Olmadan yönetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Need', meaning: 'İhtiyaç duymak', pos: 'verb' }
    ],
    collocations: ['cannot do without', 'learn to do without', 'have to do without'],
    collocationMeanings: {
      'cannot do without': 'onsuz yapamamak',
      'learn to do without': 'onsuz yaşamayı öğrenmek',
      'have to do without': 'onsuz idare etmek zorunda kalmak'
    },
    examples: ["There's no milk, so you'll have to do without."],
    exampleTranslations: ['Süt yok, bu yüzden onsuz idare etmek zorunda kalacaksın.']
  },
  {
    id: 'make_a_good_impression',
    word: 'Make a good impression',
    pos: 'phrase',
    meaning: 'İyi bir izlenim bırakmak',
    definition: 'To cause someone to have a good opinion of you.',
    ipa: '/meɪk ə ɡʊd ɪmˈpreʃn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [
      { word: 'Make a bad impression', meaning: 'Kötü izlenim bırakmak', pos: 'phrase' }
    ],
    collocations: ['first impression', 'lasting impression', 'strive to make'],
    collocationMeanings: {
      'first impression': 'ilk izlenim',
      'lasting impression': 'kalıcı izlenim',
      'strive to make': 'yapmaya çabalamak'
    },
    examples: ["It's important to make a good impression at an interview."],
    exampleTranslations: ['Mülakatta iyi bir izlenim bırakmak önemlidir.']
  },
  {
    id: 'make_allowances',
    word: 'Make allowances',
    pos: 'phrase',
    meaning: 'Hoşgörü göstermek, halden anlamak',
    definition: 'To accept something that you would not normally accept, often because of special circumstances.',
    ipa: '/meɪk əˈlaʊənsɪz/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tolerate', meaning: 'Hoş görmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Judge harshly', meaning: 'Sertçe yargılamak', pos: 'phrase' }
    ],
    collocations: ['make allowances for', 'reasonable allowances', 'necessary allowances'],
    collocationMeanings: {
      'make allowances for': '...için hoşgörü göstermek',
      'reasonable allowances': 'makul hoşgörü',
      'necessary allowances': 'gerekli esneklik'
    },
    examples: ['You should make allowances for him; he is still learning.'],
    exampleTranslations: ['Ona karşı hoşgörülü olmalısın; hala öğreniyor.']
  },
  {
    id: 'make_the_best_of_something',
    word: 'Make the best of',
    pos: 'phrase',
    meaning: 'Bir durumdan yararlanmak, iyi tarafına bakmak',
    definition: 'To try to be positive about a bad situation.',
    ipa: '/meɪk ðə best əv/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['make the best of a bad job', 'try to make the best', 'make the best of life'],
    collocationMeanings: {
      'make the best of a bad job': 'kötü giden bir işten en iyisini çıkarmak',
      'try to make the best': 'en iyisini yapmaya çalışmak',
      'make the best of life': 'hayatı en iyi şekilde yaşamak'
    },
    examples: ["We'll just have to make the best of it."],
    exampleTranslations: ['Sadece elimizden gelenin en iyisini yapıp durumu idare etmeliyiz.']
  },
  {
    id: 'make_a_go_of_something',
    word: 'Make a go of',
    pos: 'phrase',
    meaning: 'Bir şeyi başarıyla yürütmek',
    definition: 'To try to make something work successfully.',
    ipa: '/meɪk ə ɡəʊ əv/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Succeed in', meaning: '...da başarılı olmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fail', meaning: 'Başarısız olmak', pos: 'verb' }
    ],
    collocations: ['really make a go', 'fail to make a go', 'determined to make a go'],
    collocationMeanings: {
      'really make a go': 'gerçekten başarmak',
      'fail to make a go': 'başarısız olmak',
      'determined to make a go': 'başarmaya kararlı'
    },
    examples: ["She's really determined to make a go of her new business."],
    exampleTranslations: ['Yeni işini başarıyla yürütmeye gerçekten kararlı.']
  },

  // --- UNIT 7: VERBS OF CHANGE ---
  {
    id: 'construct',
    word: 'Construct',
    pos: 'verb',
    meaning: 'İnşa etmek, yapmak',
    definition: 'To build or make something, such as a road, machine, or building.',
    ipa: '/kənˈstrʌkt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'construction', pos: 'noun', meaning: 'inşaat' },
      { word: 'constructive', pos: 'adj', meaning: 'yapıcı' }
    ],
    synonyms: [
      { word: 'Build', meaning: 'İnşa etmek', pos: 'verb' },
      { word: 'Erect', meaning: 'Dikmek/İnşa etmek', pos: 'verb' },
      { word: 'Fabricate', meaning: 'Üretmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Demolish', meaning: 'Yıkmak', pos: 'verb' },
      { word: 'Destroy', meaning: 'Yok etmek', pos: 'verb' }
    ],
    collocations: ['construct a building', 'carefully construct', 'construct a theory'],
    collocationMeanings: {
      'construct a building': 'bina inşa etmek',
      'carefully construct': 'dikkatle oluşturmak',
      'construct a theory': 'teori kurmak'
    },
    examples: ['The tunnel was constructed in 1996.'],
    exampleTranslations: ['Tünel 1996 yılında inşa edildi.']
  },
  {
    id: 'convert',
    word: 'Convert',
    pos: 'verb',
    meaning: 'Dönüştürmek, çevirmek',
    definition: 'To change in form, character, or function.',
    ipa: '/kənˈvɜːt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'conversion', pos: 'noun', meaning: 'dönüşüm' },
      { word: 'converter', pos: 'noun', meaning: 'dönüştürücü' }
    ],
    synonyms: [
      { word: 'Transform', meaning: 'Dönüştürmek', pos: 'verb' },
      { word: 'Adapt', meaning: 'Uyarlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Keep', meaning: 'Tutmak', pos: 'verb' },
      { word: 'Preserve', meaning: 'Korumak', pos: 'verb' }
    ],
    collocations: ['convert into', 'convert to Islam', 'convert currency'],
    collocationMeanings: {
      'convert into': '...a dönüştürmek',
      'convert to Islam': 'İslamiyet’e geçmek',
      'convert currency': 'döviz bozdurmak'
    },
    examples: ["They're planning to convert the warehouse into a community centre."],
    exampleTranslations: ['Depoyu bir toplum merkezine dönüştürmeyi planlıyorlar.']
  },
  {
    id: 'demolish',
    word: 'Demolish',
    pos: 'verb',
    meaning: 'Yıkmak, yerle bir etmek',
    definition: 'To pull or knock down a building.',
    ipa: '/dɪˈmɒlɪʃ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'demolition', pos: 'noun', meaning: 'yıkım' }
    ],
    synonyms: [
      { word: 'Knock down', meaning: 'Yıkmak', pos: 'verb' },
      { word: 'Level', meaning: 'Yerle bir etmek', pos: 'verb' },
      { word: 'Raze', meaning: 'Kökünden yıkmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Construct', meaning: 'İnşa etmek', pos: 'verb' },
      { word: 'Build', meaning: 'Yapmak', pos: 'verb' }
    ],
    collocations: ['completely demolish', 'plan to demolish', 'demolish a building'],
    collocationMeanings: {
      'completely demolish': 'tamamen yerle bir etmek',
      'plan to demolish': 'yıkmayı planlamak',
      'demolish a building': 'bina yıkmak'
    },
    examples: ["I heard they're going to demolish the old school."],
    exampleTranslations: ['Eski okulu yıkacaklarını duydum.']
  },
  {
    id: 'extend',
    word: 'Extend',
    pos: 'verb',
    meaning: 'Uzatmak, genişletmek',
    definition: 'To cause something to last longer or be larger.',
    ipa: '/ɪkˈstend/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'extension', pos: 'noun', meaning: 'uzatma/ek' },
      { word: 'extensive', pos: 'adj', meaning: 'geniş/kapsamlı' }
    ],
    synonyms: [
      { word: 'Lengthen', meaning: 'Uzatmak', pos: 'verb' },
      { word: 'Expand', meaning: 'Genişletmek', pos: 'verb' },
      { word: 'Prolong', meaning: 'Süresini uzatmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Shorten', meaning: 'Kısaltmak', pos: 'verb' },
      { word: 'Contract', meaning: 'Daraltmak', pos: 'verb' }
    ],
    collocations: ['extend a deadline', 'extend an invitation', 'extend hours'],
    collocationMeanings: {
      'extend a deadline': 'son teslim tarihini uzatmak',
      'extend an invitation': 'davette bulunmak',
      'extend hours': 'çalışma saatlerini uzatmak'
    },
    examples: ["We're going to extend the back room by two metres."],
    exampleTranslations: ['Arka odayı iki metre genişleteceğiz.']
  },
  {
    id: 'relocate',
    word: 'Relocate',
    pos: 'verb',
    meaning: 'Yerini değiştirmek, taşınmak',
    definition: 'To move to a new place and establish one’s home or business there.',
    ipa: '/ˌriːləʊˈkeɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'relocation', pos: 'noun', meaning: 'taşınma' }
    ],
    synonyms: [
      { word: 'Move', meaning: 'Taşınmak', pos: 'verb' },
      { word: 'Transfer', meaning: 'Nakletmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Stay', meaning: 'Kalmak', pos: 'verb' },
      { word: 'Remain', meaning: 'Durmak', pos: 'verb' }
    ],
    collocations: ['relocate a business', 'decide to relocate', 'forced to relocate'],
    collocationMeanings: {
      'relocate a business': 'işletmeyi taşımak',
      'decide to relocate': 'taşınmaya karar vermek',
      'forced to relocate': 'taşınmaya zorlanmak'
    },
    examples: ['Many companies have relocated their headquarters to the suburbs.'],
    exampleTranslations: ['Pek çok şirket genel merkezini banliyöye taşıdı.']
  },
  {
    id: 'restore',
    word: 'Restore',
    pos: 'verb',
    meaning: 'Restore etmek, eski haline getirmek',
    definition: 'To repair or renovate so as to return it to its original condition.',
    ipa: '/rɪˈstɔː(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'restoration', pos: 'noun', meaning: 'restorasyon' }
    ],
    synonyms: [
      { word: 'Repair', meaning: 'Onarmak', pos: 'verb' },
      { word: 'Renovate', meaning: 'Yenilemek', pos: 'verb' },
      { word: 'Refurbish', meaning: 'Rektefe etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Damage', meaning: 'Zarar vermek', pos: 'verb' },
      { word: 'Ruin', meaning: 'Mahvetmek', pos: 'verb' }
    ],
    collocations: ['restore confidence', 'restore order', 'fully restore'],
    collocationMeanings: {
      'restore confidence': 'güveni yeniden tesis etmek',
      'restore order': 'düzeni sağlamak',
      'fully restore': 'tamamen onarmak'
    },
    examples: ['The campaign is aiming to restore the old library building.'],
    exampleTranslations: ['Kampanya eski kütüphane binasını restore etmeyi hedefliyor.']
  },
  {
    id: 'transform',
    word: 'Transform',
    pos: 'verb',
    meaning: 'Dönüştürmek, şeklini değiştirmek',
    definition: 'To make a thorough or dramatic change in form, appearance, or character.',
    ipa: '/trænsˈfɔːm/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'transformation', pos: 'noun', meaning: 'dönüşüm' },
      { word: 'transformative', pos: 'adj', meaning: 'dönüştürücü' }
    ],
    synonyms: [
      { word: 'Change', meaning: 'Değiştirmek', pos: 'verb' },
      { word: 'Alter', meaning: 'Değişiklik yapmak', pos: 'verb' },
      { word: 'Metamorphose', meaning: 'Başkalaşım geçirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Maintain', meaning: 'Sürdürmek', pos: 'verb' },
      { word: 'Preserve', meaning: 'Korumak', pos: 'verb' }
    ],
    collocations: ['transform into', 'radically transform', 'completely transform'],
    collocationMeanings: {
      'transform into': '...a dönüştürmek',
      'radically transform': 'kökten değiştirmek',
      'completely transform': 'tamamen dönüştürmek'
    },
    examples: ['The factory was transformed into a modern art gallery.'],
    exampleTranslations: ['Fabrika modern bir sanat galerisine dönüştürüldü.']
  },

  // --- UNIT 7: THREE-PART PHRASAL VERBS ---
  {
    id: 'catch_up_with',
    word: 'Catch up with',
    pos: 'phrasal verb',
    meaning: 'Haberleşmek, arayı kapatmak',
    definition: "To talk to someone you have not seen for some time to find out what they have been doing.",
    ipa: '/kætʃ ʌp wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Keep pace with', meaning: 'Ayak uydurmak', pos: 'verb' },
      { word: 'Reach', meaning: 'Ulaşmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['catch up with friends', 'catch up with work', 'catch up with the news'],
    collocationMeanings: {
      'catch up with friends': 'arkadaşlarla dertleşmek/görüşmek',
      'catch up with work': 'işleri yetiştirmek',
      'catch up with the news': 'haberleri takip etmek'
    },
    examples: ["It'll be good to catch up with you both."],
    exampleTranslations: ['İkinizle de hasret gidermek/haberleşmek iyi olacak.']
  },
  {
    id: 'come_up_against',
    word: 'Come up against',
    pos: 'phrasal verb',
    meaning: 'Zorlukla karşılaşmak',
    definition: 'To have to deal with a problem or difficulty.',
    ipa: '/kʌm ʌp əˈɡeɪnst/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Encounter', meaning: 'Karşılaşmak', pos: 'verb' },
      { word: 'Face', meaning: 'Yüzleşmek', pos: 'verb' },
      { word: 'Confront', meaning: 'Karşı karşıya gelmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['come up against a problem', 'come up against opposition', 'come up against walls'],
    collocationMeanings: {
      'come up against a problem': 'bir sorunla karşılaşmak',
      'come up against opposition': 'muhalefetle karşılaşmak',
      'come up against walls': 'engellere takılmak'
    },
    examples: ['We came up against a pretty difficult issue during the project.'],
    exampleTranslations: ['Proje sırasında oldukça zor bir meseleyle karşılaştık.']
  },
  {
    id: 'come_up_with',
    word: 'Come up with',
    pos: 'phrasal verb',
    meaning: 'Fikir üretmek, bulmak',
    definition: 'To suggest or think of an idea or plan.',
    ipa: '/kʌm ʌp wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Devise', meaning: 'Tasarlamak', pos: 'verb' },
      { word: 'Invent', meaning: 'İcat etmek/Üretmek', pos: 'verb' },
      { word: 'Produce', meaning: 'Üretmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['come up with an idea', 'come up with a solution', 'come up with a plan'],
    collocationMeanings: {
      'come up with an idea': 'bir fikir ortaya atmak',
      'come up with a solution': 'çözüm üretmek',
      'come up with a plan': 'bir plan tasarlamak'
    },
    examples: ['Is that the best you can come up with?'],
    exampleTranslations: ['Bulabildiğin en iyi şey bu mu?']
  },
  {
    id: 'cut_down_on',
    word: 'Cut down on',
    pos: 'phrasal verb',
    meaning: 'Azaltmak',
    definition: 'To do or use less of something.',
    ipa: '/kʌt daʊn ɒn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reduce', meaning: 'Azaltmak', pos: 'verb' },
      { word: 'Curtail', meaning: 'Kısmak', pos: 'verb' },
      { word: 'Decrease', meaning: 'Düşürmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Increase', meaning: 'Artırmak', pos: 'verb' }
    ],
    collocations: ['cut down on fatty foods', 'cut down on expenses', 'cut down on smoking'],
    collocationMeanings: {
      'cut down on fatty foods': 'yağlı yiyecekleri azaltmak',
      'cut down on expenses': 'masrafları kısmak',
      'cut down on smoking': 'sigarayı azaltmak'
    },
    examples: ["I'm trying to cut down on sugar for my health."],
    exampleTranslations: ['Sağlığım için şekeri azaltmaya çalışıyorum.']
  },
  {
    id: 'get_around_to',
    word: 'Get around to',
    pos: 'phrasal verb',
    meaning: 'Fırsat bulup yapmak',
    definition: 'To find time to do something that you have intended or would like to do.',
    ipa: '/ɡet əˈraʊnd tu/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Find time for', meaning: 'Vakit ayırmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['finally get around to', 'never get around to', 'hope to get around to'],
    collocationMeanings: {
      'finally get around to': 'sonunda yapmaya vakit bulmak',
      'never get around to': 'bir türlü yapamamak',
      'hope to get around to': 'yapmaya vakit bulmayı ummak'
    },
    examples: ['I never seem to get around to mowing the lawn.'],
    exampleTranslations: ['Çimleri biçmeye bir türlü fırsat bulamıyorum.']
  },
  {
    id: 'get_on_with',
    word: 'Get on with',
    pos: 'phrasal verb',
    meaning: 'Devam etmek, (işe) koyulmak',
    definition: 'To start or continue doing something, especially work.',
    ipa: '/ɡet ɒn wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Continue', meaning: 'Devam etmek', pos: 'verb' },
      { word: 'Proceed with', meaning: '...ile ilerlemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['get on with work', 'get on with life', 'get on with someone'],
    collocationMeanings: {
      'get on with work': 'işe koyulmak',
      'get on with life': 'hayatına devam etmek',
      'get on with someone': 'biriyle iyi geçinmek'
    },
    examples: ['I need to get on with this housework before they arrive.'],
    exampleTranslations: ['Onlar gelmeden önce bu ev işine devam etmem lazım.']
  },
  {
    id: 'keep_up_with',
    word: 'Keep up with',
    pos: 'phrasal verb',
    meaning: 'Hızına yetişmek, geri kalmamak',
    definition: 'To continue to learn about something or move as fast as someone else.',
    ipa: '/kiːp ʌp wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Stay informed', meaning: 'Haberdar kalmak', pos: 'verb' },
      { word: 'Follow', meaning: 'Takip etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['keep up with the trends', 'keep up with technology', 'keep up with the Joneses'],
    collocationMeanings: {
      'keep up with the trends': 'trendleri takip etmek',
      'keep up with technology': 'teknolojiye ayak uydurmak',
      'keep up with the Joneses': 'başkalarından geri kalmamaya çalışmak'
    },
    examples: ["It's difficult to keep up with everything that's happening."],
    exampleTranslations: ['Olup biten her şeye yetişmek/takip etmek zor.']
  },
  {
    id: 'look_up_to',
    word: 'Look up to',
    pos: 'phrasal verb',
    meaning: 'Hayranlık duymak, örnek almak',
    definition: 'To admire and respect someone.',
    ipa: '/lʊk ʌp tu/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Admire', meaning: 'Hayran olmak', pos: 'verb' },
      { word: 'Respect', meaning: 'Saygı duymak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Look down on', meaning: 'Hor görmek', pos: 'verb' },
      { word: 'Despise', meaning: 'Aşağılamak', pos: 'verb' }
    ],
    collocations: ['look up to parents', 'really look up to', 'someone to look up to'],
    collocationMeanings: {
      'look up to parents': 'ebeveynleri örnek almak',
      'really look up to': 'gerçekten hayranlık duymak',
      'someone to look up to': 'örnek alınacak biri'
    },
    examples: ["She's a role model for other players to look up to."],
    exampleTranslations: ['O, diğer oyuncuların örnek alacağı bir rol model.']
  },
  {
    id: 'run_out_of',
    word: 'Run out of',
    pos: 'phrasal verb',
    meaning: 'Bitmek, tükenmek',
    definition: 'To finish, use, or sell all of something, so that there is none left.',
    ipa: '/rʌn aʊt əv/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Exhaust', meaning: 'Tüketmek', pos: 'verb' },
      { word: 'Deplete', meaning: 'Bitirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Abound in', meaning: '...bolca bulunmak', pos: 'verb' }
    ],
    collocations: ['run out of time', 'run out of money', 'run out of steam'],
    collocationMeanings: {
      'run out of time': 'vakti tükenmek',
      'run out of money': 'parası bitmek',
      'run out of steam': 'enerjisi/hızı kesilmek'
    },
    examples: ['They ran out of petrol fifteen miles from the airport.'],
    exampleTranslations: ['Havaalanına on beş mil kala benzinleri bitti.']
  },
  {
    id: 'stand_up_for',
    word: 'Stand up for',
    pos: 'phrasal verb',
    meaning: 'Savunmak, arkasında durmak',
    definition: 'To defend or support a particular idea or a person who is being criticized.',
    ipa: '/stænd ʌp fɔː(r)/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Defend', meaning: 'Savunmak', pos: 'verb' },
      { word: 'Support', meaning: 'Desteklemek', pos: 'verb' },
      { word: 'Champion', meaning: 'Müdafaa etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Yield to', meaning: 'Boyun eğmek', pos: 'verb' }
    ],
    collocations: ['stand up for rights', 'stand up for beliefs', 'stand up for yourself'],
    collocationMeanings: {
      'stand up for rights': 'haklarını savunmak',
      'stand up for beliefs': 'inançlarını savunmak',
      'stand up for yourself': 'kendini savunmak'
    },
    examples: ['Thanks for standing up for me in there.'],
    exampleTranslations: ['Orada beni savunduğun için teşekkürler.']
  },
  {
    id: 'take_care_of',
    word: 'Take care of',
    pos: 'phrasal verb',
    meaning: 'İlgilenmek, bakmak, üstlenmek',
    definition: 'To be responsible for something or someone; to look after.',
    ipa: '/teɪk keə(r) əv/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Look after', meaning: 'Bakmak/İlgilenmek', pos: 'verb' },
      { word: 'Manage', meaning: 'Yönetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Neglect', meaning: 'İhmal etmek', pos: 'verb' }
    ],
    collocations: ['take care of business', 'take care of family', 'take care of the details'],
    collocationMeanings: {
      'take care of business': 'işleri halletmek',
      'take care of family': 'aileye bakmak',
      'take care of the details': 'detaylarla ilgilenmek'
    },
    examples: ['Who will take care of the children while you are away?'],
    exampleTranslations: ['Siz yokken çocuklara kim bakacak?']
  },
  {
    id: 'team_up_with',
    word: 'Team up with',
    pos: 'phrasal verb',
    meaning: 'Takım oluşturmak, işbirliği yapmak',
    definition: 'To join another person or group in order to do something together.',
    ipa: '/tiːm ʌp wɪð/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Collaborate', meaning: 'İşbirliği yapmak', pos: 'verb' },
      { word: 'Join forces', meaning: 'Güçlerini birleştirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Compete with', meaning: 'Rekabet etmek', pos: 'verb' }
    ],
    collocations: ['team up with a friend', 'team up for a project', 'decide to team up'],
    collocationMeanings: {
      'team_up_with_a_friend': 'bir arkadaşla ekip kurmak',
      'team_up_for_a_project': 'bir proje için birleşmek',
      'decide_to_team_up': 'işbirliği yapmaya karar vermek'
    },
    examples: ['We teamed up with a local charity to raise money.'],
    exampleTranslations: ['Para toplamak için yerel bir hayır kurumuyla işbirliği yaptık.']
  },

  // --- UNIT 7: COMPOUND NOUNS ---
  {
    id: 'car_sharing_scheme',
    word: 'Car-sharing scheme',
    pos: 'noun',
    meaning: 'Araç paylaşım sistemi',
    definition: 'A system that helps people to share a car and travel together.',
    ipa: '/ˈkɑː ʃeərɪŋ skiːm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Carpooling', meaning: 'Yolculuk paylaşımı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['join a car-sharing scheme', 'local car-sharing scheme', 'promote car-sharing'],
    collocationMeanings: {
      'join a car-sharing scheme': 'araç paylaşım sistemine katılmak',
      'local car-sharing scheme': 'yerel araç paylaşım sistemi',
      'promote car-sharing': 'araç paylaşımını teşvik etmek'
    },
    examples: ['My company is introducing a car-sharing scheme to reduce carbon footprint.'],
    exampleTranslations: ['Şirketim karbon ayak izini azaltmak için bir araç paylaşım sistemi başlatıyor.']
  },
  {
    id: 'food_bank',
    word: 'Food bank',
    pos: 'noun',
    meaning: 'Gıda bankası',
    definition: 'A place where people in need can collect free food.',
    ipa: '/ˈfuːd bæŋk/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['donate to food bank', 'local food bank', 'food bank usage'],
    collocationMeanings: {
      'donate to food bank': 'gıda bankasına bağış yapmak',
      'local food bank': 'yerel gıda bankası',
      'food bank usage': 'gıda bankası kullanımı'
    },
    examples: ['The city is increasingly reliant on food banks due to inflation.'],
    exampleTranslations: ['Enflasyon nedeniyle şehir giderek daha fazla gıda bankalarına bağımlı hale geliyor.']
  },
  {
    id: 'language_exchange',
    word: 'Language exchange',
    pos: 'noun',
    meaning: 'Dil değişimi/takası',
    definition: 'A method of language learning based on mutual language practicing by learning partners.',
    ipa: '/ˈlæŋɡwɪdʒ ɪksˈtʃeɪndʒ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tandem learning', meaning: 'Eşli öğrenme', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['language exchange partner', 'online language exchange', 'join a language exchange'],
    collocationMeanings: {
      'language exchange partner': 'dil takası ortağı',
      'online language exchange': 'çevrimiçi dil değişimi',
      'join a language exchange': 'dil takasına katılmak'
    },
    examples: ['I’ve met some good friends through international language exchanges.'],
    exampleTranslations: ['Uluslararası dil takasları aracılığıyla bazı iyi arkadaşlarla tanıştım.']
  },
  {
    id: 'street_party',
    word: 'Street party',
    pos: 'noun',
    meaning: 'Sokak partisi',
    definition: 'A social event organized by the residents of a particular street.',
    ipa: '/ˈstriːt ˈpɑːti/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Block party', meaning: 'Mahalle partisi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['organise a street party', 'annual street party', 'huge street party'],
    collocationMeanings: {
      'organise a street party': 'sokak partisi düzenlemek',
      'annual street party': 'geleneksel sokak partisi',
      'huge street party': 'dev sokak partisi'
    },
    examples: ['We had a street party to celebrate the historic victory.'],
    exampleTranslations: ['Tarihi zaferi kutlamak için bir sokak partisi yaptık.']
  },
  {
    id: 'volunteer_worker',
    word: 'Volunteer worker',
    pos: 'noun',
    meaning: 'Gönüllü çalışan',
    definition: 'A person who does work without being paid for it.',
    ipa: '/ˌvɒlənˈtɪə(r) ˈwɜːkə(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'volunteer', pos: 'verb/noun', meaning: 'gönüllü olmak/gönüllü' },
      { word: 'voluntary', pos: 'adj', meaning: 'gönüllü' }
    ],
    synonyms: [
      { word: 'Unpaid helper', meaning: 'Ücretsiz yardımcı', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Salaried employee', meaning: 'Maaşlı çalışan', pos: 'noun' }
    ],
    collocations: ['unpaid volunteer worker', 'trained volunteer worker', 'recruit volunteer workers'],
    collocationMeanings: {
      'unpaid volunteer worker': 'ücretsiz gönüllü çalışan',
      'trained volunteer worker': 'eğitimli gönüllü çalışan',
      'recruit volunteer workers': 'gönüllü çalışan toplamak'
    },
    examples: ['Volunteer workers help distribute food to the homeless shelters.'],
    exampleTranslations: ['Gönüllü çalışanlar evsiz barınaklarına yiyecek dağıtılmasına yardımcı oluyor.']
  },

 // --- UNIT 8: WORD FAMILIES (Group 1: Believe) ---
  {
    id: 'belief',
    word: 'Belief',
    pos: 'noun',
    meaning: 'İnanç, inanış',
    definition: 'The feeling of being certain that something exists or is true.',
    ipa: '/bɪˈliːf/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'believe', pos: 'verb', meaning: 'inanmak' },
      { word: 'believable', pos: 'adj', meaning: 'inanılır' },
      { word: 'believably', pos: 'adverb', meaning: 'inanılır bir şekilde' }
    ],
    synonyms: [
      { word: 'Faith', meaning: 'İnanç/İtimat', pos: 'noun' },
      { word: 'Conviction', meaning: 'Görüş/İnanç', pos: 'noun' },
      { word: 'Opinion', meaning: 'Fikir', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disbelief', meaning: 'İnançsızlık', pos: 'noun' },
      { word: 'Doubt', meaning: 'Şüphe', pos: 'noun' }
    ],
    collocations: ['religious belief', 'personal belief', 'strong belief'],
    collocationMeanings: {
      'religious belief': 'dini inanç',
      'personal belief': 'kişisel inanç',
      'strong belief': 'güçlü inanç'
    },
    examples: ["It is my firm belief that nuclear weapons should be banned."],
    exampleTranslations: ['Nükleer silahların yasaklanması gerektiği benim sarsılmaz inancımdır.']
  },
  {
    id: 'believable',
    word: 'Believable',
    pos: 'adj',
    meaning: 'İnanılır, inandırıcı',
    definition: 'If something is believable, it seems possible that it is true.',
    ipa: '/bɪˈliːvəbl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'believe', pos: 'verb', meaning: 'inanmak' },
      { word: 'belief', pos: 'noun', meaning: 'inanç' }
    ],
    synonyms: [
      { word: 'Credible', meaning: 'Güvenilir/İnanılır', pos: 'adj' },
      { word: 'Plausible', meaning: 'Makul/Akla yatkın', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unbelievable', meaning: 'İnanılmaz', pos: 'adj' },
      { word: 'Incredible', meaning: 'Akıl almaz', pos: 'adj' }
    ],
    collocations: ['hardly believable', 'believable character', 'make it believable'],
    collocationMeanings: {
      'hardly believable': 'pek inandırıcı olmayan',
      'believable character': 'inandırıcı karakter',
      'make it believable': 'inandırıcı kılmak'
    },
    examples: ['I enjoyed the story, but the ending was not very believable.'],
    exampleTranslations: ['Hikayeden keyif aldım ama sonu pek inandırıcı değildi.']
  },

  // --- UNIT 8: WORD FAMILIES (Group 2: Hero & Myth) ---
  {
    id: 'heroic',
    word: 'Heroic',
    pos: 'adj',
    meaning: 'Kahramanca',
    definition: 'Very brave or involving extreme effort.',
    ipa: '/həˈrəʊɪk/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'hero', pos: 'noun', meaning: 'kahraman' },
      { word: 'heroically', pos: 'adverb', meaning: 'kahramanca' },
      { word: 'heroine', pos: 'noun', meaning: 'kadın kahraman' }
    ],
    synonyms: [
      { word: 'Courageous', meaning: 'Cesur', pos: 'adj' },
      { word: 'Valiant', meaning: 'Yiğitçe', pos: 'adj' },
      { word: 'Fearless', meaning: 'Korkusuz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Cowardly', meaning: 'Korkakça', pos: 'adj' },
      { word: 'Timid', meaning: 'Ürkek', pos: 'adj' }
    ],
    collocations: ['heroic effort', 'heroic act', 'heroic failure'],
    collocationMeanings: {
      'heroic effort': 'kahramanca çaba',
      'heroic act': 'kahramanca eylem',
      'heroic failure': 'onurlu başarısızlık'
    },
    examples: ['The medical staff do heroic work under very difficult conditions.'],
    exampleTranslations: ['Sağlık personeli çok zor koşullar altında kahramanca işler çıkarıyor.']
  },
  {
    id: 'mythical',
    word: 'Mythical',
    pos: 'adj',
    meaning: 'Efsanevi, mitolojik',
    definition: 'Existing only in myths or imagination; not real.',
    ipa: '/ˈmɪθɪkl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'myth', pos: 'noun', meaning: 'efsane/mit' },
      { word: 'mythology', pos: 'noun', meaning: 'mitoloji' }
    ],
    synonyms: [
      { word: 'Legendary', meaning: 'Efsanevi', pos: 'adj' },
      { word: 'Fabled', meaning: 'Masalsı', pos: 'adj' },
      { word: 'Imaginary', meaning: 'Hayali', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Real', meaning: 'Gerçek', pos: 'adj' },
      { word: 'Actual', meaning: 'Asıl/Gerçek', pos: 'adj' }
    ],
    collocations: ['mythical creature', 'mythical island', 'mythical beast'],
    collocationMeanings: {
      'mythical creature': 'mitolojik yaratık',
      'mythical island': 'efsanevi ada',
      'mythical beast': 'efsanevi canavar'
    },
    examples: ['The dragon is a mythical creature in many cultures.'],
    exampleTranslations: ['Ejderha pek çok kültürde mitolojik bir yaratıktır.']
  },

  // --- UNIT 8: WORD FAMILIES (Group 3: Represent & Tradition) ---
  {
    id: 'representation',
    word: 'Representation',
    pos: 'noun',
    meaning: 'Temsil, canlandırma',
    definition: 'The way that someone or something is shown or described.',
    ipa: '/ˌreprɪzenˈteɪʃn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'represent', pos: 'verb', meaning: 'temsil etmek' },
      { word: 'representative', pos: 'noun/adj', meaning: 'temsilci' }
    ],
    synonyms: [
      { word: 'Portrayal', meaning: 'Betimleme', pos: 'noun' },
      { word: 'Depiction', meaning: 'Tasvir', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['media representation', 'visual representation', 'legal representation'],
    collocationMeanings: {
      'media representation': 'medyada temsil edilme',
      'visual representation': 'görsel temsil',
      'legal representation': 'yasal temsil (avukatlık)'
    },
    examples: ['The film was an accurate representation of life in the 1960s.'],
    exampleTranslations: ['Film, 1960’lardaki hayatın doğru bir canlandırmasıydı.']
  },
  {
    id: 'traditionally',
    word: 'Traditionally',
    pos: 'adverb',
    meaning: 'Geleneksel olarak',
    definition: 'According to tradition; in a traditional way.',
    ipa: '/trəˈdɪʃənəli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'tradition', pos: 'noun', meaning: 'gelenek' },
      { word: 'traditional', pos: 'adj', meaning: 'geleneksel' }
    ],
    synonyms: [
      { word: 'Conventionally', meaning: 'Geleneksel şekilde', pos: 'adverb' },
      { word: 'Customarily', meaning: 'Alışılagelmiş şekilde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Unconventionally', meaning: 'Alışılmadık şekilde', pos: 'adverb' },
      { word: 'Modernly', meaning: 'Modern bir şekilde', pos: 'adverb' }
    ],
    collocations: ['traditionally made', 'traditionally associated', 'traditionally used'],
    collocationMeanings: {
      'traditionally made': 'geleneksel yöntemle yapılmış',
      'traditionally associated': 'geleneksel olarak ilişkilendirilen',
      'traditionally used': 'geleneksel olarak kullanılan'
    },
    examples: ['The bride was dressed traditionally in white.'],
    exampleTranslations: ['Gelin geleneksel bir biçimde beyaz giyinmişti.']
  },

  // --- UNIT 8: EASILY CONFUSED SENSE VERBS ---
  {
    id: 'feel_sense',
    word: 'Feel',
    pos: 'verb',
    meaning: 'Hissetmek, dokunmak',
    definition: 'To touch something in order to examine it; to experience a physical or emotional sensation.',
    ipa: '/fiːl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'feeling', pos: 'noun', meaning: 'his' }
    ],
    synonyms: [
      { word: 'Sense', meaning: 'Algılamak', pos: 'verb' },
      { word: 'Perceive', meaning: 'Sezmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['feel like', 'feel free', 'feel guilty'],
    collocationMeanings: {
      'feel like': 'gibi hissetmek',
      'feel free': 'çekinmemek',
      'feel guilty': 'suçlu hissetmek'
    },
    examples: ['She felt his head to see if he had a temperature.'],
    exampleTranslations: ['Ateşi var mı diye kafasına dokundu.']
  },
  {
    id: 'listen_sense',
    word: 'Listen',
    pos: 'verb',
    meaning: 'Dinlemek',
    definition: 'To give attention to someone or something in order to hear them.',
    ipa: '/ˈlɪsn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'listener', pos: 'noun', meaning: 'dinleyici' }
    ],
    synonyms: [
      { word: 'Attend', meaning: 'Kulak vermek', pos: 'verb' },
      { word: 'Heed', meaning: 'Dinlemek/Dikkate almak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['listen carefully', 'listen to music', 'listen out for'],
    collocationMeanings: {
      'listen carefully': 'dikkatlice dinlemek',
      'listen to music': 'müzik dinlemek',
      'listen out for': '...için kulak kabartmak'
    },
    examples: ['I listen to a podcast about science every morning.'],
    exampleTranslations: ['Her sabah bilim hakkında bir podcast dinliyorum.']
  },
  {
    id: 'watch_sense',
    word: 'Watch',
    pos: 'verb',
    meaning: 'İzlemek',
    definition: 'To look at something for a period of time, especially something that is changing or moving.',
    ipa: '/wɒtʃ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'watcher', pos: 'noun', meaning: 'izleyici' },
      { word: 'watchful', pos: 'adj', meaning: 'uyanık/dikkatli' }
    ],
    synonyms: [
      { word: 'Observe', meaning: 'Gözlemlemek', pos: 'verb' },
      { word: 'View', meaning: 'İzlemek/Bakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Overlook', meaning: 'Gözden kaçırmak', pos: 'verb' }
    ],
    collocations: ['watch out', 'watch a movie', 'keep a watch'],
    collocationMeanings: {
      'watch out': 'dikkat etmek',
      'watch a movie': 'film izlemek',
      'keep a watch': 'gözetlemek'
    },
    examples: ['I’m going to stay in and watch TV tonight.'],
    exampleTranslations: ['Bu gece evde kalıp TV izleyeceğim.']
  },

  // --- UNIT 8: CRIME ---
  {
    id: 'arrest',
    word: 'Arrest',
    pos: 'verb/noun',
    meaning: 'Tutuklamak, tutuklama',
    definition: 'When the police take someone away because they believe they have committed a crime.',
    ipa: '/əˈrest/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Apprehend', meaning: 'Yakalayıp tutuklamak', pos: 'verb' },
      { word: 'Detain', meaning: 'Gözaltına almak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Release', meaning: 'Serbest bırakmak', pos: 'verb' },
      { word: 'Free', meaning: 'Özgür bırakmak', pos: 'verb' }
    ],
    collocations: ['under arrest', 'make an arrest', 'house arrest'],
    collocationMeanings: {
      'under arrest': 'tutuklu',
      'make an arrest': 'tutuklama yapmak',
      'house arrest': 'ev hapsi'
    },
    examples: ['The police arrested two suspects in connection with the robbery.'],
    exampleTranslations: ['Polis soygunla bağlantılı iki şüpheliyi tutukladı.']
  },
  {
    id: 'blackmail_crime',
    word: 'Blackmail',
    pos: 'verb/noun',
    meaning: 'Şantaj yapmak, şantaj',
    definition: 'To threaten to reveal a secret about someone unless they give you money.',
    ipa: '/ˈblækmeɪl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'blackmailer', pos: 'noun', meaning: 'şantajcı' }
    ],
    synonyms: [
      { word: 'Extort', meaning: 'Gasp etmek/Zorla almak', pos: 'verb' },
      { word: 'Threaten', meaning: 'Tehdit etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['emotional blackmail', 'attempted blackmail', 'pay blackmail'],
    collocationMeanings: {
      'emotional blackmail': 'duygusal şantaj',
      'attempted blackmail': 'şantaj girişimi',
      'pay blackmail': 'şantaj bedeli ödemek'
    },
    examples: ['They used this information to blackmail him for years.'],
    exampleTranslations: ['Bu bilgiyi ona yıllarca şantaj yapmak için kullandılar.']
  },
  {
    id: 'bribe',
    word: 'Bribe',
    pos: 'verb/noun',
    meaning: 'Rüşvet vermek, rüşvet',
    definition: 'To give someone money or a gift to persuade them to do something dishonest.',
    ipa: '/braɪb/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'bribery', pos: 'noun', meaning: 'rüşvetçilik' }
    ],
    synonyms: [
      { word: 'Buy off', meaning: 'Rüşvetle susturmak', pos: 'verb' },
      { word: 'Corrupt', meaning: 'Yozlaştırmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['take a bribe', 'offer a bribe', 'accept a bribe'],
    collocationMeanings: {
      'take a bribe': 'rüşvet almak',
      'offer a bribe': 'rüşvet teklif etmek',
      'accept a bribe': 'rüşvet kabul etmek'
    },
    examples: ['They tried to bribe the city officials to get the contract.'],
    exampleTranslations: ['Sözleşmeyi almak için şehir yetkililerine rüşvet vermeye çalıştılar.']
  },
  {
    id: 'burglary',
    word: 'Burglary',
    pos: 'noun',
    meaning: 'Hırsızlık (binaya girerek)',
    definition: 'The crime of illegally entering a building and stealing things.',
    ipa: '/ˈbɜːɡləri/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'burglar', pos: 'noun', meaning: 'hırsız' },
      { word: 'burgle', pos: 'verb', meaning: 'soymak' }
    ],
    synonyms: [
      { word: 'Theft', meaning: 'Hırsızlık', pos: 'noun' },
      { word: 'Housebreaking', meaning: 'Ev soyma', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['commit burglary', 'burglary rate', 'report a burglary'],
    collocationMeanings: {
      'commit burglary': 'hırsızlık yapmak',
      'burglary rate': 'hırsızlık oranı',
      'report a burglary': 'hırsızlığı bildirmek'
    },
    examples: ['She was jailed for nine months for burglary.'],
    exampleTranslations: ['Hırsızlıktan dolayı dokuz ay hapse mahkum edildi.']
  },
  {
    id: 'fraud',
    word: 'Fraud',
    pos: 'noun',
    meaning: 'Dolandırıcılık, sahtekarlık',
    definition: 'The crime of getting money by deceiving people.',
    ipa: '/frɔːd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'fraudulent', pos: 'adj', meaning: 'dolandırıcı/sahte' }
    ],
    synonyms: [
      { word: 'Deception', meaning: 'Aldatılma', pos: 'noun' },
      { word: 'Scam', meaning: 'Tezgah/Dolap', pos: 'noun' },
      { word: 'Trickery', meaning: 'Hilekarlık', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Honesty', meaning: 'Dürüstlük', pos: 'noun' },
      { word: 'Integrity', meaning: 'Doğruluk/Dürüstlük', pos: 'noun' }
    ],
    collocations: ['credit card fraud', 'identity fraud', 'commit fraud'],
    collocationMeanings: {
      'credit card fraud': 'kredi kartı dolandırıcılığı',
      'identity fraud': 'kimlik sahtekarlığı',
      'commit fraud': 'dolandırıcılık yapmak'
    },
    examples: ['Police are investigating a complex fraud case involving millions.'],
    exampleTranslations: ['Polis milyonlarca liralık karmaşık bir dolandırıcılık vakasını araştırıyor.']
  },
  {
    id: 'identity_theft',
    word: 'Identity theft',
    pos: 'noun',
    meaning: 'Kimlik hırsızlığı',
    definition: 'Stealing someone’s personal information to use their bank account or credit cards.',
    ipa: '/aɪˈdentəti θeft/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Identity fraud', meaning: 'Kimlik dolandırıcılığı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['victim of identity theft', 'prevent identity theft', 'report identity theft'],
    collocationMeanings: {
      'victim of identity theft': 'kimlik hırsızlığı mağduru',
      'prevent identity theft': 'kimlik hırsızlığını önlemek',
      'report identity theft': 'kimlik hırsızlığını bildirmek'
    },
    examples: ['New laws aim to protect consumers from identity theft.'],
    exampleTranslations: ['Yeni yasalar tüketicileri kimlik hırsızlığından korumayı hedefliyor.']
  },
  {
    id: 'innocent',
    word: 'Innocent',
    pos: 'adj',
    meaning: 'Masum, suçsuz',
    definition: 'Not guilty of a particular crime.',
    ipa: '/ˈɪnəsnt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'innocence', pos: 'noun', meaning: 'masumiyet' }
    ],
    synonyms: [
      { word: 'Guiltless', meaning: 'Suçsuz', pos: 'adj' },
      { word: 'Blameless', meaning: 'Kusursuz/Suçlanamaz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Guilty', meaning: 'Suçlu', pos: 'adj' },
      { word: 'Criminal', meaning: 'Suçlu/Sabıkalı', pos: 'adj' }
    ],
    collocations: ['prove innocent', 'innocent victim', 'presumed innocent'],
    collocationMeanings: {
      'prove innocent': 'suçsuzluğunu kanıtlamak',
      'innocent victim': 'masum kurban',
      'presumed innocent': 'masum sayılan'
    },
    examples: ['He claimed he was innocent, despite the evidence against him.'],
    exampleTranslations: ['Aleyhindeki kanıtlara rağmen masum olduğunu iddia etti.']
  },
  {
    id: 'investigate',
    word: 'Investigate',
    pos: 'verb',
    meaning: 'Araştırmak, soruşturmak',
    definition: 'To examine a crime, problem, or statement to discover the truth.',
    ipa: '/ɪnˈvestɪɡeɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'investigation', pos: 'noun', meaning: 'soruşturma' },
      { word: 'investigator', pos: 'noun', meaning: 'müfettiş/dedektif' }
    ],
    synonyms: [
      { word: 'Examine', meaning: 'İncelemek', pos: 'verb' },
      { word: 'Probe', meaning: 'Derinlemesine araştırmak', pos: 'verb' },
      { word: 'Inspect', meaning: 'Denetlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['thoroughly investigate', 'investigate a crime', 'investigate a case'],
    collocationMeanings: {
      'thoroughly investigate': 'derinlemesine araştırmak',
      'investigate a crime': 'suçu soruşturmak',
      'investigate a case': 'vakayı incelemek'
    },
    examples: ['A journalist came to investigate the rumours about the scandal.'],
    exampleTranslations: ['Bir gazeteci skandalla ilgili söylentileri araştırmak için geldi.']
  },
  {
    id: 'punishment',
    word: 'Punishment',
    pos: 'noun',
    meaning: 'Ceza',
    definition: 'The act of punishing someone or of being punished.',
    ipa: '/ˈpʌnɪʃmənt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'punish', pos: 'verb', meaning: 'cezalandırmak' },
      { word: 'punishable', pos: 'adj', meaning: 'cezalandırılabilir' }
    ],
    synonyms: [
      { word: 'Penalty', meaning: 'Ceza/Yaptırım', pos: 'noun' },
      { word: 'Sanction', meaning: 'Yaptırım', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Reward', meaning: 'Ödül', pos: 'noun' },
      { word: 'Pardon', meaning: 'Af', pos: 'noun' }
    ],
    collocations: ['capital punishment', 'severe punishment', 'escape punishment'],
    collocationMeanings: {
      'capital punishment': 'idam cezası',
      'severe punishment': 'ağır ceza',
      'escape punishment': 'cezadan kurtulmak'
    },
    examples: ['Imprisonment is not always the best punishment for small crimes.'],
    exampleTranslations: ['Küçük suçlar için hapis cezası her zaman en iyi ceza değildir.']
  },
  {
    id: 'robbery',
    word: 'Robbery',
    pos: 'noun',
    meaning: 'Soygun',
    definition: 'The crime of stealing from a person or place, often using threats or violence.',
    ipa: '/ˈrɒbəri/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'rob', pos: 'verb', meaning: 'soymak' },
      { word: 'robber', pos: 'noun', meaning: 'soyguncu' }
    ],
    synonyms: [
      { word: 'Heist', meaning: 'Büyük soygun', pos: 'noun' },
      { word: 'Theft', meaning: 'Hırsızlık', pos: 'noun' },
      { word: 'Larceny', meaning: 'Hırsızlık', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['armed robbery', 'bank robbery', 'daylight robbery'],
    collocationMeanings: {
      'armed robbery': 'silahlı soygun',
      'bank robbery': 'banka soygunu',
      'daylight robbery': 'gün ortası soygunu / fahiş fiyat'
    },
    examples: ['Over £10,000 was stolen in the bank robbery.'],
    exampleTranslations: ['Banka soygunu sırasında 10.000 sterlinden fazla para çalındı.']
  },
  {
    id: 'sentence_crime',
    word: 'Sentence',
    pos: 'verb/noun',
    meaning: 'Mahkum etmek, ceza vermek, mahkumiyet',
    definition: 'When a judge officially states what someone’s punishment will be.',
    ipa: '/ˈsentəns/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Condemn', meaning: 'Mahkum etmek', pos: 'verb' },
      { word: 'Convict', meaning: 'Suçlu bulmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Acquit', meaning: 'Beraat ettirmek', pos: 'verb' }
    ],
    collocations: ['life sentence', 'prison sentence', 'death sentence'],
    collocationMeanings: {
      'life sentence': 'müebbet hapis',
      'prison sentence': 'hapis cezası',
      'death sentence': 'ölüm cezası'
    },
    examples: ['He was sentenced to 15 years in prison for his crimes.'],
    exampleTranslations: ['Suçlarından dolayı 15 yıl hapis cezasına çarptırıldı.']
  },
  {
    id: 'witness',
    word: 'Witness',
    pos: 'noun/verb',
    meaning: 'Tanık, şahit, şahit olmak',
    definition: 'A person who sees an event, typically a crime or accident, take place.',
    ipa: '/ˈwɪtnəs/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Observer', meaning: 'Gözlemci', pos: 'noun' },
      { word: 'Onlooker', meaning: 'İzleyici/Tanık', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['eye witness', 'witness a crime', 'reliable witness'],
    collocationMeanings: {
      'eye witness': 'görgü tanığı',
      'witness a crime': 'suça tanık olmak',
      'reliable witness': 'güvenilir tanık'
    },
    examples: ['A witness reported seeing two men leave the building.'],
    exampleTranslations: ['Bir tanık, iki adamın binadan ayrıldığını gördüğünü bildirdi.']
  },

  // --- DEPENDENT PREPOSITIONS: VERBS (UNIT 9) ---
  {
    id: 'adhere_to',
    word: 'Adhere to',
    pos: 'verb + preposition',
    meaning: 'Bağlı kalmak, uymak (kural/kanun)',
    definition: 'To obey a rule, law, agreement etc.',
    ipa: '/ədˈhɪə(r) tu/',
    examples: ['You must strictly adhere to the terms of the contract.'],
    exampleTranslations: ['Sözleşme şartlarına sıkı sıkıya uymalısınız.'],
    level: 'upper-intermediate',
    collocations: ['adhere to rules', 'adhere to standards', 'strictly adhere to'],
    collocationMeanings: {
      'adhere to rules': 'kurallara uymak',
      'adhere to standards': 'standartlara bağlı kalmak',
      'strictly adhere to': 'sıkı sıkıya bağlı kalmak'
    }
  },
  {
    id: 'apologise_for',
    word: 'Apologise for',
    pos: 'verb + preposition',
    meaning: '...için özür dilemek',
    definition: 'To tell someone that you are sorry for doing something wrong.',
    ipa: '/əˈpɒlədʒaɪz fɔː(r)/',
    examples: ['She apologised for arriving so late.'],
    exampleTranslations: ['Çok geç kaldığı için özür diledi.'],
    level: 'upper-intermediate',
    collocations: ['apologise for delay', 'apologise for mistake', 'sincerely apologise for'],
    collocationMeanings: {
      'apologise for delay': 'gecikme için özür dilemek',
      'apologise for mistake': 'hata için özür dilemek',
      'sincerely apologise for': 'içtenlikle özür dilemek'
    }
  },
  {
    id: 'argue_about',
    word: 'Argue about',
    pos: 'verb + preposition',
    meaning: '...hakkında tartışmak',
    definition: 'To speak to each other in an angry way because you disagree.',
    ipa: "/ˈɑː(r)ɡju əˈbaʊt/",
    examples: ['They used to argue about who would pick up the kids.'],
    exampleTranslations: ['Çocukları kimin alacağı konusunda tartışırlardı.'],
    level: 'upper-intermediate',
    collocations: ['argue about money', 'argue about politics', 'argue about details'],
    collocationMeanings: {
      'argue about money': 'para hakkında tartışmak',
      'argue about politics': 'siyaset üzerine tartışmak',
      'argue about details': 'ayrıntılar için tartışmak'
    }
  },
  {
    id: 'complain_about',
    word: 'Complain about',
    pos: 'verb + preposition',
    meaning: '...hakkında şikayet etmek',
    definition: 'To say that you are not satisfied with something.',
    ipa: '/kəmˈpleɪn əˈbaʊt/',
    examples: ['What are you complaining about?'],
    exampleTranslations: ['Neden şikayet ediyorsun?'],
    level: 'upper-intermediate',
    collocations: ['complain about noise', 'complain about service', 'bitterly complain about'],
    collocationMeanings: {
      'complain about noise': 'gürültüden şikayet etmek',
      'complain about service': 'hizmetten şikayetçi olmak',
      'bitterly complain about': 'acı acı şikayet etmek'
    }
  },
  {
    id: 'consent_to',
    word: 'Consent to',
    pos: 'verb + preposition',
    meaning: 'Razı olmak, onay vermek',
    definition: 'To give permission to do something.',
    ipa: '/kənˈsent tu/',
    examples: ['The parents would not consent to the treatment.'],
    exampleTranslations: ['Ebeveynler tedaviye onay vermedi.'],
    level: 'upper-intermediate',
    collocations: ['written consent to', 'refuse consent to', 'informed consent to'],
    collocationMeanings: {
      'written consent to': 'yazılı onay',
      'refuse consent to': 'onay vermeyi reddetmek',
      'informed consent to': 'bilgilendirilmiş onam'
    }
  },
  {
    id: 'insist_on',
    word: 'Insist on',
    pos: 'verb + preposition',
    meaning: '...da ısrar etmek',
    definition: 'To say very firmly that something must happen or must be done.',
    ipa: '/ɪnˈsɪst ɒn/',
    examples: ['Some companies insist on regular medical checks.'],
    exampleTranslations: ['Bazı şirketler personelin düzenli sağlık kontrolünden geçmesinde ısrar ediyor.'],
    level: 'upper-intermediate',
    collocations: ['insist on payment', 'insist on quality', 'quietly insist on'],
    collocationMeanings: {
      'insist on payment': 'ödemede ısrar etmek',
      'insist on quality': 'kalitede diretmek',
      'quietly insist on': 'sessizce ısrar etmek'
    }
  },
  {
    id: 'thank_for',
    word: 'Thank for',
    pos: 'verb + preposition',
    meaning: '...için teşekkür etmek',
    definition: 'To tell someone that you are grateful for something.',
    ipa: '/θæŋk fɔː(r)/',
    examples: ["Firstly, I'd like to thank you all for coming here today."],
    exampleTranslations: ['Öncelikle bugün buraya geldiğiniz için hepinize teşekkür etmek isterim.'],
    level: 'upper-intermediate',
    collocations: ['thank for support', 'thank for help', 'thank for hospitality'],
    collocationMeanings: {
      'thank for support': 'destek için teşekkür etmek',
      'thank for help': 'yardım için teşekkür etmek',
      'thank for hospitality': 'misafirperverlik için teşekkür etmek'
    }
  },

  // --- UNIT 9: DEPENDENT PREPOSITIONS (VERBS) ---
  {
    id: 'adhere_to',
    word: 'Adhere to',
    pos: 'verb + prep',
    meaning: 'Bağlı kalmak, uymak (kural/kanun)',
    definition: 'To obey a rule, law, agreement, or particular set of beliefs.',
    ipa: '/ədˈhɪə(r) tu/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'adherence', pos: 'noun', meaning: 'bağlılık/uyma' },
      { word: 'adherent', pos: 'noun', meaning: 'taraftar/bağlı kimse' }
    ],
    synonyms: [
      { word: 'Obey', meaning: 'İtaat etmek', pos: 'verb' },
      { word: 'Comply with', meaning: '...a uymak', pos: 'verb' },
      { word: 'Follow', meaning: 'Takip etmek/Uymak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Flout', meaning: 'Küçümsemek/Uymamak', pos: 'verb' },
      { word: 'Violate', meaning: 'İhlal etmek', pos: 'verb' },
      { word: 'Disregard', meaning: 'Göz ardı etmek', pos: 'verb' }
    ],
    collocations: ['strictly adhere to', 'adhere to standards', 'adhere to a diet'],
    collocationMeanings: {
      'strictly adhere to': 'sıkı sıkıya bağlı kalmak',
      'adhere to standards': 'standartlara uymak',
      'adhere to a diet': 'diyete sadık kalmak'
    },
    examples: ['College points out that students must strictly adhere to the rules.'],
    exampleTranslations: ['Kolej, öğrencilerin kurallara sıkı sıkıya uyması gerektiğini belirtiyor.']
  },
  {
    id: 'apologise_for',
    word: 'Apologise for',
    pos: 'verb + prep',
    meaning: '...için özür dilemek',
    definition: 'To tell someone that you are sorry for having done something that has caused problems.',
    ipa: '/əˈpɒlədʒaɪz fɔː(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'apology', pos: 'noun', meaning: 'özür' },
      { word: 'apologetic', pos: 'adj', meaning: 'özür dileyen/pişman' }
    ],
    synonyms: [
      { word: 'Express regret', meaning: 'Pişmanlık belirtmek', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['sincerely apologise', 'apologise profusely', 'apologise for delay'],
    collocationMeanings: {
      'sincerely apologise': 'içtenlikle özür dilemek',
      'apologise profusely': 'defalarca/bolca özür dilemek',
      'apologise for delay': 'gecikme için özür dilemek'
    },
    examples: ['I must apologise for the delay in replying to your letter.'],
    exampleTranslations: ['Mektubunuza cevap vermekte geciktiğim için özür dilerim.']
  },
  {
    id: 'argue_about',
    word: 'Argue about',
    pos: 'verb + prep',
    meaning: '...hakkında tartışmak',
    definition: 'To speak angrily to someone because you disagree with them about something.',
    ipa: "/ˈɑː(r)ɡju əˈbaʊt/",
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'argument', pos: 'noun', meaning: 'tartışma/sav' },
      { word: 'arguable', pos: 'adj', meaning: 'tartışılabilir' }
    ],
    synonyms: [
      { word: 'Dispute', meaning: 'Tartışmak/Çekişmek', pos: 'verb' },
      { word: 'Quarrel', meaning: 'Ağız kavgası etmek', pos: 'verb' },
      { word: 'Bicker', meaning: 'Atışmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Agree', meaning: 'Anlaşmak', pos: 'verb' },
      { word: 'Concur', meaning: 'Aynı fikirde olmak', pos: 'verb' }
    ],
    collocations: ['argue about money', 'constantly argue', 'argue about details'],
    collocationMeanings: {
      'argue about money': 'para hakkında tartışmak',
      'constantly argue': 'sürekli tartışmak',
      'argue about details': 'ayrıntılar üzerine tartışmak'
    },
    examples: ['They are always arguing about whose turn it is to do the washing up.'],
    exampleTranslations: ['Bulaşıkları yıkama sırasının kimde olduğu konusunda her zaman tartışıyorlar.']
  },
  {
    id: 'complain_about',
    word: 'Complain about',
    pos: 'verb + prep',
    meaning: '...hakkında şikayet etmek',
    definition: 'To say that something is wrong or not satisfactory.',
    ipa: '/kəmˈpleɪn əˈbaʊt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'complaint', pos: 'noun', meaning: 'şikayet' }
    ],
    synonyms: [
      { word: 'Grumble', meaning: 'Söylenmek/Dırdır etmek', pos: 'verb' },
      { word: 'Whine', meaning: 'Mızmızlanmak', pos: 'verb' },
      { word: 'Moan', meaning: 'Sızlanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Praise', meaning: 'Övmek', pos: 'verb' },
      { word: 'Applaud', meaning: 'Alkışlamak/Takdir etmek', pos: 'verb' }
    ],
    collocations: ['bitterly complain', 'complain about noise', 'complain about service'],
    collocationMeanings: {
      'bitterly complain': 'acı acı şikayet etmek',
      'complain about noise': 'gürültüden şikayet etmek',
      'complain about service': 'hizmetten şikayet etmek'
    },
    examples: ['Lots of people have complained about the noise.'],
    exampleTranslations: ['Pek çok kişi gürültüden şikayetçi oldu.']
  },
  {
    id: 'consent_to',
    word: 'Consent to',
    pos: 'verb + prep',
    meaning: 'Razı olmak, onay vermek',
    definition: 'To agree to do something, or to allow someone to do something.',
    ipa: '/kənˈsent tu/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'consent', pos: 'noun', meaning: 'rıza/izin' },
      { word: 'consensual', pos: 'adj', meaning: 'rızaya dayalı' }
    ],
    synonyms: [
      { word: 'Agree to', meaning: '...a razı olmak', pos: 'verb' },
      { word: 'Permit', meaning: 'İzin vermek', pos: 'verb' },
      { word: 'Assent', meaning: 'Onaylamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Refuse', meaning: 'Reddetmek', pos: 'verb' },
      { word: 'Deny', meaning: 'İnkar etmek/Reddetmek', pos: 'verb' },
      { word: 'Object', meaning: 'İtiraz etmek', pos: 'verb' }
    ],
    collocations: ['written consent', 'informed consent', 'refuse to consent'],
    collocationMeanings: {
      'written consent': 'yazılı onay',
      'informed consent': 'bilgilendirilmiş onam',
      'refuse to consent': 'onay vermeyi reddetmek'
    },
    examples: ['Very few people would consent to have their names published.'],
    exampleTranslations: ['Çok az kişi isimlerinin yayınlanmasına razı olur.']
  },
  {
    id: 'insist_on',
    word: 'Insist on',
    pos: 'verb + prep',
    meaning: '...da ısrar etmek',
    definition: 'To say or show that you believe that something is necessary or very important.',
    ipa: '/ɪnˈsɪst ɒn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'insistence', pos: 'noun', meaning: 'ısrar' },
      { word: 'insistent', pos: 'adj', meaning: 'ısrarcı' }
    ],
    synonyms: [
      { word: 'Demand', meaning: 'Talep etmek', pos: 'verb' },
      { word: 'Persist in', meaning: '...da sebat etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Give up', meaning: 'Vazgeçmek', pos: 'verb' },
      { word: 'Relent', meaning: 'Yumuşamak/Vazgeçmek', pos: 'verb' }
    ],
    collocations: ['insist on quality', 'insist on payment', 'quietly insist'],
    collocationMeanings: {
      'insist on quality': 'kalitede ısrar etmek',
      'insist on payment': 'ödemede ısrar etmek',
      'quietly insist': 'sessizce ısrar etmek'
    },
    examples: ['She insisted on seeing her lawyer before saying anything.'],
    exampleTranslations: ['Bir şey söylemeden önce avukatını görmekte ısrar etti.']
  },
  {
    id: 'thank_for',
    word: 'Thank for',
    pos: 'verb + prep',
    meaning: '...için teşekkür etmek',
    definition: 'To express appreciation to someone for something they have done.',
    ipa: '/θæŋk fɔː(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'thankful', pos: 'adj', meaning: 'minnettar' },
      { word: 'thanks', pos: 'noun', meaning: 'teşekkür' }
    ],
    synonyms: [
      { word: 'Express gratitude', meaning: 'Minnet sunmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['thank for support', 'thank for hospitality', 'thank for help'],
    collocationMeanings: {
      'thank for support': 'destek için teşekkür etmek',
      'thank for hospitality': 'misafirperverlik için teşekkür etmek',
      'thank for help': 'yardım için teşekkür etmek'
    },
    examples: ['I must thank you all for your hard work on this project.'],
    exampleTranslations: ['Bu projedeki sıkı çalışmanız için hepinize teşekkür etmeliyim.']
  },

  // --- UNIT 9: SCIENCE ---
  {
    id: 'analysis_science',
    word: 'Analysis',
    pos: 'noun',
    meaning: 'Analiz, çözümleme',
    definition: 'The process of studying or examining something in an organized way to learn more about it.',
    ipa: '/əˈnæləsɪs/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'analyze', pos: 'verb', meaning: 'analiz etmek' },
      { word: 'analytical', pos: 'adj', meaning: 'analitik' }
    ],
    synonyms: [
      { word: 'Examination', meaning: 'İnceleme', pos: 'noun' },
      { word: 'Investigation', meaning: 'Araştırma', pos: 'noun' },
      { word: 'Scrutiny', meaning: 'Dikkatli inceleme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Synthesis', meaning: 'Sentez', pos: 'noun' }
    ],
    collocations: ['data analysis', 'statistical analysis', 'detailed analysis'],
    collocationMeanings: {
      'data analysis': 'veri analizi',
      'statistical analysis': 'istatistiksel analiz',
      'detailed analysis': 'detaylı analiz'
    },
    examples: ['A sample of water was sent for analysis.'],
    exampleTranslations: ['Analiz için bir su örneği gönderildi.']
  },
  {
    id: 'data_science',
    word: 'Data',
    pos: 'noun',
    meaning: 'Veri',
    definition: 'Information, especially facts or numbers, collected to be examined and used to help with making decisions.',
    ipa: '/ˈdeɪtə/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Information', meaning: 'Bilgi', pos: 'noun' },
      { word: 'Statistics', meaning: 'İstatistik', pos: 'noun' },
      { word: 'Input', meaning: 'Girdi/Veri', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['raw data', 'collect data', 'process data'],
    collocationMeanings: {
      'raw data': 'işlenmemiş veri',
      'collect data': 'veri toplamak',
      'process data': 'veriyi işlemek'
    },
    examples: ['The data was collected by various researchers over 10 years.'],
    exampleTranslations: ['Veriler 10 yıl boyunca çeşitli araştırmacılar tarafından toplandı.']
  },
  {
    id: 'evidence_science',
    word: 'Evidence',
    pos: 'noun',
    meaning: 'Kanıt, delil',
    definition: 'Anything that helps to prove that something is or is not true.',
    ipa: '/ˈevɪdəns/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'evident', pos: 'adj', meaning: 'açık/belirgin' }
    ],
    synonyms: [
      { word: 'Proof', meaning: 'Kanıt', pos: 'noun' },
      { word: 'Confirmation', meaning: 'Onay/Doğrulama', pos: 'noun' },
      { word: 'Verification', meaning: 'Doğrulama', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disproof', meaning: 'Aksini kanıtlama', pos: 'noun' },
      { word: 'Contradiction', meaning: 'Çelişki', pos: 'noun' }
    ],
    collocations: ['clear evidence', 'scientific evidence', 'lack of evidence'],
    collocationMeanings: {
      'clear evidence': 'açık kanıt',
      'scientific evidence': 'bilimsel kanıt',
      'lack of evidence': 'kanıt yetersizliği'
    },
    examples: ['There is no scientific evidence that the drug is harmful.'],
    exampleTranslations: ['İlacın zararlı olduğuna dair hiçbir bilimsel kanıt yoktur.']
  },
  {
    id: 'researcher',
    word: 'Researcher',
    pos: 'noun',
    meaning: 'Araştırmacı',
    definition: 'Someone whose job is to study a subject carefully, especially in order to discover new information.',
    ipa: '/rɪˈsɜː(r)tʃə(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'research', pos: 'noun/verb', meaning: 'araştırma/araştırmak' }
    ],
    synonyms: [
      { word: 'Investigator', meaning: 'Soruşturmacı', pos: 'noun' },
      { word: 'Scholar', meaning: 'Bilgin/Alim', pos: 'noun' },
      { word: 'Scientist', meaning: 'Bilim insanı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['leading researcher', 'independent researcher', 'university researcher'],
    collocationMeanings: {
      'leading researcher': 'önde gelen araştırmacı',
      'independent researcher': 'bağımsız araştırmacı',
      'university researcher': 'üniversite araştırmacısı'
    },
    examples: ['European researchers are working on a new type of battery.'],
    exampleTranslations: ['Avrupalı araştırmacılar yeni bir pil türü üzerinde çalışıyorlar.']
  },
  {
    id: 'theory_science',
    word: 'Theory',
    pos: 'noun',
    meaning: 'Teori, kuram',
    definition: 'A formal statement of the rules on which a subject of study is based or of ideas that are suggested to explain a fact or event.',
    ipa: '/ˈθɪəri/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'theoretical', pos: 'adj', meaning: 'teorik' },
      { word: 'theorize', pos: 'verb', meaning: 'teori üretmek' }
    ],
    synonyms: [
      { word: 'Hypothesis', meaning: 'Hipotez', pos: 'noun' },
      { word: 'Assumption', meaning: 'Varsayım', pos: 'noun' },
      { word: 'Postulate', meaning: 'Önerme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Fact', meaning: 'Gerçek', pos: 'noun' },
      { word: 'Reality', meaning: 'Gerçeklik', pos: 'noun' }
    ],
    collocations: ['scientific theory', 'put into theory', 'conspiracy theory'],
    collocationMeanings: {
      'scientific theory': 'bilimsel teori',
      'put into theory': 'kuramsallaştırmak',
      'conspiracy theory': 'komplo teorisi'
    },
    examples: ['In theory, the journey should take three hours.'],
    exampleTranslations: ['Teorik olarak yolculuk üç saat sürmeli.']
  },

  // --- UNIT 9: ADVERTISING ---
  {
    id: 'advertising_campaign',
    word: 'Advertising campaign',
    pos: 'noun',
    meaning: 'Reklam kampanyası',
    definition: 'A series of advertisements to persuade people to buy a product.',
    ipa: '/ˈædvə(r)ˌtaɪzɪŋ kæmˈpeɪn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'advertise', pos: 'verb', meaning: 'reklam yapmak' },
      { word: 'advertisement', pos: 'noun', meaning: 'ilan/reklam' }
    ],
    synonyms: [
      { word: 'Promotion', meaning: 'Promosyon/Tanıtım', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['launch a campaign', 'global campaign', 'successful campaign'],
    collocationMeanings: {
      'launch a campaign': 'kampanya başlatmak',
      'global campaign': 'küresel kampanya',
      'successful campaign': 'başarılı kampanya'
    },
    examples: ['The advertising campaign was aimed at young professional women.'],
    exampleTranslations: ['Reklam kampanyası genç profesyonel kadınları hedefliyordu.']
  },
  {
    id: 'brand',
    word: 'Brand',
    pos: 'noun',
    meaning: 'Marka',
    definition: 'A type of product made by a particular company.',
    ipa: '/brænd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'branding', pos: 'noun', meaning: 'markalama' }
    ],
    synonyms: [
      { word: 'Trademark', meaning: 'Ticari marka', pos: 'noun' },
      { word: 'Label', meaning: 'Etiket/Marka', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Generic', meaning: 'Markasız/Genel', pos: 'noun' }
    ],
    collocations: ['brand loyalty', 'leading brand', 'brand awareness'],
    collocationMeanings: {
      'brand loyalty': 'marka sadakati',
      'leading brand': 'lider marka',
      'brand awareness': 'marka bilinirliği'
    },
    examples: ['This is one of the most famous brands in the world.'],
    exampleTranslations: ['bu dünyadaki en ünlü markalardan biridir.']
  },
  {
    id: 'consumer',
    word: 'Consumer',
    pos: 'noun',
    meaning: 'Tüketici',
    definition: 'A person who buys goods or services for their own use.',
    ipa: '/kənˈsjuːmə(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'consume', pos: 'verb', meaning: 'tüketmek' },
      { word: 'consumption', pos: 'noun', meaning: 'tüketim' }
    ],
    synonyms: [
      { word: 'Buyer', meaning: 'Alıcı', pos: 'noun' },
      { word: 'Customer', meaning: 'Müşteri', pos: 'noun' },
      { word: 'User', meaning: 'Kullanıcı', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Producer', meaning: 'Üretici', pos: 'noun' },
      { word: 'Manufacturer', meaning: 'İmalatçı', pos: 'noun' }
    ],
    collocations: ['consumer behavior', 'consumer rights', 'consumer protection'],
    collocationMeanings: {
      'consumer behavior': 'tüketici davranışı',
      'consumer rights': 'tüketici hakları',
      'consumer protection': 'tüketicinin korunması'
    },
    examples: ['The new tax will affect all consumers.'],
    exampleTranslations: ['Yeni vergi tüm tüketicileri etkileyecek.']
  },
  {
    id: 'endorse',
    word: 'Endorse',
    pos: 'verb',
    meaning: 'Desteklemek, (reklamda) tanıtmak',
    definition: 'To say publicly that you support a person, product or action.',
    ipa: '/ɪnˈdɔː(r)s/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'endorsement', pos: 'noun', meaning: 'onay/reklam desteği' }
    ],
    synonyms: [
      { word: 'Support', meaning: 'Desteklemek', pos: 'verb' },
      { word: 'Approve', meaning: 'Onaylamak', pos: 'verb' },
      { word: 'Advocate', meaning: 'Savunmak/Desteklemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Oppose', meaning: 'Karşı çıkmak', pos: 'verb' },
      { word: 'Condemn', meaning: 'Kınamak', pos: 'verb' },
      { word: 'Denounce', meaning: 'İfşa etmek/Kınamak', pos: 'verb' }
    ],
    collocations: ['officially endorse', 'celebrity endorse', 'strongly endorse'],
    collocationMeanings: {
      'officially endorse': 'resmen onaylamak',
      'celebrity endorse': 'ünlü birinin reklamda oynaması',
      'strongly endorse': 'şiddetle desteklemek'
    },
    examples: ['They hired a famous footballer to endorse their new sports drink.'],
    exampleTranslations: ['Yeni spor içeceklerini tanıtması için ünlü bir futbolcu tuttular.']
  },
  {
    id: 'high_profile',
    word: 'High-profile',
    pos: 'adj',
    meaning: 'Göz önünde olan, dikkat çeken',
    definition: 'Attracting a lot of attention and interest from the public and newspapers.',
    ipa: "/haɪ ˈprəʊfaıl/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Prominent', meaning: 'Önde gelen/Göz önünde', pos: 'adj' },
      { word: 'Well-known', meaning: 'İyi bilinen', pos: 'adj' },
      { word: 'Famous', meaning: 'Ünlü', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Low-profile', meaning: 'Göz önünde olmayan', pos: 'adj' },
      { word: 'Obscure', meaning: 'Bilinmeyen/Ücra', pos: 'adj' },
      { word: 'Unknown', meaning: 'Tanınmamış', pos: 'adj' }
    ],
    collocations: ['high-profile case', 'high-profile event', 'high-profile job'],
    collocationMeanings: {
      'high-profile case': 'çok ses getiren dava',
      'high-profile event': 'önemli etkinlik',
      'high-profile job': 'üst düzey/dikkat çeken iş'
    },
    examples: ['The high-profile murder trial lasted for several months.'],
    exampleTranslations: ['Çok dikkat çeken cinayet davası birkaç ay sürdü.']
  },
  {
    id: 'marketing_strategy',
    word: 'Marketing strategy',
    pos: 'noun',
    meaning: 'Pazarlama stratejisi',
    definition: 'A plan for reaching a specific marketing-related goal in a focused and achievable way.',
    ipa: "/ˈmɑː(r)kıtın ˈstrætədʒi/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Promotion plan', meaning: 'Tanıtım planı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['effective marketing strategy', 'global marketing strategy', 'develop a strategy'],
    collocationMeanings: {
      'effective marketing strategy': 'etkili pazarlama stratejisi',
      'global marketing strategy': 'küresel pazarlama stratejisi',
      'develop a strategy': 'strateji geliştirmek'
    },
    examples: ['The company needs a new marketing strategy to attract younger customers.'],
    exampleTranslations: ['Şirketin daha genç müşterileri çekmek için yeni bir pazarlama stratejisine ihtiyacı var.']
  },
  {
    id: 'target_market',
    word: 'Target market',
    pos: 'noun',
    meaning: 'Hedef kitle/pazar',
    definition: 'The group of people that a company wants to sell its products or services to.',
    ipa: "/ˈtɑː(r)ɡit ˈmɑː(r)kıt/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Audience', meaning: 'Kitle/İzleyici', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['identify target market', 'specific target market', 'reach target market'],
    collocationMeanings: {
      'identify target market': 'hedef kitleyi belirlemek',
      'specific target market': 'belirli bir hedef kitle',
      'reach target market': 'hedef kitleye ulaşmak'
    },
    examples: ['The target market for this luxury car is successful young professionals.'],
    exampleTranslations: ['Bu lüks arabanın hedef kitlesi başarılı genç profesyonellerdir.']
  },
  {
    id: 'trend_advertising',
    word: 'Trend',
    pos: 'noun',
    meaning: 'Akım, eğilim, trend',
    definition: 'A general direction in which something is developing or changing.',
    ipa: '/trend/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'trendy', pos: 'adj', meaning: 'moda/trend' }
    ],
    synonyms: [
      { word: 'Tendency', meaning: 'Eğilim', pos: 'noun' },
      { word: 'Fashion', meaning: 'Moda', pos: 'noun' },
      { word: 'Drift', meaning: 'Gidişat', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['set a trend', 'follow a trend', 'growing trend'],
    collocationMeanings: {
      'set a trend': 'akım başlatmak',
      'follow a trend': 'akımı takip etmek',
      'growing trend': 'büyüyen eğilim'
    },
    examples: ['There is a growing trend towards healthier eating habits.'],
    exampleTranslations: ['Daha sağlıklı beslenme alışkanlıklarına doğru büyüyen bir eğilim var.']
  },

  // --- TRADITIONAL MEDIA (UNIT 10) ---
  {
    id: 'biased',
    word: 'Biased',
    pos: 'adjective',
    meaning: 'Taraflı, önyargılı',
    definition: 'Preferring one person, thing, or idea to another in an unfair way.',
    ipa: '/ˈbaɪəst/',
    examples: ['The salary structure was biased against women.'],
    exampleTranslations: ['Maaş yapısı kadınlara karşı taraflıydı.'],
    level: 'upper-intermediate',
    collocations: ['heavily biased', 'politically biased', 'biased reporting'],
    collocationMeanings: {
      'heavily biased': 'aşırı taraflı',
      'politically biased': 'siyasi açıdan taraflı',
      'biased reporting': 'yanlı habercilik'
    }
  },
  {
    id: 'broadsheet',
    word: 'Broadsheet',
    pos: 'noun',
    meaning: 'Ciddi gazete (büyük boy)',
    definition: 'A large newspaper considered to be more serious than smaller newspapers.',
    ipa: '/ˈbrɔːdʃiːt/',
    examples: ["I'd rather read a broadsheet, but they're just too big to carry."],
    exampleTranslations: ['Ciddi (büyük boy) gazete okumayı tercih ederim ama taşımak için çok büyükler.'],
    level: 'upper-intermediate',
    collocations: ['read a broadsheet', 'broadsheet newspaper', 'broadsheet editor'],
    collocationMeanings: {
      'read a broadsheet': 'ciddi gazete okumak',
      'broadsheet newspaper': 'büyük boy gazete',
      'broadsheet editor': 'broadsheet editörü'
    }
  },
  {
    id: 'coverage_media',
    word: 'Coverage',
    pos: 'noun',
    meaning: 'Yayın, haber bülteni kapsamı',
    definition: 'The way news is reported on television, radio or newspapers.',
    ipa: '/ˈkʌv(ə)rɪdʒ/',
    examples: ['Coverage of the cup final will begin after the news.'],
    exampleTranslations: ['Kupa finalinin yayını haberlerden sonra başlayacak.'],
    level: 'upper-intermediate',
    collocations: ['media coverage', 'extensive coverage', 'live coverage'],
    collocationMeanings: {
      'media coverage': 'medyada yer bulma/yayın',
      'extensive coverage': 'kapsamlı yayın',
      'live coverage': 'canlı yayın'
    }
  },
  {
    id: 'editor_media',
    word: 'Editor',
    pos: 'noun',
    meaning: 'Editör, yazı işleri müdürü',
    definition: 'A person who is in charge of a newspaper or magazine.',
    ipa: '/ˈedɪtə(r)/',
    examples: ["She's currently the editor of the Los Angeles Times."],
    exampleTranslations: ['Şu an Los Angeles Times’ın editörü.'],
    level: 'upper-intermediate',
    collocations: ['chief editor', 'news editor', 'letter to the editor'],
    collocationMeanings: {
      'chief editor': 'genel yayın yönetmeni',
      'news editor': 'haber müdürü',
      'letter to the editor': 'editöre mektup'
    }
  },
  {
    id: 'headline_media',
    word: 'Headline',
    pos: 'noun',
    meaning: 'Manşet, başlık',
    definition: 'The title of a newspaper story that is printed in large letters.',
    ipa: '/ˈhedˌlaɪn/',
    examples: ["Didn't you see the headlines? They're calling a new election."],
    exampleTranslations: ['Manşetleri görmedin mi? Yeni seçim çağrısı yapıyorlar.'],
    level: 'upper-intermediate',
    collocations: ['hit the headlines', 'front-page headline', 'bold headlines'],
    collocationMeanings: {
      'hit the headlines': 'manşetlere çıkmak',
      'front-page headline': 'ana sayfa manşeti',
      'bold headlines': 'kalın puntolu başlıklar'
    }
  },
  {
    id: 'source_media',
    word: 'Source',
    pos: 'noun',
    meaning: 'Kaynak',
    definition: 'Where information comes from.',
    ipa: '/sɔː(r)s/',
    examples: ['The journalist refused to reveal his sources.'],
    exampleTranslations: ['Gazeteci kaynaklarını açıklamayı reddetti.'],
    level: 'upper-intermediate',
    collocations: ['reliable source', 'official source', 'anonymous source'],
    collocationMeanings: {
      'reliable source': 'güvenilir kaynak',
      'official source': 'resmi kaynak',
      'anonymous source': 'isimsiz kaynak'
    }
  },
  {
    id: 'subjective',
    word: 'Subjective',
    pos: 'adjective',
    meaning: 'Öznel',
    definition: 'Based on your own feelings and beliefs, not facts.',
    ipa: '/səbˈdzektɪv/',
    examples: ["Assessment of performance is completely subjective."],
    exampleTranslations: ['Performans değerlendirmesi tamamen özneldir.'],
    level: 'upper-intermediate',
    collocations: ['subjective view', 'purely subjective', 'subjective opinion'],
    collocationMeanings: {
      'subjective view': 'öznel bakış',
      'purely subjective': 'tamamen öznel',
      'subjective opinion': 'kişisel görüş'
    }
  },
  {
    id: 'tabloid',
    word: 'Tabloid',
    pos: 'noun',
    meaning: 'Bulvar gazetesi (magazin ağırlıklı)',
    definition: 'A small newspaper with lots of pictures, often about famous people.',
    ipa: '/ˈtæblɔɪd/',
    examples: ['Tabloids often focus on celebrity news and gossip.'],
    exampleTranslations: ['Bulvar gazeteleri genellikle ünlü haberlerine ve dedikoduya odaklanır.'],
    level: 'upper-intermediate',
    collocations: ['tabloid press', 'read a tabloid', 'tabloid journalism'],
    collocationMeanings: {
      'tabloid press': 'magazin basını',
      'read a tabloid': 'bulvar gazetesi okumak',
      'tabloid journalism': 'sarı basın/magazin haberciliği'
    }
  },

  // --- UNIT 10: TRADITIONAL MEDIA ---
  {
    id: 'biased',
    word: 'Biased',
    pos: 'adj',
    meaning: 'Taraflı, önyargılı',
    definition: 'Showing an unreasonable like or dislike for a person or group based on personal opinions.',
    ipa: '/ˈbaɪəst/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'bias', pos: 'noun/verb', meaning: 'taraf/taraf tutmak' }
    ],
    synonyms: [
      { word: 'Prejudiced', meaning: 'Önyargılı', pos: 'adj' },
      { word: 'Partial', meaning: 'Yanlı/Taraflı', pos: 'adj' },
      { word: 'One-sided', meaning: 'Tek taraflı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unbiased', meaning: 'Tarafsız', pos: 'adj' },
      { word: 'Impartial', meaning: 'Yansız', pos: 'adj' },
      { word: 'Objective', meaning: 'Nesnel', pos: 'adj' }
    ],
    collocations: ['heavily biased', 'politically biased', 'biased reporting'],
    collocationMeanings: {
      'heavily biased': 'aşırı taraflı',
      'politically biased': 'siyasi açıdan taraflı',
      'biased reporting': 'yanlı habercilik'
    },
    examples: ['The newspapers gave a very biased report of the meeting.'],
    exampleTranslations: ['Gazeteler toplantı hakkında çok taraflı bir haber verdi.']
  },
  {
    id: 'broadsheet',
    word: 'Broadsheet',
    pos: 'noun',
    meaning: 'Ciddi gazete (büyük boy)',
    definition: 'A newspaper that is printed on large sheets of paper, generally considered more serious than tabloids.',
    ipa: '/ˈbrɔːdʃiːt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Quality paper', meaning: 'Kaliteli/Ciddi gazete', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Tabloid', meaning: 'Bulvar gazetesi', pos: 'noun' }
    ],
    collocations: ['read a broadsheet', 'broadsheet newspaper', 'broadsheet editor'],
    collocationMeanings: {
      'read a broadsheet': 'ciddi gazete okumak',
      'broadsheet newspaper': 'büyük boy ciddi gazete',
      'broadsheet editor': 'broadsheet editörü'
    },
    examples: ["In Britain, broadsheets like 'The Times' are highly respected."],
    exampleTranslations: ["İngiltere'de 'The Times' gibi ciddi gazetelere büyük saygı duyulur."]
  },
  {
    id: 'coverage_media',
    word: 'Coverage',
    pos: 'noun',
    meaning: 'Yayın, haber bülteni kapsamı',
    definition: 'The reporting of a particular important event or subject.',
    ipa: '/ˈkʌv(ə)rɪdʒ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'cover', pos: 'verb', meaning: 'haber yapmak/kapsamak' }
    ],
    synonyms: [
      { word: 'Reporting', meaning: 'Haber yapma', pos: 'noun' },
      { word: 'Broadcasting', meaning: 'Yayıncılık', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['media coverage', 'extensive coverage', 'live coverage'],
    collocationMeanings: {
      'media coverage': 'medyada yer bulma',
      'extensive coverage': 'kapsamlı yayın',
      'live coverage': 'canlı yayın'
    },
    examples: ['There was extensive media coverage of the royal wedding.'],
    exampleTranslations: ['Kraliyet düğünü medyada kapsamlı bir şekilde yer aldı.']
  },
  {
    id: 'editor_media',
    word: 'Editor',
    pos: 'noun',
    meaning: 'Editör, yazı işleri müdürü',
    definition: 'A person who is in charge of and determines the final content of a newspaper or magazine.',
    ipa: '/ˈedɪtə(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'edit', pos: 'verb', meaning: 'düzenlemek' },
      { word: 'editorial', pos: 'noun/adj', meaning: 'başyazı/editörle ilgili' }
    ],
    synonyms: [
      { word: 'Chief', meaning: 'Şef/Yönetici', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['chief editor', 'news editor', 'letter to the editor'],
    collocationMeanings: {
      'chief editor': 'genel yayın yönetmeni',
      'news editor': 'haber müdürü',
      'letter to the editor': 'editöre mektup'
    },
    examples: ["She's currently the editor of a national newspaper."],
    exampleTranslations: ['Şu an ulusal bir gazetenin editörlüğünü yapıyor.']
  },
  {
    id: 'headline_media',
    word: 'Headline',
    pos: 'noun',
    meaning: 'Manşet, başlık',
    definition: 'The title of a newspaper story that is printed in large letters.',
    ipa: '/ˈhedˌlaɪn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Heading', meaning: 'Başlık', pos: 'noun' },
      { word: 'Caption', meaning: 'Resim altı yazısı/Başlık', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['hit the headlines', 'front-page headline', 'bold headlines'],
    collocationMeanings: {
      'hit the headlines': 'manşetlere çıkmak',
      'front-page headline': 'ana sayfa manşeti',
      'bold headlines': 'kalın puntolu başlıklar'
    },
    examples: ['The scandal has been hitting the headlines all week.'],
    exampleTranslations: ['Skandal tüm hafta boyunca manşetlerdeydi.']
  },
  {
    id: 'source_media',
    word: 'Source',
    pos: 'noun',
    meaning: 'Kaynak',
    definition: 'A person, book, or document that provides information.',
    ipa: '/sɔː(r)s/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Origin', meaning: 'Köken/Kaynak', pos: 'noun' },
      { word: 'Informant', meaning: 'Muhbir/Bilgi veren', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['reliable source', 'official source', 'anonymous source'],
    collocationMeanings: {
      'reliable source': 'güvenilir kaynak',
      'official source': 'resmi kaynak',
      'anonymous source': 'isimsiz kaynak'
    },
    examples: ['The journalist refused to reveal her sources.'],
    exampleTranslations: ['Gazeteci kaynaklarını açıklamayı reddetti.']
  },
  {
    id: 'subjective',
    word: 'Subjective',
    pos: 'adj',
    meaning: 'Öznel',
    definition: 'Based on or influenced by personal feelings, tastes, or opinions.',
    ipa: '/səbˈdzektɪv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'subjectivity', pos: 'noun', meaning: 'öznellik' },
      { word: 'subjectively', pos: 'adverb', meaning: 'öznel olarak' }
    ],
    synonyms: [
      { word: 'Personal', meaning: 'Kişisel', pos: 'adj' },
      { word: 'Biased', meaning: 'Taraflı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Objective', meaning: 'Nesnel', pos: 'adj' },
      { word: 'Fact-based', meaning: 'Gerçeğe dayalı', pos: 'adj' }
    ],
    collocations: ['subjective view', 'purely subjective', 'subjective opinion'],
    collocationMeanings: {
      'subjective view': 'öznel bakış',
      'purely subjective': 'tamamen öznel',
      'subjective opinion': 'kişisel görüş'
    },
    examples: ['Expert advice can be highly subjective.'],
    exampleTranslations: ['Uzman tavsiyesi son derece öznel olabilir.']
  },
  {
    id: 'tabloid',
    word: 'Tabloid',
    pos: 'noun',
    meaning: 'Bulvar gazetesi (magazin ağırlıklı)',
    definition: 'A type of popular newspaper with small pages that has many pictures and short, simple reports.',
    ipa: '/ˈtæblɔɪd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Popular press', meaning: 'Halk basını', pos: 'noun' },
      { word: 'Yellow press', meaning: 'Sarı basın (sansasyonel)', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Broadsheet', meaning: 'Ciddi gazete', pos: 'noun' }
    ],
    collocations: ['tabloid press', 'read a tabloid', 'tabloid journalism'],
    collocationMeanings: {
      'tabloid press': 'magazin basını',
      'read a tabloid': 'bulvar gazetesi okumak',
      'tabloid journalism': 'magazin haberciliği'
    },
    examples: ['The tabloids often focus on celebrity gossip.'],
    exampleTranslations: ['Bulvar gazeteleri genellikle ünlü dedikodularına odaklanır.']
  },

  // --- UNIT 10: SOCIAL MEDIA ---
  {
    id: 'campaign_general',
    word: 'Campaign',
    pos: 'noun/verb',
    meaning: 'Kampanya, kampanya yürütmek',
    definition: 'A planned group of activities that are intended to achieve a particular aim.',
    ipa: '/kæmˈpeɪn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'campaigner', pos: 'noun', meaning: 'eylemci/kampanyacı' }
    ],
    synonyms: [
      { word: 'Movement', meaning: 'Hareket/Akım', pos: 'noun' },
      { word: 'Operation', meaning: 'Operasyon', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['election campaign', 'launch a campaign', 'ad campaign'],
    collocationMeanings: {
      'election campaign': 'seçim kampanyası',
      'launch a campaign': 'kampanya başlatmak',
      'ad campaign': 'reklam kampanyası'
    },
    examples: ['They launched a campaign to protect the local park.'],
    exampleTranslations: ['Yerel parkı korumak için bir kampanya başlattılar.']
  },
  {
    id: 'clickbait',
    word: 'Clickbait',
    pos: 'noun',
    meaning: 'Tık tuzağı',
    definition: 'Articles or photographs on the internet that are intended to attract attention and make people click on a link.',
    ipa: '/ˈklɪkbeɪt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Linkbait', meaning: 'Link tuzağı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['clickbait headline', 'avoid clickbait', 'clickbait article'],
    collocationMeanings: {
      'clickbait headline': 'tık tuzağı başlık',
      'avoid clickbait': 'tık tuzaklarından kaçınmak',
      'clickbait article': 'tık tuzağı makale'
    },
    examples: ["That article's title is clearly just clickbait."],
    exampleTranslations: ['O makalenin başlığı açıkça sadece bir tık tuzağı.']
  },
  {
    id: 'dm_social',
    word: 'DM',
    pos: 'verb/noun',
    meaning: 'Direkt mesaj atmak, direkt mesaj',
    definition: 'To send a private message to someone on social media.',
    ipa: '/diː em/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Private message', meaning: 'Özel mesaj', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Public post', meaning: 'Herkese açık paylaşım', pos: 'noun' }
    ],
    collocations: ['send a DM', 'check DMs', 'slide into DMs'],
    collocationMeanings: {
      'send a DM': 'DM göndermek',
      'check DMs': 'mesaj kutusunu kontrol etmek',
      'slide into DMs': 'birine mesajla ulaşmak'
    },
    examples: ['DM me if you want the link to the website.'],
    exampleTranslations: ['Web sitesinin linkini isterseniz bana DM atın.']
  },
  {
    id: 'follower_social',
    word: 'Follower',
    pos: 'noun',
    meaning: 'Takipçi',
    definition: 'A person who follows another person or organization on social media.',
    ipa: '/ˈfɒləʊə(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'follow', pos: 'verb', meaning: 'takip etmek' }
    ],
    synonyms: [
      { word: 'Subscriber', meaning: 'Abone', pos: 'noun' },
      { word: 'Fan', meaning: 'Hayran', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Leader', meaning: 'Lider', pos: 'noun' }
    ],
    collocations: ['gain followers', 'lose followers', 'active followers'],
    collocationMeanings: {
      'gain followers': 'takipçi kazanmak',
      'lose followers': 'takipçi kaybetmek',
      'active followers': 'aktif takipçiler'
    },
    examples: ['He has over five million followers on Instagram.'],
    exampleTranslations: ["Instagram'da beş milyondan fazla takipçisi var."]
  },
  {
    id: 'hashtag_social',
    word: 'Hashtag',
    pos: 'noun',
    meaning: 'Etiket, hashtag',
    definition: 'Used on social media to describe the topic of a post and make it easy to find.',
    ipa: '/ˈhæʃtæɡ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tag', meaning: 'Etiket', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['trending hashtag', 'use a hashtag', 'popular hashtag'],
    collocationMeanings: {
      'trending hashtag': 'trend olan etiket',
      'use a hashtag': 'etiket kullanmak',
      'popular hashtag': 'popüler hashtag'
    },
    examples: ['The #climatechange hashtag is very popular today.'],
    exampleTranslations: ['#climatechange etiketi bugün çok popüler.']
  },
  {
    id: 'influencer_social',
    word: 'Influencer',
    pos: 'noun',
    meaning: 'Influencer, etkileyici kişi',
    definition: 'Someone who affects or changes the way that other people behave, often through social media.',
    ipa: '/ˈɪnfluənsə(r)/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'influence', pos: 'noun/verb', meaning: 'etki/etkilemek' }
    ],
    synonyms: [
      { word: 'Opinion leader', meaning: 'Kanaat önderi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['social media influencer', 'influencer marketing', 'follow an influencer'],
    collocationMeanings: {
      'social media influencer': 'sosyal medya etkileyicisi',
      'influencer marketing': 'etkileyici pazarlaması',
      'follow an influencer': 'bir influencer’ı takip etmek'
    },
    examples: ['She is a well-known fashion influencer.'],
    exampleTranslations: ['O, tanınmış bir moda influencer’ıdır.']
  },
  {
    id: 'meme_social',
    word: 'Meme',
    pos: 'noun',
    meaning: 'Meme, mim (internet akımı)',
    definition: 'An image or video that is spread very quickly on the internet.',
    ipa: '/miːm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['viral meme', 'funny meme', 'create a meme'],
    collocationMeanings: {
      'viral meme': 'viral mim',
      'funny meme': 'komik mim',
      'create a meme': 'mim oluşturmak'
    },
    examples: ['The cat meme went viral within hours.'],
    exampleTranslations: ['Kedi mimi birkaç saat içinde viral oldu.']
  },
  {
    id: 'netiquette',
    word: 'Netiquette',
    pos: 'noun',
    meaning: 'İnternet görgü kuralları',
    definition: 'The set of rules about what is considered to be polite and correct behaviour on the internet.',
    ipa: '/ˈnetɪket/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Cyber-ethics', meaning: 'Siber etik', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['follow netiquette', 'basic netiquette', 'observe netiquette'],
    collocationMeanings: {
      'follow netiquette': 'internet nezaket kurallarına uymak',
      'basic netiquette': 'temel netiket kuralları',
      'observe netiquette': 'netiket kurallarını gözetmek'
    },
    examples: ['It is against netiquette to use all capital letters in an email.'],
    exampleTranslations: ['E-postada tamamen büyük harf kullanmak internet görgü kurallarına aykırıdır.']
  },
  {
    id: 'reach_social',
    word: 'Reach',
    pos: 'verb/noun',
    meaning: 'Ulaşmak, erişim',
    definition: 'The number of people that see or hear a post or advertisement.',
    ipa: '/riːtʃ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Access', meaning: 'Erişim', pos: 'noun' },
      { word: 'Extension', meaning: 'Kapsam/Uzanma', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['reach an audience', 'organic reach', 'global reach'],
    collocationMeanings: {
      'reach an audience': 'bir kitleye ulaşmak',
      'organic reach': 'organik erişim',
      'global reach': 'küresel erişim'
    },
    examples: ['The post reached over a million people in one day.'],
    exampleTranslations: ['Paylaşım bir günde bir milyondan fazla kişiye ulaştı.']
  },
  {
    id: 'thread_social',
    word: 'Thread',
    pos: 'noun',
    meaning: 'Konu dizisi, zincir',
    definition: 'A connected group of pieces of writing on the internet about the same subject.',
    ipa: '/θred/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'String', meaning: 'Dizi/Zincir', pos: 'noun' },
      { word: 'Chain', meaning: 'Zincir', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['twitter thread', 'message thread', 'follow a thread'],
    collocationMeanings: {
      'twitter thread': 'tweet zinciri',
      'message thread': 'mesaj dizisi',
      'follow a thread': 'konuyu takip etmek'
    },
    examples: ['I read an interesting thread about history on Twitter.'],
    exampleTranslations: ["Twitter'da tarih hakkında ilginç bir dizi yazı okudum."]
  },
  {
    id: 'trending_social',
    word: 'Trending',
    pos: 'verb/adj',
    meaning: 'Trend olan, gündemde olan',
    definition: 'To be currently popular or widely discussed on social media.',
    ipa: '/ˈtrendɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'trend', pos: 'noun', meaning: 'akım' }
    ],
    synonyms: [
      { word: 'Popular', meaning: 'Popüler', pos: 'adj' },
      { word: 'Current', meaning: 'Güncel', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Outdated', meaning: 'Modası geçmiş', pos: 'adj' }
    ],
    collocations: ['trending topic', 'trending now', 'start trending'],
    collocationMeanings: {
      'trending topic': 'popüler konu',
      'trending now': 'şu an gündemde',
      'start trending': 'trend olmaya başlamak'
    },
    examples: ['The news of her engagement is trending right now.'],
    exampleTranslations: ['Nişan haberi şu anda gündemde (trend oldu).']
  },
  {
    id: 'troll_social',
    word: 'Troll',
    pos: 'noun/verb',
    meaning: 'Trol (kışkırtan kişi), trollemek',
    definition: 'Someone who leaves an intentionally annoying or offensive message on the internet, in order to get a reaction.',
    ipa: '/trəʊl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'trolling', pos: 'noun', meaning: 'trollemecilik' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['internet troll', 'don’t feed the troll', 'troll someone'],
    collocationMeanings: {
      'internet troll': 'internet trolü',
      'don’t feed the troll': 'trolü besleme (cevap verme)',
      'troll someone': 'birini trollemek'
    },
    examples: ['Ignore him; he is just an internet troll looking for attention.'],
    exampleTranslations: ['Onu görmezden gel; o sadece ilgi bekleyen bir internet trolü.']
  },
  {
    id: 'viral_social',
    word: 'Viral',
    pos: 'adj',
    meaning: 'Viral (hızla yayılan)',
    definition: 'Something that becomes extremely popular very quickly on the internet.',
    ipa: '/ˈvaɪrəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'virus', pos: 'noun', meaning: 'virüs' }
    ],
    synonyms: [
      { word: 'Popular', meaning: 'Popüler', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Obscure', meaning: 'Bilinmeyen', pos: 'adj' }
    ],
    collocations: ['go viral', 'viral video', 'viral marketing'],
    collocationMeanings: {
      'go viral': 'internette hızla yayılmak',
      'viral video': 'viral video',
      'viral marketing': 'viral pazarlama'
    },
    examples: ['Her video went viral and got millions of views.'],
    exampleTranslations: ['Videosu viral oldu ve milyonlarca izlenme aldı.']
  },

  // --- UNIT 10: COLLOCATIONS ---
  {
    id: 'key_factor',
    word: 'Key factor',
    pos: 'noun phrase',
    meaning: 'Anahtar faktör, temel etken',
    definition: 'The most important thing that has an influence on a situation.',
    ipa: "/kiː ˈfæktə(r)/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Main reason', meaning: 'Temel neden', pos: 'noun' },
      { word: 'Crucial element', meaning: 'Hayati unsur', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Minor factor', meaning: 'Önemsiz etken', pos: 'noun' }
    ],
    collocations: ['key factor in', 'identify key factors', 'major key factor'],
    collocationMeanings: {
      'key factor in': '...daki anahtar faktör',
      'identify key factors': 'temel etkenleri belirlemek',
      'major key factor': 'en önemli anahtar faktör'
    },
    examples: ['Good communication is a key factor in any relationship.'],
    exampleTranslations: ['İyi iletişim, her türlü ilişkide temel bir etkendir.']
  },
  {
    id: 'online_comment',
    word: 'Online comment',
    pos: 'noun phrase',
    meaning: 'Çevrimiçi yorum',
    definition: 'A remark or opinion written in response to content on a website.',
    ipa: "/ˈɒnlaɪn ˈkɒment/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['post online comment', 'moderate online comments', 'anonymous online comment'],
    collocationMeanings: {
      'post online comment': 'çevrimiçi yorum yazmak',
      'moderate online comments': 'yorumları denetlemek',
      'anonymous online comment': 'isimsiz çevrimiçi yorum'
    },
    examples: ["The article received many positive online comments from readers."],
    exampleTranslations: ['Makale, okuyuculardan pek çok olumlu çevrimiçi yorum aldı.']
  },
  {
    id: 'positive_reaction',
    word: 'Positive reaction',
    pos: 'noun phrase',
    meaning: 'Olumlu tepki',
    definition: 'A response that shows someone approves of or likes something.',
    ipa: "/ˈpɒzətɪv riˈækʃ(ə)n/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Approval', meaning: 'Onay', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Negative reaction', meaning: 'Olumsuz tepki', pos: 'noun' },
      { word: 'Backlash', meaning: 'Ters tepki/Şiddetli tepki', pos: 'noun' }
    ],
    collocations: ['receive positive reaction', 'generally positive reaction', 'spark positive reaction'],
    collocationMeanings: {
      'receive positive reaction': 'olumlu tepki almak',
      'generally positive reaction': 'genellikle olumlu tepki',
      'spark positive reaction': 'olumlu tepki uyandırmak'
    },
    examples: ['The new product design received a very positive reaction from customers.'],
    exampleTranslations: ['Yeni ürün tasarımı müşterilerden çok olumlu bir tepki aldı.']
  },
  {
    id: 'public_awareness',
    word: 'Public awareness',
    pos: 'noun phrase',
    meaning: 'Kamuoyu farkındalığı',
    definition: 'The level of understanding or knowledge that the general public has about a subject.',
    ipa: "/ˈpʌblɪk əˈweə(r)nəs/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Social consciousness', meaning: 'Toplumsal bilinç', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Public ignorance', meaning: 'Toplumsal cehalet', pos: 'noun' }
    ],
    collocations: ['raise public awareness', 'increase public awareness', 'lack of public awareness'],
    collocationMeanings: {
      'raise public awareness': 'kamuoyu farkındalığı yaratmak',
      'increase public awareness': 'kamuoyu bilincini artırmak',
      'lack of public awareness': 'kamuoyu farkındalığı eksikliği'
    },
    examples: ['The campaign aims to raise public awareness of environmental issues.'],
    exampleTranslations: ['Kampanya, çevre sorunları hakkında kamuoyu farkındalığı yaratmayı hedefliyor.']
  },
  {
    id: 'substantial_donation',
    word: 'Substantial donation',
    pos: 'noun phrase',
    meaning: 'Önemli/yüklü miktarda bağış',
    definition: 'A large amount of money or goods given to a person or organization to help them.',
    ipa: "/səbˈstænʃ(ə)l dəʊˈneɪʃ(ə)n/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Generous gift', meaning: 'Cömert hediye/bağış', pos: 'noun' },
      { word: 'Large contribution', meaning: 'Büyük katkı', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Paltry sum', meaning: 'Değersiz/Küçük miktar', pos: 'noun' }
    ],
    collocations: ['receive substantial donation', 'make substantial donation', 'substantial donation to charity'],
    collocationMeanings: {
      'receive substantial donation': 'yüklü bağış almak',
      'make substantial donation': 'yüklü bağış yapmak',
      'substantial donation to charity': 'hayır kurumuna büyük bağış'
    },
    examples: ['The hospital received a substantial donation from an anonymous businessman.'],
    exampleTranslations: ['Hastane, isimsiz bir iş adamından yüklü miktarda bağış aldı.']
  },
  {
    id: 'wider_audience',
    word: 'Wider audience',
    pos: 'noun phrase',
    meaning: 'Daha geniş kitle',
    definition: 'A larger number of people who see, hear, or read something.',
    ipa: "/ˈwaɪdə ˈɔːdiəns/",
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Broader public', meaning: 'Daha geniş kamuoyu', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Niche audience', meaning: 'Belirli/Dar kitle', pos: 'noun' }
    ],
    collocations: ['reach a wider audience', 'appeal to wider audience', 'target a wider audience'],
    collocationMeanings: {
      'reach a wider audience': 'daha geniş kitleye ulaşmak',
      'appeal to wider audience': 'daha geniş kitleye hitap etmek',
      'target a wider audience': 'daha geniş kitleyi hedeflemek'
    },
    examples: ['The internet has allowed independent musicians to reach a much wider audience.'],
    exampleTranslations: ['İnternet, bağımsız müzisyenlerin çok daha geniş bir kitleye ulaşmasını sağladı.']
  }
];

export const getWordsByLevel = (level: Level): VocabularyWord[] => {
  return vocabularyData.filter(word => word.level === level);
};

export const getWordById = (id: string): VocabularyWord | undefined => {
  return vocabularyData.find(word => word.id === id);
};

export const getRandomWords = (count: number, level?: Level): VocabularyWord[] => {
  const filtered = level ? getWordsByLevel(level) : vocabularyData;
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};