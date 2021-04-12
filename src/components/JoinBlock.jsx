import React from 'react'
import socket from '../socket';
import axios from 'axios'
export const JoinBlock = ({onLogin}) => {
    const [roomId, setRoomId] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [isLoading, setLoading] = React.useState(false)
    const onPostData =  async () =>{
        if (!roomId  || !userName) {
            alert("Wrong data")
        }
        setLoading(true)
        const dataSocket= {
            roomId,userName
        }
         await axios.post('/rooms',dataSocket)
        onLogin(dataSocket)
     
    }
    
    return (
        <div className="join-block">
        <input type="text" placeholder="ROOM ID" value={roomId} onChange={ e =>{setRoomId(e.target.value)}}></input>
        <input type="text" placeholder="Your name" value={userName} onChange={ e =>{setUserName(e.target.value)}}></input>
        <button disabled={isLoading} onClick={onPostData} className="btn btn-success">
            {isLoading ? 'Entering...' :'Entry'}
        </button>
      </div>
    )
}
