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
];
