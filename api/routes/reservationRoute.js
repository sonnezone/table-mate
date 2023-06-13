var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/day").model;
const Reservation = require("../models/reservation").model;


router.post("/", async (req, res, next) => {
  try {
    let days = await Day.find({ date: req.body.date });
    if (days.length > 0) {
      let day = days[0];
      day.tables.forEach(table => {
        if (table._id.toString() === req.body.table) {
          // The correct table is table
          table.reservation = new Reservation({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
          });
          table.isAvailable = false;
        }
      });

      try {
        await day.save();
        console.log("Reserved");
        res.status(200).send("Added Reservation");
      } catch (err) {
        console.log(err);
        res.status(500).send("Error saving day");
      }
    } else {
      console.log("Day not found");
      res.status(404).send("Day not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error finding day");
  }
});


module.exports = router;
