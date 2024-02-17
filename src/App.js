import './App.css';

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={12}/>
      </div>
    )
  }
}

export default App
