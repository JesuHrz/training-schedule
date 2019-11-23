import { ADD_USER } from '../reducers/auth'

export function addUser (payload) {
  return {
    type: ADD_USER,
    payload
  }
}
