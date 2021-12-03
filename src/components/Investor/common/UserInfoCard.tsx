import { Box, Paper, styled, Typography } from "@mui/material";
import React from "react";

const UserInfoCard = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "background.default",
        borderRadius: 2,
        display: "flex",
        p: 2,
        width: "90%",
        maxWidth: "300px",
      }}
    >
      <Ellipse sx={{ backgroundColor: "background.paper" }} />
      <Box>
        <Typography variant="body2" fontWeight="bold">
          John Roberts
        </Typography>
        <Typography variant="body2">Investment Advisor</Typography>
      </Box>
    </Paper>
  );
};

export default UserInfoCard;

const Ellipse = styled(Box)({
  height: 48,
  width: 48,
  minWidth: 48,
  borderRadius: 24,
  marginRight: 20,
  flexBasis: 48,
});
