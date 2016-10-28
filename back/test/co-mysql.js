/**
 * Created by kevin on 16/8/24.
 */
var wrapper = require('co-mysql'),
    mysql = require('mysql'),
    co = require('co');
let request = require('co-request')

var data =  {
    // uid: 757,
    // email: 'huangyx927@gmail.com',
    // username: 'aaaaaa',
    // real_name: '痴痴缠缠',
    // school: 30,
    // student_id: 757,
    // password: 'password',
    // admin_type: 0,
    // openapi: true,
    // description: '32141324',
    // difficulty: '1',
    // hint: '<p>this is hint<br></p>',
    id: 1,
    // input_description: 'sdaf',
    // memory_limit: '128',
    // output_description: 'asdf',
    // samples: [ { input: 'fasd', output: 'fasd' } ],
    // source: 'from xmgc',
    // spj: false,
    // tags: [ 'notag', 'notag2' ],
    // test_case_id: '5a70687545a0c7fce26219549444e45d',
    // time_limit: '1000',
    // chapterid: '3',
    // title: '100000000000000000fff11',
    // // chapterid: 8,
    visible: false };//这是需要提交的数据

// console.log(data, ' this is the msg!')

var headers = {
    'Content-Type': 'application/json'
};

var options = {
    url: 'http://121.40.51.192' + '/api/admin/problem1/',
    method: 'PUT',
    headers: headers,
    json: data
}

co(function *() {
    let result = yield request(options)
    console.log(result.body)
}).catch(function(err) {
    console.err(err);
})
