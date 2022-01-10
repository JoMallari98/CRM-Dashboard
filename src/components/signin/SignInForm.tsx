import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Typography,
  FormControl,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import OnBoardingFormContainer from "src/components/common/OnBoardingFormContainer";
import { signIn, signOut } from "next-auth/react";
import { Formik, Form } from "formik";
import { SignInValues, signInSchema } from "src/schema/signin-schema";
import TextField from "src/components/common/formik/TextField";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const PasswordButton = (
    <IconButton onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  );

  const handleSubmit = (values: SignInValues) => {
    //api call for signin email and password
    console.log("handleSubmit", values);
  };

  return (
    <Formik
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <OnBoardingFormContainer component={Form} CloseIcon={true}>
        <Typography variant="h5" fontWeight="bold">
          Sign In
        </Typography>

        <StyledBox>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              variant="outlined"
              label="E-mail"
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
              type={showPassword ? "text" : "password"}
              label="Password"
              size="small"
              InputProps={{
                endAdornment: PasswordButton,
              }}
            />
            <Link href="/forgot-password" passHref>
              <Typography
                ml={2}
                mt={1}
                component="a"
                fontWeight="bold"
                variant="body2"
                color="textSecondary"
                style={{ color: "#009EF8" }}
              >
                Forgot Password?
              </Typography>
            </Link>
          </FormControl>
        </StyledBox>
        <Typography variant="body2" sx={{ my: 3 }}>
          {" "}
          or{" "}
        </Typography>
        <StyledBox display="flex" flexDirection="column" alignItems="stretch">
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<LinkedInIcon />}
            onClick={() => signIn("linkedin", { callbackUrl: "/dashboard" })}
          >
            Continue with LinkedIn
          </ContinueWithButton>
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<FacebookIcon />}
            onClick={() => signIn("facebook", { callbackUrl: "/dashboard" })}
          >
            Continue with Facebook
          </ContinueWithButton>
          <ContinueWithButton
            variant="contained"
            color="secondary"
            startIcon={<GoogleIcon />}
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Continue with Google
          </ContinueWithButton>
        </StyledBox>

        <SignInButton
          variant="contained"
          sx={{ px: 8, py: 1, my: 2 }}
          data-testid="sign-in-button"
          type="submit"
        >
          Sign In
        </SignInButton>
        <Typography variant="body2">
          {`Don't have an account? `}
          <Link href="/signup" passHref>
            <Typography
              fontWeight="bold"
              component="a"
              style={{ color: "#009EF8" }}
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
  justifyContent: "flex-start",
  [theme.breakpoints.up("xs")]: {
    paddingLeft: 40,
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: 80,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 150,
  },
  textTransform: "capitalize",
  boxShadow: "unset",
}));

const SignInButton = styled(Button)({
  textTransform: "capitalize",
  color: "#fff",
});

const StyledBox = styled(Box)(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },
}));
