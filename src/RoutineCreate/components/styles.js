import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  flex-wrap: wrap;
  padding-top: 40px;
`

export const Title = styled.h1`
  padding-bottom: 20px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-basis: 100%;
  margin-top: 5px;
  flex-wrap: wrap;
`

export const Label = styled.label`
  display: flex;
  flex-basis: 100%;
  font-size: 16px;
  padding: 8px 4px;
`

export const Input = styled.input`
  display: flex;
  flex-basis: 100%;
  font-size: 16px;
  height: 30px;
  padding: 5px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-basis: 100%;
  margin-top: 20px;
`

export const ErrorLabel = styled.p`
  display: flex;
  flex-basis: 100%;
  color: red;
`
