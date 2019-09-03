let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    debugger;

    


    ddb.put({
        TableName: 'MyDDB',
        Item: { 'id': 12434 }
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });



    callback(null, { "message": "Successfully executed" });






}