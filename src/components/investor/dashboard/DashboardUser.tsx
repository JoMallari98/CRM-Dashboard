import { Box, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useTheme, Theme } from '@mui/material';

export const DashboardUser = () => {
  const theme: Theme = useTheme();
  const name: string = 'Jonathan Benson';
  const email: string = 'example@mail.com';
  return (
    <Box display="flex" flexDirection="row">
      <Avatar
        src="/images/assets/profileimage"
        alt="Profile"
        sx={{ height: '48px', width: '48px', marginRight: '15px' }}
      />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box>
          <Typography fontWeight={500} fontSize="14px">
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color={theme.palette.text.secondary}>
            {email}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton>
          <KeyboardArrowDown />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DashboardUser;
