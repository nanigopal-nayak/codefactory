import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Java.css";
import javaQuestions from "../data/javaQuestions";
import javaMCQ from "../data/javaMCQ";

const Java = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("qa");

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const [submitted, setSubmitted] = useState([]);

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
  return (
    <div className="page-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Code Nexus</h2>
        </div>

        <div className="nav-right">
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
      </nav>

      {/* Content */}
      <main className="page-content">

        {/* Q&A TAB */}
        {activeTab === "qa" && (
          <div className="qa-grid">
            {qaData.map((item, index) => (
              <div key={index} className="qa-block">

                <div className="qa-row">
                  <h3>{index + 1}. {item.question}</h3>

                  <div className="action">
                    <button onClick={() => toggleAnswer(index)}>
                      {openIndex === index ? "Hide Answer" : "Show Answer"}
                    </button>
                  </div>
                </div>

                {openIndex === index && (
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
          <div className="tab-section">
            <h2>Coding Section</h2>
            <p>Coding problems will be added here.</p>
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

export default Java;