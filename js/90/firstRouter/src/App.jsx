import { useState } from 'react'
import { BrowserRouter, replace, Route, Routes } from 'react-router'
import './App.css'
import Header from './Header'
import Buy from './buy'
import Sell from './sell'
import Home from './Home'
import Error from './Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='/buy' element={<Buy/>}/> 
        <Route path='/sell' element={<Sell/>}/> 
        <Route path='*' element={<Error/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
