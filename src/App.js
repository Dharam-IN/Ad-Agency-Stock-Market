import './App.css';
import NavBar from './Components/NavBar';
import { News } from './Components/News';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <News/>
      </>
    )
  }
}
