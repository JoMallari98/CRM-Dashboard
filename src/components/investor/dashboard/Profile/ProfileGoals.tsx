import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image';

const ProfileGoals = () => {
  return (
    <Box width="85%" display="flex" flexDirection="row" justifyContent="space-between">
      <Box>
        <Typography variant="caption" sx={{ fontStyle: 'bold' }}>
          Goals
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        <Image src={'/gear.svg'} height="13px" width="13px" />
        <Link underline="hover" ml="2px">
          <Typography variant="caption" color="primary">
            Manage
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ProfileGoals;
