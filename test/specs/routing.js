var interpolate = require('util').format,
    assert = require('assert'),
    mr = require('../..')

module.exports = function (helpers, callback) {
  var on = new Object()
  
  on.post = function (value, route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(value === 'post./')
    assert(route === '/')
  }
  
  on.del = function (value, route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(value === 'delete./')
    assert(route === '/')
  }
  
  on.get = function (value, route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(value === 'get./')
    assert(route === '/')
  }
  
  on.put = function (value, route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(value === 'put./')
    assert(route === '/')
  }
  
  mr(helpers.requests.routing.post, helpers.routes, on.post)
  mr(helpers.requests.routing.get, helpers.routes, on.get)
  mr(helpers.requests.routing.del, helpers.routes, on.del)
  mr(helpers.requests.routing.put, helpers.routes, on.put)
  
  callback()
}