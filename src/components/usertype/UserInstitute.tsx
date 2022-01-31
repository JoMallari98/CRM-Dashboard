import React from 'react';
import {
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import OnBoardingFormContainer from 'src/components/common/OnBoardingFormContainer';
import { FormSection } from 'src/components/common/FormSection';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';
import styledComponent from 'styled-components';

const UserInstitute = () => {
  const router = useRouter();
  return (
    <OnBoardingFormContainer
      pt={0}
      justifyContent="flex-start"
      // height="92vh"
    >
      <FormSection mt={6} mb={2}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          {/* Apply Previous Step Here*/}
          <IconButton data-testid="back-btn" onClick={() => router.back()}>
            <ArrowBack fontSize="small" />
          </IconButton>
          <Typography
            variant="body2"
            fontWeight="500"
            fontSize={16}
            flexGrow={1}
            textAlign="center"
          >
            Create your ideal profile
          </Typography>
        </Box>
        <Box width="100%">
          <LinearProgress
            variant="determinate"
            data-testid="progress-bar"
            value={45}
            sx={{
              height: 8,
              borderRadius: 5,
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: '#60C130',
              },
            }}
            style={{ background: '#dbffc9' }}
          />
        </Box>
        <Box width="100%" mt={10} mb={7}>
          <Typography
            variant="body2"
            flexGrow={1}
            textAlign="center"
            fontWeight="500"
            fontSize={18}
          >
            Do you work for a financial institution?
          </Typography>
        </Box>

        <Wrapper
          sx={{ backgroundColor: 'background.default' }}
          onClick={() => router.push('/signup/ideal-profile')}
          data-testid="Yes-i-do-button"
        >
          <Typography flexGrow={1} variant="body2" fontWeight="bold" textAlign="center">
            Yes, I do
          </Typography>
        </Wrapper>

        <Wrapper
          sx={{ backgroundColor: 'background.default' }}
          onClick={() => router.push('/signup/questions')}
          data-testid="No-i-cannot-button"
        >
          <Typography flexGrow={1} variant="body2" fontWeight="bold" textAlign="center">
            No, I don't
          </Typography>
        </Wrapper>
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default UserInstitute;

const Wrapper = styledComponent(Paper)`
  display: flex;
  margin-top: 40px;
  height: 110px;
  align-items: center;
  width: 100%;
  padding: 12px;
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid rgba(10, 81, 143, 0.17);
  outline: none;
  box-shadow: 0px 0px 0px #ffff;
  &:hover {
    background-color: #F1FAFF;
  }
  &:hover .emoji{
    background-color: #ffff;
  }
`;

const Ellipse = styledComponent(Box)`
  height: 48px;
  width: 48px;
  min-width: 48px;
  border-radius: 24px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1FAFF;
`;
