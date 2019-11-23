import React from 'react'
import { faDumbbell, faCalendarAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'

// import { Link } from 'react-router-dom'
// import Firebase from 'firebase'

import DashboardAction from './DashboardAction'

import {
  DashboardActions
} from './styles'

export default props => {
  return (
    <DashboardActions>
      <DashboardAction
        to='/dashboard/routines'
        backgroundColor='#FF1744'
        borderColor='#FF5252'
        icon={{
          icon: faDumbbell,
          size: '2x',
          color: 'white'
        }}
        title='Ver Rutinas'
      />
      <DashboardAction
        to='/dashboard/routines'
        backgroundColor='#00C853'
        borderColor='#69F0AE'
        icon={{
          icon: faCalendarAlt,
          size: '2x',
          color: 'white'
        }}
        title='Ver Calendario'
      />
      <DashboardAction
        to='/dashboard/routines'
        backgroundColor='#FDD835'
        borderColor='#FFEB3B'
        icon={{
          icon: faTrophy,
          size: '2x',
          color: 'white'
        }}
        title='Ver Goals'
      />
    </DashboardActions>
  )
}
