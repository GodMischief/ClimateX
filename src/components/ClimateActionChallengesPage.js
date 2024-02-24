import React, { useState } from 'react';

const ClimateActionChallengesPage = () => {
  const [selectedDescription, setSelectedDescription] = useState(null); // State to track selected challenge description

  // State to keep track of selected challenges
  const [selectedChallenges, setSelectedChallenges] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the challenge to the selectedChallenges array if checked
      setSelectedChallenges([...selectedChallenges, value]);
    } else {
      // Remove the challenge from the selectedChallenges array if unchecked
      setSelectedChallenges(selectedChallenges.filter((challenge) => challenge !== value));
    }
  };

  // Function to handle challenge click and show description
  const handleChallengeClick = (description) => {
    setSelectedDescription(description);
  };

  return (
    <div className='cac'>
      <h2>Climate Action Challenges</h2><br/>
      <p>Select the challenges you want to participate in:</p><br/>
      <ol>
        {/* Render challenges with onClick to display description */}
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Implement strategies to minimize waste and maximize resource efficiency.")}>Challenge 1: Reduce, Reuse, Recycle</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Opt for appliances with high energy efficiency ratings to reduce energy consumption.")}>Challenge 2: Use energy-efficient appliances</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Conserve water by fixing leaks, using water-saving devices, and practicing mindful water usage.")}>Challenge 3: Reduce water usage</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Support reforestation efforts and enhance carbon sequestration by planting trees.")}>Challenge 4: Plant a tree</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Reduce carbon emissions by utilizing public transportation or carpooling.")}>Challenge 5: Use public transportation or carpool</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Minimize food waste through meal planning, proper storage, and composting.")}>Challenge 6: Reduce food waste</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Advocate for and invest in renewable energy sources such as solar and wind power.")}>Challenge 7: Support renewable energy</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Spread awareness and knowledge about climate change and its impacts.")}>Challenge 8: Educate others about climate change</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Minimize plastic consumption and opt for eco-friendly alternatives.")}>Challenge 9: Reduce plastic usage</li>
        <li className='climate-action-challenges' onClick={() => handleChallengeClick("Choose locally sourced and sustainably produced goods to reduce environmental footprint.")}>Challenge 10: Support local and sustainable products</li>
      </ol>
      {/* Display selected challenge description */}
      <div>
        <br/>
        {selectedDescription && <p><b>Description:</b> {selectedDescription}</p>}
      </div>
      {/* Render checkboxes for challenges */}
      <br/><br/><br/>
      <p><b>Challenges:</b></p><br/>
      <form>
        {/* Render 10 challenges as checkboxes */}
        {[...Array(10)].map((_, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`challenge${index + 1}`}
              value={`Challenge ${index + 1}`}
              checked={selectedChallenges.includes(`Challenge ${index + 1}`)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={`challenge${index + 1}`}>{`Challenge ${index + 1}`}</label>
          </div>
        ))}
      </form>
      {/* Display completed challenges */}
      <div>
        <br/>
        <p><b>Completed Challenges:</b></p>
        <br/>
        <ul>
          {selectedChallenges.map((challenge, index) => (
            <li className='completed-challenges' key={index}>{challenge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClimateActionChallengesPage;
