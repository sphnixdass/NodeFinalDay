/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var mongoose = require('mongoose');
var configRef=require('./dbconfig')
console.log('Module is ready');

//1.Create schema
var projectSchema=new mongoose.Schema(
    {
        projectId:{type:Number,
            unique:true
        },
        projectName:String,
        location:String

    });


var employeeSchema=new mongoose.Schema(
    {
        employeeNo:{type:Number,
            unique:true
        },
        firstName:String,
        lastName:String,
        dob:Date,
        email:String,
        mobileNo:Number,
        userName:String,
        password:String,
        projectRef:[{type:mongoose.Schema.Types.ObjectId,ref:'ProjectModel'}]

    });




module.exports.ProjectModel=mongoose.model('ProjectModel',projectSchema);

module.exports.EmployeeModel=mongoose.model('EmployeeModel',employeeSchema);
