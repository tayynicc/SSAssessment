import './ProvideCredentials.css'


import Form from '../Forms/Signup'
// use this component to display both login and singup forms 


function ProvideCredentials (){


  return (
    <>
    <h1>Login COmponent</h1>
    <div className='container__left'>
      <Form />
    </div>
    <div className='center'></div>
    <div className='container__right'>

    </div>
    </>

  )
}

export default ProvideCredentials