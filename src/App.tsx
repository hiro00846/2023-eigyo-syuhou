import { useState } from "react";
import "./App.css";
import ViewArea from "./components/ViewArea";
import { RadioButtonParts } from "./components/form/RadioButtonParts";
import { InputParts } from "./components/form/InputParts";
import { Box, Grid, Typography } from "@mui/material";
import { SelectParts } from "./components/form/SelectParts";
import { AutocompleteParts } from "./components/form/AutoCompleteParts";
import { CheckBoxParts } from "./components/form/CheckBoxParts";
import { TextAreaParts } from "./components/form/TextAreaParts";

function App() {
  const [text, setText] = useState<string>("");
  // ラジオボタン周りのパラメータ
  const [accuracy, setAccuracy] = useState<string>("");
  // セレクター周りのパラメータ
  const [selectedItem, setSelectedItem] = useState("");
  const accuracyArray = ["AB", "C", "D1", "D2"];
  // オートコンプリートのパラメータ（型はひとまずany）
  const [options, setOptions] = useState<any>([]);
  const [selectedValue, setSelectedValue] = useState<any>(null);
  // チェックボックスのパラメータ
  const initCheckedArray = [
    { id: 1, value: "担当者1", checked: true },
    { id: 2, value: "担当者2", checked: false },
    { id: 3, value: "担当者3", checked: true },
    { id: 4, value: "担当者4", checked: true },
  ];
  const [checkedArray, setCheckedArray] = useState(initCheckedArray);

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
            <AutocompleteParts
              options={options}
              setOptions={setOptions}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              label="スポンサー名"
            />
            <CheckBoxParts
              checkedArray={checkedArray}
              initCheckedArray={initCheckedArray}
              setCheckedArray={setCheckedArray}
            />
            <TextAreaParts />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="grid-right-wrap">
            <ViewArea
              text={text}
              accuracy={accuracy}
              selectedItem={selectedItem}
              selectedValue={selectedValue}
              checkedArray={checkedArray}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
