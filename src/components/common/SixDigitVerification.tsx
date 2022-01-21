import React, { useRef, useState, useEffect } from 'react';
import CustomNumberInput from './CustomNumberInput';

const SixDigitVerification = (props: any) => {
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
      if (!refs[i].current?.value) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      props.setDisableBtn(false);
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
    </>
  );
};

export default SixDigitVerification;
