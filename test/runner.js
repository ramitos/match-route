var test = require('specced')()

test.timeout = 1000

test.specs = {
  routing: require('./specs/routing'),
  params: require('./specs/params'),
  query: require('./specs/query')
}

test.before = function (helpers, callback) {
  helpers.requests = require('./requests.json')
  helpers.routes = require('./routes.json')
  callback()
}

test.run(function (e) {
  console.log('tests not passed')
  process.exit(1)
}, function () {
  console.log('all passed')
  process.exit(0)
})

// ,
// params: require('./specs/params'),
// query: require('./specs/query')