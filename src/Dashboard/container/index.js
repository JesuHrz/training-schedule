import React from 'react'
// import { Link } from 'react-router-dom'
// import Firebase from 'firebase'
// import './styles.css'

import Dashboard from '../components/Dashboard'

import {
  DashboardContainer
} from '../components/styles'

export default props => {
  // console.warn('isAuth', Firebase.auth().currentUser)
  return (
    <DashboardContainer>
      <Dashboard />
    </DashboardContainer>
  )
}
