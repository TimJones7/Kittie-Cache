require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/project_routes");

const app = express(); //Creates express APP

app.use(express.json()); //Add middleware to parse json automatically

app.use((req, res, next) => {
   console.log("--------------<New 4000 Request>--------------");
   console.log("Path:  ", req.path);
   console.log("Method:  ", req.method);
   console.log("-----------------------------------------");
   next();
});

//connect to DB
mongoose
   .connect(process.env.MONGO_URI)
   .then(() => {
      app.listen(process.env.PORT, () => {
         console.log("Connected to DB & listening on port 4000");
      }); //Listen for requests
   })
   .catch((err) => console.log(err));

//Register Routers in request pipeline.
app.use("/api/projects", projectRoutes);