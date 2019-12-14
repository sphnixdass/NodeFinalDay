/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var connRef=require('./connectionHelper')

var projectModelRef=require('./dbschema').ProjectModel;
module.exports.addData=function(obj)
{

    var obj = new projectModelRef(
        {
            projectId:obj.projectId,
            projectName:obj.projectName,
            location:obj.location

        }
    )

    obj.save(function(err,success)
    {
        if(!err)
        {
            console.log("Object Saved!!!");
        }
    })
}
