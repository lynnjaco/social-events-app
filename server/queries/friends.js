const db = require("../db/dbConfig");

const showUserFriendships = async(userId) => {
    const userFriends = await db.any(`SELECT 
         u1.id AS user_id1,
         u1.name AS user_name1,
         u2.id AS user_id2,
         u2.name AS user_name2,
         f.status AS friendship_status,
         f.created_at AS friendship_created_at
       FROM 
         Friendships f
       JOIN 
         Users u1 ON f.user_id1 = u1.id
       JOIN 
         Users u2 ON f.user_id2 = u2.id
       WHERE 
         f.user_id1 = $1 OR f.user_id2 = $1`, [userId])
         return userFriends;
};

const deleteFriendship = async(userId, friendId) => {
    const deletedFriendship = await db.none(`DELETE FROM Friendships WHERE (user_id1 = $1 AND user_id2 = $2) OR (user_id1 = $2 AND user_id2 = $1)`, [userId, friendId])
    return deletedFriendship;
}
module.exports = {showUserFriendships, deleteFriendship};