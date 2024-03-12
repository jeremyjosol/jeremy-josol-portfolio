import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>"STORY"</h1>
      <p className="about-content">
        Jeremy Josol is a multidisciplinary artist born and raised in San Francisco, CA, where he built a strong foundation of love for art and culture—  elements that he strives to connect into his professional work. Currently residing in Portland, OR, the various mediums he creates include but are not limited to music production, photography, graphic/web design, approaching each with careful precision, passion, and synergy.
        <br />
        <br /> 
        Since learning the foundation of web development, he quickly learned that the art of coding has allowed him the opportunity to freely translate his concepts into visual forms while challenging his problem-solving capabilities through the practice of influential design principles.
        <br />
        <br />
        Jeremy is interested in developing web platforms to promote all forms of art; such as music and design, aid in brand development/identity, and build beautiful scalable projects with clean maintainable code.
        <br />
        <br />
        This portfolio is primarily built with React, however, serves as an ongoing exhibition to consistently experiment with new tech/frameworks and to share thoughts, projects, and mutual interests.
      </p>
      <ul className='archive'> <span className='features'>Archive Features:</span>
        <hr />
        <li><strong>Apple Music</strong> | <a href='https://music.apple.com/ca/station/episode-310/ra.1239103378' target="_blank" rel="noopener noreferrer">Episode 310 Soulection Radio</a></li>
        <li><strong>Bodega</strong> | <a href='https://bdgastore.com/blogs/blogdega/editorial-bodega-x-garbstore-pond-across-the-pond' target='_blank' rel='noopener noreferrer'>Bodega x Garbstore 'Bond Across the Pond' Editorial</a></li>
        <li><strong>Bodega</strong> | <a href='https://bdgastore.com/blogs/blogdega/editorial-bodega-x-suicoke-kaw-one-of-one' target='_blank' rel='noopener noreferrer'>Bodega x Suicoke Kaw 'One of One' Editorial</a></li>
        <li><strong>Complex</strong> | <a href='https://www.complex.com/style/a/sanj-patel/garbstore-fo-jacket'>Bodega x Garbstore</a></li>
        <li><strong>Input</strong> | <a href='https://www.inverse.com/input/style/bodegas-denim-suicoke-sandal-is-meant-to-get-better-with-age'>Bodega x Suicoke</a></li>
        <li><strong>Highsnobiety</strong> | <a href='https://www.highsnobiety.com/p/bodega-suicoke-collab-sandal-shoe-denim/'>Bodega x Suicoke</a></li>
        <li><strong>Hypebeast</strong> | <a href='https://hypebeast.com/2022/8/bodega-suicoke-kaw-denim-one-of-one-release-date'>Bodega x Suicoke</a></li>
        <li><strong>Hypebeast</strong> | <a href='https://www.instagram.com/p/lgj3C1xelZ/' target='_blank' rel='noopener noreferrer'>#onfeet Instagram Series</a></li>
        <li><strong>Hypebeast</strong> | <a href='https://www.instagram.com/p/lb5azbxepN/' target='_blank' rel='noopener noreferrer'>#hbouthere Instagram series</a></li>
        <li><strong>Hypebeast</strong> | <a href='https://www.instagram.com/p/lOjz4axeit/?igsh=M29pcXB1YnhrbjVh' target='_blank' rel='noopener noreferrer'>#hypebeastproblems Instagram Series</a></li>
      </ul>
    </div>
  );
};

export default About;
