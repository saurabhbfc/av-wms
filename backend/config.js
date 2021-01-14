var mongoose = require("mongoose");
const options = {
      useMongoClient: true,
      autoIndex: false, // Don't build indexes
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      poolSize: 10, // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0
    };
mongoose.Promise = global.Promise;
var db = mongoose.connect("mongodb://localhost:27017/wms", options , function(err, response){
   if(err){ console.log('Failed to connect to ' + db); }
   //else{ console.log('Connected to ' + db, ' + ', response); }
   else{ console.log('Connected to ' + db); }
});
//test

module.exports =db;

// reactcrud is database name
// 192.168.1.71:27017 is your mongo server name
