import React from 'react';
import { useNavigate } from 'react-router-dom';

const RenewableEnergyMap = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/renewable-energy-map-page');
  };

  return (
    <div>
      <button onClick={handleClick}>Renewable Energy Resource Map</button>
    </div>
  );
};

export default RenewableEnergyMap;
