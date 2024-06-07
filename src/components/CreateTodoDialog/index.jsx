import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomizedInputSimple from "../CustomizedInputSimple";
import { Box } from "@mui/material";

export default function CreateTodoDialog({ getPostInfo }) {
  // const user = useSelector(state => state.user)
  const [open, setOpen] = React.useState(false);
  const [todo, setTodo] = React.useState("");

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
        Add Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Yangi post qo'shish"}
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
                  setTodo(val);
                }}
                placeholder="Todo"
                type="text"
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Orqaga</Button>
          <Button
            onClick={() => {
              getPostInfo({ todo, completed: false });
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
