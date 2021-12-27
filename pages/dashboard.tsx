import { Logout } from "@mui/icons-material";
import { Box, Grid, Container } from "@mui/material";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Navbar from "src/components/common/Navbar";
import DashboardMain from "src/components/dashboard/dashbordMain";
import styled from 'styled-components';
const Dashboard: NextPage = () => {
  const { data } = useSession();
  // console.log(data?.user);
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <DashboardMain />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #F8FCFF;
`
export default Dashboard;
