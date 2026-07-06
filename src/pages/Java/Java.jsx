import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Java.css";
import DSA from "../DSA.jsx";
import javaQuestions from "../../data/Java/javaQuestions";
import javaMCQ from "../../data/Java/javaMCQ";
import javaCoding from "../../data/Java/javaCoding";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";


const Java = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("qa");
  const [visible, setVisible] = useState(javaCoding.map(() => false));

  const [currentQ, setCurrentQ] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 12;
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const [submitted, setSubmitted] = useState([]);

  const [copiedIndex, setCopiedIndex] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const qaData = javaQuestions;

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOptionClick = (option) => {
    if (submitted[currentQ]) return; // lock after submit

    const updated = [...selectedAnswers];
    updated[currentQ] = option;
    setSelectedAnswers(updated);
  };

  const nextQuestion = () => {
    const updated = [...submitted];
    updated[currentQ] = true;
    setSubmitted(updated);

    if (currentQ < javaMCQ.length - 1) {
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
    javaMCQ.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) score++;
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
  const filteredCoding = javaCoding.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

  const currentQuestions = qaData.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
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
    recognition.maxAlternatives = 1;

    setIsListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };
  };

  const totalPages = Math.ceil(qaData.length / questionsPerPage);
  return (
    <div className="page-container">

      {/* Navbar */}
      <nav className="navbar">
        {/* Left */}
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Code Nexus</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-center">
          <button
            className={activeTab === "qa" ? "active-tab" : ""}
            onClick={() => {
              setActiveTab("qa");
              setMenuOpen(false);
            }}
          >
            Q&A
          </button>

          <button
            className={activeTab === "mcq" ? "active-tab" : ""}
            onClick={() => {
              setActiveTab("mcq");
              setMenuOpen(false);
            }}
          >
            MCQ
          </button>

          <button
            className={activeTab === "coding" ? "active-tab" : ""}
            onClick={() => {
              setActiveTab("coding");
              setMenuOpen(false);
            }}
          >
            Coding
          </button>
          <button
            className={activeTab === "dsa" ? "active-tab" : ""}
            onClick={() => {
              setActiveTab("dsa");
              setMenuOpen(false);
            }}
          >
            DSA
          </button>
        </div>

        {/* Right */}
        <div className="nav-right">

          {/* Mobile Hamburger */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ⬅ Back
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <button
              className={activeTab === "qa" ? "active-tab" : ""}
              onClick={() => {
                setActiveTab("qa");
                setMenuOpen(false);
              }}
            >
              Q&A
            </button>

            <button
              className={activeTab === "mcq" ? "active-tab" : ""}
              onClick={() => {
                setActiveTab("mcq");
                setMenuOpen(false);
              }}
            >
              MCQ
            </button>

            <button
              className={activeTab === "coding" ? "active-tab" : ""}
              onClick={() => {
                setActiveTab("coding");
                setMenuOpen(false);
              }}
            >
              Coding
            </button>
            <button
              className={activeTab === "dsa" ? "active-tab" : ""}
              onClick={() => {
                setActiveTab("dsa");
                setMenuOpen(false);
              }}
            >
              DSA
            </button>
          </div>
        )}
      </nav>
      {/* Content */}
      <main className="page-content">

        {/* Q&A TAB */}
        {/* Q&A TAB */}
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
                      {item.answer.map((ans, i) => (
                        <div key={i} className="answer-item">
                          <span className="tick">✔</span>
                          <p>{ans}</p>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* Pagination */}
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

        {/* MCQ TAB */}
        {activeTab === "mcq" && !showResult && (
          <div className="mcq-container">

            <h2>Java MCQ Test</h2>
            <p>
              Question {currentQ + 1} / {javaMCQ.length}
            </p>

            <div className="mcq-box">
              <h3>{javaMCQ[currentQ].question}</h3>

              <div className="options">
                {javaMCQ[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className={`
                          option-btn
                          ${submitted[currentQ]
                        ? opt === javaMCQ[currentQ].answer
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
                {currentQ === javaMCQ.length - 1 ? "Finish" : "Next"}
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
              Your Score: {calculateScore()} / {javaMCQ.length}
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
        {/* CODING TAB */}
        {activeTab === "coding" && (
          <div className="tab-section coding-container">
            <h2>Coding Section</h2>

            <div className="search-wrapper">
              <input
                type="text"
                placeholder="🔍 Search coding question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"
              />

              <button
                className={`voice-search ${isListening ? "active" : ""}`}
                onClick={startVoiceSearch}
                title="Voice Search"
              >
                🎙️
              </button>
            </div>

            <div className="coding-grid">
              {filteredCoding.length > 0 ? (
                filteredCoding.map((item, index) => (
                  <div key={index} className="coding-card">

                    {/* QUESTION */}
                    <div className="coding-question">
                      <h3>❓ {item.title}</h3>
                      <p>{item.question}</p>
                    </div>

                    {/* BUTTON */}
                    <button
                      className="show-btn"
                      onClick={() => {
                        const updated = [...visible];
                        updated[index] = !updated[index];
                        setVisible(updated);
                      }}
                    >
                      {visible[index]
                        ? "🙈 Hide Solution"
                        : "👨‍💻 Show Solution"}
                    </button>

                    {/* ANSWER */}
                    {visible[index] && (
                      <div className="coding-answer">

                        <div className="code-header">
                          <h4>💡 Solution:</h4>

                          <button
                            className="copy-btn"
                            onClick={() => copyToClipboard(item.code, index)}
                          >
                            {copiedIndex === index
                              ? "✔ Copied"
                              : "📋 Copy"}
                          </button>
                        </div>

                        <div className="code-scroll">
                          <SyntaxHighlighter
                            language="java"
                            style={tomorrow}
                            showLineNumbers
                          >
                            {item.code}
                          </SyntaxHighlighter>
                        </div>

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
        {activeTab === "dsa" && <DSA />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Code Nexus. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default Java;