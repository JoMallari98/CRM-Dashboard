import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
// import OnboardingImage from "public/OnboardingImage.svg";
import Logo from "public/Logo.svg";
import LogoWhite from "public/WhiteLogo.svg";
import WelcomeIcon from "public/welcome.svg";
import styled from "styled-components";
import Image from "next/image";
import SiginImg from "public/sign_in_img.png";
export enum PageType {
  SIGN_IN = "/sign_in_img.png",
  SIGN_UP = "/sign_up_img.png",
  USER_TYPE = "/User_type_img.png",
  USER_DATA = "/type_of_user_form.png",
  VERIFICATION_Select = "/verification_img.png",
  INVALID_DATA = "/InvalidData_img.png",
  CONFIRM_CRD = "/ConfirmCRD_img.png",
  BACKGROUND = "/bg_img.png",
  WELCOME = "",
  VERIFICATION_CODE = "/Verification_code.png",
}

type Props = {
  description?: string;
  type?: PageType;
};

const LogoBrandingSection: React.FC<Props> = ({
  description,
  type = PageType.SIGN_IN,
}) => {
  const LogoComponent = useMemo(() => {
    if (
      type === PageType.SIGN_IN ||
      type === PageType.SIGN_UP ||
      type === PageType.USER_DATA ||
      type === PageType.VERIFICATION_CODE ||
      type === PageType.BACKGROUND ||
      type === PageType.CONFIRM_CRD
    ) {
      return LogoWhite;
    } else {
      return Logo;
    }
  }, [type]);

  return (
    <Wrapper
      style={{
        background: `url('${type}') no-repeat`,
        backgroundSize: "auto",
        backgroundPosition: "center center",
      }}
    >
      <LogoContainer
        display="flex"
        alignItems="center"
        style={{ marginTop: type !== PageType.WELCOME ? "2rem" : "0px" }}
      >
        <LogoComponent />
        <Typography
          variant="h4"
          ml={2}
          fontWeight="bold"
          color={type === PageType.WELCOME ? "black" : "#fff"}
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
          <WelcomeIcon />
        </WelcomeContainer>
      )}
    </Wrapper>
  );
};
const Wrapper = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50vw;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
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
`;
export default LogoBrandingSection;
