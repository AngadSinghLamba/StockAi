import React, { useState } from 'react';

function ScenarioSelection({ onScenarioChange }) { 
  const [selectedScenario, setSelectedScenario] = useState(null);

  const scenarios = [
    { 
      name: 'View Historical Stock Data', 
      description: 'Retrieve and visualize historical stock data for a single company. Choose the time period, data type, and output size to customize your analysis.' 
    },
    { 
      name: 'Track Intraday Stock Movements', 
      description: 'Explore detailed intraday price movements for a single stock. Select the interval and optional extended hours data for a deeper dive into market activity.' 
    },
    { 
      name: 'Get Latest Stock Quotes', 
      description: 'Quickly access the most up-to-date price and volume information for a single stock.' 
    },
    { 
      name: 'Find Stock Symbols', 
      description: 'Search for stock symbols and company information using keywords. Ideal for finding the right ticker for your analysis.' 
    },
    { 
      name: 'Track News and Sentiment for Stocks', 
      description: 'Analyze news articles and sentiment related to specific stocks or topics. Uncover market trends and potential impacts on stock prices.' 
    },
    { 
      name: 'Calculate Advanced Stock Metrics', 
      description: 'Perform in-depth statistical and technical analysis on one or more stocks. Choose from a variety of metrics and time periods to gain valuable insights.' 
    },
  ];

  const handleScenarioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedScenario(selectedValue);
    onScenarioChange(selectedValue); 
  };

  return (
    <div>
      <h2>Select Analysis Scenario</h2>
      <select value={selectedScenario} onChange={handleScenarioChange}>
        <option value="">-- Select a Scenario --</option>
        {scenarios.map((scenario) => (
          <option key={scenario.name} value={scenario.name}>
            {scenario.name}
          </option>
        ))}
      </select>
      {selectedScenario && <p>{scenarios.find(s => s.name === selectedScenario).description}</p>}
    </div>
  );
}

export default ScenarioSelection;