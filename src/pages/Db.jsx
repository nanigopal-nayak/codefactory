import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Java.css";
import dbQuestions from "../data/dbQuestions";
import dbMCQ from "../data/dbMCQ";
import dbCoding from "../data/dbCoding";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const Db = () => {
    const [activeTab, setActiveTab] = useState("qa");

    const [visible, setVisible] = useState(dbCoding.map(() => false));

    const [currentQ, setCurrentQ] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [submitted, setSubmitted] = useState([]);

    const [copiedIndex, setCopiedIndex] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 10;
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);


    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleOptionClick = (option) => {
        if (submitted[currentQ]) return;

        const updated = [...selectedAnswers];
        updated[currentQ] = option;
        setSelectedAnswers(updated);
    };

    const nextQuestion = () => {
        const updated = [...submitted];
        updated[currentQ] = true;
        setSubmitted(updated);

        if (currentQ < dbMCQ.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            setShowResult(true);
        }
    };

    const prevQuestion = () => {
        if (currentQ > 0) {
            setCurrentQ(currentQ - 1);
        }
    };

    const calculateScore = () => {
        let score = 0;

        dbMCQ.forEach((q, i) => {
            if (selectedAnswers[i] === q.answer) {
                score++;
            }
        });

        return score;
    };

    const copyToClipboard = (code, index) => {
        navigator.clipboard.writeText(code);

        setCopiedIndex(index);

        setTimeout(() => {
            setCopiedIndex(null);
        }, 2000);
    };
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

    const currentQuestions = dbQuestions.slice(
        indexOfFirstQuestion,
        indexOfLastQuestion
    );

    const totalPages = Math.ceil(
        dbQuestions.length / questionsPerPage
    );

    const filteredCoding = dbCoding.filter(
        (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="page-container">

            {/* Navbar */}
            <nav className="navbar">
                {/* Left */}
                <div className="nav-left">
                    <img src={logo} alt="Logo" className="logo" />
                    <h2>Code Nexus</h2>
                </div>

                {/* Center */}
                <div className="nav-center">
                    <button
                        className={activeTab === "qa" ? "active-tab" : ""}
                        onClick={() => setActiveTab("qa")}
                    >
                        Q&A
                    </button>

                    <button
                        className={activeTab === "mcq" ? "active-tab" : ""}
                        onClick={() => setActiveTab("mcq")}
                    >
                        MCQ
                    </button>

                    <button
                        className={activeTab === "coding" ? "active-tab" : ""}
                        onClick={() => setActiveTab("coding")}
                    >
                        Coding
                    </button>
                </div>

                {/* Right */}
                <div className="nav-right">

                    <button
                        className="theme-btn"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? "☀ Light" : "🌙 Dark"}
                    </button>

                    <button
                        className="back-btn"
                        onClick={() => navigate(-1)}
                    >
                        ⬅ Back
                    </button>

                </div>
            </nav>
            {/* Content */}
            <main className="page-content">
                {activeTab === "qa" && (
                    <>
                        <div className="qa-grid">
                            {currentQuestions.map((item, index) => (
                                <div key={index} className="qa-block">

                                    <div className="qa-row">
                                        <h3>
                                            {indexOfFirstQuestion + index + 1}. {item.question}
                                        </h3>

                                        <div className="action">
                                            <button
                                                onClick={() =>
                                                    toggleAnswer(indexOfFirstQuestion + index)
                                                }
                                            >
                                                {openIndex === indexOfFirstQuestion + index
                                                    ? "Hide Answer"
                                                    : "Show Answer"}
                                            </button>
                                        </div>
                                    </div>

                                    {openIndex === indexOfFirstQuestion + index && (
                                        <div className="answer-box">

                                            {Array.isArray(item.answer) ? (
                                                item.answer.map((ans, i) => (
                                                    <div key={i} className="answer-item">
                                                        <span className="tick">✔</span>
                                                        <p>{ans}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="answer-item">
                                                    <span className="tick">✔</span>
                                                    <p>{item.answer}</p>
                                                </div>
                                            )}

                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>

                        <div className="pagination">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                ⬅ Previous
                            </button>

                            <span>
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Next ➡
                            </button>
                        </div>
                    </>
                )}
                {activeTab === "mcq" && !showResult && (
                    <div className="mcq-container">
                        <h2>Database MCQ Test</h2>

                        <p>
                            Question {currentQ + 1} / {dbMCQ.length}
                        </p>

                        <div className="mcq-box">
                            <h3>{dbMCQ[currentQ].question}</h3>

                            <div className="options">
                                {dbMCQ[currentQ].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleOptionClick(opt)}
                                        className={`
              option-btn
              ${submitted[currentQ]
                                                ? opt === dbMCQ[currentQ].answer
                                                    ? "correct"
                                                    : selectedAnswers[currentQ] === opt
                                                        ? "wrong"
                                                        : ""
                                                : selectedAnswers[currentQ] === opt
                                                    ? "selected-option"
                                                    : ""
                                            }
            `}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mcq-nav">
                            <button onClick={prevQuestion} disabled={currentQ === 0}>
                                Previous
                            </button>

                            <button onClick={nextQuestion}>
                                {currentQ === dbMCQ.length - 1 ? "Finish" : "Next"}
                            </button>
                        </div>
                    </div>
                )}
                {activeTab === "mcq" && showResult && (
                    <div className="result-box">
                        <h1>
                            {calculateScore() >= 40
                                ? "🏆 Outstanding!"
                                : calculateScore() >= 25
                                    ? "👍 Good Performance!"
                                    : "📘 Need Improvement"}
                        </h1>

                        <h2>
                            Your Score: {calculateScore()} / {dbMCQ.length}
                        </h2>

                        <button
                            className="restart-btn"
                            onClick={() => {
                                setCurrentQ(0);
                                setSelectedAnswers([]);
                                setSubmitted([]);
                                setShowResult(false);
                            }}
                        >
                            Restart Quiz
                        </button>
                    </div>
                )}
                {activeTab === "coding" && (
                    <div className="tab-section coding-container">
                        <h2>Database Coding Section</h2>

                        <input
                            type="text"
                            placeholder="🔍 Search coding question..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-box"
                        />

                        <div className="coding-grid">
                            {filteredCoding.length > 0 ? (
                                filteredCoding.map((item, index) => (
                                    <div key={index} className="coding-card">

                                        <div className="coding-question">
                                            <h3>❓ {item.title}</h3>
                                            <p>{item.question}</p>
                                        </div>

                                        <button
                                            className="show-btn"
                                            onClick={() => {
                                                const originalIndex = dbCoding.indexOf(item);

                                                const updated = [...visible];
                                                updated[originalIndex] = !updated[originalIndex];
                                                setVisible(updated);
                                            }}
                                        >
                                            {visible[dbCoding.indexOf(item)]
                                                ? "🙈 Hide Solution"
                                                : "👨‍💻 Show Solution"}
                                        </button>

                                        {visible[dbCoding.indexOf(item)] && (
                                            <div className="coding-answer">

                                                <div className="code-header">
                                                    <h4>💡 Solution:</h4>

                                                    <button
                                                        className="copy-btn"
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                item.code,
                                                                dbCoding.indexOf(item)
                                                            )
                                                        }
                                                    >
                                                        {copiedIndex === dbCoding.indexOf(item)
                                                            ? "✔ Copied"
                                                            : "📋 Copy"}
                                                    </button>
                                                </div>

                                                <SyntaxHighlighter
                                                    language="sql"
                                                    style={tomorrow}
                                                    showLineNumbers
                                                >
                                                    {item.code}
                                                </SyntaxHighlighter>

                                                {item.explanation && (
                                                    <p className="explanation">
                                                        <b>Explanation:</b> {item.explanation}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="no-results">
                                    <h3>❌ No coding question found</h3>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>© 2026 Code Nexus. All Rights Reserved.</p>
            </footer>

        </div>
    );
};

export default Db;