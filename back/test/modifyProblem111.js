/**
 * Created by kevin on 16/8/12.
 */
let co = require('co')
let request = require('co-request')

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


co(function *() {
    let result = yield request.put('http://121.40.51.192/api/admin/problem1/', {json:data});
    let response = result;
    let body = result.body;
    // console.log('Response: ', response.body);
    console.log('Body: ', body);
}).catch(function(err) {
    console.err(err);
})