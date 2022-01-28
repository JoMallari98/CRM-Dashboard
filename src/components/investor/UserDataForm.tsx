import { ArrowBack } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { useOnboarding } from 'src/context/userOnBoardingContext';
import CustomTextField from 'src/components/common/CustomTextFieldForSignUpForm';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';

import { userDataSchema, UserDataValues } from 'src/schema/userdata-schema';

const UserDataForm = () => {
  // const { goNextStep } = useOnboarding();
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [username, setUsername] = useState('');

  const onPrevStep = () => router.back();

  const handleSubmit = (values: UserDataValues) => {
    //api call for signin email and password
    setLoader(true);
    localStorage.setItem("email", values.email);
    localStorage.setItem("mobile-number", values.mobileNumber)
    setTimeout(() => {
      router.push('/signup/onboarding/email-verification');      
    }, 2000);
  };

  return (
    <Formik
      validationSchema={userDataSchema}
      onSubmit={handleSubmit}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
      }}
    >
      <OnBoardingFormContainer component={Form} pt={0} justifyContent="flex-start">
        <FormSection mt={6} mb={2}>
          <Box display="flex" alignItems="center" width="100%" mb={3}>
            <IconButton onClick={onPrevStep}>
              <ArrowBack data-testid="back-btn" fontSize="small" />
            </IconButton>
            <Typography variant="body2" fontWeight={500} fontSize="16px" lineHeight="24px" flexGrow={1} textAlign="center">
              Create your ideal profile
            </Typography>
          </Box>
          <Box width="100%">
            <LinearProgress
              variant="determinate"
              data-testid="progress-bar"
              value={80}
              sx={{
                height: 8,
                borderRadius: 5,
                [`& .${linearProgressClasses.bar}`]: {
                  borderRadius: 5,
                  backgroundColor: '#60C130',
                },
              }}
              style={{ background: '#dbffc9' }}
            />
          </Box>
        </FormSection>

        <FormSection alignItems="stretch" mb={2} maxWidth={400}>
          <Typography variant="h6" fontSize={18} mb={2} align="center">
            Please complete your personal profile
          </Typography>
          <Typography variant="body2">All fields are required</Typography>

          <Box mt={3} width="380px" >
            <FormControl fullWidth sx={{ my: 1 }}>
              <CustomTextField
                id="userName"
                name="UserName"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <CustomTextField
                label="First Name"
                id="firstName"
                name="firstName"
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <CustomTextField
                label="Last Name"
                id="lastName"
                name="lastName"
              />
            </FormControl>

            <FormControl fullWidth sx={{ my: 1 }}>
              <CustomTextField
                label="E-mail"
                type="email"
                id="email"
                name="email"
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
              <CustomTextField
                label="Mobile Number"
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
              />
            </FormControl>
          </Box>
        </FormSection>
        <FormSection>
          <ContinueButton variant="contained" type="submit">
            Continue
            {loader && <Image data-testid="loader" src="/loader.gif" width="20px" height="20px" alt="loader" />}
          </ContinueButton>
        </FormSection>
      </OnBoardingFormContainer>
    </Formik>
  );
};

export default UserDataForm;

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  borderRadius: 8,
  textTransform: 'capitalize',
  color: '#fff',
});
