const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://aviadomeisi:LkdwpHBHzRiy7HA4@cluster0.49tyhdc.mongodb.net/?retryWrites=true&w=majority";
const local_uri = "mongodb://localhost:27017/shill_db";

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(local_uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
