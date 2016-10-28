/**
 * Created by kevin on 16/8/23.
 */
let co = require('co')
let request = require('co-request')

function pipeRequest(readable, requestThunk) {
    return function(cb) {
        readable.pipe(requestThunk(cb));
    }
}

co(function *() {
    let result = yield request('http://baidu.com');
    let response = result;
    let body = result.body;
    console.log('Response: ', response);
    console.log('Body: ', body);
}).catch(function(err) {
    console.err(err);
})