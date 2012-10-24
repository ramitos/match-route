var interpolate = require('util').format,
    assert = require('assert'),
    mr = require('../..')

module.exports = function (helpers, callback) {
  var on = new Object()
  
  on.post = function (route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(route === 'post./')
  }
  
  on.del = function (route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(route === 'delete./')
  }
  
  on.get = function (route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(route === 'get./')
  }
  
  on.put = function (route, params, query) {
    assert(Object.keys(params).length === 0)
    assert(Object.keys(query).length === 0)
    assert(route === 'put./')
  }
  
  mr(helpers.requests.routing.post, helpers.routes, on.post)
  mr(helpers.requests.routing.get, helpers.routes, on.get)
  mr(helpers.requests.routing.del, helpers.routes, on.del)
  mr(helpers.requests.routing.put, helpers.routes, on.put)
  
  callback()
}