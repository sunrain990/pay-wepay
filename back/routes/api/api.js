/**
 * Created by kevin on 16/8/10.
 */
var Router = require('koa-router');
var logger = require('koa-logger');
var http = require('http');
let co = require('co');
let request = require('co-request');
let user = require('../../services/user/userDao')
let Mysql = require('../../config/db/my')

var ojurl = 'http://121.40.51.192';

function register (app) {
    var router = new Router({
        prefix: '/api'
    });
    router.get('/', function(){
        this.body = 'foo';
    }); // responds to "/api"
    router.post('/register', function *() {
        let req = this.request.body;
        console.log(req.samples,' this is req samples!!---')
        var data = {
            uid: req.uid,
            student_id: req.student_id,
            school_id: req.school,
            username: req.username,
            password: req.password,
            real_name: req.real_name,
            email: req.email,
            admin_type: 0,
            //允许判题
            openapi: true
        };
        let result = yield request.post('http://121.41.4.51/api/register/homework/', {form: data})
    });

    router.post('/getuserinfo', user.getinfo);

    router.post('/admin/problem', function *(){
        let req = this.request.body;
        console.log(req.samples[0], ' this is req samples!!!!')

        let uid = req.uid;
        if(!uid) {
            return this.body = {
                code: -1,
                msg: 'do not have uid'
            }
        }
        console.log('has uid!');
        let sql = 'SELECT u.id as uid,u.email,u.nickname as username,p.truename as real_name,u.schoolId as school,u.id as student_id FROM user u inner join user_profile p on u.id=p.id where u.id=' + uid;
        var userData;

        var data = yield Mysql.ecp.query(sql).catch(function(err){
            return this.body = {
                code: -1,
                msg: err
            }
        });

        console.log('here 1',data);
        userData = data[0];
        userData.password = 'password';
        userData.admin_type = 0;
        userData.openapi = true;

        var data = {
            description: req.description,
            difficulty: req.difficulty,
            hint: "<p>this is hint<br></p>",
            id: -1,
            // uid: 2,
            input_description: req.input_description,
            memory_limit: req.memory_limit,
            output_description: req.output_description,
            samples: req.samples,
            // samples: JSON.stringify(req.samples),
            source: 'from xmgc',
            spj: false,
            tags: ["notag",'notag2'],
            // test_case_id: "058811aa9505763ae5c84163f0fe29ce",
            test_case_id: req.test_case_id,
            time_limit: req.time_limit,
            title: req.title,
            chapterid: parseInt(req.chapterid),
            visible: false
        };//这是需要提交的数据

        var msg = _.merge(userData, data)

        var jsonMsg = JSON.stringify(msg);

        console.log(msg, ' this is the msg!')

        var headers = {
            'Content-Type': 'application/json'
        };

        var options = {
            url: ojurl + '/api/admin/problem1/',
            method: 'POST',
            headers: headers,
            json: msg
        }
        let result = yield request.post(options)

        //
        // let result = yield request({
        //     url: 'http://121.41.4.51/api/admin/problem1/', //URL to hit
        //     qs: msg, //Query string data
        //     method: 'POST',
        //     //Lets post the following key/values as form
        //     json: msg
        // });

        // let result =  yield request.post('http://121.41.4.51/api/admin/problem1/', {form: msg})

        this.body = result.body;
    })
    ; // responds to "/api/messages"




    router.get('/user/submission', function *(){
        let req = this.request.body;

        let uid = req.uid;
        if(!uid) {
            return this.body = {
                code: -1,
                msg: 'do not have uid'
            }
        }
        console.log('has uid!');
        let sql = 'SELECT u.id as uid,u.email,u.nickname as username,p.truename as real_name,u.schoolId as school,u.id as student_id FROM user u inner join user_profile p on u.id=p.id where u.id=' + uid;
        var userData;

        var data = yield Mysql.ecp.query(sql).catch(function(err){
            return this.body = {
                code: -1,
                msg: err
            }
        });

        console.log('here 1',data);
        userData = data[0];
        userData.password = 'password';
        userData.admin_type = 0;
        userData.openapi = true;

        var data = {
            problem_id: req.problem_id,
            language: req.language,
            code: req.code
        };//这是需要提交的数据

        var msg = _.merge(userData, data)

        var jsonMsg = JSON.stringify(msg);

        console.log(msg, ' this is the msg!')

        var headers = {
            'Content-Type': 'application/json'
        };

        var options = {
            url: ojurl + '/api/open/submission1/',
            method: 'POST',
            headers: headers,
            json: msg
        }
        let result = yield request.post(options)
        this.body = result.body;
    });



    router.post('/user/submission', function *(){
        let req = this.request.body;

        let uid = req.uid;
        if(!uid) {
            return this.body = {
                code: -1,
                msg: 'do not have uid'
            }
        }
        console.log('has uid!');
        let sql = 'SELECT u.id as uid,u.email,u.nickname as username,p.truename as real_name,u.schoolId as school,u.id as student_id FROM user u inner join user_profile p on u.id=p.id where u.id=' + uid;
        var userData;

        var data = yield Mysql.ecp.query(sql).catch(function(err){
            return this.body = {
                code: -1,
                msg: err
            }
        });

        console.log('here 1',data);
        userData = data[0];
        userData.password = 'password';
        userData.admin_type = 0;
        userData.openapi = true;

        var data = {
            problem_id: req.problem_id,
            language: req.language,
            code: req.code
        };//这是需要提交的数据

        var msg = _.merge(userData, data)

        var jsonMsg = JSON.stringify(msg);

        console.log(msg, ' this is the msg!')

        var headers = {
            'Content-Type': 'application/json'
        };

        var options = {
            url: ojurl + '/api/open/submission1/',
            method: 'POST',
            headers: headers,
            json: msg
        }
        let result = yield request.post(options)
        this.body = result.body;
    });


    router.post('/admin/problem_edit', function *(){
        let req = this.request.body;
        // console.log(req.samples[0], ' this is req samples!!!!')


        var msg = {
            // description: req.description,
            // difficulty: req.difficulty,
            hint: "<p>this is hint<br></p>",
            // id: req.id,
            // uid: req.uid,
            // input_description: req.input_description,
            // memory_limit: req.memory_limit,
            // output_description: req.output_description,
            // samples: req.samples,
            // samples: JSON.stringify(req.samples),
            source: 'from xmgc',
            spj: false,
            tags: ["notag",'notag2'],
            // test_case_id: "058811aa9505763ae5c84163f0fe29ce",
            // test_case_id: req.test_case_id,
            // time_limit: req.time_limit,
            // title: req.title,
            // chapterid: req.chapterid,
            // visible: req.visible
        };//这是需要提交的数据



        if(req.description) {
            msg.description = req.description;
        }else if(req.difficulty) {
            msg.difficulty = req.difficulty;
        }else if(req.id) {
            msg.id = req.id;
        }else if(req.uid) {
            msg.uid = req.uid;
        }else if(req.input_description) {
            msg.input_description = req.input_description;
        }else if(req.memory_limit) {
            msg.memory_limit = req.memory_limit;
        }else if(req.output_description) {
            msg.output_description = req.output_description;
        }else if(req.samples) {
            msg.samples = req.samples;
        }else if(req.test_case_id) {
            msg.test_case_id = req.test_case_id;
        }else if(req.time_limit) {
            msg.time_limit = req.time_limit;
        }else if(req.title) {
            msg.title = req.title;
        }else if(req.chapterid) {
            msg.chapterid = req.chapterid;
        }else if(req.visible) {
            msg.visible = req.visible;
        }

        console.log(msg, ' this is the msg!')

        var headers = {
            'Content-Type': 'application/json'
        };

        var options = {
            url: ojurl + '/api/admin/problem1/',
            method: 'PUT',
            headers: headers,
            json: msg
        }

        let result = yield request(options);
        let body = result.body;
        console.log('Body: ', body);
        this.body = result.body;
    });



    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;