import { Box, Paper, styled, Typography } from '@mui/material';
import React from 'react';

type Props = {
  value: any;
  text: string;
  onSelect(value: any): void;
  selected: boolean;
};
const SelectionButton: React.FC<Props> = ({ value, text, onSelect, children, selected }) => {
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
      <Ellipse sx={{ mb: 1 }}>{children}</Ellipse>
      <Typography minHeight="36px" mt={3} variant="body2" align="center" maxWidth={100}>
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
  minWidth: 48,
  borderRadius: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: '#F8FCFF',
});
