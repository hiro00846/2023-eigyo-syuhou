import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
type Props = {
  setSelectedItem: (selectedItem: string) => void;
  selectedItem: string;
};
export const SelectParts = (props: Props) => {
  const { selectedItem, setSelectedItem } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedItem(event.target.value as string);
  };

  return (
    <FormControl fullWidth style={{ marginTop: 20 }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedItem}
        label="Age"
        onChange={handleChange}
        style={{ width: 300 }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

// export default RadioButtonParts;
