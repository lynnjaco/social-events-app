const express = require("express");
const friendship = express.Router(); 

const { deleteFriendship, createFriendship } = require("../queries/friends")

friendship.delete("/:userId/:friendId", async (req, res) => {
    const {userId, friendId} = req.params;
    try {
        const deletedFriendship = await deleteFriendship(userId, friendId);
        if (!deletedFriendship) {
            res.status(200).json({message: "Friendship deleted"})
        } else {
            res.status(404).json({error: "Friendship not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
});

friendship.post("/:userId/:friendId", async (req, res) => {
    const {userId, friendId} = req.params;
    try {
        const newFriendship = await createFriendship(userId, friendId);
        if (!newFriendship) {
            res.status(200).json({message: "Friendship created"})
        } else {
            res.status(404).json({error: "Friendship not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
});

module.exports = friendship;