import { ArrowBack } from '@mui/icons-material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import {
  Button,
  FormControl,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import CustomTextField from 'src/components/common/CustomTextField';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { useRepOnboarding } from 'src/context/repOnBoardingContext';
import { Formik, Form } from 'formik';
import { repDataSchema, RepDataValues } from 'src/schema/repdata-schema';
const UserDataForm = () => {
  const { goPrevStep, goNextStep } = useRepOnboarding();
  const router = useRouter();

  const handleSubmit = (values: RepDataValues) => {
    goNextStep();
  };

  const onPrevStep = () => router.back();
  return (
    <Formik
      validationSchema={repDataSchema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        riaName: '',
        mobileNumber: '',
        crdNumber: '',
      }}
      onSubmit={handleSubmit}
    >
      <OnBoardingFormContainer component={Form} pt={0} justifyContent="flex-start">
        <FormSection mt={6} mb={2}>
          <Box display="flex" alignItems="center" width="100%" mb={3}>
            <IconButton onClick={onPrevStep}>
              <ArrowBack fontSize="small" />
            </IconButton>
            <Typography variant="body2" fontWeight="bold" flexGrow={1} textAlign="center">
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

        <FormSection alignItems="stretch" mb={1} maxWidth={400}>
          <Typography variant="h6" fontSize={18} mb={2} align="center">
            Fill in your user data to register a profile
          </Typography>

          <Box>
            <FormControl fullWidth sx={{ my: 2 }}>
              <CustomTextField id="firstName" name="firstName" label="First Name" />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
              <CustomTextField id="lastName" name="lastName" label="Last Name" />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
              <CustomTextField id="riaName" name="riaName" label="RIA Name" />
            </FormControl>

            <FormControl fullWidth sx={{ my: 2 }}>
              <CustomTextField id="email" name="email" label="E-mail" type="email" />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
              <CustomTextField
                id="cellNumber"
                label="Cell/Office phone"
                type="tel"
                name="mobileNumber"
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 2 }}>
              <CustomTextField id="crdNumber" name="crdNumber" label="CRD Number" type="text" />
            </FormControl>
          </Box>
        </FormSection>
        <FormSection>
          <Stack direction="row" spacing={2}>
            <ContinueButton variant="outlined" onClick={onPrevStep} startIcon={<ArrowBack />}>
              Previous Step
            </ContinueButton>
            <ContinueButton
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<ArrowForward />}
              style={{ color: '#fff' }}
            >
              Next Step
            </ContinueButton>
          </Stack>
        </FormSection>
      </OnBoardingFormContainer>
    </Formik>
  );
};

export default UserDataForm;

const ContinueButton = styled(Button)({
  paddingLeft: 40,
  paddingRight: 40,
  height: 48,
  borderRadius: 8,
  textTransform: 'capitalize',
});
