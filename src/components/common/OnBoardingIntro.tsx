import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const OnBoardingIntro = () => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box mt={10} ml={10}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          Hello, User.
        </Typography>
        <Typography variant="h5" maxWidth="70%" mb={2}>
          Lorem ipsum dolor sit Lorem ipsum dolor sit
        </Typography>
        <Link href="/signin" passHref>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{ py: 1.5, px: 4 }}
            component="a"
          >
            OnBoard
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OnBoardingIntro;
