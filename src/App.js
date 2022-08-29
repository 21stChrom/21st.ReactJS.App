import React from 'react';
import WebImage from '.WebImages.js';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';

function App() {
  return (
    <div className="App">
        <div>
      <WebImage />
      </div>
      <StopWatch />
      <iframe
        id="embed"
        src="https://react-exdcin.stackblitz.io?embed=1&file=src/style.css?embed=1&file=index.js, src/App.js"
        className="App"
      ></iframe>
    </div>
  );
}

export default App;
