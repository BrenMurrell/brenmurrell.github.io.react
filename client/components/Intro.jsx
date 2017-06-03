import React from 'react'

const Intro = (props) => {
  return(
    <section className="intro">
        <div className="section__inner intro__inner">
          <h1>Hi!</h1>
          <p>
            I'm Bren, and I'm a front end web developer. I'm currently working
            for <a href="http://nvinteractive.com" target="_blank">NV Interactive</a> in Wellington, New Zealand.
            I have an absolute passion for all things front end, from coding of HTML, CSS and Javascript to
            consulting on UX and UI design. I'm also pretty handy with databases, PHP and dabble in C# occasionally.
            I'm in the process of learning the latest front end javascript frameworks including React and AngularJS.
            This site is built using React.
          </p>
          <p>
            In my spare time I love hanging out with my family and building and flying FPV Quadcopters.
            I'm also a little arty and love taking photos, videos and making music.
          </p>
          <ul className="intro__links">
            <li><a title="My Github repos" href="https://github.com/brenmurrell" target="_blank" className="fa fa-github-alt"></a></li>
            <li><a title="My 500px photographry profile" href="https://500px.com/brenmrurell" target="_blank" className="fa fa-500px"></a></li>
            <li><a title="My rants on Twitter" href="https://twitter.com/brenmurrell" target="_blank" className="fa fa-twitter"></a></li>
            <li><a title="My YouTube channel" href="https://youtube.com/user/IRMoon/videos" target="_blank" className="fa fa-youtube"></a></li>
            <li><a title="My music on Soundcloud" href="https://soundcloud.com/bren-murrell" target="_blank" className="fa fa-soundcloud"></a></li>
            <li><a title="My FPV flying YouTube channel" href="https://www.youtube.com/channel/UC5M0tpgDOcNM1zIpqWTKofw" target="_blank" className="fa fa-youtube"></a></li>
          </ul>
        </div>
    </section>
  )
}

export default Intro
