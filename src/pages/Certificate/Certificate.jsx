import React from "react";
import { useNavigate } from "react-router-dom";
import "./Certificate.css";

const Certificate = () => {
     const navigate = useNavigate();
    return (
        <div className="certificate-page">

            <div className="certificate-container">

                <div className="certificate-header">
                    <h1>🏆 Java Full Stack Certification</h1>
                    <p>
                        Validate your Java Full Stack Development skills by
                        completing our certification exam.
                    </p>
                </div>

                <div className="certificate-card">

                    <div className="certificate-image">
                        📜
                    </div>

                    <div className="certificate-content">

                        <h2>Become a Certified Java Full Stack Developer</h2>

                        <p>
                            Take the comprehensive assessment covering
                            <strong> Core Java</strong>,
                            <strong> Database</strong>,
                            <strong> Spring Boot</strong>,
                            <strong> JavaScript</strong>, and
                            <strong> React JS</strong>.
                        </p>

                        <div className="exam-details">

                            <div className="detail-box">
                                <h3>📝 Questions</h3>
                                <span>50 MCQs + 5 Coding</span>
                            </div>

                            <div className="detail-box">
                                <h3>⏰ Duration</h3>
                                <span>60 Minutes</span>
                            </div>

                            <div className="detail-box">
                                <h3>🎯 Passing Marks</h3>
                                <span>70%</span>
                            </div>

                            <div className="detail-box">
                                <h3>📄 Certificate</h3>
                                <span>Instant Download</span>
                            </div>

                        </div>

                        <button
                            className="start-exam-btn"
                            onClick={() => navigate("/instructions")}
                        >
                            Start Certification Exam
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Certificate;