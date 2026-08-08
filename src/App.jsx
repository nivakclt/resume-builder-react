import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import ResumeSteps from "./Pages/ResumeSteps";
import UserForm from "./Pages/UserForm";
import ViewResume from "./Pages/ViewResume";
import Downloads from "./Pages/Downloads";
import Pnf from "./Pages/Pnf";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='steps' element={<ResumeSteps/>} />
      <Route path='form' element={<UserForm/>} />
      <Route path='view/:rid' element={<ViewResume/>} />
      <Route path='history' element={<Downloads/>} />
      <Route path='/*' element={<Pnf/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App