import * as actionTypes from '../../types'

const DEFAULT_STATE = {}

const ExampleReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.EXAMPLE_TYPE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default ExampleReducer
