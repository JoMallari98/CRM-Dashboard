import { Grid, styled } from "@mui/material";
import React from "react";
import LogoBrandingSection, {
  PageType,
} from "src/components/common/LogoBrandingSection";
import UserTypeForm from "./UserTypeForm";

const UserTypeScreen = () => {
  return (
    <Wrapper>
      <Grid container alignItems="stretch" flexGrow={1}>
        <Grid item md={6}>
          <LogoBrandingSection type={PageType.USER_TYPE} />
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
  // minHeight: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  background: "#F8FCFF",
});
