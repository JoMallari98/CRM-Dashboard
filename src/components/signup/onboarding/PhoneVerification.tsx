import React, { useState } from 'react';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { FormSection } from 'src/components/common/FormSection';
import { ArrowBack, PhoneDisabled } from '@mui/icons-material';
import { Link, FormControl, Button, IconButton, styled, Typography, Box, TextField } from '@mui/material';
import SixDigitVerification from 'src/components/common/SixDigitVerification';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { InputBase, InputBaseProps, Paper } from '@mui/material';
import CustomTextField from 'src/components/common/CustomTextField';
import { PhoneDataSchema, PhoneDataValues } from 'src/schema/phoneChange-schema';
import Image from 'next/image';


const PhoneVerification = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false)
  const [changePhone, setChangePhone] = useState(false)
  const [disableBtn, setDisableBtn] = useState(true);



  const resendCode = () => {
    toast.success("Code has been sent to your phone number.")
    // setOpen(true);
  };

  const handleSubmit = () => {
    // goNextStep();
    setLoader(true)
    router.push('/signup/user-type');
  };

  const changePhoneHandle = () => {
      setChangePhone(!changePhone)
  }

  const changePhoneNumber = () => {
      setChangePhone(!changePhone)
  }
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={4}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={() => router.back()}>
            <ArrowBack fontSize="small" />
          </IconButton>
        </Box>
      </FormSection>

      {!changePhone && 
      <FormSection alignItems="stretch" mb={7}>
        <Typography variant="h5" mb={6} fontWeight="bold">
          Verify Phone Number
        </Typography>
        <Typography variant="body2" align="center" width="85%">
          Please enter your verification code we sent to +1XXX-XXX-XXXX
        </Typography>
        <Box mt={7} mb={7} display="flex" justifyContent="center">
        <SixDigitVerification setDisableBtn={setDisableBtn} />
        </Box>

        <Typography variant="body2" component="span">
          Did not receive a code?{' '}
          <Link
            component="a"
            variant="body2"
            fontWeight="bold"
            onClick={resendCode}
            underline="hover"
            color="#009EF8"
            href="#"
          >
            {`Resend code`}
          </Link>
          &nbsp; or &nbsp;
          <Link
            component="a"
            variant="body2"
            fontWeight="bold"
            onClick={changePhoneNumber}
            underline="hover"
            color="#009EF8"
            href="#"
          >
            {`Change phone number`}
          </Link>
        </Typography>
        <ContinueButton variant="contained" disabled={disableBtn} color="primary" onClick={() => handleSubmit()}>
          Submit
          {loader && <Image src="/loader.gif" width="20px" height="20px" alt="loader" />}
        </ContinueButton>
      </FormSection>
      }

      {changePhone && 
      <FormSection alignItems="stretch" mb={7}>
      <Typography variant="h5" mb={6} fontWeight="bold">
        Change Phone Number
      </Typography>
      <Typography variant="body2" align="center" width="85%">
        Please enter the new phone number below
      </Typography>
      <Box mt={7} mb={7} display="flex" justifyContent="center">
      <Formik
      validationSchema={PhoneDataSchema}
      initialValues={{
        mobileNumber: '',
      }}
      onSubmit={changePhoneHandle}
    >
      <Box component={Form}>
      <FormControl fullWidth sx={{ my: 2 }}>
        <CustomTextField
                id="cellNumber"
                label="Cell/Office phone"
                type="tel"
                name="mobileNumber"
          />
        </FormControl>
      </Box>
      </Formik>
      </Box>
        <ContinueButton variant="contained" color="primary" type="submit" onClick={() => changePhoneHandle()}>
              Change Number
          {loader && <Image src="/loader.gif" width="20px" height="20px" alt="loader" />}
        </ContinueButton>
    </FormSection>
      }
    </OnBoardingFormContainer>
  );
};

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  marginTop: 80,
  borderRadius: 8,
  textTransform: 'capitalize',
  color: '#fff',
});

export default PhoneVerification;

const StyledInput = styled(InputBase)(({ theme }) => ({
  fontSize: 40,
  backgroundColor: '#F8FCFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  },
}));
