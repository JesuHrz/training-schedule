import React from 'react'
import { Route } from 'react-router-dom'

import Layout from '../../Layout/components/Layout'

export default ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout
      content={Component}
      {...props}
    />
  )}
  />
)
