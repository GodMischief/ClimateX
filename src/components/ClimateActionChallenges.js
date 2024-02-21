import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClimateActionChallenges = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/climate-action-challenges-page');
  };

  return (
    <div>
      <button onClick={handleClick}>Climate Action Challenges</button>
    </div>
  );
};

export default ClimateActionChallenges;
