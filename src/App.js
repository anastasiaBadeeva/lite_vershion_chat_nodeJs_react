import React from 'react';
import socket from './socket';
import { JoinBlock } from './components/JoinBlock';
import reducer from './reducer';
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
  });
  const onLogin = () => {
    dispatch({
      type: 'JOINED',
      payload: true,
    });
  };
  return <div className="wrapper">{!state.joined && <JoinBlock onLogin={onLogin} />}</div>;
};

export default App;
