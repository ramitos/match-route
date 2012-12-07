var mr = require('match-route');

var routesEditor = CodeMirror.fromTextArea(document.getElementById('editor'), {
  theme: 'lesser-dark',
  lineNumbers: true,
  tabSize: 2,
  mode: {name: 'javascript', json: true},
  autoClearEmptyLines: true
});

routesEditor.focus();

document.getElementById('match').addEventListener('click', function (e) {
  e.preventDefault();
  var method = document.getElementById('method').value;
  var url = document.getElementById('url').value;
  
  try {
    var routes = JSON.parse(routesEditor.getValue());
  } catch(e) {
    return document.getElementById('invalidroutes').classList.toggle('hidden');
  }
  
  mr({
    method: method,
    url: url
  }, routes, function (value, route, params, query) {
    document.getElementById('params').innerHTML = '';
    document.getElementById('query').innerHTML = '';
    document.getElementById('value').value = value;
    document.getElementById('route').value = route;
    Object.keys(params).forEach(function (param) {
      var tr = document.createElement('tr');
      tr.innerHTML = "<td>" + param + "</td><td>" + params[param] + "</td>";
      document.getElementById('params').appendChild(tr);
    });
    
    Object.keys(query).forEach(function (q) {
      var tr = document.createElement('tr');
      tr.innerHTML = "<td>" + q + "</td><td>" + query[q] + "</td>";
      document.getElementById('query').appendChild(tr);
    });
  });
});

document.getElementById('invalidroutesclose').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('invalidroutes').classList.toggle('hidden');
});