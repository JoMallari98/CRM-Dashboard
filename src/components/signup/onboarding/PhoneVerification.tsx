import React, { useState, Fragment } from 'react';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { FormSection } from 'src/components/common/FormSection';
import { ArrowBack, PhoneDisabled } from '@mui/icons-material';
import { Link, Button, IconButton, styled, Typography, Box } from '@mui/material';
import SixDigitVerification from 'src/components/common/SixDigitVerification';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { InputBase } from '@mui/material';
import Popup from 'src/components/common/Popup';
import Image from 'next/image';

const PhoneVerification = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const [code, setCode] = useState<any>([]);
  const [popUp, setPopUp] = useState(false);
  const [resendCode, setResendCode] = useState(false);

  const resendCodehandle = () => {
    setResendCode(true);
    setPopUp(true);
  };

  const handleSubmit = () => {
    setLoader(true);
    let isValid = true;

    // setTimeout(() => {
      for (let i = 0; i < code.length; i++) {
        if (code[i].current.value !== (i + 1).toString()) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        router.push('/signup/user-type');
      } else {
        toast.error('Invalid code! Please try with valid code.');
        setDisableBtn(true);
        for (let i = 0; i < code.length; i++) {
          if (i === 0) {
            code[i].current.focus();
          }
          code[i].current.value = null;
        }
      }
      // setLoader(false);
    // }, 3000);
  };

  const changePhoneNumber = () => {
    setResendCode(false);
    setPopUp(true);
  };
  return (
    <Fragment>
      {!resendCode ? (
        <Popup
          popUp={popUp}
          resendCode={resendCode}
          Mobile={true}
          setPopUp={setPopUp}
          title="Change phone number"
          description="Please enter another phone number to confirm your identity"
          buttonText="Confirm"
        />
      ) : (
        <Popup
          Mobile={true}
          resendCode={resendCode}
          popUp={popUp}
          setPopUp={setPopUp}
          title="Resend a code to my mobile phone"
          description="Please confirm your mobile phone number and request a new code"
          buttonText="Send code"
        />
      )}
      <OnBoardingFormContainer pt={0} justifyContent="flex-start">
        <FormSection mt={6} mb={4}>
          <Box display="flex" alignItems="center" width="100%" mb={3}>
            <IconButton data-testid="back-btn" onClick={() => router.back()}>
              <ArrowBack fontSize="small" />
            </IconButton>
          </Box>
        </FormSection>

        <FormSection alignItems="stretch" mb={7}>
          <Typography variant="h5" mb={6} fontWeight="bold">
            Verify Phone Number
          </Typography>
          <Typography variant="body2" align="center" width="85%">
            Please enter the verification code we sent to +1XXX-XXX-XXXX
          </Typography>
          <Box mt={7} mb={7} display="flex" flexDirection="column" justifyContent="center">
            <SixDigitVerification setDisableBtn={setDisableBtn} loader={loader} setCode={setCode} />
          </Box>

          <Typography variant="body2" data-testis="receive-code" component="span">
            Didn't receive the code?{' '}
            <Link
              component="a"
              variant="body2"
              data-testid="resend-code-btn"
              fontWeight="bold"
              onClick={resendCodehandle}
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
              data-testid="change-phone-btn"
              color="#009EF8"
              href="#"
            >
              {`Change phone number`}
            </Link>
          </Typography>
          <ContinueButton
            variant="contained"
            disabled={disableBtn}
            color="primary"
            onClick={() => handleSubmit()}
          >
            Submit
            {loader && (
              <Image
                data-testid="loader"
                src="/assets/gifs/loader.gif"
                width="20px"
                height="20px"
                alt="loader"
              />
            )}
          </ContinueButton>
        </FormSection>

        {/* {changePhone && (
        <FormSection alignItems="stretch" mb={7} maxWidth={400}>
          <Typography variant="h5" mb={6} fontWeight="bold">
            Change Phone Number
          </Typography>
          <Typography variant="body2" align="center" width="85%">
            Please enter the new phone number below
          </Typography>
          <Formik
            validationSchema={PhoneDataSchema}
            initialValues={{
              mobileNumber: '',
            }}
            onSubmit={changePhoneHandle}
          >
            <Box
              component={Form}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Box mt={7} mb={7}>
                <Box width={400}>
                  <FormControl fullWidth sx={{ my: 2 }}>
                    <CustomTextField
                      id="cellNumber"
                      label="Mobile Number"
                      type="tel"
                      name="mobileNumber"
                    />
                  </FormControl>
                </Box>
              </Box>
              <ContinueButton
                variant="contained"
                data-testid="change-number"
                color="primary"
                type="submit"
              >
                Change Number
                {loader && <Image data-testid="loader" src="/images/assets/loader.gif" width="20px" height="20px" alt="loader" />}
              </ContinueButton>
            </Box>
          </Formik>
        </FormSection>
      )} */}
      </OnBoardingFormContainer>
    </Fragment>
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
  maxWidth: '235px',
});

export default PhoneVerification;

const StyledInput = styled(InputBase)(({ theme }) => ({
  fontSize: 40,
  backgroundColor: '#F8FCFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  },
}));
