// importing
import express from "express";
import mongoose from "mongoose";
import dbMessages from "../whatsapp-Backend/dbMessages.js";
import Pusher from "pusher";
import cors from 'cors';

// api config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1248847",
  key: "5b5e704f50e3ed6470d2",
  secret: "57cd2aae46833efb770c",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

// middleware
app.use(express.json());
app.use(cors());

// DB config
const connection_url = "<paste ur mongo connection string here>";

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", ()=>{
    console.log("DB connected");

    const msgCollection = db.collection("messageContents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) =>{
        console.log("A chance occured",change);

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.user,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        } else{
            console.log('Error triggering Pusher');
        }

    });
});

// api routes
app.get("/",(req, res) => res.status(200).send("hello world"));

app.get('/messages/sync', (req, res) =>{
    dbMessages.find((err, data) =>{
        if(err){
        res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    })
})


app.post("/messages/new", (req,res) =>{
    const dbMessage = req.body

    dbMessages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));

