import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Background from './Background';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <Background />
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
            element={      
              <About />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
