import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";
import axios from "axios";

export const AutocompleteParts = () => {
  useEffect(() => {
    // 非同期でデータ取得
    const data axios
    console.log("AutocompleteParts");
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300, marginTop: 2 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", dd: 1994 },
  { label: "The Godfather", dd: 1972 },
  { label: "The Godfather: Part II", dd: 1974 },
];
