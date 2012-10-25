var assert = require('component-assert')
var mr = require('ramitos-match-route')

// (function () {
//   var on = {};
//
//   on.post = function (route, params, query) {
//     assert(Object.keys(params).length === 0)
//     assert(Object.keys(query).length === 0)
//     assert(route === 'post./')
//   }
//
//   on.del = function (route, params, query) {
//     assert(Object.keys(params).length === 0)
//     assert(Object.keys(query).length === 0)
//     assert(route === 'delete./')
//   }
//
//   on.get = function (route, params, query) {
//     assert(Object.keys(params).length === 0)
//     assert(Object.keys(query).length === 0)
//     assert(route === 'get./')
//   }
//
//   on.put = function (route, params, query) {
//     assert(Object.keys(params).length === 0)
//     assert(Object.keys(query).length === 0)
//     assert(route === 'put./')
//   }
//
//   console.log(requests)
//
//   mr(requests.routing.post, routes, on.post)
//   mr(requests.routing.get, routes, on.get)
//   mr(requests.routing.del, routes, on.del)
//   mr(requests.routing.put, routes, on.put)
// })();
