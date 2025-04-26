import React, { useState, useEffect } from "react";
import { allQuestions } from "./allQuestions";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ErrorBoundary from "./components/ErrorBoundary"; // adjust the path as needed

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
          <h1 className="text-2xl font-bold mb-4 text-center">
            Selecciona el tema y los subtemas
          </h1>

          <div className="mb-4 flex justify-center">
            <div className="w-full flex justify-center gap-4 flex-wrap">
              {mainTags.map((tag) => (
                <Button
                  key={tag}
                  onClick={() => {
                    setSelectedMainTag(tag);
                    setSelectedLevel(null);
                    setSelectedSubTags([]);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedMainTag === tag
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700 text-white"
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {selectedMainTag && levels.length > 0 && (
            <div className="mb-4 flex justify-center">
              <div className="w-full flex justify-center gap-4 flex-wrap">
                {levels.map((level, index) => (
                  <Button
                    key={index}
                    onClick={() => {
                      setSelectedLevel(level);
                      setSelectedSubTags([]);
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      selectedLevel === level
                        ? "bg-blue-600 text-white"
                        : "bg-slate-700 text-white"
                    }`}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {selectedMainTag && subTags.length > 0 && (
            <ErrorBoundary>
              <div className="mb-4 flex justify-center">
                <div className="w-full flex justify-center gap-4 flex-wrap">
                  {subTags.map((subtopic, index) => (
                    <Button
                      key={index}
                      onClick={() => handleSelectSubtopic(subtopic)}
                      className={`px-3 py-1 text-xs rounded-md font-medium ${
                        selectedSubTags.includes(subtopic)
                          ? "bg-blue-600 text-white"
                          : "bg-slate-700 text-white"
                      }`}
                    >
                      {subtopic}
                    </Button>
                  ))}
                </div>
              </div>
            </ErrorBoundary>
          )}

          <div className="flex flex-col items-center gap-4 mb-6">
            <select
              className="px-4 py-2 border rounded bg-gray-700 text-white w-48"
              value={timeLeft}
              onChange={(e) => setTimeLeft(parseInt(e.target.value))}
            >
              {[30, 40, 50, 60].map((t) => (
                <option key={t} value={t}>
                  {t} segundos por pregunta
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded bg-gray-700 text-white w-48"
              value={numQuestions}
              onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            >
              {[10, 15, 20, 30, 60].map((n) => (
                <option key={n} value={n}>
                  {n} preguntas
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={startQuiz}
            className={`bg-blue-600 hover:bg-blue-700 ${
              selectedMainTag === null || selectedSubTags.length === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={selectedMainTag === null || selectedSubTags.length === 0}
          >
            Comenzar Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (current >= questions.length || timeLeft <= 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-center text-white text-2xl font-bold mb-6">
            Resultados del Quiz
          </h1>
          <p className="mb-2">
            Puntaje final: {score} / {results.length}
          </p>
          <p className="mb-6">Tiempo restante: {timeLeft}s</p>
          {(() => {
            const groupedResults = results.reduce((acc, res) => {
              const key = res.subtheme || "Sin subtema";
              if (!acc[key]) acc[key] = [];
              acc[key].push(res);
              return acc;
            }, {});
            return Object.entries(groupedResults).map(
              ([subtheme, resList], idx) => {
                const correctCount = resList.filter((r) => r.isCorrect).length;
                const scorePercentage = (
                  (correctCount / resList.length) *
                  100
                ).toFixed(1);
                const gradeColor =
                  scorePercentage >= 80
                    ? "text-green-400"
                    : scorePercentage >= 50
                    ? "text-yellow-400"
                    : "text-red-400";
                return (
                  <div
                    key={idx}
                    className="bg-gray-800 rounded-md shadow-md p-4 w-full mb-6"
                  >
                    <h2 className="text-xl font-bold text-yellow-400 mb-2">
                      Subtema: {subtheme}
                    </h2>
                    <p className={`text-sm font-semibold mb-2 ${gradeColor}`}>
                      Calificación: {correctCount} / {resList.length} (
                      {scorePercentage}%)
                    </p>
                    {resList.map((res, i) => (
                      <Card key={i} className="mb-4 bg-gray-800">
                        <CardContent className="p-4">
                          <p className="font-semibold text-white bg-gray-800 p-2 rounded">
                            {res.question}
                          </p>
                          {res.code && (
                            <SyntaxHighlighter
                              language="java"
                              style={materialDark}
                              className="overflow-x-auto bg-black text-green-400 text-sm p-4 rounded"
                            >
                              {res.code}
                            </SyntaxHighlighter>
                          )}
                          <p
                            className={`text-sm mt-1 ${
                              res.isCorrect ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            Tu respuesta: {res.selectedAnswer}
                          </p>
                          {!res.isCorrect && (
                            <p className="text-sm text-green-700">
                              Respuesta correcta: {res.correctAnswer}
                            </p>
                          )}
                          <div className="text-lg mt-2 p-4 bg-gray-200 text-gray-900 rounded-md shadow-md flex items-center">
                            <span className="mr-3 text-2xl text-blue-500">
                              💡
                            </span>
                            <p>{res.explanation}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                );
              }
            );
          })()}
          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-gray-600 hover:bg-gray-700 mt-4"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
        <h1 className="text-center text-white text-2xl font-bold mb-6">
          Resultados del Quiz
        </h1>

        <p className="text-xl font-bold mb-2 bg-gray-800 text-white p-2 rounded-md shadow-md">
          Pregunta {current + 1} de {questions.length} -{" "}
          {Math.round(((current + 1) / questions.length) * 100)}%
        </p>
        <p className="text-sm text-gray-300 mb-4">
          <span className="block text-md font-semibold text-blue-400">
            Tema: {selectedMainTag}
          </span>
          <span className="block text-md font-semibold text-green-400">
            Subtema: {questions[current]?.subtheme || "No definido"}
          </span>
        </p>
        <div className="mb-4">
          <Progress value={((current + 1) / questions.length) * 100} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
          <p className="text-sm text-gray-400 mr-2">
            Tiempo restante: {timeLeft}s
          </p>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(timeLeft / timeLeftInitial) * 100}%`,
                backgroundColor: timeLeft <= 10 ? "red" : "#3b82f6",
              }}
            ></div>
          </div>
        </div>
        <Card className="bg-gray-800">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2 text-black">
              {questions[current].question}
            </h2>
            {questions[current].code && (
              <SyntaxHighlighter
                language="java"
                style={materialDark}
                className="overflow-x-auto bg-black text-green-400 text-sm p-4 rounded"
              >
                {questions[current].code}
              </SyntaxHighlighter>
            )}
            <div className="space-y-2 mb-4 w-full">
              {questions[current].options.map((opt, i) => (
                <Button
                  key={i}
                  variant={selected === i ? "default" : "outline"}
                  onClick={() => setSelected(i)}
                  className={`w-full max-w-md mx-auto rounded-lg text-center text-white transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    selected === i
                      ? "bg-green-600 border-2 border-green-300 shadow-lg"
                      : "bg-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {opt}
                </Button>
              ))}
            </div>
            <Button
              onClick={handleNext}
              disabled={selected === null}
              className={`w-full bg-blue-600 hover:bg-blue-700 ${
                selected === null ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Siguiente
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
