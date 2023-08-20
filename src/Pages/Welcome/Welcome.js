import React, { useEffect, useState } from 'react';

import { WelcomeApi } from '../../API/General/WelcomeApi';
import Loading from 'react-loading';
import './Welcome.css'

const Welcome = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    WelcomeApi(setLoading)
  }, [])

  if (isLoading) {
    return (
      <div className='albums__loading'>
        <h2>Processing...</h2>
        <Loading />
      </div>
    )
  } else {
    return (
      <div className='welcome-container'>
        <div className='top-heading'>
          <h2>Welcome to Your Music!</h2>
        </div>
      </div>
    );
  }
}

export default Welcome;