import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-800 border-b border-gray-700 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
          QuizTech
        </h1>
        <p className="text-gray-300 text-lg text-center font-medium">
          Configura el tiempo y número de preguntas para tu quiz.
        </p>
      </div>
    </div>
  );
}
