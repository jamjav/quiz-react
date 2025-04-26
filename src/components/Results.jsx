import React from "react";
import { Button } from "./ui/button";

export default function Results({ results, score, onRestart }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Resultados</h2>
      <p className="mb-4">
        Puntuación: {score} / {results.length}
      </p>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-4 border rounded-md bg-gray-800 text-left"
          >
            <p className="font-medium">{result.question}</p>
            <p
              className={`mt-2 ${
                result.isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              Tu respuesta: {result.selectedAnswer}
            </p>
            <p className="text-gray-400">
              Respuesta correcta: {result.correctAnswer}
            </p>
            {result.explanation && (
              <p className="mt-2 text-gray-300">
                Explicación: {result.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
      <Button
        onClick={onRestart}
        className="mt-6 bg-blue-600 hover:bg-blue-700"
      >
        Reiniciar Quiz
      </Button>
    </div>
  );
}
