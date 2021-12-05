import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
  Paper,
  Hidden,
  Button,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
const DeclinedElectronicDelivery = () => {
  const router = useRouter();

  const onDisagree = () => {
    router.push("/signup");
  };

  const onAgree = () => {
    //create profile
    console.log("creating profile...");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
      <QuestionContainer>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontSize={22} mb={2} align="center">
            You have declined electronic delivery
          </Typography>
          <Container maxWidth="sm">
            <Typography mb={2} align="center">
              We are unable to continue your registration without your consent
              to electronic delivery of documents.
            </Typography>
          </Container>
          <Stack direction="column" alignItems="center" spacing={2} mt={4}>
            <ConfirmationButton
              variant="contained"
              color="primary"
              onClick={onAgree}
            >
              Consent to electronic delivery
            </ConfirmationButton>
            <ConfirmationButton
              sx={{ ml: 2 }}
              variant="contained"
              color="secondary"
              onClick={onDisagree}
            >
              Decline
            </ConfirmationButton>
          </Stack>
        </Box>
      </QuestionContainer>
    </Box>
  );
};

export default DeclinedElectronicDelivery;

const QuestionContainer = styled(Paper)({
  padding: 64,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ConfirmationButton = styled(Button)({
  width: 250,
  maxWidth: 250,
  height: 48,
  borderRadius: 8,
  textTransform: "none",
});
