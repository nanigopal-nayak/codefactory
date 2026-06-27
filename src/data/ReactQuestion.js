const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    answer: [
      "React is an open-source JavaScript library used to build user interfaces.",
      "It is developed and maintained by Meta (Facebook).",
      "React is used to build fast and interactive Single Page Applications (SPAs)."
    ]
  },

  {
    id: 2,
    question: "What are the features of React?",
    answer: [
      "Component-Based Architecture.",
      "Virtual DOM for faster rendering.",
      "Reusable Components.",
      "One-Way Data Binding.",
      "JSX Syntax."
    ]
  },

  {
    id: 3,
    question: "What is JSX?",
    answer: [
      "JSX stands for JavaScript XML.",
      "It allows writing HTML-like syntax inside JavaScript.",
      "JSX is converted into JavaScript using Babel."
    ]
  },

  {
    id: 4,
    question: "What is a Component in React?",
    answer: [
      "A Component is a reusable piece of UI.",
      "Components can be Functional or Class Components.",
      "Modern React mainly uses Functional Components."
    ]
  },

  {
    id: 5,
    question: "What is the Virtual DOM?",
    answer: [
      "Virtual DOM is a lightweight copy of the Real DOM.",
      "React updates the Virtual DOM first.",
      "Only the changed elements are updated in the Real DOM."
    ]
  },

  {
    id: 6,
    question: "What is the difference between Real DOM and Virtual DOM?",
    answer: [
      "Real DOM updates the entire page.",
      "Virtual DOM updates only changed elements.",
      "Virtual DOM provides better performance."
    ]
  },

  {
    id: 7,
    question: "What is a Functional Component?",
    answer: [
      "A Functional Component is a JavaScript function.",
      "It returns JSX.",
      "Hooks are used inside Functional Components."
    ]
  },

  {
    id: 8,
    question: "What are Props in React?",
    answer: [
      "Props stand for Properties.",
      "Props are used to pass data from parent to child components.",
      "Props are read-only."
    ]
  },

  {
    id: 9,
    question: "What is State in React?",
    answer: [
      "State stores component data.",
      "State changes cause the component to re-render.",
      "useState Hook is used to manage state."
    ]
  },

  {
    id: 10,
    question: "What is the useState Hook?",
    answer: [
      "useState is a React Hook.",
      "It is used to create and manage state in Functional Components.",
      "It returns the current state and a setter function."
    ]
  },

  {
    id: 11,
    question: "What is useEffect?",
    answer: [
      "useEffect is used to perform side effects.",
      "Examples include API calls, timers, and event listeners.",
      "It runs after rendering."
    ]
  },

  {
    id: 12,
    question: "What is the dependency array in useEffect?",
    answer: [
      "[] runs the effect only once.",
      "[value] runs when the value changes.",
      "Without dependency array, it runs after every render."
    ]
  },

  {
    id: 13,
    question: "What is React Router?",
    answer: [
      "React Router is used for navigation.",
      "It enables routing without refreshing the page.",
      "It is commonly used in Single Page Applications."
    ]
  },

  {
    id: 14,
    question: "What is BrowserRouter?",
    answer: [
      "BrowserRouter enables client-side routing.",
      "It uses the browser history API.",
      "It wraps the entire React application."
    ]
  },

  {
    id: 15,
    question: "What is Route?",
    answer: [
      "Route maps a URL path to a React component.",
      "It is used inside Routes."
    ]
  },

  {
    id: 16,
    question: "What is Routes?",
    answer: [
      "Routes replaces Switch in React Router v6.",
      "It renders the first matching Route."
    ]
  },

  {
    id: 17,
    question: "What is useNavigate?",
    answer: [
      "useNavigate is a React Router Hook.",
      "It is used for programmatic navigation.",
      "Example: navigate('/home')."
    ]
  },

  {
    id: 18,
    question: "What is Conditional Rendering?",
    answer: [
      "Conditional Rendering displays UI based on conditions.",
      "It uses if statements, ternary operators, or && operators."
    ]
  },

  {
    id: 19,
    question: "What is Event Handling in React?",
    answer: [
      "React handles events using camelCase syntax.",
      "Example: onClick, onChange, onSubmit."
    ]
  },

  {
    id: 20,
    question: "What is List Rendering?",
    answer: [
      "List Rendering displays multiple items using map().",
      "Each item should have a unique key."
    ]
  },

  {
    id: 21,
    question: "What is the key prop?",
    answer: [
      "The key prop uniquely identifies list items.",
      "It helps React update the UI efficiently."
    ]
  },

  {
    id: 22,
    question: "What is Controlled Component?",
    answer: [
      "A Controlled Component is controlled by React state.",
      "The input value comes from useState."
    ]
  },

  {
    id: 23,
    question: "What is Uncontrolled Component?",
    answer: [
      "An Uncontrolled Component stores data in the DOM.",
      "Refs are commonly used to access input values."
    ]
  },

  {
    id: 24,
    question: "What is useRef?",
    answer: [
      "useRef creates a mutable reference.",
      "It is used to access DOM elements.",
      "Updating useRef does not trigger re-render."
    ]
  },

  {
    id: 25,
    question: "What is useContext?",
    answer: [
      "useContext shares data globally.",
      "It avoids prop drilling.",
      "It works with Context API."
    ]
  },

  {
    id: 26,
    question: "What is Context API?",
    answer: [
      "Context API is used for global state management.",
      "It allows sharing data without passing props manually."
    ]
  },

  {
    id: 27,
    question: "What is Prop Drilling?",
    answer: [
      "Prop Drilling means passing props through multiple components.",
      "Context API helps solve this problem."
    ]
  },

  {
    id: 28,
    question: "What is Fragment?",
    answer: [
      "Fragment groups multiple elements without adding extra DOM nodes.",
      "Syntax: <>...</>"
    ]
  },

  {
    id: 29,
    question: "What is React Hook?",
    answer: [
      "Hooks allow Functional Components to use React features.",
      "Examples: useState, useEffect, useContext, useRef."
    ]
  },

  {
    id: 30,
    question: "What is Vite?",
    answer: [
      "Vite is a modern frontend build tool.",
      "It provides fast development and Hot Module Replacement (HMR).",
      "It is commonly used to create React applications."
    ]
  }
];

export default reactQuestions;