const express = require("express");
const Project = require("../models/project");
const router = express.Router();

//Get All Projects----------------------------------------------------------
router.get("/", (req, res) => {
   res.json({ mssg: "GET All Projects!" });
});

//Get Single Project----------------------------------------------------------
router.get("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Getting single Project ${id}` });
});

//POST New Project----------------------------------------------------------
router.post("/", async (req, res) => {
   const { title, details, public, goalCompletionDate } = req.body;

   try {
      const project = await Project.create({
         title,
         details,
         public,
         goalCompletionDate,
      });
      res.status(200).json(project);
   } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
   }
});

//DELETE Project----------------------------------------------------------
router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Deleting Project ${id}` });
});

//PATCH Project----------------------------------------------------------
router.patch("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Updating Project ${id}` });
});

module.exports = router;
