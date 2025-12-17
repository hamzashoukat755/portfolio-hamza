import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple">Me</span>
            </h1>
            <p className="home-about-body">
              I am a motivated <b className="purple">Software Developer</b> 
              with hands-on experience in <b className="purple">.NET and PHP-based applications</b>, 
              including desktop, web, and mobile solutions. I enjoy building scalable 
              systems using <b className="purple">C#, ASP.NET MVC, WinForms, PHP (Laravel), and React Native</b>.
              <br />
              <br />
              I am passionate about writing clean code, solving real-world problems, and
              continuously learning new technologies while contributing to team success.
              <br />
              <br />
              <b>💼 Experience:</b>
              <br />
              <b>.NET Developer Intern</b> at YGeneration Systems (Oct 2024 – Jan 2025)
              <ul>
                <li>
                  Developed and maintained C# WinForms desktop applications and supported 
                  PHP-based backend modules for internal systems.
                </li>
                <li>
                  Implemented form validation, data binding, and reusable UI components, 
                  improving usability and maintainability.
                </li>
                <li>
                  Worked with SQL Server (C# projects) and MySQL (PHP/Laravel projects) 
                  for efficient data handling.
                </li>
                <li>
                  Assisted in debugging and enhancing PHP web features, including CRUD 
                  operations and admin panels.
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with Me</h1>
            <p>
              You can find me on the following platforms:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hamzashoukat755"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-ali-252308319/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
