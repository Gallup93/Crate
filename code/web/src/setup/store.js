// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as product from '../modules/product/api/state'
import * as subscription from '../modules/subscription/api/state'
import * as crate from '../modules/crate/api/state'

// App Reducer

// This is basically what we would assume is our rootReducer
const appReducer = combineReducers({
  common,
  user,
  ...product,
  ...subscription,
  ...crate
})

// Root Reducer
// This rootReducer checks to see if the action has a type of 'RESET', 
// if it does not, appReducer is returned with state/action passed in? 
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  //Where are these arguments defined as parameters?
  return appReducer(state, action)
}

// Load initial state from server side
let initialState

// If there is no browser window, we are setting an initial state and deleting it.
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

// Store
//This is where we are actually making the store, and passing in the reducers
// and the initialState
export const store = createStore(
  rootReducer,
  initialState,

// connects our devTools to the component
  composeWithDevTools(
    applyMiddleware(thunk),
  )
)