const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//  Define Project Schema
const projectSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      details: {
         type: String,
         required: true,
      },
      public: {
         type: Boolean,
         default: true,
      },
      createdBy: {
         type: mongoose.SchemaTypes.ObjectId,
         ref: "User",
         required: false,
         default: null,
         immutable: true,
      },
      goalCompletionDate: {
         type: Date,
         required: false,
      },
      /*
      tickets: [{ type: ObjectId, ref: "Ticket" }],
      contributors: [{ type: ObjectId, ref: "User" }],
      comments: [{ type: ObjectId, ref: "Comment" }],
      */
   },
   { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
