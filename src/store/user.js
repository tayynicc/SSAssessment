const LOAD_USERS = 'users/LOAD';
const ADD_USER = 'users/ADD';
const EDIT_USER = 'users/EDIT';
const REMOVE_USER = 'users/REMOVE';
const SHOW_ONE = 'users/SHOW';



const loadUsers = (users) => ({
  type: LOAD_USERS,
  users
});

const addOneUser = (user) => ({
  type: ADD_USER,
  user
});

const remove = (userId) => ({
  type: REMOVE_USER,
  userId
});

const update = (user) => ({
  type: EDIT_USER,
  user
});

const oneUser = (user) => ({
  type: SHOW_ONE,
  user
});

// get all
export const getUsers = () => async(dispatch) => {
  const res = await fetch(`/all`);
  let users = await res.json();

  dispatch(loadUsers(users))
  return users;
  
}

// get one
export const getOneUser = (id) => async (dispatch) => {
  const res = await fetch(`/${id}`);

  if (res.ok){
    const user = await res.json();
    dispatch(oneUser(user))
  }

}


// create
export const createOneUser = (payload) => async dispatch => {
   const {
    first_name,
    last_name,
    email,
    password,
    is_active,
    address,
    city,
    state,
    zip,
   } = payload

   console.log('triggered')
   console.log(`store payload`, payload)

   const res = await fetch(`/add`, {
     method: "POST",
     headers: {"Content-Type": 'applicaiton/json'},
     body: JSON.stringify({first_name, last_name, email, password, is_active, address, city, state, zip,})
   });

   let newUser;
   if (res.ok) {
     newUser = await res.json();
     dispatch(addOneUser(newUser))
   }

   return newUser
}
// update user 
export const updateUser = (data) => async dispatch => {
  console.log(`store`, data)
  const res = await fetch(`/update/${data.id}`, {
    method:"POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(data)
  });


  let user;
  if(res.ok){
    user = await res.json()
    dispatch(update(user))
    return user;
  }
}

// delete user
export const deleteUser = userId => async dispatch => {
  const res = await fetch(`/${userId}`, {
    method: 'DELETE'
  });

  if(res.ok){
    dispatch(remove(userId))
  }
}


export default function userReducer(state={}, action){
  switch (action.type) {
    case LOAD_USERS:
      const newUsers = {}
      action['users'].forEach(usr => {
        newUsers[usr._id] = usr;
      })
      return {
        ...state, 
        ...newUsers
      }

      case SHOW_ONE:
        const oneUser = action.user
        return oneUser;

      case ADD_USER:
        if(!state[action.user.insertedId]) {
          return {
            ...state,
            [action.user.insertedId] : {
              ...state[action.user.insertedId]
            }
          }
        }
          return {
            ...state,
            [action.users._id] : {
              ...state[action.users._id]
            }
          }

      case EDIT_USER:
        console.log(`!!!!`,action.user)
        return {
          ...state,
          [action.user._id]: action.user
        }

      case REMOVE_USER:
        let newState = {...state}
        delete newState[action.userId]
        return newState

    default :
      return state;
  }
}