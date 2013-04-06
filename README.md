# clippy

A cli library for filters, which takes care of reading and writing the data.

# synopsis

bin.js:

``` javascript
require('./cli').run();
```

cli.js:

``` javascript
module.exports = {
  "init": function() {
    this.clippy = require('clippy');
    this._ready = true;
  },
  "process": function() {
    // double-space the output
    this.output = this.input.split("\n").join("\n\n");
    this.done();
  },
  "run": function() {
    if (! this._ready) {
      this.init();
    }
    this.clippy(this);
  }
}
```

# License (MIT)

Copyright (C) 2013 Ben Atkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

