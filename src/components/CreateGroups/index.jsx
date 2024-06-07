import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomizedInputSimple from "../CustomizedInputSimple";
import { Box, Typography } from "@mui/material";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function CreateGroups({ getPostInfo }) {
  // const user = useSelector(state => state.user)
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [personName, setPersonName] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
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
        Add Group
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Yangi gruh qo'shish"}
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
            <FormControl sx={{ 
                    m: 1,
                    width: '100%',
                    margin: 0,
                }}
                style={{minWidth: 120}}>
              <InputLabel id="multiple-name-label">
                Users
              </InputLabel>
              <Select
                labelId="multiple-name-label"
                id="multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Users" />}
                MenuProps={MenuProps}
                sx={{
                  padding: "14px 10px",
                  backgroundColor: "#F6F6F6",
                  fontSize: '14px',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  color: '#151515',
                  borderRadius: "10px",
                  // minWidth: '70px',
                  '& .MuiInputBase-root': {
                      // width: "100%",
                      borderColor: "red",
                      outlineColor: "red",
                  },
                  '& .MuiSelect-select': {
                      padding: 0,
                      color: "#151515",
                      paddingRight: "22px !important",
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: "#F6F6F6",
                  },
                  '& .MuiOutlinedInput-notchedOutline:hover': {
                      borderColor: "#F6F6F6",
                  }
              }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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

