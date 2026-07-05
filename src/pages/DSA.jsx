import React, { useState } from "react";
import "./DSA.css";
import Arrays from "./Array.jsx";
import { useNavigate } from "react-router-dom";

const DSA = () => {
    const [activeTab, setActiveTab] = useState("home");
    if (activeTab === "arrays") {
        return (
            <div className="dsa-container">

                <button
                    className="dsa-btn-secondary"
                    onClick={() => setActiveTab("home")}
                >
                    ← Back
                </button>

                <Arrays />
            </div>
        );
    }
    return (
        <div className="dsa-container">

            {/* Hero */}

            <section className="dsa-hero">

                <div className="dsa-hero-left">

                    <h1 className="dsa-title">
                        Data Structures &
                        <span> Algorithms</span>
                    </h1>

                    <p className="dsa-subtitle">
                        Learn DSA visually with animations, real interview examples,
                        coding questions and easy explanations.
                    </p>

                    <div className="dsa-buttons">
                        <button
                            className="dsa-btn-primary"
                            onClick={() => document.querySelector(".dsa-about").scrollIntoView({ behavior: "smooth" })}
                        >
                            Start Learning
                        </button>

                        <button
                            className="dsa-btn-secondary"
                            onClick={() => document.querySelector(".dsa-topics").scrollIntoView({ behavior: "smooth" })}
                        >
                            Explore Topics
                        </button>
                    </div>

                </div>

                <div className="dsa-hero-right">

                    <div className="dsa-circle">

                        <div className="dsa-node">
                            DSA
                        </div>

                    </div>

                </div>

            </section>

            {/* About */}

            <section className="dsa-about">

                <h2>What is DSA?</h2>

                <p>

                    <b>Data Structure</b> means organizing data efficiently so it can
                    be accessed and modified easily.

                </p>

                <p>

                    <b>Algorithm</b> means a step-by-step procedure used to solve a
                    problem efficiently.

                </p>

                <div className="dsa-example">

                    <div className="dsa-box">

                        📚 Data

                    </div>

                    <div className="dsa-arrow">

                        ➜

                    </div>

                    <div className="dsa-box">

                        🗂 Structure

                    </div>

                    <div className="dsa-arrow">

                        ➜

                    </div>

                    <div className="dsa-box">

                        ⚡ Fast Algorithm

                    </div>

                    <div className="dsa-arrow">

                        ➜

                    </div>

                    <div className="dsa-box">

                        ✅ Solution

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="dsa-stats">

                <div className="dsa-stat-card">
                    <h3>12+</h3>
                    <p>Core Topics</p>
                </div>

                <div className="dsa-stat-card">
                    <h3>200+</h3>
                    <p>Interview Questions</p>
                </div>

                <div className="dsa-stat-card">
                    <h3>100+</h3>
                    <p>Coding Problems</p>
                </div>

                <div className="dsa-stat-card">
                    <h3>50+</h3>
                    <p>MCQs</p>
                </div>

            </section>
            {/* Topics */}
            <section className="dsa-topics">
                <h2>Popular DSA Topics</h2>

                <div className="dsa-topic-grid">

                    <div
                        className="dsa-topic-card"
                        onClick={() => setActiveTab("arrays")}
                        style={{ cursor: "pointer" }}
                    >
                        <h3>Arrays</h3>
                        <p>Learn searching, sorting, sliding window</p>
                    </div>

                    <div className="dsa-topic-card">
                        <h3>Linked List</h3>
                        <p>Singly, doubly, circular linked lists</p>
                    </div>

                    <div className="dsa-topic-card">
                        <h3>Stack & Queue</h3>
                        <p>LIFO & FIFO operations with problems</p>
                    </div>

                    <div className="dsa-topic-card">
                        <h3>Tree</h3>
                        <p>Binary tree, BST, traversals</p>
                    </div>

                    <div className="dsa-topic-card">
                        <h3>Graph</h3>
                        <p>BFS, DFS, shortest path</p>
                    </div>

                    <div className="dsa-topic-card">
                        <h3>DP</h3>
                        <p>Dynamic Programming patterns</p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default DSA;