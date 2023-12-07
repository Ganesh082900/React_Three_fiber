import React from "react";
import "../landingpage/LandingPage.css";

export default function LandingPage() {
  return (
    <section id="main">
      <nav id="navBarLp">
        <ul id="navUl">
          <li>menu</li>
          <li>Portfolio</li>
          <li>Get in Touch</li>
        </ul>
      </nav>

      <div id="headingLp">
        <p>
          <span>
            I am <span>Ganesh Pendyala </span>
          </span>
        </p>
        <p>
          <span>Full stack developer</span>
        </p>
      </div>

    </section>
  );
}
