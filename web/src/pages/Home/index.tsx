import React from 'react';

import './index.scss';

const Home = () => {
  return (
    <div className='page-container'>
      <h1 id='title'>Welcome to Bad Souls</h1>
      <p>
        This tool will help both Game Master and Players during their
        adventures.
      </p>
      <p>Some of the features include:</p>
      <ul>
        <li>Character sheet viewer and manager</li>
        <li>More yet to come</li>
      </ul>
    </div>
  );
};

export default Home;
