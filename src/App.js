import React, { useState } from 'react';
import './App.scss';
import BestPracticesPanel from './components/practicesPanelComponent/practicesPanel';
import PlantsPanel from './components/plantsPanelComponent/plantsPanel';
import SeasonsPanel from './components/seasonsPanelComponent/seasonsPanel';

function App() {
  const [activeHeader, setActiveHeader] = useState('plants');

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="main--panel__wrapper">
        <div className="main--panel__header">
          <div
            className={`header--action ${
              activeHeader === 'practices' ? 'is-active' : ''
            }`}
            onClick={() => setActiveHeader('practices')}
          >
            Best Practices
          </div>
          <div
            className={`header--action ${
              activeHeader === 'seasons' ? 'is-active' : ''
            }`}
            onClick={() => setActiveHeader('seasons')}
          >
            Agricultural Seasons
          </div>
          <div
            className={`header--action ${
              activeHeader === 'plants' ? 'is-active' : ''
            }`}
            onClick={() => setActiveHeader('plants')}
          >
            Crops and Fruits
          </div>
        </div>
        <div className="main--panel">
          {activeHeader === 'practices' && <BestPracticesPanel />}
          {activeHeader === 'seasons' && <SeasonsPanel />}
          {activeHeader === 'plants' && <PlantsPanel />}
        </div>
      </div>
    </div>
  );
}

export default App;
