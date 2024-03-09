import React from 'react';
import './Projects.css';
import projectOne from './../img/ue-comix.png';
import projectTwo from './../img/less-but-better.png';
import projectThree from './../img/coffee-beans.png';
import projectFour from './../img/a-snowballs-chance-in-hell.png';
import projectFive from './../img/tubby-toast.png';
import projectSix from './../img/text-adventure.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { id: 1, title: 'UE Comix', imageUrl: projectOne, githubLink: 'https://github.com/jeremyjosol/stable-diffusion-webui', liveLink: 'https://uecomix.ai', description: `A significant milestone in my journey, 'UE Comix' represents my first step into the realm of professional software development as part of an internship experience engaging with an existing codebase, contributing React components and executing database migration using Django to complete assigned tasks.` },
    { id: 2, title: 'Less, But Better', imageUrl: projectTwo, githubLink: 'https://github.com/jeremyjosol/less-but-better', liveLink: 'https://less-but-better-e4cd9.web.app/', description: `'Less, But Better' is a capstone project that commemorates the foundation I gained at an intensive coding academy. Inspired by Dieter Rams, this React application showcases my process of creating and executing 'Smoothed Particle Hydrodynamics' developed with C# scripts and the Unity engine.` },
    { id: 3, title: 'Coffee Beans', imageUrl: projectThree, githubLink: 'https://github.com/jeremyjosol/coffee-beans', liveLink: 'https://jeremyjosol.github.io/coffee-beans/', description: `'Coffee Beans' is a frontend wireframing project primarily focused on showcasing design choices and frontend development skills. This 'Blue Bottle Coffee' themed coffee bean inventory management system is built using React components, demonstrating my proficiency in frontend development and design.` },
    { id: 4, title: `A Snowball's Chance In Hell`, imageUrl: projectFour, githubLink: 'https://github.com/jeremyjosol/ASnowballsChanceInHell', liveLink: 'https://jeremyjosol.github.io/ASnowballsChanceInHell/', description: `'A Snowball's Chance In Hell' is a  collaborative 'Roll-A-Ball' inspired Unity game project developed with C#. Starting off with zero knowledge in Unity prior, this project showcases custom scripts and features for a creative gaming experience which was completed within one week, proving a collective ability to quickly adapt to new technologies and frameworks.` },
    { id: 5, title: 'Tubby Toast', imageUrl: projectFive, githubLink: 'https://github.com/jeremyjosol/isabels-nail-studio', liveLink: 'https://tubby-toast.web.app/', description: `'Tubby Toast' is a responsive web application built with React components, hosted on Firebase, integrating the efficiency of their cloud-based (BaaS) database solution as part of a contracted assignment for a client's nail studio data management. (WIP)` },
    { id: 6, title: 'Text Adventure', imageUrl: projectSix, githubLink: 'https://github.com/jeremyjosol/text-adventure', liveLink: 'https://jfpalchak.github.io/text-adventure/', description: `'Text Adventure' is a collaborative text-based adventure game, where the user navigates and interacts with the world via text input developed with Javascript. This is the very first game that I contributed code logic and design into as well as worked in a collaborative effort to complete an application given a deadline.`},
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
