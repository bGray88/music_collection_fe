import React from 'react';

import Albums from '../../Albums/Albums/Albums'

import './Welcome.css'

const Welcome = (props) => {
  const buttonHandler = (event) => {
    props.onSelectOption(event.target.value);
  }

  return (
    <div className="welcome-container">
      <div className='sign-buttons'>
        <button className='welcome_sign-up' value="signup" onClick={buttonHandler}>Sign Up</button>
        <button className='welcome_sign-in' value="signin" onClick={buttonHandler}>Sign In</button>
      </div>
      <div className='recent-list'>
        <h2>Recent Entries</h2>
        <Albums />
      </div>
    </div>
  );
}

export default Welcome;