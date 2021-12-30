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
import MenuIcon from "@mui/icons-material/Menu";
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
  const [isOpen, setOpen] = useState(false);
  const [openNotificationModal, setOpenNotificationModal] =
    React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuOpen = () => {
    setOpen(!isOpen);
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
      label: "Portfolios",
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
    <>
      <Response>
        <MenuIcon onClick={menuOpen} />
        {isOpen && (
          <Grid
            container
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            style={{
              padding: "0 16px",
            }}
          >
            Logo
            <Grid item lg={2} xl={2} xs={12} sm={12} md={2}>
              <h4>LOGO</h4>
            </Grid>
            LinkBlocks
            <Grid>
              <LinkBlock>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                >
                  {LinkData?.map((item, index) => {
                    return RenderLinkItem(item, index);
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
              </LinkBlock>
            </Grid>
            <Grid item alignSelf="center" style={{ marginLeft: "-25px" }}>
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
            Icons
            <Grid item lg={1} xl={1} xs={3} sm={2} md={1}>
              <Grid container spacing={1} direction="row">
                <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
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
            Avatar
            <Grid
              item
              // lg={3}
              // xl={3}
              // xs={10}
              // sm={10}
              // md={3}
              // style={{ border: "1px solid black" }}
              // alignSelf="flex-end"
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Grid item lg={2} xl={2} xs={2} sm={1} md={2}>
                  <Avatar alt="Sharp" style={{ marginLeft: "-10px" }} />
                </Grid>
                <Grid item lg={10} xl={10} xs={10} sm={10} md={10}>
                  <Grid container direction="column">
                    <Grid item alignSelf="start">
                      <Grid container justifyContent="center">
                        <Grid item style={{ marginBottom: "-16px" }}>
                          <UserName>Jonathan Benson</UserName>
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
                    <Grid item alignSelf="flex-start">
                      <Email>example@mail.com</Email>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              /
            </Grid>
          </Grid>
        )}
      </Response>

      <Containers>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          style={{
            padding: "0 16px",
          }}
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
                return RenderLinkItem(item, index);
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
          <Grid item alignSelf="center" style={{ marginLeft: "-25px" }}>
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
            <Grid container spacing={1} direction="row">
              <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
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
          <Grid
            item
            // lg={3}
            // xl={3}
            // xs={10}
            // sm={10}
            // md={3}
            // style={{ border: "1px solid black" }}
            // alignSelf="flex-end"
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item lg={2} xl={2} xs={2} sm={1} md={2}>
                <Avatar alt="Sharp" style={{ marginLeft: "-10px" }} />
              </Grid>
              <Grid item lg={10} xl={10} xs={10} sm={10} md={10}>
                <Grid container direction="column">
                  <Grid item alignSelf="start">
                    <Grid container justifyContent="center">
                      <Grid item style={{ marginBottom: "-16px" }}>
                        <UserName>Jonathan Benson</UserName>
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
                  <Grid item alignSelf="flex-start">
                    <Email>example@mail.com</Email>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Containers>
    </>
  );
};
const Containers = styled.div`
  @media only screen and (max-width: 480px) {
    visibility: hidden;
  }
`;
const Response = styled.div`
  @media only screen and (min-width: 481px) {
    opacity: 0;
    overflow: hidden;
  }
  @media only screen and (max-width: 480px) {
    opacity: 1;
    z-index: 1200000;
  }
`;
const LinkBlock = styled.div``;
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
    margin-bottom: 2rem; 
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
