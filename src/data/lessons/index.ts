// src/data/lessons/index.ts
import { questionFormsData } from './question-forms'; 
import { adverbsFrequencyData } from './adverbs-frequency'; 
import { indefinitePronounsData } from './indefinite-pronouns';
import { presentSimpleVsContData } from './present-simple-vs-continuous';
// 2.1 Yeni veriyi içe aktar
import { adverbsDegreeData } from './adverbs-degree';

// Intermediate Dersleri
import { presentSimpleContinuousB1Data } from './present-simple-continuous-b1';
import { subjectObjectQuestionsData } from './subject-object-questions';
import { presentPerfectVsPastB1Data } from './present-perfect-vs-past-b1';
import { presentPastAbilityData } from './present-past-ability';
import { narrativeTensesData } from './narrative-tenses';
import { articlesQuantifiersData } from './articles-quantifiers';
import { futureFormsData } from './future-forms';
import { futurePredictionsData } from './future-predictions';
import { pastHabitsData } from './past-habits';
import { passiveAdvancedData } from './passive-advanced';
import { modalsObligationData } from './modals-obligation';
import { presentPerfectSimpleVsContData } from './present-perfect-simple-vs-cont';
import { hadToNeededToData } from './had-to-needed-to';
import { modalsDeductionData } from './modals-deduction';
import { doubleComparativesData } from './double-comparatives';
import { relativeClausesData } from './relative-clauses';
import { zeroFirstCondData } from './zero-first-cond';
import { conditionalsTypeTwoData } from './conditionals-type-2';
import { reportedSpeechData } from './reported-speech';
import { thirdConditionalData } from './third-conditional';
import { wishesRegretsData } from './wishes-regrets';
import { indirectQuestionsData } from './indirect-questions'; 
import { presentPerfectAdvancedData } from './present-perfect-advanced';

export const allLessons: Record<string, any> = {
  // --- PRE-INTERMEDIATE (A2) SEVİYESİ ---
  '1.1-question-forms': questionFormsData,
  '1.2-adverbs-frequency': adverbsFrequencyData,
  '1.3-indefinite-pronouns': indefinitePronounsData, 
  '2.1-adverbs-degree': adverbsDegreeData, // YENİ EKLENDİ
  'present-simple-vs-continuous': presentSimpleVsContData,

  // --- INTERMEDIATE (B1+) SEVİYESİ ---
  'b1-1.1-state-verbs': presentSimpleContinuousB1Data,
  'b1-1.2-subj-obj-ques': subjectObjectQuestionsData,
  'b1-2.1-perf-vs-past': presentPerfectVsPastB1Data,
  'b1-2.2-ability-advanced': presentPastAbilityData,
  'b1-3.1-narrative-tenses': narrativeTensesData,
  'b1-3.2-articles-quant': articlesQuantifiersData,
  'b1-4.1-future-forms': futureFormsData,
  'b1-4.2-future-predictions': futurePredictionsData,
  'b1-5.1-past-habits': pastHabitsData,
  'b1-5.2-passive-advanced': passiveAdvancedData,
  'b1-6.1-obligation-modals': modalsObligationData,
  'b1-6.2-perf-simple-cont': presentPerfectSimpleVsContData,
  'b1-ek-had-to-needed': hadToNeededToData,
  'b1-7.1-deduction': modalsDeductionData,
  'b1-7.2-the-more-comparisons': doubleComparativesData, 
  'b1-8.1-relative-clauses': relativeClausesData,
  'b1-8.2-zero-first-cond': zeroFirstCondData,
  'b1-9.1-second-conditional': conditionalsTypeTwoData, 
  'b1-9.2-reported-speech': reportedSpeechData, 
  'b1-10.1-third-conditional': thirdConditionalData,
  'b1-10.2-wish-if-only': wishesRegretsData,
  'b1-ek-indirect-ques': indirectQuestionsData,

  // --- ÖZEL ID'LER ---
  '6.3-pres-perf-particles': presentPerfectAdvancedData,
};