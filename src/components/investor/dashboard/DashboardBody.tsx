import DashboardProfile from './Profile/DashboardProfile';
import CentralContainer from './CentralContainer/CentralContainer';
import { Box } from '@mui/material';

const DashboardBody = () => {
  return (
    <Box display="flex">
      <CentralContainer />
      <DashboardProfile />
    </Box>
  );
};

export default DashboardBody;
