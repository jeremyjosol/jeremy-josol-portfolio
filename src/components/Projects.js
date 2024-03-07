import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: '', imageUrl: '' },
    { id: 2, title: '', imageUrl: '' },
    { id: 3, title: '', imageUrl: '' },
    { id: 4, title: '', imageUrl: ''},
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
