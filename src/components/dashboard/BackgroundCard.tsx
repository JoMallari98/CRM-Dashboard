import React, { Key } from 'react';
import { Box } from '@mui/material';
import ChallengeLogo from 'src/assets/ChallengesIcon.svg';
import styled from 'styled-components';
interface dataItem {
  label?: String;
  style?: Object;
}
interface BackgroundCardProps {
  data?: dataItem[];
  sx?: any;
  challenge?: boolean;
}
const BackgroundCard: React.FC<BackgroundCardProps> = ({ data, sx, challenge }) => {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '4px 4px 32px rgba(10, 81, 143, 0.17)',
        ...sx,
      }}
    >
      {challenge && (
        <LogoChallenge>
          <ChallengeLogo />
        </LogoChallenge>
      )}
      {data?.map((item) => (
        <span style={{ color: '#ffff', ...item?.style }} key={item?.label as Key}>
          {item?.label}
        </span>
      ))}
    </Box>
  );
};

const LogoChallenge = styled.div`
  position: absolute;
  left: 0;
`;
export default BackgroundCard;
