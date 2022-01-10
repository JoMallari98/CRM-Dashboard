import { ArrowBack } from "@mui/icons-material";
import {
  Typography,
  LinearProgress,
  linearProgressClasses,
  IconButton,
  Box,
} from "@mui/material";
import React from "react";
import { FormSection } from "src/components/common/FormSection";
import OnBoardingFormContainer from "src/components/common/OnBoardingFormContainer";
import UserTypeButton from "src/components/common/UserTypeButton";
import { useRouter } from "next/router";
import styled from "styled-components";
enum UserType {
  Investor,
  Rep,
  Other,
}

type SelectItem = {
  value: UserType;
  text: string;
  emoji?: string;
};
const UserTypeForm = () => {
  const router = useRouter();
  const typeOfUsers: SelectItem[] = [
    { text: "I am an investor", value: UserType.Investor, emoji: "🤓" },
    { text: "I’m an investment advisor", value: UserType.Rep, emoji: "💼" },
    { text: "I work with an advisor", value: UserType.Investor, emoji: "💸" },
    { text: "I’m a registered broker", value: UserType.Investor, emoji: "🎓" },
    {
      text: "I work for a financial institution, but I am neither an advisor nor a broker",
      value: UserType.Investor,
      emoji: "🏢",
    },
  ];

  const goToSignUp = () => {
    router.replace("/signup");
  };

  const handleClick = (userType: UserType) => {
    switch (userType) {
      case UserType.Investor:
        router.push("/investor/user-data");
        break;
      case UserType.Rep:
        router.push("/rep");
        break;
      case UserType.Other:
      default:
        //TODO: needs checking
        router.replace("/signup");
    }
  };

  return (
    <OnBoardingFormContainer pt={0} justifyContent="flex-start">
      <FormSection mt={6} mb={3}>
        <Box display="flex" alignItems="center" width="100%" mb={3}>
          <IconButton onClick={goToSignUp}>
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
            value={10}
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
        <Typography variant="h6" fontSize={18}>
          Tell us more about you
        </Typography>
        <MeText>{'"I am ..."'}</MeText>
        {typeOfUsers.map((item, index) => (
          <UserTypeButton
            text={item.text}
            emoji={item.emoji}
            key={index}
            sx={{ mb: 2 }}
            onClick={() => handleClick(item.value)}
          />
        ))}
      </FormSection>
    </OnBoardingFormContainer>
  );
};
const MeText = styled.span`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 50px;
`;
export default UserTypeForm;
