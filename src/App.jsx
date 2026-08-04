import { useState } from 'react'
import './App.css'
import { Routes , Route  } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ResumeSteps from './Pages/ResumeSteps'
import UserForm from './Pages/UserForm'
import Pnf from './Pages/Pnf'
import Downloads from './Pages/Downloads'
import ViewResume from './Pages/ViewResume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='steps' element={<ResumeSteps />} />
        <Route path='form' element={<UserForm />} />
        <Route path='history' element={<Downloads />} />
        <Route path='/*' element={<Pnf />} />
        <Route path='vres/:rid' element={<ViewResume/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
