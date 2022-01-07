import ProfileMe from "./ProfileMe";
import Image from "next/image";
import { Box, Typography, Link, styled } from "@mui/material";
import { useTheme, Theme } from '@mui/material';
import ProfileCounter from "./ProfileCounter";
import ProfileInvestments from "./ProfileInvestment";
import ProfileGoals from "./ProfileGoals";

const DashboardProfile = () => {
  const theme: Theme = useTheme()
  return (
    <Box
      sx={{
        borderRadius: 4,
        boxShadow: "4px 4px 32px rgba(10, 81, 143, 0.17)",
        backgroundColor: theme.palette.white.main,
        display: "flex",
        flexDirection: "column",
        height: "700px",
        width: "280px",
        position: "relative",
        alignItems: "center",
      }}
    >
      <ProfileMe />
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image src={"/location.svg"} width="16px" height="19px" />
        <Link underline="hover">
          <Typography variant="body2" color={theme.palette.primary.light} p={1}>
            Add Location
          </Typography>
        </Link>
      </Box>

      <CounterContainer>
        <ProfileCounter
          fontWeight={600}
          padding={"4px"}
          count={1}
          text="Friends"
        />
        <ProfileCounter
          fontWeight={600}
          padding={"4px"}
          count={0}
          text="My Life"
        />
        <ProfileCounter
          fontWeight={600}
          padding={"4px"}
          count={3}
          text="Events"
          last={true}
        />
      </CounterContainer>
      <ProfileInvestments />
      <ProfileGoals />
      <CounterContainer>
        <ProfileCounter count={9} text="Total" />
        <ProfileCounter count={4} text="On track" />
        <ProfileCounter count={5} text="Not tracked" last={true} />
      </CounterContainer>
    </Box>
  );
};

export default DashboardProfile;

const CounterContainer = styled(Box)({
  pt: 1,
  height: "70px",
  width: "90%",
  display: "flex",
  flexDirection: "row",
});
