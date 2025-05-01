import React, { useState, useEffect } from "react";
import { allQuestions } from "./allQuestions";
import Header from "./components/Header";
import TagSelector from "./components/TagSelector";
import QuizControls from "./components/QuizControls";
import QuestionCard from "./components/QuestionCard";
import Results from "./components/Results";

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

  // Leer parámetros de la URL al cargar la aplicación
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Número de preguntas
    const questionsParam = urlParams.get('questions');
    if (questionsParam) {
      const num = parseInt(questionsParam);
      if (!isNaN(num) && num > 0) {
        setNumQuestions(num);
      }
    }

    // Tiempo por pregunta
    const timeParam = urlParams.get('time');
    if (timeParam) {
      const time = parseInt(timeParam);
      if (!isNaN(time) && time > 0) {
        setTimeLeft(time);
        setTimeLeftInitial(time);
      }
    }

    // Tema principal
    const mainTagParam = urlParams.get('mainTag');
    if (mainTagParam) {
      const mainTags = [...new Set(allQuestions.map((q) => q.group))];
      if (mainTags.includes(mainTagParam)) {
        setSelectedMainTag(mainTagParam);
      }
    }

    // Nivel
    const levelParam = urlParams.get('level');
    if (levelParam && selectedMainTag) {
      const levels = [...new Set(
        allQuestions
          .filter((q) => q.group === selectedMainTag)
          .map((q) => q.level)
      )].filter(Boolean);
      if (levels.includes(levelParam)) {
        setSelectedLevel(levelParam);
      }
    }

    // Subtemas
    const subTagsParam = urlParams.get('subTags');
    if (subTagsParam && selectedMainTag && selectedLevel) {
      const validSubTags = [...new Set(
        allQuestions
          .filter(
            (q) => q.group === selectedMainTag && q.level === selectedLevel
          )
          .map((q) => q.subtheme)
      )];
      const subTags = subTagsParam.split(',').filter(tag => validSubTags.includes(tag));
      if (subTags.length > 0) {
        setSelectedSubTags(subTags);
      }
    }

    // Marcar para inicio automático
    const startParam = urlParams.get('start');
    if (startParam === 'true') {
      setShouldAutoStart(true);
    }
  }, [selectedMainTag, selectedLevel]);

  // Efecto separado para manejar el inicio automático
  useEffect(() => {
    if (shouldAutoStart && selectedMainTag && selectedSubTags.length > 0 && !quizStarted) {
      const filtered = allQuestions.filter(
        (q) =>
          (selectedMainTag === null || q.group === selectedMainTag) &&
          (selectedSubTags.length === 0 ||
            (q.subtheme && selectedSubTags.includes(q.subtheme))) &&
          (selectedLevel === null || q.level === selectedLevel)
      );

      const shuffled = filtered
        .sort(() => 0.5 - Math.random())
        .slice(0, numQuestions);
      
      setQuestions(shuffled);
      setTimeLeftInitial(timeLeft);
      setQuizStarted(true);
      setTimeLeft(timeLeft);
    }
  }, [shouldAutoStart, selectedMainTag, selectedSubTags, selectedLevel, numQuestions, timeLeft, quizStarted]);

  // Updated to hide all divisions initially
  const mainTags = [...new Set(allQuestions.map((q) => q.group))];

  const levels = selectedMainTag
    ? [
        ...new Set(
          allQuestions
            .filter((q) => q.group === selectedMainTag)
            .map((q) => q.level)
        ),
      ].filter(Boolean)
    : [];

  const subTags =
    selectedMainTag && selectedLevel
      ? [
          ...new Set(
            allQuestions
              .filter(
                (q) => q.group === selectedMainTag && q.level === selectedLevel
              )
              .map((q) => q.subtheme)
          ),
        ]
      : [];

  useEffect(() => {
    console.log("Subtemas disponibles: ", subTags);
  }, [subTags]);

  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0 && current < questions.length) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (current < questions.length && selected !== null) {
      handleNext(); // Solo avanza si hay una respuesta seleccionada
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft, current, selected]);

  const startQuiz = () => {
    const filtered = allQuestions.filter(
      (q) =>
        (selectedMainTag === null || q.group === selectedMainTag) &&
        (selectedSubTags.length === 0 ||
          (q.subtheme && selectedSubTags.includes(q.subtheme))) &&
        (selectedLevel === null || q.level === selectedLevel)
    );

    const shuffled = filtered
      .sort(() => 0.5 - Math.random())
      .slice(0, numQuestions);
    setQuestions(shuffled);
    setTimeLeftInitial(timeLeft);
    setQuizStarted(true);
    setTimeLeft(timeLeft);
  };

  const handleNext = () => {
    const correctOption = questions[current].answer;
    let availableOptions = [...questions[current].options];

    // Si hay menos de 4 opciones, no cambiamos nada
    if (availableOptions.length <= 4) {
      setResults((prevResults) => [
        ...prevResults,
        {
          question: questions[current].question,
          selectedAnswer: availableOptions[selected],
          correctAnswer: availableOptions[correctOption],
          answer: availableOptions[correctOption], // Explicitly include the answer field
          explanation: questions[current].explanation,
          isCorrect: selected === correctOption,
          code: questions[current].code || "",
          subtheme: questions[current].subtheme || "Sin subtema",
        },
      ]);
      if (selected === correctOption) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      const correctAnswerText = availableOptions[correctOption];

      let incorrectOptions = availableOptions.filter(
        (_, index) => index !== correctOption
      );
      let selectedOptions = incorrectOptions
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      selectedOptions.push(correctAnswerText);
      selectedOptions = selectedOptions.sort(() => 0.5 - Math.random());

      const newCorrectIndex = selectedOptions.indexOf(correctAnswerText);

      setResults((prevResults) => [
        ...prevResults,
        {
          question: questions[current].question,
          selectedAnswer: selectedOptions[selected],
          correctAnswer: correctAnswerText,
          answer: correctAnswerText, // Explicitly include the answer field
          explanation: questions[current].explanation,
          isCorrect: selectedOptions[selected] === correctAnswerText,
          code: questions[current].code || "",
          subtheme: questions[current].subtheme || "Sin subtema",
        },
      ]);
      if (selectedOptions[selected] === correctAnswerText) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    // Avanzamos a la siguiente pregunta
    setSelected(null);
    setCurrent(current + 1);
    setTimeLeft(timeLeftInitial);
  };

  const toggleSubTag = (subTag) => {
    setSelectedSubTags((prevTags) => {
      if (prevTags.includes(subTag)) {
        return prevTags.filter((tag) => tag !== subTag);
      } else {
        return [...prevTags, subTag];
      }
    });
  };

  const handleSelectSubtopic = (subtopic) => {
    toggleSubTag(subtopic);
    console.log("Subtema seleccionado:", subtopic);
  };

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
                    className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-semibold ${
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
      <div className="container mx-auto">
        <QuestionCard
          current={current}
          questions={questions}
          selectedMainTag={selectedMainTag}
          timeLeft={timeLeft}
          timeLeftInitial={timeLeftInitial}
          selected={selected}
          setSelected={setSelected}
          handleNext={handleNext}
          isNextDisabled={selected === null} // El botón estará deshabilitado si no se ha seleccionado una respuesta
        />
      </div>
    </div>
  );
}
