import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Exam.css";
import examQuestions from "../data/examQuestions";

const Exam = () => {
  const navigate = useNavigate();

  const questions = examQuestions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  const handleOptionChange = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const handleSubmit = () => {
    let score = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });

    const percentage = Math.round((score / questions.length) * 100);

    // send data to result page
    navigate("/result", {
      state: {
        score,
        total: questions.length,
        percentage,
      },
    });
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit(); // auto submit when time ends
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
};

  return (
    <div className="exam-page">
      <div className="exam-container">

        <div className="exam-header">
          <h1>🏆 Java Full Stack Certification Exam</h1>

          <div className="exam-info">
            <span>⏱ {formatTime(timeLeft)}</span>
            <span>
              Question {currentQuestion + 1} / {questions.length}
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="question-card">

          <h2>{questions[currentQuestion].question}</h2>

          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="option">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswers[currentQuestion] === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          </div>

        </div>

        <div className="button-group">

          <button
            className="prev-btn"
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              className="submit-btn"
              onClick={handleSubmit}
            >
              Submit Exam
            </button>
          ) : (
            <button className="next-btn" onClick={nextQuestion}>
              Next →
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default Exam;