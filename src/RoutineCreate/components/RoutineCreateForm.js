import React from 'react'

import {
  Form,
  Title,
  InputGroup,
  Label,
  Input,
  ButtonGroup,
  ErrorLabel
} from './styles'

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
    <Form onSubmit={handleSubmit}>
      <Title>Crea Rutina</Title>
      <InputGroup>
        <Label htmlFor='name'>Nombre de la Rutina</Label>
        <Input
          id='name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          type='text'
        />
        { errors.name && touched.name && <ErrorLabel>{errors.name}</ErrorLabel> }
      </InputGroup>
      <InputGroup>
        <Label htmlFor='day'>Dia</Label>
        <Input
          id='day'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.day}
          type='text'
        />
        { errors.day && touched.day && <ErrorLabel>{errors.day}</ErrorLabel> }
      </InputGroup>
      <InputGroup>
        <Label htmlFor='duration'>Duracion</Label>
        <Input
          id='duration'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.duration}
          type='text'
        />
        { errors.duration && touched.duration && <ErrorLabel>{errors.duration}</ErrorLabel> }
      </InputGroup>
      <InputGroup>
        <Label htmlFor='description'>Descripcion</Label>
        <Input
          id='description'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          type='text'
        />
      </InputGroup>
      <ButtonGroup>
        <input type='submit' value='Crear' disabled={isSubmitting} />
      </ButtonGroup>
    </Form>
  )
}
