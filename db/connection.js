import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost:27017/job_5_db');
mongoose.connect('mongodb+srv://yogeshchouhan074358:FDIUY7HMqfQrlGp9@jobportalproject.sqbjnpi.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connection succesfully")
}).catch((error)=>{
    console.log(error)

})




// this is used for render.com in package.json in backend

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "server": "nodemon index.js",
//     "client": "npm  start --prefix ./frontend",
//     "dev": "concurrently \"npm start\" \"npm run client\""
//   },




// this is used for vs code in package.json in backend

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "server": "nodemon index.js",
//     "client": "npm start --prefix ./frontend",
//     "dev": "concurrently \"npm start\" \"npm run client\""
//   },