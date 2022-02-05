import { Box, Grid, Container } from '@mui/material';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Navbar from 'src/components/common/Navbar';
import DashboardMain from '../src/components/dashboard/dashboardMain';
import styled from 'styled-components';

const Dashboard: NextPage = () => {
  const { data } = useSession();
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
  background: #f8fcff;
`;
export default Dashboard;
