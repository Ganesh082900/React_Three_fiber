import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useGlobalInfo } from "../../context/globalContext";

export default function Navbar() {
  const context = useGlobalInfo();
  return (
    <nav className={styles.navBar}>
      <Link
        to={"/"}
        className={styles.logo}
        onClick={() => {
          context.updateIndex(4);
        }}
      >
        <h1>GP</h1>
      </Link>
      <ul className={styles.navUl}>
        <Link
          to={"/about"}
          className={styles.navLi}
          onClick={() => {
            context.updateIndex(1);
          }}
        >
          ABOUT
        </Link>
        <Link
          to={"/projects"}
          className={styles.navLi}
          onClick={() => {
            context.updateIndex(2);
          }}
        >
          PROJECTS
        </Link>
      </ul>
    </nav>
  );
}
