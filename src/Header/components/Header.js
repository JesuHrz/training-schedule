import React from 'react'

import {
  HeaderContainer,
  HeaderIcon,
  HeaderMenu,
  MenuItem
} from './styles'

import headerIcon from '../../../assets/images/gym-icon.png'

export default (props) => {
  return (
    <HeaderContainer>
      <HeaderIcon src={headerIcon} />
      <HeaderMenu>
        <MenuItem to='/dashboard'>Menu 1</MenuItem>
        <MenuItem to='/dashboard'>Menu 2</MenuItem>
        <MenuItem to='/dashboard'>Menu 3</MenuItem>
        <MenuItem to='/dashboard'>Menu 4</MenuItem>
      </HeaderMenu>
    </HeaderContainer>
  )
}
