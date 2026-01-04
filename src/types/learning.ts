export type Level = 'pre-intermediate' | 'intermediate' | 'upper-intermediate';

export interface VocabularyWord {
  id: string;
  word: string;
  definition: string;
  ipa: string;
  examples: string[];
  level: Level;
  audioUK?: string;
  audioUS?: string;
  usageNotes?: string;
  collocations?: string[];
  relatedWords?: string[];
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
