import './messageBox.css'
import React from 'react'
import { Close } from '@mui/icons-material';

function MessageBox({friendData, setClicked}) {
  return (
    <div className='messagebox-container'>
        <div className="show-user">
            <div className="user">{friendData.username}</div>
            <div className="close-btn-message-box">
                <Close onClick={()=>{setClicked(null)}}/>
            </div>
        </div>
        <div className="chatting-box">
          <div className="chatting-box-left">
      
          </div>
          <div className="chatting-box-right">

          </div>
        </div>
        <div className="message-input">
          <input className='message-input-text-box'placeholder='  Enter your message here...' type="text" />
          <button className='message-input-send-btn'>Send</button>
        </div>
    </div>
  )
}

export default MessageBox