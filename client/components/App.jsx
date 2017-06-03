import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Intro from './Intro'
import Competency from './Competency'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/' component={Intro} />

    </div>
  </Router>
)

export default App
// <Route exact path='/' component={Competency} />
