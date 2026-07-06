const javaQuestions = [
    {
        id: 1,
        question: "What are the key features of Java?",
        answer: [
            "Platform Independence – Write Once, Run Anywhere (WORA).",
            "Object-Oriented – Supports classes, objects, inheritance, encapsulation, polymorphism, and abstraction.",
            "Robust and Secure – Strong memory management and exception handling.",
            "Automatic Memory Management – Garbage collector manages memory automatically.",
            "Scalable and Versatile – Used in web, enterprise, and Android applications."
        ]
    },

    {
        id: 2,
        question: "What is the difference between JDK, JRE, JVM, and JIT?",
        answer: [
            "JDK (Java Development Kit) – Complete software development kit containing compiler, debugger, and libraries.",
            "JRE (Java Runtime Environment) – Provides the runtime environment to execute Java applications.",
            "JVM (Java Virtual Machine) – Abstract machine that executes Java bytecode.",
            "JIT (Just-In-Time Compiler) – Converts bytecode into machine code during runtime for better performance."
        ]
    },

    {
        id: 3,
        question: "What are the data types in Java?",
        answer: [
            "Primitive Data Types: byte, short, int, long, float, double, char, boolean.",
            "Non-Primitive Data Types: String, Array, Classes, Enums."
        ]
    },

    {
        id: 4,
        question: "Why is the main method in Java public?",
        answer: [
            "JVM calls the main() method to start execution.",
            "The method must be public so JVM can access it.",
            "Without public, the code compiles but JVM cannot execute main()."
        ]
    },

    {
        id: 5,
        question: "Why is the main method declared as static?",
        answer: [
            "JVM can call main() without creating an object.",
            "Static methods belong to the class.",
            "JVM directly invokes main() using the class name."
        ]
    },

    {
        id: 6,
        question: "What is a method in Java?",
        answer: [
            "A method is a block of code that performs a specific task.",
            "Methods can accept parameters.",
            "Methods must be declared inside a class."
        ]
    },

    {
        id: 7,
        question: "What is a class in Java?",
        answer: [
            "A class is a blueprint for creating objects.",
            "It defines properties and behaviors of objects."
        ]
    },

    {
        id: 8,
        question: "What is Autoboxing and Unboxing?",
        answer: [
            "Autoboxing converts primitive types into wrapper objects.",
            "Example: int → Integer.",
            "Unboxing converts wrapper objects into primitive types.",
            "Example: Integer → int."
        ]
    },

    {
        id: 9,
        question: "What is a block in Java?",
        answer: [
            "A block is a set of statements enclosed in { }.",
            "Types: Static Block and Non-Static Block.",
            "Static blocks execute before main().",
            "Non-static blocks execute when an object is created."
        ]
    },

    {
        id: 10,
        question: "What is the use of the 'this' keyword in Java?",
        answer: [
            "Refers to the current object.",
            "Differentiates instance variables from local variables.",
            "Used for constructor chaining.",
            "Can be passed as an argument."
        ]
    },

    {
        id: 11,
        question: "What is a constructor in Java?",
        answer: [
            "A constructor has the same name as the class.",
            "It is automatically called when an object is created.",
            "Constructors have no return type.",
            "Types: Default Constructor and Parameterized Constructor."
        ]
    },

    {
        id: 12,
        question: "What is Inheritance in Java?",
        answer: [
            "Inheritance allows one class to acquire properties and methods of another class.",
            "Promotes code reusability.",
            "Types: Single, Multilevel, and Hierarchical Inheritance."
        ]
    },

    {
        id: 13,
        question: "What is the super keyword in Java?",
        answer: [
            "Refers to the immediate parent class.",
            "Used to access parent class methods and variables.",
            "Used to call parent class constructors."
        ]
    },

    {
        id: 14,
        question: "What is the difference between Method Overloading and Method Overriding?",
        answer: [
            "Overloading: Same method name with different parameters in the same class.",
            "Overriding: Subclass provides a new implementation of a superclass method.",
            "Overloading is compile-time polymorphism.",
            "Overriding is runtime polymorphism."
        ]
    },

    {
        id: 15,
        question: "What is a Package in Java?",
        answer: [
            "A package is a namespace used to organize classes and interfaces.",
            "Helps avoid naming conflicts.",
            "Improves modularity and reusability."
        ]
    },
    {
        id: 16,
        question: "What is the use of the final keyword in Java?",
        answer: [
            "The final keyword is used to impose restrictions on variables, methods, and classes.",
            "A final variable becomes a constant and cannot be reassigned.",
            "A final method cannot be overridden by subclasses.",
            "A final class cannot be extended."
        ]
    },

    {
        id: 17,
        question: "What is the Diamond Problem in Java?",
        answer: [
            "The Diamond Problem occurs in multiple inheritance when a class inherits methods with the same signature from multiple parents.",
            "It creates ambiguity about which method should be inherited.",
            "Java avoids this problem by not supporting multiple inheritance through classes."
        ]
    },

    {
        id: 18,
        question: "What are Access Modifiers in Java?",
        answer: [
            "Access modifiers define the visibility of classes, methods, and variables.",
            "public: Accessible from anywhere.",
            "private: Accessible only within the same class.",
            "protected: Accessible within the package and subclasses.",
            "default: Accessible only within the same package."
        ]
    },

    {
        id: 19,
        question: "What is Has-A Relationship in Java?",
        answer: [
            "Has-A Relationship represents association between two classes.",
            "It is achieved by placing one class reference variable inside another class.",
            "Types: Aggregation (weak relationship) and Composition (strong relationship)."
        ]
    },

    {
        id: 20,
        question: "What is Non-Primitive Type Casting?",
        answer: [
            "Converting one non-primitive type into another is called non-primitive type casting.",
            "Types: Upcasting and Downcasting.",
            "Upcasting converts a child reference to a parent reference.",
            "Downcasting converts a parent reference back to a child reference."
        ]
    },

    {
        id: 21,
        question: "What is Binding in Java?",
        answer: [
            "Binding is the process of connecting a method call to its implementation.",
            "Early Binding happens at compile time.",
            "Late Binding happens at runtime.",
            "Method Overloading uses Early Binding.",
            "Method Overriding uses Late Binding."
        ]
    },

    {
        id: 22,
        question: "What is Object Class in Java?",
        answer: [
            "Object class is the root class of all Java classes.",
            "Every class directly or indirectly inherits from Object.",
            "Important methods include toString(), equals(), hashCode(), clone(), wait(), notify(), and getClass()."
        ]
    },

    {
        id: 23,
        question: "What is Abstraction?",
        answer: [
            "Abstraction hides implementation details and exposes only necessary functionality.",
            "It is also known as implementation hiding.",
            "Can be achieved using Abstract Classes and Interfaces.",
            "Improves security and reduces complexity."
        ]
    },

    {
        id: 24,
        question: "What is an Interface in Java?",
        answer: [
            "An Interface acts as a contract between classes.",
            "Interfaces contain abstract methods and constants.",
            "A class implements an interface using the implements keyword.",
            "Types: Regular Interface, Functional Interface, Marker Interface."
        ]
    },

    {
        id: 25,
        question: "What is Coupling in Java?",
        answer: [
            "Coupling refers to the degree of dependency between classes.",
            "Tight Coupling means classes are highly dependent.",
            "Loose Coupling means classes are less dependent and easier to maintain."
        ]
    },

    {
        id: 26,
        question: "What is Encapsulation in Java?",
        answer: [
            "Encapsulation is the process of hiding data and exposing it through methods.",
            "It provides data security.",
            "A class with private data members and public getter/setter methods is called an encapsulated class."
        ]
    },

    {
        id: 27,
        question: "What is Exception Handling?",
        answer: [
            "Exception Handling is a mechanism to handle runtime errors.",
            "It prevents abnormal program termination.",
            "Keywords used: try, catch, throw, throws, finally."
        ]
    },

    {
        id: 28,
        question: "What is try-catch in Java?",
        answer: [
            "try block contains code that may throw an exception.",
            "catch block handles the exception.",
            "Multiple catch blocks can be used for different exception types.",
            "Generic catch block should always be the last catch block."
        ]
    },

    {
        id: 29,
        question: "What is finally block in Java?",
        answer: [
            "finally block executes whether an exception occurs or not.",
            "It is generally used to close resources.",
            "finally executes before the return statement."
        ]
    },

    {
        id: 30,
        question: "Difference between throw and throws?",
        answer: [
            "throw is used to explicitly throw an exception object.",
            "throws is used in method declarations to indicate possible exceptions.",
            "throw works inside method body.",
            "throws works in method signature."
        ]
    },
    {
        id: 31,
        question: "What is Polymorphism in Java?",
        answer: [
            "Polymorphism means one entity can have many forms.",
            "It allows an object to exhibit different behaviors.",
            "Types: Compile-Time Polymorphism and Runtime Polymorphism.",
            "Compile-Time Polymorphism is achieved through Method Overloading.",
            "Runtime Polymorphism is achieved through Method Overriding."
        ]
    },

    {
        id: 32,
        question: "What is Cloning in Java?",
        answer: [
            "Cloning is the process of creating an exact copy of an object.",
            "Java provides clone() method from Object class.",
            "The class must implement Cloneable interface.",
            "Types: Shallow Cloning and Deep Cloning."
        ]
    },

    {
        id: 33,
        question: "What is Shallow Cloning?",
        answer: [
            "Shallow cloning copies primitive fields and references.",
            "Referenced objects are not cloned.",
            "Original and cloned objects share the same referenced objects.",
            "Changes in referenced objects affect both copies."
        ]
    },

    {
        id: 34,
        question: "What is Deep Cloning?",
        answer: [
            "Deep cloning creates copies of referenced objects as well.",
            "Original and cloned objects become independent.",
            "Changes in cloned objects do not affect original objects."
        ]
    },

    {
        id: 35,
        question: "What is Multithreading?",
        answer: [
            "Multithreading is used to achieve multitasking.",
            "It allows multiple threads to execute simultaneously.",
            "Types: Process-Based Multitasking and Thread-Based Multitasking.",
            "Improves application performance and responsiveness."
        ]
    },

    {
        id: 36,
        question: "What is a Thread in Java?",
        answer: [
            "A Thread is a lightweight subprocess.",
            "Threads enable concurrent execution of tasks.",
            "Java supports thread creation using Thread class and Runnable interface.",
            "Each thread has its own execution path."
        ]
    },

    {
        id: 37,
        question: "What are the ways to create a Thread in Java?",
        answer: [
            "By extending the Thread class.",
            "By implementing the Runnable interface.",
            "Runnable is preferred because Java supports single inheritance."
        ]
    },

    {
        id: 38,
        question: "What is Thread Priority?",
        answer: [
            "Thread Priority determines the order in which threads are scheduled.",
            "Priority values range from 1 to 10.",
            "Higher-priority threads get preference from the scheduler.",
            "Default priority is 5."
        ]
    },

    {
        id: 39,
        question: "What is a Daemon Thread?",
        answer: [
            "A daemon thread is a background thread.",
            "It provides services to user threads.",
            "Examples: Garbage Collector Thread and Thread Scheduler.",
            "Daemon threads terminate when all user threads finish execution."
        ]
    },

    {
        id: 40,
        question: "What is Synchronization in Java?",
        answer: [
            "Synchronization prevents multiple threads from accessing shared resources simultaneously.",
            "It avoids race conditions.",
            "Achieved using synchronized keyword.",
            "Can be applied to methods and blocks."
        ]
    },

    {
        id: 41,
        question: "What is Deadlock in Java?",
        answer: [
            "Deadlock occurs when two or more threads wait indefinitely for each other.",
            "It usually happens in synchronized environments.",
            "Deadlock causes application execution to stop."
        ]
    },

    {
        id: 42,
        question: "What is Inter-Thread Communication?",
        answer: [
            "Inter-thread communication allows threads to communicate with each other.",
            "Achieved using wait(), notify(), and notifyAll() methods.",
            "Helps coordinate thread execution."
        ]
    },

    {
        id: 43,
        question: "What is a Thin Client?",
        answer: [
            "A Thin Client is a lightweight application.",
            "Most processing and storage are handled by a server.",
            "Uses minimal client-side resources."
        ]
    },

    {
        id: 44,
        question: "What is a Web Container?",
        answer: [
            "A Web Container provides an environment for running Servlets and JSP.",
            "It manages the lifecycle of web components.",
            "Examples: Apache Tomcat, Jetty."
        ]
    },

    {
        id: 45,
        question: "What is StringBuffer in Java?",
        answer: [
            "StringBuffer is a mutable sequence of characters.",
            "It allows modification without creating new objects.",
            "It is thread-safe.",
            "Methods include append(), insert(), delete(), and reverse()."
        ]
    },

    {
        id: 46,
        question: "What are Mutable and Immutable Objects?",
        answer: [
            "Mutable objects can be modified after creation.",
            "Immutable objects cannot be changed after creation.",
            "String is an immutable class in Java.",
            "StringBuilder and StringBuffer are mutable."
        ]
    },

    {
        id: 47,
        question: "What is an API?",
        answer: [
            "API stands for Application Programming Interface.",
            "It allows different software applications to communicate.",
            "Common APIs: REST, SOAP, GraphQL, and WebSocket APIs.",
            "APIs define request and response formats."
        ]
    },

    {
        id: 48,
        question: "What is Collection Framework in Java?",
        answer: [
            "Collection Framework provides architecture for storing and manipulating groups of objects.",
            "It is part of java.util package.",
            "Supports dynamic data storage.",
            "Main interfaces: List, Set, Queue, and Map."
        ]
    },

    {
        id: 49,
        question: "What is List Interface?",
        answer: [
            "List is an ordered collection.",
            "Allows duplicate elements.",
            "Supports index-based access.",
            "Implementations: ArrayList, LinkedList, Vector, Stack."
        ]
    },

    {
        id: 50,
        question: "What is ArrayList in Java?",
        answer: [
            "ArrayList is a dynamic array implementation of List.",
            "Allows duplicate elements.",
            "Maintains insertion order.",
            "Provides fast random access.",
            "Default capacity is 10."
        ]
    },
    {
        id: 51,
        question: "What is LinkedList in Java?",
        answer: [
            "LinkedList is a class that implements the List interface.",
            "It stores elements as nodes.",
            "Each node contains data and a reference to the next node.",
            "Allows duplicate elements and null values.",
            "Insertion and deletion are faster than ArrayList."
        ]
    },

    {
        id: 52,
        question: "What is Stack in Java?",
        answer: [
            "Stack is a class that follows LIFO (Last In First Out).",
            "It extends the Vector class.",
            "Common methods are push(), pop(), peek(), isEmpty(), and size()."
        ]
    },

    {
        id: 53,
        question: "What is the difference between Array and ArrayList?",
        answer: [
            "Array has fixed size while ArrayList has dynamic size.",
            "Array can store primitive and object types.",
            "ArrayList stores only objects.",
            "Array is faster, ArrayList provides more flexibility."
        ]
    },

    {
        id: 54,
        question: "What is Set Interface in Java?",
        answer: [
            "Set is a sub-interface of Collection.",
            "It does not allow duplicate elements.",
            "It is not index-based.",
            "Only one null value is allowed in most Set implementations."
        ]
    },

    {
        id: 55,
        question: "What is HashSet?",
        answer: [
            "HashSet is an implementation of Set interface.",
            "Does not allow duplicate elements.",
            "Does not maintain insertion order.",
            "Allows one null value.",
            "Uses hashing for storage."
        ]
    },

    {
        id: 56,
        question: "What is LinkedHashSet?",
        answer: [
            "LinkedHashSet is an implementation of Set interface.",
            "Maintains insertion order.",
            "Does not allow duplicate elements.",
            "Allows one null value."
        ]
    },

    {
        id: 57,
        question: "What is TreeSet?",
        answer: [
            "TreeSet stores elements in sorted order.",
            "Does not allow duplicate elements.",
            "Uses Comparable or Comparator for sorting.",
            "Does not allow null values."
        ]
    },

    {
        id: 58,
        question: "What is Queue Interface?",
        answer: [
            "Queue follows FIFO (First In First Out).",
            "Used for processing elements in order.",
            "Implementations include PriorityQueue and ArrayDeque."
        ]
    },

    {
        id: 59,
        question: "What is Deque?",
        answer: [
            "Deque stands for Double Ended Queue.",
            "Elements can be inserted and removed from both ends.",
            "Implementations include ArrayDeque and LinkedList."
        ]
    },

    {
        id: 60,
        question: "What is Map Interface?",
        answer: [
            "Map stores data as key-value pairs.",
            "Keys are unique.",
            "Values can be duplicated.",
            "Map is not a part of Collection interface."
        ]
    },

    {
        id: 61,
        question: "What is HashMap?",
        answer: [
            "HashMap stores key-value pairs.",
            "Keys must be unique.",
            "Allows one null key and multiple null values.",
            "Does not maintain insertion order.",
            "Provides fast retrieval using hashing."
        ]
    },

    {
        id: 62,
        question: "What is LinkedHashMap?",
        answer: [
            "LinkedHashMap stores key-value pairs.",
            "Maintains insertion order.",
            "Allows one null key and multiple null values."
        ]
    },

    {
        id: 63,
        question: "What is TreeMap?",
        answer: [
            "TreeMap stores key-value pairs in sorted order.",
            "Sorting is based on keys.",
            "Uses Comparable or Comparator.",
            "Does not allow null keys."
        ]
    },

    {
        id: 64,
        question: "What is Hashtable?",
        answer: [
            "Hashtable stores key-value pairs.",
            "It is synchronized and thread-safe.",
            "Does not allow null keys or null values."
        ]
    },

    {
        id: 65,
        question: "What are Generics in Java?",
        answer: [
            "Generics provide type safety.",
            "They allow parameterized types.",
            "Reduce the need for type casting.",
            "Introduced in JDK 1.5."
        ]
    },

    {
        id: 66,
        question: "What is Java 8?",
        answer: [
            "Java 8 introduced Lambda Expressions.",
            "Added Stream API.",
            "Added Functional Interfaces.",
            "Added Date and Time API.",
            "Improved coding simplicity and performance."
        ]
    },

    {
        id: 67,
        question: "What is JDBC?",
        answer: [
            "JDBC stands for Java Database Connectivity.",
            "It is an API used to connect Java applications with databases.",
            "Provides interfaces and classes for executing SQL queries."
        ]
    },

    {
        id: 68,
        question: "What are the steps to connect Java with a database?",
        answer: [
            "Load and register the driver.",
            "Establish the connection.",
            "Create a statement.",
            "Execute SQL queries.",
            "Close the connection."
        ]
    },

    {
        id: 69,
        question: "What is execute() method in JDBC?",
        answer: [
            "Supports both SELECT and non-SELECT queries.",
            "Returns boolean value.",
            "Returns true for SELECT queries.",
            "Returns false for INSERT, UPDATE, DELETE queries."
        ]
    },

    {
        id: 70,
        question: "What is executeQuery() and executeUpdate() in JDBC?",
        answer: [
            "executeQuery() is used for SELECT queries and returns ResultSet.",
            "executeUpdate() is used for INSERT, UPDATE, DELETE queries.",
            "executeUpdate() returns the number of affected rows."
        ]
    },
    {
        id: 71,
        question: "What is PreparedStatement in JDBC?",
        answer: [
            "PreparedStatement is a sub-interface of Statement.",
            "Used for executing both static and dynamic SQL queries.",
            "Precompiles SQL queries for better performance.",
            "Helps prevent SQL Injection attacks."
        ]
    },

    {
        id: 72,
        question: "What is Batch Execution in JDBC?",
        answer: [
            "Batch Execution groups multiple SQL statements into a single batch.",
            "Improves performance by reducing database round trips.",
            "Useful for bulk insert, update, and delete operations."
        ]
    },

    {
        id: 73,
        question: "What is ResultSet Interface?",
        answer: [
            "ResultSet stores data returned by executeQuery().",
            "Provides methods to navigate and retrieve query results.",
            "Contains metadata about columns and records."
        ]
    },

    {
        id: 74,
        question: "What is Servlet?",
        answer: [
            "Servlet is a Java class that handles HTTP requests and responses.",
            "Runs inside a servlet container like Apache Tomcat.",
            "Used to develop dynamic web applications."
        ]
    },

    {
        id: 75,
        question: "What is Session in Java Web Applications?",
        answer: [
            "A Session stores user-specific data across multiple requests.",
            "Created using HttpSession interface.",
            "Commonly used for login and user tracking."
        ]
    },

    {
        id: 76,
        question: "What are Cookies?",
        answer: [
            "Cookies are small text files stored in a user's browser.",
            "Used to store preferences, login information, and session data.",
            "Help websites remember users."
        ]
    },

    {
        id: 77,
        question: "What is Hibernate?",
        answer: [
            "Hibernate is an ORM (Object Relational Mapping) framework.",
            "Maps Java classes to database tables.",
            "Reduces JDBC boilerplate code.",
            "Supports HQL and JPQL."
        ]
    },

    {
        id: 78,
        question: "What are the features of Hibernate?",
        answer: [
            "Open-source ORM framework.",
            "Automatic table creation.",
            "Caching mechanism support.",
            "Transaction management.",
            "Supports HQL and JPQL queries."
        ]
    },

    {
        id: 79,
        question: "What is Spring Framework?",
        answer: [
            "Spring is a Dependency Injection framework.",
            "Promotes loose coupling between components.",
            "Simplifies Java EE application development.",
            "Developed by Rod Johnson."
        ]
    },

    {
        id: 80,
        question: "What is Dependency Injection?",
        answer: [
            "Dependency Injection is a design pattern.",
            "Dependencies are provided externally instead of creating them inside a class.",
            "Improves maintainability and testing."
        ]
    },

    {
        id: 81,
        question: "What is IoC Container?",
        answer: [
            "IoC stands for Inversion of Control.",
            "The IoC Container manages object creation and lifecycle.",
            "Responsible for dependency injection in Spring."
        ]
    },

    {
        id: 82,
        question: "What are the types of Dependency Injection?",
        answer: [
            "Constructor Injection.",
            "Setter Injection.",
            "Field Injection."
        ]
    },

    {
        id: 83,
        question: "What are Annotations in Spring?",
        answer: [
            "Annotations provide metadata to the Spring container.",
            "Reduce XML configuration.",
            "Examples: @Component, @Service, @Repository."
        ]
    },

    {
        id: 84,
        question: "What is Autowiring in Spring?",
        answer: [
            "Autowiring automatically injects dependencies into beans.",
            "Achieved using @Autowired annotation.",
            "Reduces manual bean wiring."
        ]
    },

    {
        id: 85,
        question: "What is Spring ORM?",
        answer: [
            "Spring ORM integrates Spring with ORM frameworks.",
            "Supports Hibernate and JPA.",
            "Simplifies database access using object-oriented programming."
        ]
    },

    {
        id: 86,
        question: "What is Spring MVC?",
        answer: [
            "Spring MVC is a web framework built on Servlet API.",
            "Follows Model-View-Controller architecture.",
            "Used for developing web applications."
        ]
    },

    {
        id: 87,
        question: "What is @PathVariable in Spring?",
        answer: [
            "Extracts values from URI paths.",
            "Binds path values to method parameters.",
            "Used in RESTful web services."
        ]
    },

    {
        id: 88,
        question: "What is @Controller in Spring?",
        answer: [
            "Marks a class as a Spring MVC controller.",
            "Handles HTTP requests.",
            "Returns views such as JSP or HTML pages."
        ]
    },

    {
        id: 89,
        question: "What is @RestController in Spring Boot?",
        answer: [
            "@RestController is a combination of @Controller and @ResponseBody.",
            "Used for creating REST APIs.",
            "Returns JSON or XML directly."
        ]
    },

    {
        id: 90,
        question: "What is @RequestMapping in Spring?",
        answer: [
            "Maps HTTP requests to controller methods.",
            "Can be applied at class and method level.",
            "Supports GET, POST, PUT, DELETE requests."
        ]
    },
    {
        id: 91,
        question: "What is Model in Spring MVC?",
        answer: [
            "Model is used to transfer data from Controller to View.",
            "Stores application data.",
            "Makes data available for rendering in JSP or Thymeleaf pages."
        ]
    },

    {
        id: 92,
        question: "What is Principal in Spring Security?",
        answer: [
            "Principal represents the currently authenticated user.",
            "Provides access to username and authentication details.",
            "Used to retrieve logged-in user information."
        ]
    },

    {
        id: 93,
        question: "What is @RequestParam?",
        answer: [
            "Used to extract request parameters from URL.",
            "Binds request values to method parameters.",
            "Supports default values and optional parameters."
        ]
    },

    {
        id: 94,
        question: "What is Spring Boot?",
        answer: [
            "Spring Boot simplifies Spring application development.",
            "Provides auto-configuration.",
            "Includes embedded servers like Tomcat.",
            "Reduces configuration effort."
        ]
    },

    {
        id: 95,
        question: "What is application.properties file?",
        answer: [
            "Stores application configuration settings.",
            "Used for database, server, logging, and security configurations.",
            "Supports externalized configuration."
        ]
    },

    {
        id: 96,
        question: "What is @Entity?",
        answer: [
            "Marks a class as a JPA entity.",
            "Maps the class to a database table.",
            "Each object represents a table row."
        ]
    },

    {
        id: 97,
        question: "What is @Id annotation?",
        answer: [
            "Marks a field as the primary key.",
            "Used to uniquely identify records in a table."
        ]
    },

    {
        id: 98,
        question: "What is @GeneratedValue?",
        answer: [
            "Automatically generates primary key values.",
            "Common strategies include AUTO, IDENTITY, SEQUENCE, and TABLE."
        ]
    },

    {
        id: 99,
        question: "What is CascadeType.ALL?",
        answer: [
            "Applies all cascade operations.",
            "Includes PERSIST, MERGE, REMOVE, REFRESH, and DETACH.",
            "Operations on parent entity are propagated to child entities."
        ]
    },

    {
        id: 100,
        question: "What is @ModelAttribute?",
        answer: [
            "Binds form data to a model object.",
            "Automatically populates object fields from request parameters.",
            "Used in Spring MVC forms."
        ]
    },

    {
        id: 101,
        question: "What is @Component?",
        answer: [
            "Marks a class as a Spring-managed bean.",
            "Allows automatic bean detection through component scanning."
        ]
    },

    {
        id: 102,
        question: "What is @Service?",
        answer: [
            "Specialized form of @Component.",
            "Used in the service layer.",
            "Contains business logic."
        ]
    },

    {
        id: 103,
        question: "What is @Repository?",
        answer: [
            "Used in the persistence layer.",
            "Handles database operations.",
            "Provides exception translation."
        ]
    },

    {
        id: 104,
        question: "What is @SpringBootApplication?",
        answer: [
            "Main annotation for Spring Boot applications.",
            "Combines @Configuration, @EnableAutoConfiguration, and @ComponentScan."
        ]
    },

    {
        id: 105,
        question: "What is @Configuration?",
        answer: [
            "Indicates that a class contains bean definitions.",
            "Used for Java-based Spring configuration."
        ]
    },

    {
        id: 106,
        question: "What is @Bean?",
        answer: [
            "Declares a Spring bean inside a configuration class.",
            "Managed by the Spring IoC container."
        ]
    },

    {
        id: 107,
        question: "What is @ResponseBody?",
        answer: [
            "Returns data directly in the HTTP response body.",
            "Commonly used for REST APIs.",
            "Supports JSON and XML responses."
        ]
    },

    {
        id: 108,
        question: "What is Lombok?",
        answer: [
            "Lombok reduces boilerplate code.",
            "Provides annotations like @Getter, @Setter, @Data, @Builder.",
            "Automatically generates methods at compile time."
        ]
    },

    {
        id: 109,
        question: "What is Microservice Architecture?",
        answer: [
            "An application is divided into small independent services.",
            "Each service can be developed and deployed independently.",
            "Improves scalability and maintainability."
        ]
    },

    {
        id: 110,
        question: "What is Spring Security?",
        answer: [
            "Provides authentication and authorization.",
            "Protects applications from common security threats.",
            "Integrates easily with Spring Boot."
        ]
    },

    {
        id: 111,
        question: "What is Authentication?",
        answer: [
            "Authentication verifies the identity of a user.",
            "Examples include username/password and OTP verification."
        ]
    },

    {
        id: 112,
        question: "What is Authorization?",
        answer: [
            "Authorization determines what a user can access.",
            "Applied after successful authentication."
        ]
    },

    {
        id: 113,
        question: "What is JWT?",
        answer: [
            "JWT stands for JSON Web Token.",
            "Used for secure authentication and authorization.",
            "Contains Header, Payload, and Signature."
        ]
    },

    {
        id: 114,
        question: "What is BCrypt Password Encoder?",
        answer: [
            "Used to hash passwords securely.",
            "Produces one-way encrypted passwords.",
            "Widely used with Spring Security."
        ]
    },

    {
        id: 115,
        question: "What is CSRF?",
        answer: [
            "CSRF stands for Cross-Site Request Forgery.",
            "An attacker tricks a user into performing unwanted actions.",
            "Spring Security provides CSRF protection by default."
        ]
    }
];

export default javaQuestions;