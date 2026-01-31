import { VocabularyWord, Level } from '@/types/learning';

export const vocabularyData: VocabularyWord[] = [
  // --- PRE-INTERMEDIATE (A2) ---
  {
    id: 'relatives_lh',
    word: 'Relatives',
    pos: 'noun',
    meaning: 'akrabalar',
    definition: 'Members of your family, especially ones who do not live with you.',
    ipa: '/ rel. .t vz/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'relation', pos: 'noun', meaning: 'ili ki' }],
    synonyms: [{ word: 'Relations', meaning: 'akrabalar', pos: 'noun' }],
    antonyms: [{ word: 'Strangers', meaning: 'yabanc lar', pos: 'noun' }],
    collocations: ['close relatives', 'distant relatives'],
    collocationMeanings: { 'close relatives': 'yak n akrabalar', 'distant relatives': 'uzak akrabalar' },
    examples: ['We spent the week visiting relatives.'],
    exampleTranslations: ['Haftay  akrabalar  ziyaret ederek ge irdik.']
  },
  {
    id: 'strangers_lh',
    word: 'Strangers',
    pos: 'noun',
    meaning: 'yabanc lar',
    definition: 'People who you do not know.',
    ipa: '/ stre nd  rz/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'strange', pos: 'adj', meaning: 'garip' }],
    synonyms: [{ word: 'Unknown people', meaning: 'tan nmayan ki iler', pos: 'noun' }],
    antonyms: [{ word: 'Friends', meaning: 'arkada lar', pos: 'noun' }],
    collocations: ['total stranger', 'stranger danger'],
    collocationMeanings: { 'total stranger': 'tamamen yabanc ', 'stranger danger': 'yabanc  tehlikesi' },
    examples: ['The poster warns children not to talk to strangers.'],
    exampleTranslations: ['Afi ,  ocuklar  yabanc larla konu mamalar  konusunda uyar yor.']
  },
  {
    id: 'colleagues_lh',
    word: 'Colleagues',
    pos: 'noun',
    meaning: 'meslekta lar, i  arkada lar ',
    definition: 'People who work in the same organization or department as you.',
    ipa: '/ k l.i  z/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Co-workers', meaning: 'i  arkada lar ', pos: 'noun' }],
    antonyms: [{ word: 'Rivals', meaning: 'rakipler', pos: 'noun' }],
    collocations: ['work colleagues', 'former colleagues'],
    collocationMeanings: { 'work colleagues': 'i  meslekta lar ', 'former colleagues': 'eski meslekta lar' },
    examples: ['He is popular with his colleagues.'],
    exampleTranslations: ['   arkada lar  aras nda pop lerdir.']
  },
  {
    id: 'confident_lh',
    word: 'Confident',
    pos: 'adjective',
    meaning: 'kendine g venen',
    definition: 'Someone who believes in their own abilities and so does not feel nervous or frightened.',
    ipa: '/ k n.f .d nt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'confidence', pos: 'noun', meaning: 'g ven' }],
    synonyms: [{ word: 'Self-assured', meaning: 'kendinden emin', pos: 'adj' }],
    antonyms: [{ word: 'Insecure', meaning: 'g vensiz', pos: 'adj' }],
    collocations: ['feel confident', 'confident person'],
    collocationMeanings: { 'feel confident': 'kendine g venmek', 'confident person': 'kendinden emin ki i' },
    examples: ['He is confident in his ability to play the piano.'],
    exampleTranslations: ['Piyano  alma yetene i konusunda kendine g veniyor.']
  },
  {
    id: 'curious_lh',
    word: 'Curious',
    pos: 'adjective',
    meaning: 'merakl ',
    definition: 'Someone who wants to find out about something.',
    ipa: '/ kj  .ri. s/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'curiosity', pos: 'noun', meaning: 'merak' }],
    synonyms: [{ word: 'Inquisitive', meaning: 'merakl ', pos: 'adj' }],
    antonyms: [{ word: 'Indifferent', meaning: 'ilgisiz', pos: 'adj' }],
    collocations: ['curious to know', 'curious about'],
    collocationMeanings: { 'curious to know': 'bilmeye merakl ', 'curious about': 'hakk nda merakl ' },
    examples: ["I'm curious to know why she made that decision."],
    exampleTranslations: ['Neden bu karar  verdi ini merak ediyorum.']
  },
  {
    id: 'hard-working_lh',
    word: 'Hard-working',
    pos: 'adjective',
    meaning: ' al  kan',
    definition: 'Someone who puts a lot of effort into their work.',
    ipa: '/ h  d w  .k  /',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Diligent', meaning: 'gayretli', pos: 'adj' }, { word: 'Industrious', meaning: ' al  kan', pos: 'adj' }],
    antonyms: [{ word: 'Lazy', meaning: 'tembel', pos: 'adj' }],
    collocations: ['extremely hard-working', 'hard-working student'],
    collocationMeanings: { 'extremely hard-working': 'son derece  al  kan', 'hard-working student': ' al  kan   renci' },
    examples: ['She was very hard-working and reliable.'],
    exampleTranslations: [' ok  al  kan ve g venilirdi.']
  },
  {
    id: 'independent_lh',
    word: 'Independent',
    pos: 'adjective',
    meaning: 'ba  ms z,  zg r',
    definition: 'Someone who does not depend on other people for help.',
    ipa: '/  n.d  pen.d nt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'independence', pos: 'noun', meaning: 'ba  ms zl k' }],
    synonyms: [{ word: 'Self-sufficient', meaning: 'kendi kendine yeten', pos: 'adj' }],
    antonyms: [{ word: 'Dependent', meaning: 'ba  ml ', pos: 'adj' }],
    collocations: ['financially independent', 'independent state'],
    collocationMeanings: { 'financially independent': 'maddi olarak ba  ms z', 'independent state': 'ba  ms z devlet' },
    examples: ['Even as a child he was very independent.'],
    exampleTranslations: [' ocukken bile  ok ba  ms zd .']
  },
  {
    id: 'sensible_lh',
    word: 'Sensible',
    pos: 'adjective',
    meaning: 'mant kl , akl  ba  nda',
    definition: 'Someone who is reasonable and practical.',
    ipa: '/ sen.s .b l/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'sense', pos: 'noun', meaning: 'mant k' }],
    synonyms: [{ word: 'Rational', meaning: 'mant kl ', pos: 'adj' }],
    antonyms: [{ word: 'Foolish', meaning: 'aptalca', pos: 'adj' }],
    collocations: ['sensible advice', 'sensible decision'],
    collocationMeanings: { 'sensible advice': 'mant kl  tavsiye', 'sensible decision': 'ak lc  karar' },
    examples: ["I don't see how any sensible person could agree with him."],
    exampleTranslations: ['Akl  ba  nda herhangi birinin ona nas l kat labilece ini anlam yorum.']
  },
  {
    id: 'sociable_lh',
    word: 'Sociable',
    pos: 'adjective',
    meaning: 'sosyal, arkada  canl s ',
    definition: 'Someone who is friendly and enjoys being with other people.',
    ipa: '/ s  .  .b l/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'society', pos: 'noun', meaning: 'toplum' }],
    synonyms: [{ word: 'Outgoing', meaning: 'canayak n', pos: 'adj' }],
    antonyms: [{ word: 'Unsociable', meaning: 'so uk/asosyal', pos: 'adj' }],
    collocations: ['highly sociable', 'sociable person'],
    collocationMeanings: { 'highly sociable': 'olduk a sosyal', 'sociable person': 'sosyal ki i' },
    examples: ["I'm not feeling very sociable today."],
    exampleTranslations: ['Bug n pek sosyal hissetmiyorum.']
  },
  {
    id: 'well-organised_lh',
    word: 'Well-organised',
    pos: 'adjective',
    meaning: 'd zenli, planl ',
    definition: 'Someone who arranges and plans activities carefully and effectively.',
    ipa: '/wel    .  .na zd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'organise', pos: 'verb', meaning: 'd zenlemek' }],
    synonyms: [{ word: 'Methodical', meaning: 'y ntemli', pos: 'adj' }],
    antonyms: [{ word: 'Disorganised', meaning: 'd zensiz', pos: 'adj' }],
    collocations: ['well-organised office', 'stay well-organised'],
    collocationMeanings: { 'well-organised office': 'd zenli ofis', 'stay well-organised': 'd zenli kalmak' },
    examples: ["He's always so well-organised."],
    exampleTranslations: ['O her zaman  ok d zenlidir.']
  },
  {
    id: 'keen_on_lh',
    word: 'Keen on',
    pos: 'adjective + preposition',
    meaning: 'merakl , d  k n',
    definition: 'Wanting to do something, or wanting other people to do something.',
    ipa: '/ki n  n/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Enthusiastic about', meaning: 'hevesli', pos: 'phrase' }],
    antonyms: [{ word: 'Apathetic', meaning: 'ilgisiz', pos: 'adj' }],
    collocations: ['very keen on', 'not keen on'],
    collocationMeanings: { 'very keen on': ' ok d  k n', 'not keen on': 's cak bakmamak' },
    examples: ["The captain wasn't keen on having him in the team."],
    exampleTranslations: ['Kaptan onu tak mda g rmeye pek hevesli de ildi.']
  },
  {
    id: 'involved_in_lh',
    word: 'Involved in',
    pos: 'adjective + preposition',
    meaning: 'dahil olmak, i inde yer almak',
    definition: 'Taking part in something.',
    ipa: '/ n v lvd  n/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'involvement', pos: 'noun', meaning: 'kat l m' }],
    synonyms: [{ word: 'Participating in', meaning: 'kat l mc ', pos: 'phrase' }],
    antonyms: [{ word: 'Excluded from', meaning: 'd  lanm  ', pos: 'phrase' }],
    collocations: ['deeply involved in', 'get involved in'],
    collocationMeanings: { 'deeply involved in': 'derinden m dahil', 'get involved in': 'bir  eye dahil olmak' },
    examples: ['Phillip was involved in organising the party.'],
    exampleTranslations: ['Phillip partiyi organize etme i ine dahil olmu tu.']
  },
  {
    id: 'responsible_for_lh',
    word: 'Responsible for',
    pos: 'adjective + preposition',
    meaning: 'sorumlu olmak',
    definition: 'Being in charge of someone or something.',
    ipa: '/r  sp n.s .b l f  r/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'responsibility', pos: 'noun', meaning: 'sorumluluk' }],
    synonyms: [{ word: 'In charge of', meaning: 'y netiminde', pos: 'phrase' }],
    antonyms: [{ word: 'Irresponsible', meaning: 'sorumsuz', pos: 'adj' }],
    collocations: ['solely responsible for', 'personally responsible for'],
    collocationMeanings: { 'solely responsible for': 'tek ba  na sorumlu', 'personally responsible for': ' ahsen sorumlu' },
    examples: ['The manager is responsible for the general running of the theatre.'],
    exampleTranslations: ['M d r tiyatronun genel i leyi inden sorumludur.']
  },
  {
    id: 'attractive_lh',
    word: 'Attractive',
    pos: 'adjective',
    meaning: ' ekici, ho ',
    definition: 'Pleasant in some way.',
    ipa: '/  tr k.t v/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'attraction', pos: 'noun', meaning: 'cazibe' }],
    synonyms: [{ word: 'Appealing', meaning: ' ekici', pos: 'adj' }, { word: 'Good-looking', meaning: 'yak   kl /g zel', pos: 'adj' }],
    antonyms: [{ word: 'Ugly', meaning: ' irkin', pos: 'adj' }],
    collocations: ['physically attractive', 'attractive countryside'],
    collocationMeanings: { 'physically attractive': 'fiziksel olarak  ekici', 'attractive countryside': 'ho  k rsal manzara' },
    examples: ["It's a pretty village set in attractive countryside."],
    exampleTranslations: [' ekici bir k rsal b lgede kurulmu  g zel bir k yd r.']
  },
  {
    id: 'convenient_lh',
    word: 'Convenient',
    pos: 'adjective',
    meaning: 'uygun, elveri li',
    definition: 'Easy to use, or appropriate for a particular purpose.',
    ipa: '/k n vi .ni. nt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'convenience', pos: 'noun', meaning: 'kolayl k' }],
    synonyms: [{ word: 'Handy', meaning: 'kullan  l ', pos: 'adj' }],
    antonyms: [{ word: 'Inconvenient', meaning: 'uygunsuz', pos: 'adj' }],
    collocations: ['convenient location', 'convenient time'],
    collocationMeanings: { 'convenient location': 'uygun konum', 'convenient time': 'uygun zaman' },
    examples: ['The hotel was only five minutes from the beach, which was convenient.'],
    exampleTranslations: ['Otel plaja sadece be  dakika mesafeydi, bu da olduk a uygundu.']
  },
  {
    id: 'inconvenient_lh',
    word: 'Inconvenient',
    pos: 'adjective',
    meaning: 'uygunsuz, zahmetli',
    definition: 'Causing difficulties or extra effort.',
    ipa: '/  n.k n vi .ni. nt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'convenient', pos: 'adj', meaning: 'uygun' }],
    synonyms: [{ word: 'Troublesome', meaning: 'zahmetli', pos: 'adj' }],
    antonyms: [{ word: 'Convenient', meaning: 'uygun', pos: 'adj' }],
    collocations: ['highly inconvenient', 'inconvenient truth'],
    collocationMeanings: { 'highly inconvenient': 'son derece uygunsuz', 'inconvenient truth': 'ac  ger ek' },
    examples: ['There are no trains today, which is quite inconvenient.'],
    exampleTranslations: ['Bug n hi  tren yok, bu olduk a uygunsuz (zahmetli) bir durum.']
  },
  {
    id: 'loud_lh',
    word: 'Loud',
    pos: 'adjective',
    meaning: 'y ksek sesli',
    definition: 'Used for describing a sound that is strong and very easy to hear.',
    ipa: '/la d/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'loudly', pos: 'adverb', meaning: 'y ksek sesle' }],
    synonyms: [{ word: 'Noisy', meaning: 'g r lt l ', pos: 'adj' }],
    antonyms: [{ word: 'Quiet', meaning: 'sessiz', pos: 'adj' }],
    collocations: ['loud noise', 'loud music'],
    collocationMeanings: { 'loud noise': 'y ksek ses', 'loud music': 'y ksek sesli m zik' },
    examples: ['There was a loud knocking on the door.'],
    exampleTranslations: ['Kap da y ksek sesli bir vurma sesi vard .']
  },
  {
    id: 'noisy_lh',
    word: 'Noisy',
    pos: 'adjective',
    meaning: 'g r lt l ',
    definition: 'Making a lot of noise.',
    ipa: '/ n  .zi/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'noise', pos: 'noun', meaning: 'g r lt ' }],
    synonyms: [{ word: 'Boisterous', meaning: 'g r lt c ', pos: 'adj' }],
    antonyms: [{ word: 'Quiet', meaning: 'sessiz', pos: 'adj' }, { word: 'Silent', meaning: 'sessiz', pos: 'adj' }],
    collocations: ['noisy neighbors', 'noisy restaurant'],
    collocationMeanings: { 'noisy neighbors': 'g r lt l  kom ular', 'noisy restaurant': 'g r lt l  restoran' },
    examples: ['Unfortunately we have noisy neighbours.'],
    exampleTranslations: ['Maalesef g r lt l  kom ular m z var.']
  },
  {
    id: 'old-fashioned_lh',
    word: 'Old-fashioned',
    pos: 'adjective',
    meaning: 'eski moda, demode',
    definition: 'No longer modern or fashionable.',
    ipa: '/   ld f  . nd/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Outdated', meaning: 'g ncelli ini yitirmi ', pos: 'adj' }],
    antonyms: [{ word: 'Modern', meaning: 'modern', pos: 'adj' }, { word: 'Trendy', meaning: 'moda', pos: 'adj' }],
    collocations: ['old-fashioned briefcase', 'old-fashioned ideas'],
    collocationMeanings: { 'old-fashioned briefcase': 'eski moda  anta', 'old-fashioned ideas': 'eski moda fikirler' },
    examples: ['Blake was carrying an old-fashioned leather briefcase.'],
    exampleTranslations: ['Blake eski moda deri bir  anta ta  yordu.']
  },
  {
    id: 'rely_on_lh',
    word: 'Rely on',
    pos: 'verb + preposition',
    meaning: 'g venmek, bel ba lamak',
    definition: 'To trust someone to do something for you.',
    ipa: '/r  la   n/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'reliable', pos: 'adj', meaning: 'g venilir' }],
    synonyms: [{ word: 'Depend on', meaning: 'ba l  olmak', pos: 'phrase' }],
    antonyms: [{ word: 'Distrust', meaning: 'g venmemek', pos: 'verb' }],
    collocations: ['heavily rely on', 'can rely on'],
    collocationMeanings: { 'heavily rely on': 'b y k  l  de bel ba lamak', 'can rely on': 'g venebilirsin' },
    examples: ['We can rely on my brother to help us.'],
    exampleTranslations: ['Bize yard m etmesi i in karde ime g venebiliriz.']
  },
  {
    id: 'fall_in_love_lh',
    word: 'Fall in love',
    pos: 'verb phrase',
    meaning: 'a  k olmak',
    definition: 'To start to love someone.',
    ipa: '/f  l  n l v/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Fall for', meaning: 'tutulmak', pos: 'phrase' }],
    antonyms: [{ word: 'Fall out of love', meaning: 'a ktan so umak', pos: 'phrase' }],
    collocations: ['fall in love with', 'quickly fall in love'],
    collocationMeanings: { 'fall in love with': 'birine a  k olmak', 'quickly fall in love': ' abucak a  k olmak' },
    examples: ['Why do we fall in love with one person rather than another?'],
    exampleTranslations: ['Neden ba kas na de il de bir ki iye a  k oluruz?']
  },
  {
    id: 'coach_lh',
    word: 'Coach',
    pos: 'noun',
    meaning: ' ehirleraras  otob s',
    definition: 'A long comfortable vehicle for carrying a large number of passengers, especially on long journeys.',
    ipa: '/k  t /',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Bus', meaning: 'otob s', pos: 'noun' }],
    antonyms: [],
    collocations: ['travel by coach', 'luxury coach'],
    collocationMeanings: { 'travel by coach': ' ehirleraras  otob sle seyahat etmek', 'luxury coach': 'l ks otob s' },
    examples: ['We travelled to Oxford by coach.'],
    exampleTranslations: ['Oxford a otob sle seyahat ettik.']
  },
  {
    id: 'tram_lh',
    word: 'Tram',
    pos: 'noun',
    meaning: 'tramvay',
    definition: 'A long narrow vehicle that travels along metal tracks in the middle of a street.',
    ipa: '/tr m/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Streetcar', meaning: 'tramvay (ABD)', pos: 'noun' }],
    antonyms: [],
    collocations: ['tram tracks', 'ride the tram'],
    collocationMeanings: { 'tram tracks': 'tramvay raylar ', 'ride the tram': 'tramvaya binmek' },
    examples: ['The city has a tram which you can use to travel around.'],
    exampleTranslations: [' ehirde gezmek i in kullanabilece iniz bir tramvay var.']
  },
  {
    id: 'dishonest_lh',
    word: 'Dishonest',
    pos: 'adjective',
    meaning: 'd r st olmayan, sahtekar',
    definition: 'Willing to do things that are not honest, for example to tell lies or steal things.',
    ipa: '/d  s n. st/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'honesty', pos: 'noun', meaning: 'd r stl k' }],
    synonyms: [{ word: 'Deceitful', meaning: 'aldat c ', pos: 'adj' }],
    antonyms: [{ word: 'Honest', meaning: 'd r st', pos: 'adj' }],
    collocations: ['dishonest behavior', 'dishonest employee'],
    collocationMeanings: { 'dishonest behavior': 'd r st olmayan davran  ', 'dishonest employee': 'd r st olmayan  al  an' },
    examples: ['They admitted that there were some dishonest employees working in the bank.'],
    exampleTranslations: ['Bankada  al  an baz  d r st olmayan personeller oldu unu kabul ettiler.']
  },
  {
    id: 'disorganised_lh',
    word: 'Disorganised',
    pos: 'adjective',
    meaning: 'd zensiz',
    definition: 'Not arranged according to a clear plan or system.',
    ipa: '/d s   .  .na zd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'organise', pos: 'verb', meaning: 'd zenlemek' }],
    synonyms: [{ word: 'Messy', meaning: 'da  n k', pos: 'adj' }],
    antonyms: [{ word: 'Well-organised', meaning: 'd zenli', pos: 'adj' }],
    collocations: ['highly disorganised', 'disorganised person'],
    collocationMeanings: { 'highly disorganised': 'son derece d zensiz', 'disorganised person': 'd zensiz ki i' },
    examples: ["He is very disorganised - he doesn't know where anything is!"],
    exampleTranslations: ['O  ok d zensizdir - hi bir  eyin nerede oldu unu bilmiyor!']
  },
  {
    id: 'impatient_lh',
    word: 'Impatient',
    pos: 'adjective',
    meaning: 'sab rs z',
    definition: 'Annoyed because something is not happening as quickly as you want.',
    ipa: '/ m pe .  nt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'patience', pos: 'noun', meaning: 'sab r' }],
    synonyms: [{ word: 'Restless', meaning: 'huzursuz', pos: 'adj' }],
    antonyms: [{ word: 'Patient', meaning: 'sab rl ', pos: 'adj' }],
    collocations: ['get impatient', 'grow impatient'],
    collocationMeanings: { 'get impatient': 'sab rs zlanmak', 'grow impatient': 'sab rs zl    artmak' },
    examples: ["'Come on!' said Maggie, becoming impatient."],
    exampleTranslations: ["'Hadi ama!' dedi Maggie sab rs zlanarak."]
  },
  {
    id: 'impolite_lh',
    word: 'Impolite',
    pos: 'adjective',
    meaning: 'kaba, nezaketsiz',
    definition: 'Not polite.',
    ipa: '/  m.p  la t/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'polite', pos: 'adj', meaning: 'nazik' }],
    synonyms: [{ word: 'Rude', meaning: 'kaba', pos: 'adj' }],
    antonyms: [{ word: 'Polite', meaning: 'nazik', pos: 'adj' }],
    collocations: ['extremely impolite', 'impolite remark'],
    collocationMeanings: { 'extremely impolite': 'son derece kaba', 'impolite remark': 'nezaketsiz s z' },
    examples: ['It would be impolite to leave the party so early.'],
    exampleTranslations: ['Partiden bu kadar erken ayr lmak kabal k olur.']
  },
  {
    id: 'inaccurate_lh',
    word: 'Inaccurate',
    pos: 'adjective',
    meaning: 'hatal , yanl  ',
    definition: 'Not accurate or correct.',
    ipa: '/ n  k.j .r t/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'accurate', pos: 'adj', meaning: 'do ru/kesin' }],
    synonyms: [{ word: 'Incorrect', meaning: 'yanl  ', pos: 'adj' }],
    antonyms: [{ word: 'Accurate', meaning: 'do ru/kesin', pos: 'adj' }],
    collocations: ['highly inaccurate', 'totally inaccurate'],
    collocationMeanings: { 'highly inaccurate': 'son derece hatal ', 'totally inaccurate': 'tamamen yanl  ' },
    examples: ['She was given inaccurate information.'],
    exampleTranslations: ['Ona yanl   bilgi verildi.']
  },
  {
    id: 'unkind_lh',
    word: 'Unkind',
    pos: 'adjective',
    meaning: 'nezaketsiz, kat ',
    definition: 'Unfriendly, insulting, or cruel.',
    ipa: '/ n ka nd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'kind', pos: 'adj', meaning: 'nazik' }],
    synonyms: [{ word: 'Cruel', meaning: 'zalim', pos: 'adj' }],
    antonyms: [{ word: 'Kind', meaning: 'nazik', pos: 'adj' }],
    collocations: ['unkind remark', 'be unkind to'],
    collocationMeanings: { 'unkind remark': 'nezaketsiz s z', 'be unkind to': 'birine kar   kaba/kat  olmak' },
    examples: ['He made an unkind remark.'],
    exampleTranslations: ['Kaba/nezaketsiz bir yorumda bulundu.']
  },
  {
    id: 'balcony_lh',
    word: 'Balcony',
    pos: 'noun',
    meaning: 'balkon',
    definition: 'A place where you can stand just outside an upper window.',
    ipa: '/ b l.k .ni/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['on the balcony', 'small balcony'],
    collocationMeanings: { 'on the balcony': 'balkonda', 'small balcony': 'k   k balkon' },
    examples: ['We ate dinner on the balcony.'],
    exampleTranslations: ['Ak am yeme ini balkonda yedik.']
  },
  {
    id: 'beach_resort_lh',
    word: 'Beach resort',
    pos: 'noun',
    meaning: 'plaj tesisi/tatil yeri',
    definition: 'A place many people go to for a holiday that is located by a beach.',
    ipa: '/bi t  r  z  t/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Seaside resort', meaning: 'deniz kenar  tatil yeri', pos: 'noun' }],
    antonyms: [],
    collocations: ['popular beach resort', 'luxury beach resort'],
    collocationMeanings: { 'popular beach resort': 'pop ler plaj tesisi', 'luxury beach resort': 'l ks plaj tesisi' },
    examples: ['A holiday at a beach resort is the most relaxing break.'],
    exampleTranslations: ['Bir plaj tesisindeki tatil en dinlendirici molad r.']
  },
  {
    id: 'chalet_lh',
    word: 'Chalet',
    pos: 'noun',
    meaning: 'da  evi',
    definition: 'A wooden house built in a mountain area, especially in Switzerland.',
    ipa: '/   l.e /',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Log cabin', meaning: 'k t k ev', pos: 'noun' }],
    antonyms: [],
    collocations: ['ski chalet', 'wooden chalet'],
    collocationMeanings: { 'ski chalet': 'kayak evi', 'wooden chalet': 'ah ap da  evi' },
    examples: ['The chalet had a great view of the mountains.'],
    exampleTranslations: ['Da  evinin harika bir da  manzaras  vard .']
  },
  {
    id: 'cruise_ship_lh',
    word: 'Cruise ship',
    pos: 'noun',
    meaning: 'yolcu gemisi, kruvaziyer',
    definition: 'A large comfortable ship used for cruises.',
    ipa: '/ kru z    p/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Ocean liner', meaning: 'okyanus gemisi', pos: 'noun' }],
    antonyms: [],
    collocations: ['luxury cruise ship', 'on a cruise ship'],
    collocationMeanings: { 'luxury cruise ship': 'l ks yolcu gemisi', 'on a cruise ship': 'bir yolcu gemisinde' },
    examples: ['The cruise ship went around the Caribbean.'],
    exampleTranslations: ['Yolcu gemisi Karayipler etraf nda tur att .']
  },
  {
    id: 'dorm_lh',
    word: 'Dorm',
    pos: 'noun',
    meaning: 'yurt, yatakhane',
    definition: 'Shortened form of dormitory which is a large room where a lot of people sleep.',
    ipa: '/d  m/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'dormitory', pos: 'noun', meaning: 'yurt' }],
    synonyms: [{ word: 'Hostel room', meaning: 'yurt odas ', pos: 'noun' }],
    antonyms: [],
    collocations: ['university dorm', 'crowded dorm'],
    collocationMeanings: { 'university dorm': ' niversite yurdu', 'crowded dorm': 'kalabal k yatakhane' },
    examples: ['The dorm was full and very noisy.'],
    exampleTranslations: ['Yatakhane doluydu ve  ok g r lt l yd .']
  },
  {
    id: 'campsite_lh',
    word: 'Campsite',
    pos: 'noun',
    meaning: 'kamp alan ',
    definition: 'A place where people on holiday can stay outdoors in tents.',
    ipa: '/ k mp.sa t/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'camping', pos: 'noun', meaning: 'kamp yapma' }],
    synonyms: [{ word: 'Campground', meaning: 'kamp yeri', pos: 'noun' }],
    antonyms: [],
    collocations: ['pitch a tent at a campsite', 'official campsite'],
    collocationMeanings: { 'pitch a tent at a campsite': 'kamp alan nda  ad r kurmak', 'official campsite': 'resmi kamp alan ' },
    examples: ['The children enjoyed staying at the campsite.'],
    exampleTranslations: [' ocuklar kamp alan nda kalmaktan keyif ald lar.']
  },
  {
    id: 'self-catering_lh',
    word: 'Self-catering',
    pos: 'adjective',
    meaning: 'yeme ini kendi pi iren/sa layan',
    definition: 'A type of holiday or accommodation where you can cook your own food.',
    ipa: '/ self ke .t r.  /',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'catering', pos: 'noun', meaning: 'ikram hizmeti' }],
    synonyms: [],
    antonyms: [{ word: 'All-inclusive', meaning: 'her  ey dahil', pos: 'adj' }],
    collocations: ['self-catering apartment', 'self-catering holiday'],
    collocationMeanings: { 'self-catering apartment': 'mutfakl  daire', 'self-catering holiday': 'yeme i kendin yapt   n tatil' },
    examples: ['It is easier to book self-catering accommodation when you have children.'],
    exampleTranslations: [' ocu unuz oldu unda mutfakl  (kendi yeme ini yapt   n) konaklama yeri ay rtmak daha kolayd r.']
  },
  {
    id: 'reception_lh',
    word: 'Reception',
    pos: 'noun',
    meaning: 'resepsiyon, kar  lama',
    definition: 'The part of a large building such as a hotel or office where visitors are welcomed.',
    ipa: '/r  sep.  n/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'receptionist', pos: 'noun', meaning: 'resepsiyonist' }],
    synonyms: [{ word: 'Front desk', meaning: ' n b ro', pos: 'noun' }],
    antonyms: [],
    collocations: ['reception desk', 'check in at reception'],
    collocationMeanings: { 'reception desk': 'resepsiyon masas ', 'check in at reception': 'resepsiyonda giri  yapmak' },
    examples: ['Visitors must report to reception first.'],
    exampleTranslations: ['Ziyaret iler  nce resepsiyona bildirmelidir.']
  },
  {
    id: 'possibility_lh',
    word: 'Possibility',
    pos: 'noun',
    meaning: 'olas l k, ihtimal',
    definition: 'The chance that something might happen or be true.',
    ipa: '/ p s.  b l. .ti/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'possible', pos: 'adj', meaning: 'm mk n' }],
    synonyms: [{ word: 'Likelihood', meaning: 'olas l k', pos: 'noun' }],
    antonyms: [{ word: 'Impossibility', meaning: 'imkans zl k', pos: 'noun' }],
    collocations: ['distinct possibility', 'explore the possibility'],
    collocationMeanings: { 'distinct possibility': 'belirgin olas l k', 'explore the possibility': 'olas l    ara t rmak' },
    examples: ["Another possibility is that we'll go to Mexico instead."],
    exampleTranslations: ['Di er bir olas l k da onun yerine Meksika ya gidecek olmam z.']
  },
  {
    id: 'prediction_lh',
    word: 'Prediction',
    pos: 'noun',
    meaning: 'tahmin,  ng r ',
    definition: 'A statement about what you think will happen in the future.',
    ipa: '/pr  d k.  n/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'predict', pos: 'verb', meaning: 'tahmin etmek' }],
    synonyms: [{ word: 'Forecast', meaning: ' ng r ', pos: 'noun' }],
    antonyms: [],
    collocations: ['make a prediction', 'accurate prediction'],
    collocationMeanings: { 'make a prediction': 'tahminde bulunmak', 'accurate prediction': 'do ru tahmin' },
    examples: ['The government has made a prediction that unemployment will rise this year.'],
    exampleTranslations: ['H k met, bu y l i sizli in artaca   y n nde bir  ng r de bulundu.']
  },
  {
    id: 'agreement_lh',
    word: 'Agreement',
    pos: 'noun',
    meaning: 'anla ma, mutabakat',
    definition: 'An arrangement or decision about what to do, made by two or more people or groups.',
    ipa: '/   ri .m nt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'agree', pos: 'verb', meaning: 'anla mak' }],
    synonyms: [{ word: 'Contract', meaning: 's zle me', pos: 'noun' }],
    antonyms: [{ word: 'Disagreement', meaning: 'anla mazl k', pos: 'noun' }],
    collocations: ['reach an agreement', 'sign an agreement'],
    collocationMeanings: { 'reach an agreement': 'anla maya varmak', 'sign an agreement': 'anla ma imzalamak' },
    examples: ['Our agreement was that you would pay by the first of the month.'],
    exampleTranslations: ['Anla mam z,  demeyi ay n birine kadar yapaca  n z y n ndeydi.']
  },
  {
    id: 'development_lh',
    word: 'Development',
    pos: 'noun',
    meaning: 'geli im, ilerleme',
    definition: 'Change, growth, or improvement over a period of time.',
    ipa: '/d  vel. p.m nt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'develop', pos: 'verb', meaning: 'geli tirmek' }],
    synonyms: [{ word: 'Progress', meaning: 'ilerleme', pos: 'noun' }],
    antonyms: [{ word: 'Regression', meaning: 'gerileme', pos: 'noun' }],
    collocations: ['personal development', 'economic development'],
    collocationMeanings: { 'personal development': 'ki isel geli im', 'economic development': 'ekonomik geli im' },
    examples: ['We encourage our staff in their development of new skills.'],
    exampleTranslations: ['Personelimizi yeni beceriler geli tirme konusunda te vik ediyoruz.']
  },
  {
    id: 'invention_lh',
    word: 'Invention',
    pos: 'noun',
    meaning: 'icat, bulu ',
    definition: 'A machine, tool, or system that someone has made, designed, or thought of for the first time.',
    ipa: '/ n ven.  n/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'invent', pos: 'verb', meaning: 'icat etmek' }],
    synonyms: [{ word: 'Innovation', meaning: 'yenilik', pos: 'noun' }],
    antonyms: [],
    collocations: ['great invention', 'modern invention'],
    collocationMeanings: { 'great invention': 'b y k bulu ', 'modern invention': 'modern icat' },
    examples: ['Inventions like the electric light bulb changed the way people lived.'],
    exampleTranslations: ['Elektrikli ampul gibi icatlar insanlar n ya ay   bi imini de i tirdi.']
  },
  {
    id: 'kindness_lh',
    word: 'Kindness',
    pos: 'noun',
    meaning: 'nezaket, iyilik',
    definition: 'Kind behaviour, or kind feelings.',
    ipa: '/ ka nd.n s/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'kind', pos: 'adj', meaning: 'nazik' }],
    synonyms: [{ word: 'Benevolence', meaning: 'iyilikseverlik', pos: 'noun' }],
    antonyms: [{ word: 'Cruelty', meaning: 'zalimlik', pos: 'noun' }],
    collocations: ['act of kindness', 'show kindness'],
    collocationMeanings: { 'act of kindness': 'iyilik hareketi', 'show kindness': 'nezaket g stermek' },
    examples: ['I shall never forget the kindness of the nursing staff.'],
    exampleTranslations: ['Hem irelerin g sterdi i nezaketi asla unutmayaca  m.']
  },
  {
    id: 'by_the_fire_lh',
    word: 'By the fire',
    pos: 'phrase',
    meaning: 'ate in ba  nda,   mine yan ',
    definition: 'In a position near a fire.',
    ipa: '/ba      fa  r/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['sit by the fire'],
    collocationMeanings: { 'sit by the fire': 'ate in ba  nda oturmak' },
    examples: ['The cat curled up by the fire.'],
    exampleTranslations: ['Kedi ate in ba  nda k vr l p yatt .']
  },
  {
    id: 'get_together_lh',
    word: 'Get together',
    pos: 'phrase',
    meaning: 'bir araya gelmek, bulu mak',
    definition: 'If people get together, they meet in order to do something or to spend time together.',
    ipa: '/ et t   e . r/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Meet up', meaning: 'bulu mak', pos: 'phrase' }],
    antonyms: [{ word: 'Part ways', meaning: 'ayr lmak', pos: 'phrase' }],
    collocations: ['family get together', 'social get together'],
    collocationMeanings: { 'family get together': 'aile bulu mas ', 'social get together': 'sosyal toplant ' },
    examples: ['Greg suggested getting together next weekend.'],
    exampleTranslations: ['Greg  n m zdeki hafta sonu bir araya gelmeyi  nerdi.']
  },
  {
    id: 'sadness_lh',
    word: 'Sadness',
    pos: 'noun',
    meaning: ' z nt , keder',
    definition: 'The feeling of being unhappy, especially because something bad has happened.',
    ipa: '/ s d.n s/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'sad', pos: 'adj', meaning: ' zg n' }],
    synonyms: [{ word: 'Sorrow', meaning: 'keder', pos: 'noun' }],
    antonyms: [{ word: 'Happiness', meaning: 'mutluluk', pos: 'noun' }],
    collocations: ['overcome with sadness', 'deep sadness'],
    collocationMeanings: { 'overcome with sadness': 'kederden bitkin d  mek', 'deep sadness': 'derin  z nt ' },
    examples: ["Joan's childhood was filled with pain and sadness."],
    exampleTranslations: ['Joan un  ocuklu u ac  ve kederle doluydu.']
  },
  {
    id: 'get_a_pay_rise_lh',
    word: 'Get a pay rise',
    pos: 'phrase',
    meaning: 'maa  zamm  almak',
    definition: 'To receive an increase in the amount of money you are paid for doing your job.',
    ipa: '/ et   pe  ra z/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Get a salary increase', meaning: 'maa  art    almak', pos: 'phrase' }],
    antonyms: [],
    collocations: ['hope to get a pay rise'],
    collocationMeanings: { 'hope to get a pay rise': 'maa  zamm  almay  ummak' },
    examples: ['I hope to get a pay rise next year.'],
    exampleTranslations: ['Gelecek y l maa  zamm  almay  umuyorum.']
  },
  {
    id: 'earn_a_salary_lh',
    word: 'Earn a salary',
    pos: 'phrase',
    meaning: 'maa  kazanmak',
    definition: 'Receive an amount of money, every month or year, for the work you do.',
    ipa: '/  n    s l. r.i/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Make money', meaning: 'para kazanmak', pos: 'phrase' }],
    antonyms: [],
    collocations: ['earn a high salary', 'start to earn a salary'],
    collocationMeanings: { 'earn a high salary': 'y ksek maa  kazanmak', 'start to earn a salary': 'maa  almaya ba lamak' },
    examples: ['When I earn a salary, I can save to buy a house.'],
    exampleTranslations: ['Maa  almaya ba lad   mda, ev almak i in birikim yapabilirim.']
  },
  {
    id: 'unemployed_lh',
    word: 'Unemployed',
    pos: 'adjective',
    meaning: 'i siz',
    definition: 'Without a paid job but available to work.',
    ipa: '/  n. m pl  d/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'employment', pos: 'noun', meaning: 'istihdam' }],
    synonyms: [{ word: 'Jobless', meaning: 'i siz', pos: 'adj' }],
    antonyms: [{ word: 'Employed', meaning: 'i i olan', pos: 'adj' }],
    collocations: ['become unemployed', 'long-term unemployed'],
    collocationMeanings: { 'become unemployed': 'i siz kalmak', 'long-term unemployed': 'uzun s reli i siz' },
    examples: ['He has been unemployed for 3 months.'],
    exampleTranslations: ['3 ayd r i siz.']
  },
  {
    id: 'work_long_hours_lh',
    word: 'Work long hours',
    pos: 'phrase',
    meaning: 'fazla mesai yapmak, uzun saatler  al  mak',
    definition: 'To do your job for more time than is normal.',
    ipa: '/w  k l    a  rz/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Work overtime', meaning: 'fazla mesai yapmak', pos: 'phrase' }],
    antonyms: [{ word: 'Work part-time', meaning: 'yar  zamanl   al  mak', pos: 'phrase' }],
    collocations: ['forced to work long hours', 'accustomed to work long hours'],
    collocationMeanings: { 'forced to work long hours': 'uzun saatler  al  maya zorlanmak', 'accustomed to work long hours': 'uzun saatler  al  maya al   k olmak' },
    examples: ['Police officers have to work long hours.'],
    exampleTranslations: ['Polis memurlar  uzun saatler  al  mak zorundad r.']
  },
  
  {
    id: 'stylish_lh',
    word: 'Stylish',
    pos: 'adjective',
    meaning: '  k, tarz sahibi',
    definition: 'Showing good judgement about how to dress well.',
    ipa: "/'sta .l  /",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'style', pos: 'noun', meaning: 'tarz' }],
    synonyms: [{ word: 'Fashionable', meaning: 'modaya uygun', pos: 'adj' }, { word: 'Chic', meaning: '  k', pos: 'adj' }],
    antonyms: [{ word: 'Unstylish', meaning: 'r k  /tarzs z', pos: 'adj' }],
    collocations: ['stylish dresser', 'stylish clothes'],
    collocationMeanings: { 'stylish dresser': '  k giyinen ki i', 'stylish clothes': '  k k yafetler' },
    examples: ['She is a stylish dresser.'],
    exampleTranslations: ['O,   k giyinen biridir.']
  },
  {
    id: 'casual_lh',
    word: 'Casual',
    pos: 'adjective',
    meaning: 'g ndelik, spor (giyim)',
    definition: 'Relaxed and comfortable.',
    ipa: "/'k  .u. l/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'casually', pos: 'adverb', meaning: 'g ndelik bir  ekilde' }],
    synonyms: [{ word: 'Informal', meaning: 'resmi olmayan', pos: 'adj' }],
    antonyms: [{ word: 'Formal', meaning: 'resmi', pos: 'adj' }],
    collocations: ['casual clothes', 'casual look'],
    collocationMeanings: { 'casual clothes': 'g ndelik k yafetler', 'casual look': 'spor g r n m' },
    examples: ['He looked casual in his jeans and t-shirt.'],
    exampleTranslations: ['Kot pantolonu ve ti  rt yle g ndelik (rahat) g r n yordu.']
  },
  {
    id: 'colourful_lh',
    word: 'Colourful',
    pos: 'adjective',
    meaning: 'renkli, c v l c v l',
    definition: 'Has bright or many different colours.',
    ipa: "/'k l. .f l/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'colour', pos: 'noun', meaning: 'renk' }],
    synonyms: [{ word: 'Vibrant', meaning: 'canl /parlak', pos: 'adj' }],
    antonyms: [{ word: 'Colourless', meaning: 'renksiz', pos: 'adj' }, { word: 'Plain', meaning: 'sade', pos: 'adj' }],
    collocations: ['colourful dress', 'colourful garden'],
    collocationMeanings: { 'colourful dress': 'renkli elbise', 'colourful garden': 'renkli bah e' },
    examples: ['I love that colourful dress.'],
    exampleTranslations: ['O renkli elbiseye bay l yorum.']
  },
  {
    id: 'cough_lh',
    word: 'Cough',
    pos: 'noun',
    meaning: ' ks r k',
    definition: 'An illness in which air is forced up through your throat.',
    ipa: '/k f/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'cough', pos: 'verb', meaning: ' ks rmek' }],
    synonyms: [],
    antonyms: [],
    collocations: ['bad cough', 'dry cough'],
    collocationMeanings: { 'bad cough': 'k t   ks r k', 'dry cough': 'kuru  ks r k' },
    examples: ["She couldn't sleep well because of her cough."],
    exampleTranslations: [' ks r    y z nden iyi uyuyamad .']
  },
  {
    id: 'sore_throat_lh',
    word: 'Sore throat',
    pos: 'noun',
    meaning: 'bo az a r s ',
    definition: 'Pain in the throat, typically caused by a cold or a virus.',
    ipa: '/ s     r  t/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['have a sore throat', 'remedy for sore throat'],
    collocationMeanings: { 'have a sore throat': 'bo az  a r mak', 'remedy for sore throat': 'bo az a r s  ilac ' },
    examples: ['Have we got any medicine for a sore throat?'],
    exampleTranslations: ['Bo az a r s  i in hi  ilac m z var m ?']
  },
  {
    id: 'sunburn_lh',
    word: 'Sunburn',
    pos: 'noun',
    meaning: 'g ne  yan   ',
    definition: 'Condition of having red sore skin caused by staying in the sun for too long.',
    ipa: "/'s n.b  n/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'sunburnt', pos: 'adj', meaning: 'g ne ten yanm  ' }],
    synonyms: [],
    antonyms: [],
    collocations: ['painful sunburn', 'get sunburn'],
    collocationMeanings: { 'painful sunburn': 'ac l  g ne  yan   ', 'get sunburn': 'g ne ten yanmak' },
    examples: ['That sunburn looks very painful.'],
    exampleTranslations: ['O g ne  yan     ok ac l  g r n yor.']
  },
  {
    id: 'stomach_ache_lh',
    word: 'Stomach ache',
    pos: 'noun',
    meaning: 'kar n a r s ',
    definition: 'Pain in your stomach.',
    ipa: "/'st m. k e k/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Stomach pain', meaning: 'kar n a r s ', pos: 'noun' }],
    antonyms: [],
    collocations: ['have a stomach ache', 'terrible stomach ache'],
    collocationMeanings: { 'have a stomach ache': 'karn  a r mak', 'terrible stomach ache': 'korkun  kar n a r s ' },
    examples: ['I have a stomach ache from eating too much.'],
    exampleTranslations: [' ok fazla yemekten karn m a r yor.']
  },
  {
    id: 'nordic_walking_lh',
    word: 'Nordic walking',
    pos: 'noun',
    meaning: 'iskandinav y r y    (batonlu)',
    definition: 'A version of walking that requires poles.',
    ipa: "/'n  .d k 'w  .k  /",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['go Nordic walking'],
    collocationMeanings: { 'go Nordic walking': ' skandinav y r y   ne   kmak' },
    examples: ['Dave enjoys Nordic walking.'],
    exampleTranslations: ['Dave  skandinav y r y   nden keyif al r.']
  },
  {
    id: 'cod_lh',
    word: 'Cod',
    pos: 'noun',
    meaning: 'morina bal   ',
    definition: 'A type of fish which is commonly eaten.',
    ipa: '/k d/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['fresh cod', 'cod fillet'],
    collocationMeanings: { 'fresh cod': 'taze morina', 'cod fillet': 'morina filetosu' },
    examples: ['Cod is my favourite fish.'],
    exampleTranslations: ['Morina en sevdi im bal kt r.']
  },
  {
    id: 'grain_lh',
    word: 'Grain',
    pos: 'noun',
    meaning: 'tah l, tah l tanesi',
    definition: 'The seeds from crops such as wheat, rice, or barley.',
    ipa: '/ re n/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Cereal', meaning: 'tah l', pos: 'noun' }],
    antonyms: [],
    collocations: ['mixed grain', 'whole grain'],
    collocationMeanings: { 'mixed grain': 'kar   k tah l', 'whole grain': 'tam tah l' },
    examples: ['Can I have 3 bags of mixed grain, please?'],
    exampleTranslations: ['3 torba kar   k tah l alabilir miyim l tfen?']
  },
  {
    id: 'lettuce_lh',
    word: 'Lettuce',
    pos: 'noun',
    meaning: 'marul',
    definition: 'A vegetable with large thin green leaves that you eat raw in a salad.',
    ipa: "/'let. s/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['fresh lettuce', 'crisp lettuce'],
    collocationMeanings: { 'fresh lettuce': 'taze marul', 'crisp lettuce': 'k t r marul' },
    examples: ['There is too much lettuce in this sandwich.'],
    exampleTranslations: ['Bu sandvi te  ok fazla marul var.']
  },
  {
    id: 'lobster_lh',
    word: 'Lobster',
    pos: 'noun',
    meaning: 'istakoz',
    definition: 'A shellfish that has a long body, eight legs, and two claws.',
    ipa: "/'l b.st (r)/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['fresh lobster', 'grilled lobster'],
    collocationMeanings: { 'fresh lobster': 'taze istakoz', 'grilled lobster': ' zgara istakoz' },
    examples: ['The lobster in this restaurant is delicious but very expensive.'],
    exampleTranslations: ['Bu restorandaki istakoz lezzetli ama  ok pahal .']
  },
  {
    id: 'oats_lh',
    word: 'Oats',
    pos: 'noun',
    meaning: 'yulaf',
    definition: 'A type of grain that people and animals eat.',
    ipa: '/  ts/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['rolled oats', 'bowl of oats'],
    collocationMeanings: { 'rolled oats': 'yulaf ezmesi', 'bowl of oats': 'bir kase yulaf' },
    examples: ['Horses love eating oats.'],
    exampleTranslations: ['Atlar yulaf yemeyi sever.']
  },
  {
    id: 'shrimp_lh',
    word: 'Shrimp',
    pos: 'noun',
    meaning: 'karides',
    definition: 'A small shellfish with a lot of legs.',
    ipa: '/ r mp/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Prawn', meaning: 'karides (b y k)', pos: 'noun' }],
    antonyms: [],
    collocations: ['shrimp curry', 'fried shrimp'],
    collocationMeanings: { 'shrimp curry': 'karidesli k ri', 'fried shrimp': 'k zarm   karides' },
    examples: ["I'll have the shrimp curry please."],
    exampleTranslations: ['Karidesli k ri alay m l tfen.']
  },
  {
    id: 'wheat_lh',
    word: 'Wheat',
    pos: 'noun',
    meaning: 'bu day',
    definition: 'A tall plant that produces grain for making bread.',
    ipa: '/wi t/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['wheat flour', 'wheat field'],
    collocationMeanings: { 'wheat flour': 'bu day unu', 'wheat field': 'bu day tarlas ' },
    examples: ['A large quantity of wheat was grown by farmers last year.'],
    exampleTranslations: ['Ge en y l  ift iler taraf ndan b y k miktarda bu day yeti tirildi.']
  },
  {
    id: 'anxious_lh',
    word: 'Anxious',
    pos: 'adjective',
    meaning: 'endi eli, kayg l ',
    definition: 'Worried because you think something bad might happen.',
    ipa: "/'  k.  s/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'anxiety', pos: 'noun', meaning: 'kayg ' }],
    synonyms: [{ word: 'Worried', meaning: 'endi eli', pos: 'adj' }, { word: 'Nervous', meaning: 'gergin', pos: 'adj' }],
    antonyms: [{ word: 'Calm', meaning: 'sakin', pos: 'adj' }, { word: 'Confident', meaning: 'kendinden emin', pos: 'adj' }],
    collocations: ['feel anxious', 'anxious about'],
    collocationMeanings: { 'feel anxious': 'endi eli hissetmek', 'anxious about': 'bir  ey hakk nda endi eli' },
    examples: ['His silence made me anxious.'],
    exampleTranslations: ['Sessizli i beni endi elendirdi.']
  },
  {
    id: 'cheerful_lh',
    word: 'Cheerful',
    pos: 'adjective',
    meaning: 'ne eli,  en',
    definition: 'Behaving in a happy, friendly way.',
    ipa: "/'t   .f l/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'cheer', pos: 'verb', meaning: 'ne elendirmek' }],
    synonyms: [{ word: 'Happy', meaning: 'mutlu', pos: 'adj' }, { word: 'Joyful', meaning: 'sevin li', pos: 'adj' }],
    antonyms: [{ word: 'Miserable', meaning: 'peri an/mutsuz', pos: 'adj' }],
    collocations: ['cheerful person', 'stay cheerful'],
    collocationMeanings: { 'cheerful person': 'ne eli ki i', 'stay cheerful': 'ne eli kalmak' },
    examples: ['Stephen was a cheerful, affectionate child.'],
    exampleTranslations: ['Stephen ne eli ve sevgi dolu bir  ocuktu.']
  },
  {
    id: 'confused_lh',
    word: 'Confused',
    pos: 'adjective',
    meaning: 'kafas  kar  m  ',
    definition: 'Unable to understand something or think clearly about it.',
    ipa: '/k n fju zd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'confusion', pos: 'noun', meaning: 'kar   kl k' }],
    synonyms: [{ word: 'Puzzled', meaning: ' a k n', pos: 'adj' }, { word: 'Baffled', meaning: 'donup kalm  ', pos: 'adj' }],
    antonyms: [{ word: 'Clear', meaning: 'net/anla  l r', pos: 'adj' }],
    collocations: ['totally confused', 'look confused'],
    collocationMeanings: { 'totally confused': 'tamamen kafas  kar  m  ', 'look confused': 'kafas  kar  m   g r nmek' },
    examples: ['She was starting to feel a bit confused.'],
    exampleTranslations: ['Biraz kafas  kar  maya ba lam  t .']
  },
  {
    id: 'glad_lh',
    word: 'Glad',
    pos: 'adjective',
    meaning: 'memnun, mutlu',
    definition: 'Happy and pleased about something.',
    ipa: '/ l d/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'gladly', pos: 'adverb', meaning: 'memnuniyetle' }],
    synonyms: [{ word: 'Pleased', meaning: 'memnun', pos: 'adj' }, { word: 'Happy', meaning: 'mutlu', pos: 'adj' }],
    antonyms: [{ word: 'Sad', meaning: ' zg n', pos: 'adj' }, { word: 'Sorry', meaning: 'pi man/ zg n', pos: 'adj' }],
    collocations: ['glad to hear', 'glad to help'],
    collocationMeanings: { 'glad to hear': 'duydu una sevinmek', 'glad to help': 'yard m etti ine sevinmek' },
    examples: ['She was so glad to have met him.'],
    exampleTranslations: ['Onunla tan  t    i in  ok mutluydu.']
  },
  {
    id: 'nervous_lh',
    word: 'Nervous',
    pos: 'adjective',
    meaning: 'gergin, heyecanl ',
    definition: 'Feeling excited and worried, or slightly afraid.',
    ipa: "/'n  .v s/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'nerve', pos: 'noun', meaning: 'sinir/cesaret' }],
    synonyms: [{ word: 'Anxious', meaning: 'endi eli', pos: 'adj' }, { word: 'Apprehensive', meaning: 'evhaml ', pos: 'adj' }],
    antonyms: [{ word: 'Confident', meaning: 'kendinden emin', pos: 'adj' }, { word: 'Calm', meaning: 'sakin', pos: 'adj' }],
    collocations: ['get nervous', 'nervous tension'],
    collocationMeanings: { 'get nervous': 'gerilmek/heyecanlanmak', 'nervous tension': 'sinirsel gerginlik' },
    examples: ['Driving on mountain roads always makes me nervous.'],
    exampleTranslations: ['Da  yollar nda araba s rmek beni her zaman gerer.']
  },
  {
    id: 'pleased_lh',
    word: 'Pleased',
    pos: 'adjective',
    meaning: 'memnun',
    definition: 'Happy and satisfied.',
    ipa: '/pli zd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'please', pos: 'verb', meaning: 'memnun etmek' }],
    synonyms: [{ word: 'Satisfied', meaning: 'tatmin olmu ', pos: 'adj' }, { word: 'Happy', meaning: 'mutlu', pos: 'adj' }],
    antonyms: [{ word: 'Disappointed', meaning: 'hayal k r kl   na u ram  ', pos: 'adj' }, { word: 'Unhappy', meaning: 'mutsuz', pos: 'adj' }],
    collocations: ['pleased with the results', 'pleased to meet you'],
    collocationMeanings: { 'pleased with the results': 'sonu lardan memnun', 'pleased to meet you': 'tan  t   m za memnun oldum' },
    examples: ["I'm very pleased with the results."],
    exampleTranslations: ['Sonu lardan  ok memnunum.']
  },
  {
    id: 'suitcase_lh',
    word: 'Suitcase',
    pos: 'noun',
    meaning: 'valiz, bavul',
    definition: 'A large container with flat sides and a handle used for carrying clothes.',
    ipa: "/'su t.ke s/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'case', pos: 'noun', meaning: 'kasa/ anta' }],
    synonyms: [{ word: 'Luggage', meaning: 'bagaj', pos: 'noun' }],
    antonyms: [],
    collocations: ['pack a suitcase', 'heavy suitcase'],
    collocationMeanings: { 'pack a suitcase': 'valiz haz rlamak', 'heavy suitcase': 'a  r valiz' },
    examples: ['She took two large cases on holiday.'],
    exampleTranslations: ['Tatile iki b y k valiz g t rd .']
  },
  {
    id: 'bring_up_lh',
    word: 'Bring up',
    pos: 'phrasal verb',
    meaning: ' ocuk yeti tirmek, b y tmek',
    definition: 'To look after a child until he or she becomes an adult.',
    ipa: '/br    p/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Raise', meaning: 'yeti tirmek', pos: 'verb' }],
    antonyms: [{ word: 'Abandon', meaning: 'terk etmek', pos: 'verb' }],
    collocations: ['bring up children', 'well brought up'],
    collocationMeanings: { 'bring up children': ' ocuk yeti tirmek', 'well brought up': 'iyi yeti tirilmi ' },
    examples: ['She brought up three sons on her own.'],
    exampleTranslations: ['Kendi ba  na    o ul yeti tirdi.']
  },
  {
    id: 'drop_out_lh',
    word: 'Drop out',
    pos: 'phrasal verb',
    meaning: 'okulu b rakmak, ayr lmak',
    definition: 'To leave something such as a school or competition before you have finished.',
    ipa: '/dr p a t/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Quit', meaning: 'b rakmak', pos: 'verb' }, { word: 'Leave', meaning: 'ayr lmak', pos: 'verb' }],
    antonyms: [{ word: 'Graduate', meaning: 'mezun olmak', pos: 'verb' }, { word: 'Complete', meaning: 'tamamlamak', pos: 'verb' }],
    collocations: ['drop out of school', 'drop out of college'],
    collocationMeanings: { 'drop out of school': 'okulu b rakmak', 'drop out of college': ' niversiteyi b rakmak' },
    examples: ['She was injured in the first round and had to drop out.'],
    exampleTranslations: [' lk turda sakatland  ve (yar  madan) ayr lmak zorunda kald .']
  },
  {
    id: 'fall_out_lh',
    word: 'Fall out',
    pos: 'phrasal verb',
    meaning: 'k smek, tart  mak',
    definition: 'To stop being friendly with someone because you have had a disagreement.',
    ipa: '/f  l a t/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Argue', meaning: 'tart  mak', pos: 'verb' }, { word: 'Quarrel', meaning: 'at  mak', pos: 'verb' }],
    antonyms: [{ word: 'Make up', meaning: 'bar  mak', pos: 'phrase' }],
    collocations: ['fall out with a friend', 'rarely fall out'],
    collocationMeanings: { 'fall out with a friend': 'bir arkada la k smek', 'rarely fall out': 'nadir tart  mak' },
    examples: ['Have you two fallen out?'],
    exampleTranslations: ['Siz ikiniz k st n z m ?']
  },
  {
    id: 'grow_up_lh',
    word: 'Grow up',
    pos: 'phrasal verb',
    meaning: 'b y mek, serpilmek',
    definition: 'To change from being a baby or young child to being an older child or adult.',
    ipa: '/ r    p/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'grown-up', pos: 'noun/adj', meaning: 'yeti kin' }],
    synonyms: [{ word: 'Mature', meaning: 'olgunla mak', pos: 'verb' }],
    antonyms: [],
    collocations: ['grow up in', 'when I grow up'],
    collocationMeanings: { 'grow up in': 'bir yerde b y mek', 'when I grow up': 'b y d   m zaman' },
    examples: ["She's really starting to grow up now."],
    exampleTranslations: ['Art k ger ekten b y meye ba l yor.']
  },
  {
    id: 'make_up_lh',
    word: 'Make up',
    pos: 'phrasal verb',
    meaning: 'uydurmak (hikaye vb.)',
    definition: 'To invent an explanation for something, especially to avoid being punished.',
    ipa: '/me k  p/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Invent', meaning: 'icat etmek/uydurmak', pos: 'verb' }, { word: 'Fabricate', meaning: 'uydurmak', pos: 'verb' }],
    antonyms: [],
    collocations: ['make up an excuse', 'make up a story'],
    collocationMeanings: { 'make up an excuse': 'bahane uydurmak', 'make up a story': 'hikaye uydurmak' },
    examples: ['He made up some excuse about the dog eating his homework.'],
    exampleTranslations: [' devini k pe in yedi ine dair bir bahane uydurdu.']
  },
  {
    id: 'give_up_lh',
    word: 'Give up',
    pos: 'phrasal verb',
    meaning: 'vazge mek, b rakmak',
    definition: 'To stop doing something that you do regularly.',
    ipa: '/  v  p/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Quit', meaning: 'b rakmak', pos: 'verb' }, { word: 'Abandon', meaning: 'terk etmek', pos: 'verb' }],
    antonyms: [{ word: 'Continue', meaning: 'devam etmek', pos: 'verb' }, { word: 'Persist', meaning: ' srar etmek', pos: 'verb' }],
    collocations: ['give up smoking', 'never give up'],
    collocationMeanings: { 'give up smoking': 'sigaray  b rakmak', 'never give up': 'asla pes etme' },
    examples: ['His wife finally persuaded him to give up smoking.'],
    exampleTranslations: ['Kar s  sonunda onu sigaray  b rakmaya ikna etti.']
  },
  {
    id: 'audience_lh',
    word: 'Audience',
    pos: 'noun',
    meaning: 'seyirci, izleyici kitlesi',
    definition: 'A group of people who have come to a place to see or hear a film or performance.',
    ipa: "/'  .di. ns/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Spectators', meaning: 'izleyiciler', pos: 'noun' }, { word: 'Viewers', meaning: 'izleyenler', pos: 'noun' }],
    antonyms: [{ word: 'Performers', meaning: 'sergileyenler', pos: 'noun' }],
    collocations: ['target audience', 'live audience'],
    collocationMeanings: { 'target audience': 'hedef kitle', 'live audience': 'canl  seyirci' },
    examples: ['She would be addressing an audience of three thousand teachers.'],
    exampleTranslations: ['   bin   retmenden olu an bir kitleye hitap edecekti.']
  },
  {
    id: 'catchy_lh',
    word: 'Catchy',
    pos: 'adjective',
    meaning: 'ak lda kal c  (melodi/slogan)',
    definition: 'A tune or phrase which attracts your attention and is easy to remember.',
    ipa: "/'k t .i/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'catch', pos: 'verb', meaning: 'yakalamak' }],
    synonyms: [{ word: 'Memorable', meaning: 'unutulmaz', pos: 'adj' }],
    antonyms: [{ word: 'Boring', meaning: 's k c ', pos: 'adj' }, { word: 'Forgettable', meaning: 'unutulabilir', pos: 'adj' }],
    collocations: ['catchy tune', 'catchy song'],
    collocationMeanings: { 'catchy tune': 'ak lda kal c  melodi', 'catchy song': 'ak lda kal c   ark ' },
    examples: ["I like this song because it's very catchy."],
    exampleTranslations: ['Bu  ark y  seviyorum   nk   ok ak lda kal c .']
  },
  {
    id: 'drummer_lh',
    word: 'Drummer',
    pos: 'noun',
    meaning: 'baterist, davulcu',
    definition: 'Someone who plays the drums in a band.',
    ipa: "/'dr m. (r)/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'drum', pos: 'noun/verb', meaning: 'davul' }],
    synonyms: [{ word: 'Percussionist', meaning: 'perk syonyist', pos: 'noun' }],
    antonyms: [],
    collocations: ['talented drummer', 'session drummer'],
    collocationMeanings: { 'talented drummer': 'yetenekli davulcu', 'session drummer': 'st dyo davulcusu' },
    examples: ['The drummer was very talented.'],
    exampleTranslations: ['Baterist  ok yetenekliydi.']
  },
  {
    id: 'drums_lh',
    word: 'Drums',
    pos: 'noun',
    meaning: 'bateri, davul tak m ',
    definition: 'A musical instrument consisting of a tight skin stretched over a round frame.',
    ipa: '/dr mz/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'drummer', pos: 'noun', meaning: 'baterist' }],
    synonyms: [{ word: 'Drum kit', meaning: 'bateri seti', pos: 'noun' }],
    antonyms: [],
    collocations: ['play the drums', 'beat the drums'],
    collocationMeanings: { 'play the drums': 'bateri  almak', 'beat the drums': 'davul  almak' },
    examples: ['He wanted to learn to play the drums.'],
    exampleTranslations: ['Bateri  almay    renmek istiyordu.']
  },
  {
    id: 'gig_lh',
    word: 'Gig',
    pos: 'noun',
    meaning: 'konser (genelde k   k veya pop ler m zik)',
    definition: 'A public performance, especially of jazz or popular music.',
    ipa: '/   /',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Concert', meaning: 'konser', pos: 'noun' }, { word: 'Performance', meaning: 'performans', pos: 'noun' }],
    antonyms: [],
    collocations: ['live gig', 'play a gig'],
    collocationMeanings: { 'live gig': 'canl  konser', 'play a gig': 'konser vermek' },
    examples: ['Live gigs are the most enjoyable part of my work.'],
    exampleTranslations: ['Canl  konserler i imin en keyifli k sm d r.']
  },
  {
    id: 'abstract_art_lh',
    word: 'Abstract art',
    pos: 'noun',
    meaning: 'soyut sanat',
    definition: 'A trend in painting which seeks to break away from the traditional representation.',
    ipa: "/' b.str kt   t/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'abstraction', pos: 'noun', meaning: 'soyutlama' }],
    synonyms: [],
    antonyms: [{ word: 'Realistic art', meaning: 'ger ek i sanat', pos: 'noun' }],
    collocations: ['interested in abstract art', 'modern abstract art'],
    collocationMeanings: { 'interested in abstract art': 'soyut sanatla ilgili', 'modern abstract art': 'modern soyut sanat' },
    examples: ['She is interested in abstract art.'],
    exampleTranslations: ['Soyut sanatla ilgileniyor.']
  },
  {
    id: 'landscape_lh',
    word: 'Landscape',
    pos: 'noun',
    meaning: 'manzara, peyzaj (resim)',
    definition: 'A painting of an area of land.',
    ipa: "/'l nd.ske p/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Scenery', meaning: 'manzara', pos: 'noun' }, { word: 'Panorama', meaning: 'panoroma', pos: 'noun' }],
    antonyms: [],
    collocations: ['rural landscape', 'landscape painting'],
    collocationMeanings: { 'rural landscape': 'k rsal manzara', 'landscape painting': 'peyzaj resmi' },
    examples: ["We saw an exhibition of Paul Gunn's most recent landscapes."],
    exampleTranslations: ["Paul Gunn' n en son manzara resimlerinin sergisini g rd k."]
  },
  {
    id: 'sculpture_lh',
    word: 'Sculpture',
    pos: 'noun',
    meaning: 'heykel',
    definition: 'A solid object that someone makes as a work of art by shaping stone, metal, or wood.',
    ipa: "/'sk lp.t  (r)/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'sculptor', pos: 'noun', meaning: 'heykelt ra ' }, { word: 'sculpt', pos: 'verb', meaning: 'heykel yapmak' }],
    synonyms: [{ word: 'Statue', meaning: 'heykel/biblo', pos: 'noun' }],
    antonyms: [],
    collocations: ['modern sculpture', 'bronze sculpture'],
    collocationMeanings: { 'modern sculpture': 'modern heykel', 'bronze sculpture': 'bronz heykel' },
    examples: ['Works to be shown include sculptures by Houdon.'],
    exampleTranslations: ['Sergilenecek eserler aras nda Houdon un heykelleri de bulunuyor.']
  },
  {
    id: 'biopic_lh',
    word: 'Biopic',
    pos: 'noun',
    meaning: 'biyografik film',
    definition: 'A film based on the events of someone s life.',
    ipa: "/'ba .  .p k/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'biography', pos: 'noun', meaning: 'biyografi' }],
    synonyms: [{ word: 'Biographical film', meaning: 'biyografik film', pos: 'noun' }],
    antonyms: [{ word: 'Fiction film', meaning: 'kurgu film', pos: 'noun' }],
    collocations: ['new biopic', 'watch a biopic'],
    collocationMeanings: { 'new biopic': 'yeni biyografik film', 'watch a biopic': 'biyografik film izlemek' },
    examples: ['Have you seen the Jesse James biopic?'],
    exampleTranslations: ['Jesse James biyografik filmini izledin mi?']
  },
  {
    id: 'historical_lh',
    word: 'Historical',
    pos: 'adjective',
    meaning: 'tarihi',
    definition: 'Based on people or events that existed in the past.',
    ipa: '/h  st r. .k l/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'history', pos: 'noun', meaning: 'tarih' }, { word: 'historian', pos: 'noun', meaning: 'tarih i' }],
    synonyms: [{ word: 'Historic', meaning: 'tarihi  nemde', pos: 'adj' }],
    antonyms: [{ word: 'Modern', meaning: 'modern', pos: 'adj' }, { word: 'Contemporary', meaning: 'g ncel', pos: 'adj' }],
    collocations: ['historical events', 'historical film'],
    collocationMeanings: { 'historical events': 'tarihi olaylar', 'historical film': 'tarihi film' },
    examples: ['Watching historical films is an easy way to learn about the past.'],
    exampleTranslations: ['Tarihi filmler izlemek, ge mi  hakk nda   renmenin kolay bir yoludur.']
  },
  {
    id: 'western_lh',
    word: 'Western',
    pos: 'noun',
    meaning: 'kovboy filmi',
    definition: 'A film about the western United States in the 1800s, usually with cowboys.',
    ipa: "/'wes.t n/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'west', pos: 'noun', meaning: 'bat ' }],
    synonyms: [{ word: 'Cowboy movie', meaning: 'kovboy filmi', pos: 'noun' }],
    antonyms: [],
    collocations: ['classic western', 'western film'],
    collocationMeanings: { 'classic western': 'klasik kovboy filmi', 'western film': 'western film' },
    examples: ['My Dad likes western films but I think they are boring.'],
    exampleTranslations: ['Babam kovboy filmlerini sever ama bence onlar s k c .']
  },
  {
    id: 'amazed_lh',
    word: 'Amazed',
    pos: 'adjective',
    meaning: 'hayrete d  m  ,  a k n',
    definition: 'Very surprised.',
    ipa: '/  me zd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'amaze', pos: 'verb', meaning: ' a  rtmak' }, { word: 'amazement', pos: 'noun', meaning: 'hayret' }],
    synonyms: [{ word: 'Astonished', meaning: ' a k nl ktan donakalm  ', pos: 'adj' }, { word: 'Surprised', meaning: ' a  rm  ', pos: 'adj' }],
    antonyms: [{ word: 'Indifferent', meaning: 'kay ts z', pos: 'adj' }, { word: 'Unimpressed', meaning: 'etkilenmemi ', pos: 'adj' }],
    collocations: ['absolutely amazed', 'amazed at'],
    collocationMeanings: { 'absolutely amazed': 'tamamen hayrete d  m  ', 'amazed at': 'bir  eye  a  rmak' },
    examples: ['We were absolutely amazed at the response to our appeal.'],
    exampleTranslations: [' a r m za gelen cevaba tamamen hayrete d  t k.']
  },
  {
    id: 'amazing_lh',
    word: 'Amazing',
    pos: 'adjective',
    meaning: ' a  rt c , harika',
    definition: 'Very surprising or impressive.',
    ipa: '/  me .z  /',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'amaze', pos: 'verb', meaning: ' a  rtmak' }],
    synonyms: [{ word: 'Incredible', meaning: 'inan lmaz', pos: 'adj' }, { word: 'Wonderful', meaning: 'harika', pos: 'adj' }],
    antonyms: [{ word: 'Ordinary', meaning: 's radan', pos: 'adj' }, { word: 'Awful', meaning: 'berbat', pos: 'adj' }],
    collocations: ['quite amazing', 'amazing story'],
    collocationMeanings: { 'quite amazing': 'olduk a  a  rt c ', 'amazing story': 'harika hikaye' },
    examples: ['Her story was quite amazing.'],
    exampleTranslations: ['Hikayesi olduk a  a  rt c yd .']
  },
  {
    id: 'boring_lh',
    word: 'Boring',
    pos: 'adjective',
    meaning: 's k c ',
    definition: 'Not at all interesting.',
    ipa: "/'b  .r  /",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'bored', pos: 'adj', meaning: 's k lm  ' }, { word: 'boredom', pos: 'noun', meaning: 's k nt ' }],
    synonyms: [{ word: 'Dull', meaning: 'tekd ze/s k c ', pos: 'adj' }, { word: 'Uninteresting', meaning: 'ilgisiz', pos: 'adj' }],
    antonyms: [{ word: 'Interesting', meaning: 'ilgin ', pos: 'adj' }, { word: 'Exciting', meaning: 'heyecan verici', pos: 'adj' }],
    collocations: ['boring job', 'boring book'],
    collocationMeanings: { 'boring job': 's k c  i ', 'boring book': 's k c  kitap' },
    examples: ["It's a boring badly-paid job."],
    exampleTranslations: ['S k c  ve d   k  cretli bir i .']
  },
  {
    id: 'disappointed_lh',
    word: 'Disappointed',
    pos: 'adjective',
    meaning: 'hayal k r kl   na u ram  ',
    definition: 'Unhappy because something that you hoped for did not happen.',
    ipa: '/ d s.  p  n.t d/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'disappoint', pos: 'verb', meaning: 'hayal k r kl   na u ratmak' }],
    synonyms: [{ word: 'Let down', meaning: 'y z st  b rak lm  ', pos: 'adj' }],
    antonyms: [{ word: 'Satisfied', meaning: 'memnun', pos: 'adj' }, { word: 'Happy', meaning: 'mutlu', pos: 'adj' }],
    collocations: ['terribly disappointed', 'disappointed with'],
    collocationMeanings: { 'terribly disappointed': 'feci  ekilde hayal k r kl   na u ram  ', 'disappointed with': 'bir  eyden dolay  hayal k r kl    ya ayan' },
    examples: ['She was disappointed that he never replied to her letter.'],
    exampleTranslations: ['Mektubuna hi  cevap vermedi i i in hayal k r kl   na u ram  t .']
  },
  {
    id: 'disappointing_lh',
    word: 'Disappointing',
    pos: 'adjective',
    meaning: 'hayal k r kl    yaratan',
    definition: 'Not as good as you had hoped for or expected.',
    ipa: '/ d s.  p  n.t  /',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'disappointment', pos: 'noun', meaning: 'hayal k r kl   ' }],
    synonyms: [{ word: 'Unsatisfactory', meaning: 'yetersiz', pos: 'adj' }],
    antonyms: [{ word: 'Satisfying', meaning: 'tatmin edici', pos: 'adj' }, { word: 'Impressive', meaning: 'etkileyici', pos: 'adj' }],
    collocations: ['disappointing results', 'very disappointing'],
    collocationMeanings: { 'disappointing results': 'hayal k r kl    yaratan sonu lar', 'very disappointing': ' ok  z c /yetersiz' },
    examples: ["This year's sales figures were very disappointing."],
    exampleTranslations: ['Bu y l n sat   rakamlar  hayal k r kl    yaratacak kadar d   kt .']
  },
  {
    id: 'engaged_lh',
    word: 'Engaged',
    pos: 'adjective',
    meaning: 'me gul, dahil olmu ',
    definition: 'Involved in doing something.',
    ipa: '/ n  e d d/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'engage', pos: 'verb', meaning: 'ilgilenmek/ba lanmak' }],
    synonyms: [{ word: 'Involved', meaning: 'm dahil', pos: 'adj' }, { word: 'Busy', meaning: 'me gul', pos: 'adj' }],
    antonyms: [{ word: 'Idle', meaning: 'bo ta', pos: 'adj' }, { word: 'Free', meaning: 'm sait', pos: 'adj' }],
    collocations: ['engaged in work', 'actively engaged'],
    collocationMeanings: { 'engaged in work': 'i le me gul', 'actively engaged': 'aktif olarak dahil olmu ' },
    examples: ['Her team knew they were engaged in work of great importance.'],
    exampleTranslations: ['Ekibi, b y k  nem ta  yan bir i le me gul olduklar n  biliyordu.']
  },
  {
    id: 'exciting_lh',
    word: 'Exciting',
    pos: 'adjective',
    meaning: 'heyecan verici',
    definition: 'Making you feel happy and enthusiastic.',
    ipa: '/ k sa .t  /',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'excite', pos: 'verb', meaning: 'heyecanland rmak' }, { word: 'excitement', pos: 'noun', meaning: 'heyecan' }],
    synonyms: [{ word: 'Thrilling', meaning: 'nefes kesici', pos: 'adj' }, { word: 'Exhilarating', meaning: 'canland r c ', pos: 'adj' }],
    antonyms: [{ word: 'Boring', meaning: 's k c ', pos: 'adj' }, { word: 'Dull', meaning: 'donuk/tekd ze', pos: 'adj' }],
    collocations: ['exciting things', 'exciting opportunity'],
    collocationMeanings: { 'exciting things': 'heyecan verici  eyler', 'exciting opportunity': 'heyecan verici f rsat' },
    examples: ["The launch of our service is one of the most exciting things I've worked on."],
    exampleTranslations: ['Hizmetimizin lansman ,  zerinde  al  t   m en heyecan verici  eylerden biri.']
  },
  {
    id: 'gripped_lh',
    word: 'Gripped',
    pos: 'adjective',
    meaning: 'kendini kapt rm  , b y lenmi ',
    definition: 'Very interested and excited.',
    ipa: '/ r pt/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'grip', pos: 'verb/noun', meaning: 'yakalamak/kavrama' }],
    synonyms: [{ word: 'Fascinated', meaning: 'b y lenmi ', pos: 'adj' }, { word: 'Enthralled', meaning: 'mest olmu ', pos: 'adj' }],
    antonyms: [{ word: 'Bored', meaning: 's k lm  ', pos: 'adj' }],
    collocations: ['gripped by the news', 'gripped by the movie'],
    collocationMeanings: { 'gripped by the news': 'haberlere kendini kapt rm  ', 'gripped by the movie': 'filme kilitlenmi ' },
    examples: ['The case has gripped the public because of the celebrities involved.'],
    exampleTranslations: ['  in i inde  nl ler oldu u i in dava halk  (kendine kilitledi) b y ledi.']
  },
  {
    id: 'gripping_lh',
    word: 'Gripping',
    pos: 'adjective',
    meaning: 's r kleyici, etkileyici',
    definition: 'Very interesting and exciting.',
    ipa: "/' r p.  /",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'grippingly', pos: 'adverb', meaning: 's r kleyici bir  ekilde' }],
    synonyms: [{ word: 'Compelling', meaning: 'ilgi uyand ran', pos: 'adj' }, { word: 'Engrossing', meaning: 'dikkat  ekici', pos: 'adj' }],
    antonyms: [{ word: 'Uninteresting', meaning: 'ilgisiz', pos: 'adj' }, { word: 'Dull', meaning: 'tekd ze', pos: 'adj' }],
    collocations: ['gripping documentary', 'gripping story'],
    collocationMeanings: { 'gripping documentary': 's r kleyici belgesel', 'gripping story': 's r kleyici hikaye' },
    examples: ['The documentary was gripping.'],
    exampleTranslations: ['Belgesel s r kleyiciydi.']
  },
  {
    id: 'memorable_lh',
    word: 'Memorable',
    pos: 'adjective',
    meaning: 'unutulmaz',
    definition: 'Worth remembering or easy to remember.',
    ipa: "/'mem. r. .b l/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'memory', pos: 'noun', meaning: 'haf za' }, { word: 'memorise', pos: 'verb', meaning: 'ezberlemek' }],
    synonyms: [{ word: 'Unforgettable', meaning: 'unutulmaz', pos: 'adj' }],
    antonyms: [{ word: 'Forgettable', meaning: 'unutulabilir', pos: 'adj' }],
    collocations: ['memorable experience', 'memorable occasion'],
    collocationMeanings: { 'memorable experience': 'unutulmaz deneyim', 'memorable occasion': 'unutulmaz olay' },
    examples: ['The romantic evening cruise will be a memorable experience.'],
    exampleTranslations: ['Romantik ak am gezisi unutulmaz bir deneyim olacak.']
  },
  {
    id: 'moved_lh',
    word: 'Moved',
    pos: 'adjective',
    meaning: 'duygulanm  , etkilenmi ',
    definition: 'Affected emotionally.',
    ipa: '/mu vd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'move', pos: 'verb', meaning: 'hareket etmek/duyguland rmak' }],
    synonyms: [{ word: 'Touched', meaning: 'duygulanm  ', pos: 'adj' }],
    antonyms: [{ word: 'Unmoved', meaning: 'etkilenmemi ', pos: 'adj' }],
    collocations: ['deeply moved', 'moved to tears'],
    collocationMeanings: { 'deeply moved': 'derinden duygulanm  ', 'moved to tears': 'g zya lar na bo ulmu ' },
    examples: ['You will be moved by the touching documentary.'],
    exampleTranslations: ['Bu dokunakl  belgeselden duygulanacaks n z.']
},

  {
    id: 'moving_lh',
    word: 'Moving',
    pos: 'adjective',
    meaning: 'etkileyici, duyguland r c ',
    definition: 'Making you feel emotional.',
    ipa: "/'mu .v  /",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'move', pos: 'verb', meaning: 'hareket etmek/duyguland rmak' }, { word: 'moved', pos: 'adj', meaning: 'duygulanm  ' }],
    synonyms: [{ word: 'Touching', meaning: 'dokunakl ', pos: 'adj' }, { word: 'Emotional', meaning: 'duygusal', pos: 'adj' }],
    antonyms: [{ word: 'Unemotional', meaning: 'duygusuz', pos: 'adj' }],
    collocations: ['deeply moving', 'moving story'],
    collocationMeanings: { 'deeply moving': 'derinden etkileyici', 'moving story': 'duyguland r c  hikaye' },
    examples: ['His letter was deeply moving.'],
    exampleTranslations: ['Mektubu derinden etkileyiciydi.']
  },
  {
    id: 'pay_by_card_lh',
    word: 'Pay by card',
    pos: 'phrase',
    meaning: 'kartla  demek',
    definition: 'To use a debit or credit card as payment.',
    ipa: '/pe  ba  k  rd/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Card payment', meaning: 'kartla  deme', pos: 'noun' }],
    antonyms: [{ word: 'Pay in cash', meaning: 'nakit  demek', pos: 'phrase' }],
    collocations: ['accept pay by card', 'prefer to pay by card'],
    collocationMeanings: { 'accept pay by card': 'kartla  deme kabul etmek', 'prefer to pay by card': 'kartla  demeyi tercih etmek' },
    examples: ['Can I pay by card?'],
    exampleTranslations: ['Kartla  deyebilir miyim?']
  },
  {
    id: 'donate_lh',
    word: 'Donate',
    pos: 'verb',
    meaning: 'ba   lamak',
    definition: 'To give something such as money or goods to an organization.',
    ipa: '/d   ne t/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'donation', pos: 'noun', meaning: 'ba   ' }, { word: 'donor', pos: 'noun', meaning: 'ba     ' }],
    synonyms: [{ word: 'Contribute', meaning: 'katk da bulunmak', pos: 'verb' }],
    antonyms: [{ word: 'Receive', meaning: 'almak', pos: 'verb' }],
    collocations: ['donate money', 'donate blood'],
    collocationMeanings: { 'donate money': 'para ba   lamak', 'donate blood': 'kan ba   lamak' },
    examples: ['The centre was bought with money donated by a wealthy businessman.'],
    exampleTranslations: ['Merkez, zengin bir i  adam  taraf ndan ba   lanan parayla sat n al nd .']
  },
  {
    id: 'earn_lh',
    word: 'Earn',
    pos: 'verb',
    meaning: 'kazanmak (para/itibar)',
    definition: 'To receive money for work that you do.',
    ipa: '/  rn/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'earnings', pos: 'noun', meaning: 'kazan ' }],
    synonyms: [{ word: 'Make money', meaning: 'para kazanmak', pos: 'phrase' }],
    antonyms: [{ word: 'Spend', meaning: 'harcamak', pos: 'verb' }],
    collocations: ['earn a salary', 'earn a living'],
    collocationMeanings: { 'earn a salary': 'maa  kazanmak', 'earn a living': 'hayat n  kazanmak' },
    examples: ["She doesn't earn much money, but she enjoys the work."],
    exampleTranslations: [' ok para kazanm yor ama i inden zevk al yor.']
  },
  {
    id: 'give_away_lh',
    word: 'Give away',
    pos: 'phrasal verb',
    meaning: 'kar  l ks z vermek, hibe etmek',
    definition: 'To provide someone with something that you no longer want or need.',
    ipa: '/  v   we /',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Donate', meaning: 'ba   lamak', pos: 'verb' }],
    antonyms: [{ word: 'Keep', meaning: 'tutmak/saklamak', pos: 'verb' }],
    collocations: ['give away for free', 'give away secrets'],
    collocationMeanings: { 'give away for free': 'bedavaya vermek', 'give away secrets': 's rlar  if a etmek' },
    examples: ['I gave away any plants that were left to my neighbours.'],
    exampleTranslations: ['Kalan t m bitkileri kom ular ma verdim.']
  },
  {
    id: 'lose_lh',
    word: 'Lose',
    pos: 'verb',
    meaning: 'kaybetmek (para/zarar etmek)',
    definition: 'To make less money than you spend or invest.',
    ipa: '/lu z/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'loss', pos: 'noun', meaning: 'zarar/kay p' }],
    synonyms: [],
    antonyms: [{ word: 'Win', meaning: 'kazanmak', pos: 'verb' }, { word: 'Profit', meaning: 'k r etmek', pos: 'verb' }],
    collocations: ['lose money', 'lose a fortune'],
    collocationMeanings: { 'lose money': 'para kaybetmek', 'lose a fortune': 'servet kaybetmek' },
    examples: ['The company lost more than  5 million last year.'],
    exampleTranslations: [' irket ge en y l 5 milyon sterlinden fazla zarar etti.']
  },
  {
    id: 'make_lh',
    word: 'Make',
    pos: 'verb',
    meaning: 'yapmak, kazanmak (para)',
    definition: 'To earn or get money.',
    ipa: '/me k/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Earn', meaning: 'kazanmak', pos: 'verb' }],
    antonyms: [{ word: 'Lose', meaning: 'kaybetmek', pos: 'verb' }],
    collocations: ['make a profit', 'make a living'],
    collocationMeanings: { 'make a profit': 'k r etmek', 'make a living': 'ge imini sa lamak' },
    examples: ['She makes about  2,000 a month.'],
    exampleTranslations: ['Ayda yakla  k 2.000 sterlin kazan yor.']
  },
  {
    id: 'owe_lh',
    word: 'Owe',
    pos: 'verb',
    meaning: 'bor lu olmak',
    definition: 'To have to give someone money because you have borrowed it.',
    ipa: '/  /',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['owe money', 'owe an apology'],
    collocationMeanings: { 'owe money': 'para borcu olmak', 'owe an apology': ' z r bor lu olmak' },
    examples: ["Tell me how much I owe, and I'll give it to you."],
    exampleTranslations: ['Ne kadar borcum oldu unu s yle, sana vereyim.']
  },
  {
    id: 'do_a_favour_lh',
    word: 'Do a favour',
    pos: 'phrase',
    meaning: 'iyilik yapmak',
    definition: 'Something that you do for someone in order to help them.',
    ipa: '/du     fe .v r/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Help out', meaning: 'yard m etmek', pos: 'phrase' }],
    antonyms: [],
    collocations: ['ask for a favour', 'return a favour'],
    collocationMeanings: { 'ask for a favour': 'bir iyilik istemek', 'return a favour': 'iyili in kar  l   n  vermek' },
    examples: ['Could you do me a favour?'],
    exampleTranslations: ['Bana bir iyilik yapabilir misin?']
  },
  {
    id: 'make_a_mess_lh',
    word: 'Make a mess',
    pos: 'phrase',
    meaning: 'ortal    da  tmak, bat rmak',
    definition: 'A situation in which a place is dirty or untidy.',
    ipa: '/me k   mes/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Clutter', meaning: 'kar  t rmak', pos: 'verb' }],
    antonyms: [{ word: 'Tidy up', meaning: 'toparlamak', pos: 'phrase' }],
    collocations: ['don t make a mess', 'messy room'],
    collocationMeanings: { 'don t make a mess': 'ortal    da  tma', 'messy room': 'da  n k oda' },
    examples: ["Try not to make a mess because I've been cleaning."],
    exampleTranslations: ['Ortal    da  tmamaya  al     nk  temizlik yapt m.']
  },
  {
    id: 'bay_lh',
    word: 'Bay',
    pos: 'noun',
    meaning: 'koy, k rfez',
    definition: 'An area of the coast where the land curves inwards.',
    ipa: '/be /',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Gulf', meaning: 'k rfez', pos: 'noun' }],
    antonyms: [],
    collocations: ['visible across the bay', 'shallow bay'],
    collocationMeanings: { 'visible across the bay': 'koyun kar  s ndan g r lebilir', 'shallow bay': 's   koy' },
    examples: ['The harbour lights were visible across the bay.'],
    exampleTranslations: ['Liman    klar  koyun kar  s ndan g r lebiliyordu.']
  },
  {
    id: 'canal_lh',
    word: 'Canal',
    pos: 'noun',
    meaning: 'kanal (yapay nehir)',
    definition: 'An artificial river.',
    ipa: '/k  n l/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Waterway', meaning: 'su yolu', pos: 'noun' }],
    antonyms: [],
    collocations: ['shipping canal', 'canal bridge'],
    collocationMeanings: { 'shipping canal': 'nakliye kanal ', 'canal bridge': 'kanal k pr s ' },
    examples: ["Canals were created to connect England's industrial cities with the sea."],
    exampleTranslations: ['Kanallar,  ngiltere nin sanayi  ehirlerini denize ba lamak i in olu turuldu.']
  },
  {
    id: 'canyon_lh',
    word: 'Canyon',
    pos: 'noun',
    meaning: 'kanyon',
    definition: 'A long deep valley with very steep sides made of rock.',
    ipa: "/'k n.j n/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Gorge', meaning: 'dar ge it/kanyon', pos: 'noun' }],
    antonyms: [],
    collocations: ['deep canyon', 'view across the canyon'],
    collocationMeanings: { 'deep canyon': 'derin kanyon', 'view across the canyon': 'kanyon manzaras ' },
    examples: ['There was an incredible view across the canyon.'],
    exampleTranslations: ['Kanyonun kar  s nda inan lmaz bir manzara vard .']
  },
  {
    id: 'cave_lh',
    word: 'Cave',
    pos: 'noun',
    meaning: 'ma ara',
    definition: 'A large hole in the side of a hill or under the ground.',
    ipa: '/ke v/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Cavern', meaning: 'ma ara/oyuk', pos: 'noun' }],
    antonyms: [],
    collocations: ['dark cave', 'explore a cave'],
    collocationMeanings: { 'dark cave': 'karanl k ma ara', 'explore a cave': 'ma ara ke fetmek' },
    examples: ['We swam into the dark cave.'],
    exampleTranslations: ['Karanl k ma aran n i ine do ru y zd k.']
  },
  {
    id: 'cliff_lh',
    word: 'Cliff',
    pos: 'noun',
    meaning: 'u urum, falez, kayal k',
    definition: 'The steep side of an area of high land.',
    ipa: '/kl f/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Precipice', meaning: 'u urum', pos: 'noun' }],
    antonyms: [],
    collocations: ['edge of the cliff', 'steep cliff'],
    collocationMeanings: { 'edge of the cliff': 'u urumun kenar ', 'steep cliff': 'sarp kayal k' },
    examples: ['They pushed the car over the edge of the cliff.'],
    exampleTranslations: ['Arabay  u urumun kenar ndan a a   ittikler.']
  },
  {
    id: 'harbour_lh',
    word: 'Harbour',
    pos: 'noun',
    meaning: 'liman',
    definition: 'An area of water near the land where it is safe for boats to stay.',
    ipa: "/'h  .b (r)/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Port', meaning: 'liman', pos: 'noun' }],
    antonyms: [],
    collocations: ['safe harbour', 'harbour lights'],
    collocationMeanings: { 'safe harbour': 'g venli liman', 'harbour lights': 'liman    klar ' },
    examples: ['The wind kept us in the harbour until the following afternoon.'],
    exampleTranslations: ['R zgar bizi ertesi   leden sonraya kadar limanda tuttu.']
  },
  {
    id: 'mountain_lh',
    word: 'Mountain',
    pos: 'noun',
    meaning: 'da ',
    definition: 'A natural structure like a very big hill.',
    ipa: "/'ma n.t n/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'mountainous', pos: 'adj', meaning: 'da l k' }],
    synonyms: [{ word: 'Peak', meaning: 'zirve/da ', pos: 'noun' }],
    antonyms: [{ word: 'Valley', meaning: 'vadi', pos: 'noun' }],
    collocations: ['climb a mountain', 'mountain range'],
    collocationMeanings: { 'climb a mountain': 'da a t rmanmak', 'mountain range': 'da  s ras ' },
    examples: ['They went walking and climbing in the mountains.'],
    exampleTranslations: ['Da larda y r y  e ve t rman  a gittiler.']
  },
  {
    id: 'ocean_lh',
    word: 'Ocean',
    pos: 'noun',
    meaning: 'okyanus',
    definition: 'One of the large areas of salt water that cover most of the Earth.',
    ipa: "/'  .  n/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'oceanic', pos: 'adj', meaning: 'okyanusa ait' }],
    synonyms: [{ word: 'Sea', meaning: 'deniz', pos: 'noun' }],
    antonyms: [],
    collocations: ['deep ocean', 'Indian Ocean'],
    collocationMeanings: { 'deep ocean': 'derin okyanus', 'Indian Ocean': 'Hint Okyanusu' },
    examples: ['The Indian Ocean was a brilliant blue.'],
    exampleTranslations: ['Hint Okyanusu parlak bir maviydi.']
  },
  {
    id: 'rainforest_lh',
    word: 'Rainforest',
    pos: 'noun',
    meaning: 'ya mur orman ',
    definition: 'A forest in a tropical region where it rains a lot.',
    ipa: "/'re n.f r. st/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Jungle', meaning: 'balta girmemi  orman', pos: 'noun' }],
    antonyms: [{ word: 'Desert', meaning: '  l', pos: 'noun' }],
    collocations: ['tropical rainforest', 'destruction of the rainforest'],
    collocationMeanings: { 'tropical rainforest': 'tropikal ya mur orman ', 'destruction of the rainforest': 'ya mur ormanlar n n yok olu u' },
    examples: ['There is a campaign to halt the destruction of the rainforest.'],
    exampleTranslations: ['Ya mur ormanlar n n yok edilmesini durdurmak i in bir kampanya var.']
  },
  {
    id: 'reef_lh',
    word: 'Reef',
    pos: 'noun',
    meaning: 'resif, kayal k (deniz alt )',
    definition: 'A long line of rock or coral in the sea.',
    ipa: '/ri f/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Coral reef', meaning: 'mercan resifi', pos: 'noun' }],
    antonyms: [],
    collocations: ['colourful reef', 'barrier reef'],
    collocationMeanings: { 'colourful reef': 'renkli resif', 'barrier reef': 'bariyer resifi' },
    examples: ['She saw a colourful reef as she was swimming.'],
    exampleTranslations: ['Y zerken renkli bir resif g rd .']
  },
  {
    id: 'valley_lh',
    word: 'Valley',
    pos: 'noun',
    meaning: 'vadi',
    definition: 'A low area of land between mountains or hills.',
    ipa: "/'v l.i/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Dale', meaning: 'vadi/dere', pos: 'noun' }],
    antonyms: [{ word: 'Mountain', meaning: 'da ', pos: 'noun' }],
    collocations: ['deep valley', 'views across the valley'],
    collocationMeanings: { 'deep valley': 'derin vadi', 'views across the valley': 'vadi manzaralar ' },
    examples: ['Their house has wonderful views across the valley.'],
    exampleTranslations: ['Evlerinin harika vadi manzaralar  var.']
  },
  {
    id: 'waterfall_lh',
    word: 'Waterfall',
    pos: 'noun',
    meaning: ' elale,  a layan',
    definition: 'A place where water flows over the edge of a cliff onto another level below.',
    ipa: "/'w  .t .f  l/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Cascade', meaning: 'k   k  elale', pos: 'noun' }],
    antonyms: [],
    collocations: ['majestic waterfall', 'by the waterfall'],
    collocationMeanings: { 'majestic waterfall': 'g rkemli  elale', 'by the waterfall': ' elalenin yan nda' },
    examples: ['The children swam by the waterfall.'],
    exampleTranslations: [' ocuklar  elalenin yan nda y zd ler.']
  },
  {
    id: 'alligator_lh',
    word: 'Alligator',
    pos: 'noun',
    meaning: 'timsah (alligator)',
    definition: 'A large reptile with a long tail, four short legs, and sharp teeth.',
    ipa: "/' l ,gert (r)/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Croc', meaning: 'timsah (k sa)', pos: 'noun' }],
    antonyms: [],
    collocations: ['alligator skin', 'wild alligator'],
    collocationMeanings: { 'alligator skin': 'timsah derisi', 'wild alligator': 'vah i timsah' },
    examples: ['We saw an alligator when we were in the USA.'],
    exampleTranslations: ['ABD deyken bir timsah g rd k.']
  },
  {
    id: 'amphibian_lh',
    word: 'Amphibian',
    pos: 'noun',
    meaning: 'amfibi (hem suda hem karada ya ayan)',
    definition: 'An animal that lives mainly on land, but produces eggs in water.',
    ipa: "/ m'f bi n/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'amphibious', pos: 'adj', meaning: 'hem suda hem karada giden' }],
    synonyms: [],
    antonyms: [],
    collocations: ['amphibian species'],
    collocationMeanings: { 'amphibian species': 'amfibi t rleri' },
    examples: ['Toads and frogs are amphibians.'],
    exampleTranslations: ['Kara kurba alar  ve kurba alar amfibidir.']
  },
  {
    id: 'ant_lh',
    word: 'Ant',
    pos: 'noun',
    meaning: 'kar nca',
    definition: 'A small insect that lives in large organized groups called colonies.',
    ipa: '/ nt/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['ant colony', 'army of ants'],
    collocationMeanings: { 'ant colony': 'kar nca kolonisi', 'army of ants': 'kar nca ordusu' },
    examples: ['There were many ants in the garden.'],
    exampleTranslations: ['Bah ede  ok say da kar nca vard .']
  },
  {
    id: 'insect_lh',
    word: 'Insect',
    pos: 'noun',
    meaning: 'b cek',
    definition: 'A small animal that has six legs and often has wings.',
    ipa: "/'Insekt/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'insecticide', pos: 'noun', meaning: 'b cek ilac ' }],
    synonyms: [{ word: 'Bug', meaning: 'ha ere/b cek', pos: 'noun' }],
    antonyms: [],
    collocations: ['flying insect', 'insect bite'],
    collocationMeanings: { 'flying insect': 'u an b cek', 'insect bite': 'b cek  s r   ' },
    examples: ['I thought there were insects in my tent.'],
    exampleTranslations: [' ad r mda b cekler oldu unu d   nd m.']
  },
  {
    id: 'lizard_lh',
    word: 'Lizard',
    pos: 'noun',
    meaning: 'kertenkele',
    definition: 'A small animal with a long tail and rough skin that lives mainly in hot places.',
    ipa: "/l z (r)d/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['green lizard', 'small lizard'],
    collocationMeanings: { 'green lizard': 'ye il kertenkele', 'small lizard': 'k   k kertenkele' },
    examples: ['Steve saw a lizard in the garden.'],
    exampleTranslations: ['Steve bah ede bir kertenkele g rd .']
  },
  {
    id: 'mammal_lh',
    word: 'Mammal',
    pos: 'noun',
    meaning: 'memeli hayvan',
    definition: 'An animal that is born from its mother s body and drinks its mother s milk.',
    ipa: "/'m m(a)l/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'mammalian', pos: 'adj', meaning: 'memelilere ait' }],
    synonyms: [],
    antonyms: [{ word: 'Reptile', meaning: 's r ngen', pos: 'noun' }],
    collocations: ['marine mammal', 'land mammal'],
    collocationMeanings: { 'marine mammal': 'deniz memelisi', 'land mammal': 'kara memelisi' },
    examples: ['Many mammals can be found in the zoo.'],
    exampleTranslations: ['Hayvanat bah esinde bir ok memeli bulunabilir.']
  },
  {
    id: 'bee_lh',
    word: 'Bee',
    pos: 'noun',
    meaning: 'ar ',
    definition: 'A flying insect that has black and yellow bands and can sting you.',
    ipa: '/bi /',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'beehive', pos: 'noun', meaning: 'ar  kovan ' }],
    synonyms: [],
    antonyms: [],
    collocations: ['honey bee', 'busy as a bee'],
    collocationMeanings: { 'honey bee': 'bal ar s ', 'busy as a bee': ' ok me gul (ar  gibi)' },
    examples: ['A bee buzzed around the garden.'],
    exampleTranslations: ['Bah ede bir ar  v z ldad .']
  },
  {
    id: 'mosquito_lh',
    word: 'Mosquito',
    pos: 'noun',
    meaning: 'sivrisinek',
    definition: 'A small flying insect that bites the skin in order to feed on blood.',
    ipa: "/mp'skirt u/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [],
    collocations: ['mosquito bite', 'mosquito net'],
    collocationMeanings: { 'mosquito bite': 'sivrisinek  s r   ', 'mosquito net': 'cibinlik' },
    examples: ['I have been bitten by a mosquito.'],
    exampleTranslations: ['Beni bir sivrisinek  s rd .']
  },
  {
    id: 'moth_lh',
    word: 'Moth',
    pos: 'noun',
    meaning: 'g ve, gece kelebe i',
    definition: 'An insect like a butterfly that flies mostly at night.',
    ipa: '/m  /',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'mothball', pos: 'noun', meaning: 'naftalin' }],
    synonyms: [],
    antonyms: [{ word: 'Butterfly', meaning: 'kelebek', pos: 'noun' }],
    collocations: ['moth flying around'],
    collocationMeanings: { 'moth flying around': 'etrafta u u an g ve' },
    examples: ['There is a moth flying around the lamp.'],
    exampleTranslations: ['Lamban n etraf nda u an bir g ve var.']
  },
  {
    id: 'reptile_lh',
    word: 'Reptile',
    pos: 'noun',
    meaning: 's r ngen',
    definition: 'A type of cold-blooded animal that gives birth as eggs.',
    ipa: "/'reptail/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'reptilian', pos: 'adj', meaning: 's r ngenlere ait' }],
    synonyms: [],
    antonyms: [{ word: 'Mammal', meaning: 'memeli', pos: 'noun' }],
    collocations: ['reptile house', 'cold-blooded reptile'],
    collocationMeanings: { 'reptile house': 's r ngen evi', 'cold-blooded reptile': 'so ukkanl  s r ngen' },
    examples: ['Can we visit the reptile house to see the snakes?'],
    exampleTranslations: ['Y lanlar  g rmek i in s r ngen evini ziyaret edebilir miyiz?']
  },
  {
    id: 'toad_lh',
    word: 'Toad',
    pos: 'noun',
    meaning: 'kara kurba as ',
    definition: 'A small animal similar to a frog but has brown skin and lives mainly on land.',
    ipa: '/t  d/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [],
    antonyms: [{ word: 'Frog', meaning: 'su kurba as ', pos: 'noun' }],
    collocations: ['toad jumping'],
    collocationMeanings: { 'toad jumping': 'kurba a z plamas ' },
    examples: ['The toad jumped in the lake.'],
    exampleTranslations: ['Kara kurba as  g le atlad .']
  },
  {
    id: 'breaking_news_lh',
    word: 'Breaking news',
    pos: 'noun',
    meaning: 'son dakika haberi',
    definition: 'New information about a news event that is still happening.',
    ipa: "/bre k n 'nju:z/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Latest developments', meaning: 'son geli meler', pos: 'noun' }],
    antonyms: [],
    collocations: ['latest breaking news', 'follow breaking news'],
    collocationMeanings: { 'latest breaking news': 'en son dakika haberi', 'follow breaking news': 'son dakika haberlerini takip etmek' },
    examples: ['Keep up with the latest breaking news from around the world.'],
    exampleTranslations: ['D nyan n d rt bir yan ndan en son dakika haberlerini takip edin.']
  },
  {
    id: 'journalist_lh',
    word: 'Journalist',
    pos: 'noun',
    meaning: 'gazeteci',
    definition: 'Someone whose job is to report the news.',
    ipa: "/'d   .n .l st/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'journalism', pos: 'noun', meaning: 'gazetecilik' }, { word: 'journal', pos: 'noun', meaning: 'g nl k/dergi' }],
    synonyms: [{ word: 'Reporter', meaning: 'muhabir', pos: 'noun' }],
    antonyms: [],
    collocations: ['leading sports journalist', 'investigative journalist'],
    collocationMeanings: { 'leading sports journalist': ' nde gelen spor gazetecisi', 'investigative journalist': 'ara t rmac  gazeteci' },
    examples: ['It was an article by a leading sports journalist.'],
    exampleTranslations: [' nde gelen bir spor gazetecisinin makalesiydi.']
  },
  {
    id: 'news_headlines_lh',
    word: 'News headlines',
    pos: 'noun',
    meaning: 'haber ba l klar ',
    definition: 'The most important stories in the news.',
    ipa: "/nju:z 'hed,lainz/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Main stories', meaning: 'ana haberler', pos: 'noun' }],
    antonyms: [],
    collocations: ['read the news headlines'],
    collocationMeanings: { 'read the news headlines': 'haber ba l klar n  okumak' },
    examples: ['Here are the news headlines.'],
    exampleTranslations: ['  te haber ba l klar .']
  },
  {
    id: 'campaign_lh',
    word: 'Advertising campaign',
    pos: 'noun',
    meaning: 'reklam kampanyas ',
    definition: 'A series of things done to persuade people to buy a product.',
    ipa: "/' dv (r), ta z n k m'pein/",
    level: 'pre-intermediate',
    wordFamily: [{ word: 'advertise', pos: 'verb', meaning: 'reklam yapmak' }],
    synonyms: [{ word: 'Promotion', meaning: 'tan t m/promosyon', pos: 'noun' }],
    antonyms: [],
    collocations: ['run a campaign', 'effective campaign'],
    collocationMeanings: { 'run a campaign': 'kampanya y r tmek', 'effective campaign': 'etkili kampanya' },
    examples: ['The new advertising campaign is very effective.'],
    exampleTranslations: ['Yeni reklam kampanyas   ok etkili.']
  },
  {
    id: 'billboard_lh',
    word: 'Billboard',
    pos: 'noun',
    meaning: 'ilan tahtas , billboard',
    definition: 'A large board for advertisements in an outside public place.',
    ipa: "/'bil,bo:(r)d/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Hoarding', meaning: 'reklam panosu', pos: 'noun' }],
    antonyms: [],
    collocations: ['eye-catching billboard'],
    collocationMeanings: { 'eye-catching billboard': 'g z al c  billboard' },
    examples: ["The billboard was eye-catching to get people's attention."],
    exampleTranslations: ['Billboard, insanlar n dikkatini  ekmek i in g z al c yd .']
  },
  {
    id: 'brand_lh',
    word: 'Brand',
    pos: 'noun',
    meaning: 'marka',
    definition: 'A product or group of products that has its own name and is made by one particular company.',
    ipa: '/br nd/',
    level: 'pre-intermediate',
    wordFamily: [{ word: 'branding', pos: 'noun', meaning: 'markala ma' }],
    synonyms: [{ word: 'Label', meaning: 'etiket/marka', pos: 'noun' }],
    antonyms: [],
    collocations: ['leading brands', 'brand name'],
    collocationMeanings: { 'leading brands': ' nde gelen markalar', 'brand name': 'marka ad ' },
    examples: ['We stock all leading brands.'],
    exampleTranslations: ['T m  nde gelen markalar  stoklar m zda bulunduruyoruz.']
  },
  {
    id: 'eye-catching_lh',
    word: 'Eye-catching',
    pos: 'adjective',
    meaning: 'g z al c , dikkat  ekici',
    definition: 'Attractive or unusual and therefore noticed.',
    ipa: '/ark tf n/',
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Striking', meaning: ' arp c ', pos: 'adj' }, { word: 'Noticeable', meaning: 'fark edilebilir', pos: 'adj' }],
    antonyms: [{ word: 'Unremarkable', meaning: 's radan', pos: 'adj' }],
    collocations: ['eye-catching design'],
    collocationMeanings: { 'eye-catching design': 'g z al c  tasar m' },
    examples: ['The eye-catching design was very clever.'],
    exampleTranslations: ['G z al c  tasar m  ok zekiceydi.']
  },
  {
    id: 'attention_lh',
    word: 'Grab your attention',
    pos: 'phrase',
    meaning: 'dikkati  ekmek',
    definition: "To draw or attract someone's attention.",
    ipa: "/gr b jor  'ten ( )n/",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Catch the eye', meaning: 'g ze  arpmak', pos: 'phrase' }],
    antonyms: [{ word: 'Distract', meaning: 'dikkatini da  tmak', pos: 'verb' }],
    collocations: ['grab your attention immediately'],
    collocationMeanings: { 'grab your attention immediately': 'dikkati hemen  zerine  ekmek' },
    examples: ['We need the front page to grab your attention.'],
    exampleTranslations: [' n sayfan n dikkatinizi  ekmesine ihtiyac m z var.']
  },
  {
    id: 'logo_lh',
    word: 'Logo',
    pos: 'noun',
    meaning: 'logo, amblem',
    definition: 'A symbol that represents an organization or company.',
    ipa: "/g  /",
    level: 'pre-intermediate',
    wordFamily: [],
    synonyms: [{ word: 'Emblem', meaning: 'amblem', pos: 'noun' }, { word: 'Symbol', meaning: 'sembol', pos: 'noun' }],
    antonyms: [],
    collocations: ['simple logo', 'company logo'],
    collocationMeanings: { 'simple logo': 'basit logo', 'company logo': ' irket logosu' },
    examples: ['The logo is simple but effective.'],
    exampleTranslations: ['Logo basit ama etkili.']
 },

  
  // --- INTERMEDIATE (B1) ---
  {
    id: 'accent',
    word: 'Accent',
    pos: 'noun',
    meaning: 'aksan,  ive',
    definition: 'A way of saying words that shows what country, region, or social class someone comes from.',
    ipa: '/  k.sent/',
    level: 'intermediate',
    wordFamily: [
      { word: 'accented', pos: 'adj', meaning: 'aksanl ' },
      { word: 'accentuate', pos: 'verb', meaning: 'vurgulamak, belirginle tirmek' }
    ],
    synonyms: [
      { word: 'Pronunciation', meaning: 'telaffuz', pos: 'noun' },
      { word: 'Inflection', meaning: 'ses b k m ', pos: 'noun' },
      { word: 'Dialect', meaning: 'leh e', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['heavy accent', 'foreign accent', 'slight accent'],
    collocationMeanings: {
      'heavy accent': 'a  r aksan',
      'foreign accent': 'yabanc  aksan',
      'slight accent': 'hafif aksan'
    },
    examples: ["Tom hasn't lost his Irish accent."],
    exampleTranslations: ["Tom  rlanda aksan n  kaybetmedi."]
  },
  {
    id: 'accurately',
    word: 'Accurately',
    pos: 'adverb',
    meaning: 'do ru bir  ekilde, tam olarak',
    definition: 'In a way that is correct or true in every detail.',
    ipa: '/  k.j .r t.li/',
    level: 'intermediate',
    wordFamily: [
      { word: 'accurate', pos: 'adj', meaning: 'do ru, kesin' },
      { word: 'accuracy', pos: 'noun', meaning: 'do ruluk, kesinlik' }
    ],
    synonyms: [
      { word: 'Precisely', meaning: 'tam olarak', pos: 'adverb' },
      { word: 'Exactly', meaning: 'kesinlikle', pos: 'adverb' },
      { word: 'Correctly', meaning: 'do ruca', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Inaccurately', meaning: 'hatal  bir  ekilde', pos: 'adverb' },
      { word: 'Wrongly', meaning: 'yanl  l kla', pos: 'adverb' },
      { word: 'Falsely', meaning: 'as ls zca', pos: 'adverb' }
    ],
    collocations: ['accurately reflect', 'describe accurately', 'predict accurately'],
    collocationMeanings: {
      'accurately reflect': 'do ru  ekilde yans tmak',
      'describe accurately': 'tam olarak tarif etmek',
      'predict accurately': 'isabetli tahmin etmek'
    },
    examples: ['Have I described the situation accurately?'],
    exampleTranslations: ['Durumu do ru bir  ekilde tarif ettim mi?']
  },
  {
    id: 'action_point',
    word: 'Action point',
    pos: 'noun',
    meaning: 'eylem noktas , yap lacak i ',
    definition: "A small thing that you're going to do.",
    ipa: '/  k.  n p  nt/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Task', meaning: 'g rev', pos: 'noun' },
      { word: 'Objective', meaning: 'hedef', pos: 'noun' },
      { word: 'Measure', meaning: ' nlem/ad m', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['agree on action points', 'list of action points', 'key action point'],
    collocationMeanings: {
      'agree on action points': 'eylem planlar   zerinde anla mak',
      'list of action points': 'yap lacaklar listesi',
      'key action point': 'temel eylem noktas '
    },
    examples: ["Let's move to the second action point."],
    exampleTranslations: [" kinci eylem noktas na ge elim."]
  },
  {
    id: 'active',
    word: 'Active',
    pos: 'adjective',
    meaning: 'aktif, faal',
    definition: 'Someone who is active does a lot of different activities and has a lot of energy and interests.',
    ipa: '/  k.t v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'activity', pos: 'noun', meaning: 'etkinlik' },
      { word: 'activate', pos: 'verb', meaning: 'etkinle tirmek' },
      { word: 'actively', pos: 'adverb', meaning: 'aktif bir  ekilde' }
    ],
    synonyms: [
      { word: 'Energetic', meaning: 'enerjik', pos: 'adj' },
      { word: 'Lively', meaning: 'canl ', pos: 'adj' },
      { word: 'Dynamic', meaning: 'hareketli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Passive', meaning: 'edilgen, pasif', pos: 'adj' },
      { word: 'Inactive', meaning: 'durgun', pos: 'adj' },
      { word: 'Lazy', meaning: 'tembel', pos: 'adj' }
    ],
    collocations: ['physically active', 'active role', 'active lifestyle'],
    collocationMeanings: {
      'physically active': 'fiziksel olarak aktif',
      'active role': 'aktif rol',
      'active lifestyle': 'hareketli ya am tarz '
    },
    examples: ['People are remaining active into later life.'],
    exampleTranslations: [' nsanlar ileri ya larda da aktif kalmaya devam ediyor.']
  },
  {
    id: 'admit',
    word: 'Admit',
    pos: 'verb',
    meaning: 'itiraf etmek, kabul etmek',
    definition: 'To agree that something is true, especially when you are unhappy, sorry, or surprised about it.',
    ipa: '/ d m t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'admission', pos: 'noun', meaning: 'itiraf, giri  izni' },
      { word: 'admittedly', pos: 'adverb', meaning: 'itiraf etmek gerekirse' }
    ],
    synonyms: [
      { word: 'Confess', meaning: 'itiraf etmek', pos: 'verb' },
      { word: 'Acknowledge', meaning: 'kabullenmek', pos: 'verb' },
      { word: 'Accept', meaning: 'kabul etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Deny', meaning: 'inkar etmek', pos: 'verb' },
      { word: 'Reject', meaning: 'reddetmek', pos: 'verb' }
    ],
    collocations: ['admit defeat', 'admit a mistake', 'freely admit'],
    collocationMeanings: {
      'admit defeat': 'yenilgiyi kabul etmek',
      'admit a mistake': 'hatay  kabul etmek',
      'freely admit': 'a  k a itiraf etmek'
    },
    examples: ["'I can't sing at all,' he admitted."],
    exampleTranslations: ["'Hi   ark  s yleyemem,' diye itiraf etti."]
  },
  {
    id: 'advise',
    word: 'Advise',
    pos: 'verb',
    meaning: 'tavsiye vermek,    tlemek',
    definition: 'To give your opinion to someone about the best thing to do in a particular situation.',
    ipa: '/ d va z/',
    level: 'intermediate',
    wordFamily: [
      { word: 'advice', pos: 'noun', meaning: 'tavsiye' },
      { word: 'adviser', pos: 'noun', meaning: 'dan  man' }
    ],
    synonyms: [
      { word: 'Counsel', meaning: 'ak l vermek', pos: 'verb' },
      { word: 'Suggest', meaning: ' nermek', pos: 'verb' },
      { word: 'Recommend', meaning: 'tavsiye etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discourage', meaning: 'vazge irmek', pos: 'verb' }
    ],
    collocations: ['strongly advise', 'advise against', 'seek advice'],
    collocationMeanings: {
      'strongly advise': ' iddetle tavsiye etmek',
      'advise against': 'yapmamas n  tavsiye etmek',
      'seek advice': 'tavsiye aramak'
    },
    examples: ["I'm afraid I'm not able to advise you."],
    exampleTranslations: ["Korkar m size tavsiye verecek durumda de ilim."]
  },
  {
    id: 'advertising_campaign',
    word: 'Advertising campaign',
    pos: 'noun',
    meaning: 'reklam kampanyas ',
    definition: 'A series of things done to persuade people to buy a product or use a service.',
    ipa: '/  d.v .ta .z   k m pe n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Promotion', meaning: 'tan t m', pos: 'noun' },
      { word: 'Marketing drive', meaning: 'pazarlama ata  ', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['launch a campaign', 'run a campaign', 'effective campaign'],
    collocationMeanings: {
      'launch a campaign': 'kampanya ba latmak',
      'run a campaign': 'kampanya y r tmek',
      'effective campaign': 'etkili kampanya'
    },
    examples: ['The new advertising campaign is very effective.'],
    exampleTranslations: ['Yeni reklam kampanyas   ok etkili.']
  },
  {
    id: 'affect',
    word: 'Affect',
    pos: 'verb',
    meaning: 'etkilemek',
    definition: 'To change or influence something.',
    ipa: '/  fekt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'effect', pos: 'noun', meaning: 'etki' },
      { word: 'effective', pos: 'adj', meaning: 'etkili' }
    ],
    synonyms: [
      { word: 'Influence', meaning: 'etkilemek', pos: 'verb' },
      { word: 'Impact', meaning: 'etki yaratmak', pos: 'verb' },
      { word: 'Alter', meaning: 'de i tirmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['directly affect', 'badly affect', 'affect the outcome'],
    collocationMeanings: {
      'directly affect': 'do rudan etkilemek',
      'badly affect': 'k t  etkilemek',
      'affect the outcome': 'sonucu etkilemek'
    },
    examples: ['It is known that poor grades can affect university entrance.'],
    exampleTranslations: ['D   k notlar n  niversite giri ini etkileyebilece i biliniyor.']
  },
  {
    id: 'agreement',
    word: 'Agreement',
    pos: 'noun',
    meaning: 'anla ma, mutabakat',
    definition: 'An arrangement or decision about what to do, made by two or more people.',
    ipa: '/   ri .m nt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'agree', pos: 'verb', meaning: 'anla mak' },
      { word: 'agreeable', pos: 'adj', meaning: 'uygun, ho ' }
    ],
    synonyms: [
      { word: 'Contract', meaning: 's zle me', pos: 'noun' },
      { word: 'Deal', meaning: 'anla ma', pos: 'noun' },
      { word: 'Accord', meaning: 'uyum/mutabakat', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disagreement', meaning: 'anla mazl k', pos: 'noun' },
      { word: 'Conflict', meaning: ' at  ma', pos: 'noun' },
      { word: 'Dispute', meaning: 'tart  ma', pos: 'noun' }
    ],
    collocations: ['reach an agreement', 'sign an agreement', 'mutual agreement'],
    collocationMeanings: {
      'reach an agreement': 'anla maya varmak',
      'sign an agreement': 'anla ma imzalamak',
      'mutual agreement': 'kar  l kl  anla ma'
    },
    examples: ['Our agreement was that you would pay by the first of the month.'],
    exampleTranslations: ["Anla mam z,  demeyi ay n birine kadar yapaca  n z y n ndeydi."]
  },
  {
    id: 'all_in_the_mind',
    word: 'All in the mind',
    pos: 'idiom',
    meaning: 'hepsi kafada bitiyor, kuruntu',
    definition: 'Used for saying that something is not real and is just being imagined.',
    ipa: '/  l  n    ma nd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Imaginary', meaning: 'hayali', pos: 'adj' },
      { word: 'Illusory', meaning: 'yan lt c ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Real', meaning: 'ger ek', pos: 'adj' },
      { word: 'Physical', meaning: 'fiziksel', pos: 'adj' },
      { word: 'Tangible', meaning: 'somut', pos: 'adj' }
    ],
    collocations: ['strictly in the mind', 'entirely in the mind'],
    collocationMeanings: {
      'strictly in the mind': 'tamamen zihinde olan',
      'entirely in the mind': 'tamam yla kuruntu'
    },
    examples: ["He's not really ill; it's all in the mind."],
    exampleTranslations: ["O ger ekten hasta de il; her  ey zihninde (kuruntu)."]
  },
  {
    id: 'allow',
    word: 'Allow',
    pos: 'verb',
    meaning: 'izin vermek',
    definition: 'To give someone permission to do or have something.',
    ipa: '/  la /',
    level: 'intermediate',
    wordFamily: [
      { word: 'allowance', pos: 'noun', meaning: 'har l k/izin' },
      { word: 'allowable', pos: 'adj', meaning: 'izin verilebilir' }
    ],
    synonyms: [
      { word: 'Permit', meaning: 'izin vermek', pos: 'verb' },
      { word: 'Let', meaning: 'b rakmak/izin vermek', pos: 'verb' },
      { word: 'Authorize', meaning: 'yetki vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forbid', meaning: 'yasaklamak', pos: 'verb' },
      { word: 'Prohibit', meaning: 'men etmek', pos: 'verb' },
      { word: 'Ban', meaning: 'yasak koymak', pos: 'verb' }
    ],
    collocations: ['allow to do', 'freely allow', 'legally allowed'],
    collocationMeanings: {
      'allow to do': 'yapmas na izin vermek',
      'freely allow': 'serbest e izin vermek',
      'legally allowed': 'yasal olarak izinli'
    },
    examples: ["I'm sorry, sir, but smoking is not allowed."],
    exampleTranslations: [" zg n m efendim, ancak sigara i ilmesine izin verilmiyor."]
  },
  {
    id: 'anxious_b1',
    word: 'Anxious',
    pos: 'adjective',
    meaning: 'endi eli, kayg l ',
    definition: 'Worried because you think something bad might happen.',
    ipa: '/   k.  s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'anxiety', pos: 'noun', meaning: 'kayg ' },
      { word: 'anxiously', pos: 'adverb', meaning: 'endi eyle' }
    ],
    synonyms: [
      { word: 'Worried', meaning: 'merakl /endi eli', pos: 'adj' },
      { word: 'Nervous', meaning: 'gergin', pos: 'adj' },
      { word: 'Apprehensive', meaning: 'evhaml ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Calm', meaning: 'sakin', pos: 'adj' },
      { word: 'Confident', meaning: 'kendinden emin', pos: 'adj' },
      { word: 'Relaxed', meaning: 'rahat', pos: 'adj' }
    ],
    collocations: ['anxious about', 'feel anxious', 'growing anxious'],
    collocationMeanings: {
      'anxious about': 'bir  ey hakk nda endi eli',
      'feel anxious': 'kayg l  hissetmek',
      'growing anxious': 'endi esi artmak'
    },
    examples: ['His silence made me anxious.'],
    exampleTranslations: ["Onun sessizli i beni endi elendirdi."]
  },
  {
    id: 'assume',
    word: 'Assume',
    pos: 'verb',
    meaning: 'varsaymak, farz etmek',
    definition: 'To believe that something is true, even though no one has told you or even though you have no proof.',
    ipa: '/  sju m/',
    level: 'intermediate',
    wordFamily: [
      { word: 'assumption', pos: 'noun', meaning: 'varsay m' }
    ],
    synonyms: [
      { word: 'Presume', meaning: 'tahmin etmek', pos: 'verb' },
      { word: 'Suppose', meaning: 'zannetmek', pos: 'verb' },
      { word: 'Guess', meaning: 'tahmin y r tmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Prove', meaning: 'ispatlamak', pos: 'verb' },
      { word: 'Know', meaning: 'bilmek', pos: 'verb' }
    ],
    collocations: ['automatically assume', 'reasonable to assume', 'wrongly assume'],
    collocationMeanings: {
      'automatically assume': 'kendili inden varsaymak',
      'reasonable to assume': 'varsaymak mant kl ',
      'wrongly assume': 'yanl   bir  ekilde varsaymak'
    },
    examples: ["You can't assume that because he's good at this job he will know everything."],
    exampleTranslations: ["Bu i te iyi oldu u i in her  eyi bilece ini varsayamazs n."]
  },
  {
    id: 'attract',
    word: 'Attract',
    pos: 'verb',
    meaning: ' ekmek, cezbetmek',
    definition: 'To make someone interested in something so that they do it or come to see or hear it.',
    ipa: '/  tr kt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'attraction', pos: 'noun', meaning: 'cazibe/ilgi oda  ' },
      { word: 'attractive', pos: 'adj', meaning: ' ekici' }
    ],
    synonyms: [
      { word: 'Entice', meaning: 'akl n   elmek', pos: 'verb' },
      { word: 'Charm', meaning: 'b y lemek', pos: 'verb' },
      { word: 'Lure', meaning: 'cezbetmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Repel', meaning: 'itmek/tiksindirmek', pos: 'verb' },
      { word: 'Disgust', meaning: 'iğrendirmek', pos: 'verb' }
    ],
    collocations: ['attract attention', 'attract interest', 'attract customers'],
    collocationMeanings: {
      'attract attention': 'dikkat  çekmek',
      'attract interest': 'ilgi  çekmek',
      'attract customers': 'm  teri  ekmek'
    },
    examples: ['The show attracts viewers from all walks of life.'],
    exampleTranslations: ["Program hayat n her kesiminden izleyici  ekiyor."]
  },
  {
    id: 'attract_new_customers',
    word: 'Attract new customers',
    pos: 'phrase',
    meaning: 'yeni m  teriler  ekmek',
    definition: 'Make people interested in a product or idea.',
    ipa: '/  tr kt nju   k s.t .m rz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Expand client base', meaning: 'm  teri kitlesini geni letmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Lose customers', meaning: 'm  teri kaybetmek', pos: 'phrase' }
    ],
    collocations: ['strategy to attract', 'aim to attract'],
    collocationMeanings: {
      'strategy to attract': ' ekme stratejisi',
      'aim to attract': ' ekmeyi hedeflemek'
    },
    examples: ['The social media campaign will hopefully attract new customers.'],
    exampleTranslations: ["Sosyal medya kampanyas  umar z yeni m  teriler  ekecektir."]
  },
  {
    id: 'attract_new_investors',
    word: 'Attract new investors',
    pos: 'phrase',
    meaning: 'yeni yat r mc lar  ekmek',
    definition: 'Make people interested in a product or idea so they will invest money in it.',
    ipa: '/  tr kt nju   n ves.t rz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Secure funding', meaning: 'finansman sa lamak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['struggle to attract', 'need to attract'],
    collocationMeanings: {
      'struggle to attract': ' ekmekte zorlanmak',
      'need to attract': ' ekmeye ihtiya  duymak'
    },
    examples: ['We are attending conferences to attract new investors.'],
    exampleTranslations: ["Yeni yat r mc lar  ekmek i in konferanslara kat l yoruz."]
  },
  {
    id: 'audience_b1',
    word: 'Audience',
    pos: 'noun',
    meaning: 'seyirci, izleyici kitlesi',
    definition: 'A group of people who have come to a place to see or hear a film, performance, speech etc.',
    ipa: '/   .di. ns/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Spectators', meaning: 'izleyiciler', pos: 'noun' },
      { word: 'Viewers', meaning: 'izleyenler', pos: 'noun' },
      { word: 'Listeners', meaning: 'dinleyiciler', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Performers', meaning: 'sergileyenler', pos: 'noun' }
    ],
    collocations: ['target audience', 'wide audience', 'live audience'],
    collocationMeanings: {
      'target audience': 'hedef kitle',
      'wide audience': 'geni  kitle',
      'live audience': 'canl  seyirci'
    },
    examples: ['She would be addressing an audience of three thousand teachers.'],
    exampleTranslations: ["   bin   retmenden olu an bir kitleye hitap edecekti."]
  },
  {
    id: 'aware_of',
    word: 'Aware of',
    pos: 'adjective',
    meaning: 'fark nda olmak',
    definition: 'Knowing about a situation or a fact.',
    ipa: '/  we r  v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'awareness', pos: 'noun', meaning: 'fark ndal k' }
    ],
    synonyms: [
      { word: 'Conscious', meaning: 'bilincinde', pos: 'adj' },
      { word: 'Informed', meaning: 'bilgili', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unaware', meaning: 'habersiz', pos: 'adj' },
      { word: 'Ignorant', meaning: 'bilgisiz/duyars z', pos: 'adj' }
    ],
    collocations: ['fully aware', 'well aware', 'become aware'],
    collocationMeanings: {
      'fully aware': 'tamamen fark nda',
      'well aware': 'gayet iyi fark nda',
      'become aware': 'fark na varmak'
    },
    examples: ['We are aware of this problem.'],
    exampleTranslations: ["Bu sorunun fark nday z."]
  },
  {
    id: 'awful',
    word: 'Awful',
    pos: 'adjective',
    meaning: 'berbat,  ok k t ',
    definition: 'Used for emphasizing how unpleasant someone or something is.',
    ipa: '/   .f l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'awfully', pos: 'adverb', meaning: 'feci  ekilde' }
    ],
    synonyms: [
      { word: 'Terrible', meaning: 'korkun ', pos: 'adj' },
      { word: 'Dreadful', meaning: 'berbat', pos: 'adj' },
      { word: 'Horrible', meaning: 'rezil', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Wonderful', meaning: 'harika', pos: 'adj' },
      { word: 'Excellent', meaning: 'm kemmel', pos: 'adj' },
      { word: 'Great', meaning: 'm thi ', pos: 'adj' }
    ],
    collocations: ['awful lot', 'feel awful', 'smell awful'],
    collocationMeanings: {
      'awful lot': ' ok fazla (miktar)',
      'feel awful': 'berbat hissetmek',
      'smell awful': 'berbat kokmak'
    },
    examples: ['This wine tastes awful.'],
    exampleTranslations: ["Bu  arab n tad  berbat."]
  },
  {
    id: 'be_reliable',
    word: 'Be reliable',
    pos: 'phrase',
    meaning: 'g venilir olmak',
    definition: 'To be someone who you can trust to behave well, work hard, or do what you expect them to do.',
    ipa: '/bi r  la . .b l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reliability', pos: 'noun', meaning: 'g venilirlik' }
    ],
    synonyms: [
      { word: 'Dependable', meaning: 'bel ba lanabilir', pos: 'adj' },
      { word: 'Trustworthy', meaning: 'g venilir', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unreliable', meaning: 'g venilmez', pos: 'adj' },
      { word: 'Deceptive', meaning: 'aldat c ', pos: 'adj' }
    ],
    collocations: ['prove reliable', 'highly reliable', 'totally reliable'],
    collocationMeanings: {
      'prove reliable': 'g venilir oldu unu kan tlamak',
      'highly reliable': 'olduk a g venilir',
      'totally reliable': 'tamamen g venilir'
    },
    examples: ['Hannah is very reliable.'],
    exampleTranslations: ["Hannah  ok g venilirdir."]
  },
  {
    id: 'be_your_thing',
    word: 'Be your thing',
    pos: 'idiom',
    meaning: 'senin olay n olmak, ilgi alan n olmak',
    definition: 'Something that you are good at and/or like doing.',
    ipa: '/bi j  r    /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Be your cup of tea', meaning: 'harc /tarz  olmak', pos: 'idiom' },
      { word: 'Suit someone', meaning: 'birine uymak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Not be your thing', meaning: 'tarz  olmamak', pos: 'idiom' }
    ],
    collocations: ['not really my thing', 'is it your thing?'],
    collocationMeanings: {
      'not really my thing': 'pek bana g re de il',
      'is it your thing?': 'bu senin ilgin  ekiyor mu?'
    },
    examples: ["I'm afraid baking is not my thing."],
    exampleTranslations: ["Korkar m f r n i leri (pasta/b rek yapma) pek bana g re de il."]
  },
  {
    id: 'bear_in_mind',
    word: 'Bear in mind',
    pos: 'idiom',
    meaning: 'akl nda bulundurmak, unutmamak',
    definition: 'Reminding or warning a person about something important which they should remember.',
    ipa: '/be r  n ma nd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Keep in mind', meaning: 'ak lda tutmak', pos: 'idiom' },
      { word: 'Remember', meaning: 'hat rlamak', pos: 'verb' },
      { word: 'Consider', meaning: 'dikkate almak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forget', meaning: 'unutmak', pos: 'verb' },
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' }
    ],
    collocations: ['bear in mind that', 'important to bear in mind'],
    collocationMeanings: {
      'bear in mind that': ' unu akl nda tut ki',
      'important to bear in mind': 'ak lda tutulmas   nemli'
    },
    examples: ['Bear in mind that the deadline is approaching.'],
    exampleTranslations: ["Son teslim tarihinin yakla t   n  akl nda bulundur."]
  },
  {
    id: 'bilingual',
    word: 'Bilingual',
    pos: 'adjective',
    meaning: 'iki dilli',
    definition: 'Someone who is bilingual is able to speak two languages extremely well.',
    ipa: '/ba  l  . w l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'monolingual', pos: 'adj', meaning: 'tek dilli' },
      { word: 'multilingual', pos: 'adj', meaning: ' ok dilli' }
    ],
    synonyms: [
      { word: 'Polyglot', meaning: ' ok dil bilen', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Monolingual', meaning: 'tek dilli', pos: 'adj' }
    ],
    collocations: ['bilingual education', 'totally bilingual', 'bilingual dictionary'],
    collocationMeanings: {
      'bilingual education': 'iki dilli e itim',
      'totally bilingual': 'tamamen iki dilli',
      'bilingual dictionary': 'iki dilli s zl k'
    },
    examples: ['She speaks French and Spanish so she is bilingual.'],
    exampleTranslations: ["Frans zca ve  spanyolca konu uyor, bu y zden iki dilli."]
  },
  {
    id: 'bin',
    word: 'Bin',
    pos: 'noun',
    meaning: '  p kutusu',
    definition: 'A container for putting rubbish in.',
    ipa: '/b n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'bin', pos: 'verb', meaning: '  pe atmak' }
    ],
    synonyms: [
      { word: 'Dustbin', meaning: '  p tenekesi', pos: 'noun' },
      { word: 'Trash can', meaning: '  p kutusu', pos: 'noun' },
      { word: 'Receptacle', meaning: 'kap/hazne', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['rubbish bin', 'recycle bin', 'throw in the bin'],
    collocationMeanings: {
      'rubbish bin': '  p tenekesi',
      'recycle bin': 'geri d n   m kutusu',
      'throw in the bin': '  pe f rlatmak'
    },
    examples: ["It's time you threw those shoes in the bin."],
    exampleTranslations: ["O ayakkab lar    pe atma vaktin geldi."]
  },
  {
    id: 'blame_yourself',
    word: 'Blame yourself',
    pos: 'phrase',
    meaning: 'kendini su lamak',
    definition: 'To say or think that you are responsible for an accident, problem, or bad situation.',
    ipa: '/ble m j   self/',
    level: 'intermediate',
    wordFamily: [
      { word: 'blame', pos: 'noun', meaning: 'su lama' },
      { word: 'blameworthy', pos: 'adj', meaning: 'su lanas ' }
    ],
    synonyms: [
      { word: 'Reproach oneself', meaning: 'kendini k namak', pos: 'phrase' },
      { word: 'Feel guilty', meaning: 'su lu hissetmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Forgive yourself', meaning: 'kendini affetmek', pos: 'phrase' },
      { word: 'Exonerate', meaning: 'su suz   karmak', pos: 'verb' }
    ],
    collocations: ['only have yourself to blame', 'no need to blame yourself'],
    collocationMeanings: {
      'only have yourself to blame': 'sadece kendini su layabilirsin',
      'no need to blame yourself': 'kendini su lamana gerek yok'
    },
    examples: ["If it all goes wrong, don't blame yourself."],
    exampleTranslations: ["E er her  ey ters giderse, kendini su lama."]
  },
  {
    id: 'block_your_creativity',
    word: 'Block your creativity',
    pos: 'phrase',
    meaning: 'yarat c l   n  engellemek/t kamak',
    definition: 'Something stops creative thoughts.',
    ipa: '/bl k j  r  kri .e  t v. .ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Stifle', meaning: 'bo mak/bast rmak', pos: 'verb' },
      { word: 'Inhibit', meaning: 'engellemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Spark', meaning: 'ate lemek', pos: 'verb' },
      { word: 'Stimulate', meaning: 'canland rmak', pos: 'verb' }
    ],
    collocations: ['mental block', 'factors that block creativity'],
    collocationMeanings: {
      'mental block': 'zihinsel t kan kl k',
      'factors that block creativity': 'yarat c l    engelleyen fakt rler'
    },
    examples: ['Writing in the same space every day may block your creativity.'],
    exampleTranslations: ["Her g n ayn  yerde yazmak yarat c l   n z  engelleyebilir."]
  },
  {
    id: 'boost_your_creativity',
    word: 'Boost your creativity',
    pos: 'phrase',
    meaning: 'yarat c l   n  art rmak',
    definition: 'Something helps creative thoughts.',
    ipa: '/bu st j  r  kri .e  t v. .ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Enhance', meaning: 'geli tirmek', pos: 'verb' },
      { word: 'Fuel', meaning: 'beslemek', pos: 'verb' },
      { word: 'Inspire', meaning: 'ilham vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Dampen', meaning: 's nd rmek/azaltmak', pos: 'verb' },
      { word: 'Hinder', meaning: 'mani olmak', pos: 'verb' }
    ],
    collocations: ['boost confidence', 'boost morale', 'boost productivity'],
    collocationMeanings: {
      'boost confidence': ' zg veni art rmak',
      'boost morale': 'morali y kseltmek',
      'boost productivity': 'verimlili i art rmak'
    },
    examples: ['Being outdoors may boost your creativity.'],
    exampleTranslations: ["D  ar da olmak yarat c l   n z  art rabilir."]
  },
  {
    id: 'break_a_resolution',
    word: 'Break a resolution',
    pos: 'phrase',
    meaning: 'karar n  bozmak (yeminini bozmak)',
    definition: 'To not do what you promised.',
    ipa: '/bre k    rez.  lu .  n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Give up', meaning: 'vazge mek', pos: 'phrasal verb' },
      { word: 'Abandon', meaning: 'terk etmek/b rakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Keep a resolution', meaning: 'karar na sad k kalmak', pos: 'phrase' },
      { word: 'Stick to', meaning: 'ba l  kalmak', pos: 'phrasal verb' }
    ],
    collocations: ['make or break a resolution', 'break a new year resolution'],
    collocationMeanings: {
      'make or break a resolution': 'karar almak veya bozmak',
      'break a new year resolution': 'yeni y l karar n  bozmak'
    },
    examples: ['I broke a resolution not to eat meat when I went to the restaurant yesterday.'],
    exampleTranslations: ["D n restorana gitti imde et yememe karar m  bozdum."]
  },
  {
    id: 'breaking_news',
    word: 'Breaking news',
    pos: 'noun',
    meaning: 'son dakika haberi',
    definition: 'New information about a news event that is still happening.',
    ipa: '/ bre .k   nju z/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'News flash', meaning: 'haber b lteni (ani)', pos: 'noun' },
      { word: 'Latest developments', meaning: 'son geli meler', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['latest breaking news', 'follow breaking news'],
    collocationMeanings: {
      'latest breaking news': 'en son dakika geli meleri',
      'follow breaking news': 'son dakika haberlerini takip etmek'
    },
    examples: ['Keep up with the latest breaking news and politics from around the world.'],
    exampleTranslations: ["D nyan n d rt bir yan ndan en son dakika haberlerini ve siyaseti takip edin."]
  },
  {
    id: 'brilliant_b1',
    word: 'Brilliant',
    pos: 'adjective',
    meaning: ' ok zeki, parlak, muhte em',
    definition: 'Very intelligent.',
    ipa: '/ br l.j nt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'brilliance', pos: 'noun', meaning: 'parlakl k/deha' },
      { word: 'brilliantly', pos: 'adverb', meaning: 'parlak bir  ekilde' }
    ],
    synonyms: [
      { word: 'Exceptional', meaning: 'istisnai', pos: 'adj' },
      { word: 'Magnificent', meaning: 'ihti aml ', pos: 'adj' },
      { word: 'Outstanding', meaning: 'se kin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dull', meaning: 's k c /mat', pos: 'adj' },
      { word: 'Mediocre', meaning: 'vasat', pos: 'adj' },
      { word: 'Stupid', meaning: 'aptalca', pos: 'adj' }
    ],
    collocations: ['brilliant idea', 'brilliant success', 'absolutely brilliant'],
    collocationMeanings: {
      'brilliant idea': 'harika fikir',
      'brilliant success': 'muazzam ba ar ',
      'absolutely brilliant': 'kesinlikle harika'
    },
    examples: ['She is a brilliant scientist.'],
    exampleTranslations: ["O muhte em bir bilim insan ."]
  },
  {
    id: 'build_a_brand',
    word: 'Build a brand',
    pos: 'phrase',
    meaning: 'marka olu turmak',
    definition: 'Make or develop a product or group of products that has its own name and is made by one particular company.',
    ipa: '/b ld   br nd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Establish a brand', meaning: 'marka kurmak', pos: 'phrase' },
      { word: 'Develop identity', meaning: 'kimlik geli tirmek', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['brand building', 'global brand'],
    collocationMeanings: {
      'brand building': 'marka in as ',
      'global brand': 'k resel marka'
    },
    examples: ['We need the team to work together to build a brand.'],
    exampleTranslations: ["Bir marka olu turmak i in ekibin birlikte  al  mas na ihtiyac m z var."]
  },
  {
    id: 'build_a_reputation',
    word: 'Build a reputation',
    pos: 'phrase',
    meaning: 'itibar in a etmek, isim yapmak',
    definition: 'Make or develop the opinion that people have about how good something is.',
    ipa: '/b ld    rep.j  te .  n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Make a name for oneself', meaning: 'ad n  duyurmak', pos: 'idiom' },
      { word: 'Gain recognition', meaning: 'tan n rl k kazanmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Lose face', meaning: 'itibar kaybetmek', pos: 'idiom' },
      { word: 'Tarnish', meaning: 'lekelemek', pos: 'verb' }
    ],
    collocations: ['solid reputation', 'good reputation', 'reputation for excellence'],
    collocationMeanings: {
      'solid reputation': 'sa lam itibar',
      'good reputation': 'iyi   hret',
      'reputation for excellence': 'm kemmeliyetle tan nan itibar'
    },
    examples: ['It may take a while to build a reputation.'],
    exampleTranslations: ["Bir itibar olu turmak biraz zaman alabilir."]
  },
  {
    id: 'buttery',
    word: 'Buttery',
    pos: 'adjective',
    meaning: 'tereya l , tereya   tad nda',
    definition: 'Buttery food has a lot of butter in it, or tastes as if it has butter in it.',
    ipa: '/ b t. r.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'butter', pos: 'noun', meaning: 'tereya  ' }
    ],
    synonyms: [
      { word: 'Rich', meaning: 'ya l /yo un', pos: 'adj' },
      { word: 'Smooth', meaning: 'p r zs z', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dry', meaning: 'kuru', pos: 'adj' },
      { word: 'Tasteless', meaning: 'tads z', pos: 'adj' }
    ],
    collocations: ['buttery texture', 'buttery sauce'],
    collocationMeanings: {
      'buttery texture': 'tereya l  doku',
      'buttery sauce': 'tereya l  sos'
    },
    examples: ['The biscuits she made were delicious and buttery.'],
    exampleTranslations: ["Yapt    bisk viler lezzetli ve tereya l yd ."]
  },
  {
    id: 'carry_on',
    word: 'Carry on',
    pos: 'phrasal verb',
    meaning: 'devam etmek, s rd rmek',
    definition: 'To continue without stopping.',
    ipa: '/ k r.i  n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Continue', meaning: 'devam etmek', pos: 'verb' },
      { word: 'Proceed', meaning: 'ilerlemek', pos: 'verb' },
      { word: 'Keep on', meaning: 's rd rmek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Stop', meaning: 'durmak', pos: 'verb' },
      { word: 'Cease', meaning: 'kesmek/sonland rmak', pos: 'verb' },
      { word: 'Quit', meaning: 'b rakmak', pos: 'verb' }
    ],
    collocations: ['carry on working', 'carry on with', 'keep calm and carry on'],
    collocationMeanings: {
      'carry on working': ' al  maya devam etmek',
      'carry on with': 'bir  eye devam etmek',
      'keep calm and carry on': 'sakin ol ve devam et'
    },
    examples: ['He moved to London to carry on his work.'],
    exampleTranslations: [" al  malar n  s rd rmek i in Londra'ya ta  nd ."]
  },
  {
    id: 'catchy',
    word: 'Catchy',
    pos: 'adjective',
    meaning: 'ak lda kal c  ( ark /s z)',
    definition: 'A tune or phrase which attracts your attention and is easy to remember.',
    ipa: '/ k t .i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'catch', pos: 'verb', meaning: 'yakalamak' }
    ],
    synonyms: [
      { word: 'Memorable', meaning: 'unutulmaz', pos: 'adj' },
      { word: 'Poplular', meaning: 'pop ler', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Forgettable', meaning: 'unutulabilir', pos: 'adj' },
      { word: 'Boring', meaning: 's k c ', pos: 'adj' }
    ],
    collocations: ['catchy tune', 'catchy song', 'catchy slogan'],
    collocationMeanings: {
      'catchy tune': 'ak lda kal c  melodi',
      'catchy song': 'ak lda kal c   ark ',
      'catchy slogan': 'ak lda kal c  slogan'
    },
    examples: ["I like this song because it's very catchy."],
    exampleTranslations: ["Bu  ark y  seviyorum   nk   ok ak lda kal c ."]
  },
  {
    id: 'cause_b1',
    word: 'Cause',
    pos: 'noun',
    meaning: 'sebep olmak, neden',
    definition: 'An event, thing, or person that makes something happen.',
    ipa: '/k  z/',
    level: 'intermediate',
    wordFamily: [
      { word: 'causal', pos: 'adj', meaning: 'nedensel' },
      { word: 'causality', pos: 'noun', meaning: 'nedensellik' }
    ],
    synonyms: [
      { word: 'Reason', meaning: 'sebep', pos: 'noun' },
      { word: 'Source', meaning: 'kaynak', pos: 'noun' },
      { word: 'Origin', meaning: 'k ken', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Effect', meaning: 'etki', pos: 'noun' },
      { word: 'Result', meaning: 'sonu ', pos: 'noun' },
      { word: 'Consequence', meaning: 'netice', pos: 'noun' }
    ],
    collocations: ['main cause', 'common cause', 'cause for concern'],
    collocationMeanings: {
      'main cause': 'ana neden',
      'common cause': 'yayg n neden',
      'cause for concern': 'endi e verici neden'
    },
    examples: ['The major cause of these accidents is drivers going too fast.'],
    exampleTranslations: ["Bu kazalar n ana nedeni s r c lerin  ok h zl  gitmesidir."]
  },
  {
    id: 'change_my_mind',
    word: 'Change my mind',
    pos: 'phrase',
    meaning: 'fikrimi de i tirmek',
    definition: 'To adopt a different opinion or plan.',
    ipa: '/t e nd  ma  ma nd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reconsider', meaning: 'yeniden de erlendirmek', pos: 'verb' },
      { word: 'Vacillate', meaning: 'karars z kalmak', pos: 'verb' }
    ],
    antonyms: [
      { word: "Stick to one's guns", meaning: 'fikrinden vazge memek', pos: 'idiom' }
    ],
    collocations: ['never change your mind', "hard to change one's mind"],
    collocationMeanings: {
      'never change your mind': 'asla fikrini de i tirmemek',
      "hard to change one's mind": "birinin fikrini de i tirmesi zordur"
    },
    examples: ["I've changed my mind   I'll have a coffee."],
    exampleTranslations: ["Fikrimi de i tirdim   bir kahve alaca  m."]
  },
  {
    id: 'cheesy',
    word: 'Cheesy',
    pos: 'adjective',
    meaning: 'peynirli, peynir tad nda',
    definition: 'Tasting like cheese.',
    ipa: '/ t i .zi/',
    level: 'intermediate',
    wordFamily: [
      { word: 'cheese', pos: 'noun', meaning: 'peynir' }
    ],
    synonyms: [
      { word: 'Corny', meaning: 'bayat/kli e (mecaz)', pos: 'adj' },
      { word: 'Cheeselike', meaning: 'peynirimsi', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sophisticated', meaning: 'geli mi / st d zey', pos: 'adj' }
    ],
    collocations: ['cheesy sauce', 'cheesy pasta', 'cheesy grin'],
    collocationMeanings: {
      'cheesy sauce': 'peynirli sos',
      'cheesy pasta': 'peynirli makarna',
      'cheesy grin': 'sahte/zoraki g l mseme (argoda)'
    },
    examples: ['It has a very strong cheesy flavour to it.'],
    exampleTranslations: [" ok g  l  bir peynir aromas  var."]
  },
  {
    id: 'choir',
    word: 'Choir',
    pos: 'noun',
    meaning: 'koro',
    definition: 'A group of singers who perform together, for example in a church or school.',
    ipa: '/kwa  r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'choral', pos: 'adj', meaning: 'koroya ait' }
    ],
    synonyms: [
      { word: 'Chorus', meaning: 'nakarat/koro', pos: 'noun' },
      { word: 'Ensemble', meaning: 'topluluk', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Soloist', meaning: 'solist', pos: 'noun' }
    ],
    collocations: ['school choir', 'church choir', 'join a choir'],
    collocationMeanings: {
      'school choir': 'okul korosu',
      'church choir': 'kilise korosu',
      'join a choir': 'koroya kat lmak'
    },
    examples: ['Jack was a member of the school choir.'],
    exampleTranslations: ["Jack okul korosunun bir  yesiydi."]
  },
  {
    id: 'chocolatey',
    word: 'Chocolatey',
    pos: 'adjective',
    meaning: ' ikolatal ,  ikolata gibi',
    definition: 'Chocolatey food has a lot of chocolate in it, or tastes like chocolate.',
    ipa: '/ t  k.l .ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'chocolate', pos: 'noun', meaning: ' ikolata' }
    ],
    synonyms: [
      { word: 'Rich', meaning: 'yo un/lezzetli', pos: 'adj' },
      { word: 'Sweet', meaning: 'tatl ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Bitter', meaning: 'ac ', pos: 'adj' }
    ],
    collocations: ['chocolatey taste', 'chocolatey dessert'],
    collocationMeanings: {
      'chocolatey taste': ' ikolatal  tad',
      'chocolatey dessert': ' ikolatal  tatl '
    },
    examples: ['The cake is a bit too chocolatey for me.'],
    exampleTranslations: ["Kek benim i in biraz fazla  ikolatal ."]
  },
  {
    id: 'clear_up',
    word: 'Clear up',
    pos: 'phrasal verb',
    meaning: 'temizlemek, ortal    toparlamak',
    definition: 'To make everything clean and tidy again after making a mess.',
    ipa: '/kl  r  p/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Tidy', meaning: 'd zenlemek', pos: 'verb' },
      { word: 'Clean', meaning: 'temizlemek', pos: 'verb' },
      { word: 'Resolve', meaning: 'a  kl  a kavu turmak (sorun i in)', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Mess up', meaning: 'kar  t rmak', pos: 'phrasal verb' },
      { word: 'Clutter', meaning: 'darmada  n etmek', pos: 'verb' }
    ],
    collocations: ['clear up the mess', 'clear up the weather', 'clear up a doubt'],
    collocationMeanings: {
      'clear up the mess': 'da  n kl    toplamak',
      'clear up the weather': 'havan n a mas ',
      'clear up a doubt': '  pheyi gidermek'
    },
    examples: ["I'll clear up if you want to go to bed."],
    exampleTranslations: ["E er yatmak istersen etraf  ben toparlar m."]
  },
  {
    id: 'colleague',
    word: 'Colleague',
    pos: 'noun',
    meaning: 'meslekta , i  arkada  ',
    definition: 'People who work in the same organization or department as you.',
    ipa: '/ k l.i  /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Co-worker', meaning: 'i  arkada  ', pos: 'noun' },
      { word: 'Teammate', meaning: 'tak m arkada  ', pos: 'noun' },
      { word: 'Associate', meaning: 'ortak/i  orta  ', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Rival', meaning: 'rakip', pos: 'noun' },
      { word: 'Enemy', meaning: 'd  man', pos: 'noun' }
    ],
    collocations: ['work colleague', 'former colleague', 'senior colleague'],
    collocationMeanings: {
      'work colleague': 'i  arkada  ',
      'former colleague': 'eski meslekta ',
      'senior colleague': 'k demli meslekta '
    },
    examples: ['He is popular with his colleagues.'],
    exampleTranslations: ["   arkada lar  aras nda pop lerdir."]
  },
  {
    id: 'come_up_with',
    word: 'Come up with',
    pos: 'phrasal verb',
    meaning: 'bulmak (fikir vb.),  retmek',
    definition: 'To think of something such as an idea or a plan.',
    ipa: '/k m  p w  /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Produce', meaning: ' retmek', pos: 'verb' },
      { word: 'Devise', meaning: 'tasarlamak', pos: 'verb' },
      { word: 'Invent', meaning: 'icat etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forget', meaning: 'unutmak', pos: 'verb' },
      { word: 'Ignore', meaning: 'ihmal etmek', pos: 'verb' }
    ],
    collocations: ['come up with an idea', 'come up with a solution', 'come up with a plan'],
    collocationMeanings: {
      'come up with an idea': 'bir fikir bulmak',
      'come up with a solution': 'bir   z m  retmek',
      'come up with a plan': 'bir plan tasarlamak'
    },
    examples: ['Is that the best you can come up with?'],
    exampleTranslations: ["Bulabildi in en iyi  ey bu mu?"]
  },
  {
    id: 'come_up_with_new_ideas',
    word: 'Come up with new ideas',
    pos: 'phrase',
    meaning: 'yeni fikirler bulmak',
    definition: 'To think of something new.',
    ipa: '/k m  p w   nju  a  d  z/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Innovate', meaning: 'yenilik yapmak', pos: 'verb' },
      { word: 'Brainstorm', meaning: 'beyin f rt nas  yapmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['need to generate new ideas', 'strategy to generate new ideas'],
    collocationMeanings: {
      'need to generate new ideas': 'yeni fikirler bulmaya ihtiya  duymak',
      'strategy to generate new ideas': 'yeni fikirler bulma stratejisi'
    },
    examples: ['We can form a group to come up with new ideas.'],
    exampleTranslations: ["Yeni fikirler  retmek i in bir grup kurabiliriz."]
  },
  {
    id: 'competitive',
    word: 'Competitive',
    pos: 'adjective',
    meaning: 'rekabet i',
    definition: 'A competitive activity is one in which companies or teams are competing against each other.',
    ipa: '/k m pet. .t v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'competition', pos: 'noun', meaning: 'rekabet' },
      { word: 'compete', pos: 'verb', meaning: 'yar  mak' },
      { word: 'competitor', pos: 'noun', meaning: 'rakip' }
    ],
    synonyms: [
      { word: 'Ambitious', meaning: 'h rsl ', pos: 'adj' },
      { word: 'Combative', meaning: 'kavgac /rekabet i', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Non-competitive', meaning: 'rekabet i olmayan', pos: 'adj' },
      { word: 'Cooperative', meaning: 'i birlik i', pos: 'adj' }
    ],
    collocations: ['competitive market', 'competitive edge', 'highly competitive'],
    collocationMeanings: {
      'competitive market': 'rekabet i pazar',
      'competitive edge': 'rekabet avantaj ',
      'highly competitive': 'son derece rekabet i'
    },
    examples: ['He gave up playing competitive football at the age of 24.'],
    exampleTranslations: ["24 ya  nda rekabet i futbol oynamay  b rakt ."]
  },
  {
    id: 'confident_b1',
    word: 'Confident',
    pos: 'adjective',
    meaning: 'kendine g venen',
    definition: 'Someone who believes in their own abilities and so does not feel nervous or frightened.',
    ipa: '/ k n.f .d nt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'confidence', pos: 'noun', meaning: 'g ven' },
      { word: 'confidant', pos: 'noun', meaning: 's rda ' },
      { word: 'confidently', pos: 'adverb', meaning: 'kendinden emin bir  ekilde' }
    ],
    synonyms: [
      { word: 'Self-assured', meaning: 'kendinden emin', pos: 'adj' },
      { word: 'Secure', meaning: 'g venli/emin', pos: 'adj' },
      { word: 'Bold', meaning: 'cesur', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Insecure', meaning: 'g vensiz', pos: 'adj' },
      { word: 'Shy', meaning: 'utanga ', pos: 'adj' },
      { word: 'Hesitant', meaning: 'teredd tl ', pos: 'adj' }
    ],
    collocations: ['feel confident', 'self confident', 'confident person'],
    collocationMeanings: {
      'feel confident': 'kendine g venmek',
      'self confident': ' zg venli',
      'confident person': 'kendinden emin ki i'
    },
    examples: ['He is confident in his ability to play the piano.'],
    exampleTranslations: ["Piyano  alma yetene i konusunda kendine g veniyor."]
  },
  {
    id: 'confused',
    word: 'Confused',
    pos: 'adjective',
    meaning: 'kafas  kar   k',
    definition: 'Unable to understand something or think clearly about it.',
    ipa: '/k n fju zd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'confuse', pos: 'verb', meaning: 'kafas n  kar  t rmak' },
      { word: 'confusion', pos: 'noun', meaning: 'kar   kl k' },
      { word: 'confusing', pos: 'adj', meaning: 'kafa kar  t r c ' }
    ],
    synonyms: [
      { word: 'Puzzled', meaning: ' a k n', pos: 'adj' },
      { word: 'Baffled', meaning: 'donup kalm  ', pos: 'adj' },
      { word: 'Disoriented', meaning: 'y n n   a  rm  ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Clear', meaning: 'net/anlam  ', pos: 'adj' },
      { word: 'Lucid', meaning: 'a  k zihinli', pos: 'adj' },
      { word: 'Understanding', meaning: 'anlay  l /anlayan', pos: 'adj' }
    ],
    collocations: ['totally confused', 'look confused', 'confused expression'],
    collocationMeanings: {
      'totally confused': 'tamamen kafas  kar  m  ',
      'look confused': 'kafas  kar  m   g r nmek',
      'confused expression': ' a k n/kar   k ifade'
    },
    examples: ['She was starting to feel a bit confused.'],
    exampleTranslations: ["Biraz kafas  kar  maya ba lam  t ."]
  },
  {
    id: 'control_yourself',
    word: 'Control yourself',
    pos: 'phrase',
    meaning: 'kendine hakim olmak',
    definition: 'To have the power to make decisions and decide what will happen to something.',
    ipa: '/k n tr  l j   self/',
    level: 'intermediate',
    wordFamily: [
      { word: 'controllable', pos: 'adj', meaning: 'kontrol edilebilir' },
      { word: 'controller', pos: 'noun', meaning: 'denetleyici' }
    ],
    synonyms: [
      { word: 'Restrain oneself', meaning: 'kendini dizginlemek', pos: 'phrase' },
      { word: 'Keep one s cool', meaning: 'so ukkanl l   n  korumak', pos: 'idiom' }
    ],
    antonyms: [
      { word: 'Lose control', meaning: 'kontrol  kaybetmek', pos: 'phrase' },
      { word: 'Go wild', meaning: '    r ndan   kmak', pos: 'idiom' }
    ],
    collocations: ['struggle to control yourself', 'must control yourself'],
    collocationMeanings: {
      'struggle to control yourself': 'kendine hakim olmakta zorlanmak',
      'must control yourself': 'kendine hakim olmal s n'
    },
    examples: ["When I see chocolate I can't control myself."],
    exampleTranslations: [" ikolata g rd   mde kendime hakim olam yorum."]
  },
  {
    id: 'convenient',
    word: 'Convenient',
    pos: 'adjective',
    meaning: 'uygun, elveri li, pratik',
    definition: 'Easy to use, or appropriate for a particular purpose.',
    ipa: '/k n vi .ni. nt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'convenience', pos: 'noun', meaning: 'uygunluk/kolayl k' },
      { word: 'conveniently', pos: 'adverb', meaning: 'uygun bir  ekilde' }
    ],
    synonyms: [
      { word: 'Handy', meaning: 'kullan  l ', pos: 'adj' },
      { word: 'Practical', meaning: 'pratik', pos: 'adj' },
      { word: 'Accessible', meaning: 'eri ilebilir', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Inconvenient', meaning: 'uygunsuz/zahmetli', pos: 'adj' },
      { word: 'Useless', meaning: 'faydas z', pos: 'adj' }
    ],
    collocations: ['convenient location', 'convenient time', 'very convenient'],
    collocationMeanings: {
      'convenient location': 'uygun konum',
      'convenient time': 'm sait/uygun zaman',
      'very convenient': ' ok pratik'
    },
    examples: ['The hotel was only five minutes from the beach, which was convenient.'],
    exampleTranslations: ["Otel plaja sadece be  dakika mesafeydi, bu da  ok uygundu/pratikti."]
  },
  {
    id: 'creamy',
    word: 'Creamy',
    pos: 'adjective',
    meaning: 'kremal , k vaml , yumu ak',
    definition: 'A creamy substance is thick, soft, and smooth and does not flow easily.',
    ipa: '/ kri .mi/',
    level: 'intermediate',
    wordFamily: [
      { word: 'cream', pos: 'noun', meaning: 'krema' },
      { word: 'creamery', pos: 'noun', meaning: 'mand ra' }
    ],
    synonyms: [
      { word: 'Smooth', meaning: 'p r zs z', pos: 'adj' },
      { word: 'Velvety', meaning: 'kadifemsi', pos: 'adj' },
      { word: 'Rich', meaning: 'yo un/zengin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Lumpy', meaning: 'topaklanm  ', pos: 'adj' },
      { word: 'Thin', meaning: 'ince/sulu', pos: 'adj' },
      { word: 'Watery', meaning: 'sulu', pos: 'adj' }
    ],
    collocations: ['creamy texture', 'creamy soup', 'rich and creamy'],
    collocationMeanings: {
      'creamy texture': 'kremams  doku',
      'creamy soup': 'k vaml   orba',
      'rich and creamy': 'yo un ve kremal '
    },
    examples: ['This sauce is so creamy.'],
    exampleTranslations: ["Bu sos  ok k vaml /yumu ak."]
  },

  {
    id: 'crowded',
    word: 'Crowded',
    pos: 'adjective',
    meaning: 'kalabal k',
    definition: 'A place with a lot of people, especially too many.',
    ipa: '/ kra .d d/',
    level: 'intermediate',
    wordFamily: [
      { word: 'crowd', pos: 'noun', meaning: 'kalabal k' },
      { word: 'overcrowded', pos: 'adj', meaning: 'a  r  kalabal k' }
    ],
    synonyms: [
      { word: 'Packed', meaning: 't kl m t kl m', pos: 'adj' },
      { word: 'Congested', meaning: 's k   k', pos: 'adj' },
      { word: 'Full', meaning: 'dolu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Empty', meaning: 'bo ', pos: 'adj' },
      { word: 'Deserted', meaning: 'terk edilmi / ss z', pos: 'adj' },
      { word: 'Spacious', meaning: 'ferah', pos: 'adj' }
    ],
    collocations: ['crowded room', 'over crowded', 'crowded city'],
    collocationMeanings: {
      'crowded room': 'kalabal k oda',
      'over crowded': 'a  r  kalabal k',
      'crowded city': 'kalabal k  ehir'
    },
    examples: ['The street was noisy and crowded.'],
    exampleTranslations: ['Cadde g r lt l  ve kalabal kt .']
  },
  {
    id: 'cut_down',
    word: 'Cut down',
    pos: 'phrasal verb',
    meaning: 'azaltmak, kesinti yapmak',
    definition: 'To reduce an amount of something.',
    ipa: '/k t da n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reduce', meaning: 'azaltmak', pos: 'verb' },
      { word: 'Lessen', meaning: 'eksiltmek', pos: 'verb' },
      { word: 'Decrease', meaning: 'd   rmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Increase', meaning: 'art rmak', pos: 'verb' },
      { word: 'Raise', meaning: 'y kseltmek', pos: 'verb' }
    ],
    collocations: ['cut down trees', 'cut down costs', 'cut down expenses'],
    collocationMeanings: {
      'cut down trees': 'a a  kesmek',
      'cut down costs': 'maliyetleri d   rmek',
      'cut down expenses': 'giderleri k smak'
    },
    examples: ['These improvements will cut down on traffic noise.'],
    exampleTranslations: ['Bu iyile tirmeler trafik g r lt s n  azaltacak.']
  },
  {
    id: 'cut_down_on',
    word: 'Cut down on',
    pos: 'phrasal verb',
    meaning: 'azaltmak (t ketimi vb.)',
    definition: 'To do less of something.',
    ipa: '/k t da n  n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Curtail', meaning: 'k smak', pos: 'verb' },
      { word: 'Economize', meaning: 'tasarruf etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Indulge', meaning: 'kendini kapt rmak/a  r ya ka mak', pos: 'verb' }
    ],
    collocations: ['cut down on sugar', 'cut down on salt', 'cut down on smoking'],
    collocationMeanings: {
      'cut down on sugar': ' ekeri azaltmak',
      'cut down on salt': 'tuz kullan m n  d   rmek',
      'cut down on smoking': 'sigaray  azaltmak'
    },
    examples: ['She wants to cut down on the amount of chocolate she eats.'],
    exampleTranslations: ['Yedi i  ikolata miktar n  azaltmak istiyor.']
  },
  {
    id: 'deal_with',
    word: 'Deal with',
    pos: 'phrasal verb',
    meaning: 'ilgilenmek, ba a   kmak',
    definition: 'To take action to do something, especially to solve a problem.',
    ipa: '/di l w  /',
    level: 'intermediate',
    wordFamily: [
      { word: 'dealer', pos: 'noun', meaning: 'sat c /t ccar' },
      { word: 'deal', pos: 'noun', meaning: 'anla ma' }
    ],
    synonyms: [
      { word: 'Handle', meaning: 'idare etmek', pos: 'verb' },
      { word: 'Cope', meaning: 'ba  etmek', pos: 'verb' },
      { word: 'Tackle', meaning: 'ele almak/  zmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' },
      { word: 'Neglect', meaning: 'ihmal etmek', pos: 'verb' }
    ],
    collocations: ['deal with a problem', 'deal with a situation', 'deal with a complaint'],
    collocationMeanings: {
      'deal with a problem': 'bir sorunu halletmek',
      'deal with a situation': 'bir durumla ilgilenmek',
      'deal with a complaint': 'bir  ikayeti   z me kavu turmak'
    },
    examples: ['The government must now deal with the problem of high unemployment.'],
    exampleTranslations: ['H k met  imdi y ksek i sizlik sorunuyla ilgilenmeli.']
  },
  {
    id: 'decisive',
    word: 'Decisive',
    pos: 'adjective',
    meaning: 'kararl ',
    definition: 'Able to make choices or decide what to do quickly and confidently.',
    ipa: '/d  sa .s v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'decide', pos: 'verb', meaning: 'karar vermek' },
      { word: 'decision', pos: 'noun', meaning: 'karar' },
      { word: 'decisiveness', pos: 'noun', meaning: 'kararl l k' }
    ],
    synonyms: [
      { word: 'Determined', meaning: 'azimle karar vermi ', pos: 'adj' },
      { word: 'Resolute', meaning: 'kararl /sabit', pos: 'adj' },
      { word: 'Definitive', meaning: 'kesin', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Indecisive', meaning: 'karars z', pos: 'adj' },
      { word: 'Hesitant', meaning: 'teredd tl ', pos: 'adj' },
      { word: 'Irresolute', meaning: 'karars z/gev ek', pos: 'adj' }
    ],
    collocations: ['decisive factor', 'decisive victory', 'decisive action'],
    collocationMeanings: {
      'decisive factor': 'belirleyici fakt r',
      'decisive victory': 'kesin zafer',
      'decisive action': 'kararl  eylem'
    },
    examples: ["It's best to ask her because she's very decisive."],
    exampleTranslations: ['Ona sormak en iyisi   nk  o  ok kararl d r.']
  },
  {
    id: 'design_v',
    word: 'Design (v)',
    pos: 'verb',
    meaning: 'tasarlamak',
    definition: 'To decide how something will be made, including how it will work and what it will look like, and often to make drawings of it.',
    ipa: '/d  za n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'designer', pos: 'noun', meaning: 'tasar mc ' },
      { word: 'design', pos: 'noun', meaning: 'tasar m' }
    ],
    synonyms: [
      { word: 'Create', meaning: 'yaratmak', pos: 'verb' },
      { word: 'Plan', meaning: 'planlamak', pos: 'verb' },
      { word: 'Draft', meaning: 'tasla  n  haz rlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Destroy', meaning: 'y kmak', pos: 'verb' },
      { word: 'Neglect', meaning: 'ihmal etmek', pos: 'verb' }
    ],
    collocations: ['design a building', 'specially designed', 'design a website'],
    collocationMeanings: {
      'design a building': 'bina tasarlamak',
      'specially designed': ' zel olarak tasarlanm  ',
      'design a website': 'internet sitesi tasarlamak'
    },
    examples: ['The bride wore a cream silk dress that she designed herself.'],
    exampleTranslations: ['Gelin, kendi tasarlad    krem rengi ipek bir elbise giydi.']
  },
  {
    id: 'designer',
    word: 'Designer',
    pos: 'noun',
    meaning: 'tasar mc ',
    definition: 'Someone whose job is to decide how to make things or to decide their shape or appearance.',
    ipa: '/d  za .n r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'design', pos: 'noun/verb', meaning: 'tasar m/tasarlamak' }
    ],
    synonyms: [
      { word: 'Creator', meaning: 'yarat c ', pos: 'noun' },
      { word: 'Stylist', meaning: 'stilist', pos: 'noun' },
      { word: 'Architect', meaning: 'mimar', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['fashion designer', 'graphic designer', 'interior designer'],
    collocationMeanings: {
      'fashion designer': 'moda tasar mc s ',
      'graphic designer': 'grafik tasar mc ',
      'interior designer': 'i  mimar'
    },
    examples: ['Calvin Klein is a famous fashion designer.'],
    exampleTranslations: ['Calvin Klein  nl  bir moda tasar mc s d r.']
  },
  {
    id: 'disappear',
    word: 'Disappear',
    pos: 'verb',
    meaning: 'g zden kaybolmak, yok olmak',
    definition: 'To no longer happen or exist.',
    ipa: '/ d s.  p  r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'appearance', pos: 'noun', meaning: 'g r n  ' },
      { word: 'disappearance', pos: 'noun', meaning: 'g zden kaybolma' }
    ],
    synonyms: [
      { word: 'Vanish', meaning: 'aniden yok olmak', pos: 'verb' },
      { word: 'Fade', meaning: 'solup gitmek', pos: 'verb' },
      { word: 'Evaporate', meaning: 'buharla mak/yok olmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Appear', meaning: 'g r nmek', pos: 'verb' },
      { word: 'Emerge', meaning: 'ortaya   kmak', pos: 'verb' },
      { word: 'Materialize', meaning: 'somutla mak', pos: 'verb' }
    ],
    collocations: ['disappear completely', 'suddenly disappear', 'disappear from view'],
    collocationMeanings: {
      'disappear completely': 'tamamen yok olmak',
      'suddenly disappear': 'aniden kaybolmak',
      'disappear from view': 'g zden kaybolmak'
    },
    examples: ['Many public libraries in the city are disappearing.'],
    exampleTranslations: [' ehirdeki bir ok halk k t phanesi yok oluyor.']
  },
  {
    id: 'dishonest',
    word: 'Dishonest',
    pos: 'adjective',
    meaning: 'd r st olmayan, sahtekar',
    definition: 'Willing to do things that are not honest, for example to tell lies or steal things.',
    ipa: '/d  s n. st/',
    level: 'intermediate',
    wordFamily: [
      { word: 'dishonesty', pos: 'noun', meaning: 'sahtekarl k' },
      { word: 'honesty', pos: 'noun', meaning: 'd r stl k' }
    ],
    synonyms: [
      { word: 'Deceitful', meaning: 'aldat c ', pos: 'adj' },
      { word: 'Corrupt', meaning: 'yozla m  ', pos: 'adj' },
      { word: 'Unscrupulous', meaning: 'ilkesiz/ahlaks z', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Honest', meaning: 'd r st', pos: 'adj' },
      { word: 'Trustworthy', meaning: 'g venilir', pos: 'adj' },
      { word: 'Sincere', meaning: 'samimi', pos: 'adj' }
    ],
    collocations: ['dishonest behavior', 'dishonest person', 'completely dishonest'],
    collocationMeanings: {
      'dishonest behavior': 'd r st olmayan davran  ',
      'dishonest person': 'sahtekar ki i',
      'completely dishonest': 'tamamen d r stl kten uzak'
    },
    examples: ['They admitted that there were some dishonest employees working in the bank.'],
    exampleTranslations: ['Bankada  al  an baz  d r st olmayan personeller oldu unu kabul ettiler.']
  },
  {
    id: 'dish_up',
    word: 'Dish up',
    pos: 'phrasal verb',
    meaning: 'yemek servis etmek',
    definition: 'To put food into dishes so that it is ready to be eaten.',
    ipa: '/d    p/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Serve', meaning: 'servis etmek', pos: 'verb' },
      { word: 'Present', meaning: 'sunmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['dish up a meal', 'ready to dish up'],
    collocationMeanings: {
      'dish up a meal': 'yemek haz rlay p koymak',
      'ready to dish up': 'servis edilmeye haz r'
    },
    examples: ["Can you dish up the food while it's hot?"],
    exampleTranslations: ['Yemek s cakken servis edebilir misin?']
  },
  {
    id: 'display',
    word: 'Display',
    pos: 'noun',
    meaning: 'sergilemek, g steri',
    definition: 'An arrangement of things for people to look at.',
    ipa: '/d  sple /',
    level: 'intermediate',
    wordFamily: [
      { word: 'display', pos: 'verb', meaning: 'sergilemek' }
    ],
    synonyms: [
      { word: 'Exhibition', meaning: 'sergi', pos: 'noun' },
      { word: 'Show', meaning: 'g steri', pos: 'noun' },
      { word: 'Spectacle', meaning: 'g steri / hti am', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Concealment', meaning: 'gizleme', pos: 'noun' },
      { word: 'Hiding', meaning: 'saklama', pos: 'noun' }
    ],
    collocations: ['public display', 'on display', 'window display'],
    collocationMeanings: {
      'public display': 'halka a  k g sterim',
      'on display': 'sergilenmekte',
      'window display': 'vitrin sergisi'
    },
    examples: ['Max put up the window display.'],
    exampleTranslations: ['Max vitrin d zenlemesini yerle tirdi.']
  },
  {
    id: 'donate',
    word: 'Donate',
    pos: 'verb',
    meaning: 'ba   lamak',
    definition: 'To give something such as money or goods to an organization.',
    ipa: '/d   ne t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'donation', pos: 'noun', meaning: 'ba   ' },
      { word: 'donor', pos: 'noun', meaning: 'ba     ' }
    ],
    synonyms: [
      { word: 'Contribute', meaning: 'katk da bulunmak', pos: 'verb' },
      { word: 'Grant', meaning: 'hibe etmek', pos: 'verb' },
      { word: 'Bestow', meaning: 'sunmak/bah etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Receive', meaning: 'almak', pos: 'verb' },
      { word: 'Take', meaning: 'almak/g t rmer', pos: 'verb' },
      { word: 'Withdraw', meaning: 'geri  ekmek', pos: 'verb' }
    ],
    collocations: ['donate blood', 'donate money', 'donate to charity'],
    collocationMeanings: {
      'donate blood': 'kan ba   lamak',
      'donate money': 'para ba    nda bulunmak',
      'donate to charity': 'hay r kurumuna ba    yapmak'
    },
    examples: ['The centre was bought with money donated by a wealthy businessman.'],
    exampleTranslations: ['Merkez, zengin bir i  adam  taraf ndan ba   lanan parayla sat n al nd .']
  },
  {
    id: 'draw_attention_to',
    word: 'Draw attention to',
    pos: 'phrase',
    meaning: 'dikkat  ekmek (bir  eye/birine)',
    definition: 'To make people notice somebody/something.',
    ipa: '/dr     ten.  n tu /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Highlight', meaning: 'vurgulamak', pos: 'verb' },
      { word: 'Point out', meaning: 'i aret etmek', pos: 'phrasal verb' },
      { word: 'Emphasize', meaning: 'vurgu yapmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Distract from', meaning: 'dikkat da  tmak', pos: 'phrase' },
      { word: 'Gloss over', meaning: ' st nk r  ge mek', pos: 'phrasal verb' }
    ],
    collocations: ['draw attention to the fact', 'draw attention to the problem'],
    collocationMeanings: {
      'draw attention to the fact': 'bir ger e e dikkat  ekmek',
      'draw attention to the problem': 'soruna parmak basmak/dikkat  ekmek'
    },
    examples: ['We have to try and get in without drawing attention to ourselves.'],
    exampleTranslations: ['Dikkat  ekmeden i eri girmeye  al  mal y z.']
  },
  {
    id: 'encourage_b1',
    word: 'Encourage',
    pos: 'verb',
    meaning: 'te vik etmek, cesaretlendirmek',
    definition: 'To suggest that someone does something that you believe would be good.',
    ipa: '/ n k r. d /',
    level: 'intermediate',
    wordFamily: [
      { word: 'encouragement', pos: 'noun', meaning: 'te vik' },
      { word: 'encouraging', pos: 'adj', meaning: 'cesaret verici' },
      { word: 'courage', pos: 'noun', meaning: 'cesaret' }
    ],
    synonyms: [
      { word: 'Inspire', meaning: 'ilham vermek', pos: 'verb' },
      { word: 'Support', meaning: 'desteklemek', pos: 'verb' },
      { word: 'Motivate', meaning: 'motive etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discourage', meaning: 'vazge irmek', pos: 'verb' },
      { word: 'Deter', meaning: 'cayd rmak', pos: 'verb' },
      { word: 'Hinder', meaning: 'engellemek', pos: 'verb' }
    ],
    collocations: ['strongly encourage', 'encourage to do', 'encourage development'],
    collocationMeanings: {
      'strongly encourage': ' iddetle te vik etmek',
      'encourage to do': 'yapmas  i in y reklendirmek',
      'encourage development': 'geli imi desteklemek'
    },
    examples: ['We encourage student participation in our classes.'],
    exampleTranslations: ['Derslerimizde   renci kat l m n  te vik ediyoruz.']
  },
  {
    id: 'enormous_b1',
    word: 'Enormous',
    pos: 'adjective',
    meaning: 'kocaman, muazzam',
    definition: 'Very large in size or quantity.',
    ipa: '/  n  .m s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'enormity', pos: 'noun', meaning: 'devasal k/k t l k' },
      { word: 'enormously', pos: 'adverb', meaning: 'muazzam derecede' }
    ],
    synonyms: [
      { word: 'Huge', meaning: 'devasa', pos: 'adj' },
      { word: 'Gigantic', meaning: 'dev gibi', pos: 'adj' },
      { word: 'Massive', meaning: 'k tlesel/b y k', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Tiny', meaning: 'k   c k', pos: 'adj' },
      { word: 'Minute', meaning: 'minnac k', pos: 'adj' },
      { word: 'Small', meaning: 'k   k', pos: 'adj' }
    ],
    collocations: ['enormous amount', 'enormous potential', 'enormous success'],
    collocationMeanings: {
      'enormous amount': 'muazzam miktar',
      'enormous potential': 'b y k potansiyel',
      'enormous success': 'dev ba ar '
    },
    examples: ["We couldn't finish the enormous birthday cake."],
    exampleTranslations: ['Kocaman do um g n  pastas n  bitiremedik.']
  },
  {
    id: 'expectation',
    word: 'Expectation',
    pos: 'noun',
    meaning: 'beklenti',
    definition: 'The belief that something will happen.',
    ipa: '/ ek.spek te .  n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'expect', pos: 'verb', meaning: 'ummak/beklemek' },
      { word: 'expected', pos: 'adj', meaning: 'beklenen' }
    ],
    synonyms: [
      { word: 'Anticipation', meaning: 'beklenti/tahmin', pos: 'noun' },
      { word: 'Assumption', meaning: 'varsay m', pos: 'noun' },
      { word: 'Prospection', meaning: 'gelece i g rme', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Disbelief', meaning: 'inanmama', pos: 'noun' },
      { word: 'Surprise', meaning: 's rpriz', pos: 'noun' }
    ],
    collocations: ['high expectations', 'meet expectations', 'beyond expectations'],
    collocationMeanings: {
      'high expectations': 'y ksek beklentiler',
      'meet expectations': 'beklentileri kar  lamak',
      'beyond expectations': 'beklentilerin  tesinde'
    },
    examples: ['The team set off without any expectation of success.'],
    exampleTranslations: ['Tak m, herhangi bir ba ar  beklentisi olmadan yola   kt .']
  },
  {
    id: 'expression',
    word: 'Expression',
    pos: 'noun',
    meaning: 'ifade (y z ifadesi)',
    definition: "A look on someone's face that shows what their thoughts or feelings are.",
    ipa: '/ k spre . n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'express', pos: 'verb', meaning: 'ifade etmek' },
      { word: 'expressive', pos: 'adj', meaning: 'anlat mc ' }
    ],
    synonyms: [
      { word: 'Countenance', meaning: 'y z simas ', pos: 'noun' },
      { word: 'Utterance', meaning: 's ylem', pos: 'noun' },
      { word: 'Phrase', meaning: 'deyim/tabir', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['facial expression', 'common expression', 'freedom of expression'],
    collocationMeanings: {
      'facial expression': 'y z ifadesi',
      'common expression': 'yayg n tabir/ifade',
      'freedom of expression': 'ifade  zg rl   '
    },
    examples: ['You should have seen the expression on his face!'],
    exampleTranslations: ['Y z ndeki ifadeyi g rmeliydin!']
  },
  {
    id: 'eye_catching',
    word: 'Eye-catching',
    pos: 'adjective',
    meaning: 'g z al c , dikkat  ekici',
    definition: 'Attractive or unusual and therefore noticed.',
    ipa: '/ a  k t .  /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Striking', meaning: ' arp c ', pos: 'adj' },
      { word: 'Noticeable', meaning: 'fark edilebilir', pos: 'adj' },
      { word: 'Spectacular', meaning: 'g rkemli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Plain', meaning: 'sade/g steri siz', pos: 'adj' },
      { word: 'Unremarkable', meaning: 'dikkat  ekmeyen', pos: 'adj' },
      { word: 'Inconspicuous', meaning: 'g ze  arpmayan', pos: 'adj' }
    ],
    collocations: ['eye-catching design', 'eye-catching color', 'eye-catching advertisement'],
    collocationMeanings: {
      'eye-catching design': 'g z al c  tasar m',
      'eye-catching color': 'dikkat  ekici renk',
      'eye-catching advertisement': 'ilgi  ekici reklam'
    },
    examples: ['The eye-catching design was very clever.'],
    exampleTranslations: ['G z al c  tasar m  ok zekiceydi.']
  },
  {
    id: 'fall_flat',
    word: 'Fall flat',
    pos: 'idiom',
    meaning: 'beklenen etkiyi yaratmamak,  uvallamak',
    definition: 'To not succeed in entertaining someone or making them laugh.',
    ipa: '/f  l fl t/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Fail', meaning: 'ba ar s z olmak', pos: 'verb' },
      { word: 'Flop', meaning: 'fiyasko ile sonu lanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Succeed', meaning: 'ba armak', pos: 'verb' },
      { word: 'Triumph', meaning: 'zafer kazanmak', pos: 'verb' }
    ],
    collocations: ['joke fell flat', 'performance fell flat', 'completely fall flat'],
    collocationMeanings: {
      'joke fell flat': ' akan n tutmamas ',
      'performance fell flat': 'performans n s n k kalmas ',
      'completely fall flat': 'tamamen fiyaskoyla sonu lanmak'
    },
    examples: ['My attempt at a joke fell flat.'],
    exampleTranslations: [' aka yapma giri imim beklenen etkiyi yaratmad .']
  },
  {
    id: 'fascinating',
    word: 'Fascinating',
    pos: 'adjective',
    meaning: 'b y leyici',
    definition: 'Making you very interested or attracted.',
    ipa: '/ f s. n.e .t  /',
    level: 'intermediate',
    wordFamily: [
      { word: 'fascinate', pos: 'verb', meaning: 'b y lemek' },
      { word: 'fascination', pos: 'noun', meaning: 'b y lenme/ilgi' }
    ],
    synonyms: [
      { word: 'Captivating', meaning: 'cezbedici', pos: 'adj' },
      { word: 'Enchanting', meaning: 'mest eden', pos: 'adj' },
      { word: 'Intriguing', meaning: 'merak uyand r c ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Boring', meaning: 's k c ', pos: 'adj' },
      { word: 'Dull', meaning: 'tekd ze', pos: 'adj' },
      { word: 'Uninteresting', meaning: 'ilgisiz', pos: 'adj' }
    ],
    collocations: ['absolutely fascinating', 'fascinating subject', 'find something fascinating'],
    collocationMeanings: {
      'absolutely fascinating': 'tamamen b y leyici',
      'fascinating subject': ' ok ilgin  konu',
      'find something fascinating': 'bir  eyi b y leyici bulmak'
    },
    examples: ['He told me a fascinating story.'],
    exampleTranslations: ['Bana b y leyici bir hikaye anlatt .']
  },
  {
    id: 'fatty',
    word: 'Fatty',
    pos: 'adj',
    meaning: 'ya l ',
    definition: 'Containing a lot of fat.',
    ipa: '/ f t.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fat', pos: 'noun/adj', meaning: 'ya  /  i man' },
      { word: 'fattening', pos: 'adj', meaning: 'kilo ald ran' }
    ],
    synonyms: [
      { word: 'Greasy', meaning: 'v c k v c k ya l ', pos: 'adj' },
      { word: 'Oily', meaning: 'ya l  (s v )', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Lean', meaning: 'ya s z (et)', pos: 'adj' },
      { word: 'Low-fat', meaning: 'd   k ya l ', pos: 'adj' }
    ],
    collocations: ['fatty foods', 'fatty acid', 'fatty meat'],
    collocationMeanings: {
      'fatty foods': 'ya l  yiyecekler',
      'fatty acid': 'ya  asidi',
      'fatty meat': 'ya l  et'
    },
    examples: ['Fatty foods are bad for you.'],
    exampleTranslations: ['Ya l  yiyecekler sizin i in k t d r.']
  },
  {
    id: 'filling',
    word: 'Filling',
    pos: 'adj',
    meaning: 'doyurucu',
    definition: 'Food that is filling makes you feel full quickly.',
    ipa: '/ f l.  /',
    level: 'intermediate',
    wordFamily: [
      { word: 'fill', pos: 'verb', meaning: 'doldurmak' },
      { word: 'full', pos: 'adj', meaning: 'tok/dolu' }
    ],
    synonyms: [
      { word: 'Satisfying', meaning: 'tatmin edici/doyurucu', pos: 'adj' },
      { word: 'Substantial', meaning: 'besleyici/bol', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Light', meaning: 'hafif', pos: 'adj' },
      { word: 'Unsatisfying', meaning: 'doyurucu olmayan', pos: 'adj' }
    ],
    collocations: ['filling meal', 'very filling', 'nutritious and filling'],
    collocationMeanings: {
      'filling meal': 'doyurucu    n',
      'very filling': ' ok tok tutan',
      'nutritious and filling': 'besleyici ve doyurucu'
    },
    examples: ['This pie I ordered is very filling.'],
    exampleTranslations: ['Sipari  etti im bu turta  ok doyurucu.']
  },
  {
    id: 'filthy',
    word: 'Filthy',
    pos: 'adj',
    meaning: ' ok pis, kirli',
    definition: 'Very dirty.',
    ipa: '/ f l. i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'filth', pos: 'noun', meaning: 'pislik/kir' },
      { word: 'filthiness', pos: 'noun', meaning: 'pis olma durumu' }
    ],
    synonyms: [
      { word: 'Dirty', meaning: 'kirli', pos: 'adj' },
      { word: 'Grimy', meaning: 'isli/kirli', pos: 'adj' },
      { word: 'Squalid', meaning: 'pislikten kokan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Clean', meaning: 'temiz', pos: 'adj' },
      { word: 'Spotless', meaning: 'tertemiz/lekesiz', pos: 'adj' },
      { word: 'Pure', meaning: 'saf/temiz', pos: 'adj' }
    ],
    collocations: ['filthy rich', 'filthy clothes', 'absolutely filthy'],
    collocationMeanings: {
      'filthy rich': ' ok zengin (argoda)',
      'filthy clothes': 'leke i indeki k yafetler',
      'absolutely filthy': 'tamamen pislik i inde'
    },
    examples: ['The kitchen was filthy after he had cooked.'],
    exampleTranslations: ['O yemek pi irdikten sonra mutfak  ok pisti.']
  },
  {
    id: 'fluently',
    word: 'Fluently',
    pos: 'adverb',
    meaning: 'ak c  bir  ekilde',
    definition: 'Spoken well and without difficulty.',
    ipa: '/ flu . nt.li/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fluent', pos: 'adj', meaning: 'ak c ' },
      { word: 'fluency', pos: 'noun', meaning: 'ak c l k' }
    ],
    synonyms: [
      { word: 'Smoothly', meaning: 'p r zs zce', pos: 'adverb' },
      { word: 'Effortlessly', meaning: 'zahmetsizce', pos: 'adverb' }
    ],
    antonyms: [
      { word: 'Haltingly', meaning: 'kekeleyerek/duraksayarak', pos: 'adverb' }
    ],
    collocations: ['speak fluently', 'read fluently', 'communicate fluently'],
    collocationMeanings: {
      'speak fluently': 'ak c  konu mak',
      'read fluently': 'ak c  okumak',
      'communicate fluently': 'ak c  ileti im kurmak'
    },
    examples: ['He speaks English fluently.'],
    exampleTranslations: [' ngilizceyi ak c  bir  ekilde konu uyor.']
  },
  {
    id: 'fruity',
    word: 'Fruity',
    pos: 'adj',
    meaning: 'meyveli, meyvemsi',
    definition: 'Tasting or smelling like fruit.',
    ipa: '/ fru .ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fruit', pos: 'noun', meaning: 'meyve' },
      { word: 'fruitless', pos: 'adj', meaning: 'verimsiz/meyvesiz' }
    ],
    synonyms: [
      { word: 'Sweet', meaning: 'tatl /ho ', pos: 'adj' },
      { word: 'Mellow', meaning: 'yumu ak tatl ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dry', meaning: 'kuru/sert', pos: 'adj' },
      { word: 'Bitter', meaning: 'ac ', pos: 'adj' }
    ],
    collocations: ['fruity smell', 'fruity taste', 'pale and fruity'],
    collocationMeanings: {
      'fruity smell': 'meyvemsi koku',
      'fruity taste': 'meyve tad ',
      'pale and fruity': 'soluk ve meyveli'
    },
    examples: ['It is a fruity red drink.'],
    exampleTranslations: ['Bu meyveli k rm z  bir i ecek.']
  },
  {
    id: 'furious',
    word: 'Furious',
    pos: 'adj',
    meaning: ' ok  fkeli, k plere binmi ',
    definition: 'Extremely angry.',
    ipa: '/ fj  .ri. s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'fury', pos: 'noun', meaning: ' fke' },
      { word: 'furiously', pos: 'adverb', meaning: ' fkeyle' }
    ],
    synonyms: [
      { word: 'Enraged', meaning: 'kudurmu ', pos: 'adj' },
      { word: 'Infuriated', meaning: ' ileden   km  ', pos: 'adj' },
      { word: 'Livid', meaning: 'mosmor/ ok k zg n', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Calm', meaning: 'sakin', pos: 'adj' },
      { word: 'Pleased', meaning: 'memnun', pos: 'adj' },
      { word: 'Serene', meaning: 'huzurlu', pos: 'adj' }
    ],
    collocations: ['absolutely furious', 'furious with someone', 'furious pace'],
    collocationMeanings: {
      'absolutely furious': 'tamamen deliye d nm  ',
      'furious with someone': 'birine kar    ok  fkeli',
      'furious pace': ' ok h zl  tempo'
    },
    examples: ["Roberts' comments provoked a furious public response."],
    exampleTranslations: ["Roberts' n yorumlar  halktan  ok  fkeli bir tepki ald ."]
  },
  {
    id: 'generate_new_ideas',
    word: 'Generate new ideas',
    pos: 'phrase',
    meaning: 'yeni fikirler  retmek',
    definition: 'To think of something new.',
    ipa: '/ d en. .re t nju  a  d  z/',
    level: 'intermediate',
    wordFamily: [
      { word: 'generation', pos: 'noun', meaning: 'nesil/ retim' },
      { word: 'generator', pos: 'noun', meaning: 'jenerat r' }
    ],
    synonyms: [
      { word: 'Brainstorm', meaning: 'beyin f rt nas  yapmak', pos: 'verb' },
      { word: 'Innovate', meaning: 'yenilik yapmak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['need to generate new ideas', 'ability to generate new ideas'],
    collocationMeanings: {
      'need to generate new ideas': 'yeni fikirler  retmeye ihtiya  duymak',
      'ability to generate new ideas': 'yeni fikirler  retme yetene i'
    },
    examples: ['When we generate new ideas, we need to make sure we write them down.'],
    exampleTranslations: ['Yeni fikirler  retti imizde, onlar  not etti imizden emin olmal y z.']
  },
  {
    id: 'get_rid_of',
    word: 'Get rid of',
    pos: 'phrasal verb',
    meaning: 'kurtulmak, ba  ndan savmak',
    definition: 'To throw away, give away, or sell a possession that you no longer want or need.',
    ipa: '/ et r d  v/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Discard', meaning: 'atmak/  kar lmak', pos: 'verb' },
      { word: 'Eliminate', meaning: 'elemek/yok etmek', pos: 'verb' },
      { word: 'Dispose of', meaning: 'elden   karmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Keep', meaning: 'tutmak/saklamak', pos: 'verb' },
      { word: 'Acquire', meaning: 'edinmek', pos: 'verb' }
    ],
    collocations: ['get rid of waste', 'get rid of a problem', 'finally get rid of'],
    collocationMeanings: {
      'get rid of waste': 'at klardan kurtulmak',
      'get rid of a problem': 'bir sorundan kurtulmak',
      'finally get rid of': 'sonunda ba  ndan savmak'
    },
    examples: ["We're moving, so we have to get rid of a lot of our furniture."],
    exampleTranslations: ['Ta  n yoruz, bu y zden bir ok mobilyam zdan kurtulmam z gerekiyor.']
  },
  {
    id: 'get_yourself',
    word: 'Get yourself',
    pos: 'phrase',
    meaning: 'kendine (bir  ey) almak/edinmek',
    definition: 'To obtain, receive, or be given something.',
    ipa: '/ et j   self/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Buy yourself', meaning: 'kendine sat n almak', pos: 'phrase' },
      { word: 'Fetch', meaning: 'al p getirmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['get yourself ready', 'get yourself organized', 'get yourself together'],
    collocationMeanings: {
      'get yourself ready': 'kendini haz rla',
      'get yourself organized': 'kendini d zenle/haz rla',
      'get yourself together': 'kendini toparla'
    },
    examples: ['I got myself a coffee from the canteen.'],
    exampleTranslations: ['Kantinden kendime bir kahve ald m.']
  },
  {
    id: 'give_up',
    word: 'Give up',
    pos: 'phrasal verb',
    meaning: 'vazge mek, b rakmak',
    definition: 'To lose something, especially something that you want to keep, to get something else or help someone.',
    ipa: '/  v  p/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Quit', meaning: 'b rakmak', pos: 'verb' },
      { word: 'Surrender', meaning: 'teslim olmak', pos: 'verb' },
      { word: 'Abandon', meaning: 'vazge mek/b rakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Continue', meaning: 'devam etmek', pos: 'verb' },
      { word: 'Persist', meaning: ' srar etmek', pos: 'verb' },
      { word: 'Endure', meaning: 'dayanmak/s rd rmek', pos: 'verb' }
    ],
    collocations: ['give up smoking', 'never give up', 'give up easily'],
    collocationMeanings: {
      'give up smoking': 'sigaray  b rakmak',
      'never give up': 'asla pes etme',
      'give up easily': 'kolayca vazge mek'
    },
    examples: ['We gave up on the idea of walking and took the bus instead.'],
    exampleTranslations: ['Y r me fikrinden vazge tik ve onun yerine otob se bindik.']
  },
  {
    id: 'gorgeous',
    word: 'Gorgeous',
    pos: 'adj',
    meaning: 'muhte em,  ok g zel',
    definition: 'Very beautiful.',
    ipa: '/    .d  s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'gorgeously', pos: 'adverb', meaning: 'muazzam bir  ekilde' }
    ],
    synonyms: [
      { word: 'Stunning', meaning: 'b y leyici', pos: 'adj' },
      { word: 'Exquisite', meaning: 'zarif/nefis', pos: 'adj' },
      { word: 'Magnificent', meaning: 'ihti aml ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Ugly', meaning: ' irkin', pos: 'adj' },
      { word: 'Hideous', meaning: 'i ren / irkin', pos: 'adj' },
      { word: 'Plain', meaning: 's radan/sade', pos: 'adj' }
    ],
    collocations: ['absolutely gorgeous', 'look gorgeous', 'gorgeous weather'],
    collocationMeanings: {
      'absolutely gorgeous': 'kesinlikle muhte em',
      'look gorgeous': 'harika g r nmek',
      'gorgeous weather': ' ahane hava'
    },
    examples: ['She had a gorgeous red and gold silk sari.'],
    exampleTranslations: ['Muhte em bir k rm z  ve alt n rengi ipek sarisi vard .']
  },
  {
    id: 'heavy_traffic',
    word: 'Heavy traffic',
    pos: 'phrase',
    meaning: 'yo un trafik',
    definition: 'A lot of vehicles that are travelling in an area at a particular time.',
    ipa: '/ hevi  tr f k/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Gridlock', meaning: 'trafik t kan kl   ', pos: 'noun' },
      { word: 'Congestion', meaning: 's k   kl k', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Light traffic', meaning: 'az trafik', pos: 'phrase' },
      { word: 'Empty roads', meaning: 'bo  yollar', pos: 'phrase' }
    ],
    collocations: ['stuck in heavy traffic', 'cause heavy traffic', 'heavy traffic conditions'],
    collocationMeanings: {
      'stuck in heavy traffic': 'yo un trafikte s k  mak',
      'cause heavy traffic': 'yo un trafi e neden olmak',
      'heavy traffic conditions': 'yo un trafik ko ullar '
    },
    examples: ["Sorry I'm late - I was stuck in heavy traffic."],
    exampleTranslations: ['Gecikti im i in  zg n m - yo un trafi e tak ld m.']
  },
  {
    id: 'help_yourself',
    word: 'Help yourself',
    pos: 'idiom',
    meaning: 'kendine ikram etmek, buyurmak',
    definition: 'Used for giving someone permission to do or use something.',
    ipa: '/help j   self/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Dig in', meaning: 'yumulmak/ba lamak', pos: 'idiom' },
      { word: 'Be my guest', meaning: 'misafirim ol/buyur', pos: 'idiom' }
    ],
    antonyms: [],
    collocations: ['please help yourself', 'help yourself to a drink', 'feel free to help yourself'],
    collocationMeanings: {
      'please help yourself': 'l tfen buyurun',
      'help yourself to a drink': 'bir i ecek al n',
      'feel free to help yourself': 'kendine almaktan  ekinme'
    },
    examples: ['Help yourself to some paella.'],
    exampleTranslations: ['Paelladan buyurun (kendinize al n).']
  },
  {
    id: 'hilarious',
    word: 'Hilarious',
    pos: 'adj',
    meaning: ' ok komik, g l n ',
    definition: 'Extremely funny.',
    ipa: '/h  le .ri. s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'hilarity', pos: 'noun', meaning: 'ne eli kahkaha' }
    ],
    synonyms: [
      { word: 'Comical', meaning: 'komik', pos: 'adj' },
      { word: 'Humorous', meaning: 'mizahi', pos: 'adj' },
      { word: 'Sidesplitting', meaning: 'g lmekten  ld ren', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Serious', meaning: 'ciddi', pos: 'adj' },
      { word: 'Tragic', meaning: 'trajik', pos: 'adj' },
      { word: 'Solemn', meaning: 'a  rba l /kasvetli', pos: 'adj' }
    ],
    collocations: ['hilarious joke', 'find it hilarious', 'absolutely hilarious'],
    collocationMeanings: {
      'hilarious joke': ' ok g l n   aka',
      'find it hilarious': ' ok komik bulmak',
      'absolutely hilarious': 'kesinlikle  ok g l n '
    },
    examples: ['For some reason, she finds his jokes hilarious.'],
    exampleTranslations: ['Nedense onun  akalar n   ok komik buluyor.']
  },
  {
    id: 'idiom',
    word: 'Idiom',
    pos: 'noun',
    meaning: 'deyim',
    definition: 'An expression whose meaning is different from the meaning of the individual words.',
    ipa: '/  d.i. m/',
    level: 'intermediate',
    wordFamily: [
      { word: 'idiomatic', pos: 'adj', meaning: 'deyimsel' }
    ],
    synonyms: [
      { word: 'Expression', meaning: 'ifade', pos: 'noun' },
      { word: 'Phrase', meaning: 's z  be i', pos: 'noun' },
      { word: 'Colloquialism', meaning: 'halk a z  deyi ', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Literal meaning', meaning: 'ger ek anlam', pos: 'noun' }
    ],
    collocations: ['common idiom', 'use an idiom', 'learn idioms'],
    collocationMeanings: {
      'common idiom': 'yayg n deyim',
      'use an idiom': 'deyim kullanmak',
      'learn idioms': 'deyim   renmek'
    },
    examples: ["'To have your feet on the ground' is an idiom meaning 'to be sensible'."],
    exampleTranslations: ["'Ayaklar  yere basmak', 'mant kl  olmak' anlam na gelen bir deyimdir."]
  },
  {
    id: 'impatient',
    word: 'Impatient',
    pos: 'adj',
    meaning: 'sab rs z',
    definition: 'Annoyed because something is not happening as quickly as you want.',
    ipa: '/ m pe .  nt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'patience', pos: 'noun', meaning: 'sab r' },
      { word: 'impatiently', pos: 'adverb', meaning: 'sab rs zca' }
    ],
    synonyms: [
      { word: 'Restless', meaning: 'huzursuz', pos: 'adj' },
      { word: 'Eager', meaning: 'istekli/can atan', pos: 'adj' },
      { word: 'Short-tempered', meaning: 'tez canl ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Patient', meaning: 'sab rl ', pos: 'adj' },
      { word: 'Calm', meaning: 'sakin', pos: 'adj' },
      { word: 'Tolerant', meaning: 'ho g r l ', pos: 'adj' }
    ],
    collocations: ['get impatient', 'impatient with', 'grow impatient'],
    collocationMeanings: {
      'get impatient': 'sab rs zlanmak',
      'impatient with': 'birine kar   sab rs z',
      'grow impatient': 'sab rs zl    artmak'
    },
    examples: ["'Come on!' said Maggie, becoming impatient."],
    exampleTranslations: ["'Hadi ama!' dedi Maggie sab rs zlanarak."]
  },
  {
    id: 'improvement',
    word: 'Improvement',
    pos: 'noun',
    meaning: 'geli me, iyile me',
    definition: 'The state of being better than before, or the process of making something better.',
    ipa: '/ m pru v.m nt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'improve', pos: 'verb', meaning: 'geli tirmek' },
      { word: 'improvable', pos: 'adj', meaning: 'geli tirilebilir' }
    ],
    synonyms: [
      { word: 'Enhancement', meaning: 'iyile tirme', pos: 'noun' },
      { word: 'Progress', meaning: 'ilerleme', pos: 'noun' },
      { word: 'Advance', meaning: 'at l m', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Deterioration', meaning: 'k t le me', pos: 'noun' },
      { word: 'Decline', meaning: 'd    /gerileme', pos: 'noun' },
      { word: 'Regression', meaning: 'gerileme', pos: 'noun' }
    ],
    collocations: ['significant improvement', 'room for improvement', 'show improvement'],
    collocationMeanings: {
      'significant improvement': ' nemli geli me',
      'room for improvement': 'geli me alan /pay ',
      'show improvement': 'geli me g stermek'
    },
    examples: ['The school is performing well, but it needs further improvement.'],
    exampleTranslations: ['Okul iyi performans g steriyor ancak daha fazla geli meye ihtiyac  var.']
  },
  {
    id: 'inaccurate',
    word: 'Inaccurate',
    pos: 'adj',
    meaning: 'hatal , yanl  ',
    definition: 'Not accurate or correct.',
    ipa: '/ n  k.j .r t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'accuracy', pos: 'noun', meaning: 'do ruluk' },
      { word: 'accurate', pos: 'adj', meaning: 'do ru' }
    ],
    synonyms: [
      { word: 'Incorrect', meaning: 'yanl  ', pos: 'adj' },
      { word: 'False', meaning: 'hatal /yanl  ', pos: 'adj' },
      { word: 'Wrong', meaning: 'yanl  ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Accurate', meaning: 'do ru', pos: 'adj' },
      { word: 'Correct', meaning: 'kesin/do ru', pos: 'adj' },
      { word: 'Precise', meaning: 'tam/kesin', pos: 'adj' }
    ],
    collocations: ['totally inaccurate', 'highly inaccurate', 'historically inaccurate'],
    collocationMeanings: {
      'totally inaccurate': 'tamamen yanl  ',
      'highly inaccurate': 'b y k  l  de hatal ',
      'historically inaccurate': 'tarihsel olarak hatal '
    },
    examples: ['She was given inaccurate information.'],
    exampleTranslations: ['Ona yanl   bilgi verildi.']
  },
  {
    id: 'independent',
    word: 'Independent',
    pos: 'adj',
    meaning: 'ba  ms z,  zg r',
    definition: 'Someone who does not depend on other people for help, or prefers to do things by themselves.',
    ipa: '/  n.d  pen.d nt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'independence', pos: 'noun', meaning: 'ba  ms zl k' },
      { word: 'independently', pos: 'adverb', meaning: 'ba  ms zca' }
    ],
    synonyms: [
      { word: 'Self-sufficient', meaning: 'kendi kendine yeten', pos: 'adj' },
      { word: 'Autonomous', meaning: ' zerk', pos: 'adj' },
      { word: 'Free', meaning: ' zg r', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dependent', meaning: 'ba  ml ', pos: 'adj' },
      { word: 'Reliant', meaning: 'bel ba layan', pos: 'adj' }
    ],
    collocations: ['independent state', 'independent research', 'financially independent'],
    collocationMeanings: {
      'independent state': 'ba  ms z devlet',
      'independent research': 'ba  ms z ara t rma',
      'financially independent': 'maddi olarak ba  ms z'
    },
    examples: ['Even as a child he was very independent.'],
    exampleTranslations: [' ocukken bile  ok ba  ms zd .']
  },
  {
    id: 'inexpensive',
    word: 'Inexpensive',
    pos: 'adj',
    meaning: 'ucuz, masrafs z',
    definition: 'Something that is inexpensive does not cost much money.',
    ipa: '/  n. k spen.s v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'expense', pos: 'noun', meaning: 'masraf' },
      { word: 'expensive', pos: 'adj', meaning: 'pahal ' }
    ],
    synonyms: [
      { word: 'Cheap', meaning: 'ucuz', pos: 'adj' },
      { word: 'Affordable', meaning: 'al nabilir/hesapl ', pos: 'adj' },
      { word: 'Economical', meaning: 'ekonomik', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Expensive', meaning: 'pahal ', pos: 'adj' },
      { word: 'Costly', meaning: 'maliyetli', pos: 'adj' },
      { word: 'Pricey', meaning: 'tuzlu/pahal ', pos: 'adj' }
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
    meaning: 'etkilemek, n fuz etmek',
    definition: 'To affect the way that someone thinks or behaves, or to affect the way that something happens.',
    ipa: '/  n.flu. ns/',
    level: 'intermediate',
    wordFamily: [
      { word: 'influential', pos: 'adj', meaning: 'n fuzlu/etkili' },
      { word: 'influence', pos: 'noun', meaning: 'etki' }
    ],
    synonyms: [
      { word: 'Affect', meaning: 'etkilemek', pos: 'verb' },
      { word: 'Sway', meaning: 'fikrini  elmek', pos: 'verb' },
      { word: 'Shape', meaning: ' ekillendirmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['heavily influence', 'influence a decision', 'exert influence'],
    collocationMeanings: {
      'heavily influence': 'b y k  l  de etkilemek',
      'influence a decision': 'bir karar  etkilemek',
      'exert influence': 'n fuzunu kullanmak/etki etmek'
    },
    examples: ["Research has shown that the weather can influence people's behaviour."],
    exampleTranslations: ['Ara t rmalar hava durumunun insanlar n davran  lar n  etkileyebilece ini g stermi tir.']
  },
  {
    id: 'inspiration',
    word: 'Inspiration',
    pos: 'noun',
    meaning: 'ilham, esin',
    definition: 'A sudden feeling of enthusiasm, or a new idea that helps you to do or create something.',
    ipa: '/  n.sp  re .  n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'inspire', pos: 'verb', meaning: 'ilham vermek' },
      { word: 'inspirational', pos: 'adj', meaning: 'ilham verici' }
    ],
    synonyms: [
      { word: 'Motivation', meaning: 'motivasyon', pos: 'noun' },
      { word: 'Brainwave', meaning: 'parlak fikir', pos: 'noun' },
      { word: 'Stimulus', meaning: 'uyar c /te vik', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Discouragement', meaning: 'heves k rma', pos: 'noun' },
      { word: 'Depression', meaning: '  k nt ', pos: 'noun' }
    ],
    collocations: ['source of inspiration', 'draw inspiration from', 'constant inspiration'],
    collocationMeanings: {
      'source of inspiration': 'ilham kayna  ',
      'draw inspiration from': 'birinden/bir  eyden ilham almak',
      'constant inspiration': 's rekli ilham'
    },
    examples: ['She was the inspiration for his new book.'],
    exampleTranslations: ['Yeni kitab n n ilham kayna   oydu.']
  },
  {
    id: 'insist',
    word: 'Insist',
    pos: 'verb',
    meaning: ' srar etmek, diretmek',
    definition: 'To say very firmly that something must happen or be done.',
    ipa: '/ n s st/',
    level: 'intermediate',
    wordFamily: [
      { word: 'insistence', pos: 'noun', meaning: ' srar' },
      { word: 'insistent', pos: 'adj', meaning: ' srarc ' }
    ],
    synonyms: [
      { word: 'Assert', meaning: 'ileri s rmek/iddia etmek', pos: 'verb' },
      { word: 'Demand', meaning: 'talep etmek', pos: 'verb' },
      { word: 'Maintain', meaning: 'savunmak/s rd rmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Surrender', meaning: 'teslim olmak', pos: 'verb' },
      { word: 'Yield', meaning: 'boyun e mek', pos: 'verb' }
    ],
    collocations: ['insist on doing', 'insist that', 'strictly insist'],
    collocationMeanings: {
      'insist on doing': 'bir  eyi yapmakta  srar etmek',
      'insist that': ' unu  srarla s ylemek',
      'strictly insist': 'kesin bir dille diretmek'
    },
    examples: ['You must see a doctor immediately - I insist.'],
    exampleTranslations: ['Hemen bir doktora g r nmelisin -  srar ediyorum.']
  },
  {
    id: 'invent',
    word: 'Invent',
    pos: 'verb',
    meaning: 'icat etmek',
    definition: 'To design or create something such as a machine or process that did not exist before.',
    ipa: '/ n vent/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invention', pos: 'noun', meaning: 'icat' },
      { word: 'inventor', pos: 'noun', meaning: 'mucit' },
      { word: 'inventive', pos: 'adj', meaning: 'yarat c ' }
    ],
    synonyms: [
      { word: 'Create', meaning: 'yaratmak', pos: 'verb' },
      { word: 'Originate', meaning: 'ba latmak/kaynakl k etmek', pos: 'verb' },
      { word: 'Concoct', meaning: 'uydurmak/kurmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Destroy', meaning: 'y kmak', pos: 'verb' },
      { word: 'Copy', meaning: 'kopyalamak', pos: 'verb' }
    ],
    collocations: ['invent a device', 'invent a story', 'newly invented'],
    collocationMeanings: {
      'invent a device': 'bir cihaz icat etmek',
      'invent a story': 'hikaye uydurmak',
      'newly invented': 'yeni icat edilmi '
    },
    examples: ['Alfred Nobel invented dynamite.'],
    exampleTranslations: ['Alfred Nobel dinamiti icat etti.']
  },
  {
    id: 'invention',
    word: 'Invention',
    pos: 'noun',
    meaning: 'icat, bulu ',
    definition: 'A machine, tool, or system that someone has made, designed, or thought of for the first time.',
    ipa: '/ n ven.  n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invent', pos: 'verb', meaning: 'icat etmek' },
      { word: 'inventive', pos: 'adj', meaning: 'yarat c ' }
    ],
    synonyms: [
      { word: 'Innovation', meaning: 'yenilik/bulu ', pos: 'noun' },
      { word: 'Creation', meaning: 'yarat m', pos: 'noun' },
      { word: 'Discovery', meaning: 'ke if', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['great invention', 'modern invention', 'latest invention'],
    collocationMeanings: {
      'great invention': 'b y k bulu ',
      'modern invention': 'modern icat',
      'latest invention': 'son bulu '
    },
    examples: ['Inventions like the electric light bulb changed the way people lived.'],
    exampleTranslations: ['Elektrikli ampul gibi icatlar insanlar n ya ay   bi imini de i tirdi.']
  },
  {
    id: 'inventive',
    word: 'Inventive',
    pos: 'adj',
    meaning: 'yarat c ,  zg n',
    definition: 'Good at thinking of new and original ideas or methods.',
    ipa: '/ n ven.t v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invent', pos: 'verb', meaning: 'icat etmek' },
      { word: 'invention', pos: 'noun', meaning: 'icat/bulu ' },
      { word: 'inventor', pos: 'noun', meaning: 'mucit' }
    ],
    synonyms: [
      { word: 'Creative', meaning: 'yarat c ', pos: 'adj' },
      { word: 'Original', meaning: ' zg n', pos: 'adj' },
      { word: 'Resourceful', meaning: 'becerikli/  z m  reten', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unimaginative', meaning: 'hayal g c  zay f', pos: 'adj' },
      { word: 'Unoriginal', meaning: 'taklit/s radan', pos: 'adj' }
    ],
    collocations: ['inventive mind', 'highly inventive', 'very inventive'],
    collocationMeanings: {
      'inventive mind': 'yarat c  zihin',
      'highly inventive': 'son derece  zg n',
      'very inventive': ' ok yarat c '
    },
    examples: ['Ronaldo is a versatile and inventive player.'],
    exampleTranslations: ['Ronaldo  ok y nl  ve yarat c  bir oyuncudur.']
  },
  {
    id: 'inventor',
    word: 'Inventor',
    pos: 'noun',
    meaning: 'mucit',
    definition: 'Someone who has invented something or whose job is to invent things.',
    ipa: '/ n ven.t r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'invent', pos: 'verb', meaning: 'icat etmek' },
      { word: 'inventive', pos: 'adj', meaning: 'yarat c ' }
    ],
    synonyms: [
      { word: 'Creator', meaning: 'yarat c ', pos: 'noun' },
      { word: 'Originator', meaning: 'kaynak/ba latan ki i', pos: 'noun' },
      { word: 'Designer', meaning: 'tasar mc ', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['famous inventor', 'great inventor', 'born inventor'],
    collocationMeanings: {
      'famous inventor': ' nl  mucit',
      'great inventor': 'b y k mucit',
      'born inventor': 'do u tan mucit'
    },
    examples: ['Thomas Edison was an inventor.'],
    exampleTranslations: ['Thomas Edison bir mucitti.']
  },
  {
    id: 'impressive',
    word: 'Impressive',
    pos: 'adj',
    meaning: 'etkileyici',
    definition: 'If something is impressive, you admire it.',
    ipa: '/ m pres. v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'impress', pos: 'verb', meaning: 'etkilemek' },
      { word: 'impression', pos: 'noun', meaning: 'izlenim' },
      { word: 'impressively', pos: 'adverb', meaning: 'etkileyici bir  ekilde' }
    ],
    synonyms: [
      { word: 'Admirable', meaning: 'hayranl k uyand ran', pos: 'adj' },
      { word: 'Stunning', meaning: 'g z al c ', pos: 'adj' },
      { word: 'Grand', meaning: 'g rkemli', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unimpressive', meaning: 'etkileyici olmayan', pos: 'adj' },
      { word: 'Mediocre', meaning: 'vasat', pos: 'adj' },
      { word: 'Ordinary', meaning: 's radan', pos: 'adj' }
    ],
    collocations: ['highly impressive', 'look impressive', 'most impressive'],
    collocationMeanings: {
      'highly impressive': 'olduk a etkileyici',
      'look impressive': 'etkileyici g r nmek',
      'most impressive': 'en etkileyici'
    },
    examples: ['The list of their achievements is pretty impressive.'],
    exampleTranslations: ['Ba ar lar n n listesi olduk a etkileyici.']
  },
  {
    id: 'in_two_minds',
    word: 'In two minds',
    pos: 'idiom',
    meaning: 'iki arada bir derede kalmak, karars z olmak',
    definition: 'To be unable to decide about something.',
    ipa: '/ n tu  ma ndz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Undecided', meaning: 'karars z', pos: 'adj' },
      { word: 'Hesitant', meaning: 'teredd tl ', pos: 'adj' },
      { word: 'Uncertain', meaning: 'belirsiz/emin de il', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Decided', meaning: 'kararl ', pos: 'adj' },
      { word: 'Certain', meaning: 'emin', pos: 'adj' },
      { word: 'Resolute', meaning: 'azimle karar vermi ', pos: 'adj' }
    ],
    collocations: ['be in two minds about'],
    collocationMeanings: {
      'be in two minds about': 'bir konuda karars z kalmak'
    },
    examples: ['I was in two minds whether or not to come this morning.'],
    exampleTranslations: ['Bu sabah gelip gelmeme konusunda karars zd m.']
  },
  {
    id: 'join_a_society',
    word: 'Join a society',
    pos: 'phrase',
    meaning: 'bir toplulu a/kul be kat lmak',
    definition: 'To become a member of an organization or club for people who have a particular interest.',
    ipa: '/d   n   s  sa . .ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Enroll', meaning: 'kaydolmak', pos: 'verb' },
      { word: 'Sign up', meaning: 'yaz lmak', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Leave a society', meaning: 'topluluktan ayr lmak', pos: 'phrase' },
      { word: 'Resign', meaning: 'istifa etmek/ayr lmak', pos: 'verb' }
    ],
    collocations: ['join a student society', 'join a debating society'],
    collocationMeanings: {
      'join a student society': '  renci toplulu una kat lmak',
      'join a debating society': 'm nazara toplulu una kat lmak'
    },
    examples: ['I am hoping to join a society at university so I can meet more people.'],
    exampleTranslations: ['Daha fazla insanla tan  abilmek i in  niversitede bir toplulu a kat lmay  umuyorum.']
  },
 
  {
    id: 'keep_a_record',
    word: 'Keep a record',
    pos: 'phrase',
    meaning: 'kay t tutmak, not etmek',
    definition: 'To write something down or store information.',
    ipa: '/ki p   r  k  rd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Document', meaning: 'belgelemek', pos: 'verb' },
      { word: 'Register', meaning: 'kaydetmek', pos: 'verb' },
      { word: 'Log', meaning: 'kay t tutmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' }
    ],
    collocations: ['keep a detailed record', 'keep a permanent record', 'keep a written record'],
    collocationMeanings: {
      'keep a detailed record': 'ayr nt l  kay t tutmak',
      'keep a permanent record': 'kal c  bir kay t tutmak',
      'keep a written record': 'yaz l  bir kay t tutmak'
    },
    examples: ['Can you keep a record of what we have spent?'],
    exampleTranslations: ['Neler harcad   m z n kayd n  tutabilir misin?']
  },
  {
    id: 'keep_a_resolution',
    word: 'Keep a resolution',
    pos: 'phrase',
    meaning: 'karar na sad k kalmak',
    definition: 'To stick to a plan or a promise you made to yourself.',
    ipa: '/ki p    rez.  lu .  n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Stick to a goal', meaning: 'hedefe ba l  kalmak', pos: 'phrase' },
      { word: 'Honor a promise', meaning: 's z n  tutmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Break a resolution', meaning: 'karar n  bozmak', pos: 'phrase' },
      { word: 'Give up', meaning: 'vazge mek', pos: 'phrasal verb' }
    ],
    collocations: ['keep a new year resolution', 'fail to keep a resolution'],
    collocationMeanings: {
      'keep a new year resolution': 'yeni y l karar na sad k kalmak',
      'fail to keep a resolution': 'karar  tutamamak'
    },
    examples: ['I hope you keep your resolution to stop smoking.'],
    exampleTranslations: ['Umar m sigaray  b rakma karar na sad k kal rs n.']
  },
  {
    id: 'keep_track_of',
    word: 'Keep track of',
    pos: 'idiom',
    meaning: 'takip etmek, kayd n  tutmak',
    definition: 'To have all the information that you need about something.',
    ipa: '/ki p tr k  v/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Monitor', meaning: 'izlemek/takip etmek', pos: 'verb' },
      { word: 'Follow', meaning: 'takip etmek', pos: 'verb' },
      { word: 'Oversee', meaning: 'denetlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Lose track of', meaning: 'izini kaybetmek/takibi b rakmak', pos: 'idiom' },
      { word: 'Overlook', meaning: 'g zden ka  rmak', pos: 'verb' }
    ],
    collocations: ['keep track of time', 'keep track of changes', 'keep track of expenses'],
    collocationMeanings: {
      'keep track of time': 'zaman n nas l ge ti ini takip etmek',
      'keep track of changes': 'de i iklikleri takip etmek',
      'keep track of expenses': 'harcamalar n kayd n  tutmak'
    },
    examples: ['We need a system to keep track of all our expenses.'],
    exampleTranslations: ['T m giderlerimizi takip etmek i in bir sisteme ihtiyac m z var.']
  },
  {
    id: 'keep_up',
    word: 'Keep up',
    pos: 'phrasal verb',
    meaning: 'ayn  seviyeyi korumak, s rd rmek',
    definition: 'To continue at the same high level or speed.',
    ipa: '/ki p  p/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Maintain', meaning: 's rd rmek', pos: 'verb' },
      { word: 'Preserve', meaning: 'korumak', pos: 'verb' },
      { word: 'Sustain', meaning: 'devam ettirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fall behind', meaning: 'geride kalmak', pos: 'phrasal verb' },
      { word: 'Quit', meaning: 'b rakmak', pos: 'verb' }
    ],
    collocations: ['keep up with', 'keep up appearances', 'keep up the pace'],
    collocationMeanings: {
      'keep up with': 'ayak uydurmak',
      'keep up appearances': 'durumu kurtarmak/g r n    korumak',
      'keep up the pace': 'h z /tempoyu korumak'
    },
    examples: ['Keep up the good work.'],
    exampleTranslations: [' yi  al  maya devam et (bu seviyeyi koru).']
  },
  {
    id: 'launch_a_marketing_campaign',
    word: 'Launch a new marketing campaign',
    pos: 'phrase',
    meaning: 'yeni bir pazarlama kampanyas  ba latmak',
    definition: 'To start a series of television advertisements or posters to persuade people to buy a product.',
    ipa: '/l  nt    nju   m  .k .t   k m pe n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Initiate', meaning: 'ba latmak', pos: 'verb' },
      { word: 'Roll out', meaning: 'piyasaya s rmek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Cancel', meaning: 'iptal etmek', pos: 'verb' },
      { word: 'Suspend', meaning: 'ask ya almak', pos: 'verb' }
    ],
    collocations: ['successfully launch a marketing campaign', 'plans to launch a marketing campaign'],
    collocationMeanings: {
      'successfully launch a marketing campaign': 'ba ar yla bir pazarlama kampanyas  ba latmak',
      'plans to launch a marketing campaign': 'pazarlama kampanyas  ba latmay  planlamak'
    },
    examples: ['The company plans to launch a new marketing campaign next month.'],
    exampleTranslations: [' irket gelecek ay yeni bir pazarlama kampanyas  ba latmay  planl yor.']
  },
  {
    id: 'let',
    word: 'Let',
    pos: 'verb',
    meaning: 'izin vermek (bir  eyin olmas na)',
    definition: 'To allow something to happen or someone to do something.',
    ipa: '/let/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Allow', meaning: 'izin vermek', pos: 'verb' },
      { word: 'Permit', meaning: 'm saade etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forbid', meaning: 'yasaklamak', pos: 'verb' },
      { word: 'Stop', meaning: 'durdurmak', pos: 'verb' },
      { word: 'Prevent', meaning: 'engellemek', pos: 'verb' }
    ],
    collocations: ['let someone go', 'let it be', 'let someone know'],
    collocationMeanings: {
      'let someone go': 'birini serbest b rakmak',
      'let it be': 'ak   na b rak',
      'let someone know': 'birine haber vermek'
    },
    examples: ['I stepped back and let him pass.'],
    exampleTranslations: ['Geri  ekildim ve ge mesine izin verdim.']
  },
  {
    id: 'let_down',
    word: 'Let down',
    pos: 'phrasal verb',
    meaning: 'hayal k r kl   na u ratmak, y z st  b rakmak',
    definition: 'To make someone disappointed by not doing what they expected.',
    ipa: '/let da n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Disappoint', meaning: 'hayal k r kl   na u ratmak', pos: 'verb' },
      { word: 'Abandon', meaning: 'terk etmek/y z st  b rakmak', pos: 'verb' },
      { word: 'Betray', meaning: 'ihanet etmek/yar  yolda b rakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Support', meaning: 'desteklemek', pos: 'verb' },
      { word: 'Satisfy', meaning: 'tatmin etmek', pos: 'verb' },
      { word: 'Fulfil', meaning: 'beklentiyi kar  lamak', pos: 'verb' }
    ],
    collocations: ['let someone down gently', 'never let you down'],
    collocationMeanings: {
      'let someone down gently': 'birini k rmadan reddetmek/hayal k r kl   na u ratmak',
      'never let you down': 'seni asla yar  yolda b rakmaz'
    },
    examples: ['The families of the victims feel that the justice system has let them down.'],
    exampleTranslations: ['Kurbanlar n aileleri, adalet sisteminin onlar  y z st  b rakt   n  hissediyor.']
  },
  {
    id: 'let_your_mind_wander_freely',
    word: 'Let your mind wander freely',
    pos: 'phrase',
    meaning: 'zihnini serbest b rakmak',
    definition: 'To allow your thoughts to be free and not restricted to one thing.',
    ipa: '/let j  r ma nd  w n.d r  fri .li/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Daydream', meaning: 'hayal kurmak', pos: 'verb' },
      { word: 'Meditate', meaning: 'derin d   nmek/zihni bo altmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Focus', meaning: 'odaklanmak', pos: 'verb' },
      { word: 'Concentrate', meaning: 'yo unla mak', pos: 'verb' }
    ],
    collocations: ['let your mind wander for a while'],
    collocationMeanings: {
      'let your mind wander for a while': 'zihnini bir s reli ine serbest b rakmak'
    },
    examples: ['Relax, close your eyes and let your mind wander freely.'],
    exampleTranslations: ['Rahatlay n, g zlerinizi kapat n ve zihninizin serbest e dola mas na izin verin.']
  },
  {
    id: 'look_at_a_problem_from_the_outside',
    word: 'Look at a problem from the outside',
    pos: 'phrase',
    meaning: 'probleme d  ar dan bakmak',
    definition: 'To consider a situation from different perspectives.',
    ipa: '/l k  t    pr b.l m fr m  i  a t sa d/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Gain perspective', meaning: 'bak   a  s  kazanmak', pos: 'phrase' },
      { word: 'Detach oneself', meaning: 'kendini soyutlamak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Be biased', meaning: 'tarafl  bakmak', pos: 'phrase' }
    ],
    collocations: ['need to look at a problem from the outside'],
    collocationMeanings: {
      'need to look at a problem from the outside': 'bir probleme d  ar dan bakmaya ihtiya  duymak'
    },
    examples: ["It's important to look at a problem from the outside if you want a good solution."],
    exampleTranslations: [' yi bir   z m istiyorsan z bir probleme d  ar dan bakmak  nemlidir.']
  },
  {
    id: 'lose_interest_in_something',
    word: 'Lose interest in something',
    pos: 'phrase',
    meaning: 'bir  eye ilgini kaybetmek',
    definition: 'To stop being interested in something.',
    ipa: '/lu z   n.tr st  n  s m.   /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Become bored', meaning: 's k lmak', pos: 'phrase' },
      { word: 'Get tired of', meaning: 'b kmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Become fascinated', meaning: 'b y lenmek/ilgi duymak', pos: 'phrase' },
      { word: 'Stay curious', meaning: 'merak n  korumak', pos: 'phrase' }
    ],
    collocations: ['completely lose interest', 'slowly lose interest'],
    collocationMeanings: {
      'completely lose interest': 'ilgisini tamamen kaybetmek',
      'slowly lose interest': 'yava  yava  ilgi duymaktan vazge mek'
    },
    examples: ['I used to do yoga but I lost interest in it.'],
    exampleTranslations: ['Eskiden yoga yapard m ama ilgimi kaybettim.']
  },
  {
    id: 'make_b1',
    word: 'Make',
    pos: 'verb',
    meaning: 'yapt rmak, hissettirmek',
    definition: 'To cause someone or something to be in a particular state.',
    ipa: '/me k/',
    level: 'intermediate',
    wordFamily: [
      { word: 'maker', pos: 'noun', meaning: 'yap c / retici' },
      { word: 'making', pos: 'noun', meaning: 'yap m' }
    ],
    synonyms: [
      { word: 'Cause', meaning: 'sebep olmak', pos: 'verb' },
      { word: 'Create', meaning: 'yaratmak', pos: 'verb' },
      { word: 'Produce', meaning: ' retmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Destroy', meaning: 'y kmak', pos: 'verb' },
      { word: 'Dismantle', meaning: 'par alamak', pos: 'verb' }
    ],
    collocations: ['make a noise', 'make a difference', 'make a mistake'],
    collocationMeanings: {
      'make a noise': 'g r lt  yapmak',
      'make a difference': 'fark yaratmak',
      'make a mistake': 'hata yapmak'
    },
    examples: ['This film always makes me cry.'],
    exampleTranslations: ['Bu film beni her zaman a lat r.']
  },
  {
    id: 'make_a_decision_b1',
    word: 'Make a decision',
    pos: 'phrase',
    meaning: 'karar vermek',
    definition: 'A choice that you make after thinking carefully.',
    ipa: '/me k   d  s  . n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Decide', meaning: 'karar vermek', pos: 'verb' },
      { word: 'Choose', meaning: 'se mek', pos: 'verb' },
      { word: 'Determine', meaning: 'belirlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Hesitate', meaning: 'teredd t etmek', pos: 'verb' },
      { word: 'Vacillate', meaning: 'karars z kalmak', pos: 'verb' }
    ],
    collocations: ['make a final decision', 'make a difficult decision', 'quickly make a decision'],
    collocationMeanings: {
      'make a final decision': 'son karar  vermek',
      'make a difficult decision': 'zor bir karar vermek',
      'quickly make a decision': 'h zl ca karar vermek'
    },
    examples: ['The committee should make a decision later this week.'],
    exampleTranslations: ['Komite bu haftan n ilerleyen g nlerinde bir karar vermeli.']
  },
  {
    id: 'make_a_profit',
    word: 'Make a profit',
    pos: 'phrase',
    meaning: 'k r etmek',
    definition: 'To have money remaining after you have paid all your business costs.',
    ipa: '/me k    pr f. t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'profitable', pos: 'adj', meaning: 'k rl ' },
      { word: 'profitability', pos: 'noun', meaning: 'k rl l k' }
    ],
    synonyms: [
      { word: 'Earn money', meaning: 'para kazanmak', pos: 'phrase' },
      { word: 'Gain', meaning: 'kazan  sa lamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Make a loss', meaning: 'zarar etmek', pos: 'phrase' }
    ],
    collocations: ['make a huge profit', 'make a small profit', 'aim to make a profit'],
    collocationMeanings: {
      'make a huge profit': 'b y k kar etmek',
      'make a small profit': 'k   k bir k r elde etmek',
      'aim to make a profit': 'k r etmeyi hedeflemek'
    },
    examples: ['Investors have made a 14% profit in just 3 months.'],
    exampleTranslations: ['Yat r mc lar sadece 3 ayda %14 k r elde etti.']
  },
  {
    id: 'make_a_resolution',
    word: 'Make a resolution',
    pos: 'phrase',
    meaning: 'karar almak (yeni y l karar  gibi)',
    definition: 'To set yourself a goal or make a firm decision.',
    ipa: '/me k    rez.  lu .  n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'resolve', pos: 'verb', meaning: 'karar vermek/  zmek' }
    ],
    synonyms: [
      { word: 'Pledge', meaning: 's z vermek/adak adamak', pos: 'verb' },
      { word: 'Commit', meaning: 'kendini adamak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['make a firm resolution', 'make a new year resolution'],
    collocationMeanings: {
      'make a firm resolution': 'kesin bir karar almak',
      'make a new year resolution': 'yeni y l karar  almak'
    },
    examples: ['Are you going to make a resolution this year?'],
    exampleTranslations: ['Bu y l bir karar alacak m s n?']
  },
  {
    id: 'make_friends_with',
    word: 'Make friends with',
    pos: 'phrase',
    meaning: 'arkada  olmak',
    definition: 'To become friends with someone.',
    ipa: '/me k frendz w  /',
    level: 'intermediate',
    wordFamily: [
      { word: 'friendship', pos: 'noun', meaning: 'arkada l k' },
      { word: 'friendly', pos: 'adj', meaning: 'arkada  canl s ' }
    ],
    synonyms: [
      { word: 'Befriend', meaning: 'arkada l k kurmak', pos: 'verb' },
      { word: 'Get to know', meaning: 'tan mak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Alienate', meaning: 'so utmak/uzakla t rmak', pos: 'verb' },
      { word: 'Make enemies', meaning: 'd  man edinmek', pos: 'phrase' }
    ],
    collocations: ['make friends with someone', 'easy to make friends with'],
    collocationMeanings: {
      'make friends with someone': 'biriyle arkada  olmak',
      'easy to make friends with': 'biriyle arkada  olmak kolayd r'
    },
    examples: ['They made friends with the children next door.'],
    exampleTranslations: ['Yan kom unun  ocuklar yla arkada  oldular.']
  },
  {
    id: 'make_fun_of',
    word: 'Make fun of',
    pos: 'phrase',
    meaning: 'dalga ge mek, alay etmek',
    definition: 'To make jokes about someone or something in an unkind way.',
    ipa: '/me k f n  v/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Mock', meaning: 'alay etmek', pos: 'verb' },
      { word: 'Ridicule', meaning: 'g l n  duruma d   rmek', pos: 'verb' },
      { word: 'Tease', meaning: ' aka yapmak/tak lmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Respect', meaning: 'sayg  duymak', pos: 'verb' },
      { word: 'Admire', meaning: 'hayran kalmak', pos: 'verb' },
      { word: 'Praise', meaning: ' vmek', pos: 'verb' }
    ],
    collocations: ['never make fun of someone', 'stop making fun of me'],
    collocationMeanings: {
      'never make fun of someone': 'asla birisiyle dalga ge me',
      'stop making fun of me': 'benimle dalga ge meyi b rak'
    },
    examples: ['The other children made fun of her because she was always so serious.'],
    exampleTranslations: ['Di er  ocuklar, her zaman  ok ciddi oldu u i in onunla dalga ge iyorlard .']
  },
  {
    id: 'make_sure',
    word: 'Make sure',
    pos: 'phrase',
    meaning: 'emin olmak, sa lama almak',
    definition: 'To check something so that you can be sure about it.',
    ipa: '/me k    r/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Ensure', meaning: 'garantilemek', pos: 'verb' },
      { word: 'Verify', meaning: 'do rulamak', pos: 'verb' },
      { word: 'Confirm', meaning: 'teyit etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Forget', meaning: 'unutmak', pos: 'verb' },
      { word: 'Neglect', meaning: 'ihmal etmek', pos: 'verb' }
    ],
    collocations: ['make sure that', 'make sure of', 'just to make sure'],
    collocationMeanings: {
      'make sure that': ' undan emin ol',
      'make sure of': ' unu do rula/emin ol',
      'just to make sure': 'sadece emin olmak i in'
    },
    examples: ["I think I locked it but we'd better make sure."],
    exampleTranslations: ['San r m kilitledim ama emin olsak iyi olur.']
  },
  {
    id: 'make_the_break_change',
    word: 'Make the break/change',
    pos: 'phrase',
    meaning: '(B y k bir) de i iklik yapmak, ba lar  koparmak',
    definition: 'To make a decision to change something in your life significant.',
    ipa: '/me k    bre k/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Transform', meaning: 'd n  t rmek', pos: 'verb' },
      { word: 'Sever ties', meaning: 'ba lar  koparmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Stay the same', meaning: 'ayn  kalmak', pos: 'phrase' }
    ],
    collocations: ['finally make the break', 'time to make the change'],
    collocationMeanings: {
      'finally make the break': 'sonunda ba lar  koparmak/de i iklik yapmak',
      'time to make the change': 'de i iklik yapma zaman '
    },
    examples: ['I decided to make the break and buy my own place.'],
    exampleTranslations: ['De i iklik yapmaya ve kendi yerimi sat n almaya karar verdim.']
  },
  {
    id: 'make_up_my_mind',
    word: 'Make up my mind',
    pos: 'idiom',
    meaning: 'karar n  vermek, kafas nda netle tirmek',
    definition: 'To make a decision.',
    ipa: '/me k  p ma  ma nd/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Decide', meaning: 'karar vermek', pos: 'verb' },
      { word: 'Determine', meaning: 'kararla t rmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Hesitate', meaning: 'teredd t etmek', pos: 'verb' },
      { word: 'Waver', meaning: 'bocalamak', pos: 'verb' }
    ],
    collocations: ["can't make up my mind", 'already made up my mind'],
    collocationMeanings: {
      "can't make up my mind": 'bir t rl  karar veremiyorum',
      'already made up my mind': ' oktan karar m  verdim'
    },
    examples: ['He made up his mind to attend the meeting.'],
    exampleTranslations: ['Toplant ya kat lmaya karar verdi.']
  },
  {
    id: 'make_use_of',
    word: 'Make use of',
    pos: 'phrase',
    meaning: 'yararlanmak, kullanmak',
    definition: 'To use someone or something for a particular purpose.',
    ipa: '/me k ju s  v/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Utilize', meaning: 'faydalanmak', pos: 'verb' },
      { word: 'Employ', meaning: 'kullanmak/i e ko mak', pos: 'verb' },
      { word: 'Exploit', meaning: 'istifade etmek/s m rmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Waste', meaning: 'bo a harcamak', pos: 'verb' },
      { word: 'Ignore', meaning: 'ihmal etmek', pos: 'verb' }
    ],
    collocations: ['make good use of', 'make better use of', 'make use of resources'],
    collocationMeanings: {
      'make good use of': 'iyi de erlendirmek',
      'make better use of': 'daha iyi yararlanmak',
      'make use of resources': 'kaynaklar  kullanmak'
    },
    examples: ["Why doesn't she make use of her singing talent?"],
    exampleTranslations: ['Neden  ark  s yleme yetene inden yararlanm yor?']
  },
  {
    id: 'make_yourself',
    word: 'Make yourself',
    pos: 'phrase',
    meaning: 'kendini (bir  ey) yapmak/haz rlamak',
    definition: 'To create or produce something for one s own use or benefit.',
    ipa: '/me k j   self/',
    level: 'intermediate',
    wordFamily: [
      { word: 'maker', pos: 'noun', meaning: 'yap c / retici' }
    ],
    synonyms: [
      { word: 'Prepare for oneself', meaning: 'kendine haz rlamak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['make yourself at home', 'make yourself comfortable'],
    collocationMeanings: {
      'make yourself at home': 'kendini evinde hisset',
      'make yourself comfortable': 'rahat na bak'
    },
    examples: ['Jane made herself a drink while she waited.'],
    exampleTranslations: ['Jane beklerken kendine bir i ecek haz rlad .']
  },
  {
    id: 'massive',
    word: 'Massive',
    pos: 'adj',
    meaning: ' ok b y k, a  r, k tlesel',
    definition: 'Very large, heavy and solid.',
    ipa: '/ m s. v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'mass', pos: 'noun', meaning: 'k tle/y   n' },
      { word: 'massively', pos: 'adverb', meaning: 'b y k  l  de' }
    ],
    synonyms: [
      { word: 'Huge', meaning: 'kocaman', pos: 'adj' },
      { word: 'Gigantic', meaning: 'dev gibi', pos: 'adj' },
      { word: 'Enormous', meaning: 'muazzam', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Tiny', meaning: 'k   c k', pos: 'adj' },
      { word: 'Small', meaning: 'k   k', pos: 'adj' },
      { word: 'Slight', meaning: 'hafif/az', pos: 'adj' }
    ],
    collocations: ['massive amount', 'massive scale', 'massive project'],
    collocationMeanings: {
      'massive amount': 'muazzam miktar',
      'massive scale': 'b y k  l ek',
      'massive project': 'devasa proje'
    },
    examples: ['There are the massive columns at Luxor.'],
    exampleTranslations: ['Luxor da devasa s tunlar var.']
  },
  {
    id: 'mild',
    word: 'Mild',
    pos: 'adj',
    meaning: 'hafif (ac  olmayan/yumu ak tat)',
    definition: 'Not strong, severe, or extreme in flavor or effect.',
    ipa: '/ma ld/',
    level: 'intermediate',
    wordFamily: [
      { word: 'mildly', pos: 'adverb', meaning: 'nazik e/hafif e' },
      { word: 'mildness', pos: 'noun', meaning: 'yumu akl k/ l manl k' }
    ],
    synonyms: [
      { word: 'Gentle', meaning: 'nazik/yumu ak', pos: 'adj' },
      { word: 'Moderate', meaning: ' l ml ', pos: 'adj' },
      { word: 'Bland', meaning: 'tats z/yumu ak', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Strong', meaning: 'g  l /sert', pos: 'adj' },
      { word: 'Severe', meaning: ' iddetli', pos: 'adj' },
      { word: 'Harsh', meaning: 'sert/kaba', pos: 'adj' }
    ],
    collocations: ['mild weather', 'mild cheese', 'mild case of flu'],
    collocationMeanings: {
      'mild weather': ' l man hava',
      'mild cheese': 'yumu ak peynir',
      'mild case of flu': 'hafif grip vakas '
    },
    examples: ['The curry is actually quite mild.'],
    exampleTranslations: ['K ri asl nda olduk a hafif.']
  },
  {
    id: 'misplace',
    word: 'Misplace',
    pos: 'verb',
    meaning: 'yanl   yere koymak, yerini unutmak',
    definition: 'To put something in the wrong place and lose it, usually temporarily.',
    ipa: '/ m s ple s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'placement', pos: 'noun', meaning: 'yerle tirme' }
    ],
    synonyms: [
      { word: 'Lose', meaning: 'kaybetmek', pos: 'verb' },
      { word: 'Mislay', meaning: 'nereye koydu unu unutmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Find', meaning: 'bulmak', pos: 'verb' },
      { word: 'Locate', meaning: 'yerini belirlemek', pos: 'verb' }
    ],
    collocations: ['misplace keys', 'misplace trust', 'misplace glasses'],
    collocationMeanings: {
      'misplace keys': 'anahtarlar  bir yere koyup unutmak',
      'misplace trust': 'yanl   ki iye g venmek',
      'misplace glasses': 'g zl   n yerini unutmak'
    },
    examples: ["I misplaced my umbrella and now I'm really wet!"],
    exampleTranslations: [' emsiyemi yanl   yere koydum ve  imdi s r ls klam oldum!']
  },
  {
    id: 'misunderstand',
    word: 'Misunderstand',
    pos: 'verb',
    meaning: 'yanl   anlamak',
    definition: 'To fail to understand something or someone correctly.',
    ipa: '/ m s. n.d  st nd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'understanding', pos: 'noun', meaning: 'anlay  ' },
      { word: 'misunderstanding', pos: 'noun', meaning: 'yanl   anla  lma' }
    ],
    synonyms: [
      { word: 'Misinterpret', meaning: 'yanl   yorumlamak', pos: 'verb' },
      { word: 'Misconceive', meaning: 'yanl   kavramak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Understand', meaning: 'anlamak', pos: 'verb' },
      { word: 'Comprehend', meaning: 'idrak etmek', pos: 'verb' },
      { word: 'Grasp', meaning: 'kavramak', pos: 'verb' }
    ],
    collocations: ['completely misunderstand', 'easy to misunderstand'],
    collocationMeanings: {
      'completely misunderstand': 'tamamen yanl   anlamak',
      'easy to misunderstand': 'anla  lmas  g  /yanl   anla  lmaya m sait'
    },
    examples: ['I think he has misunderstood the problem.'],
    exampleTranslations: ['Bence o sorunu yanl   anlad .']
  },
  {
    id: 'monolingual',
    word: 'Monolingual',
    pos: 'adj',
    meaning: 'tek dilli',
    definition: 'Speaking or using only one language.',
    ipa: '/ m n.   l  . w l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'bilingual', pos: 'adj', meaning: 'iki dilli' },
      { word: 'multilingual', pos: 'adj', meaning: ' ok dilli' }
    ],
    synonyms: [],
    antonyms: [
      { word: 'Bilingual', meaning: 'iki dilli', pos: 'adj' },
      { word: 'Multilingual', meaning: ' ok dilli', pos: 'adj' }
    ],
    collocations: ['monolingual dictionary', 'monolingual community'],
    collocationMeanings: {
      'monolingual dictionary': 'tek dilli s zl k',
      'monolingual community': 'tek dil konu ulan topluluk'
    },
    examples: ['She only speaks French so she is monolingual.'],
    exampleTranslations: ['Sadece Frans zca konu uyor, bu y zden tek dilli.']
  },
  {
    id: 'my_minds_gone_blank',
    word: "My mind's gone blank",
    pos: 'idiom',
    meaning: 'zihnim durdu, akl ma hi bir  ey gelmiyor',
    definition: 'To be suddenly unable to remember something.',
    ipa: '/ma  ma ndz   n bl  k/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Forget suddenly', meaning: 'aniden unutmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Remember clearly', meaning: 'net hat rlamak', pos: 'phrase' }
    ],
    collocations: ["suddenly my mind's gone blank"],
    collocationMeanings: {
      "suddenly my mind's gone blank": 'zihnim aniden durdu/bo ald '
    },
    examples: ["I can't remember his name - my mind's gone blank."],
    exampleTranslations: ['Ad n  hat rlayam yorum - zihnim bo ald .']
  },
  {
    id: 'notice',
    word: 'Notice',
    pos: 'verb',
    meaning: 'fark etmek',
    definition: 'To become aware of something by seeing or hearing it.',
    ipa: '/ n  .t s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'noticeable', pos: 'adj', meaning: 'fark edilebilir' },
      { word: 'notification', pos: 'noun', meaning: 'bildirim' }
    ],
    synonyms: [
      { word: 'Observe', meaning: 'g zlemlemek', pos: 'verb' },
      { word: 'Perceive', meaning: 'alg lamak', pos: 'verb' },
      { word: 'Detect', meaning: 'tespit etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' },
      { word: 'Overlook', meaning: 'g zden ka  rmak', pos: 'verb' }
    ],
    collocations: ['notice a difference', 'take notice', 'hardly notice'],
    collocationMeanings: {
      'notice a difference': 'fark  g rmek',
      'take notice': 'dikkat etmek/fark na varmak',
      'hardly notice': 'neredeyse hi  fark etmemek'
    },
    examples: ['I noticed that the door was open.'],
    exampleTranslations: ['Kap n n a  k oldu unu fark ettim.']
  },
  {
    id: 'nutty',
    word: 'Nutty',
    pos: 'adj',
    meaning: 'f nd kl /f st kl , kuruyemi  tad nda',
    definition: 'Containing nuts or having the flavor of nuts.',
    ipa: '/ n t.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'nut', pos: 'noun', meaning: 'f nd k/kuruyemi ' }
    ],
    synonyms: [
      { word: 'Nut-like', meaning: 'f nd   ms ', pos: 'adj' }
    ],
    antonyms: [],
    collocations: ['nutty flavor', 'nutty taste'],
    collocationMeanings: {
      'nutty flavor': 'f nd ks  aroma',
      'nutty taste': 'kuruyemi  tad '
    },
    examples: ['The biscuits were nutty.'],
    exampleTranslations: ['Bisk viler f nd kl yd .']
  },
  {
    id: 'objective_b1',
    word: 'Objective',
    pos: 'noun',
    meaning: 'hedef, ama ',
    definition: 'Something that you are trying to achieve.',
    ipa: '/ b d ek.t v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'objectively', pos: 'adverb', meaning: 'tarafs zca' },
      { word: 'objectivity', pos: 'noun', meaning: 'nesnellik' }
    ],
    synonyms: [
      { word: 'Goal', meaning: 'hedef', pos: 'noun' },
      { word: 'Aim', meaning: 'ama ', pos: 'noun' },
      { word: 'Target', meaning: 'hedef', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['main objective', 'clear objective', 'reach an objective'],
    collocationMeanings: {
      'main objective': 'temel ama ',
      'clear objective': 'a  k hedef',
      'reach an objective': 'bir hedefe ula mak'
    },
    examples: ["I'm not sure I understand the objective of this exercise."],
    exampleTranslations: ['Bu egzersizin amac n  anlad   mdan emin de ilim.']
  },
  {
    id: 'observe_b1',
    word: 'Observe',
    pos: 'verb',
    meaning: 'g zlemlemek',
    definition: 'To watch carefully the way something happens.',
    ipa: '/ b z  v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'observation', pos: 'noun', meaning: 'g zlem' },
      { word: 'observer', pos: 'noun', meaning: 'g zlemci' }
    ],
    synonyms: [
      { word: 'Monitor', meaning: 'izlemek', pos: 'verb' },
      { word: 'Watch', meaning: 'izlemek', pos: 'verb' },
      { word: 'Survey', meaning: 'incelemek/anket yapmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'ihmal etmek', pos: 'verb' },
      { word: 'Disregard', meaning: ' nemsememek', pos: 'verb' }
    ],
    collocations: ['observe behavior', 'carefully observe', 'observe silence'],
    collocationMeanings: {
      'observe behavior': 'davran    izlemek',
      'carefully observe': 'dikkatlice g zlemlemek',
      'observe silence': 'sessizli i korumak/sayg  duru unda bulunmak'
    },
    examples: ['Similar trends may be observed in most modern societies.'],
    exampleTranslations: ['Benzer e ilimler  o u modern toplumda g zlemlenebilir.']
  },
  {
    id: 'oily',
    word: 'Oily',
    pos: 'adj',
    meaning: 'ya l  (kaygan/s v  ya l )',
    definition: 'Covered with or containing oil.',
    ipa: '/   .li/',
    level: 'intermediate',
    wordFamily: [
      { word: 'oil', pos: 'noun', meaning: 'ya ' },
      { word: 'oiliness', pos: 'noun', meaning: 'ya l l k' }
    ],
    synonyms: [
      { word: 'Greasy', meaning: 'ya l ', pos: 'adj' },
      { word: 'Slick', meaning: 'kaygan/parlak', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Dry', meaning: 'kuru', pos: 'adj' },
      { word: 'Rough', meaning: 'p r zl ', pos: 'adj' }
    ],
    collocations: ['oily skin', 'oily hair', 'oily surface'],
    collocationMeanings: {
      'oily skin': 'ya l  cilt',
      'oily hair': 'ya l  sa ',
      'oily surface': 'kaygan/ya l  y zey'
    },
    examples: ['Oily fish such as mackerel or herring is good for you.'],
    exampleTranslations: ['Uskumru veya ringa bal    gibi ya l  bal klar sizin i in iyidir.']
  },
  {
    id: 'overcrowded',
    word: 'Overcrowded',
    pos: 'adj',
    meaning: 'a  r  kalabal k',
    definition: 'Containing too many people or things.',
    ipa: '/   .v  kra .d d/',
    level: 'intermediate',
    wordFamily: [
      { word: 'crowd', pos: 'noun', meaning: 'kalabal k' },
      { word: 'overcrowding', pos: 'noun', meaning: 'a  r  kalabal kla ma' }
    ],
    synonyms: [
      { word: 'Jam-packed', meaning: 't kl m t kl m', pos: 'adj' },
      { word: 'Congested', meaning: 's k   k', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Empty', meaning: 'bo ', pos: 'adj' },
      { word: 'Spacious', meaning: 'geni /ferah', pos: 'adj' }
    ],
    collocations: ['overcrowded housing', 'become overcrowded'],
    collocationMeanings: {
      'overcrowded housing': 'a  r  kalabal k konutlar',
      'become overcrowded': ' ok kalabal kla mak'
    },
    examples: ["This train is overcrowded - I can't find a seat."],
    exampleTranslations: ['Bu tren a  r  kalabal k - koltuk bulam yorum.']
  },
  {
    id: 'overpopulated',
    word: 'Overpopulated',
    pos: 'adj',
    meaning: 'a  r  n fuslu',
    definition: 'Having a population that is too large for the available resources.',
    ipa: '/   .v  p p.j .le .t d/',
    level: 'intermediate',
    wordFamily: [
      { word: 'population', pos: 'noun', meaning: 'n fus' },
      { word: 'populate', pos: 'verb', meaning: 'yerle mek' }
    ],
    synonyms: [
      { word: 'Congested', meaning: 'a  r  yo un', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Underpopulated', meaning: 'seyrek n fuslu', pos: 'adj' },
      { word: 'Uninhabited', meaning: 'insans z', pos: 'adj' }
    ],
    collocations: ['overpopulated city', 'densely overpopulated'],
    collocationMeanings: {
      'overpopulated city': 'a  r  n fuslu  ehir',
      'densely overpopulated': 'yo un bir  ekilde a  r  n fusa sahip'
    },
    examples: ['This city is overpopulated.'],
    exampleTranslations: ['Bu  ehrin n fusu  ok fazla (a  r  n fuslu).']
  },
  {
    id: 'overwork',
    word: 'Overwork',
    pos: 'verb',
    meaning: 'fazla  al  mak, a  r  y klenmek',
    definition: 'To work too hard or too much.',
    ipa: '/   .v  w  k/',
    level: 'intermediate',
    wordFamily: [
      { word: 'overworked', pos: 'adj', meaning: 'fazla  al  t r lm  ' }
    ],
    synonyms: [
      { word: 'Burnout', meaning: 't kenmek (isim)', pos: 'noun' },
      { word: 'Strain', meaning: 'zorlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Relax', meaning: 'rahatlamak', pos: 'verb' },
      { word: 'Underwork', meaning: 'gere inden az  al  mak', pos: 'verb' }
    ],
    collocations: ['suffer from overwork', 'exhausted from overwork'],
    collocationMeanings: {
      'suffer from overwork': 'a  r   al  maktan mustarip olmak',
      'exhausted from overwork': 'fazla  al  maktan bitkin d  mek'
    },
    examples: ['I think people in that company are always overworked.'],
    exampleTranslations: ['Bence o  irketteki insanlar her zaman a  r   al  t r l yor.']
  },
  {
    id: 'pay_attention_to',
    word: 'Pay attention to',
    pos: 'phrase',
    meaning: 'dikkat etmek, kulak vermek',
    definition: 'To watch, listen to, or think about something carefully.',
    ipa: '/pe    ten.  n tu /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Heed', meaning: 'kulak asmak', pos: 'verb' },
      { word: 'Focus on', meaning: 'odaklanmak', pos: 'phrase' },
      { word: 'Take notice of', meaning: 'fark etmek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' },
      { word: 'Disregard', meaning: 'ald rmamak', pos: 'verb' }
    ],
    collocations: ['pay close attention to', 'fail to pay attention to'],
    collocationMeanings: {
      'pay close attention to': 'yak ndan dikkat etmek',
      'fail to pay attention to': 'dikkat etmemek/g zden ka  rmak'
    },
    examples: ['Pay attention to the warnings printed on the label.'],
    exampleTranslations: ['Etikette bas l  uyar lara dikkat edin.']
  },
  {
    id: 'peppery',
    word: 'Peppery',
    pos: 'adj',
    meaning: 'biberli, ac ',
    definition: 'Tasting of or containing a lot of pepper.',
    ipa: '/ pep. r.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pepper', pos: 'noun', meaning: 'biber' }
    ],
    synonyms: [
      { word: 'Spicy', meaning: 'baharatl ', pos: 'adj' },
      { word: 'Piquant', meaning: 'i tah a  c  ac ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Mild', meaning: 'hafif', pos: 'adj' },
      { word: 'Bland', meaning: 'tats z/yumu ak', pos: 'adj' }
    ],
    collocations: ['peppery aroma', 'peppery flavor', 'peppery sauce'],
    collocationMeanings: {
      'peppery aroma': 'biberimsi koku',
      'peppery flavor': 'ac /biberli tad',
      'peppery sauce': 'ac /biberli sos'
    },
    examples: ['There is a peppery taste to this.'],
    exampleTranslations: ['Bunun biberli bir tad  var.']
  },
  {
    id: 'perform',
    word: 'Perform',
    pos: 'verb',
    meaning: 'performans sergilemek, sahne almak',
    definition: 'To entertain an audience by singing, acting, etc.',
    ipa: '/p  f  m/',
    level: 'intermediate',
    wordFamily: [
      { word: 'performance', pos: 'noun', meaning: 'performans' },
      { word: 'performer', pos: 'noun', meaning: 'sanat  /icrac ' }
    ],
    synonyms: [
      { word: 'Act', meaning: 'oynamak', pos: 'verb' },
      { word: 'Present', meaning: 'sunmak', pos: 'verb' },
      { word: 'Execute', meaning: 'yerine getirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fail', meaning: 'ba ar s z olmak', pos: 'verb' },
      { word: 'Neglect', meaning: 'yapmamak', pos: 'verb' }
    ],
    collocations: ['perform a surgery', 'perform a dance', 'perform live'],
    collocationMeanings: {
      'perform a surgery': 'ameliyat ger ekle tirmek',
      'perform a dance': 'dans sergilemek',
      'perform live': 'canl  performans sergilemek'
    },
    examples: ["He's a terrible actor because he can't perform on stage at all."],
    exampleTranslations: ['O berbat bir oyuncu   nk  sahnede hi  performans sergileyemiyor.']
  },
  {
    id: 'persuade_b1',
    word: 'Persuade',
    pos: 'verb',
    meaning: 'ikna etmek',
    definition: 'To make someone do or believe something by giving them good reasons.',
    ipa: '/p  swe d/',
    level: 'intermediate',
    wordFamily: [
      { word: 'persuasion', pos: 'noun', meaning: 'ikna' },
      { word: 'persuasive', pos: 'adj', meaning: 'ikna edici' }
    ],
    synonyms: [
      { word: 'Convince', meaning: 'ikna etmek/inand rmak', pos: 'verb' },
      { word: 'Influence', meaning: 'etkilemek', pos: 'verb' },
      { word: 'Cajole', meaning: 'tatl  dille ikna etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Dissuade', meaning: 'vazge irmek', pos: 'verb' },
      { word: 'Discourage', meaning: 'hevesini k rmak', pos: 'verb' }
    ],
    collocations: ['persuade someone to do', 'try to persuade', 'manage to persuade'],
    collocationMeanings: {
      'persuade someone to do': 'birini yapmaya ikna etmek',
      'try to persuade': 'ikna etmeye  al  mak',
      'manage to persuade': 'ikna etmeyi ba armak'
    },
    examples: ['He did finally come with us, although it took a long time to persuade him.'],
    exampleTranslations: ['Onu ikna etmek uzun s rse de sonunda bizimle geldi.']
  },
  {
    id: 'phrase',
    word: 'Phrase',
    pos: 'noun',
    meaning: 'ifade, s z  be i',
    definition: 'A group of words often used together.',
    ipa: '/fre z/',
    level: 'intermediate',
    wordFamily: [
      { word: 'phrasing', pos: 'noun', meaning: 'ifade edi  tarz ' }
    ],
    synonyms: [
      { word: 'Expression', meaning: 'ifade', pos: 'noun' },
      { word: 'Utterance', meaning: 's ylem', pos: 'noun' },
      { word: 'Idiom', meaning: 'deyim', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['key phrase', 'common phrase', 'catchy phrase'],
    collocationMeanings: {
      'key phrase': 'anahtar ifade',
      'common phrase': 'yayg n tabir',
      'catchy phrase': 'ak lda kal c  ifade'
    },
    examples: ["Several of those interviewed used the phrase 'being my own boss'."],
    exampleTranslations: ["G r   len ki ilerin bir o u 'kendi patronum olmak' ifadesini kulland ."]
  },
  {
    id: 'polluted',
    word: 'Polluted',
    pos: 'adj',
    meaning: 'kirli, kirlenmi ',
    definition: 'Dirty and dangerous for people to use, especially water or air.',
    ipa: '/p  lu .t d/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pollute', pos: 'verb', meaning: 'kirletmek' },
      { word: 'pollution', pos: 'noun', meaning: 'kirlilik' },
      { word: 'pollutant', pos: 'noun', meaning: 'kirletici madde' }
    ],
    synonyms: [
      { word: 'Contaminated', meaning: 'mikrop kapm  /kirli', pos: 'adj' },
      { word: 'Dirty', meaning: 'kirli', pos: 'adj' },
      { word: 'Foul', meaning: 'pis/kokmu ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Clean', meaning: 'temiz', pos: 'adj' },
      { word: 'Pure', meaning: 'saf', pos: 'adj' },
      { word: 'Unpolluted', meaning: 'kirlenmemi ', pos: 'adj' }
    ],
    collocations: ['heavily polluted', 'polluted river', 'highly polluted'],
    collocationMeanings: {
      'heavily polluted': 'a  r  ekilde kirlenmi ',
      'polluted river': 'kirli nehir',
      'highly polluted': 'y ksek derecede kirli'
    },
    examples: ['The oil spillage has polluted the harbour.'],
    exampleTranslations: ['Petrol s z nt s  liman  kirletti.']
  },
  {
    id: 'possibility',
    word: 'Possibility',
    pos: 'noun',
    meaning: 'olas l k, ihtimal',
    definition: 'A chance that something may happen or be true.',
    ipa: '/ p s.  b l. .ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'possible', pos: 'adj', meaning: 'm mk n' },
      { word: 'possibly', pos: 'adverb', meaning: 'belki/m mk nce' }
    ],
    synonyms: [
      { word: 'Chance', meaning: ' ans/ htimal', pos: 'noun' },
      { word: 'Likelihood', meaning: 'olas l k', pos: 'noun' },
      { word: 'Potential', meaning: 'potansiyel', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Impossibility', meaning: 'imkans zl k', pos: 'noun' },
      { word: 'Certainty', meaning: 'kesinlik', pos: 'noun' }
    ],
    collocations: ['strong possibility', 'real possibility', 'explore the possibility'],
    collocationMeanings: {
      'strong possibility': 'g  l  ihtimal',
      'real possibility': 'ger ek olas l k',
      'explore the possibility': 'olas l    de erlendirmek/ara t rmak'
    },
    examples: ["Another possibility is that we'll go to Mexico instead."],
    exampleTranslations: ['Di er bir olas l k da onun yerine Meksika ya gidecek olmam z.']
  },
  {
    id: 'prediction_b1',
    word: 'Prediction',
    pos: 'noun',
    meaning: 'tahmin,  ng r ',
    definition: 'A statement about what you think will happen in the future.',
    ipa: '/pr  d k.  n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'predict', pos: 'verb', meaning: 'tahmin etmek' },
      { word: 'predictable', pos: 'adj', meaning: 'tahmin edilebilir' }
    ],
    synonyms: [
      { word: 'Forecast', meaning: 'hava tahmini/ ng r ', pos: 'noun' },
      { word: 'Prognosis', meaning: 'tahmin (genelde t bbi)', pos: 'noun' },
      { word: 'Guess', meaning: 'tahmin', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['make a prediction', 'accurate prediction', 'prediction comes true'],
    collocationMeanings: {
      'make a prediction': 'tahminde bulunmak',
      'accurate prediction': 'do ru/isabetli tahmin',
      'prediction comes true': 'tahminin ger ekle mesi'
    },
    examples: ['The government has made a prediction that unemployment will rise this year.'],
    exampleTranslations: ['H k met, bu y l i sizli in artaca   y n nde bir  ng r de bulundu.']
  },
  {
    id: 'produce',
    word: 'Produce',
    pos: 'verb',
    meaning: ' retmek, yap mc l   n   stlenmek',
    definition: 'To make something or to organize a film/play.',
    ipa: '/pr  dju s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'product', pos: 'noun', meaning: ' r n' },
      { word: 'production', pos: 'noun', meaning: ' retim' },
      { word: 'producer', pos: 'noun', meaning: ' retici' }
    ],
    synonyms: [
      { word: 'Create', meaning: 'yaratmak', pos: 'verb' },
      { word: 'Manufacture', meaning: 'imal etmek', pos: 'verb' },
      { word: 'Generate', meaning: ' retmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Destroy', meaning: 'y kmak', pos: 'verb' },
      { word: 'Consume', meaning: 't ketmek', pos: 'verb' }
    ],
    collocations: ['produce results', 'produce goods', 'mass produce'],
    collocationMeanings: {
      'produce results': 'sonu   retmek',
      'produce goods': 'e ya/mal  retmek',
      'mass produce': 'seri  retim yapmak'
    },
    examples: ['Steve McQueen produced and starred in the film.'],
    exampleTranslations: ['Steve McQueen filmin hem yap mc l   n   stlendi hem de ba rol nde oynad .']
  },
  {
    id: 'producer',
    word: 'Producer',
    pos: 'noun',
    meaning: ' retici, yap mc ',
    definition: 'A person or company that makes goods or organizes movies.',
    ipa: '/pr  dju .s r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'produce', pos: 'verb', meaning: ' retmek' },
      { word: 'production', pos: 'noun', meaning: ' retim' }
    ],
    synonyms: [
      { word: 'Manufacturer', meaning: 'imalat  ', pos: 'noun' },
      { word: 'Maker', meaning: 'yap c ', pos: 'noun' },
      { word: 'Creator', meaning: 'yarat c ', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Consumer', meaning: 't ketici', pos: 'noun' }
    ],
    collocations: ['film producer', 'executive producer', 'leading producer'],
    collocationMeanings: {
      'film producer': 'film yap mc s ',
      'executive producer': 'y r t c  yap mc ',
      'leading producer': ' nde gelen  retici'
    },
    examples: ['The producer was really angry with the director.'],
    exampleTranslations: ['Yap mc , y netmene ger ekten  ok k zm  t .']
  },
  {
    id: 'product_b1',
    word: 'Product',
    pos: 'noun',
    meaning: ' r n',
    definition: 'Something that is made to be sold, usually as a result of a process.',
    ipa: '/ pr d. kt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'produce', pos: 'verb', meaning: ' retmek' },
      { word: 'production', pos: 'noun', meaning: ' retim' },
      { word: 'productive', pos: 'adj', meaning: ' retken' }
    ],
    synonyms: [
      { word: 'Commodity', meaning: 'ticari mal', pos: 'noun' },
      { word: 'Goods', meaning: 'e ya/mal', pos: 'noun' },
      { word: 'Merchandise', meaning: 'ticari e ya', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['new product', 'high quality product', 'dairy products'],
    collocationMeanings: {
      'new product': 'yeni  r n',
      'high quality product': 'y ksek kaliteli  r n',
      'dairy products': 's t  r nleri'
    },
    examples: ['Consumers are becoming more suspicious of advertising claims about products that they buy.'],
    exampleTranslations: ['T keticiler, sat n ald klar   r nlerle ilgili reklam iddialar na kar   daha   pheci yakla  yorlar.']
  },
  {
    id: 'productive',
    word: 'Productive',
    pos: 'adj',
    meaning: ' retken, verimli',
    definition: 'Producing or achieving a lot.',
    ipa: '/pr  d k.t v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'product', pos: 'noun', meaning: ' r n' },
      { word: 'productivity', pos: 'noun', meaning: 'verimlilik' },
      { word: 'productively', pos: 'adverb', meaning: 'verimli bir  ekilde' }
    ],
    synonyms: [
      { word: 'Fruitful', meaning: 'bereketli/verimli', pos: 'adj' },
      { word: 'Efficient', meaning: 'etkili/verimli', pos: 'adj' },
      { word: 'Prolific', meaning: ' ok eser veren', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unproductive', meaning: 'verimsiz', pos: 'adj' },
      { word: 'Inefficient', meaning: 'etkisiz', pos: 'adj' },
      { word: 'Idle', meaning: 'aylak/bo ', pos: 'adj' }
    ],
    collocations: ['highly productive', 'productive meeting', 'productive afternoon'],
    collocationMeanings: {
      'highly productive': 'son derece verimli',
      'productive meeting': 'verimli toplant ',
      'productive afternoon': ' retken ge en   leden sonra'
    },
    examples: ['Samuel is more productive in the morning.'],
    exampleTranslations: ['Samuel sabahlar  daha verimlidir.']
  },
  {
    id: 'proud_of',
    word: 'Proud of',
    pos: 'phrase',
    meaning: 'gurur duymak',
    definition: 'Feeling deep pleasure or satisfaction as a result of achievements.',
    ipa: '/pra d  v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pride', pos: 'noun', meaning: 'gurur/onur' },
      { word: 'proudly', pos: 'adverb', meaning: 'gururla' }
    ],
    synonyms: [
      { word: 'Pleased with', meaning: 'memnun olmak', pos: 'phrase' },
      { word: 'Satisfied', meaning: 'tatmin olmu ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Ashamed of', meaning: 'utanmak', pos: 'phrase' },
      { word: 'Humiliated', meaning: 'a a  lanm  ', pos: 'adj' }
    ],
    collocations: ['immensely proud of', 'make someone proud of'],
    collocationMeanings: {
      'immensely proud of': 'fazlas yla gurur duymak',
      'make someone proud of': 'birini kendisiyle gurur duyurmak'
    },
    examples: ['He was very proud of himself for winning.'],
    exampleTranslations: ['Kazand    i in kendisiyle  ok gurur duyuyordu.']
  },
  {
    id: 'put_a_plan_into_action',
    word: 'Put a plan into action',
    pos: 'phrase',
    meaning: 'plan  uygulamaya koymak, eyleme d kmek',
    definition: 'To start doing something that has been planned.',
    ipa: '/p t   pl n   n.tu   k.  n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Implement', meaning: 'uygulamak', pos: 'verb' },
      { word: 'Execute', meaning: 'y r tmek', pos: 'verb' },
      { word: 'Carry out', meaning: 'ger ekle tirmek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Cancel', meaning: 'iptal etmek', pos: 'verb' },
      { word: 'Postpone', meaning: 'ertelemek', pos: 'verb' }
    ],
    collocations: ['finally put a plan into action', 'ready to put a plan into action'],
    collocationMeanings: {
      'finally put a plan into action': 'sonunda bir plan  uygulamaya koymak',
      'ready to put a plan into action': 'bir plan  uygulamaya koymaya haz r olmak'
    },
    examples: ['We are ready to put our plan into action.'],
    exampleTranslations: ['Plan m z  eyleme d kmeye haz r z.']
  },
  {
    id: 'put_away',
    word: 'Put away',
    pos: 'phrasal verb',
    meaning: 'yerine koymak, kald rmak',
    definition: 'To put something in the place where it is usually kept.',
    ipa: '/p t   we /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Store', meaning: 'depolamak/saklamak', pos: 'verb' },
      { word: 'Tidy up', meaning: 'toparlamak', pos: 'phrasal verb' },
      { word: 'Discard', meaning: 'atmak/kald rmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Take out', meaning: '  karmak', pos: 'phrasal verb' }
    ],
    collocations: ['put away toys', 'put away laundry', 'put away dishes'],
    collocationMeanings: {
      'put away toys': 'oyuncaklar  kald rmak',
      'put away laundry': ' ama  rlar  yerle tirmek',
      'put away dishes': 'bula  klar  kald rmak'
    },
    examples: ['He put the notebook away and stood up.'],
    exampleTranslations: ['Not defterini yerine kald rd  ve aya a kalkt .']
  },

  {
    id: 'put_my_mind_to',
    word: 'Put my mind to',
    pos: 'idiom',
    meaning: 'kafaya koymak, kendini vermek',
    definition: "To decide to do something and work hard at it.",
    ipa: '/p t ma  ma nd tu /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Focus on', meaning: 'odaklanmak', pos: 'phrase' },
      { word: 'Devote oneself', meaning: 'kendini adamak', pos: 'phrase' },
      { word: 'Apply oneself', meaning: 'canla ba la  al  mak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Neglect', meaning: 'ihmal etmek', pos: 'verb' }
    ],
    collocations: ['put your mind to the task', 'really put your mind to it'],
    collocationMeanings: {
      'put your mind to the task': 'kendini i e vermek',
      'really put your mind to it': 'ger ekten kafaya koymak'
    },
    examples: ["She'd have made an excellent dancer, if she'd put her mind to it."],
    exampleTranslations: ['E er kafas na koysayd  (kendini verseydi) m kemmel bir dans   olurdu.']
  },
  {
    id: 'put_off',
    word: 'Put off',
    pos: 'phrasal verb',
    meaning: 'ertelemek',
    definition: 'To decide or arrange to do something at a later time.',
    ipa: '/p t  f/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Postpone', meaning: 'ertelemek', pos: 'verb' },
      { word: 'Delay', meaning: 'geciktirmek', pos: 'verb' },
      { word: 'Defer', meaning: 'ertelemek/geri b rakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Advance', meaning: ' ne  ekmek', pos: 'verb' },
      { word: 'Expedite', meaning: 'h zland rmak', pos: 'verb' }
    ],
    collocations: ['put off a meeting', 'put off a decision', 'keep putting off'],
    collocationMeanings: {
      'put off a meeting': 'toplant y  ertelemek',
      'put off a decision': 'bir karar  ertelemek',
      'keep putting off': 'erteleyip durmak'
    },
    examples: ["You can't put the decision off any longer."],
    exampleTranslations: ['Karar  daha fazla erteleyemezsin.']
  },
  {
    id: 'quit_a_bad_habit',
    word: 'Quit a bad habit',
    pos: 'phrase',
    meaning: 'k t  bir al  kanl    b rakmak',
    definition: 'To stop doing something that is harmful or unhealthy.',
    ipa: '/kw t   b d  h b. t/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Abandon a habit', meaning: 'al  kanl    terk etmek', pos: 'phrase' },
      { word: 'Break a habit', meaning: 'al  kanl    k rmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Start a habit', meaning: 'al  kanl k edinmek', pos: 'phrase' },
      { word: 'Develop a habit', meaning: 'al  kanl k geli tirmek', pos: 'phrase' }
    ],
    collocations: ['try to quit a bad habit', 'struggle to quit a bad habit'],
    collocationMeanings: {
      'try to quit a bad habit': 'k t  bir al  kanl    b rakmaya  al  mak',
      'struggle to quit a bad habit': 'k t  bir al  kanl    b rakmakta zorlanmak'
    },
    examples: ['You should quit biting your nails.'],
    exampleTranslations: ['T rnaklar n  yemeyi b rakmal s n.']
  },
  {
    id: 'reach_a_target_b1',
    word: 'Reach a target',
    pos: 'phrase',
    meaning: 'hedefe ula mak',
    definition: 'To achieve a specific goal or amount.',
    ipa: '/ri t     t  .  t/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Achieve a goal', meaning: 'hedefe ula mak', pos: 'phrase' },
      { word: 'Hit a target', meaning: 'hedefi vurmak/tutturmak', pos: 'phrase' },
      { word: 'Attain', meaning: 'elde etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fail', meaning: 'ba ar s z olmak', pos: 'verb' },
      { word: 'Miss a target', meaning: 'hedefi  skalamak', pos: 'phrase' }
    ],
    collocations: ['easily reach a target', 'fail to reach a target'],
    collocationMeanings: {
      'easily reach a target': 'hedefe kolayca ula mak',
      'fail to reach a target': 'hedefe ula amamak'
    },
    examples: ['I aim to reach the target by March.'],
    exampleTranslations: ['Mart ay na kadar hedefe ula may  hedefliyorum.']
  },
  {
    id: 'rebuild',
    word: 'Rebuild',
    pos: 'verb',
    meaning: 'yeniden in a etmek',
    definition: 'To build something again after it has been damaged or destroyed.',
    ipa: '/ ri  b ld/',
    level: 'intermediate',
    wordFamily: [
      { word: 'build', pos: 'verb', meaning: 'in a etmek' },
      { word: 'builder', pos: 'noun', meaning: 'in aat  ' }
    ],
    synonyms: [
      { word: 'Reconstruct', meaning: 'yeniden kurmak', pos: 'verb' },
      { word: 'Restore', meaning: 'onarmak/restore etmek', pos: 'verb' },
      { word: 'Renovate', meaning: 'yenilemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Demolish', meaning: 'y kmak', pos: 'verb' },
      { word: 'Destroy', meaning: 'yok etmek', pos: 'verb' }
    ],
    collocations: ['rebuild trust', 'rebuild a life', 'rebuild a city'],
    collocationMeanings: {
      'rebuild trust': 'g veni yeniden tesis etmek',
      'rebuild a life': 'hayat  yeniden kurmak',
      'rebuild a city': 'bir  ehri yeniden in a etmek'
    },
    examples: ['They had to rebuild the theatre after the fire.'],
    exampleTranslations: ['Yang ndan sonra tiyatroyu yeniden in a etmek zorunda kald lar.']
  },
  {
    id: 'recognise',
    word: 'Recognise',
    pos: 'verb',
    meaning: 'tan mak (daha  nce g rd    birini/ eyi)',
    definition: 'To identify someone or something seen before.',
    ipa: '/ rek.  .na z/',
    level: 'intermediate',
    wordFamily: [
      { word: 'recognition', pos: 'noun', meaning: 'tan ma/onay' },
      { word: 'recognizable', pos: 'adj', meaning: 'tan nabilir' }
    ],
    synonyms: [
      { word: 'Identify', meaning: 'tan mlamak', pos: 'verb' },
      { word: 'Know', meaning: 'bilmek/tan mak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' },
      { word: 'Overlook', meaning: 'g zden ka  rmak', pos: 'verb' }
    ],
    collocations: ['instantly recognize', 'fail to recognize', 'recognize a voice'],
    collocationMeanings: {
      'instantly recognize': 'an nda tan mak',
      'fail to recognize': 'tan yamamak',
      'recognize a voice': 'bir sesi tan mak'
    },
    examples: ['I hardly recognized you with a beard!'],
    exampleTranslations: ['Seni sakalla neredeyse tan yamad m!']
  },
  {
    id: 'recording_studio',
    word: 'Recording studio',
    pos: 'noun',
    meaning: 'kay t st dyosu',
    definition: 'A room with special equipment where sound or music is recorded.',
    ipa: '/r  k  .d    stju .di.  /',
    level: 'intermediate',
    wordFamily: [
      { word: 'record', pos: 'verb/noun', meaning: 'kaydetmek/kay t' }
    ],
    synonyms: [
      { word: 'Studio', meaning: 'st dyo', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['professional recording studio', 'book a recording studio'],
    collocationMeanings: {
      'professional recording studio': 'profesyonel kay t st dyosu',
      'book a recording studio': 'kay t st dyosu kiralamak'
    },
    examples: ['They were in the recording studio all day.'],
    exampleTranslations: ['B t n g n kay t st dyosundayd lar.']
  },
  {
    id: 'recycle',
    word: 'Recycle',
    pos: 'verb',
    meaning: 'geri d n  t rmek',
    definition: 'To treat things that have already been used so that they can be used again.',
    ipa: '/ ri  sa .k l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'recycling', pos: 'noun', meaning: 'geri d n   m' },
      { word: 'recyclable', pos: 'adj', meaning: 'geri d n  t r lebilir' }
    ],
    synonyms: [
      { word: 'Reprocess', meaning: 'yeniden i lemek', pos: 'verb' },
      { word: 'Reclaim', meaning: 'geri kazanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Waste', meaning: 'israf etmek/atmak', pos: 'verb' }
    ],
    collocations: ['recycle plastic', 'recycle paper', 'encourage to recycle'],
    collocationMeanings: {
      'recycle plastic': 'plasti i geri d n  t rmek',
      'recycle paper': 'ka  d  geri d n  t rmek',
      'encourage to recycle': 'geri d n   me te vik etmek'
    },
    examples: ['Japan recycles 40% of its waste.'],
    exampleTranslations: ['Japonya at klar n n %40  n  geri d n  t r yor.']
  },
  {
    id: 'reduce_b1',
    word: 'Reduce',
    pos: 'verb',
    meaning: 'azaltmak, d   rmek',
    definition: 'To make something smaller in size, amount, or importance.',
    ipa: '/r  dju s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reduction', pos: 'noun', meaning: 'azalma' },
      { word: 'reducible', pos: 'adj', meaning: 'azalt labilir' }
    ],
    synonyms: [
      { word: 'Decrease', meaning: 'azaltmak', pos: 'verb' },
      { word: 'Lessen', meaning: 'hafifletmek/eksiltmek', pos: 'verb' },
      { word: 'Diminish', meaning: 'azaltmak/eksiltmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Increase', meaning: 'art rmak', pos: 'verb' },
      { word: 'Extend', meaning: 'uzatmak/art rmak', pos: 'verb' },
      { word: 'Enlarge', meaning: 'b y tmek', pos: 'verb' }
    ],
    collocations: ['significantly reduce', 'reduce costs', 'reduce risks'],
    collocationMeanings: {
      'significantly reduce': ' nemli  l  de azaltmak',
      'reduce costs': 'maliyetleri d   rmek',
      'reduce risks': 'riskleri azaltmak'
    },
    examples: ['Try to reduce the amount of fat in your diet.'],
    exampleTranslations: ['Diyetinizdeki ya  miktar n  azaltmaya  al   n.']
  },
  {
    id: 'refuse',
    word: 'Refuse',
    pos: 'verb',
    meaning: 'reddetmek, geri  evirmek',
    definition: 'To say that you will not do or accept something.',
    ipa: '/r  fju z/',
    level: 'intermediate',
    wordFamily: [
      { word: 'refusal', pos: 'noun', meaning: 'ret' }
    ],
    synonyms: [
      { word: 'Reject', meaning: 'reddetmek', pos: 'verb' },
      { word: 'Decline', meaning: 'nazik e reddetmek', pos: 'verb' },
      { word: 'Deny', meaning: 'geri  evirmek/inkar etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Accept', meaning: 'kabul etmek', pos: 'verb' },
      { word: 'Agree', meaning: 'onaylamak', pos: 'verb' },
      { word: 'Consent', meaning: 'raz  olmak', pos: 'verb' }
    ],
    collocations: ['refuse to accept', 'flatly refuse', 'refuse an offer'],
    collocationMeanings: {
      'refuse to accept': 'kabul etmeyi reddetmek',
      'flatly refuse': 'kesin bir dille reddetmek',
      'refuse an offer': 'bir teklifi geri  evirmek'
    },
    examples: ['Mum asked him to apologize, but he refused.'],
    exampleTranslations: ['Annem  z r dilemesini istedi ama o reddetti.']
  },
  {
    id: 'regret_b1',
    word: 'Regret',
    pos: 'verb',
    meaning: 'pi man olmak,  z lmek',
    definition: 'To feel sorry or sad about something that has happened or that you have done.',
    ipa: '/r   ret/',
    level: 'intermediate',
    wordFamily: [
      { word: 'regretful', pos: 'adj', meaning: 'pi manl k duyan' },
      { word: 'regrettable', pos: 'adj', meaning: ' z c /pi manl k verici' }
    ],
    synonyms: [
      { word: 'Rue', meaning: 'pi manl k duymak', pos: 'verb' },
      { word: 'Be sorry', meaning: ' zg n olmak', pos: 'phrase' },
      { word: 'Lament', meaning: 'esef etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Celebrate', meaning: 'kutlamak', pos: 'verb' },
      { word: 'Rejoice', meaning: 'sevinmek', pos: 'verb' }
    ],
    collocations: ['deeply regret', 'express regret', 'bitterly regret'],
    collocationMeanings: {
      'deeply regret': 'derin pi manl k duymak',
      'express regret': 'pi manl   n  dile getirmek',
      'bitterly regret': 'ac  bir  ekilde pi man olmak'
    },
    examples: ['We regret any inconvenience caused by the delay.'],
    exampleTranslations: ['Gecikmenin neden oldu u her t rl  rahats zl ktan dolay   zg n z.']
  },
  {
    id: 'rehearsal_room',
    word: 'Rehearsal room',
    pos: 'noun',
    meaning: 'prova odas ',
    definition: 'A place to practice for a performance.',
    ipa: '/r  h  .s l ru m/',
    level: 'intermediate',
    wordFamily: [
      { word: 'rehearse', pos: 'verb', meaning: 'prova yapmak' }
    ],
    synonyms: [
      { word: 'Practice space', meaning: 'pratik alan ', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['book a rehearsal room', 'noisy rehearsal room'],
    collocationMeanings: {
      'book a rehearsal room': 'prova odas  rezerve etmek',
      'noisy rehearsal room': 'g r lt l  prova odas '
    },
    examples: ['We need to find a rehearsal room to practise.'],
    exampleTranslations: ['Pratik yapmak i in bir prova odas  bulmam z gerekiyor.']
  },
  {
    id: 'rehearse',
    word: 'Rehearse',
    pos: 'verb',
    meaning: 'prova yapmak',
    definition: 'To practice a play, concert, or opera before a performance.',
    ipa: '/r  h  s/',
    level: 'intermediate',
    wordFamily: [
      { word: 'rehearsal', pos: 'noun', meaning: 'prova' }
    ],
    synonyms: [
      { word: 'Practice', meaning: 'pratik yapmak', pos: 'verb' },
      { word: 'Prepare', meaning: 'haz rlanmak', pos: 'verb' },
      { word: 'Drill', meaning: 'tekrarlamak/ al  mak', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['rehearse a play', 'rehearse a song', 'constantly rehearse'],
    collocationMeanings: {
      'rehearse a play': 'oyun provas  yapmak',
      'rehearse a song': ' ark  provas  yapmak',
      'constantly rehearse': 's rekli prova yapmak'
    },
    examples: ["We've been rehearsing for weeks."],
    exampleTranslations: ['Haftalard r prova yap yoruz.']
  },
  {
    id: 'relative',
    word: 'Relative',
    pos: 'noun',
    meaning: 'akraba',
    definition: 'A member of your family.',
    ipa: '/ rel. .t v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'relate', pos: 'verb', meaning: 'ili ki kurmak' },
      { word: 'relation', pos: 'noun', meaning: 'akrabal k/ili ki' },
      { word: 'relationship', pos: 'noun', meaning: 'ili ki' }
    ],
    synonyms: [
      { word: 'Relation', meaning: 'yak n/akraba', pos: 'noun' },
      { word: 'Kinsman', meaning: 'soyda /akraba', pos: 'noun' },
      { word: 'Family member', meaning: 'aile  yesi', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Stranger', meaning: 'yabanc ', pos: 'noun' }
    ],
    collocations: ['close relative', 'distant relative', 'family relative'],
    collocationMeanings: {
      'close relative': 'yak n akraba',
      'distant relative': 'uzak akraba',
      'family relative': 'aile akrabas '
    },
    examples: ['We spent the week visiting relatives.'],
    exampleTranslations: ['Haftay  akrabalar  ziyaret ederek ge irdik.']
  },
  {
    id: 'rely_on',
    word: 'Rely on',
    pos: 'phrasal verb',
    meaning: 'g venmek, bel ba lamak',
    definition: 'To trust someone or something or to need them for help.',
    ipa: '/r  la   n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reliable', pos: 'adj', meaning: 'g venilir' },
      { word: 'reliability', pos: 'noun', meaning: 'g venilirlik' },
      { word: 'reliance', pos: 'noun', meaning: 'dayanak/g ven' }
    ],
    synonyms: [
      { word: 'Depend on', meaning: 'bel ba lamak', pos: 'phrasal verb' },
      { word: 'Trust', meaning: 'g venmek', pos: 'verb' },
      { word: 'Count on', meaning: 'hesaba katmak/g venmek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Distrust', meaning: 'g venmemek', pos: 'verb' },
      { word: 'Doubt', meaning: '  phelenmek', pos: 'verb' }
    ],
    collocations: ['rely heavily on', 'can rely on', 'rely on technology'],
    collocationMeanings: {
      'rely heavily on': 'b y k  l  de g venmek',
      'can rely on': 'g venebilirsin',
      'rely on technology': 'teknolojiye bel ba lamak'
    },
    examples: ['We can rely on my brother to help us.'],
    exampleTranslations: ['Bize yard m etmesi i in erkek karde ime g venebiliriz.']
  },
  {
    id: 'remind_b1',
    word: 'Remind',
    pos: 'verb',
    meaning: 'hat rlatmak',
    definition: 'To make someone remember something.',
    ipa: '/r  ma nd/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reminder', pos: 'noun', meaning: 'hat rlat c ' }
    ],
    synonyms: [
      { word: 'Prompt', meaning: 'harekete ge irmek/an msatmak', pos: 'verb' },
      { word: 'Jog someone s memory', meaning: 'haf zas n  tazelemek', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Forget', meaning: 'unutmak', pos: 'verb' },
      { word: 'Ignore', meaning: 'ihmal etmek', pos: 'verb' }
    ],
    collocations: ['remind someone of', 'gently remind', 'remind me later'],
    collocationMeanings: {
      'remind someone of': 'birine bir  eyi hat rlatmak',
      'gently remind': 'nazik e hat rlatmak',
      'remind me later': 'bana sonra hat rlat'
    },
    examples: ["I can't think of his name   can you remind me?"],
    exampleTranslations: ['Ad n    karam yorum   bana hat rlatabilir misin?']
  },
  {
    id: 'repeat_b1',
    word: 'Repeat',
    pos: 'verb',
    meaning: 'tekrar etmek',
    definition: 'To say or do something again.',
    ipa: '/r  pi t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'repetition', pos: 'noun', meaning: 'tekrar' },
      { word: 'repeatedly', pos: 'adverb', meaning: 'tekrar tekrar' },
      { word: 'repetitive', pos: 'adj', meaning: 'tekrarlayan' }
    ],
    synonyms: [
      { word: 'Iterate', meaning: 'tekrarlamak', pos: 'verb' },
      { word: 'Reiterate', meaning: 'yinelemek', pos: 'verb' },
      { word: 'Echo', meaning: 'yank lamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Change', meaning: 'de i tirmek', pos: 'verb' },
      { word: 'Halt', meaning: 'durdurmak', pos: 'verb' }
    ],
    collocations: ['repeat a question', 'repeat a word', "don't repeat this"],
    collocationMeanings: {
      'repeat a question': 'soruyu tekrarlamak',
      'repeat a word': 'kelimeyi tekrarlamak',
      "don't repeat this": 'bunu tekrarlama (gizli tut)'
    },
    examples: ['Can you repeat what you just said, please?'],
    exampleTranslations: ['L tfen az  nce s yledi ini tekrar edebilir misin?']
  },
  {
    id: 'reply_b1',
    word: 'Reply',
    pos: 'verb',
    meaning: 'cevap vermek, yan tlamak',
    definition: 'To answer someone by saying or writing something.',
    ipa: '/r  pla /',
    level: 'intermediate',
    wordFamily: [
      { word: 'reply', pos: 'noun', meaning: 'cevap' }
    ],
    synonyms: [
      { word: 'Answer', meaning: 'cevaplamak', pos: 'verb' },
      { word: 'Respond', meaning: 'yan t vermek', pos: 'verb' },
      { word: 'Retort', meaning: 'sert cevap vermek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Question', meaning: 'sormak', pos: 'verb' },
      { word: 'Inquire', meaning: 'soru turmak', pos: 'verb' }
    ],
    collocations: ['reply to an email', 'reply immediately', 'prompt reply'],
    collocationMeanings: {
      'reply to an email': 'e-postay  yan tlamak',
      'reply immediately': 'an nda cevap vermek',
      'prompt reply': 'h zl  yan t'
    },
    examples: ["'I know,' Corbett replied quietly."],
    exampleTranslations: ["'Biliyorum,' diye yan tlad  Corbett sessizce."]
  },
  {
    id: 'rethink',
    word: 'Rethink',
    pos: 'verb',
    meaning: 'yeniden d   nmek, g zden ge irmek',
    definition: 'To consider something again in order to change it.',
    ipa: '/ ri     k/',
    level: 'intermediate',
    wordFamily: [
      { word: 'thought', pos: 'noun', meaning: 'd   nce' },
      { word: 'think', pos: 'verb', meaning: 'd   nmek' }
    ],
    synonyms: [
      { word: 'Reconsider', meaning: 'tekrar d   nmek', pos: 'verb' },
      { word: 'Review', meaning: 'g zden ge irmek', pos: 'verb' },
      { word: 'Reassess', meaning: 'yeniden de erlendirmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Proceed', meaning: 'devam etmek', pos: 'verb' },
      { word: 'Accept', meaning: 'kabullenmek', pos: 'verb' }
    ],
    collocations: ['rethink strategy', 'complete rethink', 'force to rethink'],
    collocationMeanings: {
      'rethink strategy': 'stratejiyi yeniden d   nmek',
      'complete rethink': 'tamamen yeniden g zden ge irme',
      'force to rethink': 'yeniden d   nmeye zorlamak'
    },
    examples: ['Competitive pressures are forcing managers to rethink their strategies.'],
    exampleTranslations: ['Rekabet i bask lar, y neticileri stratejilerini yeniden g zden ge irmeye zorluyor.']
  },
  {
    id: 'retire',
    word: 'Retire',
    pos: 'verb',
    meaning: 'emekli olmak',
    definition: 'To stop working, especially because you have reached a certain age.',
    ipa: '/r  ta  r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'retirement', pos: 'noun', meaning: 'emeklilik' },
      { word: 'retired', pos: 'adj', meaning: 'emekli' }
    ],
    synonyms: [
      { word: 'Withdraw', meaning: 'geri  ekilmek', pos: 'verb' },
      { word: 'Step down', meaning: ' ekilmek/istifa etmek', pos: 'phrasal verb' }
    ],
    antonyms: [
      { word: 'Work', meaning: ' al  mak', pos: 'verb' },
      { word: 'Start', meaning: 'ba lamak', pos: 'verb' }
    ],
    collocations: ['retire from work', 'early retirement', 'plan to retire'],
    collocationMeanings: {
      'retire from work': 'i ten emekli olmak',
      'early retirement': 'erken emeklilik',
      'plan to retire': 'emekli olmay  planlamak'
    },
    examples: ['At what age do you plan to retire?'],
    exampleTranslations: ['Ka  ya  nda emekli olmay  planl yorsun?']
  },
  {
    id: 'reuse',
    word: 'Reuse',
    pos: 'verb',
    meaning: 'yeniden kullanmak',
    definition: 'To use something again, sometimes for a different purpose.',
    ipa: '/ ri  ju z/',
    level: 'intermediate',
    wordFamily: [
      { word: 'reusable', pos: 'adj', meaning: 'yeniden kullan labilir' },
      { word: 'usage', pos: 'noun', meaning: 'kullan m' }
    ],
    synonyms: [
      { word: 'Recycle', meaning: 'geri d n  t rmek', pos: 'verb' },
      { word: 'Repurpose', meaning: 'ba ka ama la kullanmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discard', meaning: 'atmak/  kar lmak', pos: 'verb' },
      { word: 'Waste', meaning: 'israf etmek', pos: 'verb' }
    ],
    collocations: ['reuse bags', 'recycle and reuse', 'wash and reuse'],
    collocationMeanings: {
      'reuse bags': ' antalar  tekrar kullanmak',
      'recycle and reuse': 'geri d n  t r ve tekrar kullan',
      'wash and reuse': 'y ka ve tekrar kullan'
    },
    examples: ['My daughter reuses envelopes.'],
    exampleTranslations: ['K z m zarflar  yeniden kullan yor.']
  },
  {
    id: 'reward_yourself',
    word: 'Reward yourself',
    pos: 'phrase',
    meaning: 'kendini  d llendirmek',
    definition: 'To give yourself something as a reward for success or hard work.',
    ipa: '/r  w  rd j   self/',
    level: 'intermediate',
    wordFamily: [
      { word: 'rewarding', pos: 'adj', meaning: 'tatmin edici/ d llendirici' }
    ],
    synonyms: [
      { word: 'Treat yourself', meaning: 'kendine  smarlamak/  martmak', pos: 'phrase' },
      { word: 'Indulge yourself', meaning: 'kendine ayr cal k tan mak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Punish yourself', meaning: 'kendini cezaland rmak', pos: 'phrase' }
    ],
    collocations: ['reward yourself for hard work', 'reward yourself with a treat'],
    collocationMeanings: {
      'reward yourself for hard work': 's k   al  ma i in kendini  d llendirmek',
      'reward yourself with a treat': 'kendini bir hediye/ikramla  d llendirmek'
    },
    examples: ['He liked to reward himself with a short break every two hours.'],
    exampleTranslations: ['Her iki saatte bir k sa bir mola vererek kendini  d llendirmeyi severdi.']
  },
  {
    id: 'road_works',
    word: 'Road works',
    pos: 'noun',
    meaning: 'yol  al  mas ',
    definition: 'Repairs that are done to the surface of a road.',
    ipa: '/r  d w  ks/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Road repairs', meaning: 'yol onar m ', pos: 'noun' },
      { word: 'Street maintenance', meaning: 'sokak bak m ', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['heavy road works', 'major road works', 'delayed by road works'],
    collocationMeanings: {
      'heavy road works': 'yo un yol  al  mas ',
      'major road works': 'b y k  apl  yol  al  mas ',
      'delayed by road works': 'yol  al  mas  nedeniyle gecikmek'
    },
    examples: ['There are road works here because they are changing the road.'],
    exampleTranslations: ['Burada yol  al  mas  var   nk  yolu de i tiriyorlar.']
  },
  {
    id: 'rubbish',
    word: 'Rubbish',
    pos: 'noun',
    meaning: '  p',
    definition: 'Things that you throw away because they are no longer useful.',
    ipa: '/ r b.  /',
    level: 'intermediate',
    wordFamily: [
      { word: 'rubbishy', pos: 'adj', meaning: 'de ersiz/  p gibi' }
    ],
    synonyms: [
      { word: 'Garbage', meaning: '  p (mutfak)', pos: 'noun' },
      { word: 'Trash', meaning: '  p (genel)', pos: 'noun' },
      { word: 'Waste', meaning: 'at k', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Valuables', meaning: 'de erli e yalar', pos: 'noun' }
    ],
    collocations: ['rubbish bin', 'collect rubbish', 'absolute rubbish'],
    collocationMeanings: {
      'rubbish bin': '  p tenekesi',
      'collect rubbish': '  p toplamak',
      'absolute rubbish': 'tamamen sa mal k (argoda)'
    },
    examples: ['The streets were littered with rubbish.'],
    exampleTranslations: ['Sokaklar   plerle doluydu.']
  },
  {
    id: 'run_a_company',
    word: 'Run a company',
    pos: 'phrase',
    meaning: ' irket y netmek',
    definition: 'To be in charge of a business organization.',
    ipa: '/r n    k m.p .ni/',
    level: 'intermediate',
    wordFamily: [
      { word: 'manager', pos: 'noun', meaning: 'y netici' }
    ],
    synonyms: [
      { word: 'Manage a business', meaning: 'i  y netmek', pos: 'phrase' },
      { word: 'Direct a company', meaning: ' irket idare etmek', pos: 'phrase' },
      { word: 'Operate', meaning: 'i letmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Work for', meaning: 'i in  al  mak', pos: 'verb' }
    ],
    collocations: ['successfully run a company', 'experience to run a company'],
    collocationMeanings: {
      'successfully run a company': 'bir  irket ba ar yla y netmek',
      'experience to run a company': ' irket y netmek i in gereken tecr be'
    },
    examples: ['I would love to run a company one day.'],
    exampleTranslations: ['Bir g n bir  irket y netmeyi  ok isterim.']
  },
  {
    id: 'runny',
    word: 'Runny',
    pos: 'adj',
    meaning: 'ak  kan, s v la m   (yumurta i in rafadan)',
    definition: 'More liquid than usual or desired.',
    ipa: '/ r n.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'run', pos: 'verb', meaning: 'ko mak/akmak' }
    ],
    synonyms: [
      { word: 'Liquid', meaning: 's v ', pos: 'adj' },
      { word: 'Flowing', meaning: 'akan', pos: 'adj' },
      { word: 'Watery', meaning: 'sulu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Solid', meaning: 'kat ', pos: 'adj' },
      { word: 'Thick', meaning: 'koyu/youn', pos: 'adj' },
      { word: 'Hard', meaning: 'sert/kat ', pos: 'adj' }
    ],
    collocations: ['runny nose', 'runny egg', 'runny honey'],
    collocationMeanings: {
      'runny nose': 'burun ak nt s ',
      'runny egg': 'rafadan yumurta',
      'runny honey': 'ak  kan bal'
    },
    examples: ['Do you like your eggs cooked hard or runny?'],
    exampleTranslations: ['Yumurtan z  kat  m  yoksa rafadan m  seversiniz?']
  },
  {
    id: 'rush_hour',
    word: 'Rush hour',
    pos: 'noun',
    meaning: 'i    k   saati, trafi in yo un oldu u saat',
    definition: 'The time of day when traffic is heaviest.',
    ipa: '/ r    a  r/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Peak hour', meaning: 'yo un saat', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Off-peak', meaning: 'yo un olmayan saat', pos: 'noun' }
    ],
    collocations: ['morning rush hour', 'evening rush hour', 'avoid rush hour'],
    collocationMeanings: {
      'morning rush hour': 'sabah trafi i',
      'evening rush hour': 'ak am trafi i',
      'avoid rush hour': 'yo un trafik saatlerinden ka  nmak'
    },
    examples: ['I hate travelling in rush hour because everything is so slow.'],
    exampleTranslations: ['Trafi in yo un oldu u saatlerde seyahat etmekten nefret ediyorum   nk  her  ey  ok yava  ilerliyor.']
  },
  {
    id: 'salary',
    word: 'Salary',
    pos: 'noun',
    meaning: 'maa ',
    definition: 'A fixed amount of money paid to an employee, usually every month.',
    ipa: '/ s l. r.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'salaried', pos: 'adj', meaning: 'maa l ' }
    ],
    synonyms: [
      { word: 'Wage', meaning: ' cret (genelde haftal k)', pos: 'noun' },
      { word: 'Pay', meaning: ' deme', pos: 'noun' },
      { word: 'Income', meaning: 'gelir', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Expense', meaning: 'gider', pos: 'noun' }
    ],
    collocations: ['annual salary', 'high salary', 'earn a salary'],
    collocationMeanings: {
      'annual salary': 'y ll k maa ',
      'high salary': 'y ksek maa ',
      'earn a salary': 'maa  kazanmak'
    },
    examples: ['When I earn a salary, I can save to buy a house.'],
    exampleTranslations: ['Maa  almaya ba lad   mda, ev almak i in birikim yapabilirim.']
  },
  {
    id: 'salty',
    word: 'Salty',
    pos: 'adj',
    meaning: 'tuzlu',
    definition: 'Containing or tasting of salt.',
    ipa: '/ s l.ti/',
    level: 'intermediate',
    wordFamily: [
      { word: 'salt', pos: 'noun', meaning: 'tuz' }
    ],
    synonyms: [
      { word: 'Briny', meaning: 'tuzlu/deniz suyu gibi', pos: 'adj' },
      { word: 'Saline', meaning: 'tuzlu', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sweet', meaning: 'tatl ', pos: 'adj' },
      { word: 'Bland', meaning: 'tats z/yavan', pos: 'adj' }
    ],
    collocations: ['salty taste', 'salty sea air', 'too salty'],
    collocationMeanings: {
      'salty taste': 'tuzlu tad',
      'salty sea air': 'tuzlu deniz havas ',
      'too salty': ' ok tuzlu'
    },
    examples: ["The soup's a bit salty."],
    exampleTranslations: [' orba biraz tuzlu.']
  },
  {
    id: 'savoury',
    word: 'Savoury',
    pos: 'adj',
    meaning: 'tuzlu/baharatl  (tatl  olmayan)',
    definition: 'Tasting of salt or spice and not sweet.',
    ipa: '/ se .v r.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'savour', pos: 'verb', meaning: 'tad n    karmak' }
    ],
    synonyms: [
      { word: 'Salty', meaning: 'tuzlu', pos: 'adj' },
      { word: 'Spicy', meaning: 'baharatl ', pos: 'adj' },
      { word: 'Piquant', meaning: 'i tah a  c ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Sweet', meaning: 'tatl ', pos: 'adj' },
      { word: 'Sugary', meaning: ' ekerli', pos: 'adj' }
    ],
    collocations: ['savoury dish', 'savoury snack', 'savoury smell'],
    collocationMeanings: {
      'savoury dish': 'tuzlu/baharatl  yemek',
      'savoury snack': 'tuzlu at  t rmal k',
      'savoury smell': 'i tah a  c  baharat kokusu'
    },
    examples: ['I bought some savoury snacks.'],
    exampleTranslations: ['Baz  tuzlu at  t rmal klar ald m.']
  },
  {
    id: 'say_b1',
    word: 'Say',
    pos: 'verb',
    meaning: 's ylemek, demek',
    definition: 'To pronounce words or sounds.',
    ipa: '/se /',
    level: 'intermediate',
    wordFamily: [
      { word: 'saying', pos: 'noun', meaning: 'deyi /atas z ' }
    ],
    synonyms: [
      { word: 'Speak', meaning: 'konu mak', pos: 'verb' },
      { word: 'Tell', meaning: 'anlatmak/demek', pos: 'verb' },
      { word: 'State', meaning: 'belirtmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['say hello', 'say goodbye', 'say sorry'],
    collocationMeanings: {
      'say hello': 'selam vermek',
      'say goodbye': 'ho  a kal demek',
      'say sorry': ' z r dilemek'
    },
    examples: ["'Pleased to meet you,' he said with a smile."],
    exampleTranslations: ["'Tan  t   m za memnun oldum,' dedi g l mseyerek."]
  },
  {
    id: 'scene',
    word: 'Scene',
    pos: 'noun',
    meaning: 'sahne (film/tiyatro b l m )',
    definition: 'A part of a play or film in which the action stays in one place.',
    ipa: '/si n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'scenery', pos: 'noun', meaning: 'manzara/dekor' },
      { word: 'scenic', pos: 'adj', meaning: 'manzaral ' }
    ],
    synonyms: [
      { word: 'Episode', meaning: 'b l m', pos: 'noun' },
      { word: 'Sequence', meaning: 'sekans', pos: 'noun' },
      { word: 'Setting', meaning: 'mekan', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['crime scene', 'opening scene', 'movie scene'],
    collocationMeanings: {
      'crime scene': 'olay yeri',
      'opening scene': 'a  l   sahnesi',
      'movie scene': 'film sahnesi'
    },
    examples: ['They watched the opening scene of Macbeth.'],
    exampleTranslations: ['Macbeth in a  l   sahnesini izlediler.']
  },
  {
    id: 'schedule_b1',
    word: 'Schedule',
    pos: 'verb',
    meaning: 'program, takvim',
    definition: 'To arrange that something will happen at a particular time.',
    ipa: '/  ed .u l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'scheduler', pos: 'noun', meaning: 'programlay c ' }
    ],
    synonyms: [
      { word: 'Plan', meaning: 'planlamak', pos: 'verb' },
      { word: 'Arrange', meaning: 'd zenlemek', pos: 'verb' },
      { word: 'Organize', meaning: 'organize etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Cancel', meaning: 'iptal etmek', pos: 'verb' }
    ],
    collocations: ['busy schedule', 'on schedule', 'ahead of schedule'],
    collocationMeanings: {
      'busy schedule': 'yo un program',
      'on schedule': 'zaman nda/takvime uygun',
      'ahead of schedule': 'vaktinden  nce'
    },
    examples: ["What's on your schedule today?"],
    exampleTranslations: ['Bug n program nda ne var?']
  },
  {
    id: 'scientific_b1',
    word: 'Scientific',
    pos: 'adj',
    meaning: 'bilimsel',
    definition: 'Based on or characterized by the methods and principles of science.',
    ipa: '/ sa  n t f. k/',
    level: 'intermediate',
    wordFamily: [
      { word: 'science', pos: 'noun', meaning: 'bilim' },
      { word: 'scientist', pos: 'noun', meaning: 'bilim insan ' },
      { word: 'scientifically', pos: 'adverb', meaning: 'bilimsel olarak' }
    ],
    synonyms: [
      { word: 'Empirical', meaning: 'deneysel/bilimsel', pos: 'adj' },
      { word: 'Systematic', meaning: 'sistematik', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unscientific', meaning: 'bilimsel olmayan', pos: 'adj' }
    ],
    collocations: ['scientific research', 'scientific discovery', 'scientific proof'],
    collocationMeanings: {
      'scientific research': 'bilimsel ara t rma',
      'scientific discovery': 'bilimsel bulu ',
      'scientific proof': 'bilimsel kan t'
    },
    examples: ['Newton made an important scientific discovery.'],
    exampleTranslations: ['Newton  nemli bir bilimsel ke if yapt .']
  },
  {
    id: 'sensible',
    word: 'Sensible',
    pos: 'adj',
    meaning: 'mant kl , akl  ba  nda',
    definition: 'Having, using, or showing good sense or sound judgment.',
    ipa: '/ sen.s .b l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'sense', pos: 'noun', meaning: 'duyu/anlam' },
      { word: 'sensibly', pos: 'adverb', meaning: 'mant kl ca' },
      { word: 'sensibility', pos: 'noun', meaning: 'duyarl l k' }
    ],
    synonyms: [
      { word: 'Rational', meaning: 'mant kl ', pos: 'adj' },
      { word: 'Practical', meaning: 'pratik', pos: 'adj' },
      { word: 'Wise', meaning: 'bilgece/ak ll ca', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Foolish', meaning: 'aptalca', pos: 'adj' },
      { word: 'Silly', meaning: 'sa ma/aptalca', pos: 'adj' },
      { word: 'Irrational', meaning: 'mant ks z', pos: 'adj' }
    ],
    collocations: ['sensible advice', 'sensible decision', 'sensible approach'],
    collocationMeanings: {
      'sensible advice': 'mant kl  tavsiye',
      'sensible decision': 'ak lc  karar',
      'sensible approach': 'makul yakla  m'
    },
    examples: ["I don't see how any sensible person could agree with him."],
    exampleTranslations: ['Akl  ba  nda herhangi birinin ona nas l kat labilece ini anlam yorum.']
  },
  {
    id: 'set_goals',
    word: 'Set goals',
    pos: 'phrase',
    meaning: 'k sa ve uzun vadeli hedefler belirlemek',
    definition: 'To decide on aims to achieve in the near or distant future.',
    ipa: '/set    rt t  m  nd l   t  m    lz/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Plan objectives', meaning: 'hedefleri planlamak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['set goals for the year', 'need to set goals'],
    collocationMeanings: {
      'set goals for the year': 'y l i in hedefler belirlemek',
      'need to set goals': 'hedefler koymaya ihtiya  duymak'
    },
    examples: ["It's important to set short-term and long-term goals for your career."],
    exampleTranslations: ['Kariyeriniz i in k sa ve uzun vadeli hedefler belirlemek  nemlidir.']
  },
  {
    id: 'set_up',
    word: 'Set up',
    pos: 'phrasal verb',
    meaning: 'kurmak, d zenlemek',
    definition: 'To organize or plan something such as an event or system.',
    ipa: '/set  p/',
    level: 'intermediate',
    wordFamily: [
      { word: 'setup', pos: 'noun', meaning: 'kurulum/d zen' }
    ],
    synonyms: [
      { word: 'Establish', meaning: 'kurmak', pos: 'verb' },
      { word: 'Arrange', meaning: 'ayarlamak', pos: 'verb' },
      { word: 'Install', meaning: 'kurmak/y klemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Dismantle', meaning: 'par alamak/bozmak', pos: 'verb' },
      { word: 'Disband', meaning: 'da  tmak', pos: 'verb' }
    ],
    collocations: ['set up a business', 'set up a meeting', 'set up a system'],
    collocationMeanings: {
      'set up a business': 'i  kurmak',
      'set up a meeting': 'toplant  ayarlamak',
      'set up a system': 'sistem kurmak'
    },
    examples: ['A film night would be very easy to set up.'],
    exampleTranslations: ['Bir film gecesi d zenlemek  ok kolay olurdu.']
  },
  {
    id: 'set_yourself',
    word: 'Set yourself',
    pos: 'phrase',
    meaning: 'kendine (hedef vb.) koymak',
    definition: 'To give yourself a task or a challenge.',
    ipa: '/set j   self/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Assign oneself', meaning: 'kendine g rev atamak', pos: 'phrase' }
    ],
    antonyms: [],
    collocations: ['set yourself a goal', 'set yourself a task', 'set yourself high standards'],
    collocationMeanings: {
      'set yourself a goal': 'kendine bir hedef koymak',
      'set yourself a task': 'kendine bir g rev belirlemek',
      'set yourself high standards': 'kendine y ksek standartlar koymak'
    },
    examples: ['I like to set myself exercise targets for the week.'],
    exampleTranslations: ['Kendime haftal k egzersiz hedefleri koymay  seviyorum.']
  },
  {
    id: 'severe_delay',
    word: 'Severe delay',
    pos: 'phrase',
    meaning: 'ciddi gecikme',
    definition: 'A very long or serious postponement of an event.',
    ipa: '/s  v  r d  le /',
    level: 'intermediate',
    wordFamily: [
      { word: 'severity', pos: 'noun', meaning: ' iddet/ciddiyet' }
    ],
    synonyms: [
      { word: 'Major delay', meaning: 'b y k gecikme', pos: 'phrase' },
      { word: 'Heavy delay', meaning: 'yo un gecikme', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Minor delay', meaning: 'ufak gecikme', pos: 'phrase' },
      { word: 'On time', meaning: 'vaktinde', pos: 'phrase' }
    ],
    collocations: ['experience a severe delay', 'cause a severe delay'],
    collocationMeanings: {
      'experience a severe delay': 'ciddi bir gecikme ya amak',
      'cause a severe delay': 'ciddi gecikmeye sebep olmak'
    },
    examples: ['There is a severe delay on the motorway due to an accident.'],
    exampleTranslations: ['Kaza nedeniyle otoyolda ciddi bir gecikme var.']
  },
  {
    id: 'shout',
    word: 'Shout',
    pos: 'verb',
    meaning: 'ba  rmak, hayk rmak',
    definition: 'To speak extremely loudly, usually because of anger or excitement.',
    ipa: '/ a t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'shout', pos: 'noun', meaning: 'ba  r  ' },
      { word: 'shouter', pos: 'noun', meaning: 'ba  ran kimse' }
    ],
    synonyms: [
      { word: 'Yell', meaning: 'ba  rmak', pos: 'verb' },
      { word: 'Scream', meaning: '   l k atmak', pos: 'verb' },
      { word: 'Bellow', meaning: 'b   rmek/k kremek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Whisper', meaning: 'f s ldamak', pos: 'verb' },
      { word: 'Murmur', meaning: 'm r ldanmak', pos: 'verb' }
    ],
    collocations: ['shout at someone', 'shout for help', 'shout loudly'],
    collocationMeanings: {
      'shout at someone': 'birine ba  rmak',
      'shout for help': 'yard m i in ba  rmak',
      'shout loudly': 'y ksek sesle ba  rmak'
    },
    examples: ["'Stop!' he shouted."],
    exampleTranslations: ["'Dur!' diye ba  rd ."]
  },
  {
    id: 'situation_b1',
    word: 'Situation',
    pos: 'noun',
    meaning: 'durum, vaziyet',
    definition: 'The set of conditions that exist at a particular time and place.',
    ipa: '/ s t .u e .  n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'situate', pos: 'verb', meaning: 'konumland rmak' },
      { word: 'situated', pos: 'adj', meaning: 'konumlanm  ' }
    ],
    synonyms: [
      { word: 'Circumstance', meaning: ' art/durum', pos: 'noun' },
      { word: 'Condition', meaning: 'ko ul', pos: 'noun' },
      { word: 'State', meaning: 'h l/durum', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['difficult situation', 'current situation', 'win-win situation'],
    collocationMeanings: {
      'difficult situation': 'zor durum',
      'current situation': 'mevcut durum',
      'win-win situation': 'her iki taraf n da kazand    durum'
    },
    examples: ['If the situation had been different, their plan might have succeeded.'],
    exampleTranslations: ['Durum farkl  olsayd , planlar  ba ar l  olabilirdi.']
  },
  {
    id: 'slight_delay',
    word: 'Slight delay',
    pos: 'phrase',
    meaning: 'ufak gecikme',
    definition: 'A small postponement or hold-up.',
    ipa: '/sla t d  le /',
    level: 'intermediate',
    wordFamily: [
      { word: 'slightly', pos: 'adverb', meaning: 'hafif e/biraz' }
    ],
    synonyms: [
      { word: 'Minor delay', meaning: 'k   k gecikme', pos: 'phrase' },
      { word: 'Brief delay', meaning: 'k sa s reli gecikme', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Severe delay', meaning: 'ciddi gecikme', pos: 'phrase' },
      { word: 'Major delay', meaning: 'b y k gecikme', pos: 'phrase' }
    ],
    collocations: ['expect a slight delay', 'cause a slight delay'],
    collocationMeanings: {
      'expect a slight delay': 'ufak bir gecikme beklemek',
      'cause a slight delay': 'k   k bir gecikmeye neden olmak'
    },
    examples: ['There is a slight delay to the flight.'],
    exampleTranslations: ['U u ta ufak bir gecikme var.']
  },
  {
    id: 'sophisticated_b1',
    word: 'Sophisticated',
    pos: 'adj',
    meaning: 'geli mi , sofistike, k lt rl ',
    definition: 'Having a high degree of complexity; advanced.',
    ipa: '/s  f s.t .ke .t d/',
    level: 'intermediate',
    wordFamily: [
      { word: 'sophistication', pos: 'noun', meaning: 'k lt rl l k/karma  kl k' }
    ],
    synonyms: [
      { word: 'Advanced', meaning: 'ileri d zey', pos: 'adj' },
      { word: 'Complex', meaning: 'karma  k', pos: 'adj' },
      { word: 'Cultured', meaning: 'k lt rl ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Simple', meaning: 'basit', pos: 'adj' },
      { word: 'Primitive', meaning: 'ilkel', pos: 'adj' },
      { word: 'Naive', meaning: 'saf/deneyimsiz', pos: 'adj' }
    ],
    collocations: ['sophisticated technology', 'sophisticated taste', 'highly sophisticated'],
    collocationMeanings: {
      'sophisticated technology': 'ileri teknoloji',
      'sophisticated taste': 'se kin zevk',
      'highly sophisticated': 'son derece geli mi '
    },
    examples: ['There is highly sophisticated surveillance equipment.'],
    exampleTranslations: ['Son derece geli mi  (sofistike) g zetleme ekipmanlar  var.']
  },
  {
    id: 'sort',
    word: 'Sort',
    pos: 'verb',
    meaning: 's ralamak, ay klamak',
    definition: 'To arrange things in groups or in a particular order.',
    ipa: '/s  t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'sorter', pos: 'noun', meaning: 's ralay c ' }
    ],
    synonyms: [
      { word: 'Classify', meaning: 's n fland rmak', pos: 'verb' },
      { word: 'Categorize', meaning: 'kategorize etmek', pos: 'verb' },
      { word: 'Arrange', meaning: 'd zenlemek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Disorganize', meaning: 'da  tmak/kar  t rmak', pos: 'verb' },
      { word: 'Mix up', meaning: 'kar  t rmak', pos: 'phrasal verb' }
    ],
    collocations: ['sort by size', 'sort out a problem', 'sort through papers'],
    collocationMeanings: {
      'sort by size': 'boyuta g re s ralamak',
      'sort out a problem': 'bir sorunu halletmek',
      'sort through papers': 'ka  tlar  ay klamak/g zden ge irmek'
    },
    examples: ['Once the data is collected, the computer will sort it by date.'],
    exampleTranslations: ['Veriler topland ktan sonra bilgisayar bunlar  tarihe g re s ralayacakt r.']
  },
  {
    id: 'spectator',
    word: 'Spectator',
    pos: 'noun',
    meaning: 'izleyici (spor vb. i in)',
    definition: 'A person who watches a show, game, or other event.',
    ipa: '/spek te .t r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'spectacle', pos: 'noun', meaning: 'g rkemli olay' },
      { word: 'spectacular', pos: 'adj', meaning: 'g rkemli' }
    ],
    synonyms: [
      { word: 'Viewer', meaning: 'izleyici', pos: 'noun' },
      { word: 'Observer', meaning: 'g zlemci', pos: 'noun' },
      { word: 'Bystander', meaning: 'seyirci/yan nda duran', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Participant', meaning: 'kat l mc ', pos: 'noun' },
      { word: 'Player', meaning: 'oyuncu', pos: 'noun' }
    ],
    collocations: ['crowd of spectators', 'cheering spectators'],
    collocationMeanings: {
      'crowd of spectators': 'izleyici kitlesi',
      'cheering spectators': 'tezah rat yapan seyirciler'
    },
    examples: ['The final game attracted a crowd of over 50,000 spectators.'],
    exampleTranslations: ['Final ma   50.000 den fazla seyirci  ekti.']
  },
  {
    id: 'spot',
    word: 'Spot',
    pos: 'verb',
    meaning: 'fark etmek, g z ne ili mek',
    definition: 'To see or notice someone or something, usually because you are looking hard.',
    ipa: '/sp t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'spotless', pos: 'adj', meaning: 'tertemiz/lekesiz' },
      { word: 'spotted', pos: 'adj', meaning: 'benekli/fark edilmi ' }
    ],
    synonyms: [
      { word: 'Notice', meaning: 'fark etmek', pos: 'verb' },
      { word: 'Identify', meaning: 'tan mlamak', pos: 'verb' },
      { word: 'Detect', meaning: 'tespit etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Overlook', meaning: 'g zden ka  rmak', pos: 'verb' },
      { word: 'Miss', meaning: ' skalamak/fark etmemek', pos: 'verb' }
    ],
    collocations: ['spot the difference', 'spot a mistake', 'hard to spot'],
    collocationMeanings: {
      'spot the difference': 'fark  bulmak',
      'spot a mistake': 'bir hatay  fark etmek',
      'hard to spot': 'fark etmesi zor'
    },
    examples: ['Hugh was spotted by local police and had to leave quickly.'],
    exampleTranslations: ['Hugh yerel polis taraf ndan fark edildi ve h zla oradan ayr lmak zorunda kald .']
  },
  {
    id: 'stare',
    word: 'Stare',
    pos: 'verb',
    meaning: 'dik dik bakmak',
    definition: 'To look for a long time with the eyes wide open, especially when surprised, frightened, or thinking.',
    ipa: '/ste r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'stare', pos: 'noun', meaning: 'dik dik bak  ' }
    ],
    synonyms: [
      { word: 'Gaze', meaning: 'g z n  ay rmadan bakmak', pos: 'verb' },
      { word: 'Gape', meaning: 'a z  a  k bakmak', pos: 'verb' },
      { word: 'Glare', meaning: 'ters ters bakmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Glance', meaning: 'g z ucuyla bakmak', pos: 'verb' },
      { word: 'Peek', meaning: 'dikizlemek/k saca bakmak', pos: 'verb' },
      { word: 'Glimpse', meaning: 'anl k g rmek', pos: 'verb' }
    ],
    collocations: ['stare at someone', 'blank stare', 'stare in amazement'],
    collocationMeanings: {
      'stare at someone': 'birine dik dik bakmak',
      'blank stare': 'bo  bak  ',
      'stare in amazement': 'hayretle bakmak'
    },
    examples: ["It's rude to stare."],
    exampleTranslations: ['Dik dik bakmak kabal kt r.']
  },
  {
    id: 'start_off',
    word: 'Start off',
    pos: 'phrasal verb',
    meaning: 'ba lamak (bir i e/konuma)',
    definition: 'To begin by doing something, or to make something begin by doing something.',
    ipa: '/st  t  f/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Commence', meaning: 'ba lamak', pos: 'verb' },
      { word: 'Begin', meaning: 'ba lamak', pos: 'verb' },
      { word: 'Initiate', meaning: 'ba latmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Finish', meaning: 'bitirmek', pos: 'verb' },
      { word: 'End', meaning: 'sonland rmak', pos: 'verb' },
      { word: 'Conclude', meaning: 'sonu land rmak', pos: 'verb' }
    ],
    collocations: ['start off with', 'start off small'],
    collocationMeanings: {
      'start off with': 'ile ba lamak',
      'start off small': 'k   kten ba lamak'
    },
    examples: ['Many store managers started off as sales assistants.'],
    exampleTranslations: ['Bir ok ma aza m d r  i e sat   asistan  olarak ba lad .']
  },
  {
    id: 'sticky',
    word: 'Sticky',
    pos: 'adj',
    meaning: 'yap  kan',
    definition: 'Made of or covered with a substance that stays attached to anything it touches.',
    ipa: '/ st k.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'stick', pos: 'verb', meaning: 'yap  t rmak' },
      { word: 'stickiness', pos: 'noun', meaning: 'yap  kanl k' }
    ],
    synonyms: [
      { word: 'Adhesive', meaning: 'yap  t r c /yap  kan', pos: 'adj' },
      { word: 'Gluey', meaning: 'yap   yap  ', pos: 'adj' },
      { word: 'Gummy', meaning: 'yap  kan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Slippery', meaning: 'kaygan', pos: 'adj' },
      { word: 'Dry', meaning: 'kuru', pos: 'adj' },
      { word: 'Smooth', meaning: 'p r zs z', pos: 'adj' }
    ],
    collocations: ['sticky fingers', 'sticky tape', 'sticky situation'],
    collocationMeanings: {
      'sticky fingers': 'yap  kan parmaklar',
      'sticky tape': 'seloteyp/bant',
      'sticky situation': 'zor/ etrefilli durum'
    },
    examples: ['This honey is very sticky.'],
    exampleTranslations: ['Bu bal  ok yap  kan.']
  },
  {
    id: 'store',
    word: 'Store',
    pos: 'verb',
    meaning: 'depolamak, saklamak',
    definition: 'To keep or put something in a special place while it is not being used.',
    ipa: '/st  r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'storage', pos: 'noun', meaning: 'depolama' },
      { word: 'store', pos: 'noun', meaning: 'ma aza/depo' }
    ],
    synonyms: [
      { word: 'Stockpile', meaning: 'stok yapmak', pos: 'verb' },
      { word: 'Keep', meaning: 'tutmak/saklamak', pos: 'verb' },
      { word: 'Stash', meaning: 'gizlice saklamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discard', meaning: 'atmak', pos: 'verb' },
      { word: 'Spend', meaning: 'harcamak', pos: 'verb' },
      { word: 'Use', meaning: 'kullanmak', pos: 'verb' }
    ],
    collocations: ['store information', 'store energy', 'store data'],
    collocationMeanings: {
      'store information': 'bilgi depolamak',
      'store energy': 'enerji saklamak',
      'store data': 'veri kaydetmek'
    },
    examples: ['Nuclear waste is currently being stored close to the town.'],
    exampleTranslations: ['N kleer at klar  u anda kasaban n yak n nda depolan yor.']
  },

  {
    id: 'suitable_b1',
    word: 'Suitable',
    pos: 'adj',
    meaning: 'uygun',
    definition: 'Right or appropriate for a particular person, purpose, or situation.',
    ipa: '/ su .t .b l/',
    level: 'intermediate',
    wordFamily: [
      { word: 'suit', pos: 'verb', meaning: 'uymak/yak  mak' },
      { word: 'suitability', pos: 'noun', meaning: 'uygunluk' },
      { word: 'suitably', pos: 'adverb', meaning: 'uygun bir  ekilde' }
    ],
    synonyms: [
      { word: 'Appropriate', meaning: 'uygun', pos: 'adj' },
      { word: 'Proper', meaning: 'do ru/uygun', pos: 'adj' },
      { word: 'Fitting', meaning: 'yak  an/uygun', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Unsuitable', meaning: 'uygunsuz', pos: 'adj' },
      { word: 'Inappropriate', meaning: 'yersiz/uygunsuz', pos: 'adj' },
      { word: 'Unfit', meaning: 'elveri siz', pos: 'adj' }
    ],
    collocations: ['suitable for', 'not suitable', 'highly suitable'],
    collocationMeanings: {
      'suitable for': 'bir  ey i in uygun',
      'not suitable': 'uygun de il',
      'highly suitable': 'son derece uygun'
    },
    examples: ['The nearest suitable alternative was two miles away.'],
    exampleTranslations: ['En yak n uygun alternatif iki mil uzaktayd .']
  },
  {
    id: 'suitable_for_b1',
    word: 'Suitable for',
    pos: 'phrase',
    meaning: 'uygun olmak (-e uygun)',
    definition: 'Accepted as right or appropriate for a specific group or use.',
    ipa: '/ su .t .b l f  r/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Fit for', meaning: 'i in uygun/yeterli', pos: 'phrase' },
      { word: 'Geared towards', meaning: 'y nelik/uygun', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Ill-suited', meaning: 'yak  mayan/uymayan', pos: 'adj' }
    ],
    collocations: ['suitable for all ages', 'not suitable for children'],
    collocationMeanings: {
      'suitable for all ages': 'her ya a uygun',
      'not suitable for children': ' ocuklar i in uygun de il'
    },
    examples: ["The film wasn't suitable for a younger person."],
    exampleTranslations: ['Film daha gen  biri i in uygun de ildi.']
  },
  {
    id: 'superb',
    word: 'Superb',
    pos: 'adj',
    meaning: 'm kemmel,  st n kalite',
    definition: 'Of excellent quality; very good indeed.',
    ipa: '/su  p  b/',
    level: 'intermediate',
    wordFamily: [
      { word: 'superbly', pos: 'adverb', meaning: 'harika bir  ekilde' }
    ],
    synonyms: [
      { word: 'Excellent', meaning: 'm kemmel', pos: 'adj' },
      { word: 'Splendid', meaning: ' ahane', pos: 'adj' },
      { word: 'Magnificent', meaning: 'ihti aml ', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Terrible', meaning: 'berbat', pos: 'adj' },
      { word: 'Awful', meaning: ' ok k t ', pos: 'adj' },
      { word: 'Poor', meaning: 'zay f/k t ', pos: 'adj' }
    ],
    collocations: ['superb performance', 'superb view', 'superb quality'],
    collocationMeanings: {
      'superb performance': 'harika performans',
      'superb view': 'muazzam manzara',
      'superb quality': ' st n kalite'
    },
    examples: ['The Hotel Gardesana offers superb views of the lake.'],
    exampleTranslations: ['Hotel Gardesana muhte em g l manzaralar  sunmaktad r.']
  },
  {
    id: 'switch_off_completely',
    word: 'Switch off completely',
    pos: 'phrasal verb',
    meaning: 'kafay  tamamen bo altmak, irtibat  kesmek',
    definition: 'To stop giving your attention to someone or something.',
    ipa: '/sw t   f k m pli t.li/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Relax', meaning: 'rahatlamak', pos: 'verb' },
      { word: 'Unwind', meaning: 'gev emek/zihni bo altmak', pos: 'verb' },
      { word: 'Disconnect', meaning: 'ba lant y  kesmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Focus', meaning: 'odaklanmak', pos: 'verb' },
      { word: 'Concentrate', meaning: 'yo unla mak', pos: 'verb' }
    ],
    collocations: ['need to switch off completely'],
    collocationMeanings: {
      'need to switch off completely': 'zihni tamamen bo altmaya ihtiya  duymak'
    },
    examples: ['I went on holiday to switch off completely from writing the book.'],
    exampleTranslations: ['Kitap yazmaktan tamamen uzakla mak (kafay  bo altmak) i in tatile   kt m.']
  },
  {
    id: 'take_note_of',
    word: 'Take note of',
    pos: 'idiom',
    meaning: 'not etmek, dikkate almak',
    definition: 'To give attention to something you have heard or seen.',
    ipa: '/te k n  t  v/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Observe', meaning: 'g zlemlemek', pos: 'verb' },
      { word: 'Notice', meaning: 'fark etmek', pos: 'verb' },
      { word: 'Heed', meaning: 'kulak asmak/dikkate almak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' },
      { word: 'Disregard', meaning: 'ald rmamak', pos: 'verb' }
    ],
    collocations: ['take note of details', 'please take note'],
    collocationMeanings: {
      'take note of details': 'ayr nt lara dikkat etmek',
      'please take note': 'l tfen dikkate al n'
    },
    examples: ['I took note of what she said.'],
    exampleTranslations: ['S ylediklerini not ettim / dikkate ald m.']
  },
  {
    id: 'take_place',
    word: 'Take place',
    pos: 'idiom',
    meaning: 'ger ekle mek, olmak',
    definition: 'To happen, especially after being planned or arranged.',
    ipa: '/te k ple s/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Happen', meaning: 'olmak', pos: 'verb' },
      { word: 'Occur', meaning: 'meydana gelmek', pos: 'verb' },
      { word: 'Transpire', meaning: 'vuku bulmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Be cancelled', meaning: 'iptal olmak', pos: 'phrase' }
    ],
    collocations: ['take place in', 'will take place'],
    collocationMeanings: {
      'take place in': ' urada ger ekle mek',
      'will take place': 'olacak/yap lacak'
    },
    examples: ['The Olympics take place every four years.'],
    exampleTranslations: ['Olimpiyatlar her d rt y lda bir ger ekle ir.']
  },
  {
    id: 'task',
    word: 'Task',
    pos: 'noun',
    meaning: 'g rev, i ',
    definition: 'A piece of work to be done, especially one done regularly or unwillingly.',
    ipa: '/t  sk/',
    level: 'intermediate',
    wordFamily: [
      { word: 'taskmaster', pos: 'noun', meaning: 'i  yapt ran/disiplinli patron' }
    ],
    synonyms: [
      { word: 'Assignment', meaning: 'atama/ dev', pos: 'noun' },
      { word: 'Duty', meaning: 'g rev', pos: 'noun' },
      { word: 'Chore', meaning: 'angarya/ev i i', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Pastime', meaning: 'e lence/bo  vakit u ra  ', pos: 'noun' },
      { word: 'Leisure', meaning: 'serbest zaman', pos: 'noun' }
    ],
    collocations: ['difficult task', 'complete a task', 'daily task'],
    collocationMeanings: {
      'difficult task': 'zor g rev',
      'complete a task': 'bir i i tamamlamak',
      'daily task': 'g nl k i '
    },
    examples: ['My first real task was to prepare for the meeting.'],
    exampleTranslations: [' lk ger ek g revim toplant  i in haz rlanmakt .']
  },
  {
    id: 'tell_the_difference_between',
    word: 'Tell the difference between',
    pos: 'phrase',
    meaning: 'aras ndaki fark  s ylemek/ay rt etmek',
    definition: 'To be able to see how two or more things are different.',
    ipa: '/tel     d f. r. ns b  twi n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Distinguish', meaning: 'ay rt etmek', pos: 'verb' },
      { word: 'Differentiate', meaning: 'farkl la t rmak/ay rmak', pos: 'verb' },
      { word: 'Discriminate', meaning: 'ayr m yapmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Confuse', meaning: 'kar  t rmak', pos: 'verb' },
      { word: 'Mix up', meaning: 'birbirine kar  t rmak', pos: 'phrasal verb' }
    ],
    collocations: ['hard to tell the difference'],
    collocationMeanings: {
      'hard to tell the difference': 'aradaki fark  s ylemek zordur'
    },
    examples: ['How do you tell the difference between the kittens?'],
    exampleTranslations: ['Yavrular aras ndaki fark  nas l ay rt ediyorsun?']
  },
  {
    id: 'tempt',
    word: 'Tempt',
    pos: 'verb',
    meaning: 'akl n   elmek, cezbetmek',
    definition: 'To make someone want to have or do something, especially something wrong or unwise.',
    ipa: '/tempt/',
    level: 'intermediate',
    wordFamily: [
      { word: 'temptation', pos: 'noun', meaning: 'cezbedici  ey' },
      { word: 'tempting', pos: 'adj', meaning: ' ekici/ba tan   kar c ' }
    ],
    synonyms: [
      { word: 'Entice', meaning: 'ikna etmek/ayartmak', pos: 'verb' },
      { word: 'Lure', meaning: 'cezbetmek', pos: 'verb' },
      { word: 'Invite', meaning: 'davetiye   karmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Discourage', meaning: 'vazge irmek', pos: 'verb' },
      { word: 'Repel', meaning: 'itmek/tiksindirmek', pos: 'verb' },
      { word: 'Deter', meaning: 'cayd rmak', pos: 'verb' }
    ],
    collocations: ['tempt fate', 'tempted to do', 'tempt someone'],
    collocationMeanings: {
      'tempt fate': 'kaderini zorlamak',
      'tempted to do': 'bir  eyi yapmaya meyilli olmak',
      'tempt someone': 'birini cezbetmek'
    },
    examples: ['The shop windows were lit, tempting the late shoppers.'],
    exampleTranslations: ['Ma aza vitrinleri ayd nlat lm  t , ge  saatte al  veri  yapanlar n akl n   eliyordu.']
  },
  {
    id: 'think_outside_the_box',
    word: 'Think outside the box',
    pos: 'idiom',
    meaning: 'kal plar n d   nda d   nmek, yarat c  olmak',
    definition: 'To think imaginatively using new ideas instead of traditional ones.',
    ipa: '/   k  a t sa d    b ks/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Innovate', meaning: 'yenilik yapmak', pos: 'verb' },
      { word: 'Be creative', meaning: 'yarat c  olmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Follow tradition', meaning: 'geleneklere uymak', pos: 'phrase' },
      { word: 'Be conventional', meaning: 'al   lm   olmak', pos: 'phrase' }
    ],
    collocations: ['ability to think outside the box'],
    collocationMeanings: {
      'ability to think outside the box': 'yarat c  d   nebilme becerisi'
    },
    examples: ['We are getting nowhere, we need to think outside the box.'],
    exampleTranslations: ['Hi bir yere varam yoruz, kal plar n d   nda d   nmemiz gerekiyor.']
  },
  {
    id: 'throw_away',
    word: 'Throw away',
    pos: 'phrasal verb',
    meaning: 'atmak (  pe), f rlat p atmak',
    definition: 'To get rid of something that you do not want any more.',
    ipa: '/ r     we /',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Discard', meaning: 'atmak', pos: 'verb' },
      { word: 'Bin', meaning: '  pe atmak', pos: 'verb' },
      { word: 'Dispose of', meaning: 'elden   karmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Keep', meaning: 'tutmak', pos: 'verb' },
      { word: 'Save', meaning: 'saklamak', pos: 'verb' },
      { word: 'Preserve', meaning: 'korumak', pos: 'verb' }
    ],
    collocations: ['throw away rubbish', 'throw away a chance', 'throw away money'],
    collocationMeanings: {
      'throw away rubbish': '  p atmak',
      'throw away a chance': 'bir  ans  tepmek',
      'throw away money': 'paray  soka a atmak'
    },
    examples: ['Have you thrown the papers away?'],
    exampleTranslations: ['Ka  tlar    pe att n m ?']
  },
  {
    id: 'tidy_up',
    word: 'Tidy up',
    pos: 'phrasal verb',
    meaning: 'ortal    toplamak, d zenlemek',
    definition: 'To make a room or a group of things tidy by putting things in the right place.',
    ipa: '/ ta .di  p/',
    level: 'intermediate',
    wordFamily: [
      { word: 'tidiness', pos: 'noun', meaning: 'titizlik/d zen' }
    ],
    synonyms: [
      { word: 'Clean up', meaning: 'temizlemek', pos: 'phrasal verb' },
      { word: 'Straighten up', meaning: 'd zeltmek', pos: 'phrasal verb' },
      { word: 'Organize', meaning: 'organize etmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Mess up', meaning: 'da  tmak', pos: 'phrasal verb' },
      { word: 'Clutter', meaning: 'darmada  n etmek', pos: 'verb' }
    ],
    collocations: ['tidy up a room', 'tidy up a mess'],
    collocationMeanings: {
      'tidy up a room': 'oday  toplamak',
      'tidy up a mess': 'da  n kl    toplamak'
    },
    examples: ['Could you help me tidy up?'],
    exampleTranslations: ['Ortal    toplamama yard m edebilir misin?']
  },
  {
    id: 'tiny',
    word: 'Tiny',
    pos: 'adj',
    meaning: 'k   c k, minik',
    definition: 'Extremely small.',
    ipa: '/ ta .ni/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Minute', meaning: 'minnac k', pos: 'adj' },
      { word: 'Microscopic', meaning: 'mikroskobik', pos: 'adj' },
      { word: 'Small', meaning: 'k   k', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Huge', meaning: 'kocaman', pos: 'adj' },
      { word: 'Enormous', meaning: 'muazzam', pos: 'adj' },
      { word: 'Giant', meaning: 'dev', pos: 'adj' }
    ],
    collocations: ['tiny amount', 'tiny bit', 'tiny detail'],
    collocationMeanings: {
      'tiny amount': 'k   k miktar',
      'tiny bit': ' ok azc k',
      'tiny detail': 'k   k bir ayr nt '
    },
    examples: ['The floor was covered in tiny bits of paper.'],
    exampleTranslations: ['Yer k   c k ka  t par alar yla doluydu.']
  },
  {
    id: 'treat_yourself',
    word: 'Treat yourself',
    pos: 'phrase',
    meaning: 'kendini   martmak, kendine  smarlamak',
    definition: 'To do something special or buy something special for yourself.',
    ipa: '/tri t j   self/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Indulge', meaning: 'kendine ziyafet  ekmek/ayr cal k tan mak', pos: 'verb' },
      { word: 'Pamper yourself', meaning: 'kendini pohpohlamak/  martmak', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Deprive oneself', meaning: 'kendini mahrum b rakmak', pos: 'phrase' }
    ],
    collocations: ['treat yourself to something'],
    collocationMeanings: {
      'treat yourself to something': 'kendine bir  ey  smarlamak'
    },
    examples: ["Why don't you treat yourself to a holiday."],
    exampleTranslations: ['Neden kendine bir tatil  smarlam yorsun (kendini   martm yorsun).']
  },
  {
    id: 'trick',
    word: 'Trick',
    pos: 'verb',
    meaning: 'kand rmak, oyun oynamak',
    definition: 'To deceive someone, often as a part of a plan to get some advantage.',
    ipa: '/tr k/',
    level: 'intermediate',
    wordFamily: [
      { word: 'trickery', pos: 'noun', meaning: 'hilekarl k' },
      { word: 'tricky', pos: 'adj', meaning: ' etrefilli/zor' }
    ],
    synonyms: [
      { word: 'Deceive', meaning: 'aldatmak', pos: 'verb' },
      { word: 'Cheat', meaning: 'doland rmak/kand rmak', pos: 'verb' },
      { word: 'Fool', meaning: 'kand rmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Guide', meaning: 'rehberlik etmek', pos: 'verb' },
      { word: 'Help', meaning: 'yard m etmek', pos: 'verb' },
      { word: 'Be honest', meaning: 'd r st olmak', pos: 'phrase' }
    ],
    collocations: ['trick someone into', 'play a trick', 'confidence trick'],
    collocationMeanings: {
      'trick someone into': 'birini yapmaya kand rmak',
      'play a trick': 'oyun oynamak (kand rmak)',
      'confidence trick': 'doland r c l k'
    },
    examples: ["I suddenly realized that I'd been tricked."],
    exampleTranslations: ['Aniden kand r ld   m  fark ettim.']
  },
  {
    id: 'trophy',
    word: 'Trophy',
    pos: 'noun',
    meaning: 'kupa,  d l',
    definition: 'A prize, such as a large silver cup, given to the winner of a competition.',
    ipa: '/ tr  .fi/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Award', meaning: ' d l', pos: 'noun' },
      { word: 'Prize', meaning: ' d l', pos: 'noun' },
      { word: 'Cup', meaning: 'kupa', pos: 'noun' }
    ],
    antonyms: [],
    collocations: ['win a trophy', 'lift a trophy', 'championship trophy'],
    collocationMeanings: {
      'win a trophy': 'kupa kazanmak',
      'lift a trophy': 'kupay  kald rmak',
      'championship trophy': ' ampiyonluk kupas '
    },
    examples: ['Mexico has not lifted the trophy since 1975.'],
    exampleTranslations: ['Meksika 1975 ten beri kupay  kald rmad .']
  },
  {
    id: 'try_out',
    word: 'Try out',
    pos: 'phrasal verb',
    meaning: 'denemek (test etmek)',
    definition: 'To use or do something to see if it is suitable or if you like it.',
    ipa: '/tra  a t/',
    level: 'intermediate',
    wordFamily: [
      { word: 'trial', pos: 'noun', meaning: 'deneme/test' }
    ],
    synonyms: [
      { word: 'Test', meaning: 'test etmek', pos: 'verb' },
      { word: 'Experiment with', meaning: 'denemek', pos: 'phrase' },
      { word: 'Sample', meaning: 'tad na bakmak/denemek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['try out a new plan', 'try out for a team'],
    collocationMeanings: {
      'try out a new plan': 'yeni bir plan  denemek',
      'try out for a team': 'tak m se melerine girmek'
    },
    examples: ['John hopes to try out his new running shoes this weekend.'],
    exampleTranslations: ['John bu hafta sonu yeni ko u ayakkab lar n  denemeyi umuyor.']
  },
  {
    id: 'turn_dream_into_reality',
    word: 'Turn a dream into reality',
    pos: 'phrase',
    meaning: 'hayali ger e e d n  t rmek',
    definition: 'To make something that you have long desired actually happen.',
    ipa: '/t  n   dri m   n.tu ri  l. .ti/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Realize', meaning: 'ger ekle tirmek', pos: 'verb' },
      { word: 'Fulfill', meaning: 'yerine getirmek/ger ekle tirmek', pos: 'verb' },
      { word: 'Achieve', meaning: 'ba armak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Abandon a dream', meaning: 'hayalinden vazge mek', pos: 'phrase' }
    ],
    collocations: ['work to turn a dream into reality'],
    collocationMeanings: {
      'work to turn a dream into reality': 'hayali ger ekle tirmek i in  al  mak'
    },
    examples: ['She turned her dream of living in Paris into a reality.'],
    exampleTranslations: ['Paris te ya ama hayalini ger e e d n  t rd .']
  },
  {
    id: 'turn_down',
    word: 'Turn down',
    pos: 'phrasal verb',
    meaning: 'k smak (sesi/ s y ) veya reddetmek',
    definition: 'To refuse an offer or request OR to reduce the amount of sound, heat, etc.',
    ipa: '/t  n da n/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Reject', meaning: 'reddetmek', pos: 'verb' },
      { word: 'Refuse', meaning: 'geri  evirmek', pos: 'verb' },
      { word: 'Lower', meaning: 'azaltmak/k smak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Accept', meaning: 'kabul etmek', pos: 'verb' },
      { word: 'Increase', meaning: 'art rmak/a mak', pos: 'verb' }
    ],
    collocations: ['turn down the volume', 'turn down an offer', 'turn down the heat'],
    collocationMeanings: {
      'turn down the volume': 'sesi k smak',
      'turn down an offer': 'teklifi reddetmek',
      'turn down the heat': ' s y  k smak'
    },
    examples: ['Can you turn the music down a bit?'],
    exampleTranslations: ['M zi in sesini biraz k sabilir misin?']
  },
  {
    id: 'turn_up',
    word: 'Turn up',
    pos: 'phrasal verb',
    meaning: '  kagelmek, damlamak',
    definition: 'To arrive or appear, often unexpectedly.',
    ipa: '/t  n  p/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Arrive', meaning: 'varmak', pos: 'verb' },
      { word: 'Appear', meaning: 'g r nmek/ortaya   kmak', pos: 'verb' },
      { word: 'Show up', meaning: 'gelmek/ortaya   kmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Leave', meaning: 'ayr lmak', pos: 'verb' },
      { word: 'Disappear', meaning: 'yok olmak', pos: 'verb' }
    ],
    collocations: ['turn up late', 'unexpectedly turn up', 'turn up the volume'],
    collocationMeanings: {
      'turn up late': 'ge  gelmek',
      'unexpectedly turn up': 'aniden/beklenmedik  ekilde ortaya   kmak',
      'turn up the volume': 'sesi a mak'
    },
    examples: ['There is no need to book   just turn up on the night.'],
    exampleTranslations: ['Rezervasyon yapmaya gerek yok   o gece   kagelmeniz yeterli.']
  },
  {
    id: 'typical_of',
    word: 'Typical of',
    pos: 'adjective',
    meaning: 'tipik,  zg ',
    definition: 'Having all the characteristics that you would usually expect from someone or something.',
    ipa: '/ t p. .k l  v/',
    level: 'intermediate',
    wordFamily: [
      { word: 'type', pos: 'noun', meaning: 't r/tip' },
      { word: 'typically', pos: 'adverb', meaning: 'tipik olarak' }
    ],
    synonyms: [
      { word: 'Characteristic of', meaning: 'karakteristik/has', pos: 'phrase' },
      { word: 'Representative of', meaning: 'temsil eden', pos: 'phrase' }
    ],
    antonyms: [
      { word: 'Unusual', meaning: 'ola and   ', pos: 'adj' },
      { word: 'Abnormal', meaning: 'normal olmayan', pos: 'adj' },
      { word: 'Atypical', meaning: 'tipik olmayan', pos: 'adj' }
    ],
    collocations: ['typical of someone', 'typical behavior', 'typical example'],
    collocationMeanings: {
      'typical of someone': 'birine  zg ',
      'typical behavior': 'tipik davran  ',
      'typical example': 'tipik bir  rnek'
    },
    examples: ['The story is typical of this newspaper.'],
    exampleTranslations: ['Bu hikaye bu gazeteye  zg d r (onun tarz d r).']
  },
  {
    id: 'underpaid',
    word: 'Underpaid',
    pos: 'adjective',
    meaning: 'd   k  cretli, hakk   denmeyen',
    definition: 'Paid too little for the work that you do.',
    ipa: '/  n.d  pe d/',
    level: 'intermediate',
    wordFamily: [
      { word: 'pay', pos: 'verb/noun', meaning: ' demek/ deme' },
      { word: 'payment', pos: 'noun', meaning: ' deme' }
    ],
    synonyms: [
      { word: 'Undercompensated', meaning: 'yetersiz  deme alan', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Overpaid', meaning: ' ok y ksek  cretli', pos: 'adj' },
      { word: 'Well-paid', meaning: 'iyi  cretli', pos: 'adj' }
    ],
    collocations: ['underpaid workers', 'feel underpaid'],
    collocationMeanings: {
      'underpaid workers': 'd   k maa l  i  iler',
      'feel underpaid': 'd   k  cret ald   n  hissetmek'
    },
    examples: ['He works very hard but is underpaid.'],
    exampleTranslations: [' ok s k   al   yor ama d   k  cret al yor.']
  },
  {
    id: 'unique',
    word: 'Unique',
    pos: 'adjective',
    meaning: 'e siz, benzersiz',
    definition: 'Being the only existing one of its type or, more generally, unusual, or special.',
    ipa: '/ju  ni k/',
    level: 'intermediate',
    wordFamily: [
      { word: 'uniquely', pos: 'adverb', meaning: 'benzersiz bir  ekilde' },
      { word: 'uniqueness', pos: 'noun', meaning: 'e sizlik' }
    ],
    synonyms: [
      { word: 'Singular', meaning: 'tekil/e siz', pos: 'adj' },
      { word: 'Exceptional', meaning: 'istisnai', pos: 'adj' },
      { word: 'Unrivalled', meaning: 'rakipsiz', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Common', meaning: 'yayg n', pos: 'adj' },
      { word: 'Ordinary', meaning: 's radan', pos: 'adj' },
      { word: 'Normal', meaning: 'normal', pos: 'adj' }
    ],
    collocations: ['totally unique', 'unique style', 'unique opportunity'],
    collocationMeanings: {
      'totally unique': 'tamamen benzersiz',
      'unique style': 'e siz stil',
      'unique opportunity': 'e siz bir f rsat'
    },
    examples: ['They have a totally unique approach to staff training.'],
    exampleTranslations: ['Personel e itimi konusunda tamamen benzersiz bir yakla  m lar  var.']
  },
  {
    id: 'use_up',
    word: 'Use up',
    pos: 'phrasal verb',
    meaning: 't ketmek, bitirmek',
    definition: 'To finish a supply of something.',
    ipa: '/ju z  p/',
    level: 'intermediate',
    wordFamily: [
      { word: 'usable', pos: 'adj', meaning: 'kullan labilir' }
    ],
    synonyms: [
      { word: 'Exhaust', meaning: 't ketmek', pos: 'verb' },
      { word: 'Consume', meaning: 't ketmek', pos: 'verb' },
      { word: 'Deplete', meaning: 'bo altmak/azaltmak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Replenish', meaning: 'yeniden doldurmak', pos: 'verb' },
      { word: 'Save', meaning: 'biriktirmek/saklamak', pos: 'verb' }
    ],
    collocations: ['use up energy', 'use up all the resources', 'use up time'],
    collocationMeanings: {
      'use up energy': 'enerjiyi t ketmek',
      'use up all the resources': 't m kaynaklar  bitirmek',
      'use up time': 'vakit harcamak'
    },
    examples: ['We have used up all the sugar so you will need to get some more.'],
    exampleTranslations: ['T m  ekeri bitirdik, bu y zden biraz daha alman gerekecek.']
  },
  {
    id: 'warn',
    word: 'Warn',
    pos: 'verb',
    meaning: 'uyarmak, ikaz etmek',
    definition: 'To make someone realize a possible danger or problem, especially one in the future.',
    ipa: '/w  n/',
    level: 'intermediate',
    wordFamily: [
      { word: 'warning', pos: 'noun', meaning: 'uyar ' }
    ],
    synonyms: [
      { word: 'Alert', meaning: 'alarm vermek/uyarmak', pos: 'verb' },
      { word: 'Caution', meaning: 'tembihlemek/uyarmak', pos: 'verb' },
      { word: 'Notify', meaning: 'bildirmek', pos: 'verb' }
    ],
    antonyms: [],
    collocations: ['warn someone against', 'warn about', 'strongly warn'],
    collocationMeanings: {
      'warn someone against': 'birini  eye kar   uyarmak',
      'warn about': 'hakk nda uyarmak',
      'strongly warn': ' iddetle uyarmak'
    },
    examples: ['I warned you not to go to that party last night.'],
    exampleTranslations: ['D n gece o partiye gitmemen konusunda seni uyarm  t m.']
  },
  {
    id: 'waste_b1',
    word: 'Waste',
    pos: 'noun',
    meaning: 'israf, at k, bo a harcama',
    definition: 'An unnecessary or wrong use of money, substances, time, energy, or abilities.',
    ipa: '/we st/',
    level: 'intermediate',
    wordFamily: [
      { word: 'wasteful', pos: 'adj', meaning: 'm srif/savurgan' },
      { word: 'wastage', pos: 'noun', meaning: 'fire/israf' }
    ],
    synonyms: [
      { word: 'Squander', meaning: ' ar ur etmek', pos: 'verb' },
      { word: 'Misuse', meaning: 'k t ye kullanma', pos: 'noun' },
      { word: 'Refuse', meaning: '  p/at k', pos: 'noun' }
    ],
    antonyms: [
      { word: 'Saving', meaning: 'tasarruf', pos: 'noun' },
      { word: 'Thrift', meaning: 'tutum', pos: 'noun' },
      { word: 'Economy', meaning: 'ekonomi/tasarruf', pos: 'noun' }
    ],
    collocations: ['waste of time', 'waste of money', 'toxic waste'],
    collocationMeanings: {
      'waste of time': 'zaman kayb ',
      'waste of money': 'para israf ',
      'toxic waste': 'toksik at k'
    },
    examples: ['All this uneaten food   what a waste!'],
    exampleTranslations: ['T m bu yenmemi  yiyecekler   ne israf!']
  },
  {
    id: 'watery',
    word: 'Watery',
    pos: 'adjective',
    meaning: 'sulu, tats z, k vams z',
    definition: 'Containing or filled with water, or resembling water.',
    ipa: '/ w  .t r.i/',
    level: 'intermediate',
    wordFamily: [
      { word: 'water', pos: 'noun', meaning: 'su' }
    ],
    synonyms: [
      { word: 'Diluted', meaning: 'seyreltilmi /sulu', pos: 'adj' },
      { word: 'Thin', meaning: 'ak  kan/c v k', pos: 'adj' },
      { word: 'Weak', meaning: 'zay f/tats z', pos: 'adj' }
    ],
    antonyms: [
      { word: 'Concentrated', meaning: 'yo un/konsantre', pos: 'adj' },
      { word: 'Thick', meaning: 'koyu', pos: 'adj' }
    ],
    collocations: ['watery soup', 'watery eyes', 'pale and watery'],
    collocationMeanings: {
      'watery soup': 'sulu/tats z  orba',
      'watery eyes': 'ya l /nemli g zler',
      'pale and watery': 'soluk ve sulu'
    },
    examples: ['They sell very watery coffee.'],
    exampleTranslations: [' ok sulu (tats z) kahve sat yorlar.']
  },
  {
    id: 'whisper',
    word: 'Whisper',
    pos: 'verb',
    meaning: 'f s ldamak',
    definition: 'To speak very softly, using one s breath rather than one s throat.',
    ipa: '/ w s.p r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'whisper', pos: 'noun', meaning: 'f s lt ' }
    ],
    synonyms: [
      { word: 'Murmur', meaning: 'm r ldanmak', pos: 'verb' },
      { word: 'Mutter', meaning: 'm r ldanmak/s ylenmek', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Shout', meaning: 'ba  rmak', pos: 'verb' },
      { word: 'Yell', meaning: 'hayk rmak', pos: 'verb' },
      { word: 'Roar', meaning: 'k kremek/ba  rmak', pos: 'verb' }
    ],
    collocations: ['whisper softly', 'stage whisper', 'in a whisper'],
    collocationMeanings: {
      'whisper softly': 'yumu ak a f s ldamak',
      'stage whisper': 'sahne f s lt s ',
      'in a whisper': 'f s lt  ile'
    },
    examples: ["'When can I see you again?' he whispered softly."],
    exampleTranslations: ["'Seni tekrar ne zaman g rebilirim?' diye f s ldad  yumu ak a."]
  },
  {
    id: 'wonder',
    word: 'Wonder',
    pos: 'verb',
    meaning: 'merak etmek',
    definition: 'To ask yourself questions or express a wish to know about something.',
    ipa: '/ w n.d r/',
    level: 'intermediate',
    wordFamily: [
      { word: 'wonderful', pos: 'adj', meaning: 'harika' },
      { word: 'wonderfully', pos: 'adverb', meaning: 'harika bir  ekilde' }
    ],
    synonyms: [
      { word: 'Ponder', meaning: ' zerine d   nmek', pos: 'verb' },
      { word: 'Speculate', meaning: 'tahmin y r tmek/merak etmek', pos: 'verb' },
      { word: 'Query', meaning: 'sorgulamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Ignore', meaning: 'g rmezden gelmek', pos: 'verb' },
      { word: 'Know', meaning: 'bilmek', pos: 'verb' }
    ],
    collocations: ['wonder why', 'no wonder', 'wonder if'],
    collocationMeanings: {
      'wonder why': 'nedenini merak etmek',
      'no wonder': ' a mamal ',
      'wonder if': 'acaba ... m  diye merak etmek'
    },
    examples: ["'How did they find out?' she wondered."],
    exampleTranslations: ["'Nas l   rendiler?' diye merak etti."]
  },
  {
    id: 'work_out',
    word: 'Work out',
    pos: 'phrasal verb',
    meaning: '  zmek, anlamak (veya antrenman yapmak)',
    definition: 'To find a solution to a problem OR to do physical exercises.',
    ipa: '/w  k a t/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Solve', meaning: '  zmek', pos: 'verb' },
      { word: 'Exercise', meaning: 'egzersiz yapmak', pos: 'verb' },
      { word: 'Understand', meaning: 'anlamak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Fail', meaning: 'ba ar s z olmak', pos: 'verb' }
    ],
    collocations: ['work out a problem', 'work out at the gym', 'work out well'],
    collocationMeanings: {
      'work out a problem': 'bir sorunu   zmek',
      'work out at the gym': 'spor salonunda antrenman yapmak',
      'work out well': 'sonucun iyi bitmesi/iyi gitmek'
    },
    examples: ["I can't work out what to do."],
    exampleTranslations: ['Ne yapaca  m    zemiyorum.']
  },
  {
    id: 'work_towards_a_goal',
    word: 'Work towards a goal',
    pos: 'phrase',
    meaning: 'bir hedefe y nelik  al  mak',
    definition: 'To do activities that help make progress towards a desired achievement.',
    ipa: '/w  k t  w  rdz      l/',
    level: 'intermediate',
    wordFamily: [],
    synonyms: [
      { word: 'Strive for', meaning: ' abalamak', pos: 'phrase' },
      { word: 'Pursue', meaning: 'pe inden ko mak', pos: 'verb' }
    ],
    antonyms: [
      { word: 'Give up', meaning: 'vazge mek', pos: 'phrasal verb' }
    ],
    collocations: ['hard work towards a goal'],
    collocationMeanings: {
      'hard work towards a goal': 'bir hedef do rultusunda s k   al  ma'
    },
    examples: ['Daniel is working towards his goal of becoming a chef.'],
    exampleTranslations: ['Daniel a    olma hedefine do ru  al   yor.']
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
    meaning: 'Bunallmış, (duygu/iş altında) boğulmuş',
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