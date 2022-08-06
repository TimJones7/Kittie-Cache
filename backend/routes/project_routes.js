const express = require("express");
const router = express.Router();

//Get All Projects
router.get("/", (req, res) => {
   res.json({ mssg: "GET All Projects!" });
});

//Get Single Project
router.get("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Getting single Project ${id}` });
});

//POST New Project
router.post("/", (req, res) => {
   res.json({ mssg: `Posting New Project` });
});

//DELETE Project
router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Deleting Project ${id}` });
});

//PATCH Project
router.patch("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Updating Project ${id}` });
});

module.exports = router;
