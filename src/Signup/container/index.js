import React, { useState } from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { withFormik } from 'formik'

// import { useInputValue } from '../../hooks/useInputValue'
import { addUser } from '../../actions/auth'
import { getRef } from '../../libs/firabase'

import SignUpFrom from '../components/SignUpForm'

const SignUp = props => {
  return (
    <SignUpFrom {...props} />
  )
}

const MyEnhanced = withFormik({
  mapPropsToValues: () => ({
    name: '',
    lastname: '',
    email: '',
    personType: '',
    documentType: '',
    id: '',
    password: ''
  }),
  validate: values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'El campo nombre es requerido.'
    }
    if (!values.lastname) {
      errors.lastname = 'El campo apellido es requerido.'
    }
    if (!values.email) {
      errors.email = 'El campo de correo electronico es requerido.'
    }
    if (!values.personType) {
      errors.personType = 'El campo de tipo de usuario es requerido.'
    }
    if (!values.documentType) {
      errors.documentType = 'El campo de tipo de documento es requerido.'
    }
    if (!values.id) {
      errors.id = 'El campo cedula es requerido.'
    }
    if (!values.password) {
      errors.password = 'El campo contraseña es requerido.'
    }

    return errors
  },
  handleSubmit: (values, {
    setSubmitting,
    props
  }) => {
    const { email, password, ...restValues } = values
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        const { email, uid } = data.user
        const { addUser, history } = props
        addUser({ id: uid, email })
        getRef(`users/${uid}`).set({ ...restValues })
        history.replace('/dashboard')
      })
      .catch(e => {
        setSubmitting(false)
        console.error('Error', e)
      })
  },
  displayName: 'SignUp'
})(SignUp)

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
)(MyEnhanced)
