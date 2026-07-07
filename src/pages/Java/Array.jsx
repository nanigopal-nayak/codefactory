import React from "react";
import { useState } from "react";
import "./Array.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const Arrays = () => {

    const [showExplanation, setShowExplanation] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const largestElementCode = `public class Main {

    public static int largest(int[] arr) {
        int max = arr[0];

        for(int i = 1; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }

        }

        return max;
    }

    public static void main(String[] args) {
        int[] arr = {3,8,12,5,7};
        System.out.println(largest(arr));

    }
}`;
    const smallestElementCode = `
public class Main {
    public static int smallest(int[] arr) {
        int min = arr[0];

        for(int i = 1; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }

    public static void main(String[] args) {
        int[] arr = {9,4,2,7,6};
        System.out.println(smallest(arr));
    }
}
`;

    const reverseArrayCode = `
public class Main {
    public static void reverse(int[] arr) {
        int left = 0, right = arr.length - 1;

        while(left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }
}
`;

    const sortedArrayCode = `
public class Main {
    public static boolean isSorted(int[] arr) {
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
}
`;

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
                    {/* Buttons */}
                    <div className="button-group">
                        <button
                            className="exp-btn"
                            onClick={() =>
                                document
                                    .getElementById("explain1")
                                    .classList.toggle("show")
                            }
                        >
                            📖 Show Explanation
                        </button>
                        <button
                            className="code-btn"
                            onClick={() =>
                                document
                                    .getElementById("code1")
                                    .classList.toggle("show")
                            }
                        >
                            💻 Show Code
                        </button>
                    </div>
                    {/* Explanation */}
                    <div className="explanation" id="explain1">
                        <h3>📌 Step-by-Step</h3>
                        <p>Start assuming the first element is the maximum.</p>
                        <div className="steps">

                            <div className="step">Start → max = 3</div>

                            <div className="step">8 {'>'} 3 → max = 8</div>

                            <div className="step">12 {'>'} 8 → max = 12</div>

                            <div className="step">5 {'<'} 12 → skip</div>

                            <div className="step">7 {'<'} 12 → skip</div>

                        </div>

                        <p className="final">
                            ✅ Final Answer: 12
                        </p>

                        <div className="complexity">

                            <h4>⏱ Complexity Analysis</h4>

                            <div className="complexity-box">

                                <strong>Time Complexity:</strong> O(n)

                                <p>
                                    We traverse the array once and compare every element with the current maximum.
                                </p>

                            </div>

                            <div className="complexity-box">

                                <strong>Space Complexity:</strong> O(1)

                                <p>
                                    Only one extra variable (<b>max</b>) is used.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Code Section */}

                    <div className="code-section" id="code1">

                        <div className="code-header">

                            <h3>💻 Java Solution</h3>

                            <button
                                className="copy-btn"
                                onClick={() =>
                                    navigator.clipboard.writeText(largestElementCode)
                                }
                            >
                                📋 Copy Code
                            </button>

                        </div>

                        <div className="code-scroll">

                            <SyntaxHighlighter
                                language="java"
                                style={tomorrow}
                                showLineNumbers
                            >
                                {largestElementCode}
                            </SyntaxHighlighter>

                        </div>

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

                    {/* BUTTONS */}
                    <div className="button-group">

                        {/* Show Explanation */}
                        <button
                            className="exp-btn"
                            onClick={() =>
                                document
                                    .getElementById("explain2")
                                    .classList.toggle("show")
                            }
                        >
                            📖 Show Explanation
                        </button>

                        {/* Show Code */}
                        <button
                            className="code-btn"
                            onClick={() =>
                                document
                                    .getElementById("code2")
                                    .classList.toggle("show")
                            }
                        >
                            💻 Show Code
                        </button>

                    </div>

                    {/* EXPLANATION */}
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

                        <div className="complexity">

                            <h4>⏱ Complexity Analysis</h4>

                            <div className="complexity-box">
                                <strong>Time Complexity:</strong> O(n)
                                <p>
                                    Every element is visited exactly once.
                                </p>
                            </div>

                            <div className="complexity-box">
                                <strong>Space Complexity:</strong> O(1)
                                <p>
                                    Only one variable (<b>min</b>) is used.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* CODE SECTION */}
                    <div className="code-section" id="code2">

                        <div className="code-header">

                            <h3>💻 Java Solution</h3>

                            <button
                                className="copy-btn"
                                onClick={() =>
                                    navigator.clipboard.writeText(smallestElementCode)
                                }
                            >
                                📋 Copy Code
                            </button>

                        </div>

                        <div className="code-scroll">

                            <SyntaxHighlighter
                                language="java"
                                style={tomorrow}
                                showLineNumbers
                            >
                                {smallestElementCode}
                            </SyntaxHighlighter>

                        </div>

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

                    {/* BUTTONS */}
                    <div className="button-group">

                        <button
                            className="exp-btn"
                            onClick={() =>
                                document
                                    .getElementById("explain3")
                                    .classList.toggle("show")
                            }
                        >
                            📖 Show Explanation
                        </button>

                        <button
                            className="code-btn"
                            onClick={() =>
                                document
                                    .getElementById("code3")
                                    .classList.toggle("show")
                            }
                        >
                            💻 Show Code
                        </button>

                    </div>

                    {/* EXPLANATION */}
                    <div className="explanation" id="explain3">

                        <h3>📌 Step-by-Step (Two Pointer Method)</h3>

                        <div className="steps">
                            <div className="step">Start → left = 0, right = n-1</div>
                            <div className="step">Swap 1 ↔ 5</div>
                            <div className="step">Swap 2 ↔ 4</div>
                            <div className="step">Middle element stays (3)</div>
                        </div>

                        <p className="final">✅ Final Answer: [5, 4, 3, 2, 1]</p>

                        <div className="complexity">
                            <h4>⏱ Complexity Analysis</h4>

                            <div className="complexity-box">
                                <strong>Time Complexity:</strong> O(n)
                                <p>Each element is swapped once.</p>
                            </div>

                            <div className="complexity-box">
                                <strong>Space Complexity:</strong> O(1)
                                <p>In-place reversal.</p>
                            </div>
                        </div>
                    </div>

                    {/* CODE SECTION */}
                    <div className="code-section" id="code3">

                        <div className="code-header">

                            <h3>💻 Java Solution</h3>

                            <button
                                className="copy-btn"
                                onClick={() =>
                                    navigator.clipboard.writeText(reverseArrayCode)
                                }
                            >
                                📋 Copy Code
                            </button>

                        </div>

                        <div className="code-scroll">

                            <SyntaxHighlighter
                                language="java"
                                style={tomorrow}
                                showLineNumbers
                            >
                                {reverseArrayCode}
                            </SyntaxHighlighter>

                        </div>

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

                    {/* BUTTONS */}
                    <div className="button-group">

                        <button
                            className="exp-btn"
                            onClick={() =>
                                document
                                    .getElementById("explain4")
                                    .classList.toggle("show")
                            }
                        >
                            📖 Show Explanation
                        </button>

                        <button
                            className="code-btn"
                            onClick={() =>
                                document
                                    .getElementById("code4")
                                    .classList.toggle("show")
                            }
                        >
                            💻 Show Code
                        </button>

                    </div>

                    {/* EXPLANATION */}
                    <div className="explanation" id="explain4">

                        <h3>📌 Step-by-Step</h3>

                        <div className="steps">
                            <div className="step">Compare 1 ≤ 2 ✔</div>
                            <div className="step">Compare 2 ≤ 3 ✔</div>
                            <div className="step">Compare 3 ≤ 4 ✔</div>
                            <div className="step">Compare 4 ≤ 5 ✔</div>
                        </div>

                        <p className="final">✅ Array is Sorted</p>

                        <div className="complexity">

                            <h4>⏱ Complexity Analysis</h4>

                            <div className="complexity-box">
                                <strong>Time Complexity:</strong> O(n)
                                <p>One pass comparison of adjacent elements.</p>
                            </div>

                            <div className="complexity-box">
                                <strong>Space Complexity:</strong> O(1)
                                <p>No extra space required.</p>
                            </div>

                        </div>

                    </div>

                    {/* CODE SECTION */}
                    <div className="code-section" id="code4">

                        <div className="code-header">

                            <h3>💻 Java Solution</h3>

                            <button
                                className="copy-btn"
                                onClick={() =>
                                    navigator.clipboard.writeText(sortedArrayCode)
                                }
                            >
                                📋 Copy Code
                            </button>

                        </div>

                        <div className="code-scroll">

                            <SyntaxHighlighter
                                language="java"
                                style={tomorrow}
                                showLineNumbers
                            >
                                {sortedArrayCode}
                            </SyntaxHighlighter>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Arrays;