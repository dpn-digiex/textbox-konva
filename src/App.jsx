import "./App.css";
import { Stage, Layer, Rect } from "react-konva";
import { TextBox } from "./TextBox";
import { textData } from "./data";

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <TextBox {...textData} />
      </Layer>
    </Stage>
  );
}

export default App;
