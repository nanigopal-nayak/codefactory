const javascriptQuestions = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer: [
      "JavaScript is a high-level, interpreted programming language.",
      "It is used to create interactive web pages.",
      "It runs in browsers as well as on servers using Node.js."
    ]
  },

  {
    id: 2,
    question: "What are the features of JavaScript?",
    answer: [
      "Lightweight and interpreted.",
      "Object-oriented programming support.",
      "Dynamic typing.",
      "Event-driven programming.",
      "Supports asynchronous programming."
    ]
  },

  {
    id: 3,
    question: "Difference between var, let, and const?",
    answer: [
      "var is function-scoped and can be redeclared.",
      "let is block-scoped and cannot be redeclared in the same scope.",
      "const is block-scoped and its value cannot be reassigned."
    ]
  },

  {
    id: 4,
    question: "What are the data types in JavaScript?",
    answer: [
      "Primitive: String, Number, Boolean, Undefined, Null, BigInt, Symbol.",
      "Non-Primitive: Object, Array, Function."
    ]
  },

  {
    id: 5,
    question: "What is Hoisting?",
    answer: [
      "Hoisting is JavaScript's default behavior of moving declarations to the top.",
      "var declarations are hoisted and initialized with undefined.",
      "let and const are hoisted but remain in the Temporal Dead Zone until initialized."
    ]
  },

  {
    id: 6,
    question: "What is the difference between == and === ?",
    answer: [
      "== compares values after type conversion.",
      "=== compares both value and data type.",
      "=== is known as strict equality."
    ]
  },

  {
    id: 7,
    question: "What is a function?",
    answer: [
      "A function is a reusable block of code.",
      "Functions can accept parameters and return values.",
      "Functions can be declared, expressed, or written as arrow functions."
    ]
  },

  {
    id: 8,
    question: "What is an Arrow Function?",
    answer: [
      "Arrow functions were introduced in ES6.",
      "They provide shorter syntax.",
      "They do not have their own 'this' keyword."
    ]
  },

  {
    id: 9,
    question: "What is Closure?",
    answer: [
      "A closure is a function that remembers its outer scope.",
      "It allows access to variables even after the outer function has finished executing.",
      "Closures are commonly used for data privacy."
    ]
  },

  {
    id: 10,
    question: "What is Callback Function?",
    answer: [
      "A callback is a function passed as an argument to another function.",
      "It is executed after another function completes.",
      "Used in asynchronous programming."
    ]
  }
];

export default javascriptQuestions;