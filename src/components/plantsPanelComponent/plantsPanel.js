import React, { useState } from 'react';
import Input from '../inputComponent/input';

const PlantsPanel = () => {
  // const [bestPractices, setBestPractices] = useState([]);
  const districts = [
    { value: 'rubavu', display: 'Rubavu' },
    { value: 'musanze', display: 'Musanze' },
    { value: 'nyarugenge', display: 'Nyarugenge' },
    { value: 'burera', display: 'Burera' },
    { value: 'gicumbi', display: 'Gicumbi' },
    { value: 'huye', display: 'Huye' },
    { value: 'rutsiro', display: 'Rutsiro' }
  ];
  return (
    <>
      <div className="section">
        <div className="season--year">
          <div className="season--year__label">Season Year:</div>
          <select>
            <option>2019-2020</option>
          </select>
        </div>
        <div className="season--year">
          <div className="season--year__label">District:</div>
          <select>
            {districts.map(district => (
              <option value={district.value}>{district.display}</option>
            ))}
          </select>
        </div>
        <div className="season--wrapper">
          <div className="season--wrapper__name">District's Crop</div>
          <div className="season--dates">
            <input
              type="text"
              className="input season--dates__starts"
              placeholder="Crop name"
            />
            <input
              type="text"
              className="input season--dates__ends"
              placeholder="Izina ry'gihingwa"
            />
          </div>
        </div>
        <div className="season--wrapper">
          <div className="season--wrapper__name">District's Fruit</div>
          <div className="season--dates">
            <input
              type="text"
              className="input season--dates__starts"
              placeholder="Fruit name"
            />
            <input
              type="text"
              className="input season--dates__ends"
              placeholder="Izina ry'gihingwa"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantsPanel;
