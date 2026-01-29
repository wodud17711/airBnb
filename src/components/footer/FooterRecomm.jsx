import React, { useState } from 'react'

import { recommData } from '../../data/recomm/recomm'

const FooterRecomm = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [showAll, setShowAll] = useState(false)

    const visibleItems = showAll 
    ? recommData[activeIndex].data 
    : recommData[activeIndex].data.slice(0, 17);

  return (
    <div>
        <div className='footerRecomm__inner'>
            <h2>다음 여행을 위한 추천지</h2>
            <div className='recomm__title'>
                <ul>
                    {recommData.map((text, index)=>(
                        <li
                        key={index}
                        onClick={()=>setActiveIndex(index)}
                        className={activeIndex === index ? 'active' : ''}
                        >{text.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='recomm__list'>
                {visibleItems.map((text, key)=>(
                    <div className='recomm__object' key={key}>
                        <div className='title'>{text.title}</div>
                        <div className='docs'>{text.docs}</div>
                    </div>
                ))}
                {!showAll && recommData[activeIndex].data.length > 18 && ( 
                    <div className='recomm__object more'
                    onClick={()=>setShowAll(true)}>더 보기</div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default FooterRecomm