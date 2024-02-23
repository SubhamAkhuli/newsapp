// import './App.css';
// require('dotenv').config()
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// this is the new react router process 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 12;
  // apikey = process.env.REACT_APP_NEWS_API_ONE;
  // apikey = process.env.REACT_APP_NEWS_API_TWO;
  const apikey = "cf2c2f96fc904f769b1c9790e50ee72f"


  // it is used to initialize the state of the LoadingBar
  const [progress, setProgress] = useState(0)


  
  // new react router process  create a router
  const router = createBrowserRouter([
    {
      // path is the url path
      path: "/",
      // element is the component to be rendered
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="general" />
      </>,
    },
    {
      path: "/about",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <About />
      </>,
    },
    {
      path: "/business",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="business" />
      </>,
    },
    {
      path: "/entertainment",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country="in" category="entertainment" />
      </>,
    },
    {
      path: "/general",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize
          ={pageSize} country="in" category="general" />
      </>,
    },
    {
      path: "/health",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize
          ={pageSize} country="in" category="health" /> 
      </>,
    },
    {
      path: "/science",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize
          ={pageSize} country="in" category="science" />
      </>,
    },
    {
      path: "/sports",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize
          ={pageSize} country="in" category="sports" />
      </>,
    },
    {
      path: "/technology",
      element: <>
        <Navbar title="NoteBook" about="About" />
        <News setProgress={setProgress} apikey={apikey} pageSize
          ={pageSize} country="in" category="technology" />
      </>,
    },
  ]);

  return (
    <div >
        <LoadingBar
          color='green'
          // height={3}
          // it is used to set the progress of the LoadingBar
          progress={progress}
        />
        <RouterProvider router={router}/>
    </div>
  )
}


export default App
