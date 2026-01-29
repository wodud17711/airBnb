# components 전체적인 layout구성을 위한 컴포넌트
- **경로:** src/components

    ## section
    - **경로:** src/components/section

        ### Main.jsx
        - **경로:** src/components/section/Main.jsx

        - **역할:** Header, Footer, main 의 layout을 잡기 위한 컴포넌트

        - **props:** children

        - **사용경로:** src/App.js

        ### Header.jsx
        - **경로:** src/components/section/Header.jsx

        - **역할:** Logo, Nav, Menu 의 layout을 잡기 위한 컴포넌트

        - **props:** 없음

        - **사용경로:** src/components/section/Main.jsx

        ### Footer.jsx
        - **경로:** src/components/section/Footer/jsx

        - **역할:** FooterRecomm, FooterInfo 의 layout을 잡기 위한 컴포넌트

        - **props:** 없음

        - **사용경로:** src/components/section/Main.jsx

    ## header
    - **경로:** src/components/header

        ### Logo.jsx
        - **경로:** src/components/header/Logo.jsx

        - **역할:** header부분 공통 회사 로고

        - **props:** 없음

        - **사용경로:** src/components/section/Header.jsx

        ### Menu.jsx
        - **경로:** src/components/header/Menu.jsx

        - **역할:** header 우측 메뉴, 언어교체, 호스팅 버튼 묶음

        - **props:** 없음

        - **사용경로:** src/components/section/Header.jsx
        
        ### Nav.jsx
        - **경로:** src/components/header/Nav.jsx

        - **역할:** 
        - {navMenus} 데이터에 map함수를 이용해 `<Link>` 3개를 제작
        - Location.pathname === nav.src ? 'active':'' 를 통해 pages 전환

        - **props:** 없음

        - **사용경로:** src/components/section/Header.jsx

        ### Search.jsx
        - **경로:** src/components/header/Search.jsx

        - **역할:** `<input>`을 이용한 searchbar 컴포넌트

        - **props:** 없음

        - **사용경로:** src/components/header/Nav.jsx

    ## main
    - 경로: src/components/main

        ### Slidercontents.jsx
        **경로:** src/components/main/Slidercontents.jsx

        **역할:** 
        - 여러(room) 데이터를 **Swiper 슬라이더**로 보여주는 컴포넌트
        - 각 숙소 클릭 시 Link 이동
        - 좋아요(heart) 버튼 클릭 시 Redux 상태(`liked`) 업데이트

        - **Props:**
        - **Name:** title  **Type:** string   **Description:** 슬라이더 제목 
        - **Name:** room  **Type:** array   **Description:** 슬라이드에 표시할 숙소 객체 배열. 각 객체는 다음 필드 포함: `src`, `photo`, `title`, `place`, `date`, `price`, `priceOne`, `rating`, `reserved`
        - **Name:** id  **Type:** string/number   **Description:** Swiper navigation 버튼 구분용 id
       
        - **Redux 연결:**
        - `useSelector(state => state.liked)` → 좋아요 상태 확인
        - `dispatch(toggleLike(room.src))` → 좋아요 토글

        - **외부 라이브러리/아이콘:**
        - `react-router-dom` → Link 이동
        - `swiper/react` + `swiper/modules` → 슬라이더 기능
        - `Heart` SVG → 좋아요 아이콘
        - `prevIcon`, `nextIcon` → 네비게이션 버튼 이미지