import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import SkillItem from './SkillItem.js'
import {portfolioData} from '../data/portfolioData.js'


export default function SkillsList(props) {

  
  return (
        <Row>
          {portfolioData.map((info, index) =>
            <ul key={info.skills.icons.toString()} style={{listStyleType: "none", justifyContent: "space-around"}} >
              {info.skills.icons.map((skills, index) => 
                <li key={skills.name.toString()} style={{float: "left", marginRight: "1rem", marginLeft: "1rem"}}>
                  <SkillItem
                    name={skills.name}
                    icon={skills.icon}
                  />
                </li>
              )}
            </ul>
          )} 
        </Row>
  );
}