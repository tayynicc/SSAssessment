import { Link } from 'react-router-dom';


import  './LandingPage.css';
import UsrDisplay from '../UsrDisplay';
import Create from '../Forms/Create'


function LandingPage (){


 
  return (
    <>
      <div className='container__left'>
          <div className='container__left-text'>
            <p className='landing__text'>Create user to display credentials.</p>
            <div className='create__usr-form'>
              <Create />
            </div>
          </div>

      </div>

      <div className='container__right'>
        <UsrDisplay />
        
        {/* <div className='button__container'>
          <button className='btn update'>Update</button>
          <button className='btn logout'>Logout</button>
          <button className='btn delete'>Delete</button>

        </div> */}
      </div>
    </>

  )
};

export default LandingPage;

