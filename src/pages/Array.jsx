import React from "react";
import "./Array.css";

const Arrays = () => {
    return (
        <div className="array-container">

            {/* Hero */}
            <div className="array-hero">
                <h1>Arrays</h1>
                <p>
                    Learn arrays from basics to advanced interview problems like sliding window,
                    two pointers, and prefix sum.
                </p>
            </div>

            {/* Animation */}
            <div className="array-animation">
                <h2>📊 How Array Works</h2>

                <div className="array-flow">
                    <div className="box">10</div>
                    <div className="arrow">➜</div>
                    <div className="box">20</div>
                    <div className="arrow">➜</div>
                    <div className="box">30</div>
                    <div className="arrow">➜</div>
                    <div className="box">40</div>
                </div>

                <p>
                    Arrays store elements in continuous memory locations and allow fast access using index.
                </p>
            </div>

            {/* Sections */}
            <div className="array-section">
                <div className="array-card problem-card">
                    <h2>🧠 Problem: Find Largest Element in Array</h2>
                    <p>
                        Given an array of integers, find the largest number in the array.
                    </p>
                    <div className="array-visual">
                        <div className="v-box">3</div>
                        <div className="v-box">8</div>
                        <div className="v-box highlight">12</div>
                        <div className="v-box">5</div>
                        <div className="v-box">7</div>
                    </div>
                    <button
                        className="exp-btn"
                        onClick={() =>
                            document
                                .getElementById("explain1")
                                .classList.toggle("show")
                        }
                    >
                        Show Explanation
                    </button>
                    <div className="explanation" id="explain1">
                        <h3>📌 Step-by-Step</h3>
                        <p>Start assuming first element is max.</p>
                        <div className="steps">
                            <div className="step">Start → max = 3</div>
                            <div className="step">8 {'>'} 3 → max = 8</div>
                            <div className="step">12 {'>'} 8 → max = 12</div>
                            <div className="step">5 {'<'} 12 → skip</div>
                            <div className="step">7 {'<'} 12 → skip</div>
                        </div>
                        <p className="final">✅ Final Answer: 12</p>
                    </div>
                </div>

                <div className="array-card problem-card">
                    <h2>🧠 Problem: Find Smallest Element in Array</h2>
                    <p>
                        Given an array of integers, find the smallest number in the array.
                    </p>
                    {/* Array Visualization */}
                    <div className="array-visual">
                        <div className="v-box">9</div>
                        <div className="v-box">4</div>
                        <div className="v-box highlight">2</div>
                        <div className="v-box">7</div>
                        <div className="v-box">6</div>
                    </div>

                    {/* Button */}
                    <button
                        className="exp-btn"
                        onClick={() => {
                            document
                                .getElementById("explain2")
                                .classList.toggle("show");
                        }}
                    >
                        Show Explanation
                    </button>
                    {/* Explanation */}
                    <div className="explanation" id="explain2">
                        <h3>📌 Step-by-Step Explanation</h3>
                        <p>We assume first element is the smallest.</p>
                        <div className="steps">
                            <div className="step">Start → min = 9</div>
                            <div className="step">4 {'<'} 9 → min = 4</div>
                            <div className="step">2 {'<'} 4 → min = 2</div>
                            <div className="step">7 {'>'} 2 → skip</div>
                            <div className="step">6 {'>'} 2 → skip</div>
                        </div>
                        <p className="final">
                            ✅ Final Answer: 2
                        </p>
                    </div>
                </div>

                <div className="array-card problem-card">
                    <h2>🧠 Problem: Reverse an Array</h2>
                    <p>
                        Given an array, reverse the order of elements in-place.
                    </p>
                    {/* Visualization */}
                    <div className="array-visual">
                        <div className="v-box">1</div>
                        <div className="v-box">2</div>
                        <div className="v-box highlight">3</div>
                        <div className="v-box">4</div>
                        <div className="v-box">5</div>
                    </div>
                    {/* Button */}
                    <button
                        className="exp-btn"
                        onClick={() => {
                            document
                                .getElementById("explain3")
                                .classList.toggle("show");
                        }}
                    >
                        Show Explanation
                    </button>
                    {/* Explanation */}
                    <div className="explanation" id="explain3">
                        <h3>📌 Step-by-Step (Two Pointer Method)</h3>
                        <div className="steps">
                            <div className="step">Start → left = 0, right = n-1</div>
                            <div className="step">Swap 1 ↔ 5</div>
                            <div className="step">Swap 2 ↔ 4</div>
                            <div className="step">Middle element stays (3)</div>
                        </div>
                        <p className="final">
                            ✅ Final Answer: [5, 4, 3, 2, 1]
                        </p>
                    </div>
                </div>

                <div className="array-card problem-card">
                    <h2>🧠 Problem: Check if Array is Sorted</h2>
                    <p>
                        Given an array, check whether it is sorted in increasing order.
                    </p>
                    {/* Visualization */}
                    <div className="array-visual">
                        <div className="v-box">1</div>
                        <div className="v-box">2</div>
                        <div className="v-box highlight">3</div>
                        <div className="v-box">4</div>
                        <div className="v-box">5</div>
                    </div>
                    {/* Button */}
                    <button
                        className="exp-btn"
                        onClick={() => {
                            document
                                .getElementById("explain4")
                                .classList.toggle("show");
                        }}
                    >
                        Show Explanation
                    </button>
                    {/* Explanation */}
                    <div className="explanation" id="explain4">
                        <h3>📌 Step-by-Step</h3>
                        <div className="steps">
                            <div className="step">Compare 1 ≤ 2 ✔</div>
                            <div className="step">Compare 2 ≤ 3 ✔</div>
                            <div className="step">Compare 3 ≤ 4 ✔</div>
                            <div className="step">Compare 4 ≤ 5 ✔</div>
                        </div>
                        <p className="final">
                            ✅ Array is Sorted
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Arrays;