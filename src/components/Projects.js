import React from 'react';
import './Projects.css';
import projectOne from './../img/less-but-better.png'
import projectTwo from './../img/coffee-beans.png'
import projectThree from './../img/a-snowballs-chance-in-hell.png'
import projectFour from './../img/tubby-toast.png'

const Projects = () => {
  const projects = [
    { id: 1, title: 'Less, But Better', imageUrl: projectOne },
    { id: 2, title: 'Coffee Beans', imageUrl: projectTwo },
    { id: 3, title: `A Snowball's Chance In Hell`, imageUrl: projectThree },
    { id: 4, title: 'Tubby Toast', imageUrl: projectFour},
  ];

  return (
    <div className="projects-container">
      <h2 className='projects-header'>projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3 className="project-title">{project.title}</h3>
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
