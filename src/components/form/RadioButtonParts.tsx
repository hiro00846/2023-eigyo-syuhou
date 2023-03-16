import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { keyframes } from "@emotion/react";

type Props = {
  setAccuracy: (accuracy: string) => void;
  accuracyArray: string[];
  defaultValue: string;
};

export const RadioButtonParts = (props: Props) => {
  console.log(props);
  const { setAccuracy, accuracyArray, defaultValue } = props;
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setAccuracy(event.target.value);
  };
  return (
    <>
      <FormControl style={{ marginTop: 20 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">確度</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChange}
        >
          {/* defaultValueを入れる */}

          {accuracyArray.map((accuracy) => {
            return defaultValue === accuracy ? (
              <FormControlLabel
                key={accuracy}
                value={accuracy}
                defaultValue={defaultValue}
                control={<Radio />}
                label={accuracy}
              />
            ) : (
              <FormControlLabel
                key={accuracy}
                value={accuracy}
                control={<Radio />}
                label={accuracy}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
};

// export default RadioButtonParts;
