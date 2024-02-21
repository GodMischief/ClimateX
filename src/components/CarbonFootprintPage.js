import React, { useState } from 'react';

const CarbonFootprintPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h2><b>Carbon Footprint Tracker</b></h2><br/>
      <p>Carbon footprint tracker is a tool that helps you measure the carbon footprint of your daily activities. It can help you identify areas where you can reduce your carbon footprint and take steps to mitigate climate change.</p><br/>
      <p>
        <a href="https://www.carbonfootprint.com/calculator.aspx" target="_blank" rel="noreferrer">
          <b>Carbon Footprint Calculator</b>
        </a>{' '}<br/><br/>
        Here's a brief overview of how this can be done:</p><br/>
        <ul className='carbon-footprint-list'>
          <li className='carbon-list' onClick={() => handleClick(0)}><b>Identify Emission Sources</b></li>
          {activeIndex === 0 && (
            <p>The first step is to identify all the sources of greenhouse gas emissions within the community. This includes transportation (cars, buses, trains), energy usage (electricity, heating, cooling), industrial processes, waste management, agriculture, and more.</p>
          )}<br/>
          <li className='carbon-list' onClick={() => handleClick(1)}><b>Gather Data</b></li>
          {activeIndex === 1 && (
            <p>Collect data on energy consumption, transportation habits, waste production, and other relevant factors. This data can come from sources such as utility bills, transportation surveys, waste management records, and government databases.</p>
          )}<br/>
          <li className='carbon-list' onClick={() => handleClick(2)}><b>Calculate Emissions</b></li>
          {activeIndex === 2 && (
            <p>Once you have the data, use emission factors to calculate the amount of greenhouse gases emitted from each source. Emission factors are standardized values that represent the amount of emissions produced per unit of activity (e.g., per kilometer driven, per kilowatt-hour of electricity consumed).</p>
          )}<br/>
          <li className='carbon-list' onClick={() => handleClick(3)}><b>Aggregate Results</b></li>
          {activeIndex === 3 && (
            <p>Sum up the emissions from all sources to get the total carbon footprint of the community. This can be expressed in terms of carbon dioxide equivalents (CO2e), which combines the effects of different greenhouse gases (such as carbon dioxide, methane, and nitrous oxide) into a single measure based on their global warming potential.</p>
          )}<br/>
          <li className='carbon-list' onClick={() => handleClick(4)}><b>Analysis and Reporting</b></li>
          {activeIndex === 4 && (
            <p>Analyze the results to identify the main sources of emissions and opportunities for reducing them. This information can be used to develop strategies and policies to mitigate climate change at the community level.</p>
          )}<br/>
        </ul>
        <br/>
        <p>Tools like Carbon Footprint Trackers can streamline this process by providing a platform for collecting data, calculating emissions, and visualizing results. They can also offer insights into how individual actions contribute to the overall carbon footprint of the community, helping to raise awareness and drive behavior change.</p>
    </div>
  );
};

export default CarbonFootprintPage;
