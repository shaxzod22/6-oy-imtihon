import { Route, Routes ,useParams} from 'react-router-dom'
import './App.css'
import './index.css'
import DinamicPage from './pages/DinamicPage'
import HomePage from './pages/HomePage'

function App() {
  const {videoId}=useParams()
console.log(videoId);
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path={`/video/:videoId`} element={<DinamicPage/>}/>
    </Routes>
    
    </>
  )
}

export default App
