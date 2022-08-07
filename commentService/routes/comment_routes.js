const express = require("express");

const {
   getComments,
   getCommentById,
   createComment,
   deleteComment,
   updateComment,
} = require("../crud/commentCRUD");

const router = express.Router();

//Get All Comments----------------------------------------------------------
router.get("/", getComments);

//Get Single Comment----------------------------------------------------------
router.get("/:id", getCommentById);

//POST New Comment----------------------------------------------------------
router.post("/", createComment);

//DELETE Comment----------------------------------------------------------
router.delete("/:id", deleteComment);

//PATCH Project----------------------------------------------------------
router.patch("/:id", updateComment);

module.exports = router;
