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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
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
    level: "Expert",
  },
];
