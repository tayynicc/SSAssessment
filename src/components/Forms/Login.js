import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import { login } from '../../store/session'

import './Forms.css'



function Login(){
  const dispatch = useDispatch();

  const [ errors, setErrors ] = useState({});
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password
    }

    const data = await dispatch(login(payload))
  }
 
  return (
    <>
    <div className='container__form-login'>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Email </label>
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>

        <div>
          <label> Password </label>
          <input 
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>

        <button type='submit'> Login </button>
      
      </form>
    </div>
    </>
  )
}

export default Login