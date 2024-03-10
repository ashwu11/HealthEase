import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home-page";
import CameraPage from "./pages/camera-page"
import NoPage from "./pages/no-page";
import HistoryPage from "./pages/history-page";
import SearchPage from "./pages/search-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/camera" element={<CameraPage />}/>
          <Route path="/history" element={<HistoryPage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="*" element={<NoPage />}/>

        </Routes>
      </BrowserRouter>
      {/* <h1>{message}</h1> */}
    </div>
  );
}

export default App