import { ArrowBack } from "@mui/icons-material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import {
  Button,
  FormControl,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "src/components/common/CustomTextField";
import { FormSection } from "src/components/common/FormSection";
import OnBoardingFormContainer from "src/components/common/OnBoardingFormContainer";
import { useRepOnboarding } from "src/context/repOnBoardingContext";

const UserDataForm = () => {
  const { goPrevStep, goNextStep } = useRepOnboarding();

  const handleSubmit = () => {
    //call api before going next screen
    goNextStep();
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={13}>
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
            value={20}
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

      <FormSection alignItems="stretch" mb={7} maxWidth={400}>
        <Typography variant="h6" fontSize={18} mb={2} align="center">
          Fill in your user data to register a profile
        </Typography>

        <Box mt={6}>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="First Name" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="Last Name" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="RIA Name" />
          </FormControl>

          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="E-mail" type="email" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="Cell/Office phone" type="tel" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <CustomTextField label="CRD Number" type="text" />
          </FormControl>
        </Box>
      </FormSection>
      <FormSection>
        <Stack direction="row" spacing={2}>
          <ContinueButton
            variant="contained"
            color="secondary"
            onClick={goPrevStep}
            startIcon={<ArrowBack />}
          >
            Previous Step
          </ContinueButton>
          <ContinueButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            endIcon={<ArrowForward />}
          >
            Next Step
          </ContinueButton>
        </Stack>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default UserDataForm;

const ContinueButton = styled(Button)({
  paddingLeft: 40,
  paddingRight: 40,
  height: 48,
  borderRadius: 8,
  textTransform: "capitalize",
});
