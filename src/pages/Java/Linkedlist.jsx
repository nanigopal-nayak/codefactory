import React, { useState } from "react";
import "./Linkedlist.css";

const LinkedList = () => {

  const [type, setType] = useState("singly");

  return (
    <div className="linkedlist-container">

      {/* Hero */}
      <div className="linkedlist-hero">
        <h1>Linked List</h1>
        <p>
          Learn Linked Lists from basics to advanced interview problems including
          Singly, Doubly and Circular Linked List with visualization.
        </p>
      </div>

      {/* Single Card */}
      <section className="linked-card">
        <h2>🔗 Linked List Visualization</h2>

        {/* Buttons */}
        <div className="ll-buttons">

          <button
            className={type === "singly" ? "active" : ""}
            onClick={() => setType("singly")}
          >
            Singly Linked List
          </button>
          <button
            className={type === "doubly" ? "active" : ""}
            onClick={() => setType("doubly")}
          >
            Doubly Linked List
          </button>
          <button
            className={type === "circular" ? "active" : ""}
            onClick={() => setType("circular")}
          >
            Circular Linked List
          </button>
        </div>

        {/* Singly */}
        {
          type === "singly" &&
          <div className="animation-area">
            <div className="ll-flow">
              {
                [10, 20, 30, 40].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="ll-node">
                      <div className="ll-data">
                        {item}
                      </div>
                      <div className="ll-pointer">
                        {index === 3 ? "NULL" : "Next"}
                      </div>
                    </div>
                    {
                      index !== 3 &&
                      <div className="ll-arrow">
                        ➜
                      </div>
                    }
                  </React.Fragment>
                ))
              }
            </div>
            <p>
              Singly Linked List contains data and next pointer.
              Traversal is possible only in forward direction.
            </p>
          </div>
        }
        {/* Doubly */}
        {
          type === "doubly" &&
          <div className="animation-area">
            <div className="dll-flow">
              {
                [10, 20, 30, 40].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="dll-node">
                      <div className="dll-pointer">
                        {index === 0 ? "NULL" : "Prev"}
                      </div>
                      <div className="dll-data">
                        {item}
                      </div>
                      <div className="dll-pointer">
                        {index === 3 ? "NULL" : "Next"}
                      </div>
                    </div>
                    {
                      index !== 3 &&
                      <div className="dll-arrow">
                        ⇄
                      </div>
                    }
                  </React.Fragment>
                ))
              }
            </div>
            <p>
              Doubly Linked List stores previous and next pointer.
              Traversal is possible in both directions.
            </p>
          </div>
        }
        {/* Circular */}
        {
          type === "circular" &&
          <div className="animation-area">
            <div className="circle-box">
              <div className="circle-node one">
                10
              </div>
              <div className="circle-node two">
                20
              </div>
              <div className="circle-node three">
                30
              </div>
              <div className="circle-node four">
                40
              </div>
            </div>
            <p>
              In Circular Linked List last node connects back to first node.
              It creates a continuous loop.
            </p>
          </div>
        }
      </section>
    </div>
  );
};
export default LinkedList;