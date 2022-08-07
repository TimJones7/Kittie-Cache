const Ticket = require("../models/ticket");
const mongoose = require("mongoose");

//Get all----------------------------------------------------------
const getTickets = async (req, res) => {
   const tickets = await Ticket.find({});
   res.status(200).json(tickets);
};
//Get single----------------------------------------------------------
const getTicketById = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const ticket = await Ticket.findById(id);

   if (!ticket) {
      return res.status(404).json({ error: "No Such Ticket Exists!" });
   }

   res.status(200).json(ticket);
};

//Create new----------------------------------------------------------
const createTicket = async (req, res) => {
   const { title, details, createdBy, assignedTo, dueDate } = req.body;
   //Add Doc to DB
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
};

//Delete----------------------------------------------------------
const deleteTicket = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const ticket = await Ticket.findByIdAndDelete({ _id: id });

   if (!ticket) {
      return res.status(404).json({ error: "No Such Ticket Exists!" });
   }

   res.status(200).json(ticket);
};

//Update----------------------------------------------------------
const updateTicket = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "ID requst not valid!" });
   }

   const ticket = await Ticket.findByIdAndUpdate(
      { _id: id },
      {
         ...req.body,
      }
   );
   if (!ticket) {
      return res.status(404).json({ error: "No Such Ticket Exists!" });
   }

   res.status(200).json(ticket);
};

module.exports = {
   getTickets,
   getTicketById,
   createTicket,
   deleteTicket,
   updateTicket,
};
