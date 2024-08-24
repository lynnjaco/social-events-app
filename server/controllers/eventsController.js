const express = require("express")
const events = express.Router();
const {getAllEvents, showOneEvent, showEventAttendees} = require("../queries/events")


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

events.get("/:id", async(req, res) => {
    const {id} = req.params;
    const oneEvent = await showOneEvent(id);
    if (oneEvent) {
        res.status(200).json(oneEvent)
    } else {
        res.status(404).json({error: "Event not found"})
    }
})

events.get("/:id/attendees", async(req, res) => {
    const {id} = req.params;
    try {
        const eventAttendees = await showEventAttendees(id);
        if (eventAttendees[0]) {
            res.status(200).json(eventAttendees)
        } else {
            res.status(404).json({error: "Event not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
});

// events.post("/", async (req, res) => {
//     try {
//         const {name, description, image_url, date, time, location, capacity, organizer_name, organizer_phone} = req.body;
//     const newEvent = await createEvent(name, description, image_url, date, time, location, capacity, organizer_name, organizer_phone)
//         res.status(201).json(newEvent)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({error: "Internal server error"})
//     }
// })

module.exports = events;