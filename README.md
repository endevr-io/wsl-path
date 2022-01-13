# @endever-io/wsl-path

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

## License
[MIT](https://github.com/endevr-io/wsl-path/blob/main/LICENSE)
