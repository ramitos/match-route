var interpolate = require('util').format,
    assert = require('assert'),
    mr = require('../..')

module.exports = function (helpers, callback) {
  var on = new Object()

  on.post = function (route, params, query) {
    assert(Object.keys(params).length === 2)
    assert(Object.keys(query).length === 2)
    assert(route === 'post./user/:id/:age')
    assert(params.age === '21')
    assert(params.id === '5')
    assert(query.q1 === '2')
    assert(query.q2 === 't')
  }

  on.del = function (route, params, query) {
    assert(Object.keys(params).length === 1)
    assert(Object.keys(query).length === 2)
    assert(route === 'delete./user/:id')
    assert(params.id === '5')
    assert(query.q1 === '3')
    assert(query.q2 === 't')
  }

  on.get = function (route, params, query) {
    assert(Object.keys(params).length === 1)
    assert(Object.keys(query).length === 2)
    assert(route === 'get./user/:id/age')
    assert(params.id === '5')
    assert(query.q1 === '3')
    assert(query.q2 === 't')
  }

  on.put = function (route, params, query) {
    assert(Object.keys(params).length === 2)
    assert(Object.keys(query).length === 2)
    assert(route === 'put./:type/:subtype')
    assert(params.subtype === 'admin')
    assert(params.type === 'user')
    assert(query.q1 === '3')
    assert(query.q2 === 't')
  }

  mr(helpers.requests.query.post, helpers.routes, on.post)
  mr(helpers.requests.query.get, helpers.routes, on.get)
  mr(helpers.requests.query.del, helpers.routes, on.del)
  mr(helpers.requests.query.put, helpers.routes, on.put)

  callback()
}