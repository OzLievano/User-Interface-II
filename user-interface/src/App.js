import React from 'react';
import logo from './logo.svg';
import './App.css';
import projects from './projects';
import BoxProjects from'./BoxProjects';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <NavBar data={projects} />
    <BoxProjects data = {projects}/>
    </>
  )
}

export default App;
