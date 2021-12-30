import { Box, Typography } from "@mui/material";
import React from "react";
import OnboardingImage from "public/OnboardingImage.svg";
import Logo from "public/Logo.svg";
import Image from "next/image";

type Props = {
  description?: string;
};

const LogoBrandingSection: React.FC<Props> = ({ description }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" mt={10}>
        <Image src={Logo} alt="logo-image" height={36} width={36} />
        <Typography variant="h6" ml={2} fontWeight="bold">
          LOGO
        </Typography>
      </Box>
      {description && (
        <Typography variant="h5" mt={17.5} maxWidth="50%">
          {description}
        </Typography>
      )}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
      >
        <Image src={OnboardingImage} alt="onboarding-image" />
      </Box>
    </Box>
  );
};

export default LogoBrandingSection;
