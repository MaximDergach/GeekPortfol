import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import ChildrenListApp from './ChildrenListApp'
import * as reducers from '../reducers'

const reduser = combineReducers(reducers)
const store = createStore(reducers)

export default 