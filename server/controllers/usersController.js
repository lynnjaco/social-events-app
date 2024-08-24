const express = require("express");
const { getAllUsers, showOneUser, showUserEvents, showUserFriends } = require("../queries/users");
const users = express.Router();

users.get("/", async (req, res) => {
    try {
        const listOfUsers = await getAllUsers()
            if (listOfUsers[0]) {
                res.status(200).json(listOfUsers)
            } else {
                res.status(404).json({error: "No users found"})
            }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
});

users.get("/:id", async(req, res) => {
    const {id} = req.params;
    const oneUser = await showOneUser(id);
    if (oneUser) {
        res.status(200).json(oneUser)
    } else {
        res.status(404).json({error: "Event not found"})
    }
})

users.get("/:id/events", async(req, res) => {
    const {id} = req.params;
    try {
        const userEvents = await showUserEvents(id);
        if (userEvents[0]) {
            res.status(200).json(userEvents)
        } else {
            res.status(404).json({error: "Event not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
});

users.get("/:id/friends", async(req, res) => {
    const {id} = req.params;
    try {
        const userFriends = await showUserFriends(id);
        if (userFriends[0]) {
            res.status(200).json(userFriends)
        } else {
            res.status(404).json({error: "Event not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
});

module.exports = users;