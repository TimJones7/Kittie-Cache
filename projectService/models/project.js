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
         type: String,
         required: false,
         default: null,
         immutable: true,
      },
      goalCompletionDate: {
         type: Date,
         required: false,
      },
      comment_ids: [],
      ticket_ids: [],
      contributingUser_ids: [],
   },
   { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
