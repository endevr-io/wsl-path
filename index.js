const path = require('path')

/**
 * Converts a Windows path to a WSL path.
 * @param {string} absolutePath - an absolute Windows path.
 * @returns {string} path - normalized WSL path.
 * @throws The path must be an absolute path.
 */
exports.windowsToWsl = (absolutePath) => {
  if (path.win32.isAbsolute(absolutePath)) {
    const seperated = absolutePath.split(path.win32.sep)
    const joined = [].concat([seperated[0].toLowerCase()], seperated.slice(1))
    return path.posix.normalize('/mnt/' + path.posix.join.apply(path.posix, joined).replace(':', ''))
  } else {
    throw new Error('The path must be an absolute path')
  }
}

/**
 * Converts a WSL path to a Windows path.
 * @param {string} absolutePath - an absolute WSL path.
 * @returns {string} path - normalized Windows path.
 * @throws The path must be an absolute path.
 */
exports.wslToWindows = (absolutePath) => {
  if (path.posix.isAbsolute(absolutePath)) {
    const seperated = absolutePath.split(path.posix.sep)
    seperated.splice(0, 2)
    return path.win32.normalize(path.win32.join.apply(path.win32, seperated).replace(seperated[0], seperated[0].toUpperCase() + ':'))
  } else {
    throw new Error('The path must be an absolute path')
  }
}
