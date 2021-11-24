import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import placeholder from "public/placeholder.png";
import Image from "next/image";

type Props = {
  description?: string;
};

const LogoBrandingSection: React.FC<Props> = ({ description }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" mt={10}>
        <Avatar />
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
        <Image
          src={placeholder.src}
          height={placeholder.height}
          width={placeholder.width}
          alt="placeholder"
        />
      </Box>
    </Box>
  );
};

export default LogoBrandingSection;
