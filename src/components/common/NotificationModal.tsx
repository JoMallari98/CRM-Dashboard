import React, { Key } from "react";
import {
  Popover,
  Grid,
  Box,
  CardContent,
  styled,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface NotificationModalProps {
  open?: any;
  id: string;
  setOpen?: any;
}
interface NotificationItemProps {
  img: string;
  title: string;
  content: string;
  date: string;
}
const NotificationData: NotificationItemProps[] = [
  {
    img: "/static/images/avatar/1.jpg",
    title: "Kate Simone liked your portfolio!",
    content: "Kate Simone liked your portfolio “Environment”.",
    date: "3 min ago",
  },
  {
    img: "/static/images/avatar/1.jpg",
    title: "Kate Simone liked your portfolio!",
    content: "Kate Simone liked your portfolio “Environment”.",
    date: "3 min ago",
  },
  {
    img: "/static/images/avatar/1.jpg",
    title: "Kate Simone liked your portfolio!",
    content: "Kate Simone liked your portfolio “Environment”.",
    date: "3 min ago",
  },
  {
    img: "/static/images/avatar/1.jpg",
    title: "Kate Simone liked your portfolio!",
    content: "Kate Simone liked your portfolio “Environment”.",
    date: "3 min ago",
  },
];
const NotificationModal: React.FC<NotificationModalProps> = ({
  open = false,
  setOpen,
  id,
}) => {
  const handleClose = () => {
    setOpen(null);
  };
  const NotificationItem: React.FC<NotificationItemProps> = ({
    img,
    title,
    content,
    date,
  }) => {
    return (
      <Grid container spacing={3}>
        <Grid item lg={1.5} xl={1.5} md={1.5} xs={1.5} sm={1.5}>
          <Avatar src={img} />
        </Grid>
        <Grid item lg={7.5} xl={7.5} md={7.5} xs={7.5} sm={7.5}>
          <Grid container>
            <Grid item style={{ fontSize: "15px", fontWeight: "bold" }}>
              {title}
            </Grid>
            <Grid item style={{ fontSize: "12px" }}>
              {content}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "12px" }}
          lg={3}
          xl={3}
          md={3}
          xs={3}
          sm={3}
        >
          {date}
        </Grid>
      </Grid>
    );
  };
  return (
    <Popover
      id={id}
      open={Boolean(open)}
      anchorEl={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Wrapper
        sx={{
          width: "512px",
          background: "#ffff",
          boxShadow: "4px 4px 32px rgba(10, 81, 143, 0.17)",
          borderRadius: "16px",
        }}
      >
        <CardContent>
          <Grid container direction="column" spacing={2}>
            {/* Card Header */}
            <Grid item>
              <Grid container direction="row" justifyContent="space-between">
                <Grid item style={{ fontWeight: "600" }}>
                  Notification
                </Grid>
                <Grid item>
                  <Close onClick={handleClose}>
                    <CloseIcon />
                  </Close>
                </Grid>
              </Grid>
            </Grid>
            {/* Card Content */}
            {NotificationData.map((_item) => {
              return (
                <React.Fragment key={_item.title as Key}>
                  <Grid item>
                    <NotificationItem {..._item} />
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </React.Fragment>
              );
            })}
            <Grid item alignSelf="center">
              <Button>
                <CardFooter>View All Notifications</CardFooter>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Wrapper>
    </Popover>
  );
};
const Close = styled("div")({
  cursor: "pointer",
});
const CardFooter = styled("div")({
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#009EF8",
  cursor: "pointer",
});
const Wrapper = styled(Box)`
  width: 512px;
  background: #ffff;
  box-shadow: 4px 4px 32px rgba(10, 81, 143, 0.17);
  border-radius: 16px;
  @media only screen and (max-width: 425px) {
    width: 92vw;
  }
`;
export default NotificationModal;
