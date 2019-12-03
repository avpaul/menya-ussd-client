import React, { useState } from 'react';
import Input from '../inputComponent/input';
import ListIcon from '../../assets/icons/List';

const BestPractices = () => {
  const [bestPractices, setBestPractices] = useState([]);
  return (
    <>
      <div className="section">
        <div className="section__title">Best practices on Irrigation</div>
        {!!bestPractices.length && <div className="section__list"></div>}

        {!bestPractices.length && (
          <div className="section__list is-empty">
            <div className="icon--wrapper">
              <ListIcon width="14" height="14" />
            </div>
            <span>No best practice given!</span>
          </div>
        )}
        <Input placeholder="Add a best practice!" />
      </div>
      <div className="section">
        <div className="section__title">Best practices on Conservation</div>
        {!!bestPractices.length && <div className="section__list"></div>}
        {!bestPractices.length && (
          <div className="section__list is-empty">
            <div className="icon--wrapper">
              <ListIcon width="14" height="14" />
            </div>
            <span>No best practice given!</span>
          </div>
        )}
        <Input placeholder="Add a best practice!" />
      </div>
    </>
  );
};

export default BestPractices;
