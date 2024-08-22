const express = require("express");
const { getAllUsers, showOneUser} = require("../queries/users");
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



module.exports = users;