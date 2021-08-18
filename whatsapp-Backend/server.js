// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./DBmessages.js";
import Rooms from "./DBrooms.js";
import Pusher from "pusher";
import cors from "cors";

// api config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://admin1:admin1@cluster0.axztl.mongodb.net/whatsappdb?retryWrites=true&w=majority";

const pusher = new Pusher({
<<<<<<< HEAD
  appId: "1248847",
  key: "5b5e704f50e3ed6470d2",
  secret: "57cd2aae46833efb770c",
  cluster: "ap2",
  useTLS: true,
});

// pusher.trigger("my-channel", "my-event", {
//   message: "hello world",
// });

//Middleware
=======
  appId: "<copy app id from pusher>",
  key: "<copy key from pusher>",
  secret: "<copy secret from pusher>",
  cluster: "<copy cluster from pusher>",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello"
});
>>>>>>> e347bd64d1488a74896d34cc1a6aaca69b79e490

app.use(express.json());
app.use(cors());

<<<<<<< HEAD
//Config. DB
=======
// DB config
const connection_url = "<paste ur mongo connection string here>";
>>>>>>> e347bd64d1488a74896d34cc1a6aaca69b79e490

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const messageCollection = db.collection("messages");
  const roomCollection = db.collection("rooms");

  const changeStream = messageCollection.watch();
  const changeStream2 = roomCollection.watch();

  changeStream.on("change", (change) => {
    console.log("Changed Message");

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;

      pusher.trigger("messages", "inserted", {
        roomID: messageDetails.roomID,
        name: messageDetails.name,
        message: messageDetails.message,
        timeStamp: messageDetails.timeStamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });

  changeStream2.on("change", (change) => {
    console.log("Changed room");

    if (change.operationType === "insert") {
      const roomDetails = change.fullDocument;

      pusher.trigger("rooms", "inserted", {
        name: roomDetails.name,
        image: roomDetails.image,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

//API Routes

app.get("/", (req, res) => res.status(200).send("hello world"));

//To get all the messages stored in the database

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/rooms/sync", (req, res) => {
  Rooms.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/rooms/:id", (req, res) => {
  Rooms.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        name: result.name,
        image: result.image,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

app.post("/rooms/new", (req, res) => {
  const dbRoom = req.body;

  Rooms.create(dbRoom, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new room created: \n ${data}`);
    }
  });
});

//Listen

app.listen(port, () => console.log(`Listening on local host:${port}`));
