import { ITEMS_TYPES } from 'store/types'

const loadingItems = () => ({
  type: ITEMS_TYPES.ITEMS_LOADING
})

const itemsLoaded = (items) => ({
  type: ITEMS_TYPES.ITEMS_LOADED,
  items
})

const itemsErrored = (error) => ({
  type: ITEMS_TYPES.ITEMS_ERROR,
  error
})

export const loadItems = () => async (dispatch) => {
  dispatch(loadingItems())

  try {
    const items = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(['a', 'b', 'c'])
      }, 250)
    })

    dispatch(itemsLoaded(items))
  } catch (err) {
    dispatch(itemsErrored(err))
  }
}
