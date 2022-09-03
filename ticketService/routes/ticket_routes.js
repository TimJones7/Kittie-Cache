const express = require("express");

const {
   getTickets,
   getTicketById,
   createTicket,
   deleteTicket,
   updateTicket,
} = require("../crud/ticketCRUD");

const router = express.Router();

//Get All Tickets------------------------------------------------------
router.get("/", getTickets);

//Get Single Ticket----------------------------------------------------
router.get("/:id", getTicketById);

//POST New Ticket------------------------------------------------------
router.post("/", createTicket);

//DELETE Ticket--------------------------------------------------------
router.delete("/:id", deleteTicket);

//PATCH Ticket---------------------------------------------------------
router.patch("/:id", updateTicket);

module.exports = router;
