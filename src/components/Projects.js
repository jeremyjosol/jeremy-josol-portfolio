import React from 'react';
import './Projects.css';
import projectOne from './../img/ue-comix.png';
import projectTwo from './../img/less-but-better.png';
import projectThree from './../img/coffee-beans.png';
import projectFour from './../img/a-snowballs-chance-in-hell.png';
import projectFive from './../img/tubby-toast.png';
import projectSix from './../img/text-adventure.png';
import photoOne from './../img/tondo.png';
import photoTwo from './../img/tricycle.png';
import photoThree from './../img/courtyard.png';
import photoFour from './../img/pigeons.png';
import photoFive from './../img/musician.png';
import photoSix from './../img/mt-davidson.png';
import photoSeven from './../img/sunray-one.png';
import photoEight from './../img/sunray-two.png';
import photoNine from './../img/sunset.png';
import photoTen from './../img/drive.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { RiToolsLine } from "react-icons/ri";

const Projects = () => {
  const projects = [
    { id: 1, title: 'UE Comix', imageUrl: projectOne, githubLink: 'https://github.com/jeremyjosol/stable-diffusion-webui', liveLink: 'https://uecomix.ai', description: `'UE Comix' represents my first step into the domain of professional software development as part of an internship experience engaging with an established codebase, contributing React components and executing database migration using Django and Python on the backend within a staging server environment.`, category: 'Web Design' },
    { id: 2, title: 'Less, But Better', imageUrl: projectTwo, githubLink: 'https://github.com/jeremyjosol/less-but-better', liveLink: 'https://less-but-better-e4cd9.web.app/', description: `'Less, But Better' is a capstone project that commemorates the foundation I gained at an intensive coding academy. With design inspired by Dieter Rams, this React application showcases my process of creating and executing 'Smoothed Particle Hydrodynamics' developed with C# scripts and the Unity engine.`, category: 'Web Design' },
    { id: 3, title: 'Coffee Beans', imageUrl: projectThree, githubLink: 'https://github.com/jeremyjosol/coffee-beans', liveLink: 'https://jeremyjosol.github.io/coffee-beans/', description: `'Coffee Beans' is a frontend wireframing concept primarily focused on showcasing design choices and frontend development skills. This 'Blue Bottle Coffee' themed coffee bean inventory management CRUD system is built using React components, demonstrating my proficiency in frontend development and design.`, category: 'Web Design' },
    { id: 4, title: `A Snowball's Chance In Hell`, imageUrl: projectFour, githubLink: 'https://github.com/jeremyjosol/ASnowballsChanceInHell', liveLink: 'https://jeremyjosol.github.io/ASnowballsChanceInHell/', description: `'A Snowball's Chance In Hell' is a  collaborative 'Roll-A-Ball' inspired Unity game project developed with C#. Starting off with zero knowledge in Unity prior, this project showcases custom scripts and features for a creative gaming experience which was completed within one week, validating a collective ability to quickly adapt to new technologies and frameworks.`, category: 'Games' },
    { id: 5, title: 'Tubby Toast', imageUrl: projectFive, githubLink: 'https://github.com/jeremyjosol/isabels-nail-studio', liveLink: 'https://tubby-toast.web.app/', description: `'Tubby Toast' is a responsive web application built with React components, hosted on Firebase, integrating the efficiency of their cloud-based (BaaS) database solution as part of a contracted assignment for a client's nail studio data management. This project involved conducting user research to inform design decisions and ensure alignment with client expectations. (WIP)`, category: 'Web Design' },
    { id: 6, title: 'Text Adventure', imageUrl: projectSix, githubLink: 'https://github.com/jeremyjosol/text-adventure', liveLink: 'https://jfpalchak.github.io/text-adventure/', description: `'Text Adventure' is a collaborative 90s inspired 8-bit text-based adventure game, where the user navigates and interacts with the world via text input developed with Javascript. This is the very first game that I contributed code logic and design into as well as worked in a collaborative effort to complete an application given a deadline.`, category: 'Games' },
    { id: 7, title: 'Tondo', imageUrl: photoOne, category: 'Photo' },
    { id: 8, title: 'Tricycle', imageUrl: photoTwo, category: 'Photo' },
    { id: 9, title: 'Chinatown Courtyard', imageUrl: photoThree, category: 'Photo' },
    { id: 10, title: 'Pigeons', imageUrl: photoFour, category: 'Photo' },
    { id: 11, title: 'Musician', imageUrl: photoFive, category: 'Photo'},
    { id: 12, title: 'Mt Davidson', imageUrl: photoSix, category: 'Photo'},
    { id: 13, title: 'Sunray', imageUrl: photoSeven, category: 'Photo'},
    { id: 14, title: 'Sunray II', imageUrl: photoEight, category: 'Photo'},
    { id: 15, title: 'Sunset', imageUrl: photoNine, category: 'Photo'},
    { id: 16, title: 'Drive', imageUrl: photoTen, category: 'Photo'},
  ];

  const webAppsProjects = projects.filter(project => project.category === 'Web Design');
  const gamesProjects = projects.filter(project => project.category === 'Games');
  const photoProjects = projects.filter(project => project.category === 'Photo');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };

  return (
    <div className="projects-container">
      <h2 className='projects-header'>
        <RiToolsLine className='tools' />
        Projects
      </h2>
      <div id="webDesignSection">
        <h2 className="projects-section-title">Web Design</h2>
        <div className="projects-grid">
          {webAppsProjects.map(project => (
            <div key={project.id} className="project-card" id={`project-${project.id}`}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
              </a>
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
      <div id="gamesSection">
        <h2 className="projects-section-title">Game</h2>
        <div className="projects-grid">
          {gamesProjects.map(project => (
            <div key={project.id} className="project-card" id={`project-${project.id}`}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
              </a>
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
      <div id="photoSection">
        <h2 className="projects-section-title">Photo</h2>
        <div className="photo-projects-grid">
          {photoProjects.map(project => (
            <div key={project.id} className="photo-project-card" id={`project-${project.id}`}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
              </a>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;