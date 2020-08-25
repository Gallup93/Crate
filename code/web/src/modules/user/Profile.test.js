import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Profile from './Profile'


describe('Profile', () => {
  const store = createStore(() => ({
    user: {
      details: {
        email: 'billwilke2@gmail.com',
        name: 'bill wilke',
        role: null
      },
      error: null,
      isAuthenticated: true,
      isLoading: false
    },
    logout: jest.fn(),
    match: {},
    staticContext: undefined,
  }))

  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render a name', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>

    )
    const name = getByText('bill wilke')
    
    expect(name).toBeInTheDocument()
  })

  it('Should render an email', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>

    )
    const email = getByText('Email: billwilke2@gmail.com')
    
    expect(email).toBeInTheDocument()
  })

  it('Should render a shipping address', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>

    )
    const address = getByText('Shipping Address:')
    
    expect(address).toBeInTheDocument()
  })

  it('Should render a availability date', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>

    )
    const date = getByText('Availability Date:')
    
    expect(date).toBeInTheDocument()
  })
})