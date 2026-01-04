import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Level, UserProfile, LearningProgress } from '@/types/learning';

interface LearningContextType {
  userProfile: UserProfile | null;
  setLevel: (level: Level) => void;
  isOnboarded: boolean;
  completeOnboarding: (level: Level) => void;
  progress: Map<string, LearningProgress>;
  updateProgress: (wordId: string, correct: boolean) => void;
  getProblematicWords: () => string[];
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

const initialProfile: UserProfile = {
  id: 'user-1',
  level: 'intermediate',
  streak: 0,
  totalWordsLearned: 0,
  accuracyRate: 0,
  weeklyGoal: 50,
  weeklyProgress: 0,
};

export function LearningProvider({ children }: { children: ReactNode }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [progress, setProgress] = useState<Map<string, LearningProgress>>(new Map());

  useEffect(() => {
    const saved = localStorage.getItem('preparatory-master-profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      setUserProfile(parsed);
      setIsOnboarded(true);
    }
  }, []);

  useEffect(() => {
    const savedProgress = localStorage.getItem('preparatory-master-progress');
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setProgress(new Map(Object.entries(parsed)));
    }
  }, []);

  const setLevel = (level: Level) => {
    if (userProfile) {
      const updated = { ...userProfile, level };
      setUserProfile(updated);
      localStorage.setItem('preparatory-master-profile', JSON.stringify(updated));
    }
  };

  const completeOnboarding = (level: Level) => {
    const profile = { ...initialProfile, level };
    setUserProfile(profile);
    setIsOnboarded(true);
    localStorage.setItem('preparatory-master-profile', JSON.stringify(profile));
  };

  const updateProgress = (wordId: string, correct: boolean) => {
    setProgress(prev => {
      const newProgress = new Map(prev);
      const existing = newProgress.get(wordId);
      
      const now = new Date();
      const nextReview = new Date(now);
      
      if (existing) {
        const newCorrect = correct ? existing.correctCount + 1 : existing.correctCount;
        const newIncorrect = correct ? existing.incorrectCount : existing.incorrectCount + 1;
        const newStreak = correct ? existing.streak + 1 : 0;
        
        // Spaced repetition: increase interval based on streak
        const intervalDays = correct ? Math.pow(2, newStreak) : 1;
        nextReview.setDate(now.getDate() + intervalDays);
        
        newProgress.set(wordId, {
          ...existing,
          correctCount: newCorrect,
          incorrectCount: newIncorrect,
          lastReviewed: now,
          nextReview,
          streak: newStreak,
          isProblematic: newIncorrect >= 3,
        });
      } else {
        nextReview.setDate(now.getDate() + (correct ? 2 : 1));
        newProgress.set(wordId, {
          wordId,
          correctCount: correct ? 1 : 0,
          incorrectCount: correct ? 0 : 1,
          lastReviewed: now,
          nextReview,
          streak: correct ? 1 : 0,
          isProblematic: false,
        });
      }
      
      // Save to localStorage
      const toSave = Object.fromEntries(newProgress);
      localStorage.setItem('preparatory-master-progress', JSON.stringify(toSave));
      
      return newProgress;
    });

    // Update user stats
    if (userProfile && correct) {
      const updated = {
        ...userProfile,
        totalWordsLearned: userProfile.totalWordsLearned + 1,
        weeklyProgress: userProfile.weeklyProgress + 1,
      };
      setUserProfile(updated);
      localStorage.setItem('preparatory-master-profile', JSON.stringify(updated));
    }
  };

  const getProblematicWords = (): string[] => {
    return Array.from(progress.entries())
      .filter(([_, p]) => p.isProblematic)
      .map(([wordId]) => wordId);
  };

  return (
    <LearningContext.Provider
      value={{
        userProfile,
        setLevel,
        isOnboarded,
        completeOnboarding,
        progress,
        updateProgress,
        getProblematicWords,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}
