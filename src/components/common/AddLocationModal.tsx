import React from "react";
import { Modal, Box, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Input from "src/components/common/Input";
import styled from "styled-components";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "16px",
  background: "#ffff",
  outline: "none",
  width: "589px",
};
interface AddLocationModalProps {
  open: Boolean;
  setOpen: Function;
}
const AddLocationModal: React.FC<AddLocationModalProps> = ({
  open,
  setOpen,
}) => {
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
        <Grid container direction="column" spacing={3}>
          <Grid item alignSelf="center">
            <Heading id="child-modal-title">Add Location</Heading>
            <Close onClick={handleClose}>
              <CloseIcon />
            </Close>
          </Grid>

          <Grid item>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Input
                  fullWidth={true}
                  label="Country"
                  select={true}
                  selectData={["US", "London", "Germany"]}
                />
              </Grid>
              <Grid item>
                <Input
                  placeholder="Your zip code"
                  fullWidth={true}
                  label="Zip Code"
                />
              </Grid>
              <Grid item>
                <Input
                  placeholder="Enter your city"
                  fullWidth={true}
                  label="City"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item alignSelf="end">
            <Button variant="contained" style={{ color: "#fff" }}>
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
const Close = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const Heading = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export default AddLocationModal;
