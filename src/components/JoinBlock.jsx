import React from 'react'
import socket from '../socket';
export const JoinBlock = () => {
    return (
        <div className="join-block">
        <input type="text" placeholder="ROOM ID" ></input>
        <input type="text" placeholder="Your name" ></input>
        <button className="btn btn-success">Entry</button>
      </div>
    )
}
