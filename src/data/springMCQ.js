const springBootMCQ = [
  {
    question: "What is Spring Boot?",
    options: [
      "A Java framework for rapid application development",
      "A Database",
      "An Operating System",
      "A Programming Language"
    ],
    answer: "A Java framework for rapid application development",
  },
  {
    question: "Which annotation is used to start a Spring Boot application?",
    options: [
      "@SpringBootApplication",
      "@EnableSpring",
      "@Application",
      "@BootApplication"
    ],
    answer: "@SpringBootApplication",
  },
  {
    question: "Which embedded server is the default in Spring Boot?",
    options: [
      "Tomcat",
      "Jetty",
      "GlassFish",
      "WildFly"
    ],
    answer: "Tomcat",
  },
  {
    question: "Which file is commonly used for Spring Boot configuration?",
    options: [
      "application.properties",
      "config.xml",
      "web.xml",
      "pom.properties"
    ],
    answer: "application.properties",
  },
  {
    question: "Which build tool is commonly used with Spring Boot?",
    options: [
      "Maven",
      "Gradle",
      "Both Maven and Gradle",
      "Ant Only"
    ],
    answer: "Both Maven and Gradle",
  },
  {
    question: "Which annotation is used to create REST APIs?",
    options: [
      "@RestController",
      "@Controller",
      "@Service",
      "@Repository"
    ],
    answer: "@RestController",
  },
  {
    question: "Which annotation maps HTTP GET requests?",
    options: [
      "@GetMapping",
      "@PostMapping",
      "@PutMapping",
      "@DeleteMapping"
    ],
    answer: "@GetMapping",
  },
  {
    question: "Which annotation maps HTTP POST requests?",
    options: [
      "@PostMapping",
      "@GetMapping",
      "@PatchMapping",
      "@DeleteMapping"
    ],
    answer: "@PostMapping",
  },
  {
    question: "Which annotation is used for Dependency Injection?",
    options: [
      "@Autowired",
      "@Bean",
      "@InjectBean",
      "@Service"
    ],
    answer: "@Autowired",
  },
  {
    question: "Which annotation marks a class as a service component?",
    options: [
      "@Service",
      "@Repository",
      "@Controller",
      "@ComponentScan"
    ],
    answer: "@Service",
  },
  {
    question: "Which annotation marks a DAO class?",
    options: [
      "@Repository",
      "@Service",
      "@Entity",
      "@ComponentScan"
    ],
    answer: "@Repository",
  },
  {
    question: "Which annotation defines a database entity?",
    options: [
      "@Entity",
      "@Table",
      "@Model",
      "@Database"
    ],
    answer: "@Entity",
  },
  {
    question: "Which annotation defines the primary key?",
    options: [
      "@Id",
      "@Primary",
      "@Column",
      "@Key"
    ],
    answer: "@Id",
  },
  {
    question: "Which annotation generates primary key values automatically?",
    options: [
      "@GeneratedValue",
      "@AutoId",
      "@PrimaryKey",
      "@Increment"
    ],
    answer: "@GeneratedValue",
  },
  {
    question: "Which interface provides CRUD operations?",
    options: [
      "JpaRepository",
      "CrudManager",
      "JdbcManager",
      "RepositoryManager"
    ],
    answer: "JpaRepository",
  },
  {
    question: "Which dependency is required for Spring Boot web applications?",
    options: [
      "spring-boot-starter-web",
      "spring-web-core",
      "spring-web-api",
      "spring-boot-web"
    ],
    answer: "spring-boot-starter-web",
  },
  {
    question: "Which starter is used for JPA?",
    options: [
      "spring-boot-starter-data-jpa",
      "spring-data-core",
      "spring-jpa",
      "hibernate-core"
    ],
    answer: "spring-boot-starter-data-jpa",
  },
  {
    question: "What does IoC stand for?",
    options: [
      "Inversion of Control",
      "Input of Controller",
      "Internal Object Control",
      "Internet of Components"
    ],
    answer: "Inversion of Control",
  },
  {
    question: "Which annotation is used to define a Bean?",
    options: [
      "@Bean",
      "@Autowired",
      "@Service",
      "@Entity"
    ],
    answer: "@Bean",
  },
  {
    question: "Which annotation reads values from application.properties?",
    options: [
      "@Value",
      "@Property",
      "@Read",
      "@Config"
    ],
    answer: "@Value",
  },
  {
    question: "Which annotation handles URL path variables?",
    options: [
      "@PathVariable",
      "@RequestBody",
      "@RequestParam",
      "@Variable"
    ],
    answer: "@PathVariable",
  },
  {
    question: "Which annotation reads query parameters?",
    options: [
      "@RequestParam",
      "@RequestBody",
      "@PathVariable",
      "@Param"
    ],
    answer: "@RequestParam",
  },
  {
    question: "Which annotation converts JSON into Java objects?",
    options: [
      "@RequestBody",
      "@ResponseBody",
      "@Body",
      "@Json"
    ],
    answer: "@RequestBody",
  },
  {
    question: "Which annotation converts Java objects into JSON responses?",
    options: [
      "@ResponseBody",
      "@RequestBody",
      "@JsonResponse",
      "@Body"
    ],
    answer: "@ResponseBody",
  },
  {
    question: "Which annotation maps HTTP PUT requests?",
    options: [
      "@PutMapping",
      "@GetMapping",
      "@DeleteMapping",
      "@PostMapping"
    ],
    answer: "@PutMapping",
  },
  {
    question: "Which annotation maps HTTP DELETE requests?",
    options: [
      "@DeleteMapping",
      "@PutMapping",
      "@PostMapping",
      "@RemoveMapping"
    ],
    answer: "@DeleteMapping",
  },
  {
    question: "Spring Boot follows which architecture?",
    options: [
      "Layered Architecture",
      "Client Only",
      "Peer-to-Peer",
      "Monolithic Only"
    ],
    answer: "Layered Architecture",
  },
  {
    question: "Which dependency is used for testing?",
    options: [
      "spring-boot-starter-test",
      "spring-test-core",
      "test-starter",
      "boot-test"
    ],
    answer: "spring-boot-starter-test",
  },
  {
    question: "Which annotation is used for exception handling?",
    options: [
      "@ExceptionHandler",
      "@ErrorHandler",
      "@HandleException",
      "@Catch"
    ],
    answer: "@ExceptionHandler",
  },
  {
    question: "Which annotation validates request objects?",
    options: [
      "@Valid",
      "@Validate",
      "@Check",
      "@Verify"
    ],
    answer: "@Valid",
  },
  {
    question: "Which annotation enables scheduling?",
    options: [
      "@EnableScheduling",
      "@Schedule",
      "@Scheduling",
      "@EnableJobs"
    ],
    answer: "@EnableScheduling",
  },
  {
    question: "Which annotation schedules a task?",
    options: [
      "@Scheduled",
      "@ScheduleTask",
      "@Timer",
      "@CronJob"
    ],
    answer: "@Scheduled",
  },
  {
    question: "Which annotation enables asynchronous methods?",
    options: [
      "@EnableAsync",
      "@AsyncEnable",
      "@EnableThread",
      "@Threading"
    ],
    answer: "@EnableAsync",
  },
  {
    question: "Which annotation makes a method asynchronous?",
    options: [
      "@Async",
      "@Thread",
      "@Parallel",
      "@Future"
    ],
    answer: "@Async",
  },
  {
    question: "Which annotation is used for transactions?",
    options: [
      "@Transactional",
      "@Commit",
      "@Rollback",
      "@Persistence"
    ],
    answer: "@Transactional",
  },
  {
    question: "Which annotation enables caching?",
    options: [
      "@EnableCaching",
      "@Cache",
      "@Caching",
      "@EnableMemory"
    ],
    answer: "@EnableCaching",
  },
  {
    question: "Which annotation stores method results in cache?",
    options: [
      "@Cacheable",
      "@Cache",
      "@StoreCache",
      "@EnableCache"
    ],
    answer: "@Cacheable",
  },
  {
    question: "Which tool is used to generate Spring Boot projects?",
    options: [
      "Spring Initializr",
      "Spring Studio",
      "Maven Builder",
      "Java Creator"
    ],
    answer: "Spring Initializr",
  },
  {
    question: "Which configuration file uses YAML format?",
    options: [
      "application.yml",
      "application.xml",
      "config.yml",
      "boot.yml"
    ],
    answer: "application.yml",
  },
  {
    question: "Which annotation scans components automatically?",
    options: [
      "@ComponentScan",
      "@Scan",
      "@EnableScan",
      "@PackageScan"
    ],
    answer: "@ComponentScan",
  },
  {
    question: "Which annotation marks a generic Spring component?",
    options: [
      "@Component",
      "@Bean",
      "@Service",
      "@Generic"
    ],
    answer: "@Component",
  },
  {
    question: "Which dependency provides Spring Security?",
    options: [
      "spring-boot-starter-security",
      "spring-security-core",
      "boot-security",
      "security-api"
    ],
    answer: "spring-boot-starter-security",
  },
  {
    question: "Which actuator endpoint checks application health?",
    options: [
      "/actuator/health",
      "/health",
      "/status",
      "/check"
    ],
    answer: "/actuator/health",
  },
  {
    question: "Spring Boot is built on top of which framework?",
    options: [
      "Spring Framework",
      "Hibernate",
      "Struts",
      "JSF"
    ],
    answer: "Spring Framework",
  },
  {
    question: "Which annotation is used to inject configuration properties into a class?",
    options: [
      "@ConfigurationProperties",
      "@Value",
      "@PropertySource",
      "@Config"
    ],
    answer: "@ConfigurationProperties",
  },
  {
    question: "Which database is commonly used for testing Spring Boot applications?",
    options: [
      "H2 Database",
      "MongoDB",
      "Oracle",
      "SQL Server"
    ],
    answer: "H2 Database",
  },
  {
    question: "Which annotation loads property files?",
    options: [
      "@PropertySource",
      "@Properties",
      "@ConfigSource",
      "@Source"
    ],
    answer: "@PropertySource",
  },
  {
    question: "Which HTTP method is generally used to update a resource?",
    options: [
      "PUT",
      "GET",
      "POST",
      "DELETE"
    ],
    answer: "PUT",
  },
  {
    question: "Which HTTP method is generally used to delete a resource?",
    options: [
      "DELETE",
      "PUT",
      "GET",
      "POST"
    ],
    answer: "DELETE",
  },
  {
    question: "Which Spring Boot feature reduces configuration by automatically configuring beans?",
    options: [
      "Auto Configuration",
      "Manual Configuration",
      "Bean Factory",
      "Component Scan"
    ],
    answer: "Auto Configuration",
  }
];

export default springBootMCQ;