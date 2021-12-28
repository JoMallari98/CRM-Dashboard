import React from "react";
import { Menu, MenuItem } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import styled from "styled-components";

interface NestedMenuProps {
  anchorEl: any;
  setAnchorEl: any;
}
const NestedMenu: React.FC<NestedMenuProps> = ({ setAnchorEl, anchorEl }) => {
  const [anchorElDiscover, setAnchorElDiscover] = React.useState(null);
  const openDiscover = Boolean(anchorElDiscover);

  const handleClickDiscover = (event: any) =>
    setAnchorElDiscover(event?.currentTarget);
  const handleCloseDiscover = () => {
    setAnchorElDiscover(null);
    setAnchorEl(null);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      id="long-menu"
      PaperProps={{
        style: {
          background: "#fff",
          borderRadius: "16px",
          width: "12rem",
        },
      }}
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
    >
      <MenuItem onClick={handleClose}>Friends</MenuItem>
      <MenuItem onClick={handleClose}>MyLife</MenuItem>
      <MenuItem onClick={handleClose}>Events</MenuItem>
      <MenuItem onClick={handleClose}>Challenges</MenuItem>
      <MenuItem>
        <PreferenceButton onClick={handleClickDiscover}>
          Preferences
          <ChevronRightOutlinedIcon />
        </PreferenceButton>
        <Menu
          style={{
            marginLeft: "273px",
            marginTop: "-31px",
          }}
          PaperProps={{
            style: {
              background: "#fff",
              borderRadius: "16px",
              width: "12rem",
            },
          }}
          anchorEl={anchorElDiscover}
          onClose={handleCloseDiscover}
          open={openDiscover}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem onClick={handleCloseDiscover}>Preferences</MenuItem>
          <MenuItem onClick={handleCloseDiscover}>My Documents</MenuItem>
        </Menu>
      </MenuItem>
    </Menu>
  );
};

const PreferenceButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export default NestedMenu;
