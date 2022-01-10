import { Box, Paper, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  value: any;
  text: string;
  onSelect(value: any): void;
  selected: boolean;
};
const SelectionButton: React.FC<Props> = ({
  value,
  text,
  onSelect,
  children,
  selected,
}) => {
  const handleClick = () => onSelect(value);
  const backgroundColor = selected ? "primary.light" : "#ffff";
  const color = selected ? "primary.contrastText" : "textSecondary";

  return (
    <Wrapper
      onClick={handleClick}
      sx={{
        backgroundColor,
        color,
        p: 1,
        m: 1,
        ":hover": {
          backgroundColor: "primary.light",
          color: "primary.contrastText",
        },
      }}
      elevation={0}
    >
      <Ellipse sx={{ mb: 1 }}>{children}</Ellipse>
      <Typography variant="body2" align="center" maxWidth={100}>
        {text}
      </Typography>
    </Wrapper>
  );
};

export default SelectionButton;

const Wrapper = styled(Paper)({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Ellipse = styled(Box)({
  height: 48,
  width: 48,
  minWidth: 48,
  borderRadius: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F8FCFF",
});
