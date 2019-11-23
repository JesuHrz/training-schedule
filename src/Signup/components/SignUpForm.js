import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default props => {
  const {
    handleSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    values,
    errors,
    touched
  } = props
  return (
    <div className='signup__container'>
      <div className='signup__content'>
        <form className='signup__form' onSubmit={handleSubmit}>

          <label className='signup__label' htmlFor='name' >Nombre</label>
          <input
            id='name'
            className='signup__input'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            type='text'
          />

          <label className='signup__label'>Apellido</label>
          <input
            id='lastname'
            className='signup__input'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
            type='text'
          />

          <label className='signup__label'>Correo electronico</label>
          <input
            id='email'
            className='signup__input'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type='email'
          />

          <label className='signup__label'>Eres</label>
          <select
            className='signup_select'
            name='personType'
            value={values.personType}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value='1'>Seleccione una opcion</option>
            <option value='deportista'>Deportista</option>
            <option value='entrenador'>Entrenador</option>
          </select>

          <label className='signup__label'>Tipo de Documento</label>
          <select
            className='signup_select'
            name='documentType'
            value={values.documentType}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value='1'>Seleccione una opcion</option>
            <option value='cedula'>Cedula</option>
            <option value='cedula extranjera'>Cedula de extranjeria</option>
            <option value='tarjeta de identidad'>Tarjeta de identidad</option>
          </select>

          <label className='signup__label'>Numero de Documento</label>
          <input
            id='id'
            className='signup__input'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.id}
            type='text'
          />

          <label className='signup__label'>Contreaseña</label>
          <input
            id='password'
            className='signup__input'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            type='password'
          />

          <input
            className='signup__button'
            type='submit'
            value='Registrar'
            disabled={isSubmitting}
          />
        </form>

        <Link to='/' className='form__link'>¿Ya tienes una cuenta?</Link>
      </div>
    </div>
  )
}
