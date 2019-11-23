import React from 'react'
import { faDumbbell, faCalendarAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'

import {
  Nav,
  List,
  Item
} from './styles'

export default props => {
  return (
    <Nav>
      <List>
        <Item to='/dashboard/routines'>Rutina</Item>
        <Item to='/'>Calendario</Item>
        <Item to='/'>Goals</Item>
        <Item to='/'>Estadisticas</Item>
        <Item to='/'>Ejercicios</Item>
        <Item to='/'>Tips de Alimentacion</Item>
      </List>
    </Nav>
  )
}
