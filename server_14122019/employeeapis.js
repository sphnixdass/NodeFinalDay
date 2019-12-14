var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var http=require('http');
var dao=require('./dbaccess/connectionHelper')
var validateUserRef=require('./dbaccess/validateUser');
var addEmployeeRef=require('./dbaccess/addEmployee')
//express instance creation
var app=express();
//connect app and cors
app.use(cors());
//connect app and body parser
app.use(bodyParser.json());
//rest api routes - create routes


//route for adding project

app.post("/addEmployee",function(request,response)
{
    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.header("Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);

    console.log(request.body);
    addEmployeeRef.addEmployeeData(request.body)
    response.end("Record Added.....");

})

app.post("/login",function(request,response)
{
    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.header("Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);

    console.log(request.body);
    validateUserRef.getEmployeeById(request.body).then(function(data)
    {
        response.send(data);
    })

})

http.createServer(app).listen(5002);



