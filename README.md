# Clone of Whatsapp
- Tech stack used: MERN stack and pusher tool

### Pre-requisites: 
1. git
2. npm
3. mongodb account 
4. account on pusher

### Steps to run on local:
1. Clone the project using `https://github.com/Asthay97/whatsapp-clone.git` command in your terminal.
2. To run the backend and frontend, 
    - copy the Mongo connection url and ensure ur ip is whitelisted in mongodb.
    - edit and paste : src/axios: baseUrl
    -                 : firebase.js -> config
    -                 : Backend/server/pusher -> config
4. Go to backend project directory using `cd whatsapp-Backend`
5. Use `npm i` to install all npm dependencies
6. Run using command `node server.js`
7. Go to the project frontend directory using `cd whatsapp-clone`
8. Use `npm i` to install all npm dependencies
9. To run the frontend application on localhost use `npm start` command.

- The frontend application runs (in development mode) `http://localhost:3000` in the browser and backend on `http://localhost:9000`.

**Note to see messages from yourself, enter the message in input at bottom right. To see messages from the other user use: POST request in POSTMAN: 
- API: POST -- `http://localhost:9000/messages/new`
body :
`{
    "message":"3rd normal message",
    "name": " Friend1",
    "timestamp": "reatime",
    "received": false
}`

### Screenshots for reference
![Screenshot from 2021-08-13 02-42-43](https://user-images.githubusercontent.com/75947851/129270792-66e5f5ea-3392-42ff-a4e0-db63c8cb442e.png)
![Screenshot from 2021-08-13 02-42-57](https://user-images.githubusercontent.com/75947851/129270798-b60429da-b038-4fa2-bf8d-a8747f848ad6.png)
![Screenshot from 2021-08-13 02-43-05](https://user-images.githubusercontent.com/75947851/129270801-c5e25952-b5d9-4e7f-b00d-993373336e48.png)

![Screenshot from 2021-08-13 02-39-25](https://user-images.githubusercontent.com/75947851/129270394-2e8c0b51-1d6f-497c-b7d0-21a0d46be027.png)


