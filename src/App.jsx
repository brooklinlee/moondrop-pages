// npm modules
import { Routes, Route } from 'react-router-dom'

// pages
import Landing from './pages/Landing'


// components

import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route 
          path='/'
          element={<Landing />}
        />

      </Routes>
    
    </>
  )
}

export default App
