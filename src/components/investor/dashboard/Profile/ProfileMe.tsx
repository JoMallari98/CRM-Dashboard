import { Box, Avatar, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

const ProfileMe = () => {
  const name: string = 'Johnatan Benson';
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <IconButton
        aria-label="edit"
        color="primary"
        sx={{ position: 'absolute', top: 18, right: 18 }}
      >
        <Image src={'/assets/svgs/edit.svg'} alt="edit" width="12px" height="12px" />
      </IconButton>
      <Avatar src="/assets/svgs/profileimage" alt="Profile" sx={{ mt: '32px', height: '72px', width: '72px' }} />
      <Box display="flex" m={2}>
        <Typography fontWeight={600} fontSize="14px">
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileMe;
