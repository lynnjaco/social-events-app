const express = require("express");
const friendship = express.Router(); 
const {showUserFriendships, deleteFriendship} = require("../queries/friends")

friendship.get("/:userId/", async (req, res) => {
    const {userId} = req.params;
    const userFriendships = await showUserFriendships(userId);
    try {
        if (userFriendships[0]) {
            res.status(200).json(userFriendships)
        } else {
            res.status(404).json({error: "User Friendship not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})

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

module.exports = friendship;