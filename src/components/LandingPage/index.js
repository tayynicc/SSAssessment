import { Link } from 'react-router-dom';
import  './LandingPage.css';


// import GatherUsrData from './Forms/GatherUsrData'
import UsrDisplay from '../UsrDisplay';


function LandingPage (){


  return (
    <>
      <div className='container__left'>
          <div className='container__left-text'>
            <p className='landing__text'>Login or Signup to display credentials.</p>
            <div className='container__left-btn'>
              <button className='btn login'><Link className='link__landing' to='/login'>Login</Link></button>
              <button className='btn signup'><Link className='link__landing' to='/signup'>Signup</Link></button>
            </div>
          </div>

      </div>

      <div className='container__right'>
        <UsrDisplay />
        
        <div className='button__container'>
          <button className='btn update'>Update</button>
          <button className='btn logout'>Logout</button>
          <button className='btn delete'>Delete</button>

        </div>
      </div>
    </>

  )
};

export default LandingPage;

