// App Imports
import { isEmpty } from '../../../setup/helpers'
//These are our 
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
//state is defined as the above object. The action object is also passed in.
export default (state = userInitialState, action) => {
//The switch takes in the action type to determine the case.
  switch (action.type) {
// This sets the initial state and then if 
// the action.user object isn't empty it sets isAuthenticated property to true.
// It sets the details to the value of the actions user property.
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

//This sets the initial state, and then sets the error to null in case there was an error already in state.
//It also sets the isLoading property to true. This begins the login process.
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

//This sets the initial state, and then sets the error as whatever the action object has as an error property
//It also sets the isLoading property to false. This resolves the login.
    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

//When the type of the action is LOGOUT, all four properties are set to null or false
    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

//The default that is returned is the userInitialState object value
    default:
      return state
  }
}