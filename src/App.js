import React from 'react';
import io from 'socket.io-client';

function App() {
  const onConnectSocket = () => {
    io('http://localhost:8888');
  };
  return <button onClick={onConnectSocket}>connect</button>;
}

export default App;
