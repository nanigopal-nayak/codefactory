const examQuestions = [
  {
    id: 1,
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "extends", "inherit", "super"],
    answer: "extends",
  },
  {
    id: 2,
    question: "Which SQL clause is used to filter rows?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    answer: "WHERE",
  },
  {
    id: 3,
    question: "Which hook is used for state in React?",
    options: ["useRef", "useState", "useMemo", "useEffect"],
    answer: "useState",
  },

  // ================= JAVA =================
  {
    id: 4,
    question: "Which feature is NOT part of OOP?",
    options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"],
    answer: "Compilation",
  },
  {
    id: 5,
    question: "Which method is the entry point of Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: "main()",
  },
  {
    id: 6,
    question: "Which keyword is used to create object in Java?",
    options: ["new", "create", "object", "class"],
    answer: "new",
  },
  {
    id: 7,
    question: "Which concept hides implementation details?",
    options: ["Abstraction", "Polymorphism", "Inheritance", "Compilation"],
    answer: "Abstraction",
  },
  {
    id: 8,
    question: "Which keyword is used for constant in Java?",
    options: ["final", "const", "static", "immutable"],
    answer: "final",
  },
  {
    id: 9,
    question: "Which is NOT a primitive type in Java?",
    options: ["int", "boolean", "String", "char"],
    answer: "String",
  },
  {
    id: 10,
    question: "Which interface has compare() method in Java 8?",
    options: ["Comparator", "Comparable", "Runnable", "Iterable"],
    answer: "Comparator",
  },

  // ================= JAVA 8 =================
  {
    id: 11,
    question: "Which feature was introduced in Java 8?",
    options: ["Streams", "Pointers", "Multiple inheritance", "Macros"],
    answer: "Streams",
  },
  {
    id: 12,
    question: "Which is used for functional programming in Java 8?",
    options: ["Lambda expression", "Class", "Thread", "Package"],
    answer: "Lambda expression",
  },
  {
    id: 13,
    question: "Which keyword is used for default method in interface?",
    options: ["default", "static", "final", "abstract"],
    answer: "default",
  },

  // ================= JAVASCRIPT =================
  {
    id: 14,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Oracle", "Google"],
    answer: "Netscape",
  },
  {
    id: 15,
    question: "Which symbol is used for comments in JS?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//",
  },
  {
    id: 16,
    question: "Which keyword declares variable in ES6?",
    options: ["var", "let", "int", "define"],
    answer: "let",
  },
  {
    id: 17,
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
    answer: "JSON.parse()",
  },

  // ================= REACT =================
  {
    id: 18,
    question: "React is a ____ library.",
    options: ["Database", "UI", "Backend", "OS"],
    answer: "UI",
  },
  {
    id: 19,
    question: "Which method is used to pass data in React?",
    options: ["Props", "State", "Hooks", "DOM"],
    answer: "Props",
  },
  {
    id: 20,
    question: "Which hook runs after render?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useEffect",
  },

  // ================= SPRING BOOT =================
  {
    id: 21,
    question: "Spring Boot is based on which framework?",
    options: ["Angular", "Spring", "Hibernate", "Django"],
    answer: "Spring",
  },
  {
    id: 22,
    question: "Which annotation is used for REST controller?",
    options: ["@Controller", "@RestController", "@Service", "@Bean"],
    answer: "@RestController",
  },
  {
    id: 23,
    question: "Default server in Spring Boot is?",
    options: ["Tomcat", "Jetty", "WebLogic", "GlassFish"],
    answer: "Tomcat",
  },

  // ================= DATABASE =================
  {
    id: 24,
    question: "Which SQL command is used to retrieve data?",
    options: ["GET", "SELECT", "FETCH", "EXTRACT"],
    answer: "SELECT",
  },
  {
    id: 25,
    question: "Which key uniquely identifies a record?",
    options: ["Primary Key", "Foreign Key", "Index", "Unique Key"],
    answer: "Primary Key",
  },
  {
    id: 26,
    question: "Which SQL function counts rows?",
    options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
    answer: "COUNT()",
  },

  // ================= MORE QUESTIONS =================
  {
    id: 27,
    question: "Which keyword handles exception in Java?",
    options: ["catch", "throw", "error", "final"],
    answer: "catch",
  },
  {
    id: 28,
    question: "Which lifecycle method runs first in React?",
    options: ["useEffect", "render", "constructor", "componentDidMount"],
    answer: "constructor",
  },
  {
    id: 29,
    question: "Which operator is used for strict equality in JS?",
    options: ["==", "===", "!=", "="],
    answer: "===",
  },
  {
    id: 30,
    question: "Which collection allows duplicates in Java?",
    options: ["Set", "List", "Map", "Tree"],
    answer: "List",
  },
  // ================= CONTINUATION (31–50) =================

  {
    id: 31,
    question: "Which keyword is used to prevent method overriding in Java?",
    options: ["static", "final", "private", "const"],
    answer: "final",
  },
  {
    id: 32,
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "init()", "execute()"],
    answer: "start()",
  },
  {
    id: 33,
    question: "Which React hook is used for performance optimization?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useMemo",
  },
  {
    id: 34,
    question: "Which SQL clause groups rows?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    answer: "GROUP BY",
  },
  {
    id: 35,
    question: "Which HTTP method is used to update data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT",
  },
  {
    id: 36,
    question: "Which symbol is used for arrow functions in JavaScript?",
    options: ["=>", "->", "::", "=>:"],
    answer: "=>",
  },
  {
    id: 37,
    question: "Which Spring Boot annotation is used to inject dependency?",
    options: ["@Autowired", "@Inject", "@Component", "@Service"],
    answer: "@Autowired",
  },
  {
    id: 38,
    question: "Which keyword is used to create a thread in Java?",
    options: ["Thread", "Runnable", "start", "process"],
    answer: "Thread",
  },
  {
    id: 39,
    question: "Which Java 8 feature helps filter collections?",
    options: ["Streams", "Threads", "IO", "Collections API"],
    answer: "Streams",
  },
  {
    id: 40,
    question: "Which database is relational?",
    options: ["MongoDB", "MySQL", "Redis", "Firebase"],
    answer: "MySQL",
  },

  {
    id: 41,
    question: "Which React feature allows reusable logic?",
    options: ["Hooks", "Props", "State", "Redux"],
    answer: "Hooks",
  },
  {
    id: 42,
    question: "Which SQL keyword removes duplicates?",
    options: ["DISTINCT", "REMOVE", "UNIQUE", "DELETE"],
    answer: "DISTINCT",
  },
  {
    id: 43,
    question: "Which Java keyword is used for inheritance?",
    options: ["this", "extends", "implements", "inherit"],
    answer: "extends",
  },
  {
    id: 44,
    question: "Which lifecycle method is used in React functional components?",
    options: ["useEffect", "componentDidMount", "render", "init"],
    answer: "useEffect",
  },
  {
    id: 45,
    question: "Which HTTP status code means success?",
    options: ["200", "404", "500", "301"],
    answer: "200",
  },
  {
    id: 46,
    question: "Which Java keyword is used for interface implementation?",
    options: ["extends", "implements", "inherits", "uses"],
    answer: "implements",
  },
  {
    id: 47,
    question: "Which method converts object to JSON in JavaScript?",
    options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convert()"],
    answer: "JSON.stringify()",
  },
  {
    id: 48,
    question: "Which Spring Boot file is used for configuration?",
    options: ["application.properties", "config.xml", "settings.json", "boot.yml"],
    answer: "application.properties",
  },
  {
    id: 49,
    question: "Which Java concept allows multiple methods with same name?",
    options: ["Overloading", "Overriding", "Inheritance", "Encapsulation"],
    answer: "Overloading",
  },
  {
    id: 50,
    question: "Which React function is used to render component list?",
    options: ["map()", "filter()", "forEach()", "reduce()"],
    answer: "map()",
  }
];

export default examQuestions;