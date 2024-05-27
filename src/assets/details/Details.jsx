import React, { useState } from "react";
import styles from "./Details.module.css";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Details() {
  const [loading, setLoading] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateUserName = () => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   setEmailError("Invalid email address");
    // } else {
    //   setEmailError("");
    // }
  };

  const validatePassword = () => {
    // Simple password strength validation (at least 6 characters)
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = () => {
    setLoading("loader");
    console.log(
      "Signing up with UserName:",
      userName,
      "and password:",
      password
    );
  };

  const isFormValid = () => {
    return !userNameError && !passwordError && userName && password;
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <section className={styles.mainContainer}>
      <div className={styles.box}>
        <div>
          <h1 className={styles.heading}>TIC TAC TOE</h1>
        </div>
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          onBlur={validateUserName}
          error={!!userNameError}
          helperText={""}
          id="outlined-basic"
        />
        <TextField
          label="Description"
          variant="outlined"
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          onBlur={validateUserName}
          error={!!userNameError}
          helperText={""}
          id="outlined-basic"
        />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        {/* <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={validatePassword}
          error={!!passwordError}
          helperText={passwordError}
          id="outlined-password-input"
          autoComplete="current-password"
        /> */}
        <LoadingButton
          color="secondary"
          disabled={!isFormValid()}
          onClick={() => {
            handleSubmit();
          }}
          loading={loading}
          loadingPosition="end"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </div>
    </section>
  );
}
