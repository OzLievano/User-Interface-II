import React from 'react';
import projects from '../projects';
import BoxProjects from'./BoxProjects';
import NavBar from './NavBar';
import AboutMe from './AboutMe';

function App() {
  return (
    <>
    <NavBar data={projects} />
    <AboutMe />
    <BoxProjects data = {projects}/>
    </>
  )
}

export default App;
