import i18n from 'assets/locales/index'

/**
 * Preload the resources
 */
async function loadResources() {
  //
}

/**
 * Initialize the app
 * @return {Bool}
 */
export async function init() {
  global.i18n = i18n

  await loadResources()

  return true
}
