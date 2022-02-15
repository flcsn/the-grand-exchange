import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import LandingPage from './components/landing-page'
import LoginPage from './components/login-page'
import RegistrationPage from './components/registration-page'
import MainPage from './components/main-page/main-page'

const App = () => {
  return(
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App