import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';

import { updateUser } from '../../store/user'

import './Forms.css'


function Update(){
  const id = useParams().id
  const dispatch = useDispatch()

  const [ errors, setErrors ] = useState({});
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');
  const [ status, setStatus ] = useState('Active');
  const [ address, setAddress ] = useState('');
  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState('');
  const [ zip, setZip ] = useState(0);

  // Form Validations 
  const updateFirstName = (e) => setFirstName(e.target.value)
  const updateLastName = (e) => setLastName(e.target.value)
  const updateEmail = (e) => setEmail(e.target.value)
  const updatePassword = (e) => setPassword(e.target.value)
  const updateStatus = (e) => setStatus(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZip = (e) => setZip(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();


    const payload = {
      'id': id,
      firstName,
      lastName,
      email, 
      password,
      status, 
      address,
      city, 
      state, 
      zip
    }


    console.log(111, payload)

    await dispatch(updateUser(payload))

  }

  
 
  return (
    <>
    <div className='container__outter-form'>
      <form onSubmit={handleSubmit}>
        <div className='container__errors'>

        </div>

        <div>
          <label> First Name </label>
          <input
            name='firstName'
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={updateFirstName}
          />
        </div>


        <div>
          <label> Last Name </label>
          <input
            name='lastName'
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={updateLastName}

          />
        </div>

        
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
            placeholder='password'
            value={password}
            onChange={updatePassword}
          />
        </div>

        <div>
          <label> Address </label>
          <input
            name='Address'
            type='text'
            placeholder='Address'
            value={address}
            onChange={updateAddress}
          /> 
        </div>

        <div>
          <label> City </label>
          <input 
            name='city'
            type='text'
            placeholder='City'
            value={city}
            onChange={updateCity}

          />
        </div>

        <div>
          <label> State </label>
          <input 
            name='state'
            type='text'
            placeholder='State'
            value={state}
            onChange={updateState}
          />
        </div>

        <div>
          <label> Zip code </label>
          <input 
            name='zip'
            type='number'
            placeholder='zip code'
            value={zip}
            onChange={updateZip}
          />
        </div>

        <div className='container__submit'>
          <button type='submit' className='submit'> Submit </button>
        </div>

      </form>
    </div>
    </>
  )
}


export default Update