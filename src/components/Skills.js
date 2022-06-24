import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SkillsList from './SkillsList';


export default function Skills(props) {
  return (
    <Container fluid className='skills'>
      <Container fluid className='aligner'>
        <h1 className="title-styles"style={{color: "white"}}>
          Skills
        </h1>
      </Container>
      <Row className='skills-list'>
        
        <SkillsList />
      </Row>

    </Container>
  )
}