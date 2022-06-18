import React from "react";
import { Icon } from '@iconify/react';

export default function Header({props}) {
  return (
    <header id="home" style={{height: window.innerHeight - 140, display: 'block'}}>
      <div className="row aligner" style={{height: '100%'}}>
        <div className="col-md-12">
            <div>
            <p style={{fontSize: 40}}>Mathias Simonsen</p>
            <Icon icon="la:laptop-code" width="150" height="150"/>
                
            </div>
        </div>
      </div>
    </header>
  )
}