import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  padding: 10px 10px;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`

export const Item = styled(NavLink)`
  flex-basis: 100%;
  padding: 10px 10px;
  list-style: none;
  font-size: 16px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #f70041;
  }
`
