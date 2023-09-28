import React, { useState, useRef, useContext } from "react";
import Container from "./Container"
import Profile from "./Profile"
import RefButton from "./RefButton";
import UserContext from "./context/UserContext";
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Container />
        <Profile />
        <RefButton />
      </header>
    </div>
  );
}

export default App;
