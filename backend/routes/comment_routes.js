const express = require("express");
const Comment = require("../models/comment");
const router = express.Router();

//Get All Comments----------------------------------------------------------
router.get("/", (req, res) => {
   res.json({ mssg: "GET All Comments!" });
});

//Get Single Comment----------------------------------------------------------
router.get("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Getting single Comment ${id}` });
});

//POST New Comment----------------------------------------------------------
router.post("/", async (req, res) => {
   const { body, createdBy, isDeleted } = req.body;

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
});

//DELETE Comment----------------------------------------------------------
router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Deleting Comment ${id}` });
});

//PATCH Project----------------------------------------------------------
router.patch("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Updating Comment ${id}` });
});

module.exports = router;
