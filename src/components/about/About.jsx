import React from "react";
import styles from "./About.module.css";
import TimeLine from "../verticalTimeline/TimeLine.jsx";
import { AnimatedTooltip } from "../../3js/tooltip/AnimatedTooltip.jsx";
import "../../3js/tooltip/tooltip.css";
export default function stylesout() {
  const skills = [
    {
      id: 1,
      svg: "/image/javascript.png",
      name: "Javascript",
    },
    {
      id: 2,
      svg: "/image/html.png",
      name: "HTML",
    },
    {
      id: 3,
      svg: "/image/css.png",
      name: "CSS",
    },
    {
      id: 4,
      svg: "/image/git.png",
      name: "Git",
    },
    {
      id: 5,
      svg: "/image/react.png",
      name: "React",
    },
    {
      id: 6,
      svg: "/image/node.png",
      name: "Node",
    },
    {
      id: 7,
      svg: "/image/raspberry.png",
      name: "Raspberry Pi",
    },
    {
      id: 8,
      svg: "/image/github.png",
      name: "Github",
    },
    {
      id: 9,
      svg: "/image/postman.png",
      name: "Postman",
    },
    {
      id: 10,
      svg: "/image/vscode.png",
      name: "Vscode",
    },
    {
      id: 11,
      svg: "/image/expressJS.png",
      name: "ExpressJS",
    },
    {
      id: 12,
      svg: "/image/mongoDB.jpeg",
      name: "MongoDB",
    },
    {
      id: 13,
      svg: "/image/mySQL.png",
      name: "mySQL",
    },
  ];

  const handleDownloadPDF = () => {
    // Replace 'sample.pdf' with the path to your PDF file
    const pdfUrl = "/assests/Ganesh Pendyala.pdf";
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Ganesh Pendyala.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the PDF: ", error);
      });
  };

  return (
    <section className={styles.mainContainer}>
      <section id={styles.left}>
        <p className={styles.headings}>Work Experience</p>
        <div className={styles.introBox}>
          <p>
            I'm Pendyala Ganesh an enthusiastic,self-motivated and passionate
            front-end and backend web developer with a specification in MERN
            stack. I am open to learn new technologies and skills.
          </p>
          <p>
            If you are looking for a developer.I'd love to join your team.Please
            feel free to contact me.
          </p>
        </div>
        <div className={styles.timeLine}>
          <TimeLine />
        </div>
      </section>
      <section id={styles.right}>
        <p className={styles.headings}>Skills</p>
        <div className={styles.contentInRight}>
          <div
            // className="tooltip"
            className={styles.skillsList}
          >
            <AnimatedTooltip items={skills} />
          </div>
          {/* <div className={styles.skillsList}>
            {skills.map((item, index) => {
              return (
                <div key={index} className={styles.blockContainer}>
                  <span className={styles.tooltipText}>{item.name}</span>
                  <div className={styles.btnBack}></div>
                  <div className={styles.btnFront}>
                    <img
                      className={styles.btnFrontImg}
                      src={item.svg}
                      alt={item.name}
                    />
                  </div>
                </div>
              );
            })}
          </div> */}
          <button onClick={handleDownloadPDF} className={styles.resumeBtn}>
            RESUME
          </button>
        </div>
      </section>
    </section>
  );
}
