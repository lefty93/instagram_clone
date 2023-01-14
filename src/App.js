import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
        </div>
      ) : (
        <LoginForm />
      )}
      <Footer />
    </div>
  );
}

export default App;
