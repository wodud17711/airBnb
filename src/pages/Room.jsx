import React from 'react'
import Main from '../components/section/Main'
import Slidercontents from '../components/main/Slidercontents';
import { roomData } from '../data/room/room';



const Room = () => {
  return (
    <Main>
      {roomData.map((room)=>(
        <Slidercontents 
        key={room.key}
        id={room.key}
        title={room.title}
        room={room.data}/>
      ))}
    </Main>
  )
}

export default Room