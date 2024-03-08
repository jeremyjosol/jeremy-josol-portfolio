import React from 'react';
import './Projects.css';
import projectOne from './../img/less-but-better.png';
import projectTwo from './../img/coffee-beans.png';
import projectThree from './../img/a-snowballs-chance-in-hell.png';
import projectFour from './../img/tubby-toast.png';
import projectFive from './../img/text-adventure.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Less, But Better', imageUrl: projectOne, githubLink: 'https://github.com/jeremyjosol/less-but-better', liveLink: 'https://less-but-better-e4cd9.web.app/', description: `A Dieter Rams inspired React application showcasing the process of the creation and execution of 'Smoothed Particle Hydrodynamics' using the Unity engine.` },
    { id: 2, title: 'Coffee Beans', imageUrl: projectTwo, githubLink: 'https://github.com/jeremyjosol/coffee-beans', liveLink: 'https://jeremyjosol.github.io/coffee-beans/', description: `A 'Blue Bottle Coffee' themed coffee bean inventory management system developed and built using React components.` },
    { id: 3, title: `A Snowball's Chance In Hell`, imageUrl: projectThree, githubLink: 'https://github.com/jeremyjosol/ASnowballsChanceInHell', liveLink: 'https://jeremyjosol.github.io/ASnowballsChanceInHell/', description: `A 'Roll-A-Ball' inspired Unity game developed with C#, showcasing custom scripts and features for a creative gaming experience.` },
    { id: 4, title: 'Tubby Toast', imageUrl: projectFour, githubLink: 'https://github.com/jeremyjosol/isabels-nail-studio', liveLink: 'https://tubby-toast.web.app/', description: `A responsive web application built with React components, hosted on Firebase, integrating the efficiency of their cloud-based (BaaS) database solution for our client's nail studio data management.` },
    { id: 5, title: 'Text Adventure', imageUrl: projectFive, githubLink: 'https://github.com/jeremyjosol/text-adventure', liveLink: 'https://jfpalchak.github.io/text-adventure/', description: 'A text-based adventure game, where the user navigates and interacts with the world via text input developed with Javascript.'},
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
              <p className="project-description">{project.description}</p>
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
