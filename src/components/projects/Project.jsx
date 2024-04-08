import React from "react";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import { useGlobalInfo } from "../../context/globalContext";

export default function Project() {
  const context = useGlobalInfo();
  const projects = [
    {
      name: "iZak",
      tagLine: "Home automation as a Service",
      p1: " HTML, CSS, JS, ReactJS, ThreeJS, NodeJS",
      p2: " Collaboratively led a team in developing a cutting-edge home automation application with seamless user experience, integrating Raspberry Pi 4 compatibility and innovative broadcast features for unified smart home solutions",
      url: "https://izak.aidtaas.com",
    },
    {
      name: "Amplyfund",
      tagLine: "FundRaiaser",
      p1: " HTML, CSS, JS, ReactJS, ThreeJS, NodeJS",
      p2: " Created a fundraising app facilitating B2C interactions, empowering users to rally support for diverse causes, prioritizing meaningful connections and impactful contributions. Incorporated seamless broadcasting features to enhance user engagement and enable collective fundraising efforts for philanthropic endeavors.",
      url: "https://amplyfund.aidtaas.com",
    },
    {
      name: "Cultfit_clone",
      tagLine: "",
      p1: " HTML, CSS, JS, ReactJS, ThreeJS, NodeJS, MondoDB",
      p2: " Developed and designed clone website page of cult.fit, it is a comprehensive health and fitness company specializing in digital and offline experiences encompassing fitness, nutrition, and mental well-being, using the MERN stack.",
      url: "https://cultfit-two.vercel.app/",
    },
    {
      name: "Expedia_clone",
      tagLine: "",
      p1: "HTML, CSS, JS, ReactJS, ThreeJS, NodeJS",
      p2: " Developed and designed the clone of homepage and hotel's page of Expedia, demonstrating web development skills in an individual project",
      url: "https://648024ed78aeb431e018b82c--aesthetic-cranachan-db8215.netlify.app/",
    },
  ];

  return (
    <section className={styles.mainContainer}>
      <div className={styles.projects}>
        <div className={styles.headings}>
          <h1>My Projects</h1>
          <p>
            Explore a showcase of innovative creations, meticulously crafted
            with code. Dive into a world where ideas come to life, solving
            real-world problems with boundary-pushing solutions. From elegant
            designs to robust functionalities, each project reflects my passion
            for technology and commitment to excellence.
          </p>
        </div>
        <div className={styles.projectsLists}>
          {projects.map((item, index) => {
            return (
              <div key={index} className={styles.eachItem}>
                <div className={styles.mainHeading}>
                  <p className={styles.eachItemHeading}>{item.name}</p>
                  <p className={styles.tagLine}>{`- ${item.tagLine}`}</p>
                </div>
                <ul className={styles.eachItemUL}>
                  <li>
                    <p className={styles.projectDescription}>
                      <span className={styles.firstWord}>Technologies </span>
                      <span>:-</span>
                      <span>{item.p1}</span>
                    </p>
                  </li>
                  <li>
                    <p className={styles.projectDescription}>
                      <span className={styles.firstWord}>
                        About the Project
                      </span>
                      <span> :-</span>
                      <span>{item.p2}</span>
                    </p>
                  </li>
                </ul>

                <a href={item.url} target="blank">
                  Reference link
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.contactMe}>
        <div className={styles.lines}>
          <div className={styles.typedOut}>Have a project in mind ?</div>
          <p>let's build something together </p>
        </div>
        <div className={styles.contactBtn}>
          <Link
            to={"/contact"}
            onClick={() => {
              context.updateIndex(3);
            }}
          >
            <button>CONTACT</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
