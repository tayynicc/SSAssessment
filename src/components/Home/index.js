import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import './Home.css';
import { getOneUser } from '../../store/user';

function Home(){
  const id = useParams().id
  const dispatch = useDispatch()
  
  const user = useSelector((state) => state?.user)

  console.log(222, user)

  const verifyZip = (code) => {
    if(code === null || code === undefined){
      return '000000'
    }
  }

  // const statusLight = (status) => {
  //   const light = document.getElementById('status-light')
  //   console.log(light)
  //   if(status === 'active'){
  //     light.classList.add('light-active')
  //   }if(status === 'notActve'){
  //     light.classList.add('light-notActive')
  //   }

  // }


  useEffect(() => {
    dispatch(getOneUser(id))
 }, [dispatch])

  return (
    // <>
      <div className='container__right'>
        <div className='container__usrInfo'>
          <div className='container__usrInfo-row1'>
            <h1>{`${user.first_name} ${user.last_name}`}</h1>
          </div>
          <div className='container__usrInfo-row2'>
            <h3>{user.email}</h3>
            <h3>{user.password}</h3>
          </div>
          <div className='container__usrInfo-row3'>
            <h4>{` ${user.address} ${user.state}, ${verifyZip(user.zip)}`}</h4>
          </div>
          <div className='contianer__userInfo-row4'>
            {/* <div className='light' id='status-light'>{ statusLight(user?.is_active) }</div> */}
            <p>{user.is_active}</p>
            
          </div>
        </div>

        <div className='button__container'>
          <button className='btn update'><Link to={`/update/${id}`}>Update</Link></button>
          <button className='btn logout'>Logout</button>
          <button className='btn delete'>Delete</button>
        </div>

      </div>
    // </>
// 
  )
}

export default Home;