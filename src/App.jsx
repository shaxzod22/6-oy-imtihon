import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import './index.css'
import LoginPage from './pages/LoginPage'
import DinamicPage from './pages/DinamicPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import TrendingPage from './pages/TrendingPage'
import SubscriptionsPage from './pages/SubscriptionsPage'
import LibraryPage from './pages/LibraryPage'
import HistoryPage from './pages/HistoryPage'
import WatchLaterPage from './pages/WatchLaterPage'
import LikedVideoPage from './pages/LikedVideoPage'
import FavouritesPage from './pages/FavouritesPage'
import MusicPage from './pages/MusicPage'
import GamesPage from './pages/GamesPage'
import SettingPage from './pages/SettingPage'
import { createContext } from "react";
import { useState } from 'react'

export const InputContext = createContext()

function App() {
  const [search,setSearch] = useState('')
  const userRegister = JSON.parse(localStorage.getItem('userRegister'))
  const userLogin = JSON.parse(localStorage.getItem('userLogin'))

  return (
  <InputContext.Provider value={{search,setSearch}}>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={userLogin&&userRegister?<HomePage/>:userRegister&&!userLogin?<Navigate to='/login'/>:<Navigate to='/register' />}/>
      <Route path={`/video/:videoId`} element={<DinamicPage/>}/>
      <Route path='direction/trending' element={<TrendingPage/>}/>
      <Route path='/direction/subscriptions' element={<SubscriptionsPage/>}/>
      <Route path='/direction/library' element={<LibraryPage/>}/>
      <Route path='/direction/history' element={<HistoryPage/>}/>
      <Route path='/direction/watchLater' element={<WatchLaterPage/>}/>
      <Route path='/direction/favourites' element={<FavouritesPage/>}/>
      <Route path='/direction/liked' element={<LikedVideoPage/>}/>
      <Route path='/direction/music' element={<MusicPage/>}/>
      <Route path='/direction/games' element={<GamesPage/>}/>
      <Route path='/direction/settings' element={<SettingPage/>}/>
      </Route>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  
    </InputContext.Provider>
  )
}

export default App
