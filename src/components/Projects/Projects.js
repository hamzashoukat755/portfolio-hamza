import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import blog from "../../Assets/Projects/blog.png";
import matchmate from "../../Assets/Projects/matchmate.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import shopify from "../../Assets/Projects/shopify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects I've built, spanning web applications,
          desktop applications, and mobile solutions using .NET and PHP technologies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Blogging Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogging Website"
              description="Developed a PHP (Laravel) blogging platform enabling user registration, authentication, and content publishing. Built an admin panel for managing posts, users, and comments. Implemented role-based access and optimized database queries using MySQL. Focused on clean MVC structure and secure backend logic."
              ghLink="https://github.com/hamzashoukat755/news-site"
            />
          </Col>

          {/* .NET ERP System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Enterprise Resource Planning (ERP) System"
              description="Developed a comprehensive .NET ERP system using C# WinForms and ASP.NET MVC. Features include inventory management, employee management, sales and purchase modules, financial reporting, and role-based access control. Integrated with SQL Server database using Entity Framework and ADO.NET for efficient data operations. Built reusable components and implemented data validation throughout the application."
              ghLink="https://github.com/hamzashoukat755"
              // No GitHub link for this project
            />
          </Col>

          {/* MatchMate Mobile App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchmate}
              isBlog={false}
              title="MatchMate - Cricket Scoring App"
              description="A React Native mobile application for cricket scoring and match analysis. Features real-time score updates, bowling action tracking, player statistics, and match history. Built with PHP/Laravel backend API for data management. Includes intuitive UI for quick score entry and comprehensive match reports with performance insights."
              ghLink="https://github.com/hamzashoukat755/Match-Mate"
              // demoLink="https://play.google.com/store/apps"
            />
          </Col>

          {/* Inventory Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Inventory Management System"
              description="A desktop application built with C# WinForms for managing inventory, stock levels, and product information. Features include product CRUD operations, stock tracking, supplier management, and automated low-stock alerts. Uses SQL Server for data persistence with Entity Framework for ORM. Implemented form validation, data binding, and export functionality for reports."
              ghLink="https://github.com/hamzashoukat755"
              // demoLink="https://example.com"
            />
          </Col>

          {/* E-Commerce Web Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="E-Commerce Web Application"
              description="Built a full-featured e-commerce platform using ASP.NET MVC and C#. Includes product catalog, shopping cart, user authentication, order management, and payment integration. Admin panel for managing products, orders, and customers. Uses SQL Server database with Entity Framework. Implemented secure payment processing and order tracking system."
              ghLink="https://github.com/hamzashoukat755/ecommerce"
              // demoLink="https://example.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
