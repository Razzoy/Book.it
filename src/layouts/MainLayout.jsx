import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { Header } from '../components/Header/Header'

export function MainLayout() {
  return (
    <>
    <NavBar/>
    <Header/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}
