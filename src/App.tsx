import { useState } from "react";
import "./App.css";
import { Box, TextField } from "@mui/material";

function App() {
  const [text, setText] = useState<string>("Hello World");
  const handleSetText = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleSetText}
      />
      <BoxSx myText={text} />
      {text}
    </div>
  );
}

type Props = {
  myText: string;
};
const BoxSx = (props: Props) => {
  console.log(props);
  const { myText } = props;
  console.log(props.myText);
  console.log(myText);
  return (
    <Box
      sx={{
        mt: 4,
        width: 300,
        height: 300,
        backgroundColor: "#e8eaf6",
        "&:hover": {
          backgroundColor: "#9575cd",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {myText}
      ここに内容
    </Box>
  );
};

export default App;
