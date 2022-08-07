const express = require("express");
const Ticket = require("../models/ticket");
const router = express.Router();

//Get All Tickets----------------------------------------------------------
router.get("/", (req, res) => {
   res.json({ mssg: "GET All Tickets!" });
});

//Get Single Ticket----------------------------------------------------------
router.get("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Getting single Ticket ${id}` });
});

//POST New Ticket----------------------------------------------------------
router.post("/", async (req, res) => {
   const { title, details, createdBy, assignedTo, dueDate } = req.body;

   try {
      const ticket = await Ticket.create({
         title,
         details,
         createdBy,
         assignedTo,
         dueDate,
      });
      res.status(200).json(ticket);
   } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
   }
});

//DELETE Ticket----------------------------------------------------------
router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Deleting Ticket ${id}` });
});

//PATCH Ticket----------------------------------------------------------
router.patch("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Updating New Ticket ${id}` });
});

module.exports = router;
