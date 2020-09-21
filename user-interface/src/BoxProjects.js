import React from 'react';
import Project from './Project';

const BoxProjects = props =>{
    const myprojects = props.data.my_projects;
    console.log(myprojects)
    return(
        <div className="box-projects">
            {myprojects.map(project =>{
                return <Project project = {project}/>
            })}
        </div>
    )
}
export default BoxProjects;