import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Icon } from '@iconify/react';


export default function About() {
  return (
    <Container id='about' fluid>
      <Row>
        <Col sm={4} className=''>
          <Container className="polaroid">
            <Container >

              <span>
                <Container className='aligner' style={{marginBottom: 15, justifyContent: 'center', width: "100%"}}>
                  <img 
                    width={180}
                    src='images/image_me.png'
                    alt="Avatar placeholder"
                  />

                </Container>
              <Icon
                icon="logos:react"
                height="40"
                style={{margin: 5}}
              />
              <Icon
                icon="logos:java"
                height="40"
                style={{margin: 5}}
              />
              <Icon
                icon="logos:javascript"
                height="40"
                style={{margin: 5}}
              />
              <Icon
                icon="logos:mysql"
                height="40"
                style={{margin: 5}}
              />
              <Icon
                icon="logos:ethereum"
                height="40"
                style={{margin: 5}}
              />
              </span>
            </Container>

          </Container>
        </Col>
        <Col sm={8} style={{backgroundColor: 'black'}}>

        </Col>
      </Row>
    </Container>
  )
}
