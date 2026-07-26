import React, { useState } from "react";
import "./Graph.css";

const Graph = () => {
    const [type, setType] = useState("undirected");
    return (
        <div className="graph-container">
            {/* HERO */}
            <div className="graph-hero">
                <h1>
                    Graph
                </h1>
                <p>
                    Learn Graph Data Structure from basics to advanced interview concepts with visualizations, traversals and real examples.
                </p>
            </div>
            {/* MAIN CARD */}
            <section className="graph-card">
                <h2>
                    🌐 Graph Visualization
                </h2>
                <div className="graph-buttons">
                    <button
                        className={type === "undirected" ? "active" : ""}
                        onClick={() => setType("undirected")}
                    >
                        Undirected Graph
                    </button>
                    <button
                        className={type === "directed" ? "active" : ""}
                        onClick={() => setType("directed")}
                    >
                        Directed Graph
                    </button>
                    <button
                        className={type === "weighted" ? "active" : ""}
                        onClick={() => setType("weighted")}
                    >
                        Weighted Graph
                    </button>
                    <button
                        className={type === "cyclic" ? "active" : ""}
                        onClick={() => setType("cyclic")}
                    >
                        Cyclic Graph
                    </button>
                    <button
                        className={type === "dag" ? "active" : ""}
                        onClick={() => setType("dag")}
                    >
                        DAG
                    </button>
                </div>
                {/* UNDIRECTED GRAPH */}
                {
                    type === "undirected" &&
                    <div className="graph-animation">
                        <div className="graph-area">
                            <div className="graph-node node-a">
                                A
                            </div>
                            <div className="graph-node node-b">
                                B
                            </div>
                            <div className="graph-node node-c">
                                C
                            </div>
                            <div className="graph-node node-d">
                                D
                            </div>
                            <div className="edge edge-ab"></div>
                            <div className="edge edge-ac"></div>
                            <div className="edge edge-bd"></div>
                            <div className="edge edge-cd"></div>
                        </div>
                        <p>
                            <b>Undirected Graph</b>
                            <br />
                            Edges have no direction. Connection works both ways.
                            <br />
                            Example: Social networks, friendship connections.
                        </p>
                    </div>
                }
                {/* DIRECTED GRAPH */}
                {
                    type === "directed" &&
                    <div className="graph-animation">
                        <div className="graph-area">
                            <div className="graph-node node-a">
                                A
                            </div>
                            <div className="graph-node node-b">
                                B
                            </div>
                            <div className="graph-node node-c">
                                C
                            </div>
                            <div className="graph-node node-d">
                                D
                            </div>
                            <div className="arrow-edge arrow-ab">
                                →
                            </div>
                            <div className="arrow-edge arrow-bc">
                                →
                            </div>
                            <div className="arrow-edge arrow-ad">
                                ↓
                            </div>
                            <div className="arrow-edge arrow-dc">
                                ↑
                            </div>
                        </div>
                        <p>
                            <b>Directed Graph</b>
                            <br />
                            Edges have a direction from one vertex to another.
                            <br />
                            Example: Web pages, Google Maps navigation.
                        </p>
                    </div>
                }
                {/* WEIGHTED GRAPH */}
                {
                    type === "weighted" &&
                    <div className="graph-animation">
                        <div className="graph-area">
                            <div className="graph-node node-a">
                                A
                            </div>
                            <div className="graph-node node-b">
                                B
                            </div>
                            <div className="graph-node node-c">
                                C
                            </div>
                            <div className="edge edge-ab"></div>
                            <div className="edge edge-ac"></div>
                            <div className="edge edge-bc"></div>
                            <div className="weight weight-ab">
                                5
                            </div>
                            <div className="weight weight-ac">
                                3
                            </div>
                            <div className="weight weight-bc">
                                2
                            </div>
                        </div>
                        <p>
                            <b>Weighted Graph</b>
                            <br />
                            Each edge contains a weight or cost.
                            <br />
                            Example: Shortest path algorithms like Dijkstra.
                        </p>
                    </div>
                }
                {/* CYCLIC GRAPH */}

                {
                    type === "cyclic" &&
                    <div className="graph-animation">
                        <div className="graph-area">
                            <div className="graph-node node-a">
                                A
                            </div>
                            <div className="graph-node node-b">
                                B
                            </div>
                            <div className="graph-node node-c">
                                C
                            </div>
                            <div className="graph-node node-d">
                                D
                            </div>
                            <div className="edge edge-ab"></div>
                            <div className="edge edge-bc"></div>
                            <div className="edge edge-cd"></div>
                            <div className="edge edge-da"></div>
                            <div className="cycle-arrow">
                                ↻
                            </div>
                        </div>
                        <p>
                            <b>Cyclic Graph</b>
                            <br />
                            A graph that contains a cycle where we can return to the starting vertex.
                            <br />
                            Example: Road networks, computer networks.
                        </p>
                    </div>

                }
                {/* DAG */}

                {
                    type === "dag" &&
                    <div className="graph-animation">
                        <div className="graph-area">
                            <div className="graph-node node-a">
                                A
                            </div>
                            <div className="graph-node node-b">
                                B
                            </div>
                            <div className="graph-node node-c">
                                C
                            </div>
                            <div className="graph-node node-d">
                                D
                            </div>
                            <div className="arrow-edge dag-ab">
                                →
                            </div>
                            <div className="arrow-edge dag-ac">
                                →
                            </div>
                            <div className="arrow-edge dag-bd">
                                →
                            </div>
                            <div className="arrow-edge dag-cd">
                                →
                            </div>
                        </div>
                        <p>
                            <b>DAG (Directed Acyclic Graph)</b>
                            <br />
                            A directed graph that does not contain any cycle.
                            <br />
                            Example: Task scheduling, Build systems, Dependencies.
                        </p>
                    </div>
                }
            </section>
        </div>
    );
};
export default Graph;