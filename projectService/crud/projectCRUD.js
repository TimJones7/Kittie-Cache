const Project = require("../models/project");
const mongoose = require("mongoose");

//Get all----------------------------------------------------------
const getProjects = async (req, res) => {
   const projects = await Project.find({});
   res.status(200).json(projects);
};
//Get single----------------------------------------------------------
const getProjectById = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const project = await Project.findById(id);

   if (!project) {
      return res.status(404).json({ error: "No Such Project Exists!" });
   }

   res.status(200).json(project);
};

//Create new----------------------------------------------------------
const createProject = async (req, res) => {
   const { title, details, isPublic, goalCompletionDate } = req.body;
   //Add Doc to DB
   try {
      const project = await Project.create({
         title,
         details,
         isPublic,
         goalCompletionDate,
      });
      res.status(200).json(project);
   } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
   }
};

//Delete----------------------------------------------------------
const deleteProject = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const project = await Project.findByIdAndDelete({ _id: id });

   if (!project) {
      return res.status(404).json({ error: "No Such Project Exists!" });
   }

   res.status(200).json(project);
};

//Update----------------------------------------------------------
const updateProject = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const project = await Project.findByIdAndUpdate(
      { _id: id },
      {
         ...req.body,
      }
   );
   if (!project) {
      return res.status(404).json({ error: "No Such Project Exists!" });
   }

   res.status(200).json(project);
};

module.exports = {
   getProjects,
   getProjectById,
   createProject,
   deleteProject,
   updateProject,
};
