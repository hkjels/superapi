
# SuperAPI

  A wrapper around [superagent](//visionmedia/superagent) to make it easier
  to work with API's. It basically allows you to instantiate superagent with
  a base-url and some headers, so you don't need to repeat yourself as much.


## Installation

  Install with [component(1)](http://component.io):

    $ component install hkjels/superapi


## Usage

```javascript
var apiurl = 'http://example.com/';
var apiheaders = {'Authorization': 'Bearer 0/sometoken'};
var superapi = require('superapi')(apiurl, apiheaders);

superapi.get('foo/bar').end(cb);
// GET http://example.com/foo/bar
// Authorozation: Bearer 0/sometoken
```


## License

  The MIT License (MIT)

  Copyright (c) 2014 Henrik Kjelsberg

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
