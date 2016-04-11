
var gulp = require('gulp');
var http = require('http');

//declare the task
gulp.task('server', function(done) {
  //start an http server (I know, a totally useless example, but helps to illustrate the point)
  var requestListener = function (req, res) {
    res.writeHead(200);
    res.end(index.html);
  }

  var server = http.createServer(requestListener);
  server.listen(8080);

  done();
});
