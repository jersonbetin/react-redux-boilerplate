import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/index'
import Home from './components/home/index'

export default (
  <Route path="/" components={App}>
    <IndexRoute components={Home}/>
  </Route>
)
