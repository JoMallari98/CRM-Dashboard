import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
interface RenderItemProps {
  date: string;
  month: string;
  active: Boolean;
}
const data: RenderItemProps[] = [
  {
    date: "28",
    month: "Nov",
    active: true,
  },
  {
    date: "29",
    month: "Nov",
    active: false,
  },
  {
    date: "30",
    month: "Nov",
    active: false,
  },
];
const EventCardHeader: React.FC = () => {
  const CalenderItem: React.FC<RenderItemProps> = ({ date, month, active }) => {
    return (
      <ItemContainer act={active}>
        <span className="date">{date}</span>
        <span className="month">{month}</span>
      </ItemContainer>
    );
  };
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item>
        <IconClick>
          <KeyboardArrowLeftIcon style={{ color: "#ffff" }} />
        </IconClick>
      </Grid>
      {data.map((item, index) => (
        <Grid item key={`${item.date}-${item.month}-${index}`}>
          <CalenderItem
            date={item.date}
            month={item.month}
            active={item.active}
          />
        </Grid>
      ))}
      <Grid item>
        <IconClick>
          <ChevronRightIcon style={{ color: "#ffff" }} />
        </IconClick>
      </Grid>
    </Grid>
  );
};
const IconClick = styled.span`
  cursor: pointer;
`;
const ItemContainer = styled.div<{ act: Boolean }>`
  background: ${(props) => (props?.act ? "#ffff" : "transparent")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1px;
  width: 32px;
  height: 40px;
  & .date {
    font-size: 14px;
    line-height: 17px;
    color: ${(props) => (props?.act ? "#4F6BF0" : "rgba(255, 255, 255, 0.5);")};
  }
  & .month {
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: ${(props) => (props?.act ? "#4F6BF0" : "rgba(255, 255, 255, 0.5);")};
  }
`;
export default EventCardHeader;
