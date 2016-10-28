/**
 * Created by kevin on 16/8/31.
 */
var http = require('http')

var url = 'http://121.40.51.192/api/admin/problem1/' +'?problem_id=1';

http.get(url, function(res) {
    var html = '';

    res.on('data', function(data) {
        html += data;
    })

    res.on('end', function() {
        // console.log(html)
        var htmlJSON = JSON.parse(html)
        console.log(htmlJSON)
    })
}).on('error', function() {
    console.log('获取课程数据出错')
})