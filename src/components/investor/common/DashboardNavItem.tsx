import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useTheme, Theme } from '@mui/material';


const NavItem = (props: any) => {
  const theme: Theme = useTheme()
  const { name }: { name: string } = props;
  return (
    <Box
      sx={{
        padding: "10px",
        color: theme.palette.text.primary,
        display: "flex",
        whiteSpace: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: "58px",
        flex: 1,
        "&:hover": {
          color: `${theme.palette.primary.main}`,
          borderBottom: "3px solid",
          borderColor: `${theme.palette.primary.main}`,
          boxShadow: "none",
        },
      }}
    >
      <Link color="inherit" display="flex" underline="none">
        <Typography variant="caption">{name}</Typography>
      </Link>
    </Box>
  );
};

export default NavItem;
