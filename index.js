
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();



// routes
const userRoute = require("./Routes/userRoute");

// chat routes
const chatRoute =  require("./Routes/chatRoutes");

// message routes
const messageRoute = require("./Routes/messageRoute");

// MIDDLEWARES
app.use(express.json());
app.use(cors());


app.use("/api/users" , userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);




const port = process.env.PORT || 8000;
const uri = process.env.ATLAS_URI;

app.get("/" , (req,res) =>{
    res.send({message : "Hi i m here"})
})


app.listen(port , (req,res)=>{
    console.log(`Server is working at ${port}`)
});

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDb connection established")
}).catch((err)=>{
    console.log("MongoDb connection failed :" , err.message);
})



