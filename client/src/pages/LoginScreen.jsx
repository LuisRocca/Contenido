import React, { useState } from "react";
import GoogleButton from "react-google-button";
// import { googleLogin, emailAndPasswordLogin } from "../actions/authAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  emailAndPasswordLogin, googleLogin } from '../redux/actions/authAcitons';
import { useSelector } from 'react-redux'

const LoginScreen = () => {
   
  // const {auth} = useSelector(state => state)
  // console.log(auth)
  const nabigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const handleChange = (e) => {
    const dataInput = e.target.value;
    setData({
      ...data,
      [e.target.name]: dataInput,
    });
  };

  const dispatch = useDispatch()
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  const handleEmailLogin = (e) => {
    e.preventDefault()
    dispatch(emailAndPasswordLogin(email, password))
    nabigate(`/appScreen`)
  };


  

  return (
    <div className="container animate__animated animate__zoomIn">
    <h3>Login</h3>
    <hr />
    <div className="container">
      <div className="row">
        <form onSubmit={handleEmailLogin} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                value={email}
                name="email"
                onChange={handleChange}
                id="icon_prefix"
                className="materialize-textarea"
                type="email"
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                value={password}
                name="password"
                onChange={handleChange}
                id="icon_prefix1"
                className="materialize-textarea"
                type="password"
              />
              <label htmlFor="icon_prefix2">Password</label>
            </div>
          </div>
          <button type="submit" className="btn">
            Enviar
          </button>
          <hr />
          <GoogleButton type="light" onClick={handleGoogleLogin} />
          <hr />
          <Link to="register">Register in the platform</Link>
        </form>
      </div>
    </div>
  </div>

  );
};

export default LoginScreen;
