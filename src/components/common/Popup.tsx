import React, { useEffect, useState } from 'react';
import {
  Dialog,
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  FormControl,
  Button,
  styled,
  Avatar,
} from '@mui/material';
import styledComponent from 'styled-components';
import { Close as CloseMuiIcon } from '@mui/icons-material';
import CustomTextField from 'src/components/common/CustomTextField';
import { PhoneDataSchema, PhoneDataValues } from 'src/schema/phoneChange-schema';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { EmailDataSchema, EmailDataValues } from 'src/schema/emailChange-schema';

const Popup = (props: any) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [loader, setLoader] = useState(false);

  const HandleSubmit = (values: PhoneDataValues) => {
    setLoader(true);
    setTimeout(() => {
      props.setPopUp(false);
      setLoader(false);
      if (!props.Mobile) {
        props.setCodeSent(true);
        toast.success('Code Sent. Check Your Email');
        if (props.wrongCode) {
          props.setWrongCode(false);
        }
      } else {
        toast.success('Code Sent. Check Your Mobile');
      }
    }, 3000);
  };

  return (
    <Dialog
      data-testid="popup-component"
      open={props.popUp}
      onClose={() => props.setPopUp(false)}
      style={{ zIndex: '10001', backdropFilter: 'blur(4px)' }}
      sx={{
        '& .css-mkuhab-MuiPaper-root-MuiDialog-paper': {
          backgroundColor: 'transparent !important',
          borderRadius: '16px !important',
          overflowX: 'hidden',
        },
      }}
    >
      <Box
        width={smDown ? '100%' : '589px'}
        height="377px"
        borderRadius="1(6px"
        style={{ backgroundColor: '#fff', padding: '20px' }}
      >
        <CloseIconContainer onClick={() => props.setPopUp(false)}>
          <CloseMuiIcon style={{ fontSize: '16px' }} height="12.73px" width="12.73px" />
        </CloseIconContainer>
        <Box mt={8}>
          <Typography variant="h4" fontSize="16px" fontWeight={600} textAlign="center">
            {props.title}
          </Typography>
          <Typography variant="body2" textAlign="center" mt={2}>
            {props.description}
          </Typography>
          <Formik
            validationSchema={props.Mobile ? PhoneDataSchema : EmailDataSchema}
            initialValues={{
              mobileNumber: !props.resendCode
                ? ' '
                : typeof window !== 'undefined'
                ? localStorage.getItem('mobile-number') || ''
                : '',
              email: typeof window !== 'undefined' ? localStorage.getItem('email') || ' ' : '',
            }}
            onSubmit={HandleSubmit}
          >
            <Box
              component={Form}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Box mt={2}>
                <Box width={400}>
                  <FormControl
                    fullWidth
                    sx={smDown ? { width: '70%', my: 2, ml: '15%' } : { my: 2 }}
                  >
                    <CustomTextField
                      data-testid="input-test"
                      id={props.Mobile ? 'cellNumber' : 'email'}
                      label={props.Mobile ? 'Mobile Number' : 'E-mail'}
                      type={props.Mobile ? 'tel' : 'email'}
                      name={props.Mobile ? 'mobileNumber' : 'email'}
                    />
                  </FormControl>
                </Box>
              </Box>
              <ContinueButton
                variant="contained"
                data-testid="code-btn"
                color="primary"
                type="submit"
                style={loader ? { width: '220px' } : { width: '189px' }}
              >
                {props.buttonText}
                {loader && (
                  <Avatar
                    data-testid="loader"
                    src="/loader.gif"
                    style={{ width: '20px', height: '20px', marginLeft: '10px' }}
                    alt="loader"
                  />
                )}
              </ContinueButton>
            </Box>
          </Formik>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Popup;

const CloseIconContainer = styledComponent.span`
  position : absolute;
  top: 15px;
  right: 18px;
  cursor: pointer;
`;

const ContinueButton = styled(Button)({
  paddingLeft: 56,
  paddingRight: 56,
  height: 48,
  marginTop: 40,
  borderRadius: 8,
  textTransform: 'capitalize',
  color: '#fff',
  maxWidth: '235px',
});
