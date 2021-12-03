import React, { useRef, useState, useEffect } from "react";
import CustomNumberInput from "./CustomNumberInput";

const SixDigitVerification = () => {
  const [digits, setDigits] = useState<(number | string)[]>(
    new Array(6).fill("")
  );
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    e.preventDefault();
    const value = Number(e.target.value);
    if (value > 9) return;
    const newDigits = digits.map((digit, i) => {
      if (i === index) {
        return value === 0 ? "" : value;
      }
      return digit;
    });
    setDigits(newDigits);
    const ref = refs[index + 1];
    if (value > 0) {
      ref?.current && ref?.current.focus();
    }
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
          />
        );
      })}
    </>
  );
};

export default SixDigitVerification;
