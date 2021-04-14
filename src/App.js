import React from 'react';
import socket from './socket';
import { JoinBlock } from './components/JoinBlock';
import reducer from './reducer';
import Chat from './components/Chat';
import axios from 'axios';
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });
  const onLogin = async (dataSocket) => {
    dispatch({
      type: 'JOINED',
      payload: dataSocket,
    });
    socket.emit('ROOM:JOIN', dataSocket);
    const { data } = await axios.get(`rooms/${dataSocket.roomId}`);
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  };
  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    });
  };
  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message,
    });
  };
  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', addMessage);
  }, []);

  return (
    <div className="wrapper">
      {state.joined ? <Chat {...state} addMessage={addMessage} /> : <JoinBlock onLogin={onLogin} />}
    </div>
  );
};

export default App;
