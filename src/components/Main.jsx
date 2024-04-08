import React from "react";
import styles from "./main.module.css";
import About from "./about/About";
import Navbar from "./navbar/Navbar";
import Contact from "./contact/Contact";
import Project from "./projects/Project";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import { GlobalProvider } from "../context/globalContext";

export default function Main() {
  return (
    <section className={styles.mainContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </section>
  );
}
