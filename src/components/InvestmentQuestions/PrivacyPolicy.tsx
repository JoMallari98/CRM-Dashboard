import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Question from "./Question";
import SelectionButton from "./SelectionButton";
import { useOnboarding } from "src/context/userOnBoardingContext";

const PrivacyPolicy = () => {
  const onDisagree = () => {
    //TODO
  };

  const onAgree = () => {
    //create profile
  };
  return (
    <Box mb={10} pt={10}>
      <Question
        prevText="No, I Disagree"
        nextText="Yes, I Agree"
        isEndQuestion={true}
        isStartQuestion={true}
        onNext={onAgree}
        sx={{ p: 2 }}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontSize={22} mb={2} align="center">
            Electronic Delivery Agreement
          </Typography>
          <Container maxWidth="sm">
            <Typography mb={2}>
              By providing your consent below, you consent to electronic
              delivery for all statements, reports, advisory fee statements,
              marketing literature, and other correspondence (collectively
              referred to as “Notices”) which are delivered pursuant to this
              Agreement.
            </Typography>
            <Typography mb={2}>
              In accordance with your consent, you instruct us to deliver all
              Notices to your email address indicated below, and you acknowledge
              your responsibility to timely notify us of any change in your
              email address for notice purposes. You also understand that this
              consent is effective until revoked and that you may revoke your
              consent for electronic delivery at any time by providing us
              written notice.
            </Typography>
            <Typography mb={2}>
              By selecting this feature, you acknowledge that: (i) electronic
              delivery is a condition to retain our services, and (ii)
              electronic delivery entails certain risks (e.g., mis-delivery,
              interception, and system outage and delays). There are no
              additional fees to be paid to us whether you decline or accept
              electronic delivery.
            </Typography>
            <Typography mb={2}>
              Should you decline electronic delivery, we will decline to open an
              account for you, and will close any account that may have been
              opened by you previously.
            </Typography>
          </Container>
        </Box>
      </Question>
    </Box>
  );
};

export default PrivacyPolicy;
