
/**
 * Module dependencies.
 */

var each = require('each');
var request = require('superagent');

/**
 * Methods to augment.
 */

var methods = ['get', 'post', 'put', 'patch', 'head'];

/**
 * Expose SuperApi.
 */

module.exports = SuperApi;

/**
 * SuperApi
 *
 * @param {String} baseurl
 * @param {Object} headers
 * @return {Function} self
 */

function SuperApi(baseurl, headers){
  baseurl = baseurl || '';
  request.baseurl = baseurl.replace(/\/$/, '') + '/';
  request.headers = headers || null
  each(methods, function(method){
    request[method] = function(uri, data, fn){
      var url = request.baseurl + uri.replace(/^\//, '');
      var req = request(method.toUpperCase(), url);
      if ('function' == typeof data) fn = data, data = null;
      if (request.headers) req.set(request.headers);
      if (data) req.send(data);
      if (fn) req.end(fn);
      return req;
    };
  });
  request.del = function(url, fn){
    var req = request('DELETE', url);
    if (request.headers) req.set(request.headers);
    if (fn) req.end(fn);
    return req;
  }
  return request;
};

