import { createStore, combineReducer, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



const rootReducer = combineReducer({

});

let enhancer 

if(process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);

} else {
  const logger = require('redux-logger').default;
  const composeEnhancer = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  enhancer = composeEnhancer(applyMiddleware(thunk, logger));
}
 
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore