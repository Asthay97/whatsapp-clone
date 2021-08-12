# Clone of Whatsapp
- Tech stack used: MERN stack and pusher tool

### Pre-requisites: 
1. git
2. npm
3. mongodb account 
4. account on pusher

### Steps to run on local:
1. Clone the project using `https://github.com/Asthay97/whatsapp-clone.git` command in your terminal.
2. To run the backend, copy the Mongo connection url and ensure ur ip is whitelisted in mongodb.
3. Go to backend project directory using `cd whatsapp-Backend`
4. Use `npm i` to install all npm dependencies
5. Run using command `node server.js`
6. Go to the project frontend directory using `cd whatsapp-clone`
7. Use `npm i` to install all npm dependencies
8. To run the frontend application on localhost use `npm start` command.

- The frontend application runs (in development mode) `http://localhost:3000` in the browser and backend on `http://localhost:9000`.

**Note to see messages from the other user use: POST request in POSTMAN: 
- API: POST -- http://localhost:9000/messages/new
body : {
    "message":"3rd normal message",
    "name": " Friend1",
    "timestamp": "reatime",
    "received": false
}
### Screenshots for reference



