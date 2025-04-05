import React, { useState, useEffect } from "react";
import { allQuestions } from "./allQuestions";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ErrorBoundary from './components/ErrorBoundary'; // adjust the path as needed

export default function QuizApp() {
    const [selectedMainTag, setSelectedMainTag] = useState(null);
    const [selectedSubTags, setSelectedSubTags] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [numQuestions, setNumQuestions] = useState(5);
    const [quizStarted, setQuizStarted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [results, setResults] = useState([]);
    const [timeLeft, setTimeLeft] = useState(30);
    const [timeLeftInitial, setTimeLeftInitial] = useState(30);

    const mainTags = [...new Set(allQuestions.map(q => q.group))];
    const levels = selectedMainTag
        ? [...new Set(allQuestions
            .filter(q => q.group === selectedMainTag)
            .map(q => q.level))].filter(Boolean)
        : [];
    
    const subTags = selectedMainTag && selectedLevel
        ? [...new Set(allQuestions
            .filter(q => q.group === selectedMainTag && q.level === selectedLevel)
            .map(q => q.subtheme))]
        : [];

    useEffect(() => {
        console.log("Subtemas disponibles: ", subTags);
    }, [subTags]);

    useEffect(() => {
        let timer;
        if (quizStarted && timeLeft > 0 && current < questions.length) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (current < questions.length) {
            handleNext(); // Avanza automáticamente a la siguiente pregunta cuando el tiempo llega a 0
        }
        return () => clearInterval(timer);
    }, [quizStarted, timeLeft, current]);

    const startQuiz = () => {
        const filtered = allQuestions.filter(q =>
            (selectedMainTag === null || q.group === selectedMainTag) &&
            (selectedSubTags.length === 0 || (q.subtheme && selectedSubTags.includes(q.subtheme))) &&
            (selectedLevel === null || q.level === selectedLevel)
        );

        const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, numQuestions);
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
            setResults([...results, {
                question: questions[current].question,
                selectedAnswer: availableOptions[selected],
                correctAnswer: availableOptions[correctOption],
                explanation: questions[current].explanation,
                isCorrect: selected === correctOption
            }]);
            if (selected === correctOption) {
                setScore(prevScore => prevScore + 1);
            }
        } else {
            // Si hay más de 4 opciones, separamos la respuesta correcta
            let optionsWithCorrectAnswer = [availableOptions[correctOption]];
            
            // Elegimos otras 3 opciones aleatorias de las incorrectas
            let incorrectOptions = availableOptions.filter((_, index) => index !== correctOption);
            for (let i = 0; i < 3; i++) {
                optionsWithCorrectAnswer.push(incorrectOptions.splice(Math.floor(Math.random() * incorrectOptions.length), 1)[0]);
            }

            // Mezclamos las opciones para que no esté siempre en la misma posición
            optionsWithCorrectAnswer = optionsWithCorrectAnswer.sort(() => 0.5 - Math.random());
            
            // Guardamos el resultado de la pregunta
            setResults([...results, {
                question: questions[current].question,
                selectedAnswer: optionsWithCorrectAnswer[selected],
                correctAnswer: optionsWithCorrectAnswer[correctOption],
                explanation: questions[current].explanation,
                isCorrect: selected === correctOption
            }]);
            if (selected === correctOption) {
                setScore(prevScore => prevScore + 1);
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
            <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
                <div className="w-full max-w-2xl mx-auto mt-10 px-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">Selecciona el tema y los subtemas</h1>

                    <div className="mb-4 flex justify-center">
                        <div className="w-full flex justify-center gap-4 flex-wrap">
                            {mainTags.map(tag => (
                                <Button
                                    key={tag}
                                    onClick={() => {
                                        setSelectedMainTag(tag);
                                        setSelectedLevel(null);
                                        setSelectedSubTags([]);
                                    }}
                                    className={`px-4 py-2 rounded-lg text-base ${selectedMainTag === tag ? 'bg-blue-500' : 'bg-gray-700'} transition-all duration-200`}
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
                                        className={`px-3 py-1.5 rounded-lg text-sm ${selectedLevel === level ? 'bg-blue-500' : 'bg-gray-700'} transition-all duration-200`}
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
                                            className={`px-3 py-1.5 rounded-lg text-sm ${selectedSubTags.includes(subtopic) ? 'bg-blue-500' : 'bg-gray-700'} transition-all duration-200`}
                                        >
                                            {subtopic}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </ErrorBoundary>
                    )}

                    <select
                        className="mb-4 px-4 py-2 border rounded bg-gray-700 text-white"
                        value={timeLeft}
                        onChange={(e) => setTimeLeft(parseInt(e.target.value))}
                    >
                        {[30, 40, 50, 60].map(t => (
                            <option key={t} value={t}>
                                {t} segundos por pregunta
                            </option>
                        ))}
                    </select>
                    <br />
                    <select
                        className="mb-4 px-4 py-2 border rounded bg-gray-700 text-white"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                    >
                        {[10, 15, 20, 30, 60].map(n => <option key={n} value={n}>{n} preguntas</option>)}
                    </select>
                    <br />
                    <Button onClick={startQuiz} className="bg-blue-600 hover:bg-blue-700" disabled={selectedMainTag === null || selectedSubTags.length === 0 || selectedLevel === null}>Comenzar Quiz</Button>
                </div>
            </div>
        );
    }

    if (current >= questions.length || timeLeft <= 0) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
                <div className="max-w-xl mx-auto mt-10">
                    <h1 className="text-2xl font-bold mb-4 text-white">Resultados del Quiz</h1>
                    <p className="mb-2">Puntaje final: {score} / {results.length}</p>
                    <p className="mb-6">Tiempo restante: {timeLeft}s</p>
                    {results.map((res, idx) => (
                        <Card key={idx} className="mb-4 bg-gray-800">
                            <CardContent className="p-4">
                                <p className="font-semibold text-white bg-gray-800 p-2 rounded">{res.question}</p>
                                <p className={`text-sm mt-1 ${res.isCorrect ? 'text-green-600' : 'text-red-600'}`}>Tu respuesta: {res.selectedAnswer}</p>
                                {!res.isCorrect && <p className="text-sm text-green-700">Respuesta correcta: {res.correctAnswer}</p>}
                                <div className="text-lg mt-2 p-4 bg-gray-200 text-gray-900 rounded-md shadow-md flex items-center">
                                    <span className="mr-3 text-2xl text-blue-500">💡</span>
                                    <p>{res.explanation}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
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
            <div className="max-w-xl mx-auto mt-10">
                <p className="text-xl font-bold mb-2 bg-gray-800 text-white p-2 rounded-md shadow-md">
                    Pregunta {current + 1} de {questions.length} - {Math.round(((current + 1) / questions.length) * 100)}%
                </p>
                <p className="text-sm text-gray-400 mb-2">
                    Tema: {selectedMainTag} - Subtema: {selectedSubTags.join(", ")}
                </p>
                <div className="mb-4">
                    <Progress value={((current + 1) / questions.length) * 100} />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
                    <p className="text-sm text-gray-400 mr-2">Tiempo restante: {timeLeft}s</p>
                    <div className="w-full bg-gray-700 h-2 rounded-full">
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: `${(timeLeft / timeLeftInitial) * 100}%`,
                                backgroundColor: timeLeft <= 10 ? 'red' : '#3b82f6'
                            }}
                        ></div>
                    </div>
                </div>
                <Card className="bg-gray-800">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-2 text-black">{questions[current].question}</h2>
                        {questions[current].code && (
                        <SyntaxHighlighter language="java" style={materialDark} className="rounded-md border p-4 rounded-md">
                                {questions[current].code}
                            </SyntaxHighlighter>
                        )}
                        <div className="space-y-2 mb-4">
                            {questions[current].options.map((opt, i) => (
                                <Button
                                    key={i}
                                    variant={selected === i ? "default" : "outline"}
                                    onClick={() => setSelected(i)}
                                    className={`w-full max-w-md mx-auto rounded-lg text-center bg-gray-700 text-white hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 ${selected === i ? 'bg-blue-600 text-white border-2 border-blue-700 shadow-lg' : ''}`}
                                >
                                    {opt}
                                </Button>
                            ))}
                        </div>
                        <Button
                            onClick={handleNext}
                            disabled={selected === null}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600"
                        >
                            Siguiente
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}