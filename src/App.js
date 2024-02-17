import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';

export class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element = {<News pageSize = {12} country = "in" category = "general"/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/business" element = {<News pageSize = {12} country = "in" category = "business"/>}/>
            <Route path="/entertainment" element = {<News pageSize = {12} country = "in" category = "entertainment"/>}/>
            <Route path="/general" element = {<News pageSize = {12} country = "in" category = "general"/>}/>
            <Route path="/health" element = {<News pageSize = {12} country = "in" category = "health"/>}/>
            <Route path="/science" element = {<News pageSize = {12} country = "in" category = "science"/>}/>
            <Route path="/sports" element = {<News pageSize = {12} country = "in" category = "sports"/>}/>
            <Route path="/technology" element = {<News pageSize = {12} country = "in" category = "technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
