import React, { useState } from "react";
import "./Tree.css";
const Tree = () => {
    const [type, setType] = useState("binary");
    return (
        <div className="tree-container">
            {/* HERO */}
            <div className="tree-hero">
                <h1>Tree</h1>
                <p>
                    Learn Tree Data Structure from basics to advanced interview concepts with beautiful visualizations and examples.
                </p>
            </div>

            {/* CARD */}

            <section className="tree-card">

                <h2>🌳 Tree Visualization</h2>

                <div className="tree-buttons">

                    <button
                        className={type === "binary" ? "active" : ""}
                        onClick={() => setType("binary")}
                    >
                        Binary Tree
                    </button>

                    <button
                        className={type === "bst" ? "active" : ""}
                        onClick={() => setType("bst")}
                    >
                        BST
                    </button>

                    <button
                        className={type === "full" ? "active" : ""}
                        onClick={() => setType("full")}
                    >
                        Full Tree
                    </button>

                    <button
                        className={type === "complete" ? "active" : ""}
                        onClick={() => setType("complete")}
                    >
                        Complete
                    </button>

                    <button
                        className={type === "perfect" ? "active" : ""}
                        onClick={() => setType("perfect")}
                    >
                        Perfect
                    </button>

                    <button
                        className={type === "balanced" ? "active" : ""}
                        onClick={() => setType("balanced")}
                    >
                        Balanced
                    </button>

                </div>

                {/* Binary Tree */}

                {
                    type === "binary" &&

                    <div className="animation-area">

                        <div className="tree">

                            <div className="tree-node root">1</div>

                            <div className="tree-line left"></div>
                            <div className="tree-line right"></div>

                            <div className="tree-level">

                                <div className="tree-child">

                                    <div className="tree-node">2</div>

                                    <div className="tree-line small-left"></div>
                                    <div className="tree-line small-right"></div>

                                    <div className="tree-level">

                                        <div className="tree-node">4</div>

                                        <div className="tree-node">5</div>

                                    </div>
                                </div>
                                <div className="tree-child">
                                    <div className="tree-node">3</div>
                                    <div className="tree-line small-left"></div>
                                    <div className="tree-line small-right"></div>
                                    <div className="tree-level">
                                        <div className="tree-node">6</div>
                                        <div className="tree-node">7</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <b>Binary Tree</b><br />
                            Every node has at most two children.
                        </p>
                    </div>
                }
                {/* BST */}
                {
                    type === "bst" &&
                    <div className="animation-area">
                        <div className="tree">
                            <div className="tree-node root">50</div>
                            <div className="tree-line left"></div>
                            <div className="tree-line right"></div>
                            <div className="tree-level">
                                <div className="tree-child">
                                    <div className="tree-node">30</div>
                                    <div className="tree-level">
                                        <div className="tree-node">20</div>
                                        <div className="tree-node">40</div>
                                    </div>
                                </div>
                                <div className="tree-child">
                                    <div className="tree-node">70</div>
                                    <div className="tree-level">
                                        <div className="tree-node">60</div>
                                        <div className="tree-node">80</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <b>Binary Search Tree</b><br />
                            Left subtree values are smaller and right subtree values are larger.
                        </p>
                    </div>
                }
                {/* Full Tree */}
                {
                    type === "full" &&
                    <div className="animation-area">
                        <div className="tree">
                            <div className="tree-node root">A</div>
                            <div className="tree-line left"></div>
                            <div className="tree-line right"></div>
                            <div className="tree-level">
                                <div className="tree-child">
                                    <div className="tree-node">B</div>
                                    <div className="tree-level">
                                        <div className="tree-node">D</div>
                                        <div className="tree-node">E</div>
                                    </div>
                                </div>
                                <div className="tree-child">
                                    <div className="tree-node">C</div>
                                    <div className="tree-level">
                                        <div className="tree-node">F</div>
                                        <div className="tree-node">G</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <b>Full Binary Tree</b><br />
                            Every node has either 0 or 2 children.
                        </p>
                    </div>
                }
                {/* Complete Tree */}
                {
                    type === "complete" &&
                    <div className="animation-area">
                        <div className="tree">
                            <div className="tree-node root">1</div>
                            <div className="tree-line left"></div>
                            <div className="tree-line right"></div>
                            <div className="tree-level">
                                <div className="tree-child">
                                    <div className="tree-node">2</div>
                                    <div className="tree-level">
                                        <div className="tree-node">4</div>
                                        <div className="tree-node">5</div>
                                    </div>
                                </div>
                                <div className="tree-child">
                                    <div className="tree-node">3</div>
                                    <div className="tree-level">
                                        <div className="tree-node">6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <b>Complete Binary Tree</b><br />
                            All levels are completely filled except possibly the last.
                        </p>
                    </div>
                }
                {/* Perfect Tree */}
                {
                    type === "perfect" &&
                    <div className="animation-area">
                        <div className="tree">
                            <div className="tree-node root">1</div>
                            <div className="tree-line left"></div>
                            <div className="tree-line right"></div>
                            <div className="tree-level">
                                <div className="tree-child">
                                    <div className="tree-node">2</div>
                                    <div className="tree-level">
                                        <div className="tree-node">4</div>
                                        <div className="tree-node">5</div>
                                    </div>
                                </div>
                                <div className="tree-child">
                                    <div className="tree-node">3</div>
                                    <div className="tree-level">
                                        <div className="tree-node">6</div>
                                        <div className="tree-node">7</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <b>Perfect Binary Tree</b><br />
                            Every internal node has two children and all leaves are on the same level.
                        </p>
                    </div>
                }
                {/* Balanced */}
                {
                    type === "balanced" &&
                    <div className="animation-area">
                        <div className="tree">
                            <div className="tree-node root">30</div>
                            <div className="tree-line left"></div>
                            <div className="tree-line right"></div>
                            <div className="tree-level">
                                <div className="tree-child">
                                    <div className="tree-node">20</div>
                                    <div className="tree-level">
                                        <div className="tree-node">10</div>
                                        <div className="tree-node">25</div>
                                    </div>
                                </div>
                                <div className="tree-child">
                                    <div className="tree-node">40</div>
                                    <div className="tree-level">
                                        <div className="tree-node">35</div>
                                        <div className="tree-node">50</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <b>Balanced Tree</b><br />
                            The height difference between left and right subtree is at most one.
                        </p>
                    </div>
                }
            </section>
        </div>
    );
};

export default Tree;