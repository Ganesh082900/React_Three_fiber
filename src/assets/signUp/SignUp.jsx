import React, { useState } from "react";
import styles from "./SignUp.module.css";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

export default function SignUp() {
  const [loading, setLoading] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
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
    console.log("Signing up with email:", email, "and password:", password);
  };

  const isFormValid = () => {
    return !emailError && !passwordError && email && password;
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.box}>
        <div>
          <h1 className={styles.heading}>TIC TAC TOE</h1>
        </div>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
          error={!!emailError}
          helperText={emailError}
          id="outlined-basic"
        />
        <TextField
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
        />
        <LoadingButton
          color="secondary"
          disabled={!isFormValid()}
          onClick={() => {
            handleSubmit();
          }}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Sign Up</span>
        </LoadingButton>
      </div>
    </section>
  );
}
