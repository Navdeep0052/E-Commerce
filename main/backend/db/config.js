const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://group60Database:pdMj2eV7oExXwWKc@group60database.jr8rh6i.mongodb.net/group60Database",{
    useNewUrlParser: true
})
.then( ()=> console.log("MongoDb is connected"))
.catch( err => console.log(err))


