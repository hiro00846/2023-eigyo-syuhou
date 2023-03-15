import { useState } from "react";
import "./App.css";
import ViewArea from "./components/ViewArea";
import { RadioButtonParts } from "./components/form/RadioButtonParts";
import { InputParts } from "./components/form/InputParts";

function App() {
  const [text, setText] = useState<string>("");
  const [accuracy, setAccuracy] = useState<string>("");

  return (
    <div className="App">
      <InputParts setText={setText} />
      <RadioButtonParts setAccuracy={setAccuracy} />
      <ViewArea text={text} accuracy={accuracy} />
    </div>
  );
}

export default App;
