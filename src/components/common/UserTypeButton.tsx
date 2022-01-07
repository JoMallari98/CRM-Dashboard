import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Paper, PaperProps, styled, Typography } from "@mui/material";
import React from "react";
import styledComponent from "styled-components";
type Props = {
  text: string;
  emoji?: string;
} & PaperProps;

const UserTypeButton: React.FC<Props> = ({ text, emoji, ...props }) => {
  return (
    <Wrapper
      {...props}
      sx={{ backgroundColor: "background.default", ...props.sx }}
    >
      <Ellipse className="emoji">{emoji}</Ellipse>
      <Typography
        flexGrow={1}
        variant="body2"
        fontWeight="bold"
        textAlign="left"
      >
        {text}
      </Typography>
      <ArrowForwardIos fontSize="small" />
    </Wrapper>
  );
};

export default UserTypeButton;

const Wrapper = styledComponent(Paper)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid rgba(10, 81, 143, 0.17);
  outline: none;
  box-shadow: 0px 0px 0px #ffff;
  &:hover {
    background-color: #F1FAFF;
  }
  &:hover .emoji{
    background-color: #ffff;
  }
`;

const Ellipse = styledComponent(Box)`
  height: 48px;
  width: 48px;
  min-width: 48px;
  border-radius: 24px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1FAFF;
`;
