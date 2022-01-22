import React, { useRef, useState, useEffect } from 'react';
import CustomNumberInput from './CustomNumberInput';
import { Typography, Box } from '@mui/material';
const SixDigitVerification = (props: any) => {
  const [valid, setValid] = useState<boolean>(true);
  const [digits, setDigits] = useState<(number | string)[]>(new Array(6).fill(''));
  const firstDigitRef = useRef<HTMLInputElement>(null);
  const secondDigitRef = useRef<HTMLInputElement>(null);
  const thirdDigitRef = useRef<HTMLInputElement>(null);
  const fourthDigitRef = useRef<HTMLInputElement>(null);
  const fifthDigitRef = useRef<HTMLInputElement>(null);
  const sixthDigitRef = useRef<HTMLInputElement>(null);
  const refs = [
    firstDigitRef,
    secondDigitRef,
    thirdDigitRef,
    fourthDigitRef,
    fifthDigitRef,
    sixthDigitRef,
  ];

  useEffect(() => {
    if (firstDigitRef.current) {
      firstDigitRef.current.focus();
    }
  }, []);

  const isValid = () => {
    let isValid = true;
    for (let i =0; i<refs.length; i++) {
      if (refs[i].current?.value !== (i + 1).toString()) {
        isValid = false;
        setValid(false);
        break;
      }
    }
    if (isValid) {
      props.setDisableBtn(false);
      setValid(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    e.preventDefault();
    const value = Number(e.target.value);
    if (value > 9) return;
    const newDigits = digits.map((digit, i) => {
      if (i === index) {
        return value === 0 ? '' : value;
      }
      return digit;
    });
    setDigits(newDigits);
    const nextRef = refs[index + 1];
    if (value > 0) {
      nextRef?.current && nextRef?.current.focus();
    }
    isValid();
  };
  return (
    <>
      <Box display="flex" flexDirection="row">
        {refs.map((ref, index) => {
          return (
            <CustomNumberInput
              ref={ref}
              key={index}
              onChange={(e) => handleChange(e, index)}
              value={digits[index]}
              inputProps={{
                'data-testid': `six-digit-input-${index}`,
              }}
            />
          );
        })}
      </Box>
      {!valid && (
        <Typography
          sx={{
            color: 'red',
            fontFamily:
              'Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.66,
            textAlign: 'left',
            marginTop: '3px',
            marginRight: '14px',
            marginBottom: 0,
            marginLeft: '14px',
          }}
        >
          Code is not valid
        </Typography>
      )}
    </>
  );
};

export default SixDigitVerification;
