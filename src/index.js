import React from 'react'
import { render } from 'react-dom'

import App from './App/container'
import Router from './Router/container/Router'

const app = document.getElementById('app')

render(<App>
  <Router />
</App>, app)
