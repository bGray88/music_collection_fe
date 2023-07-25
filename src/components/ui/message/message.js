import React from 'react';
import FlashMessage from 'react-flash-message'

const Message = (props) => {
  return (
    <FlashMessage duration={2600}>
      <div className='message-main'>
        <strong>{`${props.message}`}</strong>
      </div>
    </FlashMessage>
  )
}

export default Message