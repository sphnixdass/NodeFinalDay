var connRef=require('./connectionHelper')
var projectModelRef=require('./dbschema').ProjectModel;

module.exports.getProjectById=function(id)
{

    dataResponse= projectModelRef.find({"projectId":id}).exec(function(err,result) {
            return result;
        }
    )
    return dataResponse;
}
