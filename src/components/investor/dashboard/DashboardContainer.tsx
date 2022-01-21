import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';
import { Box } from '@mui/material';

const DashboardContainer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <DashboardHeader />
      <DashboardBody />
    </Box>
  );
};

export default DashboardContainer;
