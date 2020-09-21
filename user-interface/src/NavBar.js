import React from 'react';
import projects from './projects';



const NavBar = props =>{
    console.log(props)
    return(
        <div className ="logo-box">
            <h1>{props.data.login}'s Dev Resume</h1>
            <div className="nav-bar">
                <li>
                    <button><a href={props.data.html_url}>Visit My Github</a></button>
                </li>
                <li>
                    <button><a href="https://www.linkedin.com/in/osvaldo-lievano/">LinkedIn Profile</a></button>
                </li>
                <li>
                    <button><a href="#">Resume</a></button>
                </li>
            </div>
        </div>
    )
}

export default NavBar;