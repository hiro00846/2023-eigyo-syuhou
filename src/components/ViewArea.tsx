import { Box } from "@mui/system";
type Props = {
  text: string;
  accuracy: string;
  selectedItem: string;
  selectedValue: string;
};
const ViewArea = (props: Props) => {
  // const { text, accuracy } = props;
  return (
    <Box
      sx={{
        px: 1,
        width: 300,
        height: 300,
        backgroundColor: "#e8eaf6",
        overflow: "break-word",
        "&:hover": {
          backgroundColor: "#9575cd",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {JSON.stringify(props)}
      {/* objectの展開 */}
      {/* {Object.entries(props).map(([key, value]) => {
        return (
          <div key={key}>
            {key}:{value}
          </div>
        );
      })} */}
    </Box>
  );
};

export default ViewArea;
