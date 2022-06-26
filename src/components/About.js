import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Icon } from '@iconify/react';


export default function About() {
  return (
    <Container id='about' fluid>
    <Container fluid className='aligner' style={{marginTop: 20}}>
      <h1 className="title-styles">
        Om meg
      </h1>
    </Container>
      <Row className='aligner'>
        <Col lg={4}>
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


        <Col lg={8} >
          <Row style={{
            marginTop: 20,
            border: "2px solid rgba(0,0,0,0.125)",
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            backgroundColor: "rgba(0,0,0,.03)",
            width: "70%"
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
            width: "70%"
            }}
          >
            <Container style={{height: 400}}>
                <p style={{fontSize: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis,  leo sit amet fermentum fringilla, quam elit venenatis nulla, eu ultrices turpis purus sit amet massa. Ut suscipit quam quam, nec pharetra sem ullamcorper id. Nulla elit leo, ultricies a aliquam eget, lobortis nec ipsum. Proin quis eros molestie, feugiat magna a, ornare lectus. Praesent rutrum elit at tellus ornare, eget tristique risus rhoncus. Suspendisse eleifend mauris enim, a lacinia sapien ornare et. Mauris vulputate volutpat est, at consectetur purus fermentum non.</p>
            </Container>

          </Row>
        </Col>
      </Row>
    </Container>
  )
}
