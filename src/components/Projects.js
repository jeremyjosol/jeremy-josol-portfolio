import React from 'react';
import './Projects.css';
import projectOne from './../img/less-but-better.png';
import projectTwo from './../img/coffee-beans.png';
import projectThree from './../img/a-snowballs-chance-in-hell.png';
import projectFour from './../img/tubby-toast.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Less, But Better', imageUrl: projectOne, githubLink: 'https://github.com/jeremyjosol/less-but-better', liveLink: 'https://less-but-better-e4cd9.web.app/' },
    { id: 2, title: 'Coffee Beans', imageUrl: projectTwo, githubLink: 'https://github.com/jeremyjosol/coffee-beans', liveLink: 'https://jeremyjosol.github.io/coffee-beans/' },
    { id: 3, title: `A Snowball's Chance In Hell`, imageUrl: projectThree, githubLink: 'https://github.com/jeremyjosol/ASnowballsChanceInHell', liveLink: 'https://jeremyjosol.github.io/ASnowballsChanceInHell/' },
    { id: 4, title: 'Tubby Toast', imageUrl: projectFour, githubLink: 'https://github.com/jeremyjosol/isabels-nail-studio', liveLink: 'https://tubby-toast.web.app/' },
  ];

  return (
    <div className="projects-container">
      <h2 className='projects-header'>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
