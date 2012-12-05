# match-route

Match a request against a object of routes

## installation

#### [component/component](https://github.com/component/component)

```bash
$ component install [--save/--save-dev] ramitos/match-route
```

#### npm

```bash
$ npm install [--save/--save-dev] match-route
```

## example

```js
var mr = require('match-route'),
    assert = require('assert');

mr({
  method: 'PUT',
  url: '/user/admin?q1=3&q2=t'
}, {
  'get': {
    '/user/:id/age': '/user/:id/age',
    '/': '/'
  },
  'post': {
    '/user/:id/:age': '/user/:id/:age',
    '/': '/'
  },
  'put': {
    '/:type/:subtype': '/:type/:subtype',
    '/': '/'
  },
  'delete': {
    '/user/:id': '/user/:id',
    '/': '/'
  }
}, function (route, params, query) {
  assert(route === '/:type/:subtype');
  assert(params.subtype === 'admin');
  assert(params.type === 'user');
  assert(query.q1 === '3');
  assert(query.q2 === 't');
});
```

## license

MIT