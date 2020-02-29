import { ITEMS_TYPES } from 'store/types'

const INITIAL_STATE = {
  loading: false,
  loaded: false
}

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ITEMS_TYPES.ITEMS_LOADING:
    return { ...state, loading: true }
  case ITEMS_TYPES.ITEMS_LOADED:
    return { ...state, data: action.items, loading: false, loaded: true }
  case ITEMS_TYPES.ITEMS_ERROR:
    return { ...state, data: [], error: action.error, loading: false }
  default:
    return { ...state }
  }
}

export default mainReducer
