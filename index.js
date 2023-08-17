require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;
// const PORT = 3000;

// Connect to MongoDB
// connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// Cross Origin Resource Sharing
app.use(cors({
    origin: [ "https://app-agence-aloha.vercel.app" , "http://localhost:3050" , "http://localhost:5173", "http://127.0.0.1:5173"] ,
    // allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials: true,
}));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// })



//middleware for cookies
app.use(cookieParser());

//serve static files
// app.use('/', express.static(path.join(__dirname, '/public')));

const routes = require('./routes');


// routes
app.use('/api', routes);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// app.use(verifyJWT);
app.use(errorHandler);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB');
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });



// connectDB().then(() => {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });