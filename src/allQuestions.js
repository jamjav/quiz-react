export const allQuestions = [
  {
    question: "¿Cuál de los siguientes es un tipo primitivo en Java?",
    options: [
      "int",
      "String",
      "Integer",
      "ArrayList",
      "float",
      "double",
      "char",
      "boolean",
    ],
    answer: 0,
    explanation:
      "`int` es un tipo primitivo en Java, mientras que `String` y `Integer` son clases.",
    subtheme: "Tipos primitivos",
    group: "Java",
  },
  {
    question: "¿Qué tipo de dato en Java puede almacenar valores nulos?",
    options: ["int", "boolean", "char", "Integer"],
    answer: 3,
    explanation:
      "El tipo `Integer` es un tipo de referencia y puede almacenar `null`, a diferencia de los tipos primitivos como `int`.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question: "¿Cuál de los siguientes no es un tipo primitivo en Java?",
    options: ["byte", "long", "String", "char"],
    answer: 2,
    explanation: "`String` es un tipo de referencia, no un tipo primitivo.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de dato es utilizado para representar valores booleanos en Java?",
    options: ["boolean", "int", "char", "String"],
    answer: 0,
    explanation:
      "`boolean` es el tipo de dato utilizado para representar valores de verdad (true/false) en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Cuál de los siguientes tipos de datos es utilizado para almacenar texto en Java?",
    options: ["char", "String", "int", "boolean"],
    answer: 1,
    explanation: "`String` es utilizado para almacenar texto en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de dato es utilizado para almacenar valores numéricos enteros en Java?",
    options: ["float", "double", "int", "boolean"],
    answer: 2,
    explanation:
      "`int` es utilizado para almacenar valores numéricos enteros en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de dato es utilizado para almacenar valores decimales en Java?",
    options: ["int", "char", "double", "String"],
    answer: 2,
    explanation:
      "`double` es utilizado para almacenar valores decimales en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question: "¿Cuál es el valor por defecto de un tipo `boolean` en Java?",
    options: ["true", "false", "null", "0"],
    answer: 1,
    explanation:
      "El valor por defecto de un tipo `boolean` es `false` en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de dato es utilizado para almacenar caracteres individuales en Java?",
    options: ["char", "String", "int", "boolean"],
    answer: 0,
    explanation:
      "`char` es utilizado para almacenar caracteres individuales en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Cuál de los siguientes es un tipo de dato por referencia en Java?",
    options: ["int", "char", "String", "boolean"],
    answer: 2,
    explanation: "`String` es un tipo de referencia en Java.",
    subtheme: "Tipos de referencia",
    group: "Java",
  },
  {
    question: "¿Cuál es el valor por defecto de un tipo `int` en Java?",
    options: ["0", "null", "false", "1"],
    answer: 0,
    explanation: "El valor por defecto de un tipo `int` es `0` en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de dato almacena direcciones de memoria en lugar de valores directamente en Java?",
    options: ["int", "String", "boolean", "char"],
    answer: 1,
    explanation:
      "`String` es un tipo de dato por referencia que almacena la dirección de memoria de un objeto.",
    subtheme: "Tipos de referencia",
    group: "Java",
  },
  {
    question:
      "¿Cuál es la diferencia principal entre los tipos primitivos y los tipos de referencia en Java?",
    options: [
      "Los primitivos no pueden ser `null`, los de referencia sí.",
      "Los primitivos son más flexibles.",
      "Los primitivos son más lentos.",
      "Los tipos de referencia no son objetos.",
    ],
    answer: 0,
    explanation:
      "Los tipos primitivos no pueden ser `null`, mientras que los tipos de referencia sí pueden serlo.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de dato en Java se utiliza para almacenar valores flotantes con doble precisión?",
    options: ["float", "double", "long", "char"],
    answer: 1,
    explanation:
      "`double` es el tipo de dato utilizado para valores flotantes con doble precisión en Java.",
    subtheme: "Tipos de datos",
    group: "Java",
  },
  {
    question: "¿Qué hace la palabra clave `var` en Java 10+?",
    options: [
      "Declara una variable con tipo inferido",
      "Declara una variable sin inicializar",
      "Declara una variable global",
      "Declara una constante",
    ],
    answer: 0,
    explanation:
      "La palabra clave `var` permite que el compilador infiera el tipo de la variable a partir del valor asignado.",
    subtheme: "Inferencia",
    group: "Java",
  },
  {
    question: "¿Cuál es el tipo de dato inferido cuando se usa `var`?",
    options: [
      "El tipo de dato de la expresión asignada",
      "Siempre es Object",
      "Siempre es int",
      "Depende del contexto",
    ],
    answer: 0,
    explanation: "El tipo inferido es el del valor asignado a la variable.",
    subtheme: "Inferencia",
    group: "Java",
  },
  {
    question: "¿Se puede usar `var` para declarar variables de tipo primitivo?",
    options: [
      "Sí, `var` puede inferir tipos primitivos",
      "No, solo se usa para objetos",
      "Solo en versiones anteriores a Java 10",
      "Solo en interfaces",
    ],
    answer: 0,
    explanation:
      "`var` puede ser usado para cualquier tipo, incluyendo tipos primitivos, siempre que la variable sea inicializada.",
    subtheme: "Inferencia",
    group: "Java",
  },
  {
    question: "¿Qué es el proceso de *casting* en Java?",
    options: [
      "La conversión explícita de un tipo de dato a otro",
      "La inferencia de tipos en tiempo de compilación",
      "La declaración de variables sin especificar el tipo",
      "La conversión automática de tipos",
    ],
    answer: 0,
    explanation:
      "El casting es la conversión explícita de un tipo de dato a otro en Java.",
    subtheme: "Casting",
    group: "Java",
  },
  {
    question:
      "¿Cómo se realiza el *casting* de un tipo primitivo `double` a `int`?",
    options: [
      "Usando paréntesis: (int) miDouble",
      "Asignándolo directamente",
      "Usando la función parseInt",
      "No es posible",
    ],
    answer: 0,
    explanation:
      "Para convertir un `double` a `int`, se utiliza el casting explícito: (int) miDouble.",
    subtheme: "Casting",
    group: "Java",
  },
  {
    question: "¿Qué es el *widening casting* y el *narrowing casting* en Java?",
    options: [
      "Widening casting es la conversión de un tipo más pequeño a uno más grande, y narrowing casting es lo contrario",
      "Ambos son lo mismo",
      "Widening es para conversiones automáticas y narrowing para conversiones manuales",
      "Ninguno de los anteriores",
    ],
    answer: 0,
    explanation:
      "El widening casting convierte un tipo de dato a uno de mayor capacidad, mientras que el narrowing casting requiere una conversión explícita.",
    subtheme: "Casting",
    group: "Java",
  },
  {
    question: "¿Qué es el autoboxing en Java?",
    options: [
      "La conversión automática de un tipo primitivo a su objeto envolvente",
      "La conversión de un objeto a un tipo primitivo",
      "La inferencia de tipos en variables",
      "La declaración de variables sin tipo",
    ],
    answer: 0,
    explanation:
      "El autoboxing es la conversión automática de un tipo primitivo a su correspondiente objeto envolvente.",
    subtheme: "Autoboxing",
    group: "Java",
  },
  {
    question: "¿Cómo se realiza el unboxing de un `Integer` a un `int`?",
    options: [
      "Asignando el objeto `Integer` a una variable `int`",
      "Usando un método especial",
      "No es posible",
      "Mediante casting explícito",
    ],
    answer: 0,
    explanation:
      "El unboxing se realiza asignando un objeto `Integer` a una variable `int`, lo que extrae el valor primitivo.",
    subtheme: "Autoboxing",
    group: "Java",
  },
  {
    question: "¿El autoboxing y el unboxing afectan el rendimiento en Java?",
    options: [
      "Sí, pueden introducir sobrecarga en operaciones intensivas",
      "No, son optimizados por el compilador",
      "Solo en versiones antiguas de Java",
      "Solo en aplicaciones móviles",
    ],
    answer: 0,
    explanation:
      "El autoboxing y unboxing pueden afectar el rendimiento si se usan en exceso en operaciones críticas.",
    subtheme: "Autoboxing",
    group: "Java",
  },
  {
    question: "¿Qué es un `record` en Java 14+?",
    options: [
      "Una clase mutable",
      "Una clase inmutable",
      "Un tipo primitivo",
      "Un tipo de dato por referencia",
    ],
    answer: 1,
    explanation:
      "`record` es una clase especial en Java 14+ que es inmutable por defecto y se usa para almacenar datos sin necesidad de escribir mucho código.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question: "¿Qué ventaja principal ofrece el uso de `records` en Java?",
    options: [
      "Menos código",
      "Mayor rendimiento",
      "Mayor flexibilidad",
      "Más facilidad de uso",
    ],
    answer: 0,
    explanation:
      "Los `records` permiten crear objetos inmutables con menos código, sin necesidad de escribir constructores o métodos `toString()`, `hashCode()` y `equals()` manualmente.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question: "¿Cuál de los siguientes es un ejemplo de un `record` en Java?",
    options: [
      "class Persona {}",
      "interface Persona {}",
      "record Persona(String nombre, int edad) {}",
      "enum Persona {}",
    ],
    answer: 2,
    explanation:
      "Un `record` en Java se define con la palabra clave `record` seguida de los atributos que tendrá.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question: "¿Qué característica define a los objetos inmutables en Java?",
    options: [
      "Pueden cambiar su estado después de la creación",
      "No pueden cambiar su estado después de la creación",
      "Pueden ser modificados por otras clases",
      "Solo pueden ser usados por una instancia",
    ],
    answer: 1,
    explanation:
      "Los objetos inmutables no pueden cambiar su estado después de haber sido creados, lo que significa que sus atributos no pueden modificarse.",
    subtheme: "Inmutabilidad vs Mutabilidad",
    group: "Java",
  },
  {
    question: "¿Qué tipo de objetos permite la mutabilidad en Java?",
    options: [
      "Objetos cuyo estado no puede cambiar",
      "Objetos cuyo estado puede cambiar",
      "Objetos que no pueden ser modificados",
      "Ninguno",
    ],
    answer: 1,
    explanation:
      "Los objetos mutables pueden cambiar su estado después de haber sido creados, lo que permite modificar sus atributos.",
    subtheme: "Inmutabilidad vs Mutabilidad",
    group: "Java",
  },
  {
    question:
      "¿Cuál de las siguientes clases es un ejemplo de un objeto inmutable en Java?",
    options: ["String", "ArrayList", "HashMap", "Date"],
    answer: 0,
    explanation:
      "La clase `String` en Java es un ejemplo clásico de un objeto inmutable. Una vez que se crea un objeto `String`, no puede modificarse.",
    subtheme: "Inmutabilidad vs Mutabilidad",
    group: "Java",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre un objeto mutable e inmutable?",
    options: [
      "Los objetos mutables pueden cambiar su estado, los inmutables no",
      "Los objetos inmutables pueden cambiar su estado",
      "Los objetos inmutables son más rápidos",
      "No hay diferencia",
    ],
    answer: 0,
    explanation:
      "La principal diferencia es que los objetos mutables pueden cambiar su estado después de su creación, mientras que los inmutables no pueden hacerlo.",
    subtheme: "Inmutabilidad vs Mutabilidad",
    group: "Java",
  },
  {
    question:
      "¿Qué modificador de acceso tienen los atributos de un `record` en Java?",
    options: ["private", "public", "protected", "final"],
    answer: 3,
    explanation:
      "Los atributos de un `record` en Java son automáticamente `final`, lo que significa que no pueden modificarse después de la creación del objeto.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question: "¿Cómo se crea un `record` en Java?",
    options: [
      "record Nombre {}",
      "class Nombre {}",
      "interface Nombre {}",
      "enum Nombre {}",
    ],
    answer: 0,
    explanation:
      "Para crear un `record` en Java se utiliza la palabra clave `record` seguida del nombre del `record` y los parámetros del constructor.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question:
      "¿Cuál de las siguientes características NO es típica de los objetos inmutables?",
    options: [
      "No pueden cambiar su estado después de la creación",
      "Son más seguros para su uso en entornos multi-hilo",
      "Pueden ser modificados por otros objetos",
      "Son más fáciles de depurar",
    ],
    answer: 2,
    explanation:
      "Los objetos inmutables no pueden ser modificados por otros objetos, lo que los hace más seguros y fáciles de depurar.",
    subtheme: "Inmutabilidad vs Mutabilidad",
    group: "Java",
  },
  {
    question:
      "¿Qué palabra clave se utiliza para definir un `record` en Java 14+?",
    options: ["record", "class", "interface", "enum"],
    answer: 0,
    explanation:
      "En Java 14+, se utiliza la palabra clave `record` para definir un tipo especial de clase inmutable.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question:
      "¿Por qué los `records` son más eficientes que las clases tradicionales para almacenar datos?",
    options: [
      "Porque ocupan menos memoria",
      "Porque tienen menos sobrecarga de métodos",
      "Porque no permiten herencia",
      "Porque no pueden ser modificados",
    ],
    answer: 1,
    explanation:
      "Los `records` eliminan la necesidad de escribir métodos como `toString()`, `hashCode()` y `equals()`, lo que reduce la sobrecarga de código y mejora la eficiencia.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question: "¿Cómo se define un `record` con múltiples campos?",
    options: [
      "record Persona(String nombre, int edad) {}",
      "record Persona(String nombre) {}",
      "class Persona(String nombre, int edad) {}",
      "interface Persona(String nombre, int edad) {}",
    ],
    answer: 0,
    explanation:
      "Un `record` con múltiples campos se define usando la palabra clave `record`, seguida de los campos entre paréntesis.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question: "¿Cuándo debe ser usado un `record` en Java?",
    options: [
      "Cuando se necesita una clase inmutable para almacenar datos",
      "Cuando se necesita una clase mutable",
      "Cuando se necesita herencia",
      "Cuando se necesita almacenar solo un tipo de datos",
    ],
    answer: 0,
    explanation:
      "Los `records` deben usarse cuando se necesita una clase inmutable para almacenar datos de manera eficiente.",
    subtheme: "Record en Java",
    group: "Java",
  },
  {
    question:
      "¿Cómo se realiza el cambio de un objeto mutable a inmutable en Java?",
    options: [
      "Usando el modificador `final` en las clases",
      "Utilizando `records`",
      "Utilizando `String` en lugar de `StringBuilder`",
      "No es posible",
    ],
    answer: 1,
    explanation:
      "Una forma de hacer un objeto inmutable es usar un `record`, que define un objeto que no puede cambiar después de su creación.",
    subtheme: "Inmutabilidad vs Mutabilidad",
    group: "Java",
  },
  {
    question:
      "¿Qué clase en Java se utiliza para representar secuencias de caracteres inmutables?",
    options: [
      "String",
      "StringBuilder",
      "StringBuffer",
      "Character",
      "CharSequence",
    ],
    answer: 0,
    explanation:
      "`String` es la clase inmutable en Java que representa secuencias de caracteres.",
    subtheme: "String en Java",
    group: "Java",
  },
  {
    question:
      "¿Cuál de las siguientes clases es mutable y permite la manipulación eficiente de cadenas de texto?",
    options: [
      "StringBuilder",
      "String",
      "StringBuffer",
      "CharSequence",
      "TextBlock",
    ],
    answer: 0,
    explanation:
      "`StringBuilder` es mutable y está diseñada para la manipulación eficiente de cadenas.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Cuál es la diferencia principal entre `StringBuilder` y `StringBuffer`?",
    options: [
      "`StringBuilder` es más rápido que `StringBuffer` porque no es sincronizado",
      "`StringBuilder` es inmutable",
      "`StringBuffer` es más rápido",
      "No hay diferencia",
      "`StringBuilder` no permite concatenación",
    ],
    answer: 0,
    explanation:
      "`StringBuilder` es más rápido que `StringBuffer` porque no es sincronizado, lo que lo hace más eficiente en entornos no concurrentes.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué operación se realiza cuando concatenas dos objetos `String`?",
    options: [
      "Se crea un nuevo objeto String",
      "Se modifica el objeto original",
      "El objeto original se reemplaza",
      "No ocurre ninguna operación",
    ],
    answer: 0,
    explanation:
      "Cuando concatenas dos objetos `String`, se crea un nuevo objeto `String` debido a la inmutabilidad de la clase `String`.",
    subtheme: "String en Java",
    group: "Java",
  },
  {
    question:
      "¿Cuál de los siguientes métodos de la clase `String` no modifica el objeto original?",
    options: [
      "toLowerCase()",
      "concat()",
      "replace()",
      "trim()",
      "substring()",
    ],
    answer: 0,
    explanation:
      "Métodos como `toLowerCase()`, `replace()`, `substring()`, etc., no modifican el objeto `String` original. En su lugar, devuelven una nueva instancia de `String`.",
    subtheme: "String en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué clase es recomendada para la manipulación de cadenas en entornos de alto rendimiento donde las cadenas son modificadas frecuentemente?",
    options: [
      "String",
      "StringBuffer",
      "StringBuilder",
      "CharSequence",
      "TextBlock",
    ],
    answer: 2,
    explanation:
      "`StringBuilder` es la opción recomendada para manipular cadenas de texto de forma eficiente en entornos de alto rendimiento.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Cómo se puede comparar dos objetos `String` para verificar si son iguales?",
    options: [
      "Con el operador `==`",
      "Con el método `equals()`",
      "Con el método `compareTo()`",
      "Con el operador `!=`",
      "Con el método `compare()`",
    ],
    answer: 1,
    explanation:
      "Para comparar el contenido de dos objetos `String` se debe usar el método `equals()`, ya que el operador `==` compara referencias, no el contenido.",
    subtheme: "String en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué clase se debe usar para realizar concatenaciones de cadenas en un entorno de alta concurrencia?",
    options: [
      "StringBuilder",
      "StringBuffer",
      "String",
      "CharSequence",
      "String.concat()",
    ],
    answer: 1,
    explanation:
      "`StringBuffer` es la clase adecuada para entornos de alta concurrencia, ya que es sincronizada.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué clase debe usarse cuando no es necesario preocuparse por la concurrencia, pero se requiere un rendimiento optimizado en la manipulación de cadenas?",
    options: [
      "StringBuilder",
      "StringBuffer",
      "String",
      "String",
      "CharSequence",
    ],
    answer: 0,
    explanation:
      "`StringBuilder` es más eficiente que `StringBuffer` en la manipulación de cadenas cuando no se necesita sincronización.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Cuál es el propósito del método `append()` en la clase `StringBuilder`?",
    options: [
      "Agregar texto al final de una cadena",
      "Reemplazar un substring",
      "Eliminar una cadena",
      "Concatenar dos objetos String",
      "Convertir un objeto String en mayúsculas",
    ],
    answer: 0,
    explanation:
      "`append()` agrega texto al final de la cadena en `StringBuilder` de manera eficiente.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre la clase `String` es incorrecta?",
    options: [
      "`String` es una clase inmutable",
      "`String` es eficiente para modificaciones frecuentes de texto",
      "`String` está diseñado para usarse principalmente en entornos de bajo rendimiento",
      "`String` puede ser concatenado usando el operador `+`",
    ],
    answer: 1,
    explanation:
      "`String` no es eficiente para modificaciones frecuentes de texto debido a su inmutabilidad. Para ello, se deben usar `StringBuilder` o `StringBuffer`.",
    subtheme: "String en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué método de `StringBuilder` se usa para eliminar una porción de texto?",
    options: [
      "delete()",
      "deleteCharAt()",
      "replace()",
      "trimToSize()",
      "insert()",
    ],
    answer: 0,
    explanation:
      "`delete()` se utiliza para eliminar una porción de texto en `StringBuilder`.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué método de `StringBuffer` permite insertar texto en una posición específica?",
    options: [
      "insert()",
      "append()",
      "replace()",
      "substring()",
      "trimToSize()",
    ],
    answer: 0,
    explanation:
      "`insert()` permite insertar texto en una posición específica en `StringBuffer`.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué diferencia fundamental existe entre `StringBuilder` y `StringBuffer`?",
    options: [
      "`StringBuilder` es más rápido que `StringBuffer` porque no es sincronizado",
      "`StringBuffer` es más rápido que `StringBuilder`",
      "`StringBuilder` permite operaciones sincronizadas",
      "`StringBuffer` permite operaciones no sincronizadas",
    ],
    answer: 0,
    explanation:
      "`StringBuilder` es más rápido que `StringBuffer` porque no está sincronizado, lo que lo hace más adecuado para entornos de un solo hilo.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
  },
  {
    question:
      "¿Qué estructura condicional en Java se utiliza cuando solo necesitas tomar una decisión simple?",
    options: ["if", "switch", "for", "while"],
    answer: 0,
    explanation:
      "La estructura `if` es la más sencilla para tomar decisiones simples en Java.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Cuál es la diferencia principal entre `if-else` y `if-else-if` en Java?",
    options: [
      "`if-else-if` permite evaluar varias condiciones secuenciales",
      "`if-else` permite más de dos opciones",
      "`if-else-if` es más rápido",
      "`if-else` solo acepta una condición",
    ],
    answer: 0,
    explanation:
      "`if-else-if` permite evaluar múltiples condiciones de manera secuencial, mientras que `if-else` solo maneja dos caminos (verdadero o falso).",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Qué estructura condicional se recomienda utilizar cuando se tienen múltiples opciones de valor constante?",
    options: ["switch", "if-else", "for", "while"],
    answer: 0,
    explanation:
      "El `switch` es ideal para comparar múltiples valores constantes y seleccionar entre ellos.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "En un `switch`, ¿qué sucede si no se incluye un `break` al final de un `case`?",
    options: [
      "Se ejecutan todos los `case` posteriores hasta encontrar un `break`",
      "El código se detiene",
      "El programa lanza una excepción",
      "Nada especial sucede",
    ],
    answer: 0,
    explanation:
      "Si no se incluye un `break`, el flujo del programa continuará ejecutando los `case` posteriores, lo que se llama *fall-through*.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Cómo se puede mejorar el rendimiento de un `switch` en Java 12+?",
    options: [
      "Usando el `switch` mejorado que soporta expresiones `String`",
      "Usando `if-else-if` en lugar de `switch`",
      "Convirtiendo el `switch` en un `for`",
      "Usando un `switch` tradicional con `break`",
    ],
    answer: 0,
    explanation:
      "El `switch` mejorado en Java 12+ permite usar expresiones `String` y otras características, lo que mejora su flexibilidad y rendimiento.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de datos puede manejar un `switch` tradicional en Java?",
    options: [
      "int, char, byte, short, enum",
      "String, char, Object",
      "boolean, char",
      "int, String, double",
    ],
    answer: 0,
    explanation:
      "El `switch` tradicional en Java maneja tipos como `int`, `char`, `byte`, `short` y `enum`.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "En un `if-else`, ¿qué sucede si la condición del `if` no se cumple?",
    options: [
      "Se ejecuta el bloque de código en el `else`",
      "Se lanza una excepción",
      "El programa termina",
      "El bloque `else` se omite",
    ],
    answer: 0,
    explanation:
      "Si la condición del `if` no se cumple, el bloque de código en el `else` se ejecuta.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question: "¿Cómo se puede mejorar un `switch` tradicional en Java 12+?",
    options: [
      "Utilizando un `switch` mejorado con expresiones como `String`",
      "Cambiarlo a `if-else` para mayor flexibilidad",
      "Usar `switch-case` con operadores lógicos",
      "Nada se puede mejorar",
    ],
    answer: 0,
    explanation:
      "El `switch` mejorado en Java 12+ permite trabajar con más tipos de datos y expresiones como `String`.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Cómo puedes manejar un caso específico cuando usas `switch` y necesitas que se ejecute un bloque de código solo cuando se cumpla una condición?",
    options: [
      "Usar un `break` después del `case` correspondiente",
      "Incluir un `default` al final",
      "Agregar una condición `if` dentro del `case`",
      "Llamar a un método de retorno",
    ],
    answer: 0,
    explanation:
      "Al usar `switch`, el `break` se utiliza para evitar que el flujo de ejecución continúe en los `case` siguientes.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "En una estructura `if-else`, ¿cómo verificarías si un número es negativo?",
    options: [
      "if (num < 0) { ... }",
      "if (num > 0) { ... }",
      "if (num != 0) { ... }",
      "if (num == 0) { ... }",
    ],
    answer: 0,
    explanation: "La condición `num < 0` verifica si el número es negativo.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Qué palabra clave se utiliza en un `switch` para manejar un caso por defecto, si ninguno de los valores coincide?",
    options: ["default", "else", "otherwise", "catch"],
    answer: 0,
    explanation:
      "La palabra clave `default` se usa para manejar cualquier valor que no coincida con los casos especificados en un `switch`.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "En un `switch` mejorado en Java 12+, ¿qué tipos de valores pueden ser utilizados como `case`?",
    options: [
      "String, Enum, expresiones constantes",
      "Solo enteros y caracteres",
      "Solo cadenas de texto",
      "Solo valores booleanos",
    ],
    answer: 0,
    explanation:
      "En el `switch` mejorado en Java 12+, se pueden utilizar valores como `String`, `Enum` y expresiones constantes.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "Si en un `if` deseas verificar si una variable `x` es mayor que 10 y menor que 20, ¿cuál es la condición correcta?",
    options: [
      "if (x > 10 && x < 20)",
      "if (x > 10 || x < 20)",
      "if (x >= 10 && x <= 20)",
      "if (x != 10 && x != 20)",
    ],
    answer: 0,
    explanation:
      "La condición correcta es `if (x > 10 && x < 20)` para verificar si `x` está entre 10 y 20.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Cómo se evita la ejecución de múltiples bloques en un `switch` cuando se usa `fall-through`?",
    options: [
      "Incluir un `break` al final de cada `case`",
      "Usar un `return` dentro del `case`",
      "Agregar un `continue` dentro del `case`",
      "Colocar el `default` al final",
    ],
    answer: 0,
    explanation:
      "El uso de un `break` después de cada `case` evita que el flujo de ejecución continúe con los siguientes casos.",
    subtheme: "Estructuras de control condicional",
    group: "Java",
  },
  {
    question:
      "¿Qué estructura iterativa se utiliza cuando conocemos cuántas veces se debe ejecutar el bucle?",
    options: ["for", "while", "do-while", "for-each"],
    answer: 3,
    explanation:
      "El bucle `for` es adecuado cuando conocemos el número exacto de iteraciones.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Cuál de las siguientes estructuras de control es ideal para recorrer una colección como un `List`, `Set` o `Map`?",
    options: ["for-each", "while", "do-while", "for"],
    answer: 0,
    explanation:
      "El bucle `for-each` es ideal para recorrer colecciones en Java de manera sencilla.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question: "En un bucle `while`, ¿cuándo se evalúa la condición?",
    options: [
      "Antes de cada iteración",
      "Después de cada iteración",
      "Solo al principio",
      "Nunca se evalúa",
    ],
    answer: 0,
    explanation:
      "La condición del bucle `while` se evalúa antes de cada iteración, por lo que es posible que el bloque de código no se ejecute si la condición es falsa desde el principio.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Qué sucede si la condición de un bucle `while` es falsa desde el principio?",
    options: [
      "El bloque de código dentro del `while` no se ejecutará",
      "El bucle entra en un bucle infinito",
      "El código se ejecutará al menos una vez",
      "Se ejecuta una vez y luego se detiene",
    ],
    answer: 3,
    explanation:
      "Si la condición del `while` es falsa desde el principio, el bloque de código no se ejecutará ni una vez.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre un bucle `while` y un bucle `do-while`?",
    options: [
      "En un `do-while`, el bloque de código siempre se ejecuta al menos una vez",
      "El `while` evalúa la condición después de cada iteración",
      "El `do-while` evalúa la condición antes de la primera iteración",
      "No hay diferencia, ambos funcionan igual",
    ],
    answer: 0,
    explanation:
      "La principal diferencia es que en el bucle `do-while`, el bloque de código se ejecuta al menos una vez, ya que la condición se evalúa después de la ejecución.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "En un bucle `for-each`, ¿qué tipo de variable se utiliza para iterar sobre la colección?",
    options: [
      "Una variable de tipo adecuado para los elementos de la colección",
      "Una variable `int` para los índices",
      "Una variable `boolean` para la condición",
      "Una variable `String`",
    ],
    answer: 1,
    explanation:
      "El bucle `for-each` utiliza una variable de tipo adecuado para los elementos de la colección, como `int`, `String`, o cualquier tipo que sea compatible.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de ciclo se utiliza cuando no sabemos cuántas veces necesitamos ejecutar un bloque de código, pero sí sabemos que debemos ejecutar al menos una vez?",
    options: ["do-while", "while", "for-each", "for"],
    answer: 0,
    explanation:
      "El bucle `do-while` es útil cuando necesitamos ejecutar al menos una vez, ya que la condición se evalúa después de la ejecución.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Qué hará un bucle `for` si no se especifica una condición de salida?",
    options: [
      "Entrará en un bucle infinito",
      "Se ejecutará una vez",
      "Detendrá la ejecución inmediatamente",
      "Nada, es necesario especificar una condición",
    ],
    answer: 0,
    explanation:
      "Si no se especifica una condición de salida, el bucle `for` continuará ejecutándose indefinidamente, lo que resultará en un bucle infinito.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Qué tipo de bucle se recomienda para recorrer un array de longitud fija?",
    options: ["for", "while", "do-while", "for-each"],
    answer: 2,
    explanation:
      "El bucle `for` es ideal para recorrer arrays de longitud fija cuando sabemos cuántas iteraciones necesitamos.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "En el siguiente código: `for (int i = 0; i < 10; i++) { System.out.println(i); }`, ¿qué hará el bucle?",
    options: [
      "Imprime los números del 0 al 9",
      "Imprime los números del 1 al 10",
      "Imprime solo el número 0",
      "Causa un bucle infinito",
    ],
    answer: 0,
    explanation:
      "El bucle `for` imprimirá los números del 0 al 9, ya que la condición es `i < 10`.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question: "¿Cómo se puede evitar un bucle infinito en un `while`?",
    options: [
      "Asegurando que la condición se vuelva falsa en algún momento",
      "Asegurando que el bucle se ejecute infinitamente",
      "Usando un `break` al inicio del bucle",
      "No es posible evitarlo",
    ],
    answer: 0,
    explanation:
      "Para evitar un bucle infinito, es necesario asegurarse de que la condición se vuelva falsa en algún momento, lo que interrumpirá la ejecución.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "En el siguiente código, ¿qué imprimirá? `int[] arr = {1, 2, 3}; for (int num : arr) { System.out.println(num); }`",
    options: ["1, 2, 3", "0, 1, 2", "1, 2", "Error de sintaxis"],
    answer: 0,
    explanation:
      "El bucle `for-each` recorrerá cada elemento del array y lo imprimirá en orden, resultando en `1, 2, 3`.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Cuál es la forma correcta de declarar un bucle `while` en Java?",
    options: [
      "while (condición) { bloque de código }",
      "while { bloque de código }",
      "for { bloque de código }",
      "if (condición) { bloque de código }",
    ],
    answer: 1,
    explanation:
      "La forma correcta es `while (condición) { bloque de código }`, donde `condición` se evalúa antes de cada iteración.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Cómo se detendría un bucle `for-each` antes de que termine todas las iteraciones?",
    options: [
      "Usando `break`",
      "Usando `return`",
      "Usando `continue`",
      "No es posible detenerlo",
    ],
    answer: 3,
    explanation:
      "El bucle `for-each` puede detenerse antes de que termine todas las iteraciones usando la palabra clave `break`.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question:
      "¿Qué hará un bucle `do-while` si la condición es falsa desde el principio?",
    options: [
      "Ejecutará el bloque de código al menos una vez",
      "No ejecutará el bloque de código",
      "Entrará en un bucle infinito",
      "Detendrá la ejecución",
    ],
    answer: 0,
    explanation:
      "El bucle `do-while` ejecuta el bloque de código al menos una vez, incluso si la condición es falsa desde el principio.",
    subtheme: "Estructuras de control Iterativas",
    group: "Java",
  },
  {
    question: "¿Qué hace la instrucción `break` en un bucle?",
    options: [
      "Sigue con la siguiente iteración",
      "Finaliza la ejecución del método",
      "Finaliza el bucle o el `switch`",
      "Ignora la iteración actual",
    ],
    answer: 2,
    explanation:
      "La instrucción `break` se utiliza para salir de un bucle o un `switch` antes de que finalice su ejecución normal.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Cómo funciona la instrucción `continue`?",
    options: [
      "Finaliza la ejecución del método",
      "Reinicia el bucle desde el principio",
      "Sigue con la siguiente iteración del bucle",
      "Finaliza el bucle inmediatamente",
    ],
    answer: 2,
    explanation:
      "La instrucción `continue` salta la iteración actual del bucle y pasa a la siguiente iteración.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question:
      "¿Qué valor devuelve un método que tiene una instrucción `return`?",
    options: [
      "No devuelve nada",
      "Un valor o no devuelve nada, dependiendo de la firma del método",
      "Siempre devuelve un `null`",
      "Siempre retorna un valor vacío",
    ],
    answer: 1,
    explanation:
      "La instrucción `return` finaliza la ejecución del método y puede devolver un valor dependiendo de su tipo de retorno.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Qué sucede si un `continue` se encuentra en un `switch`?",
    options: [
      "Se salta a la siguiente declaración `case`",
      "Se detiene la ejecución del `switch`",
      "No tiene ningún efecto",
      "Se omiten las iteraciones siguientes del bucle",
    ],
    answer: 2,
    explanation:
      "La instrucción `continue` no tiene efecto en un `switch`, ya que está diseñada para los bucles.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Qué hará un `break` dentro de un `for`?",
    options: [
      "Finaliza la ejecución del bucle inmediatamente",
      "Sigue ejecutando el bucle normalmente",
      "Pasa a la siguiente iteración del bucle",
      "Ignora el bloque de código en el que se encuentra",
    ],
    answer: 0,
    explanation:
      "La instrucción `break` termina la ejecución del bucle inmediatamente y sale del mismo.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question:
      "¿Cuál es el resultado de ejecutar `return` en un método que no tiene un tipo de retorno?",
    options: [
      "Generará un error de compilación",
      "El método terminará sin devolver nada",
      "El método devolverá un `null`",
      "El método no terminará de ejecutarse",
    ],
    answer: 0,
    explanation:
      "Si un método no tiene un tipo de retorno, no se puede utilizar `return`, ya que genera un error de compilación.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Qué pasa cuando un `continue` se encuentra en un bucle `for`?",
    options: [
      "Ignora la condición del bucle",
      "El bucle se detiene",
      "La iteración actual se omite y pasa a la siguiente iteración",
      "El bucle retrocede una iteración",
    ],
    answer: 2,
    explanation:
      "La instrucción `continue` omite el resto de la iteración y pasa a la siguiente iteración del bucle.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Cómo se utiliza `break` en un `switch`?",
    options: [
      "Para ejecutar todas las opciones dentro del `switch`",
      "Para omitir el `case` actual",
      "Para salir de la declaración `switch` después de ejecutar un caso",
      "Para saltar a otro `case`",
    ],
    answer: 2,
    explanation:
      "En un `switch`, `break` se utiliza para salir del bloque `switch` después de ejecutar un caso.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿En qué tipo de estructuras no se puede usar `continue`?",
    options: [
      "En estructuras `for` y `switch`",
      "En estructuras `if` y `switch`",
      "En estructuras `for`, `while` y `do-while`",
      "En todas las estructuras",
    ],
    answer: 1,
    explanation:
      "`continue` solo puede usarse dentro de bucles, como `for`, `while` y `do-while`, no tiene efecto en estructuras como `if` o `switch`.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Qué sucede si un `return` se encuentra dentro de un bucle?",
    options: [
      "El bucle continúa ejecutándose",
      "El bucle retrocede una iteración",
      "El método termina inmediatamente y el flujo se transfiere a la llamada al método",
      "El método vuelve al inicio y reinicia el bucle",
    ],
    answer: 2,
    explanation:
      "Cuando se ejecuta un `return` en un método dentro de un bucle, el método termina y el control se transfiere a la llamada al método.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Cómo puede un `break` influir en un bucle `while`?",
    options: [
      "Detiene la ejecución del bucle",
      "Omite la iteración actual y pasa a la siguiente",
      "No tiene efecto",
      "Reinicia el bucle desde el principio",
    ],
    answer: 0,
    explanation:
      "`break` detiene la ejecución de cualquier bucle, incluyendo `while`, y sale del mismo inmediatamente.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Es posible usar un `return` en un método `void`?",
    options: [
      "Sí, pero solo con un valor `null`",
      "No, los métodos `void` no pueden usar `return`",
      "Sí, para salir del método sin retornar un valor",
      "No, generará un error de compilación",
    ],
    answer: 2,
    explanation:
      "En un método `void` se puede usar `return` sin retornar un valor, simplemente para salir del método.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿En qué momento se ejecuta el `return` en un método?",
    options: [
      "Después de completar todas las iteraciones de un bucle",
      "Al final del método, automáticamente",
      "Solo cuando se llama explícitamente",
      "Cuando el flujo del programa lo encuentra",
    ],
    answer: 3,
    explanation:
      "`return` se ejecuta cuando el flujo del programa lo encuentra y termina la ejecución del método.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
  {
    question: "¿Cómo se comporta el `continue` en un bucle `while`?",
    options: [
      "Omite la iteración actual y pasa a la siguiente",
      "Hace que el bucle se ejecute indefinidamente",
      "Detiene la ejecución del bucle",
      "Reinicia el bucle desde el principio",
    ],
    answer: 0,
    explanation:
      "`continue` en un bucle `while` omite la iteración actual y pasa a la siguiente evaluación de la condición.",
    subtheme: "Estructuras de control de salto",
    group: "Java",
  },
];
