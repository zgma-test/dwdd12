let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    debugger;




    ddb.put({
        TableName: 'MyDDB',
        Item: { 'id': 124e34 }
    }).promise()
        .then((data) => {
            //your logic goes here
            console.log(data);
        })
        .catch((err) => {
            //handle error
            console.log(err);
        });



    callback(null, { "message": "Successfully executed" });






}