const Comment = require("../models/comment");
const mongoose = require("mongoose");

//Get all----------------------------------------------------------
const getComments = async (req, res) => {
   const comments = await Comment.find({});
   res.status(200).json(comments);
};
//Get single----------------------------------------------------------
const getCommentById = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const comment = await Comment.findById(id);

   if (!comment) {
      return res.status(404).json({ error: "No Such Comment Exists!" });
   }

   res.status(200).json(comment);
};

//Create new----------------------------------------------------------
const createComment = async (req, res) => {
   const { body, createdBy, isDeleted } = req.body;
   //Add Doc to DB
   try {
      const comment = await Comment.create({
         body,
         createdBy,
         isDeleted,
      });
      res.status(200).json(comment);
   } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
   }
};

//Delete----------------------------------------------------------
const deleteComment = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const comment = await Comment.findByIdAndDelete({ _id: id });

   if (!comment) {
      return res.status(404).json({ error: "No Such Comment Exists!" });
   }

   res.status(200).json(comment);
};

//Update----------------------------------------------------------
const updateComment = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const comment = await Comment.findByIdAndUpdate(
      { _id: id },
      {
         ...req.body,
      }
   );
   if (!comment) {
      return res.status(404).json({ error: "No Such Comment Exists!" });
   }

   res.status(200).json(comment);
};

module.exports = {
   getComments,
   getCommentById,
   createComment,
   deleteComment,
   updateComment,
};
