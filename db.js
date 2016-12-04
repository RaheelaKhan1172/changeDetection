var mongo = require('mongodb'),
    MongoClient = mongo.MongoClient,
    url = "mongodb://localhost:27017/htmlvalues";


//set this as a function, export it so it can be used in the other file
MongoClient.connect(url, function(err,db) {
  if (err) {
    console.log(" BUMMER! ", err);
  } else {
    console.log("Uh huh! ");
    
  }
});

//make get function that returns data from db
