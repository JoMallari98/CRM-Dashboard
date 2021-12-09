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

enum UserType {
  Investor,
  Rep,
  Other,
}

type SelectItem = {
  value: UserType;
  text: string;
};
const UserTypeForm = () => {
  const router = useRouter();
  const typeOfUsers: SelectItem[] = [
    { text: "I am an investor", value: UserType.Investor },
    { text: "I’m an investment advisor", value: UserType.Rep },
    { text: "I work with an advisor", value: UserType.Investor },
    { text: "I’m a registered broker", value: UserType.Investor },
    {
      text: "I work for a financial institution, but I am neither an advisor nor a broker",
      value: UserType.Investor,
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
      <FormSection mt={6} mb={15.25}>
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
        <Typography variant="h6" fontSize={18} mb={10}>
          Tell us more about you
        </Typography>
        {typeOfUsers.map((item, index) => (
          <UserTypeButton
            text={item.text}
            key={index}
            sx={{ mb: 2 }}
            onClick={() => handleClick(item.value)}
          />
        ))}
      </FormSection>
    </OnBoardingFormContainer>
  );
};

export default UserTypeForm;
