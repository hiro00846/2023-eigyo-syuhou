// 入力フォームのコンポーネント
import { TextField } from "@mui/material";
type Props = {
  setText: (text: string) => void;
  title: string;
};
export const InputParts = (props: Props) => {
  const { setText, title } = props;
  const handleSetText = (e: any) => {
    setText(e.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label={title}
      variant="outlined"
      onChange={handleSetText}
      style={{ marginTop: 30, width: 300 }}
    />
  );
};
