// import './App.css';
// require('dotenv').config()
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  pageSize = 12;
  // apikey = process.env.REACT_APP_NEWS_API_1;
  // apikey = process.env.REACT_APP_NEWS_API_2;
  apikey="cf2c2f96fc904f769b1c9790e50ee72f"
  


  // it is used to initialize the state of the LoadingBar
  state = {
    progress: 0
  }
// it is used to set the progress of the LoadingBar
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div >
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='green'
            // height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
