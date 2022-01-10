import { Box } from "@mui/material";

import NavItem from "../common/DashboardNavItem";

const DashboardNavigation = () => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      maxWidth="460px"
      flex={2}
      display="flex"
      flexDirection="row"
    >
      <NavItem name={"Dashboard"} />
      <NavItem name={"Feed"} />
      <NavItem name={"My Investments"} />
      <NavItem name={"Portfolios"} />
      <NavItem name={"Discover"} />
    </Box>
  );
};

export default DashboardNavigation;
