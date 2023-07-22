import React from 'react';

import Albums from '../../Components/Albums/Albums/Albums'

import './Welcome.css'

const Welcome = (props) => {
  return (
    <div className='welcome-container'>
      <div className='top-heading'>
        <h2>Recent Entries</h2>
      </div>
      <div className='recent-album_list'>
        <Albums />
      </div>
    </div>
  );
}

export default Welcome;