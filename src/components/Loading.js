import React, { useState, useEffect } from 'react';
import './Loading.css';
import { FiLoader } from "react-icons/fi";


const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {loading ? (
        <div>
          <FiLoader className="loading-icon" />
          <div className="loading-text">Loading...</div>
        </div>
      ) : (
        <div className="content"></div>
      )}
    </div>
  );
};

export default Loading;
