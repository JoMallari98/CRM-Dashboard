import { VisibilityOutlined } from '@mui/icons-material';
import { Box, Typography, FormControl, Button, IconButton, Avatar } from '@mui/material';
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
  const [loader, setLoader] = useState(false);
  const PasswordButton = (
    <IconButton onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? (
        <VisibilityOutlined />
      ) : (
        <Avatar
          src="/VisibilityOff.png"
          data-testid="visibility-off"
          sx={{ height: '21px', width: '21px', objectFit: 'cover' }}
        ></Avatar>
      )}
    </IconButton>
  );

  const handleSubmit = (values: SignInValues) => {
    //api call for signin email and password
    setLoader(true);
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
        <Typography variant="h4" fontSize="24px" fontWeight={600} lineHeight="29.26px">
          Sign Up
        </Typography>

        <StyledBox>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField variant="outlined" label="Enter your email" size="small" id="email" name="email" />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              variant="outlined"
              data-testid="Password"
              type={showPassword ? 'text' : 'password'}
              label="Enter your password"
              id="password"
              name="password"
              size="small"
              InputProps={{
                endAdornment: PasswordButton,
              }}
            />
          </FormControl>
        </StyledBox>
        <Typography variant="body2" my={2} fontWeight={500}>
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
          sx={{ my: 2 }}
          data-testid="sign-up-button"
          type="submit"
        >
          Sign Up
          {loader && (
            <Image data-testid="loader" src="/loader.gif" width="20px" height="20px" alt="loader" />
          )}
        </SignInButton>
        <Typography variant="body2" fontWeight={800}>
          {`Already have an account? `}
          <Link href="/signin" passHref>
            <Typography
              fontWeight="bold"
              fontSize="14px"
              component="a"
              style={{ color: '#009EF8' }}
            >
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
    paddingLeft: 80,
  },
  textTransform: 'capitalize',
  boxShadow: 'unset',
  fontWeight: 'bold',
}));

const SignInButton = styled(Button)({
  textTransform: 'capitalize',
  width: '153px',
  height: '48px',
  padding: '14px, 48px, 13px, 48px',
  fontSize: '14px',
  color: '#ffff',
});

const StyledBox = styled(Box)(({ theme }) => ({
  width: '380px !important',
  [theme.breakpoints.up('sm')]: {
    width: '70%',
  },
}));
