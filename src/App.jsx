import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NoPage } from './pages/NoPage'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
