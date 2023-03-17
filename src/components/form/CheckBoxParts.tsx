import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type checkedArray = {
  id: number;
  value: string;
  checked: boolean;
};

type Props = {
  setCheckedArray: (checkedArray: any) => void;
  checkedArray: checkedArray[];
  initCheckedArray: checkedArray[];
};

export const CheckBoxParts = (props: Props) => {
  const { setCheckedArray, checkedArray, initCheckedArray } = props;
  // checkboxの値を取得して、checkedの値を変更する
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const newChecked = checkedArray.map((item) => {
      if (item.value === event.target.value) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCheckedArray(newChecked);
  };
  console.log(checkedArray);
  return (
    <FormGroup onChange={handleRadioChange} row style={{ marginTop: 20 }}>
      {initCheckedArray.map((item) => {
        return (
          <FormControlLabel
            key={item.id}
            control={<Checkbox defaultChecked={item.checked} />}
            value={item.value}
            label={item.value}
          />
        );
      })}
    </FormGroup>
  );
};
