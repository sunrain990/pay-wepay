/**
 * Created by kevin on 16/8/24.
 */
let co = require('co')
let request = require('co-request')

var data = {
    uid: 1
};//这是需要提交的数据


co(function *() {
    let result = yield request.post('http://121.41.41.46:1101/api/getuserinfo', {form:data});
    let response = result;
    let body = result.body;
    // console.log('Response: ', response.body);
    console.log('Body: ', body);
}).catch(function(err) {
    console.err(err);
})