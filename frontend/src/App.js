import React, { useEffect } from 'react'
import Header from './components/Header.js'
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login.js'

import {useDispatch, useSelector} from 'react-redux'
import { authActions } from './store/index.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'
import First from './components/First.js'
import MentalHealth from './components/MentalHealth.js'
import WellnessCheck from './components/WellnessCheck.js'
import Info from './components/Info.js'



const App = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=> state.isLoggedIn)
  console.log(isLoggedIn);
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(authActions.login())
    }
  },[dispatch]);
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        { !isLoggedIn ? 
        <>
        
        <Route path='/login' element={<Login/>} /> 
        <Route path='/' element={<First/>} /> 
       
        
        <Route path='/signup' element={<Signup/>} /> </>:

          <>
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/check' element={<WellnessCheck/>} />
        <Route path='/info' element={<Info/>} />
          
          <Route path='/resource' element={<MentalHealth/>} />
       
        </>
        
        }
        {/* <Route path="/user-details/:id" element={isLoggedIn ? <UserInfo /> : <First/>} /> */}
      </Routes>
    </main>
  </React.Fragment>
}

export default App