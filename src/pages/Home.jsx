import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import logo from "../assets/logo.png";
import java from "../assets/java.png";
import react from "../assets/react.svg";
import database from "../assets/db.png";
import SpringBoot from "../assets/framework.png";
import javascript from "../assets/js.png";
import certificate from "../assets/certificate.png";
import cvGenerator from "../assets/cv.png";
import applyJobs from "../assets/working-hours.png";


const Home = () => {

    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const cards = [
        {
            id: 1,
            title: "Core Java",
            image: java,
            description:
                "Learn Java fundamentals, OOP concepts, Collections Framework, Exception Handling, and Multithreading.",
        },
        {
            id: 2,
            title: "Database",
            image: database,
            description:
                "Understand SQL, database design, normalization, joins, indexing, and data management using MySQL and PostgreSQL.",
        },
        {
            id: 3,
            title: "Spring Boot",
            image: SpringBoot,
            description:
                "Build REST APIs, connect databases with JPA, implement security, and develop enterprise-grade applications.",
        },
        {
            id: 4,
            title: "Java Script",
            image: javascript,
            description:
                "Master JavaScript fundamentals, DOM manipulation, ES6 features, asynchronous programming, and modern web development.",
        },
        {
            id: 5,
            title: "React Js",
            image: react,
            description:
                "Create interactive user interfaces using React components, Hooks, state management, and routing.",
        },
        {
            id: 6,
            title: "Java Full Stack Certification",
            displayTitle: (
                <>
                    Java Full Stack <br />
                    Certification
                </>
            ),
            image: certificate,
            description:
                "Take a comprehensive Java Full Stack assessment covering Core Java, SQL, Spring Boot, JavaScript, and React. Pass the exam to earn your certificate.",
        },
        {
            id: 7,
            title: "CV Generator",
            image: cvGenerator,
            description:
                "Create a professional ATS-friendly resume in minutes. Add your personal details, education, skills, projects, experience, certifications, and download your CV as a PDF.",
        },
        {
            id: 8,
            title: "Apply Jobs",
            image: applyJobs,
            description:
                "Explore the latest job opportunities from top companies. Filter jobs by role, location, experience, and apply directly through the company careers page or job portal.",
        }
    ];
    const startVoiceSearch = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Voice search is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";
        recognition.interimResults = false;

        setIsListening(true);

        recognition.start();

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript.toLowerCase().trim();

            // ONLY update search (same as typing)
            setSearchTerm(text);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onerror = () => {
            setIsListening(false);
        };
    };
    return (
        <div className={`home-container ${darkMode ? "home-dark" : "home-light"}`}>

            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-left">
                    <img src={logo} alt="Code Factory Logo" className="logo" />
                    <h2>Code Nexus</h2>
                </div>

                <button
                    className="theme-btn"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀ Light" : "🌙 Dark"}
                </button>
            </nav>

            {/* Search */}
            <div className="home-search-wrapper">
                <input
                    type="text"
                    placeholder="🔍 Search Technology..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="home-search-box"
                />

                <button
                    className={`home-voice-search ${isListening ? "active" : ""}`}
                    onClick={startVoiceSearch}
                    title="Voice Search"
                >
                    🎙️
                </button>
            </div>

            {/* Cards */}
            <main className="cards-section">

                {cards
                    .filter((card) =>
                        card.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((card) => (

                        <div key={card.id} className="card">

                            <div className="card-logo">
                                <img src={card.image} alt={card.title} />
                            </div>

                            <h3>{card.displayTitle || card.title}</h3>

                            <p>{card.description}</p>

                            <button
                                className="learn-btn"
                                onClick={() => {
                                    if (card.id === 1) navigate("/java");
                                    if (card.id === 2) navigate("/db");
                                    if (card.id === 3) navigate("/spring");
                                    if (card.id === 4) navigate("/javascript");
                                    if (card.id === 5) navigate("/react");
                                    if (card.id === 6) navigate("/certificate");
                                    if (card.id === 7) navigate("/cv");
                                    if (card.id === 8) navigate("/jobs");
                                }}
                            >
                                {card.id === 6
                                    ? "Start Exam"
                                    : card.id === 7
                                        ? "Create CV"
                                        : card.id === 8
                                            ? "Apply Now"
                                            : "Let's Learn"}
                            </button>

                        </div>

                    ))}

            </main>

            {/* Footer */}
            <footer className="footer">
                <p>© 2026 Code Factory. All Rights Reserved.</p>
            </footer>

        </div>
    );
};

export default Home;