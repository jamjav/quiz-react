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

  // ========================================================================
  // SEGUNDA TANDA — 20 preguntas adicionales por tópico (ángulos distintos)
  // ========================================================================

  // ---- 1) Duck Creek e Insurity ----
  {
    question: "En seguros P&C, ¿qué significa 'underwriting'?",
    options: [
      "El proceso de evaluar el riesgo y decidir si asegurar y a qué precio",
      "El pago de un siniestro",
      "La cancelación de una póliza",
      "El despliegue de la aplicación",
    ],
    answer: 0,
    explanation:
      "El underwriting (suscripción) evalúa el riesgo del solicitante para decidir aceptación, condiciones y prima.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es la 'prima' (premium) en una póliza de seguros?",
    options: [
      "El monto que paga el asegurado por la cobertura",
      "El monto del siniestro",
      "El deducible",
      "La comisión del agente únicamente",
    ],
    answer: 0,
    explanation:
      "La prima es el precio que el asegurado paga (periódicamente o de una vez) a cambio de la cobertura del seguro.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué representa el 'deducible' en un siniestro?",
    options: [
      "La parte del costo que asume el asegurado antes de que pague la aseguradora",
      "La prima mensual",
      "El total de la cobertura",
      "La comisión del ajustador",
    ],
    answer: 0,
    explanation:
      "El deducible es el monto que el asegurado paga de su bolsillo antes de que la aseguradora cubra el resto del siniestro.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué módulo de una suite de seguros gestiona la facturación y cobro de primas?",
    options: ["Billing", "Policy", "Claims", "Rating"],
    answer: 0,
    explanation:
      "El módulo Billing administra facturación, planes de pago, cobros y conciliación de las primas.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es el 'rating' en el contexto de una póliza?",
    options: [
      "El cálculo de la prima según factores de riesgo y reglas tarifarias",
      "La calificación crediticia del banco",
      "El puntaje de la app en la tienda",
      "El nivel de log del sistema",
    ],
    answer: 0,
    explanation:
      "El rating aplica algoritmos y tablas tarifarias sobre los factores de riesgo para determinar la prima de la póliza.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "Al integrar con Duck Creek vía servicios, ¿qué buena práctica reduce acoplamiento a su modelo interno?",
    options: [
      "Consumir directamente sus tablas internas",
      "Exponer/consumir DTOs propios y mapear en una capa de traducción",
      "Replicar su base en cada microservicio",
      "Compartir sesiones de base de datos",
    ],
    answer: 1,
    explanation:
      "Mapear a DTOs propios en una capa de traducción (ACL) evita que los cambios internos de la suite se propaguen a los consumidores.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué describe el término 'carrier' en seguros?",
    options: [
      "La compañía aseguradora que emite la póliza y asume el riesgo",
      "El transportista de paquetes",
      "El servidor de mensajería",
      "El cliente final",
    ],
    answer: 0,
    explanation:
      "El carrier es la aseguradora que suscribe el riesgo y responde por las coberturas de la póliza.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Por qué conviene procesar la generación de documentos de póliza de forma asíncrona?",
    options: [
      "Porque es la única forma técnica posible",
      "Para no bloquear la emisión y tolerar picos, generando el documento en segundo plano",
      "Porque ACORD lo exige",
      "Para evitar usar colas",
    ],
    answer: 1,
    explanation:
      "Generar documentos (PDF, cartas) suele ser costoso; hacerlo asíncrono evita bloquear la transacción de emisión y absorbe picos.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "En una integración PAS ↔ pagos, ¿qué patrón evita doble cobro ante reintentos de red?",
    options: [
      "Reintentos sin control",
      "Idempotencia con clave única de transacción",
      "Fire-and-forget",
      "Polling cada segundo",
    ],
    answer: 1,
    explanation:
      "Una clave de idempotencia por transacción permite que un reintento no genere un segundo cobro, aplicando el efecto una sola vez.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué ventaja ofrece desacoplar el rating en su propio servicio con caché?",
    options: [
      "Permite escalar y proteger el PAS, sirviendo cotizaciones repetidas desde caché",
      "Elimina la necesidad de reglas tarifarias",
      "Hace innecesario el versionado",
      "Impide cotizar",
    ],
    answer: 0,
    explanation:
      "Un servicio de rating con caché reduce carga sobre el PAS y acelera cotizaciones repetidas, mejorando escalabilidad y latencia.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'quote' (cotización) en el flujo de pólizas?",
    options: [
      "Una estimación de prima antes de emitir la póliza",
      "El pago del siniestro",
      "Un endoso aplicado",
      "El cierre de reclamo",
    ],
    answer: 0,
    explanation:
      "El quote es una cotización: calcula una prima tentativa según los datos del riesgo, previa a la emisión formal.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "Al modernizar un core asegurador, ¿qué permite exponer capacidades como APIs sin reescribir el legado?",
    options: [
      "Una capa de API/fachada sobre el core (API-led / facade)",
      "Borrar el legado de inmediato",
      "Compartir su base con todos",
      "Duplicar la lógica en cada cliente",
    ],
    answer: 0,
    explanation:
      "Una fachada de APIs expone capacidades del core de forma controlada y estable, habilitando integración sin reescribirlo todo de golpe.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es la 'reserva' (reserve) en claims?",
    options: [
      "El monto estimado que la aseguradora aparta para pagar un siniestro abierto",
      "La prima cobrada",
      "El deducible del asegurado",
      "La comisión del agente",
    ],
    answer: 0,
    explanation:
      "La reserva es el dinero que la aseguradora provisiona para cubrir el costo estimado de un siniestro aún no cerrado.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué estándar de seguridad conviene al exponer APIs de seguros con datos sensibles?",
    options: [
      "Sin autenticación para simplificar",
      "OAuth2/OIDC con TLS y control de acceso por scopes",
      "Claves en la URL",
      "Solo filtrado por IP",
    ],
    answer: 1,
    explanation:
      "OAuth2/OIDC sobre TLS, con scopes y mínimo privilegio, protege datos sensibles (PII) de pólizas y siniestros.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué problema mitiga aplicar límites de reintento y backoff al integrar con un servicio externo de seguros inestable?",
    options: [
      "Evita saturar al servicio y amplificar su degradación (retry storm)",
      "Elimina la latencia",
      "Garantiza respuestas correctas",
      "Hace innecesario el circuit breaker",
    ],
    answer: 0,
    explanation:
      "Reintentos con backoff/jitter y tope evitan el 'retry storm' que agrava la caída del servicio dependiente.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué rol cumple un 'agente' o 'broker' en la distribución de seguros?",
    options: [
      "Intermediario que vende pólizas y asesora al cliente",
      "El servidor de mensajería",
      "El motor de reglas",
      "El ajustador de siniestros",
    ],
    answer: 0,
    explanation:
      "El agente/broker es el canal de distribución que comercializa pólizas y asesora; los sistemas suelen exponerle portales e integraciones.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Qué estrategia de datos conviene para alimentar reporting regulatorio desde el core sin afectar operación?",
    options: [
      "Consultas pesadas directas al OLTP en horario pico",
      "Replicación/CDC hacia un almacén analítico separado",
      "Bloquear tablas durante el reporte",
      "Exportar manualmente a Excel cada día",
    ],
    answer: 1,
    explanation:
      "CDC o réplicas hacia un data store analítico aíslan las cargas de reporting del OLTP transaccional del core.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué significa que una suite de seguros sea 'configuration-driven'?",
    options: [
      "Que el comportamiento de negocio se define por configuración en vez de recompilar código",
      "Que no admite personalización",
      "Que solo funciona en la nube",
      "Que no usa base de datos",
    ],
    answer: 0,
    explanation:
      "Configuration-driven permite modelar productos y reglas mediante configuración, acelerando cambios sin ciclos de desarrollo tradicionales.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "Al integrar eventos de 'claim closed' hacia analítica y notificaciones, ¿qué desacopla mejor a los consumidores?",
    options: [
      "Publicar el evento en un topic y que cada consumidor reaccione",
      "Llamar síncronamente a cada sistema desde claims",
      "Compartir la base de claims",
      "Un cron que consulte cada hora",
    ],
    answer: 0,
    explanation:
      "Publicar el evento y dejar que analítica/notificaciones reaccionen desacopla claims de sus consumidores y facilita sumar nuevos.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué riesgo introduce depender de un único proveedor de core de seguros (vendor lock-in) y cómo se mitiga?",
    options: [
      "Ninguno; conviene acoplarse al máximo",
      "Dependencia difícil de revertir; se mitiga con capas de abstracción y contratos estables",
      "Solo afecta el rendimiento",
      "Se mitiga compartiendo su base de datos",
    ],
    answer: 1,
    explanation:
      "El lock-in dificulta cambiar de proveedor; abstraer el core tras contratos y una ACL reduce el costo de una eventual migración.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },

  // ---- 2) Java 17+, Spring Boot y Quarkus ----
  {
    question: "¿Qué introdujo Java con los 'text blocks' (estándar en Java 15+)?",
    options: [
      "Cadenas multilínea con triple comilla \"\"\"",
      "Un nuevo tipo numérico",
      "Hilos virtuales",
      "Anotaciones de compilación",
    ],
    answer: 0,
    explanation:
      "Los text blocks (\"\"\" ... \"\"\") permiten literales de cadena multilínea legibles, útiles para JSON, SQL o HTML embebido.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué anotación de Spring marca una clase como controlador REST?",
    options: ["@RestController", "@Service", "@Repository", "@Component solo"],
    answer: 0,
    explanation:
      "@RestController combina @Controller y @ResponseBody, haciendo que los métodos devuelvan directamente el cuerpo de la respuesta.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué anotación inyecta un valor de configuración en un campo en Spring?",
    options: ["@Value", "@Bean", "@Scope", "@Primary"],
    answer: 0,
    explanation:
      "@Value(\"${propiedad}\") inyecta valores de las propiedades/entorno en campos o parámetros.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Spring MVC, ¿qué anotación mapea una petición GET a un método?",
    options: ["@GetMapping", "@PostMapping", "@RequestBody", "@PathVariable"],
    answer: 0,
    explanation:
      "@GetMapping(\"/ruta\") es un atajo de @RequestMapping(method = GET) para manejar peticiones GET.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué diferencia a @Component, @Service y @Repository?",
    options: [
      "Son estereotipos; @Service y @Repository son especializaciones semánticas de @Component (Repository añade traducción de excepciones)",
      "Son idénticas en todo",
      "Solo @Component crea beans",
      "@Service no se escanea",
    ],
    answer: 0,
    explanation:
      "Todas registran beans; @Service/@Repository aportan semántica de capa y @Repository habilita la traducción de excepciones de persistencia.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Cómo maneja Spring Boot las excepciones de forma centralizada en una API REST?",
    options: [
      "Con @ControllerAdvice y @ExceptionHandler",
      "Con bloques try/catch en cada controlador únicamente",
      "No es posible centralizar",
      "Con @Transactional",
    ],
    answer: 0,
    explanation:
      "@ControllerAdvice junto con @ExceptionHandler centraliza el manejo de errores, devolviendo respuestas consistentes (ideal con Problem Details).",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace Spring Data JPA con una interfaz que extiende JpaRepository?",
    options: [
      "Genera la implementación de las operaciones CRUD y queries derivadas en runtime",
      "Obliga a escribir todo el SQL a mano",
      "Crea tablas sin entidades",
      "Reemplaza la JVM",
    ],
    answer: 0,
    explanation:
      "Spring Data implementa en runtime los métodos CRUD y las queries derivadas del nombre del método, reduciendo boilerplate.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué ventaja da @SpringBootTest frente a pruebas unitarias puras?",
    options: [
      "Carga el contexto de Spring para pruebas de integración",
      "Es más rápido que un test unitario",
      "Evita escribir asserts",
      "No requiere dependencias",
    ],
    answer: 0,
    explanation:
      "@SpringBootTest levanta el contexto de la aplicación para pruebas de integración; los unitarios puros son más rápidos pero no prueban el wiring.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Por qué Quarkus hace gran parte del trabajo en 'build time'?",
    options: [
      "Para reducir trabajo en runtime, logrando arranque rápido y menor memoria",
      "Para hacer el build instantáneo",
      "Porque no soporta runtime",
      "Para evitar compilar",
    ],
    answer: 0,
    explanation:
      "Al resolver inyección, configuración y metadatos en build time, Quarkus minimiza el trabajo de arranque y el consumo de memoria.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Quarkus, ¿qué estándar se usa para tolerancia a fallos (retry, circuit breaker, timeout)?",
    options: [
      "MicroProfile Fault Tolerance",
      "JPA",
      "Servlet API",
      "JAXB",
    ],
    answer: 0,
    explanation:
      "MicroProfile Fault Tolerance ofrece anotaciones como @Retry, @CircuitBreaker, @Timeout y @Fallback para resiliencia.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el 'dev mode' (live reload) de Quarkus?",
    options: [
      "Recompilar y recargar cambios al vuelo sin reiniciar manualmente",
      "Desplegar a producción",
      "Compilar a nativo siempre",
      "Desactivar las pruebas",
    ],
    answer: 0,
    explanation:
      "El modo dev de Quarkus recarga los cambios automáticamente al recibir una petición, acelerando el ciclo de desarrollo.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué problema de los Streams de Java evita no reutilizar un stream ya consumido?",
    options: [
      "IllegalStateException: un stream solo puede operarse/consumirse una vez",
      "Un NullPointerException garantizado",
      "Un ciclo infinito",
      "Pérdida de memoria obligatoria",
    ],
    answer: 0,
    explanation:
      "Un Stream es de un solo uso; operarlo de nuevo tras una operación terminal lanza IllegalStateException.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace la operación terminal collect(Collectors.toList()) en un Stream?",
    options: [
      "Materializa los elementos del stream en una lista",
      "Filtra elementos",
      "Ordena el stream",
      "Crea un nuevo stream infinito",
    ],
    answer: 0,
    explanation:
      "collect con Collectors.toList() es una operación terminal que recopila los elementos procesados en una List.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué recomienda la documentación moderna de Spring para manejar configuración sensible (passwords, keys)?",
    options: [
      "Hardcodearla en application.properties en el repo",
      "Externalizarla en variables de entorno o un secret manager (Vault)",
      "Ponerla en el código Java",
      "Loguearla al inicio",
    ],
    answer: 1,
    explanation:
      "Los secretos deben externalizarse (variables de entorno, Vault, config server cifrado), nunca commitearse en properties del repositorio.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un DTO y por qué se usa en la capa web?",
    options: [
      "Un objeto de transferencia de datos que desacopla la API del modelo de dominio/persistencia",
      "Un tipo de índice",
      "Un hilo del SO",
      "Una anotación de Spring",
    ],
    answer: 0,
    explanation:
      "Los DTOs modelan el contrato expuesto, evitando filtrar entidades de dominio/JPA y permitiendo evolucionar la API independientemente.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué valida @Valid junto a Bean Validation (Jakarta Validation) en un controlador?",
    options: [
      "Aplica las restricciones (@NotNull, @Size, etc.) al objeto recibido antes de procesarlo",
      "Valida el certificado TLS",
      "Comprueba la conexión a la base",
      "Verifica el classpath",
    ],
    answer: 0,
    explanation:
      "@Valid dispara la validación declarativa del DTO (anotaciones como @NotNull, @Email, @Size), devolviendo errores si no cumple.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué diferencia práctica hay entre programación reactiva (WebFlux/Mutiny) y el modelo bloqueante tradicional?",
    options: [
      "La reactiva maneja I/O de forma no bloqueante con pocos hilos; la tradicional bloquea un hilo por petición",
      "Son idénticas en recursos",
      "La reactiva no escala",
      "La tradicional no usa hilos",
    ],
    answer: 0,
    explanation:
      "El modelo reactivo no bloquea hilos durante la I/O, escalando con pocos threads; el tradicional dedica un hilo por request mientras espera.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace @Qualifier cuando hay varios beans del mismo tipo?",
    options: [
      "Desambigua indicando cuál bean inyectar",
      "Crea un nuevo bean",
      "Elimina beans duplicados",
      "Cambia el scope",
    ],
    answer: 0,
    explanation:
      "@Qualifier selecciona, entre varios candidatos del mismo tipo, cuál inyectar; se combina con @Primary para definir un default.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el 'classpath scanning' en Spring?",
    options: [
      "El descubrimiento automático de componentes anotados para registrarlos como beans",
      "Un análisis de seguridad",
      "La compilación a nativo",
      "La búsqueda de archivos de log",
    ],
    answer: 0,
    explanation:
      "El component scanning recorre los paquetes buscando clases anotadas (@Component y derivadas) para registrarlas en el contenedor.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question:
      "¿Por qué la compilación nativa (GraalVM) usa 'closed-world assumption'?",
    options: [
      "Porque analiza todo el código alcanzable en build time y no admite carga dinámica no declarada",
      "Porque cierra el mundo a internet",
      "Porque no permite clases",
      "Porque desactiva el GC",
    ],
    answer: 0,
    explanation:
      "La AOT asume que todo el código alcanzable se conoce en compilación; lo dinámico (reflexión, proxies) debe declararse o falla en runtime.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },

  // ---- 3) APIs REST, Microservicios y OpenAPI ----
  {
    question: "¿Qué método HTTP se usa para una actualización parcial de un recurso?",
    options: ["PATCH", "PUT", "GET", "DELETE"],
    answer: 0,
    explanation:
      "PATCH aplica modificaciones parciales; PUT reemplaza el recurso completo.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué código HTTP indica éxito sin contenido de respuesta?",
    options: ["204 No Content", "200 OK", "201 Created", "202 Accepted"],
    answer: 0,
    explanation:
      "204 No Content indica que la operación tuvo éxito y no hay cuerpo que devolver (típico en DELETE/PUT).",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué significa que una operación sea 'segura' (safe) en HTTP?",
    options: [
      "Que no modifica el estado del servidor (p. ej. GET, HEAD)",
      "Que usa HTTPS",
      "Que requiere autenticación",
      "Que es idempotente siempre",
    ],
    answer: 0,
    explanation:
      "Los métodos safe (GET, HEAD, OPTIONS) no deben producir efectos secundarios sobre el estado del recurso.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué código HTTP indica que el recurso solicitado no existe?",
    options: ["404 Not Found", "403 Forbidden", "400 Bad Request", "409 Conflict"],
    answer: 0,
    explanation:
      "404 Not Found indica que el recurso no fue encontrado en el servidor.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué código HTTP es apropiado ante un conflicto de estado (p. ej. versión desactualizada)?",
    options: ["409 Conflict", "200 OK", "404 Not Found", "500 Error"],
    answer: 0,
    explanation:
      "409 Conflict señala que la petición choca con el estado actual del recurso, típico en control de concurrencia optimista.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué describe el modelo de madurez de Richardson para REST?",
    options: [
      "Niveles 0-3: recursos, verbos HTTP e hipermedia (HATEOAS)",
      "Un algoritmo de balanceo",
      "Un protocolo de seguridad",
      "Un formato de compresión",
    ],
    answer: 0,
    explanation:
      "El modelo de Richardson gradúa la 'RESTfulness': nivel 1 recursos, nivel 2 verbos HTTP y códigos, nivel 3 hipermedia.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué sección de un documento OpenAPI define los modelos de datos reutilizables?",
    options: ["components/schemas", "paths", "servers", "security"],
    answer: 0,
    explanation:
      "En OpenAPI 3, components/schemas define objetos reutilizables referenciados con $ref desde los paths.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué patrón descubre dinámicamente instancias de servicios en microservicios?",
    options: [
      "Service Discovery (p. ej. registro/descubrimiento)",
      "Singleton",
      "Decorator",
      "Template Method",
    ],
    answer: 0,
    explanation:
      "El service discovery (con un registro como Eureka/Consul o DNS de Kubernetes) permite localizar instancias sin direcciones fijas.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué resuelve el patrón Bulkhead en microservicios?",
    options: [
      "Aislar recursos (pools) para que un fallo no agote todo y tumbe el sistema completo",
      "Cifrar el tráfico",
      "Versionar la API",
      "Documentar endpoints",
    ],
    answer: 0,
    explanation:
      "El Bulkhead aísla recursos (como pools de hilos/conexiones) por dependencia, evitando que la saturación de una tumbe a las demás.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué garantiza el consumer-driven contract testing (p. ej. Pact)?",
    options: [
      "Que el proveedor cumple las expectativas reales de sus consumidores",
      "Que la base de datos está normalizada",
      "Que el frontend es accesible",
      "Que el build es más rápido",
    ],
    answer: 0,
    explanation:
      "Los contract tests dirigidos por el consumidor verifican que el proveedor respete lo que sus consumidores esperan, detectando rupturas temprano.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué cabecera negocia el formato de la respuesta (JSON, XML)?",
    options: ["Accept", "Authorization", "Host", "Cookie"],
    answer: 0,
    explanation:
      "La cabecera Accept indica los tipos de medio que el cliente prefiere, habilitando content negotiation.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué estándar porta claims de autorización de forma compacta y verificable entre servicios?",
    options: ["JWT (JSON Web Token)", "CSV", "YAML", "XML-RPC"],
    answer: 0,
    explanation:
      "El JWT transporta claims firmados (y opcionalmente cifrados), usado típicamente con OAuth2/OIDC para autenticación/autorización stateless.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué protege un mecanismo de autorización frente a la autenticación?",
    options: [
      "La autorización decide QUÉ puede hacer un usuario ya autenticado; la autenticación verifica QUIÉN es",
      "Son lo mismo",
      "La autorización verifica identidad",
      "La autenticación asigna permisos",
    ],
    answer: 0,
    explanation:
      "Autenticación = verificar identidad; autorización = determinar permisos/acciones permitidas para esa identidad.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué ventaja ofrece documentar la API con OpenAPI además de generar Swagger UI?",
    options: [
      "Permite generar clientes/servidores, mocks y validación automática desde el contrato",
      "Hace la API más rápida",
      "Elimina la necesidad de autenticación",
      "Reduce el tamaño del payload",
    ],
    answer: 0,
    explanation:
      "Un contrato OpenAPI habilita generación de SDKs, servidores stub, mocks y validación, además de documentación interactiva.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué problema introduce un 'distributed monolith'?",
    options: [
      "Servicios tan acoplados que deben desplegarse juntos, con los costos de distribuir y el acoplamiento del monolito",
      "Menor latencia garantizada",
      "Independencia total de despliegue",
      "Cero necesidad de red",
    ],
    answer: 0,
    explanation:
      "Un monolito distribuido tiene microservicios fuertemente acoplados: sufre la complejidad de red sin la autonomía de despliegue esperada.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué define los límites de un microservicio según DDD?",
    options: [
      "Los bounded contexts (contextos delimitados) del dominio",
      "El número de endpoints",
      "El tamaño del archivo",
      "La versión del lenguaje",
    ],
    answer: 0,
    explanation:
      "Domain-Driven Design sugiere alinear cada microservicio con un bounded context, cohesionando el modelo y minimizando acoplamiento.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Para qué sirve la cabecera 'Location' en una respuesta 201 Created?",
    options: [
      "Indicar la URI del recurso recién creado",
      "Redirigir a login",
      "Especificar el idioma",
      "Definir caché",
    ],
    answer: 0,
    explanation:
      "Location devuelve la URI del nuevo recurso, permitiendo al cliente acceder a él directamente tras crearlo.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué estrategia reduce el chattiness (muchas llamadas) entre cliente y microservicios?",
    options: [
      "Agregación en el API Gateway o un BFF",
      "Más llamadas pequeñas",
      "Eliminar el gateway",
      "Compartir la base de datos",
    ],
    answer: 0,
    explanation:
      "Un gateway/BFF puede agregar respuestas de varios servicios en una sola, reduciendo el número de round-trips del cliente.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué código HTTP indica que la petición está mal formada o es inválida?",
    options: ["400 Bad Request", "401 Unauthorized", "404 Not Found", "503 Unavailable"],
    answer: 0,
    explanation:
      "400 Bad Request señala que el servidor no puede procesar la petición por sintaxis o datos inválidos del cliente.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué código HTTP devuelve un servicio temporalmente no disponible o en mantenimiento?",
    options: ["503 Service Unavailable", "200 OK", "301 Moved", "418 I'm a teapot"],
    answer: 0,
    explanation:
      "503 Service Unavailable indica indisponibilidad temporal (sobrecarga o mantenimiento); suele incluir Retry-After.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },

  // ---- 4) Apache Camel y Patrones de Integración (EIP) ----
  {
    question: "En Camel, ¿qué hace el método from() en una ruta?",
    options: [
      "Define el endpoint de origen que inicia la ruta",
      "Finaliza la ruta",
      "Transforma el cuerpo",
      "Crea una excepción",
    ],
    answer: 0,
    explanation:
      "from(uri) declara el consumidor/origen desde donde entran los mensajes a la ruta.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Camel, ¿qué hace to()?",
    options: [
      "Envía el mensaje a un endpoint destino (productor)",
      "Lee de una cola",
      "Divide el mensaje",
      "Filtra mensajes",
    ],
    answer: 0,
    explanation:
      "to(uri) envía el Exchange a un endpoint destino; puede encadenarse para múltiples destinos secuenciales.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un 'Processor' en Apache Camel?",
    options: [
      "Un punto de extensión donde se ejecuta lógica Java sobre el Exchange",
      "Un tipo de base de datos",
      "Un broker de mensajes",
      "Un archivo de configuración",
    ],
    answer: 0,
    explanation:
      "Un Processor implementa la interfaz Processor para manipular el Exchange (leer/modificar headers o body) dentro de la ruta.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué EIP corresponde a 'choice/when/otherwise' en la DSL de Camel?",
    options: [
      "Content-Based Router",
      "Aggregator",
      "Splitter",
      "Throttler",
    ],
    answer: 0,
    explanation:
      "choice().when(...).otherwise(...) implementa el Content-Based Router, enrutando según condiciones sobre el mensaje.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué lenguaje de expresiones se usa a menudo en Camel para extraer datos del mensaje?",
    options: ["Simple (y otros como XPath, JSONPath)", "Solo SQL", "Solo regex", "Bytecode"],
    answer: 0,
    explanation:
      "Camel soporta varios lenguajes de expresión: Simple, XPath, JSONPath, etc., para enrutar, filtrar o transformar.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué patrón EIP usa el 'Recipient List'?",
    options: [
      "Enviar un mensaje a una lista dinámica de destinatarios calculada en runtime",
      "Combinar mensajes",
      "Limitar la tasa",
      "Reordenar mensajes",
    ],
    answer: 0,
    explanation:
      "El Recipient List determina en tiempo de ejecución a qué conjunto de destinatarios enviar el mensaje.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué combinación de EIP implementa el patrón 'Scatter-Gather'?",
    options: [
      "Enviar a varios destinos (scatter) y agregar las respuestas (gather)",
      "Dividir y descartar",
      "Filtrar y reordenar",
      "Throttle y wiretap",
    ],
    answer: 0,
    explanation:
      "Scatter-Gather distribuye la petición a múltiples servicios y luego agrega sus respuestas en un resultado combinado.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué EIP evita procesar el mismo mensaje dos veces?",
    options: [
      "Idempotent Consumer",
      "Splitter",
      "Content Enricher",
      "Resequencer",
    ],
    answer: 0,
    explanation:
      "El Idempotent Consumer usa un repositorio de identificadores ya vistos para descartar duplicados.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite onException() en una ruta Camel?",
    options: [
      "Definir manejo específico por tipo de excepción (reintentos, destino de error, continuación)",
      "Lanzar siempre la excepción",
      "Ignorar todos los errores silenciosamente por defecto",
      "Deshabilitar la ruta",
    ],
    answer: 0,
    explanation:
      "onException(Tipo.class) especifica cómo manejar ese error: redeliveries, handled, continued o derivar a un endpoint.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja tiene usar el componente 'direct' entre rutas Camel?",
    options: [
      "Invocación síncrona in-process para modularizar rutas sin broker externo",
      "Persistencia garantizada",
      "Comunicación entre máquinas",
      "Cifrado automático",
    ],
    answer: 0,
    explanation:
      "El componente direct enlaza rutas de forma síncrona en el mismo contexto, útil para componer y reutilizar sub-rutas.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre los componentes 'direct' y 'seda' en Camel?",
    options: [
      "direct es síncrono in-process; seda es asíncrono con una cola en memoria y pool de hilos",
      "Son idénticos",
      "seda es síncrono",
      "direct usa red",
    ],
    answer: 0,
    explanation:
      "direct ejecuta en el hilo llamante (síncrono); seda desacopla con una cola en memoria y consumidores asíncronos.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué patrón EIP representa el 'Message Channel'?",
    options: [
      "El conducto lógico por donde viajan los mensajes entre productor y consumidor",
      "Un transformador de formato",
      "Un filtro de contenido",
      "Un temporizador",
    ],
    answer: 0,
    explanation:
      "El Message Channel es la abstracción del canal que conecta emisores y receptores en la mensajería.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué hace un 'Polling Consumer' (p. ej. componente file/ftp) en Camel?",
    options: [
      "Consulta periódicamente el origen en busca de nuevos mensajes",
      "Recibe push del broker",
      "Divide mensajes",
      "Cifra el canal",
    ],
    answer: 0,
    explanation:
      "El Polling Consumer sondea activamente el recurso (archivos, FTP, base) en intervalos para obtener mensajes.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué EIP agrega información de ruteo en una cabecera para decidir el camino?",
    options: [
      "Message Router basado en headers",
      "Content Enricher",
      "Claim Check",
      "Normalizer",
    ],
    answer: 0,
    explanation:
      "Un router puede decidir el destino según cabeceras del mensaje; los headers transportan metadatos de ruteo.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el EIP 'Claim Check'?",
    options: [
      "Guarda un payload grande en un store y lleva solo una referencia por el canal, recuperándolo luego",
      "Valida siniestros",
      "Divide mensajes",
      "Reordena por secuencia",
    ],
    answer: 0,
    explanation:
      "El Claim Check almacena datos voluminosos externamente y hace circular solo una clave, reduciendo el tamaño del mensaje en tránsito.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué conviene que las rutas Camel sean idempotentes al consumir de un broker con at-least-once?",
    options: [
      "Porque el broker puede reentregar mensajes y no deben duplicarse efectos",
      "Porque Camel no soporta transacciones",
      "Porque mejora el formato",
      "Porque elimina los headers",
    ],
    answer: 0,
    explanation:
      "Con at-least-once hay reentregas; rutas/consumidores idempotentes evitan efectos duplicados ante el mismo mensaje.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite marcar una excepción como 'handled' en onException?",
    options: [
      "Que Camel considere el error gestionado y no lo propague, continuando el flujo definido",
      "Que la ruta se detenga para siempre",
      "Que se ignore el DLC",
      "Que se reinicie el contexto",
    ],
    answer: 0,
    explanation:
      "handled(true) indica que la excepción fue manejada; Camel no la relanza y sigue según lo definido en el manejador.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué EIP describe un 'Event Message' frente a un 'Command Message'?",
    options: [
      "Event notifica que algo ocurrió; Command solicita ejecutar una acción",
      "Son idénticos",
      "Event pide acción",
      "Command notifica el pasado",
    ],
    answer: 0,
    explanation:
      "En el catálogo EIP, el Event Message comunica un hecho; el Command Message invoca una operación en el receptor.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué beneficio da desplegar rutas Camel sobre Spring Boot o Quarkus?",
    options: [
      "Integración con el ecosistema (DI, config, actuator/health) y despliegue estándar",
      "Elimina la necesidad de endpoints",
      "Impide usar EIPs",
      "Fuerza a usar XML únicamente",
    ],
    answer: 0,
    explanation:
      "Camel sobre Spring Boot/Quarkus aprovecha inyección, configuración, métricas y health checks, simplificando operación y despliegue.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el 'Load Balancer' EIP en Camel?",
    options: [
      "Distribuir mensajes entre varios endpoints según una estrategia (round-robin, failover, etc.)",
      "Comprimir mensajes",
      "Validar esquemas",
      "Reordenar por secuencia",
    ],
    answer: 0,
    explanation:
      "El Load Balancer EIP reparte la carga entre destinos con estrategias como round-robin, random o failover.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },

  // ---- 5) Drools y Motores de Reglas ----
  {
    question: "En Drools, ¿qué extensión tienen los archivos de reglas?",
    options: [".drl", ".java", ".sql", ".yaml"],
    answer: 0,
    explanation:
      "Las reglas de Drools se escriben en archivos .drl (Drools Rule Language).",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es la 'working memory' en Drools?",
    options: [
      "El espacio donde viven los facts insertados sobre los que operan las reglas",
      "El disco duro del servidor",
      "La caché del navegador",
      "Un archivo de log",
    ],
    answer: 0,
    explanation:
      "La working memory (KieSession) contiene los hechos; el motor evalúa las reglas contra su contenido.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué keyword inserta la consecuencia de una regla un nuevo fact en la memoria?",
    options: ["insert", "select", "import", "when"],
    answer: 0,
    explanation:
      "insert(obj) agrega un nuevo fact a la working memory desde el RHS, pudiendo activar otras reglas.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "En DRL, ¿qué separa la condición de la acción en una regla?",
    options: ["Las palabras clave when y then", "if y else", "try y catch", "begin y end"],
    answer: 0,
    explanation:
      "La estructura es 'when <condiciones> then <acciones> end', separando LHS (when) de RHS (then).",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un KieSession en Drools?",
    options: [
      "La sesión del motor que contiene la working memory y permite disparar reglas (fireAllRules)",
      "Un pool de conexiones a base",
      "Un archivo de configuración XML",
      "Un endpoint REST",
    ],
    answer: 0,
    explanation:
      "La KieSession es la instancia de ejecución del motor: inserta facts y dispara reglas con fireAllRules().",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el método fireAllRules() en Drools?",
    options: [
      "Evalúa y ejecuta todas las reglas activables en la agenda",
      "Borra la working memory",
      "Compila los .drl",
      "Cierra la sesión",
    ],
    answer: 0,
    explanation:
      "fireAllRules() procesa la agenda disparando las reglas cuyas condiciones se cumplen, hasta que no haya más activaciones.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué keyword restringe una regla a dispararse solo si NO existe cierto fact?",
    options: ["not", "exists", "forall", "collect"],
    answer: 0,
    explanation:
      "'not Pattern()' hace que la regla matchee cuando no existe ningún fact que cumpla el patrón.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el keyword 'exists' en el LHS de una regla?",
    options: [
      "Disparar si existe al menos un fact que cumpla el patrón, sin vincular múltiples veces",
      "Eliminar facts",
      "Crear una sesión nueva",
      "Ordenar la agenda",
    ],
    answer: 0,
    explanation:
      "'exists' evalúa la presencia de al menos un match sin generar una activación por cada coincidencia.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace la función 'collect' en una regla Drools?",
    options: [
      "Agrupa en una colección los facts que cumplen un patrón para razonar sobre el conjunto",
      "Borra la memoria",
      "Genera logs",
      "Compila reglas",
    ],
    answer: 0,
    explanation:
      "collect reúne en una colección los hechos que matchean, permitiendo condiciones sobre el agregado (p. ej. tamaño).",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da mantener las reglas en un repositorio versionado (p. ej. Business Central)?",
    options: [
      "Gobierno, trazabilidad y despliegue controlado de los cambios de reglas",
      "Que las reglas se ejecuten más rápido",
      "Eliminar la necesidad de pruebas",
      "Evitar el versionado de código",
    ],
    answer: 0,
    explanation:
      "Versionar y gobernar las reglas da trazabilidad, revisión y despliegues controlados, clave cuando negocio participa.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un KieBase en Drools?",
    options: [
      "El repositorio compilado de conocimiento (reglas/procesos) del cual se crean sesiones",
      "Una tabla de base de datos",
      "Un endpoint HTTP",
      "Un archivo de logs",
    ],
    answer: 0,
    explanation:
      "El KieBase contiene las reglas y procesos compilados; a partir de él se crean KieSessions para ejecutar.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué conviene evitar lógica de control compleja (bucles, side-effects) en el RHS?",
    options: [
      "Porque rompe la naturaleza declarativa y dificulta razonar/testear; mejor delegar a servicios",
      "Porque el RHS no se ejecuta",
      "Porque Drools no soporta Java",
      "Porque hace las reglas más rápidas",
    ],
    answer: 0,
    explanation:
      "El valor de un motor de reglas es lo declarativo; meter lógica imperativa compleja en el RHS lo oscurece y complica el testing.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es backward chaining y lo soporta Drools?",
    options: [
      "Razonamiento dirigido por objetivos; Drools lo soporta vía queries",
      "Un algoritmo de ordenamiento, no soportado",
      "Compilación a nativo",
      "Un tipo de índice SQL",
    ],
    answer: 0,
    explanation:
      "El backward chaining parte de una meta y busca hechos que la sustenten; Drools lo soporta mediante queries.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En una tabla de decisión, ¿qué representan típicamente las filas?",
    options: [
      "Reglas individuales (combinaciones de condiciones y acciones)",
      "Columnas de base de datos",
      "Endpoints REST",
      "Hilos del SO",
    ],
    answer: 0,
    explanation:
      "Cada fila de una decision table suele representar una regla: valores de condición que, si se cumplen, disparan las acciones de esa fila.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja aporta el estándar DMN frente a escribir DRL directamente?",
    options: [
      "Modelado visual de decisiones comprensible para negocio, independiente del motor",
      "Mayor acoplamiento al código",
      "Elimina la necesidad de reglas",
      "Solo funciona en memoria",
    ],
    answer: 0,
    explanation:
      "DMN ofrece una notación visual estándar (tablas de decisión, DRD) legible por negocio y portable entre motores que lo soporten.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué pasa si dos reglas con el mismo salience son activables a la vez?",
    options: [
      "El motor aplica una estrategia de resolución de conflictos (p. ej. orden) para elegir",
      "El motor se detiene con error",
      "Ninguna se ejecuta",
      "Se ejecutan en paralelo en hilos",
    ],
    answer: 0,
    explanation:
      "Ante empate de salience, Drools usa estrategias de conflict resolution (como orden de carga) para decidir el disparo.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite 'retract'/'delete' en el RHS de una regla?",
    options: [
      "Eliminar un fact de la working memory, pudiendo desactivar reglas que dependían de él",
      "Borrar la base de datos",
      "Cerrar la sesión HTTP",
      "Recompilar el KieBase",
    ],
    answer: 0,
    explanation:
      "delete/retract quita un hecho de la memoria; esto puede invalidar activaciones que dependían de ese fact.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Cuándo NO conviene un motor de reglas?",
    options: [
      "Cuando la lógica es simple, estable y pequeña: añade complejidad innecesaria",
      "Cuando las reglas cambian mucho",
      "Cuando negocio debe mantener la lógica",
      "Cuando hay cientos de reglas cruzadas",
    ],
    answer: 0,
    explanation:
      "Para lógica trivial y estable, un BRMS agrega sobrecarga; brilla cuando las reglas son muchas, volátiles y las toca negocio.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un 'global' en una regla Drools?",
    options: [
      "Una variable/objeto compartido disponible en las reglas (p. ej. un servicio o logger)",
      "Un fact normal",
      "Una tabla de base",
      "Un endpoint",
    ],
    answer: 0,
    explanation:
      "Un global expone a las reglas un objeto externo (servicio, logger, acumulador) que no participa del pattern matching como fact.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué el algoritmo Rete/PHREAK es eficiente con muchas reglas y hechos?",
    options: [
      "Comparte y memoriza evaluaciones parciales en una red, evitando re-evaluar todo en cada cambio",
      "Porque ordena los facts alfabéticamente",
      "Porque ejecuta todo en la GPU",
      "Porque ignora las condiciones",
    ],
    answer: 0,
    explanation:
      "Rete construye una red que comparte nodos de condición y memoriza resultados parciales, re-evaluando solo lo afectado por cada cambio.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },

  // ---- 6) Kafka, MQ y Mensajería Empresarial ----
  {
    question: "¿Qué rol tiene un 'broker' en Kafka?",
    options: [
      "Un servidor del cluster que almacena particiones y atiende a productores/consumidores",
      "Un cliente productor",
      "Una base de datos relacional",
      "Un balanceador HTTP",
    ],
    answer: 0,
    explanation:
      "Un broker es un nodo del cluster Kafka que guarda particiones y sirve lecturas/escrituras a los clientes.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un 'topic' en Kafka?",
    options: [
      "Una categoría/canal nombrado donde se publican y del que se consumen eventos",
      "Un consumidor",
      "Un índice SQL",
      "Una conexión TCP",
    ],
    answer: 0,
    explanation:
      "Un topic es el canal lógico, dividido en particiones, donde los productores escriben y los consumidores leen eventos.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Kafka, ¿qué es el 'leader' de una partición?",
    options: [
      "La réplica que atiende lecturas/escrituras; las demás son followers que replican",
      "El consumidor más rápido",
      "El primer productor",
      "Un balanceador externo",
    ],
    answer: 0,
    explanation:
      "Cada partición tiene una réplica líder que maneja la I/O; las followers replican el log y pueden asumir el liderazgo ante fallo.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el 'ISR' (In-Sync Replicas) en Kafka?",
    options: [
      "El conjunto de réplicas al día con el líder, elegibles para confirmar escrituras y liderar",
      "El número de consumidores",
      "Un tipo de serializador",
      "El offset inicial",
    ],
    answer: 0,
    explanation:
      "Las ISR son las réplicas sincronizadas con el líder; min.insync.replicas y acks=all se apoyan en ellas para durabilidad.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ocurre durante un 'rebalance' en un consumer group?",
    options: [
      "Se reasignan las particiones entre los consumidores (p. ej. al unirse/salir uno)",
      "Se borran los topics",
      "Se reinician los brokers",
      "Se duplican los mensajes",
    ],
    answer: 0,
    explanation:
      "El rebalance redistribuye particiones cuando cambia la membresía del grupo; durante él el consumo se pausa brevemente.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué política de retención permite conservar solo el último valor por clave?",
    options: ["Log compaction", "delete por tiempo", "acks=all", "round-robin"],
    answer: 0,
    explanation:
      "La compaction retiene el último mensaje por clave, útil para mantener el estado más reciente de cada entidad (changelog).",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué formato de serialización compacto y con esquema se usa mucho con Kafka?",
    options: ["Avro (o Protobuf)", "CSV plano", "HTML", "YAML sin esquema"],
    answer: 0,
    explanation:
      "Avro y Protobuf ofrecen serialización binaria compacta con esquema, integrándose con el Schema Registry para evolución compatible.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da el batching y la compresión en el productor Kafka?",
    options: [
      "Mayor throughput y menor uso de red a costa de algo de latencia",
      "Garantiza orden global",
      "Elimina la necesidad de particiones",
      "Reduce la durabilidad",
    ],
    answer: 0,
    explanation:
      "Agrupar mensajes (linger.ms/batch.size) y comprimir mejora el rendimiento de red; añade un poco de latencia por el agrupamiento.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué diferencia a una Queue de un Topic en JMS?",
    options: [
      "Queue: un consumidor por mensaje (punto a punto); Topic: pub-sub a múltiples suscriptores",
      "Son idénticos",
      "Queue es pub-sub",
      "Topic entrega a un solo consumidor",
    ],
    answer: 0,
    explanation:
      "La Queue reparte cada mensaje a un único consumidor; el Topic difunde a todos los suscriptores (publish-subscribe).",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un 'durable subscriber' en JMS?",
    options: [
      "Un suscriptor que recibe los mensajes publicados aun si estuvo desconectado temporalmente",
      "Un productor persistente",
      "Una cola cifrada",
      "Un broker replicado",
    ],
    answer: 0,
    explanation:
      "El suscriptor durable conserva su suscripción: el broker retiene los mensajes de su topic mientras está offline y se los entrega al reconectar.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el 'transactional producer' de Kafka?",
    options: [
      "Escribir a múltiples particiones/topics de forma atómica (todo o nada), base de exactly-once",
      "Enviar sin confirmación",
      "Reducir las particiones",
      "Eliminar el Schema Registry",
    ],
    answer: 0,
    explanation:
      "Las transacciones permiten commits atómicos sobre varias particiones/topics, habilitando procesamiento exactly-once end-to-end.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace la configuración 'auto.offset.reset=earliest'?",
    options: [
      "Si no hay offset comprometido, el consumidor empieza desde el inicio del log",
      "Borra los mensajes",
      "Reinicia el broker",
      "Desactiva el consumo",
    ],
    answer: 0,
    explanation:
      "earliest hace que un consumidor sin offset previo lea desde el comienzo disponible; 'latest' leería solo los nuevos.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Cómo se garantiza el orden de eventos de una misma entidad en Kafka?",
    options: [
      "Usando la misma key para que vayan a la misma partición",
      "Aumentando el replication factor",
      "Usando más consumer groups",
      "Deshabilitando el batching",
    ],
    answer: 0,
    explanation:
      "La key determina la partición; con la misma key todos los eventos de la entidad caen en una partición y conservan su orden.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué problema puede causar tener más consumidores que particiones en un grupo?",
    options: [
      "Los consumidores sobrantes quedan inactivos (sin partición asignada)",
      "Duplican todos los mensajes",
      "Reducen la durabilidad",
      "Borran offsets",
    ],
    answer: 0,
    explanation:
      "Cada partición la consume un solo miembro del grupo; si hay más consumidores que particiones, los extra permanecen ociosos.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué métrica operativa conviene monitorear para la salud del consumo en Kafka?",
    options: [
      "El consumer lag por partición",
      "El tamaño del logo de la app",
      "El número de endpoints REST",
      "La versión de Java",
    ],
    answer: 0,
    explanation:
      "El consumer lag (offset producido vs consumido) revela si el consumo sigue el ritmo; su crecimiento alerta cuellos de botella.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué reemplazó a ZooKeeper para la gestión de metadatos en Kafka moderno?",
    options: ["KRaft (Kafka Raft)", "Redis", "etcd", "PostgreSQL"],
    answer: 0,
    explanation:
      "KRaft integra el consenso de metadatos en Kafka (basado en Raft), eliminando la dependencia de ZooKeeper.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué garantiza 'at-most-once' como semántica de entrega?",
    options: [
      "Cada mensaje se entrega como mucho una vez (puede perderse, no duplicarse)",
      "Nunca se pierde ni se duplica",
      "Siempre se duplica",
      "Se entrega al menos una vez",
    ],
    answer: 0,
    explanation:
      "At-most-once prioriza no duplicar: si falla, el mensaje puede perderse, pero nunca se procesa dos veces.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un 'sink connector' en Kafka Connect?",
    options: [
      "Un conector que exporta datos desde Kafka hacia un sistema externo",
      "Un conector que importa datos a Kafka",
      "Un tipo de broker",
      "Un serializador",
    ],
    answer: 0,
    explanation:
      "Un sink connector lee de topics y escribe en un destino externo (DB, S3, Elasticsearch); el source hace lo inverso.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué Kafka escala mejor en throughput que muchas colas tradicionales?",
    options: [
      "Por el log append-only secuencial en disco y el particionado que paraleliza",
      "Porque guarda todo en RAM",
      "Porque no persiste nada",
      "Porque usa un solo consumidor",
    ],
    answer: 0,
    explanation:
      "La escritura secuencial append-only y el particionado permiten alto throughput y paralelismo horizontal.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },

  // ---- 7) Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK) ----
  {
    question: "¿Qué es un 'span' en tracing distribuido?",
    options: [
      "Una unidad de trabajo con nombre, tiempos y atributos dentro de una traza",
      "Un archivo de log",
      "Una métrica contador",
      "Un dashboard",
    ],
    answer: 0,
    explanation:
      "Un span representa una operación (con inicio/fin y atributos); una traza es un árbol de spans correlacionados.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué tipo de métrica solo aumenta y se usa para conteos acumulados?",
    options: ["Counter", "Gauge", "Histogram", "Summary"],
    answer: 0,
    explanation:
      "Un counter es monotónico creciente (p. ej. total de requests); un gauge sube y baja (p. ej. memoria usada).",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué métrica representa un valor que sube y baja, como el uso de memoria?",
    options: ["Gauge", "Counter", "Trace", "Log"],
    answer: 0,
    explanation:
      "Un gauge mide un valor instantáneo que puede aumentar o disminuir, como memoria, conexiones activas o temperatura.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué lenguaje de consulta usa Prometheus?",
    options: ["PromQL", "SQL", "GraphQL", "KQL"],
    answer: 0,
    explanation:
      "PromQL es el lenguaje de consulta de Prometheus para agregar y analizar series temporales.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué componente del ecosistema Elastic transforma y enriquece logs en el pipeline?",
    options: ["Logstash", "Kibana", "Elasticsearch", "Grafana"],
    answer: 0,
    explanation:
      "Logstash ingiere, parsea, transforma y enruta los datos antes de indexarlos en Elasticsearch.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué estándar del W3C define la cabecera 'traceparent' para propagación de contexto?",
    options: ["W3C Trace Context", "CORS", "HSTS", "WebSocket"],
    answer: 0,
    explanation:
      "W3C Trace Context estandariza traceparent/tracestate para propagar el contexto de traza entre servicios de distintos proveedores.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué define un 'error budget' en SRE?",
    options: [
      "La cantidad tolerable de incumplimiento del SLO antes de frenar cambios y priorizar fiabilidad",
      "El presupuesto de hardware",
      "El número de desarrolladores",
      "El costo de la nube",
    ],
    answer: 0,
    explanation:
      "El error budget es 1 - SLO: el margen de fallo permitido; agotarlo señala priorizar estabilidad sobre nuevas features.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué distingue el tail-based sampling del head-based sampling?",
    options: [
      "Tail-based decide tras ver la traza completa (p. ej. retener errores/lentas); head-based decide al inicio",
      "Son idénticos",
      "Head-based ve la traza completa",
      "Tail-based no usa trazas",
    ],
    answer: 0,
    explanation:
      "El head-based decide muestrear al comienzo; el tail-based espera a tener la traza entera para retener las más interesantes.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es la 'instrumentación automática' de OpenTelemetry/Dynatrace?",
    options: [
      "Capturar telemetría sin modificar el código fuente (agente/bytecode)",
      "Escribir manualmente cada span",
      "Compilar a nativo",
      "Un tipo de dashboard",
    ],
    answer: 0,
    explanation:
      "La auto-instrumentación (agentes, bytecode) captura trazas/métricas de librerías comunes sin tocar el código de negocio.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué base de datos ligera para logs se integra con Grafana como alternativa a ELK?",
    options: ["Loki", "MongoDB", "Cassandra", "Neo4j"],
    answer: 0,
    explanation:
      "Grafana Loki indexa metadatos/labels en vez del contenido completo, ofreciendo un stack de logs eficiente integrado con Grafana.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da el logging estructurado con un trace_id incluido?",
    options: [
      "Correlacionar logs con la traza y la petición concreta que los generó",
      "Reducir el espacio en disco a cero",
      "Evitar escribir logs",
      "Cifrar automáticamente",
    ],
    answer: 0,
    explanation:
      "Incluir trace_id en logs estructurados permite saltar de una traza a sus logs y viceversa, acelerando el diagnóstico.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué miden las 'cuatro señales doradas' (Golden Signals) de un servicio?",
    options: [
      "Latencia, tráfico, errores y saturación",
      "CPU, RAM, disco y red",
      "Commits, PRs, builds y deploys",
      "Logs, métricas, trazas y perfiles",
    ],
    answer: 0,
    explanation:
      "Las Golden Signals (SRE de Google) son latencia, tráfico, errores y saturación: una base mínima para monitorear servicios.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite una alerta basada en SLO (burn rate)?",
    options: [
      "Avisar cuando se consume el error budget demasiado rápido, priorizando por impacto real",
      "Alertar por cada log",
      "Medir solo CPU",
      "Reemplazar los dashboards",
    ],
    answer: 0,
    explanation:
      "Las alertas por burn rate disparan cuando el ritmo de consumo del error budget pone en riesgo el SLO, reduciendo ruido frente a umbrales fijos.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'índice' en Elasticsearch?",
    options: [
      "Una colección de documentos relacionados con un esquema/mapping, unidad de búsqueda",
      "Una clave primaria SQL",
      "Un dashboard",
      "Un agente de recolección",
    ],
    answer: 0,
    explanation:
      "En Elasticsearch un índice agrupa documentos (con su mapping) y es la unidad sobre la que se buscan y agregan datos.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué rol cumple el 'exporter' en OpenTelemetry?",
    options: [
      "Enviar la telemetría al backend o al Collector en un formato específico",
      "Compilar el código",
      "Renderizar dashboards",
      "Balancear tráfico HTTP",
    ],
    answer: 0,
    explanation:
      "El exporter traduce y envía trazas/métricas/logs a un destino (OTLP, Jaeger, Prometheus, etc.) desde la app o el Collector.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué problema de métricas genera usar el user_id como label?",
    options: [
      "Explosión de cardinalidad que degrada y encarece el TSDB",
      "Mejora la precisión sin costo",
      "Reduce las series temporales",
      "Cifra las métricas",
    ],
    answer: 0,
    explanation:
      "Un identificador de alta cardinalidad como user_id multiplica las series almacenadas, degradando el TSDB; se debe evitar en labels.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué protocolo estándar usa OpenTelemetry para transportar telemetría?",
    options: ["OTLP (OpenTelemetry Protocol)", "SMTP", "FTP", "SNMP"],
    answer: 0,
    explanation:
      "OTLP es el protocolo nativo de OpenTelemetry para enviar trazas, métricas y logs a Collectors o backends compatibles.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué el promedio de latencia puede engañar al evaluar rendimiento?",
    options: [
      "Oculta la cola de latencias altas que sí afecta a parte de los usuarios",
      "Siempre sobreestima",
      "No se puede calcular",
      "Es más caro que los percentiles",
    ],
    answer: 0,
    explanation:
      "El promedio diluye los outliers; los percentiles altos (p95/p99) revelan la experiencia de los usuarios más afectados.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué distingue a Application Insights dentro de Azure?",
    options: [
      "Es el APM de Azure Monitor que captura dependencias, excepciones, requests y métricas",
      "Es un servicio de almacenamiento de blobs",
      "Es un orquestador de contenedores",
      "Es una base de datos SQL",
    ],
    answer: 0,
    explanation:
      "Application Insights (Azure Monitor) recoge telemetría de aplicaciones: requests, dependencias, excepciones y métricas, con analítica integrada.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },

  // ---- 8) Arquitecturas Orientadas a Eventos ----
  {
    question: "¿Qué es un 'topic' o 'stream' en el contexto de EDA?",
    options: [
      "El canal donde se publican y consumen los eventos",
      "Una tabla transaccional",
      "Un endpoint REST síncrono",
      "Un índice de base de datos",
    ],
    answer: 0,
    explanation:
      "En EDA, los eventos fluyen por canales (topics/streams) a los que se suscriben los consumidores interesados.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Cómo se nombra convencionalmente un evento de dominio?",
    options: [
      "En pasado, describiendo lo ocurrido (p. ej. OrderPlaced)",
      "En imperativo (p. ej. PlaceOrder)",
      "Con un sustantivo suelto",
      "Con el nombre de la tabla",
    ],
    answer: 0,
    explanation:
      "Los eventos se nombran en pasado porque describen hechos ya sucedidos; los comandos van en imperativo.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja tiene publicar eventos frente a llamadas REST síncronas entre servicios?",
    options: [
      "Desacople temporal: el productor no espera ni depende de la disponibilidad del consumidor",
      "Siempre menor latencia de extremo a extremo",
      "Consistencia fuerte inmediata",
      "Eliminar la necesidad de contratos",
    ],
    answer: 0,
    explanation:
      "Los eventos desacoplan en el tiempo: el productor publica y sigue; el consumidor procesa cuando puede, tolerando indisponibilidad transitoria.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es una 'proyección' (read model) en CQRS/Event Sourcing?",
    options: [
      "Una vista de lectura materializada a partir de los eventos, optimizada para consultas",
      "El modelo de escritura",
      "Una tabla de auditoría del broker",
      "Un índice del event store",
    ],
    answer: 0,
    explanation:
      "Una proyección construye y mantiene una vista de lectura derivada de los eventos, pensada para servir queries eficientemente.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'snapshot' en Event Sourcing y por qué se usa?",
    options: [
      "Un estado precomputado hasta cierto punto para no reproducir todos los eventos al reconstruir",
      "Una copia de seguridad del broker",
      "Un índice del read model",
      "Un tipo de evento de error",
    ],
    answer: 0,
    explanation:
      "El snapshot guarda el estado agregado hasta un punto; al reconstruir se parte de él y solo se reproducen los eventos posteriores.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué problema introduce la consistencia eventual en la UI?",
    options: [
      "El usuario puede no ver de inmediato el efecto de su acción hasta que las proyecciones se actualicen",
      "La UI deja de funcionar",
      "Se pierden los datos",
      "Se duplican las pantallas",
    ],
    answer: 0,
    explanation:
      "Con consistencia eventual, la vista de lectura puede ir ligeramente por detrás; hay que diseñar la UX para ese retardo (optimistic UI, etc.).",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué conviene versionar el esquema de los eventos?",
    options: [
      "Para evolucionar la estructura sin romper a consumidores que esperan versiones previas",
      "Para que ocupen menos",
      "Para evitar publicarlos",
      "Para cifrarlos",
    ],
    answer: 0,
    explanation:
      "Versionar y mantener compatibilidad (p. ej. con Schema Registry) permite evolucionar los eventos sin romper a los consumidores existentes.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué garantiza un 'event store' en Event Sourcing?",
    options: [
      "Persistencia ordenada e inmutable de los eventos como fuente de verdad",
      "Solo el estado final",
      "Un índice de búsqueda web",
      "Un balanceo de carga",
    ],
    answer: 0,
    explanation:
      "El event store guarda la secuencia inmutable de eventos; el estado se deriva reproduciéndolos, y es la fuente de verdad del sistema.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué estrategia ayuda a manejar un evento que no se pudo procesar?",
    options: [
      "Reintentos con backoff y, si persiste, enviarlo a una dead letter queue",
      "Descartarlo silenciosamente siempre",
      "Reiniciar el servicio",
      "Bloquear el topic entero",
    ],
    answer: 0,
    explanation:
      "Reintentar con backoff y derivar a una DLQ los que sigan fallando evita perder eventos y no bloquea el procesamiento del resto.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite la 'rehidratación' de un agregado en Event Sourcing?",
    options: [
      "Reconstruir su estado actual reproduciendo sus eventos (y partiendo de un snapshot si existe)",
      "Borrar su historial",
      "Duplicar el agregado",
      "Cifrar los eventos",
    ],
    answer: 0,
    explanation:
      "Rehidratar es reconstruir el estado del agregado aplicando en orden sus eventos (usando snapshots para acelerar).",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué relación tiene el patrón Outbox con las arquitecturas de eventos?",
    options: [
      "Asegura publicar el evento y persistir el cambio de forma atómica, evitando perder eventos",
      "Reemplaza al broker",
      "Elimina la necesidad de consumidores",
      "Cifra los eventos",
    ],
    answer: 0,
    explanation:
      "El Outbox escribe el evento en la misma transacción que el cambio de estado; un relay lo publica después, garantizando que no se pierda.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué distingue a una saga por orquestación de una por coreografía?",
    options: [
      "La orquestación tiene un coordinador central; la coreografía se basa en eventos sin coordinador",
      "Son lo mismo",
      "La coreografía usa un orquestador",
      "La orquestación no usa pasos",
    ],
    answer: 0,
    explanation:
      "En orquestación un componente dirige cada paso; en coreografía cada servicio reacciona a eventos y emite los suyos, de forma descentralizada.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permiten las transacciones de compensación en una saga?",
    options: [
      "Deshacer el efecto de pasos previos cuando un paso posterior falla",
      "Bloquear toda la base de datos",
      "Evitar publicar eventos",
      "Acelerar la saga",
    ],
    answer: 0,
    explanation:
      "La compensación revierte lógicamente los pasos ya ejecutados ante un fallo, logrando consistencia sin transacciones distribuidas ACID.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da separar comandos y eventos conceptualmente?",
    options: [
      "Clarifica intención (comando, puede rechazarse) vs hecho (evento, ya ocurrió), mejorando el diseño",
      "Reduce el número de servicios",
      "Elimina la necesidad de broker",
      "Hace innecesaria la validación",
    ],
    answer: 0,
    explanation:
      "Distinguir comandos (intención que puede fallar) de eventos (hechos inmutables) ordena el flujo y las responsabilidades del sistema.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué los consumidores deben tolerar recibir eventos duplicados?",
    options: [
      "Porque la mayoría de brokers garantizan at-least-once, no exactly-once por defecto",
      "Porque los eventos nunca se repiten",
      "Porque REST lo exige",
      "Porque mejora el rendimiento",
    ],
    answer: 0,
    explanation:
      "Con at-least-once un evento puede reentregarse; por eso los consumidores deben ser idempotentes para no duplicar efectos.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué desafío operativo agrega una EDA frente a un flujo síncrono?",
    options: [
      "La observabilidad: seguir la causa-efecto entre eventos requiere tracing y correlación",
      "No requiere ninguna infraestructura",
      "Imposibilidad de escalar",
      "Acoplamiento fuerte garantizado",
    ],
    answer: 0,
    explanation:
      "Al ser asíncrona y distribuida, rastrear un proceso de punta a punta es más difícil; el tracing y la correlación de eventos son esenciales.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es 'event-carried state transfer'?",
    options: [
      "Incluir en el evento los datos necesarios para que el consumidor no deba volver a consultar al origen",
      "Transferir el estado por FTP",
      "Un tipo de base de datos",
      "Una técnica de compresión",
    ],
    answer: 0,
    explanation:
      "El evento lleva el estado relevante, evitando callbacks al productor y reduciendo el acoplamiento temporal entre servicios.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué beneficio clave aporta EDA a la escalabilidad?",
    options: [
      "Permite escalar productores y consumidores de forma independiente según la carga",
      "Obliga a escalar todo junto",
      "Elimina la necesidad de infraestructura",
      "Fuerza llamadas bloqueantes",
    ],
    answer: 0,
    explanation:
      "Al desacoplar, cada lado escala por separado; además el broker amortigua picos entre producción y consumo.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué papel juega la clave de partición al escalar consumidores en EDA sobre Kafka?",
    options: [
      "Mantiene el orden por entidad y reparte la carga entre particiones/consumidores",
      "Cifra el evento",
      "Elimina duplicados",
      "Versiona el esquema",
    ],
    answer: 0,
    explanation:
      "La key agrupa los eventos de una entidad en una partición (preservando orden) y a la vez distribuye la carga total entre particiones.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },

  // ---- 9) JMeter y Playwright ----
  {
    question: "En JMeter, ¿qué elemento genera la petición hacia el sistema bajo prueba?",
    options: ["Sampler", "Listener", "Assertion", "Timer"],
    answer: 0,
    explanation:
      "Los Samplers (HTTP Request, JDBC Request, etc.) generan las peticiones que JMeter envía al sistema objetivo.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En JMeter, ¿para qué sirve un 'Listener'?",
    options: [
      "Recolectar y visualizar los resultados de la prueba",
      "Generar peticiones",
      "Pausar entre peticiones",
      "Validar respuestas",
    ],
    answer: 0,
    explanation:
      "Los Listeners (Summary Report, View Results Tree, etc.) recopilan y muestran los resultados de la ejecución.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En JMeter, ¿qué hace un 'Timer'?",
    options: [
      "Introduce pausas entre peticiones para simular think-time",
      "Mide el throughput",
      "Valida el código de respuesta",
      "Define usuarios virtuales",
    ],
    answer: 0,
    explanation:
      "Los Timers añaden retardos entre peticiones, modelando el tiempo de reflexión (think-time) de usuarios reales.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite un 'Post-Processor' como JSON Extractor en JMeter?",
    options: [
      "Extraer valores de la respuesta para usarlos en peticiones siguientes (correlación)",
      "Generar carga",
      "Dibujar gráficos",
      "Pausar la prueba",
    ],
    answer: 0,
    explanation:
      "Los Post-Processors extraen datos de la respuesta (JSON/Regex) para correlacionar, p. ej. reutilizar un token en requests posteriores.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué métrica expresa cuántas peticiones por segundo soporta el sistema?",
    options: ["Throughput", "Percentil p99", "Error rate", "Ramp-up"],
    answer: 0,
    explanation:
      "El throughput mide la tasa de peticiones completadas por unidad de tiempo, indicador clave de capacidad.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué lenguajes soporta Playwright para escribir pruebas?",
    options: [
      "JavaScript/TypeScript, Python, Java y .NET",
      "Solo JavaScript",
      "Solo Python",
      "Solo Java",
    ],
    answer: 0,
    explanation:
      "Playwright ofrece bindings oficiales para TypeScript/JavaScript, Python, Java y .NET.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En Playwright, ¿qué es un 'locator'?",
    options: [
      "Una referencia perezosa y re-evaluable a un elemento, base de las acciones y aserciones",
      "Un archivo de configuración",
      "Un servidor proxy",
      "Un reporte de cobertura",
    ],
    answer: 0,
    explanation:
      "Un locator describe cómo encontrar un elemento y se re-resuelve al actuar, lo que lo hace robusto frente a cambios del DOM.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace la función 'fixtures' en Playwright Test?",
    options: [
      "Proveer setup/teardown y recursos reutilizables (page, context) a los tests de forma aislada",
      "Generar carga masiva",
      "Medir percentiles",
      "Compilar el backend",
    ],
    answer: 0,
    explanation:
      "Las fixtures inyectan recursos (como page/context) y gestionan setup/teardown, dando aislamiento y reutilización entre tests.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite 'storageState' en Playwright?",
    options: [
      "Reusar sesión autenticada (cookies/localStorage) entre tests sin volver a loguear",
      "Medir el rendimiento",
      "Generar datos aleatorios",
      "Compilar nativo",
    ],
    answer: 0,
    explanation:
      "storageState guarda cookies/localStorage tras un login y los reutiliza, evitando autenticar en cada test y acelerando la suite.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué los sleeps fijos son una mala práctica en pruebas E2E?",
    options: [
      "Hacen los tests lentos y frágiles; mejor esperar por una condición/estado",
      "Aceleran la ejecución",
      "Mejoran la cobertura",
      "Son obligatorios en Playwright",
    ],
    answer: 0,
    explanation:
      "Las esperas fijas alargan y vuelven inestables los tests; las esperas por estado (auto-wait, web-first assertions) son fiables y rápidas.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué tipo de prueba verifica que el sistema aguante una carga sostenida durante mucho tiempo?",
    options: [
      "Prueba de resistencia/soak (endurance)",
      "Prueba de humo (smoke)",
      "Prueba unitaria",
      "Prueba de spike",
    ],
    answer: 0,
    explanation:
      "La prueba de soak/endurance mantiene carga durante horas para detectar fugas de memoria, degradación y problemas acumulativos.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da ejecutar JMeter en modo distribuido (master/slaves)?",
    options: [
      "Generar más carga que una sola máquina, repartiendo usuarios virtuales entre nodos",
      "Reducir la cantidad de usuarios",
      "Eliminar los listeners",
      "Evitar el ramp-up",
    ],
    answer: 0,
    explanation:
      "El modo distribuido coordina varios nodos generadores para superar los límites de recursos de una única máquina.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el 'codegen' de Playwright?",
    options: [
      "Grabar interacciones del navegador y generar el código del test automáticamente",
      "Compilar a binario nativo",
      "Medir el throughput",
      "Crear dashboards",
    ],
    answer: 0,
    explanation:
      "playwright codegen graba tus acciones en el navegador y produce el script del test, útil como punto de partida.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué integración de JMeter/Playwright en CI/CD aporta más valor?",
    options: [
      "Ejecutar las pruebas automáticamente en cada cambio como gate de calidad/performance",
      "Correrlas solo en producción",
      "Ejecutarlas manualmente una vez al mes",
      "Evitar ejecutarlas para ahorrar tiempo",
    ],
    answer: 0,
    explanation:
      "Automatizarlas en el pipeline detecta regresiones (funcionales y de rendimiento) en cada commit, antes de llegar a producción.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite 'expect(locator).toHaveText(...)' en Playwright?",
    options: [
      "Aserción web-first que reintenta hasta que el elemento tenga el texto esperado o expire",
      "Medir latencia de red",
      "Generar usuarios virtuales",
      "Compilar el proyecto",
    ],
    answer: 0,
    explanation:
      "Las web-first assertions como toHaveText reintentan automáticamente, tolerando la asincronía de la UI sin sleeps.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué métrica NO es el objetivo principal de Playwright?",
    options: [
      "El throughput bajo 5.000 usuarios concurrentes",
      "La corrección funcional de un flujo de UI",
      "La estabilidad de los selectores",
      "La cobertura de interacciones de usuario",
    ],
    answer: 0,
    explanation:
      "Playwright valida funcionalidad E2E; medir throughput bajo miles de usuarios es terreno de una herramienta de carga como JMeter.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el 'routing/mock' de red en Playwright al probar la UI?",
    options: [
      "Interceptar peticiones y devolver respuestas simuladas para aislar la UI del backend",
      "Generar carga al backend",
      "Medir el uso de CPU del servidor",
      "Desplegar la app",
    ],
    answer: 0,
    explanation:
      "Con page.route se interceptan requests y se responden con mocks, permitiendo probar estados de la UI sin depender del backend real.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué indica una tasa de error creciente durante una prueba de carga?",
    options: [
      "Que el sistema empieza a fallar bajo la carga aplicada (posible saturación o límites)",
      "Que el sistema mejora",
      "Que hay menos usuarios",
      "Que la red es más rápida",
    ],
    answer: 0,
    explanation:
      "Un aumento de errores al subir la carga señala que el sistema alcanza límites (conexiones, memoria, timeouts) y se degrada.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es una prueba de humo (smoke test) de rendimiento?",
    options: [
      "Una ejecución corta con poca carga para validar que el escenario funciona antes de la prueba real",
      "Una prueba con carga máxima sostenida",
      "Una prueba de seguridad",
      "Un test unitario",
    ],
    answer: 0,
    explanation:
      "El smoke de performance valida con carga mínima que el script y el entorno funcionan, antes de invertir en pruebas de carga completas.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },

  // ---- 10) SQL Server y Cosmos DB ----
  {
    question: "¿Qué cláusula SQL agrupa filas para aplicar funciones de agregación?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
    answer: 0,
    explanation:
      "GROUP BY agrupa filas por una o más columnas; las agregaciones (SUM, COUNT) se calculan por grupo.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué cláusula filtra resultados ya agregados (sobre grupos)?",
    options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    answer: 0,
    explanation:
      "HAVING filtra después de agrupar (sobre agregados), mientras que WHERE filtra filas antes de la agregación.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué garantizan las propiedades ACID de una transacción?",
    options: [
      "Atomicidad, Consistencia, Aislamiento y Durabilidad",
      "Disponibilidad y partición",
      "Escalabilidad horizontal",
      "Compresión de datos",
    ],
    answer: 0,
    explanation:
      "ACID = Atomicity, Consistency, Isolation, Durability: el modelo de garantías de las transacciones relacionales.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué restricción asegura que un valor exista en otra tabla (integridad referencial)?",
    options: ["FOREIGN KEY", "PRIMARY KEY", "CHECK", "UNIQUE"],
    answer: 0,
    explanation:
      "La FOREIGN KEY referencia la clave de otra tabla, garantizando que el valor relacionado exista (integridad referencial).",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué permite una CTE (Common Table Expression) con WITH en T-SQL?",
    options: [
      "Definir un conjunto de resultados temporal y nombrado, incluso recursivo",
      "Crear un índice",
      "Cifrar una columna",
      "Definir un trigger",
    ],
    answer: 0,
    explanation:
      "Una CTE define un resultado temporal nombrado (y puede ser recursiva), mejorando legibilidad de consultas complejas.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace un índice sobre una columna muy usada en WHERE/JOIN?",
    options: [
      "Permite al motor localizar filas con seek en vez de escanear toda la tabla",
      "Reduce el tamaño de la base siempre",
      "Cifra la columna",
      "Elimina duplicados",
    ],
    answer: 0,
    explanation:
      "Un índice adecuado habilita index seeks eficientes en filtros y joins, evitando table/index scans costosos.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un deadlock en SQL Server?",
    options: [
      "Dos o más transacciones que se bloquean mutuamente esperando recursos que la otra retiene",
      "Un índice corrupto",
      "Una consulta lenta",
      "Un error de sintaxis",
    ],
    answer: 0,
    explanation:
      "Un deadlock ocurre cuando transacciones se esperan en ciclo; SQL Server elige una víctima y la aborta para romperlo.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué estrategia reduce deadlocks por orden de acceso a recursos?",
    options: [
      "Acceder a las tablas/filas siempre en el mismo orden en todas las transacciones",
      "Deshabilitar los índices",
      "Usar SELECT *",
      "Aumentar el timeout infinitamente",
    ],
    answer: 0,
    explanation:
      "Un orden de acceso consistente a los recursos evita los ciclos de espera que producen deadlocks.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Cosmos DB, ¿qué pasa si una operación excede el throughput aprovisionado (RU/s)?",
    options: [
      "Se recibe throttling con HTTP 429 y conviene reintentar con backoff",
      "La base se apaga",
      "Se borran datos",
      "Se crea un índice automático",
    ],
    answer: 0,
    explanation:
      "Al superar las RU/s disponibles, Cosmos responde 429 (Too Many Requests); el SDK suele reintentar respetando retry-after.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué modelo de datos es el más usado en Cosmos DB con la API for NoSQL?",
    options: ["Documentos JSON", "Tablas relacionales normalizadas", "Grafos RDF", "Columnas tipo HBase"],
    answer: 0,
    explanation:
      "La API for NoSQL de Cosmos almacena documentos JSON dentro de contenedores, con consultas tipo SQL sobre ellos.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué criterio es clave al elegir la partition key en Cosmos DB?",
    options: [
      "Alta cardinalidad y distribución uniforme del acceso para evitar hot partitions",
      "Que sea la más corta posible",
      "Que tenga pocos valores distintos",
      "Que coincida con el nombre de la base",
    ],
    answer: 0,
    explanation:
      "Una buena partition key distribuye datos y carga de forma pareja (alta cardinalidad), evitando particiones calientes y throttling.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja ofrece el nivel de consistencia 'Session' en Cosmos DB?",
    options: [
      "Garantiza read-your-own-writes por sesión con buen equilibrio latencia/consistencia",
      "Consistencia fuerte global siempre",
      "Ninguna garantía",
      "Solo lecturas eventuales sin orden",
    ],
    answer: 0,
    explanation:
      "Session (el default) asegura, dentro de una sesión, leer las propias escrituras y el prefijo consistente, con buena latencia.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Cuándo conviene referenciar en vez de embeber en un modelo de documentos?",
    options: [
      "Cuando la relación es grande/ilimitada o los datos cambian/consultan por separado",
      "Siempre, nunca se embebe",
      "Solo para enteros",
      "Cuando se leen siempre juntos",
    ],
    answer: 0,
    explanation:
      "Se referencia cuando la cardinalidad es grande/ilimitada o cuando los datos evolucionan o se consultan de forma independiente.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué función de ventana calcula un total acumulado respetando un orden?",
    options: [
      "SUM(...) OVER (ORDER BY ...)",
      "COUNT(*)",
      "GROUP BY",
      "DISTINCT",
    ],
    answer: 0,
    explanation:
      "SUM(col) OVER (ORDER BY ...) produce un running total sin colapsar las filas, a diferencia de un GROUP BY.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es una transacción optimista (optimistic concurrency) y cómo se implementa a menudo?",
    options: [
      "Asumir que no habrá conflicto y verificar con una versión/ETag al escribir",
      "Bloquear la fila todo el tiempo",
      "Nunca usar transacciones",
      "Usar SELECT * siempre",
    ],
    answer: 0,
    explanation:
      "El control optimista no bloquea: valida con una versión/ETag (o rowversion) al actualizar, fallando si otro cambió el dato.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace un JOIN del tipo LEFT (OUTER) JOIN?",
    options: [
      "Devuelve todas las filas de la tabla izquierda y las coincidentes de la derecha (NULL si no hay)",
      "Solo filas que coinciden en ambas",
      "El producto cartesiano",
      "Solo filas sin coincidencia",
    ],
    answer: 0,
    explanation:
      "LEFT JOIN conserva todas las filas de la izquierda; donde no hay match a la derecha, las columnas de esa tabla quedan en NULL.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué permite el índice en Cosmos DB por defecto?",
    options: [
      "Indexa automáticamente todas las propiedades, configurable con una indexing policy",
      "No indexa nada",
      "Solo la partition key",
      "Requiere crear índices manualmente siempre",
    ],
    answer: 0,
    explanation:
      "Cosmos indexa automáticamente todos los campos por defecto; se puede ajustar con una indexing policy para optimizar costo/rendimiento.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da un procedimiento almacenado frente a múltiples round-trips SQL?",
    options: [
      "Ejecuta la lógica cerca de los datos en una sola llamada, reduciendo tráfico y latencia",
      "Elimina la necesidad de índices",
      "Convierte SQL en NoSQL",
      "Evita las transacciones",
    ],
    answer: 0,
    explanation:
      "Un stored procedure agrupa varias operaciones en el servidor, reduciendo round-trips de red y reutilizando planes.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite particionar horizontalmente (sharding) una tabla muy grande?",
    options: [
      "Distribuir filas en varios almacenes para escalar y mejorar el rendimiento",
      "Reducir el número de columnas",
      "Cifrar la tabla",
      "Eliminar índices",
    ],
    answer: 0,
    explanation:
      "El sharding reparte las filas por una clave entre particiones/nodos, repartiendo carga y volumen para escalar horizontalmente.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },

  // ---- 11) Git, Jenkins, Maven y CI/CD ----
  {
    question: "¿Qué comando muestra el estado de los archivos en el working directory de Git?",
    options: ["git status", "git log", "git push", "git clone"],
    answer: 0,
    explanation:
      "git status muestra archivos modificados, en stage y sin seguimiento respecto al último commit.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué hace 'git merge' respecto al historial?",
    options: [
      "Integra ramas creando un commit de merge y preservando el historial de ambas",
      "Reescribe linealmente los commits",
      "Elimina la rama origen",
      "Borra el historial",
    ],
    answer: 0,
    explanation:
      "merge combina ramas con un commit de fusión, conservando la historia real; rebase, en cambio, reescribe para linealizar.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué define el 'scope' de un conflicto de merge en Git?",
    options: [
      "Cambios solapados en las mismas líneas/zonas de un archivo entre ramas",
      "Un error de red",
      "Una rama protegida",
      "Un tag inválido",
    ],
    answer: 0,
    explanation:
      "Un conflicto surge cuando dos ramas modifican la misma región de un archivo de forma incompatible; Git pide resolverlo manualmente.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace 'git revert'?",
    options: [
      "Crea un nuevo commit que deshace los cambios de uno anterior, sin reescribir historia",
      "Borra el último commit del historial",
      "Cambia de rama",
      "Elimina el repositorio",
    ],
    answer: 0,
    explanation:
      "revert genera un commit inverso que anula otro, seguro para ramas compartidas (no reescribe historia como reset).",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre 'git reset --soft' y '--hard'?",
    options: [
      "--soft mueve HEAD y conserva cambios en stage; --hard descarta los cambios del working tree",
      "Son idénticos",
      "--soft borra archivos",
      "--hard conserva todo",
    ],
    answer: 0,
    explanation:
      "reset --soft reubica HEAD manteniendo los cambios staged; --hard reubica y descarta cambios locales (peligroso).",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué archivo define las dependencias y el build en un proyecto Maven?",
    options: ["pom.xml", "build.gradle", "package.json", "Jenkinsfile"],
    answer: 0,
    explanation:
      "El pom.xml (Project Object Model) describe dependencias, plugins, propiedades y el ciclo de build en Maven.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué permite un BOM (Bill of Materials) en Maven?",
    options: [
      "Centralizar y alinear versiones de un conjunto de dependencias relacionadas",
      "Compilar a nativo",
      "Ejecutar tests de carga",
      "Definir el pipeline",
    ],
    answer: 0,
    explanation:
      "Un BOM (en dependencyManagement) fija versiones coherentes de un grupo de artefactos, evitando conflictos de versiones.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué alcance (scope) de dependencia Maven NO se incluye en el artefacto final de runtime?",
    options: ["test (y provided)", "compile", "runtime", "import de un BOM no aplica aquí"],
    answer: 0,
    explanation:
      "Las dependencias con scope test (y provided) no se empaquetan para runtime; compile y runtime sí están disponibles en ejecución.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es una pipeline declarativa en Jenkins?",
    options: [
      "Una sintaxis estructurada (pipeline { stages { ... } }) para definir el flujo de forma legible",
      "Un script bash suelto",
      "Un archivo de Maven",
      "Una rama de Git",
    ],
    answer: 0,
    explanation:
      "La pipeline declarativa usa una estructura fija (agent, stages, steps) más legible y validada que la scripted.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el paralelismo (parallel) en etapas de Jenkins?",
    options: [
      "Ejecutar pasos/etapas simultáneamente para acortar el tiempo total del pipeline",
      "Reducir la cantidad de pruebas",
      "Eliminar los agentes",
      "Evitar el versionado",
    ],
    answer: 0,
    explanation:
      "Ejecutar etapas en paralelo (p. ej. tests por módulo) reduce el tiempo total del pipeline aprovechando varios agentes.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es la Integración Continua (CI) en una frase?",
    options: [
      "Integrar cambios frecuentemente con build y pruebas automáticas para detectar problemas temprano",
      "Desplegar a producción sin pruebas",
      "Mantener una sola rama de larga vida",
      "Compilar una vez al mes",
    ],
    answer: 0,
    explanation:
      "CI consiste en integrar y validar los cambios a menudo con automatización, reduciendo el costo de los problemas de integración.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué ventaja tiene usar 'feature flags' junto a trunk-based development?",
    options: [
      "Integrar código incompleto a main de forma segura, activándolo cuando esté listo",
      "Evitar escribir pruebas",
      "Eliminar ramas por completo",
      "Reducir el tamaño del binario",
    ],
    answer: 0,
    explanation:
      "Los feature flags permiten fusionar trabajo a main oculto tras una bandera, desacoplando el despliegue de la activación de la funcionalidad.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace un 'smoke test' tras un despliegue en el pipeline?",
    options: [
      "Verifica rápidamente que la aplicación arrancó y responde en lo básico",
      "Ejecuta toda la suite de carga",
      "Reescribe el historial de Git",
      "Compila el proyecto",
    ],
    answer: 0,
    explanation:
      "El smoke test post-deploy comprueba lo esencial (health, endpoints clave) para detectar despliegues rotos antes de seguir.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da versionar la infraestructura como código (IaC)?",
    options: [
      "Entornos reproducibles, revisables y versionados junto al código",
      "Evitar usar la nube",
      "Eliminar la necesidad de pruebas",
      "Hacer el build más lento",
    ],
    answer: 0,
    explanation:
      "La IaC (Terraform, etc.) describe la infraestructura en archivos versionados, dando reproducibilidad, revisión y trazabilidad.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el versionado semántico (SemVer)?",
    options: [
      "MAJOR.MINOR.PATCH, donde cada parte comunica el tipo de cambio (incompatible, feature, fix)",
      "Un número aleatorio",
      "La fecha del build",
      "El hash del commit",
    ],
    answer: 0,
    explanation:
      "SemVer usa MAJOR.MINOR.PATCH: MAJOR para cambios incompatibles, MINOR para features compatibles y PATCH para correcciones.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite un 'rollback' automatizado en el pipeline de despliegue?",
    options: [
      "Volver rápidamente a la versión estable anterior ante un despliegue defectuoso",
      "Compilar más rápido",
      "Eliminar ramas",
      "Evitar pruebas",
    ],
    answer: 0,
    explanation:
      "Un rollback automatizado (por versión anterior o estrategia blue-green/canary) minimiza el impacto de un despliegue fallido.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace 'git fetch' frente a 'git pull'?",
    options: [
      "fetch descarga cambios remotos sin fusionarlos; pull descarga y además fusiona (fetch + merge)",
      "Son idénticos",
      "fetch borra ramas",
      "pull solo descarga sin fusionar",
    ],
    answer: 0,
    explanation:
      "fetch actualiza las referencias remotas sin tocar tu rama; pull hace fetch y luego merge (o rebase) en tu rama actual.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué rol cumple un repositorio de artefactos (Nexus, Artifactory) en CI/CD?",
    options: [
      "Almacenar y versionar los artefactos construidos y dependencias, promoviéndolos entre entornos",
      "Ejecutar los tests",
      "Reemplazar Git",
      "Monitorear producción",
    ],
    answer: 0,
    explanation:
      "Un artifact repository guarda binarios versionados (y cachea dependencias), permitiendo promover el mismo artefacto por los entornos.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué integra un análisis estático de código (p. ej. SonarQube) en el pipeline?",
    options: [
      "Detecta bugs potenciales, code smells y vulnerabilidades como quality gate",
      "Genera la carga de usuarios",
      "Despliega a producción",
      "Crea ramas de Git",
    ],
    answer: 0,
    explanation:
      "El análisis estático evalúa calidad/seguridad del código y puede bloquear el pipeline si no cumple los umbrales (quality gate).",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },

  // ---- Completar a 40 por tópico ----
  {
    question: "¿Qué permite el patrón 'event replay' en una arquitectura de eventos?",
    options: [
      "Reprocesar eventos pasados para reconstruir estado o alimentar nuevas proyecciones/consumidores",
      "Borrar los eventos antiguos",
      "Evitar publicar eventos",
      "Cifrar el broker",
    ],
    answer: 0,
    explanation:
      "El replay reproduce eventos ya emitidos (gracias a la retención del log) para reconstruir vistas, corregir bugs o inicializar nuevos consumidores.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué comando de Git crea una etiqueta anotada para marcar una versión?",
    options: ["git tag -a v1.0.0 -m \"...\"", "git branch v1.0.0", "git stash", "git revert"],
    answer: 0,
    explanation:
      "git tag -a crea un tag anotado (con mensaje y metadatos), usado para marcar releases de forma inmutable.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué métrica de Playwright/E2E indica tests inestables que fallan de forma intermitente?",
    options: ["Flakiness (test flaky)", "Throughput", "Consumer lag", "Cardinalidad"],
    answer: 0,
    explanation:
      "Un test flaky pasa o falla sin cambios de código, normalmente por esperas/timing; reducir flakiness es clave para confiar en la suite.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite 'consumer group offset reset' en Kafka para operaciones?",
    options: [
      "Reposicionar el consumo (p. ej. reprocesar desde un offset/tiempo anterior)",
      "Borrar el topic",
      "Aumentar las réplicas",
      "Cifrar los mensajes",
    ],
    answer: 0,
    explanation:
      "Resetear el offset de un consumer group permite reprocesar (replay) desde un punto anterior o saltar mensajes, útil en operación/incidentes.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'dashboard' en Grafana?",
    options: [
      "Un panel visual configurable con gráficos/consultas sobre una o más fuentes de datos",
      "Un agente de recolección de logs",
      "Una base de datos de series",
      "Un protocolo de telemetría",
    ],
    answer: 0,
    explanation:
      "Un dashboard de Grafana agrupa paneles (series, tablas, alertas) construidos con consultas a fuentes como Prometheus, Loki o Elasticsearch.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué cláusula T-SQL limita el número de filas devueltas por una consulta?",
    options: ["TOP (o OFFSET/FETCH)", "GROUP BY", "HAVING", "DISTINCT"],
    answer: 0,
    explanation:
      "SELECT TOP n (o OFFSET ... FETCH) limita las filas devueltas; se combina con ORDER BY para resultados deterministas y paginación.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },

  // ========================================================================
  // TERCERA TANDA — paquete de 100 preguntas de todos los temas
  // ========================================================================

  // ---- Duck Creek e Insurity (10) ----
  {
    question: "¿Qué es una 'cobertura' (coverage) dentro de una póliza?",
    options: [
      "Un riesgo específico que la póliza protege, con sus límites y condiciones",
      "El pago mensual de la prima",
      "El canal de venta",
      "El servidor de la aseguradora",
    ],
    answer: 0,
    explanation:
      "Una coverage define qué riesgo cubre la póliza (p. ej. daños por incendio), con sus límites, sublímites y exclusiones.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es el 'límite' (limit) de una cobertura?",
    options: [
      "El monto máximo que la aseguradora pagará por esa cobertura",
      "La prima mínima",
      "El número de endosos permitidos",
      "La duración de la póliza",
    ],
    answer: 0,
    explanation:
      "El limit es el tope de indemnización que la aseguradora asume para una cobertura determinada.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué rol cumple un 'ajustador' (adjuster) en claims?",
    options: [
      "Evalúa el siniestro, estima el daño y determina el monto a pagar",
      "Cobra la prima",
      "Vende la póliza",
      "Configura el pipeline CI/CD",
    ],
    answer: 0,
    explanation:
      "El adjuster investiga y valora el siniestro para fijar la indemnización que corresponde según la póliza.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el 'reaseguro' (reinsurance)?",
    options: [
      "Cuando una aseguradora transfiere parte de su riesgo a otra aseguradora",
      "El seguro del empleado",
      "Un segundo deducible",
      "La renovación automática",
    ],
    answer: 0,
    explanation:
      "El reaseguro distribuye el riesgo: la aseguradora cede parte de sus pólizas a un reasegurador para limitar su exposición.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "Al sincronizar datos entre el PAS y un CRM, ¿qué evita inconsistencias ante fallos parciales?",
    options: [
      "Eventos idempotentes y reconciliación periódica",
      "Escribir directo en ambas bases sin control",
      "Ignorar los errores de red",
      "Un único commit entre ambos sistemas sin coordinación",
    ],
    answer: 0,
    explanation:
      "Eventos idempotentes más una reconciliación periódica detectan y corrigen divergencias que los fallos parciales pueden dejar.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué información suele capturar el FNOL para iniciar un siniestro?",
    options: [
      "Datos del asegurado, fecha/lugar del hecho y descripción de la pérdida",
      "El plan de pagos de la prima",
      "El código fuente de la app",
      "La política de reintentos del broker",
    ],
    answer: 0,
    explanation:
      "El FNOL registra lo esencial del evento (quién, cuándo, dónde y qué ocurrió) para abrir y encaminar el caso de claims.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Por qué conviene exponer la cotización como una operación sin efectos secundarios?",
    options: [
      "Porque cotizar no debe alterar estado y así puede cachearse y reintentarse con seguridad",
      "Porque es obligatorio en ACORD",
      "Porque impide emitir pólizas",
      "Porque elimina la necesidad de rating",
    ],
    answer: 0,
    explanation:
      "Si cotizar es idempotente y sin efectos, se puede cachear, reintentar y paralelizar sin riesgo de corromper estado.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es una 'exclusión' en una póliza?",
    options: [
      "Un riesgo o situación que la póliza explícitamente NO cubre",
      "Un descuento en la prima",
      "Un tipo de endoso obligatorio",
      "El canal de distribución",
    ],
    answer: 0,
    explanation:
      "Las exclusiones delimitan lo que la póliza no cubre, acotando la responsabilidad de la aseguradora.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "¿Qué patrón ayuda a orquestar el proceso multi-paso de emisión (cotizar, suscribir, emitir, facturar)?",
    options: [
      "Saga / orquestación de un proceso de negocio",
      "Singleton",
      "Active Record",
      "Service Locator",
    ],
    answer: 0,
    explanation:
      "Una saga u orquestador coordina los pasos de emisión con compensaciones ante fallos, manteniendo consistencia sin transacción distribuida ACID.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question:
      "¿Qué ventaja da versionar el producto de seguro (definición de coberturas/reglas) en el sistema?",
    options: [
      "Permite que pólizas vigentes conserven su versión mientras las nuevas usan la actualizada",
      "Elimina la necesidad de rating",
      "Impide emitir endosos",
      "Reduce el tamaño de la base",
    ],
    answer: 0,
    explanation:
      "Versionar el producto permite que cada póliza se rija por la versión con que se emitió, aun cuando el producto evolucione después.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },

  // ---- Java 17+, Spring Boot y Quarkus (9) ----
  {
    question: "¿Qué permite la expresión lambda en Java?",
    options: [
      "Pasar comportamiento (una función) de forma concisa, implementando interfaces funcionales",
      "Crear hilos del SO",
      "Definir anotaciones",
      "Compilar a nativo",
    ],
    answer: 0,
    explanation:
      "Una lambda implementa de forma compacta una interfaz funcional (un método abstracto), habilitando programación funcional.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es una 'functional interface' en Java?",
    options: [
      "Una interfaz con un único método abstracto (p. ej. Runnable, Function)",
      "Una interfaz sin métodos",
      "Una clase abstracta",
      "Un record",
    ],
    answer: 0,
    explanation:
      "Una interfaz funcional tiene exactamente un método abstracto, por lo que puede implementarse con una lambda o referencia a método.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el método map() en un Stream de Java?",
    options: [
      "Transforma cada elemento aplicando una función, produciendo un nuevo stream",
      "Filtra elementos",
      "Ordena el stream",
      "Reduce a un único valor",
    ],
    answer: 0,
    explanation:
      "map aplica una función a cada elemento devolviendo un stream transformado; filter descarta y reduce agrega.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué anotación de Spring programa la ejecución periódica de un método?",
    options: ["@Scheduled", "@Async", "@Transactional", "@Cacheable"],
    answer: 0,
    explanation:
      "@Scheduled (con @EnableScheduling) ejecuta un método en intervalos fijos o según una expresión cron.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite @Cacheable en Spring?",
    options: [
      "Cachear el resultado de un método para evitar recomputarlo en llamadas con los mismos argumentos",
      "Cifrar la respuesta",
      "Abrir una transacción",
      "Ejecutar en otro hilo",
    ],
    answer: 0,
    explanation:
      "@Cacheable almacena el resultado por clave (argumentos) y lo reutiliza en llamadas siguientes, reduciendo cómputo o accesos costosos.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué diferencia a checked de unchecked exceptions en Java?",
    options: [
      "Las checked deben declararse/capturarse; las unchecked (RuntimeException) no obligan a ello",
      "Las unchecked no se pueden lanzar",
      "Las checked no existen en Java 17",
      "Son idénticas",
    ],
    answer: 0,
    explanation:
      "Las checked exceptions obligan a manejarlas o declararlas; las unchecked (subclases de RuntimeException) no tienen esa obligación.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite @Async en Spring?",
    options: [
      "Ejecutar un método en un hilo aparte, devolviendo (opcionalmente) un CompletableFuture",
      "Cachear resultados",
      "Validar entradas",
      "Definir rutas REST",
    ],
    answer: 0,
    explanation:
      "@Async (con @EnableAsync) ejecuta el método en un pool de hilos, útil para trabajo no bloqueante del hilo llamante.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja tiene usar tipos inmutables (records, final) en concurrencia?",
    options: [
      "Son seguros entre hilos sin sincronización, al no cambiar su estado",
      "Consumen más memoria siempre",
      "Impiden usar colecciones",
      "Requieren locks explícitos",
    ],
    answer: 0,
    explanation:
      "Un objeto inmutable no cambia tras su creación, por lo que es intrínsecamente thread-safe sin necesidad de sincronización.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace la inyección de dependencias (DI) por el contenedor de Spring?",
    options: [
      "Proveer a un objeto sus dependencias en vez de que las cree él mismo (inversión de control)",
      "Compilar el código",
      "Crear la base de datos",
      "Balancear el tráfico",
    ],
    answer: 0,
    explanation:
      "La DI entrega las colaboraciones ya construidas al objeto, desacoplando creación de uso (principio de inversión de control).",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },

  // ---- APIs REST, Microservicios y OpenAPI (9) ----
  {
    question: "¿Qué método HTTP se usa para eliminar un recurso?",
    options: ["DELETE", "GET", "POST", "PATCH"],
    answer: 0,
    explanation:
      "DELETE elimina el recurso indicado; es idempotente (borrar algo ya borrado deja el mismo estado).",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué significa que DELETE sea idempotente?",
    options: [
      "Repetir la operación deja el sistema en el mismo estado final",
      "Siempre devuelve 200",
      "Nunca falla",
      "Crea un recurso nuevo",
    ],
    answer: 0,
    explanation:
      "La idempotencia implica que varias llamadas iguales producen el mismo estado final; borrar dos veces el mismo recurso no cambia el resultado.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué mecanismo controla qué orígenes web pueden llamar a una API desde el navegador?",
    options: ["CORS", "CSRF", "JWT", "TLS"],
    answer: 0,
    explanation:
      "CORS (Cross-Origin Resource Sharing) define qué orígenes pueden acceder a los recursos de la API desde el navegador.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da gRPC frente a REST/JSON en comunicación interna de microservicios?",
    options: [
      "Serialización binaria eficiente (Protobuf) y contratos fuertes con HTTP/2",
      "Es más legible por humanos",
      "No requiere definición de servicio",
      "Solo funciona en navegadores",
    ],
    answer: 0,
    explanation:
      "gRPC usa Protobuf sobre HTTP/2: payloads compactos, streaming y contratos fuertes, ideal para tráfico interno de alto rendimiento.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite un 'health check' (readiness/liveness) en un microservicio?",
    options: [
      "Que el orquestador sepa si debe rutar tráfico o reiniciar la instancia",
      "Cifrar el tráfico",
      "Versionar la API",
      "Generar documentación",
    ],
    answer: 0,
    explanation:
      "Readiness indica si puede recibir tráfico; liveness si está vivo o debe reiniciarse. Kubernetes los usa para gestionar los pods.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué estrategia mitiga el impacto de una dependencia lenta sin tumbar al servicio?",
    options: [
      "Timeout + fallback (respuesta degradada)",
      "Esperar indefinidamente",
      "Reintentar sin límite",
      "Eliminar el timeout",
    ],
    answer: 0,
    explanation:
      "Un timeout acota la espera y un fallback entrega una respuesta degradada, evitando que una dependencia lenta bloquee al servicio.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué describe el campo 'servers' en un documento OpenAPI?",
    options: [
      "Las URLs base donde está disponible la API (p. ej. prod, staging)",
      "Los esquemas de datos",
      "Los códigos de error",
      "La seguridad",
    ],
    answer: 0,
    explanation:
      "La sección servers lista las URLs base (entornos) sobre las que operan los paths definidos en el contrato.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da la comunicación asíncrona (eventos) frente a REST síncrono entre microservicios?",
    options: [
      "Reduce acoplamiento temporal y mejora resiliencia ante indisponibilidad de un servicio",
      "Garantiza respuesta inmediata",
      "Elimina la necesidad de contratos",
      "Simplifica el debugging",
    ],
    answer: 0,
    explanation:
      "La mensajería asíncrona desacopla en el tiempo: el emisor no depende de que el receptor esté disponible en ese instante.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué código HTTP indica una redirección permanente?",
    options: ["301 Moved Permanently", "302 Found", "304 Not Modified", "307 Temporary Redirect"],
    answer: 0,
    explanation:
      "301 indica que el recurso se movió permanentemente a otra URI; los clientes deberían actualizar sus referencias.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },

  // ---- Apache Camel y Patrones de Integración (EIP) (9) ----
  {
    question: "En Camel, ¿qué representa el 'body' del mensaje?",
    options: [
      "El contenido/payload principal que la ruta procesa",
      "Las credenciales de seguridad",
      "La configuración del contexto",
      "El número de reintentos",
    ],
    answer: 0,
    explanation:
      "El body es el payload del mensaje; los headers llevan metadatos y las properties datos del Exchange.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué EIP corresponde a un 'Dynamic Router'?",
    options: [
      "Enrutar el mensaje por pasos decididos en runtime hasta completar su recorrido",
      "Dividir el mensaje",
      "Limitar la tasa",
      "Agregar mensajes",
    ],
    answer: 0,
    explanation:
      "El Dynamic Router decide el siguiente destino en tiempo de ejecución, encaminando el mensaje por una secuencia calculada dinámicamente.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el 'Transactional Client' EIP en integración con mensajería?",
    options: [
      "Participar en una transacción para que consumo y procesamiento sean atómicos (commit/rollback)",
      "Comprimir mensajes",
      "Enrutar por contenido",
      "Reordenar mensajes",
    ],
    answer: 0,
    explanation:
      "El Transactional Client integra la mensajería en una transacción, de modo que un fallo revierte el consumo y evita pérdidas/duplicados.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Para qué sirve el componente 'timer' de Camel?",
    options: [
      "Disparar una ruta periódicamente según un intervalo",
      "Consumir de una cola JMS",
      "Leer archivos",
      "Llamar a una API REST",
    ],
    answer: 0,
    explanation:
      "El componente timer genera mensajes a intervalos, útil para tareas programadas o polling periódico dentro de Camel.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el EIP 'Message Expiration' (TTL)?",
    options: [
      "Descartar mensajes que superan un tiempo de vida sin ser procesados",
      "Comprimir el mensaje",
      "Reordenar por secuencia",
      "Duplicar el mensaje",
    ],
    answer: 0,
    explanation:
      "El Message Expiration marca un TTL: si el mensaje no se procesa a tiempo, se descarta o se envía a un canal de expirados.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué DSL permite definir rutas Camel en formato YAML?",
    options: [
      "La YAML DSL de Camel",
      "Solo la Java DSL",
      "Solo XML Spring",
      "No existe soporte YAML",
    ],
    answer: 0,
    explanation:
      "Camel ofrece una YAML DSL además de Java y XML, popular en entornos cloud-native y Camel K.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué patrón EIP describe el 'Guaranteed Delivery'?",
    options: [
      "Asegurar la entrega persistiendo el mensaje hasta confirmarla, tolerando caídas",
      "Entregar sin confirmación",
      "Descartar ante error",
      "Entregar una sola vez sin persistencia",
    ],
    answer: 0,
    explanation:
      "Guaranteed Delivery persiste el mensaje (en disco/broker) hasta confirmar su entrega, sobreviviendo a fallos del sistema.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da Camel al soportar cientos de componentes (conectores)?",
    options: [
      "Integrar con múltiples protocolos/sistemas reutilizando conectores en vez de codificarlos",
      "Eliminar la necesidad de rutas",
      "Forzar un único protocolo",
      "Reemplazar la JVM",
    ],
    answer: 0,
    explanation:
      "El amplio catálogo de componentes de Camel permite conectar con HTTP, JMS, Kafka, file, FTP, bases y más sin reinventar la integración.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué EIP corresponde a 'multicast' en Camel?",
    options: [
      "Enviar el mismo mensaje a múltiples endpoints (posiblemente en paralelo)",
      "Dividir una lista en mensajes",
      "Filtrar por condición",
      "Limitar la tasa de envío",
    ],
    answer: 0,
    explanation:
      "multicast difunde una copia del mensaje a varios destinos a la vez, con opción de ejecución paralela y agregación de respuestas.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },

  // ---- Drools y Motores de Reglas (9) ----
  {
    question: "¿Qué palabra clave declara una regla en DRL?",
    options: ["rule", "function", "class", "query"],
    answer: 0,
    explanation:
      "Una regla se declara con 'rule \"nombre\" when ... then ... end' en el lenguaje DRL.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué permite 'eval()' en el LHS de una regla Drools?",
    options: [
      "Evaluar una expresión booleana arbitraria como condición adicional",
      "Insertar un fact",
      "Eliminar la sesión",
      "Declarar un global",
    ],
    answer: 0,
    explanation:
      "eval evalúa una expresión booleana (no vinculada a un patrón) como condición; se usa con cuidado por su impacto en el rendimiento.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'query' en Drools?",
    options: [
      "Una consulta reutilizable sobre la working memory que devuelve facts que cumplen un patrón",
      "Un comando SQL",
      "Un endpoint REST",
      "Un tipo de índice",
    ],
    answer: 0,
    explanation:
      "Una query permite buscar en la memoria de trabajo los hechos que satisfacen ciertas condiciones, útil también para backward chaining.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da separar las reglas en varios archivos/paquetes DRL?",
    options: [
      "Mejor organización, mantenibilidad y activación por grupos",
      "Mayor acoplamiento",
      "Que no se puedan versionar",
      "Que el motor no arranque",
    ],
    answer: 0,
    explanation:
      "Modularizar las reglas por paquete/archivo facilita el mantenimiento, el gobierno y la activación selectiva (agenda/ruleflow groups).",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace la 'declare' en DRL?",
    options: [
      "Definir un tipo de fact (hecho) directamente en el DRL sin una clase Java",
      "Eliminar un fact",
      "Compilar el KieBase",
      "Crear un dashboard",
    ],
    answer: 0,
    explanation:
      "declare permite definir tipos de hechos (fact types) dentro del propio DRL, útil para modelos específicos de las reglas.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el procesamiento de eventos complejos (CEP) en Drools Fusion?",
    options: [
      "Razonar sobre eventos temporales (ventanas, correlación) además de hechos",
      "Compilar a nativo",
      "Renderizar UI",
      "Ejecutar SQL",
    ],
    answer: 0,
    explanation:
      "Drools Fusion añade CEP: operadores temporales, ventanas deslizantes y correlación de eventos para detectar patrones en el tiempo.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué conviene testear las reglas de negocio con casos concretos?",
    options: [
      "Porque pequeñas interacciones entre reglas pueden producir resultados inesperados",
      "Porque las reglas no se pueden ejecutar",
      "Porque el motor no valida sintaxis",
      "Porque los tests son opcionales siempre",
    ],
    answer: 0,
    explanation:
      "Las interacciones y el orden de disparo entre muchas reglas pueden sorprender; los tests con casos reales dan confianza sobre el comportamiento.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué rol tiene el archivo kmodule.xml en un proyecto Drools?",
    options: [
      "Configura KieBases y KieSessions (qué paquetes incluyen, tipo de sesión)",
      "Define el pipeline CI",
      "Declara dependencias Maven",
      "Contiene las reglas",
    ],
    answer: 0,
    explanation:
      "kmodule.xml describe la configuración de KieBases y KieSessions del módulo (paquetes, stateful/stateless, etc.).",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué beneficio clave aporta un motor de reglas al negocio de seguros?",
    options: [
      "Cambiar reglas de suscripción/pricing sin redeploy, acercando la lógica a los analistas",
      "Eliminar la base de datos",
      "Renderizar la UI",
      "Acelerar la red",
    ],
    answer: 0,
    explanation:
      "Externalizar las reglas de negocio volátiles (elegibilidad, pricing) permite ajustarlas rápido y que negocio participe sin tocar código.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },

  // ---- Kafka, MQ y Mensajería Empresarial (9) ----
  {
    question: "¿Qué es un 'producer' en Kafka?",
    options: [
      "El cliente que publica eventos en un topic",
      "El servidor que almacena particiones",
      "El que consume eventos",
      "Un índice de base de datos",
    ],
    answer: 0,
    explanation:
      "El producer es el cliente que escribe/publica registros en los topics de Kafka.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué define la configuración 'retention.ms' de un topic?",
    options: [
      "Cuánto tiempo se conservan los mensajes antes de ser elegibles para borrado",
      "El número de particiones",
      "El factor de replicación",
      "El tamaño del batch del productor",
    ],
    answer: 0,
    explanation:
      "retention.ms fija la ventana temporal de retención; pasado ese tiempo los segmentos antiguos pueden eliminarse.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el 'dead letter topic' en un pipeline de consumo?",
    options: [
      "Derivar los mensajes que fallan repetidamente para análisis sin bloquear el flujo",
      "Acelerar el consumo",
      "Aumentar la retención",
      "Cifrar el tráfico",
    ],
    answer: 0,
    explanation:
      "El dead letter topic recibe los mensajes no procesables tras reintentos, aislándolos para inspección o reproceso posterior.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué garantiza 'acks=1' en el productor Kafka?",
    options: [
      "El líder confirma la escritura, pero puede perderse si cae antes de replicar",
      "Todas las réplicas confirman",
      "No espera confirmación",
      "Garantiza exactly-once",
    ],
    answer: 0,
    explanation:
      "Con acks=1 basta la confirmación del líder; si el líder falla antes de que las réplicas copien el dato, puede perderse.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja tiene usar claves de partición significativas en un topic de eventos?",
    options: [
      "Preservar el orden por entidad y permitir co-locar eventos relacionados",
      "Reducir la retención",
      "Eliminar réplicas",
      "Evitar el Schema Registry",
    ],
    answer: 0,
    explanation:
      "Una key significativa (p. ej. id de cuenta) agrupa en una partición todos los eventos de esa entidad, preservando su orden.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué problema puede causar un consumidor que procesa muy lento cada mensaje?",
    options: [
      "Rebalances por exceder max.poll.interval.ms y crecimiento del lag",
      "Mayor durabilidad",
      "Menos particiones",
      "Pérdida del líder",
    ],
    answer: 0,
    explanation:
      "Si el procesamiento excede max.poll.interval.ms, el consumidor es considerado caído y se dispara un rebalance; además crece el lag.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué modelo de mensajería usa una 'Queue' de JMS?",
    options: [
      "Punto a punto: cada mensaje lo consume un único receptor",
      "Publish-subscribe a todos",
      "Broadcast sin consumidores",
      "Solo request-reply",
    ],
    answer: 0,
    explanation:
      "La Queue reparte cada mensaje a un solo consumidor (point-to-point), balanceando entre los receptores disponibles.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite la idempotencia en el consumidor de eventos?",
    options: [
      "Procesar el mismo mensaje más de una vez sin efectos duplicados",
      "Evitar recibir mensajes",
      "Garantizar orden global",
      "Reducir la latencia de red",
    ],
    answer: 0,
    explanation:
      "Un consumidor idempotente aplica el efecto una sola vez aunque reciba duplicados (habituales en at-least-once), p. ej. con claves deduplicadas.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el 'throughput' en el contexto de un broker de mensajería?",
    options: [
      "La cantidad de mensajes procesados por unidad de tiempo",
      "El número de particiones",
      "El tiempo de retención",
      "El número de brokers",
    ],
    answer: 0,
    explanation:
      "El throughput mide los mensajes/segundo que el sistema produce o consume, indicador clave de capacidad.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },

  // ---- Observabilidad (9) ----
  {
    question: "¿Qué es un 'log' en observabilidad?",
    options: [
      "Un registro de un evento discreto ocurrido en el sistema, con contexto",
      "Una serie temporal agregada",
      "Un árbol de spans",
      "Un dashboard",
    ],
    answer: 0,
    explanation:
      "Un log es el registro de un evento puntual (con timestamp y contexto); métricas y trazas complementan la observabilidad.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué tipo de métrica agrega observaciones en buckets para calcular percentiles?",
    options: ["Histogram", "Counter", "Gauge", "Log"],
    answer: 0,
    explanation:
      "El histogram agrupa observaciones en buckets, permitiendo estimar percentiles (p. ej. latencia p95) del lado del backend.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite correlacionar una métrica anómala con su causa concreta?",
    options: [
      "Saltar de la métrica a las trazas y logs de las requests afectadas (exemplars/trace_id)",
      "Reiniciar el servicio",
      "Borrar la métrica",
      "Aumentar el sampling a 100% siempre",
    ],
    answer: 0,
    explanation:
      "Enlazar métricas con trazas (exemplars) y logs por trace_id permite pasar del 'qué' (métrica) al 'por qué' (traza/log).",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un SLA frente a un SLO?",
    options: [
      "El SLA es el acuerdo contractual con consecuencias; el SLO es el objetivo interno sobre un SLI",
      "Son idénticos",
      "El SLO es contractual y el SLA interno",
      "Ambos son métricas crudas",
    ],
    answer: 0,
    explanation:
      "El SLA es el compromiso externo (con penalizaciones); el SLO es el objetivo interno que suele ser más estricto, medido por los SLIs.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué recolecta un agente como Metricbeat en el stack Elastic?",
    options: [
      "Métricas del sistema y servicios para enviarlas al pipeline Elastic",
      "Solo logs de aplicación",
      "Dashboards",
      "Trazas distribuidas únicamente",
    ],
    answer: 0,
    explanation:
      "Metricbeat recolecta métricas del host y de servicios (CPU, memoria, DB, etc.) y las envía a Elasticsearch/Logstash.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da definir alertas sobre síntomas (latencia/errores) en vez de causas (CPU)?",
    options: [
      "Alertar por impacto real al usuario reduce ruido y falsos positivos",
      "Genera más alertas siempre",
      "Impide usar dashboards",
      "Elimina la necesidad de métricas",
    ],
    answer: 0,
    explanation:
      "Alertar por síntomas (lo que afecta al usuario) es más accionable; las causas sirven para diagnosticar, no necesariamente para despertar a alguien.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite la retención por niveles (hot/warm/cold) en un sistema de logs/métricas?",
    options: [
      "Equilibrar costo y acceso: datos recientes rápidos, antiguos más baratos/lentos",
      "Eliminar la necesidad de índices",
      "Cifrar los datos",
      "Aumentar la cardinalidad",
    ],
    answer: 0,
    explanation:
      "Mover datos de hot a warm/cold según su edad reduce costos manteniendo accesibles los datos recientes más consultados.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué miden las métricas RED (para servicios de request)?",
    options: [
      "Rate (tasa), Errors (errores) y Duration (latencia)",
      "RAM, Errores y Disco",
      "Requests, Endpoints y Deploys",
      "Reads, Edits y Deletes",
    ],
    answer: 0,
    explanation:
      "El método RED monitorea Rate, Errors y Duration: una base simple y efectiva para servicios orientados a request.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué es útil instrumentar métricas de negocio además de técnicas?",
    options: [
      "Permiten detectar problemas por su impacto en el negocio (p. ej. pólizas emitidas/min cae)",
      "Reemplazan a los logs",
      "Eliminan la necesidad de trazas",
      "Reducen la cardinalidad",
    ],
    answer: 0,
    explanation:
      "Las métricas de negocio (conversiones, emisiones, pagos) revelan incidentes que las técnicas podrían no mostrar, por su impacto real.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },

  // ---- Arquitecturas Orientadas a Eventos (9) ----
  {
    question: "¿Qué es un 'productor de eventos' en EDA?",
    options: [
      "El componente que detecta un cambio y publica el evento correspondiente",
      "El que consume y reacciona",
      "El broker de mensajería",
      "La base de datos de lectura",
    ],
    answer: 0,
    explanation:
      "El productor emite eventos cuando ocurre algo relevante; los consumidores reaccionan de forma desacoplada.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué ventaja da incluir un identificador único en cada evento?",
    options: [
      "Permite deduplicar y rastrear el evento a lo largo del sistema",
      "Reduce el tamaño del evento",
      "Cifra el contenido",
      "Evita publicarlo",
    ],
    answer: 0,
    explanation:
      "Un id único habilita idempotencia (deduplicar) y trazabilidad del evento entre servicios.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué problema resuelve el patrón 'inbox' en consumidores de eventos?",
    options: [
      "Registrar los eventos ya procesados para garantizar idempotencia ante reentregas",
      "Acelerar la red",
      "Eliminar el broker",
      "Versionar el esquema",
    ],
    answer: 0,
    explanation:
      "El patrón inbox persiste los ids de eventos procesados; antes de actuar, el consumidor verifica para no procesar duplicados.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué distingue a un 'evento de integración' de un 'evento de dominio'?",
    options: [
      "El de integración cruza límites de contexto/servicio; el de dominio es interno al modelo",
      "Son lo mismo",
      "El de dominio se publica externamente",
      "El de integración no se serializa",
    ],
    answer: 0,
    explanation:
      "El evento de dominio vive dentro del bounded context; el de integración se publica hacia afuera para que otros servicios reaccionen.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite un 'schema registry' en una arquitectura de eventos?",
    options: [
      "Gestionar y validar la evolución compatible de los esquemas de eventos",
      "Almacenar los eventos",
      "Balancear el tráfico",
      "Cifrar los mensajes",
    ],
    answer: 0,
    explanation:
      "El schema registry versiona los esquemas y verifica compatibilidad, evitando que cambios rompan a los consumidores.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué riesgo introduce acoplar consumidores a detalles internos del productor en un evento?",
    options: [
      "Que cambios internos del productor rompan a los consumidores (acoplamiento por datos)",
      "Mejor rendimiento garantizado",
      "Menor necesidad de esquema",
      "Imposibilidad de escalar",
    ],
    answer: 0,
    explanation:
      "Exponer detalles internos en el evento acopla a los consumidores a la implementación del productor; conviene publicar contratos estables.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el procesamiento con ventanas (windowing) en streams de eventos?",
    options: [
      "Agregar eventos por intervalos de tiempo (p. ej. conteos por minuto)",
      "Eliminar eventos antiguos",
      "Cifrar el stream",
      "Versionar esquemas",
    ],
    answer: 0,
    explanation:
      "El windowing agrupa eventos en ventanas temporales (tumbling, sliding) para agregaciones como conteos o promedios por periodo.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja ofrece la consistencia eventual frente a la fuerte en sistemas distribuidos?",
    options: [
      "Mayor disponibilidad y escalabilidad, a cambio de un retardo en la convergencia",
      "Consistencia inmediata siempre",
      "Menor disponibilidad",
      "Eliminar la red",
    ],
    answer: 0,
    explanation:
      "La consistencia eventual prioriza disponibilidad y escala (teorema CAP), aceptando que los datos converjan con el tiempo.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué papel juega un broker como Kafka en una EDA?",
    options: [
      "Actuar de backbone que transporta, persiste y distribuye los eventos entre servicios",
      "Ser la base de datos transaccional",
      "Renderizar la UI",
      "Compilar el código",
    ],
    answer: 0,
    explanation:
      "El broker es el event backbone: desacopla productores y consumidores, persiste el log y permite replay y escalado.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Junior",
  },

  // ---- JMeter y Playwright (9) ----
  {
    question: "¿Qué define un 'escenario' en una prueba de carga con JMeter?",
    options: [
      "El conjunto de peticiones, datos y comportamiento que simula a los usuarios",
      "El color del reporte",
      "La versión de Java",
      "El número de listeners",
    ],
    answer: 0,
    explanation:
      "El escenario modela el flujo y la mezcla de operaciones de los usuarios virtuales para que la prueba sea representativa.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué elemento de JMeter agrupa peticiones para modelar un flujo lógico de usuario?",
    options: [
      "Transaction Controller",
      "CSV Data Set Config",
      "Response Assertion",
      "Constant Timer",
    ],
    answer: 0,
    explanation:
      "El Transaction Controller agrupa varias peticiones y mide el tiempo del conjunto, útil para representar pasos de negocio.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el modo 'trace on retry' o los retries de Playwright Test?",
    options: [
      "Reintentar un test fallido y capturar traza para diagnosticar inestabilidad",
      "Generar más carga",
      "Compilar el backend",
      "Medir el throughput",
    ],
    answer: 0,
    explanation:
      "Configurar retries y traces permite reintentar tests inestables y capturar evidencia (traza) de los fallos para analizarlos.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite 'page.waitForResponse' en Playwright?",
    options: [
      "Esperar a que ocurra una respuesta de red específica antes de continuar",
      "Generar usuarios virtuales",
      "Medir percentiles",
      "Compilar el proyecto",
    ],
    answer: 0,
    explanation:
      "waitForResponse espera una respuesta de red concreta (por URL/patrón), útil para sincronizar con llamadas asíncronas de la app.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es un 'baseline' de rendimiento?",
    options: [
      "Una medición de referencia para comparar y detectar regresiones en pruebas posteriores",
      "El número de usuarios máximo",
      "Un tipo de assertion",
      "El tiempo de ramp-up",
    ],
    answer: 0,
    explanation:
      "El baseline es la referencia contra la que se comparan futuras ejecuciones para detectar mejoras o regresiones de performance.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da ejecutar Playwright en modo headless en CI?",
    options: [
      "Correr sin interfaz gráfica, más rápido y apto para servidores sin pantalla",
      "Imposibilita las capturas",
      "Requiere un monitor físico",
      "Mide el throughput del backend",
    ],
    answer: 0,
    explanation:
      "El modo headless ejecuta el navegador sin UI, ideal para CI: más rápido y sin necesidad de entorno gráfico.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué métrica de carga indica el tiempo hasta el primer byte de respuesta?",
    options: ["Latencia (time to first byte)", "Throughput", "Ramp-up", "Error rate"],
    answer: 0,
    explanation:
      "La latencia/TTFB mide el tiempo hasta recibir el primer byte; el tiempo de respuesta total incluye además la transferencia completa.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué conviene separar datos de prueba por usuario virtual en una prueba de carga?",
    options: [
      "Para evitar colisiones y simular comportamiento realista e independiente",
      "Para que todos usen el mismo registro",
      "Para reducir el número de peticiones",
      "Para evitar usar assertions",
    ],
    answer: 0,
    explanation:
      "Datos distintos por usuario (p. ej. vía CSV) evitan contención artificial y reflejan mejor el uso real concurrente.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué tipo de prueba valida que una versión nueva no degrade el rendimiento previo?",
    options: [
      "Prueba de regresión de rendimiento",
      "Prueba unitaria",
      "Prueba de humo funcional",
      "Prueba de accesibilidad",
    ],
    answer: 0,
    explanation:
      "La regresión de rendimiento compara contra un baseline para asegurar que los cambios no empeoran latencia/throughput.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },

  // ---- SQL Server y Cosmos DB (9) ----
  {
    question: "¿Qué cláusula ordena los resultados de una consulta SQL?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    answer: 0,
    explanation:
      "ORDER BY ordena el resultado por una o más columnas, ascendente (ASC) o descendente (DESC).",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué hace la palabra clave DISTINCT en un SELECT?",
    options: [
      "Elimina filas duplicadas del resultado",
      "Ordena las filas",
      "Agrupa por columna",
      "Limita el número de filas",
    ],
    answer: 0,
    explanation:
      "DISTINCT devuelve solo filas únicas, descartando duplicados en el conjunto de columnas seleccionado.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un 'trigger' en SQL Server?",
    options: [
      "Un procedimiento que se ejecuta automáticamente ante eventos DML (INSERT/UPDATE/DELETE)",
      "Un índice especial",
      "Una vista materializada",
      "Un tipo de JOIN",
    ],
    answer: 0,
    explanation:
      "Un trigger ejecuta lógica automáticamente al ocurrir ciertos eventos sobre una tabla; útil pero puede ocultar lógica y afectar rendimiento.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da una vista indexada (materializada) en SQL Server?",
    options: [
      "Persistir y precalcular el resultado de una consulta para acelerar lecturas frecuentes",
      "Reducir la integridad",
      "Eliminar las claves foráneas",
      "Cifrar la tabla",
    ],
    answer: 0,
    explanation:
      "Una vista indexada materializa el resultado, acelerando consultas repetidas a cambio de costo de mantenimiento en las escrituras.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Cosmos DB, ¿qué permite una consulta 'cross-partition'?",
    options: [
      "Consultar varias particiones, con mayor costo en RU que una consulta dentro de una sola partición",
      "Consultar sin consumir RU",
      "Evitar la partition key",
      "Garantizar consistencia fuerte",
    ],
    answer: 0,
    explanation:
      "Una query cross-partition abanica a múltiples particiones, costando más RU; conviene filtrar por partition key cuando se pueda.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el TTL (time-to-live) en un contenedor de Cosmos DB?",
    options: [
      "Expirar y eliminar documentos automáticamente tras cierto tiempo",
      "Cifrar los documentos",
      "Crear índices",
      "Replicar a otra región",
    ],
    answer: 0,
    explanation:
      "El TTL borra automáticamente documentos vencidos, útil para datos efímeros (sesiones, caché) sin trabajos de limpieza manuales.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué estrategia de throughput de Cosmos DB ajusta las RU según la demanda?",
    options: [
      "Autoscale (throughput autoescalable)",
      "Throughput manual fijo únicamente",
      "Sin throughput",
      "Solo lectura",
    ],
    answer: 0,
    explanation:
      "El autoscale ajusta las RU/s entre un mínimo y un máximo según la carga, equilibrando costo y capacidad ante demanda variable.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué problema evita usar parámetros en vez de concatenar valores en una consulta SQL?",
    options: [
      "La inyección SQL y además mejora la reutilización de planes",
      "La necesidad de índices",
      "El uso de transacciones",
      "La normalización",
    ],
    answer: 0,
    explanation:
      "Las consultas parametrizadas previenen la inyección SQL y favorecen el reuso del plan de ejecución cacheado.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué describe la normalización en bases relacionales?",
    options: [
      "Organizar los datos para reducir redundancia y anomalías de actualización",
      "Duplicar datos para velocidad",
      "Cifrar columnas",
      "Particionar por clave",
    ],
    answer: 0,
    explanation:
      "La normalización estructura los datos (formas normales) minimizando redundancia; la desnormalización, en cambio, duplica para optimizar lecturas.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },

  // ---- Git, Jenkins, Maven y CI/CD (9) ----
  {
    question: "¿Qué comando descarga un repositorio remoto por primera vez?",
    options: ["git clone", "git init", "git commit", "git merge"],
    answer: 0,
    explanation:
      "git clone copia un repositorio remoto (con su historial) a tu máquina local.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué registra un commit en Git?",
    options: [
      "Una instantánea de los cambios en stage, con autor, mensaje y referencia al padre",
      "Solo el nombre del archivo",
      "La configuración del SO",
      "El estado del servidor remoto",
    ],
    answer: 0,
    explanation:
      "Un commit guarda una instantánea del contenido en stage, enlazada a su(s) commit(s) padre, con metadatos de autor y mensaje.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué ventaja tiene una Pull/Merge Request en el flujo de trabajo?",
    options: [
      "Permite revisión de código y ejecutar checks de CI antes de integrar",
      "Elimina la necesidad de ramas",
      "Despliega a producción directamente",
      "Borra el historial",
    ],
    answer: 0,
    explanation:
      "La PR habilita revisión por pares y gates automáticos (CI, análisis) antes de fusionar, elevando la calidad de lo integrado.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el 'squash' al fusionar una rama?",
    options: [
      "Combinar todos los commits de la rama en uno solo al integrar",
      "Borrar el historial del repo",
      "Dividir un commit en varios",
      "Revertir un merge",
    ],
    answer: 0,
    explanation:
      "El squash merge condensa los commits de la feature en uno, dejando un historial de main más limpio y legible.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué define el campo 'agent' en una pipeline declarativa de Jenkins?",
    options: [
      "Dónde (en qué nodo/entorno) se ejecuta la pipeline o etapa",
      "Las dependencias Maven",
      "El esquema de la base",
      "La estrategia de branching",
    ],
    answer: 0,
    explanation:
      "agent indica el nodo o contenedor donde corre la pipeline/etapa (p. ej. any, label, docker).",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace el goal 'mvn clean' en Maven?",
    options: [
      "Elimina el directorio target (artefactos de builds previos)",
      "Compila el código",
      "Publica el artefacto",
      "Ejecuta los tests de integración",
    ],
    answer: 0,
    explanation:
      "clean borra target/ para partir de un estado limpio, evitando residuos de compilaciones anteriores.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué permite cachear dependencias en el pipeline de CI?",
    options: [
      "Acelerar los builds evitando re-descargar dependencias en cada ejecución",
      "Eliminar las pruebas",
      "Reducir la cobertura",
      "Desplegar sin build",
    ],
    answer: 0,
    explanation:
      "Cachear ~/.m2 o dependencias reduce el tiempo de build al evitar descargas repetidas en cada corrida del pipeline.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué práctica reduce el riesgo de integrar cambios grandes de golpe?",
    options: [
      "Integrar cambios pequeños y frecuentes (commits/PRs acotados)",
      "Acumular cambios por semanas",
      "Evitar ramas",
      "Desplegar solo una vez al año",
    ],
    answer: 0,
    explanation:
      "Cambios pequeños y frecuentes reducen conflictos y facilitan la revisión y el rollback, pilar de la integración continua.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da ejecutar el pipeline en contenedores reproducibles?",
    options: [
      "Builds consistentes independientes del host, evitando el 'funciona en mi máquina'",
      "Mayor acoplamiento al servidor",
      "Builds menos reproducibles",
      "Imposibilidad de escalar",
    ],
    answer: 0,
    explanation:
      "Contenerizar el build fija el entorno (dependencias, versiones), dando reproducibilidad y aislamiento entre ejecuciones y máquinas.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },

  // ========================================================================
  // CUARTA TANDA — conceptos básicos: "¿Qué es?" y "¿Para qué se usa?"
  // ========================================================================

  // ---- Duck Creek e Insurity ----
  {
    question: "¿Qué es un PAS (Policy Administration System)?",
    options: [
      "El sistema central que administra el ciclo de vida de las pólizas (cotización, emisión, endosos, renovación)",
      "Un servidor de correo",
      "Un motor de búsqueda",
      "Un protocolo de red",
    ],
    answer: 0,
    explanation:
      "El PAS es el núcleo que gestiona las pólizas de punta a punta; Duck Creek e Insurity ofrecen PAS para seguros P&C.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usan plataformas como Duck Creek e Insurity?",
    options: [
      "Para administrar pólizas, facturación y siniestros de aseguradoras de forma integrada",
      "Para editar imágenes",
      "Para compilar código C++",
      "Para orquestar contenedores",
    ],
    answer: 0,
    explanation:
      "Son suites de core insurance: cubren policy, billing y claims, el corazón operativo de una aseguradora P&C.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },

  // ---- Java 17+, Spring Boot y Quarkus ----
  {
    question: "¿Qué es Java?",
    options: [
      "Un lenguaje de programación orientado a objetos que compila a bytecode y corre sobre la JVM",
      "Un sistema operativo",
      "Una base de datos",
      "Un navegador web",
    ],
    answer: 0,
    explanation:
      "Java es un lenguaje OO, portable ('write once, run anywhere'): su código compila a bytecode que ejecuta la JVM en cualquier plataforma.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es la JVM (Java Virtual Machine)?",
    options: [
      "La máquina virtual que ejecuta el bytecode de Java, abstrayendo el sistema operativo",
      "Un editor de código",
      "Un gestor de dependencias",
      "Un servidor web",
    ],
    answer: 0,
    explanation:
      "La JVM interpreta/compila (JIT) el bytecode y gestiona memoria (GC), permitiendo que el mismo programa corra en distintos SO.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es el bytecode de Java?",
    options: [
      "El código intermedio (.class) que produce el compilador y ejecuta la JVM",
      "El código máquina específico del procesador",
      "Un archivo de configuración",
      "El código fuente .java",
    ],
    answer: 0,
    explanation:
      "El compilador javac traduce el .java a bytecode (.class), un formato intermedio portable que la JVM ejecuta en cualquier plataforma.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre el JDK y el JRE?",
    options: [
      "El JDK incluye herramientas de desarrollo (compilador) además del JRE; el JRE solo ejecuta aplicaciones",
      "Son lo mismo",
      "El JRE compila y el JDK solo ejecuta",
      "El JDK es un navegador",
    ],
    answer: 0,
    explanation:
      "El JDK (Development Kit) trae compilador y herramientas para desarrollar; el JRE (Runtime Environment) solo contiene lo necesario para ejecutar.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es Spring Boot?",
    options: [
      "Un framework que simplifica crear aplicaciones Spring con autoconfiguración y servidor embebido",
      "Un sistema operativo",
      "Un motor de base de datos",
      "Un lenguaje de programación",
    ],
    answer: 0,
    explanation:
      "Spring Boot agiliza el desarrollo con Spring: autoconfiguración, starters y servidor embebido, reduciendo configuración manual.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usa Spring Boot?",
    options: [
      "Para construir rápidamente aplicaciones y microservicios Java listos para producción",
      "Para editar video",
      "Para diseñar bases de datos únicamente",
      "Para compilar C#",
    ],
    answer: 0,
    explanation:
      "Se usa para crear servicios/APIs y microservicios Java con mínima configuración y buenas prácticas de producción (Actuator, métricas, etc.).",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es Quarkus?",
    options: [
      "Un framework Java 'cloud-native' optimizado para arranque rápido y bajo consumo (ideal para contenedores)",
      "Un IDE",
      "Un broker de mensajería",
      "Una base de datos NoSQL",
    ],
    answer: 0,
    explanation:
      "Quarkus es un framework Java pensado para la nube: build-time processing y compilación nativa (GraalVM) para startup en milisegundos y poca RAM.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Junior",
  },

  // ---- APIs REST, Microservicios y OpenAPI ----
  {
    question: "¿Qué es una API?",
    options: [
      "Una interfaz que permite que dos sistemas se comuniquen mediante un contrato definido",
      "Un tipo de base de datos",
      "Un lenguaje de programación",
      "Un servidor físico",
    ],
    answer: 0,
    explanation:
      "Una API (Application Programming Interface) expone operaciones con un contrato claro para que otros sistemas la consuman.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es REST?",
    options: [
      "Un estilo arquitectónico para APIs sobre HTTP, basado en recursos y verbos estándar",
      "Un lenguaje de programación",
      "Un protocolo de cifrado",
      "Un motor de reglas",
    ],
    answer: 0,
    explanation:
      "REST (Representational State Transfer) modela recursos accesibles por URIs y manipulados con los métodos HTTP, de forma stateless.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un microservicio?",
    options: [
      "Un servicio pequeño y autónomo, con su propia responsabilidad, desplegable de forma independiente",
      "Una función de base de datos",
      "Un tipo de servidor físico",
      "Una librería de UI",
    ],
    answer: 0,
    explanation:
      "Un microservicio encapsula una capacidad de negocio acotada, se despliega y escala por separado y se comunica por APIs/eventos.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es Swagger UI?",
    options: [
      "Una interfaz web que renderiza un documento OpenAPI para explorar y probar la API",
      "Un compilador de Java",
      "Un broker de eventos",
      "Un sistema operativo",
    ],
    answer: 0,
    explanation:
      "Swagger UI genera documentación interactiva a partir del contrato OpenAPI, permitiendo ver y ejecutar los endpoints desde el navegador.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Junior",
  },

  // ---- Apache Camel y Patrones de Integración (EIP) ----
  {
    question: "¿Para qué se usa Apache Camel?",
    options: [
      "Para integrar sistemas enrutando y transformando mensajes entre protocolos/tecnologías",
      "Para diseñar interfaces de usuario",
      "Para entrenar modelos de ML",
      "Para administrar bases de datos",
    ],
    answer: 0,
    explanation:
      "Camel se usa para construir integraciones: conecta sistemas heterogéneos aplicando patrones de ruteo, mediación y transformación (EIP).",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué son los Enterprise Integration Patterns (EIP)?",
    options: [
      "Un catálogo de patrones reutilizables para integrar aplicaciones mediante mensajería",
      "Un lenguaje de programación",
      "Un tipo de base de datos",
      "Un protocolo de red propietario",
    ],
    answer: 0,
    explanation:
      "Los EIP (Hohpe & Woolf) son soluciones probadas y con vocabulario común para problemas de integración por mensajería; Camel los implementa.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Junior",
  },

  // ---- Drools y Motores de Reglas ----
  {
    question: "¿Para qué se usa Drools?",
    options: [
      "Para externalizar y ejecutar reglas de negocio separadas del código de la aplicación",
      "Para desplegar contenedores",
      "Para medir rendimiento web",
      "Para versionar código",
    ],
    answer: 0,
    explanation:
      "Drools permite definir y ejecutar reglas de negocio fuera del código, de modo que cambien sin redeploy y las toque también negocio.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un BRMS (Business Rules Management System)?",
    options: [
      "Un sistema para definir, gestionar y ejecutar reglas de negocio de forma centralizada",
      "Un sistema de archivos distribuido",
      "Un orquestador de contenedores",
      "Un navegador web",
    ],
    answer: 0,
    explanation:
      "Un BRMS (como Drools) centraliza la autoría, gobierno y ejecución de reglas de negocio, separándolas de la lógica de la aplicación.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },

  // ---- Kafka, MQ y Mensajería Empresarial ----
  {
    question: "¿Para qué se usa Apache Kafka?",
    options: [
      "Para transmitir y almacenar flujos de eventos de forma distribuida entre sistemas",
      "Para renderizar páginas web",
      "Para compilar Java",
      "Para diseñar interfaces",
    ],
    answer: 0,
    explanation:
      "Kafka se usa como plataforma de streaming de eventos: desacopla productores y consumidores, con alta escala, persistencia y replay.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un message broker (intermediario de mensajes)?",
    options: [
      "Un intermediario que recibe, almacena y entrega mensajes entre aplicaciones desacopladas",
      "Una base de datos relacional",
      "Un servidor de archivos",
      "Un compilador",
    ],
    answer: 0,
    explanation:
      "Un message broker (Kafka, RabbitMQ, ActiveMQ) media la comunicación asíncrona, desacoplando a emisores y receptores.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Junior",
  },

  // ---- Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK) ----
  {
    question: "¿Qué es ELK (Elastic Stack)?",
    options: [
      "El conjunto Elasticsearch + Logstash + Kibana para ingerir, indexar y visualizar logs/datos",
      "Un lenguaje de programación",
      "Un broker de mensajería",
      "Un framework de frontend",
    ],
    answer: 0,
    explanation:
      "ELK agrupa Elasticsearch (indexación/búsqueda), Logstash (ingesta/transformación) y Kibana (visualización); con Beats se le llama Elastic Stack.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usa el stack ELK?",
    options: [
      "Para centralizar, buscar y analizar logs y datos operativos del sistema",
      "Para compilar aplicaciones",
      "Para orquestar contenedores",
      "Para versionar código",
    ],
    answer: 0,
    explanation:
      "ELK se usa para gestión centralizada de logs y analítica: ingestar, indexar y explorar/visualizar grandes volúmenes de eventos.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es la observabilidad en un sistema de software?",
    options: [
      "La capacidad de entender el estado interno del sistema a partir de su telemetría (logs, métricas, trazas)",
      "Un tipo de base de datos",
      "Un lenguaje de consulta",
      "Un protocolo de red",
    ],
    answer: 0,
    explanation:
      "La observabilidad permite diagnosticar y explorar el comportamiento del sistema (incluido lo imprevisto) a partir de logs, métricas y trazas.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es Dynatrace?",
    options: [
      "Una plataforma de monitoreo/APM que instrumenta aplicaciones y analiza su rendimiento con IA",
      "Un gestor de dependencias",
      "Un sistema de control de versiones",
      "Una base de datos NoSQL",
    ],
    answer: 0,
    explanation:
      "Dynatrace es una plataforma APM full-stack: descubre la topología, instrumenta automáticamente y detecta causas raíz con IA (Davis).",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es Prometheus en el contexto de observabilidad?",
    options: [
      "Un sistema de monitoreo y base de datos de series temporales con el lenguaje PromQL",
      "Un orquestador de contenedores",
      "Un framework de pruebas",
      "Un broker de mensajería",
    ],
    answer: 0,
    explanation:
      "Prometheus recolecta y almacena métricas como series temporales y permite consultarlas/alertar con PromQL, muy usado junto a Grafana.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },

  // ---- Arquitecturas Orientadas a Eventos ----
  {
    question: "¿Qué significa EDA (Event-Driven Architecture)?",
    options: [
      "Arquitectura orientada a eventos: los componentes producen y reaccionan a eventos de forma desacoplada",
      "Un lenguaje de consulta",
      "Un tipo de base de datos",
      "Un protocolo de seguridad",
    ],
    answer: 0,
    explanation:
      "EDA (Event-Driven Architecture) es un estilo donde los servicios se comunican mediante eventos, logrando bajo acoplamiento y buena escalabilidad.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usa una arquitectura orientada a eventos (EDA)?",
    options: [
      "Para desacoplar servicios y reaccionar a cambios en tiempo real, escalando de forma independiente",
      "Para compilar código nativo",
      "Para diseñar interfaces gráficas",
      "Para cifrar bases de datos",
    ],
    answer: 0,
    explanation:
      "Se usa cuando conviene desacoplar sistemas y reaccionar a eventos (integraciones, procesamiento en tiempo real), tolerando picos e indisponibilidad.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Junior",
  },

  // ---- JMeter y Playwright ----
  {
    question: "¿Qué es Apache JMeter?",
    options: [
      "Una herramienta open source para pruebas de carga y rendimiento",
      "Un navegador web",
      "Un motor de reglas",
      "Un sistema de control de versiones",
    ],
    answer: 0,
    explanation:
      "JMeter es una herramienta de pruebas de carga/rendimiento que simula usuarios concurrentes contra APIs, webs, colas y bases de datos.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es Playwright?",
    options: [
      "Un framework de automatización de navegadores para pruebas end-to-end de aplicaciones web",
      "Una herramienta de carga masiva",
      "Un compilador",
      "Una base de datos",
    ],
    answer: 0,
    explanation:
      "Playwright automatiza Chromium, Firefox y WebKit para pruebas E2E de UI (y API), con auto-waits y soporte multiplataforma/multilenguaje.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Junior",
  },

  // ---- SQL Server y Cosmos DB ----
  {
    question: "¿Qué es SQL Server?",
    options: [
      "Un sistema de gestión de bases de datos relacionales (RDBMS) de Microsoft",
      "Un lenguaje de programación",
      "Un orquestador de contenedores",
      "Una base de datos de grafos",
    ],
    answer: 0,
    explanation:
      "SQL Server es el RDBMS de Microsoft: almacena datos relacionales y se consulta con T-SQL, con transacciones ACID e índices.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es Azure Cosmos DB?",
    options: [
      "Una base de datos NoSQL distribuida globalmente y multimodelo de Microsoft Azure",
      "Un RDBMS on-premise",
      "Un framework de frontend",
      "Un servidor de correo",
    ],
    answer: 0,
    explanation:
      "Cosmos DB es una base NoSQL multimodelo con distribución global, escalado horizontal y niveles de consistencia configurables.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usa una base de datos NoSQL como Cosmos DB?",
    options: [
      "Para datos a gran escala, flexibles y distribuidos geográficamente con baja latencia",
      "Para reemplazar siempre a cualquier RDBMS",
      "Para compilar aplicaciones",
      "Para versionar código",
    ],
    answer: 0,
    explanation:
      "Cosmos DB brilla con grandes volúmenes, esquemas flexibles y distribución global de baja latencia; no es un reemplazo universal del relacional.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Senior",
  },

  // ---- Git, Jenkins, Maven y CI/CD ----
  {
    question: "¿Qué es Jenkins?",
    options: [
      "Un servidor de automatización open source para construir pipelines de CI/CD",
      "Un sistema de control de versiones",
      "Una base de datos",
      "Un framework de frontend",
    ],
    answer: 0,
    explanation:
      "Jenkins automatiza build, test y despliegue mediante pipelines (pipeline-as-code con Jenkinsfile) y un amplio ecosistema de plugins.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usa Jenkins?",
    options: [
      "Para automatizar la construcción, pruebas y despliegue del software (CI/CD)",
      "Para diseñar bases de datos",
      "Para editar imágenes",
      "Para escribir documentación",
    ],
    answer: 0,
    explanation:
      "Jenkins orquesta pipelines que compilan, prueban y despliegan automáticamente ante cada cambio, base de la integración/entrega continua.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Para qué se usa Maven?",
    options: [
      "Para gestionar dependencias y automatizar el ciclo de build de proyectos Java",
      "Para monitorear producción",
      "Para orquestar contenedores",
      "Para diseñar UI",
    ],
    answer: 0,
    explanation:
      "Maven resuelve dependencias y estandariza el build (compile, test, package, install, deploy) a partir del pom.xml.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué significa CI/CD?",
    options: [
      "Integración Continua y Entrega/Despliegue Continuo: automatizar integrar, validar y liberar cambios",
      "Un lenguaje de programación",
      "Un tipo de base de datos",
      "Un protocolo de red",
    ],
    answer: 0,
    explanation:
      "CI/CD combina Integración Continua (build+tests frecuentes) con Entrega/Despliegue Continuo (liberar de forma automatizada y confiable).",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },

  // ========================================================================
  // QUINTA TANDA — paquete de 100 preguntas (ángulos nuevos)
  // ========================================================================

  // ---- Duck Creek e Insurity (10) ----
  {
    question: "¿Qué es el 'periodo de gracia' (grace period) en una póliza?",
    options: [
      "El plazo tras el vencimiento en que aún se puede pagar la prima sin perder la cobertura",
      "El tiempo de emisión de la póliza",
      "El plazo para reportar un siniestro",
      "La duración total de la póliza",
    ],
    answer: 0,
    explanation:
      "El grace period da un margen tras la fecha de pago para abonar la prima sin que la póliza caduque.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es la 'subrogación' (subrogation) en seguros?",
    options: [
      "El derecho de la aseguradora a recuperar lo pagado reclamando al tercero responsable",
      "El pago de la prima",
      "La cancelación de la póliza",
      "El aumento de cobertura",
    ],
    answer: 0,
    explanation:
      "Tras indemnizar al asegurado, la aseguradora se subroga en sus derechos para reclamar al tercero causante del daño.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué significa que una póliza esté 'in-force' (vigente)?",
    options: [
      "Que está activa y brindando cobertura en el periodo actual",
      "Que fue cancelada",
      "Que está en cotización",
      "Que venció sin renovar",
    ],
    answer: 0,
    explanation:
      "Una póliza in-force está vigente: la cobertura está activa y el asegurado protegido durante ese periodo.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un 'binder' en seguros?",
    options: [
      "Una cobertura provisional temporal mientras se emite la póliza definitiva",
      "El documento de cancelación",
      "El recibo de pago final",
      "El informe de siniestro",
    ],
    answer: 0,
    explanation:
      "El binder otorga cobertura temporal inmediata hasta que se formaliza y emite la póliza completa.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el prorrateo (pro-rata) de la prima?",
    options: [
      "Calcular la prima proporcional al tiempo de cobertura efectivo (p. ej. tras un endoso o cancelación)",
      "Duplicar la prima",
      "Eliminar el deducible",
      "El pago total por adelantado",
    ],
    answer: 0,
    explanation:
      "El prorrateo ajusta la prima al periodo realmente cubierto, común al cancelar o modificar una póliza a mitad de término.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "Al manejar datos personales (PII) de asegurados, ¿qué práctica es recomendable?",
    options: [
      "Enmascarar/cifrar PII y aplicar mínimo privilegio en el acceso",
      "Exponerla en logs para depurar",
      "Enviarla en parámetros de URL",
      "Compartirla con todos los servicios",
    ],
    answer: 0,
    explanation:
      "Los datos sensibles deben cifrarse/enmascararse y limitarse por mínimo privilegio, nunca exponerse en logs ni en URLs.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el 'salvamento' (salvage) en un siniestro?",
    options: [
      "El valor recuperable del bien dañado que la aseguradora puede vender tras indemnizar",
      "El deducible del asegurado",
      "La prima de renovación",
      "El límite de la cobertura",
    ],
    answer: 0,
    explanation:
      "El salvage es lo recuperable del bien siniestrado; la aseguradora puede disponer de él para mitigar el costo del siniestro pagado.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué describe el 'lapse' (caducidad) de una póliza?",
    options: [
      "La terminación de la cobertura por falta de pago de la prima",
      "La emisión de un endoso",
      "El primer aviso de siniestro",
      "El cálculo del rating",
    ],
    answer: 0,
    explanation:
      "El lapse ocurre cuando la póliza caduca por impago (tras el periodo de gracia), quedando sin cobertura.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },
  {
    question:
      "Al integrar cotizadores de varios canales con el PAS, ¿qué desacopla mejor la carga?",
    options: [
      "Un servicio de rating/cotización con caché, consumido vía API por los canales",
      "Acceso directo de cada canal a la base del PAS",
      "Un único hilo compartido",
      "Replicar el PAS por canal",
    ],
    answer: 0,
    explanation:
      "Centralizar el rating en un servicio con caché y exponerlo por API desacopla a los canales del PAS y absorbe la carga de cotización.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué rol cumple ACORD en la industria aseguradora?",
    options: [
      "Define estándares de datos y formularios para intercambiar información entre partes",
      "Es un motor de reglas",
      "Es un broker de mensajería",
      "Es un lenguaje de programación",
    ],
    answer: 0,
    explanation:
      "ACORD estandariza formatos de datos y formularios del sector seguros, facilitando la interoperabilidad entre sistemas y compañías.",
    subtheme: "Duck Creek e Insurity",
    group: GROUP,
    level: "Senior",
  },

  // ---- Java 17+, Spring Boot y Quarkus (9) ----
  {
    question: "¿Qué hace el Garbage Collector (GC) en la JVM?",
    options: [
      "Libera automáticamente la memoria de objetos que ya no son alcanzables",
      "Compila el bytecode",
      "Gestiona los hilos del SO",
      "Cifra la memoria",
    ],
    answer: 0,
    explanation:
      "El GC recupera memoria del heap ocupada por objetos inalcanzables, evitando que el desarrollador la libere manualmente.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre el 'stack' y el 'heap' en la memoria de la JVM?",
    options: [
      "El stack guarda variables locales y marcos de método; el heap aloja los objetos",
      "Son lo mismo",
      "El heap guarda variables locales",
      "El stack aloja los objetos",
    ],
    answer: 0,
    explanation:
      "El stack contiene marcos de ejecución y variables locales por hilo; el heap es la zona compartida donde viven los objetos.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué si se sobreescribe equals() hay que sobreescribir hashCode()?",
    options: [
      "Porque objetos iguales deben tener el mismo hashCode para funcionar bien en HashMap/HashSet",
      "Porque equals no compila sin hashCode",
      "Porque son el mismo método",
      "Porque lo exige la JVM al arrancar",
    ],
    answer: 0,
    explanation:
      "El contrato equals/hashCode exige que objetos iguales tengan igual hashCode; romperlo causa comportamientos erróneos en colecciones basadas en hash.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué garantiza el bloque try-with-resources en Java?",
    options: [
      "Cierra automáticamente los recursos AutoCloseable al terminar, incluso ante excepción",
      "Reintenta el bloque ante error",
      "Ejecuta en otro hilo",
      "Cachea el resultado",
    ],
    answer: 0,
    explanation:
      "try-with-resources cierra los recursos declarados (que implementan AutoCloseable) de forma automática y segura al salir del bloque.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Para qué sirve ResponseEntity en Spring MVC?",
    options: [
      "Controlar explícitamente el cuerpo, el código de estado y las cabeceras de la respuesta HTTP",
      "Abrir una transacción",
      "Inyectar dependencias",
      "Validar entradas",
    ],
    answer: 0,
    explanation:
      "ResponseEntity permite construir la respuesta con control total sobre status, headers y body, útil para APIs expresivas.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia hay entre @PathVariable y @RequestParam en Spring?",
    options: [
      "@PathVariable extrae valores de la ruta (/items/{id}); @RequestParam de la query string (?page=2)",
      "Son idénticos",
      "@RequestParam lee del path",
      "@PathVariable lee del body",
    ],
    answer: 0,
    explanation:
      "@PathVariable toma segmentos de la URI; @RequestParam toma parámetros de la query string o del formulario.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué representa un CompletableFuture en Java?",
    options: [
      "Un resultado asíncrono componible al que se le encadenan callbacks (thenApply, thenCompose)",
      "Un hilo del SO",
      "Una anotación de Spring",
      "Un tipo primitivo",
    ],
    answer: 0,
    explanation:
      "CompletableFuture modela un cómputo asíncrono que puede completarse a futuro y componerse con operaciones encadenadas sin bloquear.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace la operación reduce() en un Stream?",
    options: [
      "Combina los elementos en un único resultado acumulado (p. ej. suma)",
      "Filtra elementos",
      "Transforma cada elemento",
      "Ordena el stream",
    ],
    answer: 0,
    explanation:
      "reduce agrega los elementos aplicando una operación acumulativa, produciendo un único valor a partir del stream.",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el 'String pool' en Java?",
    options: [
      "Un área que reutiliza literales String idénticos para ahorrar memoria",
      "Un pool de conexiones a base",
      "Un hilo dedicado a strings",
      "Un tipo de colección",
    ],
    answer: 0,
    explanation:
      "El String pool cachea literales String: dos literales iguales referencian el mismo objeto, optimizando memoria (por la inmutabilidad de String).",
    subtheme: "Java 17+, Spring Boot y Quarkus",
    group: GROUP,
    level: "Experto",
  },

  // ---- APIs REST, Microservicios y OpenAPI (9) ----
  {
    question: "¿Qué código HTTP conviene para una operación aceptada que se procesará de forma asíncrona?",
    options: ["202 Accepted", "200 OK", "201 Created", "204 No Content"],
    answer: 0,
    explanation:
      "202 Accepted indica que la petición fue aceptada para procesamiento posterior, sin haberse completado aún.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué código HTTP indica que el tipo de contenido enviado no es soportado?",
    options: ["415 Unsupported Media Type", "400 Bad Request", "406 Not Acceptable", "409 Conflict"],
    answer: 0,
    explanation:
      "415 señala que el Content-Type del cuerpo no es soportado por el endpoint (p. ej. enviar XML donde se espera JSON).",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'service mesh' (p. ej. Istio) en microservicios?",
    options: [
      "Una capa de infraestructura que gestiona la comunicación entre servicios (ruteo, seguridad, observabilidad)",
      "Una base de datos compartida",
      "Un framework de frontend",
      "Un compilador",
    ],
    answer: 0,
    explanation:
      "El service mesh añade, vía sidecars, capacidades transversales (mTLS, retries, tracing, balanceo) sin tocar el código del servicio.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es el patrón 'sidecar' en arquitecturas de contenedores?",
    options: [
      "Un contenedor auxiliar junto al principal que añade capacidades (proxy, logging) sin modificarlo",
      "Un tipo de base de datos",
      "Un balanceador físico",
      "Un lenguaje de consulta",
    ],
    answer: 0,
    explanation:
      "El sidecar corre junto a la app en el mismo pod aportando funciones transversales (p. ej. el proxy de un service mesh).",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué sección de OpenAPI describe cómo se autentica la API (OAuth2, API key)?",
    options: ["components/securitySchemes", "paths", "servers", "tags"],
    answer: 0,
    explanation:
      "securitySchemes define los mecanismos de seguridad (apiKey, http, oauth2, openIdConnect) que luego se referencian en security.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué método HTTP permite al cliente descubrir los métodos soportados por un recurso?",
    options: ["OPTIONS", "GET", "POST", "TRACE"],
    answer: 0,
    explanation:
      "OPTIONS consulta las capacidades/métodos admitidos de un recurso; el navegador también lo usa en el preflight de CORS.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da un token de corta vida con refresh token en seguridad de APIs?",
    options: [
      "Limita la ventana de riesgo si se filtra el access token, renovándolo con el refresh",
      "Elimina la necesidad de TLS",
      "Hace la API más rápida",
      "Evita autenticar",
    ],
    answer: 0,
    explanation:
      "Access tokens de vida corta reducen el impacto de una fuga; el refresh token (más protegido) permite obtener nuevos sin re-login.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué código HTTP indica que el servidor no puede producir una respuesta en el formato pedido por Accept?",
    options: ["406 Not Acceptable", "415 Unsupported Media Type", "404 Not Found", "400 Bad Request"],
    answer: 0,
    explanation:
      "406 Not Acceptable ocurre cuando ningún formato disponible coincide con lo solicitado por la cabecera Accept del cliente.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja ofrece la negociación de contenido (content negotiation)?",
    options: [
      "Servir el mismo recurso en distintos formatos según lo que el cliente acepte",
      "Cifrar el tráfico",
      "Reducir el número de endpoints a cero",
      "Evitar la autenticación",
    ],
    answer: 0,
    explanation:
      "La content negotiation permite que un endpoint devuelva JSON, XML, etc., según la cabecera Accept, reutilizando el mismo recurso.",
    subtheme: "APIs REST, Microservicios y OpenAPI",
    group: GROUP,
    level: "Senior",
  },

  // ---- Apache Camel y Patrones de Integración (EIP) (9) ----
  {
    question: "¿Qué es el CamelContext?",
    options: [
      "El contenedor en runtime que gestiona rutas, componentes y el ciclo de vida de Camel",
      "Un tipo de base de datos",
      "Un endpoint REST",
      "Un archivo de logs",
    ],
    answer: 0,
    explanation:
      "El CamelContext es el núcleo en ejecución: arranca/detiene rutas, administra componentes y el registro, y coordina el procesamiento.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "En Camel, ¿qué hacen marshal y unmarshal?",
    options: [
      "Convertir entre objetos y un formato de datos (JSON, XML, CSV) y viceversa",
      "Enrutar por contenido",
      "Dividir mensajes",
      "Limitar la tasa",
    ],
    answer: 0,
    explanation:
      "marshal serializa un objeto a un formato (p. ej. JSON); unmarshal hace lo inverso, deserializando el payload a objetos.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el método bean() dentro de una ruta Camel?",
    options: [
      "Invocar un método de un bean para procesar el mensaje",
      "Crear una cola JMS",
      "Abrir una transacción de base",
      "Definir un endpoint HTTP",
    ],
    answer: 0,
    explanation:
      "bean() delega el procesamiento del Exchange a un método de un bean registrado, integrando lógica Java en la ruta.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es Camel K?",
    options: [
      "Una distribución de Camel para ejecutar integraciones nativas en Kubernetes",
      "Un lenguaje de reglas",
      "Un broker de mensajería",
      "Un IDE",
    ],
    answer: 0,
    explanation:
      "Camel K lleva las integraciones Camel a Kubernetes como recursos nativos, simplificando el despliegue cloud-native de rutas.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En el Aggregator de Camel, ¿qué define la 'completion condition'?",
    options: [
      "Cuándo se considera completa la agregación y se emite el mensaje combinado",
      "El formato de salida",
      "El número de particiones",
      "La política de seguridad",
    ],
    answer: 0,
    explanation:
      "La completion condition (por tamaño, tiempo, predicado) determina el momento en que el Aggregator libera el resultado agregado.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué diferencia hay entre 'enrich' y 'pollEnrich' en Camel?",
    options: [
      "enrich obtiene datos de un recurso (productor); pollEnrich los consume de un recurso que se sondea (consumidor)",
      "Son idénticos",
      "pollEnrich divide el mensaje",
      "enrich reordena mensajes",
    ],
    answer: 0,
    explanation:
      "enrich llama a un endpoint productor para enriquecer; pollEnrich hace polling de un endpoint consumidor (p. ej. leer un archivo) para combinar.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué formato de URI usa un endpoint de Camel?",
    options: [
      "esquema:contexto?opciones (p. ej. file:/in?delete=true)",
      "Solo una ruta de archivo",
      "Siempre una URL http",
      "Un número de puerto",
    ],
    answer: 0,
    explanation:
      "Los endpoints se expresan como URIs: 'componente:detalles?param=valor', que Camel resuelve al componente correspondiente.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da probar rutas con CamelTestSupport / @QuarkusTest?",
    options: [
      "Validar el comportamiento de las rutas (mock endpoints, aserciones) de forma automatizada",
      "Generar carga de producción",
      "Compilar a nativo",
      "Desplegar a Kubernetes",
    ],
    answer: 0,
    explanation:
      "Los frameworks de test de Camel permiten simular endpoints (mock) y verificar que la ruta procesa y enruta como se espera.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué EIP corresponde a 'Pipes and Filters'?",
    options: [
      "Encadenar pasos de procesamiento independientes por los que fluye el mensaje",
      "Descartar mensajes inválidos",
      "Enviar a varios destinatarios",
      "Reordenar por secuencia",
    ],
    answer: 0,
    explanation:
      "Pipes and Filters descompone el procesamiento en etapas (filtros) conectadas por canales (pipes), base del modelo de rutas de Camel.",
    subtheme: "Apache Camel y Patrones de Integración (EIP)",
    group: GROUP,
    level: "Senior",
  },

  // ---- Drools y Motores de Reglas (9) ----
  {
    question: "¿Qué hace la función 'accumulate' en una regla Drools?",
    options: [
      "Calcular agregados (suma, promedio, conteo) sobre un conjunto de facts que matchean",
      "Eliminar facts",
      "Crear una sesión",
      "Compilar reglas",
    ],
    answer: 0,
    explanation:
      "accumulate agrega sobre los hechos coincidentes (sum, count, average, etc.), permitiendo condiciones basadas en el resultado acumulado.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es la 'inserción lógica' (insertLogical) y el truth maintenance en Drools?",
    options: [
      "Insertar facts que se retractan automáticamente cuando dejan de cumplirse sus condiciones de soporte",
      "Insertar facts permanentes",
      "Eliminar la sesión",
      "Compilar a nativo",
    ],
    answer: 0,
    explanation:
      "insertLogical crea hechos justificados por una condición; el truth maintenance system los retira cuando esa justificación deja de ser válida.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite 'from' en el LHS de una regla Drools?",
    options: [
      "Razonar sobre datos de una fuente externa a la working memory (p. ej. una colección de un fact)",
      "Eliminar un fact",
      "Crear un global",
      "Cerrar la sesión",
    ],
    answer: 0,
    explanation:
      "from permite hacer matching sobre datos obtenidos de una fuente (una colección, un servicio) sin tener que insertarlos como facts individuales.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace un 'activation-group' en Drools?",
    options: [
      "Agrupa reglas de modo que al dispararse una, las demás del grupo no se ejecutan",
      "Agrupa facts",
      "Define el nivel de log",
      "Crea una KieBase",
    ],
    answer: 0,
    explanation:
      "En un activation-group solo una regla llega a dispararse (exclusión mutua): la primera que se activa cancela las otras del grupo.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué define el 'dialect' en un archivo DRL (java o mvel)?",
    options: [
      "El lenguaje usado para las expresiones y acciones de las reglas",
      "El idioma de los comentarios",
      "El formato de los facts",
      "El nivel de salience",
    ],
    answer: 0,
    explanation:
      "El dialect indica si las expresiones/acciones usan Java o MVEL; MVEL es más dinámico y conciso, Java más explícito y rápido.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permiten los atributos 'date-effective' y 'date-expires' de una regla?",
    options: [
      "Acotar la ventana temporal en que la regla puede dispararse",
      "Cifrar la regla",
      "Cambiar el dialecto",
      "Eliminar la agenda",
    ],
    answer: 0,
    explanation:
      "date-effective/date-expires habilitan la regla solo dentro de un rango de fechas, útil para reglas de negocio con vigencia temporal.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da usar una tabla de decisión frente a escribir muchas reglas DRL a mano?",
    options: [
      "Negocio puede mantener muchas combinaciones de condiciones en formato tabular, menos propenso a errores",
      "Ejecuta más rápido el motor",
      "Elimina la working memory",
      "Evita compilar",
    ],
    answer: 0,
    explanation:
      "Las decision tables expresan en una grilla muchas reglas similares, legibles para negocio y menos propensas a errores que escribir DRL repetitivo.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el procesamiento temporal (sliding window) en CEP con Drools?",
    options: [
      "Razonar sobre eventos ocurridos dentro de una ventana de tiempo deslizante",
      "Ordenar facts alfabéticamente",
      "Compilar a nativo",
      "Eliminar la agenda",
    ],
    answer: 0,
    explanation:
      "Las ventanas deslizantes limitan el razonamiento a los eventos recientes (p. ej. últimos 5 minutos), clave en detección de patrones temporales.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué conviene nombrar las reglas de forma descriptiva?",
    options: [
      "Facilita el mantenimiento, la trazabilidad en logs/agenda y la colaboración con negocio",
      "Mejora el rendimiento del motor",
      "Es obligatorio para compilar",
      "Reduce el número de facts",
    ],
    answer: 0,
    explanation:
      "Nombres claros hacen el conjunto de reglas legible y trazable (aparecen en la agenda y en el debugging), facilitando su gobierno.",
    subtheme: "Drools y Motores de Reglas",
    group: GROUP,
    level: "Senior",
  },

  // ---- Kafka, MQ y Mensajería Empresarial (9) ----
  {
    question: "En un topic compactado de Kafka, ¿qué representa un 'tombstone'?",
    options: [
      "Un mensaje con clave y valor null que marca la eliminación de esa clave",
      "Un mensaje duplicado",
      "El primer mensaje del topic",
      "Un mensaje cifrado",
    ],
    answer: 0,
    explanation:
      "Un tombstone (valor null para una clave) indica borrado en la compaction: tras retención, la clave se elimina del log compactado.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué riesgo implica habilitar 'unclean leader election' en Kafka?",
    options: [
      "Posible pérdida de datos al permitir que una réplica desincronizada se vuelva líder",
      "Mayor durabilidad garantizada",
      "Más particiones",
      "Menor latencia sin costo",
    ],
    answer: 0,
    explanation:
      "La unclean leader election permite que una réplica no-ISR lidere ante fallos, priorizando disponibilidad a costa de posible pérdida de datos.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Para qué sirve MirrorMaker en Kafka?",
    options: [
      "Replicar datos entre clusters Kafka (p. ej. para DR o geo-distribución)",
      "Comprimir mensajes",
      "Crear particiones",
      "Serializar con Avro",
    ],
    answer: 0,
    explanation:
      "MirrorMaker copia topics de un cluster a otro, útil para recuperación ante desastres, migraciones o agregación multi-región.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué controla 'max.poll.records' en un consumidor Kafka?",
    options: [
      "El número máximo de registros devueltos por cada llamada a poll()",
      "El número de particiones",
      "El factor de replicación",
      "El tiempo de retención",
    ],
    answer: 0,
    explanation:
      "max.poll.records limita cuántos registros entrega cada poll, ayudando a controlar el tiempo de procesamiento por ciclo y evitar rebalances.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En JMS, ¿qué controla el 'acknowledgement mode'?",
    options: [
      "Cómo y cuándo se confirma la recepción de un mensaje (AUTO, CLIENT, DUPS_OK)",
      "El formato del mensaje",
      "El número de consumidores",
      "La prioridad del productor",
    ],
    answer: 0,
    explanation:
      "El ack mode define la confirmación: AUTO_ACKNOWLEDGE automática, CLIENT_ACKNOWLEDGE manual, DUPS_OK_ACKNOWLEDGE perezosa (puede duplicar).",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En RabbitMQ (AMQP), ¿qué hace un 'exchange'?",
    options: [
      "Recibe mensajes del productor y los enruta a las colas según reglas de binding",
      "Almacena los offsets",
      "Replica particiones",
      "Compila el mensaje",
    ],
    answer: 0,
    explanation:
      "En AMQP el productor publica a un exchange, que según su tipo (direct, topic, fanout) enruta a las colas vinculadas por bindings.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué estrategia de asignación reparte particiones minimizando reasignaciones entre rebalances?",
    options: [
      "Sticky assignor (cooperative sticky)",
      "Round-robin puro sin estado",
      "Asignar todo a un consumidor",
      "No asignar",
    ],
    answer: 0,
    explanation:
      "El sticky/cooperative assignor intenta conservar las asignaciones previas, reduciendo el movimiento de particiones y el impacto del rebalance.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es un 'poison message' en mensajería?",
    options: [
      "Un mensaje que falla repetidamente al procesarse y puede bloquear o saturar el consumo",
      "Un mensaje cifrado",
      "El primer mensaje del topic",
      "Un mensaje de prueba",
    ],
    answer: 0,
    explanation:
      "Un poison message no se puede procesar y reintenta sin fin; se maneja con límite de reintentos y derivación a una DLQ.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da comprimir mensajes a nivel de topic/productor en Kafka?",
    options: [
      "Reduce el uso de red y disco, mejorando el throughput efectivo",
      "Garantiza orden global",
      "Elimina la necesidad de particiones",
      "Aumenta la latencia a cero",
    ],
    answer: 0,
    explanation:
      "La compresión (gzip, snappy, lz4, zstd) reduce el tamaño transmitido y almacenado, elevando el throughput a cambio de algo de CPU.",
    subtheme: "Kafka, MQ y Mensajería Empresarial",
    group: GROUP,
    level: "Senior",
  },

  // ---- Observabilidad (9) ----
  {
    question: "¿Qué mide el método USE para recursos del sistema?",
    options: [
      "Utilization, Saturation y Errors (utilización, saturación y errores)",
      "Users, Sessions y Events",
      "Uptime, Speed y Errors",
      "Usage, Security y Encryption",
    ],
    answer: 0,
    explanation:
      "El método USE (Brendan Gregg) examina Utilización, Saturación y Errores de cada recurso (CPU, memoria, disco) para hallar cuellos de botella.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Por qué conviene usar niveles de log (DEBUG, INFO, WARN, ERROR) adecuadamente?",
    options: [
      "Para filtrar por severidad, reducir ruido y controlar el volumen/costo de logs",
      "Para cifrar los logs",
      "Para acelerar la app",
      "Para evitar escribir logs",
    ],
    answer: 0,
    explanation:
      "Los niveles permiten ajustar qué se registra según el entorno (más detalle en dev, menos en prod), equilibrando diagnóstico y costo.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es el 'baggage' en OpenTelemetry?",
    options: [
      "Pares clave-valor que se propagan junto al contexto de traza a través de los servicios",
      "Un tipo de métrica",
      "Un exportador",
      "Un dashboard",
    ],
    answer: 0,
    explanation:
      "El baggage transporta metadatos (p. ej. tenant id) junto al contexto de traza entre servicios, para enriquecer telemetría o decisiones.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué diferencia a RUM (Real User Monitoring) de APM?",
    options: [
      "RUM mide la experiencia real en el navegador/cliente; APM instrumenta el rendimiento del backend",
      "Son lo mismo",
      "APM mide el navegador",
      "RUM compila el código",
    ],
    answer: 0,
    explanation:
      "RUM captura métricas desde el cliente real (carga, interacción); APM se centra en el rendimiento y las trazas del lado servidor.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué problema es la 'fatiga de alertas' (alert fatigue)?",
    options: [
      "Tantas alertas (muchas irrelevantes) que el equipo deja de prestarles atención",
      "Un error de compilación",
      "Falta de métricas",
      "Un tipo de dashboard",
    ],
    answer: 0,
    explanation:
      "El exceso de alertas ruidosas insensibiliza al equipo y hace que se pierdan las importantes; se mitiga alertando por síntomas accionables.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué hace un filtro 'grok' en Logstash?",
    options: [
      "Parsear texto no estructurado a campos estructurados mediante patrones",
      "Cifrar los logs",
      "Balancear la carga",
      "Crear dashboards",
    ],
    answer: 0,
    explanation:
      "Grok aplica patrones para extraer campos de líneas de log no estructuradas, convirtiéndolas en datos indexables y consultables.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite un 'correlation id' en logs de varios servicios?",
    options: [
      "Agrupar todos los logs de una misma petición/transacción a través de los servicios",
      "Cifrar los logs",
      "Reducir el almacenamiento a cero",
      "Compilar el código",
    ],
    answer: 0,
    explanation:
      "Un correlation id propagado por la request permite reconstruir su recorrido uniendo los logs de todos los servicios implicados.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ventaja da definir dashboards y alertas 'as code' (versionados)?",
    options: [
      "Reproducibilidad, revisión y despliegue controlado de la observabilidad",
      "Mayor acoplamiento al host",
      "Imposibilidad de versionar",
      "Eliminar las métricas",
    ],
    answer: 0,
    explanation:
      "Gestionar dashboards/alertas como código versionado permite revisarlos, reproducirlos y desplegarlos junto con la aplicación.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es la telemetría en observabilidad?",
    options: [
      "Los datos que emite el sistema (logs, métricas, trazas) para entender su comportamiento",
      "Un tipo de base de datos",
      "Un protocolo de cifrado",
      "Un lenguaje de programación",
    ],
    answer: 0,
    explanation:
      "La telemetría son las señales que el sistema produce sobre sí mismo (logs, métricas, trazas), base de la observabilidad.",
    subtheme: "Observabilidad (Dynatrace, OpenTelemetry, Grafana, ELK)",
    group: GROUP,
    level: "Junior",
  },

  // ---- Arquitecturas Orientadas a Eventos (9) ----
  {
    question: "¿Qué es el problema del 'dual write' en sistemas de eventos?",
    options: [
      "Escribir a la base y publicar el evento en dos operaciones separadas que pueden desincronizarse ante un fallo",
      "Escribir dos veces el mismo dato",
      "Duplicar la base de datos",
      "Un error de compilación",
    ],
    answer: 0,
    explanation:
      "El dual write (DB + broker en pasos separados) puede dejar inconsistencia si uno falla; se resuelve con el patrón Outbox o CDC.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es Change Data Capture (CDC) en el contexto de eventos?",
    options: [
      "Capturar los cambios de una base de datos y publicarlos como eventos",
      "Cifrar la base de datos",
      "Comprimir los eventos",
      "Un tipo de índice",
    ],
    answer: 0,
    explanation:
      "CDC lee el log de cambios de la base (inserts/updates/deletes) y los emite como eventos, alimentando pipelines sin tocar la app.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué significa compatibilidad 'backward' en la evolución de esquemas de eventos?",
    options: [
      "Los consumidores con el esquema nuevo pueden leer datos producidos con el esquema viejo",
      "Nada puede cambiar nunca",
      "Los productores no pueden evolucionar",
      "Se borran los eventos antiguos",
    ],
    answer: 0,
    explanation:
      "La compatibilidad backward permite que un consumidor actualizado lea eventos antiguos; forward es lo inverso. Se gestiona con un schema registry.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué técnica de descubrimiento de dominio ayuda a diseñar una EDA?",
    options: [
      "Event Storming (tormenta de eventos)",
      "Pair programming",
      "Code review",
      "Load testing",
    ],
    answer: 0,
    explanation:
      "El Event Storming reúne a negocio y tecnología para mapear eventos de dominio, comandos y agregados, útil para modelar una EDA.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite que un consumidor procese eventos de forma ordenada por entidad?",
    options: [
      "Particionar por la clave de la entidad y procesar cada partición secuencialmente",
      "Usar más consumer groups",
      "Deshabilitar las particiones",
      "Procesar en paralelo sin clave",
    ],
    answer: 0,
    explanation:
      "Particionar por la clave de entidad agrupa sus eventos en una partición, donde se consumen en orden de forma secuencial.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da emitir 'eventos de dominio' bien definidos en lugar de exponer la base de datos?",
    options: [
      "Desacopla a los consumidores de la estructura interna, publicando un contrato estable",
      "Obliga a compartir la base",
      "Elimina la necesidad de esquema",
      "Aumenta el acoplamiento",
    ],
    answer: 0,
    explanation:
      "Publicar eventos de dominio (contrato estable) evita que otros dependan del esquema interno, reduciendo acoplamiento y facilitando evolución.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el patrón 'event notification' minimalista?",
    options: [
      "Avisar que algo cambió con datos mínimos; el consumidor consulta más si lo necesita",
      "Incluir todo el estado siempre",
      "Eliminar el broker",
      "Garantizar consistencia fuerte",
    ],
    answer: 0,
    explanation:
      "La event notification lleva poca información (p. ej. un id); el consumidor, si requiere detalles, los consulta, a costa de más acoplamiento temporal.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia a 'at-least-once' de 'exactly-once' en procesamiento de eventos?",
    options: [
      "at-least-once puede reentregar (requiere idempotencia); exactly-once procesa cada evento una sola vez con coordinación",
      "Son idénticos",
      "exactly-once puede perder eventos",
      "at-least-once nunca duplica",
    ],
    answer: 0,
    explanation:
      "at-least-once es lo habitual y puede duplicar (se maneja con idempotencia); exactly-once exige transacciones/coordinación para no duplicar ni perder.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué beneficio aporta un 'event backbone' común a varios equipos?",
    options: [
      "Un medio compartido y gobernado para publicar/consumir eventos, fomentando integración desacoplada",
      "Obliga a un único lenguaje",
      "Elimina la necesidad de contratos",
      "Centraliza toda la lógica de negocio",
    ],
    answer: 0,
    explanation:
      "Un event backbone (p. ej. Kafka gobernado) estandariza cómo los equipos intercambian eventos, habilitando integración desacoplada y reutilizable.",
    subtheme: "Arquitecturas Orientadas a Eventos",
    group: GROUP,
    level: "Senior",
  },

  // ---- JMeter y Playwright (9) ----
  {
    question: "¿Qué permite un elemento JSR223 Sampler/PostProcessor en JMeter?",
    options: [
      "Ejecutar scripts (p. ej. Groovy) para lógica personalizada de generación o procesamiento",
      "Generar dashboards",
      "Reducir los usuarios",
      "Compilar el backend",
    ],
    answer: 0,
    explanation:
      "Los elementos JSR223 ejecutan scripts (Groovy recomendado) para lógica a medida: construir peticiones, procesar respuestas o correlacionar.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el 'Constant Throughput Timer' en JMeter?",
    options: [
      "Mantener una tasa de peticiones objetivo (p. ej. N por minuto) durante la prueba",
      "Validar respuestas",
      "Generar el reporte HTML",
      "Extraer datos de la respuesta",
    ],
    answer: 0,
    explanation:
      "El Constant Throughput Timer regula el ritmo para sostener una tasa objetivo de requests, útil para modelar carga constante.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué genera el 'HTML dashboard report' de JMeter?",
    options: [
      "Un reporte visual con métricas (percentiles, throughput, errores) tras una ejecución",
      "La carga de usuarios",
      "El código del test",
      "Un contenedor Docker",
    ],
    answer: 0,
    explanation:
      "El dashboard HTML resume la ejecución con gráficos y tablas (latencias, throughput, errores), facilitando el análisis de resultados.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite la configuración de 'projects' en Playwright Test?",
    options: [
      "Definir múltiples configuraciones (navegadores, dispositivos, entornos) para correr la misma suite",
      "Generar carga masiva",
      "Compilar el backend",
      "Medir el throughput",
    ],
    answer: 0,
    explanation:
      "Los projects permiten ejecutar los tests bajo distintas configuraciones (Chromium/Firefox/WebKit, mobile, baseURL) desde un solo archivo.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite el 'device emulation' en Playwright?",
    options: [
      "Simular dispositivos móviles (viewport, user agent, touch) para probar en distintos tamaños",
      "Generar 10k usuarios",
      "Medir CPU del servidor",
      "Desplegar la app",
    ],
    answer: 0,
    explanation:
      "Playwright emula dispositivos (p. ej. iPhone) ajustando viewport, user agent y toque, para validar la experiencia responsive.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el 'request' fixture de Playwright para pruebas de API?",
    options: [
      "Hacer llamadas HTTP directas (sin navegador) para probar endpoints o preparar estado",
      "Generar carga de miles de usuarios",
      "Compilar el proyecto",
      "Medir percentiles de red",
    ],
    answer: 0,
    explanation:
      "El APIRequestContext (request) de Playwright permite testear APIs o montar datos de prueba vía HTTP sin abrir un navegador.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da capturar screenshot/video 'on failure' en Playwright?",
    options: [
      "Facilita diagnosticar por qué falló un test al conservar evidencia visual del momento del fallo",
      "Acelera la ejecución",
      "Mide el throughput",
      "Genera usuarios virtuales",
    ],
    answer: 0,
    explanation:
      "Guardar screenshot/video solo en fallos aporta contexto visual para depurar sin inflar el almacenamiento con corridas exitosas.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué agrupa test.describe() en Playwright Test?",
    options: [
      "Un conjunto de tests relacionados, con hooks y configuración comunes",
      "Usuarios virtuales",
      "Particiones de Kafka",
      "Reglas de Drools",
    ],
    answer: 0,
    explanation:
      "test.describe agrupa casos relacionados, permitiendo compartir beforeEach/afterEach y organizar la suite de forma legible.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué conviene aislar el entorno/datos al correr pruebas de carga?",
    options: [
      "Para no afectar producción ni usuarios reales y obtener mediciones limpias",
      "Para que el test tarde más",
      "Para evitar usar timers",
      "Para no generar reportes",
    ],
    answer: 0,
    explanation:
      "Las pruebas de carga deben correr en entornos aislados (datos y recursos propios) para no impactar producción y medir sin interferencias.",
    subtheme: "JMeter y Playwright",
    group: GROUP,
    level: "Senior",
  },

  // ---- SQL Server y Cosmos DB (9) ----
  {
    question: "¿Qué garantiza una restricción UNIQUE en una columna?",
    options: [
      "Que no se repitan valores (pero puede admitir un NULL según el motor)",
      "Que los valores estén ordenados",
      "Que la columna sea la clave primaria",
      "Que se cifre la columna",
    ],
    answer: 0,
    explanation:
      "UNIQUE impide valores duplicados en la columna/combinación; a diferencia de PRIMARY KEY, suele permitir un valor NULL.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "En un índice compuesto, ¿por qué importa el orden de las columnas?",
    options: [
      "El índice sirve para filtros que usan las columnas de izquierda a derecha (prefijo más a la izquierda)",
      "El orden no influye",
      "Siempre conviene alfabético",
      "Solo importa el tipo de dato",
    ],
    answer: 0,
    explanation:
      "Un índice compuesto se aprovecha según el prefijo izquierdo: filtrar por la primera columna (o primeras) usa el índice; empezar por la segunda no.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué hace la sentencia MERGE en T-SQL?",
    options: [
      "Insertar, actualizar o eliminar filas en una tabla destino según coincidan con una fuente (upsert)",
      "Fusionar dos bases de datos",
      "Crear un índice",
      "Unir dos tablas en una vista",
    ],
    answer: 0,
    explanation:
      "MERGE aplica en una sola sentencia operaciones INSERT/UPDATE/DELETE según si las filas de la fuente coinciden con el destino (upsert).",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Para qué sirven las estadísticas (statistics) en SQL Server?",
    options: [
      "Ayudan al optimizador a estimar cardinalidades y elegir un buen plan de ejecución",
      "Cifran las tablas",
      "Crean índices automáticamente",
      "Reemplazan a las claves foráneas",
    ],
    answer: 0,
    explanation:
      "Las estadísticas describen la distribución de datos; si están desactualizadas, el optimizador puede elegir planes subóptimos.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué permite la cláusula PARTITION BY en una función de ventana?",
    options: [
      "Reiniciar el cálculo de la función por cada grupo de filas definido",
      "Particionar físicamente la tabla",
      "Crear un índice",
      "Eliminar duplicados",
    ],
    answer: 0,
    explanation:
      "PARTITION BY divide el conjunto en grupos; la función de ventana (ROW_NUMBER, SUM OVER...) se calcula independientemente dentro de cada uno.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Cosmos DB, ¿qué informa la cabecera 'x-ms-request-charge' de una operación?",
    options: [
      "Las RU consumidas por esa operación",
      "El tiempo de respuesta",
      "El número de documentos totales",
      "La región de origen",
    ],
    answer: 0,
    explanation:
      "request-charge indica cuántas RU costó la operación, clave para dimensionar el throughput y optimizar consultas costosas.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Cosmos DB, ¿qué diferencia a un 'point read' de una 'query'?",
    options: [
      "El point read (por id + partition key) es el acceso más barato; una query evalúa y puede costar más RU",
      "Son idénticos en costo",
      "La query es siempre más barata",
      "El point read recorre todas las particiones",
    ],
    answer: 0,
    explanation:
      "Leer por id y partition key (point read) es el acceso más eficiente en RU; una query implica evaluar documentos y suele costar más.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "En Cosmos DB, ¿qué relación hay entre particiones lógicas y físicas?",
    options: [
      "Muchas particiones lógicas (por partition key) se distribuyen entre las particiones físicas que gestiona el servicio",
      "Son lo mismo",
      "Cada partición lógica es una base distinta",
      "Las físicas las define el usuario",
    ],
    answer: 0,
    explanation:
      "Cada valor de partition key forma una partición lógica; Cosmos las reparte automáticamente entre particiones físicas con capacidad propia de RU.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué es una clave primaria (PRIMARY KEY) en una tabla relacional?",
    options: [
      "Una columna o conjunto que identifica de forma única cada fila y no admite NULL",
      "Un índice opcional sin unicidad",
      "Una columna que puede repetirse",
      "Una vista materializada",
    ],
    answer: 0,
    explanation:
      "La PRIMARY KEY identifica unívocamente cada fila (única y no nula); suele respaldarse con un índice clustered en SQL Server.",
    subtheme: "SQL Server y Cosmos DB",
    group: GROUP,
    level: "Junior",
  },

  // ---- Git, Jenkins, Maven y CI/CD (9) ----
  {
    question: "¿Para qué sirve el archivo .gitignore?",
    options: [
      "Indicar a Git qué archivos/carpetas no debe versionar",
      "Listar los colaboradores",
      "Definir el pipeline",
      "Configurar el servidor remoto",
    ],
    answer: 0,
    explanation:
      ".gitignore excluye del control de versiones archivos generados o sensibles (build, node_modules, secretos) para no commitearlos.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué hace 'git bisect'?",
    options: [
      "Busca con búsqueda binaria el commit que introdujo un bug",
      "Fusiona ramas",
      "Borra el historial",
      "Crea un tag",
    ],
    answer: 0,
    explanation:
      "git bisect hace una búsqueda binaria entre un commit bueno y uno malo para aislar eficientemente el commit que introdujo el fallo.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué representa HEAD en Git?",
    options: [
      "Un puntero a la referencia (rama/commit) en la que estás posicionado actualmente",
      "El primer commit del repo",
      "El servidor remoto",
      "Un archivo de configuración",
    ],
    answer: 0,
    explanation:
      "HEAD apunta a tu posición actual, normalmente la punta de la rama activa; en 'detached HEAD' apunta directo a un commit.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué plugin de Maven ejecuta las pruebas unitarias durante el build?",
    options: ["Surefire", "Shade", "Assembly", "Compiler"],
    answer: 0,
    explanation:
      "El plugin Surefire corre los tests unitarios en la fase test; Failsafe se encarga de los de integración.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué diferencia a una versión SNAPSHOT de una release en Maven?",
    options: [
      "SNAPSHOT es una versión en desarrollo que puede cambiar; la release es fija e inmutable",
      "Son idénticas",
      "La release cambia constantemente",
      "SNAPSHOT no se puede compilar",
    ],
    answer: 0,
    explanation:
      "Una -SNAPSHOT representa trabajo en curso y se re-resuelve; una versión release es definitiva e inmutable una vez publicada.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué dispara una build de Jenkins automáticamente al hacer push?",
    options: [
      "Un webhook del repositorio (o polling de SCM)",
      "Un commit local sin push",
      "Un cambio en el .gitignore",
      "La apertura del IDE",
    ],
    answer: 0,
    explanation:
      "Un webhook notifica a Jenkins al recibir push y dispara el pipeline; alternativamente, Jenkins puede sondear el SCM periódicamente.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es una 'multibranch pipeline' en Jenkins?",
    options: [
      "Una pipeline que detecta ramas/PRs del repo y ejecuta su Jenkinsfile automáticamente en cada una",
      "Una pipeline con una sola rama fija",
      "Un script bash suelto",
      "Un repositorio de artefactos",
    ],
    answer: 0,
    explanation:
      "La multibranch pipeline descubre ramas y pull requests con Jenkinsfile y crea jobs por cada una, ideal para validar features y PRs.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Cuál es el orden correcto (parcial) del ciclo de vida default de Maven?",
    options: [
      "validate → compile → test → package → verify → install → deploy",
      "deploy → install → package → compile",
      "test → compile → validate → package",
      "package → compile → test → validate",
    ],
    answer: 0,
    explanation:
      "El lifecycle default avanza en orden: validate, compile, test, package, verify, install y deploy; ejecutar una fase corre también las previas.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },
  {
    question: "¿Qué ventaja da una 'shared library' en Jenkins?",
    options: [
      "Reutilizar lógica de pipeline común entre proyectos, evitando duplicar código en cada Jenkinsfile",
      "Reemplazar Git",
      "Eliminar la necesidad de agentes",
      "Compilar más rápido el código de la app",
    ],
    answer: 0,
    explanation:
      "Las shared libraries centralizan pasos y funciones reutilizables de pipeline, estandarizando y evitando duplicación entre Jenkinsfiles.",
    subtheme: "Git, Jenkins, Maven y CI/CD",
    group: GROUP,
    level: "Experto",
  },

  // ========================================================================
  // FUNDAMENTOS DE DISEÑO en niveles Junior/Senior
  // (SOLID, KISS, DRY, YAGNI, patrones, antipatrones, GRASP, buenas prácticas)
  // ========================================================================

  // ---- Principios Complementarios de Diseño (KISS, DRY, YAGNI, antipatrones) ----
  {
    question: "¿Qué es el principio KISS?",
    options: [
      "Keep It Simple, Stupid: preferir soluciones simples y evitar la complejidad innecesaria",
      "Un patrón de diseño creacional",
      "Un algoritmo de ordenamiento",
      "Una anotación de Spring",
    ],
    answer: 0,
    explanation:
      "KISS (Keep It Simple, Stupid) aboga por mantener el diseño lo más simple posible; la complejidad gratuita dificulta el mantenimiento.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es el principio DRY?",
    options: [
      "Don't Repeat Yourself: evitar duplicar lógica/conocimiento centralizándolo en un solo lugar",
      "Un tipo de base de datos",
      "Un framework de testing",
      "Un protocolo de red",
    ],
    answer: 0,
    explanation:
      "DRY (Don't Repeat Yourself) busca una única fuente de verdad para cada pieza de conocimiento, reduciendo duplicación y errores de mantenimiento.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué recomienda el principio YAGNI?",
    options: [
      "You Aren't Gonna Need It: no implementar funcionalidad hasta que realmente se necesite",
      "Implementar todo por adelantado",
      "Duplicar la lógica para rapidez",
      "Optimizar siempre al máximo",
    ],
    answer: 0,
    explanation:
      "YAGNI (You Aren't Gonna Need It) evita construir funcionalidad especulativa, reduciendo complejidad y esfuerzo innecesarios.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es un antipatrón de diseño?",
    options: [
      "Una solución común que parece buena pero resulta contraproducente a la larga",
      "Un patrón de diseño recomendado",
      "Un tipo de test unitario",
      "Una anotación de Java",
    ],
    answer: 0,
    explanation:
      "Un antipatrón es una práctica recurrente que, pese a parecer una solución, genera más problemas que beneficios (deuda técnica).",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué describe el antipatrón 'God Object' (objeto todopoderoso)?",
    options: [
      "Una clase que concentra demasiadas responsabilidades y conoce/hace casi todo",
      "Una clase inmutable",
      "Una interfaz funcional",
      "Un patrón creacional",
    ],
    answer: 0,
    explanation:
      "El God Object acumula responsabilidades y dependencias, volviéndose difícil de entender, probar y mantener; viola SRP.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el 'código espagueti' (spaghetti code)?",
    options: [
      "Código con flujo de control enredado y sin estructura clara, difícil de seguir",
      "Código muy optimizado",
      "Un patrón de diseño",
      "Un tipo de prueba de carga",
    ],
    answer: 0,
    explanation:
      "El spaghetti code carece de estructura y modularidad; su control de flujo enmarañado lo hace frágil y difícil de mantener.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué promueve 'Clean Code' (código limpio)?",
    options: [
      "Código legible, con nombres claros, funciones pequeñas y fácil de mantener",
      "Código con el menor número de líneas sin importar la claridad",
      "Comentar cada línea",
      "Evitar las funciones",
    ],
    answer: 0,
    explanation:
      "Clean Code prioriza legibilidad y mantenibilidad: nombres significativos, funciones cortas y cohesivas, y mínima complejidad.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es el antipatrón 'Golden Hammer'?",
    options: [
      "Usar siempre la misma herramienta/solución para todo, aunque no sea la adecuada",
      "Un patrón de concurrencia",
      "Una técnica de refactorización",
      "Un tipo de índice",
    ],
    answer: 0,
    explanation:
      "El Golden Hammer ('para un martillo, todo son clavos') aplica una solución conocida a problemas donde no encaja, por comodidad o sesgo.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué describe el antipatrón 'Big Ball of Mud'?",
    options: [
      "Un sistema sin arquitectura clara, con dependencias enredadas y límites difusos",
      "Un patrón de microservicios",
      "Una base de datos distribuida",
      "Un pipeline de CI/CD",
    ],
    answer: 0,
    explanation:
      "El Big Ball of Mud es un sistema que creció sin estructura, con acoplamiento alto y sin fronteras claras, muy costoso de evolucionar.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es la 'deuda técnica' (technical debt)?",
    options: [
      "El costo futuro de atajos o malas decisiones de diseño tomadas hoy",
      "Un préstamo para comprar servidores",
      "Un tipo de patrón de diseño",
      "El costo de las licencias",
    ],
    answer: 0,
    explanation:
      "La deuda técnica es el sobrecosto futuro (más esfuerzo, más bugs) que acarrean los atajos o diseños deficientes si no se refactorizan.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué busca el principio de separación de responsabilidades (Separation of Concerns)?",
    options: [
      "Dividir el sistema en partes con responsabilidades bien delimitadas e independientes",
      "Poner toda la lógica en una sola clase",
      "Duplicar la lógica por módulo",
      "Eliminar las interfaces",
    ],
    answer: 0,
    explanation:
      "La separación de responsabilidades reduce el acoplamiento aislando cada preocupación (UI, negocio, datos) en módulos distintos.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Por qué se desaconseja la optimización prematura?",
    options: [
      "Añade complejidad antes de saber si es necesaria, perjudicando legibilidad y mantenibilidad",
      "Porque siempre mejora el rendimiento",
      "Porque es obligatoria en Java",
      "Porque elimina los tests",
    ],
    answer: 0,
    explanation:
      "Optimizar sin evidencia (medición) suele complicar el código sin beneficio real; primero correcto y claro, luego optimizar lo que un profiler señale.",
    subtheme: "Principios Complementarios de Diseño",
    group: GROUP,
    level: "Senior",
  },

  // ---- SOLID ----
  {
    question: "¿Qué es SOLID?",
    options: [
      "Un acrónimo de cinco principios de diseño orientado a objetos para código mantenible",
      "Un patrón de diseño creacional",
      "Un framework de Java",
      "Un tipo de base de datos",
    ],
    answer: 0,
    explanation:
      "SOLID agrupa cinco principios (SRP, OCP, LSP, ISP, DIP) que guían hacia diseños OO flexibles, mantenibles y desacoplados.",
    subtheme: "SOLID",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué establece el principio de responsabilidad única (SRP)?",
    options: [
      "Una clase debe tener una sola razón para cambiar (una única responsabilidad)",
      "Una clase debe implementar muchas interfaces",
      "Las clases no deben tener métodos",
      "Toda clase debe ser final",
    ],
    answer: 0,
    explanation:
      "SRP (Single Responsibility) dice que cada clase/módulo debe encargarse de una sola cosa, teniendo una única razón para cambiar.",
    subtheme: "SOLID",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué establece el principio abierto/cerrado (OCP)?",
    options: [
      "El software debe estar abierto a extensión pero cerrado a modificación",
      "Las clases deben ser siempre modificables",
      "No se permite la herencia",
      "Todo debe ser público",
    ],
    answer: 0,
    explanation:
      "OCP (Open/Closed) busca extender el comportamiento (p. ej. con polimorfismo) sin alterar el código existente ya probado.",
    subtheme: "SOLID",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué establece el principio de sustitución de Liskov (LSP)?",
    options: [
      "Los subtipos deben poder sustituir a su tipo base sin romper el comportamiento esperado",
      "Las subclases no pueden existir",
      "Toda clase debe ser abstracta",
      "Las interfaces no se pueden implementar",
    ],
    answer: 0,
    explanation:
      "LSP (Liskov Substitution) exige que un objeto de una subclase pueda usarse donde se espera la superclase sin alterar la corrección.",
    subtheme: "SOLID",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué establece el principio de segregación de interfaces (ISP)?",
    options: [
      "Es mejor tener interfaces específicas y pequeñas que una interfaz grande y general",
      "Toda clase debe implementar una única interfaz enorme",
      "Las interfaces deben evitarse",
      "Las interfaces deben tener estado",
    ],
    answer: 0,
    explanation:
      "ISP (Interface Segregation) evita obligar a implementar métodos que no se usan; mejor varias interfaces cohesivas y específicas.",
    subtheme: "SOLID",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué establece el principio de inversión de dependencias (DIP)?",
    options: [
      "Depender de abstracciones, no de implementaciones concretas",
      "Depender siempre de clases concretas",
      "Eliminar las interfaces",
      "No usar inyección de dependencias",
    ],
    answer: 0,
    explanation:
      "DIP (Dependency Inversion) indica que los módulos de alto nivel y los de bajo nivel deben depender de abstracciones, no al revés.",
    subtheme: "SOLID",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué problema ayuda a evitar aplicar bien el SRP?",
    options: [
      "Clases enormes y acopladas que cambian por muchos motivos y son difíciles de mantener",
      "Que existan interfaces",
      "Que haya polimorfismo",
      "Que el código compile",
    ],
    answer: 0,
    explanation:
      "Respetar SRP evita clases 'que hacen de todo' (God Objects), reduciendo el impacto de los cambios y facilitando las pruebas.",
    subtheme: "SOLID",
    group: GROUP,
    level: "Senior",
  },

  // ---- Patrones de Diseño ----
  {
    question: "¿Qué es un patrón de diseño?",
    options: [
      "Una solución reutilizable y probada a un problema recurrente de diseño de software",
      "Una librería de Java",
      "Un tipo de base de datos",
      "Un comando de Git",
    ],
    answer: 0,
    explanation:
      "Un patrón de diseño describe una solución general y reutilizable a un problema común, con un vocabulario compartido entre desarrolladores.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué categorías de patrones definió la 'Gang of Four' (GoF)?",
    options: [
      "Creacionales, estructurales y de comportamiento",
      "Simples, medios y complejos",
      "Frontend, backend y base de datos",
      "Públicos, privados y protegidos",
    ],
    answer: 0,
    explanation:
      "El GoF clasificó los patrones en creacionales (creación de objetos), estructurales (composición) y de comportamiento (interacción).",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el patrón Singleton?",
    options: [
      "Garantiza que una clase tenga una única instancia y un punto de acceso global a ella",
      "Crea muchas instancias en paralelo",
      "Divide una clase en varias",
      "Convierte interfaces incompatibles",
    ],
    answer: 0,
    explanation:
      "El Singleton (creacional) asegura una sola instancia de una clase; útil pero puede dificultar el testing si se abusa de él.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué resuelve el patrón Factory Method?",
    options: [
      "Delegar la creación de objetos a subclases, desacoplando al cliente de las clases concretas",
      "Garantizar una única instancia",
      "Notificar cambios a observadores",
      "Adaptar una interfaz a otra",
    ],
    answer: 0,
    explanation:
      "El Factory Method (creacional) define una interfaz para crear objetos, dejando que las subclases decidan qué clase concreta instanciar.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué permite el patrón Strategy?",
    options: [
      "Encapsular algoritmos intercambiables y seleccionarlos en tiempo de ejecución",
      "Crear una única instancia",
      "Componer objetos en árboles",
      "Serializar objetos",
    ],
    answer: 0,
    explanation:
      "El Strategy (comportamiento) define una familia de algoritmos intercambiables, permitiendo variar el comportamiento sin cambiar al cliente.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el patrón Observer?",
    options: [
      "Notificar automáticamente a múltiples objetos cuando el estado de otro cambia",
      "Crear una única instancia",
      "Adaptar interfaces incompatibles",
      "Dividir un objeto grande",
    ],
    answer: 0,
    explanation:
      "El Observer (comportamiento) establece una dependencia uno-a-muchos: al cambiar el sujeto, sus observadores son notificados, base de lo event-driven.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el patrón Decorator?",
    options: [
      "Añadir responsabilidades a un objeto dinámicamente envolviéndolo, sin modificar su clase",
      "Garantizar una sola instancia",
      "Crear familias de objetos",
      "Notificar observadores",
    ],
    answer: 0,
    explanation:
      "El Decorator (estructural) envuelve un objeto para agregarle comportamiento en runtime, una alternativa flexible a la herencia.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué permite el patrón Adapter?",
    options: [
      "Hacer que dos interfaces incompatibles trabajen juntas mediante un envoltorio traductor",
      "Crear una única instancia",
      "Encapsular algoritmos",
      "Notificar cambios de estado",
    ],
    answer: 0,
    explanation:
      "El Adapter (estructural) traduce la interfaz de una clase a otra que el cliente espera, permitiendo integrar componentes incompatibles.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué resuelve el patrón Builder?",
    options: [
      "Construir objetos complejos paso a paso, separando la construcción de la representación",
      "Garantizar una única instancia",
      "Adaptar interfaces",
      "Notificar observadores",
    ],
    answer: 0,
    explanation:
      "El Builder (creacional) arma objetos complejos por pasos, útil cuando hay muchos parámetros o configuraciones opcionales.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué encapsula el patrón Repository?",
    options: [
      "El acceso a datos, ofreciendo una abstracción tipo colección sobre la persistencia",
      "La creación de hilos",
      "La notificación de eventos",
      "La configuración del pipeline",
    ],
    answer: 0,
    explanation:
      "El Repository abstrae el almacenamiento tras una interfaz orientada al dominio, desacoplando la lógica de negocio de los detalles de persistencia.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué ofrece el patrón Facade?",
    options: [
      "Una interfaz simplificada y única sobre un subsistema complejo",
      "Múltiples instancias de una clase",
      "Un algoritmo intercambiable",
      "Una traducción de interfaces",
    ],
    answer: 0,
    explanation:
      "El Facade (estructural) expone una interfaz sencilla que oculta la complejidad de un subsistema, reduciendo el acoplamiento del cliente.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué es la Inyección de Dependencias (Dependency Injection) como patrón?",
    options: [
      "Proveer las dependencias de un objeto desde afuera en lugar de que él las cree",
      "Crear una única instancia global",
      "Duplicar la lógica de creación",
      "Eliminar las interfaces",
    ],
    answer: 0,
    explanation:
      "La DI entrega las colaboraciones ya construidas (por un contenedor o manualmente), favoreciendo el desacoplamiento y la testeabilidad (base de Spring).",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué resuelve el patrón Template Method?",
    options: [
      "Definir el esqueleto de un algoritmo dejando pasos concretos a las subclases",
      "Crear una única instancia",
      "Adaptar interfaces",
      "Notificar observadores",
    ],
    answer: 0,
    explanation:
      "El Template Method (comportamiento) fija la estructura de un algoritmo en la clase base y delega ciertos pasos a las subclases.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué es el patrón MVC (Modelo-Vista-Controlador)?",
    options: [
      "Un patrón que separa datos (modelo), presentación (vista) y lógica de control (controlador)",
      "Un patrón creacional de objetos",
      "Un algoritmo de ordenamiento",
      "Un tipo de base de datos",
    ],
    answer: 0,
    explanation:
      "MVC separa responsabilidades: el modelo gestiona datos, la vista los presenta y el controlador coordina la interacción, mejorando la mantenibilidad.",
    subtheme: "Patrones de Diseño",
    group: GROUP,
    level: "Junior",
  },

  // ---- GRASP ----
  {
    question: "¿Qué es GRASP en diseño orientado a objetos?",
    options: [
      "Un conjunto de principios para asignar responsabilidades a clases y objetos",
      "Un framework de pruebas",
      "Un patrón creacional",
      "Un comando de Maven",
    ],
    answer: 0,
    explanation:
      "GRASP (General Responsibility Assignment Software Patterns) guía cómo repartir responsabilidades entre clases para lograr buen diseño OO.",
    subtheme: "GRASP",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué busca el principio de 'bajo acoplamiento' (Low Coupling)?",
    options: [
      "Minimizar las dependencias entre clases/módulos para que los cambios tengan poco impacto",
      "Maximizar las dependencias",
      "Unir toda la lógica en una clase",
      "Eliminar las interfaces",
    ],
    answer: 0,
    explanation:
      "El bajo acoplamiento reduce la interdependencia entre componentes, facilitando el cambio, la reutilización y las pruebas.",
    subtheme: "GRASP",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué busca el principio de 'alta cohesión' (High Cohesion)?",
    options: [
      "Que cada clase tenga responsabilidades relacionadas y enfocadas en un propósito claro",
      "Que una clase haga de todo",
      "Que no haya métodos",
      "Que todo sea estático",
    ],
    answer: 0,
    explanation:
      "La alta cohesión agrupa en una clase responsabilidades afines y bien enfocadas, lo que mejora la claridad y el mantenimiento.",
    subtheme: "GRASP",
    group: GROUP,
    level: "Junior",
  },
  {
    question: "¿Qué propone el patrón GRASP 'Experto en Información' (Information Expert)?",
    options: [
      "Asignar una responsabilidad a la clase que tiene la información necesaria para cumplirla",
      "Asignar todo al controlador",
      "Crear una clase única para todo",
      "Delegar siempre a una interfaz",
    ],
    answer: 0,
    explanation:
      "Information Expert asigna la responsabilidad a quien posee los datos requeridos, favoreciendo encapsulamiento y bajo acoplamiento.",
    subtheme: "GRASP",
    group: GROUP,
    level: "Senior",
  },
  {
    question: "¿Qué rol cumple el patrón GRASP 'Controller'?",
    options: [
      "Coordinar y delegar las operaciones del sistema recibidas desde la capa de presentación",
      "Almacenar los datos persistentes",
      "Renderizar la interfaz",
      "Crear una única instancia",
    ],
    answer: 0,
    explanation:
      "El Controller recibe los eventos del sistema y los delega a los objetos de dominio, separando la presentación de la lógica de negocio.",
    subtheme: "GRASP",
    group: GROUP,
    level: "Senior",
  },
];
