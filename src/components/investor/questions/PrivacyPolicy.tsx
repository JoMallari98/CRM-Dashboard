import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
  Paper,
  Hidden,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import { ArrowBackIos } from '@mui/icons-material';
import { InvestorQuestions, useOnboarding } from 'src/context/userOnBoardingContext';

const PrivacyPolicy = () => {
  const theme = useTheme();
  const router = useRouter();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));  
  const xsUp = useMediaQuery(theme.breakpoints.up('xs'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const { goToQuestion } = useOnboarding();
  const onDisagree = () => {
    goToQuestion(InvestorQuestions.DeclinedElectronicDelivery);
  };

  const onAgree = () => {
    //create profile
  };

  const handleGoBackSignup = () => {
    router.push('/signup');
  };
  return (
    <Box mb={10} pt={10}>
      <Box display="flex" justifyContent={mdDown ? 'stretch' : 'space-between'} alignItems="center">
        <Hidden mdDown>
          <PrevButton
            variant="text"
            color="secondary"
            onClick={handleGoBackSignup}
            startIcon={<ArrowBackIos />}
          >
            Go back to Sign Up
          </PrevButton>
        </Hidden>
        <QuestionContainer   style={mdDown && smUp ? {width: '80%', marginLeft: "10%"} : smDown && xsUp ? {width: "95%", marginLeft: "2.5%", padding: "30px"} : {width: '55%'}}>
          <Box display="flex" flexDirection="column" width="100%">
            <Typography variant="h6" fontSize={22} mb={2} align="center">
              Electronic Delivery Agreement
            </Typography>
            <Container>
              <Typography mb={2}>
                By providing your consent below, you consent to electronic delivery for all
                statements, reports, advisory fee statements, marketing literature, and other
                correspondence (collectively referred to as “Notices”) which are delivered pursuant
                to this Agreement.
              </Typography>
              <Typography mb={2}>
                In accordance with your consent, you instruct us to deliver all Notices to your
                email address indicated below, and you acknowledge your responsibility to timely
                notify us of any change in your email address for notice purposes. You also
                understand that this consent is effective until revoked and that you may revoke your
                consent for electronic delivery at any time by providing us written notice.
              </Typography>
              <Typography mb={2}>
                By selecting this feature, you acknowledge that: (i) electronic delivery is a
                condition to retain our services, and (ii) electronic delivery entails certain risks
                (e.g., mis-delivery, interception, and system outage and delays). There are no
                additional fees to be paid to us whether you decline or accept electronic delivery.
              </Typography>
              {/* <Typography mb={2}>
                Should you decline electronic delivery, we will decline to open an account for you, and will close any
                account that may have been opened by you previously.
              </Typography> */}
            <Box display="flex" justifyContent="center">
              <ConfirmationButton
                variant="contained"
                color="primary"
                onClick={() => router.push('/dashboard')}
                style={{ color: '#fff' }}
              >
                Yes, I Agree
              </ConfirmationButton>
              <ConfirmationButton
                sx={{ ml: 2 }}
                variant="outlined"
                color="primary"
                onClick={onDisagree}
              >
                I Decline
              </ConfirmationButton>
            </Box>
            </Container>
          </Box>
        </QuestionContainer>
        <Hidden mdDown>
          <Box sx={{ height: 240, maxWidth: 260, width: 260 }}> </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;

const QuestionContainer = styled(Paper)({
  padding: 64,
  marginTop: -60,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#ffff',
});

const ConfirmationButton = styled(Button)({
  width: 230,
  maxWidth: 230,
  height: 48,
  borderRadius: 8,
  textTransform: 'none',
});

const NavigationButton = styled(Button)({
  padding: 50,
  textTransform: 'none',
  height: 240,
  maxWidth: 270,
});

const PrevButton = styled(NavigationButton)({
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
  color: '#4D4D4D',
});
