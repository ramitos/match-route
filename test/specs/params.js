var interpolate = require('util').format,
    assert = require('assert'),
    mr = require('../..')

module.exports = function (helpers, callback) {
  var on = new Object()

  on.post = function (route, params, query) {
    assert(Object.keys(params).length === 2)
    assert(Object.keys(query).length === 0)
    assert(route === 'post./user/:id/:age')
    assert(params.age === '21')
    assert(params.id === '5')
  }

  on.del = function (route, params, query) {
    assert(Object.keys(params).length === 1)
    assert(Object.keys(query).length === 0)
    assert(route === 'delete./user/:id')
    assert(params.id === '5')
  }

  on.get = function (route, params, query) {
    assert(Object.keys(params).length === 1)
    assert(Object.keys(query).length === 0)
    assert(route === 'get./user/:id/age')
    assert(params.id === '5')
  }

  on.put = function (route, params, query) {
    assert(Object.keys(params).length === 2)
    assert(Object.keys(query).length === 0)
    assert(route === 'put./:type/:subtype')
    assert(params.subtype === 'admin')
    assert(params.type === 'user')
  }

  mr(helpers.requests.params.post, helpers.routes, on.post)
  mr(helpers.requests.params.get, helpers.routes, on.get)
  mr(helpers.requests.params.del, helpers.routes, on.del)
  mr(helpers.requests.params.put, helpers.routes, on.put)

  callback()
}