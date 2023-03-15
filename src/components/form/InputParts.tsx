// 入力フォームのコンポーネント
import { TextField } from "@mui/material";
type Props = {
  setText: (text: string) => void;
};
export const InputParts = (props: Props) => {
  const { setText } = props;
  const handleSetText = (e: any) => {
    setText(e.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onChange={handleSetText}
    />
  );
};
