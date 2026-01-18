import { useState } from 'react'
import Users from './users'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './header'
import Posts  from './Posts'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>} />
        <Route path='/posts/:userId' element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
