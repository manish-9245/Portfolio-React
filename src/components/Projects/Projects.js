import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/SDE SALARY PREDICTOR 2021 (2).png'
import jsomBlog from '../../Assets/Projects/SDE SALARY PREDICTOR 2021 (3).png'
import taskify from '../../Assets/Projects/SDE SALARY PREDICTOR 2021.png'
import aF from '../../Assets/Projects/SDE SALARY PREDICTOR 2021 (4).png'
import aA from '../../Assets/Projects/SDE SALARY PREDICTOR 2021 (5).png'
import easyCode from '../../Assets/Projects/SDE SALARY PREDICTOR 2021 (1).png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="SDE SALARY PREDICTOR"
              description="A Web App that predicts an SDE's salary based on Country, Experience, and Education Level. The Machine Learning Model is trained on Stack Overflow's Annual Developer Survey-2021. 
              Tech Used- Streamlit, Pandas, Numpy, Matplotlib, Scikit Learn"
              link="https://github.com/manish-9245/Developer-Salary-Predictor-2022"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="SmartBin.AI"
              description="This dusbin suggests disposal recommendations based on the waste type and quantity of the wet waste. It is a zero touch dustbin solution that can be used by any user. This dustbin can save a lot of fuel for the munipality."
              link="https://github.com/manish-9245/SmartBin.AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Bright.AI"
              description="This project helps users to get diagnosed of skin diseases by being at home. It also provides basic recommendaton based on the probable skin disease and provides option to consult nearest doctor"
              link="https://github.com/manish-9245/Bright.AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Portfolio Website"
              description="This is a basic website that contains all the information about me. Built with HTML, CSS, AJAX, JS and Bootstrap."
              link="https://github.com/manish-9245/manish-9245.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Agric.AI"
              description="This website aims at suggesting farmers on what to grow according to there soil profile to get the best yield. It also provides the basic information about the type of fertilizer that must be used to grow that crop"
              link="https://github.com/manish-9245/Agric.AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Youngistaan Foundation"
              description="This Project aims at improvising the official Youngistaan foundation site.Features:Awards & User Profile, Leaderboard for Volunteers, Blog App, Admin/Coordinator Dashboard, Event Specific Chat App and analytics"
              link="https://github.com/manish-9245/Youngistaan-Foundation"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
