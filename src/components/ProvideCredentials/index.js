import './ProvideCredentials.css'


import SignUpForm from '../Forms/Signup';
import LoginForm from '../Forms/Login'; 
// use this component to display both login and singup forms 


function ProvideCredentials (){


  return (
    <>
    <h1>Login COmponent</h1>
    <div className='container__left'>
      <SignUpForm />
    </div>
    <div className='center'></div>
    <div className='container__right'>
      <LoginForm />
    </div>
    </>

  )
}

export default ProvideCredentials