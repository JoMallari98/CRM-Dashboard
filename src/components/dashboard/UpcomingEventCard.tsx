import React, { Key, useState } from "react";
import {
  Box,
  CardContent,
  CardActions,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";
import EventDetailModal from "../common/EventDetailModal";
import EventCardHeader from "../common/EventCardHeader";
import styled from "styled-components";
interface EventItemProps {
  img: String;
  title: String;
  dateRange: String;
  joined?: Boolean;
}
const dataEvents: EventItemProps[] = [
  {
    img: "/static/images/avatar/1.jpg",
    title: "Best Investments 2021",
    dateRange: "11:00-12:30",
    joined: true,
  },
  {
    img: "/static/images/avatar/1.jpg",
    title: "Financial consultation",
    dateRange: "15:00-16:00",
  },
];
const UpcomingEventCard: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const EventItem: React.FC<EventItemProps> = ({
    img,
    title,
    dateRange,
    joined,
  }) => {
    return (
      <div onClick={() => setOpenModal(true)} style={{ cursor: "pointer" }}>
        <Grid container>
          <Grid item lg={3} xl={3} xs={3} sm={3} md={3}>
            <Avatar alt="Sharp" src={img as any} variant="rounded" />
          </Grid>
          <Grid item lg={9} xl={9} xs={9} sm={9} md={9}>
            <Grid container>
              <Grid item style={{ fontWeight: "500", fontSize: "12px" }}>
                {title}
              </Grid>
              <Grid item>
                <Grid container>
                  <span
                    style={{
                      fontSize: "10px",
                      marginRight: "2px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {dateRange}
                  </span>
                  {joined && <JoinedBadge>Joined</JoinedBadge>}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
  return (
    <Box
      sx={{
        background: "#ffff",
        boxShadow: "4px 4px 32px rgba(10, 81, 143, 0.17)",
        borderRadius: "16px",
        width: "100%",
      }}
    >
      <CardHeader>
        <EventCardHeader />
      </CardHeader>
      <CardContent>
        <p>upcoming events</p>
        <Grid container spacing={1}>
          {dataEvents.map((item) => {
            return (
              <React.Fragment key={item?.title as Key}>
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                  <EventItem {...item} />
                </Grid>
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                  <Divider
                    orientation="horizontal"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </CardContent>
      <CardActions>
        <CheckMore>Check more</CheckMore>
      </CardActions>
      <EventDetailModal open={openModal} setOpen={setOpenModal} />
    </Box>
  );
};
const JoinedBadge = styled.span`
  background: rgba(103, 129, 255, 0.17);
  border-radius: 4px;
  width: 36px;
  height: 16px;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #4f6bf0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardHeader = styled.div`
  background: #4f6bef;
  width: 100%;
  height: 4rem;
  padding: 12px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const CheckMore = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #009ef8;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default UpcomingEventCard;
