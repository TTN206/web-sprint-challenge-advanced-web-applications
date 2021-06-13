import React, { useState,useEffect } from "react";
// import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../helpers/axiosWithAuth';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // [x] 1. Build a form containing a username and password field.
  const [formValues, setFormValues]= useState({
    username:'',
    password:''
  }); 
  // [x] 2. Add whatever state nessiary for form functioning.
  //replace with error state
  // const initialError = {error: ''}
  const [error, setError] = useState('username and/or password not valid');

  const {push} = useHistory();
  
  const handleChanges = (e) =>{
    setFormValues({...formValues, [e.target.name]:e.target.value})
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    axiosWithAuth()
      .post('/login', formValues)
      .then((res)=>{
        // console.log(res)
        localStorage.setItem('token', res.data.payload)
        push('/bubbles')
      })
      .catch((err)=>{
        console.log(err.response, 'Houston, we got problems')
      })
  }

  useEffect(()=>{

  },[])
// [x] 3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
// [x] 4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
// [x] 5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username: </label>
          <input
            data-testid='username'
            name='username'
            type='text'
            id='username'
            value={formValues.username}
            placeholder='enter username'
            onChange={handleChanges}
          />
          <label htmlFor='password'>Password: </label>
          <input 
            data-testid='password'
            name='password'
            type='password'
            id='password'
            value={formValues.password}
            placeholder='enter password'
            onChange={handleChanges}
          />

          <button type='submit'>Login</button>

          {formValues.username ==='Lambda' && formValues.password === 'School' ? null : <p data-testid="errorMessage" className="error">{error}</p>}
        </form>
      </div>

    </div>
  );
};

export default Login;
