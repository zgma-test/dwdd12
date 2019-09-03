let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    debugger;

    


    ddb.put({
        TableName: 'MyDDB',
        Item: { 'id': 124e341 }
    }).promise()
        .then((data) => {
            //your logic goes here
            console.log(data);
            callback(null, data);
        })
        .catch((err) => {
            //handle error
            console.log(err);
            callback(err);
        });



    






}