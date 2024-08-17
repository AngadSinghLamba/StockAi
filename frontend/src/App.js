import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ScenarioSelection from './ScenarioSelection';

function App() {
  const [selectedScenario, setSelectedScenario] = useState(null);

  // State for "View Historical Stock Data"
  const [stockSymbol, setStockSymbol] = useState('');
  const [timePeriod, setTimePeriod] = useState('DAILY'); 
  const [dataType, setDataType] = useState('adjusted');
  const [outputSize, setOutputSize] = useState('compact');
  const [startDate, setStartDate] = useState(''); 
  const [endDate, setEndDate] = useState('');

  // State for "Track Intraday Stock Movements"
  const [intradaySymbol, setIntradaySymbol] = useState('');
  const [interval, setInterval] = useState('5min');
  const [extendedHours, setExtendedHours] = useState(true);
  const [intradayOutputSize, setIntradayOutputSize] = useState('compact');
  const [intradayMonth, setIntradayMonth] = useState(''); // YYYY-MM format

  // State for "Get Latest Stock Quotes"
  const [quoteSymbol, setQuoteSymbol] = useState('');

  // State for "Find Stock Symbols"
  const [searchKeywords, setSearchKeywords] = useState('');

  // State for "Track News and Sentiment for Stocks"
  const [newsTickers, setNewsTickers] = useState('');
  const [newsTopics, setNewsTopics] = useState([]);
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [sortBy, setSortBy] = useState('LATEST');
  const [limit, setLimit] = useState(50);

  // State for "Calculate Advanced Stock Metrics"
  const [analyticsSymbols, setAnalyticsSymbols] = useState('');
  const [analyticsRange, setAnalyticsRange] = useState('full');
  const [analyticsInterval, setAnalyticsInterval] = useState('DAILY');
  const [analyticsCalculations, setAnalyticsCalculations] = useState([]);
  const [ohlcField, setOhlcField] = useState('close');
  // Add more state for advanced options if needed (e.g., window size for sliding window)

  // useEffect to track scenario selections (placeholder for now)
  useEffect(() => {
    if (selectedScenario) {
      console.log('Scenario Selected:', selectedScenario);
      // Here you would typically send this data to your analytics or logging system
    }
  }, [selectedScenario]); // Run this effect whenever selectedScenario changes

  const handleScenarioChange = (selectedScenario) => {
    setSelectedScenario(selectedScenario);
    // Reset input values when the scenario changes
    // ... (reset all state variables to their defaults)
  };

  // Placeholder functions to handle form submissions 
  // (we'll add data tracking logic here later)
  const handleFetchData = () => { 
    console.log('Fetching data for:', { 
      stockSymbol,
      timePeriod,
      dataType,
      outputSize,
      startDate,
      endDate,
    });
    // Track API call, data volume, etc.
  };

  const handleTrackIntraday = () => { /* ... */ };
  const handleGetQuote = () => { /* ... */ };
  const handleFindSymbols = () => { /* ... */ };
  const handleTrackNewsSentiment = () => { /* ... */ };
  const handleCalculateMetrics = () => { /* ... */ };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ScenarioSelection onScenarioChange={handleScenarioChange} />

        {/* Conditional rendering for each scenario's input fields */}
        {selectedScenario === 'View Historical Stock Data' && (
          <div>
            <h3>View Historical Stock Data</h3>
            <div>
              <label htmlFor="stockSymbol">Stock Symbol:</label>
              <input 
                type="text" 
                id="stockSymbol" 
                value={stockSymbol} 
                onChange={(e) => setStockSymbol(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="timePeriod">Time Period:</label>
              <select id="timePeriod" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
                <option value="DAILY">Daily</option>
                <option value="WEEKLY">Weekly</option>
                <option value="MONTHLY">Monthly</option>
              </select>
            </div>
            <div>
              <label htmlFor="dataType">Data Type:</label>
              <select id="dataType" value={dataType} onChange={(e) => setDataType(e.target.value)}>
                <option value="adjusted">Adjusted</option>
                <option value="raw">Raw</option>
              </select>
            </div>
            <div>
              <label htmlFor="outputSize">Output Size:</label>
              <select id="outputSize" value={outputSize} onChange={(e) => setOutputSize(e.target.value)}>
                <option value="compact">Compact (100 data points)</option>
                <option value="full">Full (20+ years)</option>
              </select>
            </div>
            <div>
              <label htmlFor="startDate">Start Date (Optional):</label>
              <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor="endDate">End Date (Optional):</label>
              <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <button onClick={handleFetchData}>Fetch Data</button> 
          </div>
        )}

        {/* Add input fields for other scenarios here in a similar way */}
      </header>
    </div>
  );
}