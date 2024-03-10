import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Background from './Background';
import Projects from './Projects';
import About from './About';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        <Background /> 
        {loading ? ( 
          <Loading />
        ) : (
          <Fragment>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <Hero />
                    <Projects />
                  </Fragment>
                }
              />
              <Route
                path="/about"
                element={<About />}
              />
            </Routes>
          </Fragment>
        )}
      </div>
    </Router>
  );
}

export default App;
