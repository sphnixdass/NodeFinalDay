var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var http=require('http');
var dao=require('./dbaccess/connectionHelper')
var addProjectRef=require('./dbaccess/addProject');
var getProjectsRef=require('./dbaccess/getAllProjects')
var getProjectByIdRef=require('./dbaccess/getProjectById')
//express instance creation
var app=express();
//connect app and cors
app.use(cors());
//connect app and body parser
app.use(bodyParser.json());
//rest api routes - create routes
app.get("/",function(request,response)
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
    response.end("Ready to work with APIS");

});

//route for adding project

app.post("/addProject",function(request,response)
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
    addProjectRef.addData(request.body)
    response.end("Record Added.....");

})

//route for adding project

app.get("/getAllProjects",function(request,response)
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
    getProjectsRef.getList().then(function(data)
    {
        response.send(data);
    })
    //response.end("Record Added.....");

})


app.get("/getProjectById",function(request,response)
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

    console.log(request.query);
    getProjectByIdRef.getProjectById(request.query.projectId).then(function(data)
    {
        response.send(data);
    })
    //response.end("Received....");

})

http.createServer(app).listen(5000);



