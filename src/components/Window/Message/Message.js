import React from 'react';
import FlashMessage from 'react-flash-message'

const Message = () => (
  <FlashMessage duration={2600}>
    <div className='message-container'>
      <strong>User Added Successfully</strong>
    </div>
  </FlashMessage>
)

export default Message