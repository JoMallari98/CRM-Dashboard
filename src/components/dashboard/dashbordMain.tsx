import React, { useState } from 'react'
import { Container, Grid, FormControl, Box, MenuItem, InputLabel, Select, SelectChangeEvent, InputAdornment, IconButton, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import LetCard from './LetCard'
import BackgroundCard from './BackgroundCard'
import UpcomingEventCard from './UpcomingEventCard'
import ProfileCard from './ProfileCard'
import PortfolioCard from './PorfolioCard'
import TopAdvisorCard from './TopAdvisorCard'
import styled from 'styled-components'
const DashboardMain: React.FC = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item lg={4} xl={4} xs={4} sm={4} md={4} style={{ marginTop: '5rem' }}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <LetCard />
                        </Grid>
                        <Grid item>
                            <Grid container spacing={3}>
                                <Grid item lg={7} xl={7} xs={7} sm={7} md={7}>
                                    <UpcomingEventCard />
                                </Grid>
                                <Grid item lg={5} xl={5} xs={5} sm={5} md={5}>
                                    <BackgroundCard
                                        data={[
                                            { label: "My Life" },
                                            {
                                                label: "What’s up ?",
                                                style: {
                                                    fontWeight: 800,
                                                    marginTop: '5px'
                                                }
                                            }
                                        ]}
                                        sx={{
                                            background: " linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 75.5%),url('/LifeCard.png')",
                                            backgroundSize: "cover",
                                            backgrounPosition: "center center",
                                            width: '100%',
                                            height: "200px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                            padding: '1rem'
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item lg={5} xl={5} xs={5} sm={5} md={5} style={{ marginTop: '5rem' }}>
                    <Grid container spacing={3}>
                        {/* Inputs */}
                        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                            <Grid container spacing={3}>
                                <Grid item lg={4} xl={4} xs={4} sm={4} md={4}>
                                    <Box sx={{ minWidth: 70, minHeight: 20 }}>
                                        <FormControl fullWidth>
                                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                            <Select
                                                displayEmpty
                                                id="demo-simple-select"
                                                value={age}
                                                onChange={handleChange}
                                                placeholder="Search By"
                                                renderValue={(selected) => {
                                                    if (selected.length === 0) {
                                                        return <em>Search By</em>;
                                                    }

                                                    return selected
                                                }}
                                            >
                                                <MyMenuItem value="People" style={{ background: '#fff' }}>People</MyMenuItem>
                                                <MyMenuItem value="Porfolios">Porfolios</MyMenuItem>
                                                <MyMenuItem value="Events">Events</MyMenuItem>
                                                <MyMenuItem value="Challenges">Challenges</MyMenuItem>
                                                <MyMenuItem value="My Interests">My Interests</MyMenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item lg={8} xl={8} xs={8} sm={8} md={8}>
                                    <TextField
                                        InputProps={{
                                            startAdornment: <IconButton><SearchIcon style={{ fill: "#009EF8" }} /></IconButton>
                                        }}
                                        placeholder="search"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                            <Grid container spacing={3}>
                                <Grid item lg={5} xl={5} xs={5} sm={5} md={5}>
                                    <Grid container spacing={3}>
                                        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                            {/* Challenges Card  */}
                                            {/* <h1>Challenges Card</h1> */}
                                            <BackgroundCard
                                                data={[
                                                    { label: "Challenges" }
                                                ]}
                                                sx={
                                                    {
                                                        backgroundImage: "linear-gradient(112.02deg, #FB8E36 39.78%, rgba(255, 199, 0, 0.79) 114.88%)",
                                                        height: "135px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }

                                                }
                                                challenge={true}
                                            />
                                        </Grid>
                                        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                            {/* Porfolio Card */}
                                            {/* <h1>Porfolio Card</h1> */}
                                            <PortfolioCard />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={7} xl={7} xs={7} sm={7} md={7}>
                                    <Grid container spacing={3}>
                                        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                            {/* Top Advisior */}
                                            {/* <h1>Top Advisor</h1> */}
                                            <TopAdvisorCard />
                                        </Grid>
                                        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                                            <Grid container spacing={3}>
                                                <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
                                                    {/* What do I care about? */}
                                                    {/* <h3>What do I care about?</h3> */}
                                                    <BackgroundCard
                                                        data={[
                                                            {
                                                                label: "What do I care about?",
                                                                style: {
                                                                    fontWeight: 800,
                                                                    textAlign: "center"
                                                                }
                                                            }
                                                        ]}
                                                        sx={{
                                                            backgroundImage: "linear-gradient(360deg, #000000 , rgba(0, 0, 0, 0) 75.5%),url(/CareCard.png)",
                                                            height: '116px',
                                                            backgroundSize: "cover",
                                                            backgroundPosition: "center center",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item lg={6} xl={6} xs={6} sm={6} md={6}>
                                                    {/* <h3>😉Friends</h3> */}
                                                    <BackgroundCard
                                                        data={[{
                                                            label: "😉Friends"
                                                        }]}
                                                        sx={{
                                                            backgroundImage: "linear-gradient(188.6deg, #FFC700 35.28%, #FFFFFF 181.75%)",
                                                            height: "116px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={3} xl={3} xs={3} sm={3} md={3} style={{ marginTop: '.6rem' }}>
                    {/* Profile Card */}
                    <ProfileCard />
                </Grid>
            </Grid>
        </Container>
    )
}

const MyMenuItem = styled(MenuItem)`
    background: #ffff;
`
export default DashboardMain