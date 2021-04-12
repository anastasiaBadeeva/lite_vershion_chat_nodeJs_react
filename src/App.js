import React from 'react';
import socket from './socket';
import { JoinBlock } from './components/JoinBlock';
import reducer from './reducer';
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });
  const onLogin = (dataSocket) => {
    dispatch({
      type: 'JOINED',
      payload: dataSocket,
    });
    socket.emit('ROOM:JOIN', dataSocket);
  };
  console.log(state);
  return <div className="wrapper">{!state.joined && <JoinBlock onLogin={onLogin} />}</div>;
};

export default App;
