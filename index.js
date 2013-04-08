module.exports = {
  "run": function(cli) {
    this.cli = cli;
    this.cli.args = process.argv.slice(2);
    var fs = require('fs');
    if (this.cli.args.length > 0) {
      fs.readFileSync(this.cli.args[0], this.on_read_file.bind(this));
    } else {
      // TODO: move into function
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      
      process.stdin.on('data', function(chunk) {
        process.stdout.write('data: ' + chunk);
      });
      
      process.stdin.on('end', function() {
        // TODO: call run function
      });
    }
  },
  "on_read_file": function(err, data, action) {
  }
}
