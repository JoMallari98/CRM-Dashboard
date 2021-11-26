import { ArrowBack } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useOnboarding } from "src/context/userOnBoardingContext";
import CustomTextField from "../OnBoarding/common/CustomTextField";
import { FormSection } from "../OnBoarding/common/FormSection";
import OnBoardingFormContainer from "../OnBoarding/common/OnBoardingFormContainer";

const VerificationSelect = () => {
  const { goPrevStep, goNextStep } = useOnboarding();

  const handleEmail = () => {
    goNextStep();
  };

  const handleSms = () => {
    goNextStep();
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={13}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goPrevStep}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" maxWidth={400}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verification
        </Typography>
        <Typography variant="body2" align="center">
          For your protection we need to confirm your identity
        </Typography>
        <Box mt={18.5}>
          <SendButton variant="text" onClick={handleEmail}>
            Send me a code by e-mail
          </SendButton>
          <Typography variant="body2" my={1} align="center">
            or
          </Typography>
          <SendButton variant="text" onClick={handleSms}>
            Send me a code by SMS
          </SendButton>
        </Box>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default VerificationSelect;

const SendButton = styled(Button)({
  background: "#fff",
  width: "100%",
  height: 101,
  fontSize: 18,
  paddingLeft: 16,
  paddingRight: 16,
  textTransform: "none",
});
