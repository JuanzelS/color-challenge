import { useState, useEffect } from "react";
import "./App.css";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
  const g = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
  const b = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}

function App() {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateColors();
  }, []);

  const generateColors = () => {
    const newColors = [getRandomColor(), getRandomColor(), getRandomColor()];
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * 3)]);
    setMessage("");
  };

  const handleClick = (color) => {
    if (color === targetColor) {
      setMessage("✅ Correct!");
    } else {
      setMessage("❌ Incorrect!");
    }
  };

  return (
    <div className="App">
      <h1>Color Challenge 🎨</h1>
      <div className="swatches">
        {colors.map((color, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(color)}
            style={{
              backgroundColor: color,
              width: 100,
              height: 100,
              margin: 10,
              cursor: "pointer",
              border: "2px solid #333",
            }}
          />
        ))}
      </div>
      <h2>Guess the color: <code>{targetColor}</code></h2>
      <p>{message}</p>
      <button onClick={generateColors}>Reset / Play Again</button>
    </div>
  );
}

export default App;
