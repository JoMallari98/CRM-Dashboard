import React, { Key } from 'react'
import { Box } from '@mui/material'
interface dataItem {
    label?: String;
    style?: Object;
}
interface BackgroundCardProps {
    data?: dataItem[];
    sx?: any;
}
const BackgroundCard: React.FC<BackgroundCardProps> = ({ data, sx }) => {
    return (
        <Box sx={{ borderRadius: "16px", boxShadow: "4px 4px 32px rgba(10, 81, 143, 0.17)", ...sx }}>
            {
                data?.map(Item => <span style={{ color: '#ffff', ...Item?.style }} key={Item?.label as Key}>{Item?.label}</span>)
            }
        </Box>
    )
}

export default BackgroundCard;