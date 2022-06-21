import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SkillsList from './SkillsList';


export default function Skills(props) {
  return (
    <Container fluid className='skills'>
      <SkillsList />
    </Container>
  )
}