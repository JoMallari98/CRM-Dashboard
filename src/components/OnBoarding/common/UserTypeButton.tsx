import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Paper, PaperProps, styled, Typography } from "@mui/material";
import React from "react";
type Props = {
  text: string;
} & PaperProps;

const UserTypeButton: React.FC<Props> = ({ text, ...props }) => {
  return (
    <Wrapper
      {...props}
      sx={{ backgroundColor: "background.default", ...props.sx }}
    >
      <Ellipse sx={{ backgroundColor: "background.paper" }} />
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

const Wrapper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: 12,
  cursor: "pointer",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25);",
  borderRadius: 8,
});

const Ellipse = styled(Box)({
  height: 48,
  width: 48,
  minWidth: 48,
  borderRadius: 24,
  marginRight: 20,
  flexBasis: 48,
});
