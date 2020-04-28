import React from "react";
import "./styles.css";
import Ball from "./components/Ball";
import Lottery from "./components/Lottery";

export default function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" numBalls={4} maxNum={20} />
    </div>
  );
}
