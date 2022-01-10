import { Box, styled } from "@mui/material";
import { OutlinedInput, InputAdornment } from "@mui/material";
import Image from "next/image";

const Search = () => {
  return (
    <Box width="75%">
      <StyledSearch
        color="primary"
        placeholder="Search"
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <Image src={"/search.svg"} height="20px" width="20px" />
          </InputAdornment>
        }
      />
    </Box>
  );
};

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  color: "primary",
  borderRadius: 8,
  "&:after": {
    borderBottom: 0,
  },
  "&:before": {
    borderBottom: 0,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
  "& .MuiInputBase-input": {
    border: "none",
    height: "28px",
    position: "relative",
    width: "auto",
    padding: "10px 12px",
  },
}));

export default Search;
