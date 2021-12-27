import React, { Key } from 'react'
import { Grid, Container, styled as MuiStyled, Avatar, Menu, MenuItem, IconButton } from '@mui/material'
import { NotificationsNone, MailOutline, KeyboardArrowDown } from '@mui/icons-material'
import styled from 'styled-components';

interface RenderLinkItemProps {
    active?: Boolean;
    label: String;
    link?: String;
}
const ProfileOptions = [
    "First",
    "second",
]
const ITEM_HEIGHT = 48;
const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const LinkData: RenderLinkItemProps[] = [
        {
            label: "Dashboard",
            active: true
        },
        {
            label: "Feed",
        },
        {
            label: "My Investments",
        },
        {
            label: "Portfolio",
        },
        {
            label: "Discover",
        },
    ]
    const RenderLinkItem = ({ active = false, label, link }: RenderLinkItemProps) => {
        if (active) {
            return (
                <span key={label as Key}>
                    <LinkItemActive>
                        {label}
                    </LinkItemActive>
                </span>
            )
        } else {
            return (
                <LinkItem key={label as Key}>
                    {label}
                </LinkItem>
            )
        }

    }
    return (
        <Container >
            <Grid
                container
                direction="row"
                // justifyContent="space-between"
                alignItems="center">
                {/* Logo */}
                <Grid item lg={2} xl={2} xs={2} sm={2} md={2}  >
                    <h4>
                        Logo
                    </h4>
                </Grid>
                {/* LinkBlocks */}
                <Grid item lg={6} xl={6} xs={6} sm={6} md={6}  >
                    {/* <LinkBlock> */}
                    <Grid container direction="row" justifyContent="space-between">
                        {
                            LinkData?.map(Item => RenderLinkItem(Item))
                        }
                    </Grid>
                    {/* </LinkBlock> */}
                </Grid>
                {/* Icons */}
                <Grid item lg={1} xl={1} xs={1} sm={1} md={1}  >
                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                        <Grid item>
                            <NotificationsNone style={{ fill: "#009EF8" }} />
                        </Grid>
                        <Grid item>
                            <MailOutline style={{ fill: "#009EF8" }} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Avatar */}
                <Grid item lg={3} xl={3} xs={3} sm={3} md={3}  >
                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                        <Grid item lg={2} xl={2} xs={2} sm={2} md={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Grid>
                        <Grid item lg={10} xl={10} xs={10} sm={10} md={10}>
                            <Grid container spacing={0}>
                                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                    <UserName>Jonathan Benson</UserName>
                                    <span>
                                        <>
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls="long-menu"
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                            >
                                                <KeyboardArrowDown />
                                            </IconButton>
                                            <Menu
                                                id="long-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                PaperProps={{
                                                    style: {
                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                        width: '20ch',
                                                    },
                                                }}
                                            >
                                                {ProfileOptions.map((option) => (
                                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                    </span>
                                </Grid>
                                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                    <Email>example@mail.com</Email>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

const LinkItem = styled.div`
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 12px;
    margin: 0 10px;
`
const LinkItemActive = styled.div`
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 12px;
    margin: 0 10px;
    color: #009EF8;
    border-bottom: 4px solid #009EF8;
`
const UserName = styled.span`
    font-weight: 800;
`
const Email = styled.span`
    font-size: .8rem;
    color: background: rgba(0, 0, 0, 0.5);
`

export default Navbar