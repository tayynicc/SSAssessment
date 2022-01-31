import React, { useState, usestate } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session'

import './Forms.css' 


function GatherUsrData(){

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
  const updateFirstName = (e) => {
    let tempErrs = {...errors}
    let input = e.target.value;
    setFirstName(input)


    if(!input.length){
      tempErrs.FirstName = 'Please Provide first name.';
      setErrors(tempErrs)
    } else {
      delete tempErrs.FirstName
      setErrors(tempErrs)
    }
  }


  const updateLastName = (e) => {
    let tempErrs = {...errors}
    let input = e.target.value;
    setLastName(input)


    if(!input.length){
      tempErrs.LastName = 'Please Provide last name.';
      setErrors(tempErrs)
    } else {
      delete tempErrs.LastName
      setErrors(tempErrs)
    }
  }

  const updateEmail = (e) => {
    let tempErrs = {...errors}
    let input = e.target.value;
    setEmail(input)

    if(!input.length){
      tempErrs.email = 'Please Provide Email.';
      setErrors(tempErrs)
    } else {
      delete tempErrs.email
      setErrors(tempErrs)
    }
  }

  const updatePassword = (e) => {
    let tempErrs = {...errors}
    let input = e.target.value;
    setPassword(input)


    if(!input.length){
      tempErrs.password = 'Please Provide password';
      setErrors(tempErrs)
    } else {
      delete tempErrs.password
      setErrors(tempErrs)
    }
  }

  const updateRepeatPassword = (e) => {
    let tempErrs = {...errors}
    let input = e.target.value
    setRepeatPassword(input)

    if(password !== input ){
       tempErrs.repeatPassword = ' Passwords do not match.' 
       setErrors(tempErrs)

    }else {
      delete tempErrs.repeatPassword
      setErrors(tempErrs)
    }
  } 

  const updateStatus = (e) => setStatus(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZip = (e) => setZip(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const payload = {
      firstName,
      lastName,
      email, 
      password,
      repeatPassword,
      status, 
      address,
      city, 
      state, 
      zip
    }

    if(password == repeatPassword) {
      const data = await dispatch(signUp(payload))
      
      if (data) {
        setErrors(data)
      }
    } 

    console.log(111, payload)

  }
  
  // if (user) {
  //   return <Redirect to='/' />
  // }
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
            type='text'
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
          <label> Retype Password </label>
          <input
            name='password'
            type='password'
            placeholder='password'
            value={repeatPassword}
            onChange={updateRepeatPassword}
          />
        </div>


        <div>
          <label> Status </label>
          <input
            name='status'
            type=''
            placeholder='active'
            value={status}
            onChange={updateStatus}
  

          /> 
        </div>


        <div>
          <label> Address </label>
          <input
            name='Address'
            type=''
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

        <div>
          <button type='submit' > submit </button>
        </div>

      </form>
    </div>
    </>
  )
}

export default GatherUsrData;