import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'

export function MainLayout() {
  return (
    <>
    <NavBar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}
