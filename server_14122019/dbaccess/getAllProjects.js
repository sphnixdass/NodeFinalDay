var connRef=require('./connectionHelper')
var projectModelRef=require('./dbschema').ProjectModel;

module.exports.getList=function()
{

    dataResponse= projectModelRef.find({}).exec(function(err,result) {
            return result;
        }
    )
    return dataResponse;
}
