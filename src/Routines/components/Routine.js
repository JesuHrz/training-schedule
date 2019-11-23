import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import {
  RoutineContent,
  Text,
  Actions,
  Button
} from './styles'

export default props => {
  const {
    handleDelete,
    id,
    name,
    day,
    duration,
    description
  } = props

  return (
    <RoutineContent>
      <Text width={20}>{name}</Text>
      <Text width={20}>{day}</Text>
      <Text width={20}>{duration}</Text>
      <Text width={20}>{description}</Text>
      <Actions width={'20%'}>
        <FontAwesomeIcon
          icon={faEdit}
          size={'1x'}
          color={'black'}
        />
        <FontAwesomeIcon
          onClick={() => handleDelete(id)}
          icon={faTrashAlt}
          size={'1x'}
          color={'black'}
        />
      </Actions>
    </RoutineContent>
  )
}
