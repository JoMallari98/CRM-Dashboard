import { Box, Typography, Button, useTheme } from "@mui/material";
import styled from "@emotion/styled";

const ProfileInvestments = () => {
  const theme = useTheme();
  return (
    <Box
      width="85%"
      m={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderBottom={`1px solid ${theme.palette.divider}`}
      borderTop={`1px solid ${theme.palette.divider}`}
    >
      <Box whiteSpace="nowrap" display="flex">
        <Typography m={2} variant="subtitle2">
          Start your investment experience
        </Typography>
      </Box>
      <Box mt={1} display="flex" width="75%" alignSelf="flex-start">
        <Typography fontSize="10px">
          Select your investment preferences, discover portfolios and make your
          first investment.
        </Typography>
      </Box>
      <StyledButton variant="outlined">Start investing</StyledButton>
    </Box>
  );
};

const StyledButton = styled(Button)({
  width: "100%",
  margin: "24px",
});

export default ProfileInvestments;
