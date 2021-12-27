import React from 'react'
import { Box, CardContent, Grid, Avatar, Divider, Button } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DetailBlock from 'src/components/common/DetailBlock'
import SettingsIcon from '@mui/icons-material/Settings';
import styled from 'styled-components'
const ProfileCard: React.FC = () => {
    const AvatarBlock: React.FC = () => {
        return (
            <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                    <FlexCenter>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </FlexCenter>
                </Grid>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                    <UserName>
                        Jonathan Benson
                    </UserName>
                </Grid>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <LocationOnOutlinedIcon style={{ fill: "rgba(0, 0, 0, 0.5)", width: '.8rem', height: '.8rem' }} />
                        </Grid>
                        <Grid item style={{ fontSize: ".8rem" }}>
                            New York, US
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                    <DetailBlock
                        data={[
                            {
                                label: "Friends",
                                value: "0"
                            },
                            {
                                label: "My Life",
                                value: "0"
                            },
                            {
                                label: "Events",
                                value: "0"
                            },
                        ]}
                        labelStyle={{
                            fontSize: '0.9rem'
                        }}
                        valueStyle={{
                            fontSize: '0.8rem'
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
    const ContentBlock: React.FC = () => {
        return (
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                    <UserName>
                        Start your investment experience
                    </UserName>
                </Grid>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12} style={{ fontSize: '13px' }}>
                    Select your investment preferences, discover portfolios and make your first investment.
                </Grid>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                    <Button variant="outlined" fullWidth>
                        Start Investing
                    </Button>
                </Grid>
            </Grid>
        )
    }
    const GoalBlock: React.FC = () => {
        return (
            <Grid container spacing={2}>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            Goals
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <SettingsIcon style={{ fill: '#009EF8', height: '20px', width: '20px' }} />
                                <span style={{ color: '#009EF8', fontSize: '0.9rem' }}>
                                    Manage
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} xl={12} md={12} xs={12} sm={12} alignSelf="center">
                    <DetailBlock
                        data={[
                            {
                                label: "Total",
                                value: "0"
                            },
                            {
                                label: "On track",
                                value: "0"
                            },
                            {
                                label: "Not track",
                                value: "0"
                            },
                        ]}
                        labelStyle={{
                            fontWeight: "normal",
                            fontSize: '0.9rem'
                        }}
                        valueStyle={{
                            fontSize: '0.8rem'
                        }}
                    />
                </Grid>
            </Grid >
        )
    }
    return (
        <CardContainer>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <AvatarBlock />
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <Divider />
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <ContentBlock />
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <Divider orientation="horizontal" style={{ width: '100%', height: "100%" }} flexItem />
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                        <GoalBlock />
                    </Grid>
                </Grid>
            </CardContent>
        </CardContainer>
    )
}
const CardContainer = styled(Box)`
    background-color: #fff;
    box-shadow: 4px 4px 32px rgba(10, 81, 143, 0.17);
    background-color: #fff;
    border-radius: 16px;
    padding: 1.5rem 0rem;
`
const EditIcon = styled.div`
`
const UserName = styled.span`
    font-weight: 800;
    fontSize: 11px;
`
const FlexCenter = styled.div`
    display: flex;
    justifyContent: center;
    alignItems: center;
`
export default ProfileCard