import { Box } from "@mui/material";
import DashboardLogo from "../common/DashboardLogo";
import DashboardNavigation from "./DashboardNavigation";
import DashboardNavProfile from "./DashboardNavProfile";

const DashboardHeader = () => {
  return (
    <Box
      justifyContent="space-between"
      display="flex"
      flexDirection="row"
      height={48}
      width="100%"
      mt={2}
      mb={4}
    >
      <DashboardLogo />
      <DashboardNavigation />
      <DashboardNavProfile />
    </Box>
  );
};

export default DashboardHeader;
