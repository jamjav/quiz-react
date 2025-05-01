import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";
import ErrorBoundary from "./ErrorBoundary";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Loader from "./Loader";

export default function Results({
  results = [],
  score = 0,
  totalQuestions = 0,
  correctAnswers = 0,
  incorrectAnswers = 0,
  onRestart,
  quizParams = {},
}) {
  const [isRestarting, setIsRestarting] = useState(false);
  const [visibleSubtheme, setVisibleSubtheme] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
    setIsRestarting(true);
    
    // Simular tiempo de carga antes de redirigir
    setTimeout(() => {
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
    }, 1500); // 1.5 segundos de carga
  };

  // Agrupar resultados por subtema y crear un grupo "todas"
  const groupedResults = results.reduce((acc, result) => {
    const subtheme = result.subtheme || "Sin subtema";
    if (!acc[subtheme]) {
      acc[subtheme] = { correct: [], incorrect: [] };
    }
    if (result.isCorrect) {
      acc[subtheme].correct.push(result);
    } else {
      acc[subtheme].incorrect.push(result);
    }
    return acc;
  }, {
    'todas': {
      correct: results.filter(r => r.isCorrect),
      incorrect: results.filter(r => !r.isCorrect)
    }
  });

  if (isRestarting) {
    return <Loader message="Reiniciando quiz..." />;
  }

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <header className="bg-gray-900/50 sticky top-0 z-10 border-b border-gray-600/50">
        <div className="py-4">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
            Resultados del Quiz
          </h2>
        </div>
      </header>

      <main className="bg-gray-700/50 flex-1">
        <div className="border-b border-gray-600/50">
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
                  Puntuación
                </h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-40 h-40">
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
                      <span className="text-3xl font-bold text-white">{percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Detalles
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-xl">Preguntas totales:</span>
                    <span className="text-white text-2xl font-semibold">{safeTotalQuestions}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 text-xl">Correctas:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setVisibleSubtheme('todas');
                          setShowCorrect(true);
                        }}
                        className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xl font-medium hover:bg-green-500/30 transition-all duration-200"
                      >
                        {safeCorrectAnswers}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 text-xl">Incorrectas:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setVisibleSubtheme('todas');
                          setShowCorrect(false);
                        }}
                        className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xl font-medium hover:bg-red-500/30 transition-all duration-200"
                      >
                        {safeIncorrectAnswers}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-600">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-200">Calificación por Subtemas</h4>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar subtema..."
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                {Object.entries(groupedResults)
                  .filter(([subtheme]) => subtheme !== 'todas' && 
                    subtheme.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map(([subtheme, { correct = [], incorrect = [] }]) => {
                  const totalSubthemeQuestions = correct.length + incorrect.length;
                  const correctPercentage = totalSubthemeQuestions > 0 
                    ? Math.round((correct.length / totalSubthemeQuestions) * 100) 
                    : 0;
                  const incorrectPercentage = totalSubthemeQuestions > 0 
                    ? Math.round((incorrect.length / totalSubthemeQuestions) * 100) 
                    : 0;
                  
                  return (
                    <div key={subtheme} className="flex items-center justify-between py-1">
                      <span className="text-gray-300 text-base font-medium truncate max-w-[45%]">{subtheme}</span>
                      <div className="flex items-center gap-4">
                        {correctPercentage > 0 ? (
                          <button
                            onClick={() => {
                              setVisibleSubtheme(subtheme);
                              setShowCorrect(true);
                            }}
                            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/30 transition-all duration-200"
                          >
                            {correctPercentage}%
                          </button>
                        ) : (
                          <span className="px-3 py-1 text-sm font-medium text-gray-500">
                            {correctPercentage}%
                          </span>
                        )}
                        {incorrectPercentage > 0 ? (
                          <button
                            onClick={() => {
                              setVisibleSubtheme(subtheme);
                              setShowCorrect(false);
                            }}
                            className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium hover:bg-red-500/30 transition-all duration-200"
                          >
                            {incorrectPercentage}%
                          </button>
                        ) : (
                          <span className="px-3 py-1 text-sm font-medium text-gray-500">
                            {incorrectPercentage}%
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {visibleSubtheme && (
          <div className="border-b border-gray-600/50">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {visibleSubtheme === 'todas' ? 
                    (showCorrect ? "Todas las Preguntas Correctas" : "Todas las Preguntas Incorrectas") : 
                    `${showCorrect ? "Preguntas Correctas" : "Preguntas Incorrectas"} - ${visibleSubtheme}`}
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCorrect(true)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      showCorrect 
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700/70'
                    }`}
                  >
                    Correctas
                  </button>
                  <button
                    onClick={() => setShowCorrect(false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      !showCorrect 
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700/70'
                    }`}
                  >
                    Incorrectas
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {(showCorrect ? 
                  groupedResults[visibleSubtheme]?.correct : 
                  groupedResults[visibleSubtheme]?.incorrect
                )?.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-200 min-h-[180px] flex flex-col ${
                      showCorrect 
                        ? "bg-green-900/30 border-green-500/20 hover:border-green-500/40" 
                        : "bg-red-900/30 border-red-500/20 hover:border-red-500/40"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="prose prose-invert max-w-none mb-3">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code({node, inline, className, children, ...props}) {
                              const match = /language-(\w+)/.exec(className || '');
                              const isInline = inline || !match;
                              if (isInline) {
                                return (
                                  <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-sm" {...props}>
                                    {children}
                                  </code>
                                );
                              }
                              return (
                                <div className="bg-gray-800/50 p-3 rounded-lg overflow-x-auto mb-3 border border-gray-700">
                                  <SyntaxHighlighter
                                    language={match[1]}
                                    style={materialDark}
                                    customStyle={{ fontSize: "0.875rem", margin: 0 }}
                                    wrapLongLines={true}
                                    {...props}
                                  >
                                    {String(children).replace(/\n$/, '')}
                                  </SyntaxHighlighter>
                                </div>
                              );
                            }
                          }}
                        >
                          {result.question}
                        </ReactMarkdown>
                      </div>
                      {result.code && (
                        <div className="bg-gray-800/50 p-3 rounded-lg overflow-x-auto mb-3 border border-gray-700">
                          <SyntaxHighlighter
                            language="java"
                            style={materialDark}
                            customStyle={{ fontSize: "0.875rem", maxWidth: "100%", margin: 0 }}
                            wrapLongLines={true}
                          >
                            {result.code}
                          </SyntaxHighlighter>
                        </div>
                      )}
                    </div>
                    <div className="mt-auto pt-3 border-t space-y-2">
                      {showCorrect ? (
                        <div className="text-green-400 flex items-start gap-2">
                          <span className="text-lg mt-0.5">✅</span>
                          <div className="prose prose-invert max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {result.answer}
                            </ReactMarkdown>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="text-red-400 flex items-start gap-2">
                            <span className="text-lg mt-0.5">❌</span>
                            <div className="prose prose-invert max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {result.selectedAnswer}
                              </ReactMarkdown>
                            </div>
                          </div>
                          <div className="text-green-400 flex items-start gap-2">
                            <span className="text-lg mt-0.5">✅</span>
                            <div className="prose prose-invert max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {result.correctAnswer}
                              </ReactMarkdown>
                            </div>
                          </div>
                          {result.explanation && (
                            <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/20">
                              <div className="prose prose-invert max-w-none prose-sm">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                  {result.explanation}
                                </ReactMarkdown>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-900/50 sticky bottom-0 border-t border-gray-600/50">
        <div className="p-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Ir al Inicio
          </button>
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 border border-gray-600"
          >
            Reiniciar Quiz
          </button>
        </div>
      </footer>
    </div>
  );
}
