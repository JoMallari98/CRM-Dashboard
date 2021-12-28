import React from 'react'
import { Menu, MenuItem } from '@mui/material'

interface NestedMenuProps {
    anchorEl: any;
    setAnchorEl: any;
}
const NestedMenu: React.FC<NestedMenuProps> = ({ setAnchorEl, anchorEl }) => {
    const [anchorElDiscover, setAnchorElDiscover] = React.useState(null);
    const openDiscover = Boolean(anchorElDiscover);

    const handleClickDiscover = (event: any) => setAnchorElDiscover(event?.currentTarget);
    const handleCloseDiscover = () => setAnchorElDiscover(null);
    const handleClose = () => setAnchorEl(null);

    return (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
                Friends
            </MenuItem>
            <MenuItem onClick={handleClose}>
                MyLife
            </MenuItem>
            <MenuItem onClick={handleClose}>
                Events
            </MenuItem>
            <MenuItem onClick={handleClose}>
                Challenges
            </MenuItem>
            <MenuItem onClick={handleClickDiscover}>
                Perferences
                <Menu anchorEl={anchorElDiscover} open={openDiscover}>
                    <MenuItem onClick={handleCloseDiscover}>
                        Perferences
                    </MenuItem>
                    <MenuItem onClick={handleCloseDiscover}>
                        My Documents
                    </MenuItem>
                </Menu>
            </MenuItem>
        </Menu>
    )
}

export default NestedMenu