import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";
import ErrorBoundary from "./ErrorBoundary";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ResultsBySubtheme({ results = {} }) {
  // Verificar si results es un objeto válido
  if (!results || typeof results !== 'object' || Object.keys(results).length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-4">
      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
        Resultados por Subtema
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(results).map(([subtheme, { correct = [], incorrect = [] }]) => {
          const totalSubthemeQuestions = correct.length + incorrect.length;
          const subthemePercentage = totalSubthemeQuestions > 0 
            ? Math.round((correct.length / totalSubthemeQuestions) * 100) 
            : 0;

          return (
            <div
              key={subtheme}
              className="bg-gray-700/50 p-4 rounded-xl border border-gray-600"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-white">{subtheme}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-300">Puntuación:</span>
                  <span className={`text-lg font-bold ${
                    subthemePercentage >= 70 ? "text-green-400" : 
                    subthemePercentage >= 40 ? "text-yellow-400" : 
                    "text-red-400"
                  }`}>
                    {subthemePercentage}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <h5 className="text-green-400 font-semibold">
                    Correctas ({correct.length})
                  </h5>
                  {correct.map(({ question, answer, code }, index) => (
                    <div
                      key={index}
                      className="bg-green-900/30 p-4 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-200 min-h-[180px] flex flex-col"
                    >
                      <div className="flex-1">
                        <p className="text-white mb-3 font-medium">{question}</p>
                        {code && (
                          <div className="bg-gray-800/50 p-3 rounded-lg overflow-x-auto mb-3 border border-gray-700">
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
                      </div>
                      <div className="mt-auto pt-3 border-t border-green-500/20">
                        <p className="text-green-400 flex items-center gap-2">
                          <span className="text-lg">✅</span>
                          <span className="font-medium">{answer}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h5 className="text-red-400 font-semibold">
                    Incorrectas ({incorrect.length})
                  </h5>
                  {incorrect.map(
                    (
                      { question, selectedAnswer, correctAnswer, explanation, code },
                      index
                    ) => (
                      <div
                        key={index}
                        className="bg-red-900/30 p-4 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-200 min-h-[180px] flex flex-col"
                      >
                        <div className="flex-1">
                          <p className="text-white mb-3 font-medium">{question}</p>
                          {code && (
                            <div className="bg-gray-800/50 p-3 rounded-lg overflow-x-auto mb-3 border border-gray-700">
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
                        </div>
                        <div className="mt-auto pt-3 border-t border-red-500/20 space-y-2">
                          <p className="text-red-400 flex items-center gap-2">
                            <span className="text-lg">❌</span>
                            <span className="font-medium">{selectedAnswer}</span>
                          </p>
                          <p className="text-green-400 flex items-center gap-2">
                            <span className="text-lg">✅</span>
                            <span className="font-medium">{correctAnswer}</span>
                          </p>
                          {explanation && (
                            <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/20">
                              <p className="text-blue-300 text-sm">{explanation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Results({
  results = [],
  score = 0,
  totalQuestions = 0,
  correctAnswers = 0,
  incorrectAnswers = 0,
  onRestart,
  quizParams = {},
}) {
  // Asegurarse de que los valores sean números
  const safeScore = Number(score) || 0;
  const safeTotalQuestions = Number(totalQuestions) || 0;
  const safeCorrectAnswers = Number(correctAnswers) || 0;
  const safeIncorrectAnswers = Number(incorrectAnswers) || 0;

  // Calcular el porcentaje de manera segura
  const percentage = safeTotalQuestions > 0 
    ? Math.round((safeScore / safeTotalQuestions) * 100) 
    : 0;

  // Función para reiniciar el quiz con los mismos parámetros
  const handleRestart = () => {
    // Usar los parámetros del quiz actual
    const params = new URLSearchParams();
    
    // Añadir los parámetros del quiz
    if (quizParams.questions) params.set('questions', quizParams.questions);
    if (quizParams.time) params.set('time', quizParams.time);
    if (quizParams.mainTag) params.set('mainTag', quizParams.mainTag);
    if (quizParams.level) params.set('level', quizParams.level);
    if (quizParams.subTags) params.set('subTags', quizParams.subTags);
    
    // Añadir el parámetro start
    params.set('start', 'true');
    
    // Redirigir a la página principal con los parámetros
    window.location.href = `/?${params.toString()}`;
  };

  // Agrupar resultados por subtema
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
    <div className="min-h-screen bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
          Resultados del Quiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-700/50 p-4 rounded-xl border border-gray-600">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
              Puntuación
            </h3>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={percentage >= 70 ? "#10B981" : percentage >= 40 ? "#F59E0B" : "#EF4444"}
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{percentage}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700/50 p-4 rounded-xl border border-gray-600">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Detalles
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Preguntas totales:</span>
                <span className="text-white font-semibold">{safeTotalQuestions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-400">Correctas:</span>
                <span className="text-white font-semibold">{safeCorrectAnswers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-400">Incorrectas:</span>
                <span className="text-white font-semibold">{safeIncorrectAnswers}</span>
              </div>
            </div>
          </div>
        </div>

        {Object.keys(groupedResults).length > 0 && <ResultsBySubtheme results={groupedResults} />}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Ir al Inicio
          </button>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 border border-gray-600"
          >
            Reiniciar Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
