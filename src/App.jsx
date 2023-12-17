import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import './index.css'
import LoginPage from './pages/LoginPage'
import DinamicPage from './pages/DinamicPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const userRegister = JSON.parse(localStorage.getItem('userRegister'))
  const userLogin = JSON.parse(localStorage.getItem('userLogin'))

  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={userLogin&&userRegister?<HomePage/>:userRegister&&!userLogin?<Navigate to='/login'/>:<Navigate to='/register' />}/>
      <Route path={`/video/:videoId`} element={<DinamicPage/>}/>
      </Route>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  
    </>
  )
}

export default App
