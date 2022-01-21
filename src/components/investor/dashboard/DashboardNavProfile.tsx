import Image from 'next/image';
import { Badge, Box } from '@mui/material';
import DashboardUser from './DashboardUser';

const DashboardNavProfile = () => {
  return (
    <Box
      display="flex"
      flex={1}
      maxWidth="300px"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
    >
      <Badge sx={{ display: 'flex' }}>
        <Image src={'/bell.svg'} alt="bell" width="19px" height="21px" />
      </Badge>
      <Badge badgeContent={1} color="info" variant="dot" sx={{ pb: '2px', display: 'flex' }}>
        <Image src={'/message.svg'} alt="message" width="20px" height="18px" />
      </Badge>
      <DashboardUser />
    </Box>
  );
};

export default DashboardNavProfile;
