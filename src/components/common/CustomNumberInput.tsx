import { InputBase, InputBaseProps, Paper, styled } from '@mui/material';
import React, { useState } from 'react';

type Props = InputBaseProps;
const CustomNumberInput = React.forwardRef<HTMLInputElement, Props>(function CustomNumberInput(
  props,
  ref
) {
  return (
    <StyledPaper
      elevation={0}
      sx={{
        borderRadius: 2,
        mx: 0.5,
      }}
    >
      <StyledInput
        value={props.value}
        onChange={props.onChange}
        sx={{
          flex: 1,
          height: 48,
          width: 20,
          fontWeight: 'bold',
          'input::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          'input::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        }}
        inputProps={{
          'aria-label': 'verification-code-digit',
          style: {
            textAlign: 'center',
          },
          min: 0,
          max: 9,
          step: 1,
          ref,
          ...props.inputProps,
        }}
        type="number"
      />
    </StyledPaper>
  );
});

export default CustomNumberInput;

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#F8FCFF',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  width: 56,
  height: 64,
  border: '1px solid rgba(10, 81, 143, 0.17)',
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 48,
  },
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  fontSize: 40,
  backgroundColor: '#F8FCFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  },
}));
