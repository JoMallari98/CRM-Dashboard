import { Box, BoxProps, Paper, styled, useMediaQuery, useTheme } from '@mui/material';
import { Close as CloseMuiIcon } from '@mui/icons-material';
import styledComponent from 'styled-components';
import React from 'react';
type OnBoardingFormContainer = {
  CloseIcon?: boolean;
};
const OnBoardingFormContainer: React.FC<OnBoardingFormContainer & BoxProps> = ({
  children,
  CloseIcon = false,
  ...props
}) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      height="93vh"
      width="100%"
      ml={mdDown ? '0px' : '-20px'}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <StyledPaper elevation={0}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          height="100%"
          pt={10}
          pb={6}
          {...props}
        >
          {CloseIcon && (
            <CloseIconContainer>
              <CloseMuiIcon />
            </CloseIconContainer>
          )}
          {children}
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default OnBoardingFormContainer;

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  flexGrow: 1,
  width: '100%',
  background: '#fff',
  border: '1px solid #fff',
  position: 'relative',
  // zIndex: '10000',
  [theme.breakpoints.down('sm')]: {
    margin: 0,
  },
}));
const CloseIconContainer = styledComponent.span`
  position : absolute;
  top: 23px;
  right: 18px;
  cursor: pointer;
`;
