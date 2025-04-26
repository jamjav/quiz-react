import React from "react";
import { Button } from "./ui/button";

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
      acc[subtheme].correct.push(result);
    } else {
      acc[subtheme].incorrect.push(result);
    }
    return acc;
  }, {});

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Resultados</h2>
      <p className="mb-4">
        Puntuación: {score} / {results.length}
      </p>
      <div className="space-y-6">
        {Object.entries(groupedResults).map(
          ([subtheme, { correct, incorrect }]) => (
            <div
              key={subtheme}
              className="p-4 bg-gray-800 text-white rounded-md shadow-md"
            >
              <div className="text-sm font-medium text-center text-white bg-green-700 py-2 rounded-md shadow-md mb-4">
                Subtema: {subtheme}
              </div>
              <div className="mb-6">
                <h4 className="text-md font-semibold text-white bg-green-700 py-2 px-4 rounded-md inline-block shadow-md mb-4">
                  Correctas:{" "}
                  {(
                    (correct.length / (correct.length + incorrect.length)) *
                    100
                  ).toFixed(2)}
                  %
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {correct.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-green-500 text-white rounded-md shadow-md"
                    >
                      <h5 className="font-bold mb-2">Pregunta:</h5>
                      <p className="text-lg">{item.question}</p>
                      <p className="mt-2 font-semibold text-yellow-200">
                        Respuesta seleccionada: {item.selectedAnswer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-md font-semibold text-white bg-red-700 py-2 px-4 rounded-md inline-block shadow-md mb-4">
                  Incorrectas:{" "}
                  {(
                    (incorrect.length / (correct.length + incorrect.length)) *
                    100
                  ).toFixed(2)}
                  %
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {incorrect.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-red-500 text-white rounded-md shadow-md"
                    >
                      <h5 className="font-bold mb-2">Pregunta:</h5>
                      <p className="text-lg">{item.question}</p>
                      <p className="mt-2 font-semibold text-yellow-200">
                        Respuesta seleccionada: {item.selectedAnswer}
                      </p>
                      <p className="font-semibold text-yellow-300">
                        Respuesta correcta: {item.correctAnswer}
                      </p>
                      {item.explanation && (
                        <p className="mt-2 text-sm text-gray-900 font-bold bg-yellow-100 p-2 rounded-md">
                          Explicación: {item.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <Button
        onClick={onRestart}
        className="mt-6 bg-blue-600 hover:bg-blue-700"
      >
        Ir al Inicio
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
        className="mt-4 bg-green-600 hover:bg-green-700"
      >
        Repetir Quiz
      </Button>
    </div>
  );
}
