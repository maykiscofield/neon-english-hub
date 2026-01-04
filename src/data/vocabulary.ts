import { VocabularyWord, Level } from '@/types/learning';

export const vocabularyData: VocabularyWord[] = [
  // Pre-Intermediate
  {
    id: 'accomplish',
    word: 'accomplish',
    definition: 'to succeed in doing or completing something, especially something that requires effort',
    ipa: '/əˈkʌm.plɪʃ/',
    examples: [
      'She accomplished her goal of running a marathon.',
      'We need to accomplish this task before Friday.',
      'He felt proud of what he had accomplished.',
    ],
    level: 'pre-intermediate',
    usageNotes: 'Often used with goals, tasks, or missions. More formal than "finish" or "complete".',
    collocations: ['accomplish a goal', 'accomplish a task', 'accomplish a mission'],
  },
  {
    id: 'apparent',
    word: 'apparent',
    definition: 'easy to see or understand; obvious',
    ipa: '/əˈpær.ənt/',
    examples: [
      'It was apparent that she was unhappy.',
      'The difference between them is quite apparent.',
      'For no apparent reason, he started laughing.',
    ],
    level: 'pre-intermediate',
    usageNotes: 'Can also mean "seeming" (appearing to be true but possibly not). Context determines meaning.',
    collocations: ['become apparent', 'immediately apparent', 'no apparent reason'],
  },
  {
    id: 'capable',
    word: 'capable',
    definition: 'having the ability or qualities necessary to do something',
    ipa: '/ˈkeɪ.pə.bəl/',
    examples: [
      'She is capable of handling difficult situations.',
      'He proved himself capable of leading the team.',
      'The device is capable of processing large amounts of data.',
    ],
    level: 'pre-intermediate',
    usageNotes: 'Usually followed by "of + -ing" form. Describes potential ability.',
    collocations: ['capable of', 'highly capable', 'perfectly capable'],
  },

  // Intermediate
  {
    id: 'ambiguous',
    word: 'ambiguous',
    definition: 'having more than one possible meaning; not clear or decided',
    ipa: '/æmˈbɪɡ.ju.əs/',
    examples: [
      'The ending of the film is deliberately ambiguous.',
      'His response was ambiguous and hard to interpret.',
      'The contract contains some ambiguous language.',
    ],
    level: 'intermediate',
    usageNotes: 'Often describes language, statements, or situations that can be interpreted in multiple ways.',
    collocations: ['deliberately ambiguous', 'morally ambiguous', 'ambiguous statement'],
    relatedWords: ['ambiguity', 'unambiguous'],
  },
  {
    id: 'contemplate',
    word: 'contemplate',
    definition: 'to think deeply about something for a long time; to consider as a possibility',
    ipa: '/ˈkɒn.təm.pleɪt/',
    examples: [
      'She sat by the window, contemplating her future.',
      'I never contemplated leaving my job.',
      'He contemplated the painting for several minutes.',
    ],
    level: 'intermediate',
    usageNotes: 'Implies deep, serious thought. Can mean both "think about" and "consider doing".',
    collocations: ['contemplate the future', 'contemplate action', 'sit and contemplate'],
    relatedWords: ['contemplation', 'contemplative'],
  },
  {
    id: 'reluctant',
    word: 'reluctant',
    definition: 'not willing to do something; hesitant',
    ipa: '/rɪˈlʌk.tənt/',
    examples: [
      'She was reluctant to accept the offer.',
      'He seemed reluctant to discuss the matter.',
      'The company is reluctant to invest in new technology.',
    ],
    level: 'intermediate',
    usageNotes: 'Usually followed by "to + infinitive". Suggests unwillingness but not complete refusal.',
    collocations: ['reluctant to admit', 'reluctant participant', 'somewhat reluctant'],
    relatedWords: ['reluctance', 'reluctantly'],
  },

  // Upper-Intermediate
  {
    id: 'convoluted',
    word: 'convoluted',
    definition: 'extremely complex and difficult to follow; having many twists and turns',
    ipa: '/ˈkɒn.və.luː.tɪd/',
    examples: [
      'The plot of the novel is extremely convoluted.',
      'She gave a convoluted explanation that nobody understood.',
      'The legal process is unnecessarily convoluted.',
    ],
    level: 'upper-intermediate',
    usageNotes: 'Often has negative connotations, suggesting unnecessary complexity.',
    collocations: ['convoluted plot', 'convoluted argument', 'convoluted explanation'],
  },
  {
    id: 'epitomize',
    word: 'epitomize',
    definition: 'to be a perfect example of a quality or type',
    ipa: '/ɪˈpɪt.ə.maɪz/',
    examples: [
      'His career epitomizes the American dream.',
      'This building epitomizes modern architecture.',
      'She epitomizes grace under pressure.',
    ],
    level: 'upper-intermediate',
    usageNotes: 'Used when someone or something represents the best or most typical example.',
    collocations: ['epitomize success', 'epitomize the spirit of', 'perfectly epitomize'],
    relatedWords: ['epitome'],
  },
  {
    id: 'substantiate',
    word: 'substantiate',
    definition: 'to provide evidence or proof to support a claim or statement',
    ipa: '/səbˈstæn.ʃi.eɪt/',
    examples: [
      'Can you substantiate these allegations?',
      'The evidence substantiates his theory.',
      'She was unable to substantiate her claims.',
    ],
    level: 'upper-intermediate',
    usageNotes: 'Formal word often used in academic, legal, or journalistic contexts.',
    collocations: ['substantiate a claim', 'substantiate allegations', 'evidence to substantiate'],
    relatedWords: ['substantiation', 'unsubstantiated'],
  },
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
