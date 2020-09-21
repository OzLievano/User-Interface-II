import React from 'react';


const Project = props => {
    const {project} = props;
    console.log(project);
    return (
            <div className="project">
                <h3>Project Name:{project.project_name}</h3>
                <img src={project.avatar_url}></img>
                <p>To visit this project, click here:<button><a href={project.project_url}></a>Project URL</button>, project collaborator:{project.project_collaborators}</p>
            </div>
    )
}

export default Project;