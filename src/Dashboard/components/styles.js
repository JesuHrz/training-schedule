import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Color from 'color'

export const DashboardContainer = styled.div`
  /* background-color: antiquewhite; */
`

export const DashboardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const DashboardAction = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 30%;
  background-color: rgba(${props =>
    generateColor(props.backgroundColor,
      props.alpha
    )});
  border: 1px solid rgba(${props =>
    generateColor(props.borderColor,
      props.alpha
    )});;
  border-radius: 8px;
  padding: 20px 10px;
`

export const ActionIcon = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`
export const ActionTitle = styled.p`
  font-size: 16px;
  color: white;
`

const generateColor = (c = 'white', alpha = 1) => {
  const { color, valpha } = Color(c).alpha(alpha)
  return [ ...color, valpha ].join(',')
}
