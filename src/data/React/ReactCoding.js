const reactCoding = [
  {
    title: "Counter Application using React",
    question: "Create a React application with Increment, Decrement, and Reset buttons using useState Hook.",
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;`,
    explanation:
      "The useState Hook is used to store the counter value. Clicking the buttons updates the state and React automatically re-renders the component."
  },

  {
    title: "Show and Hide Password",
    question: "Create a password field with a Show/Hide button using React.",
    code: `import { useState } from "react";

function Password() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Password;`,
    explanation:
      "The password input type changes between 'password' and 'text' using the useState Hook."
  },

  {
    title: "Light / Dark Theme Toggle",
    question: "Create a Light/Dark Theme Toggle using React.",
    code: `import { useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h2>React Theme Toggle</h2>
    </div>
  );
}

export default Theme;`,
    explanation:
      "The theme changes by updating the background and text colors using the useState Hook."
  },

  {
    title: "Search Filter",
    question: "Filter a list of names using a search box in React.",
    code: `import { useState } from "react";

function Search() {

  const [search, setSearch] = useState("");

  const users = [
    "Rahul",
    "Nani",
    "Priya",
    "Anjali",
    "Rohit"
  ];

  const filtered = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}

    </div>
  );
}

export default Search;`,
    explanation:
      "The search value is stored using useState and the filter() method displays only matching items."
  },

  {
    title: "Fetch API using useEffect",
    question: "Fetch user data from an API using useEffect.",
    code: `import { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>

      <h2>Users</h2>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default Users;`,
    explanation:
      "useEffect is used to fetch data after the component renders. The API response is stored using useState and displayed using map()."
  }
];

export default reactCoding;