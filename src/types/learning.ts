export type Level = 'pre-intermediate' | 'intermediate' | 'upper-intermediate';

// Kelime Ailesi (Related Forms) üyeleri için yardımcı interface
export interface WordFamilyMember {
  word: string;
  pos: string;
  meaning: string;
}

// Eş ve Zıt Anlamlılar için yardımcı interface (Tıklayınca anlam göstermek için)
export interface WordRelation {
  word: string;
  meaning: string;
  pos?: string;
}

export interface VocabularyWord {
  id: string;
  word: string;
  meaning: string; 
  definition: string;
  ipa: string;
  pos: 'verb' | 'noun' | 'adj' | 'adv' | 'phrase' | string;
  examples: string[];
  exampleTranslations?: string[]; 
  level: Level;
  audioUK?: string;
  audioUS?: string;
  usageNotes?: string;
  collocations?: string[];
  collocationMeanings?: Record<string, string>; 
  relatedWords?: string[];
  
  // --- PROFESYONEL VERİ ALANLARI ---
  wordFamily?: WordFamilyMember[]; // Tıklayınca 'meaning' alanını gösterebilirsin
  synonyms?: WordRelation[];      // Artık string değil, word ve meaning içeren obje
  antonyms?: WordRelation[];      // Artık string değil, word ve meaning içeren obje
}

export interface LearningProgress {
  wordId: string;
  correctCount: number;
  incorrectCount: number;
  lastReviewed: Date;
  nextReview: Date;
  isProblematic: boolean;
  streak: number;
}

export interface UserProfile {
  id: string;
  level: Level;
  streak: number;
  totalWordsLearned: number;
  accuracyRate: number;
  weeklyGoal: number;
  weeklyProgress: number;
}

export interface GameResult {
  correct: boolean;
  timeTaken: number;
  wordId: string;
  gameType: GameType;
}

export type GameType = 
  | 'matching'
  | 'listening'
  | 'fill-blank'
  | 'sentence-completion'
  | 'comprehension'
  | 'speed-challenge';

export interface LearningSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  wordsReviewed: string[];
  accuracy: number;
  gameResults: GameResult[];
}