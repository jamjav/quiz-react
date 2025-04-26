import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";
import ErrorBoundary from "./ErrorBoundary";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ResultsBySubtheme({ results }) {
  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      {Object.entries(results).map(([subtheme, { correct, incorrect }]) => (
        <div
          key={subtheme}
          className="bg-gray-100 p-4 rounded-md shadow-md w-full max-w-3xl"
        >
          <div className="text-lg font-bold text-center text-blue-800">
            Subtema: {subtheme} (
            {(
              (correct.length / (correct.length + incorrect.length)) *
              100
            ).toFixed(2)}
            %)
          </div>
          <div className="space-y-2">
            <div className="text-green-800 font-bold">
              Correctas: (
              {(
                (correct.length / (correct.length + incorrect.length)) *
                100
              ).toFixed(2)}
              %)
            </div>
            {correct.map(({ question, answer, code }, index) => (
              <div
                key={index}
                className="bg-green-200 p-2 rounded-md shadow-sm text-green-900"
              >
                <h2 className="text-lg font-bold">⁉ Pregunta: {question}</h2>
                <br />
                {code && (
                  <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mt-2">
                    <SyntaxHighlighter language="java" style={materialDark}>
                      {code}
                    </SyntaxHighlighter>
                  </div>
                )}
                <h3 className="text-md font-semibold inline">
                  ✅ Respuesta: {answer}
                </h3>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="text-red-800 font-bold">
              Incorrectas: (
              {(
                (incorrect.length / (correct.length + incorrect.length)) *
                100
              ).toFixed(2)}
              %)
            </div>
            {incorrect.map(
              (
                { question, selectedAnswer, correctAnswer, explanation, code },
                index
              ) => (
                <div
                  key={index}
                  className="bg-red-200 p-2 rounded-md shadow-sm text-red-900"
                >
                  <h2 className="text-lg font-bold">⁉ Pregunta: {question}</h2>
                  <br />
                  {code && (
                    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mt-2">
                      <SyntaxHighlighter language="java" style={materialDark}>
                        {code}
                      </SyntaxHighlighter>
                    </div>
                  )}
                  <h3 className="text-md font-semibold inline">
                    ❌ Respuesta seleccionada: {selectedAnswer}
                  </h3>
                  <div className="py-2"></div>
                  <h3 className="text-md font-semibold inline text-green-800">
                    ✅ Respuesta correcta: {correctAnswer}
                  </h3>
                  <div className="py-2"></div>
                  {explanation && (
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-4 rounded-md shadow-md mt-4">
                      <h3 className="text-md font-semibold text-blue-800">
                        ℹ️ Explicación:
                      </h3>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {explanation}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Results({
  results,
  score,
  onRestart,
  allQuestions,
  selectedMainTag,
  selectedSubTags,
  selectedLevel,
  numQuestions,
  setQuestions,
  setCurrent,
  setScore,
  setResults,
  setQuizStarted,
  timeLeftInitial,
  setTimeLeft,
}) {
  const groupedResults = results.reduce((acc, result) => {
    const subtheme = result.subtheme || "Sin subtema";
    if (!acc[subtheme]) {
      acc[subtheme] = { correct: [], incorrect: [] };
    }
    if (result.isCorrect) {
      acc[subtheme].correct.push({
        question: result.question,
        answer: result.answer,
        code: result.code,
      });
    } else {
      acc[subtheme].incorrect.push({
        question: result.question,
        selectedAnswer: result.selectedAnswer,
        correctAnswer: result.correctAnswer,
        explanation: result.explanation,
        code: result.code,
      });
    }
    return acc;
  }, {});

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Resultados</h2>
      <p className="mb-4">
        Puntuación: {score} / {results.length}
      </p>
      <ResultsBySubtheme results={groupedResults} />
      <div className="flex flex-col items-center space-y-4 mt-6">
        <Button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 flex items-center justify-center"
        >
          <span className="mr-2">🏠</span> Ir al Inicio
        </Button>
        <Button
          onClick={() => {
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
            setCurrent(0);
            setScore(0);
            setResults([]);
            setQuizStarted(true);
            setTimeLeft(timeLeftInitial);
          }}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 flex items-center justify-center"
        >
          <span className="mr-2">🔄</span> Repetir Quiz
        </Button>
      </div>
    </div>
  );
}
