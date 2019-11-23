import styled from 'styled-components'

export const RoutineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0px;
`

export const Title = styled.h1`
  display: flex;
  flex: 1;
  padding: 10px 0px;
`

export const Icon = styled.button`
  display: flex;
  justify-self: center;
  align-self: center;
  border: none;
  cursor: pointer;
  outline: none;
`

export const RoutineContent = styled.div`
  display: flex;
  flex-basis: 100%;
  margin-top: 5px;
  padding: 6px 0px;
  border-bottom: 1px solid #f2f2f2;
`

export const Text = styled.p(props => {
  const { bold, width, fontSize = 15 } = props
  if (bold) {
    return {
      flexBasis: `${width}%`,
      fontSize: fontSize,
      fontWeight: 'bold'
    }
  }
  return {
    fontSize: fontSize,
    flexBasis: `${width}%`
  }
})

export const Actions = styled.div`
  display: flex;
  flex-basis: ${props => `${props.width}`};
  justify-content: space-around;
  align-items: center;
`

export const Button = styled.button`
  background: red
`
