var connRef=require('./connectionHelper')
var empModelRef=require('./dbschema').EmployeeModel;

module.exports.getAllEmp=function(id)
{

    dataResponse= empModelRef.find({}).exec(function(err,result) {
        return result;
    }
)
return dataResponse;
}