import { Box } from '@mui/material';
import Search from './Search';
import SearchBy from './SearchBy';
import WhatDoICare from './WhatDoICare';

const CentralContainer = () => {
  return (
    <Box>
      <Box display="flex" width="600px" flexDirection="row">
        <SearchBy />
        <Search />
      </Box>
      <Box>
        <WhatDoICare />
      </Box>
    </Box>
  );
};

export default CentralContainer;
