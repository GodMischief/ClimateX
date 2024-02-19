import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarbonFootprintTracker = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/carbon-footprint');
  };

  return (
    <div>
      <button onClick={handleClick}>Carbon Footprint Tracker</button>
    </div>
  );
};

export default CarbonFootprintTracker;
