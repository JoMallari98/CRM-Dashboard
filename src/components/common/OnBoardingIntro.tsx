import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useTheme, useMediaQuery } from '@mui/material';

const OnBoardingIntro = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box mt={10} ml={mdDown ? 0 : 10}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          Hello, User.
        </Typography>
        <Typography variant="h5" maxWidth="70%" mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Link href="/signin" passHref>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ py: 1.5, px: 4 }}
            component="a"
            style={{ color: '#fff' }}
          >
            {"Let's Start"}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OnBoardingIntro;
