const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const res = await fetch('', {
    headers: {
      'Content-Type': 'applicaiton/json'
    }
  });
  if(res.ok) {
    const data = await res.json();
    if(data.errors){
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const res = await fetch('', {
    method:'POST',
    headers:{
      'Content-Type':'applicaiton/json'
    },
    body:JSON.stringify({
      email,
      password
    })
  });

  if(res.ok){
    const data = await res.json();
    dispatch(setUser(data))
    return null;
  } else if(res.status < 500){
    const data = await Response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['Login Error encountered. Please Try again.']
  }
}


export const logout = () => async(dispatch) => {
  const res = await fetch('', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(res.ok){
    dispatch(removeUser())
  }
}

export const signUp = (payload) => async (dispatch) => {

  const {
    fName,
    lName,
    email,
    password,
    isActive,
    address,
    city, 
    state, 
    zip,
  } = payload


  const res = await fetch('', {
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
      fName,
      lName,
      email,
      password,
      isActive,
      address,
      city, 
      state, 
      zip,
    }),
  });


  if(res.ok){
    const data = await res.json();
    dispatch(setUser(data))
    return null;
  } else if (res.status < 500 ){
    const data = await res.json();
    if (data.errors){
      return data.errors;
    }
  } else {
    return ['Signup error occured. Please try again']
  }
}


export default function reducer(state = initialState, action ){
  switch(action.type){
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default: 
      return state; 
  }
}