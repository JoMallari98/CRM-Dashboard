import { Box, Typography } from "@mui/material";
import React from "react";
// import OnboardingImage from "public/OnboardingImage.svg";
import Logo from "public/Logo.svg";
import SignInSvg from "public/sign_in_svg_img.svg";
import Image from "next/image";
import styled from "styled-components";

export enum PageType {
  SIGN_IN = "/sign_in_img.png",
  SIGN_UP = "/sign_up_img.png",
  USER_TYPE = "/typeUser_img.png",
  USER_DATA = "/type_of_user_form.png",
  VERIFICATION_Select = "/verification_img.png",
  INVALID_DATA = "/InvalidData_img.png",
  CONFIRM_CRD = "/ConfirmCRD_img.png",
  BACKGROUND = "/bg_img.png",
}
type Props = {
  description?: string;
  type?: PageType;
};

const LogoBrandingSection: React.FC<Props> = ({
  description,
  type = PageType.SIGN_IN,
}) => {
  return (
    <Wrapper
      style={{
        background: `url('${type}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LogoContainer display="flex" alignItems="center" mt={10}>
        <Logo />
        <Typography variant="h4" ml={2} fontWeight="bold" color="#fff">
          LOGO
        </Typography>
      </LogoContainer>
      {description && (
        <Typography variant="h5" mt={17.5} maxWidth="50%">
          {description}
        </Typography>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const LogoContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 4rem;
`;
export default LogoBrandingSection;
