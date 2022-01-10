import { Box, Paper, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  userTitle: string;
};
const UserInfoCard: React.FC<Props> = ({ name, userTitle }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#ffff",
        display: "flex",
        p: 2,
        width: "90%",
        maxWidth: "300px",
        border: "none",
        boxShadow: "0px 0px 0px #ffff",
      }}
    >
      <Ellipse sx={{ backgroundColor: "background.paper" }} />
      <Box>
        <Typography variant="body2" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2">{userTitle}</Typography>
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
