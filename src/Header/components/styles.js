import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 10px;
  background-color: rgb(247, 0, 65);
  flex-basis: 100%;
  height: 80px;
`
export const HeaderIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 80px;
`
export const HeaderMenu = styled.nav`
  color: white;
  margin: 0 20px;
`
export const MenuItem = styled(LinkRouter)`
  color: white;
  margin: 0 20px;
`
