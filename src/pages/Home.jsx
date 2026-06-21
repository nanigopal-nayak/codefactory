import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.png";
import java from "../assets/java.png";
import react from "../assets/react.svg";
import database from "../assets/db.png";
import SpringBoot from "../assets/framework.png";
import javascript from "../assets/js.png";


const Home = () => {

    const navigate = useNavigate();

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
    ];

    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-left">
                    <img src={logo} alt="Code Factory Logo" className="logo" />
                    <h2>Code Nexus</h2>
                </div>
            </nav>

            {/* Cards Section */}
            <main className="cards-section">
                {cards.map((card) => (
                    <div key={card.id} className="card">

                        <div className="card-logo">
                            <img src={card.image} alt={card.title} />
                        </div>

                        <h3>{card.title}</h3>

                        <p>{card.description}</p>

                        <button
                            className="learn-btn"
                            onClick={() => {
                                if (card.id === 1) navigate("/java");
                                if (card.id === 2) navigate("/db");
                            }}
                        >
                            Let's Learn
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