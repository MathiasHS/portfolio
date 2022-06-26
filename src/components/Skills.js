import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SkillsList from './SkillsList';


export default function Skills(props) {
  return (
    <Container fluid className='aligner skills' style={{flexDirection: "column"}}>

      <Container fluid className='aligner' style={{marginBottom: 50}}>
        <h1 className="title-styles"style={{color: "white"}}>
          Skills
        </h1>
      </Container>

      <SkillsList />
      
    </Container>
  )
}