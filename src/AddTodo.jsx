import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function AddTodo() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} >Add todo</Button>
      <Dialog open={open}>
        <DialogTitle>New todo</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
            <Button color="primary" onClick={handleClose}>Cancel</Button>
            <Button color="primary" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddTodo;
