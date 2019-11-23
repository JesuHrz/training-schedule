import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withFormik } from 'formik'

import Modal from '../../Modal/components/Modal'
import RoutineCreateForm from '../components/RoutineCreateForm'

import { getRef } from '../../libs/firabase'

const RoutineCreate = props => {
  const {
    closeModal,
    modalIsOpen,
    ...rest
  } = props

  return (
    <Modal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
    >
      <RoutineCreateForm
        {...rest}
      />
    </Modal>
  )
}

const MyEnhanced = withFormik({
  mapPropsToValues: () => ({
    name: '',
    day: '',
    duration: '',
    description: ''
  }),
  validate: values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'El campo nombre es requerido.'
    }
    if (!values.day) {
      errors.day = 'El campo día es requerido.'
    }
    if (!values.duration) {
      errors.duration = 'El campo duracion es requerido.'
    }
    return errors
  },
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    const { id } = props
    getRef(`rutines/${id}`).push({ ...values })
    setSubmitting(false)
    resetForm()
  },
  displayName: 'RoutineCreateForm'
})(RoutineCreate)

const mapStateToProps = (state) => {
  return {
    id: state.auth.id
  }
}

export default connect(
  mapStateToProps
)(MyEnhanced)
