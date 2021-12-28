import React from "react";
import {
  Box,
  CardContent,
  CardActions,
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
  styled as MuiStyled,
} from "@mui/material";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import styled from "styled-components";

const LetCard: React.FC = () => {
  const CheckBoxComponent = (props: any) => (
    <Checkbox
      {...props}
      style={{ borderRadius: "50%" }}
      icon={<RadioButtonUnchecked />}
      checkedIcon={<CheckCircle style={{ fill: "#2CA45C" }} />}
    />
  );
  const MyButton = MuiStyled(Button)({
    color: "white",
  });
  return (
    <LetCardContainer>
      <CardHeader>
        <h3 style={{ fontWeight: "600" }}>Let’s start</h3>
        <p style={{ fontWeight: "500" }}>
          There are lots of things to do. From what to start:
        </p>
      </CardHeader>
      <CardContent>
        <div style={{ position: "relative" }}>
          <FormGroup>
            <FormControlLabel
              control={<CheckBoxComponent defaultChecked={true} />}
              label="Create risk profile"
            />
            <FormControlLabel
              control={<CheckBoxComponent />}
              label="Complete ESG preferences"
            />
            <FormControlLabel
              control={<CheckBoxComponent defaultChecked={true} />}
              label="Create risk profile"
            />
            <FormControlLabel
              control={<CheckBoxComponent defaultChecked={true} />}
              label="Create risk profile"
            />
          </FormGroup>
          <Calendar>
            <CalendarTodayOutlinedIcon />
          </Calendar>
        </div>
      </CardContent>
      <CardActions>
        <MyButton variant="contained" fullWidth>
          Start Working on tasks
        </MyButton>
      </CardActions>
    </LetCardContainer>
  );
};
const CardHeader = styled(Box)`
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 2.98%,
      rgba(0, 0, 0, 0) 93.52%
    ),
    url("/LetCard.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  color: white;
  padding: 1rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const LetCardContainer = styled.div`
  box-shadow: 4px 4px 32px rgba(10, 81, 143, 0.17);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
const Calendar = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  cursor: pointer;
  & svg {
    fill: #009ef8;
  }
`;
export default LetCard;
