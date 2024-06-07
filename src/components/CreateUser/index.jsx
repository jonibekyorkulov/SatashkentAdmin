import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomizedInputSimple from "../CustomizedInputSimple";
import { Box } from "@mui/material";

export default function CreateUser({ getPostInfo }) {
  // const user = useSelector(state => state.user)
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        Add User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Yangi Foydalanuvchi qo'shish"}
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
            <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <CustomizedInputSimple
                callback_func={(val) => {
                  setLastName(val);
                }}
                placeholder="Login"
                type="text"
              />
            </Box>
            <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <CustomizedInputSimple
                callback_func={(val) => {
                  setAge(parseInt(val));
                }}
                placeholder="Password"
                type="text"
              />
            </Box>
            <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <CustomizedInputSimple
                callback_func={(val) => {
                  setAge(parseInt(val));
                }}
                placeholder="Phone"
                type="text"
              />
            </Box>
            <Box
              sx={{
                marginBottom: "15px",
              }}
            >
              <CustomizedInputSimple
                callback_func={(val) => {
                  setAge(parseInt(val));
                }}
                placeholder="Email"
                type="text"
              />
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
