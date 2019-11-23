import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { getRef, getDataOnce, removeData } from '../../libs/firabase'

import { parseData } from '../../libs'

import {
  RoutineContainer,
  RoutineContent,
  Title,
  Text,
  Icon,
  Actions
} from '../components/styles'

import Routine from '../components/Routine'
import RoutineCreate from '../../RoutineCreate/container'

const Routines = props => {
  const { id } = props
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [rutines, setRutines] = useState([])

  const closeModal = () => setModalIsOpen(false)
  const openModal = () => setModalIsOpen(true)

  useEffect(() => {
    getRef(`rutines/${id}`).on('value', snapshot =>
      setRutines([...parseData(snapshot, id)]))

    getDataOnce(`rutines/${id}`)
      .then(snapshot => parseData(snapshot, id))
      .then(data => setRutines([...data]))
      .catch(err => console.warn('err', err))
    return () => {
      getRef('rutines').off('value')
    }
  }, [])

  const handleDelete = rutineId => removeData(`rutines/${id}/${rutineId}`)

  return (
    <RoutineContainer>
      <Title>Tus Rutinas</Title>
      <Icon
        onClick={openModal}
      >
        <FontAwesomeIcon
          icon={faPlusCircle}
          size={'3x'}
          color={'black'}
        />
      </Icon>
      <RoutineContent>
        <Text bold fontSize={17} width={20}>Nombre</Text>
        <Text bold fontSize={17} width={20}>Dia</Text>
        <Text bold fontSize={17} width={20}>Duracion</Text>
        <Text bold fontSize={17} width={20}>Descripcion</Text>
        <Actions width={'20%'}>
          <Text bold fontSize={17}>Editar</Text>
          <Text>/</Text>
          <Text bold fontSize={17}>Borrar</Text>
        </Actions>
      </RoutineContent>
      {
        rutines.map((rutine, i) => <Routine key={i} {...rutine} handleDelete={handleDelete} />)
      }
      <RoutineCreate
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        setRutines={setRutines}
      />
    </RoutineContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id
  }
}

export default connect(
  mapStateToProps
)(Routines)
