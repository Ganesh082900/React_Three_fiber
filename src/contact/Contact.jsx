import React from "react";
import "../contact/Contact.css";

export default function Contact() {
  return (
    <section id="main">
      <nav id="navBarLp">
        <ul id="navUl">
          <li>menu</li>
          <li>Portfolio</li>
          <li>Get in Touch</li>
        </ul>
      </nav>

      <section id="contact">
        <div className="individualDetails">
          <p>EMAIL</p>
          <p>ganeshpendyala2000@gmail.com</p>
        </div>
        <div>
          <div>Should be something</div>
          <div>Should be something</div>
        </div>

        <div className="individualDetails">
          <p>FOLLOW ME</p>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>X</p>
        </div>
      </section>
      <div className="contactFooter">
        <p>
          <span>Copyright C </span>
          <span>2023 </span>
          <span>Ganesh Pendyala. </span>
          <span> All rights Reserves</span>
        </p>
      </div>
    </section>
  );
}
