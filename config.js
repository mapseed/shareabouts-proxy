var extend = require('xtend')

var config = {
  shared: {},
  development: {
    host: 'http://127.0.0.1:8000/api/v2/'
  },
  production: {
    host: 'http://api.heyduwamish.org/api/v2/'
  }
}

module.exports = extend(config.shared, config[process.env.NODE_ENV])
