import React, { Key, useState } from "react";
import {
  Grid,
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
import ClearIcon from "@mui/icons-material/Clear";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface RenderLinkItemProps {
  active?: Boolean;
  label: String;
  link?: String;
}

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
    setOpen(true);
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
          <MobileList>
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
              <Grid item lg={2} xl={2} xs={12} sm={12} md={2}>
                <ClearIcon
                  onClick={() => setOpen(false)}
                  style={{
                    marginTop: "1.5rem",
                    marginLeft: "0.8rem",
                  }}
                />
              </Grid>
              <Grid>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                >
                  {LinkData?.map((item, index) => {
                    return (
                      <Grid
                        item
                        lg={2}
                        xl={2}
                        xs={12}
                        sm={12}
                        md={2}
                        key={index}
                      >
                        {RenderLinkItem(item, index)}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid
                item
                alignSelf="center"
                lg={2}
                xl={2}
                xs={12}
                sm={12}
                md={2}
              >
                <>
                  <Accordion
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      marginTop: "-23px",
                      marginLeft: "-10px",
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        "&.Mui-expanded": {
                          minHeight: 0,
                        },
                        "& .MuiAccordionSummary-content.Mui-expanded": {
                          margin: "12px 0",
                        },
                      }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily:
                            "Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                        }}
                      >
                        Discover
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          marginTop: "-10px",
                        }}
                      >
                        <AccordList>Friends</AccordList>
                        <AccordList>MyLife</AccordList>
                        <AccordList>Events</AccordList>
                        <AccordList>Challenges</AccordList>
                        <Accordion
                          style={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            marginTop: "-13px",
                            marginLeft: "-15px",
                          }}
                        >
                          <AccordionSummary
                            sx={{
                              "&.Mui-expanded": {
                                minHeight: 0,
                              },
                              "& .MuiAccordionSummary-content.Mui-expanded": {
                                // margin from https://github.com/mui-org/material-ui/blob/cc0e2ab63e8be9ec4d51a49bfde17ef28fc77b9c/packages/mui-material/src/AccordionSummary/AccordionSummary.js#L64-L64
                                margin: "12px 0",
                              },
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                fontFamily:
                                  "Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                              }}
                            >
                              Preferences
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography
                              style={{
                                marginTop: "-10px",
                              }}
                            >
                              <AccordList>Preferences</AccordList>
                              <AccordList>My Documents</AccordList>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              </Grid>
              <Grid item lg={1} xl={1} xs={3} sm={2} md={1}>
                <Grid container spacing={1} direction="row">
                  <Grid
                    style={{
                      marginLeft: "-9px",
                    }}
                    item
                    lg={6}
                    xl={6}
                    xs={6}
                    sm={6}
                    md={6}
                  >
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
              <Grid item lg={3} xl={3} xs={12} sm={12} md={3}>
                <Grid
                  container
                  spacing={6}
                  alignItems="center"
                  justifyContent="flex-end"
                  style={{
                    marginLeft: "-30px",
                  }}
                >
                  <Grid item lg={2} xl={2} xs={2} sm={1} md={2}>
                    <Avatar alt="Sharp" style={{ marginLeft: "-10px" }} />
                  </Grid>
                  <Grid item lg={10} xl={10} xs={10} sm={10} md={10}>
                    <Grid container direction="column">
                      <Grid item alignSelf="start">
                        <Grid container justifyContent="center">
                          <Grid item style={{ marginBottom: "-16px" }}>
                            <Grid container>
                              <Grid item>
                                <UserName>Jonathan Benson</UserName>
                              </Grid>
                              <Grid item>
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
                                          zIndex: "1220000",
                                          display: "block",
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
          </MobileList>
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
          <Grid
            style={{ paddingLeft: "50px" }}
            item
            lg={2}
            xl={2}
            xs={12}
            sm={12}
            md={2}
          >
            <h4>LOGO</h4>
          </Grid>

          <Grid item lg={5} xl={5} xs={11} sm={11} md={5}>
            <Grid container direction="row" justifyContent="space-between">
              {LinkData?.map((item, index) => {
                return RenderLinkItem(item, index);
              })}
            </Grid>
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
          <Grid item>
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
const AccordList = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif;
`;
const MobileList = styled.div`
  @media only screen and (max-width: 480px) {
    background-color: #ffff;
    z-index: 1300000;
    position: absolute;
    top: 0px;
    left:0px;
    height:100vh;
    width: 100%;
    `;
const Containers = styled.div`
  display: block;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Response = styled.div`
  display: block;

  @media only screen and (min-width: 481px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    opacity: 1;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    z-index: 1200000;
  }
`;
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
