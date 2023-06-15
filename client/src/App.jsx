import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import Login from './routes/LogIn';
import Explore from './routes/Explore';
import FilterProvider from './context/FilterProvider';
import Detail from './routes/Detail';
import Profile from './routes/Profile';

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
            <Route exact path='/detail/:type/:id' element={<Detail/>}/>       
            <Route exact path='/profile/:id' element={<Profile/>}/>       
          </Routes>      
        </Router>     
    </div>
  );
}

export default App;
