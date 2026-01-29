import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { serviceData } from '../data/service/service'
import Slidercontents from '../components/main/Slidercontents'

const Service = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },100);

  },[]);

  const contentsClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
        {serviceData.map((room, index)=>(
        <div className={contentsClass}
        style={{transitionDelay: `${index * 100}ms`}}>
          <Slidercontents
          key={room.key}
          id={room.key}
          title={room.title}
          room={room.data}
          />
        </div>
      ))}
    </Main>
  )
}

export default Service