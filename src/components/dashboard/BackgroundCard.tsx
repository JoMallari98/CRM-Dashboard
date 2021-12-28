import React, { Key } from 'react'
import { Box } from '@mui/material'
import ChallengeLogo from 'src/assets/ChallengesIcon.svg'
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
        <Box sx={{ borderRadius: "16px", position: 'relative', overflow: 'hidden', boxShadow: "4px 4px 32px rgba(10, 81, 143, 0.17)", ...sx }}>
            {
                challenge && <LogoChallange>
                    <ChallengeLogo />
                </LogoChallange>
            }
            {
                data?.map(Item => <span style={{ color: '#ffff', ...Item?.style }} key={Item?.label as Key}>{Item?.label}</span>)
            }

        </Box>
    )
}

const LogoChallange = styled.div`
    position: absolute;
    left:0;
`
export default BackgroundCard;