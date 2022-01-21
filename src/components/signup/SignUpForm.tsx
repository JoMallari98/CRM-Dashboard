import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Typography, FormControl, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { Formik, Form } from 'formik';
import { SignInValues, signInSchema } from 'src/schema/signin-schema';
import TextField from 'src/components/common/formik/TextField';
import Image from 'next/image';

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false)
  const PasswordButton = (
    <IconButton onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  );

  const handleSubmit = (values: SignInValues) => {
    //api call for signin email and password
    setLoader(true)
    console.log('handleSubmit', values);
    router.push('/signup/user-data');
  };
  return (
    <Formik
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      <OnBoardingFormContainer component={Form} CloseIcon>
        <Typography variant="h5" fontWeight="bold">
          Sign Up
        </Typography>

        <StyledBox>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField variant="outlined" label="E-mail" size="small" id="email" name="email" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              id="password"
              name="password"
              size="small"
              InputProps={{
                endAdornment: PasswordButton,
              }}
            />
          </FormControl>
        </StyledBox>
        <Typography variant="body2" my={2}>
          {' '}
          or{' '}
        </Typography>
        <StyledBox display="flex" flexDirection="column" alignItems="stretch">
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<LinkedInIcon />}
            onClick={() => signIn('linkedin', { callbackUrl: '/signup/user-data' })}
          >
            Continue with LinkedIn
          </ContinueWithButton>
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<FacebookIcon />}
            onClick={() => signIn('facebook', { callbackUrl: '/signup/user-data' })}
          >
            Continue with Facebook
          </ContinueWithButton>
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<GoogleIcon />}
            onClick={() => signIn('google', { callbackUrl: '/signup/user-data' })}
          >
            Continue with Google
          </ContinueWithButton>
        </StyledBox>

        <SignInButton
          variant="contained"
          color="primary"
          sx={{ px: 8, py: 1, my: 2 }}
          data-testid="sign-up-button"
          type="submit"
        >
          Sign Up
          {loader && <Image src="/loader.gif" width="20px" height="20px" alt="loader" />}
        </SignInButton>
        <Typography variant="body2">
          {`Already have an account? `}
          <Link href="/signin" passHref>
            <Typography fontWeight="bold" component="a" style={{ color: '#009EF8' }}>
              Sign In
            </Typography>
          </Link>
        </Typography>
      </OnBoardingFormContainer>
    </Formik>
  );
};

export default SignUpForm;

const ContinueWithButton = styled(Button)(({ theme }) => ({
  marginBottom: 16,
  borderRadius: 8,
  paddingTop: 8,
  paddingBottom: 8,
  justifyContent: 'flex-start',
  [theme.breakpoints.up('xs')]: {
    paddingLeft: 40,
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: 80,
  },

  [theme.breakpoints.up('lg')]: {
    paddingLeft: 150,
  },
  textTransform: 'capitalize',
  boxShadow: 'unset',
}));

const SignInButton = styled(Button)({
  textTransform: 'capitalize',
  color: '#ffff',
});

const StyledBox = styled(Box)(({ theme }) => ({
  width: '90%',
  [theme.breakpoints.up('sm')]: {
    width: '70%',
  },
}));
