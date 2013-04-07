module.exports = {
  "run": function(cli) {
    this.cli = cli;
    this.cli.args = process.argv.slice(2);
    var fs = require('fs');
    if (this.cli.args.length > 0) {
      fs.readFileSync(this.cli.args[0], this.on_read_file.bind(this));
    } else {
      // read from standard input
    }
  },
  "on_read_file": function(err, data, action) {
  }
}
