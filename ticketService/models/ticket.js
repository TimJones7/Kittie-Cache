const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//  Define Ticket Schema
const ticketSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
         maxLength: 75,
         minLength: 3,
      },
      details: {
         type: String,
         required: true,
      },
      state: {
         type: String,
         enum: ["To-Do", "Doing", "Done", "Cancelled"],
         default: "To-Do",
         required: true,
      },
      createdBy: {
         type: String,
         required: false,
         default: null,
         immutable: true,
      },
      assignedTo: {
         type: String,
         required: false,
         default: null,
      },
      dueDate: {
         type: Date,
         required: false,
      },
      comments: [],
   },
   { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
