import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raghu Vamsi Chunduri </span>
            from <span className="purple"> West Godavari, India.</span>
            <br />
            I am currently embarking on my journey as a software developer, eager to apply my skills and contribute meaningfully to the field.
            <br />
            I have completed Masters (MCA) in Computer Applications at Dravidian University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspire to create impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Raghu Vamsi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
