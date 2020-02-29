import * as Items from 'store/selectors/items'

const isLoaded = (state, collection) => state[collection] && state[collection].loaded
const isLoading = (state, collection) => state[collection] && state[collection].loading

const Main = {
  isLoading,
  isLoaded
}

export {
  Items,
  Main
}
