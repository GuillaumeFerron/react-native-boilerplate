import { Types } from 'constants'

/**
 * Handle errors with dropdown alerts
 * @param  {Object} error
 * @return {Object}
 */
export async function handleError(error) {
  return {
    type: Types.FAILURE,
    message: error.message
  }
}
