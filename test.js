const node4ModulePaths = require('./')
const path = require('path')

test('contains node4 module: repeating', () => (
  node4ModulePaths()
    .then((paths) => {
      expect(paths).toContain(
        path.resolve(__dirname, 'node_modules/repeating')
      )
    })
))
