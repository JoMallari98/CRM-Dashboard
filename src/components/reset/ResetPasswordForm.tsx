import { ArrowBack } from '@mui/icons-material';
import {
  Typography,
  IconButton,
  styled,
  Button,
  FormControl,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import { FormSection } from 'src/components/common/FormSection';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { resetPasswordSchema, ResetPasswordValues } from 'src/schema/reset-schema';
import TextField from 'src/components/common/formik/TextField';
import Image from 'next/image'

const ResetPasswordFormScreen = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));

  const goToSignIn = () => {
    router.push('/signin');
  };

  const handleSubmit = (values: ResetPasswordValues) => {
    //api call for reset password
    setLoader(true)
    // after API response redirect to this page...
    setTimeout(() => {
      router.push('/reset-password/success');      
    }, 3000);
  };

  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={3}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goToSignIn}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" width="100%" mt={5} mb={3}>
          <Typography variant="h4" fontWeight={600} fontSize={24} flexGrow={1} textAlign="center">
            Forgot your password?
          </Typography>
        </Box>
        <Box width={mdUp ? '70%' : '100%'}>
          <Typography mt={3} variant="body2" fontWeight="normal" flexGrow={1} textAlign="center">
            Enter your email to get the instructions about how to reset your password
          </Typography>

          <Formik
            validationSchema={resetPasswordSchema}
            onSubmit={handleSubmit}
            initialValues={{
              email: '',
            }}
          >
            <StyledBox
              mt={10}
              alignItems="center"
              display="flex"
              flexDirection="column"
              component={Form}
            >
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  label="Write your email"
                  size="small"
                  id="email"
                  name="email"
                  type="text"
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: 2,
                    },
                  }}
                />
              </FormControl>

              <ConfirmationButton
                variant="contained"
                color="primary"
                sx={{ px: 2, py: 1, my: 2, mt: 20 }}
                type="submit"
              >
                Reset password {'  '}
                {loader && <Image data-testid="loader" src="/loader.gif" width="20px" height="20px" alt="loader" />}
              </ConfirmationButton>
            </StyledBox>
          </Formik>
        </Box>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

const ConfirmationButton = styled(Button)(({ theme }) => ({
  width: 210,
  maxWidth: 210,
  height: 48,
  borderRadius: 8,
  marginTop: '10px',
  textTransform: 'none',
  color: '#ffff',
  [theme.breakpoints.down('sm')]: {
    width: 160,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export default ResetPasswordFormScreen;
