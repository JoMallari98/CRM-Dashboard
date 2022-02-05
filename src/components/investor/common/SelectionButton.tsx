import { Avatar, Box, Paper, styled, Typography } from '@mui/material';
import React from 'react';

type Props = {
  value: any;
  text: string;
  iconSrc: string;
  onSelect(value: any): void;
  selected: boolean;
};
const SelectionButton: React.FC<Props> = ({iconSrc, value, text, onSelect, children, selected }) => {
  const handleClick = () => onSelect(value);
  const backgroundColor = selected ? 'primary.light' : '#ffff';
  const color = selected ? 'primary.contrastText' : 'textSecondary';
  const minHeight = selected ? '150px !important' : 'inherited';
  return (
    <Wrapper
      onClick={handleClick}
      sx={{
        backgroundColor,
        color,
        p: 1,
        m: 1,
        minWidth: 90,
        minHeight: '160px !important',
        ':hover': {
          backgroundColor: 'primary.light',
          color: 'primary.contrastText',
          minHeight: '160px !important',
        },
      }}
      elevation={0}
    >
      <Box height={51} width={52} borderRadius="50%" padding="2px" sx={{background: "#e3f3ff"}}>
      <Ellipse sx={{ mb: 1 }}>
        {iconSrc == "" ? children : <Avatar src={iconSrc} sx={{height:"70%", width:"70%"}}/>}
      </Ellipse>
      </Box>
      <Typography minHeight="36px" fontWeight={500} fontSize="14px" mt={3} variant="body2" align="center" maxWidth={100}>
        {text}
      </Typography>
    </Wrapper>
  );
};

export default SelectionButton;

const Wrapper = styled(Paper)({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Ellipse = styled(Box)({
  height: 48,
  width: 48,
  fontSize: '32px',
  minWidth: 48,
  borderRadius: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: '#F8FCFF',
});
