import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import Slidercontents from '../components/main/Slidercontents';
import { roomData } from '../data/room/room';

const Room = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },100);

  },[]);

  const contentsClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      {roomData.map((room, index)=>(
        <div className={contentsClass}
        style={{transitionDelay: `${index * 100}ms`}}>
          <Slidercontents 
          key={room.key}
          id={room.key}
          title={room.title}
          room={room.data}/>
        </div>  
      ))}
    </Main>
  )
}

export default Room