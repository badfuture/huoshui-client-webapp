const path = require('path')
function buildConfig(env) {
  env = env || 'dev'
  const pathConfig = path.resolve(__dirname, `./webpack.${env}.js`)
  console.log(pathConfig)
  return require(pathConfig)(env)
}

module.exports = buildConfig
