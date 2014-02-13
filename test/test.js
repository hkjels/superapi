
var assert = require('assert');
var SuperApi = require('superapi');


describe('SuperApi', function(){

  it('can have a baseurl', function(done){
    var api = new SuperApi('http://example.com/');
    api.get('foo/bar');
    assert(api.url == 'http://example.com/foo/bar');
    done();
  });

});

