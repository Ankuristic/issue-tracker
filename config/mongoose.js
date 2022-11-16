// // required mongoose 
// const mongoose=require('mongoose');

// // connected to the db
// mongoose.connect('mongodb://localhost/issuetracker');

// // acquired connection to db
// const db=mongoose.connection;

// //error
// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

// //up and running then print the message
// db.once('open',function(){
//     console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;



const mongoose = require("mongoose")

const mongoURI= "mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority"
const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
console.log("hello",connectionParams)
mongoose .connect(mongoURI ,connectionParams) .then(() => console.log("MongoDB connected")) .catch((e) => {console.log(e)});



// mongoose.connect(dbUrl, connectionParams)
// .then(()=>{
//     console.info("cnnected to the db");
// })
// console.log("")

// .catch((e) =>{
//     console.log("error",e);

// });