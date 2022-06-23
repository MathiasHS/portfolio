import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import SkillItem from './SkillItem.js'
import {portfolioData} from '../data/portfolioData.js'


export default function SkillsList(props) {

  
  return (
        <Row>
          <Container className='aligner' >
          {portfolioData.map((info, index) =>
            <ul style={{listStyleType: "none", justifyContent: "space-around"}} >
              {info.skills.icons.map((skills) => 
                <li style={{float: "left", marginRight: "1rem", marginLeft: "1rem"}}>
                  <SkillItem
                    // key={name.toString()}
                    name={skills.name}
                    icon={skills.class}
                  />
                </li>
              )}
            </ul>
          )} 
          </Container>
        </Row>
  );
}