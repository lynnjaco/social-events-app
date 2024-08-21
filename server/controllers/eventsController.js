const express = require("express")
const events = express.Router();
const {getAllEvents} = require("../queries/events")


events.get("/", async (req, res) => {
    try {
        const listOfEvents = await getAllEvents()
            if (listOfEvents[0]) {
                res.status(200).json(listOfEvents)
            } else {
                res.status(404).json({error: "No events found"})
            }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
});

module.exports = events;