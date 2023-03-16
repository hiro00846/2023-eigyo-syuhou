import { useState } from "react";
import "./App.css";
import ViewArea from "./components/ViewArea";
import { RadioButtonParts } from "./components/form/RadioButtonParts";
import { InputParts } from "./components/form/InputParts";
import { Box, Grid, Typography } from "@mui/material";
import { SelectParts } from "./components/form/SelectParts";
import { AutocompleteParts } from "./components/form/AutoCompleteParts";

function App() {
  const [text, setText] = useState<string>("");
  // ラジオボタン周りのパラメータ
  const [accuracy, setAccuracy] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState("");
  const accuracyArray = ["AB", "C", "D1", "D2"];

  return (
    <Box>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <div className="grid-left-wrap">
            <Typography variant="h5" component="h1" gutterBottom>
              入力フォーム
            </Typography>
            <InputParts title="入力内容" setText={setText} />
            <RadioButtonParts
              accuracyArray={accuracyArray}
              setAccuracy={setAccuracy}
              defaultValue={accuracyArray[0]}
            />
            <SelectParts
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
            <AutocompleteParts />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="grid-right-wrap">
            <ViewArea
              text={text}
              accuracy={accuracy}
              selectedItem={selectedItem}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
