import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import Login from './routes/LogIn';
import Explore from './routes/Explore';
import FilterProvider from './context/FilterProvider';

function App() {
  return (
    <div className="">
        <Router>

          <NavBar/>

          <Routes>        
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>    
            <Route
              exact path='/explore'
              element=
                {
                  <FilterProvider>
                    <Explore/>
                  </FilterProvider>
                }/>    
          </Routes>      
        </Router>     
    </div>
  );
}

export default App;
