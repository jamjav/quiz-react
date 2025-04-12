export const allQuestions = [
  {
    question: "¿Cuál de los siguientes es un tipo de dato primitivo en Java?",
    options: ["String", "int", "Integer", "Scanner"],
    answer: 1,
    explanation:
      "int es un tipo primitivo, mientras que los demás son clases u objetos.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué tipo de dato se usa para almacenar un solo carácter en Java?",
    options: ["char", "String", "Character", "boolean"],
    answer: 0,
    explanation: "char almacena un único carácter utilizando comillas simples.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Cuál de estos tipos primitivos puede contener números decimales?",
    options: ["boolean", "int", "double", "char"],
    answer: 2,
    explanation:
      "double se utiliza para representar números de punto flotante (decimales).",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el tamaño en bits de una variable tipo `byte` en Java?",
    options: ["32 bits", "16 bits", "8 bits", "64 bits"],
    answer: 2,
    explanation: "El tipo byte ocupa 8 bits de memoria.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué tipo de dato se usa para valores true o false?",
    options: ["boolean", "int", "char", "short"],
    answer: 0,
    explanation: "El tipo boolean representa solo dos valores: true o false.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Cuál de los siguientes tipos de datos tiene mayor precisión para decimales?",
    options: ["float", "double", "int", "short"],
    answer: 1,
    explanation:
      "double tiene más precisión que float al manejar números decimales.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué tipo de dato usarías para representar números enteros grandes?",
    options: ["short", "byte", "long", "float"],
    answer: 2,
    explanation:
      "long permite almacenar números enteros grandes (hasta 64 bits).",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el valor por defecto de un `boolean` en Java?",
    options: ["true", "0", "false", "null"],
    answer: 2,
    explanation: "El valor por defecto de boolean es false.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál de los siguientes no es un tipo de dato primitivo?",
    options: ["int", "float", "String", "char"],
    answer: 2,
    explanation: "String es un objeto, no un tipo primitivo.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué tipo primitivo es más adecuado para almacenar edades?",
    options: ["int", "double", "char", "boolean"],
    answer: 0,
    explanation: "int es ideal para almacenar enteros como edades.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué tipo primitivo se debe usar para representar números pequeños entre -128 y 127?",
    options: ["byte", "int", "short", "char"],
    answer: 0,
    explanation: "El tipo byte cubre ese rango de valores.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué representa el tipo `char` en Java?",
    options: [
      "Una cadena de caracteres",
      "Un número decimal",
      "Un carácter Unicode",
      "Un valor booleano",
    ],
    answer: 2,
    explanation: "char representa un solo carácter Unicode.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el tipo de dato por defecto para números decimales?",
    options: ["float", "double", "int", "BigDecimal"],
    answer: 1,
    explanation:
      "double es el tipo por defecto para literales decimales en Java.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué ocurre si intentas almacenar un número decimal en una variable tipo `int`?",
    options: [
      "Se redondea",
      "Se lanza un error en tiempo de compilación",
      "Se convierte automáticamente",
      "Se convierte en String",
    ],
    answer: 1,
    explanation:
      "Se necesita un cast explícito; de lo contrario, se lanza un error de compilación.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué tipo de dato se usa para representar una colección de caracteres?",
    options: ["char", "String", "char[]", "Ambos String y char[]"],
    answer: 3,
    explanation:
      "Tanto String como char[] pueden representar colecciones de caracteres, aunque String es inmutable.",
    subtheme: "Tipos de Datos",
    group: "Java",
    level: "Junior",
  },

  {
    question:
      "¿Cuál es el propósito principal de la clase Phaser en java.util.concurrent?",
    options: [
      "Permitir múltiples fases de sincronización reutilizable",
      "Controlar la visibilidad de variables compartidas",
      "Evitar la creación de deadlocks",
      "Sincronizar tareas usando semáforos",
    ],
    answer: 0,
    explanation:
      "Phaser permite sincronizar múltiples tareas en diferentes fases de ejecución, más flexible que CyclicBarrier o CountDownLatch.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ventaja ofrece ForkJoinPool sobre ThreadPoolExecutor en cargas recursivas?",
    options: [
      "Mayor visibilidad de errores",
      "Menor consumo de memoria heap",
      "Trabajo robado (work stealing) eficiente entre hilos",
      "Bloqueo sincrónico garantizado",
    ],
    answer: 2,
    explanation:
      "ForkJoinPool implementa work-stealing, donde hilos inactivos 'roban' trabajo de colas de otros, ideal para tareas recursivas.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el objetivo de la anotación @Contended en Java 8+?",
    options: [
      "Evitar el false sharing entre campos de variables",
      "Marcar variables como no compartidas",
      "Sincronizar el acceso a variables volátiles",
      "Restringir el acceso desde otros hilos",
    ],
    answer: 0,
    explanation:
      "@Contended se utiliza para evitar el false sharing, agregando padding entre campos accedidos por diferentes hilos.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué afirmación es cierta sobre CompletableFuture?",
    options: [
      "No puede encadenarse como Promise",
      "No es compatible con programación funcional",
      "Puede combinar múltiples tareas asincrónicas",
      "Solo puede ejecutarse en el hilo principal",
    ],
    answer: 2,
    explanation:
      "CompletableFuture permite componer y combinar tareas asincrónicas de forma funcional, similar a Promises en JavaScript.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el comportamiento de un StampedLock en modo de lectura optimista?",
    options: [
      "Bloquea todos los hilos de escritura",
      "Puede invalidarse si otro hilo escribe",
      "Impide el acceso concurrente",
      "Lanza excepción si otro hilo accede al mismo recurso",
    ],
    answer: 1,
    explanation:
      "El modo de lectura optimista no bloquea otros hilos, pero debe validarse porque puede invalidarse si otro hilo escribe.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la diferencia clave entre Lock.readLock() y Lock.tryLock()?",
    options: [
      "readLock() es bloqueante y tryLock() no",
      "tryLock() lanza excepción al fallar",
      "readLock() siempre bloquea todos los accesos",
      "tryLock() es exclusivo para hilos daemon",
    ],
    answer: 0,
    explanation:
      "readLock() bloquea hasta obtener acceso; tryLock() intenta obtener el lock sin bloquear y puede fallar silenciosamente.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué clase usarías para implementar una estructura de datos concurrente no bloqueante?",
    options: ["ConcurrentLinkedQueue", "Vector", "ArrayList", "Hashtable"],
    answer: 0,
    explanation:
      "ConcurrentLinkedQueue es una cola no bloqueante que utiliza algoritmos basados en CAS (Compare-And-Swap).",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué garantiza el uso del método volatile en una variable?",
    options: [
      "Sincronización de acceso mutuo",
      "Visibilidad de cambios entre hilos",
      "Evita race conditions automáticamente",
      "Bloqueo explícito en todos los núcleos",
    ],
    answer: 1,
    explanation:
      "Volatile garantiza visibilidad: los cambios hechos por un hilo son visibles por otros inmediatamente.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si dos hilos obtienen un lock recíprocamente en diferente orden?",
    options: [
      "Se produce un starve",
      "Ambos se ejecutan sin bloqueo",
      "Se genera un deadlock",
      "El segundo hilo es suspendido automáticamente",
    ],
    answer: 2,
    explanation:
      "Cuando dos hilos esperan locks que el otro posee, se produce un deadlock: ambos quedan bloqueados indefinidamente.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la mejor manera de evitar deadlocks en estructuras sincronizadas complejas?",
    options: [
      "Sincronizar solo métodos públicos",
      "Adquirir locks siempre en el mismo orden",
      "Evitar el uso de synchronized",
      "Ignorar interbloqueos menores",
    ],
    answer: 1,
    explanation:
      "Adquirir locks en el mismo orden evita deadlocks al eliminar ciclos de espera circular.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método de ExecutorService espera la terminación de todas las tareas antes de continuar?",
    options: [
      "shutdownNow()",
      "terminateAll()",
      "awaitTermination()",
      "stopAndWait()",
    ],
    answer: 2,
    explanation:
      "awaitTermination() espera un tiempo máximo para que todas las tareas finalicen antes de continuar.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón de diseño es más comúnmente asociado con multithreading en Java?",
    options: ["Strategy", "Observer", "Producer-Consumer", "Singleton"],
    answer: 2,
    explanation:
      "El patrón Producer-Consumer es común para implementar colas de tareas multihilo usando buffers compartidos.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ventaja ofrece ReentrantLock sobre synchronized?",
    options: [
      "Menor consumo de CPU",
      "Mayor seguridad con variables compartidas",
      "Soporte para interrupciones y timeout",
      "Evita el false sharing automáticamente",
    ],
    answer: 2,
    explanation:
      "ReentrantLock permite timeouts e interrupciones, algo que synchronized no soporta.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué mecanismo usa java.util.concurrent.atomic para garantizar atomicidad?",
    options: [
      "Synchronized internamente",
      "Bloqueo de bajo nivel",
      "Operaciones CAS (Compare-And-Swap)",
      "Reintentos por backoff exponencial",
    ],
    answer: 2,
    explanation:
      "Las clases de java.util.concurrent.atomic usan operaciones CAS, evitando bloqueos explícitos.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el principal beneficio de usar un CyclicBarrier?",
    options: [
      "Sincronizar tareas sin conocer su número",
      "Ejecutar tareas en orden secuencial",
      "Coordinar un número fijo de hilos para reunirse en un punto común",
      "Evitar la condición de carrera en variables globales",
    ],
    answer: 2,
    explanation:
      "CyclicBarrier permite que múltiples hilos esperen hasta que todos hayan alcanzado una barrera común antes de continuar.",
    subtheme: "Concurrencia y Multithreading Avanzado",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el propósito principal del método `flatMap` en Streams?",
    options: [
      "Aplicar una función a cada elemento y devolver un Stream de resultados.",
      "Combinar múltiples Streams en un solo Stream.",
      "Eliminar duplicados de un Stream.",
      "Aplicar operaciones terminales sobre un Stream.",
    ],
    answer: 1,
    explanation:
      "El método `flatMap` transforma cada elemento en un Stream y luego los concatena en un solo Stream plano.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado produce este código?",
    code: `Stream.of(1, 2, 3).reduce(0, Integer::sum)`,
    options: ["6", "0", "3", "Error de compilación"],
    answer: 0,
    explanation:
      "La operación `reduce` acumula los valores del Stream usando la suma, comenzando en 0.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué operación funcional se usa para convertir un Stream en una estructura de colección?",
    options: ["collect()", "map()", "reduce()", "filter()"],
    answer: 0,
    explanation:
      "`collect()` es una operación terminal que permite transformar el Stream en listas, mapas u otras estructuras.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre `map()` y `flatMap()` es verdadera?",
    options: [
      "`map()` aplana estructuras anidadas, `flatMap()` no.",
      "`flatMap()` devuelve un Stream para cada elemento y los fusiona.",
      "`map()` solo puede usarse con números.",
      "Ambos métodos son operaciones terminales.",
    ],
    answer: 1,
    explanation:
      "`flatMap()` aplica una función a cada elemento que devuelve un Stream y luego aplana todos los Streams resultantes.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace el siguiente código?`",
    code: `Stream.of("a", "b", "c").collect(Collectors.joining(","))`,
    options: ['"abc"', '"a,b,c"', '["a", "b", "c"]', "Lanza una excepción"],
    answer: 1,
    explanation:
      '`Collectors.joining(",")` concatena todos los elementos usando la coma como delimitador.',
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué interfaz funcional representa una operación que acepta un argumento y no devuelve nada?",
    options: ["Supplier", "Consumer", "Function", "Predicate"],
    answer: 1,
    explanation:
      "`Consumer<T>` representa una operación que acepta un solo argumento y no devuelve un resultado.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace el método `peek()` en un Stream?",
    options: [
      "Filtra los elementos del Stream.",
      "Aplica una transformación a los elementos.",
      "Permite realizar acciones sin modificar los elementos.",
      "Reduce el Stream a un solo valor.",
    ],
    answer: 2,
    explanation:
      "`peek()` permite realizar acciones intermedias para propósitos como depuración, sin afectar el flujo.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes combinaciones representa una pipeline válida en Streams?",
    options: [
      "map -> peek -> filter -> collect",
      "filter -> reduce -> map -> collect",
      "collect -> map -> filter",
      "reduce -> map -> forEach",
    ],
    answer: 0,
    explanation:
      "Una pipeline válida incluye operaciones intermedias seguidas por una terminal como `collect` o `reduce`.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace `Collectors.partitioningBy(Predicate)`?",
    options: [
      "Agrupa los elementos en una lista.",
      "Agrupa los elementos en dos listas según el predicado.",
      "Ordena los elementos por el predicado.",
      "Aplica una operación de reducción.",
    ],
    answer: 1,
    explanation:
      "`partitioningBy` divide los elementos en dos grupos: los que cumplen el predicado y los que no.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el resultado de `Stream.empty().map(x -> x.toString()).count()`?",
    options: ["1", "0", "null", "Excepción"],
    answer: 1,
    explanation:
      "El Stream está vacío, por lo tanto no hay elementos que mapear ni contar.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ventaja ofrece usar `parallelStream()`?",
    options: [
      "Mayor control sobre los hilos.",
      "Mayor rendimiento en colecciones pequeñas.",
      "Posibilidad de procesamiento concurrente para grandes volúmenes de datos.",
      "Evita la necesidad de operaciones terminales.",
    ],
    answer: 2,
    explanation:
      "`parallelStream()` permite procesamiento paralelo, lo que mejora el rendimiento con colecciones grandes.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre si una operación de Stream lanza una excepción?",
    options: [
      "Se ignora y el Stream continúa.",
      "El Stream se cierra inmediatamente.",
      "Se lanza una excepción que debe manejarse.",
      "La operación se reinicia automáticamente.",
    ],
    answer: 2,
    explanation:
      "Cualquier excepción lanzada en una operación intermedia detiene el procesamiento del Stream.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito de `Collectors.toMap()`?",
    options: [
      "Crear una lista a partir del Stream.",
      "Crear un conjunto sin duplicados.",
      "Convertir un Stream en un Map clave-valor.",
      "Ordenar el Stream por claves.",
    ],
    answer: 2,
    explanation:
      "`Collectors.toMap()` permite construir un Map a partir de pares clave-valor generados desde los elementos del Stream.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace `distinct()` en un Stream?",
    options: [
      "Ordena los elementos.",
      "Elimina elementos duplicados usando `equals()`.",
      "Agrupa elementos similares.",
      "Convierte el Stream en Set.",
    ],
    answer: 1,
    explanation:
      "`distinct()` elimina elementos duplicados comparándolos con `equals()`.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes es una interfaz funcional personalizada válida?",
    options: [
      "`@FunctionalInterface interface Converter<T, R> { R convert(T input); }`",
      "`interface MyFunction { void execute(); void stop(); }`",
      "`interface Marker {}`",
      "`interface Duplicator<T> extends Function<T, T>`",
    ],
    answer: 0,
    explanation:
      "Una interfaz funcional debe tener un único método abstracto. La primera opción cumple con esto.",
    subtheme: "Operaciones funcionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes tipos primitivos de Java puede representar un valor más grande?",
    code: "",
    options: ["int", "long", "short", "byte"],
    answer: 1,
    explanation:
      "El tipo 'long' es un entero de 64 bits con signo, capaz de almacenar un rango mucho mayor que 'int', 'short' o 'byte'.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado del siguiente fragmento de código?",
    code: `
  byte a = 127;
  a += 1;
  System.out.println(a);`,
    options: ["0", "-128", "128", "Error de compilación"],
    answer: 1,
    explanation:
      "El tipo 'byte' va de -128 a 127. Al sumar 1 a 127, ocurre un overflow y el valor se convierte en -128.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el tamaño en bits de un tipo 'char' en Java?",
    code: "",
    options: ["8 bits", "16 bits", "32 bits", "Dependiente de la plataforma"],
    answer: 1,
    explanation:
      "El tipo 'char' en Java es de 16 bits y representa un solo carácter Unicode.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede al ejecutar el siguiente código?",
    code: `
  int x = 1_000_000;
  System.out.println(x);`,
    options: [
      "Compila y muestra 1000000",
      "Error de compilación",
      "Compila pero lanza excepción",
      "Imprime '1_000_000'",
    ],
    answer: 0,
    explanation:
      "Los guiones bajos se pueden usar para mejorar la legibilidad de números desde Java 7. Compila y muestra 1000000.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el valor por defecto de una variable tipo `boolean` en una clase?",
    code: "",
    options: ["false", "true", "null", "Depende del compilador"],
    answer: 0,
    explanation:
      "El valor por defecto de un `boolean` como campo de clase es `false`.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes asignaciones produce una pérdida de precisión?",
    code: "",
    options: [
      "float f = 10.0f;",
      "int i = (int) 3.9;",
      "double d = 100L;",
      "long l = 200;",
    ],
    answer: 1,
    explanation:
      "Al convertir 3.9 (double) a int, se trunca la parte decimal, resultando en una pérdida de precisión.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: `
  int a = 5;
  int b = 2;
  System.out.println(a / b);`,
    options: ["2.5", "2", "3", "Error de compilación"],
    answer: 1,
    explanation:
      "La división entre enteros en Java descarta la parte decimal. 5 / 2 = 2.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el rango válido para el tipo primitivo 'short' en Java?",
    code: "",
    options: ["-32768 a 32767", "0 a 65535", "-128 a 127", "-2^31 a 2^31-1"],
    answer: 0,
    explanation:
      "El tipo 'short' es un entero de 16 bits con signo, por lo tanto su rango es de -32,768 a 32,767.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre al ejecutar el siguiente código?",
    code: `
  float f = 1.0;
  System.out.println(f);`,
    options: [
      "1.0",
      "Error de compilación",
      "1.0f",
      "Lanza excepción en tiempo de ejecución",
    ],
    answer: 1,
    explanation:
      "El valor 1.0 es considerado double por defecto. Para asignarlo a un float, se requiere el sufijo 'f' o un casting explícito.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el literal correcto para declarar un `long` en Java?",
    code: "",
    options: [
      "long x = 100000L;",
      "long x = 100000l;",
      "long x = 100000;",
      "Todas las anteriores son válidas",
    ],
    answer: 3,
    explanation:
      "Java acepta tanto `L` como `l` como sufijo para literales long, aunque se recomienda `L` por claridad. También acepta literales sin sufijo si están dentro del rango de int.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado imprime este código?",
    code: `
  char c = 65;
  System.out.println(c);`,
    options: ["65", "A", "Error de compilación", "Undefined"],
    answer: 1,
    explanation:
      "El valor 65 corresponde al carácter 'A' en Unicode. El tipo 'char' puede asignarse desde un valor entero.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este fragmento?",
    code: `
  double d = 0.1 + 0.2;
  System.out.println(d == 0.3);`,
    options: ["true", "false", "Error en compilación", "NaN"],
    answer: 1,
    explanation:
      "Debido a la representación binaria de los valores en coma flotante, 0.1 + 0.2 no es exactamente igual a 0.3.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado del siguiente código?",
    code: `
  boolean b = true;
  b = b ^ true;
  System.out.println(b);`,
    options: ["false", "true", "0", "Error de compilación"],
    answer: 0,
    explanation:
      "El operador '^' (XOR) retorna true solo si los operandos son diferentes. `true ^ true` es false.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se intenta asignar un `long` a una variable `int` sin casting?",
    code: `
  long l = 100000L;
  int i = l;`,
    options: [
      "Compila sin problemas",
      "Error de compilación",
      "Se convierte automáticamente",
      "Se trunca el valor",
    ],
    answer: 1,
    explanation:
      "No se puede asignar un 'long' a un 'int' sin un cast explícito, debido a la posible pérdida de información.",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de los siguientes pares tiene el mismo tamaño en bits?",
    code: "",
    options: ["float y int", "double y long", "byte y char", "short y float"],
    answer: 0,
    explanation:
      "Tanto 'float' como 'int' ocupan 32 bits, aunque representan datos de distinto tipo (coma flotante vs enteros).",
    subtheme: "Tipo de datos Primitivos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede cuando se pasa un objeto a un método en Java?",
    code: "",
    options: [
      "Se pasa una copia del objeto completo",
      "Se pasa una copia de la referencia al objeto",
      "Se pasa por referencia como en C++",
      "Se pasa un puntero nulo por defecto",
    ],
    answer: 1,
    explanation:
      "En Java, se pasa una copia de la referencia al objeto, por lo que cualquier cambio en el objeto dentro del método afecta al objeto original.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "Dado el siguiente código, ¿cuál será la salida?",
    code: "class Demo {\n    int x;\n    Demo(int x) { this.x = x; }\n}\n\npublic class Test {\n    public static void modify(Demo d) {\n        d.x = 99;\n    }\n    public static void main(String[] args) {\n        Demo d1 = new Demo(5);\n        modify(d1);\n        System.out.println(d1.x);\n    }\n}",
    options: ["5", "0", "99", "Error en tiempo de compilación"],
    answer: 2,
    explanation:
      "Se pasa la referencia del objeto `d1` al método `modify`, por lo tanto, modificar `d.x` dentro del método afecta al objeto original.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la diferencia principal entre `==` y `.equals()` al comparar objetos en Java?",
    code: "",
    options: [
      "`==` compara contenido, `.equals()` compara direcciones de memoria",
      "`==` compara direcciones de memoria, `.equals()` compara contenido",
      "Ambos comparan direcciones de memoria",
      "Ambos comparan contenido",
    ],
    answer: 1,
    explanation:
      "`==` compara si dos referencias apuntan al mismo objeto en memoria, mientras que `.equals()` compara el contenido (si está sobrescrito correctamente).",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál será el resultado del siguiente código?",
    code: 'String a = new String("hello");\nString b = new String("hello");\nSystem.out.println(a == b);',
    options: [
      "true",
      "false",
      "Compila con error",
      "Depende del sistema operativo",
    ],
    answer: 1,
    explanation:
      "Aunque ambos strings contienen el mismo valor, `new String()` crea nuevos objetos, por lo que `a == b` será `false`.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el efecto de la siguiente asignación?",
    code: "List<String> list1 = new ArrayList<>();`\n`List<String> list2 = list1;",
    options: [
      "Se crea una copia profunda del objeto",
      "Ambas referencias apuntan al mismo objeto",
      "list2 es nulo",
      "Ambas listas están vacías pero desconectadas",
    ],
    answer: 1,
    explanation:
      "Ambas referencias apuntan al mismo objeto en memoria, cualquier modificación en `list2` se verá reflejada en `list1` y viceversa.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué hace exactamente el método `clone()` en Java si no se sobrescribe?",
    code: "",
    options: [
      "Lanza CloneNotSupportedException",
      "Crea una copia profunda del objeto",
      "Copia la referencia del objeto",
      "Copia superficial del objeto",
    ],
    answer: 3,
    explanation:
      "El método `clone()` de Object realiza una copia superficial. Para usarlo, la clase debe implementar `Cloneable` o lanza `CloneNotSupportedException`.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si modificas un atributo mutable de un objeto pasado a un método?",
    code: "",
    options: [
      "No se ve afectado fuera del método",
      "Se modifica solo si se retorna el objeto",
      "Se modifica el objeto original",
      "Java no permite modificar atributos dentro de métodos",
    ],
    answer: 2,
    explanation:
      "Dado que se pasa una copia de la referencia, modificar atributos del objeto afectará al objeto original.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué se imprime en este código?",
    code: "class Box {\n    int value;\n    Box(int v) { value = v; }\n}\n\nBox b1 = new Box(10);\nBox b2 = b1;\nb2.value = 20;\nSystem.out.println(b1.value);",
    options: ["10", "0", "20", "Compilación fallida"],
    answer: 2,
    explanation:
      "`b2` es una referencia al mismo objeto que `b1`, por lo que cambiar `value` afecta a ambos.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué implica la inmutabilidad de un objeto respecto a su comportamiento como referencia?",
    code: "",
    options: [
      "El objeto no puede ser reasignado",
      "No se pueden cambiar las propiedades internas del objeto",
      "Las referencias nunca cambian",
      "La referencia apunta a null",
    ],
    answer: 1,
    explanation:
      "Un objeto inmutable no permite modificar su estado interno, aunque su referencia pueda ser reutilizada o compartida.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué diferencia hay entre copiar una colección con `=` y con un constructor?",
    code: "List<String> a = new ArrayList<>();\nList<String> b = a;\nList<String> c = new ArrayList<>(a);",
    options: [
      "Ambas `b` y `c` apuntan a la misma referencia",
      "`b` y `c` son independientes entre sí",
      "`b` es una nueva lista con los mismos elementos",
      "`c` comparte referencias con `a`, pero es una lista distinta",
    ],
    answer: 3,
    explanation:
      "`b` es alias de `a`, mientras que `c` es una lista separada pero con los mismos elementos (copia superficial).",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Si se cambia una lista dentro de un objeto, ¿se ve reflejado en otras referencias?",
    code: "class Data {\n    List<Integer> values = new ArrayList<>();\n}\n\nData d1 = new Data();\nData d2 = d1;\nd2.values.add(5);\nSystem.out.println(d1.values);",
    options: ["[5]", "[]", "null", "Compilación fallida"],
    answer: 0,
    explanation:
      "Ambas referencias `d1` y `d2` apuntan al mismo objeto `Data`, así que los cambios son visibles desde cualquier referencia.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si comparas dos referencias que apuntan a objetos diferentes pero equivalentes?",
    code: 'String x = new String("abc");\nString y = new String("abc");\nSystem.out.println(x.equals(y));',
    options: ["false", "true", "null", "Error en compilación"],
    answer: 1,
    explanation:
      "El método `.equals()` en `String` compara el contenido, no la referencia. Por eso da `true`.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué se necesita para que `Collections.copy(dest, src)` funcione correctamente?",
    code: "",
    options: [
      "`src` debe ser del mismo tamaño que `dest`",
      "`dest` debe ser igual o mayor en tamaño que `src`",
      "Ambas listas deben ser mutables",
      "`src` debe ser una sublista de `dest`",
    ],
    answer: 1,
    explanation:
      "`Collections.copy(dest, src)` requiere que `dest` tenga al menos el mismo tamaño que `src`, ya que reemplaza elementos por índice.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: "int[] arr1 = {1,2,3};\nint[] arr2 = arr1;\narr2[0] = 9;\nSystem.out.println(Arrays.toString(arr1));",
    options: ["[1, 2, 3]", "[9, 2, 3]", "[0, 2, 3]", "Compilación fallida"],
    answer: 1,
    explanation:
      "En Java los arreglos son objetos, por lo tanto `arr2` apunta al mismo arreglo que `arr1`. Al modificar `arr2`, también se modifica `arr1`.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué representa `Optional<T>` con respecto a referencias?",
    code: "",
    options: [
      "Un tipo primitivo",
      "Un puntero seguro",
      "Un envoltorio que puede contener o no una referencia",
      "Un reemplazo para `Object`",
    ],
    answer: 2,
    explanation:
      "`Optional<T>` encapsula una referencia que puede estar presente o no, ayudando a evitar errores de null.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si asignas una referencia a `null`?",
    code: 'String s = "hello";\ns = null;\nSystem.out.println(s.length());',
    options: [
      "Imprime 5",
      "Lanza NullPointerException",
      "Imprime null",
      "Compila pero no se ejecuta",
    ],
    answer: 1,
    explanation:
      "Asignar `null` a una referencia elimina la asociación con el objeto. Llamar a un método en `null` lanza NullPointerException.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cómo afecta la mutabilidad a la seguridad de una API?",
    code: "",
    options: [
      "No afecta en absoluto",
      "Objetos mutables pueden exponer el estado interno no deseado",
      "Objetos mutables son más seguros",
      "La mutabilidad solo afecta el rendimiento",
    ],
    answer: 1,
    explanation:
      "Exponer referencias a objetos mutables permite que el consumidor modifique el estado interno, lo cual compromete el encapsulamiento.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón es útil para proteger campos referenciados mutables?",
    code: "",
    options: ["Singleton", "Builder", "Defensive Copy", "Prototype"],
    answer: 2,
    explanation:
      "El patrón de copia defensiva crea una copia del objeto referenciado antes de exponerlo, previniendo modificaciones no deseadas.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado del siguiente código?",
    code: 'List<String> a = new ArrayList<>();\na.add("X");\nList<String> b = a;\na = null;\nSystem.out.println(b.get(0));',
    options: ["null", "X", "Excepción", "Compilación fallida"],
    answer: 1,
    explanation:
      "Aunque `a` se reasigna a `null`, `b` sigue apuntando al mismo objeto original, por lo que puede acceder a sus elementos.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente fragmento?",
    code: 'StringBuilder sb1 = new StringBuilder("Hi");\nStringBuilder sb2 = sb1;\nsb2.append("!");\nSystem.out.println(sb1);',
    options: ["Hi", "Hi!", "!", "null"],
    answer: 1,
    explanation:
      "Ambas referencias apuntan al mismo objeto `StringBuilder`. Al modificarlo con `append`, se ve reflejado en todas las referencias.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la ventaja de usar `record` respecto a referencias?",
    code: "",
    options: [
      "Evita referencias cíclicas",
      "Los campos son mutables",
      "Proporciona inmutabilidad estructural",
      "No permite copiar objetos",
    ],
    answer: 2,
    explanation:
      "Los `record` en Java son inmutables por defecto, lo que impide modificar el estado después de su construcción, útil en contextos de referencias compartidas.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si pasas un objeto a un método y reasignas la referencia dentro del método?",
    code: 'void change(Person p) {\n  p = new Person("Ana");\n}\n\nPerson p1 = new Person("Luis");\nchange(p1);\nSystem.out.println(p1.getName());',
    options: ["Luis", "Ana", "null", "Compilación fallida"],
    answer: 0,
    explanation:
      "La reasignación de la referencia dentro del método no afecta al objeto original fuera del método, ya que Java pasa por valor (de la referencia).",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de copia se debe realizar para evitar que un cambio en una lista afecte a otra?",
    code: "",
    options: [
      "Referencia directa",
      "Copia superficial",
      "Copia profunda",
      "Paso por valor",
    ],
    answer: 2,
    explanation:
      "Solo una copia profunda asegura que los cambios en objetos anidados no afecten a las copias.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el comportamiento de `Map` al usar referencias como claves?",
    code: "",
    options: [
      "Siempre compara referencias",
      "Depende del método `equals()` y `hashCode()`",
      "Compara la memoria física",
      "No acepta objetos como claves",
    ],
    answer: 1,
    explanation:
      "`Map` compara claves utilizando `equals()` y `hashCode()`, por lo que el comportamiento depende de su implementación en los objetos clave.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el riesgo de compartir referencias entre hilos sin sincronización?",
    code: "",
    options: [
      "El objeto se corrompe",
      "No hay riesgo",
      "Java maneja automáticamente la sincronización",
      "Solo afecta el rendimiento",
    ],
    answer: 0,
    explanation:
      "El acceso concurrente sin sincronización puede generar condiciones de carrera y corrupción de datos compartidos.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué opción garantiza la inmutabilidad de una lista?",
    code: "",
    options: [
      "new ArrayList<>()",
      "Arrays.asList()",
      "Collections.unmodifiableList()",
      "List.copyOf()",
    ],
    answer: 3,
    explanation:
      "`List.copyOf()` devuelve una lista inmutable desde Java 10. `unmodifiableList()` puede aún reflejar cambios si la lista original es modificable.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la mejor práctica al retornar una lista privada?",
    code: "",
    options: [
      "Retornar la lista directamente",
      "Usar `Collections.unmodifiableList()`",
      "Retornar `null`",
      "Usar singleton",
    ],
    answer: 1,
    explanation:
      "Para evitar que el consumidor modifique la lista interna, se debe retornar una versión inmodificable o una copia.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué se imprime en este fragmento?",
    code: "class Ref {\n    int x = 5;\n}\n\nRef r1 = new Ref();\nRef r2 = new Ref();\nr1 = r2;\nr2.x = 10;\nSystem.out.println(r1.x);",
    options: ["5", "0", "10", "Compilación fallida"],
    answer: 2,
    explanation:
      "`r1` y `r2` terminan apuntando al mismo objeto. Cambiar `x` en `r2` también afecta a `r1`.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de modificar una sublista?",
    code: 'List<String> list = new ArrayList<>(List.of("A", "B", "C"));\nList<String> sub = list.subList(0, 2);\nsub.set(0, "X");\nSystem.out.println(list);',
    options: ["[X, B, C]", "[A, B, C]", "[X, B]", "Compilación fallida"],
    answer: 0,
    explanation:
      "Las sublistas en Java son vistas de la lista original, por lo que los cambios en `sub` afectan a `list`.",
    subtheme: "Tipo de datos Por Referencia",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de datos infiere el compilador para una variable declarada con `var`?",
    code: `var result = 10 + 5.5;`,
    options: ["int", "double", "float", "long"],
    answer: 1,
    explanation:
      "La operación entre un `int` y un `double` da como resultado un `double`, por lo tanto `var result` será de tipo `double`.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de las siguientes declaraciones usando `var` es inválida?",
    code: `var x = null;`,
    options: [
      "Es válida y x es de tipo Object",
      "Es válida si se especifica el tipo explícitamente",
      "No es válida porque el compilador no puede inferir el tipo",
      "Es válida sólo dentro de métodos estáticos",
    ],
    answer: 2,
    explanation:
      "`var x = null;` es inválida porque el compilador no puede inferir un tipo de `null`.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre cuando se usa `var` dentro de una expresión lambda?",
    code: `list.forEach((var item) -> System.out.println(item));`,
    options: [
      "Es válido desde Java 11 en adelante",
      "No es válido, `var` no puede usarse en lambdas",
      "Solo puede usarse si se anota con una anotación",
      "Solo se permite si se usa `final`",
    ],
    answer: 0,
    explanation:
      "Desde Java 11, se permite usar `var` en parámetros de lambdas, lo que también permite aplicar anotaciones en esos parámetros.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      '¿Cuál es el tipo inferido para `var list = List.of("A", "B", "C");`?',
    code: `var list = List.of("A", "B", "C");`,
    options: [
      "List<String>",
      "ArrayList<String>",
      "Collection<String>",
      "List<Object>",
    ],
    answer: 0,
    explanation:
      "La inferencia de tipos reconoce los elementos como `String` y `List.of` retorna una lista inmutable tipada como `List<String>`.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre con esta declaración `var stream = Stream.of(1, 2, 3);`?",
    code: `var stream = Stream.of(1, 2, 3);`,
    options: [
      "El tipo inferido es Stream<Object>",
      "El tipo inferido es Stream<Integer>",
      "No se puede inferir el tipo con números",
      "El tipo inferido es List<Integer>",
    ],
    answer: 1,
    explanation:
      "`Stream.of(1, 2, 3)` infiere automáticamente que los elementos son de tipo `Integer`, así que `var stream` es `Stream<Integer>`.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de la inferencia en este contexto?",
    code: `var data = new HashMap<String, Integer>();`,
    options: [
      "Map<String, Integer>",
      "HashMap<String, Integer>",
      "Object",
      "Map<Object, Object>",
    ],
    answer: 1,
    explanation:
      "Cuando se usa `new HashMap<String, Integer>()`, el tipo exacto inferido por `var` es `HashMap<String, Integer>`.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Puede `var` usarse como parámetro de método?",
    code: `public void myMethod(var param) {}`,
    options: [
      "Sí, desde Java 11",
      "Sí, pero solo en métodos privados",
      "No, `var` no puede usarse como tipo de parámetro de método",
      "Sí, solo con anotaciones",
    ],
    answer: 2,
    explanation:
      "`var` no puede usarse como tipo de parámetro de método porque los parámetros requieren una declaración de tipo explícita.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: '¿Qué ocurre con `var list = Arrays.asList(1, 2.0, "Three");`?',
    code: `var list = Arrays.asList(1, 2.0, "Three");`,
    options: [
      "Infiere una List<Object>",
      "Lanza un error de compilación",
      "Infiere List<Serializable>",
      "Infiere List<Number>",
    ],
    answer: 0,
    explanation:
      "Dado que los elementos son de diferentes tipos, la inferencia común más alta es `Object`, por lo tanto el tipo inferido es `List<Object>`.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué restricciones existen al usar `var` en variables locales?",
    code: ``,
    options: [
      "No puede ser usada en variables miembro",
      "Debe inicializarse en la misma línea",
      "No puede ser nula",
      "Solo puede usarse con tipos primitivos",
    ],
    answer: 1,
    explanation:
      "`var` requiere inicialización en la misma línea donde se declara para que el compilador pueda inferir el tipo.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el tipo inferido en el siguiente fragmento?",
    code: `
  var result = getData();
  
  public List<String> getData() {
      return new ArrayList<>();
  }`,
    options: [
      "List<String>",
      "ArrayList<String>",
      "Object",
      "Collection<String>",
    ],
    answer: 0,
    explanation:
      "El método retorna un `List<String>`, por lo tanto ese será el tipo inferido para `result`.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si intentas usar 'var' como nombre de variable en Java 10 o superior?",
    code: "",
    options: [
      "Compila sin errores, pero no es buena práctica.",
      "Compila y se ejecuta normalmente.",
      "Provoca un error de compilación.",
      "'var' se convierte en una palabra clave solo si se usa como tipo, no como nombre de variable.",
    ],
    answer: 2,
    explanation:
      "'var' es una palabra reservada y no puede usarse como nombre de variable.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el tipo inferido por el compilador en la siguiente expresión?",
    code: "var result = 10 / 3;",
    options: ["float", "double", "int", "long"],
    answer: 2,
    explanation:
      "La división entre enteros produce un entero. Por lo tanto, el tipo inferido es 'int'.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el efecto de usar 'var' con tipos anónimos?",
    code: "var obj = new Object() { int x = 42; };",
    options: [
      "Permite acceder a las propiedades anónimas directamente.",
      "El tipo inferido es Object, no se puede acceder a las propiedades nuevas.",
      "Causa error de compilación.",
      "El compilador crea una clase interna accesible por reflexión.",
    ],
    answer: 1,
    explanation:
      "El tipo inferido es 'Object', por lo que no se pueden acceder directamente a los miembros específicos del tipo anónimo.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de la siguiente inferencia?",
    code: 'var list = List.of("A", "B", "C");',
    options: ["List<String>", "ArrayList<String>", "var", "Object"],
    answer: 0,
    explanation:
      "List.of(...) infiere un List<String>, ya que los elementos son literales String.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre si se usa 'var' en variables miembro de clase?",
    code: 'public class Ejemplo { var nombre = "Juan"; }',
    options: [
      "Compila correctamente.",
      "El compilador infiere el tipo automáticamente.",
      "Provoca error de compilación.",
      "Solo funciona si se usa 'private' explícitamente.",
    ],
    answer: 2,
    explanation:
      "'var' solo se puede usar en variables locales, no en miembros de clase.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el tipo inferido en la siguiente declaración?",
    code: "var data = new HashMap<String, Integer>();",
    options: [
      "Map<String, Integer>",
      "Object",
      "HashMap",
      "HashMap<String, Integer>",
    ],
    answer: 3,
    explanation: "El tipo inferido es exactamente 'HashMap<String, Integer>'.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si se usa 'var' en una expresión sin tipo claro?",
    code: "var x = null;",
    options: [
      "Se infiere Object.",
      "Se infiere null.",
      "Provoca error de compilación.",
      "Se infiere Void.",
    ],
    answer: 2,
    explanation:
      "No se puede inferir el tipo de 'null', lo que genera error de compilación.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la mejor práctica al usar 'var' para mejorar la legibilidad?",
    code: "",
    options: [
      "Usar 'var' siempre que sea posible.",
      "Evitar 'var' completamente.",
      "Usar 'var' solo cuando el tipo es evidente en el contexto.",
      "Usar 'var' con tipos genéricos para ahorrar código.",
    ],
    answer: 2,
    explanation:
      "La mejor práctica es usar 'var' solo cuando el tipo es claro para mantener la legibilidad.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué limitación presenta el uso de 'var' con expresiones lambda?",
    code: "var f = x -> x + 1;",
    options: [
      "El compilador infiere el tipo correctamente.",
      "No se puede usar 'var' con lambdas sin especificar el tipo de parámetro.",
      "La expresión lambda debe envolver una clase funcional.",
      "Se infiere como Object.",
    ],
    answer: 1,
    explanation:
      "No se puede usar 'var' directamente para inferir el tipo de una lambda sin una interfaz funcional explícita.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Es válido declarar múltiples variables con 'var' en una sola línea?",
    code: "var a = 1, b = 2;",
    options: [
      "Sí, es válido y claro.",
      "Sí, pero genera warning.",
      "No, 'var' no permite múltiples declaraciones.",
      "Solo si son del mismo tipo.",
    ],
    answer: 2,
    explanation:
      "'var' no puede usarse para declarar múltiples variables en una línea.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué tipo se infiere aquí?",
    code: "var stream = Stream.of(1, 2, 3);",
    options: ["Stream<Integer>", "IntStream", "Object", "Stream<Object>"],
    answer: 0,
    explanation:
      "Stream.of(1,2,3) devuelve un Stream<Integer>, que es el tipo inferido por 'var'.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿'var' se puede usar como parámetro de método?",
    code: "public void test(var x) { }",
    options: [
      "Sí, y se infiere el tipo del parámetro.",
      "No, genera error de compilación.",
      "Solo en interfaces.",
      "Depende del compilador.",
    ],
    answer: 1,
    explanation:
      "'var' no puede usarse para parámetros de métodos ni constructores.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si se usa 'var' con arrays?",
    code: "var arr = new int[]{1,2,3};",
    options: [
      "Se infiere como int[]",
      "Se infiere como Integer[]",
      "Genera error",
      "Se infiere como List<Integer>",
    ],
    answer: 0,
    explanation:
      "La expresión 'new int[]{...}' es un array primitivo de tipo int[], que es lo que se infiere.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre al usar 'var' en bucles for-each?",
    code: "for (var item : list) { }",
    options: [
      "No está permitido.",
      "Es válido si el compilador puede inferir el tipo del iterable.",
      "Solo funciona con arrays.",
      "Funciona solo con listas de tipos explícitos.",
    ],
    answer: 1,
    explanation:
      "Se puede usar 'var' en for-each si el compilador puede inferir el tipo del iterable.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Puede 'var' usarse en una declaración dentro de una lambda?",
    code: "Runnable r = () -> { var x = 10; };",
    options: [
      "Sí, es válido.",
      "No, sólo en métodos principales.",
      "Genera error de compilación.",
      "Solo con tipos explícitos.",
    ],
    answer: 0,
    explanation:
      "Dentro del cuerpo de una lambda (bloque), se pueden declarar variables con 'var'.",
    subtheme: "Inferencia de tipos con var",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de conversión ocurre en el siguiente fragmento de código?",
    code: "double d = 10;",
    options: [
      "Conversión explícita (narrowing)",
      "Conversión implícita (widening)",
      "Casting de referencia",
      "Casting de tipo wrapper",
    ],
    answer: 1,
    explanation:
      "Un valor int puede almacenarse automáticamente en una variable double. Es una conversión implícita (widening).",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado imprime el siguiente código?",
    code: "int a = (int) 4.9;\nSystem.out.println(a);",
    options: ["5", "4.0", "4", "Error de compilación"],
    answer: 2,
    explanation:
      "El casting explícito trunca el valor decimal. Por lo tanto, se imprime 4.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre widening y narrowing es correcta?",
    code: "",
    options: [
      "Widening siempre requiere casting explícito.",
      "Narrowing convierte de un tipo más grande a uno más pequeño.",
      "Narrowing ocurre automáticamente.",
      "Widening puede causar pérdida de datos.",
    ],
    answer: 1,
    explanation:
      "Narrowing es una conversión de un tipo más grande a uno más pequeño y requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si realizas un narrowing de un valor fuera del rango del tipo destino?",
    code: "byte b = (byte) 129;",
    options: [
      "Se produce un error en tiempo de ejecución.",
      "El valor se ajusta al rango de byte por desbordamiento.",
      "Se lanza una excepción.",
      "El valor se convierte a 0 automáticamente.",
    ],
    answer: 1,
    explanation:
      "El valor 129 desborda el rango de byte (-128 a 127) y se ajusta por overflow, dando como resultado -127.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes castings es inválido sin conversión explícita?",
    code: "",
    options: ["int → double", "float → long", "char → int", "byte → int"],
    answer: 1,
    explanation:
      "float → long es una conversión de tipo narrowing y requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el valor de 'i' después de la conversión?",
    code: "float f = 5.75f;\nint i = (int) f;",
    options: ["6", "5", "Error en compilación", "5.75"],
    answer: 1,
    explanation:
      "El casting explícito de float a int trunca el valor, eliminando la parte decimal. El resultado es 5.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede al realizar el siguiente casting?",
    code: 'Object obj = "Texto";\nString s = (String) obj;',
    options: [
      "Genera error de compilación.",
      "Funciona correctamente porque obj apunta a un String.",
      "Lanza una excepción en tiempo de ejecución.",
      "No se puede castear un Object a String nunca.",
    ],
    answer: 1,
    explanation:
      "El casting es válido porque el objeto realmente es una instancia de String.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué error se produce al hacer el siguiente cast?",
    code: "Object obj = new Integer(10);\nString s = (String) obj;",
    options: [
      "Error en compilación",
      "ClassCastException",
      "NumberFormatException",
      "No se produce ningún error",
    ],
    answer: 1,
    explanation:
      "Aunque es válido en compilación, en tiempo de ejecución produce ClassCastException ya que Integer no es compatible con String.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué tipo de conversión ocurre aquí?",
    code: "long l = 1000;\nint i = (int) l;",
    options: ["Widening", "Autoboxing", "Narrowing", "Ninguna conversión"],
    answer: 2,
    explanation:
      "long a int es una conversión narrowing y requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué valor se imprime?",
    code: "byte b = (byte) 260;\nSystem.out.println(b);",
    options: ["260", "-4", "4", "0"],
    answer: 1,
    explanation:
      "El byte tiene un rango de -128 a 127. 260 - 256 = 4, pero como 260 está fuera del rango, Java realiza un overflow, resultando en -4.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de estas asignaciones requiere casting explícito?",
    code: "",
    options: ["int → long", "char → int", "double → float", "short → int"],
    answer: 2,
    explanation:
      "double → float es una conversión de tipo narrowing, requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Es posible castear un 'double' a 'byte' directamente?",
    code: "",
    options: [
      "Sí, pero solo si el valor cabe en byte.",
      "No, requiere pasar primero por int.",
      "Sí, con casting explícito.",
      "No es posible nunca.",
    ],
    answer: 2,
    explanation:
      "Sí es posible, pero se requiere casting explícito debido a la conversión narrowing.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre en este código?",
    code: "char c = (char) -1;\nSystem.out.println((int)c);",
    options: ["-1", "65535", "0", "Error de compilación"],
    answer: 1,
    explanation:
      "Los valores negativos convertidos a char (sin signo) se representan como valores positivos, en este caso 65535.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué tipo de conversión representa este fragmento?",
    code: "double d = 5;\nfloat f = (float) d;",
    options: ["Widening", "Autoboxing", "Narrowing", "Casting de referencia"],
    answer: 2,
    explanation:
      "double a float es una conversión narrowing, aunque el valor sea pequeño.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de los siguientes castings es válido sin error?",
    code: "Object obj = new ArrayList<String>();\nArrayList<String> list = (ArrayList<String>) obj;",
    options: [
      "Sí, compila y funciona correctamente.",
      "Error de compilación.",
      "Lanza ClassCastException siempre.",
      "Solo si obj es una instancia de LinkedList.",
    ],
    answer: 0,
    explanation:
      "Si el objeto realmente es una instancia de ArrayList, el casting es válido y no produce error.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de conversión ocurre en el siguiente fragmento de código?",
    code: "double d = 10;",
    options: [
      "Conversión explícita (narrowing)",
      "Conversión implícita (widening)",
      "Casting de referencia",
      "Casting de tipo wrapper",
    ],
    answer: 1,
    explanation:
      "Un valor int puede almacenarse automáticamente en una variable double. Es una conversión implícita (widening).",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado imprime el siguiente código?",
    code: "int a = (int) 4.9;\nSystem.out.println(a);",
    options: ["5", "4.0", "4", "Error de compilación"],
    answer: 2,
    explanation:
      "El casting explícito trunca el valor decimal. Por lo tanto, se imprime 4.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre widening y narrowing es correcta?",
    code: "",
    options: [
      "Widening siempre requiere casting explícito.",
      "Narrowing convierte de un tipo más grande a uno más pequeño.",
      "Narrowing ocurre automáticamente.",
      "Widening puede causar pérdida de datos.",
    ],
    answer: 1,
    explanation:
      "Narrowing es una conversión de un tipo más grande a uno más pequeño y requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si realizas un narrowing de un valor fuera del rango del tipo destino?",
    code: "byte b = (byte) 129;",
    options: [
      "Se produce un error en tiempo de ejecución.",
      "El valor se ajusta al rango de byte por desbordamiento.",
      "Se lanza una excepción.",
      "El valor se convierte a 0 automáticamente.",
    ],
    answer: 1,
    explanation:
      "El valor 129 desborda el rango de byte (-128 a 127) y se ajusta por overflow, dando como resultado -127.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes castings es inválido sin conversión explícita?",
    code: "",
    options: ["int → double", "float → long", "char → int", "byte → int"],
    answer: 1,
    explanation:
      "float → long es una conversión de tipo narrowing y requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el valor de 'i' después de la conversión?",
    code: "float f = 5.75f;\nint i = (int) f;",
    options: ["6", "5", "Error en compilación", "5.75"],
    answer: 1,
    explanation:
      "El casting explícito de float a int trunca el valor, eliminando la parte decimal. El resultado es 5.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede al realizar el siguiente casting?",
    code: 'Object obj = "Texto";\nString s = (String) obj;',
    options: [
      "Genera error de compilación.",
      "Funciona correctamente porque obj apunta a un String.",
      "Lanza una excepción en tiempo de ejecución.",
      "No se puede castear un Object a String nunca.",
    ],
    answer: 1,
    explanation:
      "El casting es válido porque el objeto realmente es una instancia de String.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué error se produce al hacer el siguiente cast?",
    code: "Object obj = new Integer(10);\nString s = (String) obj;",
    options: [
      "Error en compilación",
      "ClassCastException",
      "NumberFormatException",
      "No se produce ningún error",
    ],
    answer: 1,
    explanation:
      "Aunque es válido en compilación, en tiempo de ejecución produce ClassCastException ya que Integer no es compatible con String.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué tipo de conversión ocurre aquí?",
    code: "long l = 1000;\nint i = (int) l;",
    options: ["Widening", "Autoboxing", "Narrowing", "Ninguna conversión"],
    answer: 2,
    explanation:
      "long a int es una conversión narrowing y requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué valor se imprime?",
    code: "byte b = (byte) 260;\nSystem.out.println(b);",
    options: ["260", "-4", "4", "0"],
    answer: 1,
    explanation:
      "El byte tiene un rango de -128 a 127. 260 - 256 = 4, pero como 260 está fuera del rango, Java realiza un overflow, resultando en -4.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de estas asignaciones requiere casting explícito?",
    code: "",
    options: ["int → long", "char → int", "double → float", "short → int"],
    answer: 2,
    explanation:
      "double → float es una conversión de tipo narrowing, requiere casting explícito.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Es posible castear un 'double' a 'byte' directamente?",
    code: "",
    options: [
      "Sí, pero solo si el valor cabe en byte.",
      "No, requiere pasar primero por int.",
      "Sí, con casting explícito.",
      "No es posible nunca.",
    ],
    answer: 2,
    explanation:
      "Sí es posible, pero se requiere casting explícito debido a la conversión narrowing.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre en este código?",
    code: "char c = (char) -1;\nSystem.out.println((int)c);",
    options: ["-1", "65535", "0", "Error de compilación"],
    answer: 1,
    explanation:
      "Los valores negativos convertidos a char (sin signo) se representan como valores positivos, en este caso 65535.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué tipo de conversión representa este fragmento?",
    code: "double d = 5;\nfloat f = (float) d;",
    options: ["Widening", "Autoboxing", "Narrowing", "Casting de referencia"],
    answer: 2,
    explanation:
      "double a float es una conversión narrowing, aunque el valor sea pequeño.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de los siguientes castings es válido sin error?",
    code: "Object obj = new ArrayList<String>();\nArrayList<String> list = (ArrayList<String>) obj;",
    options: [
      "Sí, compila y funciona correctamente.",
      "Error de compilación.",
      "Lanza ClassCastException siempre.",
      "Solo si obj es una instancia de LinkedList.",
    ],
    answer: 0,
    explanation:
      "Si el objeto realmente es una instancia de ArrayList, el casting es válido y no produce error.",
    subtheme: "Conversión de Tipos (Casting)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de autoboxing en Java?",
    code: "",
    options: [
      "Convertir un objeto en un tipo primitivo automáticamente",
      "Convertir un tipo primitivo en su clase envoltorio automáticamente",
      "Convertir una clase envoltorio en otra clase envoltorio",
      "Convertir un String a un tipo primitivo automáticamente",
    ],
    answer: 1,
    explanation:
      "Autoboxing es el proceso mediante el cual Java convierte automáticamente un tipo primitivo en su clase envoltorio equivalente, como `int` a `Integer`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprimirá el siguiente código?",
    code: "Integer a = 1000;\nInteger b = 1000;\nSystem.out.println(a == b);",
    options: [
      "true",
      "false",
      "Compila con error",
      "Excepción en tiempo de ejecución",
    ],
    answer: 1,
    explanation:
      "El operador `==` compara referencias. Como `1000` está fuera del rango cacheado de Integer (-128 a 127), `a` y `b` no apuntan al mismo objeto.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre en este fragmento de código?",
    code: "Integer i = null;\nint j = i;",
    options: [
      "Compila correctamente y j vale 0",
      "Compila correctamente pero lanza NullPointerException",
      "No compila porque i es null",
      "No compila por conversión ilegal",
    ],
    answer: 1,
    explanation:
      "Al intentar hacer unboxing de un `null`, Java lanza una `NullPointerException`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué clase se utiliza como envoltorio para `char`?",
    code: "",
    options: ["Character", "Char", "String", "Text"],
    answer: 0,
    explanation:
      "`Character` es la clase envoltorio para el tipo primitivo `char`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede en este código?",
    code: "List<Integer> list = new ArrayList<>();\nlist.add(5);\nint val = list.get(0);",
    options: [
      "Error en tiempo de ejecución",
      "Compila y realiza autoboxing/unboxing",
      "Error de compilación",
      "Se lanza una excepción de conversión",
    ],
    answer: 1,
    explanation:
      "`5` se autoboxea a `Integer` al insertarlo en la lista, y luego se hace unboxing al asignarlo a `int`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué tipo de conversión se realiza aquí?",
    code: "Double d = 4.5;",
    options: ["Unboxing", "Autoboxing", "Widening", "Narrowing"],
    answer: 1,
    explanation:
      "El valor `4.5` es un literal double que se autoboxea en un objeto `Double`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: "Integer a = 127;\nInteger b = 127;\nSystem.out.println(a == b);",
    options: [
      "true",
      "false",
      "Compila con error",
      "Lanza NullPointerException",
    ],
    answer: 0,
    explanation:
      "Java almacena en caché los valores entre -128 y 127 para los wrappers de enteros, por lo que `a` y `b` referencian el mismo objeto.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el resultado de comparar un tipo primitivo con su clase envoltorio con `equals()`?",
    code: "Integer i = 5;\nSystem.out.println(i.equals(5));",
    options: ["true", "false", "Error de compilación", "Lanza excepción"],
    answer: 0,
    explanation:
      "`equals()` realiza unboxing de `5` para comparar con el valor primitivo del `Integer`, y el resultado es `true`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el principal riesgo de unboxing de objetos `null`?",
    code: "",
    options: [
      "Error de compilación",
      "Lentitud en la ejecución",
      "NullPointerException",
      "StackOverflowError",
    ],
    answer: 2,
    explanation:
      "Hacer unboxing de `null` genera una `NullPointerException` en tiempo de ejecución.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de estas operaciones usa unboxing?",
    code: "Integer a = 10;\nint b = a + 5;",
    options: ["Solo autoboxing", "Solo unboxing", "Ambos", "Ninguno"],
    answer: 1,
    explanation:
      "`a` se convierte automáticamente de `Integer` a `int`, lo cual es unboxing.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la diferencia principal entre `==` y `equals()` con wrappers?",
    code: "",
    options: [
      "`==` compara valores y `equals()` referencias",
      "`==` compara referencias y `equals()` valores",
      "Ambos comparan referencias",
      "Ambos comparan valores",
    ],
    answer: 1,
    explanation:
      "`==` compara si dos referencias apuntan al mismo objeto, mientras que `equals()` compara el valor contenido.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre al ejecutar este código?",
    code: "Integer i1 = 1000;\nInteger i2 = 1000;\nSystem.out.println(i1.equals(i2));",
    options: ["false", "true", "Error de compilación", "NullPointerException"],
    answer: 1,
    explanation:
      "Aunque `1000` no está cacheado, `equals()` compara valores, no referencias, por lo tanto retorna `true`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué pasa si asignas `Integer x = 5.5;`?",
    code: "",
    options: [
      "Compila y realiza casting implícito",
      "Compila pero lanza error en tiempo de ejecución",
      "No compila",
      "Se realiza autoboxing correctamente",
    ],
    answer: 2,
    explanation:
      "`5.5` es un literal `double`, no puede ser convertido a `Integer` sin un cast explícito, y aún así perdería precisión.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de estas afirmaciones es verdadera?",
    code: "",
    options: [
      "Autoboxing solo ocurre con expresiones aritméticas",
      "Unboxing puede lanzar una NullPointerException",
      "Integer y int son siempre intercambiables sin efectos secundarios",
      "El operador == siempre compara el valor para wrappers",
    ],
    answer: 1,
    explanation:
      "Unboxing de un valor `null` lanza una `NullPointerException`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre aquí?",
    code: "Integer i = 5;\ni += 1;",
    options: [
      "Compila, con autoboxing y unboxing implícitos",
      "No compila por tipo incompatible",
      "Error en tiempo de ejecución",
      "Lanza excepción",
    ],
    answer: 0,
    explanation:
      "La expresión `i += 1` implica unboxing de `i`, suma, y luego autoboxing para asignar el resultado de nuevo a `i`.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre cuando se intenta usar un valor null de tipo Integer en una operación aritmética?",
    code: `Integer num = null;\nint result = num + 5;`,
    options: [
      "Se lanza una excepción NullPointerException",
      "El valor null se convierte en 0 automáticamente",
      "Se lanza una excepción ArithmeticException",
      "El compilador impide la compilación",
    ],
    answer: 0,
    explanation:
      "Cuando se intenta desempaquetar (unbox) un valor null, se lanza una NullPointerException.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de este fragmento de código?",
    code: `Integer a = 128;\nInteger b = 128;\nSystem.out.println(a == b);`,
    options: ["false", "true", "Compila pero lanza excepción", "No compila"],
    answer: 0,
    explanation:
      "El operador == compara referencias. Como 128 está fuera del rango cacheado (-128 a 127), 'a' y 'b' son objetos distintos.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado imprime este código?",
    code: `Integer a = 100;\nInteger b = 100;\nSystem.out.println(a == b);`,
    options: ["true", "false", "Compila pero lanza excepción", "No compila"],
    answer: 0,
    explanation:
      "Los valores entre -128 y 127 están cacheados por Integer.valueOf(), por lo que a y b apuntan al mismo objeto.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el efecto del siguiente código?",
    code: `List<Integer> list = new ArrayList<>();\nlist.add(5);\nint x = list.get(0);`,
    options: [
      "Compila y se ejecuta correctamente",
      "Lanza una ClassCastException",
      "No compila debido al autoboxing",
      "Se lanza una excepción en tiempo de ejecución",
    ],
    answer: 0,
    explanation:
      "El valor 5 se autoboxea al agregarlo y se desboxea al obtenerlo. Todo es válido.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué implica usar == entre Integer y int?",
    code: `Integer i = 5;\nint j = 5;\nSystem.out.println(i == j);`,
    options: [
      "Se compara el valor, por lo que devuelve true",
      "Se compara la referencia, devuelve false",
      "Lanza NullPointerException",
      "No compila",
    ],
    answer: 0,
    explanation:
      "El Integer se convierte a int (unboxing), y la comparación es por valor.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si intentamos hacer esto?",
    code: `Integer i = null;\nint j = i;`,
    options: [
      "Se lanza una NullPointerException",
      "El valor se convierte a 0",
      "Compila pero lanza ClassCastException",
      "No compila",
    ],
    answer: 0,
    explanation:
      "El intento de hacer unboxing de null lanza una NullPointerException.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el comportamiento del siguiente código?",
    code: `Integer a = 1000;\nInteger b = 1000;\nSystem.out.println(a.equals(b));`,
    options: ["true", "false", "Lanza excepción", "No compila"],
    answer: 0,
    explanation:
      "equals compara el valor, por lo tanto devuelve true aunque sean objetos distintos.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede en esta comparación?",
    code: `Integer a = 127;\nInteger b = 127;\nSystem.out.println(a == b);`,
    options: ["true", "false", "Compila pero lanza excepción", "No compila"],
    answer: 0,
    explanation:
      "Los valores entre -128 y 127 están cacheados en Integer, por lo que a y b son la misma instancia.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué hace el compilador cuando usamos una operación aritmética entre Integer e int?",
    code: `Integer i = 10;\nint j = 20;\nint sum = i + j;`,
    options: [
      "Realiza unboxing implícito de i a int",
      "Lanza una excepción en tiempo de compilación",
      "Convierte j a Integer (autoboxing)",
      "El código no compila",
    ],
    answer: 0,
    explanation:
      "Se aplica unboxing implícito de i para realizar la suma como valores primitivos.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones es verdadera sobre autoboxing?",
    code: ``,
    options: [
      "Puede introducir problemas de rendimiento por creación de objetos innecesarios",
      "Siempre mejora el rendimiento del código",
      "Evita cualquier posibilidad de NullPointerException",
      "Es obligatorio cuando usamos tipos primitivos",
    ],
    answer: 0,
    explanation:
      "Autoboxing crea objetos wrapper, lo que puede afectar rendimiento y causar excepciones con null.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede al agregar un tipo primitivo a una colección de wrappers?",
    code: `List<Double> list = new ArrayList<>();\nlist.add(3.14);`,
    options: [
      "El valor se autoboxea a Double",
      "El compilador lanza error",
      "Se lanza una excepción de tipo",
      "Se convierte en BigDecimal",
    ],
    answer: 0,
    explanation:
      "El valor 3.14 se convierte automáticamente a Double mediante autoboxing.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace este código?",
    code: `Integer a = new Integer(10);\nInteger b = new Integer(10);\nSystem.out.println(a == b);`,
    options: [
      "false",
      "true",
      "Lanza excepción",
      "Compila pero da error de lógica",
    ],
    answer: 0,
    explanation:
      "Cada new Integer() crea una instancia distinta, por lo tanto a != b con ==.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el riesgo principal de usar wrappers en estructuras de control como if?",
    code: `Integer i = null;\nif (i == 10) { System.out.println(\"ok\"); }`,
    options: [
      "Puede lanzar NullPointerException al hacer unboxing de i",
      "No compila porque no se permite comparar Integer con int",
      "Compila pero siempre es falso",
      "i se convierte automáticamente a 0",
    ],
    answer: 0,
    explanation:
      "El uso de operadores como == con un wrapper null implica unboxing y lanza NullPointerException.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué salida produce este código?",
    code: `Integer i = 5;\nSystem.out.println(i + 5);`,
    options: ["10", "55", "Compila pero da error", "No compila"],
    answer: 0,
    explanation:
      "i se convierte automáticamente en int mediante unboxing, y la suma se realiza con valores primitivos.",
    subtheme: "Autoboxing y Unboxing",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre los records en Java es verdadera?",
    code: "",
    options: [
      "Los records permiten heredar de otras clases.",
      "Los records pueden definir constructores compactos.",
      "Los records permiten definir campos mutables.",
      "Los records no pueden implementar interfaces.",
    ],
    answer: 1,
    explanation:
      "Los records pueden definir constructores compactos, que son útiles para validar o transformar datos antes de asignarlos a los campos.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué salida imprime el siguiente código?",
    code: "record Point(int x, int y) {}\n\npublic class Test {\n    public static void main(String[] args) {\n        Point p = new Point(3, 4);\n        System.out.println(p);\n    }\n}",
    options: [
      "Point@3,4",
      "new Point(3, 4)",
      "Point[x=3, y=4]",
      "Point[x=3,y=4]",
    ],
    answer: 3,
    explanation:
      "Los records generan automáticamente un método toString() con el formato 'Point[x=3, y=4]'.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se intenta declarar un campo adicional dentro de un record?",
    code: "record User(String name) {\n    int age;\n}",
    options: [
      "Compila sin errores.",
      "Se lanza una excepción en tiempo de ejecución.",
      "Produce un error de compilación.",
      "El campo adicional se ignora silenciosamente.",
    ],
    answer: 2,
    explanation:
      "Los records no permiten campos adicionales fuera de los definidos en la cabecera. Esto genera un error de compilación.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito principal de los records en Java?",
    code: "",
    options: [
      "Permitir herencia múltiple.",
      "Reducir el uso de memoria.",
      "Facilitar la creación de clases de datos inmutables.",
      "Hacer más fácil la sobrecarga de métodos.",
    ],
    answer: 2,
    explanation:
      "Los records están diseñados para representar datos inmutables con menos código, facilitando su uso como DTOs.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué métodos se generan automáticamente al declarar un record?",
    code: "",
    options: [
      "Constructor, equals, hashCode y toString",
      "Constructor, getter y setter",
      "equals, finalize y toString",
      "Constructor, setter y toString",
    ],
    answer: 0,
    explanation:
      "Los records generan automáticamente constructor, métodos equals(), hashCode() y toString(), y métodos de acceso para los campos.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Es posible sobreescribir el método toString() en un record?",
    code: 'record Animal(String name) {\n    @Override\n    public String toString() {\n        return "Animal: " + name;\n    }\n}',
    options: [
      "No, genera error de compilación.",
      "Sí, pero solo en versiones de Java anteriores a 14.",
      "Sí, y se utiliza en lugar del generado automáticamente.",
      "No, los métodos en records no son personalizables.",
    ],
    answer: 2,
    explanation:
      "Aunque se genera automáticamente, puedes sobreescribir toString() manualmente si deseas un formato personalizado.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué restricción aplica a los campos de un record?",
    code: "",
    options: [
      "Deben ser protegidos.",
      "Deben declararse como `static`.",
      "No pueden ser `static` salvo que también sean `final`.",
      "No pueden tener valores por defecto.",
    ],
    answer: 2,
    explanation:
      "Solo se permiten campos `static` si también son `final`, ya que los records son inmutables y sus campos no deben cambiar.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado del siguiente código?",
    code: 'record Book(String title, String author) {}\n\npublic class Test {\n    public static void main(String[] args) {\n        Book b1 = new Book("Clean Code", "Uncle Bob");\n        Book b2 = new Book("Clean Code", "Uncle Bob");\n        System.out.println(b1.equals(b2));\n    }\n}',
    options: [
      "false",
      "true",
      "Error en tiempo de ejecución",
      "Depende del hashCode",
    ],
    answer: 1,
    explanation:
      "El método equals() generado automáticamente compara los campos. En este caso, ambos objetos tienen los mismos valores.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cómo se llama el método generado automáticamente para acceder a un campo en un record?",
    code: 'record User(String name) {}\n\nUser u = new User("Alice");',
    options: ["u.getName()", "u.name()", "u.getname()", "u.Name()"],
    answer: 1,
    explanation:
      "Cada campo del record genera automáticamente un método con el mismo nombre que el campo (sin prefijo get).",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué pasa si defines un record con parámetros nulos?",
    code: "record Client(String name, String email) {}\n\nClient c = new Client(null, null);",
    options: [
      "Genera un NullPointerException.",
      "Compila, pero lanza excepción al usar los métodos.",
      "Es válido, el record permite valores nulos.",
      'Los valores se reemplazan automáticamente por "".',
    ],
    answer: 2,
    explanation:
      "Los records no validan automáticamente si los parámetros son nulos; debes implementar esa lógica manualmente si es necesario.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué característica de diseño orientado a objetos no soportan los records?",
    code: "",
    options: ["Encapsulamiento", "Herencia", "Polimorfismo", "Inmutabilidad"],
    answer: 1,
    explanation:
      "Los records no pueden extender clases, solo pueden implementar interfaces, por lo tanto no soportan herencia clásica.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el resultado si se define un record dentro de un método?",
    code: "void demo() {\n    record Temp(int value) {}\n    Temp t = new Temp(5);\n    System.out.println(t);\n}",
    options: [
      "No compila, los records solo pueden ser top-level.",
      "Compila y funciona normalmente.",
      "Compila pero lanza excepción en tiempo de ejecución.",
      "No compila por ambigüedad en el nombre.",
    ],
    answer: 1,
    explanation:
      "Desde Java 16, los records pueden ser locales (definidos dentro de métodos), lo cual es útil para estructuras temporales.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué interfaz puede implementar un record?",
    code: "record Triangle(double base, double height) implements Shape {}",
    options: [
      "Solo interfaces funcionales.",
      "Cualquier clase abstracta.",
      "Cualquier interfaz.",
      "Ninguna interfaz.",
    ],
    answer: 2,
    explanation:
      "Los records no pueden extender clases pero sí implementar interfaces, igual que cualquier otra clase en Java.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la ventaja principal de usar records para DTOs?",
    code: "",
    options: [
      "Permiten modificar los campos directamente.",
      "Eliminan la necesidad de equals() y hashCode() personalizados.",
      "Son más rápidos que las clases estándar.",
      "Pueden heredar constructores de superclases.",
    ],
    answer: 1,
    explanation:
      "La principal ventaja de usar records como DTOs es que reducen el boilerplate al generar automáticamente métodos comunes como equals(), hashCode() y toString().",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si se intenta declarar un campo adicional dentro de un record que ya fue definido en la cabecera?",
    code: "public record Persona(String nombre, int edad) {\n    private String ciudad;\n}",
    options: [
      "Compila correctamente y ciudad se trata como campo adicional",
      "Compila pero el campo ciudad no se puede usar",
      "No compila porque no se permiten campos adicionales fuera de la cabecera",
      "El campo ciudad se ignora durante la construcción del record",
    ],
    answer: 2,
    explanation:
      "Los records en Java no permiten definir nuevos campos que no estén en la cabecera del record. Esto garantiza que los objetos sean completamente inmutables y concisos.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes métodos se genera automáticamente en un record?",
    code: "",
    options: [
      "Un constructor sin argumentos",
      "equals() y hashCode() basados en los componentes",
      "Un setter para cada campo",
      "Un método estático factory()",
    ],
    answer: 1,
    explanation:
      "Java genera automáticamente `equals()`, `hashCode()` y `toString()` basados en los componentes declarados en la cabecera del record.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado del siguiente fragmento?",
    code: "public record Punto(int x, int y) {}\nPunto p = new Punto(3, 4);\nSystem.out.println(p.x());",
    options: ["Error de compilación", "3", "x", "null"],
    answer: 1,
    explanation:
      "En los records, cada componente declarado en la cabecera tiene automáticamente un método accessor con el mismo nombre. En este caso, `p.x()` devuelve el valor 3.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué restricción aplica sobre la herencia en records?",
    code: "",
    options: [
      "Pueden extender cualquier clase",
      "Solo pueden heredar de Object",
      "Pueden heredar de clases abstractas",
      "Pueden implementar otras clases record",
    ],
    answer: 1,
    explanation:
      "Los records no pueden extender ninguna clase (ya que extienden implícitamente `java.lang.Record`), pero sí pueden implementar interfaces.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede al declarar un constructor personalizado en un record?",
    code: 'public record Libro(String titulo, int paginas) {\n    public Libro {\n        if (paginas < 1) throw new IllegalArgumentException("Páginas inválidas");\n    }\n}',
    options: [
      "Compila y reemplaza el constructor por defecto",
      "No se permite sobreescribir constructores en records",
      "Compila, pero el constructor no es usado al crear el objeto",
      "Genera un error si no se invoca super()",
    ],
    answer: 0,
    explanation:
      "Es válido declarar un 'compact constructor' en un record. Este constructor personalizado permite realizar validaciones antes de completar la creación del objeto, manteniendo los beneficios de inmutabilidad.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ventaja principal ofrecen los records frente a clases tradicionales en Java?",
    code: "",
    options: [
      "Mayor capacidad de herencia",
      "Mayor mutabilidad y flexibilidad",
      "Reducción del código repetitivo para clases inmutables",
      "Mayor rendimiento en ejecución",
    ],
    answer: 2,
    explanation:
      "La principal ventaja de los records es que reducen el código necesario para representar clases inmutables, eliminando la necesidad de escribir manualmente constructores, getters, `equals()`, `hashCode()` y `toString()`.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se sobrescribe el método toString() en un record?",
    code: 'public record Animal(String especie) {\n    @Override\n    public String toString() {\n        return "Animal: " + especie;\n    }\n}',
    options: [
      "Compila con error porque no se puede sobrescribir",
      "El método sobrescribe al generado automáticamente",
      "El método se ignora al imprimir el objeto",
      "Genera un conflicto en tiempo de ejecución",
    ],
    answer: 1,
    explanation:
      "Es perfectamente válido sobrescribir los métodos generados por defecto como `toString()`, `equals()` y `hashCode()` en un record.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué salida genera este código?",
    code: "public record Coordenada(int x, int y) {}\n\nCoordenada c1 = new Coordenada(5, 10);\nCoordenada c2 = new Coordenada(5, 10);\nSystem.out.println(c1.equals(c2));",
    options: [
      "true",
      "false",
      "Depende del contenido de los objetos",
      "No compila porque equals no está definido",
    ],
    answer: 0,
    explanation:
      "Los records generan automáticamente un método `equals()` que compara los valores de los componentes definidos. En este caso, ambos objetos tienen los mismos valores.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la visibilidad por defecto del constructor generado en un record?",
    code: "",
    options: ["private", "public", "protected", "package-private"],
    answer: 1,
    explanation:
      "El constructor que genera automáticamente un record es público por defecto, lo cual permite instanciar el objeto desde cualquier lugar.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la palabra clave que todos los records extienden de forma implícita?",
    code: "",
    options: ["Object", "Serializable", "Record", "Immutable"],
    answer: 2,
    explanation:
      "Todos los records en Java extienden implícitamente de `java.lang.Record`, lo que permite al compilador y a herramientas de reflexión tratarlos de forma especial.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el comportamiento predeterminado de un método accessor en un record?",
    code: 'public record Producto(String nombre, double precio) {}\n\nProducto p = new Producto("Camisa", 25.0);\nSystem.out.println(p.precio());',
    options: [
      "Devuelve una referencia nula",
      "No está definido por defecto",
      "Devuelve el valor del campo correspondiente",
      "Devuelve un objeto Wrapper",
    ],
    answer: 2,
    explanation:
      "Cada componente del record genera automáticamente un método accessor con el mismo nombre, que devuelve el valor del campo correspondiente.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se intenta declarar un record con el mismo nombre de un tipo existente?",
    code: "public record String(int longitud) {}",
    options: [
      "Se sobrescribe el tipo existente",
      "El compilador lanza un error por conflicto de nombre",
      "Se permite pero solo si no se usa java.lang",
      "Compila pero no se puede usar",
    ],
    answer: 1,
    explanation:
      "No se puede declarar un record con el mismo nombre que una clase del JDK como `String`. Esto causa un conflicto de nombres y el compilador lanza un error.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes elementos se puede declarar dentro del cuerpo de un record?",
    code: "",
    options: [
      "Métodos estáticos",
      "Constructores con más parámetros",
      "Nuevos campos no listados en la cabecera",
      "Interfaces internas no estáticas",
    ],
    answer: 0,
    explanation:
      "Dentro del cuerpo de un record se pueden declarar métodos estáticos, métodos de instancia y constructores compactos, pero no se pueden definir nuevos campos no presentes en la cabecera.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre un record y una clase inmutable definida manualmente?",
    code: "",
    options: [
      "Los records no pueden tener constructores",
      "Los records generan automáticamente los métodos necesarios",
      "Las clases inmutables no pueden sobrescribir toString()",
      "Las clases inmutables no implementan interfaces",
    ],
    answer: 1,
    explanation:
      "Los records simplifican la declaración de clases inmutables generando automáticamente constructor, accessors, `equals()`, `hashCode()` y `toString()`.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de los siguientes es un uso válido de un record?",
    code: "public record Par<K, V>(K clave, V valor) {}",
    options: [
      "No se permite el uso de tipos genéricos en records",
      "Solo es válido con clases wrapper",
      "Sí se permite usar tipos genéricos",
      "Compila pero los genéricos no funcionan",
    ],
    answer: 2,
    explanation:
      "Los records soportan perfectamente el uso de tipos genéricos, lo que los hace útiles como contenedores de datos tipo Pair, Tuple, etc.",
    subtheme: "Record en Java (Java 14+)",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de las siguientes clases de Java es inmutable por diseño?",
    code: "",
    options: ["StringBuilder", "ArrayList", "String", "HashMap"],
    answer: 2,
    explanation:
      "La clase String es inmutable por diseño: una vez creado un objeto String, su valor no puede cambiar.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el efecto principal de modificar un objeto mutable pasado como argumento a un método?",
    code: "",
    options: [
      "Se crea una nueva instancia inmutable.",
      "Se modifica la referencia del objeto.",
      "Los cambios afectan al objeto original fuera del método.",
      "El objeto se convierte automáticamente en inmutable.",
    ],
    answer: 2,
    explanation:
      "Los objetos mutables pueden modificarse dentro de un método, y estos cambios son visibles fuera del mismo ya que se pasa la referencia.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué se requiere para crear una clase verdaderamente inmutable en Java?",
    code: "",
    options: [
      "Todos los campos deben ser públicos.",
      "Debe extender una clase abstracta.",
      "Los campos deben ser finales y privados, y no debe tener setters.",
      "Debe implementar la interfaz Serializable.",
    ],
    answer: 2,
    explanation:
      "Una clase inmutable debe tener campos `final` y `private`, no exponer setters, y no permitir que referencias mutables se filtren.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de las siguientes estructuras de datos es mutable?",
    code: "",
    options: [
      "java.util.Collections.unmodifiableList()",
      "List.of()",
      "Arrays.asList()",
      "String",
    ],
    answer: 2,
    explanation:
      "`Arrays.asList()` devuelve una lista fija respaldada por un array que sí puede modificarse en contenido (aunque no en tamaño).",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si un campo mutable es expuesto sin control en una clase inmutable?",
    code: "",
    options: [
      "Se lanza una excepción en tiempo de ejecución.",
      "No pasa nada, la clase sigue siendo inmutable.",
      "La clase se convierte en parcialmente mutable.",
      "Java no permite declarar campos mutables en clases inmutables.",
    ],
    answer: 2,
    explanation:
      "Si un campo mutable se expone (por ejemplo, devolviéndolo directamente desde un getter), la clase pierde su inmutabilidad en la práctica.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué técnica se usa para proteger campos mutables en clases inmutables?",
    code: "",
    options: [
      "Llamar a toString()",
      "Pasar por constructor sin copiar",
      "Usar `clone()` o una copia defensiva",
      "Hacer casting a Object",
    ],
    answer: 2,
    explanation:
      "Las copias defensivas se usan para prevenir que objetos mutables modifiquen el estado interno de una clase inmutable.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de las siguientes declaraciones es verdadera?",
    code: "",
    options: [
      "Inmutabilidad mejora la eficiencia de memoria.",
      "Los objetos inmutables no pueden compartirse entre hilos.",
      "La mutabilidad reduce errores en concurrencia.",
      "Inmutabilidad simplifica el diseño de programas concurrentes.",
    ],
    answer: 3,
    explanation:
      "Los objetos inmutables pueden compartirse de forma segura entre hilos sin sincronización, lo que reduce errores en concurrencia.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué efecto tiene este código sobre la inmutabilidad de la clase?",
    code: 'class Persona {\n    private final StringBuilder nombre = new StringBuilder("Ana");\n    public StringBuilder getNombre() {\n        return nombre;\n    }\n}',
    options: [
      "La clase es inmutable porque el campo es final.",
      "La clase es mutable porque devuelve una referencia mutable.",
      "La clase es inmutable si se usa en un solo hilo.",
      "La clase es segura si el campo no se modifica dentro de la clase.",
    ],
    answer: 1,
    explanation:
      "Aunque el campo es `final`, devuelve un `StringBuilder` que puede ser modificado externamente, por lo tanto, la clase es mutable.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el beneficio de usar objetos inmutables como claves en un Map?",
    code: "",
    options: [
      "Reduce el uso de memoria.",
      "Evita la necesidad de sincronización.",
      "Permite modificar claves después de insertarlas.",
      "Garantiza que el hashcode no cambie mientras esté en el Map.",
    ],
    answer: 3,
    explanation:
      "Los objetos inmutables garantizan que el `hashCode()` no cambie después de ser usados como clave, lo cual es esencial para la integridad de la estructura de datos.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué librería de Java ofrece estructuras inmutables listas para usar?",
    code: "",
    options: [
      "java.util.concurrent",
      "Guava de Google",
      "java.sql",
      "javax.swing",
    ],
    answer: 1,
    explanation:
      "Guava de Google ofrece colecciones inmutables con métodos como `ImmutableList.of()` que facilitan la programación funcional y segura.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué error común cometen los desarrolladores al implementar clases supuestamente inmutables?",
    code: "",
    options: [
      "No usar `final` en métodos.",
      "Permitir acceso a campos privados.",
      "Exponer campos mutables sin copia defensiva.",
      "No extender `Object` correctamente.",
    ],
    answer: 2,
    explanation:
      "Exponer campos mutables sin protegerlos con copias defensivas puede romper la inmutabilidad deseada.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es una señal clara de una clase mutable?",
    code: "",
    options: [
      "Todos sus campos son finales.",
      "Tiene constructores privados.",
      "Ofrece métodos que alteran su estado.",
      "No implementa interfaces funcionales.",
    ],
    answer: 2,
    explanation:
      "Una clase mutable expone métodos (como setters) que modifican su estado interno después de su creación.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué implica la anotación `@Value` en Lombok?",
    code: "",
    options: [
      "Crea una clase mutante.",
      "Hace inmutable la clase generando campos finales y sin setters.",
      "Obliga a implementar Serializable.",
      "Excluye los métodos equals y hashCode().",
    ],
    answer: 1,
    explanation:
      "`@Value` en Lombok transforma la clase en inmutable al generar automáticamente `final`, constructor, `equals`, `hashCode` y `toString`.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué característica define a un record en Java en cuanto a inmutabilidad?",
    code: "",
    options: [
      "Los campos pueden modificarse con setters.",
      "Los campos no pueden ser finales.",
      "Los campos son implícitamente `final` y privados.",
      "Puede heredar de otras clases inmutables.",
    ],
    answer: 2,
    explanation:
      "Los records en Java son inmutables por defecto, con campos `final` y privados generados automáticamente.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de ejecutar el siguiente código?",
    code: 'List<String> lista = List.of("uno", "dos");\nlista.add("tres");',
    options: [
      "La lista se modifica correctamente.",
      "Se lanza una UnsupportedOperationException.",
      "El elemento se agrega sin errores.",
      "Se lanza una NullPointerException.",
    ],
    answer: 1,
    explanation:
      "`List.of()` devuelve una lista inmutable. Al intentar modificarla se lanza una `UnsupportedOperationException`.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre si intentas modificar un objeto inmutable?",
    code: "",
    options: [
      "El objeto lanza una excepción en tiempo de ejecución",
      "El objeto se modifica silenciosamente",
      "Se crea una nueva instancia con el nuevo valor",
      "Java impide la compilación del código",
    ],
    answer: 2,
    explanation:
      "Los objetos inmutables no permiten cambios en su estado. Cualquier operación que 'modifique' un objeto inmutable, como String, devuelve una nueva instancia.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de los siguientes tipos es inmutable por defecto?",
    code: "",
    options: ["StringBuilder", "ArrayList", "String", "HashMap"],
    answer: 2,
    explanation:
      "String en Java es inmutable: una vez creado, su valor no puede cambiar. Los demás tipos son mutables.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es una ventaja de la inmutabilidad?",
    code: "",
    options: [
      "Mayor uso de memoria",
      "Mayor dificultad para manejar el estado",
      "Mayor facilidad para programar en concurrencia",
      "Imposibilidad de reutilización de objetos",
    ],
    answer: 2,
    explanation:
      "Los objetos inmutables son thread-safe por diseño, lo que facilita la programación concurrente al evitar problemas de sincronización.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el comportamiento de un campo final que apunta a un objeto mutable?",
    code: `
  class Persona {
    final List<String> hobbies = new ArrayList<>();
  }
      `,
    options: [
      "No se puede modificar la lista",
      "La referencia es constante pero el contenido puede cambiar",
      "La lista es inmutable por ser final",
      "El compilador lanza error al agregar elementos",
    ],
    answer: 1,
    explanation:
      "El modificador 'final' impide cambiar la referencia, no el contenido del objeto referenciado. Por tanto, se puede modificar la lista.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la mejor forma de hacer inmutable una lista?",
    code: "",
    options: [
      "Collections.unmodifiableList(lista)",
      "lista.clone()",
      "new ArrayList<>(lista)",
      "lista.clear()",
    ],
    answer: 0,
    explanation:
      "Collections.unmodifiableList() devuelve una vista inmutable de la lista original. Las demás opciones no garantizan inmutabilidad.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre `record` es correcta en cuanto a inmutabilidad?",
    code: "",
    options: [
      "Los campos del record pueden ser modificados después de la creación",
      "El record puede heredar de otra clase",
      "Los campos del record son implícitamente `final`",
      "Los métodos setters se generan automáticamente",
    ],
    answer: 2,
    explanation:
      "En Java, los campos de un `record` son `final` e inmutables por defecto, y no se generan setters.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué pasa si intentas modificar el estado de un objeto inmutable pasado como parámetro?",
    code: "",
    options: [
      "El compilador lo evita automáticamente",
      "Lanza una excepción en tiempo de ejecución",
      "El objeto no se modifica, pero puedes crear una copia modificada",
      "La JVM reemplaza el objeto original en memoria",
    ],
    answer: 2,
    explanation:
      "Al no poder modificar el objeto inmutable, puedes devolver una nueva instancia que refleje los cambios deseados.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué efecto tiene declarar una clase como `final`?",
    code: "",
    options: [
      "Hace inmutables todos sus atributos",
      "Evita que la clase sea extendida",
      "Bloquea los setters de sus campos",
      "Convierte automáticamente sus campos en `final`",
    ],
    answer: 1,
    explanation:
      "La palabra clave `final` en una clase impide que sea extendida, pero no afecta la mutabilidad de sus campos.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué librería en Java se usa frecuentemente para facilitar la inmutabilidad?",
    code: "",
    options: ["Lombok", "Apache Commons IO", "Junit", "SLF4J"],
    answer: 0,
    explanation:
      "Lombok permite generar automáticamente clases inmutables usando anotaciones como @Value o @Builder.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la diferencia entre `String` y `StringBuilder` respecto a mutabilidad?",
    code: "",
    options: [
      "Ambos son mutables",
      "StringBuilder es inmutable, String no",
      "StringBuilder permite modificaciones en el contenido",
      "String se puede modificar directamente",
    ],
    answer: 2,
    explanation:
      "StringBuilder es mutable y permite modificar directamente el contenido del objeto, mientras que String es inmutable.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de estas prácticas promueve inmutabilidad en clases personalizadas?",
    code: "",
    options: [
      "Usar campos públicos",
      "Definir todos los campos como final y privados",
      "Proveer setters para todos los atributos",
      "Herencia extensa de clases base",
    ],
    answer: 1,
    explanation:
      "Una clase inmutable suele tener campos `private final` y no provee setters, asegurando que su estado no pueda modificarse después de creada.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el efecto de una clase que tiene solo getters y campos `final`?",
    code: "",
    options: [
      "Es necesariamente abstracta",
      "Es thread-safe si es inmutable",
      "Requiere usar synchronized",
      "No puede contener objetos mutables",
    ],
    answer: 1,
    explanation:
      "Una clase inmutable es naturalmente thread-safe porque su estado no cambia y no requiere sincronización adicional.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el riesgo de exponer un campo `List` mutable a través de un getter?",
    code: "",
    options: [
      "No hay riesgo si es final",
      "Los consumidores pueden modificar el contenido",
      "El compilador evita el acceso",
      "La JVM clona automáticamente la lista",
    ],
    answer: 1,
    explanation:
      "Aunque la lista sea `final`, exponerla directamente permite que otros modifiquen su contenido. Se recomienda devolver una copia o una vista inmutable.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué palabra clave NO garantiza inmutabilidad por sí sola?",
    code: "",
    options: ["final", "private", "static", "abstract"],
    answer: 0,
    explanation:
      "`final` evita la reasignación de una referencia, pero no garantiza que el objeto referenciado sea inmutable.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué patrón de diseño se asocia comúnmente con inmutabilidad?",
    code: "",
    options: ["Builder", "Observer", "Singleton", "Factory"],
    answer: 0,
    explanation:
      "El patrón Builder facilita la creación de objetos inmutables complejos sin necesidad de múltiples constructores.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una técnica común para hacer que un objeto mutable sea 'efectivamente inmutable'?",
    code: "",
    options: [
      "Evitar herencia",
      "No proporcionar métodos modificadores",
      "Declarar todos los campos como `public`",
      "Utilizar arrays para los campos",
    ],
    answer: 1,
    explanation:
      "Una técnica común para lograr inmutabilidad es no proporcionar métodos que modifiquen el estado del objeto (setters).",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Por qué `String` es seguro para el uso en entornos multihilo sin sincronización?",
    code: "",
    options: [
      "Porque es una clase final",
      "Porque implementa la interfaz Serializable",
      "Porque es inmutable",
      "Porque Java lo trata como tipo primitivo",
    ],
    answer: 2,
    explanation:
      "La inmutabilidad de `String` lo hace naturalmente seguro para su uso en entornos concurrentes sin necesidad de sincronización.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué método de la clase `Collections` crea una lista inmutable?",
    code: "",
    options: [
      "Collections.copyOf()",
      "Collections.unmodifiableList()",
      "Collections.emptyList()",
      "Collections.list()",
    ],
    answer: 1,
    explanation:
      "`Collections.unmodifiableList()` devuelve una vista inmutable de la lista original; cualquier intento de modificación lanzará una excepción.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué clase inmutable puede usarse como clave en un `HashMap` sin preocuparse por cambios en el hashCode?",
    code: "",
    options: ["StringBuilder", "ArrayList", "String", "HashMap"],
    answer: 2,
    explanation:
      "String es inmutable, por lo que su hashCode no cambia. Esto lo hace seguro para usar como clave en mapas.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si se modifican campos de un objeto mutable usado en un `Set`?",
    code: "",
    options: [
      "El Set lanza excepción",
      "La operación se ignora",
      "Puede romper la integridad del Set",
      "El Set se vuelve inmutable",
    ],
    answer: 2,
    explanation:
      "Modificar un objeto mutable después de insertarlo en un Set puede causar inconsistencias, especialmente si afecta equals/hashCode.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes prácticas NO es compatible con la inmutabilidad?",
    code: "",
    options: [
      "Declarar campos como final",
      "Proveer getters seguros",
      "Exponer colecciones internas directamente",
      "Inicializar todos los campos en el constructor",
    ],
    answer: 2,
    explanation:
      "Exponer directamente colecciones internas permite su modificación externa, rompiendo la inmutabilidad.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué interfaz funcional ayuda a mantener objetos inmutables al crear nuevos valores en streams?",
    code: "",
    options: ["Supplier", "Consumer", "Function", "BiFunction"],
    answer: 2,
    explanation:
      "`Function<T,R>` permite transformar elementos sin modificar los originales, promoviendo el uso de estructuras inmutables.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre al intentar modificar una lista devuelta por `List.of()`?",
    code: "",
    options: [
      "Se modifica exitosamente",
      "Se lanza una excepción en tiempo de ejecución",
      "Se ignora la operación",
      "La lista se convierte en `null`",
    ],
    answer: 1,
    explanation:
      "`List.of()` crea una lista inmutable. Cualquier intento de modificarla lanza una excepción `UnsupportedOperationException`.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón se recomienda usar para construir objetos inmutables con muchos atributos?",
    code: "",
    options: ["Factory Method", "Prototype", "Builder", "Command"],
    answer: 2,
    explanation:
      "El patrón Builder facilita la creación de objetos inmutables complejos con múltiples atributos opcionales o requeridos.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una consecuencia común del uso de objetos mutables como claves de un `Map`?",
    code: "",
    options: [
      "Mejor rendimiento",
      "Incompatibilidad con serialización",
      "Posibles errores al buscar claves",
      "Aumento de seguridad",
    ],
    answer: 2,
    explanation:
      "Si el objeto usado como clave cambia después de ser insertado, el `Map` no podrá encontrarlo correctamente por hashCode inconsistente.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué se recomienda retornar en un getter si el campo es una colección mutable?",
    code: "",
    options: [
      "null",
      "La misma instancia",
      "Una vista inmutable o una copia",
      "Un objeto serializado",
    ],
    answer: 2,
    explanation:
      "Retornar una copia o vista inmutable evita que el consumidor pueda modificar el estado interno del objeto.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el rol de `Optional` respecto a la inmutabilidad?",
    code: "",
    options: [
      "Hace que el campo sea mutable",
      "Permite cambiar el valor dentro de Optional directamente",
      "Fomenta un estilo de programación inmutable y seguro",
      "Reemplaza la necesidad de final",
    ],
    answer: 2,
    explanation:
      "`Optional` promueve un estilo de programación funcional e inmutable al evitar valores nulos y obligar a evaluar explícitamente el valor presente.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué opción representa una estrategia de encapsulamiento para evitar mutabilidad no deseada?",
    code: "",
    options: [
      "Campos públicos",
      "Getters que devuelven referencias directas",
      "Constructores públicos sin validaciones",
      "Uso de defensive copies (copias defensivas)",
    ],
    answer: 3,
    explanation:
      "Las copias defensivas permiten devolver copias de objetos internos para evitar que estos sean modificados desde el exterior.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué garantiza que un objeto sea completamente inmutable?",
    code: "",
    options: [
      "Campos `private` y `final` con tipos inmutables",
      "Anotación `@Immutable`",
      "Declarar la clase como `abstract`",
      "Usar `instanceof` en los métodos",
    ],
    answer: 0,
    explanation:
      "Para garantizar inmutabilidad, los campos deben ser `private final` y de tipos inmutables, sin setters ni mutadores externos.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué comportamiento tienen las clases `record` frente a la mutabilidad de campos que contienen listas?",
    code: "record Persona(String nombre, List<String> hobbies) {}",
    options: [
      "La lista es inmutable por estar en un record",
      "Se puede modificar la lista aunque el record sea inmutable",
      "Los hobbies no se pueden acceder",
      "El compilador genera una copia defensiva automáticamente",
    ],
    answer: 1,
    explanation:
      "Aunque el record es inmutable, si contiene referencias a objetos mutables como una lista, estos pueden modificarse externamente.",
    subtheme: "Inmutabilidad vs Mutabilidad en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si se usa el operador `==` para comparar dos objetos `String` que contienen el mismo contenido?",
    code: `String a = new String("Java");\nString b = new String("Java");\nSystem.out.println(a == b);`,
    options: [
      "Imprime true porque el contenido es igual",
      "Imprime false porque se comparan las referencias",
      "Lanza una excepción en tiempo de ejecución",
      "Imprime true porque Java internamente compara por contenido",
    ],
    answer: 1,
    explanation:
      "El operador `==` compara referencias, no contenido. Aunque `a` y `b` contienen el mismo texto, son objetos distintos en memoria.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método se debe utilizar para comparar el contenido de dos `String` ignorando mayúsculas y minúsculas?",
    code: ``,
    options: [
      "equals()",
      "compareToIgnoreCase()",
      "equalsIgnoreCase()",
      "regionMatches()",
    ],
    answer: 2,
    explanation:
      "`equalsIgnoreCase()` compara el contenido de dos cadenas ignorando las diferencias entre mayúsculas y minúsculas.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida del siguiente código?",
    code: `String a = "abc";\nString b = "abc";\nSystem.out.println(a == b);`,
    options: [
      "true",
      "false",
      "Depende del compilador",
      "Error en compilación",
    ],
    answer: 0,
    explanation:
      "Las cadenas literales se almacenan en el pool de strings, por lo que `a` y `b` referencian al mismo objeto.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una característica principal de los objetos de tipo `String` en Java?",
    code: ``,
    options: [
      "Son mutables",
      "Son inmutables",
      "Son subclases de CharSequenceMutable",
      "Se pueden modificar directamente con operadores",
    ],
    answer: 1,
    explanation:
      "Los objetos `String` en Java son inmutables, lo que significa que no pueden cambiar después de ser creados.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método permite concatenar cadenas de manera eficiente en múltiples operaciones?",
    code: ``,
    options: ["concat()", "append()", "StringBuilder.append()", "join()"],
    answer: 2,
    explanation:
      "Para concatenaciones múltiples, se recomienda `StringBuilder.append()` porque es mutable y evita crear muchos objetos intermedios.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la diferencia entre `StringBuilder` y `StringBuffer`?",
    code: ``,
    options: [
      "StringBuilder es sincrónico, StringBuffer no",
      "Ambos son inmutables",
      "StringBuffer es sincrónico y seguro para hilos",
      "No existe diferencia",
    ],
    answer: 2,
    explanation:
      "`StringBuffer` es seguro para hilos porque sus métodos están sincronizados. `StringBuilder` no lo es, por lo que es más rápido en contextos no concurrentes.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método de la clase `String` divide una cadena en varias partes según un patrón?",
    code: ``,
    options: ["split()", "slice()", "divide()", "tokenize()"],
    answer: 0,
    explanation:
      "`split()` permite dividir una cadena en un arreglo de cadenas utilizando una expresión regular como delimitador.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado produce el siguiente código?",
    code: `String s = "Java";\ns.concat(" World");\nSystem.out.println(s);`,
    options: ["Java World", "World", "Java", "null"],
    answer: 2,
    explanation:
      "`concat()` no modifica la cadena original ya que `String` es inmutable. La operación debe asignarse a una nueva variable.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones es verdadera respecto al método `intern()` en Java?",
    code: ``,
    options: [
      "Almacena la cadena en una base de datos",
      "Fuerza que la cadena se agregue al String pool",
      "Convierte un String en un int",
      "Intern no existe en Java",
    ],
    answer: 1,
    explanation:
      "El método `intern()` agrega la cadena al pool de strings y retorna una referencia compartida si ya existe una igual.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método se debe usar para verificar si una cadena comienza con una subcadena específica?",
    code: ``,
    options: ["startsWith()", "contains()", "hasPrefix()", "beginsWith()"],
    answer: 0,
    explanation:
      "`startsWith()` permite verificar si una cadena comienza con una subcadena dada.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida del siguiente fragmento?",
    code: `String s = null;\ns += "Java";\nSystem.out.println(s);`,
    options: ["Java", "nullJava", "Error en compilación", "null"],
    answer: 1,
    explanation:
      "El operador `+=` convierte `null` en `null automáticamente y concatena `Java`.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué clase se recomienda para crear cadenas dinámicas en aplicaciones concurrentes?",
    code: ``,
    options: ["String", "StringBuilder", "StringBuffer", "CharSequence"],
    answer: 2,
    explanation:
      "`StringBuffer` es seguro para hilos debido a que sus métodos son sincronizados, a diferencia de `StringBuilder`.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de:`?",
    code: `"java".toUpperCase().equals("JAVA")`,
    options: ["false", "true", "null", "Compila pero lanza excepción"],
    answer: 1,
    explanation:
      '`toUpperCase()` convierte toda la cadena a mayúsculas, y `equals()` compara correctamente el resultado con `"JAVA"`.',
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre si se pasa una cadena a `Integer.parseInt()`?",
    code: `String s = "123";\nint x = Integer.parseInt(s);`,
    options: [
      "Convierte correctamente si la cadena es numérica",
      "Siempre lanza NumberFormatException",
      "Convierte a double",
      "Compila pero lanza NullPointerException",
    ],
    answer: 0,
    explanation:
      "Si la cadena contiene un número válido, `Integer.parseInt()` la convierte en un entero.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace el método `trim()` en una cadena?",
    code: ``,
    options: [
      "Elimina espacios entre palabras",
      "Elimina espacios al inicio y final",
      "Convierte a mayúscula",
      "Elimina todos los caracteres especiales",
    ],
    answer: 1,
    explanation:
      "`trim()` elimina únicamente los espacios en blanco al inicio y al final de la cadena.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el resultado de comparar dos Strings creados con el operador 'new' utilizando '=='?",
    code: `String a = new String("java");
  String b = new String("java");
  System.out.println(a == b);`,
    options: ["true", "false", "Compila pero lanza excepción", "No compila"],
    answer: 1,
    explanation:
      "'==' compara referencias, y al usar 'new' se crean dos objetos distintos en memoria, por lo que devuelve false.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método se debe usar para comparar correctamente el contenido de dos Strings?",
    code: "",
    options: ["equals()", "==", "compare()", "match()"],
    answer: 0,
    explanation:
      "equals() compara el contenido de los Strings, mientras que '==' compara las referencias en memoria.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace intern() en un objeto String?",
    code: "",
    options: [
      "Elimina espacios en blanco",
      "Concatena el String con otro",
      "Devuelve una referencia del pool de Strings",
      "Cambia el valor del String a mayúsculas",
    ],
    answer: 2,
    explanation:
      "intern() devuelve una referencia del pool de Strings, optimizando el uso de memoria.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida del siguiente código?",
    code: `String s1 = "abc";
  String s2 = "a" + "b" + "c";
  System.out.println(s1 == s2);`,
    options: [
      "true",
      "false",
      "Error en compilación",
      "No se puede comparar Strings",
    ],
    answer: 0,
    explanation:
      "Las concatenaciones de constantes en tiempo de compilación son internadas, por lo tanto ambas referencias apuntan al mismo objeto.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué resultado tiene el método 'substring()' si el índice final es igual al inicial?",
    code: `String str = "Java";
  System.out.println(str.substring(2,2));`,
    options: [
      "Imprime un espacio en blanco",
      "Lanza una excepción",
      "Imprime 'v'",
      "Imprime cadena vacía",
    ],
    answer: 3,
    explanation:
      "Si inicio y fin son iguales, se retorna una cadena vacía sin error.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes métodos modifica el objeto String original?",
    code: "",
    options: ["replace()", "concat()", "substring()", "Ninguno"],
    answer: 3,
    explanation:
      "Los Strings en Java son inmutables, por lo tanto, todos estos métodos retornan nuevos objetos y no modifican el original.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué efecto tiene el uso de '+=' en una cadena dentro de un bucle?",
    code: `String result = "";
  for (int i = 0; i < 1000; i++) {
      result += "a";
  }`,
    options: [
      "Produce una cadena final optimizada",
      "Modifica el mismo objeto 'result'",
      "Crea múltiples objetos String en memoria",
      "Lanza una excepción en tiempo de ejecución",
    ],
    answer: 2,
    explanation:
      "Cada concatenación con '+=' genera un nuevo objeto String, lo cual es ineficiente.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el uso recomendado para manipular cadenas en bucles?",
    code: "",
    options: ["StringBuilder", "StringBuffer", "String", "CharSequence"],
    answer: 0,
    explanation:
      "StringBuilder es mutable y más eficiente para operaciones repetitivas de concatenación.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué método convierte un String a un array de caracteres?",
    code: "",
    options: ["split()", "getChars()", "toCharArray()", "charAt()"],
    answer: 2,
    explanation:
      "toCharArray() convierte un String completo a un arreglo de tipo char.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la función del método 'valueOf()' en la clase String?",
    code: "",
    options: [
      "Convierte cadenas a enteros",
      "Convierte cualquier tipo a String",
      "Verifica si la cadena es válida",
      "Divide una cadena en tokens",
    ],
    answer: 1,
    explanation:
      "valueOf() convierte valores primitivos u objetos a su representación String.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado del siguiente código?",
    code: `String s = "abc";
  s.concat("def");
  System.out.println(s);`,
    options: ["abcdef", "abc", "def", "Error de compilación"],
    answer: 1,
    explanation:
      "Los Strings son inmutables, y el resultado de concat no se guarda en la variable original.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cómo se comporta StringBuilder respecto a la inmutabilidad?",
    code: "",
    options: [
      "Es completamente inmutable",
      "Es parcialmente mutable",
      "Es completamente mutable",
      "No soporta cambios",
    ],
    answer: 2,
    explanation:
      "StringBuilder permite modificaciones directas sobre la misma instancia.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si se intenta modificar una cadena usando charAt()?",
    code: `String s = "hello";
  s.charAt(0) = 'H';`,
    options: [
      "Compila pero falla",
      "Lanza NullPointerException",
      "Error en compilación",
      "Cambia la cadena",
    ],
    answer: 2,
    explanation:
      "charAt() no puede usarse como una asignación porque String es inmutable.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ventaja ofrece el pool de Strings?",
    code: "",
    options: [
      "Evita el uso de métodos como intern()",
      "Permite ahorro de memoria al reutilizar instancias",
      "Mejora la velocidad de procesamiento",
      "Crea nuevas instancias automáticamente",
    ],
    answer: 1,
    explanation:
      "El String pool permite reutilizar instancias iguales de cadenas, optimizando la memoria.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida del siguiente código?",
    code: `String a = "Java";
  String b = new String("Java").intern();
  System.out.println(a == b);`,
    options: ["true", "false", "Error en tiempo de ejecución", "null"],
    answer: 0,
    explanation:
      "El método intern() retorna la referencia del pool de Strings, que es la misma que la de 'a'.",
    subtheme: "String en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre StringBuilder y StringBuffer?",
    code: "",
    options: [
      "StringBuffer es inmutable, StringBuilder no lo es.",
      "StringBuilder es seguro para subprocesos, StringBuffer no lo es.",
      "StringBuffer es seguro para subprocesos, StringBuilder no lo es.",
      "Ambos son inmutables.",
    ],
    answer: 2,
    explanation:
      "StringBuffer es sincronizado, lo que lo hace seguro para entornos multihilo. StringBuilder no lo es, y por eso es más rápido en entornos de un solo hilo.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: 'StringBuilder sb = new StringBuilder("Hola");\nsb.insert(4, " Mundo");\nSystem.out.println(sb);',
    options: ["Hola Mundo", "Mundo Hola", "HolaMundo", "Hola MundoHola"],
    answer: 0,
    explanation:
      "La función insert agrega la cadena en la posición 4 del StringBuilder, después de 'Hola'.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si se invoca reverse() sobre un StringBuilder?",
    code: 'StringBuilder sb = new StringBuilder("Java");\nsb.reverse();',
    options: [
      "Invierte el orden de los caracteres del objeto original",
      "Lanza una excepción",
      "Devuelve un nuevo objeto con los caracteres invertidos",
      "No tiene ningún efecto",
    ],
    answer: 0,
    explanation:
      "El método reverse() invierte in-place el contenido del StringBuilder. No devuelve una nueva instancia.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida del siguiente código?",
    code: "StringBuffer sb = new StringBuffer(\"123\");\nsb.setCharAt(1, '9');\nSystem.out.println(sb);",
    options: ["193", "129", "1239", "923"],
    answer: 0,
    explanation:
      "setCharAt cambia el carácter en la posición especificada. En este caso, cambia '2' por '9'.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el valor inicial de la capacidad de un StringBuilder si no se especifica en el constructor?",
    code: "",
    options: ["16", "8", "32", "0"],
    answer: 0,
    explanation:
      "El valor inicial por defecto de la capacidad de un StringBuilder es 16 caracteres.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método usarías para reducir la capacidad del buffer al tamaño actual del contenido?",
    code: "",
    options: ["trimCapacity()", "shrink()", "compact()", "trimToSize()"],
    answer: 3,
    explanation:
      "trimToSize() ajusta la capacidad del StringBuilder o StringBuffer al tamaño de la cadena actual.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué operación es más costosa en un StringBuilder cuando el tamaño excede su capacidad?",
    code: "",
    options: ["append()", "delete()", "insert()", "ensureCapacity()"],
    answer: 0,
    explanation:
      "append() puede desencadenar una reubicación interna cuando se excede la capacidad, lo cual es costoso en términos de rendimiento.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué diferencia existe entre deleteCharAt(int) y delete(int, int)?",
    code: "",
    options: [
      "deleteCharAt borra una subcadena, delete borra un carácter",
      "deleteCharAt borra un carácter, delete borra una subcadena",
      "Ambos eliminan una subcadena",
      "delete lanza excepción, deleteCharAt no",
    ],
    answer: 1,
    explanation:
      "deleteCharAt elimina un único carácter, mientras que delete elimina una subcadena entre dos índices.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método se recomienda usar para comparar contenido de dos StringBuilder?",
    code: "",
    options: ["equals()", "==", "toString().equals()", "compare()"],
    answer: 2,
    explanation:
      "StringBuilder no sobreescribe equals(), por lo tanto, se debe comparar el contenido usando toString().equals().",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: 'StringBuilder sb = new StringBuilder("ABC");\nsb.replace(1, 2, "XY");\nSystem.out.println(sb);',
    options: ["AXYC", "AXYBC", "AXY", "AXYB"],
    answer: 0,
    explanation:
      "replace(1,2,\"XY\") reemplaza el carácter en la posición 1 ('B') por 'XY', resultando en 'AXYC'.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el efecto de llamar a delete(2, 5) en un StringBuilder de tamaño 3?",
    code: 'StringBuilder sb = new StringBuilder("abc");\nsb.delete(2, 5);',
    options: [
      "Lanza IndexOutOfBoundsException",
      "Elimina desde la posición 2 hasta el final",
      "No tiene efecto",
      "Cambia 'abc' a 'ab'",
    ],
    answer: 3,
    explanation:
      "delete(2,5) borra desde la posición 2 hasta el final si el segundo índice es mayor que la longitud. Java simplemente trunca en el final sin error.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es verdadera?",
    code: "",
    options: [
      "StringBuilder implementa CharSequence, pero StringBuffer no.",
      "StringBuffer implementa CharSequence, pero StringBuilder no.",
      "Ambos implementan CharSequence.",
      "Ninguno implementa CharSequence.",
    ],
    answer: 2,
    explanation: "Ambas clases implementan la interfaz CharSequence.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método retorna la longitud del contenido de un StringBuilder?",
    code: "",
    options: ["getSize()", "length()", "capacity()", "size()"],
    answer: 1,
    explanation:
      "El método length() devuelve la longitud actual del contenido del StringBuilder.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método debes usar para asegurar una capacidad mínima en StringBuilder?",
    code: "",
    options: [
      "expandCapacity(int)",
      "reserve(int)",
      "ensureCapacity(int)",
      "allocate(int)",
    ],
    answer: 2,
    explanation:
      "ensureCapacity(int) fuerza al StringBuilder a tener al menos esa capacidad, expandiendo si es necesario.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: 'StringBuilder sb = new StringBuilder();\nsb.append("Hola").append(" ").append("Mundo");\nSystem.out.println(sb);',
    options: ["Hola", "Hola Mundo", "HolaMundo", "Mundo Hola"],
    answer: 1,
    explanation:
      "Los métodos append se encadenan, generando la salida 'Hola Mundo'.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si se invoca el método ensureCapacity(50) en un StringBuilder con una capacidad actual de 20?",
    code: "StringBuilder sb = new StringBuilder(20);\nsb.ensureCapacity(50);",
    options: [
      "La capacidad se mantiene en 20.",
      "La capacidad se incrementa a 50.",
      "La capacidad se duplica a 40.",
      "Lanza una excepción IllegalArgumentException.",
    ],
    answer: 1,
    explanation:
      "El método ensureCapacity(int) aumenta la capacidad del StringBuilder si la capacidad mínima especificada es mayor que la capacidad actual. En este caso, la capacidad se incrementa a 50.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la diferencia principal entre los métodos append() e insert() en StringBuilder?",
    code: "",
    options: [
      "append() agrega al final, insert() en una posición específica.",
      "insert() agrega al final, append() en una posición específica.",
      "Ambos agregan al final.",
      "Ambos insertan en una posición específica.",
    ],
    answer: 0,
    explanation:
      "append() añade la secuencia de caracteres al final del contenido existente, mientras que insert() inserta la secuencia en una posición específica dentro del contenido.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: 'StringBuffer sb = new StringBuffer("abcdef");\nsb.delete(2, 4);\nSystem.out.println(sb);',
    options: ["abef", "abcf", "abdef", "abcdef"],
    answer: 0,
    explanation:
      "El método delete(2, 4) elimina los caracteres en las posiciones 2 y 3 ('c' y 'd'), resultando en 'abef'.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método de StringBuffer se utiliza para reemplazar una subsecuencia de caracteres?",
    code: "",
    options: ["replace()", "setCharAt()", "substring()", "subSequence()"],
    answer: 0,
    explanation:
      "El método replace(int start, int end, String str) reemplaza la subsecuencia entre start y end por la cadena especificada.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si se invoca el método setLength(10) en un StringBuilder que actualmente tiene una longitud de 5?",
    code: 'StringBuilder sb = new StringBuilder("Hola");\nsb.setLength(10);',
    options: [
      "Lanza una excepción IndexOutOfBoundsException.",
      "La longitud se establece en 10, rellenando con espacios.",
      "La longitud se establece en 10, rellenando con caracteres nulos.",
      "No tiene efecto.",
    ],
    answer: 2,
    explanation:
      "El método setLength(int newLength) establece la longitud del StringBuilder. Si la nueva longitud es mayor que la actual, se rellena con caracteres nulos ('\\u0000').",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: 'StringBuilder sb = new StringBuilder("Java");\nsb.insert(2, "123");\nSystem.out.println(sb);',
    options: ["Ja123va", "J123ava", "Java123", "123Java"],
    answer: 0,
    explanation:
      "El método insert(2, \"123\") inserta la cadena '123' en la posición 2, resultando en 'Ja123va'.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el resultado de comparar dos StringBuilder con equals()?",
    code: 'StringBuilder sb1 = new StringBuilder("Hola");\nStringBuilder sb2 = new StringBuilder("Hola");\nSystem.out.println(sb1.equals(sb2));',
    options: ["true", "false", "Lanza una excepción", "Depende del contenido"],
    answer: 1,
    explanation:
      "El método equals() en StringBuilder no está sobreescrito para comparar contenido, por lo que actúa como en Object, comparando referencias, resultando en false.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método se utiliza para obtener la capacidad actual de un StringBuffer?",
    code: "",
    options: ["length()", "capacity()", "size()", "getCapacity()"],
    answer: 1,
    explanation:
      "El método capacity() devuelve la capacidad actual del buffer, que es la cantidad de caracteres que puede contener sin necesidad de realocar memoria.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si se invoca el método charAt(5) en un StringBuilder con una longitud de 4?",
    code: 'StringBuilder sb = new StringBuilder("Hola");\nchar c = sb.charAt(5);',
    options: [
      "Devuelve '\\u0000'",
      "Devuelve ' ' (espacio)",
      "Lanza StringIndexOutOfBoundsException",
      "Devuelve 'a'",
    ],
    answer: 2,
    explanation:
      "El método charAt(int index) lanza StringIndexOutOfBoundsException si el índice está fuera del rango válido.",
    subtheme: "StringBuilder y StringBuffer en Java",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida del siguiente código?",
    code: 'int x = 5;\nif (x > 3)\n    if (x < 10)\n        System.out.println("A");\n    else\n        System.out.println("B");',
    options: ["A", "B", "Error de compilación", "Nada"],
    answer: 0,
    explanation:
      "El `if-else` anidado imprime 'A' porque x > 3 y x < 10. La indentación puede ser confusa pero la lógica se mantiene.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ventaja ofrece el switch mejorado (Java 12+) sobre el tradicional?",
    code: "",
    options: [
      "Permite expresiones de retorno y reduce errores de caída (fall-through)",
      "Admite estructuras condicionales anidadas",
      "Elimina el uso de llaves en todos los casos",
      "Soporta tipos booleanos",
    ],
    answer: 0,
    explanation:
      "El switch mejorado admite expresiones (`->`) y `yield`, lo que mejora la legibilidad y evita el fall-through típico del switch tradicional.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprimirá el siguiente bloque de código en Java 17?",
    code: 'int day = 3;\nString result = switch(day) {\n    case 1, 2 -> "Inicio de semana";\n    case 3 -> "Mitad de semana";\n    default -> "Fin de semana";\n};\nSystem.out.println(result);',
    options: [
      "Inicio de semana",
      "Mitad de semana",
      "Fin de semana",
      "Error de compilación",
    ],
    answer: 1,
    explanation:
      "Con el switch mejorado, se pueden usar flechas (`->`) para retornar directamente valores. `day` es 3, por lo tanto imprime 'Mitad de semana'.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes tipos de datos NO es permitido en una expresión `switch` tradicional (antes de Java 7)?",
    code: "",
    options: ["int", "String", "char", "boolean"],
    answer: 3,
    explanation:
      "El tipo `boolean` no está permitido en expresiones switch tradicionales. `String` es válido desde Java 7.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre si olvidamos el `break` en un `switch` tradicional?",
    code: "",
    options: [
      "Se lanza una excepción",
      "El flujo cae en los siguientes casos (fall-through)",
      "Se ejecuta solo el primer caso válido",
      "No compila",
    ],
    answer: 1,
    explanation:
      "Sin `break`, el flujo continúa ejecutando todos los casos siguientes, lo que puede generar errores lógicos.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito del bloque `default` en un `switch`?",
    code: "",
    options: [
      "Manejar condiciones nulas",
      "Ejecutarse cuando no hay coincidencias en los casos",
      "Actuar como un fallback para tipos primitivos",
      "Evitar el uso de `break`",
    ],
    answer: 1,
    explanation:
      "El bloque `default` se ejecuta cuando ninguna de las condiciones del switch coincide con el valor evaluado.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué salida genera este código?",
    code: 'int score = 85;\nif (score > 90) {\n  System.out.println("Excelente");\n} else if (score > 80) {\n  System.out.println("Muy Bien");\n} else {\n  System.out.println("Bien");\n}',
    options: ["Excelente", "Muy Bien", "Bien", "Nada"],
    answer: 1,
    explanation:
      "El valor 85 no es mayor que 90, pero sí mayor que 80, así que entra en el bloque `else if`.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué declaración es válida en un `switch` mejorado?",
    code: "",
    options: [
      'case 1: yield "uno";',
      'case 1 -> { return "uno"; }',
      'case 1 -> yield "uno";',
      'case 1 -> "uno";',
    ],
    answer: 3,
    explanation:
      "La sintaxis correcta en switch expression es `case valor -> expresión;`. `yield` se usa solo dentro de un bloque para retornar.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ventaja tiene usar `yield` dentro de un `switch` con bloque?",
    code: "",
    options: [
      "Permite lanzar excepciones desde un switch",
      "Permite devolver un valor desde un bloque de código complejo",
      "Evita escribir múltiples `case`",
      "Hace que el switch sea más rápido",
    ],
    answer: 1,
    explanation:
      "`yield` permite devolver valores desde un bloque con lógica adicional dentro de una expresión `switch` mejorada.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se usa una variable no final como expresión `case`?",
    code: "",
    options: [
      "Compila sin problemas",
      "Lanza una excepción en tiempo de ejecución",
      "Error de compilación",
      "Depende del tipo de dato",
    ],
    answer: 2,
    explanation:
      "Las expresiones `case` deben ser constantes en tiempo de compilación, por lo que no se puede usar una variable no final.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la diferencia principal entre `if-else-if` y `switch`?",
    code: "",
    options: [
      "Switch solo acepta booleanos",
      "If-else es más rápido que switch",
      "Switch es mejor para múltiples valores discretos",
      "Switch permite condiciones más complejas que if-else",
    ],
    answer: 2,
    explanation:
      "El `switch` es más adecuado cuando se evalúan múltiples valores constantes, mejorando la claridad del código.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué salida imprime este bloque?",
    code: 'int a = 10;\nswitch (a) {\n  case 5:\n  case 10:\n  case 15:\n    System.out.println("Coincidencia encontrada");\n    break;\n  default:\n    System.out.println("Sin coincidencia");\n}',
    options: [
      "Coincidencia encontrada",
      "Sin coincidencia",
      "Error en tiempo de ejecución",
      "Error de compilación",
    ],
    answer: 0,
    explanation:
      "El valor `a = 10` coincide con el `case 10`, y como no hay código antes, imprime 'Coincidencia encontrada'.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué limitación tenía el `switch` tradicional que fue superada en versiones modernas de Java?",
    code: "",
    options: [
      "Soporte para enums",
      "Soporte para `String`",
      "Evaluación como expresión",
      "Uso de múltiples casos para una misma acción",
    ],
    answer: 2,
    explanation:
      "El switch moderno puede devolver valores directamente como una expresión, lo que no era posible en versiones antiguas.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones es verdadera sobre `if-else`?",
    code: "",
    options: [
      "No se puede usar sin un bloque `else`",
      "`else` puede colocarse antes del `if`",
      "`if` permite condiciones booleanas complejas",
      "El uso de `if` requiere una constante final",
    ],
    answer: 2,
    explanation:
      "`if` puede usar expresiones booleanas complejas, como comparaciones, operaciones lógicas, o métodos booleanos.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el principal riesgo de no usar `break` en un `switch` tradicional?",
    code: "",
    options: [
      "Se omite el bloque default",
      "El switch termina de inmediato",
      "Se produce ejecución encadenada no deseada",
      "Se lanza una excepción",
    ],
    answer: 2,
    explanation:
      "La ausencia de `break` en un switch tradicional provoca el comportamiento conocido como 'fall-through', ejecutando todos los casos siguientes.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué se imprimirá?",
    code: 'int x = 2;\nswitch (x) {\n  case 1 -> System.out.println("Uno");\n  case 2 -> System.out.println("Dos");\n  default -> System.out.println("Otro");\n}',
    options: ["Uno", "Dos", "Otro", "Error de compilación"],
    answer: 1,
    explanation:
      "En el switch mejorado (Java 12+), el uso de `->` permite imprimir directamente el valor asociado. En este caso, x=2 imprime 'Dos'.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de ejecutar el siguiente bloque?",
    code: 'int value = 4;\nif (value % 2 == 0)\n  if (value > 0)\n    System.out.println("Par positivo");\n  else\n    System.out.println("Negativo");',
    options: ["Par positivo", "Negativo", "Nada", "Error de compilación"],
    answer: 0,
    explanation:
      "Se ejecuta el segundo `if` anidado ya que se cumple que `value` es par y mayor que 0. Imprime 'Par positivo'.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué es válido dentro de un `case` de `switch` tradicional?",
    code: "",
    options: [
      "Variables dinámicas",
      "Constantes en tiempo de compilación",
      "Expresiones booleanas",
      "Métodos con retorno",
    ],
    answer: 1,
    explanation:
      "Solo se permiten constantes que puedan evaluarse en tiempo de compilación dentro de los `case` tradicionales.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué valor es correcto para este switch?",
    code: 'final int OPTION = 3;\nswitch (OPTION) {\n  case 1:\n  case 2:\n  case 3:\n    System.out.println("Válido");\n    break;\n}',
    options: [
      "Solo si OPTION es final",
      "Siempre que OPTION sea entero",
      "Si OPTION es booleano",
      "Nunca es válido",
    ],
    answer: 0,
    explanation:
      "Las constantes usadas como expresión `switch` deben ser final para poder ser evaluadas en tiempo de compilación.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el propósito de usar `yield` en un `switch` con bloques?",
    code: "",
    options: [
      "Detiene la ejecución del bloque",
      "Permite devolver un valor desde un bloque con lógica adicional",
      "Sustituye al `break` en switches tradicionales",
      "Ignora el caso `default`",
    ],
    answer: 1,
    explanation:
      "`yield` permite retornar un valor desde un bloque `{}` dentro de un `switch` cuando se necesita ejecutar lógica adicional.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué instrucción es incorrecta para un `switch` mejorado en Java 17?",
    code: "",
    options: [
      'case 1 -> System.out.println("Uno");',
      'case 2 -> yield "Dos";',
      'default -> "Default";',
      'case 3 -> { yield "Tres"; }',
    ],
    answer: 1,
    explanation:
      "El `yield` solo es válido dentro de un bloque `{}`. No puede usarse directamente con `->`.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado?",
    code: 'int x = 0;\nif (x == 0)\n  System.out.print("Cero");\nSystem.out.print("Hecho");',
    options: ["Cero", "CeroHecho", "Hecho", "Nada"],
    answer: 1,
    explanation:
      "Ambas sentencias `print` están en el mismo nivel. Como x == 0, se imprime 'Cero', luego 'Hecho'.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué estructura de control es más adecuada cuando se evalúan múltiples constantes discretas?",
    code: "",
    options: ["if-else-if", "for", "switch", "do-while"],
    answer: 2,
    explanation:
      "El `switch` es ideal para evaluar múltiples valores constantes como enteros, Strings, enums, etc.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el error en este código?",
    code: "int x = 10;\nswitch (x) {\n  case 5:\n    int y = 20;\n    break;\n}",
    options: [
      "Error: variable local no permitida",
      "Compila correctamente",
      "Error: declaración inválida en switch",
      "y nunca se usa",
    ],
    answer: 0,
    explanation:
      "Las variables locales en un `case` deben estar entre llaves `{}` para evitar errores de alcance (scope).",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida?",
    code: 'int temp = 25;\nif (temp > 30)\n  System.out.println("Calor");\nelse\n  if (temp < 10)\n    System.out.println("Frío");\n  else\n    System.out.println("Templado");',
    options: ["Calor", "Frío", "Templado", "Nada"],
    answer: 2,
    explanation:
      "La temperatura 25 no cumple ninguna de las condiciones extremas, por lo tanto entra en el `else` final.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado?",
    code: 'int a = 3;\nswitch (a) {\n  case 1, 2, 3 -> System.out.println("Bajo");\n  case 4, 5 -> System.out.println("Medio");\n  default -> System.out.println("Alto");\n}',
    options: ["Bajo", "Medio", "Alto", "Error de compilación"],
    answer: 0,
    explanation:
      "Se usan múltiples valores para el mismo `case` en un `switch` moderno. a=3 imprime 'Bajo'.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la diferencia entre `switch` tradicional y mejorado?",
    code: "",
    options: [
      "El mejorado no admite enums",
      "El mejorado puede ser usado como expresión",
      "El mejorado no permite múltiples valores por case",
      "El mejorado es más lento",
    ],
    answer: 1,
    explanation:
      "El switch mejorado puede devolver valores directamente como una expresión, lo que lo hace más conciso y seguro.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el efecto del siguiente código?",
    code: 'int num = 7;\nif (num % 2 == 0)\n  System.out.println("Par");\nelse\n  System.out.println("Impar");',
    options: ["Par", "Impar", "Nada", "Error de compilación"],
    answer: 1,
    explanation:
      "El número 7 no es divisible por 2, por lo tanto imprime 'Impar' en el bloque `else`.",
    subtheme: "Estructuras de control condicionales",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál estructura de control es ideal cuando conocemos el número exacto de iteraciones?",
    code: "",
    options: ["for-each", "while", "for", "do-while"],
    answer: 2,
    explanation:
      "El bucle `for` se utiliza cuando sabemos de antemano cuántas veces debe repetirse el bloque de código.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el resultado del siguiente código?",
    code: "int i = 0;\ndo {\n  System.out.print(i);\n  i++;\n} while (i < 3);",
    options: ["012", "123", "01", "Error de compilación"],
    answer: 0,
    explanation:
      "El bucle `do-while` ejecuta el bloque al menos una vez. En este caso imprime 0, 1 y 2.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es la salida del siguiente código?",
    code: "int[] numbers = {1, 2, 3};\nfor (int num : numbers) {\n  System.out.print(num);\n}",
    options: ["123", "321", "Error", "1 2 3"],
    answer: 0,
    explanation:
      "El bucle for-each recorre el arreglo de forma secuencial. Imprime '123'.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué estructura garantiza al menos una ejecución del bloque?",
    code: "",
    options: ["while", "for-each", "for", "do-while"],
    answer: 3,
    explanation:
      "El bucle `do-while` evalúa la condición después de ejecutar el bloque, garantizando al menos una iteración.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el propósito del bucle `for-each`?",
    code: "",
    options: [
      "Ejecutar código mientras una condición sea verdadera",
      "Iterar una cantidad fija de veces",
      "Recorrer colecciones y arreglos",
      "Ejecutar siempre una vez",
    ],
    answer: 2,
    explanation:
      "El bucle `for-each` se usa para recorrer colecciones y arreglos de manera sencilla, sin usar índices.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué sucede con este código?",
    code: 'int x = 5;\nwhile (x < 5) {\n  System.out.println("Hola");\n}',
    options: [
      "Imprime 'Hola' una vez",
      "Imprime infinitamente",
      "No imprime nada",
      "Error de compilación",
    ],
    answer: 2,
    explanation:
      "La condición `x < 5` es falsa desde el inicio, por lo que el bucle `while` no se ejecuta.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Cuál de las siguientes estructuras puede provocar un bucle infinito si no se modifica la condición?",
    code: "",
    options: ["for", "while", "do-while", "Todas las anteriores"],
    answer: 3,
    explanation:
      "Cualquier estructura de bucle puede volverse infinita si la condición nunca deja de cumplirse.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este bucle for?",
    code: "for (int i = 1; i <= 3; i++) {\n  System.out.print(i);\n}",
    options: ["012", "123", "234", "321"],
    answer: 1,
    explanation: "El bucle imprime los valores desde 1 hasta 3, inclusive.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el error en este código?",
    code: "for (int i = 0; i < 10; ) {\n  System.out.print(i);\n}",
    options: [
      "No hay incremento de i",
      "Error de sintaxis",
      "i no está declarado",
      "Error de compilación por condición mal formada",
    ],
    answer: 0,
    explanation:
      "El bucle no incrementa `i`, lo que puede generar un bucle infinito. No hay error de compilación.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué estructura se recomienda para recorrer un `List<String>`?",
    code: "",
    options: ["while", "for-each", "do-while", "switch"],
    answer: 1,
    explanation:
      "El `for-each` es ideal para recorrer listas sin preocuparse por los índices o condiciones explícitas.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el resultado del siguiente código?",
    code: "int i = 1;\ndo {\n  i++;\n} while (i < 1);\nSystem.out.print(i);",
    options: ["0", "1", "2", "No imprime nada"],
    answer: 2,
    explanation:
      "El `do-while` se ejecuta una vez aunque la condición sea falsa, incrementando `i` a 2.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Cuál de las siguientes opciones describe mejor un bucle `while`?",
    code: "",
    options: [
      "Se ejecuta un número fijo de veces",
      "Evalúa la condición después del bloque",
      "Se ejecuta mientras una condición sea verdadera",
      "Solo recorre colecciones",
    ],
    answer: 2,
    explanation:
      "El bucle `while` evalúa la condición antes de ejecutar cada iteración, y continúa mientras la condición sea verdadera.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué ocurre si usamos `break` dentro de un bucle?",
    code: "",
    options: [
      "Se salta a la siguiente iteración",
      "Termina inmediatamente el bucle",
      "Produce un error",
      "Reinicia la variable de control",
    ],
    answer: 1,
    explanation:
      "`break` detiene la ejecución del bucle en el que se encuentra, saliendo inmediatamente.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código?",
    code: "int[] arr = {2, 4, 6};\nfor (int x : arr) {\n  if (x == 4) continue;\n  System.out.print(x);\n}",
    options: ["246", "26", "24", "Error de compilación"],
    answer: 1,
    explanation:
      "Cuando `x == 4`, se usa `continue` para saltarse esa iteración. Solo se imprimen 2 y 6.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el efecto de usar `continue` en un bucle?",
    code: "",
    options: [
      "Detiene el programa",
      "Termina el bucle",
      "Finaliza la iteración actual y pasa a la siguiente",
      "Imprime un mensaje de error",
    ],
    answer: 2,
    explanation:
      "`continue` salta la ejecución del resto del código en esa iteración y pasa a la siguiente.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Cuál de las siguientes estructuras iterativas es más adecuada para ejecutar un bloque al menos una vez?",
    code: "",
    options: ["for", "while", "for-each", "do-while"],
    answer: 3,
    explanation:
      "`do-while` ejecuta primero el bloque y luego evalúa la condición, garantizando al menos una iteración.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué hace el siguiente código?",
    code: "int i = 3;\nwhile (i > 0) {\n  System.out.print(i);\n  i--;\n}",
    options: ["321", "123", "012", "Error de compilación"],
    answer: 0,
    explanation:
      "El bucle imprime 3, 2 y 1, decrementando `i` en cada iteración mientras sea mayor que 0.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué estructura se recomienda para iterar sobre un `Set<String>`?",
    code: "",
    options: ["for", "while", "for-each", "do-while"],
    answer: 2,
    explanation:
      "`for-each` es ideal para recorrer colecciones como Set, ya que no requiere índices.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué salida produce el siguiente código?",
    code: "int i = 0;\ndo {\n  i++;\n} while (i < 3);\nSystem.out.print(i);",
    options: ["0", "1", "2", "3"],
    answer: 3,
    explanation:
      "El bucle se ejecuta hasta que `i` ya no sea menor que 3. Cuando termina, `i` vale 3.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Cuál de los siguientes bucles es más propenso a usarse con índices?",
    code: "",
    options: ["while", "for", "for-each", "do-while"],
    answer: 1,
    explanation:
      "El bucle `for` es ideal para utilizar un índice como variable de control.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: "for (int i = 0; i < 3; i++) {\n  if (i == 1) break;\n  System.out.print(i);\n}",
    options: ["0", "01", "012", "1"],
    answer: 0,
    explanation:
      "Cuando `i == 1`, el bucle se rompe con `break`. Solo se imprime 0.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué sucede si olvidamos incrementar la variable de control en un bucle `while`?",
    code: "",
    options: [
      "El programa se detiene",
      "Se lanza excepción",
      "El bucle nunca termina",
      "Se imprime 'null'",
    ],
    answer: 2,
    explanation:
      "Si la condición siempre se cumple y no se modifica dentro del bucle, se produce un bucle infinito.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código?",
    code: 'String[] letras = {"A", "B"};\nfor (String letra : letras) {\n  System.out.print(letra);\n}',
    options: ["AB", "BA", "A B", "B A"],
    answer: 0,
    explanation:
      "El bucle `for-each` imprime los elementos del arreglo en orden: A y luego B.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué estructura es la más sencilla para recorrer todos los elementos de un `ArrayList<Integer>`?",
    code: "",
    options: ["for", "for-each", "while", "do-while"],
    answer: 1,
    explanation:
      "`for-each` permite recorrer listas de forma directa y legible, sin usar índices.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código?",
    code: 'int i = 10;\ndo {\n  System.out.print("#");\n  i++;\n} while (i < 10);',
    options: ["#", "##", "", "Error de compilación"],
    answer: 0,
    explanation:
      "El `do-while` se ejecuta una vez antes de verificar que `i < 10`. Por tanto, imprime un solo `#`.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué ocurre con este código?",
    code: "int[] nums = {1, 2, 3};\nfor (int i = 0; i < nums.length; i++) {\n  System.out.print(nums[i]);\n}",
    options: ["123", "321", "012", "Error de compilación"],
    answer: 0,
    explanation:
      "El bucle `for` recorre el arreglo desde el índice 0 al 2, imprimiendo 123.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué palabra clave se usa para omitir el resto del código dentro de un bucle y continuar con la siguiente iteración?",
    code: "",
    options: ["break", "skip", "continue", "exit"],
    answer: 2,
    explanation:
      "`continue` salta a la siguiente iteración del bucle, omitiendo el resto del bloque actual.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué resultado produce este código?",
    code: "int x = 0;\nwhile (x < 3) {\n  System.out.print(x);\n  x++;\n}",
    options: ["123", "012", "234", "No imprime nada"],
    answer: 1,
    explanation:
      "Se imprime 0, luego 1 y 2. Cuando `x == 3`, la condición se rompe.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué ventaja tiene el `for-each` sobre el bucle `for` tradicional?",
    code: "",
    options: [
      "Permite modificar el índice",
      "Evita errores al acceder a índices inválidos",
      "No permite recorrer colecciones",
      "Requiere más líneas de código",
    ],
    answer: 1,
    explanation:
      "`for-each` es más seguro al evitar errores comunes con índices y más legible para recorrer colecciones.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué tipo de bucle usarías si no sabes cuántas veces debe ejecutarse el bloque?",
    code: "",
    options: ["for-each", "do-while", "for", "while"],
    answer: 3,
    explanation:
      "`while` es adecuado cuando la cantidad de repeticiones depende de una condición dinámica.",
    subtheme: "Estructuras de Control Iterativas",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué instrucción se utiliza para salir inmediatamente de un bucle en Java?",
    code: "",
    options: ["continue", "exit", "break", "return"],
    answer: 2,
    explanation:
      "`break` se utiliza para salir inmediatamente de un bucle o una estructura `switch`.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código?",
    code: "for (int i = 0; i < 5; i++) {\n  if (i == 3) break;\n  System.out.print(i);\n}",
    options: ["01234", "0123", "012", "123"],
    answer: 2,
    explanation:
      "Cuando `i == 3`, se ejecuta `break`, terminando el bucle. Se imprime 0, 1 y 2.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Cuál es el efecto de la instrucción `continue` dentro de un bucle?",
    code: "",
    options: [
      "Finaliza el programa",
      "Sale del bucle actual",
      "Omite la iteración actual y pasa a la siguiente",
      "Lanza una excepción",
    ],
    answer: 2,
    explanation:
      "`continue` hace que se salte el resto del código en la iteración actual del bucle y pase a la siguiente.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: "for (int i = 1; i <= 5; i++) {\n  if (i % 2 == 0) continue;\n  System.out.print(i);\n}",
    options: ["12345", "135", "24", "1 3 5"],
    answer: 1,
    explanation:
      "`continue` omite los números pares, por lo que solo imprime 1, 3 y 5.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué hace la palabra clave `return` en un método?",
    code: "",
    options: [
      "Finaliza un bucle",
      "Termina el método y devuelve un valor (si aplica)",
      "Pausa el método",
      "Inicia un nuevo hilo",
    ],
    answer: 1,
    explanation:
      "`return` se utiliza para finalizar la ejecución de un método y opcionalmente devolver un valor.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este método?",
    code: "public static int sumar() {\n  return 5 + 3;\n}\n\nSystem.out.print(sumar());",
    options: ["8", "5 + 3", "Error de compilación", "null"],
    answer: 0,
    explanation:
      "El método retorna 8 como resultado de la suma y se imprime correctamente.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el efecto de `break` en una estructura `switch`?",
    code: "",
    options: [
      "Finaliza el método",
      "Evita que se ejecuten otros casos (fall-through)",
      "Reinicia el `switch`",
      "Imprime el valor por defecto",
    ],
    answer: 1,
    explanation:
      "`break` evita que se ejecuten los siguientes casos después de encontrar una coincidencia en `switch`.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código?",
    code: "for (int i = 0; i < 4; i++) {\n  if (i == 2) return;\n  System.out.print(i);\n}",
    options: ["01", "012", "0123", "Nada"],
    answer: 0,
    explanation:
      "`return` termina el método por completo cuando `i == 2`, por lo que solo se imprime 0 y 1.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Se puede usar `return` en un método `void`?",
    code: "",
    options: [
      "No",
      "Sí, pero sin valor",
      "Sí, siempre con valor",
      "Solo en `main`",
    ],
    answer: 1,
    explanation:
      "En métodos `void`, se puede usar `return` sin valor para salir anticipadamente del método.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué palabra clave permite salir de una estructura `switch` antes de tiempo?",
    code: "",
    options: ["continue", "return", "stop", "break"],
    answer: 3,
    explanation:
      "`break` evita que el flujo continúe hacia los demás `case` del `switch`.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué hace `return 0;` en el método `main()`?",
    code: "",
    options: [
      "Detiene el bucle principal",
      "Indica error en el programa",
      "Indica que el programa finalizó correctamente",
      "Reinicia el programa",
    ],
    answer: 2,
    explanation:
      "En métodos `main()` que retornan `int`, `return 0;` indica una finalización exitosa.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué sucede si colocas `continue` fuera de un bucle?",
    code: "",
    options: [
      "Ignora la instrucción",
      "Genera una advertencia",
      "Causa error de compilación",
      "No afecta al flujo",
    ],
    answer: 2,
    explanation:
      "`continue` solo puede usarse dentro de bucles. Fuera de ellos causa error de compilación.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código?",
    code: "for (int i = 0; i < 3; i++) {\n  if (i == 1) continue;\n  System.out.print(i);\n}",
    options: ["012", "01", "02", "12"],
    answer: 2,
    explanation:
      "Cuando `i == 1`, se omite la impresión y pasa a `i == 2`, por lo que imprime 0 y 2.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código con `break` en un `switch`?",
    code: 'int x = 2;\nswitch(x) {\n  case 1: System.out.print("A"); break;\n  case 2: System.out.print("B"); break;\n  case 3: System.out.print("C");\n}',
    options: ["A", "B", "C", "BC"],
    answer: 1,
    explanation:
      "El caso 2 coincide con `x`, imprime `B` y luego `break` evita que se ejecute el caso 3.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué efecto tiene `return` dentro de un bucle `for` dentro de un método?",
    code: "",
    options: [
      "Detiene la iteración actual",
      "Continúa con la siguiente iteración",
      "Finaliza el método completamente",
      "Detiene el hilo actual",
    ],
    answer: 2,
    explanation:
      "`return` finaliza el método entero, incluso si se encuentra dentro de un bucle.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: "int i = 0;\nwhile (i < 5) {\n  if (i == 3) break;\n  System.out.print(i);\n  i++;\n}",
    options: ["01234", "0123", "012", "01"],
    answer: 2,
    explanation:
      "Cuando `i == 3`, se ejecuta `break` y el bucle termina. Se imprimen 0, 1 y 2.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué instrucción se usa para terminar inmediatamente la ejecución de un método?",
    code: "",
    options: ["break", "continue", "return", "exit"],
    answer: 2,
    explanation:
      "`return` se utiliza para finalizar la ejecución de un método, opcionalmente devolviendo un valor.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué sucede si un `switch` no contiene `break` entre los casos?",
    code: "",
    options: [
      "Solo se ejecuta el primer caso coincidente",
      "Todos los casos se ejecutan secuencialmente (fall-through)",
      "El programa lanza una excepción",
      "Se omite el `default`",
    ],
    answer: 1,
    explanation:
      "Si no hay `break`, todos los casos después del coincidente se ejecutan secuencialmente: esto se llama *fall-through*.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el efecto de `continue` dentro de un bucle `while`?",
    code: "",
    options: [
      "Termina el método",
      "Detiene el bucle por completo",
      "Salta al inicio de la siguiente iteración del bucle",
      "No tiene efecto",
    ],
    answer: 2,
    explanation:
      "`continue` salta el resto del código de la iteración actual y vuelve a evaluar la condición del bucle.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: "int i = 0;\ndo {\n  if (i == 2) {\n    i++;\n    continue;\n  }\n  System.out.print(i);\n  i++;\n} while (i < 4);",
    options: ["0123", "013", "023", "0134"],
    answer: 1,
    explanation:
      "Cuando `i == 2`, se incrementa y se salta la impresión. Se imprime 0, 1 y 3.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué instrucción evita la ejecución del resto del código dentro de un `case` en `switch`?",
    code: "",
    options: ["return", "continue", "break", "stop"],
    answer: 2,
    explanation:
      "`break` evita que se ejecuten los siguientes casos del `switch`, evitando el fall-through.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué pasa si usas `return` en un constructor?",
    code: "",
    options: [
      "Termina el constructor y puede devolver un valor",
      "No se permite `return` en constructores",
      "`return` puede usarse pero sin valor",
      "Lanza un error en tiempo de ejecución",
    ],
    answer: 2,
    explanation:
      "Se puede usar `return;` sin valor para salir de un constructor antes de tiempo, pero no puede devolver nada.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué instrucción es ilegal dentro de un método si no está en un bucle o switch?",
    code: "",
    options: ["return", "continue", "System.out.print()", "if"],
    answer: 1,
    explanation:
      "`continue` solo puede usarse dentro de bucles. Si se usa fuera, genera un error de compilación.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué sucede cuando `break` se encuentra dentro de un bucle anidado?",
    code: "",
    options: [
      "Termina todos los bucles",
      "Termina solo el bucle más interno",
      "Continúa la siguiente iteración",
      "Ignora el `break`",
    ],
    answer: 1,
    explanation:
      "`break` afecta solamente al bucle en el que se encuentra, no a los externos.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es la diferencia principal entre `break` y `return`?",
    code: "",
    options: [
      "`break` finaliza métodos y `return` bucles",
      "`return` devuelve valores, `break` no",
      "`break` solo funciona con if",
      "No hay diferencia",
    ],
    answer: 1,
    explanation:
      "`return` puede devolver un valor desde un método, mientras que `break` solo termina bucles o `switch`.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Es válido usar `continue` dentro de un `for-each`?",
    code: "",
    options: ["Sí", "No", "Solo con listas", "Solo con arrays"],
    answer: 0,
    explanation:
      "`continue` puede usarse en cualquier tipo de bucle, incluido el `for-each`, para saltar una iteración.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Cuál es el resultado de este código?",
    code: "for (int i = 0; i < 5; i++) {\n  if (i == 4) break;\n  System.out.print(i);\n}",
    options: ["01234", "0123", "012", "1234"],
    answer: 1,
    explanation:
      "Cuando `i == 4`, el `break` se ejecuta antes de imprimir, por lo tanto se imprime 0, 1, 2 y 3.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question:
      "¿Qué sucede cuando se encuentra un `return` dentro de un bloque `if` en un método `void`?",
    code: "",
    options: [
      "Devuelve un valor por defecto",
      "Genera error de compilación",
      "Finaliza el método inmediatamente",
      "Ignora el `return`",
    ],
    answer: 2,
    explanation:
      "`return;` en métodos `void` termina la ejecución del método en ese punto, incluso si está en un `if`.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué ocurre si omites `break` en un `switch`?",
    code: "",
    options: [
      "Solo se ejecuta el caso coincidente",
      "Se ejecutan todos los casos hasta un `break`",
      "El código se detiene automáticamente",
      "Se lanza una excepción",
    ],
    answer: 1,
    explanation:
      "En ausencia de `break`, se produce *fall-through*, ejecutando todos los casos siguientes.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué imprime este código?",
    code: "int i = 0;\ndo {\n  if (i == 1) break;\n  System.out.print(i);\n  i++;\n} while (i < 3);",
    options: ["0", "01", "012", "1"],
    answer: 0,
    explanation:
      "`i == 1` activa el `break`, por lo que solo se imprime `0` antes de finalizar el bucle.",
    subtheme: "Estructuras de Control de Salto",
    group: "Java",
    level: "Junior",
  },
  {
    question: "¿Qué sucede si se usa 'break' fuera de un bucle o switch?",
    code: "",
    options: [
      "Se ignora la instrucción",
      "El código compila pero se salta a la siguiente línea",
      "Se lanza una excepción en tiempo de ejecución",
      "El compilador lanza un error",
    ],
    answer: 3,
    explanation:
      "'break' solo es válido dentro de bucles o bloques switch. Si se usa fuera, el compilador arroja un error.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el efecto de un 'continue' en un bucle anidado?",
    code: "",
    options: [
      "Detiene ambos bucles",
      "Salta al siguiente ciclo del bucle exterior",
      "Afecta únicamente al bucle más interno",
      "Reinicia el bucle más interno desde el inicio",
    ],
    answer: 2,
    explanation:
      "El 'continue' afecta solo al bucle donde se encuentra, no a los anidados exteriormente.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el valor impreso por este código?",
    code: "int i = 0;\nwhile (i < 5) {\n  if (i == 3) break;\n  i++;\n}\nSystem.out.print(i);",
    options: ["3", "4", "2", "5"],
    answer: 0,
    explanation:
      "Cuando i es igual a 3, se ejecuta 'break', y el bucle se detiene antes de incrementar de nuevo.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la diferencia principal entre 'return' y 'break'?",
    code: "",
    options: [
      "'return' finaliza un bucle; 'break' finaliza un método",
      "'break' puede devolver valores, 'return' no",
      "'return' termina un método, 'break' solo el bucle o switch",
      "Ambos se comportan igual, solo cambia el nombre",
    ],
    answer: 2,
    explanation:
      "'return' detiene completamente la ejecución del método; 'break' solo finaliza el bucle o switch donde se encuentra.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué valor imprime el siguiente método?",
    code: "public int demo() {\n  for (int i = 0; i < 10; i++) {\n    if (i == 7) return i;\n  }\n  return -1;\n}",
    options: ["10", "-1", "7", "0"],
    answer: 2,
    explanation:
      "Al llegar a i == 7, se ejecuta 'return i', por lo tanto el método retorna 7.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la salida del siguiente código?",
    code: "for (int i = 0; i < 5; i++) {\n  if (i == 2) continue;\n  System.out.print(i);\n}",
    options: ["01234", "0134", "1234", "024"],
    answer: 1,
    explanation:
      "Cuando i == 2, se ejecuta 'continue', y se omite esa iteración. Se imprimen 0,1,3,4.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se usa 'return' con un valor en un método declarado como void?",
    code: "",
    options: [
      "El código se ejecuta normalmente",
      "Se lanza un error en tiempo de ejecución",
      "Se lanza error de compilación",
      "El método retorna null",
    ],
    answer: 2,
    explanation:
      "Los métodos 'void' no pueden retornar un valor, el compilador lanza error si se intenta.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué valor se imprime?",
    code: "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n  if (i % 2 == 0) continue;\n  sum += i;\n}\nSystem.out.println(sum);",
    options: ["9", "15", "10", "12"],
    answer: 0,
    explanation: "El bucle suma solo los impares: 1 + 3 + 5 = 9.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál será el resultado del siguiente método?",
    code: "public int calculate() {\n  int result = 0;\n  for (int i = 0; i < 10; i++) {\n    if (i == 5) break;\n    result += i;\n  }\n  return result;\n}",
    options: ["45", "15", "10", "5"],
    answer: 1,
    explanation:
      "Suma 0 + 1 + 2 + 3 + 4 = 10, luego en i == 5 rompe el ciclo. La suma es 10.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el comportamiento de un 'return' dentro de un bloque 'try-catch-finally'?",
    code: "",
    options: [
      "El bloque 'finally' se ignora si se llama a 'return'",
      "'return' en 'try' evita que se ejecute 'finally'",
      "'finally' siempre se ejecuta, incluso si hay un 'return'",
      "'return' en 'catch' ignora 'finally'",
    ],
    answer: 2,
    explanation:
      "El bloque 'finally' siempre se ejecuta, incluso si hay un 'return' en 'try' o 'catch'.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente método?",
    code: 'public void test() {\n  for (int i = 0; i < 3; i++) {\n    if (i == 1) return;\n    System.out.print(i);\n  }\n  System.out.print("X");\n}',
    options: ["01X", "0X", "0", "1X"],
    answer: 2,
    explanation:
      "Se imprime 0, luego i == 1, se ejecuta 'return' y el método finaliza. No se imprime 'X'.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si se usa 'continue' en un bucle 'do-while'?",
    code: "",
    options: [
      "Se ejecuta la condición inmediatamente",
      "El bucle se interrumpe",
      "Se salta a la siguiente iteración tras verificar la condición",
      "El compilador lanza error",
    ],
    answer: 2,
    explanation:
      "En un bucle do-while, 'continue' salta a la verificación de la condición y luego continúa si es verdadera.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es una situación válida para usar 'return' sin valor?",
    code: "",
    options: [
      "Dentro de un método 'int'",
      "Dentro de un constructor",
      "En un método 'void'",
      "En una interfaz",
    ],
    answer: 2,
    explanation:
      "Un método 'void' puede usar 'return;' sin valor para terminar su ejecución anticipadamente.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: "int x = 0;\nwhile (x < 10) {\n  x++;\n  if (x == 5) continue;\n  if (x == 8) break;\n  System.out.print(x);\n}",
    options: ["123467", "1234567", "123457", "12345678"],
    answer: 0,
    explanation:
      "El número 5 se salta por 'continue', y cuando x == 8 se rompe el bucle. Se imprimen 1,2,3,4,6,7.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se coloca un 'return' dentro de un bloque 'finally'?",
    code: "",
    options: [
      "El 'return' en 'finally' anula cualquier otro return anterior",
      "El compilador lanza error",
      "Se ejecutan ambos return",
      "Solo se ejecuta el primer return encontrado",
    ],
    answer: 0,
    explanation:
      "Un 'return' en 'finally' sobrescribe cualquier return previo en 'try' o 'catch'. Puede causar confusión y debe evitarse.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué salida tiene el siguiente código?",
    code: 'for (int i = 0; i < 3; i++) {\n  for (int j = 0; j < 3; j++) {\n    if (i == j) continue;\n    System.out.print(i + "" + j + " ");\n  }\n}',
    options: [
      "01 02 10 12 20 21",
      "00 11 22",
      "00 01 02 10 11 12 20 21 22",
      "01 02 12 20 21",
    ],
    answer: 0,
    explanation:
      "'continue' salta cuando i == j, por lo tanto omite 00, 11, y 22. Imprime el resto.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si se utiliza un 'break' etiquetado con una etiqueta inexistente?",
    code: "",
    options: [
      "Se lanza una excepción en tiempo de ejecución",
      "El código se comporta como un 'break' normal",
      "El compilador lanza un error",
      "Se ignora la etiqueta",
    ],
    answer: 2,
    explanation:
      "El compilador necesita que la etiqueta usada exista dentro del contexto, de lo contrario lanza un error.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: "int i = 0;\ndo {\n  if (i++ == 2) continue;\n  System.out.print(i);\n} while (i < 4);",
    options: ["1234", "134", "124", "123"],
    answer: 1,
    explanation:
      "Cuando i == 2 (antes del post-incremento), se salta la impresión. Se imprimen 1,3,4.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué se recomienda sobre el uso de múltiples 'return' en un método?",
    code: "",
    options: [
      "Es obligatorio usar solo uno por método",
      "Se debe evitar por completo",
      "Pueden usarse si mejoran la legibilidad",
      "Rompen la ejecución del hilo actual",
    ],
    answer: 2,
    explanation:
      "Múltiples 'return' son válidos y pueden mejorar la claridad si se usan con criterio.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el comportamiento esperado si se omite 'break' en un 'switch'?",
    code: "",
    options: [
      "El código no compila",
      "Solo se ejecuta el primer caso",
      "Se ejecutan todos los casos posteriores hasta encontrar un break",
      "Se lanza una excepción",
    ],
    answer: 2,
    explanation:
      "Sin 'break', el flujo continúa ejecutando los siguientes 'case', lo que se conoce como 'fall through'.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Es válida la siguiente instrucción dentro de un bucle?",
    code: "break outerLoop;",
    options: [
      "Sí, siempre",
      "Solo si 'outerLoop' está declarado en el mismo método",
      "No, porque 'break' no acepta etiquetas",
      "Solo si es el último bucle",
    ],
    answer: 1,
    explanation:
      "Las etiquetas deben estar dentro del mismo método o contexto donde se usa el 'break'.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código con return dentro de try-finally?",
    code: "public static int test() {\n  try {\n    return 1;\n  } finally {\n    return 2;\n  }\n}\nSystem.out.println(test());",
    options: ["1", "2", "Error de compilación", "Ninguno, se lanza excepción"],
    answer: 1,
    explanation:
      "El return en 'finally' reemplaza el valor retornado en 'try', por eso se imprime 2.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué instrucción se usa para salir anticipadamente de un método?",
    code: "",
    options: ["continue", "exit", "return", "throw"],
    answer: 2,
    explanation:
      "La instrucción 'return' permite finalizar un método en cualquier punto.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿En qué estructuras puede usarse 'continue'?",
    code: "",
    options: [
      "if, for, while, switch",
      "for, while, do-while",
      "while, switch",
      "solo en métodos",
    ],
    answer: 1,
    explanation:
      "'continue' se utiliza únicamente dentro de bucles como for, while y do-while, pero no en switch.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué pasa si 'break' se usa dentro de un bucle infinito?",
    code: "",
    options: [
      "El bucle se convierte en finito",
      "El compilador lanza error",
      "El programa se detiene completamente",
      "El 'break' se ignora",
    ],
    answer: 0,
    explanation:
      "El 'break' permite salir de un bucle infinito de forma controlada, haciéndolo finito en la práctica.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Es válido usar 'continue' en un switch dentro de un bucle?",
    code: "",
    options: [
      "Sí, se comporta igual que en un bucle",
      "No, da error de compilación",
      "Solo si se usa con etiquetas",
      "Depende del tipo de switch",
    ],
    answer: 1,
    explanation:
      "'continue' no puede usarse directamente en un switch, ya que no es una estructura iterativa.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué instrucción puede utilizarse para salir de múltiples niveles de bucles?",
    code: "",
    options: ["return", "break con etiqueta", "continue con etiqueta", "throw"],
    answer: 1,
    explanation:
      "'break' con etiqueta permite salir directamente de bucles anidados sin necesidad de condiciones adicionales.",
    subtheme: "📚 Estructuras de Control de Salto",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el propósito principal de un constructor en una clase Java?",
    code: "",
    options: [
      "Inicializar objetos con valores predeterminados.",
      "Crear métodos estáticos en una clase.",
      "Destruir instancias de objetos.",
      "Generar clases anidadas de forma automática.",
    ],
    answer: 0,
    explanation:
      "El constructor permite inicializar un objeto al momento de su creación, asignando valores iniciales a sus atributos.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si no se define un constructor explícito en una clase Java?",
    code: "",
    options: [
      "La clase no podrá instanciarse.",
      "El compilador lanza un error.",
      "Java crea un constructor por defecto sin parámetros.",
      "La clase se convierte en abstracta.",
    ],
    answer: 2,
    explanation:
      "Si no defines ningún constructor, Java agrega uno por defecto que no recibe parámetros y no realiza ninguna operación adicional.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué representa el uso del modificador `static` en un campo de clase?",
    code: "",
    options: [
      "Es exclusivo para interfaces.",
      "El campo pertenece a la instancia, no a la clase.",
      "El campo pertenece a la clase, y es compartido por todas las instancias.",
      "El campo no puede cambiar su valor una vez asignado.",
    ],
    answer: 2,
    explanation:
      "Un campo `static` pertenece a la clase, no a la instancia, y es compartido por todos los objetos de esa clase.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de ejecutar el siguiente código?",
    code: "class Demo {\n    int x = 5;\n    public static void main(String[] args) {\n        Demo obj1 = new Demo();\n        Demo obj2 = new Demo();\n        obj1.x = 10;\n        System.out.println(obj2.x);\n    }\n}",
    options: ["5", "10", "0", "Error en tiempo de compilación"],
    answer: 0,
    explanation:
      "Cada objeto tiene su propia copia del campo `x`, por lo tanto modificar `obj1.x` no afecta a `obj2.x`.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito del operador `this` dentro de una clase?",
    code: "",
    options: [
      "Referirse a una variable estática.",
      "Referirse al método principal (main).",
      "Referirse a la instancia actual de la clase.",
      "Invocar constructores de la clase base.",
    ],
    answer: 2,
    explanation:
      "El operador `this` se utiliza para referirse a la instancia actual de un objeto dentro de una clase.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una característica de los bloques de inicialización en Java?",
    code: "",
    options: [
      "Solo pueden existir dentro de métodos.",
      "Se ejecutan después del constructor.",
      "Se ejecutan antes del constructor y pueden contener lógica común.",
      "Solo funcionan en clases abstractas.",
    ],
    answer: 2,
    explanation:
      "Los bloques de inicialización se ejecutan antes del constructor y se usan para lógica común a todos los constructores.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre clases anidadas es correcta?",
    code: "",
    options: [
      "Solo pueden ser estáticas.",
      "Pueden acceder directamente a miembros privados de la clase externa.",
      "No pueden ser abstractas.",
      "Deben declararse fuera de cualquier clase.",
    ],
    answer: 1,
    explanation:
      "Las clases anidadas tienen acceso a los miembros privados de la clase externa si no son `static`.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué pasa si llamas a `return;` dentro de un método `void`?",
    code: "",
    options: [
      "Lanza una excepción.",
      "Finaliza el método inmediatamente.",
      "Ignora la instrucción.",
      "Devuelve `null` al llamador.",
    ],
    answer: 1,
    explanation:
      "`return;` en un método `void` finaliza la ejecución del método de inmediato sin devolver un valor.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si se intenta acceder a una variable de instancia desde un método `static`?",
    code: "",
    options: [
      "Se puede acceder directamente sin problema.",
      "El compilador convierte la variable en estática.",
      "Genera un error de compilación.",
      "Solo se permite si la clase es abstracta.",
    ],
    answer: 2,
    explanation:
      "Los métodos `static` no pueden acceder a variables de instancia sin una referencia explícita a un objeto.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la finalidad del patrón de diseño ‘factory’ en la creación de objetos?",
    code: "",
    options: [
      "Evitar el uso del operador `new`.",
      "Permitir crear objetos sin exponer la lógica de creación.",
      "Duplicar el comportamiento de las clases.",
      "Forzar la herencia entre clases.",
    ],
    answer: 1,
    explanation:
      "El patrón Factory abstrae la lógica de creación de objetos y delega esta responsabilidad a métodos o clases específicas.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado imprime el siguiente código?",
    code: "class Test {\n    int a;\n    Test(int a) {\n        this.a = a;\n    }\n    void print() {\n        System.out.println(this.a);\n    }\n    public static void main(String[] args) {\n        new Test(42).print();\n    }\n}",
    options: ["null", "0", "42", "Error en tiempo de compilación"],
    answer: 2,
    explanation:
      "Se imprime 42 ya que el valor fue asignado en el constructor mediante `this.a = a`.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito del método `toString()` en una clase?",
    code: "",
    options: [
      "Comparar objetos por valor.",
      "Inicializar campos estáticos.",
      "Representar el objeto como una cadena de texto.",
      "Copiar todos los atributos de una clase.",
    ],
    answer: 2,
    explanation:
      "`toString()` permite devolver una representación legible del objeto como String, útil para debug o impresión.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si defines dos métodos con el mismo nombre pero diferentes parámetros?",
    code: "",
    options: [
      "Error de compilación.",
      "Sobrescritura de métodos.",
      "Sobrecarga de métodos.",
      "No es posible en Java.",
    ],
    answer: 2,
    explanation:
      "Cuando un método tiene el mismo nombre pero diferente lista de parámetros, se denomina sobrecarga (overloading).",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado de ejecutar este código?",
    code: "class A {\n    int x = 10;\n    void method() {\n        int x = 20;\n        System.out.println(x);\n    }\n    public static void main(String[] args) {\n        new A().method();\n    }\n}",
    options: ["10", "20", "0", "Error de compilación"],
    answer: 1,
    explanation:
      "La variable local `x = 20` oculta a la variable de instancia, por lo que se imprime 20.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué método especial se invoca al crear un nuevo objeto con `new`?",
    code: "",
    options: [
      "toString()",
      "finalize()",
      "equals()",
      "Constructor de la clase",
    ],
    answer: 3,
    explanation:
      "Cuando usas `new`, se invoca automáticamente el constructor para inicializar el objeto.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },

  {
    question:
      "¿Qué sucede si una clase en Java no tiene ningún modificador de acceso declarado?",
    code: "",
    options: [
      "Se comporta como pública.",
      "Solo es accesible dentro del mismo paquete.",
      "Es privada por defecto.",
      "No se puede instanciar.",
    ],
    answer: 1,
    explanation:
      "Cuando no se especifica un modificador de acceso, la clase tiene acceso *package-private*, es decir, solo accesible dentro del mismo paquete.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito del método `equals()` en Java?",
    code: "",
    options: [
      "Comparar referencias de objetos.",
      "Comparar si dos objetos son idénticos físicamente en memoria.",
      "Comparar si dos objetos son equivalentes en contenido.",
      "Determinar si un objeto es `null`.",
    ],
    answer: 2,
    explanation:
      "El método `equals()` compara el contenido lógico de dos objetos, no sus referencias.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué implica declarar una clase como `final` en Java?",
    code: "",
    options: [
      "La clase no puede contener métodos.",
      "La clase no puede extenderse (heredarse).",
      "Los objetos de esa clase son inmutables.",
      "Solo puede instanciarse una vez.",
    ],
    answer: 1,
    explanation:
      "Una clase `final` no puede ser heredada, lo cual es útil para evitar modificaciones en el comportamiento definido.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál será la salida del siguiente código?",
    code: "class A {\n    static int count = 0;\n    A() { count++; }\n    public static void main(String[] args) {\n        new A(); new A(); new A();\n        System.out.println(A.count);\n    }\n}",
    options: ["0", "1", "3", "Error de compilación"],
    answer: 2,
    explanation:
      "Cada vez que se crea un nuevo objeto, se incrementa el contador `count`. Como se crean 3 objetos, el resultado es 3.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el beneficio de usar encapsulamiento en una clase?",
    code: "",
    options: [
      "Permitir acceso libre a todos los campos.",
      "Reutilizar código entre clases.",
      "Proteger el estado interno del objeto mediante getters y setters.",
      "Eliminar necesidad de constructores.",
    ],
    answer: 2,
    explanation:
      "El encapsulamiento protege los datos internos de una clase controlando el acceso mediante métodos públicos (getters/setters).",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: "class Car {\n    static int wheels = 4;\n    public static void main(String[] args) {\n        Car c1 = new Car();\n        Car c2 = new Car();\n        c1.wheels = 6;\n        System.out.println(c2.wheels);\n    }\n}",
    options: ["4", "6", "0", "Error en tiempo de compilación"],
    answer: 1,
    explanation:
      "Los campos `static` son compartidos entre todas las instancias. Cambiar `c1.wheels` afecta también a `c2.wheels`.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si un campo se declara `final` en una clase?",
    code: "",
    options: [
      "Puede cambiar su valor dentro de métodos.",
      "Solo puede ser inicializado una vez.",
      "Puede ser reescrito en una subclase.",
      "Se convierte en variable estática.",
    ],
    answer: 1,
    explanation:
      "Un campo `final` solo puede asignarse una vez, ya sea en su declaración o dentro del constructor.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito del método `hashCode()`?",
    code: "",
    options: [
      "Comparar referencias de objetos.",
      "Generar un valor único para cada clase.",
      "Obtener una representación numérica del objeto para su uso en estructuras hash.",
      "Convertir un objeto a cadena.",
    ],
    answer: 2,
    explanation:
      "El método `hashCode()` se utiliza para generar un código hash, útil en colecciones como HashMap o HashSet.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál será el resultado del siguiente código?",
    code: 'class Test {\n    static void greet() {\n        System.out.println("Hello");\n    }\n    public static void main(String[] args) {\n        Test.greet();\n    }\n}',
    options: [
      "No se imprime nada.",
      "Hello",
      "Error en tiempo de ejecución.",
      "Error de compilación.",
    ],
    answer: 1,
    explanation:
      "El método `greet()` es `static`, por lo tanto puede ser llamado directamente usando el nombre de la clase.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones es verdadera sobre sobreescritura de métodos?",
    code: "",
    options: [
      "El método sobrescrito puede tener diferente tipo de retorno.",
      "El método sobrescrito debe tener el mismo nombre y firma.",
      "El método sobrescrito debe ser `static`.",
      "El método sobrescrito no puede lanzar excepciones.",
    ],
    answer: 1,
    explanation:
      "Para que un método sea sobrescrito, debe tener exactamente el mismo nombre, tipo de retorno y lista de parámetros.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué implica declarar un campo como `private` en una clase?",
    code: "",
    options: [
      "Puede accederse desde cualquier clase.",
      "Solo es accesible desde la misma clase.",
      "Es accesible desde subclases.",
      "No puede inicializarse nunca.",
    ],
    answer: 1,
    explanation:
      "Un campo `private` solo puede ser accedido directamente dentro de la misma clase donde fue declarado.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la función de los constructores sobrecargados en una clase?",
    code: "",
    options: [
      "Permiten herencia múltiple.",
      "Permiten múltiples formas de crear un objeto con distintos parámetros.",
      "Eliminan necesidad de getters y setters.",
      "Hacen que la clase sea abstracta.",
    ],
    answer: 1,
    explanation:
      "Los constructores sobrecargados permiten crear instancias de una clase usando diferentes conjuntos de argumentos.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: "class Counter {\n    static int count = 0;\n    Counter() {\n        count++;\n    }\n    public static void main(String[] args) {\n        new Counter();\n        new Counter();\n        System.out.println(Counter.count);\n    }\n}",
    options: ["1", "2", "0", "Depende del sistema"],
    answer: 1,
    explanation:
      "Cada vez que se crea un objeto, el constructor incrementa la variable `count`. Por lo tanto, el resultado es 2.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace el operador `instanceof`?",
    code: "",
    options: [
      "Verifica si un objeto es una instancia de una clase o subclase.",
      "Crea una nueva instancia de una clase.",
      "Transforma un objeto en otro tipo.",
      "Compara referencias de memoria.",
    ],
    answer: 0,
    explanation:
      "`instanceof` verifica si un objeto pertenece a una clase específica o alguna de sus superclases o interfaces.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: "class X {\n    int a = 5;\n    void modify(X x) {\n        x.a = 10;\n    }\n    public static void main(String[] args) {\n        X obj = new X();\n        obj.modify(obj);\n        System.out.println(obj.a);\n    }\n}",
    options: ["5", "10", "0", "Error de compilación"],
    answer: 1,
    explanation:
      "El método modifica el valor del campo `a` del mismo objeto, por lo tanto, imprime 10.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurre si no defines un constructor en una clase?",
    code: "",
    options: [
      "Se lanza un error de compilación.",
      "Java crea un constructor por defecto sin parámetros.",
      "La clase no puede ser instanciada.",
      "El compilador exige definir al menos uno.",
    ],
    answer: 1,
    explanation:
      "Si no se define ningún constructor, el compilador de Java genera automáticamente un constructor por defecto sin argumentos.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el resultado del siguiente código?",
    code: "class Demo {\n    int x = 5;\n    public static void main(String[] args) {\n        Demo d1 = new Demo();\n        Demo d2 = d1;\n        d2.x = 10;\n        System.out.println(d1.x);\n    }\n}",
    options: ["5", "10", "0", "Error de compilación"],
    answer: 1,
    explanation:
      "Como `d1` y `d2` apuntan al mismo objeto en memoria, modificar `d2.x` también afecta a `d1.x`.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué implica declarar un método como `static` dentro de una clase?",
    code: "",
    options: [
      "El método no puede acceder a ningún campo de la clase.",
      "El método puede ser sobreescrito.",
      "El método pertenece a la clase, no a una instancia.",
      "El método puede ser abstracto.",
    ],
    answer: 2,
    explanation:
      "Los métodos `static` pertenecen a la clase en sí y no requieren una instancia para ser invocados.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: "class Test {\n    int a;\n    Test(int x) { this.a = x; }\n    public static void main(String[] args) {\n        Test t = new Test(7);\n        System.out.println(t.a);\n    }\n}",
    options: ["0", "7", "null", "Error en tiempo de ejecución"],
    answer: 1,
    explanation:
      "El constructor asigna el valor `7` al campo `a`, por lo que se imprime 7.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué hace el uso del modificador `this`?",
    code: "",
    options: [
      "Accede a métodos estáticos.",
      "Referirse al objeto actual.",
      "Crear nuevas instancias de objetos.",
      "Llamar constructores de la superclase.",
    ],
    answer: 1,
    explanation:
      "`this` se refiere a la instancia actual del objeto y se usa comúnmente para distinguir entre variables locales y atributos.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué resultado imprime el siguiente código?",
    code: "class A {\n    int value = 1;\n    A() {\n        value = 2;\n    }\n    { value = 3; }\n    public static void main(String[] args) {\n        System.out.println(new A().value);\n    }\n}",
    options: ["1", "2", "3", "Error de compilación"],
    answer: 1,
    explanation:
      "El bloque de inicialización se ejecuta antes del constructor, pero el constructor sobrescribe el valor a 2.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué sucede si se intenta instanciar una clase abstracta?",
    code: "",
    options: [
      "Se permite si implementa todos los métodos.",
      "Se crea una instancia parcialmente funcional.",
      "Provoca un error de compilación.",
      "El comportamiento depende de la JVM.",
    ],
    answer: 2,
    explanation:
      "Las clases abstractas no se pueden instanciar directamente; deben ser extendidas e implementadas por una subclase concreta.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito de un bloque `static {}` en una clase?",
    code: "",
    options: [
      "Inicializar variables locales.",
      "Ejecutar lógica cuando se crea cada objeto.",
      "Inicializar datos estáticos de clase una sola vez.",
      "Reemplazar el constructor por defecto.",
    ],
    answer: 2,
    explanation:
      "Los bloques `static` se ejecutan una sola vez cuando la clase es cargada, generalmente usados para inicialización estática.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime este código?",
    code: 'class A {\n    String name = "A";\n}\nclass B extends A {\n    String name = "B";\n    public static void main(String[] args) {\n        A a = new B();\n        System.out.println(a.name);\n    }\n}',
    options: ["A", "B", "null", "Error en tiempo de compilación"],
    answer: 0,
    explanation:
      "El campo `name` no es polimórfico. Aunque el objeto es de tipo `B`, la referencia es de tipo `A`, por lo tanto accede al campo de `A`.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede al declarar una clase como `abstract` sin métodos abstractos?",
    code: "",
    options: [
      "Es ilegal en Java.",
      "La clase puede seguir teniendo métodos concretos.",
      "Debe contener al menos un método abstracto.",
      "No puede ser extendida.",
    ],
    answer: 1,
    explanation:
      "Una clase abstracta puede tener todos sus métodos implementados. Lo importante es que no se puede instanciar directamente.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cómo se invoca el constructor de la superclase desde una subclase?",
    code: "",
    options: [
      "Usando `super()` como primera línea del constructor.",
      "Llamando `this()` desde cualquier lugar.",
      "No es posible acceder al constructor de la superclase.",
      "Con `super.constructor()`.",
    ],
    answer: 0,
    explanation:
      "La llamada a `super()` se utiliza para invocar el constructor de la superclase y debe ser la primera línea del constructor.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué ocurrirá al ejecutar este código?",
    code: "class A {\n    int x = 10;\n}\nclass B extends A {\n    int x = 20;\n    void print() {\n        System.out.println(super.x);\n    }\n    public static void main(String[] args) {\n        new B().print();\n    }\n}",
    options: ["10", "20", "0", "Error de compilación"],
    answer: 0,
    explanation:
      "Usar `super.x` accede al campo `x` de la clase padre, que es 10.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué imprime el siguiente código?",
    code: 'class Person {\n    String name;\n    Person(String name) {\n        this.name = name;\n    }\n    void greet() {\n        System.out.println("Hello, " + name);\n    }\n    public static void main(String[] args) {\n        new Person("Ana").greet();\n    }\n}',
    options: [
      "Hello, null",
      "Hello, Ana",
      "Ana",
      "Error en tiempo de ejecución",
    ],
    answer: 1,
    explanation:
      "El constructor asigna correctamente el nombre 'Ana' y el método `greet()` imprime el saludo.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Para qué se utiliza un constructor privado en una clase?",
    code: "",
    options: [
      "Evitar que la clase tenga atributos.",
      "Permitir solo herencia.",
      "Controlar la creación de instancias (por ejemplo, en un Singleton).",
      "Permitir sobrecarga de métodos.",
    ],
    answer: 2,
    explanation:
      "Los constructores privados se usan comúnmente en patrones como Singleton para restringir la creación de objetos fuera de la clase.",
    subtheme: "Clases y Objetos",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal ventaja de utilizar una arquitectura por capas en aplicaciones empresariales Java?",
    code: "",
    options: [
      "Facilita el acoplamiento entre clases",
      "Permite ocultar la base de datos al usuario",
      "Promueve la separación de responsabilidades y mantenibilidad",
      "Evita el uso de interfaces y servicios",
    ],
    answer: 2,
    explanation:
      "La arquitectura por capas busca separar responsabilidades, lo que facilita el mantenimiento, pruebas y escalabilidad del sistema.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿En qué capa se recomienda realizar validaciones de reglas de negocio?",
    code: "",
    options: [
      "Capa de Persistencia",
      "Capa de Servicio",
      "Capa de Presentación",
      "Capa de Transporte",
    ],
    answer: 1,
    explanation:
      "La capa de servicio es responsable de contener la lógica de negocio, incluidas las validaciones específicas del dominio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué responsabilidad tiene la capa de persistencia en la arquitectura por capas?",
    code: "",
    options: [
      "Aplicar validaciones de negocio",
      "Exponer APIs al exterior",
      "Realizar operaciones directas sobre la base de datos",
      "Convertir entidades en DTOs",
    ],
    answer: 2,
    explanation:
      "La capa de persistencia (repositorio) se encarga exclusivamente de acceder a la base de datos, utilizando ORM como JPA/Hibernate.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el principal riesgo de que la capa de presentación acceda directamente a la capa de persistencia?",
    code: "",
    options: [
      "Mejora la velocidad de la aplicación",
      "Aumenta el acoplamiento y disminuye la mantenibilidad",
      "Se reduce la duplicación de código",
      "Mejora la seguridad",
    ],
    answer: 1,
    explanation:
      "El acceso directo a la base de datos desde la presentación rompe el principio de separación de responsabilidades, dificultando el mantenimiento y las pruebas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón de diseño es comúnmente usado entre la capa de servicio y la de persistencia?",
    code: "",
    options: ["Observer", "Builder", "Repository", "Singleton"],
    answer: 2,
    explanation:
      "El patrón Repository es ampliamente usado para encapsular el acceso a datos, permitiendo separar lógica de negocio del acceso a la base de datos.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el rol de un DTO?",
    code: "",
    options: [
      "Representa una tabla de base de datos",
      "Expone entidades JPA directamente",
      "Transfiere datos entre capas, ocultando la estructura interna",
      "Reemplaza completamente a las entidades",
    ],
    answer: 2,
    explanation:
      "Los DTOs (Data Transfer Objects) permiten transportar datos entre capas sin exponer directamente las entidades del dominio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una buena práctica al implementar la capa de servicio en Spring?",
    code: "",
    options: [
      "Anotar con @Repository",
      "Exponer entidades directamente al frontend",
      "Dividir los servicios en interfaces e implementaciones",
      "Incluir lógica de renderizado HTML",
    ],
    answer: 2,
    explanation:
      "Dividir servicios en interfaces e implementaciones mejora la extensibilidad, mantenibilidad y facilita la inyección de dependencias en Spring.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué anotación de Spring se utiliza para declarar una clase como parte de la capa de servicio?",
    code: "",
    options: ["@Service", "@Component", "@Entity", "@Repository"],
    answer: 0,
    explanation:
      "@Service indica que una clase es parte de la capa de servicios y permite a Spring gestionarla como un bean.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué técnica puede ayudar a evitar el acoplamiento entre DTOs y entidades?",
    code: "",
    options: [
      "Inyección de dependencias",
      "Uso de DAO en lugar de repositorios",
      "Mapeo explícito o uso de librerías como MapStruct",
      "Anidar DTOs dentro de las entidades",
    ],
    answer: 2,
    explanation:
      "MapStruct o el mapeo explícito ayuda a transformar DTOs y entidades de manera controlada, manteniendo la independencia entre capas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la responsabilidad principal del controlador (`@RestController`) en Spring Boot?",
    code: "",
    options: [
      "Gestionar acceso a base de datos",
      "Aplicar lógica de negocio",
      "Orquestar respuestas a solicitudes HTTP",
      "Validar la consistencia transaccional",
    ],
    answer: 2,
    explanation:
      "Los controladores manejan solicitudes entrantes, extraen parámetros y delegan a la capa de servicio. No deben contener lógica de negocio compleja.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué resultado produce una arquitectura por capas mal implementada?",
    code: "",
    options: [
      "Alto rendimiento",
      "Bajo acoplamiento y cohesión",
      "Alta duplicación de lógica y dificultades para escalar",
      "Fácil trazabilidad de errores",
    ],
    answer: 2,
    explanation:
      "Si las capas no están bien definidas o se violan los límites, se genera duplicación, acoplamiento elevado y problemas de escalabilidad.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa debería encargarse de manejar la lógica relacionada con autenticación y autorización?",
    code: "",
    options: [
      "Capa de Presentación",
      "Capa de Persistencia",
      "Capa de Seguridad (interceptor o middleware)",
      "Capa de Transporte",
    ],
    answer: 2,
    explanation:
      "Las preocupaciones transversales como seguridad suelen manejarse mediante filtros, interceptores o frameworks como Spring Security, separados de la lógica del negocio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el efecto de tener lógica de negocio en múltiples capas?",
    code: "",
    options: [
      "Mejora el rendimiento",
      "Reduce la necesidad de pruebas",
      "Dificulta la trazabilidad y mantenimiento del código",
      "Aumenta la claridad del diseño",
    ],
    answer: 2,
    explanation:
      "Distribuir lógica de negocio entre capas rompe la cohesión, hace más difícil el mantenimiento y complica las pruebas unitarias.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el orden de interacción típico entre capas al recibir una solicitud en una arquitectura por capas?",
    code: "",
    options: [
      "Controlador → Servicio → Repositorio",
      "Repositorio → Servicio → Controlador",
      "DTO → Repositorio → Servicio",
      "Servicio → Controlador → Repositorio",
    ],
    answer: 0,
    explanation:
      "El flujo habitual es: el controlador recibe la solicitud, delega a la capa de servicio, la cual consulta o modifica datos a través del repositorio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué beneficios aporta el uso de interfaces en los servicios dentro de una arquitectura por capas?",
    code: "",
    options: [
      "Mejora la compatibilidad con JPA",
      "Facilita el uso de DTOs",
      "Permite desacoplar la implementación y facilita pruebas unitarias",
      "Evita el uso de controladores REST",
    ],
    answer: 2,
    explanation:
      "Las interfaces permiten desacoplar la lógica del servicio, facilitar mocks para pruebas y mejorar la extensibilidad.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },

  {
    question:
      "¿Qué patrón arquitectónico es una evolución de la arquitectura por capas que permite mayor independencia entre módulos?",
    code: "",
    options: [
      "Arquitectura Monolítica",
      "Arquitectura Hexagonal",
      "Arquitectura Cliente-Servidor",
      "Arquitectura N-tier",
    ],
    answer: 1,
    explanation:
      "La arquitectura hexagonal (Ports & Adapters) permite mayor flexibilidad desacoplando la lógica del dominio de las interfaces externas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa suele contener las clases que implementan la lógica transaccional?",
    code: "",
    options: [
      "Capa de Presentación",
      "Capa de Servicio",
      "Capa de Seguridad",
      "Capa de Infraestructura",
    ],
    answer: 1,
    explanation:
      "La lógica transaccional generalmente se gestiona en la capa de servicio, donde se orquestan llamadas y se asegura la consistencia de datos.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué anotación de Spring se utiliza para declarar la capa de persistencia?",
    code: "",
    options: ["@Entity", "@Service", "@Repository", "@Controller"],
    answer: 2,
    explanation:
      "@Repository marca una clase como componente responsable de operaciones CRUD y manejo de excepciones de persistencia.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa debe ser la única en conocer detalles de la base de datos?",
    code: "",
    options: [
      "Capa de Presentación",
      "Capa de Servicio",
      "Capa de Persistencia",
      "Capa de Seguridad",
    ],
    answer: 2,
    explanation:
      "Solo la capa de persistencia debe interactuar con la base de datos. Las demás capas deben operar con abstracciones.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre el uso de `@Transactional` en Spring es correcta?",
    code: "",
    options: [
      "Debe aplicarse únicamente en repositorios",
      "Debe usarse en la capa de presentación",
      "Puede usarse en la capa de servicio para manejar consistencia de datos",
      "Es obligatorio en todos los métodos",
    ],
    answer: 2,
    explanation:
      "`@Transactional` se aplica típicamente a métodos de la capa de servicio para asegurar la consistencia durante una operación de negocio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una ventaja de inyectar interfaces en lugar de clases concretas?",
    code: "",
    options: [
      "Reduce la legibilidad",
      "Incrementa la dependencia del framework",
      "Facilita pruebas unitarias y el desacoplamiento",
      "Evita el uso de anotaciones como @Service",
    ],
    answer: 2,
    explanation:
      "Inyectar interfaces desacopla las dependencias, lo que permite cambiar implementaciones fácilmente y facilita el testing con mocks.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes clases pertenece típicamente a la capa de dominio?",
    code: "",
    options: [
      "UsuarioController",
      "UsuarioServiceImpl",
      "UsuarioEntity",
      "Usuario",
    ],
    answer: 3,
    explanation:
      "La clase `Usuario`, que representa el modelo de negocio sin dependencias externas, pertenece al dominio puro.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En una arquitectura por capas, ¿qué problema puede surgir si los DTOs contienen lógica de negocio?",
    code: "",
    options: [
      "Ninguno, mejora la reutilización",
      "Rompe el principio de responsabilidad única",
      "Aumenta la cohesión de capas",
      "Reduce la necesidad de validaciones en otras capas",
    ],
    answer: 1,
    explanation:
      "Los DTOs deben ser estructuras de datos simples. Incluir lógica de negocio en ellos rompe el principio de responsabilidad única y dificulta el mantenimiento.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa debería contener la lógica de envío de correos electrónicos o mensajes?",
    code: "",
    options: [
      "Capa de Presentación",
      "Capa de Infraestructura",
      "Capa de Servicio",
      "Capa de Seguridad",
    ],
    answer: 1,
    explanation:
      "La capa de infraestructura se encarga de las integraciones técnicas externas como correos, colas de mensajes o sistemas externos.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una buena razón para usar DTOs en lugar de entidades JPA en los controladores REST?",
    code: "",
    options: [
      "Mejorar el rendimiento del mapeo Hibernate",
      "Evitar la serialización innecesaria de relaciones bidireccionales",
      "Reducir el uso de anotaciones",
      "Permitir que los servicios accedan directamente al frontend",
    ],
    answer: 1,
    explanation:
      "Al usar DTOs, se evita exponer entidades JPA que pueden tener relaciones complejas o sensibles, lo que mejora la seguridad y la estabilidad de la API.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si el controlador en Spring contiene demasiada lógica de negocio?",
    code: "",
    options: [
      "La aplicación se vuelve más modular",
      "Mejora la mantenibilidad",
      "Aumenta el acoplamiento y dificulta el testing",
      "Reduce el uso de servicios",
    ],
    answer: 2,
    explanation:
      "Cuando el controlador hace más de lo que le corresponde, se rompe la separación de responsabilidades, dificultando pruebas y mantenimiento.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una responsabilidad incorrecta para la capa de dominio?",
    code: "",
    options: [
      "Definir entidades del negocio",
      "Contener lógica de negocio esencial",
      "Manejar conexiones a base de datos",
      "Ser independiente de frameworks",
    ],
    answer: 2,
    explanation:
      "La capa de dominio no debe manejar persistencia ni depender de tecnologías. Solo debe contener el corazón de la lógica del negocio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "Dado el siguiente fragmento, ¿a qué capa pertenece esta clase?",
    code: '@RestController\n@RequestMapping("/productos")\npublic class ProductoController { }',
    options: [
      "Capa de Servicio",
      "Capa de Presentación",
      "Capa de Persistencia",
      "Capa de Dominio",
    ],
    answer: 1,
    explanation:
      "Un `@RestController` es parte de la capa de presentación, ya que expone endpoints HTTP a los consumidores.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el beneficio de delegar la lógica de negocio compleja a la capa de servicio?",
    code: "",
    options: [
      "Permite a los controladores realizar validaciones",
      "Promueve el principio de responsabilidad única",
      "Mejora la velocidad de ejecución",
      "Simplifica la configuración del ORM",
    ],
    answer: 1,
    explanation:
      "Colocar la lógica en la capa de servicio ayuda a separar las responsabilidades, lo cual mejora el diseño, mantenimiento y pruebas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },

  {
    question:
      "¿Qué ventaja principal ofrece la arquitectura por capas respecto a la mantenibilidad del sistema?",
    code: "",
    options: [
      "Permite ejecutar consultas más rápidas a la base de datos",
      "Facilita la escalabilidad horizontal",
      "Aísla responsabilidades facilitando cambios en una sola capa",
      "Elimina la necesidad de pruebas automatizadas",
    ],
    answer: 2,
    explanation:
      "La arquitectura por capas permite separar responsabilidades, haciendo que los cambios en una capa no afecten a las demás directamente.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa debería encargarse de mapear entidades JPA a DTOs y viceversa?",
    code: "",
    options: [
      "Capa de Presentación",
      "Capa de Dominio",
      "Capa de Servicio",
      "Capa de Infraestructura",
    ],
    answer: 2,
    explanation:
      "La capa de servicio actúa como puente entre la presentación y la persistencia, siendo el lugar adecuado para la transformación entre entidades y DTOs.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una buena práctica al utilizar la arquitectura por capas con Spring Boot?",
    code: "",
    options: [
      "Usar lógica de negocio en los controladores",
      "Inyectar repositorios directamente en los controladores",
      "Organizar las clases en paquetes por capa",
      "Evitar la separación de responsabilidades para simplificar",
    ],
    answer: 2,
    explanation:
      "Organizar el código en paquetes por capa mejora la legibilidad, mantenibilidad y respeta los principios de diseño.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa debería ser responsable de validar las reglas de negocio complejas?",
    code: "",
    options: [
      "Capa de Presentación",
      "Capa de Persistencia",
      "Capa de Servicio",
      "Capa de Seguridad",
    ],
    answer: 2,
    explanation:
      "Las reglas de negocio complejas deben evaluarse en la capa de servicio, donde se orquesta la lógica del sistema.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Por qué se recomienda evitar que la capa de presentación acceda directamente al repositorio?",
    code: "",
    options: [
      "Por motivos de seguridad exclusivamente",
      "Porque los repositorios solo funcionan con clases de infraestructura",
      "Porque rompe la separación de capas y acopla el diseño",
      "Porque causa pérdida de rendimiento",
    ],
    answer: 2,
    explanation:
      "Permitir que la capa de presentación acceda directamente al repositorio rompe el principio de separación de responsabilidades y dificulta el mantenimiento.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón puede complementar la arquitectura por capas para facilitar la separación de lógica de negocio compleja?",
    code: "",
    options: ["Singleton", "Command", "Strategy", "Domain-Driven Design (DDD)"],
    answer: 3,
    explanation:
      "El enfoque de DDD complementa la arquitectura por capas al permitir representar la lógica del dominio de forma más clara y estructurada.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "Dado este fragmento de código, ¿qué responsabilidad está asumiendo esta clase?",
    code: "@Service\npublic class PedidoService {\n  public void generarFactura(Pedido pedido) {\n    // lógica de negocio para generar factura\n  }\n}",
    options: [
      "Controlador de la vista",
      "Manejo de acceso a datos",
      "Lógica de presentación",
      "Orquestación de la lógica de negocio",
    ],
    answer: 3,
    explanation:
      "La clase marcada como `@Service` contiene lógica de negocio y representa la capa de servicio encargada de orquestar operaciones complejas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué es una posible consecuencia de mezclar código de lógica de negocio y persistencia en una misma clase?",
    code: "",
    options: [
      "Mejor rendimiento",
      "Mayor reutilización",
      "Mayor cohesión",
      "Mayor dificultad para hacer pruebas unitarias",
    ],
    answer: 3,
    explanation:
      "Combinar lógica de negocio y persistencia genera clases difíciles de probar, mantener y escalar.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué elemento se usa comúnmente en la capa de presentación para representar datos en APIs REST?",
    code: "",
    options: ["DTO (Data Transfer Object)", "Entity", "Service", "Repository"],
    answer: 0,
    explanation:
      "Los DTOs permiten exponer solo los datos necesarios al cliente, evitando filtrar la estructura interna del modelo.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una desventaja de tener muchas capas mal definidas en un sistema?",
    code: "",
    options: [
      "Mayor desacoplamiento entre componentes",
      "Mejor control del ciclo de vida del objeto",
      "Aumento del rendimiento en producción",
      "Mayor complejidad y menor claridad en la arquitectura",
    ],
    answer: 3,
    explanation:
      "Si las capas no están bien definidas, el sistema puede volverse confuso, difícil de mantener y propenso a errores.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Por qué no es recomendable que los servicios retornen entidades JPA directamente?",
    code: "",
    options: [
      "Porque las entidades son más lentas que los DTOs",
      "Porque pueden exponer relaciones innecesarias o sensibles",
      "Porque no funcionan fuera de Spring",
      "Porque necesitan anotaciones adicionales",
    ],
    answer: 1,
    explanation:
      "Retornar entidades directamente puede exponer datos sensibles o estructuras internas no necesarias en la respuesta.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Qué capa suele aplicar reglas de autorización y autenticación?",
    code: "",
    options: [
      "Capa de Persistencia",
      "Capa de Seguridad",
      "Capa de Servicio",
      "Capa de Infraestructura",
    ],
    answer: 1,
    explanation:
      "La capa de seguridad es responsable de manejar autenticación y autorización, usando herramientas como Spring Security.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Qué define mejor a un Anti-Pattern en arquitectura por capas?",
    code: "",
    options: [
      "Un patrón ampliamente aceptado y probado",
      "Una práctica que rompe principios de diseño como SRP o SoC",
      "Una forma eficiente de acelerar el desarrollo",
      "Una estrategia para desacoplar la lógica de presentación",
    ],
    answer: 1,
    explanation:
      "Un anti-pattern es una mala práctica que parece útil al principio, pero termina afectando negativamente la calidad del software.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de acoplamiento es más común cuando la lógica de presentación conoce los detalles de persistencia?",
    code: "",
    options: [
      "Acoplamiento débil",
      "Acoplamiento fuerte",
      "Acoplamiento lógico",
      "Acoplamiento funcional",
    ],
    answer: 1,
    explanation:
      "Cuando capas no adyacentes están conectadas directamente, se produce un acoplamiento fuerte, dificultando cambios y mantenimiento.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué técnica ayuda a desacoplar aún más las capas en una arquitectura Java?",
    code: "",
    options: [
      "Anotaciones JPA en los DTOs",
      "Uso de beans estáticos",
      "Inyección de dependencias mediante interfaces",
      "Acceso directo al EntityManager desde los controladores",
    ],
    answer: 2,
    explanation:
      "Inyectar interfaces en lugar de clases concretas promueve un diseño flexible, testeable y desacoplado.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },

  {
    question:
      "¿Cuál de las siguientes afirmaciones es cierta en una arquitectura en capas bien estructurada?",
    code: "",
    options: [
      "La capa de presentación puede invocar directamente a la capa de persistencia",
      "Las capas deben ser lo más acopladas posible para mejorar el rendimiento",
      "Cada capa debe conocer solo a la capa inmediatamente inferior",
      "La capa de servicio debe manejar directamente la interfaz de usuario",
    ],
    answer: 2,
    explanation:
      "En una arquitectura bien estructurada, cada capa solo interactúa con la inmediatamente inferior para reducir el acoplamiento y aumentar la cohesión.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito de los DTO en una arquitectura por capas?",
    code: "",
    options: [
      "Persistir datos en la base de datos",
      "Mapear automáticamente los controladores REST",
      "Transportar datos entre capas sin exponer las entidades",
      "Reemplazar completamente las entidades JPA",
    ],
    answer: 2,
    explanation:
      "Los DTO (Data Transfer Objects) se usan para transportar datos entre capas sin exponer la estructura interna de las entidades.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En una arquitectura por capas, ¿cuál de los siguientes patrones facilita la implementación de la lógica de negocio reutilizable?",
    code: "",
    options: ["Factory Method", "Repository", "Service", "Decorator"],
    answer: 2,
    explanation:
      "El patrón Service se utiliza en la capa de servicio para encapsular y reutilizar la lógica de negocio del sistema.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el mayor riesgo de permitir que la capa de presentación contenga lógica de negocio?",
    code: "",
    options: [
      "Reducción de latencia",
      "Mayor flexibilidad",
      "Duplicación de lógica y dificultad de pruebas",
      "Compatibilidad con otras capas",
    ],
    answer: 2,
    explanation:
      "La lógica de negocio en la capa de presentación puede llevar a duplicación de código, baja cohesión y pruebas complicadas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes responsabilidades NO pertenece a la capa de persistencia?",
    code: "",
    options: [
      "Acceso a base de datos",
      "Persistencia de entidades",
      "Definición de entidades JPA",
      "Aplicación de reglas de negocio",
    ],
    answer: 3,
    explanation:
      "Las reglas de negocio son responsabilidad de la capa de servicio o dominio, no de la capa de persistencia.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio de diseño promueve la separación de capas en una arquitectura?",
    code: "",
    options: ["DRY", "YAGNI", "SoC (Separación de Responsabilidades)", "KISS"],
    answer: 2,
    explanation:
      "SoC (Separation of Concerns) promueve la división de un sistema en partes distintas con responsabilidades bien definidas, como en la arquitectura por capas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el papel de los controladores en Spring MVC?",
    code: "",
    options: [
      "Son responsables de acceder directamente a la base de datos",
      "Contienen la lógica de presentación y deben comunicarse con la capa de servicio",
      "Encapsulan la lógica del dominio",
      "Persisten entidades usando JPA",
    ],
    answer: 1,
    explanation:
      "Los controladores en Spring MVC reciben peticiones del cliente, gestionan datos de entrada y delegan en la capa de servicio la lógica de negocio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa debería gestionar las transacciones en una arquitectura por capas usando Spring?",
    code: "",
    options: [
      "Capa de presentación",
      "Capa de servicio",
      "Capa de dominio",
      "Capa de configuración",
    ],
    answer: 1,
    explanation:
      "La capa de servicio es la más adecuada para gestionar transacciones, ya que orquesta las operaciones que afectan múltiples componentes.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el principal beneficio de utilizar interfaces en los servicios y repositorios?",
    code: "",
    options: [
      "Reducir el número de archivos",
      "Evitar errores de compilación",
      "Facilitar el mocking y desacoplar implementaciones",
      "Aumentar el acoplamiento entre capas",
    ],
    answer: 2,
    explanation:
      "El uso de interfaces permite desacoplar el contrato de la implementación, facilitando pruebas y cambios sin afectar el resto del sistema.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Por qué es importante que la capa de presentación no devuelva entidades JPA directamente?",
    code: "",
    options: [
      "Porque JPA no funciona bien con controladores REST",
      "Porque puede generar ciclos de referencia o exponer datos sensibles",
      "Porque no se pueden serializar",
      "Porque rompe el patrón MVC",
    ],
    answer: 1,
    explanation:
      "Exponer entidades JPA puede revelar relaciones bidireccionales, campos sensibles o detalles internos que no deben compartirse en APIs públicas.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa debería conocer el detalle de la tecnología de persistencia (por ejemplo, JPA)?",
    code: "",
    options: [
      "Capa de presentación",
      "Capa de dominio",
      "Capa de persistencia",
      "Capa de configuración",
    ],
    answer: 2,
    explanation:
      "Solo la capa de persistencia debe conocer los detalles de la tecnología usada para almacenar los datos, como JPA, Hibernate, etc.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes patrones se usa comúnmente para desacoplar servicios de infraestructura?",
    code: "",
    options: ["Bridge", "Factory", "Adapter", "Strategy"],
    answer: 2,
    explanation:
      "El patrón Adapter permite que una interfaz existente se adapte a la interfaz esperada por una capa, facilitando el desacoplamiento.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué capa puede contener validaciones simples como campos obligatorios o formatos de datos?",
    code: "",
    options: [
      "Capa de presentación",
      "Capa de persistencia",
      "Capa de infraestructura",
      "Capa de configuración",
    ],
    answer: 0,
    explanation:
      "Validaciones simples relacionadas con la entrada del usuario (por ejemplo, longitud, formato, campos requeridos) se realizan comúnmente en la capa de presentación.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En una arquitectura por capas bien definida, ¿qué capa debería contener la lógica de envío de correos electrónicos?",
    code: "",
    options: [
      "Capa de servicio",
      "Capa de presentación",
      "Capa de dominio",
      "Capa de persistencia",
    ],
    answer: 0,
    explanation:
      "El envío de correos es una acción que forma parte de un proceso de negocio y debe orquestarse desde la capa de servicio.",
    subtheme: "Arquitectura por capas",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio describe la Inversión de Control (IoC) en el contexto de Spring?",
    options: [
      "Los objetos de alto nivel deben depender de objetos de bajo nivel.",
      "El flujo de control se transfiere desde el código del desarrollador hacia el contenedor.",
      "Los objetos de bajo nivel deben depender de objetos de alto nivel.",
      "El flujo de control se mantiene bajo el control del desarrollador.",
    ],
    answer: 1,
    explanation:
      "La Inversión de Control es el principio por el cual el flujo de control de la aplicación es manejado por el contenedor, no por el código del desarrollador. Esto permite una mayor flexibilidad y desacoplamiento.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal ventaja de utilizar Inversión de Control (IoC) en un framework como Spring?",
    options: [
      "Facilita la integración con bases de datos.",
      "Reduce la cantidad de código repetido.",
      "Mejora el rendimiento de la aplicación.",
      "Desacopla las dependencias entre componentes.",
    ],
    answer: 3,
    explanation:
      "IoC permite desacoplar los componentes de una aplicación al delegar la creación y gestión de objetos a un contenedor, lo que facilita el mantenimiento y la prueba de la aplicación.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el principal contenedor IoC utilizado en Spring Framework?",
    options: [
      "Spring Context",
      "Spring BeanFactory",
      "Spring ApplicationContext",
      "Spring IoC Container",
    ],
    answer: 2,
    explanation:
      "El contenedor IoC de Spring se llama **ApplicationContext** y es responsable de la creación, configuración y gestión de los beans.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué anotación se usa en Spring para indicar que una clase debe ser gestionada como un bean en el contenedor IoC?",
    options: ["@Component", "@Controller", "@Bean", "@Autowired"],
    answer: 0,
    explanation:
      "La anotación **@Component** se usa para definir un bean que será gestionado por el contenedor IoC de Spring.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cómo se inyecta una dependencia en una clase en Spring utilizando IoC?",
    code: "public class MyClass {\n    @Autowired\n    private MyDependency myDependency;\n}",
    options: [
      "Usando el constructor de la clase.",
      "Usando el método setter.",
      "Usando la anotación @Autowired.",
      "Usando el método main.",
    ],
    answer: 2,
    explanation:
      "La anotación **@Autowired** en Spring se usa para inyectar automáticamente dependencias en una clase, ya sea a través de un constructor, un setter o un campo.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de Inversión de Control se refiere a la inyección de dependencias a través de los constructores en Spring?",
    options: [
      "Inyección por campo.",
      "Inyección por constructor.",
      "Inyección por setter.",
      "Inyección automática.",
    ],
    answer: 1,
    explanation:
      "La **inyección por constructor** es un tipo de Inversión de Control donde las dependencias se proporcionan a través del constructor de la clase.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el comportamiento predeterminado de los beans en Spring respecto al ciclo de vida en el contenedor IoC?",
    options: [
      "Son creados en el momento de la carga de la clase.",
      "Son creados una vez al inicio y reutilizados siempre.",
      "Son creados cada vez que se hacen necesarios.",
      "Son creados solo si son solicitados explícitamente.",
    ],
    answer: 2,
    explanation:
      "Los beans en Spring son gestionados por el contenedor IoC, y su ciclo de vida por defecto es el de **singleton**, es decir, son creados una vez y reutilizados cada vez que se requieren.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre la Inversión de Control (IoC) y la Inyección de Dependencias (DI)?",
    options: [
      "IoC es un patrón, y DI es una técnica.",
      "IoC es una técnica, y DI es un patrón.",
      "IoC y DI son términos sinónimos.",
      "IoC es utilizado solo en Spring, y DI solo en JavaEE.",
    ],
    answer: 0,
    explanation:
      "La **Inversión de Control (IoC)** es un patrón de diseño, mientras que **Inyección de Dependencias (DI)** es una técnica utilizada para implementar IoC, en la que las dependencias se inyectan en los objetos en lugar de que ellos las creen.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Qué tipo de bean es el siguiente en Spring?",
    code: "\n```java\n@Configuration\npublic class AppConfig {\n  @Bean\n  public MyService myService() {\n    return new MyService();\n  }\n}```",
    options: ["Singleton.", "Prototype.", "Request-scoped.", "Session-scoped."],
    answer: 0,
    explanation:
      "El bean definido con la anotación **@Bean** en una clase marcada con **@Configuration** tiene el alcance predeterminado de **singleton**, lo que significa que será creado una sola vez y compartido entre todas las instancias que lo necesiten.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En el contexto de Spring, ¿qué significa que un bean esté configurado con un alcance de **prototype**?",
    options: [
      "Un nuevo bean será creado cada vez que se inyecte.",
      "El bean será compartido entre todas las instancias de la aplicación.",
      "El bean se creará solo una vez al iniciar la aplicación.",
      "El bean será compartido solo dentro de una sesión HTTP.",
    ],
    answer: 0,
    explanation:
      "Cuando un bean tiene el alcance **prototype**, Spring crea una nueva instancia del bean cada vez que se solicita, en lugar de compartir una única instancia como en el caso del alcance **singleton**.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué anotación se usa para configurar un método como un **bean** en Spring?",
    options: ["@Component", "@Bean", "@Autowired", "@Controller"],
    answer: 1,
    explanation:
      "La anotación **@Bean** se utiliza para definir un método como un bean dentro de una clase de configuración en Spring, lo que permite que Spring gestione la creación y configuración del bean.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En el siguiente código, ¿qué sucederá si se elimina la anotación `@Autowired`?",
    code: "`java\n@Component\npublic class MyService {\n  private MyRepository myRepository;\n  @Autowired\n  public MyService(MyRepository myRepository) {\n    this.myRepository = myRepository;\n  }\n}`",
    options: [
      "Spring no podrá inyectar la dependencia automáticamente.",
      "El código compilará sin problemas.",
      "Spring inyectará la dependencia automáticamente.",
      "El bean será creado como singleton.",
    ],
    answer: 0,
    explanation:
      "Si se elimina la anotación **@Autowired**, Spring no podrá inyectar la dependencia de **MyRepository** automáticamente en el constructor, y el contenedor de Spring lanzará un error al intentar crear el bean.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre si un bean en Spring tiene un ciclo de vida definido como **@Scope(prototype)** y es inyectado en un componente singleton?",
    options: [
      "El bean prototype se creará cada vez que sea inyectado.",
      "El bean prototype se compartirá entre todos los componentes singleton.",
      "Spring lanzará un error de ciclo de vida.",
      "El bean prototype no podrá ser inyectado.",
    ],
    answer: 0,
    explanation:
      "Cuando un bean con **@Scope(prototype)** es inyectado en un bean singleton, Spring crea una nueva instancia del bean prototype cada vez que se inyecta en el bean singleton, asegurando que no se comparta entre instancias.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué significa que un bean en Spring tenga un ciclo de vida basado en el contexto HTTP?",
    options: [
      "El bean es creado al inicio de la aplicación.",
      "El bean se crea una vez por cada solicitud HTTP.",
      "El bean se crea una vez por cada sesión de usuario.",
      "El bean es creado solo si es necesario.",
    ],
    answer: 1,
    explanation:
      "Cuando un bean tiene un ciclo de vida basado en el contexto HTTP, se crea una nueva instancia del bean cada vez que se realiza una solicitud HTTP, y se destruye al finalizar la solicitud.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },

  {
    question:
      "¿Qué ocurre si un bean definido con el alcance **prototype** es inyectado en un bean definido como **singleton**?",
    options: [
      "Spring creará una nueva instancia del bean prototype para cada inyección.",
      "Spring usará la misma instancia del bean prototype para todas las inyecciones.",
      "Spring lanzará un error de ciclo de vida.",
      "Spring mantendrá una instancia de bean prototype para todo el contexto de la aplicación.",
    ],
    answer: 0,
    explanation:
      "Cuando un bean **prototype** es inyectado en un bean **singleton**, Spring crea una nueva instancia del bean **prototype** cada vez que se realiza la inyección.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Qué significa la anotación **@Primary** en Spring?",
    options: [
      "Indica que el bean es el primero en ser creado en el contexto.",
      "Indica que este bean debe ser utilizado por defecto cuando existen múltiples candidatos.",
      "Indica que el bean es de alcance **singleton**.",
      "Indica que el bean no puede ser inyectado automáticamente.",
    ],
    answer: 1,
    explanation:
      "La anotación **@Primary** se utiliza para indicar que un bean debe ser el elegido por defecto cuando existen múltiples candidatos para la inyección de dependencias.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cómo se puede configurar un bean para que sea creado solo cuando sea realmente necesario en Spring?",
    options: [
      "Usando la anotación **@Lazy**.",
      "Configurando el bean con el alcance **prototype**.",
      "Asignando el bean al contexto de **singleton**.",
      "Usando la anotación **@Primary**.",
    ],
    answer: 0,
    explanation:
      "La anotación **@Lazy** en Spring configura un bean para que sea creado solo cuando se necesite, es decir, cuando sea solicitado por primera vez, en lugar de al inicio de la aplicación.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "En Spring, ¿cuál es el propósito del método `@PostConstruct`?",
    options: [
      "Se utiliza para inicializar los beans después de que todos los recursos hayan sido inyectados.",
      "Se ejecuta antes de la inyección de dependencias.",
      "Se usa para destruir el bean cuando se cierra la aplicación.",
      "Se ejecuta durante el inicio del contenedor Spring.",
    ],
    answer: 0,
    explanation:
      "La anotación **@PostConstruct** se utiliza para ejecutar un método justo después de que todos los recursos y dependencias del bean hayan sido inyectados, pero antes de que el bean esté disponible para su uso.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué anotación en Spring se usa para inyectar una dependencia en un campo sin necesidad de un setter o constructor?",
    options: ["@Autowired", "@Inject", "@Value", "@Qualifier"],
    answer: 0,
    explanation:
      "La anotación **@Autowired** permite inyectar dependencias en los campos, métodos o constructores de una clase sin la necesidad de definir setters explícitos.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la diferencia clave entre los contenedores IoC de Spring y Java EE?",
    options: [
      "Spring se basa en XML, mientras que Java EE usa anotaciones.",
      "Spring no tiene soporte para inyección de dependencias.",
      "Spring utiliza un enfoque más flexible y liviano para la inyección de dependencias.",
      "Java EE es más adecuado para microservicios, mientras que Spring no lo es.",
    ],
    answer: 2,
    explanation:
      "Spring se destaca por ser más flexible y liviano en comparación con Java EE. Ofrece una mayor capacidad de configuración, más allá del uso exclusivo de XML, y utiliza anotaciones para la configuración de dependencias.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede cuando un bean es marcado con la anotación **@Scope('session')**?",
    options: [
      "El bean será creado una vez por cada sesión HTTP.",
      "El bean será compartido entre todas las sesiones HTTP.",
      "El bean se creará una sola vez para toda la aplicación.",
      "El bean será destruido al final de cada petición.",
    ],
    answer: 0,
    explanation:
      "La anotación **@Scope('session')** indica que el bean se creará una vez por cada sesión HTTP y será destruido al final de la sesión.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Qué hace la anotación **@Qualifier** en Spring?",
    options: [
      "Especifica el nombre del bean a inyectar cuando existen múltiples candidatos.",
      "Indica que un bean debe ser destruido al final de la sesión.",
      "Especifica el tipo de bean a inyectar.",
      "Crea una nueva instancia de un bean cada vez que se inyecta.",
    ],
    answer: 0,
    explanation:
      "La anotación **@Qualifier** se usa junto con **@Autowired** para especificar cuál de los posibles beans de un tipo dado debe ser inyectado cuando existen múltiples candidatos.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué propósito cumple el patrón de diseño **Inversión de Control** en una aplicación de Spring?",
    options: [
      "Proporciona un enfoque para manejar la creación de dependencias dentro de la aplicación.",
      "Desacopla el modelo de datos de la lógica de la aplicación.",
      "Controla las excepciones dentro de la aplicación.",
      "Gestiona las transacciones de base de datos automáticamente.",
    ],
    answer: 0,
    explanation:
      "La **Inversión de Control** permite desacoplar las dependencias en una aplicación al delegar la creación y gestión de los objetos al contenedor de Spring, en lugar de que el desarrollador las cree manualmente.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué anotación se usa en Spring para definir un método que creará un bean de forma explícita?",
    options: ["@Bean", "@Component", "@Repository", "@Service"],
    answer: 0,
    explanation:
      "La anotación **@Bean** se utiliza en una clase de configuración para definir un método que creará un bean en el contenedor de Spring. Esta anotación es parte del enfoque de configuración basada en Java.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si un bean tiene una dependencia marcada con la anotación **@Autowired** pero no hay una instancia disponible en el contexto?",
    options: [
      "Spring lanzará una excepción **NoSuchBeanDefinitionException**.",
      "Spring inyectará automáticamente un bean por defecto.",
      "El bean será creado sin sus dependencias.",
      "Spring configurará la dependencia con valores por defecto.",
    ],
    answer: 0,
    explanation:
      "Si un bean tiene una dependencia marcada con **@Autowired** y no existe una instancia en el contexto, Spring lanzará una excepción **NoSuchBeanDefinitionException** indicando que no se puede encontrar el bean requerido.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué indica la anotación **@Configuration** en una clase de Spring?",
    options: [
      "La clase es un contenedor que define beans mediante métodos anotados con **@Bean**.",
      "La clase contiene la configuración de la base de datos.",
      "La clase gestiona la configuración de seguridad.",
      "La clase define las configuraciones del servidor.",
    ],
    answer: 0,
    explanation:
      "La anotación **@Configuration** indica que la clase es una fuente de configuración para Spring, y que define beans que serán gestionados por el contenedor IoC mediante métodos anotados con **@Bean**.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de contenedor IoC es más adecuado para aplicaciones pequeñas o microservicios?",
    options: [
      "Spring ApplicationContext",
      "Java EE Application Server",
      "Spring Boot",
      "Spring Cloud",
    ],
    answer: 2,
    explanation:
      "Spring Boot es una versión liviana de Spring que facilita la creación de microservicios y aplicaciones pequeñas, ya que simplifica la configuración del contenedor IoC y otros aspectos de la aplicación.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En el contexto de Spring, ¿cómo se especifica que un bean debe tener un ciclo de vida **transient**?",
    options: [
      "Usando la anotación **@Scope('transient')**.",
      "Usando la anotación **@Lazy**.",
      "Usando la anotación **@RequestScope**.",
      "Usando la anotación **@SessionScope**.",
    ],
    answer: 0,
    explanation:
      "En Spring, la anotación **@Scope('transient')** no es válida. Sin embargo, los beans que tienen un ciclo de vida corto, como los definidos en el contexto HTTP, se pueden manejar usando anotaciones como **@RequestScope** o **@SessionScope**.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué anotación se utiliza en Spring para crear un bean especializado que se debe ejecutar solo una vez, incluso cuando el contenedor se reinicie?",
    options: [
      "@Singleton",
      "@Lazy",
      "@Scope('singleton')",
      "@Scope('application')",
    ],
    answer: 2,
    explanation:
      "La anotación **@Scope('singleton')** indica que el bean se creará una sola vez, y la misma instancia será utilizada a lo largo de toda la aplicación, incluso si el contenedor se reinicia.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cómo se denomina el proceso de inyección de dependencias en Spring?",
    options: [
      "Autowiring",
      "Dependency Injection",
      "Dependency Mapping",
      "Bean Wiring",
    ],
    answer: 1,
    explanation:
      "El proceso mediante el cual los objetos o beans se inyectan automáticamente en las clases es denominado **Dependency Injection** (DI) o Inyección de Dependencias, y Spring facilita este proceso a través de anotaciones como **@Autowired**.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede cuando se utiliza la anotación **@Autowired** con el atributo **required=false**?",
    options: [
      "Indica que la inyección de la dependencia no es obligatoria.",
      "Indica que el bean no puede ser inyectado en absoluto.",
      "Indica que la dependencia debe ser provista manualmente.",
      "Indica que el bean se inyectará solo si está disponible.",
    ],
    answer: 0,
    explanation:
      "Cuando se usa **required=false** en **@Autowired**, Spring no lanzará una excepción si no se encuentra el bean correspondiente; simplemente lo inyectará como **null** si no está disponible.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal ventaja de usar el patrón **Inversión de Control (IoC)** en una aplicación?",
    options: [
      "Reduce el acoplamiento entre componentes y mejora la modularidad.",
      "Hace que las aplicaciones sean más rápidas y eficientes.",
      "Reduce el tiempo de desarrollo de la aplicación.",
      "Aumenta la complejidad de la configuración del sistema.",
    ],
    answer: 0,
    explanation:
      "La principal ventaja del patrón **IoC** es que reduce el acoplamiento entre componentes y mejora la modularidad, lo que hace que el código sea más flexible, mantenible y fácil de probar.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué sucede si dos beans de diferentes tipos se inyectan con la misma anotación **@Autowired** en Spring?",
    options: [
      "Spring inyecta el primero que encuentre en el contenedor.",
      "Spring no podrá inyectar ninguna de las dependencias.",
      "Spring inyectará el bean que tenga el nombre más largo.",
      "Spring inyectará ambas dependencias sin problemas.",
    ],
    answer: 1,
    explanation:
      "Si hay dos beans de diferentes tipos que podrían ser inyectados en el mismo punto y no se especifica cual debe ser inyectado, Spring lanzará una excepción debido a la ambigüedad. Para solucionarlo, se puede utilizar la anotación **@Qualifier** para especificar qué bean debe ser inyectado.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de beans se deben utilizar en una arquitectura basada en microservicios en Spring?",
    options: [
      "Beans **singleton**",
      "Beans **prototype**",
      "Beans con un alcance **session**",
      "Beans con un alcance **request**",
    ],
    answer: 0,
    explanation:
      "En una arquitectura basada en microservicios, los beans **singleton** son preferidos, ya que se crean solo una vez y se mantienen durante toda la vida útil de la aplicación, lo que ayuda a mantener la eficiencia y evitar sobrecargas innecesarias.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En Spring, ¿cómo se define una interfaz para un bean y su implementación usando Inversión de Control?",
    options: [
      "Definiendo el bean con un **@Component** y utilizando **@Autowired** en la implementación.",
      "Definiendo ambos bean y su interfaz con la anotación **@Bean**.",
      "Definiendo la interfaz con **@Service** y la implementación con **@Component**.",
      "Definiendo un bean con **@Configuration** y utilizando **@Inject**.",
    ],
    answer: 0,
    explanation:
      "En Spring, se puede definir un bean de interfaz con **@Component** y luego inyectar su implementación con **@Autowired** en cualquier clase que lo requiera, gracias al contenedor IoC de Spring.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre cuando se utiliza **@Qualifier** junto con **@Autowired** en Spring?",
    options: [
      "Especifica cuál de varios beans debe ser inyectado cuando hay más de uno de tipo similar.",
      "Hace que la inyección de dependencias sea más rápida.",
      "Anula cualquier configuración del bean ya existente.",
      "Hace que Spring elija automáticamente el mejor bean.",
    ],
    answer: 0,
    explanation:
      "La anotación **@Qualifier** se utiliza para especificar explícitamente cuál de los múltiples beans disponibles de un tipo similar debe ser inyectado, resolviendo ambigüedades.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "En Spring, ¿cuál es la diferencia entre **@Component**, **@Service** y **@Repository**?",
    options: [
      "No hay diferencia; son simplemente anotaciones para definir un bean.",
      "**@Component** es una anotación genérica, mientras que **@Service** y **@Repository** se usan para servicios y repositorios, respectivamente.",
      "**@Component** se utiliza solo para clases de configuración.",
      "**@Service** es solo para clases de repositorios de datos.",
    ],
    answer: 1,
    explanation:
      "Las anotaciones **@Service**, **@Repository**, y **@Component** tienen el mismo propósito (registrar el bean en el contenedor de Spring), pero se utilizan en diferentes contextos: **@Service** para clases de servicio, **@Repository** para clases de acceso a datos, y **@Component** es genérica.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la diferencia principal entre el alcance **singleton** y **prototype** en Spring?",
    options: [
      "Un bean **singleton** es creado una sola vez y compartido entre todas las peticiones, mientras que un bean **prototype** se crea cada vez que se inyecta.",
      "Un bean **prototype** es creado una sola vez y compartido entre todas las peticiones, mientras que un bean **singleton** se crea cada vez que se inyecta.",
      "Un bean **singleton** es creado para cada sesión de usuario, mientras que un bean **prototype** es creado al iniciar la aplicación.",
      "Un bean **singleton** es creado cuando la aplicación arranca, mientras que un bean **prototype** no puede ser utilizado.",
    ],
    answer: 0,
    explanation:
      "En Spring, un bean **singleton** es creado una sola vez y compartido entre todas las instancias de la aplicación, mientras que un bean **prototype** se crea cada vez que se inyecta.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre cuando un bean **prototype** es inyectado en un bean **singleton**?",
    options: [
      "Cada vez que se inyecta el bean **prototype**, Spring creará una nueva instancia del mismo.",
      "Spring reutiliza la instancia del bean **prototype**.",
      "Spring lanza una excepción porque no puede manejar ambos tipos de alcance.",
      "Spring hace que el bean **prototype** sea un singleton.",
    ],
    answer: 0,
    explanation:
      "Cuando un bean **prototype** es inyectado en un bean **singleton**, Spring creará una nueva instancia del bean **prototype** cada vez que se realice la inyección, ya que el ciclo de vida de ambos beans es diferente.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Cuál es el propósito de usar **@Scope** en Spring?",
    options: [
      "Definir el ciclo de vida y el alcance de los beans.",
      "Marcar los beans como visibles solo dentro de la aplicación.",
      "Destruir los beans cuando no se necesiten.",
      "Inyectar dependencias en el constructor de los beans.",
    ],
    answer: 0,
    explanation:
      "La anotación **@Scope** en Spring se utiliza para definir el ciclo de vida y el alcance de los beans, especificando si deben ser únicos para cada solicitud, sesión o para la aplicación completa.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Cómo se define un bean con un alcance **request** en Spring?",
    options: [
      "Usando la anotación **@Scope('request')**.",
      "Usando la anotación **@RequestMapping**.",
      "Usando la anotación **@Service**.",
      "Usando la anotación **@Bean**.",
    ],
    answer: 0,
    explanation:
      "Para definir un bean con un alcance **request** en Spring, se usa la anotación **@Scope('request')**, lo que hace que el bean sea creado una vez por cada solicitud HTTP.",
    subtheme: "Inversión de Control (IoC)",
    group: "Java Enterprise",
    level: "Experto",
  },
  {
    question: "¿Cuál es el objetivo principal del patrón GRASP 'Expert'?",
    code: "",
    options: [
      "Minimizar la cantidad de clases en el sistema",
      "Asignar responsabilidades a la clase que tiene la información necesaria para cumplirla",
      "Crear nuevas clases para cada funcionalidad",
      "Reducir la visibilidad de los métodos",
    ],
    answer: 1,
    explanation:
      "El patrón 'Expert' sugiere asignar responsabilidades a la clase que posee la información necesaria para realizarlas, promoviendo cohesión y diseño lógico.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes patrones GRASP está enfocado en reducir la dependencia entre clases?",
    code: "",
    options: ["Controller", "Polymorphism", "Low Coupling", "Creator"],
    answer: 2,
    explanation:
      "Low Coupling busca reducir las dependencias entre clases para mejorar la mantenibilidad, flexibilidad y facilidad de testeo.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP recomienda delegar la creación de objetos a la clase que contiene o usa esos objetos?",
    code: "",
    options: ["Pure Fabrication", "Creator", "High Cohesion", "Expert"],
    answer: 1,
    explanation:
      "Creator recomienda asignar la responsabilidad de crear una instancia de una clase a la clase que tiene una relación cercana con la creada, como contenerla o usarla.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una consecuencia de ignorar el patrón High Cohesion en una clase?",
    code: "",
    options: [
      "La clase se vuelve más eficiente",
      "La clase se especializa demasiado",
      "La clase tiene demasiadas responsabilidades y es difícil de mantener",
      "La clase se desacopla del sistema",
    ],
    answer: 2,
    explanation:
      "Ignorar High Cohesion puede llevar a clases con muchas responsabilidades no relacionadas, haciendo que el sistema sea difícil de entender y mantener.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP se relaciona más directamente con la elección de usar interfaces en lugar de implementaciones concretas?",
    code: "",
    options: ["Controller", "Indirection", "Polymorphism", "Reuse"],
    answer: 2,
    explanation:
      "Polymorphism permite tratar objetos diferentes de forma uniforme mediante interfaces, favoreciendo la extensibilidad y flexibilidad del sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de estos fragmentos aplica el patrón GRASP 'Controller'?",
    code: "public class PedidoController {\n    public void procesarPedido(Pedido pedido) {\n        pedido.confirmar();\n    }\n}",
    options: [
      "El código no aplica ningún patrón GRASP",
      "El método debería estar en la clase Pedido, no en PedidoController",
      "La clase PedidoController actúa como intermediario entre la UI y la lógica de dominio",
      "La lógica debería estar en la interfaz gráfica",
    ],
    answer: 2,
    explanation:
      "Controller asigna la responsabilidad de coordinar acciones del sistema a un objeto intermediario que representa un caso de uso del sistema, como PedidoController.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP se utiliza para evitar asignar responsabilidades a clases ya sobrecargadas?",
    code: "",
    options: ["Pure Fabrication", "Expert", "Low Coupling", "Reuse"],
    answer: 0,
    explanation:
      "Pure Fabrication propone crear clases artificiales cuando ninguna clase del dominio puede asumir una responsabilidad sin violar otros principios como cohesión o acoplamiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el beneficio principal del patrón GRASP 'Indirection'?",
    code: "",
    options: [
      "Facilitar la herencia múltiple",
      "Desacoplar componentes introduciendo intermediarios",
      "Eliminar clases abstractas del sistema",
      "Reducir el tiempo de ejecución",
    ],
    answer: 1,
    explanation:
      "Indirection promueve la introducción de intermediarios para reducir el acoplamiento directo entre componentes y mejorar la flexibilidad.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cómo ayuda el patrón GRASP 'Reuse' al diseño de software?",
    code: "",
    options: [
      "Evita usar interfaces innecesarias",
      "Fomenta la duplicación para facilitar el aislamiento de código",
      "Promueve el aprovechamiento de clases ya existentes para nuevas responsabilidades",
      "Impide la extensión de clases base",
    ],
    answer: 2,
    explanation:
      "Reuse busca reutilizar clases existentes con lógica o datos relevantes para evitar duplicación y mantener la cohesión.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP fomenta delegar comportamiento a subclases para cumplir con el principio de abierto/cerrado?",
    code: "",
    options: ["Reuse", "Polymorphism", "Expert", "Creator"],
    answer: 1,
    explanation:
      "Polymorphism permite variar el comportamiento mediante subclases, ayudando a mantener el código abierto para extensión y cerrado para modificación.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP podría justificar la creación de un repositorio en una arquitectura DDD?",
    code: "",
    options: ["Controller", "Creator", "Pure Fabrication", "Expert"],
    answer: 2,
    explanation:
      "Pure Fabrication justifica la existencia de clases como repositorios que no forman parte del dominio pero encapsulan comportamientos útiles (como persistencia).",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP está más directamente relacionado con el principio DRY (Don't Repeat Yourself)?",
    code: "",
    options: ["Reuse", "Indirection", "Polymorphism", "Controller"],
    answer: 0,
    explanation:
      "El patrón Reuse promueve el uso de clases ya existentes en lugar de duplicar lógica, alineándose con el principio DRY.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es un riesgo de aplicar el patrón 'Expert' de forma excesiva?",
    code: "",
    options: [
      "Demasiada especialización de clases",
      "Sobrecarga de responsabilidades en una sola clase",
      "Dependencias cíclicas en la arquitectura",
      "Pérdida de polimorfismo",
    ],
    answer: 1,
    explanation:
      "Si se aplica Expert sin control, puede concentrarse demasiada lógica en una clase, violando el principio de cohesión y haciendo difícil su mantenimiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP busca minimizar la cantidad de relaciones directas entre clases?",
    code: "",
    options: ["Indirection", "Reuse", "High Cohesion", "Polymorphism"],
    answer: 0,
    explanation:
      "Indirection introduce intermediarios para reducir las dependencias directas entre clases y facilitar la evolución del sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP se enfoca en la asignación de responsabilidades relacionadas a un caso de uso del sistema?",
    code: "",
    options: ["Expert", "Controller", "Creator", "Pure Fabrication"],
    answer: 1,
    explanation:
      "Controller asigna la responsabilidad de manejar una operación del sistema a una clase que actúa como coordinadora o fachada del caso de uso.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes principios GRASP recomienda crear una clase solo para mantener bajo el acoplamiento cuando no existe una clase natural para asumir una responsabilidad?",
    code: "",
    options: [
      "Indirection",
      "Low Coupling",
      "Information Expert",
      "Controller",
    ],
    answer: 0,
    explanation:
      "El patrón 'Indirection' sugiere la introducción de una clase intermedia para desacoplar componentes, especialmente útil cuando no hay un objeto natural para asumir la responsabilidad.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "En el contexto de GRASP, ¿cuál es la consecuencia de una alta cohesión en una clase?",
    code: "",
    options: [
      "Mayor reutilización pero menor legibilidad",
      "Mejor mantenimiento y comprensión",
      "Mayor acoplamiento con otras clases",
      "Mayor dependencia entre módulos",
    ],
    answer: 1,
    explanation:
      "La alta cohesión indica que una clase está centrada en una única responsabilidad, facilitando su mantenimiento y comprensión.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál patrón GRASP puede aplicarse para delegar responsabilidades entre objetos utilizando herencia o interfaces?",
    code: "",
    options: ["Polymorphism", "Controller", "Creator", "Indirection"],
    answer: 0,
    explanation:
      "El patrón 'Polymorphism' permite asignar responsabilidad a la clase adecuada basada en el tipo de objeto, fomentando el uso de interfaces o clases base.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes fragmentos de código refleja una mala aplicación del patrón 'Controller'?",
    code: "class OrderController {\n  void handleOrder() {\n    Order order = new Order();\n    order.calculate();\n    order.save();\n  }\n}",
    options: [
      "Está violando SRP al asumir demasiadas responsabilidades",
      "Aplica bien el patrón Controller al orquestar objetos",
      "Sigue el principio de baja cohesión",
      "Usa correctamente el patrón de Información Experta",
    ],
    answer: 0,
    explanation:
      "El controlador no debería asumir responsabilidades como 'calcular' o 'guardar', ya que rompe el principio de responsabilidad única.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP es más útil para decidir qué clase debería instanciar otras clases?",
    code: "",
    options: ["Creator", "Controller", "Pure Fabrication", "High Cohesion"],
    answer: 0,
    explanation:
      "El patrón 'Creator' establece que una clase debe crear instancias de otras si tiene una relación fuerte con ellas.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el principal beneficio de aplicar 'Pure Fabrication' en una arquitectura Java empresarial?",
    code: "",
    options: [
      "Reducir la cohesión",
      "Aumentar el acoplamiento",
      "Promover reutilización y separación de responsabilidades",
      "Permitir acceso directo entre capas",
    ],
    answer: 2,
    explanation:
      "El patrón 'Pure Fabrication' introduce clases artificiales (como repositorios o servicios) que no representan entidades del dominio pero ayudan a separar responsabilidades y promover la reutilización.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP ayuda directamente a evitar dependencias rígidas entre componentes?",
    code: "",
    options: ["Low Coupling", "High Cohesion", "Information Expert", "Creator"],
    answer: 0,
    explanation:
      "El patrón 'Low Coupling' promueve una arquitectura flexible y desacoplada, facilitando el mantenimiento y la evolución del sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Cuando una clase tiene muchas responsabilidades no relacionadas, ¿cuál patrón GRASP está siendo ignorado?",
    code: "",
    options: ["High Cohesion", "Low Coupling", "Polymorphism", "Creator"],
    answer: 0,
    explanation:
      "Una clase con muchas responsabilidades pierde cohesión, lo que va en contra del patrón 'High Cohesion'.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cómo se relaciona el patrón GRASP 'Controller' con los frameworks MVC?",
    code: "",
    options: [
      "Es idéntico al patrón View",
      "Representa la lógica de negocio directamente",
      "Orquesta eventos desde la interfaz sin contener lógica compleja",
      "Debe contener validaciones de modelo",
    ],
    answer: 2,
    explanation:
      "En MVC, el Controller actúa como intermediario entre la vista y el modelo, orquestando la interacción sin lógica de negocio directa.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP se rompe si una clase tiene múltiples dependencias innecesarias para operar?",
    code: "",
    options: ["Low Coupling", "High Cohesion", "Creator", "Controller"],
    answer: 0,
    explanation:
      "Tener múltiples dependencias innecesarias indica alto acoplamiento, lo que rompe el principio de 'Low Coupling'.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Selecciona la afirmación correcta sobre el patrón 'Information Expert'.",
    code: "",
    options: [
      "Una clase siempre debe delegar toda su lógica a servicios externos",
      "La lógica debe estar donde los datos están",
      "El controlador debe siempre contener la lógica de negocio",
      "Una clase con muchos datos no puede tener lógica",
    ],
    answer: 1,
    explanation:
      "'Information Expert' sugiere que la responsabilidad debe recaer en la clase que tiene la información necesaria para cumplirla.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál sería un caso válido para aplicar 'Polymorphism' en GRASP?",
    code: "interface Notification {\n  void send();\n}\nclass EmailNotification implements Notification {\n  public void send() {\n    // send email\n  }\n}\nclass SMSNotification implements Notification {\n  public void send() {\n    // send SMS\n  }\n}",
    options: [
      "Cuando no hay variación de comportamiento",
      "Para evitar la creación de clases abstractas",
      "Cuando se desea cambiar comportamiento en tiempo de ejecución",
      "Para evitar la duplicación de datos",
    ],
    answer: 2,
    explanation:
      "El uso de interfaces permite cambiar el comportamiento de forma dinámica, siendo un ejemplo típico de 'Polymorphism'.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué responsabilidad cumple mejor una clase artificial como 'Logger' o 'EmailService' en GRASP?",
    code: "",
    options: ["Pure Fabrication", "Polymorphism", "Controller", "Creator"],
    answer: 0,
    explanation:
      "Estas clases no pertenecen al modelo de dominio, pero son necesarias por razones técnicas. Por eso, aplican el patrón 'Pure Fabrication'.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP te ayuda a dividir grandes sistemas en subsistemas menos acoplados?",
    code: "",
    options: ["Low Coupling", "Controller", "Information Expert", "Creator"],
    answer: 0,
    explanation:
      "'Low Coupling' permite diseñar subsistemas que pueden evolucionar independientemente, facilitando mantenimiento y pruebas.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Cuando se elige una clase para manejar eventos de UI, ¿qué patrón GRASP se aplica?",
    code: "",
    options: ["Controller", "Polymorphism", "Creator", "Low Coupling"],
    answer: 0,
    explanation:
      "El patrón 'Controller' sugiere asignar la responsabilidad de coordinar eventos a una clase intermediaria, como un controlador.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal motivación detrás del patrón GRASP 'Indirection'?",
    code: "",
    options: [
      "Reducir el número de clases en un sistema.",
      "Evitar la duplicación de código.",
      "Desacoplar objetos introduciendo una intermediación.",
      "Optimizar el rendimiento en tiempo de ejecución.",
    ],
    answer: 2,
    explanation:
      "El patrón 'Indirection' busca desacoplar clases delegando responsabilidades a una clase intermediaria. Esto promueve flexibilidad y facilita el mantenimiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP ayuda a reducir la dependencia entre clases mediante la delegación?",
    code: "",
    options: ["Information Expert", "Creator", "Indirection", "Low Coupling"],
    answer: 2,
    explanation:
      "'Indirection' introduce una clase intermediaria para delegar responsabilidades y así reducir el acoplamiento entre componentes directamente relacionados.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP busca maximizar la funcionalidad relacionada dentro de una clase?",
    code: "",
    options: ["Controller", "High Cohesion", "Low Coupling", "Polymorphism"],
    answer: 1,
    explanation:
      "'High Cohesion' se enfoca en agrupar funcionalidades relacionadas dentro de una misma clase, lo que mejora la claridad, mantenibilidad y capacidad de reutilización.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una consecuencia directa de violar el principio de 'Low Coupling' en una arquitectura basada en GRASP?",
    code: "",
    options: [
      "Dificultad para extender o modificar el sistema.",
      "Mayor cohesión en los componentes.",
      "Menor necesidad de pruebas.",
      "Mayor reutilización de código.",
    ],
    answer: 0,
    explanation:
      "El alto acoplamiento provoca que los cambios en una clase afecten a muchas otras, dificultando la evolución y el mantenimiento del sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP facilita el soporte para nuevos comportamientos sin alterar el código existente?",
    code: "",
    options: ["Polymorphism", "Controller", "Creator", "Information Expert"],
    answer: 0,
    explanation:
      "'Polymorphism' permite que diferentes objetos implementen el mismo método de diferentes formas, facilitando la extensión sin modificar el código existente.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el patrón 'Pure Fabrication'?",
    code: "",
    options: [
      "Se asigna a una clase que representa un concepto del dominio.",
      "Evita la creación de clases innecesarias.",
      "Se utiliza para mejorar la cohesión o reducir el acoplamiento, aunque no represente un concepto del dominio.",
      "Aplica polimorfismo a las clases del modelo de dominio.",
    ],
    answer: 2,
    explanation:
      "'Pure Fabrication' introduce clases artificiales que no representan conceptos del dominio pero que ayudan a mejorar la arquitectura (como repositorios o servicios).",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una característica clave del patrón GRASP 'Controller'?",
    code: "",
    options: [
      "Asigna responsabilidades a clases con acceso a los datos.",
      "Distribuye la lógica en múltiples controladores específicos.",
      "Asigna la responsabilidad de coordinar eventos del sistema a una clase representativa.",
      "Reduce la necesidad de utilizar interfaces.",
    ],
    answer: 2,
    explanation:
      "El 'Controller' es responsable de manejar eventos del sistema y coordinar acciones delegando a otras clases, generalmente representando un caso de uso o actor.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio GRASP se relaciona directamente con el patrón de diseño Factory Method?",
    code: "",
    options: ["Creator", "Low Coupling", "Indirection", "Controller"],
    answer: 0,
    explanation:
      "El patrón 'Creator' sugiere qué clase debería ser responsable de crear otras instancias, lo cual se alinea con el propósito del patrón Factory Method.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes es una ventaja de aplicar el patrón GRASP 'High Cohesion'?",
    code: "",
    options: [
      "Aumenta el acoplamiento con otras clases.",
      "Reduce la legibilidad del código.",
      "Agrupa funciones relacionadas, facilitando mantenimiento.",
      "Aumenta la duplicación de lógica.",
    ],
    answer: 2,
    explanation:
      "'High Cohesion' agrupa funcionalidades relacionadas en una misma clase, lo cual mejora la claridad y facilidad de mantenimiento del sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP ayuda a decidir qué objeto debería ser responsable de manejar una solicitud del sistema?",
    code: "",
    options: ["Creator", "Controller", "Information Expert", "Polymorphism"],
    answer: 1,
    explanation:
      "'Controller' se encarga de asignar responsabilidades relacionadas con la recepción de solicitudes del sistema, representando una entrada o evento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones se alinea con el principio GRASP 'Reuse/Reuse Principle'?",
    code: "",
    options: [
      "Evita la duplicación incluso a costa de mayor acoplamiento.",
      "Reutiliza funcionalidades sin comprometer la arquitectura mediante clases auxiliares.",
      "Reutiliza código directamente dentro de clases del dominio.",
      "Duplica funcionalidad para mantener cohesión.",
    ],
    answer: 1,
    explanation:
      "El principio de reutilización GRASP sugiere crear clases no pertenecientes al dominio (fabricadas) para encapsular funcionalidad reutilizable, sin afectar negativamente la cohesión o acoplamiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes fragmentos aplica el patrón 'Information Expert' de GRASP?",
    code: "class Order {\n  List<Item> items;\n  double calculateTotal() {\n    return items.stream().mapToDouble(Item::getPrice).sum();\n  }\n}",
    options: [
      "Viola el principio SRP.",
      "Aplica 'Controller' al delegar la lógica.",
      "Aplica 'Information Expert' al calcular con base en la información que posee.",
      "Es una 'Pure Fabrication' porque no es parte del dominio.",
    ],
    answer: 2,
    explanation:
      "La clase `Order` tiene la información necesaria (los ítems), por lo tanto es adecuada para calcular el total, cumpliendo con el principio de 'Information Expert'.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP sugiere asignar la responsabilidad a quien tenga la información necesaria?",
    code: "",
    options: [
      "Low Coupling",
      "Information Expert",
      "Polymorphism",
      "Pure Fabrication",
    ],
    answer: 1,
    explanation:
      "El patrón 'Information Expert' guía a asignar la responsabilidad a la clase que tiene los datos necesarios para cumplirla, promoviendo cohesión y simplicidad.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿En qué situación se recomienda utilizar 'Pure Fabrication'?",
    code: "",
    options: [
      "Cuando no existe una clase en el modelo de dominio adecuada.",
      "Cuando queremos aplicar herencia.",
      "Cuando queremos extender un objeto existente.",
      "Cuando la lógica depende de múltiples actores externos.",
    ],
    answer: 0,
    explanation:
      "'Pure Fabrication' se recomienda cuando no hay una clase del dominio adecuada para una responsabilidad, como por ejemplo en servicios o repositorios técnicos.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP es clave para permitir la reutilización de comportamientos en tiempo de ejecución?",
    code: "",
    options: ["Polymorphism", "High Cohesion", "Information Expert", "Reuse"],
    answer: 0,
    explanation:
      "'Polymorphism' permite que diferentes clases implementen la misma interfaz, facilitando la reutilización de comportamientos en tiempo de ejecución sin modificar código existente.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes patrones GRASP ayuda a evitar dependencias fuertes entre clases?",
    code: "",
    options: [
      "Alta Cohesión",
      "Indirección",
      "Controlador",
      "Información Experta",
    ],
    answer: 1,
    explanation:
      "El patrón Indirección introduce un intermediario entre componentes, reduciendo dependencias directas y promoviendo el bajo acoplamiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el beneficio principal del patrón GRASP 'Vinculación Tímida' (Pure Fabrication)?",
    code: "",
    options: [
      "Incrementar el número de objetos del sistema",
      "Facilitar la herencia múltiple",
      "Promover alta cohesión y bajo acoplamiento mediante clases artificiales",
      "Eliminar el uso de interfaces",
    ],
    answer: 2,
    explanation:
      "El patrón Pure Fabrication permite crear clases no derivadas directamente del dominio para cumplir objetivos técnicos como persistencia o logging, sin violar cohesión o acoplamiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP está más directamente relacionado con el uso de interfaces y polimorfismo?",
    code: "",
    options: [
      "Alta Cohesión",
      "Bajo Acoplamiento",
      "Polimorfismo",
      "Indirección",
    ],
    answer: 2,
    explanation:
      "El patrón GRASP Polimorfismo se basa en la definición de comportamientos comunes a través de interfaces o clases base, permitiendo sustituir una implementación por otra sin alterar la lógica del sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una desventaja de asignar muchas responsabilidades a un solo objeto en términos de GRASP?",
    code: "",
    options: [
      "Viola el principio de reutilización de código",
      "Genera alta cohesión",
      "Rompe el principio de Responsabilidad Única",
      "Aumenta la reutilización",
    ],
    answer: 2,
    explanation:
      "Asignar múltiples responsabilidades a un objeto rompe el principio de responsabilidad única, dificultando mantenimiento y pruebas.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP asigna la creación de un objeto a la clase que tiene la mayoría de la información necesaria para instanciarlo?",
    code: "",
    options: [
      "Información Experta",
      "Creator",
      "Controller",
      "Fabricación Pura",
    ],
    answer: 1,
    explanation:
      "El patrón Creator indica que la clase que posee la mayoría de los datos necesarios para crear otro objeto debería encargarse de su instanciación.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes patrones GRASP ayuda a minimizar el impacto de cambios en el comportamiento de los objetos?",
    code: "",
    options: [
      "Indirección",
      "Alta Cohesión",
      "Polimorfismo",
      "Bajo Acoplamiento",
    ],
    answer: 3,
    explanation:
      "El patrón Polimorfismo permite definir comportamientos intercambiables, minimizando el impacto de cambios mediante una interfaz común.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP promueve la separación entre lógica de negocio y control de eventos del sistema?",
    code: "",
    options: [
      "Creator",
      "Información Experta",
      "Controller",
      "Reutilización de Información",
    ],
    answer: 2,
    explanation:
      "El patrón Controller sugiere asignar la responsabilidad de manejar eventos del sistema a un objeto que coordine la lógica, pero no la implemente directamente.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP es más útil para construir componentes reutilizables y desacoplados?",
    code: "",
    options: [
      "Alta Cohesión",
      "Bajo Acoplamiento",
      "Reutilización de Información",
      "Vinculación Tímida",
    ],
    answer: 1,
    explanation:
      "El patrón Bajo Acoplamiento fomenta componentes independientes, lo cual mejora la capacidad de reutilización y mantenimiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre los patrones GRASP 'Información Experta' y 'Creator'?",
    code: "",
    options: [
      "Creator siempre implica acoplamiento fuerte",
      "Creator se enfoca en lógica de negocio, Expert en construcción",
      "Expert se enfoca en decisiones de comportamiento, Creator en decisiones de construcción",
      "No hay diferencia entre ellos",
    ],
    answer: 2,
    explanation:
      "Mientras que 'Información Experta' asigna comportamiento a quien tiene la información, 'Creator' se enfoca en determinar quién debe crear instancias en base a posesión de datos.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál sería una señal de que no estás aplicando correctamente 'Alta Cohesión' en una clase?",
    code: "",
    options: [
      "La clase tiene una sola responsabilidad bien definida",
      "La clase agrupa métodos relacionados entre sí",
      "La clase realiza múltiples tareas no relacionadas",
      "La clase solo implementa una interfaz",
    ],
    answer: 2,
    explanation:
      "Cuando una clase tiene múltiples responsabilidades no relacionadas, pierde cohesión y se vuelve difícil de mantener.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP permite centralizar decisiones que afectan múltiples objetos sin violar cohesión?",
    code: "",
    options: [
      "Reutilización de Información",
      "Controller",
      "Indirección",
      "Vinculación Tímida",
    ],
    answer: 3,
    explanation:
      "Pure Fabrication permite centralizar decisiones (como persistencia, logging) sin imponer esas responsabilidades a clases del dominio.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué característica comparten los patrones Polimorfismo y Indirección?",
    code: "",
    options: [
      "Ambos aumentan la cohesión",
      "Ambos están ligados a la herencia múltiple",
      "Ambos mejoran la extensibilidad del sistema",
      "Ambos se usan para persistencia",
    ],
    answer: 2,
    explanation:
      "Polimorfismo e Indirección promueven la flexibilidad al permitir sustituir componentes sin alterar la lógica general del sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP te ayuda a decidir quién debe tener la responsabilidad de delegar llamadas a servicios externos?",
    code: "",
    options: ["Creator", "Indirección", "Controller", "Alta Cohesión"],
    answer: 1,
    explanation:
      "Indirección permite insertar objetos intermediarios, como adaptadores o proxies, para manejar llamadas externas y desacoplar el sistema.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Por qué el patrón 'Información Experta' puede causar acoplamiento excesivo si se abusa?",
    code: "",
    options: [
      "Obliga a usar reflexión para acceder a los datos",
      "Promueve herencia múltiple",
      "Distribuye demasiado las responsabilidades entre muchas clases",
      "Puede provocar que una clase acceda a demasiados datos de otras clases, aumentando acoplamiento",
    ],
    answer: 3,
    explanation:
      "Aunque útil, el patrón Información Experta puede llevar a que una clase dependa de muchos detalles internos de otras clases, aumentando el acoplamiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP recomienda asignar tareas relacionadas a quien ya tiene la información para hacerlas?",
    code: "",
    options: ["Polimorfismo", "Controller", "Información Experta", "Creator"],
    answer: 2,
    explanation:
      "El patrón Información Experta asigna responsabilidades a la clase que posee los datos necesarios para realizar una acción.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio GRASP sugiere asignar responsabilidades a una clase que tiene la información necesaria para cumplirla?",
    code: "",
    options: ["Expert", "Controller", "Low Coupling", "Creator"],
    answer: 0,
    explanation:
      "El patrón 'Expert' indica que se debe asignar la responsabilidad a la clase que tiene la información necesaria para llevarla a cabo.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el principal objetivo del patrón GRASP 'Controller'?",
    code: "",
    options: [
      "Delegar lógica de negocio a entidades externas",
      "Manejar eventos del sistema y coordinar respuestas",
      "Mantener acoplamiento bajo entre clases",
      "Reducir el número de clases en el sistema",
    ],
    answer: 1,
    explanation:
      "'Controller' se encarga de recibir eventos del sistema (como solicitudes de UI) y coordinar la respuesta adecuada delegando a otras clases.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP ayuda a mantener la independencia entre clases reduciendo dependencias directas?",
    code: "",
    options: ["Polymorphism", "Indirection", "Creator", "Cohesion"],
    answer: 1,
    explanation:
      "Indirection introduce un intermediario entre dos clases, reduciendo el acoplamiento directo entre ellas.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes es un beneficio del patrón GRASP 'Low Coupling'?",
    code: "",
    options: [
      "Alta cohesión",
      "Reutilización limitada",
      "Cambios aislados en componentes",
      "Mayor dependencia entre clases",
    ],
    answer: 2,
    explanation:
      "'Low Coupling' busca minimizar las dependencias entre clases, facilitando el mantenimiento y la reutilización.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es una señal de alta cohesión en una clase según GRASP?",
    code: "",
    options: [
      "Tiene múltiples responsabilidades sin relación",
      "Tiene muchas dependencias externas",
      "Sus métodos están relacionados con su propósito principal",
      "Depende fuertemente de otras clases",
    ],
    answer: 2,
    explanation:
      "Una clase con alta cohesión tiene métodos y atributos que están estrechamente relacionados con una única responsabilidad.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP justifica la creación de una clase artificial para cumplir con responsabilidades específicas como la persistencia?",
    code: "",
    options: ["Pure Fabrication", "Creator", "Controller", "Polymorphism"],
    answer: 0,
    explanation:
      "'Pure Fabrication' se refiere a clases creadas específicamente para mantener la cohesión y acoplamiento bajo, como los repositorios.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la relación entre 'Creator' y la cohesión?",
    code: "",
    options: [
      "Creator aumenta el acoplamiento",
      "Creator mejora la cohesión al asignar responsabilidades de creación donde hay afinidad",
      "Creator evita cohesión",
      "No hay relación entre ambos",
    ],
    answer: 1,
    explanation:
      "'Creator' asigna la creación de objetos a clases que ya tienen una relación cercana, aumentando la cohesión.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP está directamente relacionado con el principio de diseño Abierto/Cerrado (OCP)?",
    code: "",
    options: ["Controller", "Indirection", "Polymorphism", "Expert"],
    answer: 2,
    explanation:
      "El patrón 'Polymorphism' permite extender el comportamiento de un sistema sin modificar el código existente, lo cual se alinea con el principio OCP.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué problema resuelve el patrón GRASP 'Indirection'?",
    code: "",
    options: [
      "Falta de cohesión",
      "Tareas de lógica compleja",
      "Comunicación directa entre objetos",
      "Asignación incorrecta de responsabilidades",
    ],
    answer: 2,
    explanation:
      "'Indirection' introduce un intermediario para evitar la comunicación directa entre objetos, reduciendo el acoplamiento.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la principal ventaja de usar 'Pure Fabrication' en una arquitectura Java empresarial?",
    code: "",
    options: [
      "Mejora la experiencia de usuario",
      "Reduce la cantidad de clases",
      "Fomenta acoplamiento alto",
      "Separa preocupaciones técnicas de dominio",
    ],
    answer: 3,
    explanation:
      "'Pure Fabrication' ayuda a aislar responsabilidades técnicas, como persistencia o logging, mejorando la separación de preocupaciones.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP promueve asignar tareas a la clase que tiene los datos necesarios?",
    code: "",
    options: ["Creator", "Expert", "Low Coupling", "Controller"],
    answer: 1,
    explanation:
      "'Expert' asegura que las responsabilidades se asignen a las clases que tienen la información necesaria para ejecutarlas.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP se utiliza comúnmente para manejar los eventos de la interfaz de usuario?",
    code: "",
    options: ["Controller", "Creator", "Polymorphism", "Pure Fabrication"],
    answer: 0,
    explanation:
      "'Controller' actúa como intermediario entre la UI y el modelo, manejando los eventos del usuario.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué implica una clase con bajo acoplamiento?",
    code: "",
    options: [
      "Depende fuertemente de muchas otras clases",
      "Tiene pocas dependencias con otras clases",
      "Es difícil de modificar",
      "Tiene múltiples responsabilidades",
    ],
    answer: 1,
    explanation:
      "El bajo acoplamiento implica que una clase puede funcionar de forma independiente con mínimas dependencias.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP favorece la delegación de tareas a objetos con conocimiento interno relevante?",
    code: "",
    options: ["Polymorphism", "Expert", "Indirection", "Creator"],
    answer: 1,
    explanation:
      "'Expert' promueve que las clases manejen tareas cuando poseen los datos necesarios para cumplirlas correctamente.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón GRASP se beneficia directamente del uso de interfaces y clases abstractas?",
    code: "",
    options: ["Creator", "Polymorphism", "Controller", "Pure Fabrication"],
    answer: 1,
    explanation:
      "El patrón 'Polymorphism' se basa en el uso de interfaces para permitir múltiples implementaciones intercambiables.",
    subtheme: "GRASP",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio de SOLID promueve que las clases deben estar abiertas para extensión pero cerradas para modificación?",
    code: "",
    options: [
      "Principio de Responsabilidad Única",
      "Principio de Sustitución de Liskov",
      "Principio Abierto/Cerrado",
      "Principio de Inversión de Dependencias",
    ],
    answer: 2,
    explanation:
      "El Principio Abierto/Cerrado (Open/Closed) establece que las clases deben poder extenderse sin modificar su código fuente original.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes opciones representa una violación del Principio de Sustitución de Liskov (LSP)?",
    code: `class Bird {
    void fly() {}
  }
  
  class Ostrich extends Bird {
    @Override
    void fly() {
      throw new UnsupportedOperationException();
    }
  }`,
    options: [
      "Es una implementación válida",
      "LSP no aplica porque se usa herencia",
      "Viola LSP porque la subclase no puede sustituir a la superclase sin cambiar el comportamiento",
      "Es una mejora de la clase base",
    ],
    answer: 2,
    explanation:
      "LSP se viola cuando una subclase no puede reemplazar a su superclase sin alterar el comportamiento esperado. Las avestruces no pueden volar, por lo que esta extensión rompe el contrato de Bird.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el objetivo principal del Principio de Responsabilidad Única (SRP)?",
    code: "",
    options: [
      "Dividir interfaces",
      "Reducir acoplamiento",
      "Una clase debe tener una y solo una razón para cambiar",
      "Facilitar la herencia",
    ],
    answer: 2,
    explanation:
      "SRP establece que una clase debe tener una única responsabilidad, es decir, una sola razón para cambiar, promoviendo cohesión.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones está alineada con el Principio de Inversión de Dependencias (DIP)?",
    code: "",
    options: [
      "Las clases deben depender de detalles concretos",
      "Los módulos de alto nivel deben depender de módulos de bajo nivel",
      "Ambos niveles deben depender de abstracciones",
      "Las abstracciones deben depender de los detalles",
    ],
    answer: 2,
    explanation:
      "El DIP establece que los módulos de alto y bajo nivel deben depender de abstracciones, no de implementaciones concretas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón suele aplicarse junto al DIP para facilitar la inversión de dependencias?",
    code: "",
    options: ["Builder", "Factory Method", "Dependency Injection", "Observer"],
    answer: 2,
    explanation:
      "La inyección de dependencias es un patrón comúnmente usado para aplicar el DIP, permitiendo que las dependencias sean proporcionadas desde el exterior.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una buena práctica para cumplir con el Principio de Segregación de Interfaces (ISP)?",
    code: "",
    options: [
      "Tener una interfaz con todos los métodos posibles",
      "Dividir una interfaz grande en interfaces más específicas",
      "Crear interfaces genéricas con muchos métodos",
      "Reutilizar interfaces existentes aunque no apliquen",
    ],
    answer: 1,
    explanation:
      "El ISP sugiere dividir interfaces grandes en interfaces más pequeñas y específicas, de forma que los clientes solo implementen lo que realmente usan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio estás violando si una clase de persistencia también contiene lógica de negocio?",
    code: "",
    options: ["LSP", "SRP", "DIP", "OCP"],
    answer: 1,
    explanation:
      "Esa clase viola el Principio de Responsabilidad Única porque tiene más de una razón para cambiar: cambios en la lógica de negocio o en el almacenamiento de datos.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "En el contexto de SRP, ¿qué representa una 'razón para cambiar'?",
    code: "",
    options: [
      "Una excepción lanzada",
      "Una modificación de la interfaz de usuario",
      "Un requerimiento funcional independiente",
      "Una clase abstracta",
    ],
    answer: 2,
    explanation:
      "Una razón para cambiar es cualquier cambio en los requerimientos que afecte una parte específica de la funcionalidad de la clase.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes cambios respeta el Principio Abierto/Cerrado?",
    code: `public interface Payment {
    void pay(double amount);
  }
  
  public class PaypalPayment implements Payment {
    public void pay(double amount) {
      // lógica específica
    }
  }`,
    options: [
      "Modificar PaypalPayment",
      "Eliminar métodos de Payment",
      "Agregar una nueva clase CreditCardPayment que implemente Payment",
      "Convertir Payment en clase abstracta",
    ],
    answer: 2,
    explanation:
      "Agregar una nueva clase que implementa una interfaz existente extiende el comportamiento sin modificar código existente, cumpliendo OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio se viola si una clase cliente debe depender de métodos que no necesita?",
    code: "",
    options: ["SRP", "LSP", "ISP", "DIP"],
    answer: 2,
    explanation:
      "El ISP (Interface Segregation Principle) indica que los clientes no deberían verse forzados a depender de interfaces que no usan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una forma común de aplicar el Principio de Inversión de Dependencias (DIP) en Java?",
    code: "",
    options: [
      "Usar `static` para compartir lógica",
      "Programar contra interfaces en lugar de clases concretas",
      "Heredar de clases concretas",
      "Utilizar variables globales para servicios compartidos",
    ],
    answer: 1,
    explanation:
      "DIP se aplica al programar contra abstracciones (interfaces o clases abstractas) en lugar de implementaciones concretas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes ejemplos cumple con el Principio de Responsabilidad Única (SRP)?",
    code: `class Invoice {
    void calculateTotal() { ... }
    void printInvoice() { ... }
    void saveToDatabase() { ... }
  }`,
    options: [
      "La clase está bien diseñada con múltiples funciones",
      "La clase viola SRP al mezclar cálculo, presentación y persistencia",
      "La clase aplica OCP correctamente",
      "Esta clase sigue el principio LSP",
    ],
    answer: 1,
    explanation:
      "Tiene múltiples responsabilidades: cálculo, presentación y persistencia, lo que viola SRP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de modificación viola el Principio de Sustitución de Liskov (LSP)?",
    code: "",
    options: [
      "Una subclase que lanza una excepción en un método heredado sin justificación",
      "Una subclase que redefine un método agregando funcionalidad adicional",
      "Una subclase que implementa una nueva interfaz",
      "Una subclase que utiliza composición",
    ],
    answer: 0,
    explanation:
      "LSP se viola cuando el comportamiento de una subclase no puede reemplazar el de la superclase sin romper la lógica del programa.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué representa una buena aplicación del Principio de Segregación de Interfaces (ISP)?",
    code: `interface Printer {
    void print();
    void fax();
    void scan();
  }`,
    options: [
      "Una clase `SimplePrinter` que implementa solo `print()`",
      "Una clase que lanza excepciones en `fax()` y `scan()`",
      "Una interfaz `Printer` dividida en `Printable`, `Scannable`, `Faxable`",
      "Una clase abstracta para imprimir",
    ],
    answer: 2,
    explanation:
      "Dividir la interfaz en interfaces más pequeñas respeta ISP, ya que cada clase implementa solo lo que necesita.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón se relaciona estrechamente con el Principio Abierto/Cerrado (OCP)?",
    code: "",
    options: ["Strategy", "Builder", "Singleton", "Prototype"],
    answer: 0,
    explanation:
      "El patrón Strategy permite cambiar el comportamiento en tiempo de ejecución sin modificar el código existente, cumpliendo con OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio fomenta la creación de clases abstractas o interfaces para reducir la dependencia de detalles concretos?",
    code: "",
    options: ["LSP", "OCP", "DIP", "ISP"],
    answer: 2,
    explanation:
      "El DIP promueve que las clases dependan de abstracciones y no de implementaciones concretas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio estás aplicando si decides que un módulo no debe conocer los detalles de su dependencia, solo su interfaz?",
    code: "",
    options: ["SRP", "OCP", "DIP", "ISP"],
    answer: 2,
    explanation:
      "DIP indica que los módulos deben depender de abstracciones para mantener flexibilidad y facilidad de mantenimiento.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué problema genera la violación del ISP en interfaces con múltiples métodos?",
    code: "",
    options: [
      "Mayor cohesión",
      "Dependencia innecesaria de métodos no usados",
      "Modularidad mejorada",
      "Más claridad en el diseño",
    ],
    answer: 1,
    explanation:
      "Cuando una clase implementa métodos que no usa, se genera una dependencia innecesaria y se rompe el ISP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué principio se está aplicando en el siguiente fragmento?",
    code: `interface Notifier {
    void send(String message);
  }
  
  class EmailNotifier implements Notifier {
    public void send(String message) {
      // enviar email
    }
  }
  
  class NotificationService {
    private Notifier notifier;
  
    public NotificationService(Notifier notifier) {
      this.notifier = notifier;
    }
  
    public void notify(String message) {
      notifier.send(message);
    }
  }`,
    options: ["SRP y DIP", "LSP solamente", "ISP y SRP", "Solo OCP"],
    answer: 0,
    explanation:
      "SRP porque `NotificationService` solo se encarga de notificar, y DIP porque depende de la abstracción `Notifier`.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio puede ayudarte a evitar el uso de `instanceof` y `switch` en diseños orientados a objetos?",
    code: "",
    options: ["SRP", "LSP", "OCP", "Polimorfismo (asociado con LSP y OCP)"],
    answer: 3,
    explanation:
      "El polimorfismo permite que diferentes implementaciones se comporten correctamente sin condicionales explícitos, facilitando LSP y OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una violación común al Principio de Responsabilidad Única (SRP)?",
    code: "class Report {\n  void generate() { ... }\n  void print() { ... }\n  void email() { ... }\n}",
    options: [
      "La clase tiene demasiados constructores",
      "La clase depende de otra clase concreta",
      "La clase maneja múltiples responsabilidades: generación, impresión y envío",
      "La clase implementa una interfaz innecesaria",
    ],
    answer: 2,
    explanation:
      "La clase `Report` está violando SRP al encargarse de tres responsabilidades diferentes.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué estrategia ayuda a cumplir con el Principio de Abierto/Cerrado (OCP)?",
    code: "",
    options: [
      "Modificar directamente las clases existentes",
      "Crear condiciones con if-else para nuevas funcionalidades",
      "Usar herencia o composición para extender comportamiento sin modificar",
      "Evitar el uso de interfaces",
    ],
    answer: 2,
    explanation:
      "OCP promueve extender el comportamiento sin modificar código existente, usando herencia o composición.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué implica el Principio de Sustitución de Liskov (LSP)?",
    code: "",
    options: [
      "Todas las subclases deben tener constructores por defecto",
      "Subclases pueden sustituir a superclases sin alterar el comportamiento esperado",
      "Las subclases deben heredar solo métodos públicos",
      "La herencia múltiple debe evitarse",
    ],
    answer: 1,
    explanation:
      "LSP establece que los objetos de una subclase deben poder reemplazar objetos de su superclase sin afectar la lógica del programa.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes fragmentos respeta el Principio de Segregación de Interfaces (ISP)?",
    code: "interface Workable {\n  void work();\n}\n\ninterface Feedable {\n  void eat();\n}\n\nclass Robot implements Workable {\n  public void work() {}\n}",
    options: [
      "La clase `Robot` implementa una interfaz muy grande",
      "El diseño permite que cada clase implemente solo lo que necesita",
      "La clase `Robot` viola LSP",
      "La interfaz `Feedable` debería heredar de `Workable`",
    ],
    answer: 1,
    explanation:
      "Separar las interfaces respeta ISP, ya que `Robot` no necesita `Feedable` y evita implementar métodos innecesarios.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es la diferencia clave entre DIP y OCP?",
    code: "",
    options: [
      "DIP se enfoca en clases internas, OCP en clases públicas",
      "DIP implica usar herencia, OCP composición",
      "DIP se refiere a la dependencia en abstracciones, OCP a la extensión del comportamiento",
      "DIP está relacionado con la encapsulación, OCP con la cohesión",
    ],
    answer: 2,
    explanation:
      "DIP se enfoca en depender de abstracciones, mientras que OCP promueve extender comportamiento sin modificar código existente.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el beneficio clave de aplicar el Principio SRP?",
    code: "",
    options: [
      "Facilita la herencia",
      "Reduce el acoplamiento",
      "Mejora la modularidad y mantenibilidad",
      "Permite el uso de clases anidadas",
    ],
    answer: 2,
    explanation:
      "Separar responsabilidades en clases individuales facilita la comprensión, prueba y mantenimiento del código.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué efecto tiene la violación del DIP?",
    code: "",
    options: [
      "Promueve el uso de interfaces",
      "Aumenta el acoplamiento entre módulos",
      "Facilita el testing",
      "Reduce la cohesión",
    ],
    answer: 1,
    explanation:
      "Al depender de clases concretas en lugar de abstracciones, se aumenta el acoplamiento y se dificulta la reutilización y el testing.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes patrones facilita el cumplimiento de DIP?",
    code: "",
    options: [
      "Factory Method",
      "Singleton",
      "Observer",
      "Dependency Injection",
    ],
    answer: 3,
    explanation:
      "La inyección de dependencias permite que las clases reciban abstracciones en lugar de crear directamente implementaciones concretas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cómo se aplica OCP en el siguiente código?",
    code: "interface DiscountStrategy {\n  double applyDiscount(double price);\n}\n\nclass BlackFridayDiscount implements DiscountStrategy {\n  public double applyDiscount(double price) {\n    return price * 0.7;\n  }\n}\n\nclass Checkout {\n  private DiscountStrategy strategy;\n  public Checkout(DiscountStrategy strategy) {\n    this.strategy = strategy;\n  }\n  public double getTotal(double price) {\n    return strategy.applyDiscount(price);\n  }\n}",
    options: [
      "El uso de interfaces permite extender nuevas estrategias sin modificar Checkout",
      "La clase Checkout viola LSP",
      "El patrón Singleton se usa incorrectamente",
      "Se rompe SRP por usar descuento dentro de Checkout",
    ],
    answer: 0,
    explanation:
      "Gracias a la interfaz `DiscountStrategy`, se pueden agregar nuevas estrategias sin modificar `Checkout`, aplicando OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál de las siguientes prácticas ayuda a cumplir el ISP?",
    code: "",
    options: [
      "Crear interfaces con muchos métodos",
      "Agrupar métodos relacionados en interfaces pequeñas y cohesivas",
      "Evitar el uso de interfaces",
      "Usar clases abstractas con múltiples responsabilidades",
    ],
    answer: 1,
    explanation:
      "Dividir interfaces grandes en otras más pequeñas y específicas permite que las clases implementen solo lo que necesitan, cumpliendo ISP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes principios SOLID promueve que una clase debe tener una única razón para cambiar?",
    code: "",
    options: [
      "Inversión de Dependencias",
      "Principio de Responsabilidad Única",
      "Segregación de Interfaces",
      "Principio Abierto/Cerrado",
    ],
    answer: 1,
    explanation:
      "El Principio de Responsabilidad Única (SRP) establece que una clase debe tener una única razón para cambiar, lo que mejora la cohesión y el mantenimiento.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué problema puede surgir si se viola el principio de sustitución de Liskov (LSP)?",
    code: "",
    options: [
      "Las clases no pueden ser reutilizadas",
      "Las subclases no se comportan como sus superclases, causando errores en tiempo de ejecución",
      "Las interfaces se vuelven muy grandes",
      "Las dependencias no pueden ser invertidas correctamente",
    ],
    answer: 1,
    explanation:
      "Violar LSP implica que las subclases no pueden ser intercambiadas por sus superclases sin alterar el comportamiento del programa, lo que puede provocar errores o inconsistencias.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones viola el principio de Segregación de Interfaces (ISP)?",
    code: "",
    options: [
      "Una interfaz tiene solo métodos necesarios para su cliente",
      "Una interfaz obliga a las clases implementadoras a definir métodos innecesarios",
      "Una interfaz se divide en interfaces más pequeñas y específicas",
      "Una interfaz usa composición en lugar de herencia",
    ],
    answer: 1,
    explanation:
      "El ISP busca evitar que las clases estén forzadas a implementar métodos que no usan. Una interfaz inflada viola este principio.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el objetivo principal del Principio Abierto/Cerrado (OCP)?",
    code: "",
    options: [
      "Minimizar el número de clases en una aplicación",
      "Hacer que las clases estén abiertas para modificación pero cerradas para extensión",
      "Permitir que las clases se extiendan sin modificarse",
      "Reducir la cantidad de código duplicado",
    ],
    answer: 2,
    explanation:
      "El OCP establece que las entidades deben estar abiertas para extensión pero cerradas para modificación, permitiendo añadir funcionalidades sin cambiar el código existente.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cómo se aplica el principio de Inversión de Dependencias (DIP) en Java?",
    code: "",
    options: [
      "Usando constructores privados",
      "Depender de abstracciones (interfaces) en lugar de implementaciones concretas",
      "Evitando el uso de interfaces en general",
      "Implementando todas las clases en una sola capa",
    ],
    answer: 1,
    explanation:
      "El DIP sugiere que las clases deben depender de abstracciones (interfaces) en lugar de detalles concretos, promoviendo flexibilidad y bajo acoplamiento.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el beneficio principal de aplicar SRP?",
    code: "",
    options: [
      "Facilita la herencia múltiple",
      "Mejora la cohesión y reduce el acoplamiento",
      "Permite interfaces más grandes",
      "Hace que las clases sean más abstractas",
    ],
    answer: 1,
    explanation:
      "El SRP permite que cada clase tenga un propósito claro, lo que incrementa la cohesión y reduce el acoplamiento entre responsabilidades distintas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón de diseño está alineado naturalmente con el principio de Inversión de Dependencias?",
    code: "",
    options: [
      "Factory Method",
      "Prototype",
      "Inyección de Dependencias",
      "Builder",
    ],
    answer: 2,
    explanation:
      "La Inyección de Dependencias (DI) permite invertir el control sobre las dependencias y depender de abstracciones, cumpliendo con el DIP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué representa una violación del principio OCP en este código?",
    code: 'class Report {\n  void generate(String format) {\n    if(format.equals("PDF")) { ... }\n    else if(format.equals("CSV")) { ... }\n  }\n}',
    options: [
      "El uso de condicionales para tipos concretos",
      "El uso de una clase concreta en lugar de una interfaz",
      "El uso de String como parámetro",
      "El método es demasiado largo",
    ],
    answer: 0,
    explanation:
      "El código viola el OCP al requerir modificación para soportar nuevos formatos. Debería utilizar polimorfismo para extender sin modificar.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el objetivo del LSP en relación con la herencia?",
    code: "",
    options: [
      "Permitir la herencia múltiple",
      "Evitar la duplicación de código",
      "Garantizar que las subclases puedan ser utilizadas sin alterar el comportamiento esperado",
      "Eliminar la necesidad de interfaces",
    ],
    answer: 2,
    explanation:
      "LSP asegura que las subclases puedan sustituir a sus superclases sin afectar el comportamiento del programa.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes principios promueve dividir interfaces grandes en otras más pequeñas?",
    code: "",
    options: ["OCP", "DIP", "SRP", "ISP"],
    answer: 3,
    explanation:
      "El principio de Segregación de Interfaces (ISP) recomienda que las interfaces no obliguen a los clientes a depender de métodos que no utilizan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué técnica puede ayudarte a cumplir con el DIP en Spring?",
    code: "",
    options: [
      "Uso de servicios estáticos",
      "Inyección de dependencias con anotaciones como @Autowired",
      "Llamadas directas a nuevas instancias",
      "Acoplamiento fuerte entre controladores y repositorios",
    ],
    answer: 1,
    explanation:
      "Spring permite aplicar DIP mediante inyección de dependencias, facilitando el desacoplamiento a través de anotaciones como @Autowired.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes fragmentos respeta mejor el principio OCP?",
    code: "interface Formatter { void format(); }\nclass PdfFormatter implements Formatter { public void format() { ... } }\nclass CsvFormatter implements Formatter { public void format() { ... } }",
    options: [
      "Usar un switch para cambiar de formato",
      "Modificar constantemente la clase base",
      "Utilizar polimorfismo con interfaces",
      "Codificar los formatos dentro de una sola clase",
    ],
    answer: 2,
    explanation:
      "Utilizar interfaces permite extender funcionalidades sin modificar clases existentes, cumpliendo el OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué principio busca evitar 'interfaces gordas' o infladas?",
    code: "",
    options: ["LSP", "ISP", "DIP", "SRP"],
    answer: 1,
    explanation:
      "El ISP promueve interfaces pequeñas y específicas para evitar que los clientes implementen métodos que no utilizan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es un síntoma común de violar SRP?",
    code: "",
    options: [
      "Clase con muchos constructores",
      "Clase con múltiples motivos de cambio",
      "Uso excesivo de interfaces",
      "Herencia circular",
    ],
    answer: 1,
    explanation:
      "Una clase que tiene múltiples razones para cambiar probablemente viole SRP, dificultando el mantenimiento y evolución del sistema.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio se viola si una subclase anula un método heredado de manera que lanza una excepción en lugar de implementar la funcionalidad?",
    code: "",
    options: ["DIP", "ISP", "SRP", "LSP"],
    answer: 3,
    explanation:
      "Una subclase que lanza excepciones en métodos heredados viola LSP, ya que no respeta el contrato esperado por la superclase.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },

  {
    question:
      "¿Cuál de los siguientes principios de SOLID se viola si una clase hija cambia el comportamiento esperado de una clase padre?",
    code: "",
    options: [
      "Principio de Responsabilidad Única",
      "Principio de Sustitución de Liskov",
      "Principio Abierto/Cerrado",
      "Principio de Inversión de Dependencias",
    ],
    answer: 1,
    explanation:
      "El Principio de Sustitución de Liskov (LSP) se viola cuando una subclase altera el comportamiento esperado de la superclase, lo que puede provocar errores en el código que depende de la clase padre.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el objetivo principal del Principio de Inversión de Dependencias (DIP)?",
    code: "",
    options: [
      "Evitar la duplicación de código",
      "Separar las interfaces de las implementaciones",
      "Permitir que los módulos de alto nivel no dependan de módulos de bajo nivel",
      "Reducir el acoplamiento entre objetos hermanos",
    ],
    answer: 2,
    explanation:
      "DIP busca que los módulos de alto nivel no dependan de los módulos de bajo nivel, sino de abstracciones. Esto mejora la flexibilidad y facilita la inversión de dependencias.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón de diseño se usa comúnmente para cumplir con el principio de Inversión de Dependencias?",
    code: "",
    options: ["Singleton", "Factory", "Inyección de Dependencias", "Adaptador"],
    answer: 2,
    explanation:
      "La Inyección de Dependencias (Dependency Injection) es una técnica comúnmente utilizada para cumplir el DIP, permitiendo pasar las dependencias desde el exterior.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Según el principio de Responsabilidad Única (SRP), ¿qué describe mejor una clase con una única responsabilidad?",
    code: "",
    options: [
      "Tiene un solo método público",
      "Tiene una única razón para cambiar",
      "No tiene dependencias externas",
      "Solo interactúa con su propia jerarquía de clases",
    ],
    answer: 1,
    explanation:
      "Una clase con una única responsabilidad tiene una única razón para cambiar, lo que significa que se encarga de un único aspecto del sistema.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una consecuencia de violar el Principio de Segregación de Interfaces (ISP)?",
    code: "",
    options: [
      "Demasiadas dependencias",
      "Clases implementando métodos innecesarios",
      "Aumento de la cohesión",
      "Uso excesivo de herencia",
    ],
    answer: 1,
    explanation:
      "ISP busca evitar que las clases se vean forzadas a depender de interfaces que no utilizan. Si se viola, se tienden a implementar métodos innecesarios.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la mejor manera de aplicar el principio OCP (Open/Closed Principle)?",
    code: "",
    options: [
      "Usando herencia para modificar el comportamiento",
      "Modificando directamente las clases existentes",
      "Utilizando polimorfismo e interfaces",
      "Reduciendo el uso de clases abstractas",
    ],
    answer: 2,
    explanation:
      "El polimorfismo e interfaces permiten extender el comportamiento de una clase sin modificar su código fuente, cumpliendo con el principio OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué representa el siguiente fragmento en términos de principios SOLID?",
    code: "interface Printer {\n  void print(Document d);\n  void scan(Document d);\n  void fax(Document d);\n}",
    options: ["Cumple ISP", "Viola OCP", "Viola ISP", "Cumple SRP"],
    answer: 2,
    explanation:
      "Esta interfaz viola el ISP, ya que fuerza a las clases que la implementan a definir métodos que pueden no necesitar.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué diseño ilustra mejor el principio de Segregación de Interfaces (ISP)?",
    code: "interface Printer { void print(); }\ninterface Scanner { void scan(); }\ninterface Fax { void fax(); }",
    options: [
      "Diseño monolítico",
      "Diseño con acoplamiento alto",
      "Diseño conforme a SRP",
      "Diseño conforme a ISP",
    ],
    answer: 3,
    explanation:
      "Separar las responsabilidades en interfaces más pequeñas y específicas cumple con el principio de Segregación de Interfaces (ISP).",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué beneficio clave se logra al seguir el principio SRP?",
    code: "",
    options: [
      "Mayor rendimiento",
      "Menor uso de memoria",
      "Facilidad de mantenimiento",
      "Menor duplicación de código",
    ],
    answer: 2,
    explanation:
      "El SRP facilita el mantenimiento del software porque los cambios están localizados en clases con responsabilidades claras.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué ocurre al aplicar correctamente el principio OCP en una aplicación?",
    code: "",
    options: [
      "Mayor complejidad del sistema",
      "Disminuye la cohesión",
      "Reducción de pruebas necesarias",
      "El comportamiento puede extenderse sin modificar el código existente",
    ],
    answer: 3,
    explanation:
      "El OCP busca que el comportamiento de una clase pueda extenderse sin necesidad de modificar su código, lo que mejora la mantenibilidad.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el riesgo principal de no aplicar correctamente el principio DIP?",
    code: "",
    options: [
      "Complejidad en la herencia",
      "Clases fuertemente acopladas a implementaciones concretas",
      "Redundancia de código",
      "Interfaz mal diseñada",
    ],
    answer: 1,
    explanation:
      "Si DIP no se aplica correctamente, las clases terminan dependiendo de implementaciones específicas, lo que incrementa el acoplamiento.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cuál es el papel del contenedor de IoC en relación con SOLID?",
    code: "",
    options: [
      "Viola el SRP",
      "Facilita la implementación del DIP",
      "Rompe el OCP",
      "Obliga a usar interfaces innecesarias",
    ],
    answer: 1,
    explanation:
      "El contenedor de IoC (como Spring) permite aplicar el DIP al inyectar dependencias en lugar de crearlas dentro de la clase.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué se recomienda para aplicar el principio de Abierto/Cerrado en una clase?",
    code: "",
    options: [
      "Eliminar dependencias",
      "Utilizar condicionales en lugar de polimorfismo",
      "Diseñar usando interfaces y clases abstractas",
      "Evitar la herencia y composición",
    ],
    answer: 2,
    explanation:
      "Diseñar con interfaces y clases abstractas permite extender funcionalidad sin modificar código existente, cumpliendo el OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué técnica apoya mejor el cumplimiento de DIP en un proyecto Java moderno?",
    code: "",
    options: [
      "Inyección de dependencias",
      "Herencia múltiple",
      "Programación orientada a eventos",
      "Singletons globales",
    ],
    answer: 0,
    explanation:
      "La inyección de dependencias desacopla clases concretas de sus dependencias, permitiendo cumplir con el DIP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes principios SOLID promueve la separación de responsabilidades en interfaces específicas?",
    code: "",
    options: [
      "Principio de Responsabilidad Única",
      "Principio de Sustitución de Liskov",
      "Principio de Segregación de Interfaces",
      "Principio de Inversión de Dependencias",
    ],
    answer: 2,
    explanation:
      "El Principio de Segregación de Interfaces (ISP) sugiere que las interfaces deben ser específicas para el cliente, evitando interfaces con métodos que no necesitan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes ejemplos viola el Principio de Sustitución de Liskov?",
    code: `
  class Bird {
    void fly() {}
  }
  
  class Ostrich extends Bird {
    void fly() {
      throw new UnsupportedOperationException();
    }
  }`,
    options: [
      "La clase Ostrich implementa una excepción al volar",
      "La clase Bird no debería tener el método fly",
      "La clase Ostrich extiende de Bird sin sobrescribir",
      "El código cumple con Liskov",
    ],
    answer: 0,
    explanation:
      "El principio de sustitución de Liskov se viola cuando una subclase no puede sustituir a la clase base sin alterar el comportamiento esperado. Una 'Ostrich' no puede volar, por lo tanto, no debe extender 'Bird' con método fly.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones es cierta sobre el Principio de Abierto/Cerrado (OCP)?",
    code: "",
    options: [
      "El código debe cerrarse para su extensión",
      "El código debe permitir su modificación directa",
      "El código debe ser abierto para modificación, cerrado para pruebas",
      "El código debe estar abierto para extensión, cerrado para modificación",
    ],
    answer: 3,
    explanation:
      "OCP indica que las entidades de software deben ser abiertas para su extensión, pero cerradas para su modificación.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la mejor forma de aplicar el principio de inversión de dependencias en Java moderno?",
    code: "",
    options: [
      "Usar clases concretas en lugar de interfaces",
      "Inyectar dependencias mediante interfaces",
      "Evitar el uso de interfaces",
      "Utilizar constructores estáticos",
    ],
    answer: 1,
    explanation:
      "La inversión de dependencias sugiere depender de abstracciones (interfaces), no de implementaciones concretas, lo que favorece una arquitectura desacoplada.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón de diseño está fuertemente relacionado con el Principio de Inversión de Dependencias?",
    code: "",
    options: ["Singleton", "Factory", "Observer", "Inyección de dependencias"],
    answer: 3,
    explanation:
      "El principio de inversión de dependencias se implementa comúnmente mediante el patrón de inyección de dependencias.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes diseños cumple con el Principio de Responsabilidad Única (SRP)?",
    code: `
  class Report {
    void generate() {}
    void print() {}
  }`,
    options: [
      "La clase tiene dos responsabilidades, lo cual viola SRP",
      "La clase está bien diseñada y sigue SRP",
      "La clase necesita extender otra para cumplir SRP",
      "La clase debería implementar una interfaz adicional",
    ],
    answer: 0,
    explanation:
      "Generar y imprimir son dos responsabilidades distintas, lo que rompe el SRP. Cada clase debe tener una única razón para cambiar.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de clase ayuda a cumplir el principio de inversión de dependencias?",
    code: "",
    options: [
      "Clase abstracta",
      "Clase concreta",
      "Clase singleton",
      "Clase estática",
    ],
    answer: 0,
    explanation:
      "El uso de clases abstractas o interfaces permite cumplir con DIP, ya que las dependencias se definen en términos de abstracciones.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cómo contribuye la segregación de interfaces a un diseño robusto?",
    code: "",
    options: [
      "Hace las interfaces más grandes",
      "Permite que los clientes dependan solo de lo que necesitan",
      "Reduce la reutilización de código",
      "Fomenta la herencia múltiple",
    ],
    answer: 1,
    explanation:
      "ISP fomenta interfaces pequeñas y enfocadas, lo que evita que los clientes dependan de métodos que no usan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué violación común del OCP ocurre cuando se usa una estructura switch para manejar múltiples tipos?",
    code: "",
    options: [
      "Falta de encapsulamiento",
      "Fuerte acoplamiento entre clases",
      "La necesidad de modificar código existente al agregar nuevos tipos",
      "Uso excesivo de interfaces",
    ],
    answer: 2,
    explanation:
      "El uso de switch implica modificar código existente al agregar nuevos casos, violando el OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué beneficio directo ofrece el SRP en pruebas unitarias?",
    code: "",
    options: [
      "Reduce el tiempo de ejecución de las pruebas",
      "Permite pruebas más simples y específicas",
      "Elimina la necesidad de pruebas de integración",
      "Evita el uso de mocks",
    ],
    answer: 1,
    explanation:
      "Al tener una única responsabilidad, las clases son más fáciles de probar de forma aislada, lo que mejora la calidad y mantenibilidad del código.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "En el contexto de DIP, ¿qué es preferible al usar en Java?",
    code: "",
    options: [
      "Clase concreta",
      "Interface o clase abstracta",
      "Método estático",
      "Herencia múltiple",
    ],
    answer: 1,
    explanation:
      "DIP sugiere que los módulos de alto nivel no deben depender de clases concretas, sino de abstracciones como interfaces.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón puede ayudar a cumplir con el OCP al evitar modificar código existente?",
    code: "",
    options: ["Factory Method", "Decorator", "Adapter", "Prototype"],
    answer: 1,
    explanation:
      "El patrón Decorator permite agregar funcionalidad a una clase sin modificar su código original, alineándose con el OCP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué consecuencia puede tener la violación del LSP?",
    code: "",
    options: [
      "Reducción en la cohesión",
      "Dificultad en la refactorización",
      "Comportamiento inesperado al sustituir subtipos",
      "Mayor facilidad en las pruebas",
    ],
    answer: 2,
    explanation:
      "Cuando una subclase no puede sustituir a su superclase sin alterar el comportamiento esperado, se viola LSP, lo que puede generar errores en tiempo de ejecución.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué indica una interfaz 'gorda' en el contexto del ISP?",
    code: "",
    options: [
      "Una interfaz con muchas implementaciones",
      "Una interfaz que es demasiado amplia para ser útil",
      "Una interfaz que extiende otras múltiples interfaces",
      "Una interfaz abstracta",
    ],
    answer: 1,
    explanation:
      "Una interfaz 'gorda' es aquella que contiene muchos métodos, lo que va en contra del ISP ya que fuerza a los clientes a implementar métodos que no necesitan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el rol del Principio de Inversión de Dependencias en arquitectura en capas?",
    code: "",
    options: [
      "Permite que la capa de presentación dependa directamente de la capa de datos",
      "Asegura que todas las capas se comuniquen mediante abstracciones",
      "Facilita el acoplamiento entre capas",
      "Elimina la necesidad de la capa de dominio",
    ],
    answer: 1,
    explanation:
      "DIP promueve que las capas de alto nivel (como presentación o dominio) dependan de interfaces, no de implementaciones de bajo nivel como la persistencia.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el objetivo principal del principio de Inversión de Dependencias (DIP)?",
    code: "",
    options: [
      "Reducir el número de interfaces en el sistema",
      "Depender de abstracciones en lugar de implementaciones",
      "Eliminar todas las dependencias entre clases",
      "Fomentar la herencia sobre la composición",
    ],
    answer: 1,
    explanation:
      "El principio de Inversión de Dependencias (DIP) indica que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones, promoviendo una arquitectura más flexible y mantenible.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué violación de principio SOLID se observa en el siguiente código?",
    code: "class ReportPrinter {\n    void printPDFReport() {}\n    void printExcelReport() {}\n    void sendReportEmail() {}\n}",
    options: [
      "Violación de Open/Closed",
      "Violación de Liskov",
      "Violación de Single Responsibility",
      "Violación de Interface Segregation",
    ],
    answer: 2,
    explanation:
      "La clase tiene múltiples responsabilidades (imprimir y enviar reportes), lo cual viola el principio de Responsabilidad Única.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes opciones representa mejor el principio Open/Closed?",
    code: "abstract class Discount {\n    abstract double apply(double total);\n}\nclass BlackFridayDiscount extends Discount {\n    double apply(double total) { return total * 0.8; }\n}",
    options: [
      "El uso de interfaces para aplicar descuentos",
      "La extensión de la clase base sin modificarla",
      "El uso de clases anónimas",
      "La sobrecarga del método apply",
    ],
    answer: 1,
    explanation:
      "El principio Open/Closed sugiere que las clases deben estar abiertas para extensión pero cerradas para modificación. En este caso, la clase base no cambia, pero se extiende para modificar el comportamiento.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "En el contexto del principio Interface Segregation, ¿qué problema presenta una interfaz demasiado grande?",
    code: "",
    options: [
      "Reduce la cohesión de la clase",
      "Viola el principio de herencia",
      "Obliga a implementar métodos innecesarios",
      "Aumenta el acoplamiento dinámico",
    ],
    answer: 2,
    explanation:
      "El principio de Segregación de Interfaces establece que una clase no debería verse obligada a implementar métodos que no utiliza.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué técnica se recomienda para cumplir con el principio de Responsabilidad Única (SRP)?",
    code: "",
    options: [
      "Hacer uso intensivo de herencia",
      "Utilizar múltiples constructores",
      "Extraer funcionalidades en clases dedicadas",
      "Inyectar todas las dependencias en el constructor",
    ],
    answer: 2,
    explanation:
      "El SRP promueve la separación de responsabilidades en clases distintas, permitiendo que cada clase se enfoque en una única tarea.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },

  {
    question:
      "¿Cuál de los siguientes principios SOLID se viola si una clase hija modifica el comportamiento esperado de un método heredado?",
    code: "",
    options: [
      "Responsabilidad Única",
      "Inversión de Dependencias",
      "Sustitución de Liskov",
      "Segregación de Interfaces",
    ],
    answer: 2,
    explanation:
      "La Sustitución de Liskov se viola cuando una subclase no puede ser sustituida por su clase padre sin alterar el comportamiento esperado del sistema.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el principal objetivo del principio de Responsabilidad Única?",
    code: "",
    options: [
      "Reducir el acoplamiento entre clases",
      "Permitir herencia múltiple",
      "Separar funcionalidades relacionadas para facilitar el mantenimiento",
      "Permitir que una clase tenga múltiples motivos para cambiar",
    ],
    answer: 2,
    explanation:
      "El principio de Responsabilidad Única busca que cada clase tenga una sola responsabilidad o razón para cambiar.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué problema resuelve principalmente el principio de Inversión de Dependencias (DIP)?",
    code: "",
    options: [
      "Elimina los condicionales en el código",
      "Permite a las clases depender de abstracciones en lugar de implementaciones concretas",
      "Promueve la reutilización de código",
      "Facilita la serialización de objetos",
    ],
    answer: 1,
    explanation:
      "El principio DIP establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones, lo que permite desacoplar el código.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una desventaja común de no seguir el principio de Segregación de Interfaces?",
    code: "",
    options: [
      "Las clases pueden tener múltiples constructores",
      "Las clases se ven forzadas a implementar métodos que no utilizan",
      "Se rompe la encapsulación",
      "Aumenta la visibilidad de los métodos privados",
    ],
    answer: 1,
    explanation:
      "Violar la Segregación de Interfaces implica tener interfaces grandes que obligan a las clases a implementar métodos innecesarios.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón de diseño se alinea mejor con el principio de Inversión de Dependencias?",
    code: "",
    options: ["Factory", "Builder", "Observer", "Inyección de Dependencias"],
    answer: 3,
    explanation:
      "La Inyección de Dependencias es una implementación directa del principio de Inversión de Dependencias, permitiendo pasar dependencias desde el exterior.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes fragmentos de código viola el principio de Sustitución de Liskov?",
    code: `class Bird {
    void fly() {}
  }
  
  class Ostrich extends Bird {
    @Override
    void fly() {
      throw new UnsupportedOperationException("Ostriches can't fly");
    }
  }`,
    options: ["Viola SRP", "Viola OCP", "Viola LSP", "Viola DIP"],
    answer: 2,
    explanation:
      "Una subclase (Ostrich) no puede ser sustituida por la clase base (Bird) sin romper el comportamiento esperado, violando LSP.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es la mejor forma de aplicar el principio de Abierto/Cerrado en una jerarquía de clases?",
    code: "",
    options: [
      "Eliminar todas las clases abstractas",
      "Evitar el uso de interfaces",
      "Diseñar con herencia o composición para extender comportamiento sin modificar código existente",
      "Permitir que cualquier clase modifique otras clases directamente",
    ],
    answer: 2,
    explanation:
      "El principio OCP sugiere que las clases estén abiertas a extensión pero cerradas a modificación. Esto se logra con herencia o composición.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Qué relación tiene el patrón Adapter con los principios SOLID?",
    code: "",
    options: [
      "Viola el principio SRP",
      "Ayuda a cumplir con el principio DIP",
      "Rompe el OCP",
      "Requiere interfaces altamente acopladas",
    ],
    answer: 1,
    explanation:
      "Adapter permite que clases incompatibles trabajen juntas sin acoplarse directamente, apoyando el principio DIP al depender de interfaces.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "¿Cómo ayuda el principio de SRP a mejorar el testing?",
    code: "",
    options: [
      "Permite múltiples puntos de entrada",
      "Facilita la creación de clases estáticas",
      "Reduce las dependencias entre funcionalidades no relacionadas",
      "Aumenta el uso de herencia",
    ],
    answer: 2,
    explanation:
      "Al tener una única responsabilidad, es más fácil testear una clase sin preocuparse por efectos colaterales de funcionalidades mezcladas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué se espera de una clase si cumple con el principio de Sustitución de Liskov?",
    code: "",
    options: [
      "Utiliza herencia múltiple",
      "Puede reemplazar a su superclase sin alterar el comportamiento del sistema",
      "Debe implementar interfaces genéricas",
      "Depende de implementaciones concretas",
    ],
    answer: 1,
    explanation:
      "El principio de LSP exige que cualquier clase derivada pueda ser usada en lugar de su superclase sin afectar el comportamiento esperado.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una forma común de aplicar el principio de Segregación de Interfaces en Java?",
    code: "",
    options: [
      "Usar una única interfaz para múltiples funcionalidades",
      "Crear varias interfaces pequeñas y específicas",
      "Utilizar clases abstractas con muchos métodos",
      "Reducir el uso de interfaces por completo",
    ],
    answer: 1,
    explanation:
      "El principio ISP sugiere crear interfaces pequeñas y específicas para evitar que las clases implementen métodos que no usan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "En relación al principio DIP, ¿qué significa 'depender de abstracciones'?",
    code: "",
    options: [
      "Utilizar clases finales",
      "Evitar interfaces y clases abstractas",
      "Utilizar objetos concretos directamente",
      "Programar contra interfaces o clases abstractas en lugar de implementaciones concretas",
    ],
    answer: 3,
    explanation:
      "Depender de abstracciones implica que los módulos de alto nivel trabajen con interfaces, no con implementaciones concretas, para lograr desacoplamiento.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué principio se viola si una clase tiene métodos que hacen operaciones de base de datos y también renderizan vistas?",
    code: "",
    options: ["OCP", "SRP", "ISP", "DIP"],
    answer: 1,
    explanation:
      "Tener múltiples responsabilidades (como lógica de negocio y de presentación) en una clase viola el principio de Responsabilidad Única (SRP).",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el principio OCP?",
    code: "",
    options: [
      "El código debe poder modificarse en cualquier momento",
      "La lógica de negocio debe depender de detalles",
      "Las clases deben estar cerradas para extensión y abiertas para modificación",
      "Las clases deben estar abiertas a extensión pero cerradas a modificación",
    ],
    answer: 3,
    explanation:
      "El principio OCP busca que el código pueda ser extendido sin modificar el existente, promoviendo estabilidad y mantenibilidad.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué tipo de acoplamiento ayuda a reducir el uso del principio DIP?",
    code: "",
    options: [
      "Acoplamiento fuerte a implementaciones concretas",
      "Acoplamiento por herencia",
      "Acoplamiento a abstracciones",
      "Acoplamiento entre paquetes",
    ],
    answer: 2,
    explanation:
      "El principio DIP promueve el uso de abstracciones (interfaces o clases abstractas) para reducir el acoplamiento a implementaciones concretas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes principios SOLID se enfoca en que una clase debe tener una y solo una razón para cambiar?",
    code: null,
    options: [
      "Principio de Inversión de Dependencias (DIP)",
      "Principio de Responsabilidad Única (SRP)",
      "Principio de Abierto/Cerrado (OCP)",
      "Principio de Sustitución de Liskov (LSP)",
    ],
    answer: 1,
    explanation:
      "El Principio de Responsabilidad Única (SRP) establece que una clase debe tener una y solo una razón para cambiar. Esto significa que una clase debe tener una única responsabilidad o trabajo.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Considera el siguiente código Java ¿Qué principio SOLID se está violando en este diseño?",
    code: '`interface DatabaseConnection {\\n    void connect(String url);\\n    void executeQuery(String query);\\n    String fetchData(String query);\\n    void close();\\n}\\n\\nclass MySQLConnection implements DatabaseConnection {\\n    // Implementaciones...\\n}\\n\\nclass MongoDBConnection implements DatabaseConnection {\\n    // Implementaciones...\\n}\\n\\nclass ReportGenerator {\\n    private MySQLConnection dbConnection;\\n\\n    public ReportGenerator(MySQLConnection dbConnection) {\\n        this.dbConnection = dbConnection;\\n    }\\n\\n    public void generateReport() {\\n        dbConnection.connect(\\"jdbc:mysql://localhost:3306/mydb\\");\\n        String data = dbConnection.fetchData(\\"SELECT * FROM data\\");\\n        // Generar reporte con \'data\'\\n        dbConnection.close();\\n    }\\n}`',
    options: [
      "Principio de Sustitución de Liskov (LSP)",
      "Principio de Interfaz de Segregación (ISP)",
      "Principio de Inversión de Dependencias (DIP)",
      "Principio de Abierto/Cerrado (OCP)",
    ],
    answer: 2,
    explanation:
      "Se está violando el Principio de Inversión de Dependencias (DIP). La clase `ReportGenerator` depende de una implementación concreta (`MySQLConnection`) en lugar de una abstracción (`DatabaseConnection`). Esto dificulta cambiar la base de datos sin modificar `ReportGenerator`.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el objetivo principal del Principio de Abierto/Cerrado (OCP)?",
    code: null,
    options: [
      "Favorecer la composición sobre la herencia.",
      "Las subclases deben ser sustituibles por sus clases base.",
      "Las entidades deben depender de abstracciones, no de concreciones.",
      "Las entidades de software deben estar abiertas para la extensión, pero cerradas para la modificación.",
    ],
    answer: 3,
    explanation:
      "El Principio de Abierto/Cerrado (OCP) busca que las entidades de software (clases, módulos, funciones, etc.) sean extensibles sin necesidad de modificar su código existente. Esto se logra mediante el uso de abstracciones e interfaces.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question: "El Principio de Sustitución de Liskov (LSP) establece que...",
    code: null,
    options: [
      "una clase debe tener una sola razón para cambiar.",
      "las interfaces deben ser pequeñas y específicas para los clientes.",
      "los objetos de una superclase deben poder ser reemplazados por objetos de sus subclases sin alterar la correctitud del programa.",
      "se deben favorecer las dependencias de abstracciones sobre las dependencias de concreciones.",
    ],
    answer: 2,
    explanation:
      "El Principio de Sustitución de Liskov (LSP) es fundamental para la herencia. Asegura que cualquier instancia de una subclase pueda ser utilizada en cualquier lugar donde se espere una instancia de su superclase, sin causar problemas.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Considera las siguientes interfaces en Java: ¿Qué principio SOLID se aborda al definir interfaces separadas como `Worker` y `Eater` en lugar de una única interfaz `Humanoid` con métodos `work()` y `eat()`?",
    code: "`interface Worker {\\n    void work();\\n}\\n\\ninterface Eater {\\n    void eat();\\n}\\n\\nclass Robot implements Worker {\\n    public void work() {\\n        // Trabajar\\n    }\\n}\\n\\nclass Human implements Worker, Eater {\\n    public void work() {\\n        // Trabajar\\n    }\\n    public void eat() {\\n        // Comer\\n    }\\n}\\n\\ninterface Manager extends Worker, Eater {\\n    void manage();\\n}`",
    options: [
      "Principio de Responsabilidad Única (SRP)",
      "Principio de Abierto/Cerrado (OCP)",
      "Principio de Inversión de Dependencias (DIP)",
      "Principio de Interfaz de Segregación (ISP)",
    ],
    answer: 3,
    explanation:
      "Se aborda el Principio de Interfaz de Segregación (ISP). Al dividir la funcionalidad en interfaces más pequeñas y específicas para los clientes (`Worker`, `Eater`), evitamos que las clases se vean obligadas a implementar métodos que no utilizan.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones describe mejor el Principio de Inversión de Dependencias (DIP)?",
    code: null,
    options: [
      "Las clases deben ser responsables de una sola cosa.",
      "Las interfaces deben ser diseñadas para grupos específicos de clientes.",
      "Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.",
      "El código debe estar abierto para la extensión, pero cerrado para la modificación.",
    ],
    answer: 2,
    explanation:
      "El Principio de Inversión de Dependencias (DIP) promueve la dependencia de abstracciones (interfaces o clases abstractas) en lugar de dependencias directas de implementaciones concretas. Esto reduce el acoplamiento entre módulos.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Aplicar el Principio de Responsabilidad Única (SRP) generalmente conduce a...",
    code: null,
    options: [
      "clases más grandes y complejas.",
      "mayor acoplamiento entre clases.",
      "clases más pequeñas, enfocadas y fáciles de mantener.",
      "una jerarquía de herencia más profunda.",
    ],
    answer: 2,
    explanation:
      "El SRP fomenta la creación de clases con una única responsabilidad, lo que resulta en clases más pequeñas, más cohesivas y, por lo tanto, más fáciles de entender, probar y mantener.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "Considera el siguiente código Java:¿Qué principio SOLID se está violando en este ejemplo?",
    code: '`class Rectangle {\\n    private int width;\\n    private int height;\\n\\n    public void setWidth(int width) {\\n        this.width = width;\\n    }\\n\\n    public void setHeight(int height) {\\n        this.height = height;\\n    }\\n\\n    public int getArea() {\\n        return width * height;\\n    }\\n}\\n\\nclass Square extends Rectangle {\\n    @Override\\n    public void setWidth(int width) {\\n        super.setWidth(width);\\n        super.setHeight(width);\\n    }\\n\\n    @Override\\n    public void setHeight(int height) {\\n        super.setHeight(height);\\n        super.setWidth(height);\\n    }\\n}\\n\\npublic class AreaCalculator {\\n    public int calculateArea(Rectangle rect) {\\n        rect.setWidth(5);\\n        rect.setHeight(4);\\n        return rect.getArea();\\n    }\\n\\n    public static void main(String[] args) {\\n        AreaCalculator calculator = new AreaCalculator();\\n        Rectangle rectangle = new Rectangle();\\n        System.out.println(\\"Área del rectángulo: \\" + calculator.calculateArea(rectangle)); // Salida: 20\\n        Square square = new Square();\\n        System.out.println(\\"Área del cuadrado: \\" + calculator.calculateArea(square));   // Salida: 20 (esperado 25 si se tratara como cuadrado)\\n    }\\n}`',
    options: [
      "Principio de Interfaz de Segregación (ISP)",
      "Principio de Responsabilidad Única (SRP)",
      "Principio de Inversión de Dependencias (DIP)",
      "Principio de Sustitución de Liskov (LSP)",
    ],
    answer: 3,
    explanation:
      "Se está violando el Principio de Sustitución de Liskov (LSP). La clase `Square` no se comporta de manera consistente con su superclase `Rectangle` en el contexto del método `calculateArea`. Al establecer el ancho y el alto de un `Rectangle`, estos pueden ser independientes, pero en un `Square` siempre deben ser iguales. Esto causa un comportamiento inesperado cuando se trata un `Square` como un `Rectangle`.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Qué patrón de diseño se alinea estrechamente con el Principio de Inversión de Dependencias (DIP)?",
    code: null,
    options: [
      "Patrón Decorador",
      "Patrón Observador",
      "Patrón de Fábrica Abstracta",
      "Patrón Estrategia",
    ],
    answer: 2,
    explanation:
      "El Patrón de Fábrica Abstracta se alinea con el DIP al abstraer el proceso de creación de objetos concretos, permitiendo que las clases de alto nivel dependan de interfaces abstractas para la creación de sus dependencias.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una ventaja clave de adherirse al Principio de Abierto/Cerrado (OCP)?",
    code: null,
    options: [
      "Reduce la complejidad del código.",
      "Facilita la refactorización del código.",
      "Minimiza el riesgo de introducir nuevos errores al extender la funcionalidad.",
      "Mejora el rendimiento de la aplicación.",
    ],
    answer: 2,
    explanation:
      "El OCP busca que la extensión de la funcionalidad se realice añadiendo nuevo código en lugar de modificar el existente. Esto reduce la posibilidad de introducir errores en el código probado y estable.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cómo contribuye el Principio de Interfaz de Segregación (ISP) a un diseño de software más robusto?",
    code: null,
    options: [
      "Promueve la creación de interfaces grandes y genéricas para maximizar la reutilización.",
      "Asegura que las clases implementen solo los métodos que son relevantes para ellas.",
      "Fomenta la dependencia de implementaciones concretas para un mayor control.",
      "Simplifica la jerarquía de herencia al tener menos interfaces.",
    ],
    answer: 1,
    explanation:
      "El ISP evita que las clases se vean obligadas a implementar métodos que no necesitan, lo que reduce el acoplamiento innecesario y hace que el sistema sea más flexible y fácil de mantener.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál de los siguientes escenarios ejemplifica mejor el Principio de Responsabilidad Única (SRP)?",
    code: null,
    options: [
      "Una clase que gestiona la conexión a la base de datos y también realiza la validación de los datos.",
      "Una interfaz que define métodos para leer y escribir en un archivo.",
      "Una clase que solo es responsable de formatear un informe en PDF.",
      "Una subclase que añade funcionalidad a su superclase sin modificar el comportamiento existente.",
    ],
    answer: 2,
    explanation:
      "La clase responsable de formatear un informe en PDF tiene una única responsabilidad clara y definida: la presentación de datos en un formato específico.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
  {
    question:
      "¿Cuál es el riesgo principal de no seguir el Principio de Sustitución de Liskov (LSP)?",
    code: null,
    options: [
      "Aumento de la complejidad del código.",
      "Dificultad para extender la funcionalidad.",
      "Comportamiento inesperado y errores en tiempo de ejecución.",
      "Mayor acoplamiento entre clases.",
    ],
    answer: 2,
    explanation:
      "Violar el LSP puede llevar a que el código que funciona correctamente con la superclase falle o se comporte de manera inesperada cuando se utiliza una de sus subclases, lo que dificulta la depuración y el mantenimiento.",
    subtheme: "SOLID",
    group: "Java",
    level: "Experto",
  },
];
