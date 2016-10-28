/**
 * Created by kevin on 16/8/10.
 */
var Router = require('koa-router');
var logger = require('koa-logger');

function register (app) {
    var router = new Router({
        prefix: '/article'
    });
    router.get('/', function(){
        this.body = {
            "huhu": "lulu",
            "heheda": "yoxixi2"
        };
    }); // responds to "/api"
    router.get('/messages', function(){
        this.body = 'foo messages';
    }); // responds to "/api/messages"
    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;