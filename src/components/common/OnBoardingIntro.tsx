import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useTheme, useMediaQuery } from '@mui/material';

const OnBoardingIntro = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [loader, setLoader] = useState(false);

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
            onClick={() => setLoader(true)}
            endIcon={
              <>
                <ArrowForwardIcon />{' '}
                {loader && (
                  <Image
                    data-testid="loader"
                    src="/loader.gif"
                    width="20px"
                    height="20px"
                    alt="loader"
                  />
                )}
              </>
            }
            sx={{ py: 1.5, px: 4 }}
            component="a"
            data-testid="start-btn"
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
