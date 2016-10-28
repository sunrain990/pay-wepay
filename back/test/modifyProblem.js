/**
 * Created by kevin on 16/8/12.
 */
var http = require('http');

var qs = require('querystring');

var data = {
    description: "lllllovexc111",
    difficulty: "1",
    hint: "<p>this is hint<br></p>",
    id: 1,
    uid: 1,
    input_description: "testtt",
    memory_limit: "128",
    output_description: "lovexc",
    samples: [
        {
            input: "1 1",
            output: "2"
        }
    ],
    source: "fromxc",
    spj: false,
    tags: ["lovexc","from xc"],
    test_case_id: "058811aa9505763ae5c84163f0fe29ce",
    time_limit: "1000",
    title: "A+B+C",
    visible: true
};//这是需要提交的数据


var content = qs.stringify(data);

var options = {
    hostname: '121.40.51.192',
    port: 80,
    path: '/api/admin/problem1/',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
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