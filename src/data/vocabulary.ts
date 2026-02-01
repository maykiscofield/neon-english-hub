import { VocabularyWord, Level } from '@/types/learning';

export const vocabularyData: VocabularyWord[] = [
         // --- PRE - INTERMEDIATE (A2) ---
  {
    id: 'relatives_lh',
    word: 'Relatives',
    pos: 'noun',
    meaning: 'Akrabalar',
    definition: 'Members of your family, especially ones who do not live with you.',
    ipa: '/ˈrel.ə.tɪvz/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'relation', pos: 'noun', meaning: 'ilişki' },
      { word: 'relative', pos: 'adj', meaning: 'göreceli' }
    ],
    synonyms: [
      { word: 'Relations', meaning: 'Akrabalar', pos: 'noun' },
      { word: 'Kin', meaning: 'Hısım, soydaş', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Strangers', meaning: 'Yabancılar', pos: 'noun' }
    ],
    collocations: ['close relatives', 'distant relatives'],
    collocationMeanings: {
      'close relatives': 'yakın akrabalar',
      'distant relatives': 'uzak akrabalar'
    },
    examples: ['We spent the week visiting relatives.'],
    exampleTranslations: ['Haftayı akrabaları ziyaret ederek geçirdik.']
  },
  {
    id: 'strangers_lh',
    word: 'Strangers',
    pos: 'noun',
    meaning: 'Yabancılar',
    definition: 'People who you do not know.',
    ipa: '/ˈstreɪn.dʒərz/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'strange', pos: 'adj', meaning: 'garip' },
      { word: 'strangely', pos: 'adv', meaning: 'garip bir şekilde' }
    ],
    synonyms: [
      { word: 'Unknown people', meaning: 'Tanınmayan kişiler', pos: 'noun' },
      { word: 'Outsider', meaning: 'Dışarıdan kimse', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Friends', meaning: 'Arkadaşlar', pos: 'noun' },
      { word: 'Acquaintances', meaning: 'Tanıdıklar', pos: 'noun' }
    ],
    collocations: ['total stranger', 'stranger danger'],
    collocationMeanings: {
      'total stranger': 'tamamen yabancı',
      'stranger danger': 'yabancı tehlikesi'
    },
    examples: ['The poster warns children not to talk to strangers.'],
    exampleTranslations: ['Afiş, çocukları yabancılarla konuşmamaları konusunda uyarıyor.']
  },
  {
    id: 'colleagues_lh',
    word: 'Colleagues',
    pos: 'noun',
    meaning: 'Meslektaşlar, iş arkadaşları',
    definition: 'People who work in the same organization or department as you.',
    ipa: '/ˈkɒl.iːɡz/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'collegial', pos: 'adj', meaning: 'mesleki dayanışma içeren' }
    ],
    synonyms: [
      { word: 'Co-workers', meaning: 'İş arkadaşları', pos: 'noun' },
      { word: 'Associates', meaning: 'Ortaklar/İş arkadaşları', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Rivals', meaning: 'Rakipler', pos: 'noun' },
      { word: 'Opponents', meaning: 'Karşı taraftakiler', pos: 'noun' }
    ],
    collocations: ['work colleagues', 'former colleagues'],
    collocationMeanings: {
      'work colleagues': 'iş meslektaşları',
      'former colleagues': 'eski meslektaşlar'
    },
    examples: ['He is popular with his colleagues.'],
    exampleTranslations: ['İş arkadaşları arasında popülerdir.']
  },
  {
    id: 'confident_lh',
    word: 'Confident',
    pos: 'adjective',
    meaning: 'Kendine güvenen',
    definition: 'Someone who believes in their own abilities and so does not feel nervous or frightened.',
    ipa: '/ˈkɒn.fɪ.dənt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'confidence', pos: 'noun', meaning: 'güven' },
      { word: 'confidently', pos: 'adv', meaning: 'güvenle' }
    ],
    synonyms: [
      { word: 'Self-assured', meaning: 'Kendinden emin', pos: 'adj' },
      { word: 'Certain', meaning: 'Kesin/Emin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Insecure', meaning: 'Güvensiz', pos: 'adj' },
      { word: 'Shy', meaning: 'Utangaç', pos: 'adj' }
    ],
    collocations: ['feel confident', 'confident person', 'fully confident'],
    collocationMeanings: {
      'feel confident': 'kendine güvenmek',
      'confident person': 'kendinden emin kişi',
      'fully confident': 'tamamen emin'
    },
    examples: ['He is confident in his ability to play the piano.'],
    exampleTranslations: ['Piyano çalma yeteneği konusunda kendine güveniyor.']
  },
  {
    id: 'curious_lh',
    word: 'Curious',
    pos: 'adjective',
    meaning: 'Meraklı',
    definition: 'Someone who wants to find out about something.',
    ipa: '/ˈkjʊə.ri.əs/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'curiosity', pos: 'noun', meaning: 'merak' },
      { word: 'curiously', pos: 'adv', meaning: 'merakla' }
    ],
    synonyms: [
      { word: 'Inquisitive', meaning: 'Meraklı/Sorgulayıcı', pos: 'adj' },
      { word: 'Nosy', meaning: 'Başkalarının işine burnunu sokan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Indifferent', meaning: 'İlgisiz', pos: 'adj' },
      { word: 'Uninterested', meaning: 'Hevessiz', pos: 'adj' }
    ],
    collocations: ['curious to know', 'curious about', 'naturally curious'],
    collocationMeanings: {
      'curious to know': 'bilmeye meraklı',
      'curious about': 'hakkında meraklı',
      'naturally curious': 'doğuştan meraklı'
    },
    examples: ["I'm curious to know why she made that decision."],
    exampleTranslations: ['Neden bu kararı verdiğini merak ediyorum.']
  },
  {
    id: 'hard-working_lh',
    word: 'Hard-working',
    pos: 'adjective',
    meaning: 'Çalışkan',
    definition: 'Someone who puts a lot of effort into their work.',
    ipa: '/ˌhɑːdˈwɜː.kɪŋ/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'work', pos: 'noun/verb', meaning: 'iş/çalışmak' }
    ],
    synonyms: [
      { word: 'Diligent', meaning: 'Gayretli', pos: 'adj' },
      { word: 'Industrious', meaning: 'Çalışkan/Üretken', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Lazy', meaning: 'Tembel', pos: 'adj' },
      { word: 'Idle', meaning: 'Aylak', pos: 'adj' }
    ],
    collocations: ['extremely hard-working', 'hard-working student'],
    collocationMeanings: {
      'extremely hard-working': 'son derece çalışkan',
      'hard-working student': 'çalışkan öğrenci'
    },
    examples: ['She was very hard-working and reliable.'],
    exampleTranslations: ['Çok çalışkan ve güvenilirdi.']
  },
  {
    id: 'independent_lh',
    word: 'Independent',
    pos: 'adjective',
    meaning: 'Bağımsız, özgür',
    definition: 'Someone who does not depend on other people for help.',
    ipa: '/ˌɪn.dɪˈpen.dənt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'independence', pos: 'noun', meaning: 'bağımsızlık' },
      { word: 'independently', pos: 'adv', meaning: 'bağımsız bir şekilde' }
    ],
    synonyms: [
      { word: 'Self-sufficient', meaning: 'Kendi kendine yeten', pos: 'adj' },
      { word: 'Autonomous', meaning: 'Özerk', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dependent', meaning: 'Bağımlı', pos: 'adj' },
      { word: 'Reliant', meaning: 'Muhtaç', pos: 'adj' }
    ],
    collocations: ['financially independent', 'independent state'],
    collocationMeanings: {
      'financially independent': 'maddi olarak bağımsız',
      'independent state': 'bağımsız devlet'
    },
    examples: ['Even as a child he was very independent.'],
    exampleTranslations: ['Çocukken bile çok bağımsızdı.']
  },
  {
    id: 'sensible_lh',
    word: 'Sensible',
    pos: 'adjective',
    meaning: 'Mantıklı, aklı başında',
    definition: 'Someone who is reasonable and practical.',
    ipa: '/ˈsen.sə.bəl/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'sense', pos: 'noun', meaning: 'mantık' },
      { word: 'sensibly', pos: 'adv', meaning: 'akıllıca' }
    ],
    synonyms: [
      { word: 'Rational', meaning: 'Mantıklı', pos: 'adj' },
      { word: 'Reasonable', meaning: 'Makul', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Foolish', meaning: 'Aptalca', pos: 'adj' },
      { word: 'Unreasonable', meaning: 'Mantıksız', pos: 'adj' }
    ],
    collocations: ['sensible advice', 'sensible decision', 'sensible option'],
    collocationMeanings: {
      'sensible advice': 'mantıklı tavsiye',
      'sensible decision': 'akılcı karar',
      'sensible option': 'mantıklı seçenek'
    },
    examples: ["I don't see how any sensible person could agree with him."],
    exampleTranslations: ['Aklı başında herhangi birinin ona nasıl katılabileceğini anlamıyorum.']
  },
  {
    id: 'sociable_lh',
    word: 'Sociable',
    pos: 'adjective',
    meaning: 'Sosyal, arkadaş canlısı',
    definition: 'Someone who is friendly and enjoys being with other people.',
    ipa: '/ˈsəʊ.ʃə.bəl/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'society', pos: 'noun', meaning: 'toplum' },
      { word: 'socialise', pos: 'verb', meaning: 'sosyalleşmek' }
    ],
    synonyms: [
      { word: 'Outgoing', meaning: 'Canayakın/Dışa dönük', pos: 'adj' },
      { word: 'Friendly', meaning: 'Arkadaş canlısı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unsociable', meaning: 'Soğuk/Asosyal', pos: 'adj' },
      { word: 'Withdrawn', meaning: 'İçine kapanık', pos: 'adj' }
    ],
    collocations: ['highly sociable', 'sociable person'],
    collocationMeanings: {
      'highly sociable': 'oldukça sosyal',
      'sociable person': 'sosyal kişi'
    },
    examples: ["I'm not feeling very sociable today."],
    exampleTranslations: ['Bugün pek sosyal hissetmiyorum.']
  },
  {
    id: 'well-organised_lh',
    word: 'Well-organised',
    pos: 'adjective',
    meaning: 'Düzenli, planlı',
    definition: 'Someone who arranges and plans activities carefully and effectively.',
    ipa: '/ˌwel ˈɔː.ɡə.naɪzd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'organise', pos: 'verb', meaning: 'düzenlemek' },
      { word: 'organisation', pos: 'noun', meaning: 'organizasyon/düzen' }
    ],
    synonyms: [
      { word: 'Methodical', meaning: 'Yöntemli', pos: 'adj' },
      { word: 'Efficient', meaning: 'Verimli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Disorganised', meaning: 'Düzensiz', pos: 'adj' },
      { word: 'Messy', meaning: 'Dağınık', pos: 'adj' }
    ],
    collocations: ['well-organised office', 'stay well-organised'],
    collocationMeanings: {
      'well-organised office': 'düzenli ofis',
      'stay well-organised': 'düzenli kalmak'
    },
    examples: ["He's always so well-organised."],
    exampleTranslations: ['O her zaman çok düzenlidir.']
  },
  {
    id: 'keen_on_lh',
    word: 'Keen on',
    pos: 'adjective + preposition',
    meaning: 'Meraklı, düşkün',
    definition: 'Wanting to do something, or wanting other people to do something.',
    ipa: '/kiːn ɒn/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'keenness', pos: 'noun', meaning: 'heves/istek' }
    ],
    synonyms: [
      { word: 'Enthusiastic about', meaning: 'Hevesli', pos: 'phrase' },
      { word: 'Eager', meaning: 'İstekli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Apathetic', meaning: 'İlgisiz', pos: 'adj' },
      { word: 'Uninterested', meaning: 'İsteksiz', pos: 'adj' }
    ],
    collocations: ['very keen on', 'not keen on'],
    collocationMeanings: {
      'very keen on': 'çok düşkün',
      'not keen on': 'sıcak bakmamak'
    },
    examples: ["The captain wasn't keen on having him in the team."],
    exampleTranslations: ['Kaptan onu takımda görmeye pek hevesli değildi.']
  },
  {
    id: 'involved_in_lh',
    word: 'Involved in',
    pos: 'adjective + preposition',
    meaning: 'Dahil olmak, içinde yer almak',
    definition: 'Taking part in something.',
    ipa: '/ɪnˈvɒlvd ɪn/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'involvement', pos: 'noun', meaning: 'katılım' },
      { word: 'involve', pos: 'verb', meaning: 'içermek/dahil etmek' }
    ],
    synonyms: [
      { word: 'Participating in', meaning: 'Katılımcı', pos: 'phrase' },
      { word: 'Engaged in', meaning: 'Uğraşan', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Excluded from', meaning: 'Dışlanmış', pos: 'phrase' }
    ],
    collocations: ['deeply involved in', 'get involved in'],
    collocationMeanings: {
      'deeply involved in': 'derinden müdahil',
      'get involved in': 'bir şeye dahil olmak'
    },
    examples: ['Phillip was involved in organising the party.'],
    exampleTranslations: ['Phillip partiyi organize etme işine dahil olmuştu.']
  },
  {
    id: 'responsible_for_lh',
    word: 'Responsible for',
    pos: 'adjective + preposition',
    meaning: 'Sorumlu olmak',
    definition: 'Being in charge of someone or something.',
    ipa: '/rɪˈspɒn.sə.bəl fɔːr/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'responsibility', pos: 'noun', meaning: 'sorumluluk' },
      { word: 'responsibly', pos: 'adv', meaning: 'sorumlulukla' }
    ],
    synonyms: [
      { word: 'In charge of', meaning: 'Yönetiminde/Başında', pos: 'phrase' },
      { word: 'Accountable', meaning: 'Hesap verebilir', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Irresponsible', meaning: 'Sorumsuz', pos: 'adj' }
    ],
    collocations: ['solely responsible for', 'personally responsible for'],
    collocationMeanings: {
      'solely responsible for': 'tek başına sorumlu',
      'personally responsible for': 'şahsen sorumlu'
    },
    examples: ['The manager is responsible for the general running of the theatre.'],
    exampleTranslations: ['Müdür tiyatronun genel işleyişinden sorumludur.']
  },
  {
    id: 'attractive_lh',
    word: 'Attractive',
    pos: 'adjective',
    meaning: 'Çekici, hoş',
    definition: 'Pleasant in some way.',
    ipa: '/əˈtræk.tɪv/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'attraction', pos: 'noun', meaning: 'cazibe' },
      { word: 'attract', pos: 'verb', meaning: 'cezbetmek' }
    ],
    synonyms: [
      { word: 'Appealing', meaning: 'Çekici', pos: 'adj' },
      { word: 'Good-looking', meaning: 'Yakışıklı/Güzel', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Ugly', meaning: 'Çirkin', pos: 'adj' },
      { word: 'Repulsive', meaning: 'İtici', pos: 'adj' }
    ],
    collocations: ['physically attractive', 'attractive countryside'],
    collocationMeanings: {
      'physically attractive': 'fiziksel olarak çekici',
      'attractive countryside': 'hoş kırsal manzara'
    },
    examples: ["It's a pretty village set in attractive countryside."],
    exampleTranslations: ['Çekici bir kırsal bölgede kurulmuş güzel bir köydür.']
  },
  {
    id: 'convenient_lh',
    word: 'Convenient',
    pos: 'adjective',
    meaning: 'Uygun, elverişli',
    definition: 'Easy to use, or appropriate for a particular purpose.',
    ipa: '/kənˈviː.ni.ənt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'convenience', pos: 'noun', meaning: 'kolaylık' },
      { word: 'conveniently', pos: 'adv', meaning: 'uygun bir şekilde' }
    ],
    synonyms: [
      { word: 'Handy', meaning: 'Kullanışlı', pos: 'adj' },
      { word: 'Suitable', meaning: 'Uygun', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Inconvenient', meaning: 'Uygunsuz', pos: 'adj' }
    ],
    collocations: ['convenient location', 'convenient time'],
    collocationMeanings: {
      'convenient location': 'uygun konum',
      'convenient time': 'uygun zaman'
    },
    examples: ['The hotel was only five minutes from the beach, which was convenient.'],
    exampleTranslations: ['Otel plaja sadece beş dakika mesafeydi, bu da oldukça uygundu.']
  },
  {
    id: 'inconvenient_lh',
    word: 'Inconvenient',
    pos: 'adjective',
    meaning: 'Uygunsuz, zahmetli',
    definition: 'Causing difficulties or extra effort.',
    ipa: '/ˌɪn.kənˈviː.ni.ənt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'inconvenience', pos: 'noun', meaning: 'zahmet/zorluk' }
    ],
    synonyms: [
      { word: 'Troublesome', meaning: 'Zahmetli', pos: 'adj' },
      { word: 'Awkward', meaning: 'Sıkıntılı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Convenient', meaning: 'Uygun', pos: 'adj' }
    ],
    collocations: ['highly inconvenient', 'inconvenient truth'],
    collocationMeanings: {
      'highly inconvenient': 'son derece uygunsuz',
      'inconvenient truth': 'acı gerçek'
    },
    examples: ['There are no trains today, which is quite inconvenient.'],
    exampleTranslations: ['Bugün hiç tren yok, bu oldukça uygunsuz bir durum.']
  },
  {
    id: 'loud_lh',
    word: 'Loud',
    pos: 'adjective',
    meaning: 'Yüksek sesli',
    definition: 'Used for describing a sound that is strong and very easy to hear.',
    ipa: '/laʊd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'loudly', pos: 'adv', meaning: 'yüksek sesle' },
      { word: 'loudness', pos: 'noun', meaning: 'ses yüksekliği' }
    ],
    synonyms: [
      { word: 'Noisy', meaning: 'Gürültülü', pos: 'adj' },
      { word: 'Blaring', meaning: 'Bangır bangır', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Quiet', meaning: 'Sessiz', pos: 'adj' },
      { word: 'Soft', meaning: 'Yumuşak (ses)', pos: 'adj' }
    ],
    collocations: ['loud noise', 'loud music', 'think out loud'],
    collocationMeanings: {
      'loud noise': 'yüksek ses',
      'loud music': 'yüksek sesli müzik',
      'think out loud': 'sesli düşünmek'
    },
    examples: ['There was a loud knocking on the door.'],
    exampleTranslations: ['Kapıda yüksek sesli bir vurma sesi vardı.']
  },
  {
    id: 'noisy_lh',
    word: 'Noisy',
    pos: 'adjective',
    meaning: 'Gürültülü',
    definition: 'Making a lot of noise.',
    ipa: '/ˈnɔɪ.zi/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'noise', pos: 'noun', meaning: 'gürültü' },
      { word: 'noisily', pos: 'adv', meaning: 'gürültülü bir şekilde' }
    ],
    synonyms: [
      { word: 'Boisterous', meaning: 'Gürültücü/Şamatacı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Quiet', meaning: 'Sessiz', pos: 'adj' },
      { word: 'Silent', meaning: 'Sessiz/Gürültüsüz', pos: 'adj' }
    ],
    collocations: ['noisy neighbors', 'noisy restaurant'],
    collocationMeanings: {
      'noisy neighbors': 'gürültülü komşular',
      'noisy restaurant': 'gürültülü restoran'
    },
    examples: ['Unfortunately we have noisy neighbours.'],
    exampleTranslations: ['Maalesef gürültülü komşularımız var.']
  },
  {
    id: 'old-fashioned_lh',
    word: 'Old-fashioned',
    pos: 'adjective',
    meaning: 'Eski moda, demode',
    definition: 'No longer modern or fashionable.',
    ipa: '/ˌəʊldˈfæʃ.ənd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'fashion', pos: 'noun', meaning: 'moda' }
    ],
    synonyms: [
      { word: 'Outdated', meaning: 'Güncelliğini yitirmiş', pos: 'adj' },
      { word: 'Antiquated', meaning: 'Antika/Eski', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Modern', meaning: 'Modern', pos: 'adj' },
      { word: 'Trendy', meaning: 'Modaya uygun', pos: 'adj' }
    ],
    collocations: ['old-fashioned briefcase', 'old-fashioned ideas'],
    collocationMeanings: {
      'old-fashioned briefcase': 'eski moda çanta',
      'old-fashioned ideas': 'eski moda fikirler'
    },
    examples: ['Blake was carrying an old-fashioned leather briefcase.'],
    exampleTranslations: ['Blake eski moda deri bir çanta taşıyordu.']
  },
  {
    id: 'rely_on_lh',
    word: 'Rely on',
    pos: 'verb + preposition',
    meaning: 'Güvenmek, bel bağlamak',
    definition: 'To trust someone to do something for you.',
    ipa: '/rɪˈlaɪ ɒn/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'reliable', pos: 'adj', meaning: 'güvenilir' },
      { word: 'reliance', pos: 'noun', meaning: 'güven/bağımlılık' }
    ],
    synonyms: [
      { word: 'Depend on', meaning: 'Bağlı olmak', pos: 'phrase' },
      { word: 'Trust', meaning: 'Güvenmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Distrust', meaning: 'Güvenmemek', pos: 'verb' }
    ],
    collocations: ['heavily rely on', 'can rely on'],
    collocationMeanings: {
      'heavily rely on': 'büyük ölçüde bel bağlamak',
      'can rely on': 'güvenebilirsin'
    },
    examples: ['We can rely on my brother to help us.'],
    exampleTranslations: ['Bize yardım etmesi için kardeşime güvenebiliriz.']
  },
  {
    id: 'fall_in_love_lh',
    word: 'Fall in love',
    pos: 'verb phrase',
    meaning: 'Aşık olmak',
    definition: 'To start to love someone.',
    ipa: '/fɔːl ɪn lʌv/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Fall for', meaning: 'Tutulmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Fall out of love', meaning: 'Aşktan soğumak', pos: 'phrase' }
    ],
    collocations: ['fall in love with', 'quickly fall in love'],
    collocationMeanings: {
      'fall in love with': 'birine aşık olmak',
      'quickly fall in love': 'çabucak aşık olmak'
    },
    examples: ['Why do we fall in love with one person rather than another?'],
    exampleTranslations: ['Neden başkasına değil de bir kişiye aşık oluruz?']
  },
  {
    id: 'coach_lh',
    word: 'Coach',
    pos: 'noun',
    meaning: 'Şehirlerarası otobüs',
    definition: 'A long comfortable vehicle for carrying a large number of passengers, especially on long journeys.',
    ipa: '/kəʊtʃ/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Bus', meaning: 'Otobüs', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['travel by coach', 'luxury coach'],
    collocationMeanings: {
      'travel by coach': 'otobüsle seyahat etmek',
      'luxury coach': 'lüks otobüs'
    },
    examples: ['We travelled to Oxford by coach.'],
    exampleTranslations: ['Oxford\'a otobüsle seyahat ettik.']
  },
  {
    id: 'tram_lh',
    word: 'Tram',
    pos: 'noun',
    meaning: 'Tramvay',
    definition: 'A long narrow vehicle that travels along metal tracks in the middle of a street.',
    ipa: '/træm/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Streetcar', meaning: 'Tramvay (ABD)', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['tram tracks', 'ride the tram'],
    collocationMeanings: {
      'tram tracks': 'tramvay rayları',
      'ride the tram': 'tramvaya binmek'
    },
    examples: ['The city has a tram which you can use to travel around.'],
    exampleTranslations: ['Şehirde gezmek için kullanabileceğiniz bir tramvay var.']
  },
  {
    id: 'dishonest_lh',
    word: 'Dishonest',
    pos: 'adjective',
    meaning: 'Dürüst olmayan, sahtekar',
    definition: 'Willing to do things that are not honest, for example to tell lies or steal things.',
    ipa: '/dɪˈsɒn.ɪst/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'honesty', pos: 'noun', meaning: 'dürüstlük' },
      { word: 'dishonestly', pos: 'adv', meaning: 'namussuzca' }
    ],
    synonyms: [
      { word: 'Deceitful', meaning: 'Aldatıcı', pos: 'adj' },
      { word: 'Crooked', meaning: 'Düzenbaz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Honest', meaning: 'Dürüst', pos: 'adj' },
      { word: 'Trustworthy', meaning: 'Güvenilir', pos: 'adj' }
    ],
    collocations: ['dishonest behavior', 'dishonest employee'],
    collocationMeanings: {
      'dishonest behavior': 'dürüst olmayan davranış',
      'dishonest employee': 'dürüst olmayan çalışan'
    },
    examples: ['They admitted that there were some dishonest employees working in the bank.'],
    exampleTranslations: ['Bankada çalışan bazı dürüst olmayan personeller olduğunu kabul ettiler.']
  },
  {
    id: 'disorganised_lh',
    word: 'Disorganised',
    pos: 'adjective',
    meaning: 'Düzensiz',
    definition: 'Not arranged according to a clear plan or system.',
    ipa: '/dɪsˈɔː.ɡə.naɪzd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'organise', pos: 'verb', meaning: 'düzenlemek' }
    ],
    synonyms: [
      { word: 'Messy', meaning: 'Dağınık', pos: 'adj' },
      { word: 'Chaos', meaning: 'Kaotik', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Well-organised', meaning: 'Düzenli', pos: 'adj' },
      { word: 'Tidy', meaning: 'Derli toplu', pos: 'adj' }
    ],
    collocations: ['highly disorganised', 'disorganised person'],
    collocationMeanings: {
      'highly disorganised': 'son derece düzensiz',
      'disorganised person': 'düzensiz kişi'
    },
    examples: ["He is very disorganised - he doesn't know where anything is!"],
    exampleTranslations: ['O çok düzensizdir - hiç bir şeyin nerede olduğunu bilmiyor!']
  },
  {
    id: 'impatient_lh',
    word: 'Impatient',
    pos: 'adjective',
    meaning: 'Sabırsız',
    definition: 'Annoyed because something is not happening as quickly as you want.',
    ipa: '/ɪmˈpeɪ.ʃənt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'patience', pos: 'noun', meaning: 'sabır' },
      { word: 'impatiently', pos: 'adv', meaning: 'sabırsızca' }
    ],
    synonyms: [
      { word: 'Restless', meaning: 'Huzursuz/Sabırsız', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Patient', meaning: 'Sabırlı', pos: 'adj' }
    ],
    collocations: ['get impatient', 'grow impatient'],
    collocationMeanings: {
      'get impatient': 'sabırsızlanmak',
      'grow impatient': 'sabırsızlığı artmak'
    },
    examples: ["'Come on!' said Maggie, becoming impatient."],
    exampleTranslations: ["'Hadi ama!' dedi Maggie sabırsızlanarak."]
  },
  {
    id: 'impolite_lh',
    word: 'Impolite',
    pos: 'adjective',
    meaning: 'Kaba, nezaketsiz',
    definition: 'Not polite.',
    ipa: '/ˌɪm.pəˈlaɪt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'politeness', pos: 'noun', meaning: 'nezaket' },
      { word: 'impolitely', pos: 'adv', meaning: 'kabaca' }
    ],
    synonyms: [
      { word: 'Rude', meaning: 'Kaba', pos: 'adj' },
      { word: 'Disrespectful', meaning: 'Saygısız', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Polite', meaning: 'Nazik', pos: 'adj' },
      { word: 'Courteous', meaning: 'Kibar', pos: 'adj' }
    ],
    collocations: ['extremely impolite', 'impolite remark'],
    collocationMeanings: {
      'extremely impolite': 'son derece kaba',
      'impolite remark': 'nezaketsiz söz'
    },
    examples: ['It would be impolite to leave the party so early.'],
    exampleTranslations: ['Partiden bu kadar erken ayrılmak kabalık olur.']
  },
  {
    id: 'inaccurate_lh',
    word: 'Inaccurate',
    pos: 'adjective',
    meaning: 'Hatalı, yanlış',
    definition: 'Not accurate or correct.',
    ipa: '/ɪnˈæk.jə.rət/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'accuracy', pos: 'noun', meaning: 'doğruluk/kesinlik' },
      { word: 'inaccurately', pos: 'adv', meaning: 'hatalı bir şekilde' }
    ],
    synonyms: [
      { word: 'Incorrect', meaning: 'Yanlış', pos: 'adj' },
      { word: 'Wrong', meaning: 'Hatalı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Accurate', meaning: 'Doğru/Kesin', pos: 'adj' },
      { word: 'Correct', meaning: 'Doğru', pos: 'adj' }
    ],
    collocations: ['highly inaccurate', 'totally inaccurate'],
    collocationMeanings: {
      'highly inaccurate': 'son derece hatalı',
      'totally inaccurate': 'tamamen yanlış'
    },
    examples: ['She was given inaccurate information.'],
    exampleTranslations: ['Ona yanlış bilgi verildi.']
  },
  {
    id: 'unkind_lh',
    word: 'Unkind',
    pos: 'adjective',
    meaning: 'Nezaketsiz, katı',
    definition: 'Unfriendly, insulting, or cruel.',
    ipa: '/ʌnˈkaɪnd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'kindness', pos: 'noun', meaning: 'nezaket' },
      { word: 'unkindly', pos: 'adv', meaning: 'kabaca' }
    ],
    synonyms: [
      { word: 'Cruel', meaning: 'Zalim', pos: 'adj' },
      { word: 'Mean', meaning: 'Kaba/Aşağılık', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Kind', meaning: 'Nazik', pos: 'adj' },
      { word: 'Friendly', meaning: 'Arkadaş canlısı', pos: 'adj' }
    ],
    collocations: ['unkind remark', 'be unkind to'],
    collocationMeanings: {
      'unkind remark': 'nezaketsiz söz',
      'be unkind to': 'birine karşı kaba olmak'
    },
    examples: ['He made an unkind remark.'],
    exampleTranslations: ['Kaba bir yorumda bulundu.']
  },
  {
    id: 'balcony_lh',
    word: 'Balcony',
    pos: 'noun',
    meaning: 'Balkon',
    definition: 'A place where you can stand just outside an upper window.',
    ipa: '/ˈbæl.kə.ni/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Terrace', meaning: 'Teras', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['on the balcony', 'small balcony'],
    collocationMeanings: {
      'on the balcony': 'balkonda',
      'small balcony': 'küçük balkon'
    },
    examples: ['We ate dinner on the balcony.'],
    exampleTranslations: ['Akşam yemeğini balkonda yedik.']
  },
  {
    id: 'beach_resort_lh',
    word: 'Beach resort',
    pos: 'noun',
    meaning: 'Plaj tesisi, tatil köyü',
    definition: 'A place many people go to for a holiday that is located by a beach.',
    ipa: '/biːtʃ rɪˈzɔːt/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Seaside resort', meaning: 'Deniz kenarı tatil yeri', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['popular beach resort', 'luxury beach resort'],
    collocationMeanings: {
      'popular beach resort': 'popüler plaj tesisi',
      'luxury beach resort': 'lüks plaj tesisi'
    },
    examples: ['A holiday at a beach resort is the most relaxing break.'],
    exampleTranslations: ['Bir plaj tesisindeki tatil en dinlendirici moladır.']
  },
  {
    id: 'chalet_lh',
    word: 'Chalet',
    pos: 'noun',
    meaning: 'Dağ evi',
    definition: 'A wooden house built in a mountain area, especially in Switzerland.',
    ipa: '/ˈʃæl.eɪ/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Log cabin', meaning: 'Kütük ev', pos: 'noun' },
      { word: 'Mountain lodge', meaning: 'Dağ kulübesi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['ski chalet', 'wooden chalet'],
    collocationMeanings: {
      'ski chalet': 'kayak evi',
      'wooden chalet': 'ahşap dağ evi'
    },
    examples: ['The chalet had a great view of the mountains.'],
    exampleTranslations: ['Dağ evinin harika bir dağ manzarası vardı.']
  },
  {
    id: 'cruise_ship_lh',
    word: 'Cruise ship',
    pos: 'noun',
    meaning: 'Yolcu gemisi, kruvaziyer',
    definition: 'A large comfortable ship used for cruises.',
    ipa: '/kruːz ʃɪp/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Ocean liner', meaning: 'Okyanus gemisi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['luxury cruise ship', 'on a cruise ship'],
    collocationMeanings: {
      'luxury cruise ship': 'lüks yolcu gemisi',
      'on a cruise ship': 'bir yolcu gemisinde'
    },
    examples: ['The cruise ship went around the Caribbean.'],
    exampleTranslations: ['Yolcu gemisi Karayipler etrafında tur attı.']
  },
  {
    id: 'dorm_lh',
    word: 'Dorm',
    pos: 'noun',
    meaning: 'Yurt, yatakhane',
    definition: 'Shortened form of dormitory which is a large room where a lot of people sleep.',
    ipa: '/dɔːm/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'dormitory', pos: 'noun', meaning: 'yurt' }
    ],
    synonyms: [
      { word: 'Hostel room', meaning: 'Yurt odası', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['university dorm', 'crowded dorm'],
    collocationMeanings: {
      'university dorm': 'üniversite yurdu',
      'crowded dorm': 'kalabalık yatakhane'
    },
    examples: ['The dorm was full and very noisy.'],
    exampleTranslations: ['Yatakhane doluydu ve çok gürültülüydü.']
  },
  {
    id: 'campsite_lh',
    word: 'Campsite',
    pos: 'noun',
    meaning: 'Kamp alanı',
    definition: 'A place where people on holiday can stay outdoors in tents.',
    ipa: '/ˈkæmp.saɪt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'camping', pos: 'noun', meaning: 'kamp yapma' },
      { word: 'camp', pos: 'verb', meaning: 'kamp kurmak' }
    ],
    synonyms: [
      { word: 'Campground', meaning: 'Kamp yeri', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['pitch a tent at a campsite', 'official campsite'],
    collocationMeanings: {
      'pitch a tent at a campsite': 'kamp alanında çadır kurmak',
      'official campsite': 'resmi kamp alanı'
    },
    examples: ['The children enjoyed staying at the campsite.'],
    exampleTranslations: ['Çocuklar kamp alanında kalmaktan keyif aldılar.']
  },
  {
    id: 'self-catering_lh',
    word: 'Self-catering',
    pos: 'adjective',
    meaning: 'Yemeğini kendi sağlayan',
    definition: 'A type of holiday or accommodation where you can cook your own food.',
    ipa: '/ˌselfˈkeɪ.tər.ɪŋ/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'cater', pos: 'verb', meaning: 'yemek tedarik etmek' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'All-inclusive', meaning: 'Her şey dahil', pos: 'adj' }
    ],
    collocations: ['self-catering apartment', 'self-catering holiday'],
    collocationMeanings: {
      'self-catering apartment': 'mutfaklı daire',
      'self-catering holiday': 'yemeği kendin yaptığın tatil'
    },
    examples: ['It is easier to book self-catering accommodation when you have children.'],
    exampleTranslations: ['Çocuğunuz olduğunda mutfaklı konaklama yeri ayırtmak daha kolaydır.']
  },
  {
    id: 'reception_lh',
    word: 'Reception',
    pos: 'noun',
    meaning: 'Resepsiyon, karşılama',
    definition: 'The part of a large building such as a hotel or office where visitors are welcomed.',
    ipa: '/rɪˈsep.ʃən/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'receptionist', pos: 'noun', meaning: 'resepsiyonist' },
      { word: 'receive', pos: 'verb', meaning: 'karşılamak/almak' }
    ],
    synonyms: [
      { word: 'Front desk', meaning: 'Ön büro', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['reception desk', 'check in at reception'],
    collocationMeanings: {
      'reception desk': 'resepsiyon masası',
      'check in at reception': 'resepsiyonda giriş yapmak'
    },
    examples: ['Visitors must report to reception first.'],
    exampleTranslations: ['Ziyaretçiler önce resepsiyona bildirmelidir.']
  },
  {
    id: 'possibility_lh',
    word: 'Possibility',
    pos: 'noun',
    meaning: 'Olasılık, ihtimal',
    definition: 'The chance that something might happen or be true.',
    ipa: '/ˌpɒs.əˈbɪl.ə.ti/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'possible', pos: 'adj', meaning: 'mümkün' },
      { word: 'possibly', pos: 'adv', meaning: 'belki/muhtemelen' }
    ],
    synonyms: [
      { word: 'Likelihood', meaning: 'Olasılık', pos: 'noun' },
      { word: 'Chance', meaning: 'Şans/İhtimal', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Impossibility', meaning: 'İmkansızlık', pos: 'noun' }
    ],
    collocations: ['distinct possibility', 'explore the possibility'],
    collocationMeanings: {
      'distinct possibility': 'belirgin olasılık',
      'explore the possibility': 'olasılığı araştırmak'
    },
    examples: ["Another possibility is that we'll go to Mexico instead."],
    exampleTranslations: ['Diğer bir olasılık da onun yerine Meksika\'ya gidecek olmamız.']
  },
  {
    id: 'prediction_lh',
    word: 'Prediction',
    pos: 'noun',
    meaning: 'Tahmin, öngörü',
    definition: 'A statement about what you think will happen in the future.',
    ipa: '/prɪˈdɪk.ʃən/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'predict', pos: 'verb', meaning: 'tahmin etmek' },
      { word: 'predictable', pos: 'adj', meaning: 'öngörülebilir' }
    ],
    synonyms: [
      { word: 'Forecast', meaning: 'Öngörü', pos: 'noun' },
      { word: 'Prophecy', meaning: 'Kehanet', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['make a prediction', 'accurate prediction'],
    collocationMeanings: {
      'make a prediction': 'tahminde bulunmak',
      'accurate prediction': 'doğru tahmin'
    },
    examples: ['The government has made a prediction that unemployment will rise this year.'],
    exampleTranslations: ['Hükümet, bu yıl işsizliğin artacağı yönünde bir öngörüde bulundu.']
  },
  {
    id: 'agreement_lh',
    word: 'Agreement',
    pos: 'noun',
    meaning: 'Anlaşma, mutabakat',
    definition: 'An arrangement or decision about what to do, made by two or more people or groups.',
    ipa: '/əˈɡriː.mənt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'agree', pos: 'verb', meaning: 'anlaşmak' }
    ],
    synonyms: [
      { word: 'Contract', meaning: 'Sözleşme', pos: 'noun' },
      { word: 'Deal', meaning: 'Anlaşma', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disagreement', meaning: 'Anlaşmazlık', pos: 'noun' }
    ],
    collocations: ['reach an agreement', 'sign an agreement'],
    collocationMeanings: {
      'reach an agreement': 'anlaşmaya varmak',
      'sign an agreement': 'anlaşma imzalamak'
    },
    examples: ['Our agreement was that you would pay by the first of the month.'],
    exampleTranslations: ['Anlaşmamız, ödemeyi ayın birine kadar yapacağınız yönündeydi.']
  },
  {
    id: 'development_lh',
    word: 'Development',
    pos: 'noun',
    meaning: 'Gelişim, ilerleme',
    definition: 'Change, growth, or improvement over a period of time.',
    ipa: '/dɪˈvel.əp.mənt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'develop', pos: 'verb', meaning: 'geliştirmek' }
    ],
    synonyms: [
      { word: 'Progress', meaning: 'İlerleme', pos: 'noun' },
      { word: 'Growth', meaning: 'Büyüme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Regression', meaning: 'Gerileme', pos: 'noun' },
      { word: 'Decline', meaning: 'Düşüş', pos: 'noun' }
    ],
    collocations: ['personal development', 'economic development'],
    collocationMeanings: {
      'personal development': 'kişisel gelişim',
      'economic development': 'ekonomik gelişim'
    },
    examples: ['We encourage our staff in their development of new skills.'],
    exampleTranslations: ['Personelimizi yeni beceriler geliştirme konusunda teşvik ediyoruz.']
  },
  {
    id: 'invention_lh',
    word: 'Invention',
    pos: 'noun',
    meaning: 'İcat, buluş',
    definition: 'A machine, tool, or system that someone has made, designed, or thought of for the first time.',
    ipa: '/ɪnˈven.ʃən/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'invent', pos: 'verb', meaning: 'icat etmek' },
      { word: 'inventor', pos: 'noun', meaning: 'mucit' }
    ],
    synonyms: [
      { word: 'Innovation', meaning: 'Yenilik', pos: 'noun' },
      { word: 'Discovery', meaning: 'Keşif', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['great invention', 'modern invention'],
    collocationMeanings: {
      'great invention': 'büyük buluş',
      'modern invention': 'modern icat'
    },
    examples: ['Inventions like the electric light bulb changed the way people lived.'],
    exampleTranslations: ['Elektrikli ampul gibi icatlar insanların yaşayış biçimini değiştirdi.']
  },
  {
    id: 'kindness_lh',
    word: 'Kindness',
    pos: 'noun',
    meaning: 'Nezaket, iyilik',
    definition: 'Kind behaviour, or kind feelings.',
    ipa: '/ˈkaɪnd.nəs/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'kind', pos: 'adj', meaning: 'nazik' }
    ],
    synonyms: [
      { word: 'Benevolence', meaning: 'İyilikseverlik', pos: 'noun' },
      { word: 'Generosity', meaning: 'Cömertlik', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Cruelty', meaning: 'Zalimlik', pos: 'noun' },
      { word: 'Meanness', meaning: 'Kabalık', pos: 'noun' }
    ],
    collocations: ['act of kindness', 'show kindness'],
    collocationMeanings: {
      'act of kindness': 'iyilik hareketi',
      'show kindness': 'nezaket göstermek'
    },
    examples: ['I shall never forget the kindness of the nursing staff.'],
    exampleTranslations: ['Hemşirelerin gösterdiği nezaketi asla unutmayacağım.']
  },
  {
    id: 'by_the_fire_lh',
    word: 'By the fire',
    pos: 'phrase',
    meaning: 'Ateşin başında, şömine yanı',
    definition: 'In a position near a fire.',
    ipa: '/baɪ ðə faɪər/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['sit by the fire'],
    collocationMeanings: {
      'sit by the fire': 'ateşin başında oturmak'
    },
    examples: ['The cat curled up by the fire.'],
    exampleTranslations: ['Kedi ateşin başında kıvrılıp yattı.']
  },
  {
    id: 'get_together_lh',
    word: 'Get together',
    pos: 'phrase',
    meaning: 'Bir araya gelmek, buluşmak',
    definition: 'If people get together, they meet in order to do something or to spend time together.',
    ipa: '/ɡet təˈɡeð.ər/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Meet up', meaning: 'Buluşmak', pos: 'phrase' },
      { word: 'Assemble', meaning: 'Toplanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Part ways', meaning: 'Ayrılmak', pos: 'phrase' }
    ],
    collocations: ['family get together', 'social get together'],
    collocationMeanings: {
      'family get together': 'aile buluşması',
      'social get together': 'sosyal toplantı'
    },
    examples: ['Greg suggested getting together next weekend.'],
    exampleTranslations: ['Greg önümüzdeki hafta sonu bir araya gelmeyi önerdi.']
  },
  {
    id: 'sadness_lh',
    word: 'Sadness',
    pos: 'noun',
    meaning: 'Üzüntü, keder',
    definition: 'The feeling of being unhappy, especially because something bad has happened.',
    ipa: '/ˈsæd.nəs/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'sad', pos: 'adj', meaning: 'üzgün' },
      { word: 'sadly', pos: 'adv', meaning: 'maalesef' }
    ],
    synonyms: [
      { word: 'Sorrow', meaning: 'Keder', pos: 'noun' },
      { word: 'Grief', meaning: 'Yas/Derin üzüntü', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Happiness', meaning: 'Mutluluk', pos: 'noun' },
      { word: 'Joy', meaning: 'Neşe', pos: 'noun' }
    ],
    collocations: ['overcome with sadness', 'deep sadness'],
    collocationMeanings: {
      'overcome with sadness': 'kederden bitkin düşmek',
      'deep sadness': 'derin üzüntü'
    },
    examples: ["Joan's childhood was filled with pain and sadness."],
    exampleTranslations: ['Joan\'un çocukluğu acı ve kederle doluydu.']
  },
  {
    id: 'get_a_pay_rise_lh',
    word: 'Get a pay rise',
    pos: 'phrase',
    meaning: 'Maaş zammı almak',
    definition: 'To receive an increase in the amount of money you are paid for doing your job.',
    ipa: '/ɡet ə peɪ raɪz/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Get a salary increase', meaning: 'Maaş artışı almak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['hope to get a pay rise'],
    collocationMeanings: {
      'hope to get a pay rise': 'maaş zammı almayı ummak'
    },
    examples: ['I hope to get a pay rise next year.'],
    exampleTranslations: ['Gelecek yıl maaş zammı almayı umuyorum.']
  },
  {
    id: 'earn_a_salary_lh',
    word: 'Earn a salary',
    pos: 'phrase',
    meaning: 'Maaş kazanmak',
    definition: 'Receive an amount of money, every month or year, for the work you do.',
    ipa: '/ɜːn ə ˈsæl.ər.i/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Make money', meaning: 'Para kazanmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['earn a high salary', 'start to earn a salary'],
    collocationMeanings: {
      'earn a high salary': 'yüksek maaş kazanmak',
      'start to earn a salary': 'maaş almaya başlamak'
    },
    examples: ['When I earn a salary, I can save to buy a house.'],
    exampleTranslations: ['Maaş almaya başladığımda, ev almak için birikim yapabilirim.']
  },
  {
    id: 'unemployed_lh',
    word: 'Unemployed',
    pos: 'adjective',
    meaning: 'İşsiz',
    definition: 'Without a paid job but available to work.',
    ipa: '/ˌʌn.ɪmˈplɔɪd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'employment', pos: 'noun', meaning: 'istihdam' },
      { word: 'employ', pos: 'verb', meaning: 'işe almak' }
    ],
    synonyms: [
      { word: 'Jobless', meaning: 'İşsiz', pos: 'adj' },
      { word: 'Out of work', meaning: 'İşsiz kalmış', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Employed', meaning: 'İşi olan', pos: 'adj' }
    ],
    collocations: ['become unemployed', 'long-term unemployed'],
    collocationMeanings: {
      'become unemployed': 'işsiz kalmak',
      'long-term unemployed': 'uzun süreli işsiz'
    },
    examples: ['He has been unemployed for 3 months.'],
    exampleTranslations: ['3 aydır işsiz.']
  },
  {
    id: 'work_long_hours_lh',
    word: 'Work long hours',
    pos: 'phrase',
    meaning: 'Fazla mesai yapmak, uzun saatler çalışmak',
    definition: 'To do your job for more time than is normal.',
    ipa: '/wɜːk lɒŋ aʊərz/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Work overtime', meaning: 'Fazla mesai yapmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Work part-time', meaning: 'Yarı zamanlı çalışmak', pos: 'phrase' }
    ],
    collocations: ['forced to work long hours', 'accustomed to work long hours'],
    collocationMeanings: {
      'forced to work long hours': 'uzun saatler çalışmaya zorlanmak',
      'accustomed to work long hours': 'uzun saatler çalışmaya alışık olmak'
    },
    examples: ['Police officers have to work long hours.'],
    exampleTranslations: ['Polis memurları uzun saatler çalışmak zorundadır.']
  },
  {
    id: 'stylish_lh',
    word: 'Stylish',
    pos: 'adjective',
    meaning: 'Şık, tarz sahibi',
    definition: 'Showing good judgement about how to dress well.',
    ipa: "/ˈstaɪ.lɪʃ/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'style', pos: 'noun', meaning: 'tarz' },
      { word: 'stylishly', pos: 'adv', meaning: 'şık bir şekilde' }
    ],
    synonyms: [
      { word: 'Fashionable', meaning: 'Modaya uygun', pos: 'adj' },
      { word: 'Chic', meaning: 'Şık', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unstylish', meaning: 'Rüküş/Tarzsız', pos: 'adj' }
    ],
    collocations: ['stylish dresser', 'stylish clothes'],
    collocationMeanings: {
      'stylish dresser': 'şık giyinen kişi',
      'stylish clothes': 'şık kıyafetler'
    },
    examples: ['She is a stylish dresser.'],
    exampleTranslations: ['O, şık giyinen biridir.']
  },
  {
    id: 'casual_lh',
    word: 'Casual',
    pos: 'adjective',
    meaning: 'Gündelik, spor (giyim)',
    definition: 'Relaxed and comfortable.',
    ipa: "/ˈkæʒ.u.əl/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'casually', pos: 'adv', meaning: 'gündelik bir şekilde' }
    ],
    synonyms: [
      { word: 'Informal', meaning: 'Resmi olmayan', pos: 'adj' },
      { word: 'Relaxed', meaning: 'Rahat', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Formal', meaning: 'Resmi', pos: 'adj' }
    ],
    collocations: ['casual clothes', 'casual look'],
    collocationMeanings: {
      'casual clothes': 'gündelik kıyafetler',
      'casual look': 'spor görünüm'
    },
    examples: ['He looked casual in his jeans and t-shirt.'],
    exampleTranslations: ['Kot pantolonu ve tişörtüyle gündelik (rahat) görünüyordu.']
  },
  {
    id: 'colourful_lh',
    word: 'Colourful',
    pos: 'adjective',
    meaning: 'Renkli, cıvıl cıvıl',
    definition: 'Has bright or many different colours.',
    ipa: "/ˈkʌl.ə.fəl/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'colour', pos: 'noun/verb', meaning: 'renk/boyamak' }
    ],
    synonyms: [
      { word: 'Vibrant', meaning: 'Canlı/Parlak', pos: 'adj' },
      { word: 'Bright', meaning: 'Parlak', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Colourless', meaning: 'Renksiz', pos: 'adj' },
      { word: 'Plain', meaning: 'Sade', pos: 'adj' }
    ],
    collocations: ['colourful dress', 'colourful garden'],
    collocationMeanings: {
      'colourful dress': 'renkli elbise',
      'colourful garden': 'renkli bahçe'
    },
    examples: ['I love that colourful dress.'],
    exampleTranslations: ['O renkli elbiseye bayılıyorum.']
  },
  {
    id: 'cough_lh',
    word: 'Cough',
    pos: 'noun',
    meaning: 'Öksürük',
    definition: 'An illness in which air is forced up through your throat.',
    ipa: '/kɒf/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'cough', pos: 'verb', meaning: 'öksürmek' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['bad cough', 'dry cough'],
    collocationMeanings: {
      'bad cough': 'kötü öksürük',
      'dry cough': 'kuru öksürük'
    },
    examples: ["She couldn't sleep well because of her cough."],
    exampleTranslations: ['Öksürüğü yüzünden iyi uyuyamadı.']
  },
  {
    id: 'sore_throat_lh',
    word: 'Sore throat',
    pos: 'noun',
    meaning: 'Boğaz ağrısı',
    definition: 'Pain in the throat, typically caused by a cold or a virus.',
    ipa: '/ˌsɔː ˈθrəʊt/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['have a sore throat', 'remedy for sore throat'],
    collocationMeanings: {
      'have a sore throat': 'boğazı ağrımak',
      'remedy for sore throat': 'boğaz ağrısı ilacı'
    },
    examples: ['Have we got any medicine for a sore throat?'],
    exampleTranslations: ['Boğaz ağrısı için hiç ilacımız var mı?']
  },
  {
    id: 'sunburn_lh',
    word: 'Sunburn',
    pos: 'noun',
    meaning: 'Güneş yanığı',
    definition: 'Condition of having red sore skin caused by staying in the sun for too long.',
    ipa: "/ˈsʌn.bɜːn/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'sunburnt', pos: 'adj', meaning: 'güneşten yanmış' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['painful sunburn', 'get sunburn'],
    collocationMeanings: {
      'painful sunburn': 'acılı güneş yanığı',
      'get sunburn': 'güneşten yanmak'
    },
    examples: ['That sunburn looks very painful.'],
    exampleTranslations: ['O güneş yanığı çok acılı görünüyor.']
  },
  {
    id: 'stomach_ache_lh',
    word: 'Stomach ache',
    pos: 'noun',
    meaning: 'Karın ağrısı',
    definition: 'Pain in your stomach.',
    ipa: "/ˈstʌm.ək eɪk/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Stomach pain', meaning: 'Karın ağrısı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['have a stomach ache', 'terrible stomach ache'],
    collocationMeanings: {
      'have a stomach ache': 'karnı ağrımak',
      'terrible stomach ache': 'korkunç karın ağrısı'
    },
    examples: ['I have a stomach ache from eating too much.'],
    exampleTranslations: ['Çok fazla yemekten karnım ağrıyor.']
  },
  {
    id: 'nordic_walking_lh',
    word: 'Nordic walking',
    pos: 'noun',
    meaning: 'İskandinav yürüyüşü (batonlu)',
    definition: 'A version of walking that requires poles.',
    ipa: "/ˌnɔː.dɪk ˈwɔː.kɪŋ/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['go Nordic walking'],
    collocationMeanings: {
      'go Nordic walking': 'İskandinav yürüyüşüne çıkmak'
    },
    examples: ['Dave enjoys Nordic walking.'],
    exampleTranslations: ['Dave İskandinav yürüyüşünden keyif alır.']
  },
  {
    id: 'cod_lh',
    word: 'Cod',
    pos: 'noun',
    meaning: 'Morina balığı',
    definition: 'A type of fish which is commonly eaten.',
    ipa: '/kɒd/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['fresh cod', 'cod fillet'],
    collocationMeanings: {
      'fresh cod': 'taze morina',
      'cod fillet': 'morina filetosu'
    },
    examples: ['Cod is my favourite fish.'],
    exampleTranslations: ['Morina en sevdiğim balıktır.']
  },
  {
    id: 'grain_lh',
    word: 'Grain',
    pos: 'noun',
    meaning: 'Tahıl, tahıl tanesi',
    definition: 'The seeds from crops such as wheat, rice, or barley.',
    ipa: '/ɡreɪn/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Cereal', meaning: 'Tahıl', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['mixed grain', 'whole grain'],
    collocationMeanings: {
      'mixed grain': 'karışık tahıl',
      'whole grain': 'tam tahıl'
    },
    examples: ['Can I have 3 bags of mixed grain, please?'],
    exampleTranslations: ['3 torba karışık tahıl alabilir miyim lütfen?']
  },
  {
    id: 'lettuce_lh',
    word: 'Lettuce',
    pos: 'noun',
    meaning: 'Marul',
    definition: 'A vegetable with large thin green leaves that you eat raw in a salad.',
    ipa: "/ˈlet.ɪs/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['fresh lettuce', 'crisp lettuce'],
    collocationMeanings: {
      'fresh lettuce': 'taze marul',
      'crisp lettuce': 'kıtır marul'
    },
    examples: ['There is too much lettuce in this sandwich.'],
    exampleTranslations: ['Bu sandviçte çok fazla marul var.']
  },
  {
    id: 'lobster_lh',
    word: 'Lobster',
    pos: 'noun',
    meaning: 'İstakoz',
    definition: 'A shellfish that has a long body, eight legs, and two claws.',
    ipa: "/ˈlɒb.stər/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['fresh lobster', 'grilled lobster'],
    collocationMeanings: {
      'fresh lobster': 'taze istakoz',
      'grilled lobster': 'izgara istakoz'
    },
    examples: ['The lobster in this restaurant is delicious but very expensive.'],
    exampleTranslations: ['Bu restorandaki istakoz lezzetli ama çok pahalı.']
  },
  {
    id: 'oats_lh',
    word: 'Oats',
    pos: 'noun',
    meaning: 'Yulaf',
    definition: 'A type of grain that people and animals eat.',
    ipa: '/əʊts/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['rolled oats', 'bowl of oats'],
    collocationMeanings: {
      'rolled oats': 'yulaf ezmesi',
      'bowl of oats': 'bir kase yulaf'
    },
    examples: ['Horses love eating oats.'],
    exampleTranslations: ['Atlar yulaf yemeyi sever.']
  },
  {
    id: 'shrimp_lh',
    word: 'Shrimp',
    pos: 'noun',
    meaning: 'Karides',
    definition: 'A small shellfish with a lot of legs.',
    ipa: '/ʃrɪmp/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Prawn', meaning: 'Karides (büyük)', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['shrimp curry', 'fried shrimp'],
    collocationMeanings: {
      'shrimp curry': 'karidesli köri',
      'fried shrimp': 'kızarmış karides'
    },
    examples: ["I'll have the shrimp curry please."],
    exampleTranslations: ['Karidesli köri alayım lütfen.']
  },
  {
    id: 'wheat_lh',
    word: 'Wheat',
    pos: 'noun',
    meaning: 'Buğday',
    definition: 'A tall plant that produces grain for making bread.',
    ipa: '/wiːt/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['wheat flour', 'wheat field'],
    collocationMeanings: {
      'wheat flour': 'buğday unu',
      'wheat field': 'buğday tarlası'
    },
    examples: ['A large quantity of wheat was grown by farmers last year.'],
    exampleTranslations: ['Geçen yıl çiftçiler tarafından büyük miktarda buğday yetiştirildi.']
  },
  {
    id: 'anxious_lh',
    word: 'Anxious',
    pos: 'adjective',
    meaning: 'Endişeli, kaygılı',
    definition: 'Worried because you think something bad might happen.',
    ipa: "/ˈæŋk.ʃəs/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'anxiety', pos: 'noun', meaning: 'kaygı' },
      { word: 'anxiously', pos: 'adv', meaning: 'endişeyle' }
    ],
    synonyms: [
      { word: 'Worried', meaning: 'Endişeli', pos: 'adj' },
      { word: 'Nervous', meaning: 'Gergin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Calm', meaning: 'Sakin', pos: 'adj' },
      { word: 'Confident', meaning: 'Kendinden emin', pos: 'adj' }
    ],
    collocations: ['feel anxious', 'anxious about'],
    collocationMeanings: {
      'feel anxious': 'endişeli hissetmek',
      'anxious about': 'bir şey hakkında endişeli'
    },
    examples: ['His silence made me anxious.'],
    exampleTranslations: ['Sessizliği beni endişelendirdi.']
  },
  {
    id: 'cheerful_lh',
    word: 'Cheerful',
    pos: 'adjective',
    meaning: 'Neşeli, şen',
    definition: 'Behaving in a happy, friendly way.',
    ipa: "/ˈtʃɪə.fəl/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'cheer', pos: 'verb', meaning: 'neşelendirmek' },
      { word: 'cheerfully', pos: 'adv', meaning: 'neşeyle' }
    ],
    synonyms: [
      { word: 'Happy', meaning: 'Mutlu', pos: 'adj' },
      { word: 'Joyful', meaning: 'Sevinçli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Miserable', meaning: 'Perişan/Mutsuz', pos: 'adj' },
      { word: 'Gloomy', meaning: 'Kasvetli', pos: 'adj' }
    ],
    collocations: ['cheerful person', 'stay cheerful'],
    collocationMeanings: {
      'cheerful person': 'neşeli kişi',
      'stay cheerful': 'neşeli kalmak'
    },
    examples: ['Stephen was a cheerful, affectionate child.'],
    exampleTranslations: ['Stephen neşeli ve sevgi dolu bir çocuktu.']
  },
  {
    id: 'confused_lh',
    word: 'Confused',
    pos: 'adjective',
    meaning: 'Kafası karışmış',
    definition: 'Unable to understand something or think clearly about it.',
    ipa: '/kənˈfjuːzd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'confusion', pos: 'noun', meaning: 'karışıklık' },
      { word: 'confuse', pos: 'verb', meaning: 'kafa karıştırmak' }
    ],
    synonyms: [
      { word: 'Puzzled', meaning: 'Şaşkın', pos: 'adj' },
      { word: 'Baffled', meaning: 'Donup kalmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Clear', meaning: 'Net/Anlaşılır', pos: 'adj' }
    ],
    collocations: ['totally confused', 'look confused'],
    collocationMeanings: {
      'totally confused': 'tamamen kafası karışmış',
      'look confused': 'kafası karışmış görünmek'
    },
    examples: ['She was starting to feel a bit confused.'],
    exampleTranslations: ['Biraz kafası karışmaya başlamıştı.']
  },
  {
    id: 'glad_lh',
    word: 'Glad',
    pos: 'adjective',
    meaning: 'Memnun, mutlu',
    definition: 'Happy and pleased about something.',
    ipa: '/ɡlæd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'gladly', pos: 'adv', meaning: 'memnuniyetle' }
    ],
    synonyms: [
      { word: 'Pleased', meaning: 'Memnun', pos: 'adj' },
      { word: 'Happy', meaning: 'Mutlu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sad', meaning: 'Üzgün', pos: 'adj' },
      { word: 'Sorry', meaning: 'Pişman/Üzgün', pos: 'adj' }
    ],
    collocations: ['glad to hear', 'glad to help'],
    collocationMeanings: {
      'glad to hear': 'duyduğuna sevinmek',
      'glad to help': 'yardım ettiğine sevinmek'
    },
    examples: ['She was so glad to have met him.'],
    exampleTranslations: ['Onunla tanıştığı için çok mutluydu.']
  },
  {
    id: 'nervous_lh',
    word: 'Nervous',
    pos: 'adjective',
    meaning: 'Gergin, heyecanlı',
    definition: 'Feeling excited and worried, or slightly afraid.',
    ipa: "/ˈnɜː.vəs/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'nerve', pos: 'noun', meaning: 'sinir/cesaret' },
      { word: 'nervously', pos: 'adv', meaning: 'gergin bir şekilde' }
    ],
    synonyms: [
      { word: 'Anxious', meaning: 'Endişeli', pos: 'adj' },
      { word: 'Apprehensive', meaning: 'Evhamlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Confident', meaning: 'Kendinden emin', pos: 'adj' },
      { word: 'Calm', meaning: 'Sakin', pos: 'adj' }
    ],
    collocations: ['get nervous', 'nervous tension'],
    collocationMeanings: {
      'get nervous': 'gerilmek/heyecanlanmak',
      'nervous tension': 'sinirsel gerginlik'
    },
    examples: ['Driving on mountain roads always makes me nervous.'],
    exampleTranslations: ['Dağ yollarında araba sürmek beni her zaman gerer.']
  },
  {
    id: 'pleased_lh',
    word: 'Pleased',
    pos: 'adjective',
    meaning: 'Memnun',
    definition: 'Happy and satisfied.',
    ipa: '/pliːzd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'please', pos: 'verb', meaning: 'memnun etmek' },
      { word: 'pleasure', pos: 'noun', meaning: 'keyif/haz' }
    ],
    synonyms: [
      { word: 'Satisfied', meaning: 'Tatmin olmuş', pos: 'adj' },
      { word: 'Happy', meaning: 'Mutlu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Disappointed', meaning: 'Hayal kırıklığına uğramış', pos: 'adj' },
      { word: 'Unhappy', meaning: 'Mutsuz', pos: 'adj' }
    ],
    collocations: ['pleased with the results', 'pleased to meet you'],
    collocationMeanings: {
      'pleased with the results': 'sonuçlardan memnun',
      'pleased to meet you': 'tanıştığımıza memnun oldum'
    },
    examples: ["I'm very pleased with the results."],
    exampleTranslations: ['Sonuçlardan çok memnunum.']
  },
  {
    id: 'suitcase_lh',
    word: 'Suitcase',
    pos: 'noun',
    meaning: 'Valiz, bavul',
    definition: 'A large container with flat sides and a handle used for carrying clothes.',
    ipa: "/ˈsuːt.keɪs/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'case', pos: 'noun', meaning: 'kasa/çanta' }
    ],
    synonyms: [
      { word: 'Luggage', meaning: 'Bagaj', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['pack a suitcase', 'heavy suitcase'],
    collocationMeanings: {
      'pack a suitcase': 'valiz hazırlamak',
      'heavy suitcase': 'ağır valiz'
    },
    examples: ['She took two large cases on holiday.'],
    exampleTranslations: ['Tatile iki büyük valiz götürdü.']
  },
  {
    id: 'bring_up_lh',
    word: 'Bring up',
    pos: 'phrasal verb',
    meaning: 'Çocuk yetiştirmek, büyütmek',
    definition: 'To look after a child until he or she becomes an adult.',
    ipa: '/brɪŋ ʌp/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Raise', meaning: 'Yetiştirmek', pos: 'verb' },
      { word: 'Nurture', meaning: 'Besleyip büyütmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Abandon', meaning: 'Terk etmek', pos: 'verb' },
      { word: 'Neglect', meaning: 'İhmal etmek', pos: 'verb' }
    ],
    collocations: ['bring up children', 'well brought up'],
    collocationMeanings: {
      'bring up children': 'çocuk yetiştirmek',
      'well brought up': 'iyi yetiştirilmiş'
    },
    examples: ['She brought up three sons on her own.'],
    exampleTranslations: ['Kendi başına üç oğul yetiştirdi.']
  },
  {
    id: 'drop_out_lh',
    word: 'Drop out',
    pos: 'phrasal verb',
    meaning: 'Okulu bırakmak, ayrılmak',
    definition: 'To leave something such as a school or competition before you have finished.',
    ipa: '/drɒp aʊt/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Quit', meaning: 'Bırakmak', pos: 'verb' },
      { word: 'Leave', meaning: 'Ayrılmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Graduate', meaning: 'Mezun olmak', pos: 'verb' },
      { word: 'Complete', meaning: 'Tamamlamak', pos: 'verb' }
    ],
    collocations: ['drop out of school', 'drop out of college'],
    collocationMeanings: {
      'drop out of school': 'okulu bırakmak',
      'drop out of college': 'üniversiteyi bırakmak'
    },
    examples: ['She was injured in the first round and had to drop out.'],
    exampleTranslations: ['İlk turda sakatlandı ve (yarışmadan) ayrılmak zorunda kaldı.']
  },
  {
    id: 'fall_out_lh',
    word: 'Fall out',
    pos: 'phrasal verb',
    meaning: 'Küsmek, tartışmak',
    definition: 'To stop being friendly with someone because you have had a disagreement.',
    ipa: '/fɔːl aʊt/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Argue', meaning: 'Tartışmak', pos: 'verb' },
      { word: 'Quarrel', meaning: 'Atışmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Make up', meaning: 'Barışmak', pos: 'phrase' }
    ],
    collocations: ['fall out with a friend', 'rarely fall out'],
    collocationMeanings: {
      'fall out with a friend': 'bir arkadaşla küsmek',
      'rarely fall out': 'nadir tartışmak'
    },
    examples: ['Have you two fallen out?'],
    exampleTranslations: ['Siz ikiniz küstünüz mü?']
  },
  {
    id: 'grow_up_lh',
    word: 'Grow up',
    pos: 'phrasal verb',
    meaning: 'Büyümek, serpilmek',
    definition: 'To change from being a baby or young child to being an older child or adult.',
    ipa: '/ɡrəʊ ʌp/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'grown-up', pos: 'noun/adj', meaning: 'yetişkin' }
    ],
    synonyms: [
      { word: 'Mature', meaning: 'Olgunlaşmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['grow up in', 'when I grow up'],
    collocationMeanings: {
      'grow up in': 'bir yerde büyümek',
      'when I grow up': 'büyüdüğüm zaman'
    },
    examples: ["She's really starting to grow up now."],
    exampleTranslations: ['Artık gerçekten büyümeye başlıyor.']
  },
  {
    id: 'make_up_lh',
    word: 'Make up',
    pos: 'phrasal verb',
    meaning: 'Uydurmak (hikaye vb.)',
    definition: 'To invent an explanation for something, especially to avoid being punished.',
    ipa: '/meɪk ʌp/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Invent', meaning: 'İcat etmek/Uydurmak', pos: 'verb' },
      { word: 'Fabricate', meaning: 'Uydurmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['make up an excuse', 'make up a story'],
    collocationMeanings: {
      'make up an excuse': 'bahane uydurmak',
      'make up a story': 'hikaye uydurmak'
    },
    examples: ['He made up some excuse about the dog eating his homework.'],
    exampleTranslations: ['Ödevini köpeğin yediğine dair bir bahane uydurdu.']
  },
  {
    id: 'give_up_lh',
    word: 'Give up',
    pos: 'phrasal verb',
    meaning: 'Vazgeçmek, bırakmak',
    definition: 'To stop doing something that you do regularly.',
    ipa: '/ɡɪv ʌp/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Quit', meaning: 'Bırakmak', pos: 'verb' },
      { word: 'Abandon', meaning: 'Terk etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Continue', meaning: 'Devam etmek', pos: 'verb' },
      { word: 'Persist', meaning: 'Israr etmek', pos: 'verb' }
    ],
    collocations: ['give up smoking', 'never give up'],
    collocationMeanings: {
      'give up smoking': 'sigarayı bırakmak',
      'never give up': 'asla pes etme'
    },
    examples: ['His wife finally persuaded him to give up smoking.'],
    exampleTranslations: ['Karısı sonunda onu sigarayı bırakmaya ikna etti.']
  },
  {
    id: 'audience_lh',
    word: 'Audience',
    pos: 'noun',
    meaning: 'Seyirci, izleyici kitlesi',
    definition: 'A group of people who have come to a place to see or hear a film or performance.',
    ipa: "/ˈɔː.di.əns/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Spectators', meaning: 'İzleyiciler', pos: 'noun' },
      { word: 'Viewers', meaning: 'İzleyenler', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Performers', meaning: 'Sergileyenler', pos: 'noun' }
    ],
    collocations: ['target audience', 'live audience'],
    collocationMeanings: {
      'target audience': 'hedef kitle',
      'live audience': 'canlı seyirci'
    },
    examples: ['She would be addressing an audience of three thousand teachers.'],
    exampleTranslations: ['Üç bin öğretmenden oluşan bir kitleye hitap edecekti.']
  },
  {
    id: 'catchy_lh',
    word: 'Catchy',
    pos: 'adjective',
    meaning: 'Akılda kalıcı (melodi/slogan)',
    definition: 'A tune or phrase which attracts your attention and is easy to remember.',
    ipa: "/ˈkætʃ.i/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'catch', pos: 'verb', meaning: 'yakalamak' }
    ],
    synonyms: [
      { word: 'Memorable', meaning: 'Unutulmaz', pos: 'adj' },
      { word: 'Haunting', meaning: 'Akıldan çıkmayan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Boring', meaning: 'Sıkıcı', pos: 'adj' },
      { word: 'Forgettable', meaning: 'Unutulabilir', pos: 'adj' }
    ],
    collocations: ['catchy tune', 'catchy song'],
    collocationMeanings: {
      'catchy tune': 'akılda kalıcı melodi',
      'catchy song': 'akılda kalıcı şarkı'
    },
    examples: ["I like this song because it's very catchy."],
    exampleTranslations: ['Bu şarkıyı seviyorum çünkü çok akılda kalıcı.']
  },
  {
    id: 'drummer_lh',
    word: 'Drummer',
    pos: 'noun',
    meaning: 'Baterist, davulcu',
    definition: 'Someone who plays the drums in a band.',
    ipa: "/ˈdrʌm.ər/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'drum', pos: 'noun/verb', meaning: 'davul/davul çalmak' }
    ],
    synonyms: [
      { word: 'Percussionist', meaning: 'Perküsyonyist', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['talented drummer', 'session drummer'],
    collocationMeanings: {
      'talented drummer': 'yetenekli davulcu',
      'session drummer': 'stüdyo davulcusu'
    },
    examples: ['The drummer was very talented.'],
    exampleTranslations: ['Baterist çok yetenekliydi.']
  },
  {
    id: 'drums_lh',
    word: 'Drums',
    pos: 'noun',
    meaning: 'Bateri, davul takımı',
    definition: 'A musical instrument consisting of a tight skin stretched over a round frame.',
    ipa: '/drʌmz/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'drummer', pos: 'noun', meaning: 'baterist' }
    ],
    synonyms: [
      { word: 'Drum kit', meaning: 'Bateri seti', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['play the drums', 'beat the drums'],
    collocationMeanings: {
      'play the drums': 'bateri çalmak',
      'beat the drums': 'davul çalmak'
    },
    examples: ['He wanted to learn to play the drums.'],
    exampleTranslations: ['Bateri çalmayı öğrenmek istiyordu.']
  },
  {
    id: 'gig_lh',
    word: 'Gig',
    pos: 'noun',
    meaning: 'Konser (genelde küçük veya popüler müzik)',
    definition: 'A public performance, especially of jazz or popular music.',
    ipa: '/ɡɪɡ/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Concert', meaning: 'Konser', pos: 'noun' },
      { word: 'Performance', meaning: 'Performans', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['live gig', 'play a gig'],
    collocationMeanings: {
      'live gig': 'canlı konser',
      'play a gig': 'konser vermek'
    },
    examples: ['Live gigs are the most enjoyable part of my work.'],
    exampleTranslations: ['Canlı konserler işimin en keyifli kısmıdır.']
  },
  {
    id: 'abstract_art_lh',
    word: 'Abstract art',
    pos: 'noun',
    meaning: 'Soyut sanat',
    definition: 'A trend in painting which seeks to break away from the traditional representation.',
    ipa: "/ˈæb.strækt ɑːt/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'abstraction', pos: 'noun', meaning: 'soyutlama' }
    ],
    synonyms: [
      { word: 'Non-representational art', meaning: 'Temsili olmayan sanat', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Realistic art', meaning: 'Gerçekçi sanat', pos: 'noun' },
      { word: 'Figurative art', meaning: 'Figüratif sanat', pos: 'noun' }
    ],
    collocations: ['interested in abstract art', 'modern abstract art'],
    collocationMeanings: {
      'interested in abstract art': 'soyut sanatla ilgili',
      'modern abstract art': 'modern soyut sanat'
    },
    examples: ['She is interested in abstract art.'],
    exampleTranslations: ['Soyut sanatla ilgileniyor.']
  },
  {
    id: 'landscape_lh',
    word: 'Landscape',
    pos: 'noun',
    meaning: 'Manzara, peyzaj (resim)',
    definition: 'A painting of an area of land.',
    ipa: "/ˈlænd.skeɪp/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Scenery', meaning: 'Manzara', pos: 'noun' },
      { word: 'Panorama', meaning: 'Panoroma', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['rural landscape', 'landscape painting'],
    collocationMeanings: {
      'rural landscape': 'kırsal manzara',
      'landscape painting': 'peyzaj resmi'
    },
    examples: ["We saw an exhibition of Paul Gunn's most recent landscapes."],
    exampleTranslations: ["Paul Gunn'ın en son manzara resimlerinin sergisini gördük."]
  },
  {
    id: 'sculpture_lh',
    word: 'Sculpture',
    pos: 'noun',
    meaning: 'Heykel',
    definition: 'A solid object that someone makes as a work of art by shaping stone, metal, or wood.',
    ipa: "/ˈskʌlp.tʃər/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'sculptor', pos: 'noun', meaning: 'heykeltıraş' },
      { word: 'sculpt', pos: 'verb', meaning: 'heykel yapmak' }
    ],
    synonyms: [
      { word: 'Statue', meaning: 'Heykel/Biblo', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['modern sculpture', 'bronze sculpture'],
    collocationMeanings: {
      'modern sculpture': 'modern heykel',
      'bronze sculpture': 'bronz heykel'
    },
    examples: ['Works to be shown include sculptures by Houdon.'],
    exampleTranslations: ['Sergilenecek eserler arasında Houdon\'un heykelleri de bulunuyor.']
  },
  {
    id: 'biopic_lh',
    word: 'Biopic',
    pos: 'noun',
    meaning: 'Biyografik film',
    definition: 'A film based on the events of someone\'s life.',
    ipa: "/ˈbaɪ.əʊ.pɪk/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'biography', pos: 'noun', meaning: 'biyografi' }
    ],
    synonyms: [
      { word: 'Biographical film', meaning: 'Biyografik film', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Fiction film', meaning: 'Kurgu film', pos: 'noun' }
    ],
    collocations: ['new biopic', 'watch a biopic'],
    collocationMeanings: {
      'new biopic': 'yeni biyografik film',
      'watch a biopic': 'biyografik film izlemek'
    },
    examples: ['Have you seen the Jesse James biopic?'],
    exampleTranslations: ['Jesse James biyografik filmini izledin mi?']
  },
  {
    id: 'historical_lh',
    word: 'Historical',
    pos: 'adjective',
    meaning: 'Tarihi',
    definition: 'Based on people or events that existed in the past.',
    ipa: '/hɪˈstɒr.ɪ.kəl/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'history', pos: 'noun', meaning: 'tarih' },
      { word: 'historian', pos: 'noun', meaning: 'tarihçi' }
    ],
    synonyms: [
      { word: 'Historic', meaning: 'Tarihi önemde', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Modern', meaning: 'Modern', pos: 'adj' },
      { word: 'Contemporary', meaning: 'Güncel', pos: 'adj' }
    ],
    collocations: ['historical events', 'historical film'],
    collocationMeanings: {
      'historical events': 'tarihi olaylar',
      'historical film': 'tarihi film'
    },
    examples: ['Watching historical films is an easy way to learn about the past.'],
    exampleTranslations: ['Tarihi filmler izlemek, geçmiş hakkında öğrenmenin kolay bir yoludur.']
  },
  {
    id: 'western_lh',
    word: 'Western',
    pos: 'noun',
    meaning: 'Kovboy filmi',
    definition: 'A film about the western United States in the 1800s, usually with cowboys.',
    ipa: "/ˈwes.tən/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'west', pos: 'noun', meaning: 'batı' }
    ],
    synonyms: [
      { word: 'Cowboy movie', meaning: 'Kovboy filmi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['classic western', 'western film'],
    collocationMeanings: {
      'classic western': 'klasik kovboy filmi',
      'western film': 'western film'
    },
    examples: ['My Dad likes western films but I think they are boring.'],
    exampleTranslations: ['Babam kovboy filmlerini sever ama bence onlar sıkıcı.']
  },
  {
    id: 'amazed_lh',
    word: 'Amazed',
    pos: 'adjective',
    meaning: 'Hayrete düşmüş, şaşkın',
    definition: 'Very surprised.',
    ipa: '/əˈmeɪzd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'amaze', pos: 'verb', meaning: 'şaşırtmak' },
      { word: 'amazement', pos: 'noun', meaning: 'hayret' }
    ],
    synonyms: [
      { word: 'Astonished', meaning: 'Şaşkınlıktan donakalmış', pos: 'adj' },
      { word: 'Surprised', meaning: 'Şaşırmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Indifferent', meaning: 'Kayıtsız', pos: 'adj' },
      { word: 'Unimpressed', meaning: 'Etkilenmemiş', pos: 'adj' }
    ],
    collocations: ['absolutely amazed', 'amazed at'],
    collocationMeanings: {
      'absolutely amazed': 'tamamen hayrete düşmüş',
      'amazed at': 'bir şeye şaşırmak'
    },
    examples: ['We were absolutely amazed at the response to our appeal.'],
    exampleTranslations: ['Çağrımıza gelen cevaba tamamen hayrete düştük.']
  },
  {
    id: 'amazing_lh',
    word: 'Amazing',
    pos: 'adjective',
    meaning: 'Şaşırtıcı, harika',
    definition: 'Very surprising or impressive.',
    ipa: '/əˈmeɪ.zɪŋ/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'amaze', pos: 'verb', meaning: 'şaşırtmak' }
    ],
    synonyms: [
      { word: 'Incredible', meaning: 'İnanılmaz', pos: 'adj' },
      { word: 'Wonderful', meaning: 'Harika', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Ordinary', meaning: 'Sıradan', pos: 'adj' },
      { word: 'Awful', meaning: 'Berbat', pos: 'adj' }
    ],
    collocations: ['quite amazing', 'amazing story'],
    collocationMeanings: {
      'quite amazing': 'oldukça şaşırtıcı',
      'amazing story': 'harika hikaye'
    },
    examples: ['Her story was quite amazing.'],
    exampleTranslations: ['Hikayesi oldukça şaşırtıcıydı.']
  },
  {
    id: 'boring_lh',
    word: 'Boring',
    pos: 'adjective',
    meaning: 'Sıkıcı',
    definition: 'Not at all interesting.',
    ipa: "/ˈbɔː.rɪŋ/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'bored', pos: 'adj', meaning: 'sıkılmış' },
      { word: 'boredom', pos: 'noun', meaning: 'sıkıntı' },
      { word: 'bore', pos: 'verb', meaning: 'can sıkmak' }
    ],
    synonyms: [
      { word: 'Dull', meaning: 'Tekdüze/Sıkıcı', pos: 'adj' },
      { word: 'Uninteresting', meaning: 'İlgisiz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Interesting', meaning: 'İlginç', pos: 'adj' },
      { word: 'Exciting', meaning: 'Heyecan verici', pos: 'adj' }
    ],
    collocations: ['boring job', 'boring book'],
    collocationMeanings: {
      'boring job': 'sıkıcı iş',
      'boring book': 'sıkıcı kitap'
    },
    examples: ["It's a boring badly-paid job."],
    exampleTranslations: ['Sıkıcı ve düşük ücretli bir iş.']
  },
  {
    id: 'disappointed_lh',
    word: 'Disappointed',
    pos: 'adjective',
    meaning: 'Hayal kırıklığına uğramış',
    definition: 'Unhappy because something that you hoped for did not happen.',
    ipa: '/ˌdɪs.əˈpɔɪn.tɪd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'disappoint', pos: 'verb', meaning: 'hayal kırıklığına uğratmak' },
      { word: 'disappointment', pos: 'noun', meaning: 'hayal kırıklığı' }
    ],
    synonyms: [
      { word: 'Let down', meaning: 'Yüzüstü bırakılmış', pos: 'adj' },
      { word: 'Upset', meaning: 'Üzgün', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Satisfied', meaning: 'Memnun', pos: 'adj' },
      { word: 'Happy', meaning: 'Mutlu', pos: 'adj' }
    ],
    collocations: ['terribly disappointed', 'disappointed with'],
    collocationMeanings: {
      'terribly disappointed': 'feci şekilde hayal kırıklığına uğramış',
      'disappointed with': 'bir şeyden dolayı hayal kırıklığı yaşayan'
    },
    examples: ['She was disappointed that he never replied to her letter.'],
    exampleTranslations: ['Mektubuna hiç cevap vermediği için hayal kırıklığına uğramıştı.']
  },
  {
    id: 'disappointing_lh',
    word: 'Disappointing',
    pos: 'adjective',
    meaning: 'Hayal kırıklığı yaratan',
    definition: 'Not as good as you had hoped for or expected.',
    ipa: '/ˌdɪs.əˈpɔɪn.tɪŋ/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'disappoint', pos: 'verb', meaning: 'hayal kırıklığına uğratmak' }
    ],
    synonyms: [
      { word: 'Unsatisfactory', meaning: 'Yetersiz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Satisfying', meaning: 'Tatmin edici', pos: 'adj' },
      { word: 'Impressive', meaning: 'Etkileyici', pos: 'adj' }
    ],
    collocations: ['disappointing results', 'very disappointing'],
    collocationMeanings: {
      'disappointing results': 'hayal kırıklığı yaratan sonuçlar',
      'very disappointing': 'çok üzücü/yetersiz'
    },
    examples: ["This year's sales figures were very disappointing."],
    exampleTranslations: ['Bu yılın satış rakamları hayal kırıklığı yaratacak kadar düşüktü.']
  },
  {
    id: 'engaged_lh',
    word: 'Engaged',
    pos: 'adjective',
    meaning: 'Meşgul, dahil olmuş',
    definition: 'Involved in doing something.',
    ipa: '/ɪnˈɡeɪdʒd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'engage', pos: 'verb', meaning: 'ilgilenmek/bağlanmak' },
      { word: 'engagement', pos: 'noun', meaning: 'meşguliyet/nişan' }
    ],
    synonyms: [
      { word: 'Involved', meaning: 'Müdahil', pos: 'adj' },
      { word: 'Busy', meaning: 'Meşgul', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Idle', meaning: 'Boşta', pos: 'adj' },
      { word: 'Free', meaning: 'Müsait', pos: 'adj' }
    ],
    collocations: ['engaged in work', 'actively engaged'],
    collocationMeanings: {
      'engaged in work': 'işle meşgul',
      'actively engaged': 'aktif olarak dahil olmuş'
    },
    examples: ['Her team knew they were engaged in work of great importance.'],
    exampleTranslations: ['Ekibi, büyük önem taşıyan bir işle meşgul olduklarını biliyordu.']
  },
  {
    id: 'exciting_lh',
    word: 'Exciting',
    pos: 'adjective',
    meaning: 'Heyecan verici',
    definition: 'Making you feel happy and enthusiastic.',
    ipa: '/ɪkˈsaɪ.tɪŋ/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'excite', pos: 'verb', meaning: 'heyecanlandırmak' },
      { word: 'excitement', pos: 'noun', meaning: 'heyecan' }
    ],
    synonyms: [
      { word: 'Thrilling', meaning: 'Nefes kesici', pos: 'adj' },
      { word: 'Exhilarating', meaning: 'Canlandırıcı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Boring', meaning: 'Sıkıcı', pos: 'adj' },
      { word: 'Dull', meaning: 'Donuk/Tekdüze', pos: 'adj' }
    ],
    collocations: ['exciting things', 'exciting opportunity'],
    collocationMeanings: {
      'exciting things': 'heyecan verici şeyler',
      'exciting opportunity': 'heyecan verici fırsat'
    },
    examples: ["The launch of our service is one of the most exciting things I've worked on."],
    exampleTranslations: ['Hizmetimizin lansmanı, üzerinde çalıştığım en heyecan verici şeylerden biri.']
  },
  {
    id: 'gripped_lh',
    word: 'Gripped',
    pos: 'adjective',
    meaning: 'Kendini kaptırmış, büyülenmiş',
    definition: 'Very interested and excited.',
    ipa: '/ɡrɪpt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'grip', pos: 'verb/noun', meaning: 'yakalamak/kavrama' }
    ],
    synonyms: [
      { word: 'Fascinated', meaning: 'Büyülenmiş', pos: 'adj' },
      { word: 'Enthralled', meaning: 'Mest olmuş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Bored', meaning: 'Sıkılmış', pos: 'adj' }
    ],
    collocations: ['gripped by the news', 'gripped by the movie'],
    collocationMeanings: {
      'gripped by the news': 'haberlere kendini kaptırmış',
      'gripped by the movie': 'filme kilitlenmiş'
    },
    examples: ['The case has gripped the public because of the celebrities involved.'],
    exampleTranslations: ['İşin içinde ünlüler olduğu için dava halkı büyüledi.']
  },
  {
    id: 'gripping_lh',
    word: 'Gripping',
    pos: 'adjective',
    meaning: 'Sürükleyici, etkileyici',
    definition: 'Very interesting and exciting.',
    ipa: "/ˈɡrɪp.ɪŋ/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'grippingly', pos: 'adv', meaning: 'sürükleyici bir şekilde' }
    ],
    synonyms: [
      { word: 'Compelling', meaning: 'İlgi uyandıran', pos: 'adj' },
      { word: 'Engrossing', meaning: 'Dikkat çekici', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Uninteresting', meaning: 'İlgisiz', pos: 'adj' },
      { word: 'Dull', meaning: 'Tekdüze', pos: 'adj' }
    ],
    collocations: ['gripping documentary', 'gripping story'],
    collocationMeanings: {
      'gripping documentary': 'sürükleyici belgesel',
      'gripping story': 'sürükleyici hikaye'
    },
    examples: ['The documentary was gripping.'],
    exampleTranslations: ['Belgesel sürükleyiciydi.']
  },
  {
    id: 'memorable_lh',
    word: 'Memorable',
    pos: 'adjective',
    meaning: 'Unutulmaz',
    definition: 'Worth remembering or easy to remember.',
    ipa: "/ˈmem.ər.ə.bəl/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'memory', pos: 'noun', meaning: 'hafıza' },
      { word: 'memorise', pos: 'verb', meaning: 'ezberlemek' }
    ],
    synonyms: [
      { word: 'Unforgettable', meaning: 'Unutulmaz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Forgettable', meaning: 'Unutulabilir', pos: 'adj' }
    ],
    collocations: ['memorable experience', 'memorable occasion'],
    collocationMeanings: {
      'memorable experience': 'unutulmaz deneyim',
      'memorable occasion': 'unutulmaz olay'
    },
    examples: ['The romantic evening cruise will be a memorable experience.'],
    exampleTranslations: ['Romantik akşam gezisi unutulmaz bir deneyim olacak.']
  },
  {
    id: 'moved_lh',
    word: 'Moved',
    pos: 'adjective',
    meaning: 'Duygulanmış, etkilenmiş',
    definition: 'Affected emotionally.',
    ipa: '/muːvd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'move', pos: 'verb', meaning: 'hareket etmek/duygulandırmak' },
      { word: 'movement', pos: 'noun', meaning: 'hareket' }
    ],
    synonyms: [
      { word: 'Touched', meaning: 'Duygulanmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unmoved', meaning: 'Etkilenmemiş', pos: 'adj' }
    ],
    collocations: ['deeply moved', 'moved to tears'],
    collocationMeanings: {
      'deeply moved': 'derinden duygulanmış',
      'moved to tears': 'gözyaşlarına boğulmuş'
    },
    examples: ['You will be moved by the touching documentary.'],
    exampleTranslations: ['Bu dokunaklı belgeselden duygulanacaksınız.']
  },
  {
    id: 'moving_lh',
    word: 'Moving',
    pos: 'adjective',
    meaning: 'Etkileyici, duygulandırıcı',
    definition: 'Making you feel emotional.',
    ipa: "/ˈmuː.vɪŋ/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'move', pos: 'verb', meaning: 'hareket etmek/duygulandırmak' },
      { word: 'moved', pos: 'adj', meaning: 'duygulanmış' }
    ],
    synonyms: [
      { word: 'Touching', meaning: 'Dokunaklı', pos: 'adj' },
      { word: 'Emotional', meaning: 'Duygusal', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unemotional', meaning: 'Duygusuz', pos: 'adj' }
    ],
    collocations: ['deeply moving', 'moving story'],
    collocationMeanings: {
      'deeply moving': 'derinden etkileyici',
      'moving story': 'duygulandırıcı hikaye'
    },
    examples: ['His letter was deeply moving.'],
    exampleTranslations: ['Mektubu derinden etkileyiciydi.']
  },
  {
    id: 'pay_by_card_lh',
    word: 'Pay by card',
    pos: 'phrase',
    meaning: 'Kartla ödemek',
    definition: 'To use a debit or credit card as payment.',
    ipa: '/peɪ baɪ kɑːd/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Card payment', meaning: 'Kartla ödeme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Pay in cash', meaning: 'Nakit ödemek', pos: 'phrase' }
    ],
    collocations: ['accept pay by card', 'prefer to pay by card'],
    collocationMeanings: {
      'accept pay by card': 'kartla ödeme kabul etmek',
      'prefer to pay by card': 'kartla ödemeyi tercih etmek'
    },
    examples: ['Can I pay by card?'],
    exampleTranslations: ['Kartla ödeyebilir miyim?']
  },
  {
    id: 'donate_lh',
    word: 'Donate',
    pos: 'verb',
    meaning: 'Bağışlamak',
    definition: 'To give something such as money or goods to an organization.',
    ipa: '/dəʊˈneɪt/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'donation', pos: 'noun', meaning: 'bağış' },
      { word: 'donor', pos: 'noun', meaning: 'bağışçı' }
    ],
    synonyms: [
      { word: 'Contribute', meaning: 'Katkıda bulunmak', pos: 'verb' },
      { word: 'Gift', meaning: 'Hibe etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Receive', meaning: 'Almak', pos: 'verb' },
      { word: 'Take', meaning: 'Almak/Götürmek', pos: 'verb' }
    ],
    collocations: ['donate money', 'donate blood'],
    collocationMeanings: {
      'donate money': 'para bağışlamak',
      'donate blood': 'kan bağışlamak'
    },
    examples: ['The centre was bought with money donated by a wealthy businessman.'],
    exampleTranslations: ['Merkez, zengin bir iş adamı tarafından bağışlanan parayla satın alındı.']
  },
  {
    id: 'earn_lh',
    word: 'Earn',
    pos: 'verb',
    meaning: 'Kazanmak (para/itibar)',
    definition: 'To receive money for work that you do.',
    ipa: '/ɜːn/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'earnings', pos: 'noun', meaning: 'kazanç' }
    ],
    synonyms: [
      { word: 'Make money', meaning: 'Para kazanmak', pos: 'phrase' },
      { word: 'Gain', meaning: 'Kazanmak/Edinmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Spend', meaning: 'Harcamak', pos: 'verb' },
      { word: 'Waste', meaning: 'Boşa harcamak', pos: 'verb' }
    ],
    collocations: ['earn a salary', 'earn a living', 'earn respect'],
    collocationMeanings: {
      'earn a salary': 'maaş kazanmak',
      'earn a living': 'hayatını kazanmak',
      'earn respect': 'saygı kazanmak'
    },
    examples: ["She doesn't earn much money, but she enjoys the work."],
    exampleTranslations: ['Çok para kazanmıyor ama işinden zevk alıyor.']
  },
  {
    id: 'give_away_lh',
    word: 'Give away',
    pos: 'phrasal verb',
    meaning: 'Karşılıksız vermek, hibe etmek',
    definition: 'To provide someone with something that you no longer want or need.',
    ipa: '/ɡɪv əˈweɪ/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Donate', meaning: 'Bağışlamak', pos: 'verb' },
      { word: 'Hand out', meaning: 'Dağıtmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Keep', meaning: 'Tutmak/Saklamak', pos: 'verb' }
    ],
    collocations: ['give away for free', 'give away secrets'],
    collocationMeanings: {
      'give away for free': 'bedavaya vermek',
      'give away secrets': 'sırları ifşa etmek'
    },
    examples: ['I gave away any plants that were left to my neighbours.'],
    exampleTranslations: ['Kalan tüm bitkileri komşularıma verdim.']
  },
  {
    id: 'lose_lh',
    word: 'Lose',
    pos: 'verb',
    meaning: 'Kaybetmek (para/zarar etmek)',
    definition: 'To make less money than you spend or invest.',
    ipa: '/luːz/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'loss', pos: 'noun', meaning: 'zarar/kayıp' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Win', meaning: 'Kazanmak', pos: 'verb' },
      { word: 'Profit', meaning: 'Kâr etmek', pos: 'verb' }
    ],
    collocations: ['lose money', 'lose a fortune'],
    collocationMeanings: {
      'lose money': 'para kaybetmek',
      'lose a fortune': 'servet kaybetmek'
    },
    examples: ['The company lost more than 5 million last year.'],
    exampleTranslations: ['Şirket geçen yıl 5 milyon sterlinden fazla zarar etti.']
  },
  {
    id: 'make_lh',
    word: 'Make',
    pos: 'verb',
    meaning: 'Yapmak, kazanmak (para)',
    definition: 'To earn or get money.',
    ipa: '/meɪk/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Earn', meaning: 'Kazanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Lose', meaning: 'Kaybetmek', pos: 'verb' }
    ],
    collocations: ['make a profit', 'make a living'],
    collocationMeanings: {
      'make a profit': 'kâr etmek',
      'make a living': 'geçimini sağlamak'
    },
    examples: ['She makes about 2,000 a month.'],
    exampleTranslations: ['Ayda yaklaşık 2.000 sterlin kazanıyor.']
  },
  {
    id: 'owe_lh',
    word: 'Owe',
    pos: 'verb',
    meaning: 'Borçlu olmak',
    definition: 'To have to give someone money because you have borrowed it.',
    ipa: '/əʊ/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['owe money', 'owe an apology'],
    collocationMeanings: {
      'owe money': 'para borcu olmak',
      'owe an apology': 'özür borçlu olmak'
    },
    examples: ["Tell me how much I owe, and I'll give it to you."],
    exampleTranslations: ['Ne kadar borcum olduğunu söyle, sana vereyim.']
  },
  {
    id: 'do_a_favour_lh',
    word: 'Do a favour',
    pos: 'phrase',
    meaning: 'İyilik yapmak',
    definition: 'Something that you do for someone in order to help them.',
    ipa: '/duː ə ˈfeɪ.vər/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Help out', meaning: 'Yardım etmek', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['ask for a favour', 'return a favour'],
    collocationMeanings: {
      'ask for a favour': 'bir iyilik istemek',
      'return a favour': 'iyiliğin karşılığını vermek'
    },
    examples: ['Could you do me a favour?'],
    exampleTranslations: ['Bana bir iyilik yapabilir misin?']
  },
  {
    id: 'make_a_mess_lh',
    word: 'Make a mess',
    pos: 'phrase',
    meaning: 'Ortalığı dağıtmak, batırmak',
    definition: 'A situation in which a place is dirty or untidy.',
    ipa: '/meɪk ə mes/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Clutter', meaning: 'Karıştırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Tidy up', meaning: 'Toparlamak', pos: 'phrase' }
    ],
    collocations: ['don t make a mess', 'messy room'],
    collocationMeanings: {
      'don t make a mess': 'ortalığı dağıtma',
      'messy room': 'dağınık oda'
    },
    examples: ["Try not to make a mess because I've been cleaning."],
    exampleTranslations: ['Ortalığı dağıtmamaya çalış çünkü temizlik yaptım.']
  },
  {
    id: 'bay_lh',
    word: 'Bay',
    pos: 'noun',
    meaning: 'Koy, körfez',
    definition: 'An area of the coast where the land curves inwards.',
    ipa: '/beɪ/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Gulf', meaning: 'Körfez', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['visible across the bay', 'shallow bay'],
    collocationMeanings: {
      'visible across the bay': 'koyun karşısından görülebilir',
      'shallow bay': 'sığ koy'
    },
    examples: ['The harbour lights were visible across the bay.'],
    exampleTranslations: ['Liman ışıkları koyun karşısından görülebiliyordu.']
  },
  {
    id: 'canal_lh',
    word: 'Canal',
    pos: 'noun',
    meaning: 'Kanal (yapay nehir)',
    definition: 'An artificial river.',
    ipa: '/kəˈnæl/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Waterway', meaning: 'Su yolu', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['shipping canal', 'canal bridge'],
    collocationMeanings: {
      'shipping canal': 'nakliye kanalı',
      'canal bridge': 'kanal köprüsü'
    },
    examples: ["Canals were created to connect England's industrial cities with the sea."],
    exampleTranslations: ['Kanallar, İngiltere\'nin sanayi şehirlerini denize bağlamak için oluşturuldu.']
  },
  {
    id: 'canyon_lh',
    word: 'Canyon',
    pos: 'noun',
    meaning: 'Kanyon',
    definition: 'A long deep valley with very steep sides made of rock.',
    ipa: "/ˈkæn.jən/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Gorge', meaning: 'Dar geçit/Kanyon', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['deep canyon', 'view across the canyon'],
    collocationMeanings: {
      'deep canyon': 'derin kanyon',
      'view across the canyon': 'kanyon manzarası'
    },
    examples: ['There was an incredible view across the canyon.'],
    exampleTranslations: ['Kanyonun karşısında inanılmaz bir manzara vardı.']
  },
  {
    id: 'cave_lh',
    word: 'Cave',
    pos: 'noun',
    meaning: 'Mağara',
    definition: 'A large hole in the side of a hill or under the ground.',
    ipa: '/keɪv/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Cavern', meaning: 'Mağara/Oyuk', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['dark cave', 'explore a cave'],
    collocationMeanings: {
      'dark cave': 'karanlık mağara',
      'explore a cave': 'mağara keşfetmek'
    },
    examples: ['We swam into the dark cave.'],
    exampleTranslations: ['Karanlık mağaranın içine doğru yüzdük.']
  },
  {
    id: 'cliff_lh',
    word: 'Cliff',
    pos: 'noun',
    meaning: 'Uçurum, falez, kayalık',
    definition: 'The steep side of an area of high land.',
    ipa: '/klɪf/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Precipice', meaning: 'Uçurum', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['edge of the cliff', 'steep cliff'],
    collocationMeanings: {
      'edge of the cliff': 'uçurumun kenarı',
      'steep cliff': 'sarp kayalık'
    },
    examples: ['They pushed the car over the edge of the cliff.'],
    exampleTranslations: ['Arabayı uçurumun kenarından aşağı ittiler.']
  },
  {
    id: 'harbour_lh',
    word: 'Harbour',
    pos: 'noun',
    meaning: 'Liman',
    definition: 'An area of water near the land where it is safe for boats to stay.',
    ipa: "/ˈhɑː.bər/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Port', meaning: 'Liman', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['safe harbour', 'harbour lights'],
    collocationMeanings: {
      'safe harbour': 'güvenli liman',
      'harbour lights': 'liman ışıkları'
    },
    examples: ['The wind kept us in the harbour until the following afternoon.'],
    exampleTranslations: ['Rüzgar bizi ertesi öğleden sonraya kadar limanda tuttu.']
  },
  {
    id: 'mountain_lh',
    word: 'Mountain',
    pos: 'noun',
    meaning: 'Dağ',
    definition: 'A natural structure like a very big hill.',
    ipa: "/ˈmaʊn.tɪn/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'mountainous', pos: 'adj', meaning: 'dağlık' }
    ],
    synonyms: [
      { word: 'Peak', meaning: 'Zirve/Dağ', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Valley', meaning: 'Vadi', pos: 'noun' }
    ],
    collocations: ['climb a mountain', 'mountain range'],
    collocationMeanings: {
      'climb a mountain': 'dağa tırmanmak',
      'mountain range': 'dağ sırası'
    },
    examples: ['They went walking and climbing in the mountains.'],
    exampleTranslations: ['Dağlarda yürüyüşe ve tırmanışa gittiler.']
  },
  {
    id: 'ocean_lh',
    word: 'Ocean',
    pos: 'noun',
    meaning: 'Okyanus',
    definition: 'One of the large areas of salt water that cover most of the Earth.',
    ipa: "/ˈəʊ.ʃən/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'oceanic', pos: 'adj', meaning: 'okyanusa ait' }
    ],
    synonyms: [
      { word: 'Sea', meaning: 'Deniz', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['deep ocean', 'Indian Ocean'],
    collocationMeanings: {
      'deep ocean': 'derin okyanus',
      'Indian Ocean': 'Hint Okyanusu'
    },
    examples: ['The Indian Ocean was a brilliant blue.'],
    exampleTranslations: ['Hint Okyanusu parlak bir maviydi.']
  },
  {
    id: 'rainforest_lh',
    word: 'Rainforest',
    pos: 'noun',
    meaning: 'Yağmur ormanı',
    definition: 'A forest in a tropical region where it rains a lot.',
    ipa: "/ˈreɪn.fɒr.ɪst/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Jungle', meaning: 'Balta girmemiş orman', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Desert', meaning: 'Çöl', pos: 'noun' }
    ],
    collocations: ['tropical rainforest', 'destruction of the rainforest'],
    collocationMeanings: {
      'tropical rainforest': 'tropikal yağmur ormanı',
      'destruction of the rainforest': 'yağmur ormanlarının yok oluşu'
    },
    examples: ['There is a campaign to halt the destruction of the rainforest.'],
    exampleTranslations: ['Yağmur ormanlarının yok edilmesini durdurmak için bir kampanya var.']
  },
  {
    id: 'reef_lh',
    word: 'Reef',
    pos: 'noun',
    meaning: 'Resif, kayalık (deniz altı)',
    definition: 'A long line of rock or coral in the sea.',
    ipa: '/riːf/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Coral reef', meaning: 'Mercan resifi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['colourful reef', 'barrier reef'],
    collocationMeanings: {
      'colourful reef': 'renkli resif',
      'barrier reef': 'bariyer resifi'
    },
    examples: ['She saw a colourful reef as she was swimming.'],
    exampleTranslations: ['Yüzerken renkli bir resif gördü.']
  },
  {
    id: 'valley_lh',
    word: 'Valley',
    pos: 'noun',
    meaning: 'Vadi',
    definition: 'A low area of land between mountains or hills.',
    ipa: "/ˈvæl.i/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Dale', meaning: 'Vadi/Dere', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Mountain', meaning: 'Dağ', pos: 'noun' }
    ],
    collocations: ['deep valley', 'views across the valley'],
    collocationMeanings: {
      'deep valley': 'derin vadi',
      'views across the valley': 'vadi manzaraları'
    },
    examples: ['Their house has wonderful views across the valley.'],
    exampleTranslations: ['Evlerinin harika vadi manzaraları var.']
  },
  {
    id: 'waterfall_lh',
    word: 'Waterfall',
    pos: 'noun',
    meaning: 'Şelale, çağlayan',
    definition: 'A place where water flows over the edge of a cliff onto another level below.',
    ipa: "/ˈwɔː.tə.fɔːl/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Cascade', meaning: 'Küçük şelale', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['majestic waterfall', 'by the waterfall'],
    collocationMeanings: {
      'majestic waterfall': 'görkemli şelale',
      'by the waterfall': 'şelalenin yanında'
    },
    examples: ['The children swam by the waterfall.'],
    exampleTranslations: ['Çocuklar şelalenin yanında yüzdüler.']
  },
  {
    id: 'alligator_lh',
    word: 'Alligator',
    pos: 'noun',
    meaning: 'Alligator timsahı',
    definition: 'A large reptile with a long tail, four short legs, and sharp teeth.',
    ipa: "/ˈæl.ɪ.ɡeɪ.tər/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Croc', meaning: 'Timsah (kısa)', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['alligator skin', 'wild alligator'],
    collocationMeanings: {
      'alligator skin': 'timsah derisi',
      'wild alligator': 'vahşi timsah'
    },
    examples: ['We saw an alligator when we were in the USA.'],
    exampleTranslations: ['ABD\'deyken bir timsah gördük.']
  },
  {
    id: 'amphibian_lh',
    word: 'Amphibian',
    pos: 'noun',
    meaning: 'Amfibi (hem suda hem karada yaşayan)',
    definition: 'An animal that lives mainly on land, but produces eggs in water.',
    ipa: "/æmˈfɪb.i.ən/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'amphibious', pos: 'adj', meaning: 'hem suda hem karada giden' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['amphibian species'],
    collocationMeanings: {
      'amphibian species': 'amfibi türleri'
    },
    examples: ['Toads and frogs are amphibians.'],
    exampleTranslations: ['Kara kurbağaları ve kurbağalar amfibidir.']
  },
  {
    id: 'ant_lh',
    word: 'Ant',
    pos: 'noun',
    meaning: 'Karınca',
    definition: 'A small insect that lives in large organized groups called colonies.',
    ipa: '/ænt/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['ant colony', 'army of ants'],
    collocationMeanings: {
      'ant colony': 'karınca kolonisi',
      'army of ants': 'karınca ordusu'
    },
    examples: ['There were many ants in the garden.'],
    exampleTranslations: ['Bahçede çok sayıda karınca vardı.']
  },
  {
    id: 'insect_lh',
    word: 'Insect',
    pos: 'noun',
    meaning: 'Böcek',
    definition: 'A small animal that has six legs and often has wings.',
    ipa: "/ˈɪn.sekt/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'insecticide', pos: 'noun', meaning: 'böcek ilacı' }
    ],
    synonyms: [
      { word: 'Bug', meaning: 'Haşere/Böcek', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['flying insect', 'insect bite'],
    collocationMeanings: {
      'flying insect': 'uçan böcek',
      'insect bite': 'böcek ısırığı'
    },
    examples: ['I thought there were insects in my tent.'],
    exampleTranslations: ['Çadırımda böcekler olduğunu düşündüm.']
  },
  {
    id: 'lizard_lh',
    word: 'Lizard',
    pos: 'noun',
    meaning: 'Kertenkele',
    definition: 'A small animal with a long tail and rough skin that lives mainly in hot places.',
    ipa: "/ˈlɪz.əd/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['green lizard', 'small lizard'],
    collocationMeanings: {
      'green lizard': 'yeşil kertenkele',
      'small lizard': 'küçük kertenkele'
    },
    examples: ['Steve saw a lizard in the garden.'],
    exampleTranslations: ['Steve bahçede bir kertenkele gördü.']
  },
  {
    id: 'mammal_lh',
    word: 'Mammal',
    pos: 'noun',
    meaning: 'Memeli hayvan',
    definition: 'An animal that is born from its mother\'s body and drinks its mother\'s milk.',
    ipa: "/ˈmæm.əl/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'mammalian', pos: 'adj', meaning: 'memelilere ait' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Reptile', meaning: 'Sürüngen', pos: 'noun' }
    ],
    collocations: ['marine mammal', 'land mammal'],
    collocationMeanings: {
      'marine mammal': 'deniz memelisi',
      'land mammal': 'kara memelisi'
    },
    examples: ['Many mammals can be found in the zoo.'],
    exampleTranslations: ['Hayvanat bahçesinde birçok memeli bulunabilir.']
  },
  {
    id: 'bee_lh',
    word: 'Bee',
    pos: 'noun',
    meaning: 'Arı',
    definition: 'A flying insect that has black and yellow bands and can sting you.',
    ipa: '/biː/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'beehive', pos: 'noun', meaning: 'arı kovanı' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['honey bee', 'busy as a bee'],
    collocationMeanings: {
      'honey bee': 'bal arısı',
      'busy as a bee': 'çok meşgul (arı gibi)'
    },
    examples: ['A bee buzzed around the garden.'],
    exampleTranslations: ['Bahçede bir arı vızıldadı.']
  },
  {
    id: 'mosquito_lh',
    word: 'Mosquito',
    pos: 'noun',
    meaning: 'Sivrisinek',
    definition: 'A small flying insect that bites the skin in order to feed on blood.',
    ipa: "/məˈskiː.təʊ/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['mosquito bite', 'mosquito net'],
    collocationMeanings: {
      'mosquito bite': 'sivrisinek ısırığı',
      'mosquito net': 'cibinlik'
    },
    examples: ['I have been bitten by a mosquito.'],
    exampleTranslations: ['Beni bir sivrisinek ısırdı.']
  },
  {
    id: 'moth_lh',
    word: 'Moth',
    pos: 'noun',
    meaning: 'Güve, gece kelebeği',
    definition: 'An insect like a butterfly that flies mostly at night.',
    ipa: '/mɒθ/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'mothball', pos: 'noun', meaning: 'naftalin' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Butterfly', meaning: 'Kelebek', pos: 'noun' }
    ],
    collocations: ['moth flying around'],
    collocationMeanings: {
      'moth flying around': 'etrafta uçuşan güve'
    },
    examples: ['There is a moth flying around the lamp.'],
    exampleTranslations: ['Lambanın etrafında uçan bir güve var.']
  },
  {
    id: 'reptile_lh',
    word: 'Reptile',
    pos: 'noun',
    meaning: 'Sürüngen',
    definition: 'A type of cold-blooded animal that gives birth as eggs.',
    ipa: "/ˈrep.taɪl/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'reptilian', pos: 'adj', meaning: 'sürüngenlere ait' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Mammal', meaning: 'Memeli', pos: 'noun' }
    ],
    collocations: ['reptile house', 'cold-blooded reptile'],
    collocationMeanings: {
      'reptile house': 'sürüngen evi',
      'cold-blooded reptile': 'soğukkanlı sürüngen'
    },
    examples: ['Can we visit the reptile house to see the snakes?'],
    exampleTranslations: ['Yılanları görmek için sürüngen evini ziyaret edebilir miyiz?']
  },
  {
    id: 'toad_lh',
    word: 'Toad',
    pos: 'noun',
    meaning: 'Kara kurbağası',
    definition: 'A small animal similar to a frog but has brown skin and lives mainly on land.',
    ipa: '/təʊd/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [
      { word: 'Frog', meaning: 'Su kurbağası', pos: 'noun' }
    ],
    collocations: ['toad jumping'],
    collocationMeanings: {
      'toad jumping': 'kurbağa zıplaması'
    },
    examples: ['The toad jumped in the lake.'],
    exampleTranslations: ['Kara kurbağası göle atladı.']
  },
  {
    id: 'breaking_news_lh',
    word: 'Breaking news',
    pos: 'noun',
    meaning: 'Son dakika haberi',
    definition: 'New information about a news event that is still happening.',
    ipa: "/ˌbreɪ.kɪŋ ˈnjuːz/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Latest developments', meaning: 'Son gelişmeler', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['latest breaking news', 'follow breaking news'],
    collocationMeanings: {
      'latest breaking news': 'en son dakika haberi',
      'follow breaking news': 'son dakika haberlerini takip etmek'
    },
    examples: ['Keep up with the latest breaking news from around the world.'],
    exampleTranslations: ['Dünyanın dört bir yanından en son dakika haberlerini takip edin.']
  },
  {
    id: 'journalist_lh',
    word: 'Journalist',
    pos: 'noun',
    meaning: 'Gazeteci',
    definition: 'Someone whose job is to report the news.',
    ipa: "/ˈdʒɜː.nə.lɪst/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'journalism', pos: 'noun', meaning: 'gazetecilik' },
      { word: 'journal', pos: 'noun', meaning: 'günlük/dergi' }
    ],
    synonyms: [
      { word: 'Reporter', meaning: 'Muhabir', pos: 'noun' },
      { word: 'Pressman', meaning: 'Basın mensubu', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['leading sports journalist', 'investigative journalist'],
    collocationMeanings: {
      'leading sports journalist': 'önde gelen spor gazetecisi',
      'investigative journalist': 'araştırmacı gazeteci'
    },
    examples: ['It was an article by a leading sports journalist.'],
    exampleTranslations: ['Önde gelen bir spor gazetecisinin makalesiydi.']
  },
  {
    id: 'news_headlines_lh',
    word: 'News headlines',
    pos: 'noun',
    meaning: 'Haber başlıkları',
    definition: 'The most important stories in the news.',
    ipa: "/njuːz ˈhed.laɪnz/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Main stories', meaning: 'Ana haberler', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['read the news headlines'],
    collocationMeanings: {
      'read the news headlines': 'haber başlıklarını okumak'
    },
    examples: ['Here are the news headlines.'],
    exampleTranslations: ['İşte haber başlıkları.']
  },
  {
    id: 'campaign_lh',
    word: 'Advertising campaign',
    pos: 'noun',
    meaning: 'Reklam kampanyası',
    definition: 'A series of things done to persuade people to buy a product.',
    ipa: "/ˈæd.və.taɪ.zɪŋ kæmˈpeɪn/",
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'advertise', pos: 'verb', meaning: 'reklam yapmak' },
      { word: 'advertisement', pos: 'noun', meaning: 'reklam/ilan' }
    ],
    synonyms: [
      { word: 'Promotion', meaning: 'Tanıtım/Promosyon', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['run a campaign', 'effective campaign'],
    collocationMeanings: {
      'run a campaign': 'kampanya yürütmek',
      'effective campaign': 'etkili kampanya'
    },
    examples: ['The new advertising campaign is very effective.'],
    exampleTranslations: ['Yeni reklam kampanyası çok etkili.']
  },
  {
    id: 'billboard_lh',
    word: 'Billboard',
    pos: 'noun',
    meaning: 'İlan tahtası, billboard',
    definition: 'A large board for advertisements in an outside public place.',
    ipa: "/ˈbɪl.bɔːrd/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Hoarding', meaning: 'Reklam panosu', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['eye-catching billboard'],
    collocationMeanings: {
      'eye-catching billboard': 'göz alıcı billboard'
    },
    examples: ["The billboard was eye-catching to get people's attention."],
    exampleTranslations: ['Billboard, insanların dikkatini çekmek için göz alıcıydı.']
  },
  {
    id: 'brand_lh',
    word: 'Brand',
    pos: 'noun',
    meaning: 'Marka',
    definition: 'A product or group of products that has its own name and is made by one particular company.',
    ipa: '/brænd/',
    level: 'pre-intermediate',
    wordFamily: [
      { word: 'branding', pos: 'noun', meaning: 'markalaşma' }
    ],
    synonyms: [
      { word: 'Label', meaning: 'Etiket/Marka', pos: 'noun' },
      { word: 'Trademark', meaning: 'Tescilli marka', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['leading brands', 'brand name'],
    collocationMeanings: {
      'leading brands': 'önde gelen markalar',
      'brand name': 'marka adı'
    },
    examples: ['We stock all leading brands.'],
    exampleTranslations: ['Tüm önde gelen markaları stoklarımızda bulunduruyoruz.']
  },
  {
    id: 'eye-catching_lh',
    word: 'Eye-catching',
    pos: 'adjective',
    meaning: 'Göz alıcı, dikkat çekici',
    definition: 'Attractive or unusual and therefore noticed.',
    ipa: '/ˈaɪˌkætʃ.ɪŋ/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Striking', meaning: 'Çarpıcı', pos: 'adj' },
      { word: 'Noticeable', meaning: 'Fark edilebilir', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unremarkable', meaning: 'Sıradan', pos: 'adj' },
      { word: 'Plain', meaning: 'Sade', pos: 'adj' }
    ],
    collocations: ['eye-catching design'],
    collocationMeanings: {
      'eye-catching design': 'göz alıcı tasarım'
    },
    examples: ['The eye-catching design was very clever.'],
    exampleTranslations: ['Göz alıcı tasarım çok zekiceydi.']
  },
  {
    id: 'attention_lh',
    word: 'Grab your attention',
    pos: 'phrase',
    meaning: 'Dikkati çekmek',
    definition: "To draw or attract someone's attention.",
    ipa: "/ɡræb jər əˈten.ʃən/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Catch the eye', meaning: 'Göze çarpmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Distract', meaning: 'Dikkatini dağıtmak', pos: 'verb' }
    ],
    collocations: ['grab your attention immediately'],
    collocationMeanings: {
      'grab your attention immediately': 'dikkati hemen üzerine çekmek'
    },
    examples: ['We need the front page to grab your attention.'],
    exampleTranslations: ['Ön sayfanın dikkatinizi çekmesine ihtiyacımız var.']
  },
  {
    id: 'logo_lh',
    word: 'Logo',
    pos: 'noun',
    meaning: 'Logo, amblem',
    definition: 'A symbol that represents an organization or company.',
    ipa: "/ˈləʊ.ɡəʊ/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Emblem', meaning: 'Amblem', pos: 'noun' },
      { word: 'Symbol', meaning: 'Sembol', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['simple logo', 'company logo'],
    collocationMeanings: {
      'simple logo': 'basit logo',
      'company logo': 'şirket logosu'
    },
    examples: ['The logo is simple but effective.'],
    exampleTranslations: ['Logo basit ama etkili.']
  },

  {
    id: 'accent',
    word: 'Accent',
    pos: 'noun',
    meaning: 'Aksan, şive',
    definition: 'A way of saying words that shows what country, region, or social class someone comes from.',
    ipa: '/ˈæk.sent/',
    level: 'intermediate',
    wordFamily: [
      { word: 'accentuate', pos: 'verb', meaning: 'vurgulamak' },
      { word: 'accented', pos: 'adj', meaning: 'aksanlı' }
    ],
    synonyms: [
      { word: 'Inflection', meaning: 'Ses tonu değişimi', pos: 'noun' },
      { word: 'Pronunciation', meaning: 'Telaffuz', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['heavy accent', 'foreign accent', 'slight accent'],
    collocationMeanings: {
      'heavy accent': 'ağır aksan',
      'foreign accent': 'yabancı aksan',
      'slight accent': 'hafif aksan'
    },
    examples: ['Tom hasn’t lost his Irish accent.'],
    exampleTranslations: ['Tom İrlanda aksanını kaybetmedi.']
  },
  {
    id: 'accurately',
    word: 'Accurately',
    pos: 'adverb',
    meaning: 'Doğru bir şekilde, tam olarak',
    definition: 'In a way that is correct or true in every detail.',
    ipa: '/ˈæk.jə.rət.li/',
    level: 'intermediate',
    wordFamily: [
      { word: 'accurate', pos: 'adj', meaning: 'doğru, kesin' },
      { word: 'accuracy', pos: 'noun', meaning: 'doğruluk, kesinlik' }
    ],
    synonyms: [
      { word: 'Precisely', meaning: 'Tam olarak', pos: 'adv' },
      { word: 'Correctly', meaning: 'Doğruca', pos: 'adv' }
    ],
    antonyms: [
      { word: 'Inaccurately', meaning: 'Hatalı bir şekilde', pos: 'adv' },
      { word: 'Wrongly', meaning: 'Yanlışlıkla', pos: 'adv' }
    ],
    collocations: ['accurately reflect', 'describe accurately', 'predict accurately'],
    collocationMeanings: {
      'accurately reflect': 'doğru şekilde yansıtmak',
      'describe accurately': 'tam olarak tarif etmek',
      'predict accurately': 'isabetli tahmin etmek'
    },
    examples: ['Have I described the situation accurately?'],
    exampleTranslations: ['Durumu doğru bir şekilde tarif ettim mi?']
  },
  {
    id: 'action_point',
    word: 'Action point',
    pos: 'noun',
    meaning: 'Eylem noktası, yapılacak iş',
    definition: "A small thing that you're going to do.",
    ipa: '/ˈæk.ʃən pɔɪnt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'act', pos: 'verb', meaning: 'hareket etmek' },
      { word: 'action', pos: 'noun', meaning: 'eylem' }
    ],
    synonyms: [
      { word: 'Task', meaning: 'Görev', pos: 'noun' },
      { word: 'Objective', meaning: 'Hedef', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['agree on action points', 'list of action points', 'key action point'],
    collocationMeanings: {
      'agree on action points': 'eylem planları üzerinde anlaşmak',
      'list of action points': 'yapılacaklar listesi',
      'key action point': 'temel eylem noktası'
    },
    examples: ["Let's move to the second action point."],
    exampleTranslations: ['İkinci eylem noktasına geçelim.']
  },
  {
    id: 'active',
    word: 'Active',
    pos: 'adjective',
    meaning: 'Aktif, faal',
    definition: 'Someone who is active does a lot of different activities and has a lot of energy and interests.',
    ipa: '/ˈæk.tɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'activity', pos: 'noun', meaning: 'aktivite' },
      { word: 'activate', pos: 'verb', meaning: 'etkinleştirmek' },
      { word: 'actively', pos: 'adv', meaning: 'aktif olarak' }
    ],
    synonyms: [
      { word: 'Energetic', meaning: 'Enerjik', pos: 'adj' },
      { word: 'Lively', meaning: 'Canlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Passive', meaning: 'Pasif', pos: 'adj' },
      { word: 'Inactive', meaning: 'Hareketsiz', pos: 'adj' }
    ],
    collocations: ['physically active', 'active role', 'active lifestyle'],
    collocationMeanings: {
      'physically active': 'fiziksel olarak aktif',
      'active role': 'aktif rol',
      'active lifestyle': 'hareketli yaşam tarzı'
    },
    examples: ['People are remaining active into later life.'],
    exampleTranslations: ['İnsanlar ileri yaşlarda da aktif kalmaya devam ediyor.']
  },
  {
    id: 'admit',
    word: 'Admit',
    pos: 'verb',
    meaning: 'İtiraf etmek, kabul etmek',
    definition: 'To agree that something is true, especially when you are unhappy, sorry, or surprised about it.',
    ipa: '/ədˈmɪt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'admission', pos: 'noun', meaning: 'itiraf/kabul' },
      { word: 'admittedly', pos: 'adv', meaning: 'kuşkusuz' }
    ],
    synonyms: [
      { word: 'Confess', meaning: 'İtiraf etmek', pos: 'verb' },
      { word: 'Acknowledge', meaning: 'Kabul etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Deny', meaning: 'İnkar etmek', pos: 'verb' }
    ],
    collocations: ['admit defeat', 'admit a mistake', 'freely admit'],
    collocationMeanings: {
      'admit defeat': 'yenilgiyi kabul etmek',
      'admit a mistake': 'hatayı kabul etmek',
      'freely admit': 'açıkça itiraf etmek'
    },
    examples: ["'I can't sing at all,' he admitted."],
    exampleTranslations: ["'Hiç şarkı söyleyemem,' diye itiraf etti."]
  },
  {
    id: 'advise',
    word: 'Advise',
    pos: 'verb',
    meaning: 'Tavsiye vermek, öğütlemek',
    definition: 'To give your opinion to someone about the best thing to do in a particular situation.',
    ipa: '/ədˈvaɪz/',
    level: 'intermediate',
    wordFamily: [
      { word: 'advice', pos: 'noun', meaning: 'tavsiye' },
      { word: 'adviser', pos: 'noun', meaning: 'danışman' },
      { word: 'advisable', pos: 'adj', meaning: 'tavsiye edilen' }
    ],
    synonyms: [
      { word: 'Counsel', meaning: 'Öğüt vermek', pos: 'verb' },
      { word: 'Suggest', meaning: 'Önermek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['strongly advise', 'advise against', 'seek advice'],
    collocationMeanings: {
      'strongly advise': 'şiddetle tavsiye etmek',
      'advise against': 'yapmamasını tavsiye etmek',
      'seek advice': 'tavsiye aramak'
    },
    examples: ["I'm afraid I'm not able to advise you."],
    exampleTranslations: ['Korkarım size tavsiye verecek durumda değilim.']
  },
  {
    id: 'advertising_campaign',
    word: 'Advertising campaign',
    pos: 'noun',
    meaning: 'Reklam kampanyası',
    definition: 'A series of things done to persuade people to buy a product or use a service.',
    ipa: '/ˈæd.və.taɪ.zɪŋ kæmˈpeɪn/',
    level: 'intermediate',
    wordFamily: [
      { word: 'advertise', pos: 'verb', meaning: 'reklam yapmak' },
      { word: 'advertisement', pos: 'noun', meaning: 'reklam' }
    ],
    synonyms: [
      { word: 'Promotion', meaning: 'Tanıtım', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['launch a campaign', 'run a campaign', 'effective campaign'],
    collocationMeanings: {
      'launch a campaign': 'kampanya başlatmak',
      'run a campaign': 'kampanya yürütmek',
      'effective campaign': 'etkili kampanya'
    },
    examples: ['The new advertising campaign is very effective.'],
    exampleTranslations: ['Yeni reklam kampanyası çok etkili.']
  },
  {
    id: 'affect',
    word: 'Affect',
    pos: 'verb',
    meaning: 'Etkilemek',
    definition: 'To change or influence something.',
    ipa: '/əˈfekt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'effective', pos: 'adj', meaning: 'etkili' },
      { word: 'affective', pos: 'adj', meaning: 'duygusal' }
    ],
    synonyms: [
      { word: 'Influence', meaning: 'Etki altına almak', pos: 'verb' },
      { word: 'Impact', meaning: 'Etkilemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['directly affect', 'badly affect', 'affect the outcome'],
    collocationMeanings: {
      'directly affect': 'doğrudan etkilemek',
      'badly affect': 'kötü etkilemek',
      'affect the outcome': 'sonucu etkilemek'
    },
    examples: ['It is known that poor grades can affect university entrance.'],
    exampleTranslations: ['Düşük notların üniversite girişini etkileyebileceği biliniyor.']
  },
  {
    id: 'agreement',
    word: 'Agreement',
    pos: 'noun',
    meaning: 'Anlaşma, mutabakat',
    definition: 'An arrangement or decision about what to do, made by two or more people.',
    ipa: '/əˈɡriː.mənt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'agree', pos: 'verb', meaning: 'anlaşmak' },
      { word: 'agreeable', pos: 'adj', meaning: 'uygun/hoş' }
    ],
    synonyms: [
      { word: 'Accord', meaning: 'Uyum/Anlaşma', pos: 'noun' },
      { word: 'Contract', meaning: 'Sözleşme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disagreement', meaning: 'Anlaşmazlık', pos: 'noun' }
    ],
    collocations: ['reach an agreement', 'sign an agreement', 'mutual agreement'],
    collocationMeanings: {
      'reach an agreement': 'anlaşmaya varmak',
      'sign an agreement': 'anlaşma imzalamak',
      'mutual agreement': 'karşılıklı anlaşma'
    },
    examples: ['Our agreement was that you would pay by the first of the month.'],
    exampleTranslations: ['Anlaşmamız, ödemeyi ayın birine kadar yapacağınız yönündeydi.']
  },
  {
    id: 'all_in_the_mind',
    word: 'All in the mind',
    pos: 'idiom',
    meaning: 'Hepsi kafada bitiyor, kuruntu',
    definition: 'Used for saying that something is not real and is just being imagined.',
    ipa: '/ɔːl ɪn ðə maɪnd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Imaginary', meaning: 'Hayali', pos: 'adj' },
      { word: 'Psychological', meaning: 'Psikolojik', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Real', meaning: 'Gerçek', pos: 'adj' },
      { word: 'Tangible', meaning: 'Somut', pos: 'adj' }
    ],
    collocations: ['strictly in the mind', 'entirely in the mind'],
    collocationMeanings: {
      'strictly in the mind': 'tamamen zihinde olan',
      'entirely in the mind': 'tamamıyla kuruntu'
    },
    examples: ["He's not really ill; it's all in the mind."],
    exampleTranslations: ['O gerçekten hasta değil; her şey zihninde (kuruntu).']
  },
  {
    id: 'allow',
    word: 'Allow',
    pos: 'verb',
    meaning: 'İzin vermek',
    definition: 'To give someone permission to do or have something.',
    ipa: '/əˈlaʊ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'allowance', pos: 'noun', meaning: 'harçlık/izin' },
      { word: 'allowable', pos: 'adj', meaning: 'izin verilebilir' }
    ],
    synonyms: [
      { word: 'Permit', meaning: 'İzin vermek', pos: 'verb' },
      { word: 'Authorize', meaning: 'Yetki vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forbid', meaning: 'Yasaklamak', pos: 'verb' },
      { word: 'Ban', meaning: 'Men etmek', pos: 'verb' }
    ],
    collocations: ['allow to do', 'freely allow', 'legally allowed'],
    collocationMeanings: {
      'allow to do': 'yapmasına izin vermek',
      'freely allow': 'serbestçe izin vermek',
      'legally allowed': 'yasal olarak izinli'
    },
    examples: ["I'm sorry, sir, but smoking is not allowed."],
    exampleTranslations: ['Üzgünüm efendim, ancak sigara içilmesine izin verilmiyor.']
  },
  {
    id: 'anxious_b1',
    word: 'Anxious',
    pos: 'adjective',
    meaning: 'Endişeli, kaygılı',
    definition: 'Worried because you think something bad might happen.',
    ipa: '/ˈæŋk.ʃəs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'anxiety', pos: 'noun', meaning: 'kaygı' },
      { word: 'anxiously', pos: 'adv', meaning: 'endişeyle' }
    ],
    synonyms: [
      { word: 'Worried', meaning: 'Endişeli', pos: 'adj' },
      { word: 'Nervous', meaning: 'Gergin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Calm', meaning: 'Sakin', pos: 'adj' },
      { word: 'Carefree', meaning: 'Tasasız', pos: 'adj' }
    ],
    collocations: ['anxious about', 'feel anxious', 'growing anxious'],
    collocationMeanings: {
      'anxious about': 'bir şey hakkında endişeli',
      'feel anxious': 'kaygılı hissetmek',
      'growing anxious': 'endişesi artmak'
    },
    examples: ['His silence made me anxious.'],
    exampleTranslations: ['Onun sessizliği beni endişelendirdi.']
  },
  {
    id: 'assume',
    word: 'Assume',
    pos: 'verb',
    meaning: 'Varsaymak, farz etmek',
    definition: 'To believe that something is true, even though no one has told you or even though you have no proof.',
    ipa: '/əˈsjuːm/',
    level: 'intermediate',
    wordFamily: [
      { word: 'assumption', pos: 'noun', meaning: 'varsayım' }
    ],
    synonyms: [
      { word: 'Presume', meaning: 'Farz etmek', pos: 'verb' },
      { word: 'Suppose', meaning: 'Sanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Prove', meaning: 'Kanıtlamak', pos: 'verb' }
    ],
    collocations: ['automatically assume', 'reasonable to assume', 'wrongly assume'],
    collocationMeanings: {
      'automatically assume': 'kendiliğinden varsaymak',
      'reasonable to assume': 'varsaymak mantıklı',
      'wrongly assume': 'yanlış bir şekilde varsaymak'
    },
    examples: ["You can't assume that because he's good at this job he will know everything."],
    exampleTranslations: ['Bu işte iyi olduğu için her şeyi bileceğini varsayamazsın.']
  },
  {
    id: 'attract',
    word: 'Attract',
    pos: 'verb',
    meaning: 'Çekmek, cezbetmek',
    definition: 'To make someone interested in something so that they do it or come to see or hear it.',
    ipa: '/əˈtrækt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'attraction', pos: 'noun', meaning: 'cazibe' },
      { word: 'attractive', pos: 'adj', meaning: 'çekici' }
    ],
    synonyms: [
      { word: 'Entice', meaning: 'Aklını çelmek', pos: 'verb' },
      { word: 'Lure', meaning: 'Cezbetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Repel', meaning: 'İtmek/Tiksindirmek', pos: 'verb' }
    ],
    collocations: ['attract attention', 'attract interest', 'attract customers'],
    collocationMeanings: {
      'attract attention': 'dikkat çekmek',
      'attract interest': 'ilgi çekmek',
      'attract customers': 'müşteri çekmek'
    },
    examples: ['The show attracts viewers from all walks of life.'],
    exampleTranslations: ['Program hayatın her kesiminden izleyici çekiyor.']
  },
  {
    id: 'attract_new_customers',
    word: 'Attract new customers',
    pos: 'phrase',
    meaning: 'Yeni müşteriler çekmek',
    definition: 'Make people interested in a product or idea.',
    ipa: '/əˈtrækt njuː ˈkʌs.tə.mərz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Expand client base', meaning: 'Müşteri kitlesini genişletmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Lose customers', meaning: 'Müşteri kaybetmek', pos: 'phrase' }
    ],
    collocations: ['strategy to attract', 'aim to attract'],
    collocationMeanings: {
      'strategy to attract': 'çekme stratejisi',
      'aim to attract': 'çekmeyi hedeflemek'
    },
    examples: ['The social media campaign will hopefully attract new customers.'],
    exampleTranslations: ['Sosyal medya kampanyası umarız yeni müşteriler çekecektir.']
  },
  {
    id: 'attract_new_investors',
    word: 'Attract new investors',
    pos: 'phrase',
    meaning: 'Yeni yatırımcılar çekmek',
    definition: 'Make people interested in a product or idea so they will invest money in it.',
    ipa: '/əˈtrækt njuː ɪnˈves.tərz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Secure funding', meaning: 'Finansman sağlamak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['struggle to attract', 'need to attract'],
    collocationMeanings: {
      'struggle to attract': 'çekmekte zorlanmak',
      'need to attract': 'çekmeye ihtiyaç duymak'
    },
    examples: ['We are attending conferences to attract new investors.'],
    exampleTranslations: ['Yeni yatırımcılar çekmek için konferanslara katılıyoruz.']
  },
  {
    id: 'audience_b1',
    word: 'Audience',
    pos: 'noun',
    meaning: 'Seyirci, izleyici kitlesi',
    definition: 'A group of people who have come to a place to see or hear a film, performance, speech etc.',
    ipa: '/ˈɔː.di.əns/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Spectators', meaning: 'İzleyiciler', pos: 'noun' },
      { word: 'Viewers', meaning: 'İzleyenler', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['target audience', 'wide audience', 'live audience'],
    collocationMeanings: {
      'target audience': 'hedef kitle',
      'wide audience': 'geniş kitle',
      'live audience': 'canlı seyirci'
    },
    examples: ['She would be addressing an audience of three thousand teachers.'],
    exampleTranslations: ['Üç bin öğretmenden oluşan bir kitleye hitap edecekti.']
  },
  {
    id: 'aware_of',
    word: 'Aware of',
    pos: 'adjective',
    meaning: 'Farkında olmak',
    definition: 'Knowing about a situation or a fact.',
    ipa: '/əˈweər əv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'awareness', pos: 'noun', meaning: 'farkındalık' }
    ],
    synonyms: [
      { word: 'Conscious', meaning: 'Bilincinde', pos: 'adj' },
      { word: 'Informed', meaning: 'Bilgili/Haberdar', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unaware', meaning: 'Farkında olmayan', pos: 'adj' },
      { word: 'Oblivious', meaning: 'Bihaber', pos: 'adj' }
    ],
    collocations: ['fully aware', 'well aware', 'become aware'],
    collocationMeanings: {
      'fully aware': 'tamamen farkında',
      'well aware': 'gayet iyi farkında',
      'become aware': 'farkına varmak'
    },
    examples: ['We are aware of this problem.'],
    exampleTranslations: ['Bu sorunun farkındayız.']
  },
  {
    id: 'awful',
    word: 'Awful',
    pos: 'adjective',
    meaning: 'Berbat, çok kötü',
    definition: 'Used for emphasizing how unpleasant someone or something is.',
    ipa: '/ˈɔː.fəl/',
    level: 'intermediate',
    wordFamily: [
      { word: 'awfully', pos: 'adv', meaning: 'berbat şekilde' }
    ],
    synonyms: [
      { word: 'Terrible', meaning: 'Korkunç', pos: 'adj' },
      { word: 'Horrible', meaning: 'Berbat', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Wonderful', meaning: 'Harika', pos: 'adj' },
      { word: 'Great', meaning: 'Harika', pos: 'adj' }
    ],
    collocations: ['awful lot', 'feel awful', 'smell awful'],
    collocationMeanings: {
      'awful lot': 'çok fazla (miktar)',
      'feel awful': 'berbat hissetmek',
      'smell awful': 'berbat kokmak'
    },
    examples: ['This wine tastes awful.'],
    exampleTranslations: ['Bu şarabın tadı berbat.']
  },
  {
    id: 'be_reliable',
    word: 'Be reliable',
    pos: 'phrase',
    meaning: 'Güvenilir olmak',
    definition: 'To be someone who you can trust to behave well, work hard, or do what you expect them to do.',
    ipa: '/bi rɪˈlaɪ.ə.bəl/',
    level: 'intermediate',
    wordFamily: [
      { word: 'rely', pos: 'verb', meaning: 'güvenmek' },
      { word: 'reliability', pos: 'noun', meaning: 'güvenilirlik' }
    ],
    synonyms: [
      { word: 'Dependable', meaning: 'Bel bağlanabilir', pos: 'adj' },
      { word: 'Trustworthy', meaning: 'Güvenilir', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unreliable', meaning: 'Güvenilmez', pos: 'adj' }
    ],
    collocations: ['prove reliable', 'highly reliable', 'totally reliable'],
    collocationMeanings: {
      'prove reliable': 'güvenilir olduğunu kanıtlamak',
      'highly reliable': 'oldukça güvenilir',
      'totally reliable': 'tamamen güvenilir'
    },
    examples: ['Hannah is very reliable.'],
    exampleTranslations: ['Hannah çok güvenilirdir.']
  },
  {
    id: 'be_your_thing',
    word: 'Be your thing',
    pos: 'idiom',
    meaning: 'Senin olayın olmak, ilgi alanın olmak',
    definition: 'Something that you are good at and/or like doing.',
    ipa: '/bi jɔːr θɪŋ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Cup of tea', meaning: 'İlgi alanı', pos: 'idiom' }
    ],
    antonyms: [],
    collocations: ['not really my thing', 'is it your thing?'],
    collocationMeanings: {
      'not really my thing': 'pek bana göre değil',
      'is it your thing?': 'bu senin ilgin çekiyor mu?'
    },
    examples: ["I'm afraid baking is not my thing."],
    exampleTranslations: ['Korkarım fırın işleri (pasta/börek yapma) pek bana göre değil.']
  },
  {
    id: 'bear_in_mind',
    word: 'Bear in mind',
    pos: 'idiom',
    meaning: 'Aklında bulundurmak, unutmamak',
    definition: 'Reminding or warning a person about something important which they should remember.',
    ipa: '/beər ɪn maɪnd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Remember', meaning: 'Hatırlamak', pos: 'verb' },
      { word: 'Consider', meaning: 'Dikkate almak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forget', meaning: 'Unutmak', pos: 'verb' },
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['bear in mind that', 'important to bear in mind'],
    collocationMeanings: {
      'bear in mind that': 'şunu aklında tut ki',
      'important to bear in mind': 'akılda tutulması önemli'
    },
    examples: ['Bear in mind that the deadline is approaching.'],
    exampleTranslations: ['Son teslim tarihinin yaklaştığını aklında bulundur.']
  },
  {
    id: 'bilingual',
    word: 'Bilingual',
    pos: 'adjective',
    meaning: 'İki dilli',
    definition: 'Someone who is bilingual is able to speak two languages extremely well.',
    ipa: '/baɪˈlɪŋ.ɡwəl/',
    level: 'intermediate',
    wordFamily: [
      { word: 'bilingualism', pos: 'noun', meaning: 'iki dillilik' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Monolingual', meaning: 'Tek dilli', pos: 'adj' }
    ],
    collocations: ['bilingual education', 'totally bilingual', 'bilingual dictionary'],
    collocationMeanings: {
      'bilingual education': 'iki dilli eğitim',
      'totally bilingual': 'tamamen iki dilli',
      'bilingual dictionary': 'iki dilli sözlük'
    },
    examples: ['She speaks French and Spanish so she is bilingual.'],
    exampleTranslations: ['Fransızca ve İspanyolca konuşuyor, bu yüzden iki dilli.']
  },
  {
    id: 'bin',
    word: 'Bin',
    pos: 'noun',
    meaning: 'Çöp kutusu',
    definition: 'A container for putting rubbish in.',
    ipa: '/bɪn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Dustbin', meaning: 'Çöp tenekesi', pos: 'noun' },
      { word: 'Trash can', meaning: 'Çöp kutusu (ABD)', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['rubbish bin', 'recycle bin', 'throw in the bin'],
    collocationMeanings: {
      'rubbish bin': 'çöp tenekesi',
      'recycle bin': 'geri dönüşüm kutusu',
      'throw in the bin': 'çöpe fırlatmak'
    },
    examples: ["It's time you threw those shoes in the bin."],
    exampleTranslations: ['O ayakkabıları çöpe atma vaktin geldi.']
  },
  {
    id: 'blame_yourself',
    word: 'Blame yourself',
    pos: 'phrase',
    meaning: 'Kendini suçlamak',
    definition: 'To say or think that you are responsible for an accident, problem, or bad situation.',
    ipa: '/bleɪm jɔːˈself/',
    level: 'intermediate',
    wordFamily: [
      { word: 'blame', pos: 'verb/noun', meaning: 'suçlamak/suç' }
    ],
    synonyms: [
      { word: 'Fault yourself', meaning: 'Kendini hatalı bulmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Forgive yourself', meaning: 'Kendini affetmek', pos: 'phrase' }
    ],
    collocations: ['only have yourself to blame', 'no need to blame yourself'],
    collocationMeanings: {
      'only have yourself to blame': 'sadece kendini suçlayabilirsin',
      'no need to blame yourself': 'kendini suçlamana gerek yok'
    },
    examples: ["If it all goes wrong, don't blame yourself."],
    exampleTranslations: ['Eğer her şey ters giderse, kendini suçlama.']
  },
  {
    id: 'block_your_creativity',
    word: 'Block your creativity',
    pos: 'phrase',
    meaning: 'Yaratıcılığını engellemek/tıkamak',
    definition: 'Something stops creative thoughts.',
    ipa: '/blɒk jɔːr ˌkriː.eɪˈtɪv.ə.ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Stifle creativity', meaning: 'Yaratıcılığı köreltmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Inspire', meaning: 'İlham vermek', pos: 'verb' }
    ],
    collocations: ['mental block', 'factors that block creativity'],
    collocationMeanings: {
      'mental block': 'zihinsel tıkanıklık',
      'factors that block creativity': 'yaratıcılığı engelleyen faktörler'
    },
    examples: ['Writing in the same space every day may block your creativity.'],
    exampleTranslations: ['Her gün aynı yerde yazmak yaratıcılığınızı engelleyebilir.']
  },
  {
    id: 'boost_your_creativity',
    word: 'Boost your creativity',
    pos: 'phrase',
    meaning: 'Yaratıcılığını artırmak',
    definition: 'Something helps creative thoughts.',
    ipa: '/buːst jɔːr ˌkriː.eɪˈtɪv.ə.ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Enhance creativity', meaning: 'Yaratıcılığı geliştirmek', pos: 'phrase' },
      { word: 'Stimulate', meaning: 'Uyarmak/Canlandırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Dampen', meaning: 'Heves kırmak/Azaltmak', pos: 'verb' }
    ],
    collocations: ['boost confidence', 'boost morale', 'boost productivity'],
    collocationMeanings: {
      'boost confidence': 'özgüveni artırmak',
      'boost morale': 'morali yükseltmek',
      'boost productivity': 'verimliliği artırmak'
    },
    examples: ['Being outdoors may boost your creativity.'],
    exampleTranslations: ['Dışarıda olmak yaratıcılığınızı artırabilir.']
  },
  {
    id: 'break_a_resolution',
    word: 'Break a resolution',
    pos: 'phrase',
    meaning: 'Kararını bozmak (yeminini bozmak)',
    definition: 'To not do what you promised.',
    ipa: '/breɪk ə ˌrez.əˈluː.ʃən/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Abandon a goal', meaning: 'Hedefinden vazgeçmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Keep a resolution', meaning: 'Kararına sadık kalmak', pos: 'phrase' }
    ],
    collocations: ['make or break a resolution', 'break a new year resolution'],
    collocationMeanings: {
      'make or break a resolution': 'karar almak veya bozmak',
      'break a new year resolution': 'yeni yıl kararını bozmak'
    },
    examples: ['I broke a resolution not to eat meat when I went to the restaurant yesterday.'],
    exampleTranslations: ['Dün restorana gittiğimde et yememe kararımı bozdum.']
  },
  {
    id: 'breaking_news',
    word: 'Breaking news',
    pos: 'noun',
    meaning: 'Son dakika haberi',
    definition: 'New information about a news event that is still happening.',
    ipa: '/ˈbreɪ.kɪŋ njuːz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Latest news', meaning: 'En son haberler', pos: 'noun' },
      { word: 'News flash', meaning: 'Haber flaşı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['latest breaking news', 'follow breaking news'],
    collocationMeanings: {
      'latest breaking news': 'en son dakika gelişmeleri',
      'follow breaking news': 'son dakika haberlerini takip etmek'
    },
    examples: ['Keep up with the latest breaking news and politics from around the world.'],
    exampleTranslations: ['Dünyanın dört bir yanından en son dakika haberlerini ve siyaseti takip edin.']
  },
  {
    id: 'brilliant_b1',
    word: 'Brilliant',
    pos: 'adjective',
    meaning: 'Çok zeki, parlak, muhteşem',
    definition: 'Very intelligent.',
    ipa: '/ˈbrɪl.jənt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'brilliantly', pos: 'adv', meaning: 'muhteşem şekilde' },
      { word: 'brilliance', pos: 'noun', meaning: 'parlaklık/zekâ' }
    ],
    synonyms: [
      { word: 'Intelligent', meaning: 'Zeki', pos: 'adj' },
      { word: 'Outstanding', meaning: 'Seçkin/Harika', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Stupid', meaning: 'Aptal', pos: 'adj' },
      { word: 'Dull', meaning: 'Sönük/Aptalca', pos: 'adj' }
    ],
    collocations: ['brilliant idea', 'brilliant success', 'absolutely brilliant'],
    collocationMeanings: {
      'brilliant idea': 'harika fikir',
      'brilliant success': 'muazzam başarı',
      'absolutely brilliant': 'kesinlikle harika'
    },
    examples: ['She is a brilliant scientist.'],
    exampleTranslations: ['O muhteşem bir bilim insanı.']
  },
  {
    id: 'build_a_brand',
    word: 'Build a brand',
    pos: 'phrase',
    meaning: 'Marka oluşturmak',
    definition: 'Make or develop a product or group of products that has its own name and is made by one particular company.',
    ipa: '/bɪld ə brænd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Establish a brand', meaning: 'Marka kurmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['brand building', 'global brand'],
    collocationMeanings: {
      'brand building': 'marka inşası',
      'global brand': 'küresel marka'
    },
    examples: ['We need the team to work together to build a brand.'],
    exampleTranslations: ['Bir marka oluşturmak için ekibin birlikte çalışmasına ihtiyacımız var.']
  },
  {
    id: 'build_a_reputation',
    word: 'Build a reputation',
    pos: 'phrase',
    meaning: 'İtibar inşa etmek, isim yapmak',
    definition: 'Make or develop the opinion that people have about how good something is.',
    ipa: '/bɪld ə ˌrep.jəˈteɪ.ʃən/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Gain fame', meaning: 'Ün kazanmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Lose credibility', meaning: 'Güvenilirliğini yitirmek', pos: 'phrase' }
    ],
    collocations: ['solid reputation', 'good reputation', 'reputation for excellence'],
    collocationMeanings: {
      'solid reputation': 'sağlam itibar',
      'good reputation': 'iyi şöhret',
      'reputation for excellence': 'mükemmeliyetle tanınan itibar'
    },
    examples: ['It may take a while to build a reputation.'],
    exampleTranslations: ['Bir itibar oluşturmak biraz zaman alabilir.']
  },
  {
    id: 'buttery',
    word: 'Buttery',
    pos: 'adjective',
    meaning: 'Tereyağlı, tereyağı tadında',
    definition: 'Buttery food has a lot of butter in it, or tastes as if it has butter in it.',
    ipa: '/ˈbʌt.ər.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'butter', pos: 'noun/verb', meaning: 'tereyağı/tereyağı sürmek' }
    ],
    synonyms: [
      { word: 'Rich', meaning: 'Yoğun/Yağlı', pos: 'adj' }
    ],
    antonyms: [],
    collocations: ['buttery texture', 'buttery sauce'],
    collocationMeanings: {
      'buttery texture': 'tereyağlı doku',
      'buttery sauce': 'tereyağlı sos'
    },
    examples: ['The biscuits she made were delicious and buttery.'],
    exampleTranslations: ['Yaptığı bisküviler lezzetli ve tereyağlıydı.']
  },
  {
    id: 'carry_on',
    word: 'Carry on',
    pos: 'phrasal verb',
    meaning: 'Devam etmek, sürdürmek',
    definition: 'To continue without stopping.',
    ipa: '/ˈkær.i ɒn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Continue', meaning: 'Devam etmek', pos: 'verb' },
      { word: 'Keep on', meaning: 'Sürdürmek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Stop', meaning: 'Durmak', pos: 'verb' },
      { word: 'Quit', meaning: 'Bırakmak', pos: 'verb' }
    ],
    collocations: ['carry on working', 'carry on with', 'keep calm and carry on'],
    collocationMeanings: {
      'carry on working': 'çalışmaya devam etmek',
      'carry on with': 'bir şeye devam etmek',
      'keep calm and carry on': 'sakin ol ve devam et'
    },
    examples: ['He moved to London to carry on his work.'],
    exampleTranslations: ['Çalışmalarını sürdürmek için Londra’ya taşındı.']
  },
  {
    id: 'catchy',
    word: 'Catchy',
    pos: 'adjective',
    meaning: 'Akılda kalıcı (şarkı/söz)',
    definition: 'A tune or phrase which attracts your attention and is easy to remember.',
    ipa: '/ˈkætʃ.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'catch', pos: 'verb', meaning: 'yakalamak' }
    ],
    synonyms: [
      { word: 'Memorable', meaning: 'Unutulmaz', pos: 'adj' },
      { word: 'Infectious', meaning: 'Bulaşıcı/Etkileyici', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Forgettable', meaning: 'Unutulabilir', pos: 'adj' },
      { word: 'Dull', meaning: 'Sıkıcı/Donuk', pos: 'adj' }
    ],
    collocations: ['catchy tune', 'catchy song', 'catchy slogan'],
    collocationMeanings: {
      'catchy tune': 'akılda kalıcı melodi',
      'catchy song': 'akılda kalıcı şarkı',
      'catchy slogan': 'akılda kalıcı slogan'
    },
    examples: ["I like this song because it's very catchy."],
    exampleTranslations: ['Bu şarkıyı seviyorum çünkü çok akılda kalıcı.']
  },
  {
    id: 'cause_b1',
    word: 'Cause',
    pos: 'noun',
    meaning: 'Sebep, neden',
    definition: 'An event, thing, or person that makes something happen.',
    ipa: '/kɔːz/',
    level: 'intermediate',
    wordFamily: [
      { word: 'causal', pos: 'adj', meaning: 'nedensel' },
      { word: 'causality', pos: 'noun', meaning: 'nedensellik' }
    ],
    synonyms: [
      { word: 'Reason', meaning: 'Sebep', pos: 'noun' },
      { word: 'Source', meaning: 'Kaynak', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Effect', meaning: 'Etki/Sonuç', pos: 'noun' },
      { word: 'Result', meaning: 'Sonuç', pos: 'noun' }
    ],
    collocations: ['main cause', 'common cause', 'cause for concern'],
    collocationMeanings: {
      'main cause': 'ana neden',
      'common cause': 'yaygın neden',
      'cause for concern': 'endişe verici neden'
    },
    examples: ['The major cause of these accidents is drivers going too fast.'],
    exampleTranslations: ['Bu kazaların ana nedeni sürücelerin çok hızlı gitmesidir.']
  },
  {
    id: 'change_my_mind',
    word: 'Change my mind',
    pos: 'phrase',
    meaning: 'Fikrimi değiştirmek',
    definition: 'To adopt a different opinion or plan.',
    ipa: '/tʃeɪndʒ maɪ maɪnd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reconsider', meaning: 'Yeniden düşünmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Stick to one\'s guns', meaning: 'Nuh deyip peygamber dememek', pos: 'idiom' }
    ],
    collocations: ['never change your mind', 'hard to change one\'s mind'],
    collocationMeanings: {
      'never change your mind': 'asla fikrini değiştirmemek',
      'hard to change one\'s mind': 'birinin fikrini değiştirmesi zordur'
    },
    examples: ["I've changed my mind – I'll have a coffee."],
    exampleTranslations: ['Fikrimi değiştirdim – bir kahve alacağım.']
  },
  {
    id: 'cheesy',
    word: 'Cheesy',
    pos: 'adjective',
    meaning: 'Peynirli, peynir tadında',
    definition: 'Tasting like cheese.',
    ipa: '/ˈtʃiː.zi/',
    level: 'intermediate',
    wordFamily: [
      { word: 'cheese', pos: 'noun', meaning: 'peynir' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['cheesy sauce', 'cheesy pasta', 'cheesy grin'],
    collocationMeanings: {
      'cheesy sauce': 'peynirli sos',
      'cheesy pasta': 'peynirli makarna',
      'cheesy grin': 'sahte/zoraki gülümseme (argoda)'
    },
    examples: ['It has a very strong cheesy flavour to it.'],
    exampleTranslations: ['Çok güçlü bir peynir aroması var.']
  },
  {
    id: 'choir',
    word: 'Choir',
    pos: 'noun',
    meaning: 'Koro',
    definition: 'A group of singers who perform together, for example in a church or school.',
    ipa: '/kwaɪər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'choral', pos: 'adj', meaning: 'koroyla ilgili' }
    ],
    synonyms: [
      { word: 'Chorus', meaning: 'Koro/Nakarat', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['school choir', 'church choir', 'join a choir'],
    collocationMeanings: {
      'school choir': 'okul korosu',
      'church choir': 'kilise korosu',
      'join a choir': 'koroya katılmak'
    },
    examples: ['Jack was a member of the school choir.'],
    exampleTranslations: ['Jack okul korosunun bir üyesiydi.']
  },
  {
    id: 'chocolatey',
    word: 'Chocolatey',
    pos: 'adjective',
    meaning: 'Çikolatalı, çikolata gibi',
    definition: 'Chocolatey food has a lot of chocolate in it, or tastes like chocolate.',
    ipa: '/ˈtʃɒk.lə.ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'chocolate', pos: 'noun', meaning: 'çikolata' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['chocolatey taste', 'chocolatey dessert'],
    collocationMeanings: {
      'chocolatey taste': 'çikolatalı tad',
      'chocolatey dessert': 'çikolatalı tatlı'
    },
    examples: ['The cake is a bit too chocolatey for me.'],
    exampleTranslations: ['Kek benim için biraz fazla çikolatalı.']
  },
  {
    id: 'clear_up',
    word: 'Clear up',
    pos: 'phrasal verb',
    meaning: 'Temizlemek, ortalığı toparlamak',
    definition: 'To make everything clean and tidy again after making a mess.',
    ipa: '/klɪər ʌp/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tidy up', meaning: 'Toparlamak', pos: 'phrasal verb' },
      { word: 'Clean', meaning: 'Temizlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Mess up', meaning: 'Dağıtmak', pos: 'phrasal verb' }
    ],
    collocations: ['clear up the mess', 'clear up the weather', 'clear up a doubt'],
    collocationMeanings: {
      'clear up the mess': 'dağınıklığı toplamak',
      'clear up the weather': 'havanın açması',
      'clear up a doubt': 'şüpheyi gidermek'
    },
    examples: ["I'll clear up if you want to go to bed."],
    exampleTranslations: ['Eğer yatmak istersen etrafı ben toparlarım.']
  },
  {
    id: 'colleague',
    word: 'Colleague',
    pos: 'noun',
    meaning: 'Meslektaş, iş arkadaşı',
    definition: 'People who work in the same organization or department as you.',
    ipa: '/ˈkɒl.iːɡ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Co-worker', meaning: 'İş arkadaşı', pos: 'noun' },
      { word: 'Associate', meaning: 'Ortak/Meslektaş', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Rival', meaning: 'Rakip', pos: 'noun' }
    ],
    collocations: ['work colleague', 'former colleague', 'senior colleague'],
    collocationMeanings: {
      'work colleague': 'iş arkadaşı',
      'former colleague': 'eski meslektaş',
      'senior colleague': 'kıdemli meslektaş'
    },
    examples: ['He is popular with his colleagues.'],
    exampleTranslations: ['İş arkadaşları arasında popülerdir.']
  },
  {
    id: 'come_up_with',
    word: 'Come up with',
    pos: 'phrasal verb',
    meaning: 'Bulmak (fikir vb.), üretmek',
    definition: 'To think of something such as an idea or a plan.',
    ipa: '/kʌm ʌp wɪð/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Invent', meaning: 'İcat etmek', pos: 'verb' },
      { word: 'Propose', meaning: 'Önermek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['come up with an idea', 'come up with a solution', 'come up with a plan'],
    collocationMeanings: {
      'come up with an idea': 'bir fikir bulmak',
      'come up with a solution': 'bir çözüm üretmek',
      'come up with a plan': 'bir plan tasarlamak'
    },
    examples: ['Is that the best you can come up with?'],
    exampleTranslations: ['Bulabildiğin en iyi şey bu mu?']
  },
  {
    id: 'come_up_with_new_ideas',
    word: 'Come up with new ideas',
    pos: 'phrase',
    meaning: 'Yeni fikirler bulmak',
    definition: 'To think of something new.',
    ipa: '/kʌm ʌp wɪð njuː aɪˈdɪəz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Brainstorm', meaning: 'Beyin fırtınası yapmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['need to generate new ideas', 'strategy to generate new ideas'],
    collocationMeanings: {
      'need to generate new ideas': 'yeni fikirler bulmaya ihtiyaç duymak',
      'strategy to generate new ideas': 'yeni fikirler bulma stratejisi'
    },
    examples: ['We can form a group to come up with new ideas.'],
    exampleTranslations: ['Yeni fikirler üretmek için bir grup kurabiliriz.']
  },
  {
    id: 'competitive',
    word: 'Competitive',
    pos: 'adjective',
    meaning: 'Rekabetçi',
    definition: 'A competitive activity is one in which companies or teams are competing against each other.',
    ipa: '/kəmˈpet.ɪ.tɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'compete', pos: 'verb', meaning: 'yarışmak' },
      { word: 'competition', pos: 'noun', meaning: 'yarışma/rekabet' },
      { word: 'competitor', pos: 'noun', meaning: 'yarışmacı/rakip' }
    ],
    synonyms: [
      { word: 'Ambitious', meaning: 'Hırslı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Uncompetitive', meaning: 'Rekabetçi olmayan', pos: 'adj' }
    ],
    collocations: ['competitive market', 'competitive edge', 'highly competitive'],
    collocationMeanings: {
      'competitive market': 'rekabetçi pazar',
      'competitive edge': 'rekabet avantajı',
      'highly competitive': 'son derece rekabetçi'
    },
    examples: ['He gave up playing competitive football at the age of 24.'],
    exampleTranslations: ['24 yaşında rekabetçi futbol oynamayı bıraktı.']
  },
  {
    id: 'confident_b1',
    word: 'Confident',
    pos: 'adjective',
    meaning: 'Kendine güvenen',
    definition: 'Someone who believes in their own abilities and so does not feel nervous or frightened.',
    ipa: '/ˈkɒn.fɪ.dənt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'confidence', pos: 'noun', meaning: 'güven' },
      { word: 'confidently', pos: 'adv', meaning: 'güvenle' }
    ],
    synonyms: [
      { word: 'Self-assured', meaning: 'Kendinden emin', pos: 'adj' },
      { word: 'Positive', meaning: 'Olumlu/Emin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Insecure', meaning: 'Güvensiz', pos: 'adj' },
      { word: 'Shy', meaning: 'Utangaç', pos: 'adj' }
    ],
    collocations: ['feel confident', 'self confident', 'confident person'],
    collocationMeanings: {
      'feel confident': 'kendine güvenmek',
      'self confident': 'özgüvenli',
      'confident person': 'kendinden emin kişi'
    },
    examples: ['He is confident in his ability to play the piano.'],
    exampleTranslations: ['Piyano çalma yeteneği konusunda kendine güveniyor.']
  },
  {
    id: 'confused',
    word: 'Confused',
    pos: 'adjective',
    meaning: 'Kafası karışık',
    definition: 'Unable to understand something or think clearly about it.',
    ipa: '/kənˈfjuːzd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'confusion', pos: 'noun', meaning: 'karışıklık' },
      { word: 'confuse', pos: 'verb', meaning: 'kafa karıştırmak' }
    ],
    synonyms: [
      { word: 'Puzzled', meaning: 'Şaşkın', pos: 'adj' },
      { word: 'Baffled', meaning: 'Donup kalmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Clear', meaning: 'Net/Anlaşılır', pos: 'adj' }
    ],
    collocations: ['totally confused', 'look confused', 'confused expression'],
    collocationMeanings: {
      'totally confused': 'tamamen kafası karışmış',
      'look confused': 'kafası karışmış görünmek',
      'confused expression': 'şaşkın/karışık ifade'
    },
    examples: ['She was starting to feel a bit confused.'],
    exampleTranslations: ['Biraz kafası karışmaya başlamıştı.']
  },
  {
    id: 'control_yourself',
    word: 'Control yourself',
    pos: 'phrase',
    meaning: 'Kendine hakim olmak',
    definition: 'To have the power to make decisions and decide what will happen to something.',
    ipa: '/kənˈtrəʊl jɔːˈself/',
    level: 'intermediate',
    wordFamily: [
      { word: 'control', pos: 'noun/verb', meaning: 'kontrol/kontrol etmek' }
    ],
    synonyms: [
      { word: 'Restrain yourself', meaning: 'Kendini dizginlemek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Lose control', meaning: 'Kontrolü kaybetmek', pos: 'phrase' }
    ],
    collocations: ['struggle to control yourself', 'must control yourself'],
    collocationMeanings: {
      'struggle to control yourself': 'kendine hakim olmakta zorlanmak',
      'must control yourself': 'kendine hakim olmalısın'
    },
    examples: ["When I see chocolate I can't control myself."],
    exampleTranslations: ['Çikolata gördüğümde kendime hakim olamıyorum.']
  },
  {
    id: 'convenient',
    word: 'Convenient',
    pos: 'adjective',
    meaning: 'Uygun, elverişli, pratik',
    definition: 'Easy to use, or appropriate for a particular purpose.',
    ipa: '/kənˈviː.ni.ənt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'convenience', pos: 'noun', meaning: 'kolaylık' },
      { word: 'conveniently', pos: 'adv', meaning: 'uygun şekilde' }
    ],
    synonyms: [
      { word: 'Handy', meaning: 'Kullanışlı', pos: 'adj' },
      { word: 'Suitable', meaning: 'Uygun', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Inconvenient', meaning: 'Uygunsuz/Zahmetli', pos: 'adj' }
    ],
    collocations: ['convenient location', 'convenient time', 'very convenient'],
    collocationMeanings: {
      'convenient location': 'uygun konum',
      'convenient time': 'müsait/uygun zaman',
      'very convenient': 'çok pratik'
    },
    examples: ['The hotel was only five minutes from the beach, which was convenient.'],
    exampleTranslations: ['Otel plaja sadece beş dakika mesafeydi, bu da çok uygundu/pratikti.']
  },
  {
    id: 'creamy',
    word: 'Creamy',
    pos: 'adjective',
    meaning: 'Kremalı, kıvamlı, yumuşak',
    definition: 'A creamy substance is thick, soft, and smooth and does not flow easily.',
    ipa: '/ˈkriː.mi/',
    level: 'intermediate',
    wordFamily: [
      { word: 'cream', pos: 'noun', meaning: 'krema' }
    ],
    synonyms: [
      { word: 'Smooth', meaning: 'Pürüzsüz', pos: 'adj' },
      { word: 'Velvety', meaning: 'Kadifemsi', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Watery', meaning: 'Sulu/Tatsız', pos: 'adj' }
    ],
    collocations: ['creamy texture', 'creamy soup', 'rich and creamy'],
    collocationMeanings: {
      'creamy texture': 'kremamsı doku',
      'creamy soup': 'kıvamlı çorba',
      'rich and creamy': 'yoğun ve kremalı'
    },
    examples: ['This sauce is so creamy.'],
    exampleTranslations: ['Bu sos çok kıvamlı/yumuşak.']
  },
  {
    id: 'crowded',
    word: 'Crowded',
    pos: 'adjective',
    meaning: 'Kalabalık',
    definition: 'A place with a lot of people, especially too many.',
    ipa: '/ˈkraʊ.dɪd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'crowd', pos: 'noun/verb', meaning: 'kalabalık/toplanmak' }
    ],
    synonyms: [
      { word: 'Packed', meaning: 'Tıklım tıklım', pos: 'adj' },
      { word: 'Jam-packed', meaning: 'Aşırı kalabalık', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Empty', meaning: 'Boş', pos: 'adj' },
      { word: 'Deserted', meaning: 'Issız', pos: 'adj' }
    ],
    collocations: ['crowded room', 'over crowded', 'crowded city'],
    collocationMeanings: {
      'crowded room': 'kalabalık oda',
      'over crowded': 'aşırı kalabalık',
      'crowded city': 'kalabalık şehir'
    },
    examples: ['The street was noisy and crowded.'],
    exampleTranslations: ['Cadde gürültülü ve kalabalıktı.']
  },
  {
    id: 'cut_down',
    word: 'Cut down',
    pos: 'phrasal verb',
    meaning: 'Azaltmak, kesinti yapmak',
    definition: 'To reduce an amount of something.',
    ipa: '/kʌt daʊn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reduce', meaning: 'Azaltmak', pos: 'verb' },
      { word: 'Decrease', meaning: 'Düşürmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Increase', meaning: 'Artırmak', pos: 'verb' }
    ],
    collocations: ['cut down trees', 'cut down costs', 'cut down expenses'],
    collocationMeanings: {
      'cut down trees': 'ağaç kesmek',
      'cut down costs': 'maliyetleri düşürmek',
      'cut down expenses': 'giderleri kısmak'
    },
    examples: ['These improvements will cut down on traffic noise.'],
    exampleTranslations: ['Bu iyileştirmeler trafik gürültüsünü azaltacak.']
  },
  {
    id: 'cut_down_on',
    word: 'Cut down on',
    pos: 'phrasal verb',
    meaning: 'Azaltmak (tüketimi vb.)',
    definition: 'To do less of something.',
    ipa: '/kʌt daʊn ɒn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Consume less', meaning: 'Daha az tüketmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Indulge in', meaning: 'Aşırıya kaçmak', pos: 'phrasal verb' }
    ],
    collocations: ['cut down on sugar', 'cut down on salt', 'cut down on smoking'],
    collocationMeanings: {
      'cut down on sugar': 'şekeri azaltmak',
      'cut down on salt': 'tuz kullanımını düşürmek',
      'cut down on smoking': 'sigarayı azaltmak'
    },
    examples: ['She wants to cut down on the amount of chocolate she eats.'],
    exampleTranslations: ['Yediği çikolata miktarını azaltmak istiyor.']
  },
  {
    id: 'deal_with',
    word: 'Deal with',
    pos: 'phrasal verb',
    meaning: 'İlgilenmek, başa çıkmak',
    definition: 'To take action to do something, especially to solve a problem.',
    ipa: '/diːl wɪð/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Handle', meaning: 'Ele almak', pos: 'verb' },
      { word: 'Manage', meaning: 'Yönetmek', pos: 'verb' },
      { word: 'Tackle', meaning: 'Üstesinden gelmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Avoid', meaning: 'Kaçınmak', pos: 'verb' },
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['deal with a problem', 'deal with a situation', 'deal with a complaint'],
    collocationMeanings: {
      'deal with a problem': 'bir sorunu halletmek',
      'deal with a situation': 'bir durumla ilgilenmek',
      'deal with a complaint': 'bir şikayeti çözüme kavuşturmek'
    },
    examples: ['The government must now deal with the problem of high unemployment.'],
    exampleTranslations: ['Hükümet şimdi yüksek işsizlik sorunuyla ilgilenmeli.']
  },
  {
    id: 'decisive',
    word: 'Decisive',
    pos: 'adjective',
    meaning: 'Kararlı',
    definition: 'Able to make choices or decide what to do quickly and confidently.',
    ipa: '/dɪˈsaɪ.sɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'decide', pos: 'verb', meaning: 'karar vermek' },
      { word: 'decision', pos: 'noun', meaning: 'karar' },
      { word: 'decisively', pos: 'adv', meaning: 'kararlıca' }
    ],
    synonyms: [
      { word: 'Resolute', meaning: 'Azimli', pos: 'adj' },
      { word: 'Determined', meaning: 'Kararlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Indecisive', meaning: 'Kararsız', pos: 'adj' },
      { word: 'Hesitant', meaning: 'Tereddütlü', pos: 'adj' }
    ],
    collocations: ['decisive factor', 'decisive victory', 'decisive action'],
    collocationMeanings: {
      'decisive factor': 'belirleyici faktör',
      'decisive victory': 'kesin zafer',
      'decisive action': 'kararlı eylem'
    },
    examples: ["It's best to ask her because she's very decisive."],
    exampleTranslations: ['Ona sormak en iyisi çünkü o çok kararlıdır.']
  },
  {
    id: 'design_v',
    word: 'Design (v)',
    pos: 'verb',
    meaning: 'Tasarlamak',
    definition: 'To decide how something will be made, including how it will work and what it will look like, and often to make drawings of it.',
    ipa: '/dɪˈzaɪn/',
    level: 'intermediate',
    wordFamily: [
      { word: 'designer', pos: 'noun', meaning: 'tasarımcı' },
      { word: 'design', pos: 'noun', meaning: 'tasarım' }
    ],
    synonyms: [
      { word: 'Plan', meaning: 'Planlamak', pos: 'verb' },
      { word: 'Sketch', meaning: 'Taslağını çizmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['design a building', 'specially designed', 'design a website'],
    collocationMeanings: {
      'design a building': 'bina tasarlamak',
      'specially designed': 'özel olarak tasarlanmış',
      'design a website': 'internet sitesi tasarlamak'
    },
    examples: ['The bride wore a cream silk dress that she designed herself.'],
    exampleTranslations: ['Gelin, kendi tasarladığı krem rengi ipek bir elbise giydi.']
  },
  {
    id: 'designer',
    word: 'Designer',
    pos: 'noun',
    meaning: 'Tasarımcı',
    definition: 'Someone whose job is to decide how to make things or to decide their shape or appearance.',
    ipa: '/dɪˈzaɪ.nər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'design', pos: 'verb', meaning: 'tasarlamak' }
    ],
    synonyms: [
      { word: 'Creator', meaning: 'Yaratıcı', pos: 'noun' },
      { word: 'Architect', meaning: 'Mimar/Kurucu', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['fashion designer', 'graphic designer', 'interior designer'],
    collocationMeanings: {
      'fashion designer': 'moda tasarımcısı',
      'graphic designer': 'grafik tasarımcı',
      'interior designer': 'iç mimar'
    },
    examples: ['Calvin Klein is a famous fashion designer.'],
    exampleTranslations: ['Calvin Klein ünlü bir moda tasarımcısıdır.']
  },
  {
    id: 'disappear',
    word: 'Disappear',
    pos: 'verb',
    meaning: 'Gözden kaybolmak, yok olmak',
    definition: 'To no longer happen or exist.',
    ipa: '/ˌdɪs.əˈpɪər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'disappearance', pos: 'noun', meaning: 'gözden kaybolma' }
    ],
    synonyms: [
      { word: 'Vanish', meaning: 'Aniden yok olmak', pos: 'verb' },
      { word: 'Fade', meaning: 'Solup gitmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Appear', meaning: 'Görünmek', pos: 'verb' },
      { word: 'Emerge', meaning: 'Ortaya çıkmak', pos: 'verb' }
    ],
    collocations: ['disappear completely', 'suddenly disappear', 'disappear from view'],
    collocationMeanings: {
      'disappear completely': 'tamamen yok olmak',
      'suddenly disappear': 'aniden kaybolmak',
      'disappear from view': 'gözden kaybolmak'
    },
    examples: ['Many public libraries in the city are disappearing.'],
    exampleTranslations: ['Şehirdeki birçok halk kütüphanesi yok oluyor.']
  },
  {
    id: 'dishonest',
    word: 'Dishonest',
    pos: 'adjective',
    meaning: 'Dürüst olmayan, sahtekar',
    definition: 'Willing to do things that are not honest, for example to tell lies or steal things.',
    ipa: '/dɪˈsɒn.ɪst/',
    level: 'intermediate',
    wordFamily: [
      { word: 'honesty', pos: 'noun', meaning: 'dürüstlük' },
      { word: 'dishonestly', pos: 'adv', meaning: 'namussuzca' }
    ],
    synonyms: [
      { word: 'Deceitful', meaning: 'Aldatıcı', pos: 'adj' },
      { word: 'Crooked', meaning: 'Düzenbaz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Honest', meaning: 'Dürüst', pos: 'adj' },
      { word: 'Trustworthy', meaning: 'Güvenilir', pos: 'adj' }
    ],
    collocations: ['dishonest behavior', 'dishonest person', 'completely dishonest'],
    collocationMeanings: {
      'dishonest behavior': 'dürüst olmayan davranış',
      'dishonest person': 'sahtekar kişi',
      'completely dishonest': 'tamamen dürüstlükten uzak'
    },
    examples: ['They admitted that there were some dishonest employees working in the bank.'],
    exampleTranslations: ['Bankada çalışan bazı dürüst olmayan personeller olduğunu kabul ettiler.']
  },
  {
    id: 'dish_up',
    word: 'Dish up',
    pos: 'phrasal verb',
    meaning: 'Yemek servis etmek',
    definition: 'To put food into dishes so that it is ready to be eaten.',
    ipa: '/dɪʃ ʌp/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Serve', meaning: 'Servis etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['dish up a meal', 'ready to dish up'],
    collocationMeanings: {
      'dish up a meal': 'yemek hazırlayıp koymak',
      'ready to dish up': 'servis edilmeye hazır'
    },
    examples: ["Can you dish up the food while it's hot?"],
    exampleTranslations: ['Yemek sıcakken servis edebilir misin?']
  },
  {
    id: 'display',
    word: 'Display',
    pos: 'noun',
    meaning: 'Sergilemek, gösteri',
    definition: 'An arrangement of things for people to look at.',
    ipa: '/dɪˈspleɪ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'display', pos: 'verb', meaning: 'göstermek/sergilemek' }
    ],
    synonyms: [
      { word: 'Exhibition', meaning: 'Sergi', pos: 'noun' },
      { word: 'Show', meaning: 'Gösteri', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Concealment', meaning: 'Gizleme', pos: 'noun' }
    ],
    collocations: ['public display', 'on display', 'window display'],
    collocationMeanings: {
      'public display': 'halka açık gösterim',
      'on display': 'sergilenmekte',
      'window display': 'vitrin sergisi'
    },
    examples: ['Max put up the window display.'],
    exampleTranslations: ['Max vitrin düzenlemesini yerleştirdi.']
  },
  {
    id: 'donate',
    word: 'Donate',
    pos: 'verb',
    meaning: 'Bağışlamak',
    definition: 'To give something such as money or goods to an organization.',
    ipa: '/dəʊˈneɪt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'donation', pos: 'noun', meaning: 'bağış' },
      { word: 'donor', pos: 'noun', meaning: 'bağışçı' }
    ],
    synonyms: [
      { word: 'Contribute', meaning: 'Katkıda bulunmak', pos: 'verb' },
      { word: 'Gift', meaning: 'Hibe etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Receive', meaning: 'Almak', pos: 'verb' }
    ],
    collocations: ['donate blood', 'donate money', 'donate to charity'],
    collocationMeanings: {
      'donate blood': 'kan bağışlamak',
      'donate money': 'para bağışında bulunmak',
      'donate to charity': 'hayır kurumuna bağış yapmak'
    },
    examples: ['The centre was bought with money donated by a wealthy businessman.'],
    exampleTranslations: ['Merkez, zengin bir iş adamı tarafından bağışlanan parayla satın alındı.']
  },
  {
    id: 'draw_attention_to',
    word: 'Draw attention to',
    pos: 'phrase',
    meaning: 'Dikkat çekmek (bir şeye/birine)',
    definition: 'To make people notice somebody/something.',
    ipa: '/drɔː əˈten.ʃən tuː/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Highlight', meaning: 'Vurgulamak', pos: 'verb' },
      { word: 'Emphasize', meaning: 'Önemini belirtmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Downplay', meaning: 'Önemsememek', pos: 'verb' }
    ],
    collocations: ['draw attention to the fact', 'draw attention to the problem'],
    collocationMeanings: {
      'draw attention to the fact': 'bir gerçeğe dikkat çekmek',
      'draw attention to the problem': 'soruna parmak basmak/dikkat çekmek'
    },
    examples: ['We have to try and get in without drawing attention to ourselves.'],
    exampleTranslations: ['Dikkat çekmeden içeri girmeye çalışmalıyız.']
  },
  {
    id: 'encourage_b1',
    word: 'Encourage',
    pos: 'verb',
    meaning: 'Teşvik etmek, cesaretlendirmek',
    definition: 'To suggest that someone does something that you believe would be good.',
    ipa: '/ɪnˈkʌr.ɪdʒ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'encouragement', pos: 'noun', meaning: 'teşvik' },
      { word: 'encouraging', pos: 'adj', meaning: 'cesaret verici' }
    ],
    synonyms: [
      { word: 'Support', meaning: 'Desteklemek', pos: 'verb' },
      { word: 'Urge', meaning: 'Israr etmek/Dürtmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discourage', meaning: 'Cesaretini kırmak', pos: 'verb' }
    ],
    collocations: ['strongly encourage', 'encourage to do', 'encourage development'],
    collocationMeanings: {
      'strongly encourage': 'şiddetle teşvik etmek',
      'encourage to do': 'yapması için yüreklendirmek',
      'encourage development': 'gelişimi desteklemek'
    },
    examples: ['We encourage student participation in our classes.'],
    exampleTranslations: ['Derslerimizde öğrenci katılımını teşvik ediyoruz.']
  },
  {
    id: 'enormous_b1',
    word: 'Enormous',
    pos: 'adjective',
    meaning: 'Kocaman, muazzam',
    definition: 'Very large in size or quantity.',
    ipa: '/ɪˈnɔː.məs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'enormously', pos: 'adv', meaning: 'aşırı derecede' },
      { word: 'enormity', pos: 'noun', meaning: 'muazzamlık' }
    ],
    synonyms: [
      { word: 'Huge', meaning: 'Devasa', pos: 'adj' },
      { word: 'Gigantic', meaning: 'Dev gibi', pos: 'adj' },
      { word: 'Massive', meaning: 'Çok büyük', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Tiny', meaning: 'Küçücük', pos: 'adj' },
      { word: 'Small', meaning: 'Küçük', pos: 'adj' }
    ],
    collocations: ['enormous amount', 'enormous potential', 'enormous success'],
    collocationMeanings: {
      'enormous amount': 'muazzam miktar',
      'enormous potential': 'büyük potansiyel',
      'enormous success': 'dev başarı'
    },
    examples: ["We couldn't finish the enormous birthday cake."],
    exampleTranslations: ['Kocaman doğum günü pastasını bitiremedik.']
  },
  {
    id: 'expectation',
    word: 'Expectation',
    pos: 'noun',
    meaning: 'Beklenti',
    definition: 'The belief that something will happen.',
    ipa: '/ˌek.spekˈteɪ.ʃən/',
    level: 'intermediate',
    wordFamily: [
      { word: 'expect', pos: 'verb', meaning: 'beklemek/ummak' },
      { word: 'expectant', pos: 'adj', meaning: 'beklenti içinde' }
    ],
    synonyms: [
      { word: 'Anticipation', meaning: 'Beklenti/Öngörü', pos: 'noun' },
      { word: 'Hope', meaning: 'Umut', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disbelief', meaning: 'İnanmama', pos: 'noun' }
    ],
    collocations: ['high expectations', 'meet expectations', 'beyond expectations'],
    collocationMeanings: {
      'high expectations': 'yüksek beklentiler',
      'meet expectations': 'beklentileri karşılamak',
      'beyond expectations': 'beklentilerin ötesinde'
    },
    examples: ['The team set off without any expectation of success.'],
    exampleTranslations: ['Takım, herhangi bir başarı beklentisi olmadan yola çıktı.']
  },
  {
    id: 'expression',
    word: 'Expression',
    pos: 'noun',
    meaning: 'İfade (yüz ifadesi)',
    definition: 'A look on someone\'s face that shows what their thoughts or feelings are.',
    ipa: '/ɪkˈspreʃ.ən/',
    level: 'intermediate',
    wordFamily: [
      { word: 'express', pos: 'verb', meaning: 'ifade etmek' },
      { word: 'expressive', pos: 'adj', meaning: 'anlamlı' }
    ],
    synonyms: [
      { word: 'Look', meaning: 'Bakış/İfade', pos: 'noun' },
      { word: 'Utterance', meaning: 'Söylem', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['facial expression', 'common expression', 'freedom of expression'],
    collocationMeanings: {
      'facial expression': 'yüz ifadesi',
      'common expression': 'yaygın tabir/ifade',
      'freedom of expression': 'ifade özgürlüğü'
    },
    examples: ['You should have seen the expression on his face!'],
    exampleTranslations: ['Yüzündeki ifadeyi görmeliydin!']
  },
  {
    id: 'eye_catching',
    word: 'Eye-catching',
    pos: 'adjective',
    meaning: 'Göz alıcı, dikkat çekici',
    definition: 'Attractive or unusual and therefore noticed.',
    ipa: '/ˈaɪˌkætʃ.ɪŋ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Striking', meaning: 'Çarpıcı', pos: 'adj' },
      { word: 'Noticeable', meaning: 'Fark edilebilir', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unremarkable', meaning: 'Sıradan', pos: 'adj' },
      { word: 'Inconspicuous', meaning: 'Göze çarpmayan', pos: 'adj' }
    ],
    collocations: ['eye-catching design', 'eye-catching color', 'eye-catching advertisement'],
    collocationMeanings: {
      'eye-catching design': 'göz alıcı tasarım',
      'eye-catching color': 'dikkat çekici renk',
      'eye-catching advertisement': 'ilgi çekici reklam'
    },
    examples: ['The eye-catching design was very clever.'],
    exampleTranslations: ['Göz alıcı tasarım çok zekiceydi.']
  },
  {
    id: 'fall_flat',
    word: 'Fall flat',
    pos: 'idiom',
    meaning: 'Beklenen etkiyi yaratmamak, çuvallamak',
    definition: 'To not succeed in entertaining someone or making them laugh.',
    ipa: '/fɔːl flæt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Fail', meaning: 'Başarısız olmak', pos: 'verb' },
      { word: 'Flop', meaning: 'Fiyasko olmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Succeed', meaning: 'Başarmak', pos: 'verb' },
      { word: 'Triumph', meaning: 'Zafer kazanmak', pos: 'verb' }
    ],
    collocations: ['joke fell flat', 'performance fell flat', 'completely fall flat'],
    collocationMeanings: {
      'joke fell flat': 'şakanın tutmaması',
      'performance fell flat': 'performansın sönük kalması',
      'completely fall flat': 'tamamen fiyaskoyla sonuçlanmak'
    },
    examples: ['My attempt at a joke fell flat.'],
    exampleTranslations: ['Şaka yapma girişimim beklenen etkiyi yaratmadı.']
  },
  {
    id: 'fascinating',
    word: 'Fascinating',
    pos: 'adjective',
    meaning: 'Büyüleyici',
    definition: 'Making you very interested or attracted.',
    ipa: '/ˈfæs.ən.eɪ.tɪŋ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fascinate', pos: 'verb', meaning: 'büyülemek' },
      { word: 'fascination', pos: 'noun', meaning: 'cazibe/hayranlık' }
    ],
    synonyms: [
      { word: 'Captivating', meaning: 'Zihin çelici', pos: 'adj' },
      { word: 'Enthralling', meaning: 'Büyüleyici', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Boring', meaning: 'Sıkıcı', pos: 'adj' },
      { word: 'Uninteresting', meaning: 'İlgisiz', pos: 'adj' }
    ],
    collocations: ['absolutely fascinating', 'fascinating subject', 'find something fascinating'],
    collocationMeanings: {
      'absolutely fascinating': 'tamamen büyüleyici',
      'fascinating subject': 'çok ilginç konu',
      'find something fascinating': 'bir şeyi büyüleyici bulmak'
    },
    examples: ['He told me a fascinating story.'],
    exampleTranslations: ['Bana büyüleyici bir hikaye anlattı.']
  },
  {
    id: 'fatty',
    word: 'Fatty',
    pos: 'adjective',
    meaning: 'Yağlı',
    definition: 'Containing a lot of fat.',
    ipa: '/ˈfæt.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fat', pos: 'noun/adj', meaning: 'yağ/şişman' }
    ],
    synonyms: [
      { word: 'Greasy', meaning: 'Yağlı/Vıcık vıcık', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Lean', meaning: 'Yağsız', pos: 'adj' }
    ],
    collocations: ['fatty foods', 'fatty acid', 'fatty meat'],
    collocationMeanings: {
      'fatty foods': 'yağlı yiyecekler',
      'fatty acid': 'yağ asidi',
      'fatty meat': 'yağlı et'
    },
    examples: ['Fatty foods are bad for you.'],
    exampleTranslations: ['Yağlı yiyecekler sizin için kötüdür.']
  },
  {
    id: 'filling',
    word: 'Filling',
    pos: 'adjective',
    meaning: 'Doyurucu',
    definition: 'Food that is filling makes you feel full quickly.',
    ipa: '/ˈfɪl.ɪŋ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fill', pos: 'verb', meaning: 'doldurmak' }
    ],
    synonyms: [
      { word: 'Substantial', meaning: 'Besleyici/Tatmin edici', pos: 'adj' },
      { word: 'Satiating', meaning: 'Tok tutan', pos: 'adj' }
    ],
    antonyms: [],
    collocations: ['filling meal', 'very filling', 'nutritious and filling'],
    collocationMeanings: {
      'filling meal': 'doyurucu öğün',
      'very filling': 'çok tok tutan',
      'nutritious and filling': 'besleyici ve doyurucu'
    },
    examples: ['This pie I ordered is very filling.'],
    exampleTranslations: ['Sipariş ettiğim bu turta çok doyurucu.']
  },
  {
    id: 'filthy',
    word: 'Filthy',
    pos: 'adjective',
    meaning: 'Çok pis, kirli',
    definition: 'Very dirty.',
    ipa: '/ˈfɪl.θi/',
    level: 'intermediate',
    wordFamily: [
      { word: 'filth', pos: 'noun', meaning: 'pislik' }
    ],
    synonyms: [
      { word: 'Disgusting', meaning: 'İğrenç', pos: 'adj' },
      { word: 'Grubby', meaning: 'Pis', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Clean', meaning: 'Temiz', pos: 'adj' },
      { word: 'Spotless', meaning: 'Lekesiz', pos: 'adj' }
    ],
    collocations: ['filthy rich', 'filthy clothes', 'absolutely filthy'],
    collocationMeanings: {
      'filthy rich': 'çok zengin (argoda)',
      'filthy clothes': 'leke içindeki kıyafetler',
      'absolutely filthy': 'tamamen pislik içinde'
    },
    examples: ['The kitchen was filthy after he had cooked.'],
    exampleTranslations: ['O yemek pişirdikten sonra mutfak çok pisti.']
  },
  {
    id: 'fluently',
    word: 'Fluently',
    pos: 'adverb',
    meaning: 'Akıcı bir şekilde',
    definition: 'Spoken well and without difficulty.',
    ipa: '/ˈfluː.ənt.li/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fluent', pos: 'adj', meaning: 'akıcı' },
      { word: 'fluency', pos: 'noun', meaning: 'akıcılık' }
    ],
    synonyms: [
      { word: 'Effortlessly', meaning: 'Zahmetsizce', pos: 'adv' }
    ],
    antonyms: [
      { word: 'Haltingly', meaning: 'Kesik kesik/Tereddütle', pos: 'adv' }
    ],
    collocations: ['speak fluently', 'read fluently', 'communicate fluently'],
    collocationMeanings: {
      'speak fluently': 'akıcı konuşmak',
      'read fluently': 'akıcı okumak',
      'communicate fluently': 'akıcı iletişim kurmak'
    },
    examples: ['He speaks English fluently.'],
    exampleTranslations: ['İngilizceyi akıcı bir şekilde konuşuyor.']
  },
  {
    id: 'fruity',
    word: 'Fruity',
    pos: 'adjective',
    meaning: 'Meyveli, meyvemsi',
    definition: 'Tasting or smelling like fruit.',
    ipa: '/ˈfruː.ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fruit', pos: 'noun', meaning: 'meyve' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['fruity smell', 'fruity taste', 'pale and fruity'],
    collocationMeanings: {
      'fruity smell': 'meyvemsi koku',
      'fruity taste': 'meyve tadı',
      'pale and fruity': 'soluk ve meyveli'
    },
    examples: ['It is a fruity red drink.'],
    exampleTranslations: ['Bu meyveli kırmızı bir içecek.']
  },
  {
    id: 'furious',
    word: 'Furious',
    pos: 'adjective',
    meaning: 'Çok öfkeli, küplere binmiş',
    definition: 'Extremely angry.',
    ipa: '/ˈfjʊə.ri.əs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fury', pos: 'noun', meaning: 'öfke' },
      { word: 'furiously', pos: 'adv', meaning: 'öfkeyle' }
    ],
    synonyms: [
      { word: 'Enraged', meaning: 'Kudurmuş', pos: 'adj' },
      { word: 'Livid', meaning: 'Mosmor kesilmiş (öfkeden)', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Calm', meaning: 'Sakin', pos: 'adj' },
      { word: 'Pleased', meaning: 'Memnun', pos: 'adj' }
    ],
    collocations: ['absolutely furious', 'furious with someone', 'furious pace'],
    collocationMeanings: {
      'absolutely furious': 'tamamen deliye dönmüş',
      'furious with someone': 'birine karşı çok öfkeli',
      'furious pace': 'çok hızlı tempo'
    },
    examples: ["Roberts' comments provoked a furious public response."],
    exampleTranslations: ["Roberts'ın yorumları halktan çok öfkeli bir tepki aldı."]
  },
  {
    id: 'generate_new_ideas',
    word: 'Generate new ideas',
    pos: 'phrase',
    meaning: 'Yeni fikirler üretmek',
    definition: 'To think of something new.',
    ipa: '/ˈdʒen.ə.reɪt njuː aɪˈdɪəz/',
    level: 'intermediate',
    wordFamily: [
      { word: 'generation', pos: 'noun', meaning: 'nesil/üretim' },
      { word: 'generator', pos: 'noun', meaning: 'jeneratör/üreteç' }
    ],
    synonyms: [
      { word: 'Innovate', meaning: 'Yenilik yapmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['need to generate new ideas', 'ability to generate new ideas'],
    collocationMeanings: {
      'need to generate new ideas': 'yeni fikirler üretmeye ihtiyaç duymak',
      'ability to generate new ideas': 'yeni fikirler üretme yeteneği'
    },
    examples: ['When we generate new ideas, we need to make sure we write them down.'],
    exampleTranslations: ['Yeni fikirler ürettiğimizde, onları not ettiğimizden emin olmalıyız.']
  },
  {
    id: 'get_rid_of',
    word: 'Get rid of',
    pos: 'phrasal verb',
    meaning: 'Kurtulmak, başından savmak',
    definition: 'To throw away, give away, or sell a possession that you no longer want or need.',
    ipa: '/ɡet rɪd əv/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Discard', meaning: 'Atmak', pos: 'verb' },
      { word: 'Eliminate', meaning: 'Elemek/Yok etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Keep', meaning: 'Saklamak', pos: 'verb' },
      { word: 'Acquire', meaning: 'Edinmek', pos: 'verb' }
    ],
    collocations: ['get rid of waste', 'get rid of a problem', 'finally get rid of'],
    collocationMeanings: {
      'get rid of waste': 'atıklardan kurtulmak',
      'get rid of a problem': 'bir sorundan kurtulmak',
      'finally get rid of': 'sonunda başından savmak'
    },
    examples: ["We're moving, so we have to get rid of a lot of our furniture."],
    exampleTranslations: ['Taşınıyoruz, bu yüzden birçok mobilyamızdan kurtulmamız/onları çıkarmamız gerekiyor.']
  },
  {
    id: 'get_yourself',
    word: 'Get yourself',
    pos: 'phrase',
    meaning: 'Kendine (bir şey) almak/edinmek',
    definition: 'To obtain, receive, or be given something.',
    ipa: '/ɡet jɔːˈself/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Acquire', meaning: 'Edinmek', pos: 'verb' },
      { word: 'Obtain', meaning: 'Temin etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['get yourself ready', 'get yourself organized', 'get yourself together'],
    collocationMeanings: {
      'get yourself ready': 'kendini hazırla',
      'get yourself organized': 'kendini düzenle/hazırla',
      'get yourself together': 'kendini toparla'
    },
    examples: ['I got myself a coffee from the canteen.'],
    exampleTranslations: ['Kantinden kendime bir kahve aldım.']
  },
  {
    id: 'give_up',
    word: 'Give up',
    pos: 'phrasal verb',
    meaning: 'Vazgeçmek, bırakmak',
    definition: 'To lose something, especially something that you want to keep, to get something else or help someone.',
    ipa: '/ɡɪv ʌp/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Quit', meaning: 'Bırakmak', pos: 'verb' },
      { word: 'Surrender', meaning: 'Teslim olmak', pos: 'verb' },
      { word: 'Abandon', meaning: 'Terk etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Continue', meaning: 'Devam etmek', pos: 'verb' },
      { word: 'Persist', meaning: 'Israr etmek', pos: 'verb' }
    ],
    collocations: ['give up smoking', 'never give up', 'give up easily'],
    collocationMeanings: {
      'give up smoking': 'sigarayı bırakmak',
      'never give up': 'asla pes etme',
      'give up easily': 'kolayca vazgeçmek'
    },
    examples: ['We gave up on the idea of walking and took the bus instead.'],
    exampleTranslations: ['Yürüme fikrinden vazgeçtik ve onun yerine otobüse bindik.']
  },
  {
    id: 'gorgeous',
    word: 'Gorgeous',
    pos: 'adjective',
    meaning: 'Muhteşem, çok güzel',
    definition: 'Very beautiful.',
    ipa: '/ˈɡɔː.dʒəs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'gorgeously', pos: 'adv', meaning: 'muhteşem şekilde' }
    ],
    synonyms: [
      { word: 'Stunning', meaning: 'Göz kamaştırıcı', pos: 'adj' },
      { word: 'Exquisite', meaning: 'Zarif/Muazzam', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Hideous', meaning: 'İğrenç/Çirkin', pos: 'adj' },
      { word: 'Ugly', meaning: 'Çirkin', pos: 'adj' }
    ],
    collocations: ['absolutely gorgeous', 'look gorgeous', 'gorgeous weather'],
    collocationMeanings: {
      'absolutely gorgeous': 'kesinlikle muhteşem',
      'look gorgeous': 'harika görünmek',
      'gorgeous weather': 'şahane hava'
    },
    examples: ['She had a gorgeous red and gold silk sari.'],
    exampleTranslations: ['Muhteşem bir kırmızı ve altın rengi ipek sarisi vardı.']
  },
  {
    id: 'heavy_traffic',
    word: 'Heavy traffic',
    pos: 'phrase',
    meaning: 'Yoğun trafik',
    definition: 'A lot of vehicles that are travelling in an area at a particular time.',
    ipa: '/ˈhevi ˈtræfɪk/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Congestion', meaning: 'Tıkanıklık', pos: 'noun' },
      { word: 'Gridlock', meaning: 'Kilitlenmiş trafik', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Light traffic', meaning: 'Seyrek trafik', pos: 'phrase' }
    ],
    collocations: ['stuck in heavy traffic', 'cause heavy traffic', 'heavy traffic conditions'],
    collocationMeanings: {
      'stuck in heavy traffic': 'yoğun trafikte sıkışmak',
      'cause heavy traffic': 'yoğun trafiğe neden olmak',
      'heavy traffic conditions': 'yoğun trafik koşulları'
    },
    examples: ["Sorry I'm late - I was stuck in heavy traffic."],
    exampleTranslations: ['Geciktiğim için üzgünüm - yoğun trafiğe takıldım.']
  },
  {
    id: 'help_yourself',
    word: 'Help yourself',
    pos: 'idiom',
    meaning: 'Kendine ikram etmek, buyurmak',
    definition: 'Used for giving someone permission to do or use something.',
    ipa: '/help jɔːˈself/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['please help yourself', 'help yourself to a drink', 'feel free to help yourself'],
    collocationMeanings: {
      'please help yourself': 'lütfen buyurun',
      'help yourself to a drink': 'bir içecek alın',
      'feel free to help yourself': 'kendine almaktan çekinme'
    },
    examples: ['Help yourself to some paella.'],
    exampleTranslations: ['Paelladan buyurun (kendinize alın).']
  },
  {
    id: 'hilarious',
    word: 'Hilarious',
    pos: 'adjective',
    meaning: 'Çok komik, gülünç',
    definition: 'Extremely funny.',
    ipa: '/hɪˈleə.ri.əs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'hilarity', pos: 'noun', meaning: 'şenlik/neşe' }
    ],
    synonyms: [
      { word: 'Comical', meaning: 'Gülünç', pos: 'adj' },
      { word: 'Sidesplitting', meaning: 'Gülmekten kırıp geçiren', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Serious', meaning: 'Ciddi', pos: 'adj' },
      { word: 'Tragic', meaning: 'Trajik', pos: 'adj' }
    ],
    collocations: ['hilarious joke', 'find it hilarious', 'absolutely hilarious'],
    collocationMeanings: {
      'hilarious joke': 'çok gülünç şaka',
      'find it hilarious': 'çok komik bulmak',
      'absolutely hilarious': 'kesinlikle çok gülünç'
    },
    examples: ['For some reason, she finds his jokes hilarious.'],
    exampleTranslations: ['Nedense onun şakalarını çok komik buluyor.']
  },
  {
    id: 'idiom',
    word: 'Idiom',
    pos: 'noun',
    meaning: 'Deyim',
    definition: 'An expression whose meaning is different from the meaning of the individual words.',
    ipa: '/ˈɪd.i.əm/',
    level: 'intermediate',
    wordFamily: [
      { word: 'idiomatic', pos: 'adj', meaning: 'deyimsel' }
    ],
    synonyms: [
      { word: 'Expression', meaning: 'İfade/Tabir', pos: 'noun' },
      { word: 'Phrase', meaning: 'Söz öbeği', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['common idiom', 'use an idiom', 'learn idioms'],
    collocationMeanings: {
      'common idiom': 'yaygın deyim',
      'use an idiom': 'deyim kullanmak',
      'learn idioms': 'deyim öğrenmek'
    },
    examples: ["'To have your feet on the ground' is an idiom meaning 'to be sensible'."],
    exampleTranslations: ["'Ayakları yere basmak', 'mantıklı olmak' anlamına gelen bir deyimdir."]
  },
  {
    id: 'impatient',
    word: 'Impatient',
    pos: 'adjective',
    meaning: 'Sabırsız',
    definition: 'Annoyed because something is not happening as quickly as you want.',
    ipa: '/ɪmˈpeɪ.ʃənt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'patience', pos: 'noun', meaning: 'sabır' },
      { word: 'impatiently', pos: 'adv', meaning: 'sabırsızca' }
    ],
    synonyms: [
      { word: 'Restless', meaning: 'Huzursuz', pos: 'adj' },
      { word: 'Eager', meaning: 'Can atan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Patient', meaning: 'Sabırlı', pos: 'adj' }
    ],
    collocations: ['get impatient', 'impatient with', 'grow impatient'],
    collocationMeanings: {
      'get impatient': 'sabırsızlanmak',
      'impatient with': 'birine karşı sabırsız',
      'grow impatient': 'sabırsızlığı artmak'
    },
    examples: ["'Come on!' said Maggie, becoming impatient."],
    exampleTranslations: ["'Hadi ama!' dedi Maggie sabırsızlanarak."]
  },
  {
    id: 'improvement',
    word: 'Improvement',
    pos: 'noun',
    meaning: 'Gelişme, iyileşme',
    definition: 'The state of being better than before, or the process of making something better.',
    ipa: '/ɪmˈpruːv.mənt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'improve', pos: 'verb', meaning: 'geliştirmek' }
    ],
    synonyms: [
      { word: 'Enhancement', meaning: 'İyileştirme', pos: 'noun' },
      { word: 'Progress', meaning: 'İlerleme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Deterioration', meaning: 'Kötüleşme', pos: 'noun' },
      { word: 'Decline', meaning: 'Düşüş', pos: 'noun' }
    ],
    collocations: ['significant improvement', 'room for improvement', 'show improvement'],
    collocationMeanings: {
      'significant improvement': 'önemli gelişme',
      'room for improvement': 'gelişme alanı/payı',
      'show improvement': 'gelişme göstermek'
    },
    examples: ['The school is performing well, but it needs further improvement.'],
    exampleTranslations: ['Okul iyi performans gösteriyor ancak daha fazla gelişmeye ihtiyacı var.']
  },
  {
    id: 'inaccurate',
    word: 'Inaccurate',
    pos: 'adjective',
    meaning: 'Hatalı, yanlış',
    definition: 'Not accurate or correct.',
    ipa: '/ɪnˈæk.jə.rət/',
    level: 'intermediate',
    wordFamily: [
      { word: 'accuracy', pos: 'noun', meaning: 'doğruluk' },
      { word: 'inaccurately', pos: 'adv', meaning: 'yanlışça' }
    ],
    synonyms: [
      { word: 'Incorrect', meaning: 'Yanlış', pos: 'adj' },
      { word: 'Mistaken', meaning: 'Hatalı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Accurate', meaning: 'Doğru/Kesin', pos: 'adj' },
      { word: 'Correct', meaning: 'Doğru', pos: 'adj' }
    ],
    collocations: ['totally inaccurate', 'highly inaccurate', 'historically inaccurate'],
    collocationMeanings: {
      'totally inaccurate': 'tamamen yanlış',
      'highly inaccurate': 'büyük ölçüde hatalı',
      'historically inaccurate': 'tarihsel olarak hatalı'
    },
    examples: ['She was given inaccurate information.'],
    exampleTranslations: ['Ona yanlış bilgi verildi.']
  },
  {
    id: 'independent',
    word: 'Independent',
    pos: 'adjective',
    meaning: 'Bağımsız, özgür',
    definition: 'Someone who does not depend on other people for help, or prefers to do things by themselves.',
    ipa: '/ˌɪn.dɪˈpen.dənt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'independence', pos: 'noun', meaning: 'bağımsızlık' },
      { word: 'independently', pos: 'adv', meaning: 'bağımsızca' }
    ],
    synonyms: [
      { word: 'Autonomous', meaning: 'Özerk', pos: 'adj' },
      { word: 'Self-reliant', meaning: 'Kendine yeten', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dependent', meaning: 'Bağımlı', pos: 'adj' }
    ],
    collocations: ['independent state', 'independent research', 'financially independent'],
    collocationMeanings: {
      'independent state': 'bağımsız devlet',
      'independent research': 'bağımsız araştırma',
      'financially independent': 'maddi olarak bağımsız'
    },
    examples: ['Even as a child he was very independent.'],
    exampleTranslations: ['Çocukken bile çok bağımsızdı.']
  },
  {
    id: 'inexpensive',
    word: 'Inexpensive',
    pos: 'adjective',
    meaning: 'Ucuz, masrafsız',
    definition: 'Something that is inexpensive does not cost much money.',
    ipa: '/ˌɪn.ɪkˈspen.sɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'expenditure', pos: 'noun', meaning: 'harcama' }
    ],
    synonyms: [
      { word: 'Cheap', meaning: 'Ucuz', pos: 'adj' },
      { word: 'Affordable', meaning: 'Bütçe dostu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Expensive', meaning: 'Pahalı', pos: 'adj' },
      { word: 'Costly', meaning: 'Maliyetli', pos: 'adj' }
    ],
    collocations: ['relatively inexpensive', 'inexpensive way', 'simple and inexpensive'],
    collocationMeanings: {
      'relatively inexpensive': 'nispeten ucuz',
      'inexpensive way': 'uygun maliyetli yol',
      'simple and inexpensive': 'basit ve ucuz'
    },
    examples: ['It was an inexpensive hotel.'],
    exampleTranslations: ['Ucuz bir oteldi.']
  },
  {
    id: 'influence',
    word: 'Influence',
    pos: 'verb',
    meaning: 'Etkilemek, nüfuz etmek',
    definition: 'To affect the way that someone thinks or behaves, or to affect the way that something happens.',
    ipa: '/ˈɪn.flu.əns/',
    level: 'intermediate',
    wordFamily: [
      { word: 'influential', pos: 'adj', meaning: 'nüfuzlu/etkili' }
    ],
    synonyms: [
      { word: 'Affect', meaning: 'Etkilemek', pos: 'verb' },
      { word: 'Sway', meaning: 'Fikrini çelmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['heavily influence', 'influence a decision', 'exert influence'],
    collocationMeanings: {
      'heavily influence': 'büyük ölçüde etkilemek',
      'influence a decision': 'bir kararı etkilemek',
      'exert influence': 'nüfuzunu kullanmak/etki etmek'
    },
    examples: ["Research has shown that the weather can influence people's behaviour."],
    exampleTranslations: ['Araştırmalar hava durumunun insanların davranışlarını etkileyebileceğini göstermiştir.']
  },
  {
    id: 'inspiration',
    word: 'Inspiration',
    pos: 'noun',
    meaning: 'İlham, esin',
    definition: 'A sudden feeling of enthusiasm, or a new idea that helps you to do or create something.',
    ipa: '/ˌɪn.spɪˈreɪ.ʃən/',
    level: 'intermediate',
    wordFamily: [
      { word: 'inspire', pos: 'verb', meaning: 'ilham vermek' },
      { word: 'inspirational', pos: 'adj', meaning: 'ilham verici' }
    ],
    synonyms: [
      { word: 'Motivation', meaning: 'Motivasyon', pos: 'noun' },
      { word: 'Brainwave', meaning: 'Parlak fikir', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['source of inspiration', 'draw inspiration from', 'constant inspiration'],
    collocationMeanings: {
      'source of inspiration': 'ilham kaynağı',
      'draw inspiration from': 'birinden/bir şeyden ilham almak',
      'constant inspiration': 'sürekli ilham'
    },
    examples: ['She was the inspiration for his new book.'],
    exampleTranslations: ['Yeni kitabının ilham kaynağı oydu.']
  },
  {
    id: 'insist',
    word: 'Insist',
    pos: 'verb',
    meaning: 'Israr etmek, diretmek',
    definition: 'To say very firmly that something must happen or be done.',
    ipa: '/ɪnˈsɪst/',
    level: 'intermediate',
    wordFamily: [
      { word: 'insistence', pos: 'noun', meaning: 'ısrar' },
      { word: 'insistent', pos: 'adj', meaning: 'ısrarcı' }
    ],
    synonyms: [
      { word: 'Persist', meaning: 'Üstelemek', pos: 'verb' },
      { word: 'Assert', meaning: 'İddia etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Give in', meaning: 'Boyun eğmek', pos: 'phrasal verb' }
    ],
    collocations: ['insist on doing', 'insist that', 'strictly insist'],
    collocationMeanings: {
      'insist on doing': 'bir şeyi yapmakta ısrar etmek',
      'insist that': 'şunu ısrarla söylemek',
      'strictly insist': 'kesin bir dille diretmek'
    },
    examples: ['You must see a doctor immediately - I insist.'],
    exampleTranslations: ['Hemen bir doktora görünmelisin - ısrar ediyorum.']
  },
  {
    id: 'invent',
    word: 'Invent',
    pos: 'verb',
    meaning: 'İcat etmek',
    definition: 'To design or create something such as a machine or process that did not exist before.',
    ipa: '/ɪnˈvent/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invention', pos: 'noun', meaning: 'icat' },
      { word: 'inventor', pos: 'noun', meaning: 'mucit' },
      { word: 'inventive', pos: 'adj', meaning: 'yaratıcı' }
    ],
    synonyms: [
      { word: 'Create', meaning: 'Yaratmak', pos: 'verb' },
      { word: 'Devise', meaning: 'Tasarlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Destroy', meaning: 'Yok etmek', pos: 'verb' }
    ],
    collocations: ['invent a device', 'invent a story', 'newly invented'],
    collocationMeanings: {
      'invent a device': 'bir cihaz icat etmek',
      'invent a story': 'hikaye uydurmak',
      'newly invented': 'yeni icat edilmiş'
    },
    examples: ['Alfred Nobel invented dynamite.'],
    exampleTranslations: ['Alfred Nobel dinamiti icat etti.']
  },
  {
    id: 'invention',
    word: 'Invention',
    pos: 'noun',
    meaning: 'İcat, buluş',
    definition: 'A machine, tool, or system that someone has made, designed, or thought of for the first time.',
    ipa: '/ɪnˈven.ʃən/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invent', pos: 'verb', meaning: 'icat etmek' }
    ],
    synonyms: [
      { word: 'Discovery', meaning: 'Keşif', pos: 'noun' },
      { word: 'Innovation', meaning: 'Yenilik', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['great invention', 'modern invention', 'latest invention'],
    collocationMeanings: {
      'great invention': 'büyük buluş',
      'modern invention': 'modern icat',
      'latest invention': 'son buluş'
    },
    examples: ['Inventions like the electric light bulb changed the way people lived.'],
    exampleTranslations: ['Elektrikli ampul gibi icatlar insanların yaşayış biçimini değiştirdi.']
  },
  {
    id: 'inventive',
    word: 'Inventive',
    pos: 'adjective',
    meaning: 'Yaratıcı, özgün',
    definition: 'Good at thinking of new and original ideas or methods.',
    ipa: '/ɪnˈven.tɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invent', pos: 'verb', meaning: 'icat etmek' }
    ],
    synonyms: [
      { word: 'Creative', meaning: 'Yaratıcı', pos: 'adj' },
      { word: 'Original', meaning: 'Özgün', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unimaginative', meaning: 'Hayal gücü kıt', pos: 'adj' }
    ],
    collocations: ['inventive mind', 'highly inventive', 'very inventive'],
    collocationMeanings: {
      'inventive mind': 'yaratıcı zihin',
      'highly inventive': 'son derece özgün',
      'very inventive': 'çok yaratıcı'
    },
    examples: ['Ronaldo is a versatile and inventive player.'],
    exampleTranslations: ['Ronaldo çok yönlü ve yaratıcı bir oyuncudur.']
  },
  {
    id: 'inventor',
    word: 'Inventor',
    pos: 'noun',
    meaning: 'Mucit',
    definition: 'Someone who has invented something or whose job is to invent things.',
    ipa: '/ɪnˈven.tər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invention', pos: 'noun', meaning: 'icat' }
    ],
    synonyms: [
      { word: 'Originator', meaning: 'Kâşif/Kaynağı başlatan', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['famous inventor', 'great inventor', 'born inventor'],
    collocationMeanings: {
      'famous inventor': 'ünlü mucit',
      'great inventor': 'büyük mucit',
      'born inventor': 'doğuştan mucit'
    },
    examples: ['Thomas Edison was an inventor.'],
    exampleTranslations: ['Thomas Edison bir mucitti.']
  },
  {
    id: 'impressive',
    word: 'Impressive',
    pos: 'adjective',
    meaning: 'Etkileyici',
    definition: 'If something is impressive, you admire it.',
    ipa: '/ɪmˈpres.ɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'impress', pos: 'verb', meaning: 'etkilemek' },
      { word: 'impression', pos: 'noun', meaning: 'izlenim' }
    ],
    synonyms: [
      { word: 'Grand', meaning: 'Görkemli', pos: 'adj' },
      { word: 'Admirable', meaning: 'Takdire şayan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Mediocre', meaning: 'Vasat', pos: 'adj' },
      { word: 'Unremarkable', meaning: 'Sıradan', pos: 'adj' }
    ],
    collocations: ['highly impressive', 'look impressive', 'most impressive'],
    collocationMeanings: {
      'highly impressive': 'oldukça etkileyici',
      'look impressive': 'etkileyici görünmek',
      'most impressive': 'en etkileyici'
    },
    examples: ['The list of their achievements is pretty impressive.'],
    exampleTranslations: ['Başarılarının listesi oldukça etkileyici.']
  },
  {
    id: 'in_two_minds',
    word: 'In two minds',
    pos: 'idiom',
    meaning: 'İki arada bir derede kalmak, kararsız olmak',
    definition: 'To be unable to decide about something.',
    ipa: '/ɪn tuː maɪndz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Undecided', meaning: 'Kararsız', pos: 'adj' },
      { word: 'Hesitant', meaning: 'Tereddütlü', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Certain', meaning: 'Emin', pos: 'adj' },
      { word: 'Decided', meaning: 'Karar vermiş', pos: 'adj' }
    ],
    collocations: ['be in two minds about'],
    collocationMeanings: {
      'be in two minds about': 'bir konuda kararsız kalmak'
    },
    examples: ['I was in two minds whether or not to come this morning.'],
    exampleTranslations: ['Bu sabah gelip gelmeme konusunda kararsızdım.']
  },
  {
    id: 'join_a_society',
    word: 'Join a society',
    pos: 'phrase',
    meaning: 'Bir topluluğa/kulübe katılmak',
    definition: 'To become a member of an organization or club for people who have a particular interest or who take part in a particular activity.',
    ipa: '/dʒɔɪn ə səˈsaɪ.ə.ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Enroll', meaning: 'Kaydolmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Resign', meaning: 'İstifa etmek/Ayrılmak', pos: 'verb' }
    ],
    collocations: ['join a student society', 'join a debating society'],
    collocationMeanings: {
      'join a student society': 'öğrenci topluluğuna katılmak',
      'join a debating society': 'münazara topluluğuna katılmak'
    },
    examples: ['I am hoping to join a society at university so I can meet more people.'],
    exampleTranslations: ['Daha fazla insanla tanışabilmek için üniversitede bir topluluğa katılmayı umuyorum.']
  },
  {
    id: 'keep_a_record',
    word: 'Keep a record',
    pos: 'phrase',
    meaning: 'Kayıt tutmak, not etmek',
    definition: 'To write something down.',
    ipa: '/kiːp ə rɪˈkɔːrd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Log', meaning: 'Kayıt altına almak', pos: 'verb' },
      { word: 'Document', meaning: 'Belgelemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['keep a detailed record', 'keep a permanent record', 'keep a written record'],
    collocationMeanings: {
      'keep a detailed record': 'ayrıntılı kayıt tutmak',
      'keep a permanent record': 'kalıcı bir kayıt tutmak',
      'keep a written record': 'yazılı bir kayıt tutmak'
    },
    examples: ['Can you keep a record of what we have spent?'],
    exampleTranslations: ['Neler harcadığımızın kaydını tutabilir misin?']
  },
  {
    id: 'keep_a_resolution',
    word: 'Keep a resolution',
    pos: 'phrase',
    meaning: 'Kararına sadık kalmak',
    definition: 'To stick to a plan.',
    ipa: '/kiːp ə ˌrez.əˈluː.ʃən/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Stay committed', meaning: 'Bağlı kalmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Break a resolution', meaning: 'Kararı bozmak', pos: 'phrase' }
    ],
    collocations: ['keep a new year resolution', 'fail to keep a resolution'],
    collocationMeanings: {
      'keep a new year resolution': 'yeni yıl kararına sadık kalmak',
      'fail to keep a resolution': 'kararı tutamamak'
    },
    examples: ['I hope you keep your resolution to stop smoking.'],
    exampleTranslations: ['Umarım sigarayı bırakma kararına sadık kalırsın.']
  },
  {
    id: 'keep_track_of',
    word: 'Keep track of',
    pos: 'idiom',
    meaning: 'Takip etmek, kaydını tutmak',
    definition: 'To have all the information that you need about something.',
    ipa: '/kiːp træk əv/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Monitor', meaning: 'Gözlemlemek', pos: 'verb' },
      { word: 'Follow', meaning: 'Takip etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Lose track', meaning: 'İzini kaybetmek', pos: 'phrase' }
    ],
    collocations: ['keep track of time', 'keep track of changes', 'keep track of expenses'],
    collocationMeanings: {
      'keep track of time': 'zamanın nasıl geçtiğini takip etmek',
      'keep track of changes': 'değişiklikleri takip etmek',
      'keep track of expenses': 'harcamaların kaydını tutmak'
    },
    examples: ['We need a system to keep track of all our expenses.'],
    exampleTranslations: ['Tüm giderlerimizi takip etmek için bir sisteme ihtiyacımız var.']
  },
  {
    id: 'keep_up',
    word: 'Keep up',
    pos: 'phrasal verb',
    meaning: 'Aynı seviyeyi korumak, sürdürmek',
    definition: 'To continue at the same high level.',
    ipa: '/kiːp ʌp/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Maintain', meaning: 'Sürdürmek', pos: 'verb' },
      { word: 'Sustain', meaning: 'Ayakta tutmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fall behind', meaning: 'Geri kalmak', pos: 'phrasal verb' }
    ],
    collocations: ['keep up with', 'keep up appearances', 'keep up the pace'],
    collocationMeanings: {
      'keep up with': 'ayak uydurmak',
      'keep up appearances': 'durumu kurtarmak/görünüşü korumak',
      'keep up the pace': 'hızı/tempoyu korumak'
    },
    examples: ['Keep up the good work.'],
    exampleTranslations: ['İyi çalışmaya devam et (bu seviyeyi koru).']
  },
  {
    id: 'launch_a_marketing_campaign',
    word: 'Launch a new marketing campaign',
    pos: 'phrase',
    meaning: 'Yeni bir pazarlama kampanyası başlatmak',
    definition: 'To start a series of things such as television advertisements or posters that try to persuade people to buy a product.',
    ipa: '/lɔːntʃ ə njuː ˈmɑː.kɪ.tɪŋ kæmˈpeɪn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Initiate a campaign', meaning: 'Kampanya başlatmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['successfully launch a marketing campaign', 'plans to launch a marketing campaign'],
    collocationMeanings: {
      'successfully launch a marketing campaign': 'başarıyla bir pazarlama kampanyası başlatmak',
      'plans to launch a marketing campaign': 'pazarlama kampanyası başlatmayı planlamak'
    },
    examples: ['The company plans to launch a new marketing campaign next month.'],
    exampleTranslations: ['Şirket gelecek ay yeni bir pazarlama kampanyası başlatmayı planlıyor.']
  },
  {
    id: 'let',
    word: 'Let',
    pos: 'verb',
    meaning: 'İzin vermek (bir şeyin olmasına)',
    definition: 'To allow something to happen.',
    ipa: '/let/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Permit', meaning: 'İzin vermek', pos: 'verb' },
      { word: 'Allow', meaning: 'Müsaade etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Prevent', meaning: 'Engel olmak', pos: 'verb' },
      { word: 'Stop', meaning: 'Durdurmak', pos: 'verb' }
    ],
    collocations: ['let someone go', 'let it be', 'let someone know'],
    collocationMeanings: {
      'let someone go': 'birini serbest bırakmak',
      'let it be': 'akışına bırak',
      'let someone know': 'birine haber vermek'
    },
    examples: ['I stepped back and let him pass.'],
    exampleTranslations: ['Geri çekildim ve geçmesine izin verdim.']
  },
  {
    id: 'let_down',
    word: 'Let down',
    pos: 'phrasal verb',
    meaning: 'Hayal kırıklığına uğratmak, yüzüstü bırakmak',
    definition: 'To make someone disappointed by not doing something that they are expecting you to do.',
    ipa: '/let daʊn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Disappoint', meaning: 'Hayal kırıklığına uğratmak', pos: 'verb' },
      { word: 'Betray', meaning: 'İhanet etmek/Yarı yolda bırakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Support', meaning: 'Desteklemek', pos: 'verb' }
    ],
    collocations: ['let someone down gently', 'never let you down'],
    collocationMeanings: {
      'let someone down gently': 'birini kırmadan reddetmek/hayal kırıklığına uğratmak',
      'never let you down': 'seni asla yarı yolda bırakmaz'
    },
    examples: ['The families of the victims feel that the justice system has let them down.'],
    exampleTranslations: ['Kurbanların aileleri, adalet sisteminin onları yüzüstü bıraktığını hissediyor.']
  },
  {
    id: 'let_your_mind_wander_freely',
    word: 'Let your mind wander freely',
    pos: 'phrase',
    meaning: 'Zihnini serbest bırakmak',
    definition: 'To allow your thoughts to be free and not restricted to one thing.',
    ipa: '/let jɔːr maɪnd ˈwɒn.dər ˈfriː.li/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Daydream', meaning: 'Hayal kurmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Concentrate', meaning: 'Odaklanmak', pos: 'verb' }
    ],
    collocations: ['let your mind wander for a while'],
    collocationMeanings: {
      'let your mind wander for a while': 'zihnini bir süreliğine serbest bırakmak'
    },
    examples: ['Relax, close your eyes and let your mind wander freely.'],
    exampleTranslations: ['Rahatlayın, gözlerinizi kapatın ve zihninizin serbestçe dolaşmasına izin verin.']
  },
  {
    id: 'look_at_a_problem_from_the_outside',
    word: 'Look at a problem from the outside',
    pos: 'phrase',
    meaning: 'Probleme dışarıdan bakmak',
    definition: 'To consider a situation from different perspectives.',
    ipa: '/lʊk æt ə ˈprɒb.ləm frəm ði ˌaʊtˈsaɪd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Get perspective', meaning: 'Bakış açısı kazanmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['need to look at a problem from the outside'],
    collocationMeanings: {
      'need to look at a problem from the outside': 'bir probleme dışarıdan bakmaya ihtiyaç duymak'
    },
    examples: ["It's important to look at a problem from the outside if you want a good solution."],
    exampleTranslations: ['İyi bir çözüm istiyorsanız bir probleme dışarıdan bakmak önemlidir.']
  },
  {
    id: 'lose_interest_in_something',
    word: 'Lose interest in something',
    pos: 'phrase',
    meaning: 'Bir şeye ilgini kaybetmek',
    definition: 'To stop being interested in something.',
    ipa: '/luːz ˈɪn.trəst ɪn ˈsʌm.θɪŋ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Get bored of', meaning: 'Bıkmak/Sıkılmak', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Become fascinated', meaning: 'Büyülenmek', pos: 'phrase' }
    ],
    collocations: ['completely lose interest', 'slowly lose interest'],
    collocationMeanings: {
      'completely lose interest': 'ilgisini tamamen kaybetmek',
      'slowly lose interest': 'yavaş yavaş ilgi duymaktan vazgeçmek'
    },
    examples: ['I used to do yoga but I lost interest in it.'],
    exampleTranslations: ['Eskiden yoga yapardım ama ilgimi kaybettim.']
  },
  {
    id: 'make_b1',
    word: 'Make',
    pos: 'verb',
    meaning: 'Yaptırmak, hissettirmek',
    definition: 'To cause someone or something to be in a particular state or to change to another state.',
    ipa: '/meɪk/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Cause', meaning: 'Sebep olmak', pos: 'verb' },
      { word: 'Render', meaning: 'Hale getirmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['make a noise', 'make a difference', 'make a mistake'],
    collocationMeanings: {
      'make a noise': 'gürültü yapmak',
      'make a difference': 'fark yaratmak',
      'make a mistake': 'hata yapmak'
    },
    examples: ['This film always makes me cry.'],
    exampleTranslations: ['Bu film beni her zaman ağlatır.']
  },
  {
    id: 'make_a_decision_b1',
    word: 'Make a decision',
    pos: 'phrase',
    meaning: 'Karar vermek',
    definition: 'A choice that you make after thinking carefully.',
    ipa: '/meɪk ə dɪˈsɪʒ.ən/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Decide', meaning: 'Karar vermek', pos: 'verb' },
      { word: 'Choose', meaning: 'Seçmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Hesitate', meaning: 'Tereddüt etmek', pos: 'verb' }
    ],
    collocations: ['make a final decision', 'make a difficult decision', 'quickly make a decision'],
    collocationMeanings: {
      'make a final decision': 'son kararı vermek',
      'make a difficult decision': 'zor bir karar vermek',
      'quickly make a decision': 'hızlıca karar vermek'
    },
    examples: ['The committee should make a decision later this week.'],
    exampleTranslations: ['Komite bu haftanın ilerleyen günlerinde bir karar vermeli.']
  },
  {
    id: 'make_a_profit',
    word: 'Make a profit',
    pos: 'phrase',
    meaning: 'Kâr etmek',
    definition: 'To have money remaining after you have paid all your business costs.',
    ipa: '/meɪk ə ˈprɒf.ɪt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Earn a return', meaning: 'Getiri sağlamak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Lose money', meaning: 'Para kaybetmek', pos: 'phrase' },
      { word: 'Incur a loss', meaning: 'Zarar etmek', pos: 'phrase' }
    ],
    collocations: ['make a huge profit', 'make a small profit', 'aim to make a profit'],
    collocationMeanings: {
      'make a huge profit': 'büyük kar etmek',
      'make a small profit': 'küçük bir kâr elde etmek',
      'aim to make a profit': 'kâr etmeyi hedeflemek'
    },
    examples: ['Investors have made a 14% profit in just 3 months.'],
    exampleTranslations: ['Yatırımcılar sadece 3 ayda %14 kâr elde etti.']
  },
  {
    id: 'make_a_resolution',
    word: 'Make a resolution',
    pos: 'phrase',
    meaning: 'Karar almak (yeni yıl kararı gibi)',
    definition: 'To set (yourself) a goal.',
    ipa: '/meɪk ə ˌrez.əˈluː.ʃən/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Set a goal', meaning: 'Hedef koymak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['make a firm resolution', 'make a new year resolution'],
    collocationMeanings: {
      'make a firm resolution': 'kesin bir karar almak',
      'make a new year resolution': 'yeni yıl kararı almak'
    },
    examples: ['Are you going to make a resolution this year?'],
    exampleTranslations: ['Bu yıl bir karar alacak mısın?']
  },
  {
    id: 'make_friends_with',
    word: 'Make friends with',
    pos: 'phrase',
    meaning: 'Arkadaş olmak',
    definition: 'To become friends.',
    ipa: '/meɪk frendz wɪð/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Befriend', meaning: 'Arkadaşlık kurmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fall out with', meaning: 'Küsüp tartışmak', pos: 'phrasal verb' }
    ],
    collocations: ['make friends with someone', 'easy to make friends with'],
    collocationMeanings: {
      'make friends with someone': 'biriyle arkadaş olmak',
      'easy to make friends with': 'biriyle arkadaş olmak kolaydır'
    },
    examples: ['They made friends with the children next door.'],
    exampleTranslations: ['Yan komşunun çocuklarıyla arkadaş oldular.']
  },
  {
    id: 'make_fun_of',
    word: 'Make fun of',
    pos: 'phrase',
    meaning: 'Dalga geçmek, alay etmek',
    definition: 'To make jokes about someone or something in an unkind way.',
    ipa: '/meɪk fʌn əv/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Mock', meaning: 'Alay etmek', pos: 'verb' },
      { word: 'Tease', meaning: 'Takılmak/Şaka yollu takılmak', pos: 'verb' },
      { word: 'Ridicule', meaning: 'Gülünç duruma düşürmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Respect', meaning: 'Saygı duymak', pos: 'verb' }
    ],
    collocations: ['never make fun of someone', 'stop making fun of me'],
    collocationMeanings: {
      'never make fun of someone': 'asla birisiyle dalga geçme',
      'stop making fun of me': 'benimle dalga geçmeyi bırak'
    },
    examples: ['The other children made fun of her because she was always so serious.'],
    exampleTranslations: ['Diğer çocuklar, her zaman çok ciddi olduğu için onunla dalga geçiyorlardı.']
  },
  {
    id: 'make_sure',
    word: 'Make sure',
    pos: 'phrase',
    meaning: 'Emin olmak, sağlama almak',
    definition: 'To check something so that you can be sure about it.',
    ipa: '/meɪk ʃɔːr/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Ensure', meaning: 'Garantiye almak', pos: 'verb' },
      { word: 'Confirm', meaning: 'Doğrulamak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['make sure that', 'make sure of', 'just to make sure'],
    collocationMeanings: {
      'make sure that': 'şundan emin ol',
      'make sure of': 'şunu doğrula/emin ol',
      'just to make sure': 'sadece emin olmak için'
    },
    examples: ["I think I locked it but we'd better make sure."],
    exampleTranslations: ['Sanırım kilitledim ama emin olsak iyi olur.']
  },
  {
    id: 'make_the_break_change',
    word: 'Make the break/change',
    pos: 'phrase',
    meaning: '(Büyük bir) değişiklik yapmak, bağları koparmak',
    definition: 'To make a decision to change something in your life, usually something significant.',
    ipa: '/meɪk ðə breɪk/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Transform', meaning: 'Dönüştürmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Maintain status quo', meaning: 'Mevcut durumu korumak', pos: 'phrase' }
    ],
    collocations: ['finally make the break', 'time to make the change'],
    collocationMeanings: {
      'finally make the break': 'sonunda bağları koparmak/değişiklik yapmak',
      'time to make the change': 'değişiklik yapma zamanı'
    },
    examples: ['I decided to make the break and buy my own place.'],
    exampleTranslations: ['Değişiklik yapmaya ve kendi yerimi satın almaya karar verdim.']
  },
  {
    id: 'make_up_my_mind',
    word: 'Make up my mind',
    pos: 'idiom',
    meaning: 'Kararını vermek, kafasında netleştirmek',
    definition: 'To make a decision.',
    ipa: '/meɪk ʌp maɪ maɪnd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Decide', meaning: 'Karar vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Waver', meaning: 'Tereddüt etmek', pos: 'verb' }
    ],
    collocations: ["can't make up my mind", 'already made up my mind'],
    collocationMeanings: {
      "can't make up my mind": 'bir türlü karar veremiyorum',
      'already made up my mind': 'çoktan kararımı verdim'
    },
    examples: ['He made up his mind to attend the meeting.'],
    exampleTranslations: ['Toplantıya katılmaya karar verdi.']
  },
  {
    id: 'make_use_of',
    word: 'Make use of',
    pos: 'phrase',
    meaning: 'Yararlanmak, kullanmak',
    definition: 'To use someone or something for a particular purpose, especially one that brings a benefit to you.',
    ipa: '/meɪk juːs əv/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Utilize', meaning: 'Faydalanmak', pos: 'verb' },
      { word: 'Exploit', meaning: 'Kullanmak/İstifade etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Waste', meaning: 'Boşa harcamak', pos: 'verb' }
    ],
    collocations: ['make good use of', 'make better use of', 'make use of resources'],
    collocationMeanings: {
      'make good use of': 'iyi değerlendirmek',
      'make better use of': 'daha iyi yararlanmak',
      'make use of resources': 'kaynakları kullanmak'
    },
    examples: ["Why doesn't she make use of her singing talent?"],
    exampleTranslations: ['Neden şarkı söyleme yeteneğinden yararlanmıyor?']
  },
  {
    id: 'make_yourself',
    word: 'Make yourself',
    pos: 'phrase',
    meaning: 'Kendini (bir şey) yapmak/hazırlamak',
    definition: 'To create or produce something by working.',
    ipa: '/meɪk jɔːˈself/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Prepare yourself', meaning: 'Kendini hazırlamak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['make yourself at home', 'make yourself comfortable'],
    collocationMeanings: {
      'make yourself at home': 'kendini evinde hisset',
      'make yourself comfortable': 'rahatına bak'
    },
    examples: ['Jane made herself a drink while she waited.'],
    exampleTranslations: ['Jane beklerken kendine bir içecek hazırladı.']
  },
  {
    id: 'massive',
    word: 'Massive',
    pos: 'adjective',
    meaning: 'Çok büyük, ağır, kütlesel',
    definition: 'Very large or heavy.',
    ipa: '/ˈmæs.ɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'massively', pos: 'adv', meaning: 'devasa düzeyde' }
    ],
    synonyms: [
      { word: 'Enormous', meaning: 'Muazzam', pos: 'adj' },
      { word: 'Gigantic', meaning: 'Devasa', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Tiny', meaning: 'Küçücük', pos: 'adj' },
      { word: 'Small', meaning: 'Küçük', pos: 'adj' }
    ],
    collocations: ['massive amount', 'massive scale', 'massive project'],
    collocationMeanings: {
      'massive amount': 'muazzam miktar',
      'massive scale': 'büyük ölçek',
      'massive project': 'devasa proje'
    },
    examples: ['There are the massive columns at Luxor.'],
    exampleTranslations: ['Luxor’da devasa sütunlar var.']
  },
  {
    id: 'mild',
    word: 'Mild',
    pos: 'adjective',
    meaning: 'Hafif (acı olmayan/yumuşak tat)',
    definition: 'Does not have a strong taste.',
    ipa: '/maɪld/',
    level: 'intermediate',
    wordFamily: [
      { word: 'mildly', pos: 'adv', meaning: 'hafifçe' },
      { word: 'mildness', pos: 'noun', meaning: 'hafiflik/yumuşaklık' }
    ],
    synonyms: [
      { word: 'Gentle', meaning: 'Yumuşak', pos: 'adj' },
      { word: 'Bland', meaning: 'Yavan/Hafif', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Strong', meaning: 'Güçlü/Sert', pos: 'adj' },
      { word: 'Severe', meaning: 'Şiddetli', pos: 'adj' },
      { word: 'Spicy', meaning: 'Baharatlı/Acı', pos: 'adj' }
    ],
    collocations: ['mild weather', 'mild cheese', 'mild case of flu'],
    collocationMeanings: {
      'mild weather': 'ılıman hava',
      'mild cheese': 'yumuşak peynir',
      'mild case of flu': 'hafif grip vakası'
    },
    examples: ['The curry is actually quite mild.'],
    exampleTranslations: ['Köri aslında oldukça hafif.']
  },
  {
    id: 'misplace',
    word: 'Misplace',
    pos: 'verb',
    meaning: 'Yanlış yere koymak, yerini unutmak',
    definition: 'To put something in the wrong place and lose it, especially temporarily.',
    ipa: '/ˌmɪsˈpleɪs/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Lose', meaning: 'Kaybetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Find', meaning: 'Bulmak', pos: 'verb' }
    ],
    collocations: ['misplace keys', 'misplace trust', 'misplace glasses'],
    collocationMeanings: {
      'misplace keys': 'anahtarları bir yere koyup unutmak',
      'misplace trust': 'yanlış kişiye güvenmek',
      'misplace glasses': 'gözlüğün yerini unutmak'
    },
    examples: ["I misplaced my umbrella and now I'm really wet!"],
    exampleTranslations: ['Şemsiyemi yanlış yere koydum ve şimdi sırılsıklam oldum!']
  },
  {
    id: 'misunderstand',
    word: 'Misunderstand',
    pos: 'verb',
    meaning: 'Yanlış anlamak',
    definition: 'To not understand someone or something correctly.',
    ipa: '/ˌmɪs.ʌn.dəˈstænd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'misunderstanding', pos: 'noun', meaning: 'yanlış anlaşılma' }
    ],
    synonyms: [
      { word: 'Misinterpret', meaning: 'Yanlış yorumlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Understand', meaning: 'Anlamak', pos: 'verb' },
      { word: 'Comprehend', meaning: 'Kavramak', pos: 'verb' }
    ],
    collocations: ['completely misunderstand', 'easy to misunderstand'],
    collocationMeanings: {
      'completely misunderstand': 'tamamen yanlış anlamak',
      'easy to misunderstand': 'anlaşılması güç/yanlış anlaşılmaya müsait'
    },
    examples: ['I think he has misunderstood the problem.'],
    exampleTranslations: ['Bence o sorunu yanlış anladı.']
  },
  {
    id: 'monolingual',
    word: 'Monolingual',
    pos: 'adjective',
    meaning: 'Tek dilli',
    definition: 'Speaking, writing, or using only one language.',
    ipa: '/ˌmɒn.əʊˈlɪŋ.ɡwəl/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [
      { word: 'Bilingual', meaning: 'İki dilli', pos: 'adj' },
      { word: 'Multilingual', meaning: 'Çok dilli', pos: 'adj' }
    ],
    collocations: ['monolingual dictionary', 'monolingual community'],
    collocationMeanings: {
      'monolingual dictionary': 'tek dilli sözlük',
      'monolingual community': 'tek dil konuşulan topluluk'
    },
    examples: ['She only speaks French so she is monolingual.'],
    exampleTranslations: ['Sadece Fransızca konuşuyor, bu yüzden tek dilli.']
  },
  {
    id: 'my_minds_gone_blank',
    word: "My mind's gone blank",
    pos: 'idiom',
    meaning: 'Zihnim durdu, aklıma hiçbir şey gelmiyor',
    definition: 'To not remember something or be able to think of something.',
    ipa: '/maɪ maɪndz ɡɒn blæŋk/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Forget suddenly', meaning: 'Aniden unutmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Recall', meaning: 'Hatırlamak', pos: 'verb' }
    ],
    collocations: ["suddenly my mind's gone blank"],
    collocationMeanings: {
      "suddenly my mind's gone blank": 'zihnim aniden durdu/boşaldı'
    },
    examples: ["I can't remember his name - my mind's gone blank."],
    exampleTranslations: ['Adını hatırlayamıyorum - zihnim boşaldı.']
  },
  {
    id: 'notice',
    word: 'Notice',
    pos: 'verb',
    meaning: 'Fark etmek',
    definition: 'To become conscious of someone or something by seeing, hearing, or feeling them.',
    ipa: '/ˈnəʊ.tɪs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'noticeable', pos: 'adj', meaning: 'fark edilebilir' },
      { word: 'notice', pos: 'noun', meaning: 'ilan/duyuru' }
    ],
    synonyms: [
      { word: 'Observe', meaning: 'Gözlemlemek', pos: 'verb' },
      { word: 'Spot', meaning: 'Fark etmek/Görmek', pos: 'verb' },
      { word: 'Perceive', meaning: 'Algılamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Overlook', meaning: 'Gözden kaçırmak', pos: 'verb' },
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['notice a difference', 'take notice', 'hardly notice'],
    collocationMeanings: {
      'notice a difference': 'farkı görmek',
      'take notice': 'dikkat etmek/farkına varmak',
      'hardly notice': 'neredeyse hiç fark etmemek'
    },
    examples: ['I noticed that the door was open.'],
    exampleTranslations: ['Kapının açık olduğunu fark ettim.']
  },
  {
    id: 'nutty',
    word: 'Nutty',
    pos: 'adjective',
    meaning: 'Fındıklı/Fıstıklı, kuruyemiş tadında',
    definition: 'Containing nuts, or having the taste of nuts.',
    ipa: '/ˈnʌt.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'nut', pos: 'noun', meaning: 'fındık/fıstık' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['nutty flavor', 'nutty taste'],
    collocationMeanings: {
      'nutty flavor': 'fındıksı aroma',
      'nutty taste': 'kuruyemiş tadı'
    },
    examples: ['The biscuits were nutty.'],
    exampleTranslations: ['Bisküviler fındıklıydı.']
  },
  {
    id: 'objective_b1',
    word: 'Objective',
    pos: 'noun',
    meaning: 'Hedef, amaç',
    definition: 'A large thing that you want to achieve.',
    ipa: '/əbˈdʒek.tɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'objectively', pos: 'adv', meaning: 'nesnel olarak' }
    ],
    synonyms: [
      { word: 'Goal', meaning: 'Hedef', pos: 'noun' },
      { word: 'Target', meaning: 'Hedef/Menzil', pos: 'noun' },
      { word: 'Aim', meaning: 'Amaç', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['main objective', 'clear objective', 'reach an objective'],
    collocationMeanings: {
      'main objective': 'temel amaç',
      'clear objective': 'açık hedef',
      'reach an objective': 'bir hedefe ulaşmak'
    },
    examples: ["I'm not sure I understand the objective of this exercise."],
    exampleTranslations: ['Bu egzersizin amacını anladığımdan emin değilim.']
  },
  {
    id: 'observe_b1',
    word: 'Observe',
    pos: 'verb',
    meaning: 'Gözlemlemek',
    definition: 'To notice someone doing something, or to notice something happening.',
    ipa: '/əbˈzɜːv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'observation', pos: 'noun', meaning: 'gözlem' },
      { word: 'observer', pos: 'noun', meaning: 'gözlemci' }
    ],
    synonyms: [
      { word: 'Watch', meaning: 'İzlemek', pos: 'verb' },
      { word: 'Monitor', meaning: 'Takip etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['observe behavior', 'carefully observe', 'observe silence'],
    collocationMeanings: {
      'observe behavior': 'davranışı izlemek',
      'carefully observe': 'dikkatlice gözlemlemek',
      'observe silence': 'sessizliği korumak/saygı duruşunda bulunmak'
    },
    examples: ['Similar trends may be observed in most modern societies.'],
    exampleTranslations: ['Benzer eğilimler çoğu modern toplumda gözlemlenebilir.']
  },
  {
    id: 'oily',
    word: 'Oily',
    pos: 'adjective',
    meaning: 'Yağlı (kaygan/sıvı yağlı)',
    definition: 'Covered with oil, or containing oil.',
    ipa: '/ˈɔɪ.li/',
    level: 'intermediate',
    wordFamily: [
      { word: 'oil', pos: 'noun/verb', meaning: 'yağ/yağlamak' }
    ],
    synonyms: [
      { word: 'Greasy', meaning: 'Vıcık vıcık/Yağlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dry', meaning: 'Kuru', pos: 'adj' }
    ],
    collocations: ['oily skin', 'oily hair', 'oily surface'],
    collocationMeanings: {
      'oily skin': 'yağlı cilt',
      'oily hair': 'yağlı saç',
      'oily surface': 'kaygan/yağlı yüzey'
    },
    examples: ['Oily fish such as mackerel or herring is good for you.'],
    exampleTranslations: ['Uskumru veya ringa balığı gibi yağlı balıklar sizin için iyidir.']
  },
  {
    id: 'overcrowded',
    word: 'Overcrowded',
    pos: 'adjective',
    meaning: 'Aşırı kalabalık',
    definition: 'Containing too many people.',
    ipa: '/ˌəʊ.vəˈkraʊ.dɪd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'crowd', pos: 'noun', meaning: 'kalabalık' }
    ],
    synonyms: [
      { word: 'Congested', meaning: 'Sıkışık/Tıkalı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Empty', meaning: 'Boş', pos: 'adj' }
    ],
    collocations: ['overcrowded housing', 'become overcrowded'],
    collocationMeanings: {
      'overcrowded housing': 'aşırı kalabalık konutlar',
      'become overcrowded': 'çok kalabalıklaşmak'
    },
    examples: ["This train is overcrowded - I can't find a seat."],
    exampleTranslations: ['Bu tren aşırı kalabalık - koltuk bulamıyorum.']
  },
  {
    id: 'overpopulated',
    word: 'Overpopulated',
    pos: 'adjective',
    meaning: 'Aşırı nüfuslu',
    definition: 'A place that has too many people living in it.',
    ipa: '/ˌəʊ.vəˈpɒp.jə.leɪ.tɪd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'population', pos: 'noun', meaning: 'nüfus' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Underpopulated', meaning: 'Seyrek nüfuslu', pos: 'adj' }
    ],
    collocations: ['overpopulated city', 'densely overpopulated'],
    collocationMeanings: {
      'overpopulated city': 'aşırı nüfuslu şehir',
      'densely overpopulated': 'yoğun bir şekilde aşırı nüfusa sahip'
    },
    examples: ['This city is overpopulated.'],
    exampleTranslations: ['Bu şehrin nüfusu çok fazla (aşırı nüfuslu).']
  },
  {
    id: 'overwork',
    word: 'Overwork',
    pos: 'verb',
    meaning: 'Fazla çalışmak, aşırı yüklenmek',
    definition: 'To work harder than you should.',
    ipa: '/ˌəʊ.vəˈwɜːk/',
    level: 'intermediate',
    wordFamily: [
      { word: 'work', pos: 'noun/verb', meaning: 'iş/çalışmak' }
    ],
    synonyms: [
      { word: 'Overexert', meaning: 'Kendini aşırı zorlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Underwork', meaning: 'Az çalışmak', pos: 'verb' },
      { word: 'Relax', meaning: 'Rahatlamak', pos: 'verb' }
    ],
    collocations: ['suffer from overwork', 'exhausted from overwork'],
    collocationMeanings: {
      'suffer from overwork': 'aşırı çalışmaktan mustarip olmak',
      'exhausted from overwork': 'fazla çalışmaktan bitkin düşmek'
    },
    examples: ['I think people in that company are always overworked.'],
    exampleTranslations: ['Bence o şirketteki insanlar her zaman aşırı çalıştırılıyor.']
  },
  {
    id: 'pay_attention_to',
    word: 'Pay attention to',
    pos: 'phrase',
    meaning: 'Dikkat etmek, kulak vermek',
    definition: 'To listen to, watch, or consider something or someone very carefully.',
    ipa: '/peɪ əˈten.ʃən tuː/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Listen carefully', meaning: 'Dikkatle dinlemek', pos: 'phrase' },
      { word: 'Focus on', meaning: 'Odaklanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' },
      { word: 'Disregard', meaning: 'Dikkate almamak', pos: 'verb' }
    ],
    collocations: ['pay close attention to', 'fail to pay attention to'],
    collocationMeanings: {
      'pay close attention to': 'yakından dikkat etmek',
      'fail to pay attention to': 'dikkat etmemek/gözden kaçırmak'
    },
    examples: ['Pay attention to the warnings printed on the label.'],
    exampleTranslations: ['Etikette basılı uyarılara dikkat edin.']
  },
  {
    id: 'peppery',
    word: 'Peppery',
    pos: 'adjective',
    meaning: 'Biberli, acı',
    definition: 'Flavoured with or tasting like pepper.',
    ipa: '/ˈpep.ər.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pepper', pos: 'noun/verb', meaning: 'biber/biberlemek' }
    ],
    synonyms: [
      { word: 'Spicy', meaning: 'Baharatlı', pos: 'adj' },
      { word: 'Piquant', meaning: 'İştah açıcı derecede acı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Mild', meaning: 'Hafif', pos: 'adj' }
    ],
    collocations: ['peppery aroma', 'peppery flavor', 'peppery sauce'],
    collocationMeanings: {
      'peppery aroma': 'biberimsi koku',
      'peppery flavor': 'acı/biberli tad',
      'peppery sauce': 'acı/biberli sos'
    },
    examples: ['There is a peppery taste to this.'],
    exampleTranslations: ['Bunun biberli bir tadı var.']
  },
  {
    id: 'perform',
    word: 'Perform',
    pos: 'verb',
    meaning: 'Performans sergilemek, sahne almak',
    definition: 'To do something in front of an audience in order to entertain them.',
    ipa: '/pəˈfɔːm/',
    level: 'intermediate',
    wordFamily: [
      { word: 'performance', pos: 'noun', meaning: 'performans' },
      { word: 'performer', pos: 'noun', meaning: 'gösterici/oyuncu' }
    ],
    synonyms: [
      { word: 'Act', meaning: 'Rol yapmak', pos: 'verb' },
      { word: 'Execute', meaning: 'Uygulamak/İfa etmek', pos: 'verb' },
      { word: 'Staged', meaning: 'Sahnelemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['perform a surgery', 'perform a dance', 'perform live'],
    collocationMeanings: {
      'perform a surgery': 'ameliyat gerçekleştirmek',
      'perform a dance': 'dans sergilemek',
      'perform live': 'canlı performans sergilemek'
    },
    examples: ["He's a terrible actor because he can't perform on stage at all."],
    exampleTranslations: ['O berbat bir oyuncu çünkü sahnede hiç performans sergileyemiyor.']
  },
  {
    id: 'persuade_b1',
    word: 'Persuade',
    pos: 'verb',
    meaning: 'İkna etmek',
    definition: 'To make someone agree to do something by giving them reasons why they should.',
    ipa: '/pəˈsweɪd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'persuasion', pos: 'noun', meaning: 'ikna' },
      { word: 'persuasive', pos: 'adj', meaning: 'ikna edici' }
    ],
    synonyms: [
      { word: 'Convince', meaning: 'İkna etmek/İnandırmak', pos: 'verb' },
      { word: 'Coax', meaning: 'Tatlı dille ikna etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Dissuade', meaning: 'Vazgeçirmek', pos: 'verb' }
    ],
    collocations: ['persuade someone to do', 'try to persuade', 'manage to persuade'],
    collocationMeanings: {
      'persuade someone to do': 'birini yapmaya ikna etmek',
      'try to persuade': 'ikna etmeye çalışmak',
      'manage to persuade': 'ikna etmeyi başarmak'
    },
    examples: ['He did finally come with us, although it took a long time to persuade him.'],
    exampleTranslations: ['Onu ikna etmek uzun sürse de sonunda bizimle geldi.']
  },
  {
    id: 'phrase',
    word: 'Phrase',
    pos: 'noun',
    meaning: 'İfade, söz öbeği',
    definition: 'A group of words that are used together in a fixed expression.',
    ipa: '/freɪz/',
    level: 'intermediate',
    wordFamily: [
      { word: 'phrasing', pos: 'noun', meaning: 'ifade ediş biçimi' }
    ],
    synonyms: [
      { word: 'Expression', meaning: 'Tabir', pos: 'noun' },
      { word: 'Utterance', meaning: 'İfade', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['key phrase', 'common phrase', 'catchy phrase'],
    collocationMeanings: {
      'key phrase': 'anahtar ifade',
      'common phrase': 'yaygın tabir',
      'catchy phrase': 'akılda kalıcı ifade'
    },
    examples: ["Several of those interviewed used the phrase 'being my own boss'."],
    exampleTranslations: ["Görüşülen kişilerin birçoğu 'kendi patronum olmak' ifadesini kullandı."]
  },
  {
    id: 'polluted',
    word: 'Polluted',
    pos: 'adjective',
    meaning: 'Kirli, kirlenmiş',
    definition: '(About air, water, or land) too dirty and dangerous for people to use in a safe way.',
    ipa: '/pəˈluː.tɪd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pollution', pos: 'noun', meaning: 'kirlilik' },
      { word: 'pollute', pos: 'verb', meaning: 'kirletmek' },
      { word: 'pollutant', pos: 'noun', meaning: 'kirletici madde' }
    ],
    synonyms: [
      { word: 'Contaminated', meaning: 'Atık bulaşmış', pos: 'adj' },
      { word: 'Dirty', meaning: 'Kirli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Pure', meaning: 'Saf/Temiz', pos: 'adj' },
      { word: 'Clean', meaning: 'Temiz', pos: 'adj' }
    ],
    collocations: ['heavily polluted', 'polluted river', 'highly polluted'],
    collocationMeanings: {
      'heavily polluted': 'ağır şekilde kirlenmiş',
      'polluted river': 'kirli nehir',
      'highly polluted': 'yüksek derecede kirli'
    },
    examples: ['The oil spillage has polluted the harbour.'],
    exampleTranslations: ['Petrol sızıntısı limanı kirletti.']
  },
  {
    id: 'possibility',
    word: 'Possibility',
    pos: 'noun',
    meaning: 'Olasılık, ihtimal',
    definition: 'The chance that something might happen or be true.',
    ipa: '/ˌpɒs.əˈbɪl.ə.ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'possible', pos: 'adj', meaning: 'mümkün' },
      { word: 'possibly', pos: 'adv', meaning: 'belki' }
    ],
    synonyms: [
      { word: 'Likelihood', meaning: 'İhtimal', pos: 'noun' },
      { word: 'Chance', meaning: 'Şans/Olasılık', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Impossibility', meaning: 'İmkansızlık', pos: 'noun' }
    ],
    collocations: ['strong possibility', 'real possibility', 'explore the possibility'],
    collocationMeanings: {
      'strong possibility': 'güçlü ihtimal',
      'real possibility': 'gerçek olasılık',
      'explore the possibility': 'olasılığı değerlendirmek/araştırmak'
    },
    examples: ["Another possibility is that we'll go to Mexico instead."],
    exampleTranslations: ['Diğer bir olasılık da onun yerine Meksika’ya gidecek olmamız.']
  },
  {
    id: 'prediction_b1',
    word: 'Prediction',
    pos: 'noun',
    meaning: 'Tahmin, öngörü',
    definition: 'A statement about what you think will happen in the future.',
    ipa: '/prɪˈdɪk.ʃən/',
    level: 'intermediate',
    wordFamily: [
      { word: 'predict', pos: 'verb', meaning: 'tahmin etmek' },
      { word: 'predictable', pos: 'adj', meaning: 'öngörülebilir' }
    ],
    synonyms: [
      { word: 'Forecast', meaning: 'Hava tahmini/Öngörü', pos: 'noun' },
      { word: 'Prophecy', meaning: 'Kehanet', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['make a prediction', 'accurate prediction', 'prediction comes true'],
    collocationMeanings: {
      'make a prediction': 'tahminde bulunmak',
      'accurate prediction': 'doğru/isabetli tahmin',
      'prediction comes true': 'tahminin gerçekleşmesi'
    },
    examples: ['The government has made a prediction that unemployment will rise this year.'],
    exampleTranslations: ['Hükümet, bu yıl işsizliğin artacağı yönünde bir öngörüde bulundu.']
  },
  {
    id: 'produce',
    word: 'Produce',
    pos: 'verb',
    meaning: 'Üretmek, yapımcılığını üstlenmek',
    definition: 'To make or grow something, especially in large quantities and in order to be sold OR to organise the work and money involved in making a film, play, television programme, CD etc.',
    ipa: '/prəˈdjuːs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'producer', pos: 'noun', meaning: 'yapımcı' },
      { word: 'product', pos: 'noun', meaning: 'ürün' },
      { word: 'production', pos: 'noun', meaning: 'üretim' }
    ],
    synonyms: [
      { word: 'Create', meaning: 'Yaratmak', pos: 'verb' },
      { word: 'Manufacture', meaning: 'İmal etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Destroy', meaning: 'Yok etmek', pos: 'verb' },
      { word: 'Consume', meaning: 'Tüketmek', pos: 'verb' }
    ],
    collocations: ['produce results', 'produce goods', 'mass produce'],
    collocationMeanings: {
      'produce results': 'sonuç üretmek',
      'produce goods': 'eşya/mal üretmek',
      'mass produce': 'seri üretim yapmak'
    },
    examples: ['Steve McQueen produced and starred in the film.'],
    exampleTranslations: ['Steve McQueen filmin hem yapımcılığını üstlendi hem de başrolünde oynadı.']
  },
  {
    id: 'producer',
    word: 'Producer',
    pos: 'noun',
    meaning: 'Üretici, yapımcı',
    definition: 'A person or company that grows food or makes goods to be sold OR someone whose job is to organize the work and money involved in making a movie, play, television.',
    ipa: '/prəˈdjuː.sər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'produce', pos: 'verb', meaning: 'üretmek' }
    ],
    synonyms: [
      { word: 'Maker', meaning: 'Yapıcı', pos: 'noun' },
      { word: 'Manufacturer', meaning: 'İmalatçı', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Consumer', meaning: 'Tüketici', pos: 'noun' }
    ],
    collocations: ['film producer', 'executive producer', 'leading producer'],
    collocationMeanings: {
      'film producer': 'film yapımcısı',
      'executive producer': 'yürütücü yapımcı',
      'leading producer': 'önde gelen üretici'
    },
    examples: ['The producer was really angry with the director.'],
    exampleTranslations: ['Yapımcı, yönetmene gerçekten çok kızmıştı.']
  },
  {
    id: 'product_b1',
    word: 'Product',
    pos: 'noun',
    meaning: 'Ürün',
    definition: 'Something that is made, grown, or obtained in large quantities so that it can be sold.',
    ipa: '/ˈprɒd.ʌkt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'produce', pos: 'verb', meaning: 'üretmek' }
    ],
    synonyms: [
      { word: 'Goods', meaning: 'Eşya/Mal', pos: 'noun' },
      { word: 'Merchandise', meaning: 'Ticari mal', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['new product', 'high quality product', 'dairy products'],
    collocationMeanings: {
      'new product': 'yeni ürün',
      'high quality product': 'yüksek kaliteli ürün',
      'dairy products': 'süt ürünleri'
    },
    examples: ['Consumers are becoming more suspicious of advertising claims about products that they buy.'],
    exampleTranslations: ['Tüketiciler, satın aldıkları ürünlerle ilgili reklam iddialarına karşı daha şüpheci yaklaşıyorlar.']
  },
  {
    id: 'productive',
    word: 'Productive',
    pos: 'adjective',
    meaning: 'Üretken, verimli',
    definition: 'Working hard and producing or achieving a lot.',
    ipa: '/prəˈdʌk.tɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'production', pos: 'noun', meaning: 'üretim' },
      { word: 'productively', pos: 'adv', meaning: 'verimli şekilde' }
    ],
    synonyms: [
      { word: 'Fruitful', meaning: 'Bereketli/Verimli', pos: 'adj' },
      { word: 'Efficient', meaning: 'Verimli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unproductive', meaning: 'Verimsiz', pos: 'adj' },
      { word: 'Lazy', meaning: 'Tembel', pos: 'adj' }
    ],
    collocations: ['highly productive', 'productive meeting', 'productive afternoon'],
    collocationMeanings: {
      'highly productive': 'son derece verimli',
      'productive meeting': 'verimli toplantı',
      'productive afternoon': 'üretken geçen öğleden sonra'
    },
    examples: ['Samuel is more productive in the morning.'],
    exampleTranslations: ['Samuel sabahları daha verimlidir.']
  },
  {
    id: 'proud_of',
    word: 'Proud of',
    pos: 'phrase',
    meaning: 'Gurur duymak',
    definition: 'Feeling happy about your achievements, your possessions, or people who you are connected with.',
    ipa: '/praʊd əv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pride', pos: 'noun', meaning: 'gurur' },
      { word: 'proudly', pos: 'adv', meaning: 'gururla' }
    ],
    synonyms: [
      { word: 'Honoured', meaning: 'Onurlanmış', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Ashamed of', meaning: 'Utanç duymak', pos: 'phrase' }
    ],
    collocations: ['immensely proud of', 'make someone proud of'],
    collocationMeanings: {
      'immensely proud of': 'fazlasıyla gurur duymak',
      'make someone proud of': 'birini kendisiyle gurur duyurmak'
    },
    examples: ['He was very proud of himself for winning.'],
    exampleTranslations: ['Kazandığı için kendisiyle çok gurur duyuyordu.']
  },
  {
    id: 'put_a_plan_into_action',
    word: 'Put a plan into action',
    pos: 'phrase',
    meaning: 'Planı uygulamaya koymak, eyleme dökmek',
    definition: 'To start using an idea to succeed in doing something.',
    ipa: '/pʊt ə plæn ˈɪn.tu ˈæk.ʃən/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Implement', meaning: 'Uygulamak', pos: 'verb' },
      { word: 'Execute', meaning: 'Yürütmek/Gerçekleştirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Halt', meaning: 'Durdurmak', pos: 'verb' },
      { word: 'Postpone', meaning: 'Ertelemek', pos: 'verb' }
    ],
    collocations: ['finally put a plan into action', 'ready to put a plan into action'],
    collocationMeanings: {
      'finally put a plan into action': 'sonunda bir planı uygulamaya koymak',
      'ready to put a plan into action': 'bir planı uygulamaya koymaya hazır olmak'
    },
    examples: ['We are ready to put our plan into action.'],
    exampleTranslations: ['Planımızı eyleme dökmeye hazırız.']
  },
  {
    id: 'put_away',
    word: 'Put away',
    pos: 'phrasal verb',
    meaning: 'Yerine koymak, kaldırmak',
    definition: 'To put something in the place where you usually keep it when you are not using it.',
    ipa: '/pʊt əˈweɪ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Store', meaning: 'Depolamak/Saklamak', pos: 'verb' },
      { word: 'Tidy up', meaning: 'Toparlamak', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Take out', meaning: 'Çıkarmak', pos: 'phrasal verb' },
      { word: 'Mess up', meaning: 'Dağıtmak', pos: 'phrasal verb' }
    ],
    collocations: ['put away toys', 'put away laundry', 'put away dishes'],
    collocationMeanings: {
      'put away toys': 'oyuncakları kaldırmak',
      'put away laundry': 'çamaşırları yerleştirmek',
      'put away dishes': 'bulaşıkları kaldırmak'
    },
    examples: ['He put the notebook away and stood up.'],
    exampleTranslations: ['Not defterini yerine kaldırdı ve ayağa kalktı.']
  },
  {
    id: 'put_my_mind_to',
    word: 'Put my mind to',
    pos: 'idiom',
    meaning: 'Kafaya koymak, kendini vermek',
    definition: "To direct all one's attention to achieving something.",
    ipa: '/pʊt maɪ maɪnd tuː/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Focus on', meaning: 'Odaklanmak', pos: 'verb' },
      { word: 'Concentrate on', meaning: 'Yoğunlaşmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Give up', meaning: 'Vazgeçmek', pos: 'phrasal verb' }
    ],
    collocations: ['put your mind to the task', 'really put your mind to it'],
    collocationMeanings: {
      'put your mind to the task': 'kendini işe vermek',
      'really put your mind to it': 'gerçekten kafaya koymak'
    },
    examples: ["She'd have made an excellent dancer, if she'd put her mind to it."],
    exampleTranslations: ['Eğer kafasına koysaydı (kendini verseydi) mükemmel bir dansçı olurdu.']
  },
  {
    id: 'put_off',
    word: 'Put off',
    pos: 'phrasal verb',
    meaning: 'Ertelemek',
    definition: 'To decide to do something later, not now.',
    ipa: '/pʊt ɒf/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Postpone', meaning: 'Ertelemek', pos: 'verb' },
      { word: 'Delay', meaning: 'Geciktirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Advance', meaning: 'Öne çekmek', pos: 'verb' },
      { word: 'Rush', meaning: 'Acele ettirmek', pos: 'verb' }
    ],
    collocations: ['put off a meeting', 'put off a decision', 'keep putting off'],
    collocationMeanings: {
      'put off a meeting': 'toplantıyı ertelemek',
      'put off a decision': 'bir kararı ertelemek',
      'keep putting off': 'erteleyip durmak'
    },
    examples: ["You can't put the decision off any longer."],
    exampleTranslations: ['Kararı daha fazla erteleyemezsin.']
  },
  {
    id: 'quit_a_bad_habit',
    word: 'Quit a bad habit',
    pos: 'phrase',
    meaning: 'Kötü bir alışkanlığı bırakmak',
    definition: 'To stop doing something that is not good for you.',
    ipa: '/kwɪt ə bæd ˈhæb.ɪt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Break a habit', meaning: 'Alışkanlığı kırmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Start a habit', meaning: 'Alışkanlık edinmek', pos: 'phrase' }
    ],
    collocations: ['try to quit a bad habit', 'struggle to quit a bad habit'],
    collocationMeanings: {
      'try to quit a bad habit': 'kötü bir alışkanlığı bırakmaya çalışmak',
      'struggle to quit a bad habit': 'kötü bir alışkanlığı bırakmakta zorlanmak'
    },
    examples: ['You should quit biting your nails.'],
    exampleTranslations: ['Tırnaklarını yemeyi bırakmalısın.']
  },
  {
    id: 'reach_a_target_b1',
    word: 'Reach a target',
    pos: 'phrase',
    meaning: 'Hedefe ulaşmak',
    definition: 'To achieve something.',
    ipa: '/riːtʃ ə ˈtɑː.ɡɪt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Achieve a goal', meaning: 'Hedefi gerçekleştirmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Fail', meaning: 'Başarısız olmak', pos: 'verb' }
    ],
    collocations: ['easily reach a target', 'fail to reach a target'],
    collocationMeanings: {
      'easily reach a target': 'hedefe kolayca ulaşmak',
      'fail to reach a target': 'hedefe ulaşamamak'
    },
    examples: ['I aim to reach the target by March.'],
    exampleTranslations: ['Mart ayına kadar hedefe ulaşmayı hedefliyorum.']
  },
  {
    id: 'rebuild',
    word: 'Rebuild',
    pos: 'verb',
    meaning: 'Yeniden inşa etmek',
    definition: 'To build something again after it has been damaged or destroyed.',
    ipa: '/ˌriːˈbɪld/',
    level: 'intermediate',
    wordFamily: [
      { word: 'build', pos: 'verb', meaning: 'inşa etmek' }
    ],
    synonyms: [
      { word: 'Reconstruct', meaning: 'Yeniden kurmak', pos: 'verb' },
      { word: 'Restore', meaning: 'Restore etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Destroy', meaning: 'Yıkmak', pos: 'verb' },
      { word: 'Demolish', meaning: 'Tahrip etmek', pos: 'verb' }
    ],
    collocations: ['rebuild trust', 'rebuild a life', 'rebuild a city'],
    collocationMeanings: {
      'rebuild trust': 'güveni yeniden tesis etmek',
      'rebuild a life': 'hayatı yeniden kurmak',
      'rebuild a city': 'bir şehri yeniden inşa etmek'
    },
    examples: ['They had to rebuild the theatre after the fire.'],
    exampleTranslations: ['Yangından sonra tiyatroyu yeniden inşa etmek zorunda kaldılar.']
  },
  {
    id: 'recognise',
    word: 'Recognise',
    pos: 'verb',
    meaning: 'Tanımak (daha önce gördüğü birini/şeyi)',
    definition: 'To know who the person is or what the thing is that you are seeing, hearing etc. because you have seen, heard etc. them before.',
    ipa: '/ˈrek.əɡ.naɪz/',
    level: 'intermediate',
    wordFamily: [
      { word: 'recognition', pos: 'noun', meaning: 'tanınma/doğrulama' },
      { word: 'recognizable', pos: 'adj', meaning: 'tanınabilir' }
    ],
    synonyms: [
      { word: 'Identify', meaning: 'Tanımlamak/Teşhis etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forget', meaning: 'Unutmak', pos: 'verb' }
    ],
    collocations: ['instantly recognize', 'fail to recognize', 'recognize a voice'],
    collocationMeanings: {
      'instantly recognize': 'anında tanımak',
      'fail to recognize': 'tanıyamamak',
      'recognize a voice': 'bir sesi tanımak'
    },
    examples: ['I hardly recognized you with a beard!'],
    exampleTranslations: ['Seni sakalla neredeyse tanıyamadım!']
  },
  {
    id: 'recording_studio',
    word: 'Recording studio',
    pos: 'noun',
    meaning: 'Kayıt stüdyosu',
    definition: 'A place where music or speech can be recorded.',
    ipa: '/rɪˈkɔː.dɪŋ ˈstjuː.di.əʊ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'record', pos: 'verb', meaning: 'kaydetmek' }
    ],
    synonyms: [
      { word: 'Sound studio', meaning: 'Ses stüdyosu', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['professional recording studio', 'book a recording studio'],
    collocationMeanings: {
      'professional recording studio': 'profesyonel kayıt stüdyosu',
      'book a recording studio': 'kayıt stüdyosu kiralamak/rezerve etmek'
    },
    examples: ['They were in the recording studio all day.'],
    exampleTranslations: ['Bütün gün kayıt stüdyosundaydılar.']
  },
  {
    id: 'recycle',
    word: 'Recycle',
    pos: 'verb',
    meaning: 'Geri dönüştürmek',
    definition: 'To change waste materials such as newspapers and bottles so that they can be used again.',
    ipa: '/ˌriːˈsaɪ.kəl/',
    level: 'intermediate',
    wordFamily: [
      { word: 'recycling', pos: 'noun', meaning: 'geri dönüşüm' },
      { word: 'recyclable', pos: 'adj', meaning: 'geri dönüştürülebilir' }
    ],
    synonyms: [
      { word: 'Reuse', meaning: 'Yeniden kullanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discard', meaning: 'Atmak', pos: 'verb' }
    ],
    collocations: ['recycle plastic', 'recycle paper', 'encourage to recycle'],
    collocationMeanings: {
      'recycle plastic': 'plastiği geri dönüştürmek',
      'recycle paper': 'kağıdı geri dönüştürmek',
      'encourage to recycle': 'geri dönüşüme teşvik etmek'
    },
    examples: ['Japan recycles 40% of its waste.'],
    exampleTranslations: ['Japonya atıklarının %40’ını geri dönüştürüyor.']
  },
  {
    id: 'reduce_b1',
    word: 'Reduce',
    pos: 'verb',
    meaning: 'Azaltmak, düşürmek',
    definition: 'To make something smaller or less in size, amount, importance etc.',
    ipa: '/rɪˈdjuːs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reduction', pos: 'noun', meaning: 'azalma' }
    ],
    synonyms: [
      { word: 'Decrease', meaning: 'Eksiltmek', pos: 'verb' },
      { word: 'Diminish', meaning: 'Küçültmek/Eksiltmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Increase', meaning: 'Artırmak', pos: 'verb' },
      { word: 'Boost', meaning: 'Yükseltmek', pos: 'verb' }
    ],
    collocations: ['significantly reduce', 'reduce costs', 'reduce risks'],
    collocationMeanings: {
      'significantly reduce': 'önemli ölçüde azaltmak',
      'reduce costs': 'maliyetleri düşürmek',
      'reduce risks': 'riskleri azaltmak'
    },
    examples: ['Try to reduce the amount of fat in your diet.'],
    exampleTranslations: ['Diyetinizdeki yağ miktarını azaltmaya çalışın.']
  },
  {
    id: 'refuse',
    word: 'Refuse',
    pos: 'verb',
    meaning: 'Reddetmek, geri çevirmek',
    definition: 'To say you will not do something that someone has asked you to do.',
    ipa: '/rɪˈfjuːz/',
    level: 'intermediate',
    wordFamily: [
      { word: 'refusal', pos: 'noun', meaning: 'ret' }
    ],
    synonyms: [
      { word: 'Reject', meaning: 'Geri çevirmek', pos: 'verb' },
      { word: 'Decline', meaning: 'Kibarca reddetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Accept', meaning: 'Kabul etmek', pos: 'verb' },
      { word: 'Agree', meaning: 'Onaylamak', pos: 'verb' }
    ],
    collocations: ['refuse to accept', 'flatly refuse', 'refuse an offer'],
    collocationMeanings: {
      'refuse to accept': 'kabul etmeyi reddetmek',
      'flatly refuse': 'kesin bir dille reddetmek',
      'refuse an offer': 'bir teklifi geri çevirmek'
    },
    examples: ['Mum asked him to apologize, but he refused.'],
    exampleTranslations: ['Annem özür dilemesini istedi ama o reddetti.']
  },
  {
    id: 'regret_b1',
    word: 'Regret',
    pos: 'verb',
    meaning: 'Pişman olmak, üzülmek',
    definition: 'To feel sorry or sad that something has happened.',
    ipa: '/rɪˈɡret/',
    level: 'intermediate',
    wordFamily: [
      { word: 'regretful', pos: 'adj', meaning: 'pişmanlık dolu' },
      { word: 'regrettable', pos: 'adj', meaning: 'üzücü/pişmanlık verici' }
    ],
    synonyms: [
      { word: 'Rrue', meaning: 'Pişmanlık duymak', pos: 'verb' },
      { word: 'Be sorry', meaning: 'Üzgün olmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['deeply regret', 'express regret', 'bitterly regret'],
    collocationMeanings: {
      'deeply regret': 'derin pişmanlık duymak',
      'express regret': 'pişmanlığını dile getirmek',
      'bitterly regret': 'acı bir şekilde pişman olmak'
    },
    examples: ['We regret any inconvenience caused by the delay.'],
    exampleTranslations: ['Gecikmenin neden olduğu her türlü rahatsızlıktan dolayı üzgünüz.']
  },
  {
    id: 'rehearsal_room',
    word: 'Rehearsal room',
    pos: 'noun',
    meaning: 'Prova odası',
    definition: 'A place to practise for a performance of a play, concert, opera etc.',
    ipa: '/rɪˈhɜː.səl ruːm/',
    level: 'intermediate',
    wordFamily: [
      { word: 'rehearse', pos: 'verb', meaning: 'prova yapmak' }
    ],
    synonyms: [
      { word: 'Practice room', meaning: 'Pratik odası', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['book a rehearsal room', 'noisy rehearsal room'],
    collocationMeanings: {
      'book a rehearsal room': 'prova odası rezerve etmek',
      'noisy rehearsal room': 'gürültülü prova odası'
    },
    examples: ['We need to find a rehearsal room to practise.'],
    exampleTranslations: ['Pratik yapmak için bir prova odası bulmamız gerekiyor.']
  },
  {
    id: 'rehearse',
    word: 'Rehearse',
    pos: 'verb',
    meaning: 'Prova yapmak',
    definition: 'To practise a play, concert, opera etc. before giving a performance.',
    ipa: '/rɪˈhɜːs/',
    level: 'intermediate',
    wordFamily: [
      { word: 'rehearsal', pos: 'noun', meaning: 'prova' }
    ],
    synonyms: [
      { word: 'Practice', meaning: 'Pratik yapmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['rehearse a play', 'rehearse a song', 'constantly rehearse'],
    collocationMeanings: {
      'rehearse a play': 'oyun provası yapmak',
      'rehearse a song': 'şarkı provası yapmak',
      'constantly rehearse': 'sürekli prova yapmak'
    },
    examples: ["We've been rehearsing for weeks."],
    exampleTranslations: ['Haftalardır prova yapıyoruz.']
  },
  {
    id: 'relative',
    word: 'Relative',
    pos: 'noun',
    meaning: 'Akraba',
    definition: 'Members of your family, especially ones who do not live with you, for example a grandparent or cousin.',
    ipa: '/ˈrel.ə.tɪv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'relation', pos: 'noun', meaning: 'ilişki' }
    ],
    synonyms: [
      { word: 'Relation', meaning: 'Akraba', pos: 'noun' },
      { word: 'Kin', meaning: 'Hısım/Soydaş', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Stranger', meaning: 'Yabancı', pos: 'noun' }
    ],
    collocations: ['close relative', 'distant relative', 'family relative'],
    collocationMeanings: {
      'close relative': 'yakın akraba',
      'distant relative': 'uzak akraba',
      'family relative': 'aile akrabası'
    },
    examples: ['We spent the week visiting relatives.'],
    exampleTranslations: ['Haftayı akrabaları ziyaret ederek geçirdik.']
  },
  {
    id: 'rely_on',
    word: 'Rely on',
    pos: 'phrasal verb',
    meaning: 'Güvenmek, bel bağlamak',
    definition: 'To trust someone to do something for you.',
    ipa: '/rɪˈlaɪ ɒn/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reliable', pos: 'adj', meaning: 'güvenilir' },
      { word: 'reliance', pos: 'noun', meaning: 'güven/bağımlılık' }
    ],
    synonyms: [
      { word: 'Depend on', meaning: 'Bağlı olmak', pos: 'phrase' },
      { word: 'Count on', meaning: 'Güvenmek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Distrust', meaning: 'Güvenmemek', pos: 'verb' }
    ],
    collocations: ['rely heavily on', 'can rely on', 'rely on technology'],
    collocationMeanings: {
      'rely heavily on': 'büyük ölçüde güvenmek',
      'can rely on': 'güvenebilirsin',
      'rely on technology': 'teknolojiye bel bağlamak'
    },
    examples: ['We can rely on my brother to help us.'],
    exampleTranslations: ['Bize yardım etmesi için erkek kardeşime güvenebiliriz.']
  },
  {
    id: 'remind_b1',
    word: 'Remind',
    pos: 'verb',
    meaning: 'Hatırlatmak',
    definition: 'To tell someone again about an event from the past or about a fact that they used to know.',
    ipa: '/rɪˈmaɪnd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reminder', pos: 'noun', meaning: 'hatırlatıcı' }
    ],
    synonyms: [
      { word: 'Prompt', meaning: 'Anımsatmak/Dürtmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forget', meaning: 'Unutmak', pos: 'verb' }
    ],
    collocations: ['remind someone of', 'gently remind', 'remind me later'],
    collocationMeanings: {
      'remind someone of': 'birine bir şeyi hatırlatmak',
      'gently remind': 'nazikçe hatırlatmak',
      'remind me later': 'bana sonra hatırlat'
    },
    examples: ["I can't think of his name – can you remind me?"],
    exampleTranslations: ['Adını çıkaramıyorum – bana hatırlatabilir misin?']
  },
  {
    id: 'repeat_b1',
    word: 'Repeat',
    pos: 'verb',
    meaning: 'Tekrar etmek',
    definition: 'To say or write something again.',
    ipa: '/rɪˈpiːt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'repetition', pos: 'noun', meaning: 'tekrar' },
      { word: 'repetitive', pos: 'adj', meaning: 'tekrarlayan' }
    ],
    synonyms: [
      { word: 'Reiterate', meaning: 'Yeniden söylemek', pos: 'verb' },
      { word: 'Duplicate', meaning: 'Kopyalamak/Yinelemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['repeat a question', 'repeat a word', "don't repeat this"],
    collocationMeanings: {
      'repeat a question': 'soruyu tekrarlamak',
      'repeat a word': 'kelimeyi tekrarlamak',
      "don't repeat this": 'bunu tekrarlama (gizli tut)'
    },
    examples: ['Can you repeat what you just said, please?'],
    exampleTranslations: ['Lütfen az önce söylediğini tekrar edebilir misin?']
  },
  {
    id: 'reply_b1',
    word: 'Reply',
    pos: 'verb',
    meaning: 'Cevap vermek, yanıtlamak',
    definition: 'To say, write, or do something as an answer.',
    ipa: '/rɪˈplaɪ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reply', pos: 'noun', meaning: 'cevap/yanıt' }
    ],
    synonyms: [
      { word: 'Answer', meaning: 'Cevap vermek', pos: 'verb' },
      { word: 'Respond', meaning: 'Yanıtlamak/Tepki vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Question', meaning: 'Soru sormak', pos: 'verb' }
    ],
    collocations: ['reply to an email', 'reply immediately', 'prompt reply'],
    collocationMeanings: {
      'reply to an email': 'e-postayı yanıtlamak',
      'reply immediately': 'anında cevap vermek',
      'prompt reply': 'hızlı yanıt'
    },
    examples: ["'I know,' Corbett replied quietly."],
    exampleTranslations: ["'Biliyorum,' diye yanıtladı Corbett sessizce."]
  },
  {
    id: 'rethink',
    word: 'Rethink',
    pos: 'verb',
    meaning: 'Yeniden düşünmek, gözden geçirmek',
    definition: 'To consider something such as an idea, plan, or system again in order to change it.',
    ipa: '/ˌriːˈθɪŋk/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reconsider', meaning: 'Yeniden değerlendirmek', pos: 'verb' },
      { word: 'Re-evaluate', meaning: 'Tekrar ölçüp biçmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['rethink strategy', 'complete rethink', 'force to rethink'],
    collocationMeanings: {
      'rethink strategy': 'stratejiyi yeniden düşünmek',
      'complete rethink': 'tamamen yeniden gözden geçirme',
      'force to rethink': 'yeniden düşünmeye zorlamak'
    },
    examples: ['Competitive pressures are forcing managers to rethink their strategies.'],
    exampleTranslations: ['Rekabetçi baskılar, yöneticileri stratejilerini yeniden gözden geçirmeye zorluyor.']
  },
  {
    id: 'retire',
    word: 'Retire',
    pos: 'verb',
    meaning: 'Emekli olmak',
    definition: 'To stop working, especially when you reach the age when you are officially too old to work.',
    ipa: '/rɪˈtaɪər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'retirement', pos: 'noun', meaning: 'emeklilik' },
      { word: 'retired', pos: 'adj', meaning: 'emekli' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Work', meaning: 'Çalışmak', pos: 'verb' }
    ],
    collocations: ['retire from work', 'early retirement', 'plan to retire'],
    collocationMeanings: {
      'retire from work': 'işten emekli olmak',
      'early retirement': 'erken emeklilik',
      'plan to retire': 'emekli olmayı planlamak'
    },
    examples: ['At what age do you plan to retire?'],
    exampleTranslations: ['Kaç yaşında emekli olmayı planlıyorsun?']
  },
  {
    id: 'reuse',
    word: 'Reuse',
    pos: 'verb',
    meaning: 'Yeniden kullanmak',
    definition: 'To use something again, sometimes for a different purpose.',
    ipa: '/ˌriːˈjuːz/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reusable', pos: 'adj', meaning: 'yeniden kullanılabilir' }
    ],
    synonyms: [
      { word: 'Recycle', meaning: 'Geri dönüştürmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discard', meaning: 'Atmak', pos: 'verb' }
    ],
    collocations: ['reuse bags', 'recycle and reuse', 'wash and reuse'],
    collocationMeanings: {
      'reuse bags': 'çantaları tekrar kullanmak',
      'recycle and reuse': 'geri dönüştür ve tekrar kullan',
      'wash and reuse': 'yıka ve tekrar kullan'
    },
    examples: ['My daughter reuses envelopes.'],
    exampleTranslations: ['Kızım zarfları yeniden kullanıyor.']
  },
  {
    id: 'reward_yourself',
    word: 'Reward yourself',
    pos: 'phrase',
    meaning: 'Kendini ödüllendirmek',
    definition: 'To give yourself something as a reward, for example praise, success, or money.',
    ipa: '/rɪˈwɔːrd jɔːˈself/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reward', pos: 'noun/verb', meaning: 'ödül/ödüllendirmek' },
      { word: 'rewarding', pos: 'adj', meaning: 'tatmin edici' }
    ],
    synonyms: [
      { word: 'Treat yourself', meaning: 'Kendini şımartmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Punish yourself', meaning: 'Kendini cezalandırmak', pos: 'phrase' }
    ],
    collocations: ['reward yourself for hard work', 'reward yourself with a treat'],
    collocationMeanings: {
      'reward yourself for hard work': 'sıkı çalışma için kendini ödüllendirmek',
      'reward yourself with a treat': 'kendini bir hediye/ikramla ödüllendirmek'
    },
    examples: ['He liked to reward himself with a short break every two hours.'],
    exampleTranslations: ['Her iki saatte bir kısa bir mola vererek kendini ödüllendirmeyi severdi.']
  },
  {
    id: 'road_works',
    word: 'Road works',
    pos: 'noun',
    meaning: 'Yol çalışması',
    definition: 'Repairs that are done to the surface of a road.',
    ipa: '/rəʊd wɜːks/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Road repairs', meaning: 'Yol onarımı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['heavy road works', 'major road works', 'delayed by road works'],
    collocationMeanings: {
      'heavy road works': 'yoğun yol çalışması',
      'major road works': 'büyük çaplı yol çalışması',
      'delayed by road works': 'yol çalışması nedeniyle gecikmek'
    },
    examples: ['There are road works here because they are changing the road.'],
    exampleTranslations: ['Burada yol çalışması var çünkü yolu değiştiriyorlar.']
  },
  {
    id: 'rubbish',
    word: 'Rubbish',
    pos: 'noun',
    meaning: 'Çöp',
    definition: 'Things that you throw away because they are no longer useful.',
    ipa: '/ˈrʌb.ɪʃ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Garbage', meaning: 'Çöp (ABD)', pos: 'noun' },
      { word: 'Trash', meaning: 'Çöp/Süprüntü', pos: 'noun' },
      { word: 'Waste', meaning: 'Atık', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Valuables', meaning: 'Değerli eşyalar', pos: 'noun' }
    ],
    collocations: ['rubbish bin', 'collect rubbish', 'absolute rubbish'],
    collocationMeanings: {
      'rubbish bin': 'çöp tenekesi',
      'collect rubbish': 'çöp toplamak',
      'absolute rubbish': 'tamamen saçmalık (argoda)'
    },
    examples: ['The streets were littered with rubbish.'],
    exampleTranslations: ['Sokaklar çöplerle doluydu.']
  },
  {
    id: 'run_a_company',
    word: 'Run a company',
    pos: 'phrase',
    meaning: 'Şirket yönetmek',
    definition: 'To manage a large organization.',
    ipa: '/rʌn ə ˈkʌm.pə.ni/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Manage a firm', meaning: 'Firma yönetmek', pos: 'phrase' },
      { word: 'Lead an organization', meaning: 'Organizasyona liderlik etmek', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['successfully run a company', 'experience to run a company'],
    collocationMeanings: {
      'successfully run a company': 'bir şirket başarıyla yönetmek',
      'experience to run a company': 'şirket yönetmek için gereken tecrübe'
    },
    examples: ['I would love to run a company one day.'],
    exampleTranslations: ['Bir gün bir şirket yönetmeyi çok isterim.']
  },
  {
    id: 'runny',
    word: 'Runny',
    pos: 'adjective',
    meaning: 'Akışkan, sıvılaşmış (yumurta için rafadan)',
    definition: 'Like a liquid.',
    ipa: '/ˈrʌn.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'run', pos: 'verb', meaning: 'koşmak/akmak' }
    ],
    synonyms: [
      { word: 'Liquid', meaning: 'Sıvı', pos: 'adj' },
      { word: 'Fluid', meaning: 'Akışkan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Solid', meaning: 'Katı', pos: 'adj' },
      { word: 'Hard', meaning: 'Sert', pos: 'adj' }
    ],
    collocations: ['runny nose', 'runny egg', 'runny honey'],
    collocationMeanings: {
      'runny nose': 'burun akıntısı',
      'runny egg': 'rafadan yumurta',
      'runny honey': 'akışkan bal'
    },
    examples: ['Do you like your eggs cooked hard or runny?'],
    exampleTranslations: ['Yumurtanızı katı mı yoksa rafadan mı seversiniz?']
  },
  {
    id: 'rush_hour',
    word: 'Rush hour',
    pos: 'noun',
    meaning: 'İş çıkış saati, trafiğin yoğun olduğu saat',
    definition: 'The time of day when there are a lot of cars on the road because most people are travelling to or from work.',
    ipa: '/ˈrʌʃ ˌaʊər/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Peak hour', meaning: 'En yoğun saat', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Off-peak', meaning: 'Yoğun olmayan zaman', pos: 'adj' }
    ],
    collocations: ['morning rush hour', 'evening rush hour', 'avoid rush hour'],
    collocationMeanings: {
      'morning rush hour': 'sabah trafiği',
      'evening rush hour': 'akşam trafiği',
      'avoid rush hour': 'yoğun trafik saatlerinden kaçınmak'
    },
    examples: ['I hate travelling in rush hour because everything is so slow.'],
    exampleTranslations: ['Trafiğin yoğun olduğu saatlerde seyahat etmekten nefret ediyorum çünkü her şey çok yavaş ilerliyor.']
  },
  {
    id: 'salary',
    word: 'Salary',
    pos: 'noun',
    meaning: 'Maaş',
    definition: 'An amount of money received every month or year for the work you do.',
    ipa: '/ˈsæl.ər.i/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Wage', meaning: 'Ücret/Haftalık', pos: 'noun' },
      { word: 'Pay', meaning: 'Ödeme', pos: 'noun' },
      { word: 'Earnings', meaning: 'Kazanç', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['annual salary', 'high salary', 'earn a salary'],
    collocationMeanings: {
      'annual salary': 'yıllık maaş',
      'high salary': 'yüksek maaş',
      'earn a salary': 'maaş kazanmak'
    },
    examples: ['When I earn a salary, I can save to buy a house.'],
    exampleTranslations: ['Maaş almaya başladığımda, ev almak için birikim yapabilirim.']
  },
  {
    id: 'salty',
    word: 'Salty',
    pos: 'adjective',
    meaning: 'Tuzlu',
    definition: 'Containing salt, or tasting like salt.',
    ipa: '/ˈsɒl.ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'salt', pos: 'noun/verb', meaning: 'tuz/tuzlamak' }
    ],
    synonyms: [
      { word: 'Briny', meaning: 'Çok tuzlu/Deniz suyu gibi', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sweet', meaning: 'Tatlı', pos: 'adj' },
      { word: 'Bland', meaning: 'Tatsız', pos: 'adj' }
    ],
    collocations: ['salty taste', 'salty sea air', 'too salty'],
    collocationMeanings: {
      'salty taste': 'tuzlu tad',
      'salty sea air': 'tuzlu deniz havası',
      'too salty': 'çok tuzlu'
    },
    examples: ["The soup's a bit salty."],
    exampleTranslations: ['Çorba biraz tuzlu.']
  },
  {
    id: 'savoury',
    word: 'Savoury',
    pos: 'adjective',
    meaning: 'Tuzlu/Baharatlı (tatlı olmayan)',
    definition: 'Tasting of salt or spices and not sweet.',
    ipa: '/ˈseɪ.vər.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'savour', pos: 'verb', meaning: 'tadını çıkarmak' }
    ],
    synonyms: [
      { word: 'Piquant', meaning: 'Hoş kokulu/Baharatlı', pos: 'adj' },
      { word: 'Spicy', meaning: 'Baharatlı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sweet', meaning: 'Tatlı', pos: 'adj' }
    ],
    collocations: ['savoury dish', 'savoury snack', 'savoury smell'],
    collocationMeanings: {
      'savoury dish': 'tuzlu/baharatlı yemek',
      'savoury snack': 'tuzlu atıştırmalık',
      'savoury smell': 'iştah açıcı baharat kokusu'
    },
    examples: ['I bought some savoury snacks.'],
    exampleTranslations: ['Bazı tuzlu/atıştırmalıklar aldım.']
  },
  {
    id: 'say_b1',
    word: 'Say',
    pos: 'verb',
    meaning: 'Söylemek, demek',
    definition: 'To express something using words.',
    ipa: '/seɪ/',
    level: 'intermediate',
    wordFamily: [
      { word: 'saying', pos: 'noun', meaning: 'atasözü/deyiş' }
    ],
    synonyms: [
      { word: 'State', meaning: 'Belirtmek', pos: 'verb' },
      { word: 'Utter', meaning: 'Dile getirmek', pos: 'verb' },
      { word: 'Declare', meaning: 'Beyan etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['say hello', 'say goodbye', 'say sorry'],
    collocationMeanings: {
      'say hello': 'selam vermek',
      'say goodbye': 'hoşça kal demek',
      'say sorry': 'özür dilemek'
    },
    examples: ["'Pleased to meet you,' he said with a smile."],
    exampleTranslations: ["'Tanıştığımıza memnun oldum,' dedi gülümseyerek."]
  },
  {
    id: 'scene',
    word: 'Scene',
    pos: 'noun',
    meaning: 'Sahne (film/tiyatro bölümü)',
    definition: 'A part of a play, book, film etc. in which events happen.',
    ipa: '/siːn/',
    level: 'intermediate',
    wordFamily: [
      { word: 'scenic', pos: 'adj', meaning: 'manzaralı' }
    ],
    synonyms: [
      { word: 'Episode', meaning: 'Bölüm', pos: 'noun' },
      { word: 'Setting', meaning: 'Mekan/Ortam', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['crime scene', 'opening scene', 'movie scene'],
    collocationMeanings: {
      'crime scene': 'olay yeri',
      'opening scene': 'açılış sahnesi',
      'movie scene': 'film sahnesi'
    },
    examples: ['They watched the opening scene of Macbeth.'],
    exampleTranslations: ['Macbeth’in açılış sahnesini izlediler.']
  },
  {
    id: 'schedule_b1',
    word: 'Schedule',
    pos: 'verb',
    meaning: 'Programlamak, takvime bağlamak',
    definition: 'To plan exactly when you will do something.',
    ipa: '/ˈʃedʒ.uːl/',
    level: 'intermediate',
    wordFamily: [
      { word: 'schedule', pos: 'noun', meaning: 'program/takvim' }
    ],
    synonyms: [
      { word: 'Plan', meaning: 'Planlamak', pos: 'verb' },
      { word: 'Arrange', meaning: 'Düzenlemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['busy schedule', 'on schedule', 'ahead of schedule'],
    collocationMeanings: {
      'busy schedule': 'yoğun program',
      'on schedule': 'zamanında/takvime uygun',
      'ahead of schedule': 'vaktinden önce'
    },
    examples: ["What's on your schedule today?"],
    exampleTranslations: ['Bugün programında ne var?']
  },
  {
    id: 'scientific_b1',
    word: 'Scientific',
    pos: 'adjective',
    meaning: 'Bilimsel',
    definition: 'Relating to science, or based on its methods.',
    ipa: '/ˌsaɪənˈtɪf.ɪk/',
    level: 'intermediate',
    wordFamily: [
      { word: 'science', pos: 'noun', meaning: 'bilim' },
      { word: 'scientist', pos: 'noun', meaning: 'bilim insanı' },
      { word: 'scientifically', pos: 'adv', meaning: 'bilimsel olarak' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Unscientific', meaning: 'Bilimsel olmayan', pos: 'adj' }
    ],
    collocations: ['scientific research', 'scientific discovery', 'scientific proof'],
    collocationMeanings: {
      'scientific research': 'bilimsel araştırma',
      'scientific discovery': 'bilimsel buluş',
      'scientific proof': 'bilimsel kanıt'
    },
    examples: ['Newton made an important scientific discovery.'],
    exampleTranslations: ['Newton önemli bir bilimsel keşif yaptı.']
  },
  {
    id: 'sensible',
    word: 'Sensible',
    pos: 'adjective',
    meaning: 'Mantıklı, aklı başında',
    definition: 'Someone who is reasonable and practical.',
    ipa: '/ˈsen.sə.bəl/',
    level: 'intermediate',
    wordFamily: [
      { word: 'sense', pos: 'noun/verb', meaning: 'duyu/hissetmek' },
      { word: 'sensibly', pos: 'adv', meaning: 'mantıklıca' }
    ],
    synonyms: [
      { word: 'Reasonable', meaning: 'Makul', pos: 'adj' },
      { word: 'Rational', meaning: 'Rasyonel', pos: 'adj' },
      { word: 'Practical', meaning: 'Pratik', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Foolish', meaning: 'Aptalca', pos: 'adj' },
      { word: 'Unreasonable', meaning: 'Mantıksız', pos: 'adj' },
      { word: 'Silly', meaning: 'Saçma', pos: 'adj' }
    ],
    collocations: ['sensible advice', 'sensible decision', 'sensible approach'],
    collocationMeanings: {
      'sensible advice': 'mantıklı tavsiye',
      'sensible decision': 'akılcı karar',
      'sensible approach': 'makul yaklaşım'
    },
    examples: ["I don't see how any sensible person could agree with him."],
    exampleTranslations: ['Aklı başında herhangi birinin ona nasıl katılabileceğini anlamıyorum.']
  },
  {
    id: 'set_goals',
    word: 'Set short-term and long-term goals',
    pos: 'phrase',
    meaning: 'Kısa ve uzun vadeli hedefler belirlemek',
    definition: 'To decide what you want to achieve in the near future and for the future generally.',
    ipa: '/set ʃɔːrt tɜːm ænd lɒŋ tɜːm ɡəʊlz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Establish objectives', meaning: 'Hedefler belirlemek', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['set goals for the year', 'need to set goals'],
    collocationMeanings: {
      'set goals for the year': 'yıl için hedefler belirlemek',
      'need to set goals': 'hedefler koymaya ihtiyaç duymak'
    },
    examples: ["It's important to set short-term and long-term goals for your career."],
    exampleTranslations: ['Kariyeriniz için kısa ve uzun vadeli hedefler belirlemek önemlidir.']
  },
  {
    id: 'set_up',
    word: 'Set up',
    pos: 'phrasal verb',
    meaning: 'Kurmak, düzenlemek',
    definition: 'To organize or plan something such as an event or system.',
    ipa: '/set ʌp/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Establish', meaning: 'Kurmak', pos: 'verb' },
      { word: 'Organize', meaning: 'Organize etmek', pos: 'verb' },
      { word: 'Install', meaning: 'Yüklemek/Kurmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Dismantle', meaning: 'Sökmek/Dağıtmak', pos: 'verb' }
    ],
    collocations: ['set up a business', 'set up a meeting', 'set up a system'],
    collocationMeanings: {
      'set up a business': 'iş kurmak',
      'set up a meeting': 'toplantı ayarlamak',
      'set up a system': 'sistem kurmak'
    },
    examples: ['A film night would be very easy to set up.'],
    exampleTranslations: ['Bir film gecesi düzenlemek çok kolay olurdu.']
  },
  {
    id: 'set_yourself',
    word: 'Set yourself',
    pos: 'phrase',
    meaning: 'Kendine (hedef vb.) koymak',
    definition: 'To give something to yourself to do or to achieve.',
    ipa: '/set jɔːˈself/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Challenge yourself', meaning: 'Kendini zorlamak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['set yourself a goal', 'set yourself a task', 'set yourself high standards'],
    collocationMeanings: {
      'set yourself a goal': 'kendine bir hedef koymak',
      'set yourself a task': 'kendine bir görev belirlemek',
      'set yourself high standards': 'kendine yüksek standartlar koymak'
    },
    examples: ['I like to set myself exercise targets for the week.'],
    exampleTranslations: ['Kendime haftalık egzersiz hedefleri koymayı seviyorum.']
  },
  {
    id: 'severe_delay',
    word: 'Severe delay',
    pos: 'phrase',
    meaning: 'Ciddi gecikme',
    definition: 'A situation in which a plane, train etc. leaves or arrives very late.',
    ipa: '/sɪˈvɪər dɪˈleɪ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Major disruption', meaning: 'Büyük aksaklık', pos: 'noun' }
    ],
    antonyms: [
      { word: 'On time', meaning: 'Tam vaktinde', pos: 'phrase' }
    ],
    collocations: ['experience a severe delay', 'cause a severe delay'],
    collocationMeanings: {
      'experience a severe delay': 'ciddi bir gecikme yaşamak',
      'cause a severe delay': 'ciddi gecikmeye sebep olmak'
    },
    examples: ['There is a severe delay on the motorway due to an accident.'],
    exampleTranslations: ['Kaza nedeniyle otoyolda ciddi bir gecikme var.']
  },
  {
    id: 'shout',
    word: 'Shout',
    pos: 'verb',
    meaning: 'Bağırmak, haykırmak',
    definition: 'To say something in a loud voice.',
    ipa: '/ʃaʊt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Yell', meaning: 'Bağırmak', pos: 'verb' },
      { word: 'Scream', meaning: 'Çığlık atmak', pos: 'verb' },
      { word: 'Bellow', meaning: 'Böğürmek/Gürlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Whisper', meaning: 'Fısıldamak', pos: 'verb' }
    ],
    collocations: ['shout at someone', 'shout for help', 'shout loudly'],
    collocationMeanings: {
      'shout at someone': 'birine bağırmak',
      'shout for help': 'yardım için bağırmak',
      'shout loudly': 'yüksek sesle bağırmak'
    },
    examples: ["'Stop!' he shouted."],
    exampleTranslations: ["'Dur!' diye bağırdı."]
  },
  {
    id: 'situation_b1',
    word: 'Situation',
    pos: 'noun',
    meaning: 'Durum, vaziyet',
    definition: 'The set of conditions that exist at a particular time in a particular place.',
    ipa: '/ˌsɪtʃ.uˈeɪ.ʃən/',
    level: 'intermediate',
    wordFamily: [
      { word: 'situate', pos: 'verb', meaning: 'konumlandırmak' },
      { word: 'situated', pos: 'adj', meaning: 'konumlanmış' }
    ],
    synonyms: [
      { word: 'Circumstances', meaning: 'Koşullar/Durumlar', pos: 'noun' },
      { word: 'Context', meaning: 'Bağlam/Ortam', pos: 'noun' },
      { word: 'State of affairs', meaning: 'Gidişat', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['difficult situation', 'current situation', 'win-win situation'],
    collocationMeanings: {
      'difficult situation': 'zor durum',
      'current situation': 'mevcut durum',
      'win-win situation': 'her iki tarafın da kazandığı durum'
    },
    examples: ['If the situation had been different, their plan might have succeeded.'],
    exampleTranslations: ['Durum farklı olsaydı, planları başarılı olabilirdi.']
  },
  {
    id: 'slight_delay',
    word: 'Slight delay',
    pos: 'phrase',
    meaning: 'Ufak gecikme',
    definition: 'A situation in which a plane, train etc. leaves or arrives a little bit late.',
    ipa: '/slaɪt dɪˈleɪ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Minor delay', meaning: 'Küçük gecikme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Severe delay', meaning: 'Ciddi gecikme', pos: 'phrase' }
    ],
    collocations: ['expect a slight delay', 'cause a slight delay'],
    collocationMeanings: {
      'expect a slight delay': 'ufak bir gecikme beklemek',
      'cause a slight delay': 'küçük bir gecikmeye neden olmak'
    },
    examples: ['There is a slight delay to the flight.'],
    exampleTranslations: ['Uçuşta ufak bir gecikme var.']
  },
  {
    id: 'sophisticated_b1',
    word: 'Sophisticated',
    pos: 'adjective',
    meaning: 'Gelişmiş, sofistike, kültürlü',
    definition: 'Complicated and advanced.',
    ipa: '/səˈfɪs.tɪ.keɪ.tɪd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'sophistication', pos: 'noun', meaning: 'gelişmişlik/kültürlülük' }
    ],
    synonyms: [
      { word: 'Advanced', meaning: 'İleri düzey', pos: 'adj' },
      { word: 'Complex', meaning: 'Karmaşık', pos: 'adj' },
      { word: 'Refined', meaning: 'Nazik/Seçkin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Simple', meaning: 'Basit', pos: 'adj' },
      { word: 'Primitive', meaning: 'İlkel', pos: 'adj' },
      { word: 'Naive', meaning: 'Toy/Saf', pos: 'adj' }
    ],
    collocations: ['sophisticated technology', 'sophisticated taste', 'highly sophisticated'],
    collocationMeanings: {
      'sophisticated technology': 'ileri teknoloji',
      'sophisticated taste': 'seçkin zevk',
      'highly sophisticated': 'son derece gelişmiş'
    },
    examples: ['There is highly sophisticated surveillance equipment.'],
    exampleTranslations: ['Son derece gelişmiş (sofistike) gözetleme ekipmanları var.']
  },
  {
    id: 'sort',
    word: 'Sort',
    pos: 'verb',
    meaning: 'Sıralamak, ayıklamak',
    definition: 'To arrange things in groups or in a particular order, for example by date, importance, size, or colour.',
    ipa: '/sɔːt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'sorter', pos: 'noun', meaning: 'ayıklayıcı' }
    ],
    synonyms: [
      { word: 'Organize', meaning: 'Düzenlemek', pos: 'verb' },
      { word: 'Classify', meaning: 'Sınıflandırmak', pos: 'verb' },
      { word: 'Arrange', meaning: 'Dizmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Disorder', meaning: 'Dağıtmak', pos: 'verb' }
    ],
    collocations: ['sort by size', 'sort out a problem', 'sort through papers'],
    collocationMeanings: {
      'sort by size': 'boyuta göre sıralamak',
      'sort out a problem': 'bir sorunu halletmek',
      'sort through papers': 'kağıtları ayıklamak/gözden geçirmek'
    },
    examples: ['Once the data is collected, the computer will sort it by date.'],
    exampleTranslations: ['Veriler toplandıktan sonra bilgisayar bunları tarihe göre sıralayacaktır.']
  },
  {
    id: 'spectator',
    word: 'Spectator',
    pos: 'noun',
    meaning: 'İzleyici (spor vb. için)',
    definition: 'Someone who watches a public activity or event, especially a sports event.',
    ipa: '/spekˈteɪ.tər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'spectate', pos: 'verb', meaning: 'izlemek (müsabaka)' }
    ],
    synonyms: [
      { word: 'Onlooker', meaning: 'Seyirci', pos: 'noun' },
      { word: 'Viewer', meaning: 'İzleyici', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Participant', meaning: 'Katılımcı', pos: 'noun' },
      { word: 'Player', meaning: 'Oyuncu', pos: 'noun' }
    ],
    collocations: ['crowd of spectators', 'cheering spectators'],
    collocationMeanings: {
      'crowd of spectators': 'izleyici kitlesi',
      'cheering spectators': 'tezahürat yapan seyirciler'
    },
    examples: ['The final game attracted a crowd of over 50,000 spectators.'],
    exampleTranslations: ['Final maçı 50.000’den fazla seyirci çekti.']
  },
  {
    id: 'spot',
    word: 'Spot',
    pos: 'verb',
    meaning: 'Fark etmek, gözüne ilişmek',
    definition: 'To notice someone or something.',
    ipa: '/spɒt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'spotless', pos: 'adj', meaning: 'tertemiz' }
    ],
    synonyms: [
      { word: 'Notice', meaning: 'Fark etmek', pos: 'verb' },
      { word: 'Detect', meaning: 'Tespit etmek', pos: 'verb' },
      { word: 'Identify', meaning: 'Tanımlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Miss', meaning: 'Gözden kaçırmak', pos: 'verb' },
      { word: 'Overlook', meaning: 'Görmemek', pos: 'verb' }
    ],
    collocations: ['spot the difference', 'spot a mistake', 'hard to spot'],
    collocationMeanings: {
      'spot the difference': 'farkı bulmak',
      'spot a mistake': 'bir hatayı fark etmek',
      'hard to spot': 'fark etmesi zor'
    },
    examples: ['Hugh was spotted by local police and had to leave quickly.'],
    exampleTranslations: ['Hugh yerel polis tarafından fark edildi ve hızla oradan ayrılmak zorunda kaldı.']
  },
  {
    id: 'stare',
    word: 'Stare',
    pos: 'verb',
    meaning: 'Dik dik bakmak',
    definition: 'To look at someone or something very directly for a long time.',
    ipa: '/steər/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Gaze', meaning: 'Gözünü dikip bakmak', pos: 'verb' },
      { word: 'Glare', meaning: 'Öfkeyle bakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Glance', meaning: 'Göz atmak', pos: 'verb' },
      { word: 'Peek', meaning: 'Dikizlemek/Kısaca bakmak', pos: 'verb' }
    ],
    collocations: ['stare at someone', 'blank stare', 'stare in amazement'],
    collocationMeanings: {
      'stare at someone': 'birine dik dik bakmak',
      'blank stare': 'boş bakış',
      'stare in amazement': 'hayretle bakmak'
    },
    examples: ["It's rude to stare."],
    exampleTranslations: ['Dik dik bakmak kabalıktır.']
  },
  {
    id: 'start_off',
    word: 'Start off',
    pos: 'phrasal verb',
    meaning: 'Başlamak (bir işe/konuma)',
    definition: 'To begin, especially in a particular way or by doing a particular thing.',
    ipa: '/stɑːt ɒf/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Commence', meaning: 'Başlamak', pos: 'verb' },
      { word: 'Begin', meaning: 'Başlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Finish', meaning: 'Bitirmek', pos: 'verb' },
      { word: 'End', meaning: 'Sonlandırmak', pos: 'verb' }
    ],
    collocations: ['start off with', 'start off small'],
    collocationMeanings: {
      'start off with': 'ile başlamak',
      'start off small': 'küçükten başlamak'
    },
    examples: ['Many store managers started off as sales assistants.'],
    exampleTranslations: ['Birçok mağaza müdürü işe satış asistanı olarak başladı.']
  },
  {
    id: 'sticky',
    word: 'Sticky',
    pos: 'adjective',
    meaning: 'Yapışkan',
    definition: 'A sticky substance sticks to other things.',
    ipa: '/ˈstɪk.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'stick', pos: 'verb', meaning: 'yapışmak/yapıştırmak' }
    ],
    synonyms: [
      { word: 'Adhesive', meaning: 'Yapıştırıcı özellikli', pos: 'adj' },
      { word: 'Gummy', meaning: 'Sakızımsı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Slippery', meaning: 'Kaygan', pos: 'adj' }
    ],
    collocations: ['sticky fingers', 'sticky tape', 'sticky situation'],
    collocationMeanings: {
      'sticky fingers': 'yapışkan parmaklar',
      'sticky tape': 'seloteyp/bant',
      'sticky situation': 'zor/çetrefilli durum'
    },
    examples: ['This honey is very sticky.'],
    exampleTranslations: ['Bu bal çok yapışkan.']
  },
  {
    id: 'store',
    word: 'Store',
    pos: 'verb',
    meaning: 'Depolamak, saklamak',
    definition: 'To keep something in a particular place.',
    ipa: '/stɔːr/',
    level: 'intermediate',
    wordFamily: [
      { word: 'storage', pos: 'noun', meaning: 'depolama' },
      { word: 'store', pos: 'noun', meaning: 'mağaza/depo' }
    ],
    synonyms: [
      { word: 'Stash', meaning: 'Zulalamak/Saklamak', pos: 'verb' },
      { word: 'Keep', meaning: 'Muhafaza etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discard', meaning: 'Atmak', pos: 'verb' }
    ],
    collocations: ['store information', 'store energy', 'store data'],
    collocationMeanings: {
      'store information': 'bilgi depolamak',
      'store energy': 'enerji saklamak',
      'store data': 'veri kaydetmek'
    },
    examples: ['Nuclear waste is currently being stored close to the town.'],
    exampleTranslations: ['Nükleer atıklar şu anda kasabanın yakınında depolanıyor.']
  },
  {
    id: 'suitable_b1',
    word: 'Suitable',
    pos: 'adjective',
    meaning: 'Uygun',
    definition: 'Right for a particular purpose, person or situation.',
    ipa: '/ˈsuː.tə.bəl/',
    level: 'intermediate',
    wordFamily: [
      { word: 'suitability', pos: 'noun', meaning: 'uygunluk' },
      { word: 'suitably', pos: 'adv', meaning: 'uygun şekilde' },
      { word: 'suit', pos: 'verb', meaning: 'yakışmak/uygun olmak' }
    ],
    synonyms: [
      { word: 'Appropriate', meaning: 'Uygun/Yerinde', pos: 'adj' },
      { word: 'Fitting', meaning: 'Münasip', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unsuitable', meaning: 'Uygun olmayan', pos: 'adj' },
      { word: 'Inappropriate', meaning: 'Yersiz', pos: 'adj' }
    ],
    collocations: ['suitable for', 'not suitable', 'highly suitable'],
    collocationMeanings: {
      'suitable for': 'bir şey için uygun',
      'not suitable': 'uygun değil',
      'highly suitable': 'son derece uygun'
    },
    examples: ['The nearest suitable alternative was two miles away.'],
    exampleTranslations: ['En yakın uygun alternatif iki mil uzaktaydı.']
  },
  {
    id: 'suitable_for_b1',
    word: 'Suitable for',
    pos: 'phrase',
    meaning: 'Uygun olmak (-e uygun)',
    definition: 'Right for a particular purpose, person, or situation.',
    ipa: '/ˈsuː.tə.bəl fɔːr/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Ideal for', meaning: 'İçin ideal', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Unfit for', meaning: 'İçin elverişsiz', pos: 'phrase' }
    ],
    collocations: ['suitable for all ages', 'not suitable for children'],
    collocationMeanings: {
      'suitable for all ages': 'her yaşa uygun',
      'not suitable for children': 'çocuklar için uygun değil'
    },
    examples: ["The film wasn't suitable for a younger person."],
    exampleTranslations: ['Film daha genç biri için uygun değildi.']
  },
  {
    id: 'superb',
    word: 'Superb',
    pos: 'adjective',
    meaning: 'Mükemmel, üstün kalite',
    definition: 'Of the highest quality.',
    ipa: '/suːˈpɜːb/',
    level: 'intermediate',
    wordFamily: [
      { word: 'superbly', pos: 'adv', meaning: 'mükemmelce' }
    ],
    synonyms: [
      { word: 'Excellent', meaning: 'Harika', pos: 'adj' },
      { word: 'Magnificent', meaning: 'Görkemli/Mükemmel', pos: 'adj' },
      { word: 'First-rate', meaning: 'Birinci sınıf', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Poor', meaning: 'Kötü/Zayıf', pos: 'adj' },
      { word: 'Mediocre', meaning: 'Vasat', pos: 'adj' }
    ],
    collocations: ['superb performance', 'superb view', 'superb quality'],
    collocationMeanings: {
      'superb performance': 'harika performans',
      'superb view': 'muazzam manzara',
      'superb quality': 'üstün kalite'
    },
    examples: ['The Hotel Gardesana offers superb views of the lake.'],
    exampleTranslations: ['Hotel Gardesana muhteşem göl manzaraları sunmaktadır.']
  },
  {
    id: 'switch_off_completely',
    word: 'Switch off completely',
    pos: 'phrasal verb',
    meaning: 'Kafayı tamamen boşaltmak, irtibatı kesmek',
    definition: 'To stop thinking about something.',
    ipa: '/swɪtʃ ɒf kəmˈpliːt.li/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Unwind', meaning: 'Gevşemek', pos: 'verb' },
      { word: 'Disconnect', meaning: 'Bağlantıyı kesmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Focus', meaning: 'Odaklanmak', pos: 'verb' }
    ],
    collocations: ['need to switch off completely'],
    collocationMeanings: {
      'need to switch off completely': 'zihni tamamen boşaltmaya ihtiyaç duymak'
    },
    examples: ['I went on holiday to switch off completely from writing the book.'],
    exampleTranslations: ['Kitap yazmaktan tamamen uzaklaşmak (kafayı boşaltmak) için tatile çıktım.']
  },
  {
    id: 'take_note_of',
    word: 'Take note of',
    pos: 'idiom',
    meaning: 'Not etmek, dikkate almak',
    definition: 'To notice something and try to remember it because you think it is important.',
    ipa: '/teɪk nəʊt əv/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Pay attention to', meaning: 'Dikkat etmek', pos: 'phrase' },
      { word: 'Observe', meaning: 'Gözlemlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' },
      { word: 'Overlook', meaning: 'Gözden kaçırmak', pos: 'verb' }
    ],
    collocations: ['take note of details', 'please take note'],
    collocationMeanings: {
      'take note of details': 'ayrıntılara dikkat etmek',
      'please take note': 'lütfen dikkate alın'
    },
    examples: ['I took note of what she said.'],
    exampleTranslations: ['Söylediklerini not ettim / dikkate aldım.']
  },
  {
    id: 'take_place',
    word: 'Take place',
    pos: 'idiom',
    meaning: 'Gerçekleşmek, olmak',
    definition: 'To happen.',
    ipa: '/teɪk pleɪs/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Occur', meaning: 'Vuku bulmak', pos: 'verb' },
      { word: 'Happen', meaning: 'Olmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Be cancelled', meaning: 'İptal edilmek', pos: 'phrase' }
    ],
    collocations: ['take place in', 'will take place'],
    collocationMeanings: {
      'take_place in': 'şurada gerçekleşmek',
      'will take place': 'olacak/yapılacak'
    },
    examples: ['The Olympics take place every four years.'],
    exampleTranslations: ['Olimpiyatlar her dört yılda bir gerçekleşir.']
  },
  {
    id: 'task',
    word: 'Task',
    pos: 'noun',
    meaning: 'Görev, iş',
    definition: 'A job that you need to do.',
    ipa: '/tɑːsk/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Assignment', meaning: 'Atama/Ödev', pos: 'noun' },
      { word: 'Duty', meaning: 'Vazife', pos: 'noun' },
      { word: 'Chore', meaning: 'Gündelik iş', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['difficult task', 'complete a task', 'daily task'],
    collocationMeanings: {
      'difficult task': 'zor görev',
      'complete a task': 'bir işi tamamlamak',
      'daily task': 'günlük iş'
    },
    examples: ['My first real task was to prepare for the meeting.'],
    exampleTranslations: ['İlk gerçek görevim toplantı için hazırlanmaktı.']
  },
  {
    id: 'tell_the_difference_between',
    word: 'Tell the difference between',
    pos: 'phrase',
    meaning: 'Arasındaki farkı söylemek/ayırt etmek',
    definition: 'To notice what is different between similar people or things.',
    ipa: '/tel ðə ˈdɪf.ər.əns bɪˈtwiːn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Distinguish', meaning: 'Ayırt etmek', pos: 'verb' },
      { word: 'Differentiate', meaning: 'Farklılaştırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Confuse', meaning: 'Kafası karışmak/Karıştırmak', pos: 'verb' }
    ],
    collocations: ['hard to tell the difference'],
    collocationMeanings: {
      'hard to tell the difference': 'aradaki farkı söylemek zordur'
    },
    examples: ['How do you tell the difference between the kittens?'],
    exampleTranslations: ['Yavrular arasındaki farkı nasıl ayırt ediyorsun?']
  },
  {
    id: 'tempt',
    word: 'Tempt',
    pos: 'verb',
    meaning: 'Aklını çelmek, cezbetmek',
    definition: 'To make you want to do or to have something, especially something that is not good for you.',
    ipa: '/tempt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'temptation', pos: 'noun', meaning: 'ayartma/cezbedici şey' },
      { word: 'tempting', pos: 'adj', meaning: 'cezbedici' }
    ],
    synonyms: [
      { word: 'Entice', meaning: 'Ayartmak', pos: 'verb' },
      { word: 'Allure', meaning: 'Cezbetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Repel', meaning: 'İtmek/Tiksindirmek', pos: 'verb' },
      { word: 'Dissuade', meaning: 'Vazgeçirmek', pos: 'verb' }
    ],
    collocations: ['tempt fate', 'tempted to do', 'tempt someone'],
    collocationMeanings: {
      'tempt fate': 'kaderini zorlamak',
      'tempted to do': 'bir şeyi yapmaya meyilli olmak',
      'tempt someone': 'birini cezbetmek'
    },
    examples: ['The shop windows were lit, tempting the late shoppers.'],
    exampleTranslations: ['Mağaza vitrinleri aydınlatılmıştı, geç saatte alışveriş yapanların aklını çeliyordu.']
  },
  {
    id: 'think_outside_the_box',
    word: 'Think outside the box',
    pos: 'idiom',
    meaning: 'Kalıpların dışında düşünmek, yaratıcı olmak',
    definition: 'To think of an unusual idea.',
    ipa: '/θɪŋk ˌaʊtˈsaɪd ðə bɒks/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Innovate', meaning: 'Yenilik yapmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Follow convention', meaning: 'Geleneği takip etmek', pos: 'phrase' }
    ],
    collocations: ['ability to think outside the box'],
    collocationMeanings: {
      'ability to think outside the box': 'yaratıcı düşünebilme becerisi'
    },
    examples: ['We are getting nowhere, we need to think outside the box.'],
    exampleTranslations: ['Hiçbir yere varamıyoruz, kalıpların dışında düşünmemiz gerekiyor.']
  },
  {
    id: 'throw_away',
    word: 'Throw away',
    pos: 'phrasal verb',
    meaning: 'Atmak (çöpe), fırlatıp atmak',
    definition: 'To get rid of something that you know longer want, for example by putting it in a dustbin.',
    ipa: '/θrəʊ əˈweɪ/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Discard', meaning: 'Elden çıkarmak', pos: 'verb' },
      { word: 'Dispose of', meaning: 'İmha etmek/Atmak', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Keep', meaning: 'Tutmak', pos: 'verb' },
      { word: 'Save', meaning: 'Biriktirmek/Saklamak', pos: 'verb' }
    ],
    collocations: ['throw away rubbish', 'throw away a chance', 'throw away money'],
    collocationMeanings: {
      'throw away rubbish': 'çöp atmak',
      'throw away a chance': 'bir şansı tepmek',
      'throw away money': 'parayı sokağa atmak'
    },
    examples: ['Have you thrown the papers away?'],
    exampleTranslations: ['Kağıtları çöpe attın mı?']
  },
  {
    id: 'tidy_up',
    word: 'Tidy up',
    pos: 'phrasal verb',
    meaning: 'Ortalığı toplamak, düzenlemek',
    definition: 'To put things back in the right places.',
    ipa: '/ˈtaɪ.di ʌp/',
    level: 'intermediate',
    wordFamily: [
      { word: 'tidy', pos: 'adj', meaning: 'düzenli' }
    ],
    synonyms: [
      { word: 'Neaten', meaning: 'Düzenlemek', pos: 'verb' },
      { word: 'Clean up', meaning: 'Temizlemek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Clutter', meaning: 'Dağıtmak', pos: 'verb' },
      { word: 'Mess up', meaning: 'Batırmak', pos: 'phrasal verb' }
    ],
    collocations: ['tidy up a room', 'tidy up a mess'],
    collocationMeanings: {
      'tidy up a room': 'odayı toplamak',
      'tidy up a mess': 'dağınıklığı toplamak'
    },
    examples: ['Could you help me tidy up?'],
    exampleTranslations: ['Ortalığı toplamama yardım edebilir misin?']
  },
  {
    id: 'tiny',
    word: 'Tiny',
    pos: 'adjective',
    meaning: 'Küçücük, minik',
    definition: 'Extremely small.',
    ipa: '/ˈtaɪ.ni/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Minute', meaning: 'Çok küçük', pos: 'adj' },
      { word: 'Microscopic', meaning: 'Mikroskobik', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Huge', meaning: 'Kocaman', pos: 'adj' },
      { word: 'Enormous', meaning: 'Muazzam', pos: 'adj' }
    ],
    collocations: ['tiny amount', 'tiny bit', 'tiny detail'],
    collocationMeanings: {
      'tiny amount': 'küçük miktar',
      'tiny bit': 'çok azcık',
      'tiny detail': 'küçük bir ayrıntı'
    },
    examples: ['The floor was covered in tiny bits of paper.'],
    exampleTranslations: ['Yer küçücük kağıt parçalarıyla doluydu.']
  },
  {
    id: 'treat_yourself',
    word: 'Treat yourself',
    pos: 'phrase',
    meaning: 'Kendini şımartmak, kendine ısmarlamak',
    definition: 'To behave towards yourself in a particular way.',
    ipa: '/triːt jɔːˈself/',
    level: 'intermediate',
    wordFamily: [
      { word: 'treat', pos: 'noun/verb', meaning: 'ikram/davranmak' }
    ],
    synonyms: [
      { word: 'Pamper yourself', meaning: 'Kendini pohpohlamak', pos: 'phrase' },
      { word: 'Splurge', meaning: 'Savurganlık yapmak/Şımarmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['treat yourself to something'],
    collocationMeanings: {
      'treat yourself to something': 'kendine bir şey ısmarlamak'
    },
    examples: ["Why don't you treat yourself to a holiday."],
    exampleTranslations: ['Neden kendine bir tatil ısmarlamıyorsun (kendini şımartmıyorsun).']
  },
  {
    id: 'trick',
    word: 'Trick',
    pos: 'verb',
    meaning: 'Kandırmak, oyun oynamak',
    definition: 'To make someone believe something that is not true.',
    ipa: '/trɪk/',
    level: 'intermediate',
    wordFamily: [
      { word: 'trickery', pos: 'noun', meaning: 'hilekârlık' },
      { word: 'tricky', pos: 'adj', meaning: 'çetrefilli' }
    ],
    synonyms: [
      { word: 'Deceive', meaning: 'Aldatmak', pos: 'verb' },
      { word: 'Fool', meaning: 'Kandırmak', pos: 'verb' },
      { word: 'Cheat', meaning: 'Dolandırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Be honest', meaning: 'Dürüst olmak', pos: 'phrase' }
    ],
    collocations: ['trick someone into', 'play a trick', 'confidence trick'],
    collocationMeanings: {
      'trick someone into': 'birini yapmaya kandırmak',
      'play a trick': 'oyun oynamak (kandırmak)',
      'confidence trick': 'dolandırıcılık'
    },
    examples: ["I suddenly realized that I'd been tricked."],
    exampleTranslations: ['Aniden kandırıldığımı fark ettim.']
  },
  {
    id: 'trophy',
    word: 'Trophy',
    pos: 'noun',
    meaning: 'Kupa, ödül',
    definition: 'A large silver cup given as a prize to the winner of a competition.',
    ipa: '/ˈtrəʊ.fi/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Award', meaning: 'Ödül', pos: 'noun' },
      { word: 'Cup', meaning: 'Kupa', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['win a trophy', 'lift a trophy', 'championship trophy'],
    collocationMeanings: {
      'win a trophy': 'kupa kazanmak',
      'lift a trophy': 'kupayı kaldırmak',
      'championship trophy': 'şampiyonluk kupası'
    },
    examples: ['Mexico has not lifted the trophy since 1975.'],
    exampleTranslations: ['Meksika 1975’ten beri kupayı kaldırmadı.']
  },
  {
    id: 'try_out',
    word: 'Try out',
    pos: 'phrasal verb',
    meaning: 'Denemek, test etmek',
    definition: 'To test someone or something to see what they are like or whether they are suitable.',
    ipa: '/traɪ aʊt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Test', meaning: 'Test etmek', pos: 'verb' },
      { word: 'Trial', meaning: 'Denemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['try out a new plan', 'try out for a team'],
    collocationMeanings: {
      'try out a new plan': 'yeni bir planı denemek',
      'try out for a team': 'takım seçmelerine girmek'
    },
    examples: ['John hopes to try out his new running shoes this weekend.'],
    exampleTranslations: ['John bu hafta sonu yeni koşu ayakkabılarını denemeyi umuyor.']
  },
  {
    id: 'turn_dream_into_reality',
    word: 'Turn a dream into reality',
    pos: 'phrase',
    meaning: 'Hayali gerçeğe dönüştürmek',
    definition: 'To make something happen that you have always hoped for.',
    ipa: '/tɜːn ə driːm ˈɪn.tu riˈæl.ə.ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Materialize', meaning: 'Gerçekleşmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['work to turn a dream into reality'],
    collocationMeanings: {
      'work to turn a dream into reality': 'hayali gerçekleştirmek için çalışmak'
    },
    examples: ['She turned her dream of living in Paris into a reality.'],
    exampleTranslations: ['Paris’te yaşama hayalini gerçeğe dönüştürdü.']
  },
  {
    id: 'turn_down',
    word: 'Turn down',
    pos: 'phrasal verb',
    meaning: 'Kısmak veya Reddetmek',
    definition: 'To make something lower/quieter OR to refuse an offer.',
    ipa: '/tɜːn daʊn/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reject', meaning: 'Reddetmek', pos: 'verb' },
      { word: 'Decline', meaning: 'Geri çevirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Accept', meaning: 'Kabul etmek', pos: 'verb' },
      { word: 'Turn up', meaning: 'Sesi açmak', pos: 'phrasal verb' }
    ],
    collocations: ['turn down the volume', 'turn down an offer', 'turn down the heat'],
    collocationMeanings: {
      'turn down the volume': 'sesi kısmak',
      'turn down an offer': 'teklifi reddetmek',
      'turn down the heat': 'ısıyı kısmak'
    },
    examples: ['Can you turn the music down a bit?'],
    exampleTranslations: ['Müziğin sesini biraz kısabilir misin?']
  },
  {
    id: 'turn_up',
    word: 'Turn up',
    pos: 'phrasal verb',
    meaning: 'Çıkagelmek, varmak',
    definition: 'To arrive, often unexpectedly or without making an appointment.',
    ipa: '/tɜːn ʌp/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Arrive', meaning: 'Varmak', pos: 'verb' },
      { word: 'Show up', meaning: 'Ortaya çıkmak', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Depart', meaning: 'Ayrılmak', pos: 'verb' }
    ],
    collocations: ['turn up late', 'unexpectedly turn up', 'turn up the volume'],
    collocationMeanings: {
      'turn up late': 'geç gelmek',
      'unexpectedly turn up': 'beklenmedik şekilde ortaya çıkmak',
      'turn up the volume': 'sesi açmak'
    },
    examples: ['There is no need to book – just turn up on the night.'],
    exampleTranslations: ['Rezervasyon yapmaya gerek yok – o gece çıkagelmeniz yeterli.']
  },
  {
    id: 'typical_of',
    word: 'Typical of',
    pos: 'adjective',
    meaning: 'Tipik, -e özgü',
    definition: 'Behaving in the way that someone or something usually behaves.',
    ipa: '/ˈtɪp.ɪ.kəl əv/',
    level: 'intermediate',
    wordFamily: [
      { word: 'typically', pos: 'adv', meaning: 'tipik olarak' }
    ],
    synonyms: [
      { word: 'Characteristic of', meaning: 'Karakteristiği olan', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Unusual', meaning: 'Sıradışı', pos: 'adj' },
      { word: 'Atypical', meaning: 'Tipik olmayan', pos: 'adj' }
    ],
    collocations: ['typical of someone', 'typical behavior', 'typical example'],
    collocationMeanings: {
      'typical of someone': 'birine özgü',
      'typical behavior': 'tipik davranış',
      'typical example': 'tipik bir örnek'
    },
    examples: ['The story is typical of this newspaper.'],
    exampleTranslations: ['Bu hikaye bu gazeteye özgüdür (onun tarzıdır).']
  },
  {
    id: 'underpaid',
    word: 'Underpaid',
    pos: 'adjective',
    meaning: 'Düşük ücretli, hakkı ödenmeyen',
    definition: 'Not earning enough money for work that you do.',
    ipa: '/ˌʌn.dəˈpeɪd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pay', pos: 'verb', meaning: 'ödemek' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Overpaid', meaning: 'Hakkından fazla alan', pos: 'adj' }
    ],
    collocations: ['underpaid workers', 'feel underpaid'],
    collocationMeanings: {
      'underpaid workers': 'düşük maaşlı işçiler',
      'feel underpaid': 'düşük ücret aldığını hissetmek'
    },
    examples: ['He works very hard but is underpaid.'],
    exampleTranslations: ['Çok sıkı çalışıyor ama düşük ücret alıyor.']
  },
  {
    id: 'unique',
    word: 'Unique',
    pos: 'adjective',
    meaning: 'Eşsiz, benzersiz',
    definition: 'Not the same as anything or anyone else.',
    ipa: '/juːˈniːk/',
    level: 'intermediate',
    wordFamily: [
      { word: 'uniquely', pos: 'adv', meaning: 'benzersiz bir şekilde' }
    ],
    synonyms: [
      { word: 'Distinctive', meaning: 'Ayırt edici', pos: 'adj' },
      { word: 'One-of-a-kind', meaning: 'Türünün tek örneği', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Common', meaning: 'Yaygın', pos: 'adj' },
      { word: 'Ordinary', meaning: 'Sıradan', pos: 'adj' }
    ],
    collocations: ['totally unique', 'unique style', 'unique opportunity'],
    collocationMeanings: {
      'totally unique': 'tamamen benzersiz',
      'unique style': 'eşsiz stil',
      'unique opportunity': 'eşsiz bir fırsat'
    },
    examples: ['They have a totally unique approach to staff training.'],
    exampleTranslations: ['Personel eğitimi konusunda tamamen benzersiz bir yaklaşımları var.']
  },
  {
    id: 'use_up',
    word: 'Use up',
    pos: 'phrasal verb',
    meaning: 'Tüketmek, bitirmek',
    definition: 'To use all of a supply of something.',
    ipa: '/juːz ʌp/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Exhaust', meaning: 'Tüketmek', pos: 'verb' },
      { word: 'Consume', meaning: 'Bitirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Save', meaning: 'Biriktirmek', pos: 'verb' }
    ],
    collocations: ['use up energy', 'use up all the resources', 'use up time'],
    collocationMeanings: {
      'use up energy': 'enerjiyi tüketmek',
      'use up all the resources': 'tüm kaynakları bitirmek',
      'use up time': 'vakit harcamak'
    },
    examples: ['We have used up all the sugar so you will need to get some more.'],
    exampleTranslations: ['Tüm şekeri bitirdik, bu yüzden biraz daha alman gerekecek.']
  },
  {
    id: 'warn',
    word: 'Warn',
    pos: 'verb',
    meaning: 'Uyarmak, ikaz etmek',
    definition: 'To tell someone that something bad will happen if they do something.',
    ipa: '/wɔːn/',
    level: 'intermediate',
    wordFamily: [
      { word: 'warning', pos: 'noun', meaning: 'uyarı' }
    ],
    synonyms: [
      { word: 'Caution', meaning: 'Sakındırmak', pos: 'verb' },
      { word: 'Alert', meaning: 'Alarma geçirmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['warn someone against', 'warn about', 'strongly warn'],
    collocationMeanings: {
      'warn someone against': 'birini şeye karşı uyarmak',
      'warn about': 'hakkında uyarmak',
      'strongly warn': 'şiddetle uyarmak'
    },
    examples: ['I warned you not to go to that party last night.'],
    exampleTranslations: ['Dün gece o partiye gitmemen konusunda seni uyarmıştım.']
  },
  {
    id: 'waste_b1',
    word: 'Waste',
    pos: 'noun',
    meaning: 'İsraf, atık, boşa harcama',
    definition: 'Failure to use something valuable in an effective way.',
    ipa: '/weɪst/',
    level: 'intermediate',
    wordFamily: [
      { word: 'wasteful', pos: 'adj', meaning: 'savurgan' }
    ],
    synonyms: [
      { word: 'Loss', meaning: 'Kayıp', pos: 'noun' },
      { word: 'Squander', meaning: 'Harcayıp bitirme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Saving', meaning: 'Tasarruf', pos: 'noun' }
    ],
    collocations: ['waste of time', 'waste of money', 'toxic waste'],
    collocationMeanings: {
      'waste of time': 'zaman kaybı',
      'waste of money': 'para israfı',
      'toxic waste': 'toksik atık'
    },
    examples: ['All this uneaten food – what a waste!'],
    exampleTranslations: ['Tüm bu yenmemiş yiyecekler – ne israf!']
  },
  {
    id: 'watery',
    word: 'Watery',
    pos: 'adjective',
    meaning: 'Sulu, tatsız, kıvamsız',
    definition: 'Containing a lot of water and having a weak taste.',
    ipa: '/ˈwɔː.tər.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'water', pos: 'noun', meaning: 'su' }
    ],
    synonyms: [
      { word: 'Diluted', meaning: 'Sulandırılmış', pos: 'adj' },
      { word: 'Thin', meaning: 'İnce/Sulu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Thick', meaning: 'Koyu/Kıvamlı', pos: 'adj' },
      { word: 'Rich', meaning: 'Zengin/Yoğun', pos: 'adj' }
    ],
    collocations: ['watery soup', 'watery eyes', 'pale and watery'],
    collocationMeanings: {
      'watery soup': 'sulu/tatsız çorba',
      'watery eyes': 'yaşlı/nemli gözler',
      'pale and watery': 'soluk ve sulu'
    },
    examples: ['They sell very watery coffee.'],
    exampleTranslations: ['Çok sulu (tatsız) kahve satıyorlar.']
  },
  {
    id: 'whisper',
    word: 'Whisper',
    pos: 'verb',
    meaning: 'Fısıldamak',
    definition: 'To say something very quietly so that other people cannot hear you.',
    ipa: '/ˈwɪs.pər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'whisper', pos: 'noun', meaning: 'fısıltı' }
    ],
    synonyms: [
      { word: 'Mutter', meaning: 'Mırıldanmak', pos: 'verb' },
      { word: 'Murmur', meaning: 'Uğuldamak/Mırıldanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Shout', meaning: 'Bağırmak', pos: 'verb' },
      { word: 'Yell', meaning: 'Haykırmak', pos: 'verb' }
    ],
    collocations: ['whisper softly', 'stage whisper', 'in a whisper'],
    collocationMeanings: {
      'whisper softly': 'yumuşakça fısıldamak',
      'stage whisper': 'sahne fısıltısı',
      'in a whisper': 'fısıltı ile'
    },
    examples: ["'When can I see you again?' he whispered softly."],
    exampleTranslations: ["'Seni tekrar ne zaman görebilirim?' diye fısıldadı yumuşakça."]
  },
  {
    id: 'wonder',
    word: 'Wonder',
    pos: 'verb',
    meaning: 'Merak etmek',
    definition: 'To think about something because you want to know more facts or details about it.',
    ipa: '/ˈwʌn.dər/',
    level: 'intermediate',
    wordFamily: [
      { word: 'wonderful', pos: 'adj', meaning: 'harika' },
      { word: 'wonderfully', pos: 'adv', meaning: 'harika bir şekilde' }
    ],
    synonyms: [
      { word: 'Ponder', meaning: 'Üzerine düşünmek', pos: 'verb' },
      { word: 'Query', meaning: 'Sorgulamak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['wonder why', 'no wonder', 'wonder if'],
    collocationMeanings: {
      'wonder why': 'nedenini merak etmek',
      'no wonder': 'şaşmamalı',
      'wonder if': 'acaba ... mı diye merak etmek'
    },
    examples: ["'How did they find out?' she wondered."],
    exampleTranslations: ["'Nasıl öğrendiler?' diye merak etti."]
  },
  {
    id: 'work_out',
    word: 'Work out',
    pos: 'phrasal verb',
    meaning: 'Çözmek veya Antrenman yapmak',
    definition: 'To find an answer by thinking carefully OR to do physical exercise.',
    ipa: '/wɜːk aʊt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Solve', meaning: 'Çözmek', pos: 'verb' },
      { word: 'Exercise', meaning: 'Egzersiz yapmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['work out a problem', 'work out at the gym', 'work out well'],
    collocationMeanings: {
      'work out a problem': 'bir sorunu çözmek',
      'work out at the gym': 'spor salonunda antrenman yapmak',
      'work out well': 'sonucun iyi bitmesi/iyi gitmek'
    },
    examples: ["I can't work out what to do."],
    exampleTranslations: ['Ne yapacağımı çözemiyorum.']
  },
  {
    id: 'work_towards_a_goal',
    word: 'Work towards a goal',
    pos: 'phrase',
    meaning: 'Bir hedefe yönelik çalışmak',
    definition: 'To do things that help you to make progress towards something you want to achieve.',
    ipa: '/wɜːk təˈwɔːrdz ə ɡəʊl/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Pursue a goal', meaning: 'Hedef peşinde koşmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['hard work towards a goal'],
    collocationMeanings: {
      'hard work towards a goal': 'bir hedef doğrultusunda sıkı çalışma'
    },
    examples: ['Daniel is working towards his goal of becoming a chef.'],
    exampleTranslations: ['Daniel aşçı olma hedefine doğru çalışıyor.']
  },


  // --- UPPER-INTERMEDIATE (B2) ---

  // --- UNIT 1: FEELINGS & PERSONALITY ---
  {
    id: 'awkward',
    word: 'Awkward',
    pos: 'adj',
    meaning: 'Garip, beceriksiz, rahatsız edici',
    definition: 'Not comfortable, relaxed, or confident; difficult to deal with.',
    ipa: '/ˈɔːk.wəd/',
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
    ipa: '/ˈdev.ə.steɪ.tɪd/',
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
    ipa: '/dɪsˈɡʌs.tɪd/',
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
    ipa: '/frʌsˈtreɪ.tɪd/',
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
    ipa: '/ˈfjʊə.ri.əs/',
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
    ipa: '/ˈhɒr.ɪ.faɪd/',
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
    ipa: '/ˌəʊ.vəˈwelmd/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'overwhelm', pos: 'verb', meaning: 'boğmak, ezmek, bunaltmak' },
      { word: 'overwhelming', pos: 'adj', meaning: 'ezici, karşı konulamaz' }
    ],
    synonyms: [
      { word: 'Inundated', meaning: 'Yük altında kalmış', pos: 'adj' },
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
    ipa: '/æmˈbɪʃ.əs/',
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
    ipa: '/ˈær.ə.ɡənt/',
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
    ipa: '/dɪˈtɜː.mɪnd/',
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
    ipa: '/ˌdaʊn.tuˈɜːθ/',
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
    ipa: '/ˌiː.ziˈɡəʊ.ɪŋ/',
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
    ipa: '/ˈflek.sə.bəl/',
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
    ipa: '/ˈlɔɪ.əl/',
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
    word: 'Naive',
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
    collocations: ['politically naive', 'somewhat naive', 'naive belief'],
    collocationMeanings: {
      'politically naive': 'siyasi açıdan toy',
      'somewhat naive': 'biraz safça',
      'naive belief': 'safça inanış'
    },
    examples: ["Jim's so naive he'll believe whatever anyone tells him."],
    exampleTranslations: ['Jim o kadar saf ki kim ona ne derse inanır.']
  },
  {
    id: 'open_minded',
    word: 'Open-minded',
    pos: 'adj',
    meaning: 'Açık fikirli',
    definition: 'Willing to consider new ideas.',
    ipa: '/ˌəʊ.pənˈmaɪn.dɪd/',
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
      'keep an open mind': 'Önyargısız olmak'
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
    ipa: '/ˌɒp.tɪˈmɪs.tɪk/',
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
    ipa: '/ˈpæʃ.ən.ət/',
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
    ipa: '/ˌpes.ɪˈmɪs.tɪk/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'pessimism', pos: 'noun', meaning: 'karamsarlık' },
      { word: 'pessimist', pos: 'noun', meaning: 'karamsar kişi' }
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
    ipa: '/ˌselfˈsen.təd/',
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
    ipa: '/ˈsen.sɪ.tɪv/',
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
    ipa: '/ˈstʌb.ən/',
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
    ipa: '/ˈwɪt.i/',
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
    ipa: '/ˈær.ə.ɡəns/',
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
    ipa: '/ˈkɒn.fɪ.dəns/',
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
    ipa: '/dɪˌtɜː.mɪˈneɪ.ʃən/',
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
    ipa: '/ˈlɔɪ.əl.ti/',
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
    ipa: '/ˈɒp.tɪ.mɪ.zəm/',
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
    ipa: '/rɪˌspɒn.sɪˈbɪl.ə.ti/',
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
  // --- UNIT 2: HEALTH & FITNESS ---
  {
    id: 'anxiety',
    word: 'Anxiety',
    pos: 'noun',
    meaning: 'Kaygı, endişe',
    definition: 'The feeling of being very worried that something bad will happen.',
    ipa: '/æŋˈzaɪ.ə.ti/',
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
    ipa: '/ˈkæl.ər.i/',
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
    ipa: '/kəˈles.tər.ɒl/',
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
    ipa: '/dɪˈpreʃ.ən/',
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
    ipa: '/ˈlev.əl əv ˈfɪt.nəs/',
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
    ipa: '/ˈlaɪf ɪkˌspek.tən.si/',
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
    ipa: '/ˈmen.təl helθ/',
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
    ipa: '/əʊˈbiː.sə.ti/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'obese', pos: 'adj', meaning: 'obez' }
    ],
    synonyms: [
      { word: 'Corpulence', meaning: 'Gvdelilik/Şişmanlık', pos: 'noun' },
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
    ipa: '/ˈfɪz.ɪ.kəl/',
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
    ipa: '/ˈprəʊ.sest fuːdz/',
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
    ipa: '/sləʊ ði ˈeɪ.dʒɪŋ ˈprəʊ.ses/',
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
    ipa: '/ədˈmɪt.ɪd.li/',
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
    examples: ['I m sure it was her although, admittedly, she was wearing a different coat.'],
    exampleTranslations: ['Eminim oydu, gerçi kabul etmek gerekir ki farklı bir palto giyiyordu.']
  },
  {
    id: 'apparently',
    word: 'Apparently',
    pos: 'adverb',
    meaning: 'Görünüşe göre, anlaşılan',
    definition: 'Based only on what you have heard, not on what you are certain is true.',
    ipa: '/əˈpær.ənt.li/',
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
    ipa: '/ˈfræŋ.kli/',
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
    ipa: '/ˈmɪə.li/',
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
    ipa: '/ˈnætʃ.ər.əl.i/',
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
    ipa: '/ˈsæd.li/',
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
    ipa: '/ˈsɪm.pli/',
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
    ipa: '/ʌnˈdaʊ.tɪd.li/',
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
  {
    id: 'absolutely_ridiculous',
    word: 'Absolutely ridiculous',
    pos: 'adj phrase',
    meaning: 'Tamamen saçma',
    definition: 'Very silly or unreasonable and deserving to be laughed at.',
    ipa: '/ˌæb.sə.luːt.li rɪˈdɪk.jə.ləs/',
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
    ipa: '/ˈbɪt.ə.li ˌdɪs.əˈpɔɪn.tɪd/',
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
    ipa: '/ˈdiːp.li kənˈsɜːnd/',
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
    ipa: '/ˈhaɪ.li ˈlaɪ.kli/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Very probable', meaning: 'çok olası', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Highly unlikely', meaning: 'çok düşük ihtimal', pos: 'adj' }
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
    ipa: '/rɪˈdɪk.jə.ləs.li ˈiː.zi/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Effortless', meaning: 'Zahmetsiz', pos: 'adj' },
      { word: "Child's play", meaning: 'Çocuk oyuncağı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Incredibly difficult', meaning: 'inanılmaz zor', pos: 'adj' },
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
  {
    id: 'crackle',
    word: 'Crackle',
    pos: 'verb',
    meaning: 'Çatırdamak',
    definition: 'To make continuous short sounds like wood burning.',
    ipa: '/ˈkræk.əl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'crackling', pos: 'noun', meaning: 'çatırtı' }
    ],
    synonyms: [
      { word: 'Snap', meaning: 'çıtırdamak', pos: 'verb' },
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
    exampleTranslations: ['Onlar oturup konuşurken ateş hafifçe çatırdayırdı.']
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
      'creak open': 'gıcırdayarak açılmak'
    },
    examples: ['The old wooden chair creaked as he sat down.'],
    exampleTranslations: ['Eski tahta sandalye o oturduğunda gıcırdadı.']
  },
  {
    id: 'crunch',
    word: 'Crunch',
    pos: 'verb',
    meaning: 'Çatırdamak, hışırdamak (ayak altındaki ses)',
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
      { word: 'Purr', meaning: 'Mırıldamak', pos: 'verb' }
    ],
    collocations: ['stomach growling', 'low growl', 'growl at'],
    collocationMeanings: {
      'stomach growling': 'karnın guruldaması',
      'low growl': 'alçak sesli hırıltı',
      'growl at': '...a hırıldamak'
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
    ipa: '/ˈrʌm.bəl/',
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
      { word: 'Shriek', meaning: 'çığlık atmak', pos: 'verb' },
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
      { word: 'Crack', meaning: 'çatlatmak', pos: 'verb' },
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
    ipa: '/ˈtrɪk.əl/',
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
    ipa: '/wɜːr/',
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
    ipa: '/tɔːk ˈəʊ.vər/',
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
  {
    id: 'anxious_about',
    word: 'Anxious about',
    pos: 'adj + prep',
    meaning: 'Hakkında endişeli',
    definition: 'Worried about something in particular.',
    ipa: '/ˈæŋk.ʃəs əˌbaʊt/',
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
    ipa: '/əˈweər əv/',
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
    ipa: '/ˈen.vi.əs əv/',
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
    ipa: '/ˈsen.sɪ.tɪv təˈwɔːrdz/',
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
  {
    id: 'congratulations_on',
    word: 'Congratulations on',
    pos: 'noun + prep',
    meaning: '...dan dolayı tebrikler',
    definition: 'Used for telling someone that you are pleased about their success or a special event.',
    ipa: '/kənˌɡrætʃ.əˈleɪ.ʃənz ɒn/',
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
      'online course in': '... üzerine online kurs',
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
    ipa: '/ˈpleɪ.sɪz ɪn/',
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
    ipa: '/ˌpɒs.əˈbɪl.ə.ti əv/',
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
    ipa: '/taɪm fɔːr/',
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
  {
    id: 'balance',
    word: 'Balance',
    pos: 'noun/verb',
    meaning: 'Denge, dengelemek',
    definition: 'A situation where features are equal; to create or preserve a correct relationship.',
    ipa: '/ˈbæl.əns/',
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
    ipa: '/ˈben.ɪ.fɪt/',
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
    ipa: '/ˈtʃæl.ɪndʒ/',
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
    ipa: '/ˈɪn.flu.əns/',
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
    ipa: '/prəˈdjuːs/ (v) /ˈprɒd.juːs/ (n)',
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
  {
    id: 'considerably',
    word: 'Considerably',
    pos: 'adverb',
    meaning: 'Epey, önemli ölçüde',
    definition: 'By a large amount or to a great degree.',
    ipa: '/kənˈsɪd.ər.ə.bli/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'considerable', pos: 'adj', meaning: 'kayda değer' }
    ],
    synonyms: [
      { word: 'Significantly', meaning: 'önemli ölçüde', pos: 'adverb' },
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
    ipa: '/dɪˈzɑː.strəs.li/',
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
    ipa: '/ɪnˈtaɪə.li/',
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
    ipa: '/ɪˈspeʃ.əl.i/',
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
    exampleTranslations: ['Hava sıcak, özellikle yazın.']
  },
  {
    id: 'extremely',
    word: 'Extremely',
    pos: 'adverb',
    meaning: 'Aşırı derecede, son derece',
    definition: 'To a very high degree; used for emphasising an adjective.',
    ipa: '/ɪkˈstriːm.li/',
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
    ipa: '/ˈfɜːm.li/',
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
    ipa: '/ˈɡreɪt.li/',
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
    ipa: '/ɪnˈkred.ə.bli/',
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
    ipa: '/ɪnˈtens.li/',
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
    exampleTranslations: ['Bu yoğun derecede rekabetçi bir sektördür.']
  },
  {
    id: 'significantly',
    word: 'Significantly',
    pos: 'adverb',
    meaning: 'Önemli ölçüde',
    definition: 'In a way that is large or important enough to be noticed.',
    ipa: '/sɪɡˈnɪf.ɪ.kənt.li/',
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
    ipa: '/ˈtəʊ.təl.i/',
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
    ipa: '/ˈʌt.əl.i/',
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
    ipa: '/ˈwaɪd.li/',
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
  {
    id: 'compost_heap',
    word: 'Compost heap',
    pos: 'noun',
    meaning: 'Gübre yığını, kompost yığını',
    definition: 'A pile of decaying plants and food waste that is used to improve the soil.',
    ipa: '/ˈkɒm.pɒst hiːp/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'compost', pos: 'verb/noun', meaning: 'gübrelemek/gübre' }
    ],
    synonyms: [
      { word: 'Fertilizer pile', meaning: 'Gübre yığını', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['build a compost heap', 'garden compost heap'],
    collocationMeanings: {
      'build a compost heap': 'kompost yığını oluşturmak',
      'garden compost heap': 'bahçe gübre yığını'
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
    ipa: '/ˌdʌb.əl ˈɡleɪ.zɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'glaze', pos: 'verb', meaning: 'cam takmak' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Single glazing', meaning: 'Tek cam', pos: 'noun' }
    ],
    collocations: ['install double glazing', 'double glazing unit'],
    collocationMeanings: {
      'install double glazing': 'çift cam taktırtmak',
      'double glazing unit': 'çift cam ünitesi'
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
    ipa: '/ˌen.ə.dʒi ɪˈfɪʃ.ənt ˈlaɪt.bʌlb/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'LED bulb', meaning: 'LED ampul', pos: 'noun' }],
    antonyms: [],
    collocations: ['install lightbulbs', 'energy-efficient lighting'],
    collocationMeanings: {
      'install lightbulbs': 'ampul takmak',
      'energy-efficient lighting': 'enerji verimli aydınlatma'
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
    ipa: '/ˌɪn.sjəˈleɪ.ʃən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'insulate', pos: 'verb', meaning: 'yalıtmak' }
    ],
    synonyms: [
      { word: 'Lagging', meaning: 'Kaplama/Yalıtım', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['loft insulation', 'thermal insulation'],
    collocationMeanings: {
      'loft insulation': 'çatı yalıtımı',
      'thermal insulation': 'ısı yalıtımı'
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
    ipa: '/ˈsmɑːt ˌmiː.tər/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['install a smart meter', 'read a smart meter'],
    collocationMeanings: {
      'install a smart meter': 'akıllı sayaç taktırmak',
      'read a smart meter': 'akıllı sayaç okumak'
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
    ipa: '/ˈsəʊ.lə ˌpæn.əl/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['install solar panels', 'solar panel system'],
    collocationMeanings: {
      'install solar panels': 'güneş paneli kurmak',
      'solar panel system': 'güneş paneli sistemi'
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
    ipa: '/ˈθɜː.mə.stæt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['adjust thermostat', 'set thermostat'],
    collocationMeanings: {
      'adjust thermostat': 'termostatı ayarlamak',
      'set thermostat': 'termostatı kurmak'
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
    ipa: '/ˌʌn.dəˈflɔː ˈhiː.tɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['electric underfloor heating', 'install heating'],
    collocationMeanings: {
      'electric underfloor heating': 'elektrikli yerden ısıtma',
      'install heating': 'ısıtma sistemi kurmak'
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
    ipa: '/ˈwɔː.tə bʌt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Rain barrel', meaning: 'Yağmur varili', pos: 'noun' }],
    antonyms: [],
    collocations: ['garden water butt', 'plastic water butt'],
    collocationMeanings: {
      'garden water butt': 'bahçe yağmur fıçısı',
      'plastic water butt': 'plastik su fıçısı'
    },
    examples: ['We use water collected in the water butt for the garden.'],
    exampleTranslations: ['Bahçe için yağmur suyu fıçısında biriken suyu kullanıyoruz.']
  },
  {
    id: 'wind_turbine',
    word: 'Wind turbine',
    pos: 'noun',
    meaning: 'Rüzgar türbini',
    definition: 'A turbine rotated by the wind to generate electricity.',
    ipa: '/ˈwɪnd ˌtɜː.baɪn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['offshore wind turbine', 'giant wind turbine'],
    collocationMeanings: {
      'offshore wind turbine': 'deniz üstü rüzgar türbini',
      'giant wind turbine': 'dev rüzgar türbini'
    },
    examples: ['I might get a wind turbine installed on the roof.'],
    exampleTranslations: ['Çatıya bir rüzgar türbini kurdurabilirim.']
  },
  {
    id: 'commercial',
    word: 'Commercial',
    pos: 'adj',
    meaning: 'Ticari',
    definition: 'Concerned with or engaged in commerce/business.',
    ipa: '/kəˈmɜː.ʃəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'commerce', pos: 'noun', meaning: 'ticaret' }
    ],
    synonyms: [
      { word: 'Business-related', meaning: 'İşle ilgili', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Residential', meaning: 'Yerleşimle ilgili', pos: 'adj' }
    ],
    collocations: ['commercial district', 'commercial use'],
    collocationMeanings: {
      'commercial district': 'ticaret bölgesi',
      'commercial use': 'ticari kullanım'
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
    ipa: '/ˈhaʊ.zɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'house', pos: 'noun/verb', meaning: 'ev/barındırmak' }
    ],
    synonyms: [
      { word: 'Accommodation', meaning: 'Konaklama', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['affordable housing', 'social housing'],
    collocationMeanings: {
      'affordable housing': 'uygun fiyatlı konut',
      'social housing': 'sosyal konut'
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
    ipa: '/ɪnˈdʌs.tri.əl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'industry', pos: 'noun', meaning: 'sanayi' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Agricultural', meaning: 'Tarımsal', pos: 'adj' },
      { word: 'Rural', meaning: 'Kırsal', pos: 'adj' }
    ],
    collocations: ['industrial revolution', 'industrial estate'],
    collocationMeanings: {
      'industrial revolution': 'sanayi devrimi',
      'industrial estate': 'sanayi sitesi'
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
    ipa: '/ˌrez.ɪˈden.ʃəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'residence', pos: 'noun', meaning: 'konut' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Industrial', meaning: 'Endüstriyel', pos: 'adj' },
      { word: 'Commercial', meaning: 'Ticari', pos: 'adj' }
    ],
    collocations: ['residential area', 'residential building'],
    collocationMeanings: {
      'residential area': 'yerleşim alanı',
      'residential building': 'konut binası'
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
    ipa: '/ˈrʊə.rəl/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Rustic', meaning: 'Kırsal/Köylü', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Urban', meaning: 'Kentsel', pos: 'adj' }
    ],
    collocations: ['rural development', 'rural area'],
    collocationMeanings: {
      'rural development': 'kırsal kalkınma',
      'rural area': 'kırsal bölge'
    },
    examples: ['Many people in remote rural areas lack internet access.'],
    exampleTranslations: ['Uzak kırsal bölgelerdeki pek çok kişinin internet erişimi yok.']
  },
  {
    id: 'slum',
    word: 'Slum',
    pos: 'noun',
    meaning: 'Gecekondu mahallesi, varoş',
    definition: 'An overcrowded urban district inhabited by very poor people.',
    ipa: '/slʌm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Ghetto', meaning: 'Getto', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Luxury district', meaning: 'Lüks bölge', pos: 'noun' }
    ],
    collocations: ['urban slums', 'clear the slums'],
    collocationMeanings: {
      'urban slums': 'şehir varoşları',
      'clear the slums': 'gecekonduları yıkmak'
    },
    examples: ['She grew up in the slums on the edge of the city.'],
    exampleTranslations: ['Şehrin kenarındaki gecekondu mahallelerinde büyüdü.']
  },
  {
    id: 'suburbs',
    word: 'Suburbs',
    pos: 'noun',
    meaning: 'Banliyö, dış mahalleler',
    definition: 'An outlying residential district of a city.',
    ipa: '/ˈsʌb.ɜːbz/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'suburban', pos: 'adj', meaning: 'banliyöye ait' }
    ],
    synonyms: [
      { word: 'Outskirts', meaning: 'Şehir dışı', pos: 'noun' }
    ],
    antonyms: [
      { word: 'City centre', meaning: 'Şehir merkezi', pos: 'noun' }
    ],
    collocations: ['live in the suburbs', 'leafy suburbs'],
    collocationMeanings: {
      'live in the suburbs': 'banliyöde yaşamak',
      'leafy suburbs': 'yeşillik banliyöler'
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
    ipa: '/ˈɜː.bən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'urbanize', pos: 'verb', meaning: 'şehirleşmek' }
    ],
    synonyms: [
      { word: 'Metropolitan', meaning: 'Metropol', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Rural', meaning: 'Kırsal', pos: 'adj' }
    ],
    collocations: ['urban planning', 'urban development'],
    collocationMeanings: {
      'urban planning': 'şehir planlama',
      'urban development': 'kentsel kalkınma'
    },
    examples: ['People generally move to urban areas in search of work.'],
    exampleTranslations: ['İnsanlar genellikle iş aramak için kentsel bölgelere taşınır.']
  },
  {
    id: 'decontaminate',
    word: 'Decontaminate',
    pos: 'verb',
    meaning: 'Arındırmak, temizlemek',
    definition: 'To remove dangerous substances from something.',
    ipa: '/ˌdiː.kənˈtæm.ɪ.neɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'decontamination', pos: 'noun', meaning: 'arındırma' }
    ],
    synonyms: [
      { word: 'Purify', meaning: 'Arındırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Contaminate', meaning: 'Kirletmek', pos: 'verb' }
    ],
    collocations: ['thoroughly decontaminate', 'decontaminate soil'],
    collocationMeanings: {
      'thoroughly decontaminate': 'iyice arındırmak',
      'decontaminate soil': 'toprağı temizlemek'
    },
    examples: ['It took years to decontaminate the area after the leak.'],
    exampleTranslations: ['Sızıntıdan sonra bölgeyi arındırmak yıllar sürdü.']
  },
  {
    id: 'disqualify',
    word: 'Disqualify',
    pos: 'verb',
    meaning: 'Diskalifiye etmek, elemek',
    definition: 'To stop someone from taking part in an activity because of a rule violation.',
    ipa: '/dɪsˈkwɒl.ɪ.faɪ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'disqualification', pos: 'noun', meaning: 'diskalifiye' }
    ],
    synonyms: [
      { word: 'Eliminate', meaning: 'Eleme', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Qualify', meaning: 'Elemeleri geçmek', pos: 'verb' }
    ],
    collocations: ['disqualified from driving', 'disqualified for cheating'],
    collocationMeanings: {
      'disqualified from driving': 'ehliyetine el konulmak',
      'disqualified for cheating': 'hileden diskalifiye edilmek'
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
    ipa: '/ɪkˈstrɔː.dɪn.ər.i/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'extraordinarily', pos: 'adverb', meaning: 'olağanüstü derecede' }
    ],
    synonyms: [
      { word: 'Exceptional', meaning: 'İstisnai', pos: 'adj' },
      { word: 'Remarkable', meaning: 'Dikkat çekici', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Ordinary', meaning: 'Sıradan', pos: 'adj' }
    ],
    collocations: ['extraordinary achievement', 'extraordinary meeting'],
    collocationMeanings: {
      'extraordinary achievement': 'olağanüstü başarı',
      'extraordinary meeting': 'olağanüstü toplantı'
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
    ipa: '/ɪˈliː.ɡəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'illegality', pos: 'noun', meaning: 'yasadışılık' }
    ],
    synonyms: [
      { word: 'Unlawful', meaning: 'Kanunsuz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Legal', meaning: 'Yasal', pos: 'adj' }
    ],
    collocations: ['illegal drug', 'illegal act'],
    collocationMeanings: {
      'illegal drug': 'uyuşturucu madde',
      'illegal act': 'yasadışı eylem'
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
    ipa: '/ɪmˈpɒs.ə.bəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'impossibility', pos: 'noun', meaning: 'imkansızlık' }
    ],
    synonyms: [
      { word: 'Unachievable', meaning: 'Ulaşılamaz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Possible', meaning: 'Mümkün', pos: 'adj' }
    ],
    collocations: ['next to impossible', 'mission impossible'],
    collocationMeanings: {
      'next to impossible': 'neredeyse imkansız',
      'mission impossible': 'imkansız görev'
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
      { word: 'Deceive', meaning: 'Aldatmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Guide', meaning: 'Yol göstermek', pos: 'verb' }
    ],
    collocations: ['misleading information', 'mislead the public'],
    collocationMeanings: {
      'misleading information': 'yanıltıcı bilgi',
      'mislead the public': 'kamuoyunu aldatmak'
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
    ipa: '/ˌaʊt.pəˈfɔːm/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'performance', pos: 'noun', meaning: 'performans' }
    ],
    synonyms: [
      { word: 'Surpass', meaning: 'Aşmak/Geçmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Underperform', meaning: 'Düşük performans göstermek', pos: 'verb' }
    ],
    collocations: ['outperform peers', 'outperform the market'],
    collocationMeanings: {
      'outperform peers': 'akranlarını geride bırakmak',
      'outperform the market': 'piyasanın üstünde performans sergilemek'
    },
    examples: ['The new system helped them outperform competitors.'],
    exampleTranslations: ['Yeni sistem rakiplerini geride bırakmalarına yardımcı oldu.']
  },
  {
    id: 'overpopulation',
    word: 'Overpopulation',
    pos: 'noun',
    meaning: 'Aşırı nüfus artışı',
    definition: 'The condition of having a population so dense as to cause deterioration.',
    ipa: '/ˌəʊ.və.pɒp.jəˈleɪ.ʃən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'populate', pos: 'verb', meaning: 'yerleşmek' }
    ],
    synonyms: [
      { word: 'Overcrowding', meaning: 'Aşırı kalabalık', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Underpopulation', meaning: 'Nüfus azlığı', pos: 'noun' }
    ],
    collocations: ['global overpopulation', 'problem of overpopulation'],
    collocationMeanings: {
      'global overpopulation': 'küresel aşırı nüfus',
      'problem of overpopulation': 'aşırı nüfus sorunu'
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
    ipa: '/ˌəʊ.vəˈpraɪst/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'price', pos: 'noun/verb', meaning: 'fiyat/fiyatlandırmak' }
    ],
    synonyms: [
      { word: 'Exorbitant', meaning: 'Fahiş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Cheap', meaning: 'Ucuz', pos: 'adj' }
    ],
    collocations: ['overpriced menu', 'wildly overpriced'],
    collocationMeanings: {
      'overpriced menu': 'kazık menü',
      'wildly overpriced': 'fahiş derecede pahalı'
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
    ipa: '/ˌriː.dɪˈvel.əp/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'redevelopment', pos: 'noun', meaning: 'yeniden imar' }
    ],
    synonyms: [
      { word: 'Renovate', meaning: 'Yenilemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Demolish', meaning: 'Yıkmak', pos: 'verb' }
    ],
    collocations: ['redevelop the area', 'redevelop site'],
    collocationMeanings: {
      'redevelop the area': 'bölgeyi yeniden yapılandırmak',
      'redevelop site': 'sahayı imara açmak'
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
    ipa: '/səˈbɜː.bən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'suburbs', pos: 'noun', meaning: 'banliyöler' }
    ],
    synonyms: [
      { word: 'Outlying', meaning: 'Şehir dışı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Urban', meaning: 'Kentsel', pos: 'adj' }
    ],
    collocations: ['suburban life', 'suburban development'],
    collocationMeanings: {
      'suburban life': 'banliyö hayatı',
      'suburban development': 'banliyö yapılaşması'
    },
    examples: ['Lots of families move to suburban areas for more space.'],
    exampleTranslations: ['Pek çok aile daha fazla alan için banliyö bölgelerine taşınıyor.']
  },
  {
    id: 'underestimate',
    word: 'Underestimate',
    pos: 'verb',
    meaning: 'Hafife almak, azımsamak',
    definition: 'To fail to guess the real cost, size, or difficulty of something.',
    ipa: '/ˌʌn.dərˈes.tɪ.meɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'estimation', pos: 'noun', meaning: 'tahmin' }
    ],
    synonyms: [
      { word: 'Underrate', meaning: 'Düşük değer biçmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Overestimate', meaning: 'Gözünde büyütmek', pos: 'verb' }
    ],
    collocations: ['grossly underestimate', 'seriously underestimate'],
    collocationMeanings: {
      'grossly underestimate': 'feci şekilde hafife almak',
      'seriously underestimate': 'ciddi şekilde azımsamak'
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
    ipa: '/ʌnˈhæp.i/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'unhappiness', pos: 'noun', meaning: 'mutsuzluk' }
    ],
    synonyms: [
      { word: 'Sad', meaning: 'Üzgün', pos: 'adj' },
      { word: 'Miserable', meaning: 'Perişan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Happy', meaning: 'Mutlu', pos: 'adj' }
    ],
    collocations: ['unhappy ending', 'deeply unhappy'],
    collocationMeanings: {
      'unhappy ending': 'mutsuz son',
      'deeply unhappy': 'çok mutsuz'
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
    ipa: '/ʌpˈɡreɪd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Improve', meaning: 'Geliştirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Downgrade', meaning: 'Düşürmek', pos: 'verb' }
    ],
    collocations: ['major upgrade', 'system upgrade'],
    collocationMeanings: {
      'major upgrade': 'büyük iyileştirme',
      'system upgrade': 'sistem yükseltme'
    },
    examples: ["We're going to upgrade our IT system next year."],
    exampleTranslations: ['Gelecek yıl bilişim sistemimizi yükselteceğiz.']
  },
  {
    id: 'boarding_school',
    word: 'Boarding school',
    pos: 'noun',
    meaning: 'Yatılı okul',
    definition: 'A school where students live and study during the school year.',
    ipa: '/ˈbɔː.dɪŋ ˌskuːl/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Residential school', meaning: 'Yatılı okul', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Day school', meaning: 'Gündüzlü okul', pos: 'noun' }
    ],
    collocations: ['attend boarding school', 'send to boarding school'],
    collocationMeanings: {
      'attend boarding school': 'yatılı okulda okumak',
      'send to boarding school': 'yatılı okula göndermek'
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
    ipa: '/ˈkæm.pəs/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Grounds', meaning: 'Yerleşke', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['on campus', 'university campus'],
    collocationMeanings: {
      'on campus': 'kampüste',
      'university campus': 'üniversite kampüsü'
    },
    examples: ['There are accommodation for over 2,000 students on campus.'],
    exampleTranslations: ['Kampüste 2.000den fazla öğrenci için konaklama yeri var.']
  },
  {
    id: 'compulsory',
    word: 'Compulsory',
    pos: 'adj',
    meaning: 'Zorunlu, mecburi',
    definition: 'Something that must be done because of a rule or law.',
    ipa: '/kəmˈpʌl.sər.i/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'compulsion', pos: 'noun', meaning: 'zorlama' }
    ],
    synonyms: [
      { word: 'Mandatory', meaning: 'Zorunlu', pos: 'adj' },
      { word: 'Obligatory', meaning: 'Mecburi', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Optional', meaning: 'İsteğe bağlı', pos: 'adj' }
    ],
    collocations: ['compulsory education', 'compulsory subject'],
    collocationMeanings: {
      'compulsory education': 'zorunlu eğitim',
      'compulsory subject': 'zorunlu ders'
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
    ipa: '/kəˈrɪk.jə.ləm/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'extra-curricular', pos: 'adj', meaning: 'müfredat dışı' }
    ],
    synonyms: [
      { word: 'Syllabus', meaning: 'Ders programı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['core curriculum', 'school curriculum'],
    collocationMeanings: {
      'core curriculum': 'temel müfredat',
      'school curriculum': 'okul müfredatı'
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
    ipa: '/ˈen.trəns ɪɡˌzæm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Admission test', meaning: 'Kabul testi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['university entrance exam', 'take entrance exam'],
    collocationMeanings: {
      'university entrance exam': 'üniversiteye giriş sınavı',
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
    ipa: '/ˈɡrædʒ.u.eɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'graduation', pos: 'noun', meaning: 'mezuniyet' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Drop out', meaning: 'Okulu bırakmak', pos: 'verb' }
    ],
    collocations: ['graduate from', 'recently graduate'],
    collocationMeanings: {
      'graduate from': '...dan mezun olmak',
      'recently graduate': 'yakın zamanda mezun olmak'
    },
    examples: ['She graduated from Harvard in 2020.'],
    exampleTranslations: ['2020 yılında Harvard’dan mezun oldu.']
  },
  {
    id: 'higher_education',
    word: 'Higher education',
    pos: 'noun',
    meaning: 'Yüksek öğrenim',
    definition: 'Education at a college or university.',
    ipa: '/ˌhaɪ.ər ed.jʊˈkeɪ.ʃən/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tertiary education', meaning: 'Üçüncül eğitim', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['access to higher education', 'higher education institution'],
    collocationMeanings: {
      'access to higher education': 'yüksek öğrenime erişim',
      'higher education institution': 'yüksek öğretim kurumu'
    },
    examples: ['More students are going on to higher education.'],
    exampleTranslations: ['Daha fazla öğrenci yüksek öğrenime devam ediyor.']
  },
  {
    id: 'lecture',
    word: 'Lecture',
    pos: 'noun/verb',
    meaning: 'Ders, konferans vermek',
    definition: 'A formal talk on a serious subject given to a group of people.',
    ipa: '/ˈlek.tʃər/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'lecturer', pos: 'noun', meaning: 'öğretim görevlisi' }
    ],
    synonyms: [
      { word: 'Talk', meaning: 'Konuşma', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['give a lecture', 'attend a lecture'],
    collocationMeanings: {
      'give a lecture': 'ders anlatmak/konferans vermek',
      'attend a lecture': 'derse katılmak'
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
    ipa: '/ˈskɒl.ə.ʃɪp/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'scholarly', pos: 'adj', meaning: 'akademik, bilgince' }
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
    ipa: '/vəʊˈkeɪ.ʃən.əl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'vocation', pos: 'noun', meaning: 'meslek, yetenek' }
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
    examples: ['The college offers a wide range of vocational courses.'],
    exampleTranslations: ['Kolej çok çeşitli mesleki kurslar sunuyor.']
  },
  {
    id: 'coming_of_age',
    word: 'Coming-of-age',
    pos: 'adj',
    meaning: 'Olgunlaşma, reşit olma dönemi',
    definition: 'Relating to a person’s transition from childhood to adulthood.',
    ipa: '/ˌkʌm.ɪŋ.əvˈeɪdʒ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Adulthood-transition', meaning: 'Yetişkinliğe geçiş', pos: 'adj' }
    ],
    antonyms: [],
    collocations: ['coming-of-age story', 'coming-of-age film'],
    collocationMeanings: {
      'coming-of-age story': 'olgunlaşma hikayesi',
      'coming-of-age film': 'büyüme hikayesi filmi'
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
    ipa: '/ˌlɑːstˈmɪn.ɪt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Final-moment', meaning: 'Son an', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Advance', meaning: 'Önceden yapılmış', pos: 'adj' }
    ],
    collocations: ['last-minute decision', 'at the last minute'],
    collocationMeanings: {
      'last-minute decision': 'son dakika kararı',
      'at the last minute': 'son anda'
    },
    examples: ["Sorry, there's been a last-minute change of plans."],
    exampleTranslations: ['Üzgünüm, planlarda son dakika değişikliği oldu.']
  },
  {
    id: 'old_fashioned_adj',
    word: 'Old-fashioned',
    pos: 'adj',
    meaning: 'Eski moda, demode',
    definition: 'Not modern; belonging to a time in the past.',
    ipa: '/ˌəʊldˈfæʃ.ənd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Outdated', meaning: 'Modası geçmiş', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Modern', meaning: 'Modern', pos: 'adj' },
      { word: 'Up-to-date', meaning: 'Güncel', pos: 'adj' }
    ],
    collocations: ['old-fashioned clothes', 'old-fashioned idea'],
    collocationMeanings: {
      'old-fashioned clothes': 'eski moda kıyafetler',
      'old-fashioned idea': 'modası geçmiş fikir'
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
    ipa: '/ˌʌp.tə ˈdeɪt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Current', meaning: 'Güncel', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Out-of-date', meaning: 'Günü geçmiş', pos: 'adj' },
      { word: 'Old-fashioned', meaning: 'Eski moda', pos: 'adj' }
    ],
    collocations: ['keep up-to-date', 'most up-to-date'],
    collocationMeanings: {
      'keep up-to-date': 'güncel kalmak',
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
      { word: 'Famous', meaning: 'Ünlü', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unknown', meaning: 'Bilinmeyen', pos: 'adj' }
    ],
    collocations: ['well-known fact', 'well-known person'],
    collocationMeanings: {
      'well-known fact': 'herkesçe bilinen gerçek',
      'well-known person': 'tanınmış kişi'
    },
    examples: ["He's a well-known local artist."],
    exampleTranslations: ['O, tanınmış bir yerel sanatçıdır.']
  },
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
      { word: 'Abolish', meaning: 'Feshetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Establish', meaning: 'Kurmak', pos: 'verb' }
    ],
    collocations: ['do away with rules', 'do away with taxes'],
    collocationMeanings: {
      'do away with rules': 'kuralları kaldırmak',
      'do away with taxes': 'vergileri sıfırlamak'
    },
    examples: ['The governor proposed to do away with the state income tax.'],
    exampleTranslations: ['Vali, eyalet gelir vergisini kaldırmayı önerdi.']
  },
  {
    id: 'do_somebody_a_favour',
    word: 'Do somebody a favour',
    pos: 'phrase',
    meaning: 'Birine bir iyilik yapmak',
    definition: 'To do something to help someone.',
    ipa: '/duː ˈsʌm.bə.di ə ˈfeɪ.vər/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Help out', meaning: 'Yardım etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['ask a favour', 'return a favour'],
    collocationMeanings: {
      'ask a favour': 'iyilik istemek',
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
    ipa: '/duː ˈsʌm.bə.di hɑːm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Injure', meaning: 'İncitmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Benefit', meaning: 'Fayda sağlamak', pos: 'verb' }
    ],
    collocations: ['do more harm', 'no harm done'],
    collocationMeanings: {
      'do more harm': 'daha fazla zarar vermek',
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
    collocations: ['cannot do without', 'learn to do without'],
    collocationMeanings: {
      'cannot do without': 'onsuz yapamamak',
      'learn to do without': 'onsuz yaşamayı öğrenmek'
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
    ipa: '/meɪk ə ɡʊd ɪmˈpreʃ.ən/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [
      { word: 'Make a bad impression', meaning: 'Kötü izlenim bırakmak', pos: 'phrase' }
    ],
    collocations: ['first impression', 'strive to make'],
    collocationMeanings: {
      'first impression': 'ilk izlenim',
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
    ipa: '/meɪk əˈlaʊ.əns.ɪz/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tolerate', meaning: 'Hoş görmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['make allowances for'],
    collocationMeanings: {
      'make allowances for': '...için hoşgörü göstermek'
    },
    examples: ['You should make allowances for him; he is still learning.'],
    exampleTranslations: ['Ona karşı hoşgörülü olmalısın; hâlâ öğreniyor.']
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
    collocations: ['make the best of a bad job', 'try to make the best'],
    collocationMeanings: {
      'make the best of a bad job': 'kötü giden bir işten en iyisini çıkarmak',
      'try to make the best': 'en iyisini yapmaya çalışmak'
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
    collocations: ['really make a go', 'determined to make a go'],
    collocationMeanings: {
      'really make a go': 'gerçekten başarmak',
      'determined to make a go': 'başarmaya kararlı'
    },
    examples: ["She's really determined to make a go of her new business."],
    exampleTranslations: ['Yeni işini başarıyla yürütmeye gerçekten kararlı.']
  },
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
      { word: 'Erect', meaning: 'Dikmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Demolish', meaning: 'Yıkmak', pos: 'verb' }
    ],
    collocations: ['construct a building', 'construct a theory'],
    collocationMeanings: {
      'construct a building': 'bina inşa etmek',
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
      { word: 'conversion', pos: 'noun', meaning: 'dönüşüm' }
    ],
    synonyms: [
      { word: 'Transform', meaning: 'Dönüştürmek', pos: 'verb' },
      { word: 'Adapt', meaning: 'Uyarlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Keep', meaning: 'Tutmak', pos: 'verb' }
    ],
    collocations: ['convert into', 'convert currency'],
    collocationMeanings: {
      'convert into': '...a dönüştürmek',
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
    ipa: '/dɪˈmɒl.ɪʃ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'demolition', pos: 'noun', meaning: 'yıkım' }
    ],
    synonyms: [
      { word: 'Knock down', meaning: 'Yıkmak', pos: 'verb' },
      { word: 'Level', meaning: 'Yerle bir etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Construct', meaning: 'İnşa etmek', pos: 'verb' }
    ],
    collocations: ['completely demolish', 'demolish a building'],
    collocationMeanings: {
      'completely demolish': 'tamamen yerle bir etmek',
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
      { word: 'extension', pos: 'noun', meaning: 'uzatma' }
    ],
    synonyms: [
      { word: 'Lengthen', meaning: 'Uzatmak', pos: 'verb' },
      { word: 'Expand', meaning: 'Genişletmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Shorten', meaning: 'Kısaltmak', pos: 'verb' }
    ],
    collocations: ['extend a deadline', 'extend an invitation'],
    collocationMeanings: {
      'extend a deadline': 'son teslim tarihini uzatmak',
      'extend an invitation': 'davette bulunmak'
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
    ipa: '/ˌriː.ləʊˈkeɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'relocation', pos: 'noun', meaning: 'taşınma' }
    ],
    synonyms: [
      { word: 'Move', meaning: 'Taşınmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Stay', meaning: 'Kalmak', pos: 'verb' }
    ],
    collocations: ['relocate a business', 'decide to relocate'],
    collocationMeanings: {
      'relocate a business': 'işletmeyi taşımak',
      'decide to relocate': 'taşınmaya karar vermek'
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
    ipa: '/rɪˈstɔːr/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'restoration', pos: 'noun', meaning: 'restorasyon' }
    ],
    synonyms: [
      { word: 'Repair', meaning: 'Onarmak', pos: 'verb' },
      { word: 'Renovate', meaning: 'Yenilemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Damage', meaning: 'Zarar vermek', pos: 'verb' }
    ],
    collocations: ['restore confidence', 'restore order'],
    collocationMeanings: {
      'restore confidence': 'güveni yeniden tesis etmek',
      'restore order': 'düzeni sağlamak'
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
      { word: 'transformation', pos: 'noun', meaning: 'dönüşüm' }
    ],
    synonyms: [
      { word: 'Change', meaning: 'Değiştirmek', pos: 'verb' },
      { word: 'Alter', meaning: 'Değişiklik yapmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Maintain', meaning: 'Sürdürmek', pos: 'verb' }
    ],
    collocations: ['transform into', 'radically transform'],
    collocationMeanings: {
      'transform into': '...a dönüştürmek',
      'radically transform': 'kökten değiştirmek'
    },
    examples: ['The factory was transformed into a modern art gallery.'],
    exampleTranslations: ['Fabrika modern bir sanat galerisine dönüştürüldü.']
  },
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
      { word: 'Reach', meaning: 'Ulaşmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['catch up with friends', 'catch up with work'],
    collocationMeanings: {
      'catch up with friends': 'arkadaşlarla dertleşmek/görüşmek',
      'catch up with work': 'işleri yetiştirmek'
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
    ipa: '/kʌm ʌp əˈɡenst/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Encounter', meaning: 'Karşılaşmak', pos: 'verb' },
      { word: 'Face', meaning: 'Yüzleşmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['come up against a problem', 'come up against opposition'],
    collocationMeanings: {
      'come up against a problem': 'bir sorunla karşılaşmak',
      'come up against opposition': 'muhalefetle karşılaşmak'
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
      { word: 'Invent', meaning: 'İcat etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['come up with an idea', 'come up with a solution'],
    collocationMeanings: {
      'come up with an idea': 'bir fikir ortaya atmak',
      'come up with a solution': 'çözüm üretmek'
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
      { word: 'Reduce', meaning: 'Azaltmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Increase', meaning: 'Artırmak', pos: 'verb' }
    ],
    collocations: ['cut down on fatty foods', 'cut down on smoking'],
    collocationMeanings: {
      'cut down on fatty foods': 'yağlı yiyecekleri azaltmak',
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
    ipa: '/ɡet əˈraʊnd tuː/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Find time for', meaning: 'Vakit ayırmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['finally get around to', 'never get around to'],
    collocationMeanings: {
      'finally get around to': 'sonunda yapmaya vakit bulmak',
      'never get around to': 'bir türlü yapamamak'
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
      { word: 'Continue', meaning: 'Devam etmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['get on with work', 'get on with life'],
    collocationMeanings: {
      'get on with work': 'işe koyulmak',
      'get on with life': 'hayatına devam etmek'
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
      { word: 'Stay informed', meaning: 'Haberdar kalmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['keep up with the trends', 'keep up with technology'],
    collocationMeanings: {
      'keep up with the trends': 'trendleri takip etmek',
      'keep up with technology': 'teknolojiye ayak uydurmak'
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
    ipa: '/lʊk ʌp tuː/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Admire', meaning: 'Hayran olmak', pos: 'verb' },
      { word: 'Respect', meaning: 'Saygı duymak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Look down on', meaning: 'Hor görmek', pos: 'verb' }
    ],
    collocations: ['look up to parents', 'someone to look up to'],
    collocationMeanings: {
      'look up to parents': 'ebeveynleri örnek almak',
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
      { word: 'Exhaust', meaning: 'Tüketmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['run out of time', 'run out of money'],
    collocationMeanings: {
      'run out of time': 'vakti tükenmek',
      'run out of money': 'parası bitmek'
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
    ipa: '/stænd ʌp fɔːr/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Defend', meaning: 'Savunmak', pos: 'verb' },
      { word: 'Support', meaning: 'Desteklemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['stand up for rights', 'stand up for yourself'],
    collocationMeanings: {
      'stand up for rights': 'haklarını savunmak',
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
    ipa: '/teɪk keər əv/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Look after', meaning: 'Bakmak/İlgilenmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Neglect', meaning: 'İhmal etmek', pos: 'verb' }
    ],
    collocations: ['take care of business', 'take care of family'],
    collocationMeanings: {
      'take care of business': 'işleri halletmek',
      'take care of family': 'aileye bakmak'
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
      { word: 'Collaborate', meaning: 'İşbirliği yapmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Compete with', meaning: 'Rekabet etmek', pos: 'verb' }
    ],
    collocations: ['team up with a friend', 'team up for a project'],
    collocationMeanings: {
      'team_up_with_a_friend': 'bir arkadaşla ekip kurmak',
      'team_up_for_a_project': 'bir proje için birleşmek'
    },
    examples: ['We teamed up with a local charity to raise money.'],
    exampleTranslations: ['Para toplamak için yerel bir hayır kurumuyla işbirliği yaptık.']
  },
  {
    id: 'car_sharing_scheme',
    word: 'Car-sharing scheme',
    pos: 'noun',
    meaning: 'Araç paylaşım sistemi',
    definition: 'A system that helps people to share a car and travel together.',
    ipa: '/ˈkɑːrˌʃeə.rɪŋ skiːm/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Carpooling', meaning: 'Yolculuk paylaşımı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['join a car-sharing scheme', 'promote car-sharing'],
    collocationMeanings: {
      'join a car-sharing scheme': 'araç paylaşım sistemine katılmak',
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
    ipa: '/ˈfuːd ˌbæŋk/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['donate to food bank', 'local food bank'],
    collocationMeanings: {
      'donate to food bank': 'gıda bankasına bağış yapmak',
      'local food bank': 'yerel gıda bankası'
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
    ipa: '/ˈlæŋ.ɡwɪdʒ ɪksˌtʃeɪndʒ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tandem learning', meaning: 'Eşli öğrenme', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['language exchange partner', 'join a language exchange'],
    collocationMeanings: {
      'language exchange partner': 'dil takas ortağı',
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
    ipa: '/ˈstriːt ˌpɑː.ti/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Block party', meaning: 'Mahalle partisi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['organise a street party', 'annual street party'],
    collocationMeanings: {
      'organise a street party': 'sokak partisi düzenlemek',
      'annual street party': 'geleneksel sokak partisi'
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
    ipa: '/ˌvɒl.ənˈtɪər ˈwɜː.kər/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'volunteer', pos: 'verb/noun', meaning: 'gönüllü olmak/gönüllü' }
    ],
    synonyms: [
      { word: 'Unpaid helper', meaning: 'Ücretsiz yardımcı', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Salaried employee', meaning: 'Maaşlı çalışan', pos: 'noun' }
    ],
    collocations: ['trained volunteer worker', 'recruit volunteer workers'],
    collocationMeanings: {
      'trained volunteer worker': 'eğitimli gönüllü çalışan',
      'recruit volunteer workers': 'gönüllü çalışan toplamak'
    },
    examples: ['Volunteer workers help distribute food to the homeless shelters.'],
    exampleTranslations: ['Gönüllü çalışanlar evsiz barınaklarına yiyecek dağıtılmasına yardımcı oluyor.']
  },
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
      { word: 'believable', pos: 'adj', meaning: 'inanılır' }
    ],
    synonyms: [
      { word: 'Faith', meaning: 'İnanç/İtimat', pos: 'noun' },
      { word: 'Conviction', meaning: 'Görüş/İnanç', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disbelief', meaning: 'İnançsızlık', pos: 'noun' },
      { word: 'Doubt', meaning: 'Şüphe', pos: 'noun' }
    ],
    collocations: ['religious belief', 'personal belief'],
    collocationMeanings: {
      'religious belief': 'dini inanç',
      'personal belief': 'kişisel inanç'
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
    ipa: '/bɪˈliː.və.bəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'believe', pos: 'verb', meaning: 'inanmak' },
      { word: 'belief', pos: 'noun', meaning: 'inan' }
    ],
    synonyms: [
      { word: 'Credible', meaning: 'Güvenilir/İnanılır', pos: 'adj' },
      { word: 'Plausible', meaning: 'Makul/Akla yatkın', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unbelievable', meaning: 'İnanılmaz', pos: 'adj' }
    ],
    collocations: ['hardly believable', 'believable character'],
    collocationMeanings: {
      'hardly believable': 'pek inandırıcı olmayan',
      'believable character': 'inandırıcı karakter'
    },
    examples: ['I enjoyed the story, but the ending was not very believable.'],
    exampleTranslations: ['Hikayeden keyif aldım ama sonu pek inandırıcı değildi.']
  },
  {
    id: 'heroic',
    word: 'Heroic',
    pos: 'adj',
    meaning: 'Kahramanca',
    definition: 'Very brave or involving extreme effort.',
    ipa: '/hɪˈrəʊ.ɪk/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'hero', pos: 'noun', meaning: 'kahraman' },
      { word: 'heroically', pos: 'adverb', meaning: 'kahramanca' }
    ],
    synonyms: [
      { word: 'Courageous', meaning: 'Cesur', pos: 'adj' },
      { word: 'Valiant', meaning: 'Yiğitçe', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Cowardly', meaning: 'Korkakça', pos: 'adj' }
    ],
    collocations: ['heroic effort', 'heroic act'],
    collocationMeanings: {
      'heroic effort': 'kahramanca çaba',
      'heroic act': 'kahramanca eylem'
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
    ipa: '/ˈmɪθ.ɪ.kəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'myth', pos: 'noun', meaning: 'efsane/mit' },
      { word: 'mythology', pos: 'noun', meaning: 'mitoloji' }
    ],
    synonyms: [
      { word: 'Legendary', meaning: 'Efsanevi', pos: 'adj' },
      { word: 'Imaginary', meaning: 'Hayali', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Real', meaning: 'Gerçek', pos: 'adj' }
    ],
    collocations: ['mythical creature', 'mythical island'],
    collocationMeanings: {
      'mythical creature': 'mitolojik yaratık',
      'mythical island': 'efsanevi ada'
    },
    examples: ['The dragon is a mythical creature in many cultures.'],
    exampleTranslations: ['Ejderha pek çok kültürde mitolojik bir yaratıktır.']
  },
  {
    id: 'representation',
    word: 'Representation',
    pos: 'noun',
    meaning: 'Temsil, canlandırma',
    definition: 'The way that someone or something is shown or described.',
    ipa: '/ˌrep.rɪ.zenˈteɪ.ʃən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'represent', pos: 'verb', meaning: 'temsil etmek' }
    ],
    synonyms: [
      { word: 'Portrayal', meaning: 'Betimleme', pos: 'noun' },
      { word: 'Depiction', meaning: 'Tasvir', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['media representation', 'legal representation'],
    collocationMeanings: {
      'media representation': 'medyada temsil edilme',
      'legal representation': 'yasal temsil'
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
    ipa: '/trəˈdɪʃ.ən.əl.i/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'tradition', pos: 'noun', meaning: 'gelenek' },
      { word: 'traditional', pos: 'adj', meaning: 'geleneksel' }
    ],
    synonyms: [
      { word: 'Conventionally', meaning: 'Geleneksel şekilde', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Unconventionally', meaning: 'Alışılmadık şekilde', pos: 'adverb' }
    ],
    collocations: ['traditionally made', 'traditionally associated'],
    collocationMeanings: {
      'traditionally made': 'geleneksel yöntemle yapılmış',
      'traditionally associated': 'geleneksel olarak ilişkilendirilen'
    },
    examples: ['The bride was dressed traditionally in white.'],
    exampleTranslations: ['Gelin geleneksel bir biçimde beyaz giyinmişti.']
  },
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
      { word: 'Sense', meaning: 'Algılamak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['feel like', 'feel guilty'],
    collocationMeanings: {
      'feel like': 'gibi hissetmek',
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
    ipa: '/ˈlɪs.ən/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'listener', pos: 'noun', meaning: 'dinleyici' }
    ],
    synonyms: [
      { word: 'Attend', meaning: 'Kulak vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['listen carefully', 'listen to music'],
    collocationMeanings: {
      'listen carefully': 'dikkatlice dinlemek',
      'listen to music': 'müzik dinlemek'
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
      { word: 'watcher', pos: 'noun', meaning: 'izleyici' }
    ],
    synonyms: [
      { word: 'Observe', meaning: 'Gözlemlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Overlook', meaning: 'Gözden kaçırmak', pos: 'verb' }
    ],
    collocations: ['watch out', 'watch a movie'],
    collocationMeanings: {
      'watch out': 'dikkat etmek',
      'watch a movie': 'film izlemek'
    },
    examples: ['I’m going to stay in and watch TV tonight.'],
    exampleTranslations: ['Bu gece evde kalıp TV izleyeceğim.']
  },
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
      { word: 'Release', meaning: 'Serbest bırakmak', pos: 'verb' }
    ],
    collocations: ['under arrest', 'make an arrest'],
    collocationMeanings: {
      'under arrest': 'tutuklu',
      'make an arrest': 'tutuklama yapmak'
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
    ipa: '/ˈblæk.meɪl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'blackmailer', pos: 'noun', meaning: 'şantajcı' }
    ],
    synonyms: [
      { word: 'Extort', meaning: 'Zorla almak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['emotional blackmail', 'pay blackmail'],
    collocationMeanings: {
      'emotional blackmail': 'duygusal şantaj',
      'pay blackmail': 'şantaj bedeli ödemek'
    },
    examples: ['They used this information to blackmail him for years.'],
    exampleTranslations: ['Bu bilgiyi ona yıllarca şantaj yapmak için kullandılar.']
  },
 
  // --- UNIT 8: CRIME (Continued) ---
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
    ipa: '/ˈbɜː.ɡlər.i/',
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
      { word: 'fraudulent', pos: 'adj', meaning: 'dolandırıcı, sahte' }
    ],
    synonyms: [
      { word: 'Deception', meaning: 'Aldatılma', pos: 'noun' },
      { word: 'Scam', meaning: 'Tezgah, dolap', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Honesty', meaning: 'Dürüstlük', pos: 'noun' }
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
    ipa: '/aɪˈden.tə.ti θeft/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Identity fraud', meaning: 'Kimlik dolandırıcılığı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['victim of identity theft', 'prevent identity theft'],
    collocationMeanings: {
      'victim of identity theft': 'kimlik hırsızlığı mağduru',
      'prevent identity theft': 'kimlik hırsızlığını önlemek'
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
    ipa: '/ˈɪn.ə.sənt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'innocence', pos: 'noun', meaning: 'masumiyet' }
    ],
    synonyms: [
      { word: 'Guiltless', meaning: 'Suçsuz', pos: 'adj' },
      { word: 'Blameless', meaning: 'Kusursuz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Guilty', meaning: 'Suçlu', pos: 'adj' },
      { word: 'Criminal', meaning: 'Suçlu, sabıkalı', pos: 'adj' }
    ],
    collocations: ['prove innocent', 'innocent victim'],
    collocationMeanings: {
      'prove innocent': 'suçsuzluğunu kanıtlamak',
      'innocent victim': 'masum kurban'
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
    ipa: '/ɪnˈves.tɪ.ɡeɪt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'investigation', pos: 'noun', meaning: 'soruşturma' },
      { word: 'investigator', pos: 'noun', meaning: 'müfettiş, dedektif' }
    ],
    synonyms: [
      { word: 'Examine', meaning: 'İncelemek', pos: 'verb' },
      { word: 'Probe', meaning: 'Derinlemesine araştırmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'Görmezden gelmek', pos: 'verb' }
    ],
    collocations: ['thoroughly investigate', 'investigate a crime'],
    collocationMeanings: {
      'thoroughly investigate': 'derinlemesine araştırmak',
      'investigate a crime': 'suçu soruşturmak'
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
    ipa: '/ˈpʌn.ɪʃ.mənt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'punish', pos: 'verb', meaning: 'cezalandırmak' },
      { word: 'punishable', pos: 'adj', meaning: 'cezalandırılabilir' }
    ],
    synonyms: [
      { word: 'Penalty', meaning: 'Ceza, yaptırım', pos: 'noun' },
      { word: 'Sanction', meaning: 'Yaptırım', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Reward', meaning: 'Ödül', pos: 'noun' },
      { word: 'Pardon', meaning: 'Af', pos: 'noun' }
    ],
    collocations: ['capital punishment', 'severe punishment'],
    collocationMeanings: {
      'capital punishment': 'idam cezası',
      'severe punishment': 'ağır ceza'
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
    ipa: '/ˈrɒb.ər.i/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'rob', pos: 'verb', meaning: 'soymak' },
      { word: 'robber', pos: 'noun', meaning: 'soyguncu' }
    ],
    synonyms: [
      { word: 'Heist', meaning: 'Büyük soygun', pos: 'noun' },
      { word: 'Theft', meaning: 'Hırsızlık', pos: 'noun' }
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
    ipa: '/ˈsen.təns/',
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
    ipa: '/ˈwɪt.nəs/',
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
  // --- UNIT 9: DEPENDENT PREPOSITIONS ---
  {
    id: 'adhere_to',
    word: 'Adhere to',
    pos: 'verb + prep',
    meaning: 'Bağlı kalmak, uymak (kural/kanun)',
    definition: 'To obey a rule, law, agreement, or particular set of beliefs.',
    ipa: '/ədˈhɪər tuː/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'adherence', pos: 'noun', meaning: 'bağlılık, uyma' }
    ],
    synonyms: [
      { word: 'Obey', meaning: 'İtaat etmek', pos: 'verb' },
      { word: 'Comply with', meaning: '...a uymak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Violate', meaning: 'İhlal etmek', pos: 'verb' }
    ],
    collocations: ['strictly adhere to', 'adhere to standards'],
    collocationMeanings: {
      'strictly adhere to': 'sıkı sıkıya bağlı kalmak',
      'adhere to standards': 'standartlara uymak'
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
    ipa: '/əˈpɒl.ə.dʒaɪz fɔːr/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'apology', pos: 'noun', meaning: 'özür' }
    ],
    synonyms: [
      { word: 'Express regret', meaning: 'Pişmanlık belirtmek', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['sincerely apologise', 'apologise profusely'],
    collocationMeanings: {
      'sincerely apologise': 'içtenlikle özür dilemek',
      'apologise profusely': 'bolca özür dilemek'
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
    ipa: '/ˈɑːɡ.juː əˈbaʊt/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'argument', pos: 'noun', meaning: 'tartışma' }
    ],
    synonyms: [
      { word: 'Dispute', meaning: 'Tartışmak', pos: 'verb' },
      { word: 'Quarrel', meaning: 'Ağız kavgası etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Agree', meaning: 'Anlaşmak', pos: 'verb' }
    ],
    collocations: ['argue about money', 'constantly argue'],
    collocationMeanings: {
      'argue about money': 'para hakkında tartışmak',
      'constantly argue': 'sürekli tartışmak'
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
      { word: 'Grumble', meaning: 'Söylenmek', pos: 'verb' },
      { word: 'Moan', meaning: 'Sızlanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Praise', meaning: 'Övmek', pos: 'verb' }
    ],
    collocations: ['bitterly complain', 'complain about noise'],
    collocationMeanings: {
      'bitterly complain': 'acı acı şikayet etmek',
      'complain about noise': 'gürültüden şikayet etmek'
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
    ipa: '/kənˈsent tuː/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'consent', pos: 'noun', meaning: 'rıza, izin' }
    ],
    synonyms: [
      { word: 'Agree to', meaning: '...a razı olmak', pos: 'verb' },
      { word: 'Permit', meaning: 'İzin vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Refuse', meaning: 'Reddetmek', pos: 'verb' },
      { word: 'Object', meaning: 'İtiraz etmek', pos: 'verb' }
    ],
    collocations: ['written consent', 'informed consent'],
    collocationMeanings: {
      'written consent': 'yazılı onay',
      'informed consent': 'bilgilendirilmiş onam'
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
      { word: 'insistence', pos: 'noun', meaning: 'ısrar' }
    ],
    synonyms: [
      { word: 'Demand', meaning: 'Talep etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Give up', meaning: 'Vazgeçmek', pos: 'verb' }
    ],
    collocations: ['insist on quality', 'quietly insist'],
    collocationMeanings: {
      'insist on quality': 'kalitede ısrar etmek',
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
    ipa: '/θæŋk fɔːr/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'thankful', pos: 'adj', meaning: 'minnettar' }
    ],
    synonyms: [
      { word: 'Express gratitude', meaning: 'Minnet sunmak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['thank for support', 'thank for help'],
    collocationMeanings: {
      'thank for support': 'destek için teşekkür etmek',
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
    definition: 'The process of studying or examining something in an organized way.',
    ipa: '/əˈnæl.ə.sɪs/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'analyze', pos: 'verb', meaning: 'analiz etmek' },
      { word: 'analytical', pos: 'adj', meaning: 'analitik' }
    ],
    synonyms: [
      { word: 'Examination', meaning: 'İnceleme', pos: 'noun' },
      { word: 'Scrutiny', meaning: 'Dikkatli inceleme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Synthesis', meaning: 'Sentez', pos: 'noun' }
    ],
    collocations: ['data analysis', 'detailed analysis'],
    collocationMeanings: {
      'data analysis': 'veri analizi',
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
    definition: 'Information, especially facts or numbers, used to help with making decisions.',
    ipa: '/ˈdeɪ.tə/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Information', meaning: 'Bilgi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['raw data', 'collect data'],
    collocationMeanings: {
      'raw data': 'işlenmemiş veri',
      'collect data': 'veri toplamak'
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
    ipa: '/ˈev.ɪ.dəns/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'evident', pos: 'adj', meaning: 'açık, belirgin' }
    ],
    synonyms: [
      { word: 'Proof', meaning: 'Kanıt', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disproof', meaning: 'Aksini kanıtlama', pos: 'noun' }
    ],
    collocations: ['clear evidence', 'scientific evidence'],
    collocationMeanings: {
      'clear evidence': 'açık kanıt',
      'scientific evidence': 'bilimsel kanıt'
    },
    examples: ['There is no scientific evidence that the drug is harmful.'],
    exampleTranslations: ['İlacın zararlı olduğuna dair hiçbir bilimsel kanıt yoktur.']
  },
  {
    id: 'researcher',
    word: 'Researcher',
    pos: 'noun',
    meaning: 'Araştırmacı',
    definition: 'Someone whose job is to study a subject carefully to discover new information.',
    ipa: '/rɪˈsɜː.tʃər/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'research', pos: 'noun/verb', meaning: 'araştırma, araştırmak' }
    ],
    synonyms: [
      { word: 'Investigator', meaning: 'Soruşturmacı', pos: 'noun' },
      { word: 'Scholar', meaning: 'Bilgin, alim', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['leading researcher', 'university researcher'],
    collocationMeanings: {
      'leading researcher': 'önde gelen araştırmacı',
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
    definition: 'A formal statement of the rules on which a subject of study is based.',
    ipa: '/ˈθɪə.ri/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'theoretical', pos: 'adj', meaning: 'teorik' }
    ],
    synonyms: [
      { word: 'Hypothesis', meaning: 'Hipotez', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Fact', meaning: 'Gerçek', pos: 'noun' }
    ],
    collocations: ['scientific theory', 'conspiracy theory'],
    collocationMeanings: {
      'scientific theory': 'bilimsel teori',
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
    ipa: '/ˈæd.və.taɪ.zɪŋ kæmˌpeɪn/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'advertise', pos: 'verb', meaning: 'reklam yapmak' }
    ],
    synonyms: [
      { word: 'Promotion', meaning: 'Promosyon, tanıtım', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['launch a campaign', 'successful campaign'],
    collocationMeanings: {
      'launch a campaign': 'kampanya başlatmak',
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
      { word: 'Trademark', meaning: 'Ticari marka', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['brand loyalty', 'leading brand'],
    collocationMeanings: {
      'brand loyalty': 'marka sadakati',
      'leading brand': 'lider marka'
    },
    examples: ['This is one of the most famous brands in the world.'],
    exampleTranslations: ['Bu dünyadaki en ünlü markalardan biridir.']
  },
  {
    id: 'consumer',
    word: 'Consumer',
    pos: 'noun',
    meaning: 'Tüketici',
    definition: 'A person who buys goods or services for their own use.',
    ipa: '/kənˈsjuː.mər/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'consume', pos: 'verb', meaning: 'tüketmek' }
    ],
    synonyms: [
      { word: 'Customer', meaning: 'Müşteri', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Producer', meaning: 'Üretici', pos: 'noun' }
    ],
    collocations: ['consumer behavior', 'consumer rights'],
    collocationMeanings: {
      'consumer behavior': 'tüketici davranışı',
      'consumer rights': 'tüketici hakları'
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
    ipa: '/ɪnˈdɔːs/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'endorsement', pos: 'noun', meaning: 'onay, reklam desteği' }
    ],
    synonyms: [
      { word: 'Support', meaning: 'Desteklemek', pos: 'verb' },
      { word: 'Approve', meaning: 'Onaylamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Oppose', meaning: 'Karşı çıkmak', pos: 'verb' }
    ],
    collocations: ['officially endorse', 'celebrity endorse'],
    collocationMeanings: {
      'officially endorse': 'resmen onaylamak',
      'celebrity endorse': 'ünlü birinin reklamda oynaması'
    },
    examples: ['They hired a famous footballer to endorse their new sports drink.'],
    exampleTranslations: ['Yeni spor içeceklerini tanıtması için ünlü bir futbolcu tuttular.']
  },
  {
    id: 'high_profile',
    word: 'High-profile',
    pos: 'adj',
    meaning: 'Göz önünde olan, dikkat çeken',
    definition: 'Attracting a lot of attention and interest from the public.',
    ipa: '/ˌhaɪˈprəʊ.faɪl/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Prominent', meaning: 'Önde gelen', pos: 'adj' },
      { word: 'Famous', meaning: 'Ünlü', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Low-profile', meaning: 'Göz önünde olmayan', pos: 'adj' }
    ],
    collocations: ['high-profile case', 'high-profile job'],
    collocationMeanings: {
      'high-profile case': 'çok ses getiren dava',
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
    definition: 'A plan for reaching a specific marketing-related goal.',
    ipa: '/ˈmɑː.kɪ.tɪŋ ˌstræt.ə.dʒi/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Promotion plan', meaning: 'Tanıtım planı', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['effective marketing strategy', 'develop a strategy'],
    collocationMeanings: {
      'effective marketing strategy': 'etkili pazarlama stratejisi',
      'develop a strategy': 'strateji geliştirmek'
    },
    examples: ['The company needs a new marketing strategy to attract younger customers.'],
    exampleTranslations: ['Şirketin daha genç müşterileri çekmek için yeni bir pazarlama stratejisine ihtiyacı var.']
  },
  {
    id: 'target_market',
    word: 'Target market',
    pos: 'noun',
    meaning: 'Hedef pazar/kitle',
    definition: 'The group of people that a company wants to sell its products to.',
    ipa: '/ˈtɑː.ɡɪt ˌmɑː.kɪt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Audience', meaning: 'Kitle', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['identify target market', 'reach target market'],
    collocationMeanings: {
      'identify target market': 'hedef kitleyi belirlemek',
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
      { word: 'trendy', pos: 'adj', meaning: 'moda, trend' }
    ],
    synonyms: [
      { word: 'Tendency', meaning: 'Eğilim', pos: 'noun' },
      { word: 'Fashion', meaning: 'Moda', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['set a trend', 'growing trend'],
    collocationMeanings: {
      'set a trend': 'akım başlatmak',
      'growing trend': 'büyüyen eğilim'
    },
    examples: ['There is a growing trend towards healthier eating habits.'],
    exampleTranslations: ['Daha sağlıklı beslenme alışkanlıklarına doğru büyüyen bir eğilim var.']
  },
  // --- UNIT 10: TRADITIONAL MEDIA ---
  {
    id: 'biased',
    word: 'Biased',
    pos: 'adj',
    meaning: 'Taraflı, önyargılı',
    definition: 'Showing an unreasonable like or dislike for a person or group based on personal opinions.',
    ipa: '/ˈbaɪ.əst/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'bias', pos: 'noun', meaning: 'taraf, önyargı' }
    ],
    synonyms: [
      { word: 'Prejudiced', meaning: 'Önyargılı', pos: 'adj' },
      { word: 'One-sided', meaning: 'Tek taraflı', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Objective', meaning: 'Nesnel', pos: 'adj' },
      { word: 'Impartial', meaning: 'Yansız', pos: 'adj' }
    ],
    collocations: ['heavily biased', 'biased reporting'],
    collocationMeanings: {
      'heavily biased': 'aşırı taraflı',
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
    definition: 'A newspaper that is printed on large sheets of paper, generally considered more serious.',
    ipa: '/ˈbrɔːd.ʃiːt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Quality paper', meaning: 'Kaliteli/Ciddi gazete', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Tabloid', meaning: 'Bulvar gazetesi', pos: 'noun' }
    ],
    collocations: ['read a broadsheet', 'broadsheet newspaper'],
    collocationMeanings: {
      'read a broadsheet': 'ciddi gazete okumak',
      'broadsheet newspaper': 'büyük boy ciddi gazete'
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
    ipa: '/ˈkʌv.ər.ɪdʒ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'cover', pos: 'verb', meaning: 'haber yapmak' }
    ],
    synonyms: [
      { word: 'Reporting', meaning: 'Haber yapma', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['media coverage', 'extensive coverage'],
    collocationMeanings: {
      'media coverage': 'medyada yer bulma',
      'extensive coverage': 'kapsamlı yayın'
    },
    examples: ['There was extensive media coverage of the royal wedding.'],
    exampleTranslations: ['Kraliyet düğünü medyada kapsamlı bir şekilde yer aldı.']
  },
  {
    id: 'editor_media',
    word: 'Editor',
    pos: 'noun',
    meaning: 'Editör, yazı işleri müdürü',
    definition: 'A person who is in charge of and determines the final content of a newspaper.',
    ipa: '/ˈed.ɪ.tər/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'edit', pos: 'verb', meaning: 'düzenlemek' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['chief editor', 'news editor'],
    collocationMeanings: {
      'chief editor': 'genel yayın yönetmeni',
      'news editor': 'haber müdürü'
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
    ipa: '/ˈhed.laɪn/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Heading', meaning: 'Başlık', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['hit the headlines', 'front-page headline'],
    collocationMeanings: {
      'hit the headlines': 'manşetlere çıkmak',
      'front-page headline': 'ana sayfa manşeti'
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
    ipa: '/sɔːs/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Origin', meaning: 'Köken', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['reliable source', 'official source'],
    collocationMeanings: {
      'reliable source': 'güvenilir kaynak',
      'official source': 'resmi kaynak'
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
    ipa: '/səbˈdʒek.tɪv/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'subjectivity', pos: 'noun', meaning: 'öznellik' }
    ],
    synonyms: [
      { word: 'Personal', meaning: 'Kişisel', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Objective', meaning: 'Nesnel', pos: 'adj' }
    ],
    collocations: ['subjective view', 'purely subjective'],
    collocationMeanings: {
      'subjective view': 'öznel bakış',
      'purely subjective': 'tamamen öznel'
    },
    examples: ['Expert advice can be highly subjective.'],
    exampleTranslations: ['Uzman tavsiyesi son derece öznel olabilir.']
  },
  {
    id: 'tabloid',
    word: 'Tabloid',
    pos: 'noun',
    meaning: 'Bulvar gazetesi (magazin ağırlıklı)',
    definition: 'A type of popular newspaper with small pages and simple reports.',
    ipa: '/ˈtæb.lɔɪd/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Popular press', meaning: 'Halk basını', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Broadsheet', meaning: 'Ciddi gazete', pos: 'noun' }
    ],
    collocations: ['tabloid press', 'read a tabloid'],
    collocationMeanings: {
      'tabloid press': 'magazin basını',
      'read a tabloid': 'bulvar gazetesi okumak'
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
      { word: 'campaigner', pos: 'noun', meaning: 'eylemci' }
    ],
    synonyms: [
      { word: 'Movement', meaning: 'Hareket', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['election campaign', 'launch a campaign'],
    collocationMeanings: {
      'election campaign': 'seçim kampanyası',
      'launch a campaign': 'kampanya başlatmak'
    },
    examples: ['They launched a campaign to protect the local park.'],
    exampleTranslations: ['Yerel parkı korumak için bir kampanya başlattılar.']
  },
  {
    id: 'clickbait',
    word: 'Clickbait',
    pos: 'noun',
    meaning: 'Tık tuzağı',
    definition: 'Content intended to attract attention and make people click on a link.',
    ipa: '/ˈklɪk.beɪt/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['clickbait headline', 'avoid clickbait'],
    collocationMeanings: {
      'clickbait headline': 'tık tuzağı başlık',
      'avoid clickbait': 'tık tuzaklarından kaçınmak'
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
    ipa: '/ˌdiːˈem/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Private message', meaning: 'özel mesaj', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['send a DM', 'check DMs'],
    collocationMeanings: {
      'send a DM': 'DM göndermek',
      'check DMs': 'mesaj kutusunu kontrol etmek'
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
    ipa: '/ˈfɒl.əʊ.ər/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'follow', pos: 'verb', meaning: 'takip etmek' }
    ],
    synonyms: [
      { word: 'Subscriber', meaning: 'Abone', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Leader', meaning: 'Lider', pos: 'noun' }
    ],
    collocations: ['gain followers', 'active followers'],
    collocationMeanings: {
      'gain followers': 'takipçi kazanmak',
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
    definition: 'A word or phrase preceded by a hash sign used on social media.',
    ipa: '/ˈhæʃ.tæɡ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tag', meaning: 'Etiket', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['trending hashtag', 'use a hashtag'],
    collocationMeanings: {
      'trending hashtag': 'trend olan etiket',
      'use a hashtag': 'etiket kullanmak'
    },
    examples: ['The #climatechange hashtag is very popular today.'],
    exampleTranslations: ['#climatechange etiketi bugün çok popüler.']
  },
  {
    id: 'influencer_social',
    word: 'Influencer',
    pos: 'noun',
    meaning: 'Influencer, etkileyici kişi',
    definition: 'Someone who affects the way that others behave through social media.',
    ipa: '/ˈɪn.flu.ən.sər/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'influence', pos: 'noun/verb', meaning: 'etki, etkilemek' }
    ],
    synonyms: [
      { word: 'Opinion leader', meaning: 'Kanaat önderi', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['social media influencer', 'influencer marketing'],
    collocationMeanings: {
      'social media influencer': 'sosyal medya etkileyicisi',
      'influencer marketing': 'etkileyici pazarlaması'
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
    collocations: ['viral meme', 'funny meme'],
    collocationMeanings: {
      'viral meme': 'viral mim',
      'funny meme': 'komik mim'
    },
    examples: ['The cat meme went viral within hours.'],
    exampleTranslations: ['Kedi mimi birkaç saat içinde viral oldu.']
  },
  {
    id: 'netiquette',
    word: 'Netiquette',
    pos: 'noun',
    meaning: 'İnternet görgü kuralları',
    definition: 'The set of rules for polite behaviour on the internet.',
    ipa: '/ˈnet.ɪ.ket/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Cyber-ethics', meaning: 'Siber etik', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['follow netiquette', 'observe netiquette'],
    collocationMeanings: {
      'follow netiquette': 'internet nezaket kurallarına uymak',
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
    definition: 'The number of people that see a post or advertisement.',
    ipa: '/riːtʃ/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Access', meaning: 'Erişim', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['reach an audience', 'organic reach'],
    collocationMeanings: {
      'reach an audience': 'bir kitleye ulaşmak',
      'organic reach': 'organik erişim'
    },
    examples: ['The post reached over a million people in one day.'],
    exampleTranslations: ['Paylaşım bir günde bir milyondan fazla kişiye ulaştı.']
  },
  {
    id: 'thread_social',
    word: 'Thread',
    pos: 'noun',
    meaning: 'Konu dizisi, zincir',
    definition: 'A connected group of messages on the same subject.',
    ipa: '/θred/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'String', meaning: 'Dizi, zincir', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['twitter thread', 'message thread'],
    collocationMeanings: {
      'twitter thread': 'tweet zinciri',
      'message thread': 'mesaj dizisi'
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
    ipa: '/ˈtren.dɪŋ/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'trend', pos: 'noun', meaning: 'akım' }
    ],
    synonyms: [
      { word: 'Popular', meaning: 'Popüler', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Outdated', meaning: 'Modası geçmiş', pos: 'adj' }
    ],
    collocations: ['trending topic', 'start trending'],
    collocationMeanings: {
      'trending topic': 'popüler konu',
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
    definition: 'Someone who leaves intentionally annoying messages on the internet.',
    ipa: '/trəʊl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'trolling', pos: 'noun', meaning: 'trollemecilik' }
    ],
    synonyms: [],
    antonyms: [],
    collocations: ['internet troll', 'troll someone'],
    collocationMeanings: {
      'internet troll': 'internet trolü',
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
    ipa: '/ˈvaɪ.rəl/',
    level: 'upper-intermediate',
    wordFamily: [
      { word: 'virus', pos: 'noun', meaning: 'virüs' }
    ],
    synonyms: [
      { word: 'Popular', meaning: 'Popüler', pos: 'adj' }
    ],
    antonyms: [],
    collocations: ['go viral', 'viral video'],
    collocationMeanings: {
      'go viral': 'internette hızla yayılmak',
      'viral video': 'viral video'
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
    ipa: '/kiː ˈfæk.tər/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Main reason', meaning: 'Temel neden', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['key factor in', 'identify key factors'],
    collocationMeanings: {
      'key factor in': '...daki anahtar faktör',
      'identify key factors': 'temel etkenleri belirlemek'
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
    ipa: '/ˈɒn.laɪn ˈkɒm.ent/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['post online comment', 'moderate online comments'],
    collocationMeanings: {
      'post online comment': 'çevrimiçi yorum yazmak',
      'moderate online comments': 'yorumları denetlemek'
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
    ipa: '/ˈpɒz.ə.tɪv riˈæk.ʃən/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Approval', meaning: 'Onay', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Negative reaction', meaning: 'Olumsuz tepki', pos: 'noun' }
    ],
    collocations: ['receive positive reaction', 'spark positive reaction'],
    collocationMeanings: {
      'receive positive reaction': 'olumlu tepki almak',
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
    definition: 'The level of understanding that the general public has about a subject.',
    ipa: '/ˈpʌb.lɪk əˈweə.nəs/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Social consciousness', meaning: 'Toplumsal bilinç', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['raise public awareness', 'increase public awareness'],
    collocationMeanings: {
      'raise public awareness': 'kamuoyu farkındalığı yaratmak',
      'increase public awareness': 'kamuoyu bilincini artırmak'
    },
    examples: ['The campaign aims to raise public awareness of environmental issues.'],
    exampleTranslations: ['Kampanya, çevre sorunları hakkında kamuoyu farkındalığı yaratmayı hedefliyor.']
  },
  {
    id: 'substantial_donation',
    word: 'Substantial donation',
    pos: 'noun phrase',
    meaning: 'Önemli/yüklü miktarda bağış',
    definition: 'A large amount of money given to an organization to help them.',
    ipa: '/səbˈstæn.ʃəl dəʊˈneɪ.ʃən/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Generous gift', meaning: 'Cömert bağış', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['receive substantial donation', 'make substantial donation'],
    collocationMeanings: {
      'receive substantial donation': 'yüklü bağış almak',
      'make substantial donation': 'yüklü bağış yapmak'
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
    ipa: '/ˈwaɪ.dər ˈɔː.di.əns/',
    level: 'upper-intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Broader public', meaning: 'Daha geniş kamuoyu', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['reach a wider audience', 'appeal to wider audience'],
    collocationMeanings: {
      'reach a wider audience': 'daha geniş kitleye ulaşmak',
      'appeal to wider audience': 'daha geniş kitleye hitap etmek'
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