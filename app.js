const express = require('express');
require("dotenv").config();
const connectDB = require('./db');
const routes=require('./routes/routes')
const rateLimit = require("express-rate-limit");
const app = express();
const PORT=process.env.PORT||3000
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
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});