const fs = require('fs');
const path = require('path');

// Patrones para identificar términos técnicos y código
const codePatterns = [
    // Tipos de datos primitivos
    /\b(byte|short|int|long|float|double|char|boolean)\b/g,
    // Clases comunes
    /\b(String|Integer|Scanner|Character|Boolean|Byte|Short|Long|Float|Double)\b/g,
    // Palabras clave
    /\b(true|false|null|void|class|interface|enum|extends|implements|abstract|final|static|private|protected|public|synchronized|volatile|transient|native|strictfp)\b/g,
    // Métodos y clases de concurrencia
    /\b(Phaser|ForkJoinPool|ThreadPoolExecutor|CompletableFuture|StampedLock|Lock|CountDownLatch|CyclicBarrier)\b/g,
    // Anotaciones
    /@\w+/g,
    // Código entre backticks
    /`[^`]+`/g
];

function formatText(text) {
    if (!text) return text;
    
    // Aplicar formato markdown a los patrones encontrados
    let formattedText = text;
    codePatterns.forEach(pattern => {
        formattedText = formattedText.replace(pattern, match => {
            // Si ya está entre backticks, no hacer nada
            if (match.startsWith('`') && match.endsWith('`')) {
                return match;
            }
            return `\`${match}\``;
        });
    });
    
    return formattedText;
}

function processQuestions(questions) {
    return questions.map(q => ({
        ...q,
        question: formatText(q.question),
        options: q.options.map(opt => formatText(opt)),
        explanation: formatText(q.explanation)
    }));
}

// Leer el archivo original
const inputFile = path.join(__dirname, 'src', 'allQuestions.js');
const outputFile = path.join(__dirname, 'src', 'allQuestions.formatted.js');

// Leer el contenido del archivo
const content = fs.readFileSync(inputFile, 'utf8');

// Extraer el array de preguntas
const match = content.match(/export const allQuestions = (\[[\s\S]*\]);/);
if (!match) {
    console.error('No se pudo encontrar el array de preguntas en el archivo');
    process.exit(1);
}

const questionsArray = eval(match[1]); // Usar eval con precaución, ya que confiamos en el contenido
const formattedQuestions = processQuestions(questionsArray);

// Crear el nuevo contenido
const newContent = `export const allQuestions = ${JSON.stringify(formattedQuestions, null, 2)};`;

// Escribir el archivo formateado
fs.writeFileSync(outputFile, newContent, 'utf8');

console.log('Proceso completado. Archivo formateado guardado en:', outputFile); 