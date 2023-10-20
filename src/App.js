import './App.css';
import NavBar from './Components/NavBar';
import { News } from './Components/News';
import React, { Component } from 'react'
import { BusinessNews } from './Components/BusinessNews';
import { TechnologyNews } from './Components/TechnologyNews';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <div className="container">
        <Routes>
          <Route path="/" element={<News />}/>
          <Route path="businessnews" element={<BusinessNews />} />
          <Route path="technologynews" element={<TechnologyNews />} />
        </Routes>
       </div>
    </Router>
    )
  }
}
