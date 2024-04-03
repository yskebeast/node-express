require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = `mongodb+srv://${process.env.PROJECT_NAME}:${process.env.PASSWORD}@mongoyus.w7z2ufz.mongodb.net/?retryWrites=true&w=majority&appName=mongoyus`;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
