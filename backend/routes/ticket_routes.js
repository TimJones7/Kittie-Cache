const express = require("express");
const router = express.Router();

//Get All Tickets
router.get("/", (req, res) => {
   res.json({ mssg: "GET All Tickets!" });
});

//Get Single Ticket
router.get("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Getting single Ticket ${id}` });
});

//POST New Ticket
router.post("/", (req, res) => {
   res.json({ mssg: `Posting New Ticket` });
});

//DELETE Ticket
router.delete("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Deleting Ticket ${id}` });
});

//PATCH Ticket
router.patch("/:id", (req, res) => {
   const id = req.params.id;
   res.json({ mssg: `Updating New Ticket ${id}` });
});

module.exports = router;
