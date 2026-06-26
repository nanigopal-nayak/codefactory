const springBootQuestions = [
    {
        question: "What is Spring Boot?",
        answer: "Spring Boot is a Java framework built on top of Spring Framework that simplifies the development of standalone, production-ready applications."
    },

    {
        question: "What are the advantages of Spring Boot?",
        answer: [
            "Easy to develop Spring applications",
            "Embedded servers (Tomcat, Jetty, Undertow)",
            "Auto Configuration",
            "Minimal configuration",
            "Production-ready features",
            "Microservices support"
        ]
    },

    {
        question: "What is Spring Initializr?",
        answer: "Spring Initializr is a web-based tool used to generate a Spring Boot project with required dependencies."
    },

    {
        question: "What is Auto Configuration?",
        answer: "Auto Configuration automatically configures Spring Boot application based on the dependencies available in the project."
    },

    {
        question: "What is the @SpringBootApplication annotation?",
        answer: "It is a combination of @Configuration, @EnableAutoConfiguration, and @ComponentScan annotations."
    },

    {
        question: "What is Dependency Injection?",
        answer: "Dependency Injection is a design pattern where Spring automatically provides the required objects instead of creating them manually."
    },

    {
        question: "What is an Embedded Server?",
        answer: "An embedded server is a web server like Tomcat that comes bundled with Spring Boot, eliminating the need to deploy WAR files."
    },

    {
        question: "What is the default embedded server in Spring Boot?",
        answer: "Apache Tomcat is the default embedded server in Spring Boot."
    },

    {
        question: "What is Starter Dependency?",
        answer: "Starter dependencies are pre-configured dependency packages that simplify dependency management."
    },

    {
        question: "Name some commonly used Spring Boot Starters.",
        answer: [
            "spring-boot-starter-web",
            "spring-boot-starter-data-jpa",
            "spring-boot-starter-security",
            "spring-boot-starter-test",
            "spring-boot-starter-thymeleaf"
        ]
    },

    {
        question: "What is application.properties?",
        answer: "application.properties is used to configure Spring Boot application settings such as server port, database connection, and logging."
    },

    {
        question: "What is application.yml?",
        answer: "application.yml is an alternative configuration file that uses YAML format instead of properties."
    },

    {
        question: "What is @RestController?",
        answer: "@RestController is used to create RESTful web services. It combines @Controller and @ResponseBody."
    },

    {
        question: "What is @Controller?",
        answer: "@Controller is used to create Spring MVC controllers that return web pages."
    },

    {
        question: "What is @RequestMapping?",
        answer: "@RequestMapping maps HTTP requests to controller methods."
    },

    {
        question: "What is @GetMapping?",
        answer: "@GetMapping handles HTTP GET requests."
    },

    {
        question: "What is @PostMapping?",
        answer: "@PostMapping handles HTTP POST requests."
    },

    {
        question: "What is @PutMapping?",
        answer: "@PutMapping handles HTTP PUT requests used for updating data."
    },

    {
        question: "What is @DeleteMapping?",
        answer: "@DeleteMapping handles HTTP DELETE requests."
    },

    {
        question: "What is @RequestBody?",
        answer: "@RequestBody converts incoming JSON request into a Java object."
    },

    {
        question: "What is @PathVariable?",
        answer: "@PathVariable is used to extract values from the URL path."
    },

    {
        question: "What is @RequestParam?",
        answer: "@RequestParam is used to retrieve query parameters from the request URL."
    },

    {
        question: "What is Spring Data JPA?",
        answer: "Spring Data JPA simplifies database operations by reducing boilerplate code using repositories."
    },

    {
        question: "What is JpaRepository?",
        answer: "JpaRepository is an interface that provides CRUD operations and pagination support."
    },

    {
        question: "What is @Entity?",
        answer: "@Entity marks a Java class as a database table."
    },

    {
        question: "What is @Id?",
        answer: "@Id specifies the primary key of an entity."
    },

    {
        question: "What is @GeneratedValue?",
        answer: "@GeneratedValue automatically generates values for the primary key."
    },

    {
        question: "What is @Autowired?",
        answer: "@Autowired automatically injects required Spring beans."
    },

    {
        question: "What is Bean in Spring Boot?",
        answer: "A Bean is an object that is created, managed, and initialized by the Spring IoC Container."
    },

    {
        question: "What is Spring Boot Actuator?",
        answer: "Spring Boot Actuator provides production-ready features like health checks, metrics, monitoring, and application information."
    }
];

export default springBootQuestions;