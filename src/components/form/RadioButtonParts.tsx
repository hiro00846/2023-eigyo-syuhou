import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type Props = {
  setAccuracy: (accuracy: string) => void;
};

export const RadioButtonParts = (props: Props) => {
  const { setAccuracy } = props;
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setAccuracy(event.target.value);
  };
  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">確度</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel value="AB" control={<Radio />} label="AB" />
          <FormControlLabel value="C" control={<Radio />} label="C" />
          <FormControlLabel value="D1" control={<Radio />} label="D1" />
          <FormControlLabel value="D2" control={<Radio />} label="D2" />
        </RadioGroup>
      </FormControl>
      <p>選択中：</p>
    </>
  );
};

// export default RadioButtonParts;
