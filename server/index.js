// dependencies
var express = require('express');
var path = require('path');
var fs = require("fs");
const host = 9019;

var env = process.env.NODE_ENV;

var routes = require('./routes');

var app = express();

// view engine setup
const viewsRPath = "./../src/containers";
// const viewsPathList = fs.readdirSync(viewsRPath);
// const directoryList = viewsPathList.filter( item => {
//     const stat = fs.statSync(item);
//     return stat && stat.isDirectory();
// });
// app.set('views', directoryList.map( directory => {
//     return path(__dirname,`${viewsRPath}${directory}`);
// }));
app.set('views', path.join(__dirname,viewsRPath));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, './../public')));


app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('Error/index', {
            message: err.message,
            error: err
        });
    });
}else{
   // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('Error/index', {
            message: err.message,
            error: {}
        });
    }); 
}



app.listen(host, () => console.log(`app listening on port ${host}!`));