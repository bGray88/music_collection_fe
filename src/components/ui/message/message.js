import React from 'react';
import FlashMessage from 'react-flash-message'

const Message = (props) => {
  return (
    <FlashMessage duration={2600}>
      <div className='message-container'>
        <strong>{`${props.message}`}</strong>
      </div>
    </FlashMessage>
  )
}

export default Message