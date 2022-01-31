import React, { useState, Fragment } from 'react';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { FormSection } from 'src/components/common/FormSection';
import { ArrowBack } from '@mui/icons-material';
import { Link, Button, IconButton, styled, Typography, Box } from '@mui/material';
import SixDigitVerification from 'src/components/common/SixDigitVerification';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Popup from 'src/components/common/Popup';

type Props = {
  setWrongCode?: any;
  wrongCode?: Boolean;
};

const EmailVerification = (props: Props) => {
  const [disableBtn, setDisableBtn] = useState(true);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [code, setCode] = useState<any>([]);
  const [popUp, setPopUp] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

  const resendEmail = () => {
    setPopUp(true);
  };

  const tryAgainHandler = () => {
    if (props.wrongCode) {
      setCodeSent(true);
      props.setWrongCode(false);
    }
  };

  const handleSubmit = () => {
    // goNextStep();
    setLoader(true);
    let isValid = true;

    setTimeout(() => {
      for (let i = 0; i < code.length; i++) {
        if (code[i].current.value !== (i + 1).toString()) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        router.push('/signup/onboarding/phone-verification');
      } else {
        setDisableBtn(true);
        for (let i = 0; i < code.length; i++) {
          if (i === 0) {
            code[i]?.current?.focus();
          }
          code[i].current.value = null;
        }
        if (codeSent == true) {
          setCodeSent(false);
        }
        props.setWrongCode(true);
      }
      setLoader(false);
    }, 5000);
  };

  return (
    <Fragment>
      <Popup
        popUp={popUp}
        setWrongCode={props.setWrongCode}
        wrongCode={props.wrongCode}
        setPopUp={setPopUp}
        title="Resend a code by email"
        description="Please confirm your email address"
        buttonText="Send code"
        setCodeSent={setCodeSent}
      />
      {!props.wrongCode ? (
        <OnBoardingFormContainer pt={0} justifyContent="flex-start">
          <FormSection mt={6} mb={0}>
            <Box display="flex" alignItems="center" width="100%" mb={3}>
              <IconButton data-testid="back-btn" onClick={() => router.back()}>
                <ArrowBack data-testid="back-icon" fontSize="small" />
              </IconButton>
            </Box>
          </FormSection>

          <FormSection alignItems="stretch" mb={7}>
            <Typography variant="h4" fontSize="24px" mb={6} fontWeight={600} lineHeight="29.26px">
              {codeSent ? 'Another try 😅' : 'Verify Email'}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              width="86%"
              data-testid="email-description"
              dangerouslySetInnerHTML={{
                __html: codeSent
                  ? `We sent a new email with a verification code to <br /> example@email.com <br /> To continue please check your email and enter your code.`
                  : 'We sent an email with a verification code to example@email.com To continue please check your email and enter your code ',
              }}
            />
            {codeSent && (
              <Typography
                variant="body2"
                align="center"
                width="89%"
                fontWeight={500}
                mt={1}
                fontSize="14px"
              >
                If you can’t find our message, please check your spam box.
              </Typography>
            )}
            <Box mt={13} mb={3} display="flex" flexDirection="column" justifyContent="center">
              <SixDigitVerification
                setDisableBtn={setDisableBtn}
                loader={loader}
                setCode={setCode}
              />
            </Box>

            <Typography variant="body2" component="span">
              Didn't receive the email?{' '}
              <Link
                component="a"
                variant="body2"
                fontWeight="bold"
                data-testid="resend-code-btn"
                onClick={resendEmail}
                underline="hover"
                color="#009EF8"
                href="#"
              >
                {codeSent ? `Change email address` : `Resend email`}
              </Link>
            </Typography>
          </FormSection>
          <FormSection>
            <ContinueButton
              variant="contained"
              color="primary"
              disabled={disableBtn}
              onClick={() => handleSubmit()}
            >
              Confirm
              {loader && (
                <Image
                  data-testid="loader"
                  src="/loader.gif"
                  width="20px"
                  height="20px"
                  alt="loader"
                />
              )}
            </ContinueButton>
          </FormSection>
        </OnBoardingFormContainer>
      ) : (
        <OnBoardingFormContainer pt={0} justifyContent="flex-start">
          <FormSection mt={6} mb={0}>
            <Box display="flex" alignItems="center" width="100%" mb={3}>
              <IconButton data-testid="back-btn" onClick={() => router.back()}>
                <ArrowBack data-testid="back-icon" fontSize="small" />
              </IconButton>
            </Box>
          </FormSection>
          <FormSection alignItems="stretch" mt={20}>
            <Typography variant="h4" fontSize="24px" mb={6} fontWeight={600} lineHeight="29.26px">
              Oops! 😬
            </Typography>
            <Typography variant="body2" align="center" width="89%">
              You entered the wrong code, please
            </Typography>
            <Typography variant="body2" component="span" mt={1}>
              <Link
                component="a"
                variant="body2"
                fontWeight="bold"
                onClick={tryAgainHandler}
                underline="hover"
                color="#009EF8"
                fontSize={14}
                data-testid="try-again"
                sx={{ fontWeight: '600' }}
                href="#"
              >
                {`try again `}
              </Link>
              or{' '}
              <Link
                component="a"
                variant="body2"
                fontWeight="bold"
                onClick={resendEmail}
                underline="hover"
                color="#009EF8"
                fontSize={14}
                sx={{ fontWeight: '600' }}
                href="#"
              >
                {`request another code`}
              </Link>
            </Typography>
          </FormSection>
        </OnBoardingFormContainer>
      )}
    </Fragment>
  );
};

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  marginTop: 40,
  borderRadius: 8,
  textTransform: 'capitalize',
  color: '#fff',
});

export default EmailVerification;
