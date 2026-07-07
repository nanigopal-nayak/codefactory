import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { score, total, percentage } = location.state || {
    score: 0,
    total: 0,
    percentage: 0,
  };

  const isPass = percentage >= 70;

  return (
    <div className="result-page">

      <div className="result-card">

        <h1>
          {isPass ? "🎉 Congratulations!" : "😔 Try Again"}
        </h1>

        <div className={isPass ? "pass" : "fail"}>
          {isPass ? "PASS" : "FAIL"}
        </div>

        <h2>{score} / {total}</h2>

        <h3>{percentage}%</h3>

        <div className="btn-group">

          <button onClick={() => navigate("/")}>
            Home
          </button>

          {isPass ? (
            <button
              onClick={() =>
                navigate("/final-certificate", {
                  state: { score, total, percentage }
                })
              }
            >
              Certificate
            </button>
          ) : (
            <button onClick={() => navigate("/exam")}>
              Retry
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default Result;