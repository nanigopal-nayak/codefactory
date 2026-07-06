const javascriptCoding = [
  {
    title: "Turn ON/OFF Bulb using JavaScript",
    question: "Write a JavaScript program to turn a bulb ON and OFF when a button is clicked.",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Bulb ON/OFF</title>
</head>
<body>

<h2>Bulb ON/OFF</h2>

<img id="bulb" src="bulb-off.png" width="150">

<br><br>

<button onclick="turnOn()">Turn ON</button>
<button onclick="turnOff()">Turn OFF</button>

<script>
function turnOn() {
    document.getElementById("bulb").src = "bulb-on.png";
}

function turnOff() {
    document.getElementById("bulb").src = "bulb-off.png";
}
</script>

</body>
</html>`,
    explanation:
      "The program changes the image source using JavaScript. When the ON button is clicked, the bulb image changes to bulb-on.png. When OFF is clicked, it changes back to bulb-off.png."
  },

  {
    title: "Reverse a String in JavaScript",
    question: "Write a JavaScript program to reverse a string.",
    code: `let str = "JavaScript";

let reverse = str.split("").reverse().join("");

console.log(reverse);`,
    explanation:
      "The string is converted into an array using split(), reversed using reverse(), and converted back into a string using join()."
  },

  {
    title: "Check Palindrome String in JavaScript",
    question: "Write a JavaScript program to check whether a string is a palindrome.",
    code: `let str = prompt("Enter a String");

let reverse = str.split("").reverse().join("");

if(str === reverse){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}`,
    explanation:
      "The entered string is reversed and compared with the original string. If both are equal, it is a palindrome."
  },

  {
    title: "Find Largest Number in an Array",
    question: "Write a JavaScript program to find the largest element in an array.",
    code: `let numbers = [12, 45, 78, 21, 10];

let largest = Math.max(...numbers);

console.log("Largest Number:", largest);`,
    explanation:
      "The spread operator (...) passes all array elements to Math.max(), which returns the largest number."
  },

  {
    title: "Calculate Factorial using JavaScript",
    question: "Write a JavaScript program to calculate the factorial of a number.",
    code: `let num = Number(prompt("Enter a Number"));

let fact = 1;

for(let i = 1; i <= num; i++){
    fact *= i;
}

console.log("Factorial =", fact);`,
    explanation:
      "The program uses a for loop to multiply all numbers from 1 to the entered number."
  }
];

export default javascriptCoding;