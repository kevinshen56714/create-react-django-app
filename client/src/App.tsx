import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");

  // Example fetch to get the customer list from the server/db
  useEffect(() => {
    fetch("http://localhost:8000/customer/")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {customers.map(({ pk, name, email, created }) => (
          <p key={pk}>
            Customer name: {name}, email: {email}, created at: {created}
          </p>
        ))}
        <p> {error} </p>
      </header>
    </div>
  );
}

export default App;
