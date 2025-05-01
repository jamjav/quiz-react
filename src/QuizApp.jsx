import React, { useState, useEffect, useMemo } from "react";
import { allQuestions } from "./allQuestions";
import Header from "./components/Header";
import TagSelector from "./components/TagSelector";
import QuizControls from "./components/QuizControls";
import QuestionCard from "./components/QuestionCard";
import Results from "./components/Results";
import Loader from "./components/Loader";

export default function QuizApp() {
  const [selectedMainTag, setSelectedMainTag] = useState(null);
  const [selectedSubTags, setSelectedSubTags] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [numQuestions, setNumQuestions] = useState(10);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timeLeftInitial, setTimeLeftInitial] = useState(30);
  const [shouldAutoStart, setShouldAutoStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChangingQuestion, setIsChangingQuestion] = useState(false);

  // Memoize filtered questions based on selections
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(
      (q) =>
        (selectedMainTag === null || q.group === selectedMainTag) &&
        (selectedSubTags.length === 0 ||
          (q.subtheme && selectedSubTags.includes(q.subtheme))) &&
        (selectedLevel === null || q.level === selectedLevel)
    );
  }, [selectedMainTag, selectedSubTags, selectedLevel]);

  // Memoize available tags and levels
  const mainTags = useMemo(() => [...new Set(allQuestions.map((q) => q.group))], []);
  const levels = useMemo(() => {
    if (!selectedMainTag) return [];
    return [...new Set(
      allQuestions
        .filter((q) => q.group === selectedMainTag)
        .map((q) => q.level)
    )].filter(Boolean);
  }, [selectedMainTag]);

  const subTags = useMemo(() => {
    if (!selectedMainTag || !selectedLevel) return [];
    return [...new Set(
      allQuestions
        .filter((q) => q.group === selectedMainTag && q.level === selectedLevel)
        .map((q) => q.subtheme)
    )];
  }, [selectedMainTag, selectedLevel]);

  // URL parameter handling
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Helper function to safely parse integers
    const safeParseInt = (value, defaultValue) => {
      const num = parseInt(value);
      return !isNaN(num) && num > 0 ? num : defaultValue;
    };

    // Set parameters with validation
    setNumQuestions(safeParseInt(urlParams.get('questions'), 10));
    const time = safeParseInt(urlParams.get('time'), 30);
    setTimeLeft(time);
    setTimeLeftInitial(time);

    // Set main tag if valid
    const mainTagParam = urlParams.get('mainTag');
    if (mainTagParam && mainTags.includes(mainTagParam)) {
      setSelectedMainTag(mainTagParam);
    }

    // Set level if valid
    const levelParam = urlParams.get('level');
    if (levelParam && levels.includes(levelParam)) {
      setSelectedLevel(levelParam);
    }

    // Set sub tags if valid
    const subTagsParam = urlParams.get('subTags');
    if (subTagsParam) {
      const validSubTags = subTagsParam.split(',').filter(tag => subTags.includes(tag));
      if (validSubTags.length > 0) {
        setSelectedSubTags(validSubTags);
      }
    }

    // Set auto start
    if (urlParams.get('start') === 'true') {
      setShouldAutoStart(true);
    }
  }, [mainTags, levels, subTags]);

  // Auto start handling
  useEffect(() => {
    if (shouldAutoStart && selectedMainTag && selectedSubTags.length > 0 && !quizStarted) {
      const shuffled = filteredQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, numQuestions);
      
      setQuestions(shuffled);
      setQuizStarted(true);
      setTimeLeft(timeLeftInitial);
    }
  }, [shouldAutoStart, selectedMainTag, selectedSubTags, filteredQuestions, numQuestions, timeLeftInitial, quizStarted]);

  // Timer effect
  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0 && current < questions.length) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (current < questions.length && selected !== null) {
      handleNext();
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft, current, selected]);

  const startQuiz = () => {
    setIsLoading(true);
    setTimeout(() => {
      const shuffled = filteredQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, numQuestions);
      setQuestions(shuffled);
      setQuizStarted(true);
      setTimeLeft(timeLeftInitial);
      setIsLoading(false);
    }, 1500);
  };

  const handleNext = () => {
    setIsChangingQuestion(true);
    const currentQuestion = questions[current];
    const correctOption = currentQuestion.answer;
    const availableOptions = [...currentQuestion.options];
    const correctAnswerText = availableOptions[correctOption];

    const result = {
      question: currentQuestion.question,
      selectedAnswer: availableOptions[selected],
      correctAnswer: correctAnswerText,
      answer: correctAnswerText,
      explanation: currentQuestion.explanation,
      isCorrect: selected === correctOption,
      code: currentQuestion.code || "",
      subtheme: currentQuestion.subtheme || "Sin subtema",
    };

    setResults((prevResults) => [...prevResults, result]);
    if (selected === correctOption) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      setSelected(null);
      setCurrent(current + 1);
      setTimeLeft(timeLeftInitial);
      setIsChangingQuestion(false);
    }, 500); // Reducido a 500ms
  };

  const toggleSubTag = (subTag) => {
    setSelectedSubTags((prevTags) => {
      if (prevTags.includes(subTag)) {
        return prevTags.filter((tag) => tag !== subTag);
      }
      return [...prevTags, subTag];
    });
  };

  const handleSelectSubtopic = (subtopic) => {
    toggleSubTag(subtopic);
    console.log("Subtema seleccionado:", subtopic);
  };

  if (isLoading) {
    return <Loader message="Preparando el quiz..." />;
  }

  if (isChangingQuestion) {
    return <Loader message="Siguiente pregunta..." />;
  }

  if (!quizStarted) {
    return (
      <div className="fixed inset-0 bg-gray-900">
        <div className="h-full w-full flex flex-col">
          <div className="flex-none">
            <Header />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-4">
              <div className="space-y-4">
                <QuizControls
                  timeLeft={timeLeft}
                  numQuestions={numQuestions}
                  setTimeLeft={setTimeLeft}
                  setNumQuestions={setNumQuestions}
                  startQuiz={startQuiz}
                  selectedMainTag={selectedMainTag}
                  selectedSubTags={selectedSubTags}
                  showStartButton={false}
                />
                <TagSelector
                  mainTags={mainTags}
                  levels={levels}
                  subTags={subTags}
                  selectedMainTag={selectedMainTag}
                  selectedLevel={selectedLevel}
                  selectedSubTags={selectedSubTags}
                  setSelectedMainTag={setSelectedMainTag}
                  setSelectedLevel={setSelectedLevel}
                  setSelectedSubTags={setSelectedSubTags}
                  handleSelectSubtopic={handleSelectSubtopic}
                />
                <div className="flex justify-center mt-6">
                  <button
                    onClick={startQuiz}
                    disabled={
                      selectedMainTag === null || selectedSubTags.length === 0
                    }
                    className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
                      selectedMainTag === null || selectedSubTags.length === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Comenzar Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (current >= questions.length || timeLeft <= 0) {
    return (
      <Results
        results={results}
        score={score}
        totalQuestions={questions.length}
        correctAnswers={score}
        incorrectAnswers={questions.length - score}
        quizParams={{
          questions: numQuestions,
          time: timeLeftInitial,
          mainTag: selectedMainTag,
          level: selectedLevel,
          subTags: selectedSubTags.join(',')
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <QuestionCard
          current={current}
          questions={questions}
          selectedMainTag={selectedMainTag}
          timeLeft={timeLeft}
          timeLeftInitial={timeLeftInitial}
          selected={selected}
          setSelected={setSelected}
          handleNext={handleNext}
          isNextDisabled={selected === null}
        />
      </div>
    </div>
  );
}
