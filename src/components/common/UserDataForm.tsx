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

const UserDataForm = () => {
  const { goPrevStep, goNextStep } = useOnboarding();

  const handleSubmit = () => {
    goNextStep();
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={15.25}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goPrevStep}>
            <ArrowBack fontSize="small" />
          </IconButton>
          <Typography
            variant="body2"
            fontWeight="bold"
            flexGrow={1}
            textAlign="center"
          >
            Create your ideal profile
          </Typography>
        </Box>
        <Box width="100%">
          <LinearProgress
            variant="determinate"
            value={40}
            sx={{
              height: 8,
              borderRadius: 5,
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
              },
            }}
          />
        </Box>
      </FormSection>

      <FormSection alignItems="stretch" mb={19} maxWidth={400}>
        <Typography variant="h6" fontSize={18} mb={2}>
          Please complete your personal profile
        </Typography>
        <Typography variant="body2">All fields are required</Typography>

        <Box mt={6}>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="First Name" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="Last Name" />
          </FormControl>

          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="E-mail" type="email" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="First Name" type="number" />
          </FormControl>
        </Box>
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
    </OnBoardingFormContainer>
  );
};

export default UserDataForm;

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  borderRadius: 8,
  textTransform: "capitalize",
});
