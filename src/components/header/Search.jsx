import React from 'react'

const Search = () => {
  return (
    <div className='search__inner'>
      <div className='search__container'>
        <ul>
          <li>
            <span>여행지</span>
            <input type='text' placeholder='여행지 검색'/>
          </li>
          <li>
            <span>날짜</span>
            <input type='date' placeholder='날짜 추가'/>
          </li>
          <li>
            <span>여행자</span>
            <input type='number' placeholder='게스트 추가'/>
          </li>
      </ul>
      <span className='search__icon'></span>
      </div>
    </div>
  )
}

export default Search