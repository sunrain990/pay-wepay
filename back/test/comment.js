/**
 * Created by kevin on 16/8/10.
 */
var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': '期待老师有更好的作品!',
    'cid': 348
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'PHPSESSID=ekcqe083deq9a85fs0prsg41b4; imooc_isnew=1; imooc_isnew_ct=1470809673; imooc_uuid=712d8fa1-edea-4e61-95a4-e04bf66f823d; loginstate=1; apsid=I2MjVkOWExOTVhYjAwOWI4OTIyYTVkYzY0Y2I2ZTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAxMjc3MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0MDk3NDc0OTRAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGZhMDkxNGQ3OTczZWFjNjNjOTk0MGEyOTMyNDE1ZGViScaqV0nGqlc%3DOT; last_login_username=409747494%40qq.com; jwplayer.qualityLabel=è¶æ¸; cvde=57aac64971f3a-19; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1470813572',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options, function(res) {
    console.log('Status: ' + res.statusCode)
    console.log('Status: ' + JSON.stringify(res.headers))

    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end', function() {
        console.log('评论完毕!')
    })
})

req.on('error', function(e) {
    console.log('Error: ' + e.message)
})

req.write(postData)

req.end();