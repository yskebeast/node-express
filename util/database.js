const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const password = "";
const uri = ``;

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
