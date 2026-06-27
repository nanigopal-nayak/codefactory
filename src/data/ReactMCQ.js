const reactMCQ = [
    {
        question: "What is React?",
        options: [
            "A JavaScript library",
            "A Database",
            "A Programming Language",
            "A Web Server",
        ],
        answer: "A JavaScript library",
    },
    {
        question: "Who developed React?",
        options: ["Google", "Microsoft", "Meta (Facebook)", "Oracle"],
        answer: "Meta (Facebook)",
    },
    {
        question: "Which command is used to create a React app using Vite?",
        options: [
            "npm create vite@latest",
            "npx create-react-app",
            "npm install react",
            "npm start react",
        ],
        answer: "npm create vite@latest",
    },
    {
        question: "What is JSX?",
        options: [
            "Java XML",
            "JavaScript XML",
            "JSON XML",
            "Java Syntax Extension",
        ],
        answer: "JavaScript XML",
    },
    {
        question: "Which hook is used for state management?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: "useState",
    },
    {
        question: "Which hook is used for side effects?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useEffect",
    },
    {
        question: "Which hook is used to access DOM elements?",
        options: ["useState", "useEffect", "useRef", "useNavigate"],
        answer: "useRef",
    },
    {
        question: "Which hook is used for global state using Context API?",
        options: ["useState", "useContext", "useMemo", "useCallback"],
        answer: "useContext",
    },
    {
        question: "Which company maintains React?",
        options: ["Amazon", "Meta", "IBM", "Netflix"],
        answer: "Meta",
    },
    {
        question: "Which method is used to render lists in React?",
        options: ["forEach()", "filter()", "map()", "reduce()"],
        answer: "map()",
    },
    {
        question: "Which prop is mandatory while rendering lists?",
        options: ["id", "value", "key", "index"],
        answer: "key",
    },
    {
        question: "React follows which type of data binding?",
        options: ["Two-way", "One-way", "Three-way", "Multi-way"],
        answer: "One-way",
    },
    {
        question: "Which virtual structure improves React performance?",
        options: ["Shadow DOM", "Virtual DOM", "Real DOM", "Browser DOM"],
        answer: "Virtual DOM",
    },
    {
        question: "Which component type is recommended in modern React?",
        options: [
            "Class Component",
            "Functional Component",
            "Abstract Component",
            "Static Component",
        ],
        answer: "Functional Component",
    },
    {
        question: "Props are ______.",
        options: [
            "Mutable",
            "Read-only",
            "Private",
            "Protected",
        ],
        answer: "Read-only",
    },
    {
        question: "State is managed using which hook?",
        options: ["useRef", "useState", "useEffect", "useMemo"],
        answer: "useState",
    },
    {
        question: "Which hook is used for navigation in React Router?",
        options: ["useHistory", "useNavigate", "useRouter", "navigateTo"],
        answer: "useNavigate",
    },
    {
        question: "Which package provides routing in React?",
        options: [
            "react-router",
            "react-dom",
            "react-router-dom",
            "react-navigation",
        ],
        answer: "react-router-dom",
    },
    {
        question: "Which component wraps all routes?",
        options: ["BrowserRouter", "Switch", "Navigate", "RouterView"],
        answer: "BrowserRouter",
    },
    {
        question: "Which component replaced Switch in React Router v6?",
        options: ["Router", "Routes", "RouteGroup", "BrowserRouter"],
        answer: "Routes",
    },
    {
        question: "Which prop specifies the URL path in Route?",
        options: ["url", "to", "path", "link"],
        answer: "path",
    },
    {
        question: "Which prop specifies the component to render in Route?",
        options: ["component", "render", "element", "view"],
        answer: "element",
    },
    {
        question: "Which hook avoids unnecessary re-rendering of functions?",
        options: ["useMemo", "useCallback", "useState", "useEffect"],
        answer: "useCallback",
    },
    {
        question: "Which hook memoizes calculated values?",
        options: ["useCallback", "useMemo", "useReducer", "useContext"],
        answer: "useMemo",
    },
    {
        question: "React components must return ______.",
        options: ["HTML", "CSS", "JSX", "JSON"],
        answer: "JSX",
    },
    {
        question: "Which symbol is used for React Fragment?",
        options: ["{}", "[]", "<></>", "()"],
        answer: "<></>",
    },
    {
        question: "Which hook runs after every render by default?",
        options: ["useRef", "useEffect", "useMemo", "useContext"],
        answer: "useEffect",
    },
    {
        question: "Which file is the entry point in a Vite React project?",
        options: [
            "index.js",
            "App.js",
            "main.jsx",
            "server.js",
        ],
        answer: "main.jsx",
    },
    {
        question: "Which file contains the root React component?",
        options: [
            "main.jsx",
            "App.jsx",
            "index.html",
            "vite.config.js",
        ],
        answer: "App.jsx",
    },
    {
        question: "What does SPA stand for?",
        options: [
            "Simple Page Application",
            "Single Page Application",
            "Static Program Application",
            "Server Page Application",
        ],
        answer: "Single Page Application",
    },
    {
        question: "Which hook is used to manage complex state?",
        options: ["useMemo", "useReducer", "useState", "useEffect"],
        answer: "useReducer",
    },
    {
        question: "Which hook can be used to create reusable logic?",
        options: [
            "Custom Hook",
            "useMemo",
            "useState",
            "useRef",
        ],
        answer: "Custom Hook",
    },
    {
        question: "Which React feature loads components only when needed?",
        options: [
            "Lazy Loading",
            "Memoization",
            "Code Splitting",
            "Both Lazy Loading and Code Splitting",
        ],
        answer: "Both Lazy Loading and Code Splitting",
    },
    {
        question: "Which function is used for lazy loading?",
        options: [
            "React.lazy()",
            "React.memo()",
            "React.load()",
            "React.async()",
        ],
        answer: "React.lazy()",
    },
    {
        question: "Which component is used with React.lazy()?",
        options: [
            "ErrorBoundary",
            "Suspense",
            "StrictMode",
            "Fragment",
        ],
        answer: "Suspense",
    },
    {
        question: "Which hook is used to optimize rendering?",
        options: [
            "useMemo",
            "useCallback",
            "Both useMemo and useCallback",
            "useEffect",
        ],
        answer: "Both useMemo and useCallback",
    },
    {
        question: "Which object contains all React APIs?",
        options: ["React", "ReactDOM", "DOM", "JSX"],
        answer: "React",
    },
    {
        question: "What is React.memo() used for?",
        options: [
            "API Calls",
            "Prevent unnecessary component re-rendering",
            "Routing",
            "Creating Context",
        ],
        answer: "Prevent unnecessary component re-rendering",
    },
    {
        question: "Which method is used to handle form submission?",
        options: ["onClick", "onSubmit", "onChange", "onFocus"],
        answer: "onSubmit",
    },
    {
        question: "Which event is triggered when input value changes?",
        options: ["onClick", "onSubmit", "onChange", "onLoad"],
        answer: "onChange",
    },
    {
        question: "React applications are built using ______ architecture.",
        options: [
            "Layered",
            "Component-Based",
            "Monolithic",
            "MVC",
        ],
        answer: "Component-Based",
    },
    {
        question: "Which hook can store mutable values without re-rendering?",
        options: ["useState", "useEffect", "useRef", "useContext"],
        answer: "useRef",
    },
    {
        question: "Which hook is commonly used for API calls?",
        options: ["useEffect", "useRef", "useMemo", "useReducer"],
        answer: "useEffect",
    },
    {
        question: "Which React hook is used to share data globally?",
        options: ["useState", "useContext", "useMemo", "useEffect"],
        answer: "useContext",
    },
    {
        question: "Which package installs React?",
        options: [
            "npm install react react-dom",
            "npm install react-router",
            "npm install vite",
            "npm install jsx",
        ],
        answer: "npm install react react-dom",
    },
    {
        question: "Which command starts a Vite React application?",
        options: ["npm run dev", "npm start", "node app", "vite start"],
        answer: "npm run dev",
    },
    {
        question: "Which file contains Vite configuration?",
        options: [
            "vite.config.js",
            "webpack.config.js",
            "config.js",
            "package.json",
        ],
        answer: "vite.config.js",
    },
    {
        question: "Which API is commonly used in React to fetch data?",
        options: ["fetch()", "axios", "Both fetch() and axios", "XML"],
        answer: "Both fetch() and axios",
    },
    {
        question: "React is mainly used for building ______.",
        options: [
            "Databases",
            "User Interfaces",
            "Operating Systems",
            "Networks",
        ],
        answer: "User Interfaces",
    },
    {
        question: "Which hook is used to manage state in a functional component?",
        options: [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ],
        answer: "useState"
    }
];

export default reactMCQ;