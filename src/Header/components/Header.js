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
    </HeaderContainer>
  )
}
