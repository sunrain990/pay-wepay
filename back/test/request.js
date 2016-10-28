/**
 * Created by kevin on 16/8/10.
 */
var request = require('request');
// request('http://121.41.4.51', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body) // 打印google首页
//     }
// })


request.get('http://121.41.4.51/api/register/homework/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
});