import React, { lazy, Suspense } from 'react'
import Main from './components/section/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Experience = lazy(()=> import('./pages/Experience'))
const Service = lazy(()=> import('./pages/Service'))
const Room = lazy(()=> import('./pages/Room'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main/>}>
        <Routes>
          <Route path='/' element={<Room/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/service' element={<Service/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
