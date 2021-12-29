import React, { Key, useState } from "react";
import {
  Grid,
  Container,
  styled as MuiStyled,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import {
  NotificationsNone,
  MailOutline,
  KeyboardArrowDown,
} from "@mui/icons-material";
import NotificationModal from "src/components/common/NotificationModal";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import NestedMenu from "./NestedMenu";
import styled from "styled-components";

interface RenderLinkItemProps {
  active?: Boolean;
  label: String;
  link?: String;
}

const ITEM_HEIGHT = 48;
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [openNotificationModal, setOpenNotificationModal] =
    React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickNotification = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setOpenNotificationModal(event.currentTarget);
  };

  const [anchorElDiscover, setAnchorElDiscover] = React.useState(null);
  const openDiscover = Boolean(anchorElDiscover);

  const handleClickDiscover = (event: any) =>
    setAnchorElDiscover(event?.currentTarget);
  const handleCloseDiscover = () => setAnchorElDiscover(null);

  const LinkData: RenderLinkItemProps[] = [
    {
      label: "Dashboard",
    },
    {
      label: "Feed",
    },
    {
      label: "My Investments",
    },
    {
      label: "Portfolio",
    },
  ];
  const RenderLinkItem = (
    { active = false, label, link }: RenderLinkItemProps,
    index: number
  ) => {
    if (activeItem === index) {
      return (
        <LinkItemContainer key={label as Key}>
          <LinkItemActive>{label}</LinkItemActive>
        </LinkItemContainer>
      );
    } else {
      return (
        <LinkItem key={label as Key} onClick={() => setActiveItem(index)}>
          {label}
        </LinkItem>
      );
    }
  };
  return (
    <Container>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Grid item lg={2} xl={2} xs={12} sm={12} md={2}>
          <h4>LOGO</h4>
        </Grid>
        {/* LinkBlocks */}
        <Grid item lg={5} xl={5} xs={11} sm={11} md={5}>
          {/* <LinkBlock> */}
          <Grid container direction="row" justifyContent="space-between">
            {LinkData?.map((item, index) => {
              return (
                <Grid
                  item
                  key={index}
                  lg={12 / LinkData.length}
                  xl={12 / LinkData.length}
                  md={12 / LinkData.length}
                  sm={2}
                  xs={12}
                  alignSelf="center"
                >
                  {RenderLinkItem(item, index)}
                </Grid>
              );
            })}
          </Grid>
          {/* </LinkBlock> */}
        </Grid>
        <Grid item lg={1} xl={1} xs={12} sm={12} md={1} alignSelf="center">
          <>
            <LinkItem
              onClick={handleClickDiscover}
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-expanded={openDiscover ? "true" : undefined}
              aria-haspopup="true"
            >
              Discover
            </LinkItem>
            <NestedMenu
              anchorEl={anchorElDiscover}
              setAnchorEl={setAnchorElDiscover}
            />
          </>
        </Grid>
        {/* Icons */}
        <Grid item lg={1} xl={1} xs={3} sm={2} md={1}>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={6} xl={6} xs={6} sm={6} md={6} alignSelf="flex-end">
              <div>
                <Button
                  onClick={handleClickNotification}
                  size="small"
                  id="Notification"
                >
                  <NotificationsNone style={{ fill: "#009EF8" }} />
                </Button>
                <NotificationModal
                  open={openNotificationModal}
                  id="Notification"
                  setOpen={setOpenNotificationModal}
                />
              </div>
            </Grid>
            <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
              <Button size="small">
                <MailOutline style={{ fill: "#009EF8" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Avatar */}
        <Grid item lg={3} xl={3} xs={10} sm={10} md={3} alignSelf="end">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item lg={2} xl={2} xs={2} sm={1} md={2}>
              <Avatar alt="Sharp" src="/static/images/avatar/1.jpg" />
            </Grid>
            <Grid item lg={10} xl={10} xs={10} sm={10} md={10}>
              <Grid container direction="column">
                <Grid item alignSelf="start">
                  <Grid container justifyContent="center">
                    <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
                      <UserName>Jonathan Benson</UserName>
                    </Grid>
                    <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
                      <span>
                        <>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls="long-menu"
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          >
                            <KeyboardArrowDown />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                              style: {
                                background: "#fff",
                                borderRadius: "16px",
                              },
                            }}
                          >
                            <MenuHeader>Profile</MenuHeader>
                            <MyMenuItem onClick={handleClose}>
                              <SettingsOutlinedIcon /> Setting
                            </MyMenuItem>
                            <MyMenuItem onClick={handleClose}>
                              <>
                                <AccessibilityIcon>
                                  <AccessibilityNewOutlinedIcon />
                                </AccessibilityIcon>
                                <span>Display and accessibility</span>
                              </>
                            </MyMenuItem>
                            <MyMenuItem onClick={handleClose}>
                              <LogoutOutlinedIcon /> Logout
                            </MyMenuItem>
                            <MenuHeader>Manage</MenuHeader>
                            <MyMenuItem onClick={handleClose}>
                              About Us
                            </MyMenuItem>
                            <MyMenuItem onClick={handleClose}>
                              Privacy Policy
                            </MyMenuItem>
                          </Menu>
                        </>
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item alignSelf="start">
                  <Email>example@mail.com</Email>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const LinkItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 12px;
  margin: 0 10px;
`;
const LinkItemActive = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 12px;
  margin: 0 10px;
  color: #009ef8;
  border-bottom: 4px solid #009ef8;
`;
const LinkItemContainer = styled.span`
  cursor: pointer;
`;
const UserName = styled.span`
  font-weight: 800;
  font-size: 0.9rem;
`;
const Email = styled.span`
    font-size: .7rem;
    color: background: rgba(0, 0, 0, 0.5);
`;
const MyMenuItem = styled(MenuItem)`
  background: #ffff;
  font-size: 14px;
  & svg {
    margin-right: 3px;
  }
`;
const AccessibilityIcon = styled.span`
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  padding: 2px;
  & svg {
    margin-right: 0px !important;
    width: 18px;
    height: 18px;
  }
`;
const MenuHeader = styled.span`
  padding-left: 16px;
  width: 100%;
  padding-top: 16px;
  font-weight: 600;
`;
export default Navbar;
