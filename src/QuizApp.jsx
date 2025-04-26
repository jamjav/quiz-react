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
    } else if (current < questions.length) {
      handleNext(); // Avanza automáticamente a la siguiente pregunta cuando el tiempo llega a 0
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft, current]);

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
      <div className="flex justify items-center min-h-screen bg-gray-900 text-white">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80">
          <Header />
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
          <QuizControls
            timeLeft={timeLeft}
            numQuestions={numQuestions}
            setTimeLeft={setTimeLeft}
            setNumQuestions={setNumQuestions}
            startQuiz={startQuiz}
            selectedMainTag={selectedMainTag}
            selectedSubTags={selectedSubTags}
          />
        </div>
      </div>
    );
  }

  if (current >= questions.length || timeLeft <= 0) {
    return (
      <Results
        results={results}
        score={score}
        timeLeft={timeLeft}
        onRestart={() => window.location.reload()}
        allQuestions={allQuestions}
        selectedMainTag={selectedMainTag}
        selectedSubTags={selectedSubTags}
        selectedLevel={selectedLevel}
        numQuestions={numQuestions}
        setQuestions={setQuestions}
        setCurrent={setCurrent}
        setScore={setScore}
        setResults={setResults}
        setQuizStarted={setQuizStarted}
        timeLeftInitial={timeLeftInitial}
        setTimeLeft={setTimeLeft}
      />
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
        <QuestionCard
          current={current}
          questions={questions}
          selectedMainTag={selectedMainTag}
          timeLeft={timeLeft}
          timeLeftInitial={timeLeftInitial}
          selected={selected}
          setSelected={setSelected}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}
