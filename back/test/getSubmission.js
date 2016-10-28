/**
 * Created by kevin on 16/8/11.
 */
var http = require('http')

var url = 'http://121.40.51.192/api/open/submission1/' +'?submission_id=55a9c8dfc367c909afb3c71ccae042b5'

http.get(url, function(res) {
    var html = '';

    res.on('data', function(data) {
        html += data;
    })

    res.on('end', function() {
        console.log(html)
        var htmlJSON = JSON.parse(html)
        console.log(htmlJSON)
    })
}).on('error', function() {
    console.log('获取课程数据出错')
})