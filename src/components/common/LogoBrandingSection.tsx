import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
// import OnboardingImage from "public/OnboardingImage.svg";
import Logo from 'public/assets/svgs/Logo.svg';
import LogoWhite from 'public/assets/svgs/WhiteLogo.svg';
import WelcomeIcon from 'public/assets/svgs/welcome.svg';
import styled from 'styled-components';
import Image from 'next/image';
import SiginImg from 'public/assets/images/sign_in_img.png';

export enum PageType {
  SIGN_IN = '/assets/images/sign_in_img.png',
  SIGN_UP = '/assets/images/sign_up_img.png',
  USER_TYPE = '/assets/images/User_type_img.png',
  USER_DATA = '/assets/images/type_of_user_form.png',
  VERIFICATION_Select = '/assets/images/verification_img.png',
  WRONG_CODE = '/assets/images/WrongCode.png',
  INVALID_DATA = '/assets/images/InvalidData_img.png',
  CONFIRM_CRD = '/assets/images/ConfirmCRD_img.png',
  BACKGROUND = '/assets/images/bg_img.png',
  WELCOME = '',
  VERIFICATION_CODE = '/assets/images/Verification_code.png',
  FORGOT_PASSWORD = '/assets/images/forgot_password.png',
  PASSWORD_RESET_REQUEST = '/assets/images/password_reset_request.png',
  SELECT_USER_TYPE = '/assets/images/user_type1.png',
  SELECT_USER_INSTITUTE = '/assets/images/institute.png',
}

type Props = {
  description?: string;
  type?: PageType;
};

const LogoBrandingSection: React.FC<Props> = ({ description, type }) => {
  const LogoComponent = useMemo(() => {
    if (
      type === PageType.SIGN_IN ||
      type === PageType.SIGN_UP ||
      type === PageType.USER_DATA ||
      type === PageType.VERIFICATION_CODE ||
      type === PageType.BACKGROUND ||
      type === PageType.CONFIRM_CRD ||
      type === PageType.FORGOT_PASSWORD ||
      type === PageType.PASSWORD_RESET_REQUEST ||
      type === PageType.SELECT_USER_TYPE ||
      type === PageType.SELECT_USER_INSTITUTE
    ) {
      return LogoWhite;
    } else {
      return Logo;
    }
  }, [type]);

  return (
    <Wrapper
      data-testid="background"
      style={{
        background: `url('${type}') no-repeat`,
      }}
    >
      <LogoContainer
        display="flex"
        alignItems="center"
        style={{ marginTop: type !== PageType.WELCOME ? '2rem' : '0px' }}
      >
        <LogoComponent data-testid="logo" />
        <Typography
          variant="h4"
          ml={2}
          fontWeight="bold"
          color={type === PageType.WELCOME ? 'black' : '#fff'}
        >
          LOGO
        </Typography>
      </LogoContainer>
      {description && (
        <Typography variant="h5" mt={17.5} maxWidth="50%">
          {description}
        </Typography>
      )}
      {type === PageType.WELCOME && (
        <WelcomeContainer>
          <WelcomeIcon width="100%" data-testid="inner-images" />
        </WelcomeContainer>
      )}
    </Wrapper>
  );
};
const Wrapper = styled(Box)`
  height: 93vh;
  display: flex;
  width: '120%';
  flex-direction: column;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-size: 800px 102vh !important;
  background-position: center center !important;
  @media screen and (max-width: 900px) {
    background-size: 1100px !important;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LogoContainer = styled(Box)`
  margin-left: 3rem;
  svg {
    width: 72px;
    height: 72px;
  }
`;
const WelcomeContainer = styled.div`
  margin-left: 3rem;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024) {
    height: 50%;
  }
`;
export default LogoBrandingSection;
