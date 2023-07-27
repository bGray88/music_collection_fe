import React from 'react';

import Albums from '../../components/albums/albums/albums'

import './welcome.css'

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className='top-heading'>
        <h2>Welcome to Your Music!</h2>
        <h2>Recent Additions</h2>
      </div>
      <div className='recent-album_list'>
        <Albums />
      </div>
    </div>
  );
}

export default Welcome;