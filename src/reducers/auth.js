const initialState = {
  id: '',
  email: ''
}

export const ADD_USER = 'ADD_USER'

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
