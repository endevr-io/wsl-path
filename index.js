const path = require('path')

/**
 * Converts a Windows path to a WSL path
 * @example
 * ```javascript
 * const { windowsToWsl } = require('@endevr-io/wsl-path')
 * const wsl = windowsToWsl('C:\\Users\\endevr\\Documents')
 * console.log(wsl)
 * // '/mnt/c/Users/endevr/Documents'
 * ```
 * @param {string} absolutePath - an absolute Windows path
 * @returns {string} normalized WSL path
 * @throws {TypeError} throws if absolutePath is not a string
 * @throws {Error} throws if the path in not an absolute path
 */
exports.windowsToWsl = (absolutePath) => {
  if (typeof absolutePath !== 'string') throw new TypeError('parameter absolutePath must be string')
  if (!path.win32.isAbsolute(absolutePath)) throw new Error('The path must be an absolute path')
  const seperated = absolutePath.split(path.win32.sep)
  const joined = [].concat([seperated[0].toLowerCase()], seperated.slice(1))
  return path.posix.normalize('/mnt/' + path.posix.join.apply(path.posix, joined).replace(':', ''))
}

/**
 * Converts a WSL path to a Windows path
 * @example
 * ```javascript
 * const windows = wslToWindows('/mnt/c/Users/endevr/Documents')
 * console.log(windows)
 * // 'C:\\Users\\endevr\\Documents'
 * ```
 * @param {string} absolutePath - an absolute WSL path
 * @returns {string} normalized Windows path
 * @throws {TypeError} throws if absolutePath is not a string
 * @throws {Error} throws if the path in not an absolute path
 */
exports.wslToWindows = (absolutePath) => {
  if (typeof absolutePath !== 'string') throw new TypeError('parameter absolutePath must be string')
  if (!path.posix.isAbsolute(absolutePath)) throw new Error('The path must be an absolute path')
  const seperated = absolutePath.split(path.posix.sep)
  seperated.splice(0, 2)
  return path.win32.normalize(path.win32.join.apply(path.win32, seperated).replace(seperated[0], seperated[0].toUpperCase() + ':'))
}
