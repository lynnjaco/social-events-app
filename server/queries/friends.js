const db = require("../db/dbConfig");

const deleteFriendship = async(userId, friendId) => {
    const deletedFriendship = await db.none(`DELETE FROM Friendships WHERE (user_id1 = $1 AND user_id2 = $2) OR (user_id1 = $2 AND user_id2 = $1)`, [userId, friendId])
    return deletedFriendship;
}
module.exports = {deleteFriendship};