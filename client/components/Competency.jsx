import React from 'react'
import { Link } from 'react-router-dom'

import data from '../../data/skills.js'

const Members = props => {
    return (
        <section className="competencies">
        <div className="section__inner competencies__inner">
            <h1>Competencies</h1>
            <p>I can do a whole bunch of different things, using a whole bunch of different code
            and a whole bunch of different software and I have a whole bunch of great soft skills too.</p>
            {renderMembers(data)}
         </div>
      </section>
 )
}

function renderMembers (membersArray) {
  return membersArray.skills.map((member) => {
     return renderMember(member)
   // return <memberData key={member.id}/>
  })
}

export default Members


function renderMember(member){
   return (
      <div className="comp__group">
          <p>{member.name}</p>
          <i className={'fa ' + member.fontawesome}></i>
          <p>{member.competency}</p>
          <p>{member.descriptor}</p>
      </div>
   )
}
