// Banco de preguntas "Entrevista Softek".
// Grupo único: "Entrevista Softek". Subtemas = temario de la entrevista.
// Niveles: Junior / Senior / Experto. Esquema idéntico al resto del banco:
//   { question, options:[4], answer:<0-3>, explanation, subtheme, group, level }
const GROUP = "Entrevista Softek";

export const softekQuestions = [
  // ========================================================================
  // 1) Duck Creek e Insurity
  // ========================================================================
  {
    question: "¿Qué tipo de plataforma son Duck Creek e Insurity?",
    options: [
      "Frameworks de frontend para banca",
      "Suites de software para la industria de seguros (P&C)",
      "Motores de bases de datos distribuidas",
      "Orquestadores de contenedores",
    ],
    answer: 1,
    explanation:
      "Duck Creek e Insurity son suites especializadas en seguros de propiedad y responsabilidad (Property & Casualty): policy, billing y claims.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "En una suite de seguros, ¿qué gestiona típicamente el módulo 'Policy'?",
    options: [
      "El cobro de primas y la facturación",
      "La cotización, emisión y ciclo de vida de la póliza",
      "El pago de siniestros",
      "La autenticación de usuarios",
    ],
    answer: 1,
    explanation:
      "El módulo Policy (PAS, Policy Administration System) cubre rating, quoting, emisión, endosos y renovaciones de la póliza.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué significan las siglas 'P&C' en el dominio asegurador?",
    options: [
      "Policy & Claims",
      "Property & Casualty",
      "Premium & Coverage",
      "Payment & Collection",
    ],
    answer: 1,
    explanation:
      "P&C = Property & Casualty (propiedad y responsabilidad civil), el segmento donde operan Duck Creek e Insurity.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Cuál es el propósito del módulo 'Claims' en una plataforma de seguros?",
    options: [
      "Definir las reglas de rating",
      "Administrar el ciclo de vida del siniestro (FNOL, ajuste, pago, cierre)",
      "Generar los documentos de marketing",
      "Configurar el pipeline de CI/CD",
    ],
    answer: 1,
    explanation:
      "Claims gestiona desde el aviso inicial (FNOL, First Notice Of Loss) hasta el ajuste, la reserva, el pago y el cierre del siniestro.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué describe mejor a 'Duck Creek OnDemand'?",
    options: [
      "Una librería open source de Java",
      "La oferta SaaS/cloud de Duck Creek",
      "Un IDE para desarrollar reglas",
      "Un protocolo de mensajería",
    ],
    answer: 1,
    explanation:
      "Duck Creek OnDemand es el modelo SaaS gestionado de Duck Creek, que ejecuta la suite en la nube como servicio.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Qué estándar de intercambio de datos es común al integrar sistemas de seguros P&C en EE. UU.?",
    options: ["ACORD", "HL7", "SWIFT", "EDIFACT"],
    answer: 0,
    explanation:
      "ACORD define estándares de datos y formularios para la industria aseguradora; muchas integraciones P&C usan esquemas ACORD.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "Al integrar un core asegurador legado con microservicios, ¿qué patrón reduce el acoplamiento y aísla el sistema legado?",
    options: [
      "Singleton",
      "Anti-Corruption Layer (ACL)",
      "Active Record",
      "Service Locator",
    ],
    answer: 1,
    explanation:
      "La capa anticorrupción traduce el modelo del sistema legado al modelo del nuevo dominio, evitando que sus conceptos contaminen los microservicios.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "Duck Creek utiliza un enfoque de configuración sobre código mediante 'Manuscripts'. ¿Qué son?",
    options: [
      "Clases Java compiladas",
      "Artefactos de configuración/scripting que definen comportamiento sin recompilar",
      "Archivos de logs",
      "Certificados TLS",
    ],
    answer: 1,
    explanation:
      "Los Manuscripts de Duck Creek son configuración declarativa que modela lógica de negocio, favoreciendo 'configuration over code'.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Por qué se prefiere la integración asíncrona basada en eventos entre un PAS y servicios de billing/claims?",
    options: [
      "Porque elimina la necesidad de validaciones",
      "Para desacoplar sistemas, tolerar picos y evitar bloqueos ante indisponibilidad temporal",
      "Porque es la única soportada por ACORD",
      "Porque reduce la necesidad de pruebas",
    ],
    answer: 1,
    explanation:
      "Los eventos desacoplan productores y consumidores: el PAS publica cambios y billing/claims reaccionan, tolerando latencia e indisponibilidad transitoria.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "En una migración de un core asegurador monolítico a microservicios, ¿qué patrón permite migrar gradualmente redirigiendo tráfico?",
    options: [
      "Big Bang",
      "Strangler Fig",
      "Shotgun Surgery",
      "God Object",
    ],
    answer: 1,
    explanation:
      "El patrón Strangler Fig envuelve el monolito y va reemplazando funcionalidades por servicios nuevos hasta 'estrangular' el legado.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Cuál es un riesgo clave al exponer el rating de un PAS como API síncrona de alta demanda?",
    options: [
      "Que mejore demasiado la latencia",
      "Acoplamiento temporal y cascada de fallos si el PAS se degrada",
      "Que ACORD deje de aplicar",
      "Que el billing deje de facturar",
    ],
    answer: 1,
    explanation:
      "La dependencia síncrona genera acoplamiento temporal: si el PAS se degrada, los consumidores fallan en cascada. Mitigar con timeouts, circuit breakers y caché.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "Para garantizar idempotencia al reprocesar eventos de 'policy issued' hacia billing, ¿qué técnica es la más adecuada?",
    options: [
      "Reintentar sin control",
      "Usar una clave de idempotencia/deduplicación persistida por evento",
      "Deshabilitar reintentos",
      "Confiar en el orden de llegada TCP",
    ],
    answer: 1,
    explanation:
      "Persistir un identificador único del evento (idempotency key) permite detectar duplicados y aplicar el efecto una sola vez al reprocesar.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué ventaja ofrece un modelo canónico de datos al integrar múltiples sistemas aseguradores?",
    options: [
      "Reduce las integraciones punto a punto a traducciones contra un formato común",
      "Elimina la necesidad de mapeos",
      "Obliga a usar una sola base de datos",
      "Impide versionar contratos",
    ],
    answer: 0,
    explanation:
      "Un modelo canónico reduce el problema NxN de integraciones: cada sistema traduce solo entre su formato y el canónico, no contra cada par.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué es 'FNOL' en el proceso de siniestros?",
    options: [
      "Final Net Operating Loss",
      "First Notice Of Loss (primer aviso del siniestro)",
      "Fixed Non-Operational License",
      "Full Normalized Object Layer",
    ],
    answer: 1,
    explanation:
      "FNOL (First Notice Of Loss) es el primer registro del siniestro que inicia el flujo de claims.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "Al diseñar la sincronización PAS → Data Warehouse para reporting, ¿qué enfoque evita impactar el OLTP del core?",
    options: [
      "Consultar directamente las tablas transaccionales en tiempo real",
      "Captura de cambios (CDC) o eventos publicados hacia un pipeline analítico",
      "Bloquear las tablas durante el reporte",
      "Hacer full scan cada minuto",
    ],
    answer: 1,
    explanation:
      "CDC o la publicación de eventos de dominio alimentan el analítico sin golpear el OLTP del core con cargas de reporting.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué representa un 'endoso' (endorsement) en la administración de pólizas?",
    options: [
      "El pago inicial de la prima",
      "Una modificación a una póliza vigente",
      "El cierre de un siniestro",
      "Una nueva cotización",
    ],
    answer: 1,
    explanation:
      "Un endoso es un cambio a una póliza en vigor (p. ej. agregar cobertura o modificar datos), generando típicamente un recálculo de prima.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Cuál es el objetivo del versionado de contratos de API al integrar con un PAS externo?",
    options: [
      "Impedir que el PAS cambie",
      "Permitir evolucionar el servicio sin romper a los consumidores existentes",
      "Reducir el tamaño de los payloads",
      "Eliminar la documentación",
    ],
    answer: 1,
    explanation:
      "El versionado (v1, v2…) permite introducir cambios incompatibles de forma controlada, manteniendo operativos a los consumidores que aún usan versiones previas.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "En integraciones de seguros, ¿qué patrón garantiza que un cambio en el core y el mensaje de integración se publiquen de forma atómica?",
    options: [
      "Two-Phase Commit sobre todos los sistemas",
      "Transactional Outbox",
      "Polling optimista",
      "Fire-and-forget",
    ],
    answer: 1,
    explanation:
      "El patrón Outbox escribe el evento en la misma transacción de la base de datos y luego un relay lo publica, evitando perder eventos sin necesitar 2PC distribuido.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué describe mejor a 'Insurity' como proveedor?",
    options: [
      "Un proveedor de software y analítica para la industria de seguros P&C",
      "Un banco de inversión",
      "Un framework de pruebas unitarias",
      "Un sistema operativo embebido",
    ],
    answer: 0,
    explanation:
      "Insurity ofrece plataformas de core insurance, analítica y datos para aseguradoras P&C, con oferta cloud.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "Al construir una capa de integración sobre Duck Creek/Insurity, ¿qué principio minimiza el impacto de cambios internos de la suite?",
    options: [
      "Acoplar los microservicios al esquema interno de la suite",
      "Exponer contratos estables y traducir internamente (encapsular el core)",
      "Compartir la base de datos del core con todos los servicios",
      "Eliminar el versionado",
    ],
    answer: 1,
    explanation:
      "Encapsular el core detrás de contratos estables (y una ACL) aísla a los consumidores de los cambios internos de la suite.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },

  // ========================================================================
  // 2) Java 17+, Spring Boot y Quarkus
  // ========================================================================
  {
    question: "¿Qué característica se estabilizó como estándar en Java 17?",
    options: [
      "Sealed classes",
      "Checked exceptions",
      "Applets",
      "La palabra clave goto",
    ],
    answer: 0,
    explanation:
      "Las sealed classes (JEP 409) se volvieron feature estándar en Java 17, permitiendo restringir qué clases pueden extender o implementar un tipo.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué Java 17 es relevante para proyectos empresariales?",
    options: [
      "Es la última versión jamás publicada",
      "Es una versión LTS (Long-Term Support)",
      "Elimina la JVM",
      "No soporta Spring",
    ],
    answer: 1,
    explanation:
      "Java 17 es LTS, con soporte extendido, lo que lo hace una base estable para aplicaciones empresariales de largo plazo.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Qué anotación marca la clase principal de arranque en Spring Boot?",
    options: [
      "@SpringBootApplication",
      "@EnableMain",
      "@BootStart",
      "@MainClass",
    ],
    answer: 0,
    explanation:
      "@SpringBootApplication combina @Configuration, @EnableAutoConfiguration y @ComponentScan en la clase principal.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué hace la autoconfiguración de Spring Boot?",
    options: [
      "Genera el código fuente del negocio",
      "Configura beans automáticamente según las dependencias del classpath",
      "Compila a código nativo siempre",
      "Reemplaza a la JVM",
    ],
    answer: 1,
    explanation:
      "La autoconfiguración crea beans razonables por defecto según lo que detecta en el classpath (p. ej. un DataSource si hay un driver JDBC).",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Qué expone Spring Boot Actuator?",
    options: [
      "Endpoints de operación/monitoreo (health, metrics, info)",
      "Un editor visual de UI",
      "Un compilador de C++",
      "Un servidor SMTP",
    ],
    answer: 0,
    explanation:
      "Actuator añade endpoints operativos como /actuator/health y /actuator/metrics, clave para observabilidad y readiness/liveness.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Cuál es la principal propuesta de valor de Quarkus frente a un stack tradicional?",
    options: [
      "Arranque muy rápido y bajo consumo de memoria, optimizado para cloud/nativo (GraalVM)",
      "Ser incompatible con contenedores",
      "Eliminar la necesidad de JVM en todos los casos",
      "No soportar REST",
    ],
    answer: 0,
    explanation:
      "Quarkus hace gran parte del trabajo en build time y soporta compilación nativa con GraalVM, logrando startup en milisegundos y poca RAM, ideal para Kubernetes/serverless.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "En Spring, ¿qué forma de inyección de dependencias se recomienda para dependencias obligatorias?",
    options: [
      "Inyección por campo con @Autowired",
      "Inyección por constructor",
      "Inyección por setter",
      "Inyección mediante reflexión manual",
    ],
    answer: 1,
    explanation:
      "La inyección por constructor permite campos final, facilita el testeo y deja claras las dependencias obligatorias, evitando estados a medio construir.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué diferencia principal hay entre un record de Java y una clase convencional?",
    options: [
      "El record no puede tener métodos",
      "El record es un portador de datos inmutable con equals/hashCode/toString autogenerados",
      "El record no compila en Java 17",
      "El record reemplaza a las interfaces",
    ],
    answer: 1,
    explanation:
      "Un record genera automáticamente constructor, accessors, equals, hashCode y toString sobre componentes inmutables; ideal para DTOs.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué permite el pattern matching para switch junto con sealed classes en Java moderno?",
    options: [
      "Ejecutar SQL dentro del switch",
      "Exhaustividad comprobada por el compilador sobre un conjunto cerrado de subtipos",
      "Convertir el switch en bucle",
      "Deshabilitar el type checking",
    ],
    answer: 1,
    explanation:
      "Con sealed types el compilador conoce todos los subtipos posibles y puede verificar que el switch cubre todos los casos (exhaustividad).",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué aportan las Virtual Threads (Project Loom, estándar en Java 21) a una app empresarial I/O-bound?",
    options: [
      "Eliminan la necesidad de bases de datos",
      "Permiten manejar muchísima concurrencia con hilos ligeros y estilo de código bloqueante",
      "Compilan a GPU",
      "Reemplazan a REST",
    ],
    answer: 1,
    explanation:
      "Las virtual threads permiten escribir código bloqueante sencillo escalando a cientos de miles de tareas concurrentes sin agotar hilos del SO.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué estrategia de perfiles usa Spring Boot para separar configuración por entorno?",
    options: [
      "@Profile y archivos application-{profile}.yml",
      "Variables compiladas en el .class",
      "Un único archivo sin posibilidad de override",
      "Comentarios en el código",
    ],
    answer: 0,
    explanation:
      "Spring Profiles (@Profile, spring.profiles.active y application-{profile}.yml) permiten configuración y beans específicos por entorno.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "Al compilar Quarkus a imagen nativa con GraalVM, ¿qué suele requerir configuración extra?",
    options: [
      "El uso de reflexión y recursos cargados dinámicamente",
      "Las sumas aritméticas",
      "Los bucles for",
      "La declaración de variables",
    ],
    answer: 0,
    explanation:
      "La compilación AOT con closed-world assumption necesita registrar explícitamente reflexión, proxies dinámicos y recursos, ya que no se descubren en runtime.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué scope de bean entrega Spring por defecto?",
    options: ["prototype", "singleton", "request", "session"],
    answer: 1,
    explanation:
      "Por defecto los beans de Spring son singleton dentro del contenedor (una instancia por ApplicationContext).",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué problema puede causar inyectar un bean prototype dentro de un singleton sin precauciones?",
    options: [
      "El prototype se crea una sola vez y queda 'congelado' en el singleton",
      "El singleton deja de existir",
      "Spring no arranca nunca",
      "Se duplica la base de datos",
    ],
    answer: 0,
    explanation:
      "El singleton resuelve su dependencia una vez al crearse, por lo que reusa siempre la misma instancia prototype. Se resuelve con @Lookup, ObjectProvider o scoped proxy.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Para qué sirve @ConfigurationProperties en Spring Boot?",
    options: [
      "Mapear propiedades externas a un POJO tipado",
      "Definir rutas HTTP",
      "Compilar a nativo",
      "Crear índices en la base de datos",
    ],
    answer: 0,
    explanation:
      "@ConfigurationProperties enlaza de forma tipada y validada un grupo de propiedades (prefijo) a un objeto de configuración.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué es un 'starter' en Spring Boot?",
    options: [
      "Un script de arranque del SO",
      "Un descriptor de dependencias que agrupa librerías coherentes para una funcionalidad",
      "Un endpoint REST",
      "Un tipo de excepción",
    ],
    answer: 1,
    explanation:
      "Un starter (p. ej. spring-boot-starter-web) agrupa dependencias compatibles para una capacidad, simplificando el pom/gradle.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "En Java moderno, ¿qué ventaja ofrece la API Optional bien usada?",
    options: [
      "Garantiza rendimiento máximo",
      "Expresa explícitamente la posible ausencia de un valor, reduciendo NPEs",
      "Elimina la necesidad de tests",
      "Convierte null en excepción siempre",
    ],
    answer: 1,
    explanation:
      "Optional modela explícitamente 'valor presente o ausente' en retornos, evitando el uso implícito y propenso a errores de null.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué modelo de extensiones/estándares adopta Quarkus para portabilidad?",
    options: [
      "Solo APIs propietarias",
      "MicroProfile y Jakarta EE, además de extensiones propias",
      "Únicamente .NET",
      "Exclusivamente COBOL",
    ],
    answer: 1,
    explanation:
      "Quarkus se apoya en estándares como Jakarta EE y Eclipse MicroProfile (Config, Health, Metrics, Fault Tolerance) más sus extensiones.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué hace @Transactional en un método de servicio Spring?",
    options: [
      "Abre y gestiona una transacción, con commit al terminar y rollback ante excepción",
      "Cachea el resultado",
      "Expone el método como REST",
      "Crea un hilo nuevo",
    ],
    answer: 0,
    explanation:
      "@Transactional delimita una transacción gestionada por Spring; por defecto hace rollback ante RuntimeException y commit si finaliza con éxito.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Por qué @Transactional por autoinvocación (llamar a un método interno de la misma clase) puede no aplicar la transacción?",
    options: [
      "Porque Spring usa proxies y la llamada interna no pasa por el proxy",
      "Porque las transacciones no existen en Spring",
      "Porque el método debe ser static",
      "Porque falta la anotación @Bean",
    ],
    answer: 0,
    explanation:
      "El soporte transacional basado en proxies intercepta llamadas externas; una llamada 'this.metodo()' no atraviesa el proxy y se pierde el aspecto.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },

  // ========================================================================
  // 3) APIs REST, Microservicios y OpenAPI
  // ========================================================================
  {
    question: "¿Qué método HTTP es idempotente y se usa para reemplazar un recurso completo?",
    options: ["POST", "PUT", "PATCH", "CONNECT"],
    answer: 1,
    explanation:
      "PUT es idempotente y reemplaza el recurso completo; repetirlo deja el mismo estado. PATCH aplica cambios parciales y POST no es idempotente.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué código HTTP indica que un recurso fue creado con éxito?",
    options: ["200 OK", "201 Created", "204 No Content", "404 Not Found"],
    answer: 1,
    explanation:
      "201 Created indica creación exitosa, típicamente acompañado de la cabecera Location con la URI del nuevo recurso.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué sirve OpenAPI (antes Swagger Specification)?",
    options: [
      "Describir contratos de APIs REST de forma estándar y legible por máquina",
      "Compilar Java a nativo",
      "Orquestar contenedores",
      "Cifrar bases de datos",
    ],
    answer: 0,
    explanation:
      "OpenAPI es una especificación estándar para describir endpoints, parámetros, esquemas y respuestas, habilitando documentación, mocks y generación de clientes.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué código HTTP devuelve una API cuando el cliente no está autenticado?",
    options: ["400", "401", "403", "500"],
    answer: 1,
    explanation:
      "401 Unauthorized indica falta de autenticación válida; 403 Forbidden es autenticado pero sin permisos.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué principio caracteriza a REST respecto al estado de sesión?",
    options: [
      "El servidor mantiene sesión por cliente",
      "Stateless: cada request lleva toda la información necesaria",
      "El cliente no envía cabeceras",
      "Solo se permite XML",
    ],
    answer: 1,
    explanation:
      "REST promueve comunicación stateless: cada petición es autosuficiente, lo que mejora escalabilidad horizontal.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Qué patrón centraliza enrutamiento, autenticación y rate limiting frente a varios microservicios?",
    options: ["API Gateway", "Sidecar de logging", "ORM", "Factory"],
    answer: 0,
    explanation:
      "El API Gateway es la puerta de entrada que concentra ruteo, seguridad, throttling y agregación hacia los microservicios internos.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué estrategia de versionado de API es más transparente para los contratos?",
    options: [
      "No versionar nunca",
      "Versionar (por path, header o media type) y mantener compatibilidad",
      "Cambiar el contrato sin aviso",
      "Eliminar endpoints antiguos de inmediato",
    ],
    answer: 1,
    explanation:
      "Versionar explícitamente (p. ej. /v1, header o content negotiation) permite evolucionar sin romper consumidores existentes.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué problema resuelve el patrón Circuit Breaker en microservicios?",
    options: [
      "Cifrar el tráfico",
      "Evitar cascadas de fallos cortando llamadas a un servicio degradado",
      "Balancear memoria",
      "Generar documentación",
    ],
    answer: 1,
    explanation:
      "El circuit breaker abre el circuito tras fallos repetidos, fallando rápido y dando tiempo a recuperarse al servicio dependiente, evitando el efecto dominó.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "En microservicios, ¿qué implica la práctica de 'database per service'?",
    options: [
      "Todos comparten una sola base para consistencia",
      "Cada servicio es dueño de su almacenamiento, evitando acoplamiento por datos",
      "Prohíbe usar bases de datos",
      "Obliga a usar solo SQL",
    ],
    answer: 1,
    explanation:
      "Cada microservicio posee su propia base; otros acceden vía API/eventos, no tocando sus tablas, lo que preserva autonomía y despliegue independiente.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué patrón mantiene consistencia de datos entre microservicios sin transacciones distribuidas ACID?",
    options: ["Saga", "Two-Phase Commit global", "Singleton", "DAO"],
    answer: 0,
    explanation:
      "El patrón Saga coordina una secuencia de transacciones locales con compensaciones ante fallos, logrando consistencia eventual sin 2PC.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué diferencia hay entre coreografía y orquestación en sagas?",
    options: [
      "Son sinónimos",
      "Coreografía: servicios reaccionan a eventos sin coordinador central; Orquestación: un orquestador dirige los pasos",
      "La orquestación no usa eventos jamás",
      "La coreografía requiere un bus síncrono",
    ],
    answer: 1,
    explanation:
      "En coreografía cada servicio escucha y emite eventos (descentralizado); en orquestación un componente central comanda cada paso de la saga.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué aporta el patrón Backend For Frontend (BFF)?",
    options: [
      "Un backend a medida por tipo de cliente (web/móvil), agregando y adaptando datos",
      "Un segundo frontend sin backend",
      "Eliminar el gateway",
      "Compartir la base entre todos",
    ],
    answer: 0,
    explanation:
      "El BFF ofrece un backend específico por experiencia de cliente, optimizando payloads y lógica de agregación para ese consumidor.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué código HTTP es apropiado cuando se aplica rate limiting?",
    options: ["429 Too Many Requests", "201 Created", "301 Moved", "200 OK"],
    answer: 0,
    explanation:
      "429 Too Many Requests indica que el cliente superó el límite de peticiones; suele acompañarse de Retry-After.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué beneficio da generar clientes/servidores a partir de la especificación OpenAPI (contract-first)?",
    options: [
      "Evita escribir cualquier test",
      "Alinea a productor y consumidor sobre un contrato único y reduce errores de integración",
      "Obliga a usar SOAP",
      "Elimina la necesidad de servidores",
    ],
    answer: 1,
    explanation:
      "Contract-first parte del contrato OpenAPI como fuente de verdad: se generan stubs/clients y se evita la divergencia entre lo documentado y lo implementado.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué son HATEOAS en el modelo de madurez de Richardson?",
    options: [
      "Un formato de compresión",
      "Hipermedios: respuestas que incluyen enlaces para descubrir acciones disponibles",
      "Un algoritmo de hashing",
      "Un tipo de token",
    ],
    answer: 1,
    explanation:
      "HATEOAS (nivel 3 de Richardson) incorpora enlaces hipermedia en las respuestas para que el cliente descubra transiciones de estado posibles.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué cabecera se usa para controlar caché condicional y evitar transferir datos sin cambios?",
    options: ["ETag / If-None-Match", "Content-Length", "Host", "Accept-Language"],
    answer: 0,
    explanation:
      "ETag identifica la versión del recurso; con If-None-Match el servidor puede responder 304 Not Modified si no cambió.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué código HTTP corresponde a un error no controlado del lado servidor?",
    options: ["400", "404", "422", "500"],
    answer: 3,
    explanation:
      "500 Internal Server Error indica un fallo inesperado del servidor; los 4xx son errores del cliente.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Qué estándar define un formato común para cuerpos de error en APIs HTTP?",
    options: [
      "RFC 7807 (Problem Details for HTTP APIs)",
      "RFC 2616 exclusivamente",
      "XML Schema",
      "JSON-RPC",
    ],
    answer: 0,
    explanation:
      "RFC 7807 'Problem Details' estandariza un cuerpo de error (type, title, status, detail, instance) consistente para APIs.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué estrategia de paginación escala mejor para grandes datasets y evita saltos por inserciones?",
    options: [
      "Offset/limit con OFFSET alto",
      "Keyset/cursor pagination",
      "Traer todo y paginar en el cliente",
      "No paginar",
    ],
    answer: 1,
    explanation:
      "La paginación por cursor/keyset usa el valor del último elemento como ancla, evitando el costo y las inconsistencias de OFFSET grande.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Cuál es una buena práctica para operaciones POST que crean recursos y pueden reintentarse?",
    options: [
      "Ignorar duplicados silenciosamente",
      "Aceptar una Idempotency-Key para deduplicar reintentos",
      "Convertir POST en GET",
      "Deshabilitar reintentos del cliente",
    ],
    answer: 1,
    explanation:
      "Una Idempotency-Key permite que reintentos de un POST (por timeouts de red) no creen recursos duplicados.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },

  // ========================================================================
  // 4) Apache Camel y Patrones de Integración (EIP)
  // ========================================================================
  {
    question: "¿Qué es Apache Camel?",
    options: [
      "Un framework de integración que implementa Enterprise Integration Patterns (EIP)",
      "Un servidor de base de datos",
      "Un navegador web",
      "Un lenguaje de programación nuevo",
    ],
    answer: 0,
    explanation:
      "Camel es un framework de integración basado en reglas de ruteo y mediación que implementa los EIP del libro de Hohpe & Woolf.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Camel, ¿qué representa un 'Route'?",
    options: [
      "Una ruta HTTP de Spring MVC",
      "Un flujo de integración desde un endpoint origen a uno o más destinos con procesamiento",
      "Una tabla de base de datos",
      "Un hilo del SO",
    ],
    answer: 1,
    explanation:
      "Un Route define el flujo: from(origen) ... processors/EIPs ... to(destino), orquestando el movimiento y transformación de mensajes.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un 'Component' en Apache Camel?",
    options: [
      "Un conector/factory de endpoints hacia tecnologías externas (http, jms, kafka, file...)",
      "Un bean de negocio",
      "Un test unitario",
      "Un índice de base de datos",
    ],
    answer: 0,
    explanation:
      "Los componentes de Camel (p. ej. kafka, jms, file, http) crean endpoints que conectan las rutas con sistemas o protocolos externos.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué EIP enruta un mensaje a distintos destinos según una condición?",
    options: ["Content-Based Router", "Dead Letter Channel", "Aggregator", "Normalizer"],
    answer: 0,
    explanation:
      "El Content-Based Router examina el contenido del mensaje y lo dirige al destino adecuado según reglas.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el EIP 'Splitter'?",
    options: [
      "Une varios mensajes en uno",
      "Divide un mensaje compuesto en múltiples mensajes individuales",
      "Encripta el mensaje",
      "Elimina mensajes",
    ],
    answer: 1,
    explanation:
      "El Splitter descompone un mensaje (p. ej. una lista) en mensajes individuales para procesarlos por separado.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué EIP combina múltiples mensajes relacionados en uno solo?",
    options: ["Aggregator", "Splitter", "Filter", "Router"],
    answer: 0,
    explanation:
      "El Aggregator correlaciona y combina mensajes relacionados aplicando una estrategia de agregación y una condición de completitud.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "En Camel, ¿para qué sirve el Dead Letter Channel?",
    options: [
      "Acelerar mensajes",
      "Enviar a un destino de error los mensajes que no pudieron procesarse tras los reintentos",
      "Comprimir mensajes",
      "Balancear carga",
    ],
    answer: 1,
    explanation:
      "El Dead Letter Channel captura mensajes fallidos (tras agotar reintentos) y los deriva a un endpoint de error para análisis o reproceso.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el 'Exchange' en el modelo de Camel?",
    options: [
      "Un contenedor del mensaje (In/Out), con headers, body y propiedades, que fluye por la ruta",
      "Un servidor de correo",
      "Un pool de conexiones",
      "Una cola física",
    ],
    answer: 0,
    explanation:
      "El Exchange encapsula el mensaje que atraviesa la ruta, incluyendo el patrón de intercambio (InOnly/InOut), headers, body y properties.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué EIP implementa el patrón request-reply con correlación de respuestas?",
    options: ["Request-Reply (con Correlation Identifier)", "Wire Tap", "Throttler", "Resequencer"],
    answer: 0,
    explanation:
      "El patrón Request-Reply usa un Correlation Identifier para emparejar la respuesta asíncrona con la solicitud original.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace el EIP 'Wire Tap' en Camel?",
    options: [
      "Detiene la ruta",
      "Envía una copia del mensaje a un destino secundario sin alterar el flujo principal",
      "Cifra el mensaje",
      "Lo descarta",
    ],
    answer: 1,
    explanation:
      "Wire Tap duplica el mensaje hacia un endpoint adicional (p. ej. auditoría) mientras el flujo principal continúa normalmente.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "Al integrar con JMS/Kafka vía Camel, ¿cómo se logra procesamiento transaccional confiable?",
    options: [
      "Deshabilitando transacciones",
      "Con transacciones/ack del broker y manejo de redelivery + idempotencia",
      "Usando solo InOut",
      "Procesando en el cliente web",
    ],
    answer: 1,
    explanation:
      "La confiabilidad se logra con transacciones o acknowledgements del broker, políticas de redelivery y consumidores idempotentes.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué EIP transforma un formato de mensaje a otro?",
    options: ["Message Translator", "Message Filter", "Splitter", "Throttler"],
    answer: 0,
    explanation:
      "El Message Translator convierte el mensaje de un formato/estructura a otro, clave en integración entre sistemas heterogéneos.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué EIP descarta mensajes que no cumplen un criterio?",
    options: ["Message Filter", "Aggregator", "Content Enricher", "Normalizer"],
    answer: 0,
    explanation:
      "El Message Filter deja pasar solo los mensajes que cumplen una condición y descarta el resto.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el EIP 'Content Enricher'?",
    options: [
      "Añade datos faltantes al mensaje consultando una fuente externa",
      "Elimina campos",
      "Comprime el mensaje",
      "Ordena mensajes",
    ],
    answer: 0,
    explanation:
      "El Content Enricher completa el mensaje con información adicional obtenida de otro recurso (p. ej. enriquecer un ID con sus detalles).",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué DSLs ofrece Camel para definir rutas?",
    options: [
      "Solo XML",
      "Java DSL, XML, YAML y otras",
      "Únicamente SQL",
      "Solo binario",
    ],
    answer: 1,
    explanation:
      "Camel soporta varias DSLs: Java DSL (fluida), XML, YAML, etc., para expresar rutas según preferencia del equipo.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué EIP controla la tasa máxima de mensajes procesados por unidad de tiempo?",
    options: ["Throttler", "Splitter", "Aggregator", "Wire Tap"],
    answer: 0,
    explanation:
      "El Throttler limita el ritmo de procesamiento para proteger sistemas downstream de sobrecarga.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué principio del libro de EIP favorece Camel al estandarizar la integración?",
    options: [
      "Reinventar un protocolo por integración",
      "Mensajería asíncrona con patrones reutilizables y vocabulario común",
      "Acceso directo a la base del otro sistema",
      "Acoplamiento fuerte entre sistemas",
    ],
    answer: 1,
    explanation:
      "Los EIP promueven la integración por mensajería con un catálogo de patrones reutilizables y un lenguaje compartido entre equipos.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace el EIP 'Normalizer'?",
    options: [
      "Convierte mensajes de distintos formatos a un formato canónico común",
      "Divide mensajes",
      "Reordena mensajes",
      "Limita la tasa",
    ],
    answer: 0,
    explanation:
      "El Normalizer lleva mensajes de formatos diversos a una representación canónica única para su procesamiento homogéneo.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué política permite reintentos con backoff ante fallos transitorios en una ruta Camel?",
    options: [
      "errorHandler/redeliveryPolicy",
      "Un bucle while infinito",
      "Desactivar el error handler",
      "Content-Based Router",
    ],
    answer: 0,
    explanation:
      "La RedeliveryPolicy del error handler define número de reintentos, delay y backoff para fallos transitorios antes de ir al DLC.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué EIP reordena mensajes desordenados según un criterio de secuencia?",
    options: ["Resequencer", "Splitter", "Filter", "Enricher"],
    answer: 0,
    explanation:
      "El Resequencer reordena los mensajes que llegan fuera de orden según un número de secuencia antes de enviarlos.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },

  // ========================================================================
  // 5) Drools y Motores de Reglas
  // ========================================================================
  {
    question: "¿Qué es Drools?",
    options: [
      "Un motor de reglas de negocio (BRMS) basado en reglas producción",
      "Un servidor de aplicaciones",
      "Un ORM",
      "Un navegador",
    ],
    answer: 0,
    explanation:
      "Drools es un Business Rules Management System que evalúa reglas sobre hechos (facts) usando un motor de inferencia.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Drools, ¿qué es un 'fact'?",
    options: [
      "Un archivo de configuración",
      "Un objeto de datos insertado en la working memory sobre el que operan las reglas",
      "Una clase de test",
      "Un endpoint REST",
    ],
    answer: 1,
    explanation:
      "Un fact es un objeto (POJO) insertado en la memoria de trabajo; las reglas evalúan condiciones sobre estos hechos.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué estructura tiene una regla en Drools?",
    options: [
      "when (condiciones) then (acciones)",
      "if-else-switch",
      "try-catch-finally",
      "select-from-where",
    ],
    answer: 0,
    explanation:
      "Una regla DRL tiene la forma 'when <condiciones/patrones> then <acciones>', separando el LHS (condición) del RHS (consecuencia).",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Cuál es la principal ventaja de externalizar lógica en un motor de reglas?",
    options: [
      "Hacer el código más rápido siempre",
      "Permitir cambiar reglas de negocio sin redeployar la aplicación y que expertos de negocio participen",
      "Eliminar la base de datos",
      "Evitar escribir tests",
    ],
    answer: 1,
    explanation:
      "Las reglas quedan separadas del código: se pueden modificar y versionar sin tocar la app, acercando la lógica a los analistas de negocio.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué algoritmo de pattern matching usa clásicamente Drools?",
    options: ["Rete (y variantes como PHREAK)", "Dijkstra", "QuickSort", "RSA"],
    answer: 0,
    explanation:
      "Drools usa una evolución del algoritmo Rete (PHREAK), optimizado para evaluar eficientemente muchas reglas contra muchos hechos.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Drools, ¿qué controla el 'salience' de una regla?",
    options: [
      "La prioridad de disparo cuando varias reglas son activables",
      "El color de la regla",
      "El tipo de dato",
      "La conexión a la base",
    ],
    answer: 0,
    explanation:
      "Salience define la prioridad: ante múltiples reglas activadas en la agenda, se ejecutan primero las de mayor salience.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es la 'agenda' en el motor de Drools?",
    options: [
      "El conjunto de reglas activadas pendientes de ejecutarse, con su orden de disparo",
      "Un calendario de reuniones",
      "La lista de endpoints",
      "El pool de hilos",
    ],
    answer: 0,
    explanation:
      "La agenda contiene las activaciones (reglas cuyas condiciones se cumplen) a la espera de ejecución, resueltas por conflict resolution.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace 'update' / 'modify' dentro del RHS de una regla?",
    options: [
      "Nada relevante",
      "Notifica al motor del cambio en un fact, pudiendo reactivar reglas (encadenamiento)",
      "Cierra la sesión",
      "Borra la base de datos",
    ],
    answer: 1,
    explanation:
      "modify/update informa al motor que un fact cambió, lo que puede re-evaluar condiciones y disparar nuevas reglas (forward chaining).",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué diferencia hay entre una StatefulSession y una StatelessSession en Drools?",
    options: [
      "Ninguna",
      "Stateful mantiene estado entre interacciones; Stateless es de un solo uso sin conservar hechos",
      "Stateless es más lenta siempre",
      "Stateful no permite reglas",
    ],
    answer: 1,
    explanation:
      "La sesión stateful conserva la working memory entre llamadas; la stateless ejecuta y descarta, ideal para evaluaciones puntuales.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué herramienta/representación permite expresar reglas en formato tabular para negocio?",
    options: ["Decision Tables", "Dockerfile", "Jenkinsfile", "Swagger UI"],
    answer: 0,
    explanation:
      "Las Decision Tables (tablas de decisión en hoja de cálculo) permiten a usuarios de negocio definir reglas que Drools traduce a DRL.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es DMN y cómo se relaciona con Drools?",
    options: [
      "Un protocolo de red",
      "Decision Model and Notation: estándar OMG para modelar decisiones, soportado por Drools/Kogito",
      "Un tipo de índice SQL",
      "Un lenguaje de estilos",
    ],
    answer: 1,
    explanation:
      "DMN es un estándar para modelar decisiones de negocio de forma visual; Drools/Kogito pueden ejecutar modelos DMN.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "En seguros, ¿un buen caso de uso para un motor de reglas sería...?",
    options: [
      "Renderizar CSS",
      "Underwriting/elegibilidad y cálculo de primas con reglas cambiantes",
      "Comprimir imágenes",
      "Balancear red",
    ],
    answer: 1,
    explanation:
      "Elegibilidad, suscripción (underwriting) y pricing son reglas de negocio volátiles y complejas, ideales para un BRMS como Drools.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué riesgo introduce tener miles de reglas con muchos cruces en Drools?",
    options: [
      "Ninguno",
      "Complejidad de mantenimiento, conflictos y dificultad para razonar sobre el resultado",
      "Que la JVM desaparezca",
      "Que REST deje de funcionar",
    ],
    answer: 1,
    explanation:
      "Grandes conjuntos de reglas acopladas dificultan el testing, el razonamiento y el mantenimiento; conviene modularizar y gobernar las reglas.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el keyword 'no-loop' en una regla Drools?",
    options: [
      "Evitar que la regla se reactive a sí misma por sus propias modificaciones",
      "Prohibir bucles for",
      "Desactivar el motor",
      "Crear un ciclo infinito",
    ],
    answer: 0,
    explanation:
      "'no-loop true' evita que una regla que modifica un fact se vuelva a disparar por ese mismo cambio, previniendo bucles.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es Kogito en el ecosistema de reglas/procesos?",
    options: [
      "La evolución cloud-native de Drools/jBPM, pensada para Quarkus/Spring Boot",
      "Un editor de video",
      "Un driver JDBC",
      "Un sistema operativo",
    ],
    answer: 0,
    explanation:
      "Kogito moderniza Drools y jBPM para arquitecturas cloud-native, integrándose con Quarkus/Spring Boot y compilación nativa.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En DRL, ¿qué expresa un patrón como 'Cliente( edad > 18 )'?",
    options: [
      "Una consulta SQL",
      "Una condición que matchea facts de tipo Cliente cuya edad supera 18",
      "La creación de una clase",
      "Un import de paquete",
    ],
    answer: 1,
    explanation:
      "Es un patrón de la condición (LHS): matchea objetos Cliente en memoria cuya propiedad edad sea mayor a 18.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué es recomendable mantener los RHS de las reglas simples?",
    options: [
      "Porque Drools no permite código",
      "Para preservar legibilidad, trazabilidad y evitar lógica imperativa compleja en las reglas",
      "Para que el motor no arranque",
      "Porque el RHS no se ejecuta",
    ],
    answer: 1,
    explanation:
      "Mantener acciones simples en el RHS conserva la claridad declarativa; la lógica compleja debería delegarse a servicios para facilitar pruebas.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es forward chaining en un motor de reglas?",
    options: [
      "Partir de los hechos y derivar conclusiones disparando reglas",
      "Partir de la meta y buscar hechos que la soporten",
      "Ejecutar SQL hacia adelante",
      "Un algoritmo de ordenamiento",
    ],
    answer: 0,
    explanation:
      "Forward chaining (orientado por datos) parte de los facts existentes y encadena reglas para inferir nuevas conclusiones.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Cómo se agrupa y activa un subconjunto de reglas en Drools?",
    options: [
      "Con agenda-groups / rule flows",
      "Con anotaciones @RestController",
      "Con índices de base de datos",
      "No es posible agrupar reglas",
    ],
    answer: 0,
    explanation:
      "Los agenda-groups (y ruleflow-groups) permiten activar/priorizar conjuntos de reglas controlando el flujo de ejecución.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué beneficio da integrar Drools con un flujo de procesos (jBPM/BPMN)?",
    options: [
      "Ninguno, son incompatibles",
      "Combinar decisiones declarativas (reglas) con orquestación de procesos de negocio",
      "Reemplazar la base de datos",
      "Eliminar la necesidad de reglas",
    ],
    answer: 1,
    explanation:
      "Procesos (BPMN) orquestan el flujo y delegan las decisiones a reglas (DRL/DMN), separando 'cómo fluye' de 'qué se decide'.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },

  // ========================================================================
  // 6) Kafka, MQ y Mensajería Empresarial
  // ========================================================================
  {
    question: "¿Qué es Apache Kafka?",
    options: [
      "Una plataforma distribuida de streaming de eventos basada en logs particionados",
      "Una base de datos relacional",
      "Un framework de UI",
      "Un servidor web",
    ],
    answer: 0,
    explanation:
      "Kafka es una plataforma de streaming que almacena eventos en topics particionados y replicados como un log append-only distribuido.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Kafka, ¿qué es una 'partición'?",
    options: [
      "Una unidad de paralelismo y orden dentro de un topic",
      "Un índice de base de datos",
      "Un tipo de consumidor",
      "Una cabecera HTTP",
    ],
    answer: 0,
    explanation:
      "Cada topic se divide en particiones; el orden se garantiza dentro de una partición y las particiones permiten paralelizar el consumo.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué garantiza el orden de los mensajes en Kafka?",
    options: [
      "El orden global en todo el topic",
      "El orden solo dentro de cada partición",
      "No hay ningún orden",
      "El orden lo define el consumidor",
    ],
    answer: 1,
    explanation:
      "Kafka garantiza orden dentro de una partición, no a nivel de topic completo; por eso la clave de particionado es clave.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Para qué sirve la 'key' de un mensaje en Kafka?",
    options: [
      "Cifrar el mensaje",
      "Determinar la partición destino, manteniendo juntos los eventos de la misma clave",
      "Autenticar al productor",
      "Comprimir el payload",
    ],
    answer: 1,
    explanation:
      "La key se hashea para elegir partición; así todos los eventos de una misma entidad (p. ej. un cliente) van a la misma partición y conservan orden.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un 'consumer group' en Kafka?",
    options: [
      "Un grupo de consumidores que se reparten las particiones de un topic",
      "Un grupo de productores",
      "Un cluster de brokers",
      "Un tipo de serializador",
    ],
    answer: 0,
    explanation:
      "En un consumer group, cada partición es consumida por un único miembro, permitiendo escalar el consumo horizontalmente.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué diferencia principal hay entre Kafka y una cola tradicional (MQ como ActiveMQ/RabbitMQ)?",
    options: [
      "Kafka borra el mensaje al leerlo; MQ lo retiene",
      "Kafka retiene los eventos en un log por tiempo/espacio y permite re-lectura; MQ típicamente entrega y elimina",
      "Son idénticos",
      "MQ no soporta múltiples consumidores",
    ],
    answer: 1,
    explanation:
      "Kafka conserva los eventos (retención) y permite reprocesar moviendo el offset; las colas tradicionales suelen eliminar el mensaje tras su consumo.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el 'offset' en Kafka?",
    options: [
      "La posición secuencial de un mensaje dentro de una partición",
      "El tamaño del mensaje",
      "El tiempo de vida",
      "La prioridad",
    ],
    answer: 0,
    explanation:
      "El offset identifica la posición de cada registro en su partición; los consumidores trackean hasta qué offset han procesado.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué semántica de entrega es la más difícil de lograr y requiere idempotencia o transacciones?",
    options: ["At-most-once", "At-least-once", "Exactly-once", "No delivery"],
    answer: 2,
    explanation:
      "Exactly-once exige coordinación (productor idempotente + transacciones o consumidores idempotentes); at-least-once es lo habitual y puede duplicar.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "Para no perder datos ante caída de un broker, ¿qué configuración del productor es más segura?",
    options: [
      "acks=0",
      "acks=all (con min.insync.replicas adecuado)",
      "acks=1 siempre",
      "Deshabilitar replicación",
    ],
    answer: 1,
    explanation:
      "acks=all espera confirmación de todas las réplicas en sincronía (min.insync.replicas), maximizando durabilidad a costa de latencia.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué rol cumple el replication factor en un topic de Kafka?",
    options: [
      "Número de copias de cada partición en distintos brokers para tolerancia a fallos",
      "Cantidad de consumidores",
      "Tamaño del batch",
      "Número de particiones",
    ],
    answer: 0,
    explanation:
      "El replication factor define cuántas réplicas de cada partición existen; permite failover si un broker con el líder cae.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un Schema Registry y por qué es útil con Kafka?",
    options: [
      "Un almacén de contraseñas",
      "Un servicio que versiona y valida esquemas (Avro/Protobuf/JSON) garantizando compatibilidad",
      "Un balanceador de carga",
      "Un índice SQL",
    ],
    answer: 1,
    explanation:
      "El Schema Registry gestiona esquemas de mensajes y su evolución compatible, evitando que cambios rompan a los consumidores.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite Kafka Connect?",
    options: [
      "Integrar Kafka con sistemas externos (DBs, S3, etc.) mediante conectores sin código a medida",
      "Compilar Java",
      "Renderizar dashboards",
      "Cifrar discos",
    ],
    answer: 0,
    explanation:
      "Kafka Connect provee conectores source/sink configurables para mover datos entre Kafka y sistemas externos de forma escalable.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Para qué sirve una Dead Letter Queue (DLQ) en mensajería?",
    options: [
      "Acelerar el consumo",
      "Aislar los mensajes que fallan repetidamente para análisis/reproceso sin bloquear el flujo",
      "Comprimir mensajes",
      "Autenticar productores",
    ],
    answer: 1,
    explanation:
      "La DLQ recibe mensajes que no pudieron procesarse tras reintentos, evitando que bloqueen la partición/cola y permitiendo inspección.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué problema causa el 'consumer lag' creciente?",
    options: [
      "Mejora la latencia",
      "Indica que los consumidores no siguen el ritmo de producción, acumulando retraso",
      "Reduce el throughput del productor",
      "No tiene relevancia",
    ],
    answer: 1,
    explanation:
      "El lag es la diferencia entre el último offset producido y el consumido; un lag creciente señala que el consumo va por detrás y hay que escalar u optimizar.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué modelo de mensajería ofrece JMS con 'Topics'?",
    options: [
      "Punto a punto exclusivo",
      "Publicador/suscriptor (pub-sub), múltiples suscriptores reciben el mensaje",
      "Solo request-reply",
      "Sin consumidores",
    ],
    answer: 1,
    explanation:
      "En JMS, los Topics implementan pub-sub (varios suscriptores), mientras que las Queues son punto a punto (un consumidor por mensaje).",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "Si necesitás reprocesar eventos históricos de hace una semana, ¿qué ventaja de Kafka lo facilita?",
    options: [
      "La eliminación inmediata de mensajes",
      "La retención del log: se puede resetear el offset y re-leer desde el pasado",
      "La ausencia de particiones",
      "El pub-sub de JMS",
    ],
    answer: 1,
    explanation:
      "Gracias a la retención, mover el consumer group a un offset anterior permite reprocesar eventos ya entregados (replay).",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué estrategia evita perder mensajes al commitear offsets en at-least-once?",
    options: [
      "Commitear el offset antes de procesar",
      "Procesar primero y commitear el offset después del procesamiento exitoso",
      "No commitear nunca",
      "Commitear en otro topic",
    ],
    answer: 1,
    explanation:
      "Commitear tras procesar evita perder mensajes si el consumidor cae: si falla antes del commit, el mensaje se reentrega (a costa de posibles duplicados).",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es Kafka Streams?",
    options: [
      "Una librería cliente para procesar y transformar streams dentro de la app",
      "Un broker alternativo",
      "Un sistema de archivos",
      "Un protocolo de red",
    ],
    answer: 0,
    explanation:
      "Kafka Streams es una librería para construir aplicaciones de procesamiento de streams (map, join, agregaciones, ventanas) consumiendo y produciendo a topics.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Cómo se incrementa el paralelismo de consumo de un topic?",
    options: [
      "Agregando más particiones y consumidores en el grupo (hasta #particiones)",
      "Reduciendo el número de particiones a 1",
      "Eliminando el consumer group",
      "Usando acks=0",
    ],
    answer: 0,
    explanation:
      "El paralelismo máximo de un consumer group está limitado por el número de particiones; más particiones permiten más consumidores activos.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué cuida la configuración 'enable.idempotence=true' del productor Kafka?",
    options: [
      "Evitar duplicados por reintentos del productor dentro de una sesión",
      "Cifrar el tráfico",
      "Aumentar la retención",
      "Reducir particiones",
    ],
    answer: 0,
    explanation:
      "El productor idempotente evita que los reintentos internos generen duplicados en la partición, base para exactly-once.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },

  // ========================================================================
  // 7) Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)
  // ========================================================================
  {
    question: "¿Cuáles son los tres pilares clásicos de la observabilidad?",
    options: [
      "Logs, métricas y trazas",
      "CPU, RAM y disco",
      "HTML, CSS y JS",
      "Build, test y deploy",
    ],
    answer: 0,
    explanation:
      "Los tres pilares son logs (eventos), metrics (series temporales agregadas) y traces (recorrido de una request por el sistema).",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es OpenTelemetry (OTel)?",
    options: [
      "Un estándar y conjunto de SDKs para instrumentar y exportar telemetría (trazas, métricas, logs)",
      "Una base de datos de series temporales",
      "Un dashboard",
      "Un broker de mensajes",
    ],
    answer: 0,
    explanation:
      "OpenTelemetry es un estándar vendor-neutral (CNCF) con APIs/SDKs y el Collector para generar y exportar telemetría a distintos backends.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Para qué se usa Grafana típicamente?",
    options: [
      "Visualizar métricas y logs en dashboards desde múltiples fuentes",
      "Compilar código",
      "Servir APIs REST",
      "Orquestar contenedores",
    ],
    answer: 0,
    explanation:
      "Grafana es una herramienta de visualización que crea dashboards y alertas sobre fuentes como Prometheus, Loki, Elasticsearch, etc.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En el stack ELK, ¿qué rol cumple Elasticsearch?",
    options: [
      "Almacenar e indexar logs/datos para búsqueda y agregación",
      "Recolectar logs del sistema",
      "Visualizar dashboards",
      "Balancear tráfico",
    ],
    answer: 0,
    explanation:
      "Elasticsearch es el motor de búsqueda e indexación; Logstash/Beats ingieren y transforman, y Kibana visualiza.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En el stack ELK, ¿qué herramienta provee la visualización?",
    options: ["Kibana", "Logstash", "Beats", "Elasticsearch"],
    answer: 0,
    explanation:
      "Kibana es la capa de visualización y exploración sobre los datos indexados en Elasticsearch.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un 'trace' distribuido?",
    options: [
      "El registro del recorrido de una petición a través de varios servicios, compuesto por spans",
      "Un log de errores únicamente",
      "Un gráfico de CPU",
      "Una cola de mensajes",
    ],
    answer: 0,
    explanation:
      "Una traza distribuida sigue una request a través de servicios; cada operación es un span, enlazados por un trace id.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es la propagación de contexto (context propagation) en tracing distribuido?",
    options: [
      "Copiar logs entre servidores",
      "Transmitir el trace/span id entre servicios (p. ej. cabecera traceparent) para correlacionar la traza",
      "Replicar la base de datos",
      "Comprimir métricas",
    ],
    answer: 1,
    explanation:
      "La propagación lleva el contexto de traza (traceparent de W3C Trace Context) a través de los límites de servicio para unir todos los spans de una request.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué distingue a Dynatrace de un simple colector de métricas?",
    options: [
      "Es solo un editor de dashboards",
      "Es una plataforma APM full-stack con auto-instrumentación (OneAgent) y análisis asistido (Davis AI)",
      "No soporta trazas",
      "Es un broker de mensajería",
    ],
    answer: 1,
    explanation:
      "Dynatrace ofrece APM full-stack: descubrimiento automático, instrumentación con OneAgent, detección de topología y análisis de causa raíz con IA.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un SLI y cómo se relaciona con un SLO?",
    options: [
      "SLI es un indicador medible (p. ej. latencia p99); el SLO es el objetivo sobre ese indicador",
      "Son lo mismo",
      "SLI es un contrato legal y SLO una métrica",
      "SLO mide y SLI es el objetivo",
    ],
    answer: 0,
    explanation:
      "El SLI (Service Level Indicator) es la métrica medida; el SLO (Objective) fija el objetivo deseado sobre ese SLI; el SLA es el acuerdo contractual.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja ofrece el muestreo (sampling) de trazas en alta escala?",
    options: [
      "Mejorar la precisión al 100%",
      "Reducir volumen/costo de telemetría conservando trazas representativas",
      "Eliminar la necesidad de métricas",
      "Aumentar la latencia de la app",
    ],
    answer: 1,
    explanation:
      "El sampling (head o tail-based) limita el volumen de trazas almacenadas controlando costo, buscando retener las más útiles (p. ej. errores/lentas).",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué base de datos de series temporales se usa frecuentemente con Grafana para métricas?",
    options: ["Prometheus", "MySQL", "MongoDB", "Redis como TSDB principal"],
    answer: 0,
    explanation:
      "Prometheus es un TSDB y sistema de monitoreo muy usado como fuente de métricas en Grafana, con su lenguaje PromQL.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué práctica mejora la correlación entre logs, métricas y trazas?",
    options: [
      "Usar timestamps distintos por sistema",
      "Incluir el trace id en los logs y etiquetas/labels consistentes",
      "Deshabilitar el tracing",
      "Loggear sin estructura",
    ],
    answer: 1,
    explanation:
      "Propagar el trace id a los logs y usar labels coherentes permite saltar de una métrica a sus trazas y a los logs de esa misma request.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué formato de logging facilita el análisis en ELK?",
    options: [
      "Texto libre sin estructura",
      "Logs estructurados (p. ej. JSON) con campos consistentes",
      "Solo mensajes en mayúsculas",
      "Binario propietario",
    ],
    answer: 1,
    explanation:
      "Los logs estructurados (JSON con campos) se indexan y consultan mucho mejor en Elasticsearch que el texto plano no estructurado.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el OpenTelemetry Collector?",
    options: [
      "Recibir, procesar y exportar telemetría de forma desacoplada del backend",
      "Compilar aplicaciones",
      "Servir el frontend",
      "Gestionar usuarios",
    ],
    answer: 0,
    explanation:
      "El Collector recibe telemetría (receivers), la procesa (processors) y la envía a uno o más backends (exporters), desacoplando la app del destino.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué métrica es clave para medir la experiencia de latencia en APIs?",
    options: [
      "El promedio de latencia únicamente",
      "Percentiles como p95/p99 (latencia de cola)",
      "El número de servidores",
      "El tamaño del repositorio",
    ],
    answer: 1,
    explanation:
      "El promedio oculta outliers; los percentiles altos (p95/p99) reflejan la experiencia de los usuarios afectados por latencias de cola.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es cardinalidad alta en métricas y por qué importa?",
    options: [
      "Muchos valores distintos en labels, que puede explotar el almacenamiento del TSDB",
      "Pocas métricas",
      "Métricas sin nombre",
      "Un tipo de alerta",
    ],
    answer: 0,
    explanation:
      "Labels con muchísimos valores (p. ej. user id) generan enormes combinaciones de series, degradando y encareciendo el TSDB; hay que acotar la cardinalidad.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué endpoints de Spring Boot Actuator son clave para Kubernetes?",
    options: [
      "/actuator/health con liveness y readiness probes",
      "/actuator/shutdown únicamente",
      "/actuator/env solamente",
      "Ninguno sirve para Kubernetes",
    ],
    answer: 0,
    explanation:
      "Las sondas liveness y readiness (expuestas vía Actuator health groups) permiten a Kubernetes reiniciar o dejar de rutar tráfico a un pod según su estado.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué recolecta un 'Beat' (p. ej. Filebeat) en el ecosistema Elastic?",
    options: [
      "Envía logs/datos ligeros desde los hosts hacia Logstash o Elasticsearch",
      "Renderiza dashboards",
      "Compila binarios",
      "Hace balanceo de carga",
    ],
    answer: 0,
    explanation:
      "Los Beats son agentes ligeros (Filebeat, Metricbeat...) que recolectan datos del host y los envían al pipeline Elastic.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué principio diferencia 'monitoreo' de 'observabilidad'?",
    options: [
      "Son exactamente lo mismo",
      "Monitoreo vigila condiciones conocidas; observabilidad permite explorar y diagnosticar estados desconocidos a partir de la telemetría",
      "Observabilidad solo usa logs",
      "El monitoreo no usa métricas",
    ],
    answer: 1,
    explanation:
      "El monitoreo alerta sobre fallos previstos; la observabilidad apunta a poder hacer preguntas nuevas sobre el sistema para diagnosticar lo no anticipado.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es Application Insights (AppInsights)?",
    options: [
      "El servicio APM de Azure Monitor para telemetría de aplicaciones",
      "Un IDE de Microsoft",
      "Una base de datos NoSQL",
      "Un gestor de paquetes",
    ],
    answer: 0,
    explanation:
      "Application Insights, parte de Azure Monitor, recopila trazas, métricas, dependencias y excepciones de aplicaciones para análisis de rendimiento y fallos.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },

  // ========================================================================
  // 8) Arquitecturas Orientadas a Eventos
  // ========================================================================
  {
    question: "¿Qué caracteriza a una arquitectura orientada a eventos (EDA)?",
    options: [
      "Los componentes se comunican produciendo y reaccionando a eventos, de forma desacoplada",
      "Todo se resuelve con llamadas síncronas directas",
      "No hay comunicación entre servicios",
      "Se comparte una única base de datos",
    ],
    answer: 0,
    explanation:
      "En EDA los productores emiten eventos y los consumidores reaccionan, logrando bajo acoplamiento y buena escalabilidad.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un 'evento de dominio'?",
    options: [
      "Un hecho relevante del negocio que ya ocurrió (p. ej. PedidoCreado)",
      "Una tabla de base de datos",
      "Un endpoint REST",
      "Un hilo del SO",
    ],
    answer: 0,
    explanation:
      "Un evento de dominio representa algo que sucedió en el negocio; se nombra en pasado (OrderPlaced, PolicyIssued) y comunica un cambio de estado.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre notificación de evento y event-carried state transfer?",
    options: [
      "No hay diferencia",
      "La notificación solo avisa que algo pasó; el state transfer incluye los datos para evitar callbacks",
      "El state transfer no usa eventos",
      "La notificación lleva todo el estado",
    ],
    answer: 1,
    explanation:
      "La notificación mínima obliga al consumidor a consultar más datos; el event-carried state transfer incluye el estado necesario en el evento, reduciendo acoplamiento temporal.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es Event Sourcing?",
    options: [
      "Persistir el estado actual únicamente",
      "Persistir la secuencia de eventos como fuente de verdad y derivar el estado reproduciéndolos",
      "Un patrón de UI",
      "Un algoritmo de compresión",
    ],
    answer: 1,
    explanation:
      "Event Sourcing guarda todos los eventos que llevaron al estado; el estado actual se reconstruye reproduciendo (replay) esos eventos.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué separa el patrón CQRS?",
    options: [
      "La UI del backend",
      "El modelo de escritura (commands) del modelo de lectura (queries)",
      "Los logs de las métricas",
      "El frontend del gateway",
    ],
    answer: 1,
    explanation:
      "CQRS (Command Query Responsibility Segregation) separa el modelo de comandos (escritura) del de consultas (lectura), optimizando cada uno por separado.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué tipo de consistencia suele implicar una EDA asíncrona?",
    options: [
      "Consistencia fuerte inmediata",
      "Consistencia eventual",
      "Ninguna consistencia",
      "Consistencia transaccional global",
    ],
    answer: 1,
    explanation:
      "Al propagar cambios vía eventos de forma asíncrona, los distintos servicios convergen al mismo estado con el tiempo (consistencia eventual).",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué los consumidores de eventos deben ser idempotentes?",
    options: [
      "Para ir más rápido",
      "Porque la entrega at-least-once puede reentregar un mismo evento y no debe duplicar efectos",
      "Para evitar usar una base de datos",
      "Porque los eventos nunca se repiten",
    ],
    answer: 1,
    explanation:
      "Con entrega at-least-once un evento puede llegar más de una vez; el consumidor idempotente aplica el efecto una sola vez aunque reciba duplicados.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En EDA, ¿qué ventaja aporta el desacoplamiento productor-consumidor?",
    options: [
      "Obliga a desplegar todo junto",
      "Permite evolucionar, escalar y desplegar servicios de forma independiente",
      "Elimina la necesidad de contratos",
      "Fuerza llamadas síncronas",
    ],
    answer: 1,
    explanation:
      "El productor no conoce a sus consumidores; cada parte evoluciona y escala por separado, mejorando agilidad y resiliencia.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué riesgo introduce el versionado de eventos en EDA?",
    options: [
      "Ninguno",
      "Romper a los consumidores si el esquema del evento cambia de forma incompatible",
      "Que los eventos sean más rápidos",
      "Eliminar la necesidad de pruebas",
    ],
    answer: 1,
    explanation:
      "Cambiar el esquema de un evento sin compatibilidad hacia atrás rompe a los consumidores; por eso se gestionan esquemas y evolución compatible (p. ej. Schema Registry).",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué combinación es típica para EDA con Event Sourcing + lecturas rápidas?",
    options: [
      "Event Sourcing con CQRS y proyecciones de lectura",
      "Solo un monolito con una tabla",
      "Polling síncrono de la base",
      "Compartir base entre servicios",
    ],
    answer: 0,
    explanation:
      "Event Sourcing (verdad en eventos) suele combinarse con CQRS: las proyecciones materializan vistas de lectura optimizadas a partir de los eventos.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué problema puede ocultar una EDA mal observada?",
    options: [
      "Nada, siempre es observable",
      "Flujos difíciles de seguir: sin tracing, cuesta rastrear la causa-efecto entre eventos",
      "Exceso de llamadas síncronas",
      "Acoplamiento fuerte garantizado",
    ],
    answer: 1,
    explanation:
      "Al ser asíncrona y desacoplada, seguir el recorrido de un proceso es difícil; el tracing distribuido y la correlación de eventos son esenciales.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'event broker' o 'event backbone'?",
    options: [
      "La infraestructura (p. ej. Kafka) que transporta y persiste los eventos entre servicios",
      "Un tipo de base relacional",
      "Un framework de frontend",
      "Un compilador",
    ],
    answer: 0,
    explanation:
      "El event broker/backbone es el middleware (p. ej. Kafka o un bus) que recibe, almacena y distribuye los eventos entre productores y consumidores.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Cómo se asegura atomicidad entre persistir estado y publicar un evento?",
    options: [
      "Publicando el evento antes de hacer commit",
      "Con el patrón Transactional Outbox",
      "Ignorando los fallos de publicación",
      "Usando dos bases sin coordinación",
    ],
    answer: 1,
    explanation:
      "El Outbox escribe el evento en la misma transacción que el cambio de estado; luego un relay lo publica, evitando inconsistencias sin 2PC.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja operativa da poder re-proyectar desde los eventos (Event Sourcing)?",
    options: [
      "Reconstruir vistas de lectura o corregir bugs reproduciendo el historial",
      "Perder el historial",
      "Evitar backups",
      "Reducir la necesidad de esquema",
    ],
    answer: 0,
    explanation:
      "Al tener el log completo de eventos, se pueden reconstruir proyecciones, crear nuevas vistas o corregir errores reprocesando el historial.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'command' frente a un 'event'?",
    options: [
      "Son sinónimos",
      "Un command expresa una intención de hacer algo (puede rechazarse); un event es un hecho ya ocurrido",
      "Un event solicita acción; un command describe el pasado",
      "Ambos son peticiones HTTP",
    ],
    answer: 1,
    explanation:
      "Un comando pide que algo suceda (imperativo, puede fallar); un evento notifica que algo ya sucedió (hecho inmutable).",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué estrategia ayuda a manejar eventos fuera de orden en EDA?",
    options: [
      "Ignorar el orden siempre",
      "Usar versiones/timestamps en los eventos y lógica que tolere reordenamientos",
      "Prohibir el particionado",
      "Procesar en un solo hilo global",
    ],
    answer: 1,
    explanation:
      "Incluir número de versión o timestamp y diseñar consumidores que descarten eventos obsoletos mitiga problemas de orden entre particiones/servicios.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué patrón ayuda a transformar eventos en acciones de otros sistemas de forma reactiva?",
    options: [
      "Event-driven con procesadores/consumidores por evento",
      "Batch nocturno exclusivamente",
      "Polling sincrónico cada hora",
      "Transacción distribuida 2PC",
    ],
    answer: 0,
    explanation:
      "Consumidores/handlers reactivos reaccionan a cada evento ejecutando acciones (integraciones, side-effects), base del estilo event-driven.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué los eventos deben ser inmutables?",
    options: [
      "Para poder editarlos luego",
      "Porque representan hechos del pasado; cambiarlos falsearía la historia y rompería a los consumidores",
      "Para ahorrar memoria",
      "Porque lo exige HTTP",
    ],
    answer: 1,
    explanation:
      "Un evento es un hecho ocurrido; mutarlo contradice su naturaleza y rompe a quienes ya lo consumieron. Un cambio se modela como un nuevo evento.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué beneficio clave da EDA en integración de sistemas aseguradores heterogéneos?",
    options: [
      "Forzar un único proveedor",
      "Permitir que PAS, billing, claims y analítica reaccionen a cambios sin acoplarse entre sí",
      "Eliminar la necesidad de datos",
      "Obligar a llamadas síncronas",
    ],
    answer: 1,
    explanation:
      "Publicar eventos de dominio (p. ej. PolicyIssued) deja que cada sistema reaccione de forma autónoma, facilitando integrar módulos y proveedores diversos.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'dead letter' en un consumidor de eventos de EDA?",
    options: [
      "Un evento que no pudo procesarse tras reintentos y se deriva aparte para análisis",
      "Un evento duplicado válido",
      "El primer evento del topic",
      "Un evento de prueba",
    ],
    answer: 0,
    explanation:
      "Los eventos que fallan repetidamente se envían a una dead letter queue/topic para no bloquear el flujo y poder inspeccionarlos o reprocesarlos.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },

  // ========================================================================
  // 9) JMeter y Playwright
  // ========================================================================
  {
    question: "¿Para qué se usa Apache JMeter?",
    options: [
      "Pruebas de carga y rendimiento de servicios/APIs",
      "Edición de imágenes",
      "Control de versiones",
      "Diseño de UI",
    ],
    answer: 0,
    explanation:
      "JMeter es una herramienta de pruebas de carga/rendimiento que simula usuarios concurrentes contra APIs, webs, colas y bases.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usa Playwright?",
    options: [
      "Automatización de pruebas end-to-end de aplicaciones web (y API)",
      "Pruebas de carga masiva únicamente",
      "Compilación de Java",
      "Gestión de contenedores",
    ],
    answer: 0,
    explanation:
      "Playwright automatiza navegadores (Chromium, Firefox, WebKit) para pruebas E2E de UI, con soporte multiplataforma y multilenguaje.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En JMeter, ¿qué define un 'Thread Group'?",
    options: [
      "El número de usuarios virtuales, el ramp-up y las iteraciones de la prueba",
      "El color del reporte",
      "El tipo de base de datos",
      "La versión de Java",
    ],
    answer: 0,
    explanation:
      "El Thread Group configura cuántos hilos (usuarios virtuales), en qué tiempo de ramp-up y cuántas veces se ejecuta el plan de prueba.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué elemento de JMeter valida que la respuesta sea correcta?",
    options: ["Assertion", "Timer", "Listener", "Sampler"],
    answer: 0,
    explanation:
      "Las Assertions verifican la respuesta (código, contenido, tiempo); los Samplers generan peticiones, los Timers pausan y los Listeners recogen resultados.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre una prueba de carga, de estrés y de picos (spike)?",
    options: [
      "Son lo mismo",
      "Carga: nivel esperado; estrés: más allá del límite para hallar el punto de quiebre; spike: subida brusca y repentina",
      "Spike mide seguridad",
      "Estrés mide usabilidad",
    ],
    answer: 1,
    explanation:
      "La prueba de carga valida el comportamiento al nivel esperado; la de estrés busca el límite; la de spike evalúa reacción ante aumentos súbitos de tráfico.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué conviene ejecutar JMeter en modo no-GUI para pruebas reales?",
    options: [
      "Porque la GUI da mejores resultados",
      "Porque la GUI consume recursos y distorsiona mediciones; el modo CLI escala mejor",
      "Porque no existe modo GUI",
      "Porque el modo CLI no genera reportes",
    ],
    answer: 1,
    explanation:
      "La GUI sirve para diseñar el plan; para generar carga real se usa el modo no-GUI (CLI), que consume menos y da mediciones más fiables.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Playwright, ¿qué ventaja ofrecen los 'auto-waits'?",
    options: [
      "Esperan automáticamente a que los elementos estén accionables, reduciendo flakiness",
      "Aceleran la red",
      "Compilan el test",
      "Eliminan la necesidad de aserciones",
    ],
    answer: 0,
    explanation:
      "Playwright espera automáticamente a que el elemento sea visible/accionable antes de interactuar, reduciendo tests inestables por timings.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué son los 'web-first assertions' de Playwright?",
    options: [
      "Aserciones que reintentan hasta cumplirse o agotar timeout, adecuadas a UIs asíncronas",
      "Aserciones que fallan de inmediato",
      "Validaciones de base de datos",
      "Chequeos de compilación",
    ],
    answer: 0,
    explanation:
      "Las web-first assertions (p. ej. expect(locator).toBeVisible()) reintentan automáticamente hasta que la condición se cumpla o expire el timeout.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué selectores recomienda Playwright por su resiliencia?",
    options: [
      "Selectores basados en roles/texto accesibles (getByRole, getByText) y test ids",
      "XPaths largos y frágiles",
      "Índices numéricos de nodos",
      "Colores de los elementos",
    ],
    answer: 0,
    explanation:
      "Los locators por rol/accesibilidad o data-testid son más estables ante cambios de maquetado que XPaths o selectores CSS frágiles.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué métrica NO entrega directamente JMeter en un reporte de carga?",
    options: [
      "Throughput (req/s)",
      "Percentiles de tiempo de respuesta",
      "Tasa de error",
      "La causa raíz del cuello de botella en el código",
    ],
    answer: 3,
    explanation:
      "JMeter mide throughput, latencias (percentiles) y errores; la causa raíz en el código requiere correlacionar con APM/observabilidad (p. ej. Dynatrace).",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Cómo se parametrizan datos variables (p. ej. usuarios) en JMeter?",
    options: [
      "Con CSV Data Set Config y variables",
      "Hardcodeando un único valor",
      "Con un compilador",
      "No es posible",
    ],
    answer: 0,
    explanation:
      "El CSV Data Set Config alimenta datos distintos por hilo/iteración, evitando que todos los usuarios virtuales usen el mismo valor.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el 'tracing' de Playwright al depurar fallos?",
    options: [
      "Capturar screenshots, snapshots del DOM y acciones para reproducir el fallo paso a paso",
      "Medir carga de 10k usuarios",
      "Compilar el backend",
      "Generar métricas de CPU del servidor",
    ],
    answer: 0,
    explanation:
      "El trace viewer de Playwright registra acciones, snapshots y screenshots, facilitando entender por qué falló un test E2E.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué herramienta es la adecuada para validar flujos de UI tras un deploy?",
    options: [
      "Playwright (E2E de UI)",
      "JMeter (carga)",
      "Maven",
      "Grafana",
    ],
    answer: 0,
    explanation:
      "Playwright valida funcionalmente los flujos de interfaz; JMeter apunta a rendimiento/carga, no a la corrección funcional de la UI.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué práctica mejora la fiabilidad de tests E2E en CI?",
    options: [
      "Sleeps fijos largos en todos lados",
      "Aislar datos de prueba, usar esperas basadas en estado y evitar dependencias entre tests",
      "Compartir estado global entre tests",
      "Depender del orden de ejecución",
    ],
    answer: 1,
    explanation:
      "Tests independientes, con datos propios y esperas por estado (no sleeps), reducen flakiness y falsos negativos en CI.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el 'ramp-up period' en JMeter?",
    options: [
      "El tiempo en que se van activando gradualmente los usuarios virtuales",
      "El tiempo total de la prueba",
      "La latencia de red",
      "El número de aserciones",
    ],
    answer: 0,
    explanation:
      "El ramp-up define en cuánto tiempo arrancan todos los hilos; un ramp-up gradual evita una avalancha instantánea poco realista.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Playwright puede ejecutar pruebas en paralelo y en varios navegadores?",
    options: [
      "Sí, soporta ejecución paralela y los motores Chromium, Firefox y WebKit",
      "No, solo Chrome en serie",
      "Solo en Internet Explorer",
      "Solo uno por máquina",
    ],
    answer: 0,
    explanation:
      "Playwright paraleliza tests y soporta Chromium, Firefox y WebKit, útil para cobertura cross-browser y velocidad.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "Al hacer pruebas de performance, ¿por qué importa definir un escenario realista?",
    options: [
      "No importa, cualquier carga sirve",
      "Porque patrones y datos irreales producen conclusiones engañosas sobre la capacidad real",
      "Para que el test tarde más",
      "Para evitar usar assertions",
    ],
    answer: 1,
    explanation:
      "Modelar mezcla de operaciones, think-time y datos representativos del tráfico real evita sobre/subestimar la capacidad del sistema.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el 'network interception' en Playwright?",
    options: [
      "Mockear o modificar respuestas de red para probar casos sin backend real",
      "Medir carga del servidor",
      "Compilar el frontend",
      "Gestionar ramas git",
    ],
    answer: 0,
    explanation:
      "Playwright puede interceptar y simular respuestas de red (route/fulfill), aislando la UI de dependencias externas en las pruebas.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué indicador revela saturación en una prueba de carga?",
    options: [
      "Throughput que deja de crecer mientras la latencia y los errores se disparan al subir usuarios",
      "Latencia constante y cero errores siempre",
      "Menos usuarios cada vez",
      "El tamaño del código",
    ],
    answer: 0,
    explanation:
      "Cuando añadir usuarios ya no incrementa el throughput pero la latencia/errores crecen, el sistema alcanzó su punto de saturación.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Cómo se integran JMeter/Playwright en una estrategia de calidad continua?",
    options: [
      "Ejecutándolos solo manualmente una vez al año",
      "Automatizándolos en el pipeline de CI/CD como gates de calidad y performance",
      "Evitando CI por completo",
      "Reemplazando todos los tests unitarios",
    ],
    answer: 1,
    explanation:
      "Integrarlos en CI/CD permite detectar regresiones funcionales (Playwright) y de rendimiento (JMeter) de forma automática en cada cambio.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },

  // ========================================================================
  // 10) SQL Server y Cosmos DB
  // ========================================================================
  {
    question: "¿Qué tipo de base de datos es Azure Cosmos DB?",
    options: [
      "Base de datos NoSQL distribuida globalmente, multimodelo",
      "Base de datos relacional on-premise únicamente",
      "Un motor de búsqueda",
      "Una cola de mensajes",
    ],
    answer: 0,
    explanation:
      "Cosmos DB es una base NoSQL multimodelo (documentos, clave-valor, grafo, columnar) con distribución global y escalado horizontal.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué lenguaje se usa para consultar SQL Server?",
    options: ["T-SQL (Transact-SQL)", "PL/pgSQL", "HiveQL", "Cypher"],
    answer: 0,
    explanation:
      "SQL Server usa T-SQL, la extensión de SQL de Microsoft con procedimientos, variables y control de flujo.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué hace un índice en una tabla de SQL Server?",
    options: [
      "Acelera búsquedas a costa de espacio y de overhead en escrituras",
      "Reduce el tamaño de los datos siempre",
      "Cifra la tabla",
      "Elimina duplicados automáticamente",
    ],
    answer: 0,
    explanation:
      "Un índice mejora la velocidad de lectura/filtrado, pero añade costo de almacenamiento y de mantenimiento en inserciones/actualizaciones.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Cosmos DB, ¿qué determina la escalabilidad y distribución de los datos?",
    options: [
      "La partition key (clave de partición)",
      "El nombre de la base",
      "El color del portal",
      "El número de índices",
    ],
    answer: 0,
    explanation:
      "La partition key define cómo se distribuyen los datos en particiones lógicas/físicas; elegirla bien es clave para escalar y evitar hot partitions.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué miden las RU/s (Request Units) en Cosmos DB?",
    options: [
      "El costo normalizado de las operaciones (throughput aprovisionado)",
      "La latencia de red",
      "El número de usuarios",
      "El tamaño del índice",
    ],
    answer: 0,
    explanation:
      "Las Request Units abstraen CPU, IOPS y memoria por operación; se aprovisiona o autoescala throughput en RU/s y se paga por ello.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia un índice clustered de uno non-clustered en SQL Server?",
    options: [
      "El clustered define el orden físico de la tabla (uno por tabla); el non-clustered es una estructura aparte con punteros",
      "Son idénticos",
      "El non-clustered ordena físicamente la tabla",
      "El clustered no se puede consultar",
    ],
    answer: 0,
    explanation:
      "El índice clustered ordena físicamente las filas (solo uno por tabla); los non-clustered son estructuras separadas que apuntan a las filas.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué herramienta permite analizar el rendimiento de una consulta en SQL Server?",
    options: [
      "El plan de ejecución (execution plan)",
      "El explorador de archivos",
      "El Task Manager",
      "Un compilador C#",
    ],
    answer: 0,
    explanation:
      "El plan de ejecución muestra cómo el optimizador resuelve la query (scans, seeks, joins), revelando cuellos de botella como table scans o spills.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un 'hot partition' en Cosmos DB y por qué es un problema?",
    options: [
      "Una partición que recibe tráfico desproporcionado, agotando sus RU y causando throttling (429)",
      "Una partición con pocos datos",
      "Una partición cifrada",
      "Un índice duplicado",
    ],
    answer: 0,
    explanation:
      "Si la partition key concentra demasiadas operaciones en una partición, esta satura su límite de RU y provoca throttling, aunque sobre throughput global.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué niveles de consistencia ofrece Cosmos DB?",
    options: [
      "Strong, Bounded Staleness, Session, Consistent Prefix y Eventual",
      "Solo Strong",
      "Solo Eventual",
      "Ninguno, siempre es strong",
    ],
    answer: 0,
    explanation:
      "Cosmos DB ofrece cinco niveles de consistencia que equilibran latencia, disponibilidad y frescura de datos, desde Strong hasta Eventual.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué problema de rendimiento causa una consulta con función sobre una columna indexada (p. ej. WHERE YEAR(fecha)=2024)?",
    options: [
      "Hace la consulta no-sargable, impidiendo el uso eficiente del índice",
      "Mejora el uso del índice",
      "Cifra la columna",
      "Crea un índice automáticamente",
    ],
    answer: 0,
    explanation:
      "Aplicar funciones a la columna la vuelve no-sargable: el motor no puede hacer index seek y recurre a scan. Mejor filtrar por rangos (fecha >= '2024-01-01').",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el 'parameter sniffing' en SQL Server?",
    options: [
      "Cuando un plan cacheado para ciertos parámetros resulta subóptimo para otros valores",
      "Un ataque de red",
      "Una función de cifrado",
      "Un tipo de índice",
    ],
    answer: 0,
    explanation:
      "El optimizador cachea un plan según los primeros parámetros; si la distribución de datos varía mucho, ese plan puede ser malo para otros valores.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Cuándo conviene desnormalizar/embeber documentos en Cosmos DB?",
    options: [
      "Cuando los datos se leen juntos frecuentemente y la relación es contenida (1:pocos)",
      "Siempre, sin excepción",
      "Nunca, hay que normalizar como en SQL",
      "Solo para datos binarios",
    ],
    answer: 0,
    explanation:
      "En modelado NoSQL se embeben datos que se consultan juntos y tienen cardinalidad acotada; relaciones muchos-a-muchos o ilimitadas suelen referenciarse.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué cláusula T-SQL devuelve filas de dos tablas que coinciden en la condición de join?",
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "FULL OUTER JOIN"],
    answer: 0,
    explanation:
      "INNER JOIN devuelve solo las filas con coincidencia en ambas tablas; los OUTER incluyen no coincidentes de uno u otro lado.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué ventaja da un índice 'covering' (incluyente) en SQL Server?",
    options: [
      "La consulta se resuelve solo con el índice, evitando key lookups a la tabla",
      "Reduce la seguridad",
      "Elimina la necesidad de WHERE",
      "Cifra las columnas",
    ],
    answer: 0,
    explanation:
      "Un covering index incluye todas las columnas necesarias (clave + INCLUDE), permitiendo responder la query sin acceder a la tabla base.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el Change Feed de Cosmos DB?",
    options: [
      "Procesar de forma incremental los cambios (inserts/updates) de un contenedor",
      "Borrar la base",
      "Cifrar documentos",
      "Crear índices",
    ],
    answer: 0,
    explanation:
      "El Change Feed expone en orden los cambios de un contenedor, habilitando patrones de event-driven, materialización de vistas y sincronización.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué nivel de aislamiento reduce bloqueos de lectura usando versiones de fila en SQL Server?",
    options: [
      "Snapshot / Read Committed Snapshot Isolation (RCSI)",
      "Serializable",
      "Read Uncommitted",
      "Repeatable Read clásico",
    ],
    answer: 0,
    explanation:
      "RCSI/Snapshot usa versionado de filas (tempdb) para que las lecturas no bloqueen a las escrituras, reduciendo contención a costa de uso de tempdb.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué función de ventana asigna un número secuencial a filas según un ORDER BY?",
    options: ["ROW_NUMBER()", "SUM()", "COUNT()", "COALESCE()"],
    answer: 0,
    explanation:
      "ROW_NUMBER() es una función de ventana que numera las filas dentro de una partición según el orden indicado, útil para paginación y deduplicación.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué estrategia de Cosmos DB reduce latencia para usuarios en múltiples regiones?",
    options: [
      "Distribución global con réplicas multi-región (y multi-write si se requiere)",
      "Una sola región siempre",
      "Desactivar réplicas",
      "Usar solo índices clustered",
    ],
    answer: 0,
    explanation:
      "Cosmos DB replica datos en varias regiones cercanas a los usuarios; con multi-region writes se admite escritura en varias regiones, reduciendo latencia.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué un SELECT * en consultas de producción suele ser mala práctica?",
    options: [
      "Trae columnas innecesarias, impide covering indexes y aumenta I/O y tráfico",
      "Siempre es más rápido",
      "Mejora la seguridad",
      "Obliga a crear índices",
    ],
    answer: 0,
    explanation:
      "SELECT * recupera datos no necesarios, dificulta el uso de índices cubrientes y aumenta la transferencia; conviene seleccionar solo las columnas requeridas.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite un procedimiento almacenado frente a consultas ad-hoc en SQL Server?",
    options: [
      "Encapsular lógica reutilizable, con planes cacheados y una superficie de permisos controlada",
      "Evitar por completo los índices",
      "Eliminar la necesidad de transacciones",
      "Convertir SQL en NoSQL",
    ],
    answer: 0,
    explanation:
      "Los stored procedures encapsulan lógica reutilizable, favorecen reuso de planes y permiten otorgar permisos sobre el procedimiento sin exponer las tablas.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },

  // ========================================================================
  // 11) Git, Jenkins, Maven y CI/CD
  // ========================================================================
  {
    question: "¿Qué es Git?",
    options: [
      "Un sistema de control de versiones distribuido",
      "Un servidor de aplicaciones",
      "Un IDE",
      "Una base de datos",
    ],
    answer: 0,
    explanation:
      "Git es un VCS distribuido: cada clon tiene el historial completo, permitiendo trabajar offline y ramificar con facilidad.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué comando crea una nueva rama y cambia a ella en Git?",
    options: [
      "git checkout -b <rama> (o git switch -c)",
      "git commit -m",
      "git pull --rebase",
      "git stash",
    ],
    answer: 0,
    explanation:
      "git checkout -b <rama> (o el moderno git switch -c) crea la rama y posiciona el HEAD en ella.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es Maven?",
    options: [
      "Una herramienta de build y gestión de dependencias para proyectos Java",
      "Un motor de reglas",
      "Un broker de mensajes",
      "Un navegador",
    ],
    answer: 0,
    explanation:
      "Maven gestiona el ciclo de build (compile, test, package, install, deploy) y las dependencias vía el pom.xml y repositorios.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es CI (Integración Continua)?",
    options: [
      "Integrar y validar cambios con builds/tests automáticos frecuentemente",
      "Desplegar manualmente una vez al año",
      "Escribir código sin versionar",
      "Un tipo de base de datos",
    ],
    answer: 0,
    explanation:
      "La Integración Continua fusiona cambios a menudo y los valida automáticamente (build + tests), detectando problemas de integración temprano.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué define un Jenkinsfile?",
    options: [
      "El pipeline como código (etapas, pasos) versionado junto al proyecto",
      "Las dependencias Maven",
      "El esquema de la base",
      "Las reglas de Drools",
    ],
    answer: 0,
    explanation:
      "El Jenkinsfile describe el pipeline (declarativo o scripted) como código, versionado en el repo, habilitando pipeline-as-code.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre Continuous Delivery y Continuous Deployment?",
    options: [
      "Delivery deja el artefacto listo para desplegar (puede requerir aprobación); Deployment despliega a producción automáticamente",
      "Son lo mismo",
      "Delivery no usa pipelines",
      "Deployment no incluye tests",
    ],
    answer: 0,
    explanation:
      "En Continuous Delivery cada cambio queda deployable (con posible gate manual); en Continuous Deployment todo cambio que pasa el pipeline va a producción sin intervención.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja tiene 'git rebase' frente a 'git merge' para integrar cambios?",
    options: [
      "Produce un historial lineal al reaplicar commits sobre la base actualizada",
      "Siempre es más seguro en ramas compartidas",
      "Elimina conflictos automáticamente",
      "No modifica el historial",
    ],
    answer: 0,
    explanation:
      "Rebase reaplica tus commits sobre la punta de la otra rama, dando historial lineal; pero reescribe commits, por lo que no debe usarse en ramas públicas compartidas.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el repositorio local Maven (~/.m2/repository)?",
    options: [
      "Una caché local de artefactos/dependencias descargados",
      "El código fuente del proyecto",
      "Un servidor remoto",
      "La base de datos de la app",
    ],
    answer: 0,
    explanation:
      "Maven guarda en ~/.m2/repository las dependencias y artefactos construidos, evitando redescargas y permitiendo resolución offline.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué estrategia de branching usa ramas de corta vida integradas seguido a main?",
    options: [
      "Trunk-Based Development",
      "Un único commit gigante",
      "Ramas de años de duración",
      "No usar ramas",
    ],
    answer: 0,
    explanation:
      "Trunk-Based Development favorece ramas efímeras y merges frecuentes a main, reduciendo divergencia y facilitando CI; suele apoyarse en feature flags.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un artefacto inmutable en un pipeline y por qué importa?",
    options: [
      "Construir una sola vez y promover el mismo binario por los entornos, evitando rebuilds que introduzcan diferencias",
      "Recompilar en cada entorno",
      "Un archivo de logs",
      "Un índice de base de datos",
    ],
    answer: 0,
    explanation:
      "Build once, deploy many: promover el mismo artefacto por dev/QA/prod garantiza que lo probado es exactamente lo desplegado.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite una estrategia de despliegue blue-green?",
    options: [
      "Mantener dos entornos y cambiar el tráfico al nuevo con rollback inmediato",
      "Desplegar sin pruebas",
      "Eliminar el entorno anterior antes de probar",
      "Compilar más rápido",
    ],
    answer: 0,
    explanation:
      "Blue-green mantiene dos entornos (actual y nuevo); se conmuta el tráfico al nuevo y, si falla, se revierte al anterior de inmediato.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un despliegue canary?",
    options: [
      "Liberar la nueva versión a un pequeño porcentaje de usuarios antes del rollout total",
      "Desplegar a todos de golpe",
      "Un tipo de test unitario",
      "Una rama de Git",
    ],
    answer: 0,
    explanation:
      "El canary expone la nueva versión a un subconjunto de tráfico para detectar problemas con bajo impacto antes de ampliar el despliegue.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Para qué sirve 'git stash'?",
    options: [
      "Guardar temporalmente cambios no commiteados para limpiar el working directory",
      "Borrar ramas remotas",
      "Crear un tag",
      "Fusionar ramas",
    ],
    answer: 0,
    explanation:
      "git stash guarda los cambios locales pendientes en una pila para retomarlos luego, dejando el árbol de trabajo limpio.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué fase de Maven empaqueta el proyecto (p. ej. en un JAR)?",
    options: ["package", "validate", "compile", "clean"],
    answer: 0,
    explanation:
      "La fase 'package' del ciclo de vida default toma el código compilado y lo empaqueta en el formato definido (jar, war...).",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué práctica evita exponer secretos en un pipeline de CI/CD?",
    options: [
      "Hardcodearlos en el Jenkinsfile",
      "Usar un gestor de credenciales/secretos e inyectarlos como variables seguras",
      "Subirlos al repositorio",
      "Imprimirlos en los logs",
    ],
    answer: 1,
    explanation:
      "Los secretos deben vivir en un secret manager (Vault, credenciales de Jenkins, etc.) e inyectarse enmascarados, nunca en el repo ni en logs.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace 'git cherry-pick'?",
    options: [
      "Aplica un commit específico de otra rama a la actual",
      "Elimina todos los commits",
      "Fusiona dos repositorios",
      "Crea un tag anotado",
    ],
    answer: 0,
    explanation:
      "cherry-pick toma uno o varios commits puntuales de otra rama y los reaplica en la rama actual.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué rol cumplen los tests automatizados como 'quality gate' en CI?",
    options: [
      "Bloquear la promoción de un cambio si no pasan los criterios (tests, cobertura, análisis)",
      "Hacer el build más lento sin propósito",
      "Reemplazar el control de versiones",
      "Desplegar sin validación",
    ],
    answer: 0,
    explanation:
      "Los quality gates detienen el pipeline si no se cumplen umbrales (tests, cobertura, seguridad), impidiendo que cambios defectuosos avancen.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da ejecutar builds de Jenkins en agentes efímeros (p. ej. contenedores)?",
    options: [
      "Entornos limpios y reproducibles por build, evitando contaminación entre ejecuciones",
      "Builds menos reproducibles",
      "Imposibilidad de escalar",
      "Mayor acoplamiento al host",
    ],
    answer: 0,
    explanation:
      "Los agentes efímeros arrancan limpios por build, dando reproducibilidad y aislamiento, y permiten escalar horizontalmente la capacidad de CI.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué conviene fijar versiones de dependencias (evitar rangos abiertos) en Maven?",
    options: [
      "Para builds reproducibles y evitar que una versión nueva rompa el build inesperadamente",
      "Para descargar más rápido",
      "Para usar menos memoria",
      "Porque Maven lo prohíbe de otra forma",
    ],
    answer: 0,
    explanation:
      "Versiones fijas (o gestionadas vía dependencyManagement/BOM) dan builds deterministas; los rangos abiertos pueden traer cambios no deseados.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué describe mejor un flujo CI/CD saludable para un microservicio?",
    options: [
      "Commit → build → tests → análisis de calidad → artefacto inmutable → despliegue progresivo con observabilidad",
      "Editar en producción directamente",
      "Desplegar sin pruebas ni versionado",
      "Compilar manualmente en cada servidor",
    ],
    answer: 0,
    explanation:
      "Un pipeline sano automatiza build, pruebas y gates de calidad, promueve un artefacto único y despliega progresivamente con monitoreo para rollback rápido.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
];
