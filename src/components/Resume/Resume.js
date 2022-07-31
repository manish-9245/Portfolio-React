import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/Manish Tiwari-N772880.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer Summer Intern at  JP Morgan Chase"
              date="6 June 2021 - 29 July 2022"
              content={[
                'Worked as a part of the Chase.com team, where I created a micro-frontend application in React.js and integrated it with the currently working Angular application using a Single SPA framework. Internationalized the micro-frontend application and developed custom Navigation functionality to navigate between different micro-frontends of different tech stacks.',
                'Tech Used- ReactJS, Typescript, i18n, GraphQL '
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Drummer at Destiny Music Clique(Music Band)"
              date="September 2019 - present"
              content={[
                'As a part of this band I performed at several college fests and events and won lots of awards.',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronics and Instrumentation Engineering - Siddaganga Institute of Technology "
              date="2019 - 2023"
              content={[
                `CGPA: 8.63/10` ,`Persuing my 3rd Year of Engineering`
              ]} />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Incepto Hackathon(2022) | Secured 1st Position in Hackathon conducted by Team SARK`,`
                TCS Techbytes (2022) | Quiz - 2nd Runner up in TCS Techbytes India Semi-Finals`,`
                NaaViC AGRI Hackathon (2022) | 1st position in the hackathon conducted by ICAR, Bangalore`,`
                Smart India Hackathon (2022) | 1st position in the college level Hackathon conducted by Govt. of India',
                Codechef Snackdown (2021) | Secured a Global rank of 63 in over 80,000 participants in Round 1A`,`
                Provision Hacks Global Hackathon (2021) | Secured Global Runner Up position in 900+ teams worldwide.`,`
                Code For Good (2021) | JP Morgan Chase and Co. - Participated in the All India Hackathon (Top 600 off 11000+)`,`
                Scholarship (2019-Present) | Recipient of Defense scholarship for 3 years from Dept. of Technical Education`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
