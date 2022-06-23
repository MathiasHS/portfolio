import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import SkillItem from './SkillItem.js'
import {portfolioData} from '../data/portfolioData.js'


export default function SkillsList(props) {

  
  return (
        <Row>
          {portfolioData.map((info, index) =>
            <ul style={{listStyleType: "none", justifyContent: "space-between"}} >
              {info.skills.icons.map((skills) => 
                <li style={{float: "left"}}>
                  <SkillItem
                    // key={name.toString()}
                    name={skills.name}
                    icon={skills.class}
                  />
                </li>
              )}
            </ul>
          )} 
        </Row>
  );
}