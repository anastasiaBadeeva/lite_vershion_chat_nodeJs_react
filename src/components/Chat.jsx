import React from 'react'

const Chat = ({users}) => {
    console.log(users)
    return (
        <div className="chat">
      <div className="chat-users">
        Room: <b>roomId</b>
        <hr />
        <b>Online : {users.length}</b>
        <ul>
            {users.map( name => <li>{name}</li>)}
          {/* {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))} */}
        </ul>
      </div>
      <div className="chat-messages">
        <div  className="messages">
          {/* {messages.map((message) => (
            <div className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))} */}
        </div>
        <form>
          <textarea
            // value={messageValue}
            // onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows="3"></textarea>
          <button  type="button" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
    )
}
export default Chat;
