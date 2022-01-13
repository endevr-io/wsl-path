# @endever-io/wsl-path

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/endevr-io/wsl-path?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/endevr-io/wsl-path?style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@endevr-io/wsl-path?style=flat-square)
![GitHub Sponsors](https://img.shields.io/github/sponsors/skuIIs?style=flat-square)
![GitHub](https://img.shields.io/github/license/endevr-io/wsl-path?style=flat-square)

wsl-path is a node package that converts converts Windows paths to WSL and vice-versa using just the `path` module. Other tools or packages require CLI tools to be installed on the WSL instance and use a newly spawned shell or cache to get the value.

## Installation

You can use npm or yarn to install this package into your project

```bash
npm install @endever-io/wsl-path

yarn add @endever-io/wsl-path
```

## Usage

```javascript
const { windowsToWsl, wslToWindows } = require('@endever-io/wsl-path')

// This package does not check if the path exists
// The path must be an absolute path or an exception is thrown

try {
  const wsl = windowsToWsl('C:\\Users\\endevr\\Documents')
  console.log(wsl)
  # logs '/mnt/c/Users/endevr/Documents'
} catch (error) {
  console.log(error)
}

try {
  const windows = wslToWindows('/mnt/c/Users/endevr/Documents')
  console.log(windows)
  # logs 'C:\\Users\\endevr\\Documents'
} catch (error) {
  console.log(error)
}
```

## Contributing
Pull requests are welcome for bug fixes or feature requests. Make sure that all tests pass with `npm run test` before creating a pull request.

## Sponsors
Support this project and possibly other open-source projects by becoming a sponsor. Higher tier sponsor will appear here with a logo and link to your website. [Become a sponsor](https://github.com/sponsors/skuIIs)

## License
[MIT](https://github.com/endevr-io/wsl-path/blob/main/LICENSE)
