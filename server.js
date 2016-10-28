/**
 * Created by kevin on 16/7/22.
 */
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

var app = new express();
var port = process.env.PORT || 8400;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

app.get("/*", function(req, res) {
    return res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port, function(err) {
    if(err) {
        console.log(err)
    }else {
        console.info("==>  Listening on port %s. Open up http://localhost:s%/ in your browser.", port, port);
    }
});