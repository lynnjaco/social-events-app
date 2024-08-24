const db = require("../db/dbConfig");

const deleteFriendship = async(userId, friendId) => {
    const deletedFriendship = await db.none(`DELETE FROM Friendships WHERE (user_id1 = $1 AND user_id2 = $2) OR (user_id1 = $2 AND user_id2 = $1)`, [userId, friendId])
    return deletedFriendship;
}

const createFriendship = async (userId1, userId2) => {
    // Ensure user_id1 is less than user_id2 to satisfy the CHECK constraint
    if (userId1 > userId2) {
        [userId1, userId2] = [userId2, userId1];
    }

    const newFriendship = await db.none(
        `INSERT INTO Friendships (user_id1, user_id2) VALUES ($1, $2)`,
        [userId1, userId2]
    );
    return newFriendship;
}

module.exports = {deleteFriendship, createFriendship};

