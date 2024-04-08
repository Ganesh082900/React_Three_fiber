import React, { useState } from "react";
import styles from "./Contact.module.css";
import axios from "axios";
// import Navbar from "../navbar/Navbar";

export default function Contact() {
  // Get the current year
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rootPath = "http://localhost:5000";
    try {
      // Send form data to backend server
      const response = await axios.post(`${rootPath}/send-email`, formData);
      console.log(response.data); // Assuming the backend sends a success message
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className={styles.main}>
      <section className={styles.contactBox}>
        <div className={styles.contactBoxLeft}>
          <p>Get In Touch</p>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className={styles.eachItem}>
              <label for="Name">Name</label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Input */}
            <div className={styles.eachItem}>
              <label for="Email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Message TextArea */}
            <div className={styles.eachItem}>
              <label for="Message">Message </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            {/* Button Send message */}
            <button type="submit" className={styles.button}>
              SEND MESSAGE
            </button>
          </form>
          {/* <div className={styles.boxesIcons}> */}
          <div className={styles.icons}>
            <a
              href="https://gmail.com/"
              className={`${styles.icon} ${styles.iconMail}`}
            >
              <i class="ri-mail-line"></i>
            </a>
            <a
              href="https://linkedin.com/"
              className={`${styles.icon} ${styles.iconLinkedin}`}
            >
              <i class="ri-linkedin-line"></i>
            </a>
            <a
              href="https://github.com/"
              className={`${styles.icon} ${styles.iconGithub}`}
            >
              <i class="ri-github-line"></i>
            </a>
          </div>
          {/* </div> */}
        </div>
        <div className={styles.contactBoxRight}></div>
      </section>
      <footer className={styles.contactFooter}>
        <p>
          <span>Copyright © </span>
          <span>{currentYear} </span>
          <span>Ganesh Pendyala. </span>
          <span> All rights Reserves</span>
        </p>
      </footer>
    </section>
  );
}
