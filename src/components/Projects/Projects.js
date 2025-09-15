import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="WanderLust"
              description="Wanderlust is a dynamic travel accommodation platform inspired by Airbnb. It showcases curated listings across India, allowing users to explore destinations, view property details, and plan memorable getaways with ease."
              ghLink="https://github.com/nitya782/WanderLust"
              demoLink="https://wanderlust-nitya.onrender.com/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Portfolio"
              description="Welcome to my portfolio — a reflection of my passion for building meaningful digital experiences. Here, you'll find a collection of my projects, creative ideas, and personal growth as a developer and problem-solver."
              ghLink="https://github.com/nitya782/myPortfolio-main"
              demoLink="https://my-portfolio-main-kappa-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="COVID-19 Dashboard"
              description="The COVID-19 Dashboard is an interactive platform that presents real-time data on coronavirus cases, recoveries, and deaths. It helps users track global and country-wise trends through easy-to-read visuals and statistics."
              ghLink="https://github.com/nitya782/COVID-19-dashboard-/blob/main/Screenshot%202025-06-22%20113509.png"
              demoLink="https://public.tableau.com/app/profile/nitya.sharma3284/viz/COVID-19IndiaDashboard_17024747511500/Dashboard1"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Calm Chatbot"
              description="Calm Chatbot is designed to support mental health and emotional well-being by offering empathetic conversations and a safe space to express feelings. It gently guides users with comforting messages and personalized YouTube recommendations for relaxation, mindfulness, and positivity."
              ghLink="https://github.com/nitya782/mental_health_chatbot_final"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="NiVoice– Real-Time Video Calling App"
              description="Built a real-time video calling and chat application using
 Node.js, Express.js, React.js, Socket.IO, and WebRTC for peer-to-peer media streaming. Integrated JWT authentication,
 bcrypt for secure password hashing, and crypto-based encryption to ensure data privacy. Implemented features such as
 real-time messaging, call history tracking, and scalable event-driven architecture for seamless communication."
              ghLink="https://github.com/nitya782/NiVoice_VideoCall"
              demoLink="https://nivoice-videocall-frontend-new.onrender.com/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
    
  );
}

export default Projects;
