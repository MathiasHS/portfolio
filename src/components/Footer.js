import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';


export default function Footer() {
  return (
      <div className='footer aligner ' style={{flexDirection: "column"}}>

            <div style={{marginBottom: 15}}>
              <Icon icon="akar-icons:github-fill" color="white" width="25" height="25" style={{marginRight: 20}}/>
              <Icon icon="akar-icons:linkedin-box-fill" color="white" width="25" height="25"/>
            </div>

            <div>
              <p style={{fontSize: 15, color: "white"}}>Copyright &copy; Mathias Simonsen</p>
            </div>

      </div>
  )
}
