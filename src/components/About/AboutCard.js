import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitya Sharma </span>
            from <span className="purple"> Ujjain, India.</span>
            <br />
            I am currently employed as a frontend developer intern at Quore B2B Marketing Solutions.
            <br />
            I am currently in my third year (sixth semester) pursuing a B.Tech in Computer Science and Engineering at Govt. Ujjain Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nitya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
