import React, { useState } from "react";
import {
  Box,
  CardContent,
  Grid,
  Avatar,
  Divider,
  Button,
  Modal,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DetailBlock from "src/components/common/DetailBlock";
import SettingsIcon from "@mui/icons-material/Settings";
import AddLocationModal from "src/components/common/AddLocationModal";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
const ProfileCard: React.FC = () => {
  const [openAddLocationModal, setOpenAddLocationModal] = useState(false);
  const handleOpenAddLocationModal = () => {
    setOpenAddLocationModal(true);
  };
  const AvatarBlock: React.FC = () => {
    return (
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
          <FlexCenter>
            <Avatar
              style={{
                width: "67px",
                height: "67px",
                marginBottom: "6px",
              }}
              alt="Sharp"
            />
          </FlexCenter>
        </Grid>
        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
          <UserName>Jonathan Benson</UserName>
        </Grid>
        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
          <Grid container spacing={0.5} direction="row">
            <Grid item>
              <LocationOnOutlinedIcon
                style={{ fill: "#009EF8", width: ".9rem", height: ".9rem" }}
              />
            </Grid>
            <Grid
              item
              style={{ fontSize: ".8rem", cursor: "pointer", color: "#009EF8" }}
            >
              <div onClick={handleOpenAddLocationModal}>Add Location</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
          <DetailBlock
            data={[
              {
                label: "Friends",
                value: "0",
              },
              {
                label: "My Life",
                value: "0",
              },
              {
                label: "Events",
                value: "0",
              },
            ]}
            labelStyle={{
              fontSize: "0.9rem",
            }}
            valueStyle={{
              fontSize: "0.8rem",
            }}
          />
        </Grid>
      </Grid>
    );
  };
  const ContentBlock: React.FC = () => {
    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
          <UserName>Start your investment experience</UserName>
        </Grid>
        <Grid
          item
          lg={12}
          xl={12}
          md={12}
          xs={12}
          sm={12}
          style={{ fontSize: "13px" }}
        >
          Select your investment preferences, discover portfolios and make your
          first investment.
        </Grid>
        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
          <Button variant="outlined" fullWidth>
            Start Investing
          </Button>
        </Grid>
      </Grid>
    );
  };
  const GoalBlock: React.FC = () => {
    return (
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          lg={12}
          xl={12}
          md={12}
          xs={12}
          sm={12}
          style={{ width: "100%" }}
        >
          <Grid container justifyContent="space-between">
            <Grid item>Goals</Grid>
            <Grid item>
              <Grid container style={{ cursor: "pointer" }}>
                <SettingsIcon
                  style={{ fill: "#009EF8", height: "20px", width: "20px" }}
                />
                <span style={{ color: "#009EF8", fontSize: "0.9rem" }}>
                  Manage
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
          <DetailBlock
            data={[
              {
                label: "Total",
                value: "0",
              },
              {
                label: "On track",
                value: "0",
              },
              {
                label: "Not track",
                value: "0",
              },
            ]}
            labelStyle={{
              fontWeight: "normal",
              fontSize: "0.9rem",
            }}
            valueStyle={{
              fontSize: "0.8rem",
            }}
          />
        </Grid>
      </Grid>
    );
  };
  return (
    <CardContainer>
      <EditIconContainer>
        <EditIcon />
      </EditIconContainer>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
            <AvatarBlock />
          </Grid>
          <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
            <Divider />
          </Grid>
          <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
            <ContentBlock />
          </Grid>
          <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
            <Divider
              orientation="horizontal"
              style={{ width: "100%", height: "100%" }}
              flexItem
            />
          </Grid>
          <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
            <GoalBlock />
          </Grid>
        </Grid>
      </CardContent>
      <AddLocationModal
        open={openAddLocationModal}
        setOpen={setOpenAddLocationModal}
      />
    </CardContainer>
  );
};
const CardContainer = styled(Box)`
  background-color: #fff;
  box-shadow: 4px 4px 32px rgba(10, 81, 143, 0.17);
  background-color: #fff;
  border-radius: 16px;
  padding: 1.5rem 0rem;
  min-height: 80vh;
  position: relative;
`;
const EditIconContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  & svg {
    fill: #009ef8;
  }
`;
const UserName = styled.span`
  font-weight: 800;
  fontsize: 11px;
`;
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ProfileCard;
