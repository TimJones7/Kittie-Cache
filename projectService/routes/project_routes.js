const express = require("express");

const {
   getProjects,
   getProjectById,
   createProject,
   deleteProject,
   updateProject,
} = require("../crud/projectCRUD");

const router = express.Router();

//Get All Projects-------------------------------------------------------
router.get("/", getProjects);

//Get Single Project-----------------------------------------------------
router.get("/:id", getProjectById);

//POST New Project-------------------------------------------------------
router.post("/", createProject);

//DELETE Project---------------------------------------------------------
router.delete("/:id", deleteProject);

//PATCH Project----------------------------------------------------------
router.patch("/:id", updateProject);

module.exports = router;
