import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NoPage } from './pages/NoPage'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { AddEvent } from './pages/AddEvent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path={"/addEvent"} element={<AddEvent />} />
            <Route path={"/signIn"} element={<SignIn />} />
            <Route path={"/signUp"} element={<SignUp />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
