import React from 'react';
import io from 'socket.io-client';
import { JoinBlock } from './components/JoinBlock';

const socket = io('http://localhost:8888');
const App = () => {
  return (
    <div className="wrapper">
      <JoinBlock />
    </div>
  );
};

export default App;
