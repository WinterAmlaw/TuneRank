import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import SignUp from './routes/SignUp'
import Login from './routes/LogIn'

function App() {
  return (
    <div className="">
        <Router>
         <NavBar/>

          <Routes>        
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>    
          </Routes>      
        </Router>     
    </div>
  );
}

export default App;
