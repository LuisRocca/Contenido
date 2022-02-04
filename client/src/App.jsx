
import './App.css'
import {useDispatch} from 'react-redux';
import {useEffect}  from "react";
import {Route, Routes} from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import AppScreen from './pages/AppScreen'
import Details from './pages/Details';
import Navbar from './components/Navbar';
import Group from './pages/Group';
import Footer from './components/Footer';
const App = () => {



  return (
   <>
    <Navbar />
   <Routes>
    
     <Route exact  path='/' element={<LoginScreen />} />
     <Route exact path='/register' element={<RegisterScreen />} />
     <Route exact path='/appScreen' element={<AppScreen />} />
     <Route exact path='/details/:dane' element={<Details />} />
     <Route exact path='/grupo/:dane' element={<Group />} />
   </Routes>
   <Footer />
   </>
  )
}

export default App
