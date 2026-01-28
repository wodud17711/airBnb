import React from 'react'
import Main from '../components/section/Main'
import { serviceData } from '../data/service/service'
import Slidercontents from '../components/main/Slidercontents'

const Service = () => {
  return (
    <Main>
        {serviceData.map((room)=>(
        <Slidercontents 
        key={room.key}
        id={room.key}
        title={room.title}
        room={room.data}/>
      ))}
    </Main>
  )
}

export default Service