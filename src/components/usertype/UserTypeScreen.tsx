import { Grid, styled } from "@mui/material";
import React from "react";
import LogoBrandingSection from "src/components/common/LogoBrandingSection";
import UserTypeForm from "./UserTypeForm";

const UserTypeScreen = () => {
  return (
    <Wrapper>
      <Grid container alignItems="stretch" flexGrow={1}>
        <Grid item md={6}>
          <LogoBrandingSection description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </Grid>
        <Grid item md={6}>
          <UserTypeForm />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default UserTypeScreen;

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
