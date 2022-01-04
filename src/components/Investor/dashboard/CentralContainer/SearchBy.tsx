import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, styled } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const SearchBy = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box width="25%" display="flex" height="48px" justifyContent="center">
      <StyledButton
        aria-controls="menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        endIcon={<KeyboardArrowUp sx={{ ml: "15px" }} color="primary" />}
      >
        Search By
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Portfolios</MenuItem>
        <MenuItem onClick={handleClose}>Events</MenuItem>
        <MenuItem onClick={handleClose}>Challenges</MenuItem>
        <MenuItem onClick={handleClose}>My Interests</MenuItem>
      </Menu>
    </Box>
  );
};
export default SearchBy;

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "14px",
  borderColor: theme.palette.divider,
}));
