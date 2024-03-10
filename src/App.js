import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home"
import CameraPage from "./pages/camera-page"

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to HealthEase</h1>
      <Home />
      <CameraPage />
      <h1>{message}</h1>
    </div>
  );
}

export default App