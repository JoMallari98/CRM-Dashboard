import React from 'react';
import { Box, CardActions, CardContent, Container } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import PortfolioCardIcon from '../../assets/PortfolioCardIcon.svg';
import styled from 'styled-components';
const PortfolioCard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(158.64deg, #8EE4FF -12.84%, #0085FF 105.88%)',
        boxShadow: '4px 4px 32px rgba(10, 81, 143, 0.17)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <CardHeader>Portfolios</CardHeader>
        <CardBadge>
          <span>2,58%</span>
          <span>
            <ArrowUpward style={{ height: '13px', width: '13px' }} />
          </span>
        </CardBadge>
        <PortfolioCardIcon />
        <CardFooter>Check more</CardFooter>
      </CardContent>
    </Box>
  );
};
const CardBadge = styled.div`
  border: 1px solid #ffff;
  display: flex;
  justify-content: center;
  align-item: center;
  float: right;
  padding: 5px;
  color: #2ca45c;
  border-radius: 8px;
  background-color: #ffff;
  font-weight: 500;
  font-size: 12px;
  box-shadow: 4px 4px 32px rgba(10, 81, 143, 0.17);
`;
const CardHeader = styled.div`
  color: #ffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;
const CardFooter = styled.div`
  text-align: center;
  font-weight: 600;
  line-height: 15px;
  color: #ffff;
  box-shadow: 4px 4px 32px rgba(10, 81, 143, 0.17);
  background-color: #fff;
  border-radius: 16px;
`;
export default PortfolioCard;
