import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import state from './state'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'


describe('state reducer', () => {
  it('should return an initial state for error to be null', () => {
    const expected = null
    const result = state(undefined, {})
    expect(result.error).toEqual(expected)
  })

  it('should return an initial state for isLoading to be false', () => {
    const expected = false
    const result = state(undefined, {})
    expect(result.isLoading).toEqual(expected)
  })

  it('should return an initial state for isAuthenticated to be false', () => {
    const expected = false
    const result = state(undefined, {})
    expect(result.isAuthenticated).toEqual(expected)
  })

  it('should return an initial state for details to be null', () => {
    const expected = null
    const result = state(undefined, {})
    expect(result.details).toEqual(expected)
  })

  it('should set the user', () => {
    const expected = {}
    const result = state(undefined, {
      type: SET_USER,
      user: {}
    })
    expect(result.details).toEqual(expected)
  })

  it('should return a message when an error is present', () => {
    const expected = 'You messed up'
    const result = state(undefined, {
      type: LOGIN_RESPONSE,
      error: 'You messed up'
    })
    expect(result.error).toEqual(expected)
  })

  it('should be able to set isLoading to true', () => {
    const expected = true
    const result = state(undefined, {
      type: LOGIN_REQUEST,
      isLoading: true
    })
    expect(result.isLoading).toEqual(expected)
  })

  it('should allow a user to log out', () => {
    const expected = {
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null
    }
    const result = state(undefined, {
      type: LOGOUT
    })
    expect(result).toEqual(expected)
  })
})