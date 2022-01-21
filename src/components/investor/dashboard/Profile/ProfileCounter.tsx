import { Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

const ProfileCounter = (props: any) => {
  const theme = useTheme();
  const {
    count,
    text,
    last,
    fontWeight,
    padding,
  }: {
    count: number;
    text: string;
    last: boolean;
    fontWeight: string | number;
    padding: string | number;
  } = props;

  return (
    <Box
      sx={
        last
          ? {
              flex: 1,
              maxWidth: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }
          : {
              flex: 1,
              maxWidth: '80%',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              justifyContent: 'center',
              '&:after': {
                content: '""',
                background: theme.palette.divider,
                position: 'absolute',
                bottom: '30%',
                right: 0,
                height: '40%',
                width: '1px',
              },
            }
      }
    >
      <Box display="flex">
        <Typography fontWeight={600} variant="body1">
          {count}
        </Typography>
      </Box>
      <Box display="flex" p={padding}>
        <Typography fontWeight={fontWeight} fontSize="10px">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCounter;
