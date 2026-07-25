import React, { useState } from "react";
import "./StackQueue.css";

const StackQueue = () => {

    const [type, setType] = useState("stack");


    return (

        <div className="sq-container">


            {/* Hero */}

            <div className="sq-hero">

                <h1>
                    Stack & Queue
                </h1>

                <p>
                    Learn Stack and Queue from basics to advanced interview
                    concepts with visual animations, operations and examples.
                </p>

            </div>



            {/* Main Card */}

            <section className="sq-card">


                <h2>
                    📚 Stack & Queue Visualization
                </h2>



                {/* Buttons */}

                <div className="sq-buttons">


                    <button
                        className={type==="stack" ? "active":""}
                        onClick={()=>setType("stack")}
                    >
                        Stack
                    </button>



                    <button
                        className={type==="queue" ? "active":""}
                        onClick={()=>setType("queue")}
                    >
                        Queue
                    </button>


                </div>





                {/* STACK */}

                {
                type==="stack" &&

                <div className="animation-area">


                    <div className="stack-area">


                        <div className="stack-label">
                            TOP
                        </div>


                        <div className="stack-box">


                            <div className="stack-item">
                                40
                            </div>


                            <div className="stack-item">
                                30
                            </div>


                            <div className="stack-item">
                                20
                            </div>


                            <div className="stack-item">
                                10
                            </div>


                        </div>


                        <div className="stack-operation">
                            ⬆ Push &nbsp;&nbsp; ⬇ Pop
                        </div>


                    </div>



                    <p>
                        Stack follows <b>LIFO</b> (Last In First Out).
                        <br/>
                        Example: Function call, Undo/Redo, Browser history.
                    </p>


                </div>

                }





                {/* QUEUE */}

                {
                type==="queue" &&

                <div className="animation-area">


                    <div className="queue-area">


                        <div className="queue-label">
                            Front ➜
                        </div>



                        <div className="queue-box">


                            <div className="queue-item">
                                10
                            </div>


                            <div className="queue-item">
                                20
                            </div>


                            <div className="queue-item">
                                30
                            </div>


                            <div className="queue-item">
                                40
                            </div>


                        </div>



                        <div className="queue-operation">
                            ➜ Enqueue &nbsp;&nbsp; Dequeue ➜
                        </div>



                    </div>




                    <p>
                        Queue follows <b>FIFO</b> (First In First Out).
                        <br/>
                        Example: CPU Scheduling, Ticket System.
                    </p>


                </div>

                }



            </section>


        </div>

    );

};


export default StackQueue;