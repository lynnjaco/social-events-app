const db = require("../db/dbConfig");

const getAllUsers = async () => {
    const users = await db.any("SELECT * FROM users");
    return users;
};

const showOneUser = async (id) => {
    const user = await db.one("SELECT * FROM users WHERE id = $1", id);
    return user;
};

const showUserEvents = async (userId) => {
    const userEvents = await db.any(
        `SELECT 
           ea.event_id,
           e.name AS event_name,
           ea.status,
           ea.created_at AS registration_date
         FROM 
           EventAttendees ea
         JOIN 
           Events e ON ea.event_id = e.id
         WHERE 
           ea.user_id = $1`, [userId]
      );
    return userEvents;
}

const showUserFriends = async(userId) => {
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
         f.user_id1 = $1 OR f.user_id2 = $1`, userId)
         return userFriends;
}

module.exports = {
    getAllUsers, showOneUser, showUserFriends, showUserEvents
};