import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputObj = { username, password };
    const url = "http://localhost:4005/users/login";

    axios
      .post(url, inputObj)
      .then((res) => {
        if (res.status === 200) {
          alert("Login Successful");
          navigate("/home"); // Redirect to the home page after successful login
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        console.error(
          "Error logging in:",
          err.response ? err.response.data : err.message
        );
        alert(
          `There was an error logging in: ${
            err.response ? err.response.data.message : err.message
          }`
        );
      });
  };

  return (
    <Layout>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="continue-application" type="submit">
          Login
        </button>
      </form>
      <p>Do not have an account? <a href="/signup">Sign Up</a></p>
    </Layout>
  );
}

export default Login;
