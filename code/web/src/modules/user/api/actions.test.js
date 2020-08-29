import '@testing-library/jest-dom'
import { setUser, login, logout } from './actions'
import { SET_USER, LOGIN_REQUEST } from './actions'

describe('actions', () => {
  it('should set the user', () => {
    const user = {
      email: 'billwilke2@gmail.com',
      name: 'bill wilke'
    }
    const expectedAction = {
      type: 'AUTH/SET_USER',
      user: {
        email: 'billwilke2@gmail.com',
        name: 'bill wilke'
      }
    }
  
    const result = setUser(1, user)
  
    expect(result).toEqual(expectedAction)
  })

  it('should set isLoading to true when making a request', () => {
    const userCredentials = {
      email: 'billwilke2@gmail.com',
      password: 'password'
    }
    const mockDispatch = jest.fn()
    const expectedAction = {
      type: 'AUTH/LOGIN_REQUEST',
      isLoading: true
    }

    const thunk = login(userCredentials)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  it('should allow a user to log out', () => {
    const expectedAction = {
      type: 'AUTH/LOGOUT' 
    }
    
    const mockDispatch = jest.fn()

    const thunk = logout()
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})