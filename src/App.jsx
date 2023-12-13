// npm modules
import { Routes, Route } from 'react-router-dom'

// pages
import Landing from './pages/Landing'
import OneClementine from './pages/OneClementine/OneClementine'

// components
import NavBar from './components/NavBar/NavBar'

// import './App.css'

function App() {


  return (
    <>
    <NavBar />
      <Routes>
        <Route 
          path='/'
          element={<Landing />}
        />
        <Route 
          path='/001-clementine'
          element={<OneClementine />}
        />
      </Routes>
    
    </>
  )
}

export default App
