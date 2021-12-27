import React from 'react'
import { Box, CardContent, Grid, Divider, Avatar } from '@mui/material'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import styled from 'styled-components'
interface RenderItemProps {
    active?: Boolean;
}
const TopAdvisorCard: React.FC = () => {
    const RenderItem: React.FC<RenderItemProps> = ({ active = false }) => {
        return (
            <Grid container spacing={1}>
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                    <Grid container spacing={1} justifyContent="center" alignItems="center">
                        <Grid item lg={2} xl={2} xs={2} sm={2} md={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Grid>
                        <Grid item lg={10} xl={10} xs={10} sm={10} md={10}>
                            <Grid container spacing={0}>
                                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <UserName>Jonathan Benson</UserName>
                                        </Grid>
                                        <Grid item>
                                            <Grid container spacing={1}>
                                                <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
                                                    <StarBorderPurple500Icon style={{ fill: "#FFCF36" }} />
                                                </Grid>
                                                <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
                                                    5.0
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                    <Email>example@mail.com</Email>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Like block */}
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                    <Box sx={{ backgroundColor: '#F2FAFF', padding: '4px', borderRadius: '8px' }}>
                        <Grid container justifyContent="space-around">
                            <Grid item>
                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item>
                                        <span style={{ color: '#009EF8' }}>246</span>
                                    </Grid>
                                    <Grid item>
                                        <ThumbUpOutlinedIcon style={{ fill: "#009EF8" }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <ShareOutlinedIcon style={{ fill: "#009EF8" }} />
                            </Grid>
                            <Grid item>
                                <MailOutlinedIcon style={{ fill: "#009EF8" }} />
                            </Grid>
                            <Grid item>
                                <GroupAddOutlinedIcon style={{ fill: "#009EF8" }} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        )
    }
    return (
        <CardContainer>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item style={{
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '20px',
                            }}>
                                Top Advisors
                            </Grid>
                            <Grid item style={{
                                color: '#009EF8',
                                fontWeight: 600,
                                fontSize: '12px',
                                cursor: "pointer"
                            }}>
                                Check more
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <RenderItem />
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <Divider />
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <RenderItem />
                    </Grid>
                </Grid>
            </CardContent>
        </CardContainer >
    )
}
const CardContainer = styled(Box)`
    box-shadow: 4px 4px 32px rgba(10, 81, 143, 0.17);
    background-color: #fff;
    border-radius: 16px;
`
const UserName = styled.span`
    font-weight: 800;
`
const Email = styled.span`
    font-size: .8rem;
    color: background: rgba(0, 0, 0, 0.5);
`

export default TopAdvisorCard;