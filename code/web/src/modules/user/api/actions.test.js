import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Profile from './Profile'