import { ArrowBack } from "@mui/icons-material";
import {
  Typography,
  LinearProgress,
  linearProgressClasses,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FormSection } from "../Investor/common/FormSection";
import OnBoardingFormContainer from "../Investor/common/OnBoardingFormContainer";
import UserTypeButton from "../Investor/common/UserTypeButton";
import { useRouter } from "next/router";
import { useOnboarding } from "src/context/userOnBoardingContext";

const TypeOfUserForm = () => {
  const { goPrevStep, goNextStep } = useOnboarding();
  const typeOfUsers = [
    "I am an investor",
    "I’m an investment advisor",
    "I work with an advisor",
    "I’m a registered broker",
    "I’m a registered broker",
    "I work for a financial institution, but I am neither an advisor nor a broker",
  ];

  const handleClick = () => {
    // TODO: Maybe call API
    goNextStep();
  };
  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={15.25}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goPrevStep}>
            <ArrowBack fontSize="small" />
          </IconButton>

          <Typography
            variant="body2"
            fontWeight="bold"
            flexGrow={1}
            textAlign="center"
          >
            Create your ideal profile
          </Typography>
        </Box>
        <Box width="100%">
          <LinearProgress
            variant="determinate"
            value={20}
            sx={{
              height: 8,
              borderRadius: 5,
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
              },
            }}
          />
        </Box>
      </FormSection>
      <FormSection alignItems="stretch">
        <Typography variant="h6" fontSize={18} mb={10}>
          Tell us more about you
        </Typography>
        {typeOfUsers.map((text, index) => (
          <UserTypeButton
            text={text}
            key={index}
            sx={{ mb: 2 }}
            onClick={handleClick}
          />
        ))}
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default TypeOfUserForm;
