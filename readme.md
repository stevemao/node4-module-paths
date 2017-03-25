# Synopsis

A lot of node modules are only targeting node v4 and up. But it doesn't play well with webpack since 1) plugins like uglify doesn't support ES6 yet and 2) ES6 browser support isn't great yet.

# Usage

```js
const path = require('path')
const node4ModulePaths = require('node4-module-paths')

// Then in some async function
const es6ModulePaths = await node4ModulePaths();

{
  test: /\.js$/,
  include: [
    ...es6ModulePaths,
    path.resolve(__dirname, 'src'),
  ],
  use: 'babel-loader',
}
```

# CLI

```
npm i -g node4-module-paths
node4-module-paths
```

Use the command to inspect your project.
