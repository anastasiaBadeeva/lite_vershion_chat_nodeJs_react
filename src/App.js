import React from 'react';
import io from 'socket.io-client';

function App() {
  const onConnectSocket = () => {
    io('http://localhost:8888');
  };
  return (
    <div className="wrapper">
      <div className="join-block">
        <input type="text" placeholder="ROOM ID" value=""></input>
        <input type="text" placeholder="Your name" value=""></input>
        <button className="btn btn-success">Entry</button>
      </div>
    </div>
  );
}

export default App;
