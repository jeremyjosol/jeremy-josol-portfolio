import React from 'react';
import './About.css';
import { BsAsterisk } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-container">
      <h1>"ABOUT" <BsAsterisk className='asterisk' /></h1>
      <p className="about-content">
        I grew up in San Francisco, CA where I built a strong foundation of love for art and culture—  elements that I strive to connect into my professional work. As a multidisciplinary artist, I create various mediums including and not limited to music, graphic/web design, approaching each with passion and synergy.
        <br />
        <br /> 
        The art of coding has allowed me the opportunity to freely translate my concepts into visual forms while challenging my problem-solving capabilities through research and practice of influential design principles.
        <br />
        <br />
        I'm interested in developing web platforms to promote all forms of art; such as music and design, aid in brand development/identity, and build beautiful scalable projects with clean maintainable code.
        <br />
        <br />
        This portfolio is primarily built with React, however, serves as an ongoing exhibition to consistently experiment with new tech/frameworks and to share my thoughts, projects, and mutual interests. I'm open to likeminded individuals to reach out for collaborations and bringing innovative ideas to life.
      </p>
    </div>
  );
};

export default About;
