import React from 'react'
import { Modal, Box, Grid, Avatar, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import EventDetailImage from 'src/assets/EventDetailImage.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TodayIcon from '@mui/icons-material/Today';
import SmallBadge from './SmallBadge';
import Image from 'next/image'
import styled from 'styled-components';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '16px',
    background: '#ffff',
    border: '0',
    width: "589px",
};
interface AddLocationModalProps {
    open: Boolean;
    setOpen: Function;
    type?: 'join' | 'register' | 'deregister';
}
const EventDetailModal: React.FC<AddLocationModalProps> = ({ open, setOpen, type = 'join' }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Modal
            open={open as boolean}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style }}>
                <Grid container direction="column" spacing={2}>
                    <Grid item alignSelf="flex-end">
                        <Close onClick={handleClose}>
                            <CloseIcon />
                        </Close>
                    </Grid>
                    <Grid item>
                        <Image src={EventDetailImage} alt="Images" />
                    </Grid>
                    <Grid item>
                        <Heading>Best Investments 2021</Heading>
                    </Grid>
                    <Grid item>
                        <CreatorHeader>Creator:</CreatorHeader>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item lg={1} xl={1} xs={1} sm={2} md={1}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </Grid>
                            <Grid item lg={11} xl={11} xs={11} sm={11} md={11}>
                                <Grid container spacing={0}>
                                    <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                        <UserName>Jonathan Benson</UserName>
                                    </Grid>
                                    <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                        <Email>example@mail.com</Email>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" justifyContent="space-between">
                            <Grid item>
                                <TimeDate>
                                    <AccessTimeIcon />
                                    <span className="text">Fri, 26 Nov, 11:00-12:30</span>
                                    <SmallBadge>
                                        OnAir
                                    </SmallBadge>
                                </TimeDate>
                            </Grid>
                            <Grid item>
                                <ViewCalendar>
                                    <TodayIcon />
                                    <span className="text">View Calendar</span>
                                </ViewCalendar>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <AvatarMix>
                            <SmallAvatar style={{ zIndex: '10000' }} src="/static/images/avatar/1.jpg" alt="Remy Sharp" />
                            <SmallAvatar style={{ zIndex: '9000', marginLeft: '-9px' }} src="/static/images/avatar/1.jpg" alt="Remy Sharp" />
                            <SmallAvatar style={{ zIndex: '8000', marginLeft: '-9px' }} src="/static/images/avatar/1.jpg" alt="Remy Sharp" />
                            <span className="text">
                                <b>Bridget Jones, Simona Smith</b> and <b>16 others</b> joined this event
                            </span>
                        </AvatarMix>

                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Heading>Description</Heading>
                            </Grid>
                            <Grid item style={{ fontSize: '14px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation...
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item alignSelf={type === 'join' ? "auto" : "center"}>
                        {
                            type === 'register' && <Button variant="contained" style={{ color: '#ffff' }}>
                                Register for events
                            </Button>
                        }
                        {
                            type === 'deregister' && <Button variant="outlined">
                                Deregister from Event
                            </Button>
                        }
                        {
                            type === 'join' && (
                                <Grid container direction="row" justifyContent="space-between" style={{ width: '100%' }} spacing={3}>
                                    <Grid item lg={6} xl={6} xs={6} sm={2} md={6}>
                                        <Button variant="outlined" fullWidth>
                                            Deregister from Event
                                        </Button>
                                    </Grid>
                                    <Grid item lg={6} xl={6} xs={6} sm={2} md={6}>
                                        <Button variant="contained" style={{ color: '#ffff' }} fullWidth>
                                            Join the Event
                                        </Button>
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Box>
        </Modal >
    )
}
const Close = styled.div`
    cursor: pointer;
    top: 1rem;
    right: 1rem;
`
const UserName = styled.span`
    font-weight: 800;
    font-size: 0.9rem;
`
const Email = styled.span`
    font-size: .7rem;
    color: background: rgba(0, 0, 0, 0.5);
`
const Heading = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
`
const CreatorHeader = styled.span`
    font-size: 12px;
    line-height: 15px;
    color: #4D4D4D;
`
const ViewCalendar = styled.div`
    fill: #009EF8;
    color: #009EF8;
    display: flex;
    align-items: center;
    cursor: pointer;
    & .text{
        margin-left: 2px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }
    
`
const AvatarMix = styled.div`
    display: flex;
    & .text{
        margin-left: 4px;
    }
`
const TimeDate = styled.div`
    display: flex;
    align-items: center;
    & svg{
        fill: #4F6BF0;
        margin-right: 4px;
    }
    & .text{
        margin-right: 4px;
        font-weight: 500;
    }   
`
const SmallAvatar = styled(Avatar)`
    height: 25px;
    width: 25px;
`
export default EventDetailModal