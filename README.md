# clippy

A cli library for filters, which takes care of reading and writing the data.

# synopsis

bin.js:

``` javascript
require('clippy').run(require('./cli'));
```

cli.js:

``` javascript
module.exports = {
  "config": {
    "input": "text",
    "output": "text",
    "stream": false
  },
  "run": function() {
    this.output = this.input.replace('baz', 'quux');
  }
}
```

Running it:

```
$ echo 'baz' | node bin.js
quux
$ echo 'baz' > metasyntactic.txt
$ node bin.js metasyntactic.txt
quux
$ node bin.js metasyntactic.txt -o output.txt
$ cat output.txt
quux
$ node bin.js --help
usage: node bin.js [-f input-file] ... [-o output-file] [input-file] ...

options:
  -f, --input-file   the input file(s)
  -o, --output-file  the output file
  --help             print this usage message
$
```

Since `config.args` isn't specified, it uses the arguments as input file(s).

# command-line arguments and async

`cli.js`:

``` javascript
module.exports = {
  "config": {
    "output": "json",
    "args": {
      "url": "a URL to retrieve JSON data from"
    },
    "forms": ["url"]
  },
  "run": function(done) {
    var request = require('request');
    request.get({url: this.args.url, json: true}, (error, response, body) {
      this.output = body;
      done();
    });
  }
}
```

Running this (keeping the same `bin.js` as before:

```
$ node bin.js http://jsonip.com/
{
  "ip": "63.253.110.74",
  "about": "/about",
  "Pro!": "http://getjsonip.com"
}
$ node bin.js --help
usage: node bin.js [-o output-file] url

arguments:
  url  a URL to retrieve JSON data from

options:
  -o, --output-file  the output file
  --pretty-print     pretty print the JSON (default)
  --no-pretty-print  turn off pretty printing
  --help             print this usage message
```

Note that this added pretty-printing. This interface is intended to map more
closely to HTTP than traditional CLI libraries. The output format maps loosely
to content-type.

# License (MIT)

Copyright (C) 2013 Ben Atkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

