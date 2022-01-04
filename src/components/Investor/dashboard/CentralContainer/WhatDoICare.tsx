import { Box, Typography } from "@mui/material";
import Image from "next/image";

const WhatDoICare = () => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        position: "relative",
        width: "212px",
        height: "116px",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          position: "absolute",
          fontSize: "16px",
          fontWeight: 600,
          color: "#FFF",
          zIndex: 2,
        }}
      >
        What do I care about?
      </Typography>
      <Box sx={{ zIndex: 1 }}>
        <Image src={"/whatdoicare.png"} width="212px" height="116px" />
      </Box>
    </Box>
  );
};

export default WhatDoICare;
