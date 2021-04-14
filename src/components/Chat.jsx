import React from 'react'
import socket from '../socket'
const Chat = ({users,messages, userName ,roomId}) => {
    const [messageValue, setMessageValue] = React.useState('')
    const onSend = () =>{
        console.log("dd")
        socket.emit('ROOM:NEW_MESSAGE',{
            roomId,
            userName,
            text : messageValue
        })
        setMessageValue('')
    }
    return (
        <div className="chat">
      <div className="chat-users">
        Room: <b>roomId</b>
        <hr />
        <b>Online : {users.length}</b>
        <ul>
            {users.map( (name,index) => <li key={name + index}>{name}</li>)}
        </ul>
      </div>
      <div className="chat-messages">
        <div  className="messages">
          {messages.map((message) => (
            <div key={roomId +message} className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows="3"></textarea>
          <button onClick={onSend} type="button" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
    )
}
export default Chat;
