'use strict';
const rpt = require('read-package-tree')
const semver = require('semver')

const recursivelyGetPackages = (data) => (
  [data].concat(data.children.reduce((acc, child) => (
    acc.concat(recursivelyGetPackages(child))
  ), []))
)

module.exports = () => {
  return new Promise((resolve, reject) => {
    rpt('./', (er, data) => {
      if (er) {
        reject(er)
        return
      }

      resolve(
        recursivelyGetPackages(data)
        .filter(
          nodeModule => {
            let nodeVersion
            if (nodeModule.package.engines && nodeModule.package.engines.node) {
              nodeVersion = nodeModule.package.engines.node
            } else if (nodeModule.package.engine && nodeModule.package.engine.node) {
              nodeVersion = nodeModule.package.engine.node
            } else {
              return false;
            }

            const range = semver.Range(nodeVersion).range
            return range === '>=4.0.0'
          }
        )
        .map(node4Module => node4Module.realpath)
      )
    })
  })
}
