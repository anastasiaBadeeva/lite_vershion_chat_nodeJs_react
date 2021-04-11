import React from 'react'
import socket from '../socket';
import axios from 'axios'
export const JoinBlock = () => {
    const [roomId, setRoomId] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const onPostData = () =>{
        if (!roomId  || !userName) {
            alert("Wrong data")
        }
        axios.post('/rooms',{roomId,userName})
        console.log(roomId,userName)
    }
    
    return (
        <div className="join-block">
        <input type="text" placeholder="ROOM ID" value={roomId} onChange={ e =>{setRoomId(e.target.value)}}></input>
        <input type="text" placeholder="Your name" value={userName} onChange={ e =>{setUserName(e.target.value)}}></input>
        <button onClick={onPostData} className="btn btn-success">Entry</button>
      </div>
    )
}
