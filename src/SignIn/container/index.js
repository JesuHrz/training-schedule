import React, { useState } from 'react'
import Firebase from 'firebase'
import { connect } from 'react-redux'

import { useInputValue } from '../../hooks/useInputValue'
import { addUser } from '../../actions/auth'

import SignIn from '../components/SignIn'

const SignInComponent = props => {
  const { addUser, history } = props
  const [disabled, setDisabled] = useState(false)

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    setDisabled(prev => !prev)
    Firebase.auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(data => {
        const { email, uid } = data.user
        addUser({ id: uid, email })
        history.replace('/dashboard')
      })
      .catch(e => {
        console.error('Error', e)
        setDisabled(prev => !prev)
      })
  }

  return (
    <SignIn
      handleSubmit={handleSubmit}
      disabled={disabled}
      email={email}
      password={password}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id
  }
}

export default connect(
  mapStateToProps,
  {
    addUser
  }
)(SignInComponent)
