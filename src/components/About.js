import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Icon } from '@iconify/react';


export default function About() {
  return (
    <Container id='about' fluid>
      <Row>
        <Col sm={4}>
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


        <Col sm={8} >
          <Row style={{
            marginTop: 20,
            border: "2px solid rgba(0,0,0,0.125)",
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            backgroundColor: "rgba(0,0,0,.03)"
            }}
          >
            <Container >
                <Icon icon="emojione:red-circle" width="10" height="10"   style={{margin: "12.5 5 10"}}/>
                <Icon icon="twemoji:yellow-circle" width="10" height="10" style={{margin: "12.5 5 10"}}/>
                <Icon icon="twemoji:green-circle" width="10" height="10"  style={{margin: "12.5 5 10"}}/>
            </Container>

          </Row>

          <Row style={{
            border: "2px solid rgba(0,0,0,0.125)",
            borderTop: "none",
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
            }}
          >
            <Container style={{height: 400}}>
                
            </Container>

          </Row>
        </Col>
      </Row>
    </Container>
  )
}
