const express = require('express');
require("dotenv").config();
const connectDB = require('./db');
const routes=require('./routes/routes')
const rateLimit = require("express-rate-limit");
const app = express();
app.use(express.json());

connectDB();   
const limiter = rateLimit({
  max: 50,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP. Please try again in an hour!",
});
app.use("/api", limiter);
app.get('/',(req,res)=>{
  res.send('preperty manager api is live')
})
app.use('/api/v1', routes);


// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});