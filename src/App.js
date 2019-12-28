
import './styles/App.css';
import 'antd/dist/antd.css';

import React from 'react';
import Landing from './Landing.js';
import TopNavBar from './TopNavBar.js';


function App() {
  return (
    <div className="App">
      <TopNavBar></TopNavBar>
      <Landing/>
      
    </div>
  );
}

export default App;
