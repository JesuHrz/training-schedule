import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { Link } from 'react-router-dom'
// import Firebase from 'firebase'
import {
  DashboardAction,
  ActionIcon,
  ActionTitle
} from './styles'

export default props => {
  const {
    backgroundColor,
    borderColor,
    icon,
    title
  } = props
  return (
    <DashboardAction
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      to='/dashboard/routines'
    >
      <ActionIcon >
        <FontAwesomeIcon
          {...icon}
        />
      </ActionIcon>
      <ActionTitle>
        {title}
      </ActionTitle>
    </DashboardAction>
  )
}
