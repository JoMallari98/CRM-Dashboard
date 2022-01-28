import { ArrowBack, RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import {
  Button,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
  Stack,
  RadioGroup,
  CircularProgress,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { RepOnBoardingStep, useRepOnboarding } from 'src/context/repOnBoardingContext';
import delay from 'src/utils/delay';
import RepFormControlLabel from './common/RepFormControlLabel';

enum RepTypes {
  Advisor,
  AdvisorActingInvestor,
}

const RepTypeForm = () => {
  const { goPrevStep, goNextStep, goToStep } = useRepOnboarding();
  const [repType, setRepType] = useState(RepTypes.Advisor);
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async () => {
    setSubmitting(true);
    await delay(1500); //sample call to api
    const success = Math.random() > 0.5; //random result
    if (success) {
      goNextStep();
    } else {
      goToStep(RepOnBoardingStep.NotFoundInDatabase);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepType(Number(event.target.value));
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={13}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goPrevStep}>
            <ArrowBack fontSize="small" />
          </IconButton>
          <Typography variant="body2" fontWeight="bold" flexGrow={1} textAlign="center">
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

      {!submitting && (
        <FormSection alignItems="stretch" mb={7} maxWidth={400}>
          <Typography variant="h6" fontSize={18} mb={2} align="center">
            We found your data in SEC Database. Do you want to continue registrer as an advisor
            acting as an investor, or as an advisor?
          </Typography>

          <Stack mt={6} direction="column" spacing={3}>
            <RadioGroup name="rep-user-type-radio" value={repType} onChange={handleRadioChange}>
              <RepFormControlLabel value={RepTypes.Advisor} label="As an Advisor" />
              <RepFormControlLabel
                value={RepTypes.AdvisorActingInvestor}
                label="As an Advisor acting as an Investor"
              />
            </RadioGroup>
          </Stack>
        </FormSection>
      )}
      {submitting && <CircularProgress sx={{ my: 30 }} />}
      <FormSection>
        <Stack direction="row" spacing={2}>
          <ContinueButton variant="outlined" onClick={goPrevStep} startIcon={<ArrowBack />}>
            Previous Step
          </ContinueButton>
          <ContinueButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            endIcon={<ArrowForward />}
            style={{ color: '#fff' }}
          >
            Next Step
          </ContinueButton>
        </Stack>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default RepTypeForm;

const RepTypeButton = styled(Button)({
  justifyContent: 'flex-start',
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
});

const ContinueButton = styled(Button)({
  paddingLeft: 40,
  paddingRight: 40,
  height: 48,
  borderRadius: 8,
  textTransform: 'capitalize',
});
