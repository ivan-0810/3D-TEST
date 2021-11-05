import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import home_page from './home_page/reducer'
import sidebar from './sidebar/reducer'
import menu from './menu/reducer' 
import spinner from './spinner/reducer';
import locale from './locale/reducer'
import { reducer as formReducer } from 'redux-form';
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
   form: formReducer,
   home_page,
   sidebar,
   menu,
   spinner,
   locale
})

const reducer = (state, action) => {
  // console.log(action, 'od store');
  if (action.type === HYDRATE) {

    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
