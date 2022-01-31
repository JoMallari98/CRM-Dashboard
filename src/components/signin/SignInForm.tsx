import { VisibilityOutlined } from '@mui/icons-material';
import {
  Box,
  Typography,
  FormControl,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { signIn, signOut } from 'next-auth/react';
import { Formik, Form } from 'formik';
import { SignInValues, signInSchema } from 'src/schema/signin-schema';
import TextField from 'src/components/common/formik/TextField';
import { useRouter } from 'next/router';

const SignInForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
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
    router.push('/dashboard');
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
      <OnBoardingFormContainer component={Form} CloseIcon={true}>
        <Typography variant="h4" fontWeight={600} fontSize="24px" lineHeight="29.26px">
          Sign In
        </Typography>

        <StyledBox>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              variant="outlined"
              label="Enter your email"
              size="small"
              id="email"
              name="email"
              type="text"
            />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              variant="outlined"
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Enter your password"
              size="small"
              InputProps={{
                endAdornment: PasswordButton,
              }}
            />
            <Link href="/reset-password" passHref>
              <Typography
                ml={2}
                mt={1}
                component="a"
                fontWeight="600"
                fontSize="14px"
                fontStyle="normal"
                lineHeight="21px"
                variant="body2"
                color="textSecondary"
                style={{ color: '#009EF8' }}
              >
                Forgot password?
              </Typography>
            </Link>
          </FormControl>
        </StyledBox>
        <Typography variant="body2" sx={{ mt: 1, mb: 3 }} fontWeight={500}>
          {' '}
          or{' '}
        </Typography>
        <StyledBox display="flex" flexDirection="column" alignItems="stretch">
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<LinkedInIcon />}
            onClick={() => signIn('linkedin', { callbackUrl: '/dashboard' })}
          >
            Continue with LinkedIn
          </ContinueWithButton>
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<FacebookIcon />}
            onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
          >
            Continue with Facebook
          </ContinueWithButton>
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<GoogleIcon />}
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          >
            Continue with Google
          </ContinueWithButton>
        </StyledBox>

        <SignInButton variant="contained" sx={{ my: 2 }} data-testid="sign-in-button" type="submit">
          Sign In
          {loader && (
            <Image data-testid="loader" src="/loader.gif" width="20px" height="20px" alt="loader" />
          )}
        </SignInButton>
        <Typography variant="body2" fontWeight={800}>
          {`Don't have an account? `}
          <Link href="/signup" passHref>
            <Typography
              fontWeight="bold"
              fontSize="14px"
              component="a"
              style={{ color: '#009EF8' }}
            >
              Sign Up
            </Typography>
          </Link>
        </Typography>
      </OnBoardingFormContainer>
    </Formik>
  );
};

export default SignInForm;

const ContinueWithButton = styled(Button)(({ theme }) => ({
  marginBottom: 16,
  borderRadius: 8,
  paddingTop: 8,
  paddingBottom: 8,
  justifyContent: 'flex-start',
  [theme.breakpoints.up('xs')]: {
    paddingLeft: 90,
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
