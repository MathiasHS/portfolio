import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Icon } from '@iconify/react';


export default function Skills(props) {
  return (
    <Container className='aligner'>
      <Row>
        <Icon icon={props.icon} height={props.height}  style={{margin: 5}} />
      </Row>
        <p style={{fontSize: 40}}>{props.name}</p>
      <Row>

      </Row>
    </Container>
  )
}