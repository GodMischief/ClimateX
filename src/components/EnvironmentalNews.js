import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnvironmentalNews = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/environmental-news-page');
  };

  return (
    <div>
      <button onClick={handleClick}>Environmental News</button>
    </div>
  );
};

export default EnvironmentalNews;
