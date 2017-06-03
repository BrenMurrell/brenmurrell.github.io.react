import React from 'react'
import { Link } from 'react-router-dom'

import data from '../../data/skills.js'

const Members = props => {
    return (
      <div className= 'membershipSignup'>
         <table className="u-full-width">
            <thead>
               <tr>
               <th>Name</th>
               <th>competency Level</th>
               <th>Descriptor</th>
               </tr>
               {renderMembers(data)}
            </thead>
         </table>
      </div>
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
      <tr>
      <td>{member.name}</td>
      <td>{member.competency}</td>
      <td>{member.descriptor}</td>
      </tr>
   )
}
