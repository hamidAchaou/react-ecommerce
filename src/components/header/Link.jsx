import { ExpandMore } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default Link = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variont="body1">Home</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
    </Box>
  );
};
