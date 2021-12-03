import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  styled,
  Typography,
  FormControl,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useOnboarding } from "src/context/userOnBoardingContext";
import CustomTextField from "../Investor/common/CustomTextField";
import { FormSection } from "../Investor/common/FormSection";
import OnBoardingFormContainer from "../Investor/common/OnBoardingFormContainer";

const IdentityConfirmationForm = () => {
  const { goPrevStep, goToStep } = useOnboarding();
  const router = useRouter();

  const continueRegistration = () => {
    // if incorrect. go to failed registration
    router.push("/investor/questions");
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

      <FormSection alignItems="stretch" maxWidth={400} mb={15}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Confirm your identity
        </Typography>
        <Typography variant="body2" mb={10} align="center">
          Please, write your CRD Number to confirm your identity
        </Typography>
        <Box mt={6} width="90%">
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="CRD Number" />
          </FormControl>
        </Box>
      </FormSection>
      <FormSection alignItems="stretch" maxWidth={400}>
        <ConfirmationButton
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={continueRegistration}
        >
          Confirm
        </ConfirmationButton>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default IdentityConfirmationForm;

const ConfirmationButton = styled(Button)({
  width: 230,
  maxWidth: 230,
  height: 48,
  borderRadius: 8,
  textTransform: "none",
});
