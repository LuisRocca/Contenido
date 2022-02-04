import React from 'react';
import {  Link, useNavigate } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux';
import { logout } from '../redux/actions/authAcitons'
import { useEffect } from 'react';

const Navbar = () => {

  const nabigate = useNavigate()
  const dispatch = useDispatch();

  const hablenabigator = (e) => {
    e.preventDefault();
    nabigate(`/appScreen`)
  }

  const {auth} = useSelector(state => state)
  console.log(auth)
  useEffect(() => {
     auth.uid ? nabigate(`/appScreen`) :nabigate(`/`)
  }, [auth]);
  

  const handlelogout = () => {
dispatch(logout())
  }

  return <div>
<nav className='stilo_navbar ' >
  <div className="nav-wrapper">
    <Link to={`/appScreen`} style={{marginLeft: 20}} className="brand-logo">Control Sedes</Link>
    <ul className="right hide-on-med-and-down">
     
       <li><a onClick={handlelogout}>Logout</a></li>
      <li><a onClick={e => hablenabigator(e)} href="">Municipios</a></li>
      
    </ul>
  </div>
</nav>
     
  </div>
};

export default Navbar;
