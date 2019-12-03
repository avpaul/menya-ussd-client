import React, { useState } from 'react';
import Input from '../inputComponent/input';
import ListIcon from '../../assets/icons/List';
import './seasonsPanel.scss';

const SeasonsPanel = () => {
  const [bestPractices, setBestPractices] = useState([]);
  return (
    <>
      <div className="section">
        <div className="season--year">
          <div className="season--year__label">Season Year:</div>
          <input type="text" className="input season--year__input" />
        </div>
        <div className="season--wrapper">
          <div className="season--wrapper__name">Season A</div>
          <div className="season--dates">
            <input type="date" className="input season--dates__starts" />
            <input type="date" className="input season--dates__ends" />
          </div>
          <Input placeholder="Any comment?" />
        </div>
        <div className="season--wrapper">
          <div className="season--wrapper__name">Season B</div>
          <div className="season--dates">
            <input type="date" className="input season--dates__starts" />
            <input type="date" className="input season--dates__ends" />
          </div>
          <Input placeholder="Any comment?" />
        </div>
        <div className="season--wrapper">
          <div className="season--wrapper__name">Season C</div>
          <div className="season--dates">
            <input type="date" className="input season--dates__starts" />
            <input type="date" className="input season--dates__ends" />
          </div>
          <Input placeholder="Any comment?" />
        </div>
      </div>
    </>
  );
};

export default SeasonsPanel;
