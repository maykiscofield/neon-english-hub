// --- PRE-INTERMEDIATE (A2) SEVİYESİ ---
import { questionFormsData } from './question-forms'; 
import { adverbsFrequencyData } from './adverbs-frequency'; 
import { indefinitePronounsData } from './indefinite-pronouns';
import { adverbsDegreeData } from './adverbs-degree';
import { presentSimpleVsContData } from './present-simple-vs-continuous'; 
import { pastSimpleData } from './past-simple';
import { adjectivesEdIngData } from './adjectives-ed-ing';
import { quantifiersBasicData } from './quantifiers-basic';
import { pastContPastSimpleData } from './past-cont-past-simple';
import { verbIngToInfData } from './verb-ing-to-inf';
import { futurePlansData } from './future-plans';
import { predictionsWillMayData } from './predictions-will-may';
import { subjectObjectQuestionsData } from './subj-obj-questions';
import { abilityPermissionData } from './ability-permission';
import { obligationPermissionData } from './obligation-permission';
import { presentPerfectForSinceData } from './present-perfect-for-since';
import { quantifiersTooEnoughData } from './quantifiers-too-enough';
import { gerundFormsData } from './gerund-forms';
import { presentPerfectParticlesData } from './present-perfect-particles';
import { articlesData } from './articles';
import { usedToData } from './used-to';
import { reflexivePronounsData } from './reflexive-pronouns';
import { purposeInfinitivesData } from './purpose-infinitives';
import { firstConditionalData } from './first-conditional';
import { secondConditionalData } from './second-conditional';
import { relativeClausesDefiningData } from './relative-clauses-defining'; 
import { gerundsPrepositionsData } from './gerunds-prepositions'; 
import { comparisonsAdvancedData } from './comparisons-advanced';
import { needToNecessityData } from './need-to-necessity';
import { passiveBasicData } from './passive-basic';
import { adjInfinitiveData } from './adj-infinitive';
import { evenUsageData } from './even-usage';
import { reportedSpeechBasicData } from './reported-speech-basic';
import { pastPerfectData } from './past-perfect-basic'; 
import { shallOffersData } from './shall-offers';

// --- INTERMEDIATE (B1+) SEVİYESİ ---
import { presentSimpleContinuousB1Data } from './present-simple-continuous-b1';
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
// image_82600b.png hatasını çözen import:
import { subjectObjectQuestionssData } from './subject-object-questionss'; 

// FİNAL SİMÜLASYONLARI AKTİF EDİLDİ

// --- EKSTRALAR ---
import { presentPerfectAdvancedData } from './present-perfect-advanced';

export const allLessons: Record<string, any> = {
  // --- A2 ID'leri ---
  '1.1-question-forms': questionFormsData,
  '1.2-adverbs-frequency': adverbsFrequencyData,
  '1.3-indefinite-pronouns': indefinitePronounsData, 
  '2.1-adverbs-degree': adverbsDegreeData,
  'present-simple-vs-continuous': presentSimpleVsContData,
  '2.3-past-simple': pastSimpleData,
  'ek-adjectives-ed-ing': adjectivesEdIngData,
  '3.1-quantifiers-basic': quantifiersBasicData,
  '3.2-past-cont-past-simple': pastContPastSimpleData,
  '3.3-verb-ing-to-inf': verbIngToInfData,
  '4.1-future-plans': futurePlansData,
  '4.2-predictions-will-may': predictionsWillMayData,
  '4.3-subj-obj-questions': subjectObjectQuestionsData,
  '5.1-ability-permission': abilityPermissionData,
  '5.2-obligation-permission': obligationPermissionData,
  '5.3-present-perfect-since': presentPerfectForSinceData,
  '6.1-quantifiers-too-enough': quantifiersTooEnoughData,
  '6.2-ing-forms-gerund': gerundFormsData, 
  '6.3-pres-perf-particles': presentPerfectParticlesData,
  '7.1-articles': articlesData,
  '7.2-used-to': usedToData,
  '8.1-reflexive-pronouns': reflexivePronounsData,
  '8.2-purpose-infinitives': purposeInfinitivesData,
  '8.3-first-conditional': firstConditionalData,
  '9.1-second-conditional': secondConditionalData,
  '9.2-relative-clauses-defining': relativeClausesDefiningData,
  '9.3-gerunds-prepositions': gerundsPrepositionsData,
  '10.1-comparisons': comparisonsAdvancedData,
  '10.3-need-to': needToNecessityData,
  '11.1-passive-simple': passiveBasicData,
  '11.2-adj-to-infinitive': adjInfinitiveData,
  '11.3-even-usage': evenUsageData,
  '12.1-reported-speech-basic': reportedSpeechBasicData,
  '12.2-past-perfect': pastPerfectData,
  '12.3-shall-offers': shallOffersData,

  // --- Intermediate (B1+) ID'leri ---
  'b1-1.1-state-verbs': presentSimpleContinuousB1Data,
  // image_82600b.png hatasını çözen anahtar eşleşmesi:
  'b1-1.2-subj-obj-ques': subjectObjectQuestionssData, 
  'b1-ek-indirect-ques': indirectQuestionsData,
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

  // --- Intermediate Final Simülasyonları ---

  // 'b1-final-sim-2': b1FinalSim2Data,
  // 'b1-final-sim-3': b1FinalSim3Data,

  'b2-2.1-perf-simple-cont': presentPerfectAdvancedData, 
};