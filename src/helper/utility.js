import { toast } from 'react-toastify'

export const showToastMessage = (message, type) => {
  if (typeof message !== 'string') {
    return
  }
  switch (type) {
    case 'warn':
      toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT
      })
      break
    case 'success':
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
      })
      break
    default:
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      })
  }
}

/**
 * It will return * for 404 page when path is not present, otherwise it will append all subpath and path.
 * If route is a string and then it returns the same, otherwise 404
 *
 * @function getFullRoute
 * @param {(Object|string)} route - It can be both string and object. String only for javascript:void(0)
 * @param {Object} route.pathAndSubpath
 * @param {string} route.pathAndSubPath.path
 * @param {Object[]} pathAndSubPath.subPath
 * @returns {string}
 */
 export const getFullRoute = route => {
  if (route === undefined || route === null) {
    return '*'
  }

  if (typeof route === 'string') {
    return route
  }

  const { path = '', subPath = [] } = route
  if (path.length === 0) {
    return '*'
  }

  const formattedSubPath = subPath.reduce((result, path) => `${result}/:${path}`, '')

  return `${path}${formattedSubPath}`
}