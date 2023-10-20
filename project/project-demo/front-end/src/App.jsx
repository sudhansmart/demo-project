import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import HomePage from './components/HomePage';
import ApplicationForm from './components/ApplicationForm';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
    <Router>
       <Header/>
          <Routes>
          <Route path="/"  element={<HomePage/>}/>
           <Route path='/Application'  element={<ApplicationForm/>}/>
          </Routes>
     </Router>
    </>
  )
}

export default App
