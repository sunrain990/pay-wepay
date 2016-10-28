/**
 * Created by kevin on 16/7/21.
 */
if(process.env.NODE_ENV === 'production'){
    console.log(' production release - - - - - - - - - - - - - - - - - - ');
    module.exports = require('./webpack.config.prod')
}else{
    console.log(' dev release - - - - - - - - - - - - - - - - - - ');
    module.exports = require('./webpack.config.dev')
}