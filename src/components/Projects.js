import React from 'react';
import './Projects.css';
import projectOne from './../img/less-but-better.png'

const Projects = () => {
  const projects = [
    { id: 1, title: 'Less, But Better', imageUrl: projectOne },
    { id: 2, title: 'Project 2', imageUrl: '' },
    { id: 3, title: 'Project 3', imageUrl: '' },
    { id: 4, title: 'Project 4', imageUrl: ''},
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
