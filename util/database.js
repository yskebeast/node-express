const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const password = "mXCNfXcm2qwqrzT0";
const uri = `mongodb+srv://yskebiz:${password}@mongoyus.w7z2ufz.mongodb.net/?retryWrites=true&w=majority&appName=mongoyus`;

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
