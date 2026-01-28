import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import nextIcon from '../../assets/img/icon/nextIcon.svg'
import prevIcon from '../../assets/img/icon/prevIcon.svg'

const Slidercontents = ({title, room, id}) => {
  return (
    <div className='room__container'>
        <h2>{title}</h2>
        <div className='room__inner'>
          <Swiper
          slidesPerView={7}
          spaceBetween={15}
          navigation={{
            nextEl: `.next${id}`,
            prevEl: `.prev${id}`
          }} 
          modules={[Navigation]} 
          className="mySwiper">
          {room.map((room, key)=>(
            <SwiperSlide key={key}>
              <Link to={room.src}>
                <div className='room__photo'>
                  <img src={room.photo} alt={room.title}/>
                </div>
                <div className='room__text'>
                  <div className='room__title'>{room.title}</div>
                  {room.place && <p>{room.place}</p>}
                  <div>{room.date}</div>
                  {room.price && <span>총액 ￦{room.price}</span>}
                  {room.priceOne && <span>1인당 ￦{room.priceOne} 부터</span>}
                  <span className='room__rating'>★{room.rating}</span>
                  {room.reserved && <p>최소 예약 요금 ￦{room.reserved}</p>}
                </div>
              </Link>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
        <div className='buttonBox'>
          <div className={`prev${id} swiper-button-prev`}><img src={prevIcon}/></div>
          <div className={`next${id} swiper-button-next`}><img src={nextIcon}/></div>
        </div>
    </div>  
    )
}

export default Slidercontents