import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: 300,
    textAlign: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function LogoutModal({ open, handleClose }) {
  const classes = useStyles();

  const handleLogout = () => {
    // Implement logout functionality here
    handleClose();
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="logout-modal-title"
      aria-describedby="logout-modal-description"
    >
      <div className={classes.paper}>
        <Typography variant="h5" id="logout-modal-title">
          <CancelIcon color="error" className={classes.icon} />
          Are you sure you want to logout?
        </Typography>
        <Button onClick={handleLogout} color="primary">
          <CheckCircleIcon className={classes.icon} />
          Yes
        </Button>
        <Button onClick={handleClose} color="secondary">
          <CancelIcon className={classes.icon} />
          No
        </Button>
      </div>
    </Modal>
  );
}
