import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import {portfolioData} from '../data/portfolioData.js'

export default function SkillsList() {

  return (
      <Container fluid>
          <p style={{fontSize: 40}}>{portfolioData.basic_info.name}</p>

      </Container>
    
  )
}