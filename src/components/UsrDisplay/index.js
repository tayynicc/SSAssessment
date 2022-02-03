import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './UsrDisplay.css'
import { getUsers } from '../../store/user'

function UsrDisplay(){
  const dispatch = useDispatch()
  const user = useSelector((state) => Object.values(state?.user))

console.log(333, user)
  useEffect(() => {
    dispatch(getUsers())
 }, [dispatch])
 
  return (
    <>
    <div className='container__usrInfo'>

          <table>
            <tr>
              <th>Name</th>
              <th>Email </th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
              <th>Status</th>
            </tr>
            {user.map((usr) => (
              <tr>
                <td>{`${usr.first_name} ${usr.last_name}`}</td>
                <td>{usr.email}</td>
                <td>{usr.address}</td>
                <td>{usr.city}</td>
                <td>{usr.state}</td>
                <td>{usr.zip}</td>
                <td>{usr.is_active}</td>
              </tr>
            ))}

          </table>
        {/* <div className='usrName__div'>{`${usr.first_name} ${usr.last_name}`} </div>
        <div className='email__div'></div>
        <div className='password__div'></div>
        <div className='status__div'></div>

        <div className='address__div'></div>
        <div className='city__div'></div>
        <div className='state__div'></div>
        <div className='zip__div'></div> */}
        {/* </> */}
      {/* ))} */}
      



    </div>
    </>
  )
}

export default UsrDisplay