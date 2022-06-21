import React from 'react'
import { Container } from 'react-bootstrap'
import { Icon } from '@iconify/react'
 
export default function SkillItem(props) {
  return (
    <Container className='skills-tile'>
        <Container className='aligner' >
            <Icon icon={props.icon} width={40} color={"white"} style={{margin: 5}} />
        </Container>
        <Container className='aligner' style={{color: "white", }}>
            <p style={{fontSize: 16}}>{props.name}</p>
        </Container>
    </Container>
  )
}
