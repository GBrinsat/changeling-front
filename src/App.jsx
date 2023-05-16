import './App.css'

import { Routes, Route } from 'react-router-dom'

//pages import
import BackstoryGenerate from './pages/BackstoryGenerate'
import SignupPage from './pages/auth/Signup'
import LoginPage from './pages/auth/Login'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import CharacterCreationPage from './pages/CharacterCreationPage'
import CharacterSheetPage from './pages/CharacterSheetPage'

//components
import IsPrivate from './components/IsPrivate'

function App() {

  return (
    <>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<IsPrivate><Profile /></IsPrivate>} />
      <Route path="/characterCreation" element={<IsPrivate><CharacterCreationPage /></IsPrivate>} />
      <Route path="/characterSheet/:characterId" element={<IsPrivate><CharacterSheetPage /></IsPrivate>} />
      <Route path="/backstory" element = {<IsPrivate><BackstoryGenerate /></IsPrivate>} />
    </Routes> 

    </>
  )
}

export default App
