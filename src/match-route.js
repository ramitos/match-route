var regex = require('path-to-regexp'),
    qs = require('querystring'),
    url = require('url');

module.exports = function (req, routes, callback) {
  var method = req.method.toLowerCase();
  var parsedurl = url.parse(req.url);
  var querystring = parsedurl.query;
  var query = qs.parse(querystring);
  var pathname = parsedurl.pathname;
  var params = new Object();
  var value = null;
  var mroute = '';

  Object.keys(routes[method]).forEach(function (route) {
    var keys = new Array();
    var rexp = regex(route, keys, false, false);
    var match = pathname.match(rexp);
    if(!match) return;

    match.shift();
    value = routes[method][route];
    mroute = route;

    match.forEach(function (param, index) {
      params[keys[index].name] = param;
    });
  });

  callback(value, mroute, params, query);
};