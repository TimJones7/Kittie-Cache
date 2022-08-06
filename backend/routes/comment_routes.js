const express = require("express");
const router = express.Router();

//Get All Comments
router.get("/", (req, res) => {
   res.json({ mssg: "GET All Comments!" });
});

//Get Single Comment
router.get("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Getting single Comment ${id}` });
});

//POST New Comment
router.post("/", (req, res) => {
   res.json({ mssg: `Posting New Comment` });
});

//DELETE Comment
router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Deleting Comment ${id}` });
});

//PATCH Project
router.patch("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Updating Comment ${id}` });
});

module.exports = router;
