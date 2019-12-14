/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var mongoose = require('mongoose');
var configRef=require('./dbconfig')
var serverOptions = {
    'auto_reconnect': true,
    'poolSize': 5,
    'user':configRef.user,
    'password':configRef.password
};
mongoose.connect(configRef.url,configRef.mongodb,configRef.mongoport,serverOptions);
var db=mongoose.connection;
db.once('openUri',function(){
    console.log("Connection ready");
    console.log("testing....");
}); 
