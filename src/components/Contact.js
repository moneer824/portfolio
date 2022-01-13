import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="connect">
      <div className="number">
        <p>Contact Me</p>
        <p>+91 7003407697</p>
        <p>moneerashraf824@gmail.com</p>
        <div className="cont">
          <a target="_blank" rel='noreferrer' href="https://github.com/moneer824">
            <i class="fab fa-github"></i>
          </a>

          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/moneer-ashraf-7a4475218/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
      No © copyright issues | Designed and developed by Moneer Ashraf 
      </div>
    </div>
  );
}
