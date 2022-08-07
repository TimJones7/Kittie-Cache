const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      userName: {
         type: String,
         required: true,
         minLength: 5,
         maxLength: 30,
      },
      Name: {
         firstName: {
            type: String,
            maxLength: 20,
         },
         lastName: {
            type: String,
            maxLength: 20,
         },
      },
      email: {
         type: String,
         required: true,
         maxLength: 75,
      },
      password: {
         type: String,
         required: true,
      },
      projectsLaunched: [{ type: ObjectId, ref: "Project" }],
      projectsJoined: [{ type: ObjectId, ref: "Project" }],
      ticketsAssigned: [{ type: ObjectId, ref: "Ticket" }],
      commentsLeft: [{ type: ObjectId, ref: "Comment" }],
   },
   { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

//SQL is an actual storage, its like a real database... think of MongoDB, json/bson, being in a schemaless document.... its like taking your app and just saving the state. You get the whole document when you query... so designing around storing state like that with "batches" of information that you need at a time
