import { ArrowBack, Close } from "@mui/icons-material";
import { Button, IconButton, Link, Snackbar, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { useOnboarding } from "src/context/userOnBoardingContext";
import CustomNumberInput from "../OnBoarding/common/CustomNumberInput";
import { FormSection } from "../OnBoarding/common/FormSection";
import OnBoardingFormContainer from "../OnBoarding/common/OnBoardingFormContainer";

const VerificationForm = () => {
  const { goPrevStep, goNextStep } = useOnboarding();
  const [open, setOpen] = React.useState(false);
  const handleSubmit = () => {
    goNextStep();
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <OnBoardingFormContainer
      pt={0}
      justifyContent="flex-start"
      justifySelf="stretch"
      width="100%"
    >
      <FormSection mt={6} mb={13}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goPrevStep}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" mb={16.5}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verification
        </Typography>
        <Typography variant="body2" align="center" width="100%">
          Enter your verification code
        </Typography>
        <Box mt={18.5} mb={7} display="flex" justifyContent="center">
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
          <CustomNumberInput />
        </Box>

        <Typography variant="body2" component="span">
          Did not recieve a code?{" "}
          <Link
            component="a"
            variant="body2"
            fontWeight="bold"
            onClick={handleClick}
            underline="hover"
            href="#"
          >
            {`Resend code`}
          </Link>
        </Typography>
      </FormSection>
      <FormSection>
        <ContinueButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Continue
        </ContinueButton>
      </FormSection>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Another code has been sent"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </OnBoardingFormContainer>
  );
};

export default VerificationForm;

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  borderRadius: 8,
  textTransform: "capitalize",
});
