import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import Layout from '../../Layout/components/Layout'
import Navigation from '../../Navigation/components/Navigation'

export default ({ component: Component, isAuth, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth === true
      ? <Layout
        content={Component}
        navigation={Navigation}
        {...props}
      />
      : <Redirect to='/' />
  )} />
)
