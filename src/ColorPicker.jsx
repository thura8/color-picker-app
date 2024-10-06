import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h2>Color Picker</h2>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color {color}</p>
      </div>

      <label>Select a color</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
