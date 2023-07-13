import React from 'react';

import './Welcome.css'

const Welcome = (props) => {
  const buttonHandler = (event) => {
    props.onLoginClick(event.target.value);
  }

  return (
    <div className="welcome-page">
      <button className='welcome_sign-up' value="signup" onClick={buttonHandler}>Sign Up</button>
      <button className='welcome_sign-in' value="signin" onClick={buttonHandler}>Sign In</button>
    </div>
  );
}

export default Welcome;