/**
 * Created by kevin on 16/8/11.
 */
var http = require('http')
var qs = require('querystring')


var data = {
   "uid": "1",
    "language": 3,
    "problem_id": 1,
    "code": `
        import java.util.*;
        
        public class Main 
        
        {
        
            public static void main(String[] args) 
        
            {
        
                Scanner in = new Scanner(System.in);
        
                while(in.hasNext())
        
                {
        
                    int a = in.nextInt();
        
                    int b = in.nextInt();
        
                    System.out.println(a+b);     
        
                }
        
            }
        
        }
    `
};//这是需要提交的数据


var content = qs.stringify(data);

var options = {
    hostname: '121.41.41.46',
    port: 1101,
    path: '/api/user/submission',
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

req.on('end', function() {
    console.log('req is end!')
})

req.write(content);

req.end();