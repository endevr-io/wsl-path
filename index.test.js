/* globals test, expect */

const { windowsToWsl, wslToWindows } = require('./index')

test('windowsToWsl - windows path converts to posix path', () => {
  expect(windowsToWsl('C:\\Users\\endevr\\Documents')).toBe('/mnt/c/Users/endevr/Documents')
})

test('windowsToWsl - must be absolute path', () => {
  expect(() => windowsToWsl('%USERPROFILE%\\Documents')).toThrow('The path must be an absolute path')
})

test('wslToWindows - posix path converts to windows path', () => {
  expect(wslToWindows('/mnt/c/Users/endevr/Documents')).toBe('C:\\Users\\endevr\\Documents')
})

test('wslToWindows - must be absolute path', () => {
  expect(() => wslToWindows('~/Documents')).toThrow('The path must be an absolute path')
})
