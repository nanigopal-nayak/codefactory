import React, { useState } from "react";
import "./Dp.css";

const DP = () => {

    const [type, setType] = useState("fibonacci");

    return (

        <div className="dp-container">

            {/* HERO */}

            <div className="dp-hero">

                <h1>
                    Dynamic Programming
                </h1>

                <p>
                    Learn Dynamic Programming from basics to advanced interview concepts with visual animations and examples.
                </p>

            </div>

            {/* MAIN CARD */}

            <section className="dp-card">

                <h2>
                    🧠 Dynamic Programming Visualization
                </h2>

                <div className="dp-buttons">

                    <button
                        className={type === "fibonacci" ? "active" : ""}
                        onClick={() => setType("fibonacci")}
                    >
                        Fibonacci
                    </button>

                    <button
                        className={type === "stairs" ? "active" : ""}
                        onClick={() => setType("stairs")}
                    >
                        Climbing Stairs
                    </button>

                    <button
                        className={type === "knapsack" ? "active" : ""}
                        onClick={() => setType("knapsack")}
                    >
                        0/1 Knapsack
                    </button>

                    <button
                        className={type === "lcs" ? "active" : ""}
                        onClick={() => setType("lcs")}
                    >
                        LCS
                    </button>

                    <button
                        className={type === "coin" ? "active" : ""}
                        onClick={() => setType("coin")}
                    >
                        Coin Change
                    </button>

                </div>

                {/* FIBONACCI */}

                {
                    type === "fibonacci" &&

                    <div className="dp-animation">

                        <div className="fib-box">

                            <div className="fib-item">
                                0
                            </div>

                            <div className="fib-arrow">
                                +
                            </div>

                            <div className="fib-item">
                                1
                            </div>

                            <div className="fib-arrow">
                                =
                            </div>

                            <div className="fib-item result">
                                1
                            </div>

                        </div>

                        <div className="fib-box">

                            <div className="fib-item">
                                1
                            </div>

                            <div className="fib-arrow">
                                +
                            </div>

                            <div className="fib-item">
                                1
                            </div>

                            <div className="fib-arrow">
                                =
                            </div>

                            <div className="fib-item result">
                                2
                            </div>

                        </div>

                        <div className="fib-box">

                            <div className="fib-item">
                                1
                            </div>

                            <div className="fib-arrow">
                                +
                            </div>

                            <div className="fib-item">
                                2
                            </div>

                            <div className="fib-arrow">
                                =
                            </div>

                            <div className="fib-item result">
                                3
                            </div>

                        </div>

                        <div className="fib-box">

                            <div className="fib-item">
                                2
                            </div>

                            <div className="fib-arrow">
                                +
                            </div>

                            <div className="fib-item">
                                3
                            </div>

                            <div className="fib-arrow">
                                =
                            </div>

                            <div className="fib-item result">
                                5
                            </div>

                        </div>

                        <p>

                            <b>Fibonacci</b>

                            <br />

                            Every number is the sum of previous two numbers.

                            <br />

                            Sequence:

                            0 → 1 → 1 → 2 → 3 → 5 → 8 → 13

                            <br /><br />

                            Time Complexity : O(n)

                            <br />

                            Space Complexity : O(n)

                        </p>

                    </div>

                }
                {/* CLIMBING STAIRS */}

                {
                    type === "stairs" &&

                    <div className="dp-animation">

                        <div className="stairs-box">

                            <div className="step">
                                1
                            </div>

                            <div className="step">
                                2
                            </div>

                            <div className="step">
                                3
                            </div>

                            <div className="step">
                                4
                            </div>

                            <div className="step">
                                5
                            </div>

                        </div>

                        <div className="stairs-path">

                            <div className="path-box">
                                1 Step
                            </div>

                            <div className="path-arrow">
                                +
                            </div>

                            <div className="path-box">
                                2 Steps
                            </div>

                            <div className="path-arrow">
                                =
                            </div>

                            <div className="path-box result">
                                Many Ways
                            </div>

                        </div>

                        <p>

                            <b>Climbing Stairs</b>

                            <br />

                            You can climb either 1 or 2 steps at a time.

                            <br />

                            DP Formula:

                            dp[i]=dp[i-1]+dp[i-2]

                            <br /><br />

                            Time Complexity : O(n)

                            <br />

                            Space Complexity : O(n)

                        </p>

                    </div>

                }



                {/* 0/1 KNAPSACK */}

                {
                    type === "knapsack" &&

                    <div className="dp-animation">

                        <div className="bag">

                            🎒

                        </div>

                        <div className="items-row">

                            <div className="item-box">
                                ⚽
                                <br />
                                ₹60
                            </div>

                            <div className="item-box">
                                💻
                                <br />
                                ₹100
                            </div>

                            <div className="item-box">
                                📱
                                <br />
                                ₹120
                            </div>

                        </div>

                        <div className="capacity">

                            Capacity = 50 Kg

                        </div>

                        <p>

                            <b>0/1 Knapsack</b>

                            <br />

                            Choose items to maximize value without exceeding capacity.

                            <br />

                            Each item can be picked only once.

                            <br /><br />

                            Time Complexity : O(n×W)

                            <br />

                            Space Complexity : O(n×W)

                        </p>

                    </div>
                }
                {/* LONGEST COMMON SUBSEQUENCE */}
                {
                    type === "lcs" &&
                    <div className="dp-animation">
                        <div className="lcs-container">
                            <div className="string-box">
                                <span>A</span>
                                <span>B</span>
                                <span>C</span>
                                <span>D</span>
                                <span>E</span>
                            </div>
                            <div className="string-box">
                                <span>A</span>
                                <span>C</span>
                                <span>D</span>
                                <span>F</span>
                            </div>
                            <div className="lcs-result">
                                Longest Common Subsequence
                                <br />
                                <b>A → C → D</b>
                            </div>
                        </div>
                        <p>
                            <b>Longest Common Subsequence (LCS)</b>
                            <br />
                            Find the longest subsequence common in two strings.
                            <br />
                            Example:
                            ABCDE & ACDF
                            <br />
                            LCS = ACD
                            <br /><br />
                            Time Complexity : O(m × n)
                            <br />
                            Space Complexity : O(m × n)
                        </p>
                    </div>
                }
                {/* COIN CHANGE */}
                {
                    type === "coin" &&
                    <div className="dp-animation">
                        <div className="coin-row">
                            <div className="coin-box">
                                ₹1
                            </div>
                            <div className="coin-box">
                                ₹2
                            </div>
                            <div className="coin-box">
                                ₹5
                            </div>
                            <div className="coin-box">
                                ₹10
                            </div>
                        </div>
                        <div className="coin-target">
                            Target = ₹11
                        </div>
                        <div className="coin-answer">
                            ₹5 + ₹5 + ₹1
                        </div>
                        <p>
                            <b>Coin Change</b>
                            <br />
                            Find the minimum number of coins required to make the target amount.
                            <br />
                            DP tries all possible combinations and stores previous answers.
                            <br /><br />
                            Time Complexity : O(n × Amount)
                            <br />
                            Space Complexity : O(Amount)
                        </p>
                    </div>
                }
            </section>
        </div>
    );
};
export default DP;