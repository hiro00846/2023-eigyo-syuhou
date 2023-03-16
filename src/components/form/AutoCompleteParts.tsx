import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  label: string;
  options: any;
  setOptions: (options: any) => void;
  selectedValue: any;
  setSelectedValue: (selectedValue: any) => void;
};
export const AutocompleteParts = (props: Props) => {
  const { label, options, setOptions, setSelectedValue } = props;
  // const [options, setOptions] = useState<any>([]);
  // const [selectedValue, setSelectedValue] = useState<any>(null);
  useEffect(() => {
    // localStrageにデータがあればそれを使う
    // const localData = localStorage.getItem("data");
    // if (localData) {
    //   console.log("データあるからこちらを使用");
    //   setOptions(JSON.parse(localData));
    //   return;
    // }

    // async 即時関数
    (async () => {
      // const res = await axios.get("http://localhost:8080/");
      // console.log(res.data.data);
      // const newData = res.data.data.map((item: any) => {
      //   return { label: item.value, id: item.id };
      // });
      // // localStrageに保存
      // localStorage.setItem("data", JSON.stringify(newData));
      // setOptions(newData);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const newData = res.data.map((item: any) => {
        return { label: item.title, id: item.id };
      });
      // localStrageに保存
      localStorage.setItem("data", JSON.stringify(newData));
      setOptions(newData);
    })();
  }, []);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300, marginTop: 2 }}
      onChange={(e, value) => setSelectedValue(value)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
