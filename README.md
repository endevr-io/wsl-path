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

## Functions

<dl>
<dt><a href="#windowsToWsl">windowsToWsl(absolutePath)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a Windows path to a WSL path</p>
</dd>
<dt><a href="#wslToWindows">wslToWindows(absolutePath)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a WSL path to a Windows path</p>
</dd>
</dl>

<a name="windowsToWsl"></a>

## windowsToWsl(absolutePath) ⇒ <code>string</code>
Converts a Windows path to a WSL path

**Kind**: global function  
**Returns**: <code>string</code> - normalized WSL path  
**Throws**:

- <code>TypeError</code> throws if absolutePath is not a string
- <code>Error</code> throws if the path in not an absolute path


| Param | Type | Description |
| --- | --- | --- |
| absolutePath | <code>string</code> | an absolute Windows path |

**Example**  
```javascriptconst { windowsToWsl } = require('@endevr-io/wsl-path')const wsl = windowsToWsl('C:\\Users\\endevr\\Documents')console.log(wsl)// '/mnt/c/Users/endevr/Documents'```
<a name="wslToWindows"></a>

## wslToWindows(absolutePath) ⇒ <code>string</code>
Converts a WSL path to a Windows path

**Kind**: global function  
**Returns**: <code>string</code> - normalized Windows path  
**Throws**:

- <code>TypeError</code> throws if absolutePath is not a string
- <code>Error</code> throws if the path in not an absolute path


| Param | Type | Description |
| --- | --- | --- |
| absolutePath | <code>string</code> | an absolute WSL path |

**Example**  
```javascriptconst windows = wslToWindows('/mnt/c/Users/endevr/Documents')console.log(windows)// 'C:\\Users\\endevr\\Documents'```

## Contributing
Pull requests are welcome for bug fixes or feature requests. Make sure that all tests pass with `npm run test` before creating a pull request.

## Sponsors
Support this project and possibly other open-source projects by becoming a sponsor. Higher tier sponsor will appear here with a logo and link to your website. [Become a sponsor](https://github.com/sponsors/skuIIs)

## License
[MIT](https://github.com/endevr-io/wsl-path/blob/main/LICENSE)
