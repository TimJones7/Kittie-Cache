const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//  Define Comment Schema
const commentSchema = new Schema(
   {
      body: {
         type: String,
         required: true,
      },
      createdBy: {
         type: mongoose.SchemaTypes.ObjectId,
         ref: "User",
         required: false,
         default: null,
      },
      isDeleted: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
