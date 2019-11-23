import React from 'react'
import { Link } from 'react-router-dom'
import Firebase from 'firebase'

// import './styles.css'

export default (props) => {
  const {
    handleSubmit,
    disabled,
    email,
    password
  } = props
  
  // const user = Firebase.auth().currentUser
  // if (user) {
  //   console.warn('user', user)
  // } else {
  //   console.warn('no-user')
  // }
  return (
    <div className='signup__container'>
      <div className='signup__content'>
        <form className='signup__form' action='#' onSubmit={handleSubmit}>
          <label className='signup__label' htmlFor='name' >Correo electronico</label>
          <input id='name' className='signup__input' type='email' name='email' {...email} />

          <label className='signup__label'>Contraseña</label>
          <input className='signup__input' type='password' name='password' {...password} />

          <input className='signup__button' type='submit' value='Iniciar Sesion' disabled={disabled} />
        </form>

        <Link to='/signup' className='form__link'>¿Aun no tienes una cuenta?</Link>
      </div>
    </div>
  )
}
