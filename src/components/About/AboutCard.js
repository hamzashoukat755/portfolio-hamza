import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hamza Ali </span>
            from <span className="purple">Karachi, Pakistan.</span>
            <br />
            I am a motivated <span className="purple">Software Developer</span> 
            with hands-on experience in 
            <span className="purple"> .NET and PHP-based applications</span>, including
            desktop, web, and mobile solutions. I enjoy building scalable systems using
            <span className="purple"> C#, ASP.NET MVC, WinForms, PHP (Laravel), and React Native</span>.
            <br />
            <br />
            I am passionate about writing clean code, solving real-world problems, and
            continuously learning new technologies while contributing to team success.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Scalable Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Team Success
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make an impact!"
          </p>
          <footer className="blockquote-footer">Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
