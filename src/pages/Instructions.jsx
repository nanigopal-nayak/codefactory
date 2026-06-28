import React from "react";
import { useNavigate } from "react-router-dom";
import "./Instructions.css";

const Instructions = () => {
    const navigate = useNavigate();

    return (
        <div className="instructions-page">

            <div className="instructions-container">

                <div className="instructions-header">
                    <h1>📋 Examination Instructions</h1>
                    <p>
                        Please read all the instructions carefully before starting
                        the Java Full Stack Certification Exam.
                    </p>
                </div>

                <div className="instructions-card">

                    <div className="exam-info">

                        <div className="info-box">
                            <h3>📝 Total Questions</h3>
                            <span>50 MCQs + 5 Coding</span>
                        </div>

                        <div className="info-box">
                            <h3>⏱ Duration</h3>
                            <span>60 Minutes</span>
                        </div>

                        <div className="info-box">
                            <h3>🎯 Passing Marks</h3>
                            <span>70%</span>
                        </div>

                        <div className="info-box">
                            <h3>📜 Certificate</h3>
                            <span>Instant Download</span>
                        </div>

                    </div>

                    <div className="rules-section">

                        <h2>📌 Exam Rules</h2>

                        <ul>
                            <li>Read every question carefully before answering.</li>
                            <li>Each question carries equal marks.</li>
                            <li>No negative marking for incorrect answers.</li>
                            <li>The exam duration is 60 minutes.</li>
                            <li>The exam will auto-submit when the timer ends.</li>
                            <li>Do not refresh or close the browser during the exam.</li>
                            <li>You must score at least <strong>70%</strong> to pass.</li>
                            <li>After successfully passing, you can download your certificate.</li>
                        </ul>

                    </div>

                    <div className="button-group">

                        <button
                            className="back-btn"
                            onClick={() => navigate("/certificate")}
                        >
                            ← Back
                        </button>

                        <button
                            className="start-btn"
                            onClick={() => navigate("/exam")}
                        >
                            Start Exam →
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Instructions;