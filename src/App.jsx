import { useState } from "react";
import "./App.css";
import { Stage, Layer, Rect } from "react-konva";

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect x={0} y={0} width={200} height={200} fill="black" draggable />
      </Layer>
    </Stage>
  );
}

export default App;
