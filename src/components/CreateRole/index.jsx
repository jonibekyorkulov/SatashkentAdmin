import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomizedInputSimple from "../CustomizedInputSimple";
import { Box, Checkbox } from "@mui/material";
import AllSelectFullWidth from "../AllSelectFullWidth";
import { ModalSelectWrapper } from "../../global_styles/styles";

export default function CreateRole({ getPostInfo }) {
  // const user = useSelector(state => state.user)
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{
          borderRadius: "10px",
          textTransform: "capitalize",
          boxShadow: "none",
          padding: "10px",
          marginRight: "20px",
        }}
        onClick={handleClickOpen}
      >
        Add Role
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Yangi Role qo'shish"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ minWidth: "320px" }}
          >
            <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <CustomizedInputSimple
                callback_func={(val) => {
                  setFirstName(val);
                }}
                placeholder="Name"
                type="text"
              />
            </Box>
            <Box>
                <ModalSelectWrapper>
                    <Checkbox {...label} />User
                </ModalSelectWrapper>
                <ModalSelectWrapper>
                    <Checkbox {...label} />UserCreate
                </ModalSelectWrapper>
                <ModalSelectWrapper>
                    <Checkbox {...label} />UserUpdate
                </ModalSelectWrapper>
                <ModalSelectWrapper>
                    <Checkbox {...label} />UserDelete
                </ModalSelectWrapper>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Orqaga</Button>
          <Button
            onClick={() => {
              getPostInfo({ firstName, lastName, age });
              handleClose();
            }}
            autoFocus
          >
            Saqlash
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
