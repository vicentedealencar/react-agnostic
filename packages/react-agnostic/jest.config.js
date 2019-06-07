const { jest: jestConfig } = require('kcd-scripts/config')

module.exports = Object.assign(jestConfig, {
  // your overrides here
  testEnvironment: 'node',
})
