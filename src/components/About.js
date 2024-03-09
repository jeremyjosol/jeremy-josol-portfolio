import React from 'react';
import './About.css';
import { BsAsterisk } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-container">
      <h1>"ABOUT" <BsAsterisk className='asterisk' /></h1>
      <p className="about-content">
        Born and raised in San Francisco, CA, I'm an artist, musician, graphic & web designer/fullstack developer, farmer by nature, and student of life. 
        <br />
        <br /> 
        Unlike other outlets, code has allowed me the opportunity to freely express my own concepts in a visual realm while challenging my problem-solving capabilities through research and practice of design principles.
        <br />
        <br />
        I'm interested in designing web platforms to promote all forms of art and music, aid in brand development/identity, and build scalable projects with maintainable code.
        <br />
        <br />
        This portfolio is primarily built with React, however, serves as an ongoing exhibition to consistently experiment with new tech/frameworks and to share my thoughts, projects, and multidisciplinary interests that I have. I'm open to likeminded individuals to reach out for collaborations in bringing everlasting concepts to life.
      </p>
    </div>
  );
};

export default About;
