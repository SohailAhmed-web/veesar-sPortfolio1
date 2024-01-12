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
              title="QuickBiteCafe"
              description="QuickBite Cafe is a fully functional site where you can find best menue that contain variety of food items and dessert. This website is build with JavaScript, CSS and HTML. QuickBiteCafe is your urban refuge for swift, gourmet indulgence. Discover a menu brimming with delectable sandwiches, salads, and premium beverages. Savor quick bites without compromising on quality in a vibrant ambiance.




              "
              ghLink="https://github.com/Veesar-sWeb/SohailAhmed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GadgetsGroove"
              description="This website is built to make things easier for you to purchase at your doorsteps, especially mobile accessories, gaming, and laptops. It is build using ReactJS and provide a great deal of functionality as it is integerated firebase database"
              ghLink="https://github.com/Web-Development-Project-Series/GadgetGroove-Semester-Project-"
              demoLink="https://semester-project-tau.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Web3Makr"
              description="This Web3Makr is a fully responsive website that is about web 3.0. The main motive it carries to made valuable contributions and web projects related to bitcoin and crypto currency."
              ghLink="https://github.com/SohailAhmed-web/webFinalExam1"
              demoLink="https://web-final-exam1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BISE Sukkur"
              description="This website is the updated version of the traditional non functional website. We have added responsiveness and fully functional frontend design that can be implemented if find a proper agreement with board team. This site is buid using HTML, CSS, ans Bootstarp."
              ghLink="https://github.com/SohailAhmed-web/BISE-Sukkur"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Todo List Website"
              description="This todo lsit website is to build for the track record of daily activities. This is very impactful in implementing daily routine effectively in order to improve the performance and maintain accordingly. This website is created using 100% JavaScript."
              ghLink="https://github.com/SohailAhmed-web/TodoList-Template"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition System"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/FYP-VISION-FOR-BLIND"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
