const express = require("express"); //importing express library
const app = express(); //calls the express function and put a new express application inside the app variable ( like creating an object of a class)
const mongoose = require('mongoose');
let PORT = 3001;
const PostModel = require('./models/Users');

const cors = require('cors');// allows our api to connect with react front end

app.use(express.json()); //we want the have the json from the frontend as an object which requires parsing, however we dont need to do that manuallu cause express allows us to do it like this
app.use(cors());

mongoose.connect("mongodb+srv://acharyaapurva111:rWLJhgopoWPSrVmE@cluster0.4mfrwt7.mongodb.net/mernDatabase?retryWrites=true&w=majority");

// api requests(bridges) to request data from the database and add data from the front end to the database
app.get("/getPosts", (req, res) => { //get request gets the data from the database to the front end (getPosts is called the route name)
    PostModel.find({}, (err, result)=>{//to retrieve all the users just find
        if(err){
            res.json(err);

        }
        else {
            res.json(result) 
        }

    }); 
});
app.post("/createPost", async (req,res) =>{//post request to add data to our database
    const post = req.body; //data we want to put in our database that we send from the front end
    const newPost = new PostModel(post);
    await newPost.save();

    res.json(post); //what you wanna send back to the front end
});

app.listen(PORT, function(err){
    if (err) console.log ("Error in server setup")
    console.log("Server runs fine");//callback function which will run when your server starts running

}); //react will run on port 3000