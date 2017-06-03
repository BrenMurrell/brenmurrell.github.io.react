

import React from 'react'

const Home = (props) => {
  return(
    <section className="home">
      <div className="section__inner home__inner">
        <h1>Bren Murrell</h1>
        <h2>Front End Developer</h2>
      </div>
      <div className="nav nav--next">
        <i className="fa fa-arrow-circle-o-down"></i>
      </div>
    </section>
  )
}


// document.addEventListener('runAudio', () => {
//   ReactDOM.render(
//     <Audio />,
//     document.getElementById('Audio')
//   )
// })

export default Home
