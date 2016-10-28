/**
 * Created by kevin on 16/8/10.
 */
var http = require('http');

var qs = require('querystring');

// uid: 用户id
// student_id:学生证号
// school_id: 学校
// username:sunrain992
// password:password
// real_name:sunrain992
// email:sunrain992@qq.com
// admin_type:0
// openapi:true


var data = {
    uid: 123,
    student_id: 7758,
    school_id: 5877,
    username: "hxcccc10",
    password: "hxcccc",
    real_name: "hxchuan",
    email: "hxc@bobo.com",
    admin_type: 0,
    openapi: true
};//这是需要提交的数据


var content = qs.stringify(data);

var options = {
    hostname: '121.41.4.51',
    port: 80,
    path: '/api/register/homework/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    var str = '';
    res.on('data', function (chunk) {
        // console.log('BODY: ' + chunk);
        str += chunk;
    });
    res.on('end', function () {
        console.log(str);
    })
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.write(content);

req.end();