import { useState } from "react";
import "./App.css";
import ViewArea from "./components/ViewArea";
import { RadioButtonParts } from "./components/form/RadioButtonParts";
import { InputParts } from "./components/form/InputParts";
import { Box, Grid, Typography } from "@mui/material";

function App() {
  const [text, setText] = useState<string>("");
  const [accuracy, setAccuracy] = useState<string>("");

  return (
    <Box>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <div className="grid-left-wrap">
            <Typography variant="h5" component="h1" gutterBottom>
              入力フォーム
            </Typography>
            <InputParts setText={setText} />
            <RadioButtonParts setAccuracy={setAccuracy} />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className="grid-right-wrap">
            <ViewArea text={text} accuracy={accuracy} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
