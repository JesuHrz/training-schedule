import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
// import Firebase from 'firebase'

import PublicRoute from '../components/PublicRoute'
import PrivateRoute from '../components/PrivateRoute'

import SignIn from '../../SignIn/container/'
import SignUp from '../../Signup/container/'
import Dashboard from '../../Dashboard/container'
import Routines from '../../Routines/container'

import { addUser } from '../../actions/auth'

const Router = (props) => {
  const { id, addUser } = props
  const isAuth = !!id

  // const { currentUser } = Firebase.auth()

  // if (currentUser && Object.keys(currentUser).length) {
  //   const { uid, email } = currentUser
  //   addUser({ id: uid, email })
  // }
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path='/' component={SignIn} />
          <PublicRoute path='/signup' component={SignUp} />
          <PrivateRoute isAuth exact path='/dashboard' component={Dashboard} />
          <PrivateRoute isAuth path='/dashboard/routines' component={Routines} />
          <Route render={() => <div>Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

const mapStateToProps = (state, props) => {
  return {
    id: state.auth.id
  }
}

export default connect(
  mapStateToProps,
  {
    addUser
  }
)(Router)
