
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const LayoutNavigation = styled.div`
  background-color: rgb(247,0,65);
  flex-basis: 18%;
  min-height: 100vh;
`

export const LayoutContent = styled.div`
  flex-basis: ${props => `${props.fullWidth}%`};
  padding: 20px;
  min-height: 100vh;
`
