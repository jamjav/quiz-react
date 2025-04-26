import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";
import ErrorBoundary from "./ErrorBoundary";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ResultsBySubtheme({ results }) {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full max-w-[100vw] px-2 sm:px-4">
      {Object.entries(results).map(([subtheme, { correct, incorrect }]) => (
        <div
          key={subtheme}
          className="bg-gray-100 p-3 sm:p-4 rounded-md shadow-md w-full mx-2"
        >
          <div className="text-base sm:text-lg font-bold text-center text-blue-800 break-words">
            <ReactMarkdown>
              {`**Subtema:** ${subtheme} (${(
                (correct.length / (correct.length + incorrect.length)) *
                100
              ).toFixed(2)}%)`}
            </ReactMarkdown>
          </div>
          <div className="space-y-2 mt-2">
            <div className="text-green-800 font-bold text-sm sm:text-base break-words">
              <ReactMarkdown>
                {`**Correctas:** (${(
                  (correct.length / (correct.length + incorrect.length)) *
                  100
                ).toFixed(2)}%)`}
              </ReactMarkdown>
            </div>
            {correct.map(({ question, answer, code }, index) => (
              <div
                key={index}
                className="bg-green-200 p-2 sm:p-3 rounded-md shadow-sm text-green-900"
              >
                <h2 className="text-base sm:text-lg font-bold break-words">
                  <ReactMarkdown>{`⁉️ **Pregunta:** ${question}`}</ReactMarkdown>
                </h2>
                {code && (
                  <div className="bg-gray-800 text-white p-2 sm:p-4 rounded-md shadow-md mt-2 overflow-x-auto max-w-full">
                    <SyntaxHighlighter
                      language="java"
                      style={materialDark}
                      customStyle={{ fontSize: "0.875rem", maxWidth: "100%" }}
                      wrapLongLines={true}
                    >
                      {code}
                    </SyntaxHighlighter>
                  </div>
                )}
                <h3 className="text-sm sm:text-base font-semibold mt-2 break-words">
                  <ReactMarkdown>{`✅ **Respuesta:** ${answer}`}</ReactMarkdown>
                </h3>
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-3">
            <div className="text-red-800 font-bold text-sm sm:text-base break-words">
              <ReactMarkdown>
                {`**Incorrectas:** (${(
                  (incorrect.length / (correct.length + incorrect.length)) *
                  100
                ).toFixed(2)}%)`}
              </ReactMarkdown>
            </div>
            {incorrect.map(
              (
                { question, selectedAnswer, correctAnswer, explanation, code },
                index
              ) => (
                <div
                  key={index}
                  className="bg-red-200 p-2 sm:p-3 rounded-md shadow-sm text-red-900"
                >
                  <h2 className="text-base sm:text-lg font-bold break-words">
                    <ReactMarkdown>{`⁉️ **Pregunta:** ${question}`}</ReactMarkdown>
                  </h2>
                  {code && (
                    <div className="bg-gray-800 text-white p-2 sm:p-4 rounded-md shadow-md mt-2 overflow-x-auto max-w-full">
                      <SyntaxHighlighter
                        language="java"
                        style={materialDark}
                        customStyle={{ fontSize: "0.875rem", maxWidth: "100%" }}
                        wrapLongLines={true}
                      >
                        {code}
                      </SyntaxHighlighter>
                    </div>
                  )}
                  <h3 className="text-sm sm:text-base font-semibold mt-2 break-words">
                    <ReactMarkdown>{`❌ **Respuesta seleccionada:** ${selectedAnswer}`}</ReactMarkdown>
                  </h3>
                  <h3 className="text-sm sm:text-base font-semibold text-green-800 mt-2 break-words">
                    <ReactMarkdown>{`✅ **Respuesta correcta:** ${correctAnswer}`}</ReactMarkdown>
                  </h3>
                  {explanation && (
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-2 sm:p-4 rounded-md shadow-md mt-3 text-sm sm:text-base">
                      <h3 className="font-semibold text-blue-800">
                        <ReactMarkdown>ℹ️ **Explicación:**</ReactMarkdown>
                      </h3>
                      <div className="break-words">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {explanation}
                        </ReactMarkdown>
                      </div>
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
    <div className="text-center p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
        <ReactMarkdown>**Resultados**</ReactMarkdown>
      </h2>
      <div className="bg-blue-100 rounded-lg p-3 sm:p-4 mb-4 inline-block">
        <p className="text-blue-800 text-lg sm:text-xl font-semibold">
          <ReactMarkdown>{`**Puntuación:** ${score} / ${
            results.length
          } (${Math.round((score / results.length) * 100)}%)`}</ReactMarkdown>
        </p>
      </div>
      <ResultsBySubtheme results={groupedResults} />
      <div className="flex flex-col items-center space-y-3 sm:space-y-4 mt-4 sm:mt-6 w-full sm:w-auto px-4">
        <Button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
        >
          <span className="mr-2">🏠</span>
          <ReactMarkdown>**Ir al Inicio**</ReactMarkdown>
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
          className="bg-green-600 hover:bg-green-700 px-3 sm:px-4 py-2 flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
        >
          <span className="mr-2">🔄</span>
          <ReactMarkdown>**Repetir Quiz**</ReactMarkdown>
        </Button>
      </div>
    </div>
  );
}
